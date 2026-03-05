import LlpRegistrationPage from "@/pages/LlpRegistrationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "LLP Registration in India | D BIZ CONSULTANCY",
    description: "Register your Limited Liability Partnership (LLP) in India with D BIZ CONSULTANCY. Expert assistance for comprehensive compliance, FiLLiP-based incorporation, and LLP agreement filing.",
    keywords: "LLP Registration, Limited Liability Partnership India, LLP vs Private Limited, LLP Registration online, D Biz Consultancy LLP",
    openGraph: {
        title: "LLP Registration in India | D BIZ CONSULTANCY",
        description: "Start your professional service or closely held venture with a Limited Liability Partnership (LLP). Enjoy limited liability and flexible profit-sharing with expert registration services from D BIZ CONSULTANCY.",
        url: "https://dbiz.com/llp-registration",
        type: "website",
        siteName: "D BIZ CONSULTANCY",
    },
    alternates: {
        canonical: "https://dbiz.com/llp-registration",
    }
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://dbiz.com/llp-registration/#service",
                "name": "LLP Registration Service",
                "provider": {
                    "@type": "LegalService",
                    "name": "D BIZ CONSULTANCY",
                    "image": "https://dbiz.com/logo.png",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "India",
                        "addressCountry": "IN"
                    }
                },
                "description": "Professional assistance for incorporating a Limited Liability Partnership in India. Expert support across documentation, filing, and business commencement.",
                "areaServed": {
                    "@type": "Country",
                    "name": "India"
                },
                "serviceType": "Company Registration"
            },
            {
                "@type": "FAQPage",
                "@id": "https://dbiz.com/llp-registration/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is LLP registration in India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "LLP registration is the incorporation of an LLP under the LLP Act, 2008 (a registered partnership under that Act), creating a body corporate with separate legal identity and perpetual succession."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many partners and designated partners are required?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Minimum 2 partners and minimum 2 designated partners (individuals), with at least one resident in India."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there any minimum paid-up capital in LLP?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "LLPs do not have paid-up share capital; they operate on partner contributions (money/property/services) as agreed, recorded, and disclosed."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <LlpRegistrationPage />
        </>
    );
}
