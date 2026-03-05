import type { Metadata } from "next";
import PartnershipPage from "@/pages/PartnershipPage";

export const metadata: Metadata = {
  title: "Partnership Firm Registration in India | D BIZ CONSULTANCY",
  description: "Expert Partnership Firm Registration services across India. We offer complete assistance from Partnership Deed drafting to PAN, GST & ROC filing.",
  alternates: {
    canonical: "https://dbiz.com/partnership"
  },
  openGraph: {
    title: "Partnership Firm Registration in India | D BIZ CONSULTANCY",
    description: "Expert Partnership Firm Registration services across India. We offer complete assistance from Partnership Deed drafting to PAN, GST & ROC filing.",
    url: "https://dbiz.com/partnership",
    type: "website",
  }
};

export default function Page() {
  return <PartnershipPage />;
}