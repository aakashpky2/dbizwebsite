
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initImageCache } from "@/lib/imageCache";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PrivateLimitedPage from "./pages/PrivateLimitedPage";
import EnhancedPrivateLimitedPage from "./pages/EnhancedPrivateLimitedPage";
import LimitedLiabilityPartnershipPage from "./pages/LimitedLiabilityPartnershipPage";
import LLPRegistrationPage from "./pages/LLP/LLPRegistrationPage";

import OnePersonCompanyPage from "./pages/OnePersonCompanyPage";
import ToolsPage from "./pages/ToolsPage";
import GSTRegistrationPage from "./pages/GSTRegistrationPage";
import StartupRegistrationPage from "./pages/StartupRegistrationPage";
import MSMERegistrationPage from "./pages/MSMERegistrationPage";
import ISOCertificationPage from "./pages/ISOCertificationPage";
import FSSAIRegistrationPage from "./pages/FSSAIRegistrationPage";
import IECRegistrationPage from "./pages/IECRegistrationPage";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ServiceEditor from "./pages/Admin/ServiceEditor";
import LLPContentEditor from "./pages/Admin/LLPContentEditor";
import ScrollToTop from "./components/ScrollToTop";
import NidhiCompanyPage from "./pages/NidhiCompanyPage";
import ProducerCompanyPage from "./pages/ProducerCompanyPage";
import NBFCPage from "./pages/NBFCPage";
import PartnershipPage from "./pages/PartnershipPage";
import SoleProprietorshipPage from "./pages/SoleProprietorshipPage";
import TwelveAEightyGPage from "./pages/TwelveAEightyGPage";
import DigitalSignaturePage from "./pages/DigitalSignaturePage";
import TradeLicensePage from "./pages/TradeLicensePage";
import DrugLicensePage from "./pages/DrugLicensePage";
import ShopEstablishmentPage from "./pages/ShopEstablishmentPage";
import TrademarkRegistrationPage from "./pages/TrademarkRegistrationPage";
import PatentRegistrationPage from "./pages/PatentRegistrationPage";
import CopyrightRegistrationPage from "./pages/CopyrightRegistrationPage";
import TDSFilingsPage from "./pages/TDSFilingsPage";
import GSTFilingsPage from "./pages/GSTFilingsPage";
import IncomeTaxFilingPage from "./pages/IncomeTaxFilingPage";
import MCACompliancePage from "./pages/MCACompliancePage";

// Create a client
const queryClient = new QueryClient();

// Initialize image cache on app load
initImageCache();

const App = () => {

  return (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Custom Pages */}
            <Route path="/private-limited" element={<EnhancedPrivateLimitedPage />} />
            <Route path="/private-limited/:location" element={<EnhancedPrivateLimitedPage />} />
            
            {/* Use the new LLP page */}
            <Route path="/llp" element={<LLPRegistrationPage />} />
            <Route path="/llp/:location" element={<LLPRegistrationPage />} />
            
            
            {/* Keep backwards compatibility for now */}
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
            <Route path="/tools" element={<ToolsPage />} />
            
            {/* Registration Service Routes */}
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
            
            {/* Other Registrations */}
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
            
            {/* Tax Compliance */}
            <Route path="/tds-filings" element={<TDSFilingsPage />} />
            <Route path="/tds-filings/:location" element={<TDSFilingsPage />} />
            <Route path="/gst-filings" element={<GSTFilingsPage />} />
            <Route path="/gst-filings/:location" element={<GSTFilingsPage />} />
            <Route path="/income-tax-filing" element={<IncomeTaxFilingPage />} />
            <Route path="/income-tax-filing/:location" element={<IncomeTaxFilingPage />} />
            
            {/* Business Compliance */}
            <Route path="/mca-compliance" element={<MCACompliancePage />} />
            <Route path="/mca-compliance/:location" element={<MCACompliancePage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/edit/:service" element={<ServiceEditor />} />
            <Route path="/admin/llp-editor" element={<LLPContentEditor />} />
            
            {/* Dynamic Service routes for other services */}
            <Route path="/:service" element={<ServiceDetailPage />} />
            <Route path="/:service/:location" element={<ServiceDetailPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
  );
};

export default App;
