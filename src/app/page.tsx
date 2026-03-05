import type { Metadata } from "next";
import Index from "@/pages/Index";

export const metadata: Metadata = {
    title: "D BIZ CONSULTANCY - Professional Business Consultancy",
    description: "Your trusted partner for business registration, company incorporation, compliance management, and strategic growth consulting in India.",
    keywords: ["business consultancy", "company registration", "private limited", "LLP", "GST registration", "startup india", "compliance"],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://dbiz.com",
        title: "D BIZ CONSULTANCY - Start, Grow, and Manage Your Business",
        description: "Expert business consultancy services for startups and established enterprises. From incorporation to compliance, we handle it all.",
        siteName: "D BIZ CONSULTANCY",
    },
};

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "D BIZ CONSULTANCY",
        "url": "https://dbiz.com",
        "logo": "https://dbiz.com/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+918075273408",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/dbizsolutions",
            "https://www.instagram.com/dbizsolutions",
            "https://www.linkedin.com/company/dbizsolutions"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Index />
        </>
    );
}
