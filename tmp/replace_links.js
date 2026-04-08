const fs = require('fs');
const path = require('path');

const dir = path.join('d:\\dbizwebsite-1da7caed-main', 'src', 'pages');

if (!fs.existsSync(dir)) {
  console.log("Directory not found:", dir);
  process.exit(1);
}

const files = fs.readdirSync(dir);
let filesChanged = 0;

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace <div ... onClick={() => handleSectionClick('overview')}> ... </div>
    // with <a href="#overview" ... onClick={(e) => { e.preventDefault(); handleSectionClick('overview'); }}> ... </a>
    const regex = /<div([^>]*)([ \n\t]*onClick=\{?\(\) => handleSectionClick\('overview'\)\}?)([^>]*)>([\s\S]*?)<\/div>/g;
    
    if (regex.test(content)) {
      content = content.replace(regex, (match, p1, p2, p3, p4) => {
        const newOnClick = ` onClick={(e) => { e.preventDefault(); handleSectionClick('overview'); }}`;
        return `<a href="#overview"${p1}${newOnClick}${p3}>${p4}</a>`;
      });
      fs.writeFileSync(fullPath, content);
      console.log('Updated', file);
      filesChanged++;
    }
  }
});
console.log('Total files changed: ' + filesChanged);
