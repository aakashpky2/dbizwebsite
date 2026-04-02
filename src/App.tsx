
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

const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const PrivateLimitedPage = lazy(() => import("./pages/PrivateLimitedPage"));
const EnhancedPrivateLimitedPage = lazy(() => import("./pages/EnhancedPrivateLimitedPage"));
const LimitedLiabilityPartnershipPage = lazy(() => import("./pages/LimitedLiabilityPartnershipPage"));
const LLPRegistrationPage = lazy(() => import("./pages/LLP/LLPRegistrationPage"));
const OnePersonCompanyPage = lazy(() => import("./pages/OnePersonCompanyPage"));
const ToolsPage = lazy(() => import("./pages/ToolsPage"));
const GSTRegistrationPage = lazy(() => import("./pages/GSTRegistrationPage")); // Force Vite reload

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
const NidhiCompanyCompliancePage = lazy(() => import("./pages/NidhiCompanyCompliancePage"));
const AnnualCompliancePage = lazy(() => import("./pages/AnnualCompliancePage"));
const BusinessPlanPage = lazy(() => import("./pages/BusinessPlanPage"));
const FundingAssistancePage = lazy(() => import("./pages/FundingAssistancePage"));
const GrowthStrategyPage = lazy(() => import("./pages/GrowthStrategyPage"));
const IncubationSupportPage = lazy(() => import("./pages/IncubationSupportPage"));
const LegalAdvisoryPage = lazy(() => import("./pages/LegalAdvisoryPage"));
const MarketResearchPage = lazy(() => import("./pages/MarketResearchPage"));
const PitchDeckPage = lazy(() => import("./pages/PitchDeckPage"));
const StartupIndiaRecognitionPage = lazy(() => import("./pages/StartupIndiaRecognitionPage"));
const NgoRegistrationPage = lazy(() => import("./pages/NgoRegistrationPage"));
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
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <ScrollToTop />
              <Suspense fallback={<PageLoader />}>

                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/private-limited" element={<EnhancedPrivateLimitedPage />} />
                  <Route path="/private-limited/:location" element={<EnhancedPrivateLimitedPage />} />
                  <Route path="/llp" element={<LLPRegistrationPage />} />
                  <Route path="/llp/:location" element={<LLPRegistrationPage />} />
                  <Route path="/limited-liability-partnership" element={<LLPRegistrationPage />} />
                  <Route path="/limited-liability-partnership/:location" element={<LLPRegistrationPage />} />
                  <Route path="/one-person-company" element={<OnePersonCompanyPage />} />
                  <Route path="/one-person-company/:location" element={<OnePersonCompanyPage />} />
                  <Route path="/nidhi-company" element={<NidhiCompanyPage />} />
                  <Route path="/nidhi-company/:location" element={<NidhiCompanyPage />} />
                  <Route path="/producer-company" element={<ProducerCompanyPage />} />
                  <Route path="/producer-company/:location" element={<ProducerCompanyPage />} />
                  <Route path="/nbfc" element={<NBFCPage />} />
                  <Route path="/nbfc/:location" element={<NBFCPage />} />
                  <Route path="/partnership" element={<PartnershipPage />} />
                  <Route path="/partnership/:location" element={<PartnershipPage />} />
                  <Route path="/sole-proprietorship" element={<SoleProprietorshipPage />} />
                  <Route path="/sole-proprietorship/:location" element={<SoleProprietorshipPage />} />
                  <Route path="/12a-80g-registration" element={<TwelveAEightyGPage />} />
                  <Route path="/12a-80g-registration/:location" element={<TwelveAEightyGPage />} />
                  <Route path="/digital-signature" element={<DigitalSignaturePage />} />
                  <Route path="/digital-signature/:location" element={<DigitalSignaturePage />} />
                  <Route path="/gst-registration" element={<GSTRegistrationPage />} />
                  <Route path="/gst-registration/:location" element={<GSTRegistrationPage />} />

                  <Route path="/startup-registration" element={<StartupRegistrationPage />} />
                  <Route path="/startup-registration/:location" element={<StartupRegistrationPage />} />
                  <Route path="/udyam-msme-registration" element={<MSMERegistrationPage />} />
                  <Route path="/udyam-msme-registration/:location" element={<MSMERegistrationPage />} />
                  <Route path="/iso-certification" element={<ISOCertificationPage />} />
                  <Route path="/iso-certification/:location" element={<ISOCertificationPage />} />
                  <Route path="/fssai-registration" element={<FSSAIRegistrationPage />} />
                  <Route path="/fssai-registration/:location" element={<FSSAIRegistrationPage />} />
                  <Route path="/iec-registration" element={<IECRegistrationPage />} />
                  <Route path="/iec-registration/:location" element={<IECRegistrationPage />} />
                  <Route path="/trade-license" element={<TradeLicensePage />} />
                  <Route path="/trade-license/:location" element={<TradeLicensePage />} />
                  <Route path="/drug-license" element={<DrugLicensePage />} />
                  <Route path="/drug-license/:location" element={<DrugLicensePage />} />
                  <Route path="/shop-establishment" element={<ShopEstablishmentPage />} />
                  <Route path="/shop-establishment/:location" element={<ShopEstablishmentPage />} />
                  <Route path="/trademark-registration" element={<TrademarkRegistrationPage />} />
                  <Route path="/trademark-registration/:location" element={<TrademarkRegistrationPage />} />
                  <Route path="/patent-registration" element={<PatentRegistrationPage />} />
                  <Route path="/patent-registration/:location" element={<PatentRegistrationPage />} />
                  <Route path="/copyright-registration" element={<CopyrightRegistrationPage />} />
                  <Route path="/copyright-registration/:location" element={<CopyrightRegistrationPage />} />
                  <Route path="/tds-filings" element={<TDSFilingsPage />} />
                  <Route path="/tds-filings/:location" element={<TDSFilingsPage />} />
                  <Route path="/gst-filings" element={<GSTFilingsPage />} />
                  <Route path="/gst-filings/:location" element={<GSTFilingsPage />} />
                  <Route path="/income-tax-filing" element={<IncomeTaxFilingPage />} />
                  <Route path="/income-tax-filing/:location" element={<IncomeTaxFilingPage />} />
                  <Route path="/mca-compliance" element={<MCACompliancePage />} />
                  <Route path="/mca-compliance/:location" element={<MCACompliancePage />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/edit/:service" element={<ServiceEditor />} />
                  <Route path="/public-limited" element={<PublicLimitedPage />} />
                  <Route path="/public-limited/:location" element={<PublicLimitedPage />} />
                  <Route path="/nidhi-company-compliance" element={<NidhiCompanyCompliancePage />} />
                  <Route path="/nidhi-company-compliance/:location" element={<NidhiCompanyCompliancePage />} />
                  <Route path="/annual-compliance" element={<AnnualCompliancePage />} />
                  <Route path="/annual-compliance/:location" element={<AnnualCompliancePage />} />
                  <Route path="/business-plan" element={<BusinessPlanPage />} />
                  <Route path="/business-plan/:location" element={<BusinessPlanPage />} />
                  <Route path="/funding-assistance" element={<FundingAssistancePage />} />
                  <Route path="/funding-assistance/:location" element={<FundingAssistancePage />} />
                  <Route path="/growth-strategy" element={<GrowthStrategyPage />} />
                  <Route path="/growth-strategy/:location" element={<GrowthStrategyPage />} />
                  <Route path="/incubation-support" element={<IncubationSupportPage />} />
                  <Route path="/incubation-support/:location" element={<IncubationSupportPage />} />
                  <Route path="/legal-advisory" element={<LegalAdvisoryPage />} />
                  <Route path="/legal-advisory/:location" element={<LegalAdvisoryPage />} />
                  <Route path="/market-research" element={<MarketResearchPage />} />
                  <Route path="/market-research/:location" element={<MarketResearchPage />} />
                  <Route path="/pitch-deck" element={<PitchDeckPage />} />
                  <Route path="/pitch-deck/:location" element={<PitchDeckPage />} />
                  <Route path="/startup-india-recognition" element={<StartupIndiaRecognitionPage />} />
                  <Route path="/startup-india-recognition/:location" element={<StartupIndiaRecognitionPage />} />
                  <Route path="/ngo-trust-registration" element={<NgoRegistrationPage />} />
                  <Route path="/ngo-trust-registration/:location" element={<NgoRegistrationPage />} />
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
