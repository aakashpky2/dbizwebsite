import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.dbizsolutions.in';

const routes = [
    '/',
    '/private-limited',
    '/llp',
    '/one-person-company',
    '/nidhi-company',
    '/producer-company',
    '/nbfc',
    '/partnership',
    '/sole-proprietorship',
    '/12a-80g-registration',
    '/digital-signature',
    '/tools',
    '/gst-registration',
    '/startup-registration',
    '/udyam-msme-registration',
    '/iso-certification',
    '/fssai-registration',
    '/iec-registration',
    '/trade-license',
    '/drug-license',
    '/shop-establishment',
    '/trademark-registration',
    '/patent-registration',
    '/copyright-registration',
    '/tds-filings',
    '/gst-filings',
    '/income-tax-filing',

    '/mca-compliance',
    '/about',
    '/contact',
    '/privacy-policy',
];

const indianCities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", 
  "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Kochi", "Thiruvananthapuram", 
  "Gurgaon", "Noida", "Coimbatore", "Indore", "Nagpur", "Bhubaneswar", "Visakhapatnam", 
  "Surat", "Vadodara", "Patna", "Guwahati", "Bhopal", "Ludhiana", "Kozhikode", 
  "Thrissur", "Mangalore", "Mysore", "Raipur", "Ranchi", "Dehradun", "Varanasi", 
  "Agra", "Kanpur", "Allahabad"
];

function generateSitemap() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    const now = new Date().toISOString();

    let count = 0;

    // Add main routes
    routes.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${route}</loc>\n`;
        xml += `    <lastmod>${now}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += '    <priority>0.8</priority>\n';
        xml += '  </url>\n';
        count++;

        // Add city routes for each service (except home and tools)
        if (route !== '/' && route !== '/tools' && !route.startsWith('/admin')) {
            indianCities.forEach(city => {
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                xml += '  <url>\n';
                xml += `    <loc>${BASE_URL}${route}/${citySlug}</loc>\n`;

                xml += `    <lastmod>${now}</lastmod>\n`;
                xml += '    <changefreq>weekly</changefreq>\n';
                xml += '    <priority>0.7</priority>\n';
                xml += '  </url>\n';
                count++;
            });
        }
    });

    xml += '</urlset>';

    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    console.log(`Sitemap generated with ${count} URLs at ${sitemapPath}`);
}

generateSitemap();
