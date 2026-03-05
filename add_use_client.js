
const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = fs.statSync(dirFile).isDirectory()
                ? walkSync(dirFile, filelist)
                : filelist.concat(dirFile);
        } catch (err) {
            if (err.code === 'EBUSY' || err.code === 'EPERM') return;
            throw err;
        }
    });
    return filelist;
};

const srcDir = path.join(__dirname, 'src');
const files = walkSync(srcDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Check for hooks usage
    const usesHooks = /use(State|Effect|Context|Reducer|Ref|LayoutEffect|Memo|Callback|rhook|Router|Pathname|Params)/.test(content);
    // Check for specific UI libraries that might need client
    const usesFramer = content.includes('framer-motion');
    const usesEvents = /on[A-Z][a-zA-Z]+=\{/.test(content); // e.g. onClick={...}

    if ((usesHooks || usesFramer || usesEvents) && !content.includes('"use client"') && !content.includes("'use client'")) {
        console.log(`Adding "use client" to ${file}`);
        const newContent = '"use client";\n\n' + content;
        fs.writeFileSync(file, newContent);
    }
});
