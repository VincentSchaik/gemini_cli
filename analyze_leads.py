import pandas as pd
from collections import Counter

def analyze_leads(file_path):
    df = pd.read_csv(file_path)
    
    # Core Metrics
    total_leads = len(df)
    segment_breakdown = df['Priority_Segment'].value_counts().to_dict()
    
    # Top Demographics
    top_companies = df['Company'].value_counts().head(5).to_dict()
    top_titles = df['Title'].value_counts().head(5).to_dict()
    top_countries = df['Country'].value_counts().head(5).to_dict()
    
    # Session Analysis
    all_sessions = []
    hot_sessions = []
    
    for _, row in df.iterrows():
        if pd.notna(row['Session IDs']):
            sessions = str(row['Session IDs']).split(';')
            all_sessions.extend(sessions)
            if row['Priority_Segment'] == 'Hot':
                hot_sessions.extend(sessions)
                
    top_sessions = dict(Counter(all_sessions).most_common(5))
    top_hot_sessions = dict(Counter(hot_sessions).most_common(5))
    
    # Notes Analysis (Simple Keyword Search)
    notes_text = " ".join(df['Notes'].dropna().astype(str).tolist()).lower()
    keywords = ['migration', 'pricing', 'security', 'kubernetes', 'cloud', 'latency', 'scale']
    keyword_counts = {k: notes_text.count(k) for k in keywords}
    
    print("--- ANALYSIS START ---")
    print(f"Total Leads: {total_leads}")
    print(f"Segment Breakdown: {segment_breakdown}")
    print(f"Top Companies: {top_companies}")
    print(f"Top Titles: {top_titles}")
    print(f"Top Countries: {top_countries}")
    print(f"Top Sessions (All): {top_sessions}")
    print(f"Top Sessions (Hot Leads): {top_hot_sessions}")
    print(f"Keyword Trends in Notes: {keyword_counts}")
    print("--- ANALYSIS END ---")

if __name__ == "__main__":
    analyze_leads('crm_import_ready.csv')
