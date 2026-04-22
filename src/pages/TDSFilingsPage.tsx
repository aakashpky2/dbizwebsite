
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowDownCircle,
  Phone,
  MessageCircle,
  Building2,
  FileText
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

const phoneNumber = "+918075273408";

const ContactOptions = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-2">
      <a 
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors"
      >
        <Phone size={16} />
        <span>Call</span>
      </a>
      <a 
        href={`https://wa.me/${phoneNumber.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

const content = {
  description: "TDS (Tax Deducted at Source) Filing is a mandatory compliance requirement where tax is deducted at the source of income and deposited with the government. TDS returns must be filed quarterly by deductors to report all TDS transactions and ensure compliance with Income Tax regulations.",
  importance: [
    "Legal Compliance: Mandatory requirement under Income Tax Act to file TDS returns.",
    "Avoid Penalties: Prevents late filing penalties and interest on delayed payments.",
    "Tax Credit: Enables deductees to claim TDS credit in their income tax returns.",
    "Audit Trail: Maintains proper records for tax audits and assessments.",
    "Interest Savings: Timely filing avoids interest charges on delayed TDS deposits.",
    "Business Credibility: Demonstrates compliance with tax regulations."
  ],
  faqs: [
    {
      question: "What is TDS Filing?",
      answer: "TDS Filing involves submitting quarterly returns to the Income Tax Department reporting all TDS deducted and deposited. It includes details of deductees, amount of TDS, and challan information."
    },
    {
      question: "Who needs to file TDS Returns?",
      answer: "Any person or entity who deducts TDS on payments like salaries, professional fees, rent, commission, interest, or other specified payments must file TDS returns quarterly."
    },
    {
      question: "What are the TDS return filing due dates?",
      answer: "TDS returns must be filed quarterly: Q1 (April-June) by July 31, Q2 (July-September) by October 31, Q3 (October-December) by January 31, and Q4 (January-March) by May 31."
    },
    {
      question: "What is the penalty for late TDS filing?",
      answer: "Late filing of TDS returns attracts a penalty of ₹200 per day until the return is filed. Additionally, interest at 1.5% per month is charged on delayed TDS payment."
    }
  ]
};

const TDSFilingsPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  
  if (location && !isValidLocation) {
    return <NotFound />;
  }
  
  const cityName = location 
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) 
    : "India";

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 160;
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
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  TDS Filings
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => handleSectionClick('benefits')}
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="TDS Filings" 
                  className="w-full h-80 rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'benefits', icon: CheckCircle2, label: 'Benefits' },
                { id: 'deadlines', icon: FileText, label: 'Deadlines' },
                { id: 'penalties', icon: FileText, label: 'Penalties' },
                { id: 'faqs', icon: FileText, label: 'FAQs' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[14px] font-medium transition-all duration-300 ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }}
                >
                  <item.icon className={`mr-1.5 h-3.5 w-3.5 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is TDS Filing?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.importance.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <section id="deadlines" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card">
              <p className="consultancy-label">Timelines</p>
              <h4 className="consultancy-heading">TDS Filing Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Q1 Return (Apr–Jun)", due: "31st July", desc: "TDS return for Q1 must be filed by July 31 of the assessment year." },
                  { title: "Q2 Return (Jul–Sep)", due: "31st October", desc: "TDS return for Q2 must be filed by October 31." },
                  { title: "Q3 Return (Oct–Dec)", due: "31st January", desc: "TDS return for Q3 must be filed by January 31." },
                  { title: "Q4 Return (Jan–Mar)", due: "31st May", desc: "TDS return for Q4 must be filed by May 31. Form 16/16A issuance by June 15." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all">
                    <FileText className="h-6 w-6 text-dbiz-teal shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-dbiz-navy text-lg">{item.title}</p>
                      <p className="text-dbiz-teal font-bold text-sm mb-1">{item.due}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Penalties Section */}
        <section id="penalties" className="py-16 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card">
              <p className="consultancy-label">Legal Risks</p>
              <h4 className="consultancy-heading">Penalties & Consequences</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Late Filing Fee", desc: "₹200 per day penalty under Section 234E until the return is filed, subject to TDS amount cap." },
                  { title: "Interest on Late Payment", desc: "1.5% per month interest under Section 201(1A) on delayed TDS deposit from date of deduction." },
                  { title: "Penalty u/s 271H", desc: "Penalty ranging from ₹10,000 to ₹1,00,000 for failure to file TDS statements within one year." },
                  { title: "Prosecution u/s 276B", desc: "Non-deposit of deducted TDS can lead to rigorous imprisonment from 3 months to 7 years." }
                ].map((item, i) => (
                  <div key={i} className="penalty-inner-card">
                    <div className="penalty-header">
                      <div className="penalty-dot"></div>
                      <span className="penalty-title">{item.title}</span>
                    </div>
                    <p className="penalty-desc text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="py-16 scroll-mt-32">
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

      </main>
      <Footer />
    </div>
  );
};

export default TDSFilingsPage;