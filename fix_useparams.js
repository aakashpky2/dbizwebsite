
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

    // Pattern 1: const { var } = useParams<...>();
    // We want to replace it with:
    // const params = useParams();
    // const var = params?.var as string;

    // Regex: const\s+\{\s*(\w+)\s*\}\s*=\s*useParams<[^>]+>\(\);
    const regex = /const\s+\{\s*(\w+)\s*\}\s*=\s*useParams<[^>]+>\(\);/g;

    if (regex.test(content)) {
        content = content.replace(regex, (match, varName) => {
            return `const params = useParams();\n  const ${varName} = params?.${varName} as string;`;
        });
        hasChanges = true;
    }

    // Pattern 2: const { var1, var2 } = useParams<...>();
    const regex2 = /const\s+\{\s*(\w+)\s*,\s*(\w+)\s*\}\s*=\s*useParams<[^>]+>\(\);/g;
    if (regex2.test(content)) {
        content = content.replace(regex2, (match, var1, var2) => {
            return `const params = useParams();\n  const ${var1} = params?.${var1} as string;\n  const ${var2} = params?.${var2} as string;`;
        });
        hasChanges = true;
    }

    // Pattern 3: useParams() without generic but with destructuring might also need null check if strict
    // But let's stick to fixing the ones with generics first as they definitely fail TS.

    // Pattern 4: const { location } = useParams(); (without generic) - might fail if null
    // The error showed "does not exist on type 'Params | null'".
    // So we should fix non-generic destructuring too?
    // Regex: const\s+\{\s*(\w+)\s*\}\s*=\s*useParams\(\);
    const regex3 = /const\s+\{\s*(\w+)\s*\}\s*=\s*useParams\(\);/g;
    if (regex3.test(content)) {
        content = content.replace(regex3, (match, varName) => {
            // Check if we already replaced it (to avoid double replacement if regex overlaps? No, regex1 handles generic, regex3 handles non-generic)
            return `const params = useParams();\n  const ${varName} = params?.${varName} as string;`;
        });
        hasChanges = true;
    }

    if (hasChanges) {
        console.log(`Fixed useParams in ${file}`);
        fs.writeFileSync(file, content);
    }
});
