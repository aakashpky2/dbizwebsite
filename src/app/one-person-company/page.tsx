import EnhancedOnePersonCompanyPage from "@/pages/OnePersonCompanyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Person Company Registration | OPC Incorporation - D BIZ CONSULTANCY",
  description: "Register your One Person Company (OPC) in India with D BIZ CONSULTANCY. Expert assistance for single founders, 100% compliance, and fast incorporation. Protect personal assets with limited liability.",
  keywords: "One Person Company Registration, OPC format in India, solitary founder company registration, OPC vs private limited, single owner company incorporation, D Biz Consultancy OPC",
  openGraph: {
    title: "One Person Company Registration | OPC Incorporation in India",
    description: "Start your solo entrepreneurial journey with a One Person Company. Enjoy limited liability and corporate status with expert registration services from D BIZ CONSULTANCY.",
    url: "https://dbiz.com/one-person-company",
    type: "website",
    siteName: "D BIZ CONSULTANCY",
  },
  alternates: {
    canonical: "https://dbiz.com/one-person-company",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dbiz.com/one-person-company/#service",
        "name": "One Person Company (OPC) Registration Form",
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
        "description": "Professional assistance for incorporating a One Person Company in India. Expert support for solitary founders across documentation, filing, and business commencement.",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Company Registration"
      },
      {
        "@type": "FAQPage",
        "@id": "https://dbiz.com/one-person-company/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who can incorporate an OPC in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only a natural person who is an Indian citizen, whether resident in India or otherwise (NRIs are now eligible post-2021 amendments), can incorporate an OPC and be its sole member or nominee."
            }
          },
          {
            "@type": "Question",
            "name": "Do I physically need to visit an office to register my OPC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The entire process via the MCA's SPICe+ portal is digital. D BIZ CONSULTANCY facilitates document collection, DSC procurement, and application filing online."
            }
          },
          {
            "@type": "Question",
            "name": "Can an OPC convert to a Private Limited Company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. An OPC can voluntarily convert into a Private or Public Limited Company at any point without waiting for any mandatory threshold (the earlier ₹50 Lakhs capital / ₹2 Cr turnover threshold restriction was abolished)."
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
      <EnhancedOnePersonCompanyPage />
    </>
  );
}