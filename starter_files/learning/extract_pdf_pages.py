import sys
from pypdf import PdfReader

def extract_text(pdf_path, start_page, num_pages):
    try:
        reader = PdfReader(pdf_path)
        total_pages = len(reader.pages)
        if start_page >= total_pages:
            print(f"Error: Start page {start_page} is out of range. Total pages: {total_pages}")
            return

        end_page = min(start_page + num_pages, total_pages)
        
        print(f"--- Extracting pages {start_page+1} to {end_page} (of {total_pages}) ---")
        
        text = ""
        for i in range(start_page, end_page):
            page = reader.pages[i]
            page_text = page.extract_text()
            text += f"\n--- Page {i+1} ---\n"
            text += page_text
            
        print(text)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf_pages.py <pdf_path> [start_page] [num_pages]")
        sys.exit(1)
        
    pdf_path = sys.argv[1]
    start_page = int(sys.argv[2]) - 1 if len(sys.argv) > 2 else 0 # User input 1-based, convert to 0-based
    if start_page < 0: start_page = 0
    num_pages = int(sys.argv[3]) if len(sys.argv) > 3 else 5
    
    extract_text(pdf_path, start_page, num_pages)
