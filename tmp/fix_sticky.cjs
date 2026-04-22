const fs = require('fs');
const path = require('path');

const directory = 'src/pages';
const files = fs.readdirSync(directory);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(directory, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Fix sticky positioning and remove animations
    const stickyRegex = /<section className="sticky top-16([^"]*)"/g;
    if (stickyRegex.test(content)) {
      content = content.replace(stickyRegex, (match, p1) => {
        let classes = p1;
        classes = classes.replace(/\s*animate-on-scroll-big/g, '');
        classes = classes.replace(/\s*animate-on-scroll/g, '');
        return `<section className="sticky top-[70px] lg:top-[90px]${classes}"`;
      });
      modified = true;
    }

    // 2. Handle previously adjusted sticky sections
    const manualStickyRegex = /<section className="sticky top-\[70px\] lg:top-\[90px\]([^"]*)"/g;
    if (manualStickyRegex.test(content)) {
      content = content.replace(manualStickyRegex, (match, p1) => {
        let classes = p1;
        classes = classes.replace(/\s*animate-on-scroll-big/g, '');
        classes = classes.replace(/\s*animate-on-scroll/g, '');
        return `<section className="sticky top-[70px] lg:top-[90px]${classes}"`;
      });
      modified = true;
    }
    
    // 3. Update headerOffset to 160
    const offsetRegex = /const headerOffset = \d+;/g;
    if (offsetRegex.test(content)) {
      content = content.replace(offsetRegex, 'const headerOffset = 160;');
      modified = true;
    }

    // 4. Remove overflow-x-hidden from main wrapper to allow sticky to work
    const wrapperRegex = /<div className="min-h-screen flex flex-col overflow-x-hidden">/g;
    if (wrapperRegex.test(content)) {
      content = content.replace(wrapperRegex, '<div className="min-h-screen flex flex-col">');
      modified = true;
    }
    
    if (modified) {
      console.log(`Updating ${file}...`);
      fs.writeFileSync(filePath, content);
    }
  }
});
