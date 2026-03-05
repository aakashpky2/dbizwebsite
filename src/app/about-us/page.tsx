import type { Metadata } from "next";
import AboutUsPage from "@/pages/AboutUsPage";

export const metadata: Metadata = {
    title: "D BIZ Consultancy Pvt. Ltd | GST, ROC, Audit & Business Consultancy in Thiruvananthapuram, Kerala",
    description: "Leading business consultancy in Thiruvananthapuram, Kerala offering GST registration, ROC compliance, Income Tax, Audit, Startup registration & corporate advisory services.",
    alternates: {
        canonical: "https://dbiz.com/about-us"
    },
    openGraph: {
        title: "D BIZ Consultancy Pvt. Ltd | GST, ROC, Audit & Business Consultancy in Thiruvananthapuram, Kerala",
        description: "Leading business consultancy in Thiruvananthapuram, Kerala offering GST registration, ROC compliance, Income Tax, Audit, Startup registration & corporate advisory services.",
        url: "https://dbiz.com/about-us",
        type: "website",
    }
};

export default function Page() {
    return <AboutUsPage />;
}
