
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
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
  MessageCircle,
  Leaf,
  AlertTriangle,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { producerCompanyFaq } from "@/data/producerCompanyFaq";

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

// Producer Company Registration Page - SEO Optimized Feb 2026
const ProducerCompanyPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined ? "Producer Company Registration in India | D BIZ CONSULTANCY" : `Producer Company Registration in ${cityName} | D BIZ CONSULTANCY`;

  if (location && !isValidLocation) {
    return <NotFound />;
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <section className="relative bg-[#1b3152] pt-28 pb-20 overflow-hidden min-h-[600px] flex items-center">
          {/* Main Background Texture */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" alt="Agriculture Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3152] via-[#1b3152]/80 to-[#1b3152]/40" />
          </div>

          {/* Dynamic Glow Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-dbiz-teal/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container-custom relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Professional Content */}
              <div className="space-y-8 max-w-2xl animate-in slide-in-from-left duration-700">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-dbiz-teal text-sm font-bold tracking-wide backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                  Business Registration Services
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight text-white">
                  Producer Company Registration{location ? ` in ${cityName}` : ""}
                </h1>

                <p className="text-lg opacity-90 mb-8 leading-relaxed text-slate-200">
                  D BIZ CONSULTANCY provides complete Producer Company registration services. Our expert team ensures a smooth and compliant process from name approval to incorporation and post-registration support.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => handleSectionClick('process')}
                    className="border-white text-slate-50 bg-dbiz-navy hover:bg-white/10 transition-all flex items-center group"
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4 text-dbiz-teal group-hover:rotate-12 transition-transform" />
                    Learn More
                  </Button>
                </div>

                <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                  <Clock className="h-4 w-4 mr-2 text-dbiz-teal" />
                  <span>Quick Registration • Guaranteed Compliance • Expert Support</span>
                </div>
              </div>

              {/* Right Side: Authority Visual Block */}
              <div className="relative group animate-in zoom-in-95 duration-1000 delay-200">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative text-left">
                    <div className="overflow-hidden rounded-2xl mb-6 shadow-inner ring-1 ring-white/10">
                      <img 
                        src="/dbiz-uploads/producer_company_hero_main.jpg" 
                        alt="Producer Company Professional Management and Farmers" 
                        className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-1000 ease-out brightness-95 saturate-[1.1]" 
                      />
                    </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 group/card transition-all hover:bg-white/20 shadow-xl">
                      <h4 className="text-4xl font-extrabold text-white mb-2 leading-none">10–15</h4>
                      <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Days (Typical)</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 group/card transition-all hover:bg-white/20 shadow-xl">
                      <h4 className="text-4xl font-extrabold text-white mb-2 flex items-center gap-2">
                        100%
                      </h4>
                      <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Compliance Assured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="sticky top-16 z-10 bg-white shadow-md border-b border-gray-200">
          <div className="container-custom py-2">
            <div className="flex items-center overflow-x-auto no-scrollbar">
              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('overview')}>
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('features')}>
                <Shield className="mr-2 h-4 w-4" /> Key Features
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('comparison')}>
                <FileBarChart className="mr-2 h-4 w-4" /> Comparison
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('documents')}>
                <FileText className="mr-2 h-4 w-4" /> Documents
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('process')}>
                <ArrowRight className="mr-2 h-4 w-4" /> Process
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('compliance') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('compliance')}>
                <Clock className="mr-2 h-4 w-4" /> Compliance
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('faqs')}>
                <Users className="mr-2 h-4 w-4" /> FAQs
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Producer Company?</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A Producer Company is a special type of company formed by farmers, producers, or individuals engaged in primary production activities such as agriculture, horticulture, dairy, fisheries, or handicrafts. It combines the benefits of a cooperative society with the structure and governance of a private limited company.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    This structure is governed under the Companies Act, 2013 (Chapter XXIA) and is designed to improve the income and efficiency of producers through collective management, processing, and marketing of produce.
                  </p>
                  <p className="text-gray-700 mb-0 leading-relaxed font-medium text-dbiz-navy">
                    A Producer Company operates as a separate legal entity with limited liability and perpetual succession, allowing it to own property, enter into contracts, and carry out business activities in its own name.
                  </p>
                </div>

                {/* Minimum Requirements Mini-block */}
                <div className="bg-[#f0f9fa] border border-dbiz-teal/10 rounded-2xl p-6 mt-8 shadow-sm">
                  <h3 className="text-xl font-bold text-dbiz-navy mb-6">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center text-dbiz-navy font-bold">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2" />
                        5 Directors
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pl-7">
                        Minimum five directors required for governance.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-dbiz-navy font-bold">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2" />
                        10 Members
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pl-7">
                        Minimum 10 producers or 2 producer institutions.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-dbiz-navy font-bold">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2" />
                        No Minimum Capital
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pl-7">
                        No statutory minimum paid-up capital requirement.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="md:w-1/3 space-y-6">
                <div className="bg-[#f0f9fa] rounded-2xl border border-dbiz-teal/10 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] group transition-all duration-500 hover:shadow-xl">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl h-48 relative">
                      <img 
                        src="/dbiz-uploads/producer_company_definition_sidebar.png" 
                        alt="Producer Company Legal Definition" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-dbiz-navy">
                      Definition as per the Companies Act, 2013
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed italic">
                      Section 378A of the Companies Act, 2013, defines a Producer Company as a body corporate that:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Is formed by 10+ individual producers or 2+ institutions",
                        "Carries out procurement, marketing, or selling of produce",
                        "Operates for the mutual benefit of members",
                        "Follows specific governance per Chapter XXIA"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="bg-dbiz-teal/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-500 italic leading-none mb-1">Need expert guidance?</p>
                          <p className="text-dbiz-navy font-bold text-sm">Contact Our Team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Features
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Producer Company</h2>

              <p className="text-gray-700 leading-relaxed">
                D BIZ CONSULTANCY helps producers and entrepreneurs understand and leverage these key features for sustainable growth and collective success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Limited Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">The liability of the members is limited to the amount of shares held by them, protecting their personal assets from company debts.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Mutual Benefit Principle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">The company operates primarily for the benefit of its members. Surplus is distributed through patronage bonus and limited dividend based on participation.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Professional Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Managed by a Board of Directors elected from among members. Ensures structured management, transparency, and better decision-making.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Clock className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Perpetual Succession</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">The company continues to exist irrespective of changes in membership or management, ensuring long-term continuity.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 lg:col-span-1 md:col-span-2 lg:translate-x-0">
                <CardHeader className="pb-3">
                  <Scale className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Access to Government Schemes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Eligible for various government subsidies, schemes, and financial assistance aimed at supporting agriculture and producer-based businesses.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 scroll-mt-32 text-left">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/5">
                <div className="sticky top-32">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                    Benefits
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">
                    Benefits of a Producer Company
                  </h2>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    D BIZ CONSULTANCY helps producers and organizations leverage these advantages for sustainable growth and collective success.
                  </p>
                  <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img 
                      src="/dbiz-uploads/producer_company_benefits.png" 
                      alt="Producer Company Benefits and Collective Success" 
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Limited liability protection, safeguarding members’ personal assets from business risks",
                    "Enhanced credibility among buyers, suppliers, banks, and government agencies",
                    "Collective strength of producers leading to better pricing and market access",
                    "Easier access to funding, subsidies, and government support schemes",
                    "Perpetual succession ensuring continuity of operations despite member changes",
                    "Better bargaining power in procurement, processing, and selling of produce",
                    "Separate legal entity enabling ownership of assets and independent operations",
                    "Professional management structure improving efficiency and transparency",
                    "Opportunity for value addition, branding, and direct market linkage"
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1 group-hover:bg-dbiz-teal/60 group-hover:text-white transition-colors duration-300">
                          <CheckCircle2 className="text-dbiz-teal group-hover:text-white h-5 w-5 transition-colors" />
                        </div>
                        <div className="ml-5 text-left">
                          <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between Business Structures</h2>

              <p className="text-gray-700 leading-relaxed">
                Understand how a Producer Company compares with other business structures.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Producer Company</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">Partnership</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium border-r">Liability</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Limited to share capital</TableCell>
                      <TableCell className="border-r">Limited to shares</TableCell>
                      <TableCell className="border-r">Limited to contribution</TableCell>
                      <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Legal Entity</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Separate legal entity</TableCell>
                      <TableCell className="border-r">Separate legal entity</TableCell>
                      <TableCell className="border-r">Separate legal entity</TableCell>
                      <TableCell>Not separate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Ownership</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Min 10 producers or 2 institutions</TableCell>
                      <TableCell className="border-r">2–200 shareholders</TableCell>
                      <TableCell className="border-r">2+ partners</TableCell>
                      <TableCell>2–50 partners</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Objective</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Mutual benefit of producers</TableCell>
                      <TableCell className="border-r">Profit-oriented business</TableCell>
                      <TableCell className="border-r">Service / business</TableCell>
                      <TableCell>Profit-oriented</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Profit Distribution</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Patronage bonus + limited dividend</TableCell>
                      <TableCell className="border-r">Dividend to shareholders</TableCell>
                      <TableCell className="border-r">Profit sharing</TableCell>
                      <TableCell>Profit sharing</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Compliance</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Moderate compliance</TableCell>
                      <TableCell className="border-r">Higher compliance</TableCell>
                      <TableCell className="border-r">Moderate</TableCell>
                      <TableCell>Minimal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Funding</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Limited external funding</TableCell>
                      <TableCell className="border-r">Easy access to investors</TableCell>
                      <TableCell className="border-r">Limited</TableCell>
                      <TableCell>Limited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Best For</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Farmers, agriculture, producer groups</TableCell>
                      <TableCell className="border-r">Startups, scalable businesses</TableCell>
                      <TableCell className="border-r">Professionals, SMEs</TableCell>
                      <TableCell>Small businesses</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="py-20 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                Documents
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">Documents Required</h2>
              <p className="text-gray-700">
                D BIZ CONSULTANCY assists clients with collecting and preparing all required documentation.
              </p>
            </div>

            {/* Rejection Tips */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-amber-100 mt-1">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-amber-800 mb-2">Common Rejection Prevention Tips</h3>
                <ul className="space-y-1 text-sm text-amber-700">
                  {[
                    "Address proofs must match spelling across PAN / Aadhaar / Passport and the SPICe+ application.",
                    "Registered office proofs must be consistent (owner name on utility bill, rent agreement, and NOC).",
                    "Utility bills and bank statements should be dated within the last 2 months."
                  ].map((tip, i) => (
                    <li key={i} className="flex items-baseline gap-2">
                      <span className="shrink-0">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1: Domestic Nationals */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-left">
                  <h3 className="text-xl font-semibold">For Domestic Nationals</h3>
                </div>
                <div className="bg-white p-6 space-y-5 flex-grow">
                  <div className="flex items-start text-left">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Identity Proof</p>
                      <p className="text-gray-600 mt-1 text-sm">PAN Card (Mandatory), Aadhaar Card, Passport, or Voter ID</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-left">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Address Proof</p>
                      <p className="text-gray-600 mt-1 text-sm">Latest utility bills or bank statements (within last 2 months)</p>
                    </div>
                  </div>

                  <div className="flex items-start text-left">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Photographs</p>
                      <p className="text-gray-600 mt-1 text-sm">Recent passport-sized photographs of all directors and members</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Foreign Nationals */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-left">
                  <h3 className="text-xl font-semibold">For Foreign Nationals / NRIs</h3>
                </div>
                <div className="bg-white p-6 space-y-5 flex-grow">
                  <div className="flex items-start text-left">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Identity Proof</p>
                      <p className="text-gray-600 mt-1 text-sm">Passport (Mandatory)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start text-left">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Address Proof</p>
                      <p className="text-gray-600 mt-1 text-sm">Driving License, Bank Statement, or Residence Permit</p>
                    </div>
                  </div>

                  <div className="flex items-start text-left">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Notarisation / Apostille</p>
                      <p className="text-gray-600 mt-1 text-xs italic leading-relaxed">All documents must be notarised or apostilled per MCA requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Company & Office */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-left">
                  <h3 className="text-xl font-semibold">For Company Registration</h3>
                </div>
                <div className="bg-white p-6 space-y-4 flex-grow">
                  {[
                    { h: "Memorandum of Association (MOA)", d: "Detailing objectives and operational scope." },
                    { h: "Articles of Association (AOA)", d: "Specifies internal rules and governance structure." },
                    { h: "Declaration & Consent Forms", d: "DIR-2, INC-9, and other mandatory declarations." },
                    { h: "DSC & DIN", d: "Digital signatures and IDs for all designated directors." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start text-left">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy">{item.h}</p>
                        <p className="text-gray-600 mt-1 text-sm">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow text-left">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-left">
                  <h3 className="text-xl font-semibold">For Registered Office</h3>
                </div>
                <div className="bg-white p-6 space-y-4 flex-grow text-left">
                  {[
                    { h: "Proof of Address", d: "Electricity or water bill not older than 2 months." },
                    { h: "Rent Agreement & NOC", d: "Valid lease document along with an NOC from property owner." },
                    { h: "Ownership Proof", d: "Sale deed or property tax receipt for self-owned premises." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start text-left">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy">{item.h}</p>
                        <p className="text-gray-600 mt-1 text-sm">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process Section */}
        <section id="process" className="py-16 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Registration Process
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Producer Company Registration Process</h2>

              <p className="text-gray-700 leading-relaxed">
                A Producer Company provides a structured platform for farmers and producers to carry out collective business activities with limited liability. The registration process involves submission of documents, MCA filings, and compliance with legal requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">1</span>
                    Obtain a Digital Signature Certificate (DSC)
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    A Digital Signature Certificate (DSC) is mandatory for all proposed directors to sign electronic documents on the MCA portal. It ensures authenticity and security of filings. Our team assists in obtaining DSC from certified authorities.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">2</span>
                    File the SPICe+ Form
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">The SPICe+ form is an integrated online form used for Producer Company incorporation.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span><strong>Part A:</strong> For name reservation (must include "Producer Company Limited")</span>
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span><strong>Part B:</strong> For incorporation, DIN allotment, PAN, TAN, and other registrations</span>
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span><strong>AGILE-PRO-S (INC-35):</strong> Covers GST registration, EPFO, ESIC, bank account opening, and other services</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">3</span>
                    Draft and File the MOA and AOA
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="font-bold text-[#1a365d] text-sm uppercase tracking-wider mb-1">Memorandum of Association (MOA)</p>
                    <p className="text-gray-700 text-sm">Defines producer-related objectives such as production, procurement, processing, and marketing activities.</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#1a365d] text-sm uppercase tracking-wider mb-1">Articles of Association (AOA)</p>
                    <p className="text-gray-700 text-sm">Specifies internal governance, member rights, and management structure.</p>
                  </div>
                  <p className="text-gray-600 text-sm italic">We draft and file these documents ensuring compliance with legal provisions.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">4</span>
                    Obtain the Certificate of Incorporation
                  </h3>
                </div>
                <div className="p-6 text-left">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Registrar of Companies (ROC) issues the Certificate of Incorporation, confirming the legal existence of the Producer Company.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span>This includes CIN, PAN, and TAN of the company.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">5</span>
                    Opening Bank Account
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">After incorporation, open a current bank account in the company's name for all financial transactions. Submit:</p>
                  <ul className="space-y-3">
                    {[
                      "Certificate of Incorporation",
                      "Permanent Account Number (PAN)",
                      "MOA & AOA",
                      "Certified Board Resolution",
                      "KYC of directors & authorized signatories"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">6</span>
                    Depositing Capital Contribution
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Members must deposit their agreed share capital into the company's bank account as per MOA.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span>Each member contributes as per shareholding</span>
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span>Bank statement serves as proof of capital deposit</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Step 7 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-[#1a365d] to-[#1a365d]/90 p-4 text-white">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="flex items-center justify-center bg-white text-[#1a365d] rounded-full h-8 w-8 text-lg mr-3 font-bold">7</span>
                    Commencement of Business Compliance (INC-20A)
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Filing of INC-20A is mandatory for Producer Companies with share capital before commencing business operations.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span>Declaration confirming receipt of share capital</span>
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span>Verified by a Chartered Accountant / Company Secretary</span>
                    </li>
                    <li className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <span>Must be filed within 180 days of incorporation</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 bg-amber-50/50 p-3 rounded text-xs text-amber-800 italic">
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>Non-compliance may result in penalties and action by ROC.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="py-20 bg-gray-50 border-y border-gray-100 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Compliance
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory MCA Compliance for Producer Companies</h2>

              <p className="text-gray-700 leading-relaxed">
                Incorporating a Producer Company is just the beginning; maintaining compliance with the Ministry of Corporate Affairs (MCA) and other applicable laws is essential to retain legal status and avoid penalties. Regular filings, meetings, and audits ensure smooth functioning and transparency.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#1a365d] hover:bg-[#1a365d]/95 transition-colors">
                      <TableHead className="py-5 font-semibold text-white min-w-[180px]">Aspect</TableHead>
                      <TableHead className="py-5 font-bold text-white min-w-[280px]">Compliance Requirement</TableHead>
                      <TableHead className="py-5 font-bold text-white min-w-[200px]">Frequency / Timeline</TableHead>
                      <TableHead className="py-5 font-bold text-white min-w-[220px]">Why It's Important</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { a: "First Board Meeting", r: "Conduct first Board Meeting and record initial resolutions", t: "Within 30 days of incorporation", w: "Establishes governance structure and records" },
                      { a: "Appointment of First Auditor", r: "Appoint statutory auditor and file ADT-1 (if applicable)", t: "Within 30 days (or 90 days by members)", w: "Ensures audit compliance and financial transparency" },
                      { a: "Commencement of Business (INC-20A)", r: "File declaration before starting business", t: "Within 180 days of incorporation", w: "Mandatory to commence operations legally" },
                      { a: "Board Meetings", r: "Conduct Board Meetings and maintain minutes", t: "Minimum 4 per year (or as applicable)", w: "Ensures proper governance and decision-making" },
                      { a: "Statutory Audit", r: "Audit of financial statements by Chartered Accountant", t: "Annually", w: "Ensures compliance and financial accuracy" },
                      { a: "Annual General Meeting (AGM)", r: "Hold AGM for approval of financials and decisions", t: "Annually (within 6 months of FY end)", w: "Ensures member participation and compliance" },
                      { a: "Financial Statements Filing (AOC-4)", r: "File financial statements with ROC", t: "Within 30 days of AGM", w: "Mandatory statutory filing" },
                      { a: "Annual Return Filing (MGT-7)", r: "File annual return with ROC", t: "Within 60 days of AGM", w: "Updates company records with MCA" },
                      { a: "Director KYC (DIR-3 KYC)", r: "File KYC for directors and update changes", t: "As per MCA timelines", w: "Avoids DIN deactivation" },
                      { a: "Income Tax Filing", r: "File Income Tax Return (ITR-6)", t: "Annually", w: "Ensures tax compliance and avoids penalties" }
                    ].map((row, i) => (
                      <TableRow key={i} className="hover:bg-gray-50 transition-colors even:bg-gray-50">
                        <TableCell className="font-medium text-[#1a365d] align-top py-4">{row.a}</TableCell>
                        <TableCell className="text-gray-700 align-top py-4">{row.r}</TableCell>
                        <TableCell className="text-[#1a365d] font-medium align-top py-4">{row.t}</TableCell>
                        <TableCell className="text-gray-600 align-top py-4 text-sm leading-relaxed">{row.w}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Post-Incorporation Compliance Timeline */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-12 text-center">Post-Incorporation Compliance Timeline</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { time: "30", unit: "Days", text: "First Board Meeting + First Auditor Appointment" },
                  { time: "180", unit: "Days", text: "INC-20A (Commencement of Business)" },
                  { time: "FY End", unit: "Annual Cycle", text: "Audit → AGM → AOC-4 (30d) → MGT-7 (60d)" },
                  { time: "3 Yr", unit: "DIR-3 KYC-Web", text: "Every 3rd FY cycle (effective March 2026)" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center">
                    <div className="w-[72px] h-[72px] rounded-full bg-[#f0f9f9] flex flex-col items-center justify-center mb-4">
                      <span className="text-[#0891b2] font-bold text-lg leading-tight">{item.time}</span>
                    </div>
                    <p className="font-semibold text-[#1a365d] mb-2 text-sm">{item.unit}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-400 mt-10 italic">Last updated: Feb 2026</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why D BIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for Producer Company Registration?</h2>
              <p className="text-gray-700 leading-relaxed">
                Registering a Producer Company is a crucial step for farmers and producers to build a structured and legally compliant business. The process involves proper documentation, drafting, and regulatory filings, which can be complex without expert guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What D BIZ Handles
                </h3>
                <ul className="space-y-3">
                  {[
                    "Document validation and pre-registration review",
                    "Name selection and approval (with \"Producer Company Limited\")",
                    "Object clause drafting (producer-focused and compliant)",
                    "DSC procurement and DIN application",
                    "SPICe+ / AGILE-PRO-S filing and ROC follow-up",
                    "MOA & AOA drafting specific to producer activities",
                    "ROC resubmission handling (if required)",
                    "Post-incorporation setup (PAN, TAN, bank account guidance)",
                    "INC-20A filing and commencement support",
                    "Annual compliance guidance and reminders"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                </h3>
                <ul className="space-y-3">
                  {[
                    "Identity and address proof of all directors and members",
                    "Registered office address proof (rent agreement / ownership documents)",
                    "Passport-sized photographs",
                    "Details of producer activities (agriculture, dairy, etc.)",
                    "Member and shareholding details",
                    "Capital contribution details",
                    "Bank statement confirming share capital deposit"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dark Call-to-Action Block */}
            <div className="bg-[#1a365d] rounded-2xl p-8 lg:p-12 text-white shadow-xl mt-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-blue-50 leading-relaxed text-lg">
                    D BIZ CONSULTANCY simplifies the entire Producer Company registration process by managing documentation, drafting, and filings efficiently. From preparing compliant MOA & AOA to handling MCA approvals and post-registration setup, we ensure your company is legally strong from day one.
                  </p>
                  <p className="text-blue-50 leading-relaxed text-lg">
                    With our expertise, you can focus on your production and business growth while we take care of compliance and legal requirements. <span className="font-bold">D BIZ CONSULTANCY</span> is your trusted partner for building a successful Producer Company.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Expert Guidance", desc: "Personalized support from incorporation specialists" },
                    { title: "End-to-End Service", desc: "Complete assistance from registration to compliance" },
                    { title: "Transparent Process", desc: "Clear communication with no hidden charges" },
                    { title: "Timely Delivery", desc: "Quick turnaround time for all services" }
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-[#244268] rounded-xl p-6 border border-[#2d4d76]">
                      <CheckCircle2 className="h-6 w-6 text-[#0891b2] mb-3" />
                      <h4 className="text-xl text-white font-bold mb-2">{feature.title}</h4>
                      <p className="text-base text-blue-100/70 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-16 bg-gray-50 border-t border-gray-100 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-4">FAQs on Producer Company Registration</h2>
              <p className="text-sm text-gray-500 mb-6 italic">Last updated: Feb 2026</p>
              <p className="text-gray-700 leading-relaxed text-[17px] max-w-3xl mx-auto">
                Whether you're understanding eligibility, registration process, compliance, funding, or operational aspects — here are the most relevant and practical questions answered clearly.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {producerCompanyFaq.map((faq, index) => (
                  <AccordionItem key={`faq-${index}`} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-left font-medium text-base">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ProducerCompanyPage;