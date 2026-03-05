import type { Metadata } from 'next';
import EnhancedPrivateLimitedPage from "@/pages/EnhancedPrivateLimitedPage";
import { faqData } from "@/data/privateLimitedFaq";

export const metadata: Metadata = {
  title: "Private Limited Company Registration in India | D BIZ CONSULTANCY",
  description: "Register your Private Limited Company in India entirely online with D BIZ CONSULTANCY. Expert assistance, lowest fees, and fastest turnaround time.",
  keywords: ["private limited registration", "company incorporation", "pvt ltd company", "business registration india", "company registration online"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dbiz.com/private-limited",
    title: "Private Limited Company Registration | D BIZ CONSULTANCY",
    description: "Start your Private Limited Company in India with D BIZ CONSULTANCY. 100% Online Process.",
    siteName: "D BIZ CONSULTANCY",
  }
};

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Limited Company Registration",
    "provider": {
      "@type": "Organization",
      "name": "D BIZ CONSULTANCY",
      "url": "https://dbiz.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Professional Private Limited Company registration service in India including DIN, DSC, MOA, AOA, and PAN/TAN.",
    "offers": {
      "@type": "Offer",
      "price": "6999",
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
      <EnhancedPrivateLimitedPage />
    </>
  );
}