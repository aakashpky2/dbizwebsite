import type { Metadata } from "next";
import PartnershipPage from "@/pages/PartnershipPage";

type Props = {
  params: { location: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const formattedLocation = params.location
    ? params.location.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "India";

  return {
    title: `Partnership Firm Registration in ${formattedLocation} | D BIZ CONSULTANCY`,
    description: `Looking to register a Partnership firm in ${formattedLocation}? Fast and hassle-free Partnership firm registration. Expert assistance for Partnership Deed, PAN, GST and ROC Filing.`,
    alternates: {
      canonical: `https://dbiz.com/partnership/${params.location}`
    },
    openGraph: {
      title: `Partnership Firm Registration in ${formattedLocation} | D BIZ CONSULTANCY`,
      description: `Looking to register a Partnership firm in ${formattedLocation}? Fast and hassle-free Partnership firm registration. Expert assistance for Partnership Deed, PAN, GST and ROC Filing.`,
      url: `https://dbiz.com/partnership/${params.location}`,
      type: "website",
    }
  };
}

export default function Page() {
  return <PartnershipPage />;
}