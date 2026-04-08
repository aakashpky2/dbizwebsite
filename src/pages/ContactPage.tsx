
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us | D BIZ CONSULTANCY"
        description="Get in touch with D BIZ CONSULTANCY for expert business consultancy, registration, and compliance services. We are here to help your business grow."
        url="/contact"
      />
      <Navbar />
      <main id="overview" className="flex-grow pt-24">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact", current: true }]} />
        <div className="py-12">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
