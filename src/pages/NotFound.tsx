

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(
      "Coming soon page accessed at route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Page Not Found | DBIZ CONSULTANCY"
        noIndex={true}
      />
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-100 py-24">
        <div className="text-center px-4">
          <img
            src="/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png"
            alt="DBIZ Consultancy"
            className="mx-auto h-20 mb-8"
          />
          <h1 className="text-5xl font-bold mb-6 text-dbiz-navy">COMING SOON</h1>
          <p className="text-xl text-gray-600 mb-6">This page is under development</p>
          <p className="mb-8 text-gray-500 max-w-md mx-auto">
            We're working hard to bring you valuable content and services.
            Please check back later or explore our available services.
          </p>
          <a href="/" className="btn-primary hover:shadow-lg transition-all">
            Return to Home
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
