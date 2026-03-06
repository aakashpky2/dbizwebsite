
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowDownCircle, Phone, MessageCircle, Building2, Users, Banknote, HandCoins } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

const phoneNumber = "+918075273408";

const ContactOptions = () => (
  <div className="grid grid-cols-2 gap-3 p-2">
    <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors">
      <Phone size={16} /><span>Call</span>
    </a>
    <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
      <MessageCircle size={16} /><span>WhatsApp</span>
    </a>
  </div>
);

const content = {
  description: "Access the right funding for your business at the right stage. We connect startups and businesses with investors, banks, government schemes, and alternative funding sources to fuel growth.",
  benefits: [
    "Investor Network: Access to 500+ angel investors and VCs",
    "Bank Loans: Higher approval rates with prepared documentation",
    "Government Schemes: Navigate SIDBI, MUDRA, and state schemes",
    "Grant Applications: Expert assistance with grant proposals",
    "Valuation Support: Fair valuation for equity fundraising",
    "Negotiation Support: Help with term sheet negotiations"
  ],
  features: [
    { title: "Investor Matching", description: "Connect with the right investors based on your sector, stage, and funding needs" },
    { title: "Bank Loan Processing", description: "End-to-end support for business loan applications and documentation" },
    { title: "Government Schemes", description: "Access MUDRA, CGTMSE, Stand-Up India, and state-specific schemes" },
    { title: "Due Diligence Support", description: "Prepare your business for investor due diligence" },
    { title: "Valuation Services", description: "Professional business valuation for fundraising" },
    { title: "Term Sheet Review", description: "Expert review and negotiation of investment terms" }
  ],
  faqs: [
    { question: "What funding options are available for startups?", answer: "Startups can access angel investment, venture capital, government grants, bank loans (MUDRA, CGTMSE), crowdfunding, and revenue-based financing. The right option depends on your stage, sector, and growth plans." },
    { question: "How do I prepare for investor meetings?", answer: "We help you prepare a compelling pitch deck, financial projections, due diligence documents, and practice sessions. We also provide insights on investor expectations and common questions." },
    { question: "What is CGTMSE scheme?", answer: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) provides collateral-free loans up to ₹2 crore for MSMEs. We help you apply and improve approval chances." },
    { question: "How long does the funding process take?", answer: "Bank loans typically take 2-4 weeks with proper documentation. Equity funding can take 2-6 months depending on investor interest and due diligence. Government grants may take 1-3 months." }
  ]
};

const FundingAssistancePage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  if (location && !isValidLocation) return <NotFound />;
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  const isActive = (section: string) => activeSection === section;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Funding Assistance{location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">{content.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0"><ContactOptions /></PopoverContent>
                  </Popover>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => handleSectionClick('benefits')}>
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="https://images.unsplash.com/photo-1565373679580-fc0cb538f49d" alt="Funding" className="w-full h-80 rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-16 z-10 bg-white shadow-md border-b border-gray-200">
          <div className="container-custom py-2">
            <div className="flex items-center overflow-x-auto no-scrollbar">
              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('overview')}>
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>
              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('features')}>
                <Banknote className="mr-2 h-4 w-4" /> Services
              </div>
              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('benefits') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('benefits')}>
                <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
              </div>
              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('faqs')}>
                <Users className="mr-2 h-4 w-4" /> FAQs
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Funding Assistance Services</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <HandCoins className="text-dbiz-teal h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefits.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default FundingAssistancePage;
