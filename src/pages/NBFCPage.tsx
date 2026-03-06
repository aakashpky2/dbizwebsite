
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Users, 
  Shield, 
  Building2, 
  FileBarChart,
  ArrowDownCircle,
  Phone,
  Clock,
  CheckCircle,
  MessageCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const nbfcContent = {
  title: "Non-Banking Financial Company (NBFC)",
  description: "A Non-Banking Financial Company (NBFC) is a financial institution that provides banking services without meeting the legal definition of a bank. NBFCs offer various financial products and services including loans, credit facilities, retirement planning, money markets, and underwriting.",
  importance: [
    "Flexible Operations: Can offer diverse financial products tailored to specific market segments.",
    "Lower Entry Barriers: Relatively easier to establish than traditional banks.",
    "Targeted Services: Can focus on niche markets and underserved segments.",
    "Quick Decision Making: Less bureaucratic processes compared to banks.",
    "Innovation Friendly: More flexibility to introduce innovative financial products.",
    "Growth Potential: Significant opportunities in India's growing financial sector."
  ],
  faqs: [
    {
      question: "What is an NBFC?",
      answer: "An NBFC is a company registered under the Companies Act and licensed by the Reserve Bank of India (RBI) to carry on financial business. It can accept deposits, provide loans, and offer other financial services but cannot issue cheques."
    },
    {
      question: "What is the minimum capital requirement for NBFC?",
      answer: "The minimum Net Owned Fund (NOF) requirement for NBFC registration is ₹2 crores. This must be maintained at all times after commencement of business."
    },
    {
      question: "Do NBFCs require RBI license?",
      answer: "Yes, all NBFCs must obtain a Certificate of Registration (CoR) from the Reserve Bank of India before commencing operations. The RBI regulates and supervises NBFCs."
    },
    {
      question: "What types of NBFCs exist in India?",
      answer: "Main types include: Asset Finance Company, Loan Company, Investment Company, Infrastructure Finance Company, Micro Finance Institution, and Housing Finance Company."
    }
  ]
};

const NBFCPage = () => {
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  NBFC Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  {nbfcContent.description}
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
                    onClick={() => handleSectionClick('features')}
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f" 
                    alt="NBFC" 
                    className="w-full h-80 rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="sticky top-16 z-10 bg-white shadow-md border-b border-gray-200">
          <div className="container-custom py-2">
            <div className="flex items-center overflow-x-auto no-scrollbar">
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('overview')}
              >
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('features')}
              >
                <Shield className="mr-2 h-4 w-4" /> Features
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('benefits') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('benefits')}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('faqs')}
              >
                <Users className="mr-2 h-4 w-4" /> FAQs
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is an NBFC?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                {nbfcContent.description}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">RBI Regulated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Licensed and supervised by the Reserve Bank of India.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Diverse Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Can offer a wide range of financial products and services.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Market Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Can target specific market segments and niches effectively.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Benefits of NBFC</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nbfcContent.importance.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {nbfcContent.faqs.map((faq, index) => (
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

export default NBFCPage;