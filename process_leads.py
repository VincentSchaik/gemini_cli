import pandas as pd
import glob
import os
import re

def validate_email(email):
    if pd.isna(email) or not isinstance(email, str):
        return False
    # Simple regex for email validation
    return bool(re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email))

def process_leads(input_dir, output_file):
    all_files = glob.glob(os.path.join(input_dir, "*.csv"))
    
    if not all_files:
        print(f"No CSV files found in {input_dir}")
        return

    # Load all data
    df_list = []
    for filename in all_files:
        df = pd.read_csv(filename)
        df_list.append(df)
    
    df = pd.concat(df_list, ignore_index=True)
    total_raw_records = len(df)
    
    # 4. Validate
    invalid_mask = df['Email'].apply(lambda x: not validate_email(x))
    invalid_count = invalid_mask.sum()
    df = df[~invalid_mask].copy()
    
    # Convert Timestamp to datetime for sorting
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])
    
    # Sort by Timestamp to help with "most recent" requirement
    df = df.sort_values('Timestamp', ascending=False)
    
    # 1, 2, 3. Consolidate & Deduplicate & Aggregate
    # We'll group by Email and then apply custom aggregation
    
    def aggregate_leads(group):
        # Most recent record (first after sorting by Timestamp)
        most_recent = group.iloc[0]
        
        # Aggregate Session IDs
        session_ids = ";".join(sorted(list(set(group['Session ID'].dropna().astype(str)))))
        
        # Append Notes
        notes = " | ".join(group['Notes'].dropna().astype(str))
        
        # Highest Lead Score
        highest_score = group['Lead Score'].max()
        
        return pd.Series({
            'First Name': most_recent['First Name'],
            'Last Name': most_recent['Last Name'],
            'Title': most_recent['Title'],
            'Company': most_recent['Company'],
            'Phone': most_recent['Phone'],
            'Address': most_recent['Address'],
            'City': most_recent['City'],
            'State': most_recent['State'],
            'Postal Code': most_recent['Postal Code'],
            'Country': most_recent['Country'],
            'Lead Score': highest_score,
            'Session IDs': session_ids,
            'Notes': notes,
            'Most Recent Timestamp': most_recent['Timestamp']
        })

    unique_leads = df.groupby('Email').apply(aggregate_leads).reset_index()
    
    # 5. Score & Segment
    def segment_lead(score):
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
    
    return unique_leads

if __name__ == "__main__":
    process_leads('starter_files/data-analysis/lead-scan', 'cleaned_leads.csv')
