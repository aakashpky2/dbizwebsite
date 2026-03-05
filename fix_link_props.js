
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
    let hasChanges = false;

    // Replace <Link ... to=... with <Link ... href=...
    // Simple regex for basic cases.
    if (content.includes('<Link') && content.includes('to=')) {
        const newContent = content.replace(/(<Link[^>]*)\sto=(["'{])/g, '$1 href=$2');
        if (newContent !== content) {
            content = newContent;
            hasChanges = true;
            console.log(`Fixed Link to->href in ${file}`);
        }
    }

    if (hasChanges) {
        fs.writeFileSync(file, content);
    }
});
