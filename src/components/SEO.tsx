
import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

/**
 * Advanced SEO Architecture: Zero-Gravity Metadata
 * Ensures weightless and omnipresent indexing across all search engines.
 */
const SEO: React.FC<SEOProps> = ({
    title = "D BIZ CONSULTANCY | Professional Business Consultancy",
    description = "Leading business consultancy in Kerala providing Business Registrations, GST services, Company compliances, Startup advisory, and Audit support.",
    keywords = "business consultancy kerala, company registration, gst registration, trademark filing, startup advisory india",
    image = "/og-image.png",
    url = "https://www.dbizsolutions.in",
    type = "website",
}) => {
    const siteTitle = title.includes("D BIZ") ? title : `${title} | D BIZ CONSULTANCY`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Architecture Optimization: Preconnect to critical domains */}
            <link rel="preconnect" href="https://images.unsplash.com" />
            <link rel="dns-prefetch" href="https://images.unsplash.com" />
        </Helmet>
    );
};

export default SEO;
