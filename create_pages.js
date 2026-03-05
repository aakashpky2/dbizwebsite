
const fs = require('fs');
const path = require('path');

const routes = JSON.parse(fs.readFileSync('routes.json', 'utf8'));

// Helper to ensure directory exists
const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

// Create pages
routes.forEach(route => {
    // Convert express-style path to next.js path
    // e.g., /admin/edit/:service -> /admin/edit/[service]
    let nextPath = route.path.replace(/:([a-zA-Z0-9_]+)/g, '[$1]');

    // Construct physical path
    const dirPath = path.join(__dirname, 'src/app', nextPath);
    ensureDir(dirPath);

    const pageFile = path.join(dirPath, 'page.tsx');

    // Decide import path (relative to src/app/...) is hard, so use alias @/pages/...
    const componentName = route.component;
    let importPath = `@/pages/${componentName}`;

    // Check if component is in a subdirectory (like Admin/AdminLogin)
    // We can try to find the file or just know it from the logic.
    // The provided json has ComponentName, we assume it's valid export default.
    // Actually, some components in routes.json might fail if I don't know the exact path.
    // I need to be smarter about import paths.
    // I'll search for the file in src/pages to get the correct import path.

    const findComponentPath = (comp) => {
        // Basic search in src/pages
        const pagesDir = path.join(__dirname, 'src/pages');
        if (fs.existsSync(path.join(pagesDir, `${comp}.tsx`))) return `@/pages/${comp}`;
        if (fs.existsSync(path.join(pagesDir, 'Admin', `${comp}.tsx`))) return `@/pages/Admin/${comp}`;
        if (fs.existsSync(path.join(pagesDir, 'LLP', `${comp}.tsx`))) return `@/pages/LLP/${comp}`;
        // Add more subdirs if needed
        return `@/pages/${comp}`; // Fallback
    };

    importPath = findComponentPath(componentName);

    const content = `
import ${componentName} from "${importPath}";

export default function Page() {
  return <${componentName} />;
}
`;

    if (!fs.existsSync(pageFile)) {
        console.log(`Creating ${pageFile}`);
        fs.writeFileSync(pageFile, content.trim());
    }
});

// Handle the catch-all dynamic routes manually or add to routes.json?
// The user has "/:service" and "/:service/:location".
// I should create src/app/[service]/page.tsx and src/app/[service]/[location]/page.tsx manually or specifically.

const dynamicRoutes = [
    { path: '/[service]', component: 'ServiceDetailPage' },
    { path: '/[service]/[location]', component: 'ServiceDetailPage' }
];

dynamicRoutes.forEach(route => {
    const dirPath = path.join(__dirname, 'src/app', route.path);
    ensureDir(dirPath);
    const pageFile = path.join(dirPath, 'page.tsx');
    const comp = route.component;
    const content = `
import ${comp} from "@/pages/${comp}";

export default function Page() {
  return <${comp} />;
}
`;
    if (!fs.existsSync(pageFile)) {
        console.log(`Creating dynamic ${pageFile}`);
        fs.writeFileSync(pageFile, content.trim());
    }
});

// Handle the explicit "location" routes for static pages
// e.g. /private-limited/:location
// I need to find all routes that have a corresponding /:location variant in App.tsx
// All the "location" routes in App.tsx map to the SAME component as the base route.
// So for every static route I created, I should also create a `[location]` subdirectory.

routes.forEach(route => {
    // skip admin routes or those with params already
    if (route.path.includes(':') || route.path.includes('admin')) return;

    const locationPath = path.join(__dirname, 'src/app', route.path, '[location]');
    ensureDir(locationPath);
    const pageFile = path.join(locationPath, 'page.tsx');

    const comp = route.component;
    // Resolve path again
    const findComponentPath = (comp) => {
        const pagesDir = path.join(__dirname, 'src/pages');
        if (fs.existsSync(path.join(pagesDir, `${comp}.tsx`))) return `@/pages/${comp}`;
        if (fs.existsSync(path.join(pagesDir, 'Admin', `${comp}.tsx`))) return `@/pages/Admin/${comp}`;
        if (fs.existsSync(path.join(pagesDir, 'LLP', `${comp}.tsx`))) return `@/pages/LLP/${comp}`;
        return `@/pages/${comp}`;
    };
    const importPath = findComponentPath(comp);

    const content = `
import ${comp} from "${importPath}";

export default function Page() {
  return <${comp} />;
}
`;
    if (!fs.existsSync(pageFile)) {
        console.log(`Creating location variant ${pageFile}`);
        fs.writeFileSync(pageFile, content.trim());
    }
});

