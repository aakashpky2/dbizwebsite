import NidhiCompanyPage from "@/pages/NidhiCompanyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nidhi Company Registration in India | D BIZ CONSULTANCY",
  description: "Register your Nidhi Company in India with D BIZ CONSULTANCY. We provide start-to-finish guidance for NDH-4 compliance, member onboarding strategies, and filing requirements.",
  keywords: "Nidhi Company Registration, Nidhi Company formation, Nidhi Company in India, D Biz Consultancy Nidhi, NDH-4 declaration, mutual benefit company registration",
  openGraph: {
    title: "Nidhi Company Registration in India | D BIZ CONSULTANCY",
    description: "Start a community-based savings and credit entity through a Nidhi Company. We help with 100% compliance assured integration and NDH-4 guidance.",
    url: "https://dbiz.com/nidhi-company",
    type: "website",
    siteName: "D BIZ CONSULTANCY",
  },
  alternates: {
    canonical: "https://dbiz.com/nidhi-company",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dbiz.com/nidhi-company/#service",
        "name": "Nidhi Company Registration Service",
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
        "description": "Professional registration and incorporation services for Nidhi Companies in India. Full assistance with SPICe+ and NDH-4 declaration.",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Company Registration"
      },
      {
        "@type": "FAQPage",
        "@id": "https://dbiz.com/nidhi-company/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is a Nidhi company the same as a bank or NBFC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Nidhis operate on a member-only mutual benefit model with mandated disclosures that deposits are not insured and not guaranteed by Government/RBI."
            }
          },
          {
            "@type": "Question",
            "name": "Can a Nidhi accept deposits from the general public?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. A Nidhi cannot accept deposits from or lend to any person other than its members, and it cannot advertise to solicit deposits."
            }
          },
          {
            "@type": "Question",
            "name": "What are the minimum members and capital requirements for a new Nidhi after 2022?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For the NDH-4 declaration introduced in 2022, the applicant must have ≥200 members and NOF ≥ ₹20 lakh, file NDH-4 within 120 days. Minimum paid-up equity capital is ₹10 lakh."
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
      <NidhiCompanyPage />
    </>
  );
}