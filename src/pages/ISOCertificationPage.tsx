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
  MapPin,
  Zap,
  Activity,
  Repeat,
  RefreshCw,
  Search,
  FileCheck
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
import { isoFaq } from "@/data/isoFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

// ── ISO Timeline Mapping ──
const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application & Documentation",
    duration: "1 – 2 Days",
    desc: "Collection of business details, document verification, and preparation of ISO documentation.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Process Implementation",
    duration: "2 – 5 Days",
    desc: "Implementation of required ISO standards, SOPs, and internal processes within the organization.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Internal Audit",
    duration: "1 – 2 Days",
    desc: "Internal audit conducted to identify gaps and ensure readiness for certification audit.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Certification Audit",
    duration: "1 – 2 Days",
    desc: "External audit by certification body to verify compliance with ISO standards.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];

const TIMELINE_ICONS = [Clock, FileCheck, Search, Award];

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

const ISOCertificationPage = () => {
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
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1440&q=60"
              alt="ISO Certification Services Professional Background"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-dbiz-navy/95 via-dbiz-navy/70 to-transparent"></div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-start mt-12 md:mt-[-30px]">
              {/* Left Content */}
              <div className="md:col-span-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2.5 h-2.5 rounded-full bg-dbiz-teal mr-2"></span>
                  Fast ISO Certification | Expert Documentation | Complete Compliance Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  ISO Certification Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete ISO Certification services. From eligibility assessment to certification issuance and compliance setup, our experts ensure a smooth, error-free process.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                  >
                    Apply Now
                  </Button>
                </div>

                {/* Status Detail */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>5 – 10 Days</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>100% Documentation Accuracy</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-dbiz-teal" />
                      <span>Expert Guidance</span>
                   </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="hidden md:block md:col-span-4 relative animate-on-scroll [animation-delay:400ms]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-2xl blur-3xl opacity-50"></div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative transition-transform transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/5 rounded-full blur-3xl"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=60" 
                    alt="ISO Certification Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">5-10</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Days</div>
                    </div>

                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Accuracy</div>
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
                { id: 'benefits', icon: TrendingUp, label: 'Benefits' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-5 py-2.5 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[17px] font-normal transition-all duration-300 mr-2 ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-dbiz-navy'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }}
                >
                  <item.icon className={`mr-2 h-4 w-4 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} /> 
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Overview Section */}
        <section id="overview" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 animate-on-scroll [animation-delay:100ms] tracking-tight">
                  What is ISO Certification?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    ISO Certification is an internationally recognized standard issued by authorized certification bodies to ensure that a business follows defined quality, safety, efficiency, and management systems.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    It establishes the organization as a compliant and standardized entity operating as per global best practices. Once certified, the business receives an ISO Certificate (such as ISO 9001, ISO 14001, ISO 22000, etc.), which must be used in business communications, tenders, and compliance documentation.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    ISO certification helps improve internal processes, maintain consistency in operations, and enhance customer satisfaction by following structured systems.
                  </p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why ISO Certification is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal">ISO certification is not just a quality mark — it plays a critical role in business growth:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Ensures international recognition and credibility",
                         "Improves quality of products and services",
                         "Enhances trust with clients, vendors, and partners",
                         "Helps in winning tenders and government contracts",
                         "Supports expansion into national and international markets"
                       ].map((point, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                           <p className="text-[14.875px] font-medium text-gray-700 leading-tight">{point}</p>
                         </div>
                       ))}
                    </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-7 rounded-[2rem] border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm animate-on-scroll [animation-delay:400ms]">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per the Information Technology Act, 2000</h3>
                    <p className="text-gray-600 text-[15px] mb-7 leading-relaxed font-medium">
                      Section-wise, the Information Technology Act, 2000 recognizes a Digital Signature Certificate (DSC) as a secure digital key issued by authorized certifying authorities to verify the identity of the signer and authenticate electronic documents.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Mandatory for MCA & Company Incorporation Filings",
                        "Required for GST, Income Tax & Government Portal Submissions",
                        "Ensures Secure Digital Authentication of Documents",
                        "Enables Legally Valid Electronic Signatures",
                        "Compulsory for Directors, Partners & Authorized Signatories",
                        "Protects Data Integrity and Prevents Document Tampering",
                        "Authorizes Online Filing and E-Tender Participation"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-bold text-[13.5px] tracking-tight leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-7 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="bg-dbiz-teal/10 p-2.5 rounded-full">
                          <Phone className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div className="ml-4">
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Need expert guidance?</p>
                          <p className="text-dbiz-navy font-bold">Contact Our Team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework Section */}
        <section className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="animate-on-scroll">
              <h3 className="text-[38.25px] font-bold text-dbiz-navy mb-4 uppercase tracking-tighter text-center">Legal Framework</h3>
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">ISO Certification is governed by international standards and certification bodies:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "ISO", desc: "Develops global standards (International Organization for Standardization)" },
                  { title: "Certification Bodies", desc: "Conduct audits and issue certificates" },
                  { title: "ISO Standards", desc: "ISO 9001, ISO 14001, ISO 22000, ISO 27001, etc." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-dbiz-teal transition-all duration-500 group text-center">
                    <div className="w-12 h-12 rounded-2xl bg-dbiz-teal flex items-center justify-center text-white font-black text-sm mb-6 shadow-lg mx-auto">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-dbiz-navy mb-4 tracking-tight group-hover:text-dbiz-teal transition-colors uppercase">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section id="features" className="py-28 relative overflow-hidden bg-dbiz-navy scroll-mt-32">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-dbiz-teal/10 rounded-full blur-[160px] opacity-80 animate-pulse"></div>
            <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[180px] opacity-60"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-dbiz-navy text-sm font-bold tracking-[0.4em] mb-8 border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase">
                2. FEATURES
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Key Features of ISO Certification</h2>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full relative group/carousel">
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Award, title: "International Recognition", desc: "Establishes the business as a globally recognized entity following international standards.", image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=500&q=50" },
                  { icon: Layers, title: "Standardized Process Framework", desc: "Requires businesses to define and follow structured processes for operations, ensuring consistency.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" },
                  { icon: Shield, title: "Quality Management System (QMS)", desc: "Focuses on implementing a strong QMS that improves product/service quality and customer satisfaction.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { icon: TrendingUp, title: "Continuous Improvement Approach", desc: "Emphasizes regular monitoring, evaluation, and improvement of business processes.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" },
                  { icon: Building2, title: "Applicable Across All Industries", desc: "Can be obtained by manufacturing units, service providers, IT companies, hospitals, and more.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=50" },
                  { icon: Search, title: "Audit-Based Certification", desc: "Granted after proper internal and external audits conducted by authorized certification bodies.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: MapPin, title: "Multiple ISO Standards", desc: "Choose from different standards like ISO 9001, ISO 14001, ISO 22000, ISO 27001 based on needs.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
                  { icon: Zap, title: "Improves Operational Efficiency", desc: "By implementing defined procedures, businesses can reduce wastage and improve productivity.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
                  { icon: Users, title: "Enhances Business Credibility", desc: "Builds trust among customers, suppliers, and stakeholders, making the business more reliable.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=50" },
                  { icon: Globe, title: "Supports Global Expansion", desc: "ISO-certified businesses are more acceptable in international markets, helping in exports.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=500&q=50" }
                ].map((feature, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex animate-on-scroll" style={{ animationDelay: `${idx * 100 + 200}ms` }}>
                    <Card className="border-none shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white overflow-hidden group w-full flex flex-col h-full">
                      <div className="relative h-72 overflow-hidden shrink-0">
                        <CachedImage src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/60 via-dbiz-navy/20 to-transparent flex items-end p-8">
                          <div className="bg-dbiz-teal/30 backdrop-blur-md p-3 rounded-2xl border border-white/30 shadow-lg">
                            <feature.icon className="h-7 w-7 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow p-8">
                        <h3 className="text-2xl font-black text-dbiz-navy group-hover:text-dbiz-teal transition-colors tracking-tight leading-tight mb-4">{feature.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed font-medium">{feature.desc}</p>
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

        {/* 3. Benefits Section */}
        <section id="benefits" className="py-24 scroll-mt-32 border-y border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col xl:flex-row gap-16">
              <div className="xl:w-1/3">
                <div className="sticky top-32 animate-on-scroll">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                    3. BENEFITS OF ISO CERTIFICATION
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">Categorized Advantages</h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl">
                    <CachedImage src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&q=50" alt="Business Growth" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Scale with Quality</div>
                      <p className="text-sm opacity-90">International standards for global business scale.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-2/3 space-y-16">
                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">Business & Financial Advantages</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Award className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Business Advantages</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Improved credibility and global recognition</li>
                        <li>• Better customer trust and satisfaction</li>
                        <li>• Standardized processes and quality control</li>
                        <li>• Eligibility for tenders and contracts</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Cost reduction through efficient operations</li>
                        <li>• Better resource and process management</li>
                        <li>• Increased chances of funding and loans</li>
                        <li>• Improved profitability with reduced errors</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Expansion into international markets</li>
                        <li>• Access to large clients and global partnerships</li>
                        <li>• Increased scalability with structured systems</li>
                        <li>• Strong brand positioning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When ISO Certification is Required</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="text-white py-4">Condition</TableHead>
                          <TableHead className="text-white py-4">Requirement</TableHead>
                          <TableHead className="text-white py-4">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Tender Requirement</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Many government and private tenders require ISO certification as a basic eligibility condition.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Business Expansion</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Recommended</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Businesses planning to scale need ISO certification to build credibility and structured systems.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Export Trade</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Preferred</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>ISO certification is often required for exporting goods or entering global markets.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <h4 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16">Types of ISO Certification</h4>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="text-white py-4">Type</TableHead>
                          <TableHead className="text-white py-4">Suitable For</TableHead>
                          <TableHead className="text-white py-4">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>ISO 9001</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>All businesses</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Quality management systems and customer satisfaction.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>ISO 14001</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Manufacturing</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Environmental compliance and sustainability practices.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>ISO 22000</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Food businesses</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Food safety management systems and hygiene standards.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>ISO 27001</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>IT / tech</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Data security and information management systems.</TableCell>
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                5. DOCUMENTATION REQUIREMENTS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Structured Document Lists</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {/* Card 1: Individual */}
              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:100ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=600&q=50" 
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
                    {["PAN Card", "Aadhaar Card", "Photograph", "Business address proof", "Business details"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 2: Corporate */}
              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:200ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=50" 
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
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Company / LLP / Units</h3>
                  <ul className="space-y-5">
                    {["Certificate of Incorporation", "PAN Card (Entity)", "MOA & AOA / LLP Agreement", "Director KYC", "Unit level details"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3: Office & ISO */}
              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:300ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50" 
                    alt="Office & Process Proof" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-8">
                    <div className="bg-dbiz-teal/20 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Office & ISO Documentation</h3>
                  <ul className="space-y-5">
                    {["Rent Agreement + NOC / Ownership proof", "Electricity Bill (Latest)", "Process flow details", "Quality Policy & SOPs", "Internal Audit Records"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll [animation-delay:400ms]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-xs font-black tracking-widest mb-6 border border-dbiz-teal/20 uppercase">
                  <Sparkles className="h-3 w-3" /> Important
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Documentation Guidelines</h3>
              </div>
              
              <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                <table className="w-full text-left border-collapse bg-white">
                  <thead className="bg-dbiz-navy border-b border-dbiz-navy">
                    <tr>
                      <th className="px-6 py-4 text-xs font-black text-white uppercase tracking-wider w-1/3">Task / Guideline</th>
                      <th className="px-6 py-4 text-xs font-black text-white uppercase tracking-wider">Filing Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { title: "Detail Verification", desc: "Details must match across all submitted documents for consistency." },
                      { title: "Process Definition", desc: "Business processes must be clearly defined and documented for audit." },
                      { title: "Record Accuracy", desc: "Records should reflect actual operations of the business." },
                      { title: "Address Proof", desc: "Address proof must be valid and consistent across all proof documents." }
                    ].map((item, idx) => (
                      <tr key={idx} className={`group hover:bg-gray-100 transition-colors ${idx % 2 !== 0 ? 'bg-gray-50/80' : ''}`}>
                        <td className="px-6 py-5 align-top border-r border-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-dbiz-teal shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                            <span className="font-bold text-dbiz-navy text-[15px]">{item.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-gray-600 text-[14px] font-medium leading-relaxed">{item.desc}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section id="process" className="py-24 scroll-mt-32 relative overflow-hidden border-y border-[#c8e6e6]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1440&q=40')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }}>
          <div className="absolute inset-0 bg-dbiz-navy/80 backdrop-blur-[2px] z-0"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20 tracking-wider">
                6. CERTIFICATION PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Step-by-Step Detailed Guide</h2>
            </div>

            <div className="max-w-5xl mx-auto relative py-8">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full z-0"></div>

              {[
                { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business details and documents. Correct validation is key to avoiding delays." },
                { step: "2", title: "Selection of ISO Standard", desc: "The appropriate ISO standard is selected based on business activity, ensuring alignment with requirements." },
                { step: "3", title: "Documentation & Process Prep", desc: "Preparation of quality policies, SOPs, and operational records essential for certification." },
                { step: "4", title: "Implementation of ISO Standards", desc: "Defined processes are implemented and employees are trained to align with standards." },
                { step: "5", title: "Internal Audit & Gap Analysis", desc: "An internal audit identifies any gaps between current practices and ISO requirements." },
                { step: "6", title: "Certification Audit", desc: "An authorized body conducts an external audit to verify full implementation of ISO standards." },
                { step: "7", title: "Certificate Issuance", desc: "Once the audit is successful, the ISO Certificate is issued with global validity." }
              ].map((item, index) => {
                const isOdd = index % 2 === 0;
                return (
                  <div key={index} className={`hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-8 animate-on-scroll ${!isOdd ? '-mt-20' : index > 0 ? 'mt-12' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
                    {isOdd ? (
                      <div className="flex justify-end pr-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-right">
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ) : (<div></div>)}

                    <div className="flex flex-col items-center z-10 relative">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold text-xl shadow-lg shrink-0">
                        {item.step}
                      </div>
                    </div>

                    {!isOdd ? (
                      <div className="flex justify-start pl-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-left">
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ) : (<div></div>)}
                  </div>
                );
              })}

              {/* Mobile stacked list */}
              <div className="md:hidden space-y-8 relative pl-10">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-dbiz-teal/40"></div>
                {[1,2,3,4,5,6,7].map((i) => (
                  <div key={i} className="relative animate-on-scroll">
                    <div className="absolute -left-10 top-6 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold shadow-md z-10">
                      {i}
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-dbiz-navy mb-2">Step {i}</h3>
                      <p className="text-gray-600 text-sm">Please refer to the steps above for detailed certification process description.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Timeline Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
              <div>
                <div className="mb-12 text-center">
                  <h3 className="text-[38.25px] font-bold text-dbiz-navy uppercase tracking-tighter">TIMELINE & DELIVERY</h3>
                  <div className="w-20 h-1.5 bg-dbiz-teal rounded-full mt-4 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {TIMELINE_DESKTOP.map((item, i) => (
                    <div key={i} className="uiverse-timeline-card animate-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
                      <div className="uiverse-timeline-card-content">
                        <div className="card-duration">{item.duration}</div>
                        <h4 className="card-title">{item.label}</h4>
                        <p className="card-para">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-10">
                    <div className="h-px bg-gray-100 flex-1"></div>
                    <p className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase">Quick Summary</p>
                    <div className="h-px bg-gray-100 flex-1"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1: Fast Track Flip */}
                    <div className="three-d-card animate-on-scroll">
                      <div className="card-wrapper">
                        <div className="card-face front">
                          <Zap className="h-12 w-12 text-dbiz-teal mb-4" />
                          <h4 className="card-title">Fast Track Certification</h4>
                        </div>
                        <div className="card-face back">
                          <div className="card-duration">5 – 7 Days</div>
                          <p className="card-description">
                            For small businesses with quick process implementation and active team participation in documentation.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Standard Timeline Flip */}
                    <div className="three-d-card animate-on-scroll" style={{ animationDelay: '150ms' }}>
                      <div className="card-wrapper">
                        <div className="card-face front">
                          <Shield className="h-12 w-12 text-amber-500 mb-4" />
                          <h4 className="card-title">Standard Timeline</h4>
                        </div>
                        <div className="card-face back">
                          <div className="card-duration">7 – 10 Days</div>
                          <p className="card-description">
                            Complete audit cycle including internal gap analysis and final external certification review.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Delayed Cases Flip */}
                    <div className="three-d-card animate-on-scroll" style={{ animationDelay: '300ms' }}>
                      <div className="card-wrapper">
                        <div className="card-face front">
                          <Clock className="h-12 w-12 text-rose-400 mb-4" />
                          <h4 className="card-title">Delayed Cases</h4>
                        </div>
                        <div className="card-face back">
                          <div className="card-duration">Up to 15 Days</div>
                          <p className="card-description">
                            Applies when major corrections are required in documentation or processes before certification can be granted.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mt-12 flex items-start justify-center gap-3 animate-on-scroll" style={{ animationDelay: '300ms' }}>
                    <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500 font-semibold italic text-left max-w-2xl">
                      Note: <span className="text-dbiz-navy not-italic font-black">Timeline may vary based on type of ISO standard, business size, readiness of documentation, and audit requirements.</span> Proper documentation and quick implementation ensure faster certification.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Post-Certification Compliance */}
              <div className="pt-16 border-t border-gray-100 animate-on-scroll">
                <div className="mb-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
                    8. POST-CERTIFICATION COMPLIANCE
                  </div>
                  <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">Mandatory Requirements</h3>
                </div>

                {/* Blob Cards — Mandatory Requirement Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center mb-10 py-6">
                  {[
                    { type: "Surveillance Audit", freq: "Annually" },
                    { type: "Re-Certification Audit", freq: "Every 3 Years" },
                    { type: "Internal Audit", freq: "Quarterly / Half-Yearly" }
                  ].map((filing, idx) => (
                    <div key={idx} className="blob-card-container animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="blob-card-orbit"></div>
                      <div className="blob-card-bg">
                        <h4 className="text-[18px] font-black text-dbiz-navy uppercase tracking-tighter mb-1 select-none text-center">{filing.type}</h4>
                        <p className="text-[10px] font-black text-dbiz-teal uppercase tracking-[0.3em] select-none text-center">{filing.freq}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compliance Requirements */}
                <div className="consultancy-section-card animate-on-scroll">
                  <p className="consultancy-label uppercase tracking-widest bg-emerald-100 text-emerald-600 border-emerald-200">Mandatory</p>
                  <h4 className="consultancy-heading">Compliance Requirements</h4>
                  <div className="compliance-grid">
                    {[
                      "Maintain proper documentation, SOPs, and process records",
                      "Follow defined ISO standards in daily operations",
                      "Conduct regular internal audits to ensure compliance",
                      "Address non-conformities and implement corrective actions",
                      "Ensure continuous improvement in processes and quality",
                      "Train employees on ISO procedures and standards",
                      "Maintain records for audit verification"
                    ].map((req, i) => (
                      <div key={i} className="compliance-inner-card">
                        <div className="compliance-check-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="compliance-label-text">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Penalties / Risks */}
                <div className="consultancy-section-card animate-on-scroll mt-8">
                  <p className="consultancy-label uppercase tracking-widest bg-red-100 text-red-600 border-red-200">Caution</p>
                  <h4 className="consultancy-heading">Penalties / Risks</h4>
                  <div className="penalty-grid">
                    {[
                      { title: "Non-compliance with ISO standards", desc: "Suspension of certification" },
                      { title: "Failure in audit", desc: "Delay or cancellation of certificate" },
                      { title: "Improper documentation", desc: "Non-conformity remarks during audit" },
                      { title: "Not attending surveillance audit", desc: "Certificate may become invalid" }
                    ].map((item, i) => (
                      <div key={i} className="penalty-inner-card">
                        <div className="penalty-header">
                          <div className="penalty-dot bg-red-500"></div>
                          <span className="penalty-title">{item.title}</span>
                        </div>
                        <p className="penalty-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validity Note */}
                <div className="mt-10 flex items-start gap-3 animate-on-scroll">
                  <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500 font-semibold italic">
                    Note: <span className="text-dbiz-navy not-italic font-black">ISO certification is typically valid for 3 years</span> but requires annual surveillance audits to ensure continuous compliance and validity.
                  </p>
                </div>
              </div>

              {/* 9. Why DBIZ */}
              <div className="pt-20 border-t border-gray-100 animate-on-scroll">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4 uppercase">
                    9. Why Choose DBIZ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight">Why DBIZ CONSULTANCY for ISO Certification?</h2>
                  <p className="text-base text-gray-600 font-medium">
                    Obtaining ISO Certification is a crucial step for businesses aiming to improve quality and build credibility. Our team ensures that your business is fully prepared and compliant before the audit, minimizing risks and ensuring smooth certification.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-6 flex items-center">
                      <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What DBIZ Handles
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Assessment of applicable ISO standard",
                        "Gap analysis to identify compliance requirements",
                        "Preparation of manuals and SOPs",
                        "Implementation support for ISO systems",
                        "Conducting internal audit and checks",
                        "Coordination with certification body for audit",
                        "Handling audit observations and actions",
                        "ISO certificate issuance support"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-6 flex items-center">
                      <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Business registration documents and details",
                        "Nature of business and operational activities",
                        "Basic process information and workflow",
                        "Employee details (if applicable)",
                        "Office / factory address details"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Advantage Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16 animate-on-scroll">
                   {[
                      { title: "Expert ISO Consultants", icon: Users },
                      { title: "Strong Documentation", icon: FileText },
                      { title: "Quick Turnaround", icon: Zap },
                      { title: "Audit-Ready Approach", icon: Shield },
                      { title: "End-to-End Service", icon: Target },
                      { title: "Ongoing Support", icon: RefreshCw }
                   ].map((adv, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-3xl text-center hover:bg-white hover:shadow-xl transition-all group">
                         <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-dbiz-teal group-hover:text-white transition-all">
                            <adv.icon className="h-6 w-6" />
                         </div>
                         <h5 className="text-[13px] font-black text-dbiz-navy tracking-tight leading-tight">{adv.title}</h5>
                      </div>
                   ))}
                </div>
              </div>

              {/* Commitment Section */}
              <div className="max-w-4xl mx-auto text-center mt-24 animate-on-scroll">
                 <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
                 <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    With strong expertise in business compliance and certification services, DBIZ CONSULTANCY is a trusted partner for startups, SMEs, and growing businesses across India. We handle the entire ISO certification process—so you can focus on scale.
                 </p>
              </div>

            </div>
          </div>
        </section>

        {/* 10. FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                FAQs
              </div>
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight">FAQs on ISO Certification</h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-8">Last updated: March 2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {isoFaq.map((faq, idx) => (
                  <AccordionItem key={faq.value} value={faq.value} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll" style={{ animationDelay: `${idx * 50 + 300}ms` }}>
                    <AccordionTrigger className="text-[17px] font-bold text-dbiz-navy hover:text-dbiz-teal hover:no-underline py-6 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-8 pt-2">
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

const Globe = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const XCircle = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
);

export default ISOCertificationPage;