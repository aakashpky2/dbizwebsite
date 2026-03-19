

import React from "react";
import { Helmet } from "react-helmet-async";


interface BreadcrumbItem {
    name: string;
    item: string;
}

interface LocalBusinessInfo {
    name: string;
    address?: string;
    city?: string;
    phone?: string;
    priceRange?: string;
}

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    publishDate?: string;
    modifiedDate?: string;
    author?: string;
    breadcrumbs?: BreadcrumbItem[];
    localBusiness?: LocalBusinessInfo;
}

/**
 * Advanced SEO Architecture: Zero-Gravity Metadata
 * Ensures weightless and omnipresent indexing across all search engines.
 */
const SEO: React.FC<SEOProps> = ({
    title = "DBIZ CONSULTANCY | Professional Business Consultancy",
    description = "DBIZ CONSULTANCY – Leading business consultancy in Kerala providing Business Registrations, GST services, Company compliances, Startup advisory, and Audit support.",
    keywords = "business consultancy kerala, company registration, gst registration, trademark filing, startup advisory india",
    image = "https://www.dbizsolutions.in/og-image.jpg",
    url = "https://www.dbizsolutions.in",
    type = "website",
    publishDate,
    modifiedDate,

    author = "DBIZ CONSULTANCY",
    breadcrumbs,
    localBusiness,
}) => {
    const siteTitle = title.includes("DBIZ") ? title : `${title} | DBIZ CONSULTANCY`;
    const canonicalUrl = url.startsWith("http") ? url : `https://www.dbizsolutions.in${url.startsWith("/") ? "" : "/"}${url}`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.dbizsolutions.in/#organization",
        "name": "DBIZ CONSULTANCY",
        "url": "https://www.dbizsolutions.in",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.dbizsolutions.in/logo.png",
            "width": 600,
            "height": 60
        },
        "sameAs": [
            "https://www.facebook.com/dbizconsultancy",
            "https://twitter.com/dbizconsultancy",
            "https://www.linkedin.com/company/dbizconsultancy",
            "https://www.instagram.com/dbizconsultancy"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8075273408",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "ml", "hi"]
        }
    };

    const localBusinessSchema = localBusiness ? {
        "@context": "https://schema.org",
        "@type": localBusiness.city === "Kochi" || localBusiness.city === "Thiruvananthapuram" ? "ProfessionalService" : "LocalBusiness",
        "name": localBusiness.name,
        "image": image,
        "@id": `${canonicalUrl}/#localbusiness`,
        "url": canonicalUrl,
        "telephone": localBusiness.phone || organizationSchema.contactPoint.telephone,
        "priceRange": localBusiness.priceRange || "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": localBusiness.address || "T.C.11/568, Plamoodu, Pattom",
            "addressLocality": localBusiness.city || "Thiruvananthapuram",
            "addressRegion": "Kerala",
            "postalCode": localBusiness.city === "Thiruvananthapuram" ? "695004" : (localBusiness.city === "Kochi" ? "682001" : ""),
            "addressCountry": "IN"
        },
        "geo": localBusiness.city === "Thiruvananthapuram" ? {
            "@type": "GeoCoordinates",
            "latitude": 8.5241,
            "longitude": 76.9366
        } : (localBusiness.city === "Kochi" ? {
            "@type": "GeoCoordinates",
            "latitude": 9.9312,
            "longitude": 76.2673
        } : undefined)
    } : null;

    const breadcrumbSchema = breadcrumbs ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.item.startsWith("http") ? crumb.item : `https://www.dbizsolutions.in${crumb.item}`
        }))
    } : null;

    const articleSchema = publishDate ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": siteTitle,
        "description": description,
        "image": image,
        "author": {
            "@type": "Organization",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "DBIZ CONSULTANCY",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.dbizsolutions.in/logo.png"
            }
        },
        "datePublished": publishDate,
        "dateModified": modifiedDate || publishDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        }
    } : null;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="DBIZ CONSULTANCY" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Dates for SEO */}
            {publishDate && <meta property="article:published_time" content={publishDate} />}
            {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            {localBusinessSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
            )}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}

            {/* Architecture Optimization: Preconnect to critical domains */}
            <link rel="preconnect" href="https://images.unsplash.com" />
            <link rel="dns-prefetch" href="https://images.unsplash.com" />
        </Helmet>
    );
};

export default SEO;
