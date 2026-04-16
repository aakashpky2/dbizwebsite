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
  RefreshCw
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
import { startupFaq } from "@/data/startupFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of startup details, document verification, and submission of DPIIT application on Startup India portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "1 – 3 Working Days",
    desc: "Initial review and system-based verification of application by DPIIT.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "1 – 2 Working Days",
    desc: "Startup Recognition Certificate is issued if all details are correct and complete.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Approval (With Query / Clarification)",
    duration: "Up to 7 Working Days",
    desc: "Time may increase if DPIIT raises queries or additional information is required.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];

const TIMELINE_MOBILE = [
  { step: "01", label: "Application Filing", duration: "Same Day", desc: "Collection of startup details, document verification, and submission of DPIIT application on Startup India portal.", pill: "bg-blue-50 text-blue-700 border-blue-100" },
  { step: "02", label: "Processing", duration: "1 – 3 Working Days", desc: "Initial review and system-based verification of application by DPIIT.", pill: "bg-blue-100 text-blue-800 border-blue-200" },
  { step: "03", label: "Approval (Normal Case)", duration: "1 – 2 Working Days", desc: "Startup Recognition Certificate is issued if all details are correct and complete.", pill: "bg-blue-200 text-blue-900 border-blue-300" },
  { step: "04", label: "Approval (With Query / Clarification)", duration: "Up to 7 Working Days", desc: "Time may increase if DPIIT raises queries or additional information is required.", pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20" },
];

const TIMELINE_ICONS = [Clock, Users, CheckCircle2, AlertTriangle];

const StartupIndiaRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1440&q=60"
              alt="Startup Services Professional Background"
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
                  Fast Startup Recognition | Expert Filing | Complete Compliance Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  Startup India Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete DPIIT Startup Registration services. From eligibility assessment to recognition certificate issuance and compliance setup, our experts ensure a smooth, error-free process.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                  >
                    Apply Now <ArrowDownCircle className="h-5 w-5" />
                  </Button>
                </div>

                {/* Status Detail */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>2 – 5 Days</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>100% Filing Accuracy</span>
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
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60" 
                    alt="Startup Registration Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">2 – 5</div>
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
              {/* Left Content (2/3) */}
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 animate-on-scroll [animation-delay:100ms] tracking-tight">
                  What is DPIIT Startup Registration?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    DPIIT Startup Registration is a recognition granted by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India initiative to eligible businesses in India.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    It establishes the business as a recognized startup by the Government of India and enables access to tax exemptions, funding opportunities, easier compliance, and various government schemes.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    Upon registration, a Startup Recognition Certificate is issued, which can be used for availing benefits, applying for tenders, and building credibility with investors and institutions.
                  </p>
                </div>

                {/* Why DPIIT Importance block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why DPIIT Registration is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>DPIIT registration is not just a recognition — it plays a critical role in startup growth:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Ensures official recognition as a Government-approved Startup",
                         "Enables access to tax exemptions and financial incentives",
                         "Allows self-certification under labour and environmental laws",
                         "Builds trust with investors, banks, and institutions",
                         "Mandatory for availing Startup India benefits and schemes"
                       ].map((point, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                           <p className="text-[14.875px] font-medium text-gray-700 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{point}</p>
                         </div>
                       ))}
                    </div>
                </div>

              </div>

              {/* Right Sidebar (1/3) */}
              <div className="md:w-1/3 text-left">
                <div className="bg-gray-50 p-7 rounded-[2rem] border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm animate-on-scroll [animation-delay:400ms]">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per the Startup India Initiative</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium">
                      Under the Government of India’s Startup India program, registration is the process of officially recognizing an eligible business as a startup to avail government benefits, incentives, and policy support:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Recognition by the Department for Promotion of Industry and Internal Trade (DPIIT)",
                        "Eligibility for Tax Exemptions & Government Incentives",
                        "Access to Startup Funding & Investor Support Schemes",
                        "Simplified Compliance under Labour & Environmental Laws",
                        "Enables Participation in Government Tenders & Programs"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal mr-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-normal text-[17px] tracking-tight leading-snug">
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
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">DPIIT Startup Registration is governed by the following:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "DPIIT", desc: "Ministry of Commerce & Industry grants recognition" },
                  { title: "Startup India", desc: "Initiative to promote innovation and entrepreneurship" },
                  { title: "Income Tax Act", desc: "Sec 80IAC provides tax exemption benefits" }
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

              <div className="mt-12 flex items-center justify-center gap-4 p-6 bg-white/40 backdrop-blur-md rounded-[2rem] border border-dbiz-teal/20 italic max-w-3xl mx-auto shadow-inner">
                <Shield className="h-6 w-6 text-dbiz-teal shrink-0" />
                <p className="text-sm text-dbiz-navy/60 font-bold leading-relaxed tracking-tight">
                  These provisions regulate recognition, benefits, and compliance for startups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section id="features" className="py-28 relative overflow-hidden bg-dbiz-navy scroll-mt-32">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-dbiz-teal/10 rounded-full blur-[160px] opacity-80 animate-pulse transition-all duration-[10000ms]"></div>
            <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[180px] opacity-60"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-dbiz-navy text-sm font-bold tracking-[0.4em] mb-8 border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                2. FEATURES
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight [animation-delay:100ms]">Key Features Of DPIIT Registration</h2>
            </div>

            <Carousel 
              opts={{ align: "start", loop: true, autoplay: true, interval: 3000 }}
              className="w-full relative group/carousel"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { title: "Government Recognition", desc: "Official recognition as a startup under the Government of India, enhancing credibility and trust.", icon: Shield, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { title: "Recognition Certificate", desc: "Issuance of a digital certificate valid for availing tax benefits, funding, and government schemes.", icon: CheckCircle2, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
                  { title: "Tax Exemptions", desc: "Eligibility to apply for income tax exemption under Section 80IAC for 3 consecutive years.", icon: CreditCard, img: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=500&q=50" },
                  { title: "Self-Certification", desc: "Startups can self-certify compliance under selected labour and environmental laws, reducing inspections.", icon: TrendingUp, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
                  { title: "Schemes & Funding", desc: "Access to various government schemes, grants, and funding support including Startup India initiatives.", icon: Target, img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=50" },
                  { title: "Government Tenders", desc: "Relaxed eligibility criteria in government tenders, including exemptions from prior experience.", icon: CheckCircle, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { title: "IP Fast-Track", desc: "Reduced fees and faster processing for intellectual property registrations like patents and trademarks.", icon: Zap, img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { title: "No Prior Approval", desc: "The registration is based on self-declaration and does not require prior government approval.", icon: Activity, img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=50" },
                  { title: "Lifetime Validity", desc: "Recognition remains valid for 10 years or until turnover exceeds ₹100 crore.", icon: Repeat, img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" },
                  { title: "Investor Credibility", desc: "Increases trust among investors and banks, improving funding and market positioning.", icon: Award, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" }
                ].map((feature, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex animate-on-scroll" style={{ animationDelay: `${idx * 100 + 200}ms` }}>
                    <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 bg-white overflow-hidden group w-full flex flex-col h-full">
                      <div className="relative h-72 overflow-hidden shrink-0">
                        <CachedImage src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/60 via-dbiz-navy/20 to-transparent flex items-end p-8">
                          <div className="bg-dbiz-teal/30 backdrop-blur-md p-3 rounded-2xl border border-white/30 shadow-lg">
                            <feature.icon className="h-7 w-7 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow">
                        <CardHeader className="pb-4 pt-8 px-8">
                          <CardTitle className="text-2xl font-black text-dbiz-navy group-hover:text-dbiz-teal transition-colors">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="px-8 pb-10 flex-grow">
                          <p className="text-gray-600 text-base leading-relaxed font-medium">{feature.desc}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-3 mt-12 pr-4 relative z-20">
                <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-2xl bg-white border-2 border-dbiz-teal/10 hover:border-dbiz-teal hover:bg-dbiz-teal hover:text-white" />
                <CarouselNext className="static translate-y-0 h-14 w-14 rounded-2xl bg-white border-2 border-dbiz-teal/10 hover:border-dbiz-teal hover:bg-dbiz-teal hover:text-white" />
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
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20">
                    3. BENEFITS
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">Business Advantages</h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <CachedImage src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=50" alt="Startup Growth" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Growth Backed</div>
                      <p className="text-sm opacity-90">Unlock government support for your startup.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-2/3 space-y-16">
                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">Categorized Benefits</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Award className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Business</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Official recognition</li>
                        <li>• Improved credibility</li>
                        <li>• Tenders access</li>
                        <li>• Self-certification</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Tax exemption (80IAC)</li>
                        <li>• Govt funding & grants</li>
                        <li>• Easier loans access</li>
                        <li>• IP registration fees</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Networking ecosystem</li>
                        <li>• Incubator support</li>
                        <li>• Scalability potential</li>
                        <li>• Investor attraction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. Applicability Table</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="font-medium text-white py-4">Condition</TableHead>
                          <TableHead className="font-medium text-white py-4">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { cond: "New Startup", desc: "Newly incorporated businesses under startup criteria." },
                          { cond: "Innovation-Based", desc: "Must focus on innovation, development, or improvement." },
                          { cond: "Scalable Model", desc: "Should have potential for growth and employment." },
                          { cond: "Turnover Limit", desc: "Annual turnover must not exceed limit." },
                          { cond: "Age of Business", desc: "Entity must be within 10 years of incorporation." }
                        ].map((row, idx) => (
                          <TableRow key={idx} className={idx % 2 !== 0 ? "bg-gray-50/50" : ""}>
                            <TableCell className="font-normal text-gray-700">{row.cond}</TableCell>
                            <TableCell className="text-gray-600 leading-relaxed">{row.desc}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <h4 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16">Eligible Entities</h4>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-12">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="font-medium text-white py-4">Entity Type</TableHead>
                          <TableHead className="font-medium text-white py-4">Suitable For</TableHead>
                          <TableHead className="font-medium text-white py-4">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-bold text-dbiz-navy">Private Limited Company</TableCell>
                          <TableCell className="text-gray-700">Scalable businesses</TableCell>
                          <TableCell className="text-gray-600 leading-relaxed">Preferred for startups seeking funding and rapid growth.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold text-dbiz-navy">LLP</TableCell>
                          <TableCell className="text-gray-700">Small teams</TableCell>
                          <TableCell className="text-gray-600 leading-relaxed">Suitable for startups with lower compliance needs.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-dbiz-navy">Partnership Firm</TableCell>
                          <TableCell className="text-gray-700">Early-stage</TableCell>
                          <TableCell className="text-gray-600 leading-relaxed">Suitable for small initial startups with minimal cost.</TableCell>
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
                5. DOCUMENTATION
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Required Document Lists</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {[
                { title: "Standard Documents", items: ["COI / Registration", "PAN Card (Entity)", "KYC (Directors/Partners)", "Office Address Proof"], icon: Building2, img: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=600&q=50" },
                { title: "Startup Details", items: ["Business Description", "Innovation Highlights", "Nature of Activity", "Website/App Link"], icon: Zap, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=50" },
                { title: "Additional Info", items: ["Pitch Deck (Rec)", "Funding Details", "Patent/Trademark", "Incubation Proof"], icon: MapPin, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50" }
              ].map((doc, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
                  <div className="relative h-56 shrink-0">
                    <CachedImage src={doc.img} alt={doc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-8">
                      <div className="bg-dbiz-teal/20 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                        <doc.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter group-hover:text-dbiz-teal transition-colors">{doc.title}</h3>
                    <ul className="space-y-5">
                      {doc.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-lg">
                          <CheckCircle2 className="h-6 w-6 text-dbiz-teal shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-xs font-black tracking-widest mb-6 border border-dbiz-teal/20 uppercase">
                  <Sparkles className="h-3 w-3" /> Guidelines
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Documentation Guidelines</h3>
              </div>
              
              <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                <table className="w-full text-left bg-white">
                   <thead className="bg-dbiz-navy text-white text-xs font-black uppercase tracking-wider">
                     <tr><th className="px-6 py-4 w-1/3">Criteria</th><th className="px-6 py-4">Requirement</th></tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50 text-[14px] font-medium text-gray-600">
                     {[
                       { t: "Business Description", d: "Must clearly highlight innovation or uniqueness." },
                       { t: "MCA Alignment", d: "Details must exactly match MCA records." },
                       { t: "Non-Generic", d: "Avoid generic trading descriptions without value addition." },
                       { t: "Accurate Founder", d: "Ensure accurate founder and business details for faster approval." }
                     ].map((item, i) => (
                       <tr key={i} className={i % 2 !== 0 ? 'bg-gray-50/80' : ''}>
                         <td className="px-6 py-5 font-bold text-dbiz-navy">{item.t}</td>
                         <td className="px-6 py-5">{item.d}</td>
                       </tr>
                     ))}
                   </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section
          id="process"
          className="py-24 scroll-mt-32 relative overflow-hidden border-y border-[#c8e6e6]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1440&q=40')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "local",
          }}
        >
          {/* Dark overlay to keep cards readable */}
          <div className="absolute inset-0 bg-dbiz-navy/80 backdrop-blur-[2px] z-0"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20 tracking-wider">
                6. REGISTRATION PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight [animation-delay:200ms]">DPIIT Startup Registration Process – Step-by-Step Detailed Guide</h2>
            </div>

            {/* Timeline Container */}
            <div className="max-w-5xl mx-auto relative py-8">

              {/* Vertical center line — desktop only */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full z-0"></div>

              {[
                {
                  step: "1", title: "Data Collection & Eligibility Verification",
                  desc: "The process begins with collecting all required business details such as incorporation certificate, PAN, founder details, and business activity.",
                  bullets: [
                    "Eligibility checked: age of business (less than 10 years)",
                    "Turnover limit verified (below ₹100 crore)",
                    "Innovation/scalability of the startup assessed"
                  ]
                },
                {
                  step: "2", title: "Create Startup India Portal Account",
                  desc: "The applicant registers on the official Startup India portal by providing basic details such as name, email ID, and mobile number.",
                  bullets: [
                    "Login credentials are created",
                    "Access to the DPIIT application dashboard"
                  ]
                },
                {
                  step: "3", title: "Application Filing for DPIIT Recognition",
                  desc: "The Startup Recognition application is filled online, including:",
                  bullets: [
                    "Entity details (Company / LLP / Partnership)",
                    "Founder details",
                    "Business activity and sector",
                    "Description of innovation / scalability",
                    "Employment and growth potential"
                  ]
                },
                {
                  step: "4", title: "Upload Supporting Documents",
                  desc: "Required documents are uploaded — proper documentation improves approval chances:",
                  bullets: [
                    "Certificate of Incorporation",
                    "PAN details",
                    "Business description / pitch",
                    "Website or product details (if available)"
                  ]
                },
                {
                  step: "5", title: "Self-Declaration & Submission",
                  desc: "The applicant provides self-declaration confirming that:",
                  bullets: [
                    "The business meets DPIIT startup criteria",
                    "It is not formed by splitting an existing business",
                    "All information provided is accurate",
                    "Application is submitted for processing"
                  ]
                },
                {
                  step: "6", title: "Verification by DPIIT Authority",
                  desc: "The DPIIT reviews the submitted application carefully:",
                  bullets: [
                    "If details are correct → Application approved",
                    "If clarification required → Query may be raised",
                    "Applicants must respond promptly to avoid delays"
                  ]
                },
                {
                  step: "7", title: "DPIIT Recognition Certificate Issuance",
                  desc: "Once approved, the Startup Recognition Certificate is issued:",
                  bullets: [
                    "Unique Recognition Number is generated",
                    "Certificate is available for download",
                    "Business is officially recognized as a Startup under Government of India"
                  ]
                }
              ].map((item, index) => {
                const isOdd = index % 2 === 0; // 0,2,4,6 → left; 1,3,5 → right
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
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-3">{item.desc}</p>
                          {item.bullets && (
                            <ul className="space-y-1.5 text-right">
                              {item.bullets.map((b, bi) => (
                                <li key={bi} className="text-gray-500 text-sm flex items-start justify-end gap-2">
                                  <span>{b}</span>
                                  <span className="text-dbiz-teal mt-1 shrink-0">•</span>
                                </li>
                              ))}
                            </ul>
                          )}
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
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-3">{item.desc}</p>
                          {item.bullets && (
                            <ul className="space-y-1.5">
                              {item.bullets.map((b, bi) => (
                                <li key={bi} className="text-gray-500 text-sm flex items-start gap-2">
                                  <span className="text-dbiz-teal mt-1 shrink-0">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          )}
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
                  { step: "1", title: "Data Collection & Eligibility Verification", desc: "Collecting all required business details, checking age of business, turnover limits, and innovation/scalability criteria." },
                  { step: "2", title: "Create Startup India Portal Account", desc: "Registering on the Startup India portal with name, email and mobile. Login credentials created for the DPIIT dashboard." },
                  { step: "3", title: "Application Filing for DPIIT Recognition", desc: "Entity details, founder info, business activity, innovation description, and employment/growth potential filled online." },
                  { step: "4", title: "Upload Supporting Documents", desc: "Uploading COI, PAN, business description/pitch, and website or product details to improve approval chances." },
                  { step: "5", title: "Self-Declaration & Submission", desc: "Confirming the business meets DPIIT criteria, is not formed by splitting an existing business, and all details are accurate." },
                  { step: "6", title: "Verification by DPIIT Authority", desc: "DPIIT reviews the application. If correct → approved. If clarification needed → query raised. Respond promptly." },
                  { step: "7", title: "DPIIT Recognition Certificate Issuance", desc: "Unique Recognition Number generated, certificate issued for download. Business officially recognized as a Startup under GoI." }
                ].map((item, index) => (
                  <div key={index} className="relative animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="absolute -left-10 top-6 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold shadow-md z-10">
                      {item.step}
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-dbiz-navy mb-3">Step {item.step}: {item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
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
                    <div key={i} className="uiverse-timeline-card animate-on-scroll">
                      <div className="uiverse-timeline-card-content">
                        <div className="card-duration">{item.duration}</div>
                        <h4 className="card-title">{item.label}</h4>
                        <p className="card-para text-xs">{item.desc}</p>
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
                          <h4 className="card-title">Fast Track Approval</h4>
                        </div>
                        <div className="card-face back">
                          <div className="card-duration">2 – 3 Days</div>
                          <p className="card-description">
                            Complete and accurate application with a well-drafted innovation description ensures the fastest recognition.
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
                          <div className="card-duration">3 – 5 Days</div>
                          <p className="card-description">
                            Typical processing time for applications that are complete but require standard departmental review.
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
                          <div className="card-duration">Up to 7 Days</div>
                          <p className="card-description">
                            Applies when DPIIT raises queries or requires clarification on the business description or supporting details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mt-12 flex items-start justify-center gap-3 animate-on-scroll" style={{ animationDelay: '300ms' }}>
                    <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500 font-semibold italic text-left max-w-2xl">
                      Note: <span className="text-dbiz-navy not-italic font-black">Approval time depends on quality of business description, clarity of innovation, and accuracy of submitted details.</span> A well-drafted application ensures faster approval.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Post-Registration Compliance Section */}
              <div className="pt-16 border-t border-gray-100 animate-on-scroll">
                <div className="mb-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
                    <Shield className="h-3 w-3" /> Mandatory Maintenance
                  </div>
                  <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">8. Post-Registration Compliance</h3>
                  <p className="text-gray-500 font-medium text-sm max-w-2xl">
                    Once recognised, your startup must continue meeting DPIIT criteria and maintain these mandatory filings to retain recognition and avail ongoing benefits.
                  </p>
                </div>

                {/* Mandatory Filings — Blob Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center mb-10 py-6">
                  {[
                    { type: "Income Tax Return (ITR)", freq: "Annually" },
                    { type: "MCA Compliance", freq: "Annually / As Applicable" },
                    { type: "Startup Portal Updates", freq: "As Required" }
                  ].map((filing, idx) => (
                    <div key={idx} className="blob-card-container animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="blob-card-orbit"></div>
                      <div className="blob-card-bg">
                        <h4 className="text-[16px] font-black text-dbiz-navy uppercase tracking-tighter mb-1 select-none text-center">{filing.type}</h4>
                        <p className="text-[10px] font-black text-dbiz-teal uppercase tracking-[0.3em] select-none text-center">{filing.freq}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compliance Requirements */}
                <div className="consultancy-section-card animate-on-scroll">
                  <p className="consultancy-label">Essential</p>
                  <h4 className="consultancy-heading">Compliance Requirements</h4>
                  <div className="compliance-grid">
                    {[
                      "Maintain proper books of accounts and financial records",
                      "Continue to meet DPIIT eligibility criteria (turnover & age limits)",
                      "Ensure business activity aligns with declared innovation or scalability",
                      "File income tax returns regularly to claim tax benefits",
                      "Comply with MCA requirements (for Pvt Ltd / LLP)",
                      "Update Startup India portal in case of changes in business details"
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

                {/* Tax & Regulatory Compliance */}
                <div className="consultancy-section-card animate-on-scroll mt-8">
                  <p className="consultancy-label uppercase tracking-widest bg-blue-50 text-blue-600 border-blue-100">Tax & Regulatory</p>
                  <h4 className="consultancy-heading">Tax & Regulatory Compliance</h4>
                  <div className="compliance-grid">
                    {[
                      "Apply separately for tax exemption under Section 80IAC (if eligible)",
                      "Maintain proper documentation for claiming tax benefits",
                      "Ensure compliance under labour and environmental laws (self-certification)",
                      "Follow applicable GST and other statutory requirements"
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
                      { title: "Incorrect Information", desc: "Cancellation of DPIIT recognition" },
                      { title: "Non-compliance with Criteria", desc: "Loss of startup benefits" },
                      { title: "Failure to File Returns", desc: "Penalties under Income Tax / MCA" },
                      { title: "Misuse of Benefits", desc: "Legal action or disqualification" }
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
                    Note: <span className="text-dbiz-navy not-italic font-black">DPIIT recognition has lifetime validity (up to 10 years or ₹100 crore turnover limit)</span>, but continued compliance and portal updates are essential to retain recognition and avail all associated benefits.
                  </p>
                </div>
              </div>

              {/* 9. Why DBIZ Section */}
              <div id="whydbiz" className="pt-20 border-t border-gray-100 animate-on-scroll">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                    Why D BIZ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why DBIZ CONSULTANCY for DPIIT Startup Registration?</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Registering under DPIIT is a crucial step for startups looking to unlock tax benefits, funding opportunities, and government support. While the process may appear simple, approval largely depends on accurate documentation, proper classification, and a strong description of innovation and scalability. Even small mistakes or vague business descriptions can lead to rejection or delays.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mt-4">
                    At DBIZ CONSULTANCY, we go beyond basic filing. We make the entire DPIIT registration process simple, accurate, and approval-focused by handling every stage—from eligibility assessment to final recognition and post-registration guidance. Our team ensures that your application is strategically prepared and filed correctly the first time, minimizing delays and improving approval chances.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-6 flex items-center">
                      <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What DBIZ Handles
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "DPIIT eligibility assessment based on business model and criteria",
                        "Drafting strong business description highlighting innovation & scalability",
                        "Document validation and pre-submission review",
                        "Selection of correct entity structure (Pvt Ltd / LLP / Partnership)",
                        "DPIIT application filing on Startup India portal",
                        "Assistance with self-declaration and compliance requirements",
                        "Continuous status tracking and follow-up",
                        "Handling DPIIT queries and clarification responses",
                        "Recognition certificate download and delivery",
                        "Post-registration guidance (tax benefits, funding, compliance)"
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
                        "Certificate of Incorporation / Registration",
                        "PAN and KYC details of founders",
                        "Business details and nature of activity",
                        "Description of product/service and innovation",
                        "Website / product details (if available)",
                        "Basic business address details"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* When Should You Apply? - Strategic Trigger Points */}
                <div className="mt-12 bg-gray-50/80 p-10 md:p-14 rounded-[3rem] border border-gray-100 relative overflow-hidden group mb-12 animate-on-scroll">
                   <div className="absolute top-0 left-0 w-40 h-40 bg-dbiz-teal/5 rounded-full blur-3xl -ml-20 -mt-20 group-hover:bg-dbiz-teal/10 transition-all"></div>
                   
                   <div className="flex flex-col lg:flex-row items-center gap-10">
                      <div className="lg:w-1/3 text-center lg:text-left relative z-10">
                         <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                            <Sparkles className="h-6 w-6 text-dbiz-teal animate-pulse" />
                         </div>
                         <h3 className="text-[38.25px] font-bold text-dbiz-navy mb-4 tracking-tighter leading-tight font-sans">When Should You Apply?</h3>
                         <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Identify the key business milestones that necessitate immediate Startup India registration.</p>
                      </div>

                      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                         {[
                            "Starting a new innovative business",
                            "Planning to raise funding or investor support",
                            "Seeking tax exemptions on profits (80-IAC)",
                            "Applying for government schemes and grants",
                            "Enrolling for government tenders (DPIIT recognized)",
                            "Ensuring long-term policy and compliance benefits"
                         ].map((point, index) => (
                            <div key={index} className="flex items-center gap-4 group/point">
                               <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover/point:bg-dbiz-teal group-hover/point:border-dbiz-teal transition-all">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-dbiz-teal group-hover/point:text-white" />
                               </div>
                               <p className="text-[17px] font-medium text-dbiz-navy/80 tracking-tight leading-snug group-hover/point:text-dbiz-teal transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{point}</p>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-xl p-8 md:p-12 text-white relative overflow-hidden group/banner shadow-2xl animate-on-scroll">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/10 rounded-full blur-[120px] -mr-48 -mt-48 group-hover/banner:bg-dbiz-teal/20 transition-all duration-1000"></div>

                  <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold mb-8 text-dbiz-teal tracking-tighter uppercase underline underline-offset-8 decoration-dbiz-teal/30">Why Choose DBIZ?</h3>
                      <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-white">
                          DPIIT registration is not just about getting a certificate—it is about how effectively your startup is positioned in terms of innovation, scalability, and compliance.
                        </p>
                        <p className="text-lg leading-relaxed text-blue-100/90 font-medium">
                          At DBIZ CONSULTANCY, we go beyond basic filing. We ensure that your application is well-structured, compliant, and approval-ready, increasing your chances of recognition and long-term benefits.
                        </p>
                        <p className="text-lg leading-relaxed text-blue-100/90 font-bold border-l-2 border-dbiz-teal pl-6">
                          From documentation to approval and strategic guidance, we act as your complete startup compliance partner.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-3">
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-dbiz-teal uppercase tracking-widest border-b border-white/10 pb-4">Our Advantage</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { title: "Expert Advisory", desc: "Expert startup advisory with practical experience" },
                          { title: "Innovation Drafting", desc: "Strong drafting of innovation-focused applications" },
                          { title: "Quick Turnaround", desc: "Quick turnaround with proactive follow-up" },
                          { title: "Error-Free Filing", desc: "Error-free filing with compliance-focused approach" },
                          { title: "End-to-End Service", desc: "End-to-end service from application to recognition" },
                          { title: "Dedicated Support", desc: "Dedicated support for queries and clarifications" }
                        ].map((adv, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300">
                            <CheckCircle2 className="h-6 w-6 text-dbiz-teal mb-4" />
                            <h4 className="text-white font-bold mb-2">{adv.title}</h4>
                            <p className="text-blue-100/70 text-sm leading-relaxed">{adv.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mt-24 animate-on-scroll">
                   <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
                   <p className="text-lg text-gray-700 leading-relaxed font-medium">DBIZ CONSULTANCY is a trusted partner for entrepreneurs and growing startups across India. We take care of the entire DPIIT registration process—so you can focus on building, innovating, and scaling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">FAQs</div>
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-4">FAQs on Startup India Registration</h2>
              <p className="text-gray-500 font-medium">Last updated: March 2026</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {startupFaq.map((faq, idx) => (
                  <AccordionItem key={faq.value || idx} value={faq.value || `item-${idx}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll">
                    <AccordionTrigger className="text-[17px] font-medium text-[#020817] hover:text-dbiz-teal py-5 text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed text-[15px] pb-6 whitespace-pre-line">{faq.answer}</AccordionContent>
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

export default StartupIndiaRegistrationPage;
