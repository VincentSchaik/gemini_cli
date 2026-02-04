from flask import Flask, render_template, jsonify
import pandas as pd
import os

app = Flask(__name__)

# Path to the cleaned data
DATA_FILE = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'crm_import_ready.csv'))

def get_data():
    if not os.path.exists(DATA_FILE):
        return pd.DataFrame() # Return empty if file not found
    return pd.read_csv(DATA_FILE)

@app.route('/')
def index():
    return render_template('dashboard.html')

@app.route('/api/stats')
def stats():
    df = get_data()
    if df.empty:
        return jsonify({})

    # Key Metrics
    total_leads = len(df)
    hot_leads = len(df[df['Priority_Segment'] == 'Hot'])
    warm_leads = len(df[df['Priority_Segment'] == 'Warm'])
    cold_leads = len(df[df['Priority_Segment'] == 'Cold'])

    # Segment Breakdown
    segment_counts = df['Priority_Segment'].value_counts().to_dict()

    # Top 5 Companies
    top_companies = df['Company'].value_counts().head(5).to_dict()
    
    # Top 5 Countries
    top_countries = df['Country'].value_counts().head(5).to_dict()

    return jsonify({
        'total': total_leads,
        'hot': hot_leads,
        'warm': warm_leads,
        'cold': cold_leads,
        'segments': segment_counts,
        'companies': top_companies,
        'countries': top_countries
    })

@app.route('/api/leads')
def leads():
    df = get_data()
    if df.empty:
        return jsonify([])
    
    # Return a subset of fields for the table
    subset = df[['First Name', 'Last Name', 'Title', 'Company', 'Email', 'Priority_Segment', 'Country']].fillna('')
    return jsonify(subset.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(debug=True, port=5001)
