import ProducerCompanyPage from "@/pages/ProducerCompanyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producer Company Registration in India | D BIZ CONSULTANCY",
  description: "Register a Producer Company in India with D BIZ CONSULTANCY. We help farmers and artisans incorporate with complete compliance including equity setups, NDH-4 equivalencies, and direct tax consulting.",
  keywords: "Producer Company Registration, Producer Company incorporation, primary producers company, farmer producer company, D Biz Consultancy Producer Company registration",
  openGraph: {
    title: "Producer Company Registration in India | D BIZ CONSULTANCY",
    description: "Launch your Producer Company to collectively process, market, and finance agricultural/artisan activities with limited liability protection.",
    url: "https://dbiz.com/producer-company",
    type: "website",
    siteName: "D BIZ CONSULTANCY",
  },
  alternates: {
    canonical: "https://dbiz.com/producer-company",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dbiz.com/producer-company/#service",
        "name": "Producer Company Registration Service",
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
        "description": "Professional registration and incorporation services for Producer Companies in India. Full assistance with SPICe+, active-member structuring, and agriculture tax consulting.",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Company Registration"
      },
      {
        "@type": "FAQPage",
        "@id": "https://dbiz.com/producer-company/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is “Producer Company registration” in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is incorporation of a Producer Company under Companies Act, 2013 Chapter XXIA, enabling primary producers to operate as a company with producer-centric governance, equity-only capital, and limited liability."
            }
          },
          {
            "@type": "Question",
            "name": "Who can form a Producer Company?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any 10+ individual producers, or 2+ Producer Institutions, or a permitted combination can incorporate a Producer Company."
            }
          },
          {
            "@type": "Question",
            "name": "Can a Producer Company issue preference shares?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Producer Company share capital must consist of equity shares only."
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
      <ProducerCompanyPage />
    </>
  );
}