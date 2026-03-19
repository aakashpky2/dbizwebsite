

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SEOContentSection from "@/components/SEOContentSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">


      <SEO 
        title="DBIZ CONSULTANCY | Best Business Consultants in Trivandrum, Kochi & Kerala"
        description="DBIZ CONSULTANCY is a leading business consultancy in Thiruvananthapuram & Kochi. We provide expert services in GST registration, company filings, startup advisory, and trademark registration in Kerala. Partner with the best business consultants for your growth."
        keywords="business consultancy trivandrum, company registration kochi, gst filing kerala, best business consultants in thiruvananthapuram, start-up advisory kochi, trademark registration kerala"
        url="https://www.dbizsolutions.in"
        localBusiness={{
            name: "DBIZ CONSULTANCY",
            city: "Thiruvananthapuram",
            address: "T.C.11/568, Plamoodu, Pattom",
            phone: "+91-8075273408"
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SEOContentSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
