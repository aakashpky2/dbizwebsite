
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowDownCircle, Phone, MessageCircle, Building2, Users, Scale, FileText } from "lucide-react";
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
  description: "Protect your business with expert legal guidance. Our legal advisory services help businesses navigate complex legal matters, ensure compliance, and mitigate risks across all aspects of operations.",
  benefits: [
    "Risk Mitigation: Identify and address legal risks proactively",
    "Contract Protection: Ensure agreements protect your interests",
    "Regulatory Compliance: Stay compliant with changing laws",
    "IP Protection: Safeguard your intellectual property",
    "Dispute Resolution: Efficient handling of legal disputes",
    "Business Continuity: Legal framework for smooth operations"
  ],
  features: [
    { title: "Contract Drafting", description: "Professional drafting of business contracts, agreements, and MOUs" },
    { title: "Legal Due Diligence", description: "Comprehensive legal review for investments and acquisitions" },
    { title: "Company Law Matters", description: "Board resolutions, shareholder agreements, and corporate governance" },
    { title: "Employment Law", description: "Employment contracts, policies, and labor compliance" },
    { title: "IP Advisory", description: "Trademark, copyright, and patent advisory services" },
    { title: "Dispute Resolution", description: "Negotiation, mediation, and litigation support" }
  ],
  faqs: [
    { question: "What legal services do startups typically need?", answer: "Startups commonly need founder agreements, employee contracts, NDAs, privacy policies, terms of service, shareholder agreements, and IP protection. We offer packages tailored for early-stage companies." },
    { question: "How do you charge for legal services?", answer: "We offer flexible pricing including fixed fees for standard documents, hourly rates for advisory, and monthly retainers for ongoing support. We discuss and agree on fees upfront before engagement." },
    { question: "Can you help with investment-related legal work?", answer: "Yes, we assist with term sheet negotiation, due diligence, SHA (Shareholders Agreement), SSA (Share Subscription Agreement), and other investment documentation for both founders and investors." },
    { question: "Do you handle litigation?", answer: "We have a network of litigation partners for court matters. Our focus is on business advisory, but we coordinate with litigation experts when needed and provide full support throughout." }
  ]
};

const LegalAdvisoryPage = () => {
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
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Legal Advisory Services{location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
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
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" alt="Legal Advisory" className="w-full h-80 rounded-lg shadow-lg object-cover" />
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
                <Scale className="mr-2 h-4 w-4" /> Services
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
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Legal Advisory Services</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <FileText className="text-dbiz-teal h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Benefits of Legal Advisory</h2>
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

export default LegalAdvisoryPage;
