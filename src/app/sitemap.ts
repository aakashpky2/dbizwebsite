import { MetadataRoute } from 'next';
import { allServicesContent } from '@/data/serviceContent';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dbiz.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/private-limited', // Explicitly listing important pages if needed, but it's also in services?
        // Check if private-limited is in allServicesContent. Yes it is.
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes from content
    const serviceRoutes = Object.keys(allServicesContent).map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Deduplicate routes (e.g. if private-limited is in both)
    const allRoutes = [...routes, ...serviceRoutes];
    const uniqueRoutes = Array.from(new Map(allRoutes.map(item => [item.url, item])).values());

    return uniqueRoutes;
}
