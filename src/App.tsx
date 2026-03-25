
import React, { useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { initImageCache } from "@/lib/imageCache";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

// Architecture: Zero-Gravity Lazy Loading
// We lazily load all pages to ensure the initial bundle (TTI) is under 1s.
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const PrivateLimitedPage = lazy(() => import("./pages/PrivateLimitedPage"));
const EnhancedPrivateLimitedPage = lazy(() => import("./pages/EnhancedPrivateLimitedPage"));
const LimitedLiabilityPartnershipPage = lazy(() => import("./pages/LimitedLiabilityPartnershipPage"));
const LLPRegistrationPage = lazy(() => import("./pages/LLP/LLPRegistrationPage"));
const OnePersonCompanyPage = lazy(() => import("./pages/OnePersonCompanyPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const GSTRegistrationPage = lazy(() => import("./pages/GSTRegistrationPage"));
const StartupRegistrationPage = lazy(() => import("./pages/StartupRegistrationPage"));
const MSMERegistrationPage = lazy(() => import("./pages/MSMERegistrationPage"));
const ISOCertificationPage = lazy(() => import("./pages/ISOCertificationPage"));
const FSSAIRegistrationPage = lazy(() => import("./pages/FSSAIRegistrationPage"));
const IECRegistrationPage = lazy(() => import("./pages/IECRegistrationPage"));
const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const ServiceEditor = lazy(() => import("./pages/Admin/ServiceEditor"));
const LLPContentEditor = lazy(() => import("./pages/Admin/LLPContentEditor"));
const NidhiCompanyPage = lazy(() => import("./pages/NidhiCompanyPage"));
const ProducerCompanyPage = lazy(() => import("./pages/ProducerCompanyPage"));
const NBFCPage = lazy(() => import("./pages/NBFCPage"));
const PartnershipPage = lazy(() => import("./pages/PartnershipPage"));
const SoleProprietorshipPage = lazy(() => import("./pages/SoleProprietorshipPage"));
const TwelveAEightyGPage = lazy(() => import("./pages/TwelveAEightyGPage"));
const DigitalSignaturePage = lazy(() => import("./pages/DigitalSignaturePage"));
const TradeLicensePage = lazy(() => import("./pages/TradeLicensePage"));
const DrugLicensePage = lazy(() => import("./pages/DrugLicensePage"));
const ShopEstablishmentPage = lazy(() => import("./pages/ShopEstablishmentPage"));
const TrademarkRegistrationPage = lazy(() => import("./pages/TrademarkRegistrationPage"));
const PatentRegistrationPage = lazy(() => import("./pages/PatentRegistrationPage"));
const CopyrightRegistrationPage = lazy(() => import("./pages/CopyrightRegistrationPage"));
const TDSFilingsPage = lazy(() => import("./pages/TDSFilingsPage"));
const GSTFilingsPage = lazy(() => import("./pages/GSTFilingsPage"));
const IncomeTaxFilingPage = lazy(() => import("./pages/IncomeTaxFilingPage"));
const MCACompliancePage = lazy(() => import("./pages/MCACompliancePage"));
const PublicLimitedPage = lazy(() => import("./pages/PublicLimitedPage"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <div className="w-12 h-12 border-4 border-dbiz-teal/20 border-t-dbiz-teal rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

initImageCache();

const App = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <SEO />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/private-limited" element={<EnhancedPrivateLimitedPage />} />
                  <Route path="/private-limited/:location" element={<EnhancedPrivateLimitedPage />} />
                  <Route path="/llp" element={<LLPRegistrationPage />} />
                  <Route path="/llp/:location" element={<LLPRegistrationPage />} />
                  <Route path="/limited-liability-partnership" element={<LLPRegistrationPage />} />
                  <Route path="/limited-liability-partnership/:location" element={<LLPRegistrationPage />} />
                  <Route path="/one-person-company" element={<OnePersonCompanyPage />} />
                  <Route path="/one-person-company/:location" element={<OnePersonCompanyPage />} />
                  <Route path="/nidhi-company" element={<ComingSoon />} />
                  <Route path="/nidhi-company/:location" element={<ComingSoon />} />
                  <Route path="/producer-company" element={<ComingSoon />} />
                  <Route path="/producer-company/:location" element={<ComingSoon />} />
                  <Route path="/nbfc" element={<ComingSoon />} />
                  <Route path="/nbfc/:location" element={<ComingSoon />} />
                  <Route path="/partnership" element={<ComingSoon />} />
                  <Route path="/partnership/:location" element={<ComingSoon />} />
                  <Route path="/sole-proprietorship" element={<SoleProprietorshipPage />} />
                  <Route path="/sole-proprietorship/:location" element={<SoleProprietorshipPage />} />
                  <Route path="/12a-80g-registration" element={<ComingSoon />} />
                  <Route path="/12a-80g-registration/:location" element={<ComingSoon />} />
                  <Route path="/digital-signature" element={<ComingSoon />} />
                  <Route path="/digital-signature/:location" element={<ComingSoon />} />
                  <Route path="/tools" element={<ComingSoon />} />
                  <Route path="/gst-registration" element={<ComingSoon />} />
                  <Route path="/gst-registration/:location" element={<ComingSoon />} />
                  <Route path="/startup-registration" element={<ComingSoon />} />
                  <Route path="/startup-registration/:location" element={<ComingSoon />} />
                  <Route path="/udyam-msme-registration" element={<ComingSoon />} />
                  <Route path="/udyam-msme-registration/:location" element={<ComingSoon />} />
                  <Route path="/iso-certification" element={<ComingSoon />} />
                  <Route path="/iso-certification/:location" element={<ComingSoon />} />
                  <Route path="/fssai-registration" element={<ComingSoon />} />
                  <Route path="/fssai-registration/:location" element={<ComingSoon />} />
                  <Route path="/iec-registration" element={<ComingSoon />} />
                  <Route path="/iec-registration/:location" element={<ComingSoon />} />
                  <Route path="/trade-license" element={<ComingSoon />} />
                  <Route path="/trade-license/:location" element={<ComingSoon />} />
                  <Route path="/drug-license" element={<ComingSoon />} />
                  <Route path="/drug-license/:location" element={<ComingSoon />} />
                  <Route path="/shop-establishment" element={<ComingSoon />} />
                  <Route path="/shop-establishment/:location" element={<ComingSoon />} />
                  <Route path="/trademark-registration" element={<ComingSoon />} />
                  <Route path="/trademark-registration/:location" element={<ComingSoon />} />
                  <Route path="/patent-registration" element={<ComingSoon />} />
                  <Route path="/patent-registration/:location" element={<ComingSoon />} />
                  <Route path="/copyright-registration" element={<ComingSoon />} />
                  <Route path="/copyright-registration/:location" element={<ComingSoon />} />
                  <Route path="/tds-filings" element={<ComingSoon />} />
                  <Route path="/tds-filings/:location" element={<ComingSoon />} />
                  <Route path="/gst-filings" element={<ComingSoon />} />
                  <Route path="/gst-filings/:location" element={<ComingSoon />} />
                  <Route path="/income-tax-filing" element={<ComingSoon />} />
                  <Route path="/income-tax-filing/:location" element={<ComingSoon />} />
                  <Route path="/mca-compliance" element={<ComingSoon />} />
                  <Route path="/mca-compliance/:location" element={<ComingSoon />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/edit/:service" element={<ServiceEditor />} />
                  <Route path="/public-limited" element={<PublicLimitedPage />} />
                  <Route path="/public-limited/:location" element={<PublicLimitedPage />} />
                  <Route path="/admin/llp-editor" element={<LLPContentEditor />} />
                  <Route path="/:service" element={<ComingSoon />} />
                  <Route path="/:service/:location" element={<ComingSoon />} />
                  <Route path="/coming-soon" element={<ComingSoon />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
