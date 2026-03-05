import type { Metadata } from 'next';
import EnhancedPublicLimitedPage from "@/pages/PublicLimitedPage";
import { faqData } from "@/data/publicLimitedFaq";

export const metadata: Metadata = {
    title: "Public Limited Company Registration in India | D BIZ CONSULTANCY",
    description: "Establish your Public Limited Company in India with D BIZ CONSULTANCY. We handle the complex incorporation process for 7+ members and 3+ directors, ensuring statutory compliance for large-scale operations.",
    keywords: ["public limited company registration", "incorporate public limited", "PLC registration india", "public company incorporation", "business scaling india"],
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://dbiz.com/public-company",
        title: "Public Limited Company Registration | D BIZ CONSULTANCY",
        description: "Expert assistance for Public Limited Company Incorporation in India. Minimum 7 members, 3 directors. High transparency and IPO readiness.",
        siteName: "D BIZ CONSULTANCY",
    }
};

export default function Page() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Public Limited Company Registration",
        "provider": {
            "@type": "Organization",
            "name": "D BIZ CONSULTANCY",
            "url": "https://dbiz.com"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "description": "Professional Public Limited Company registration service in India including DIN, DSC, MOA, AOA, and regulatory compliance guidance.",
        "offers": {
            "@type": "Offer",
            "price": "14999", // Adjusted price for public company as it's more complex
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <EnhancedPublicLimitedPage />
        </>
    );
}
