import NbfcRegistrationPage from "@/pages/NbfcRegistrationPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NBFC Registration in India | D BIZ CONSULTANCY",
  description: "Register a Non-Banking Financial Company (NBFC) in India with D BIZ CONSULTANCY. We provide RBI-approved compliance consulting and full setup assistance.",
  keywords: "NBFC Registration, NBFC formation, RBI NBFC registration, Non-Banking Financial Company setup, D Biz Consultancy NBFC, ND/D NBFC incorporation",
  openGraph: {
    title: "NBFC Registration in India | D BIZ CONSULTANCY",
    description: "Expert setup and RBI compliance for Non-Banking Financial Companies in India. Start your financial institution today.",
    url: "https://dbiz.com/nbfc",
    type: "website",
    siteName: "D BIZ CONSULTANCY",
  },
  alternates: {
    canonical: "https://dbiz.com/nbfc",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dbiz.com/nbfc/#service",
        "name": "NBFC Registration Service",
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
        "description": "Professional registration and incorporation services for NBFCs in India, including RBI Form A preparation and CoR acquisition.",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Company Registration"
      },
      {
        "@type": "FAQPage",
        "@id": "https://dbiz.com/nbfc/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What qualifies a company as an NBFC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Per RBI Act Section 45-I, an NBFC is a company whose principal business is lending, investment in securities, or related financial services. It must register with RBI (net-owned fund requirements) and get a CoR before commencing business."
            }
          },
          {
            "@type": "Question",
            "name": "Is there minimum capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes – RBI requires a minimum Net Owned Fund (NOF). The RBI Act permits it to set the amount (≤₹100 Cr). Practically, RBI raised it to ₹2 Cr (2019) and certain NBFCs to ₹10 Cr (Oct 2022)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I start business immediately after incorporation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No – as per RBI Act 45-IA, you must not commence NBFC activities (lending, accepting deposits, etc.) without RBI’s CoR. Non-compliance is punishable."
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
      <NbfcRegistrationPage />
    </>
  );
}