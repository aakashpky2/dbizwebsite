import os
import re

files = [
    r"D:\dbizwebsite-1da7caed-main\src\pages\PrivateLimitedPage.tsx",
    r"D:\dbizwebsite-1da7caed-main\src\pages\PublicLimitedPage.tsx",
    r"D:\dbizwebsite-1da7caed-main\src\pages\LlpRegistrationPage.tsx",
    r"D:\dbizwebsite-1da7caed-main\src\pages\AnnualCompliancePage.tsx"
]

# Regex to match the D BIZ Advantage block
# It looks for the div with bg-dbiz-teal/5 and captures until the closing div of that block
pattern = re.compile(r'<div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">.*?</div>\s+</div>', re.DOTALL)

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove the block
        # Note: We need to be careful with the nesting. The block is usually:
        # <div className="mt-auto bg-dbiz-teal/5 ...">
        #   <div className="flex items-start">
        #     ...
        #   </div>
        # </div>
        
        new_content = re.sub(r'<div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">.*?</div>\s+</div>', '{/* Removed D BIZ Advantage block */}', content, flags=re.DOTALL)
        
        # Check if REMOVED is present (from my previous half-edits)
        new_content = re.sub(r'<div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">.*?REMOVED.*?</div>\s+</div>', '{/* Removed D BIZ Advantage block */}', new_content, flags=re.DOTALL)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Processed {file_path}")
