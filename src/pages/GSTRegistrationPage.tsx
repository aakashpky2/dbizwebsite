import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  MessageCircle,
  AlertTriangle,
  Award,
  TrendingUp,
  CreditCard,
  Target,
  Sparkles,
  Layers,
  MapPin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { gstFaq } from "@/data/gstFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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



const EnhancedGSTRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Apply global scroll animations
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        {/* Dynamic Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CachedImage
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
              alt="GST Services Professional Background"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          
          {/* Drastically reduced gradient opacity so the image pops heavily */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-dbiz-navy/95 via-dbiz-navy/60 to-transparent"></div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/20 border border-dbiz-teal/30 text-dbiz-teal text-sm font-bold tracking-wider mb-6 uppercase animate-on-scroll">
                  <span className="w-2.5 h-2.5 rounded-full bg-dbiz-teal mr-2 animate-pulse"></span>
                  Fast GST Registration | Expert Filing | Complete Compliance Support
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  GST Registration Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  D BIZ CONSULTANCY provides complete GST registration services. From eligibility assessment to GSTIN issuance and compliance setup, our experts ensure a smooth, error-free registration process.
                </p>

                <div className="flex flex-wrap gap-4 animate-on-scroll [animation-delay:300ms]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:-translate-y-1 transition-transform">
                        Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  <Button size="lg" variant="outline" className="border-white text-slate-50 bg-white/10 hover:bg-white/20 text-lg px-8 py-6 rounded-xl backdrop-blur-sm" onClick={() => handleSectionClick('overview')}>
                    Get Free Consultation
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:col-span-2 relative animate-on-scroll [animation-delay:400ms]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-2xl blur-2xl"></div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl relative transition-transform transform hover:scale-[1.02] overflow-hidden">
                  {/* Decorative ambient light */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/10 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4 relative z-10">Quick Highlights</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-dbiz-teal/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Timeline</p>
                        <p className="text-xl font-bold text-white">1 - 2 Days</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-dbiz-teal/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Compliance</p>
                        <p className="text-xl font-bold text-white">100% Filing Accuracy</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-dbiz-teal/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Support</p>
                        <p className="text-xl font-bold text-white">Expert Guidance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Wrapper */}
        <section className="sticky top-16 z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'features', icon: Shield, label: 'Features' },
                { id: 'benefits', icon: TrendingUp, label: 'Benefits & Mandates' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <div
                  key={item.id}
                  className={`px-5 py-2.5 whitespace-nowrap cursor-pointer flex items-center rounded-full text-sm font-semibold transition-all duration-300 mr-2 ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-dbiz-navy'
                  }`}
                  onClick={() => handleSectionClick(item.id)}
                >
                  <item.icon className={`mr-2 h-4 w-4 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} /> 
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Overview Section */}
        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 animate-on-scroll [animation-delay:100ms]">What is GST Registration?</h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    GST (Goods and Services Tax) Registration is a statutory requirement under the GST Act, 2017 for businesses engaged in the supply of goods or services in India. It establishes the business as a legally recognized taxable entity under the GST regime.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Upon registration, a unique GST Identification Number (GSTIN) is allotted, which must be used on invoices, returns, and all tax-related documents. Registered businesses are authorized to collect GST from customers and can claim Input Tax Credit (ITC) on eligible purchases, thereby reducing their overall tax liability.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    GST has replaced multiple indirect taxes such as VAT, Service Tax, and Excise Duty, creating a unified and transparent tax system across India. This simplifies compliance and facilitates seamless interstate trade.
                  </p>
                </div>

                {/* Importance box */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-8 animate-on-scroll [animation-delay:300ms]">
                   <h3 className="text-xl font-bold text-dbiz-navy mb-4">Why GST Registration is Important</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Ensures legal recognition as a tax-compliant entity",
                        "Enables collection of GST from customers",
                        "Allows claiming input tax credit to reduce costs",
                        "Builds trust with clients, vendors, and financial institutions",
                        "Mandatory for expanding business across states or online platforms"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-medium text-gray-700 leading-snug">{item}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm animate-on-scroll [animation-delay:400ms]">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <CachedImage
                    src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=600&q=80"
                    alt="GST Registration Process"
                    className="w-full h-48 object-cover rounded-xl shadow-md mb-6 relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-dbiz-navy underline underline-offset-8 decoration-dbiz-teal/30">Tax Compliance in India</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed font-medium">
                      The GST regime aims to create a "One Nation, One Tax" system, removing barriers and ensuring transparency in business transactions.
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="bg-dbiz-teal/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div className="ml-3">
                          <p className="text-xs text-gray-500 uppercase font-black">Need assistance?</p>
                          <p className="text-dbiz-navy font-bold">Expert GST Support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Framework Section - Moved outside columns for true centering */}
            <div className="mt-20 pt-10 border-t border-gray-100 animate-on-scroll [animation-delay:450ms]">
              <h3 className="text-2xl font-bold text-dbiz-navy mb-4 uppercase tracking-tighter text-center">Legal Framework</h3>
              <p className="text-gray-600 mb-10 text-base font-medium text-center max-w-2xl mx-auto">GST Registration is governed by the following statutory laws that regulate India's unified tax structure:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "CGST Act, 2017", desc: "Governs central GST on intra-state transactions" },
                  { title: "SGST Act", desc: "Governs state GST (varies by state)" },
                  { title: "IGST Act, 2017", desc: "Governs interstate supply of goods/services" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-dbiz-teal/30 transition-all duration-500 group text-center">
                    <div className="w-12 h-12 rounded-2xl bg-dbiz-teal/10 flex items-center justify-center text-dbiz-teal font-black text-sm mb-6 group-hover:bg-dbiz-teal group-hover:text-white transition-colors mx-auto">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-dbiz-navy mb-4 tracking-tight group-hover:text-dbiz-teal transition-colors uppercase">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100/50 italic max-w-3xl mx-auto">
                <Shield className="h-6 w-6 text-dbiz-teal shrink-0" />
                <p className="text-sm text-gray-400 font-bold leading-relaxed tracking-tight">
                  These laws collectively regulate registration, tax collection, filing, compliance, and penalties.
                </p>
              </div>
            </div>

            {/* Minimum Requirements box - Re-aligned to full center under Legal Framework */}
            <div className="mt-20 pt-10 border-t border-gray-100 animate-on-scroll [animation-delay:250ms] max-w-5xl mx-auto">
               <h3 className="text-2xl font-black text-dbiz-navy mb-10 uppercase tracking-tighter text-center">Minimum Requirements for GST Registration</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "Business Activity", desc: "Must be engaged in supply of goods or services", icon: Building2 },
                    { title: "PAN Card", desc: "Mandatory for all types of entities", icon: CreditCard },
                    { title: "Aadhaar", desc: "Required for identity verification and authentication", icon: Users },
                    { title: "Place of Business", desc: "Registered office or business location proof required", icon: MapPin },
                    { title: "Bank Account", desc: "Active bank account for business transactions", icon: Target }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] bg-dbiz-navy border border-dbiz-navy/20 hover:border-dbiz-teal/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group shadow-[0_10px_40px_rgba(11,36,71,0.08)]">
                      <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl mb-6 shadow-sm border border-white/10 group-hover:bg-dbiz-teal transition-colors duration-500">
                        <item.icon className="h-7 w-7 text-dbiz-teal group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <p className="text-xl font-black text-white tracking-tight group-hover:text-dbiz-teal transition-colors">{item.title}</p>
                        <p className="text-sm text-blue-100/70 font-medium leading-relaxed mt-3 px-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Eligibility Conditions box - Re-aligned to full center */}
            <div className="mt-20 pt-10 border-t border-gray-100 animate-on-scroll [animation-delay:350ms] max-w-5xl mx-auto">
               <div className="text-center mb-10">
                 <h3 className="text-2xl font-black text-dbiz-navy uppercase tracking-tighter">Eligibility Conditions <span className="text-sm text-gray-500 font-bold normal-case tracking-normal ml-2 block sm:inline mt-2 sm:mt-0">(Quick Understanding)</span></h3>
                 <p className="text-base font-bold text-gray-600 mt-3">GST registration is generally mandatory if:</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Turnover Threshold", desc: "Business turnover exceeds the prescribed threshold" },
                    { title: "Interstate Supply", desc: "Business involves interstate supply of goods/services" },
                    { title: "E-Commerce", desc: "Selling through digital e-commerce platforms" },
                    { title: "Mandatory Policy", desc: "Required by clients or government authorities" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-dbiz-teal/30 hover:shadow-xl transition-all duration-300 group">
                      <div className="bg-dbiz-teal/5 p-4 rounded-2xl mb-5 group-hover:bg-dbiz-teal transition-colors duration-300">
                        <CheckCircle2 className="h-7 w-7 text-dbiz-teal group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-base font-black text-dbiz-navy mb-3 tracking-tight group-hover:text-dbiz-teal transition-colors">{item.title}</p>
                      <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section id="features" className="py-28 relative overflow-hidden bg-dbiz-navy scroll-mt-32">
          {/* Decorative back-glow elements for Dark Mode */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-dbiz-teal/10 rounded-full blur-[160px] opacity-80 animate-pulse transition-all duration-[10000ms]"></div>
            <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[180px] opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,36,71,0.4)_100%)]"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-dbiz-navy text-sm font-bold tracking-[0.4em] mb-8 border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                2. KEY FEATURES OF GST REGISTRATION
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight [animation-delay:100ms]">Detailed Functional Features</h2>
              <div className="w-24 h-1.5 bg-dbiz-teal mx-auto rounded-full mb-4 shadow-lg shadow-dbiz-teal/20"></div>
            </div>

            <Carousel 
              opts={{
                align: "start",
                loop: true,
                autoplay: true,
                interval: 2000,
              }}
              className="w-full relative group/carousel"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Shield, title: "Legal Recognition of Business", desc: "GST registration establishes the business as a legally recognized taxable entity under the GST Act, 2017. It ensures that the business operates in compliance with Indian tax laws.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" },
                  { icon: CheckCircle2, title: "Unique GSTIN Allotment", desc: "Upon registration, a 15-digit GST Identification Number (GSTIN) is issued. This number is used for all GST-related activities including invoicing, return filing, and communication with tax authorities.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" },
                  { icon: CreditCard, title: "Authority to Collect Tax", desc: "Only registered businesses are legally permitted to collect GST from customers. This ensures proper tax flow to the government and avoids penalties for unauthorized collection.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=600&q=80" },
                  { icon: TrendingUp, title: "Input Tax Credit (ITC) Advantage", desc: "Registered businesses can claim ITC on GST paid for purchases, expenses, and services used in business. This reduces the overall tax burden and avoids cascading (tax on tax effect).", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                  { icon: MapPin, title: "Interstate Supply Without Restrictions", desc: "GST registration allows businesses to supply goods or services across state borders without additional tax barriers, enabling smooth nationwide operations.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80" },
                  { icon: FileText, title: "Mandatory Return Filing & Compliance", desc: "Registered entities must file periodic GST returns such as GSTR-1 and GSTR-3B. This ensures transparency, proper record-keeping, and compliance with statutory requirements.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                  { icon: Building2, title: "Composition Scheme for Small Businesses", desc: "Eligible small taxpayers can opt for the composition scheme, which offers lower tax rates and simplified compliance, though with limited ITC benefits.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
                  { icon: Users, title: "Facilitates E-commerce Operations", desc: "GST registration is mandatory for sellers dealing through e-commerce platforms like Amazon or Flipkart, enabling them to operate legally in the digital marketplace.", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80" },
                  { icon: Award, title: "Enhances Business Credibility", desc: "Having GST registration increases the credibility of the business among clients, vendors, and financial institutions, making it easier to build trust and secure contracts.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" },
                  { icon: Shield, title: "Uniform Tax Structure Across India", desc: "GST replaces multiple indirect taxes like VAT, Service Tax, and Excise Duty, creating a single, unified tax system that simplifies compliance and improves efficiency in business operations.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" }
                ].map((feature, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex animate-on-scroll" style={{ animationDelay: `${idx * 100 + 200}ms` }}>
                    <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 bg-white overflow-hidden group w-full flex flex-col h-full">
                      <div className="relative h-72 overflow-hidden shrink-0">
                        <CachedImage 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/60 via-dbiz-navy/20 to-transparent flex items-end p-8">
                          <div className="bg-dbiz-teal/30 backdrop-blur-md p-3 rounded-2xl border border-white/30 shadow-lg group-hover:bg-dbiz-teal/50 transition-colors duration-300">
                            <feature.icon className="h-7 w-7 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow">
                        <CardHeader className="pb-4 pt-8 px-8">
                          <CardTitle className="text-2xl font-black text-dbiz-navy group-hover:text-dbiz-teal transition-colors tracking-tight leading-tight">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-10 pt-0 flex-grow">
                          <p className="text-gray-600 text-base leading-relaxed font-medium">{feature.desc}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-3 mt-12 pr-4 relative z-20">
                <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-2xl bg-white border-2 border-dbiz-teal/10 hover:border-dbiz-teal hover:bg-dbiz-teal hover:text-white shadow-sm transition-all duration-300" />
                <CarouselNext className="static translate-y-0 h-14 w-14 rounded-2xl bg-white border-2 border-dbiz-teal/10 hover:border-dbiz-teal hover:bg-dbiz-teal hover:text-white shadow-sm transition-all duration-300" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* 3. Benefits & Mandates Section */}
        <section id="benefits" className="py-24 scroll-mt-32 border-y border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col xl:flex-row gap-16">
              
              <div className="xl:w-1/3">
                <div className="sticky top-32 animate-on-scroll">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20">
                    3. BENEFITS OF GST REGISTRATION
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-8 tracking-tight leading-tight [animation-delay:200ms]">
                    Categorized Advantages
                  </h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 [animation-delay:400ms]">
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Financial Growth" 
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Growth Focused</div>
                      <p className="text-sm opacity-90 text-blue-50">Proper tax structuring unlocks infinite scale.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-2/3 space-y-16">
                
                {/* Benefits Grids */}
                <div className="animate-on-scroll [animation-delay:200ms]">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">Categorized Benefits</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Award className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-dbiz-navy mb-3">Business Advantages</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Limited risk of legal penalties</li>
                        <li>• Improved credibility and trust</li>
                        <li>• Better vendor and customer relationships</li>
                        <li>• Eligibility for government contracts</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-emerald-600 h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Input tax credit reduces cost</li>
                        <li>• Better cash flow management</li>
                        <li>• Transparent taxation system</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="text-purple-600 h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Expansion to interstate markets</li>
                        <li>• Access to e-commerce platforms</li>
                        <li>• Increased scalability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* When is it Mandatory Table */}
                <div className="animate-on-scroll [animation-delay:400ms]">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When GST Registration is Mandatory</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="font-extrabold text-dbiz-navy py-4">Condition</TableHead>
                          <TableHead className="font-extrabold text-dbiz-navy py-4">Requirement</TableHead>
                          <TableHead className="font-extrabold text-dbiz-navy py-4">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-bold text-gray-800">Turnover (Services)</TableCell>
                          <TableCell className="text-black font-bold">Above ₹20 Lakhs</TableCell>
                          <TableCell className="text-gray-600 text-sm">Businesses providing services must register under GST if their aggregate annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states).</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold text-gray-800">Turnover (Goods)</TableCell>
                          <TableCell className="text-black font-bold">Above ₹40 Lakhs (varies by state)</TableCell>
                          <TableCell className="text-gray-600 text-sm">Businesses dealing in goods must obtain GST registration if turnover exceeds ₹40 lakhs (₹20 lakhs in some states based on government notifications).</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-gray-800">Interstate Supply</TableCell>
                          <TableCell className="text-black font-bold">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-sm">Any business supplying goods or services across state borders must register under GST, irrespective of turnover limits.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold text-gray-800">E-commerce Sellers</TableCell>
                          <TableCell className="text-black font-bold">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-sm">Sellers operating through e-commerce platforms (like Amazon, Flipkart, etc.) must obtain GST registration, regardless of turnover.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-gray-800">Input Service Distributor (ISD)</TableCell>
                          <TableCell className="text-black font-bold">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-sm">Entities distributing input tax credit to branches or units must compulsorily register under GST as an ISD.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 5. Documents Section */}
        <section id="documents" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20">
                5. DOCUMENTATION REQUIREMENTS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight [animation-delay:200ms]">Structured Document Lists</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:100ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=600&q=80" 
                    alt="Individual Documentation" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-8">
                    <div className="bg-dbiz-teal/20 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Individual / Proprietor</h3>
                  <ul className="space-y-5">
                    {["PAN Card", "Aadhaar Card", "Photograph", "Bank account details", "Address proof"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:200ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" 
                    alt="Corporate Documentation" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-8">
                    <div className="bg-dbiz-teal/20 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Company / LLP</h3>
                  <ul className="space-y-5">
                    {["Certificate of Incorporation", "PAN of Company", "MOA & AOA / LLP Agreement", "Directors’ KYC documents"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:300ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
                    alt="Office Premises Proof" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-8">
                    <div className="bg-dbiz-teal/20 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Registered Office Proof</h3>
                  <ul className="space-y-5">
                    {["Rent Agreement + NOC (if rented)", "Electricity Bill (latest)", "Ownership proof (if owned)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Documentation Guidelines - New Premium Box */}
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-dbiz-navy to-[#1a365d] rounded-[2.5rem] p-1.5 shadow-2xl animate-on-scroll [animation-delay:400ms]">
              <div className="bg-white/5 backdrop-blur-sm rounded-[2.3rem] overflow-hidden border border-white/10 p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-xs font-black tracking-widest mb-6 border border-dbiz-teal/20 uppercase">
                      <Sparkles className="h-3 w-3" />
                      Critical
                    </div>
                    <h3 className="text-3xl font-black text-white leading-tight">Important Documentation Guidelines</h3>
                    <p className="text-blue-100/60 mt-4 font-medium italic">Standard protocols for error-free filing.</p>
                  </div>
                  
                  <div className="md:w-2/3 grid sm:grid-cols-1 gap-6">
                    {[
                      { title: "Detail Verification", desc: "Details must match precisely across all submitted documents" },
                      { title: "Document Recency", desc: "Utility bills must be recent (strictly within the latest 2 months)" },
                      { title: "Address Consistency", desc: "Consistency in registered office address is absolutely critical for approval" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 group/guideline">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/guideline:bg-dbiz-teal transition-colors">
                          <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/guideline:text-white" />
                        </div>
                        <div>
                          <p className="font-black text-white text-lg tracking-tight mb-1">{item.title}</p>
                          <p className="text-blue-100/70 text-[15px] font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section
          id="process"
          className="py-24 scroll-mt-32 relative overflow-hidden border-y border-[#c8e6e6]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "local",
          }}
        >
          {/* Dark overlay to keep cards readable */}
          <div className="absolute inset-0 bg-dbiz-navy/75 backdrop-blur-[2px] z-0"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20 tracking-wider">
                6. REGISTRATION PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight [animation-delay:200ms]">Step-by-Step Detailed Guide</h2>
            </div>

            {/* Timeline Container */}
            <div className="max-w-5xl mx-auto relative py-8">

              {/* Vertical center line — desktop only */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full z-0"></div>

              {[
                { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and KYC details. All documents are carefully verified to ensure accuracy and consistency, as mismatches may lead to rejection." },
                { step: "2", title: "Creation of Temporary Reference Number (TRN)", desc: "Navigate to portal, enter basic details (PAN, mobile, email). OTP verification is completed, TRN is generated securely." },
                { step: "3", title: "Filling GST Application", desc: "Using TRN, full application is completed including Business Details, Authorized Signatories, Bank accounts, and uploading forms." },
                { step: "4", title: "Aadhaar Authentication", desc: "Opting for Aadhaar authentication generates OTP. If successful, ensures significantly faster approval. If not, physical verification." },
                { step: "5", title: "Application Submission", desc: "Digital submission using DSC for companies or EVC for proprietors. Application Reference Number (ARN) instantly generated." },
                { step: "6", title: "Department Verification", desc: "GST officer reviews application. If clarification is needed, notice GST REG-03 is issued. Proper reply must be filed extremely fast." },
                { step: "7", title: "GSTIN Allotment & Cert Issue", desc: "Once perfectly approved, the new 15-digit GSTIN is activated. Form GST REG-06 Certificate generated indicating full compliance." }
              ].map((item, index) => {
                const isOdd = index % 2 === 0; // 0-indexed: 0,2,4,6 → left; 1,3,5 → right
                const isEvenStep = !isOdd;
                return (
                  <div
                    key={index}
                    className={`hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-8 animate-on-scroll ${isEvenStep ? '-mt-20' : index > 0 ? 'mt-12' : ''}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* LEFT slot */}
                    {isOdd ? (
                      <div className="flex justify-end pr-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-right">
                          <h3 className="text-xl lg:text-2xl font-bold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {/* CENTER — numbered circle */}
                    <div className="flex flex-col items-center z-10 relative">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold text-xl shadow-lg hover:bg-dbiz-teal hover:text-white transition-colors duration-300 shrink-0">
                        {item.step}
                      </div>
                    </div>

                    {/* RIGHT slot */}
                    {isEvenStep ? (
                      <div className="flex justify-start pl-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-left">
                          <h3 className="text-xl lg:text-2xl font-bold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}

              {/* Mobile: vertical stacked list */}
              <div className="md:hidden space-y-8 relative pl-10">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent rounded-full"></div>
                {[
                  { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and KYC details. All documents are carefully verified to ensure accuracy and consistency, as mismatches may lead to rejection." },
                  { step: "2", title: "Creation of Temporary Reference Number (TRN)", desc: "Navigate to portal, enter basic details (PAN, mobile, email). OTP verification is completed, TRN is generated securely." },
                  { step: "3", title: "Filling GST Application", desc: "Using TRN, full application is completed including Business Details, Authorized Signatories, Bank accounts, and uploading forms." },
                  { step: "4", title: "Aadhaar Authentication", desc: "Opting for Aadhaar authentication generates OTP. If successful, ensures significantly faster approval. If not, physical verification." },
                  { step: "5", title: "Application Submission", desc: "Digital submission using DSC for companies or EVC for proprietors. Application Reference Number (ARN) instantly generated." },
                  { step: "6", title: "Department Verification", desc: "GST officer reviews application. If clarification is needed, notice GST REG-03 is issued. Proper reply must be filed extremely fast." },
                  { step: "7", title: "GSTIN Allotment & Cert Issue", desc: "Once perfectly approved, the new 15-digit GSTIN is activated. Form GST REG-06 Certificate generated indicating full compliance." }
                ].map((item, index) => (
                  <div key={index} className="relative animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="absolute -left-10 top-6 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold shadow-md z-10">
                      {item.step}
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-dbiz-navy mb-3">Step {item.step}: {item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* 7. Timeline & Why Choose D BIZ Section */}
        <section className="py-24 bg-[#1a365d] text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              <div>
                <h3 className="text-3xl font-extrabold mb-8 text-white">7. Processing Timeline</h3>
                <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold flex items-center gap-3"><Clock className="text-dbiz-teal h-5 w-5"/> Application Filing</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Same Day</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold flex items-center gap-3"><Users className="text-dbiz-teal h-5 w-5"/> Processing Validation</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">1-2 Working Days</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-4">
                      <span className="font-bold flex items-center gap-3"><CheckCircle2 className="text-dbiz-teal h-5 w-5"/> Approval (Normal)</span>
                      <span className="bg-dbiz-teal px-3 py-1 rounded-full text-sm font-bold">1-2 Working Days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold flex items-center gap-3"><AlertTriangle className="text-amber-400 h-5 w-5"/> Dept Query Case</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">Up to 4 Days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold mb-8 text-white">8. Why Choose DBIZ?</h3>
                <p className="text-blue-100/90 leading-relaxed mb-8">
                  Registering under GST involves technical filings, tricky validations, and zero margin for error. We make it completely stress-free. Our approach prevents rejection and guarantees your business operates legally from day one.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Expert GST professionals",
                    "Quick turnaround times",
                    "Aadhaar OTP support",
                    "Status tracking",
                    "Compliance-focused",
                    "Reply to Dept Queries",
                  ].map((adv, i) => (
                    <div key={i} className="flex gap-3 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-sm text-blue-50">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 10. FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                9. FAQs on GST Registration
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight [animation-delay:100ms]">Most Commonly Asked Questions</h2>
              <p className="text-gray-500 mb-8 font-medium [animation-delay:200ms]">Last updated: March 2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {gstFaq.map((faq, idx) => (
                  <AccordionItem key={faq.value} value={faq.value} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll" style={{ animationDelay: `${idx * 50 + 300}ms` }}>
                    <AccordionTrigger className="text-[17px] font-bold text-dbiz-navy hover:text-dbiz-teal hover:no-underline py-5 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed text-[15px] pb-6 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 11. Final Call To Action */}
        <section className="py-20 bg-dbiz-teal text-white">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 shadow-sm">Get GST Registration in 3–7 Days</h2>
            <p className="text-xl mb-12 opacity-90 font-medium">Avoid penalties and start your business legally today with India's best expert assistance framework.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="lg" className="bg-white text-dbiz-teal hover:bg-gray-100 text-lg px-10 py-7 rounded-2xl font-bold shadow-xl transition-transform hover:-translate-y-1">
                    Apply Now <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0 rounded-2xl">
                  <ContactOptions />
                </PopoverContent>
              </Popover>
              <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white/10 text-lg px-10 py-7 rounded-2xl font-bold transition-all">
                Talk directly to an Expert
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default EnhancedGSTRegistrationPage;
