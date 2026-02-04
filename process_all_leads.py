import pandas as pd
import glob
import os
import re

def validate_email(email):
    if pd.isna(email) or not isinstance(email, str):
        return False
    # Simple regex for email validation
    return bool(re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email))

def process_leads():
    # Define input directories
    local_scan_dir = 'starter_files/data-analysis/lead-scan'
    google_sheets_dir = 'materials/Google_Sheets'
    output_file = 'crm_import_ready.csv'

    all_files = []
    
    # Gather files from local scan directory
    local_files = glob.glob(os.path.join(local_scan_dir, "*.csv"))
    if local_files:
        print(f"Found {len(local_files)} files in {local_scan_dir}")
        all_files.extend(local_files)
    else:
        print(f"No files found in {local_scan_dir}")

    # Gather files from materials/Google_Sheets directory
    sheet_files = glob.glob(os.path.join(google_sheets_dir, "*.csv"))
    if sheet_files:
        print(f"Found {len(sheet_files)} files in {google_sheets_dir}")
        all_files.extend(sheet_files)
    else:
        print(f"No files found in {google_sheets_dir}")

    if not all_files:
        print("No CSV files found in either directory.")
        return

    # Load all data
    df_list = []
    for filename in all_files:
        try:
            df = pd.read_csv(filename)
            # Normalize column names if necessary (optional, based on file inspection)
            # Assuming schema is consistent based on previous checks
            df_list.append(df)
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    
    if not df_list:
        print("No valid data loaded.")
        return

    df = pd.concat(df_list, ignore_index=True)
    total_raw_records = len(df)
    
    # 4. Validate
    # Ensure 'Email' column exists
    if 'Email' not in df.columns:
        print("Error: 'Email' column missing from dataset.")
        return

    invalid_mask = df['Email'].apply(lambda x: not validate_email(x))
    invalid_count = invalid_mask.sum()
    df = df[~invalid_mask].copy()
    
    # Convert Timestamp to datetime for sorting
    # Handle potential different timestamp formats or missing timestamps
    if 'Timestamp' in df.columns:
        df['Timestamp'] = pd.to_datetime(df['Timestamp'], errors='coerce')
    else:
        # If timestamp is missing, create a dummy one or handle appropriately
        # For now, let's assume it exists as per previous file reads
        pass
    
    # Sort by Timestamp to help with "most recent" requirement
    df = df.sort_values('Timestamp', ascending=False)
    
    # 1, 2, 3. Consolidate & Deduplicate & Aggregate
    # We'll group by Email and then apply custom aggregation
    
    def aggregate_leads(group):
        # Most recent record (first after sorting by Timestamp)
        most_recent = group.iloc[0]
        email = group.name # The index of the group is the Email
        
        # Aggregate Session IDs
        session_ids = []
        if 'Session ID' in group.columns:
             session_ids = sorted(list(set(group['Session ID'].dropna().astype(str))))
        
        # Append Notes
        notes = []
        if 'Notes' in group.columns:
            notes = group['Notes'].dropna().astype(str).tolist()
        
        # Highest Lead Score
        highest_score = 0
        if 'Lead Score' in group.columns:
            highest_score = group['Lead Score'].max()
        
        # Helper to safely get value
        def get_val(col):
            return most_recent[col] if col in most_recent.index else None

        return pd.Series({
            'First Name': get_val('First Name'),
            'Last Name': get_val('Last Name'),
            'Title': get_val('Title'),
            'Company': get_val('Company'),
            'Email': email,
            'Phone': get_val('Phone'),
            'Address': get_val('Address'),
            'City': get_val('City'),
            'State': get_val('State'),
            'Postal Code': get_val('Postal Code'),
            'Country': get_val('Country'),
            'Lead Score': highest_score,
            'Session IDs': ";".join(session_ids),
            'Notes': " | ".join(notes),
            'Most Recent Timestamp': get_val('Timestamp')
        })

    unique_leads = df.groupby('Email', sort=False).apply(aggregate_leads).reset_index(drop=True)
    
    # 5. Score & Segment
    def segment_lead(score):
        if pd.isna(score): return 'Cold'
        if score > 75:
            return 'Hot'
        elif score >= 40:
            return 'Warm'
        else:
            return 'Cold'
            
    unique_leads['Priority_Segment'] = unique_leads['Lead Score'].apply(segment_lead)
    
    # Save result
    unique_leads.to_csv(output_file, index=False)
    
    # Report metrics
    print(f"Total Raw Records: {total_raw_records}")
    print(f"Invalid Records Dropped: {invalid_count}")
    print(f"Unique Leads: {len(unique_leads)}")
    print(f"Segmentation Breakdown:")
    print(unique_leads['Priority_Segment'].value_counts())
    print(f"Saved cleaned data to {output_file}")

if __name__ == "__main__":
    process_leads()
