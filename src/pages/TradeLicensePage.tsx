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
  Gavel
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
import { tradeLicenseFaq } from "@/data/tradeLicenseFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

// ── Extracted outside component for React Fast Refresh / HMR stability ──
const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, document verification, and submission of Trade License application to local authority.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing & Inspection",
    duration: "3 – 6 Working Days",
    desc: "Internal review and document validation by municipal authority, including site inspection if applicable.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "3 – 7 Working Days",
    desc: "Trade License is issued if all details are correct and no inspection/verification issues arise.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Approval (With Query/Delay)",
    duration: "Up to 10 Working Days",
    desc: "Time may increase if authority raises queries, requires corrections, or additional approvals.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];

const TIMELINE_MOBILE = [
  { step: "01", label: "Application Filing", duration: "Same Day", desc: "Collection of details, document verification, and submission.", pill: "bg-blue-50 text-blue-700 border-blue-100" },
  { step: "02", label: "Processing & Inspection", duration: "3 – 6 Working Days", desc: "Internal review and premises inspection by authority.", pill: "bg-blue-100 text-blue-800 border-blue-200" },
  { step: "03", label: "Approval (Normal Case)", duration: "3 – 7 Working Days", desc: "Trade License issued if all details are found correct.", pill: "bg-blue-200 text-blue-900 border-blue-300" },
  { step: "04", label: "Approval (Delay Case)", duration: "Up to 10 Working Days", desc: "Applicable if queries raised or additional approvals needed.", pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20" }
];

const TIMELINE_ICONS = [Clock, Users, CheckCircle2, AlertTriangle];

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



const TradeLicensePage = () => {
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
      const headerOffset = 160;
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1440&q=60"
              alt="Trade License Services Professional Background"
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
                  Fast Trade License Registration | Municipal Approval | Complete Compliance Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  Trade License Registration Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete Trade License registration services. From eligibility assessment to municipal approval and compliance guidance, our experts ensure a smooth, error-free licensing process.
                </p>

                <Button
                  onClick={() => handleSectionClick('overview')}
                  className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 mb-10 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                >
                  <ArrowDownCircle className="h-5 w-5" /> Learn More
                </Button>

                {/* Status Detail - Small text line under description */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>Quick Registration</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>Guaranteed Compliance</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-dbiz-teal" />
                      <span>Expert Support</span>
                   </div>
                </div>
              </div>

              {/* Right Content - Hero Sidebar Stats Grid as per Screenshot */}
              <div className="hidden md:block md:col-span-4 relative animate-on-scroll [animation-delay:400ms]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-2xl blur-3xl opacity-50"></div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative transition-transform transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/5 rounded-full blur-3xl"></div>
                  
                  {/* Hero Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=60" 
                    alt="Trade License Registration Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  {/* Stats Grid - "The Marked Design" */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">3 - 7</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Days</div>
                    </div>

                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Accurate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Wrapper */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'features', icon: Shield, label: 'Features' },
                { id: 'benefits', icon: TrendingUp, label: 'Benefits' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: Gavel, label: 'Penalties' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
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
                  What is a Trade License?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    A Trade License is a legal authorization issued by the local municipal authority (Corporation / Municipality / Panchayat) that permits a business to carry out specific commercial activities within a defined location.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    It ensures that the business complies with local regulations related to public safety, hygiene, zoning, and environmental standards. The license is activity-specific and location-based, meaning approval depends on the type of business and place of operation.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    Operating without a valid Trade License may lead to penalties, fines, or closure of business by local authorities.
                  </p>
                </div>

                {/* Why Trade License Importance block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why Trade License is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Trade License plays a critical role in legal and compliant business operations:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Provides legal permission to operate business in a specific locality",
                         "Ensures compliance with municipal laws and safety standards",
                         "Prevents legal issues, penalties, and business closure",
                         "Builds trust with customers, vendors, and authorities",
                         "Required for obtaining other registrations and approvals"
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
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-7 rounded-[2rem] border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm animate-on-scroll [animation-delay:400ms]">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per Municipal Trade License Regulations</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Section-wise, municipal laws define a Trade License as the official authorization issued by the local authority permitting a business to operate legally within its jurisdiction:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Mandatory for Commercial Business Operations",
                        "Issued by Local Municipal Authority",
                        "Ensures Compliance with Health & Safety Regulations",
                        "Authorizes Legal Business Activities",
                        "Required for Shops, Establishments & Service Businesses"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal mr-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-normal text-[17px] tracking-tight leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
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



        {/* 2. Legal Framework Section - Full-width background color */}
        <section className="bg-gray-50 py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="animate-on-scroll">
              <h3 className="text-[38.25px] font-bold text-dbiz-navy mb-4 uppercase tracking-tighter text-center">Legal Framework</h3>
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">Trade License is governed by the following statutory laws and municipal regulations:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "Municipal Corporation / Panchayat", desc: "Issues Trade License" },
                  { title: "State Municipal Acts", desc: "Governs licensing procedures" },
                  { title: "Local Bye-laws", desc: "Regulate business activities and zoning" }
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
                  These laws collectively regulate registration, tax collection, filing, compliance, and penalties.
                </p>
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
                2. FEATURES
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight [animation-delay:100ms]">Key Features Of Trade License Registration</h2>
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
                  { icon: Shield, title: "Legal Authorization to Operate Business", desc: "Trade License provides legal permission from the local municipal authority to carry out specific business activities. It ensures that the business operates in compliance with local laws and regulations.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { icon: CheckCircle2, title: "Activity-Specific Approval", desc: "The license is issued based on the nature of business (food, retail, manufacturing, etc.), ensuring that only permitted activities are carried out at the approved location.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
                  { icon: MapPin, title: "Location-Based Regulation", desc: "Trade License is linked to a specific business premises and ensures that the activity complies with zoning and municipal guidelines of that area.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=50" },
                  { icon: FileText, title: "Ensures Public Safety & Hygiene Compliance", desc: "The license ensures that the business follows safety, health, and hygiene standards, especially for food, manufacturing, and public-facing activities.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: Building2, title: "Mandatory for Certain Businesses", desc: "Many businesses such as restaurants, shops, factories, and service providers are required to obtain Trade License before commencing operations.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=50" },
                  { icon: Users, title: "Facilitates Other Registrations", desc: "Trade License is often required for obtaining other registrations such as GST, FSSAI, Shop & Establishment License, and bank approvals.", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=500&q=50" },
                  { icon: RefreshCw, title: "Periodic Renewal Requirement", desc: "Unlike some registrations, Trade License requires renewal (usually annually), ensuring continued compliance with local authority regulations.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=500&q=50" },
                  { icon: TrendingUp, title: "Subject to Inspection & Verification", desc: "Municipal authorities may conduct inspections before or after issuing the license to ensure compliance with rules and regulations.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
                  { icon: Award, title: "Enhances Business Credibility", desc: "Having a Trade License increases trust among customers, vendors, and authorities by proving that the business is legally approved to operate.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" },
                  { icon: Shield, title: "Prevents Legal Penalties & Closure", desc: "Operating without a Trade License may result in penalties, fines, or closure of the business by local authorities.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" }
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
                    3. BENEFITS OF TRADE LICENSE REGISTRATION
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight [animation-delay:200ms]">
                    Categorized Advantages
                  </h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 [animation-delay:400ms]">
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=50" 
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
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Business Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Legal permission to operate business within a specific area</li>
                        <li>• Ensures compliance with municipal laws and regulations</li>
                        <li>• Builds credibility with customers, vendors, and authorities</li>
                        <li>• Avoids legal issues, penalties, and business closure</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Helps in smooth business operations without interruption</li>
                        <li>• Avoids fines and penalties due to non-compliance</li>
                        <li>• Supports loan approvals and financial credibility</li>
                        <li>• Enables better record-keeping and structured operations</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Enables expansion of business within regulated areas</li>
                        <li>• Helps in obtaining other licenses (GST, FSSAI, etc.)</li>
                        <li>• Improves business reputation and trust in the market</li>
                        <li>• Supports long-term scalability and compliance-driven growth</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* When is it Mandatory Table */}
                <div className="animate-on-scroll [animation-delay:400ms]">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When Trade License is Required</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="font-medium text-white py-4 text-[14.875px]">Condition</TableHead>
                          <TableHead className="font-medium text-white py-4 text-[14.875px]">Requirement</TableHead>
                          <TableHead className="font-medium text-white py-4 text-[14.875px]">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Opening a Shop / Commercial Establishment</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Any business operating from a shop, office, or commercial space must obtain a Trade License from the local authority.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Food & Hospitality Business</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Restaurants, cafes, bakeries, and food stalls must obtain a Trade License to ensure hygiene and safety compliance.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Manufacturing / Industrial Activity</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Factories, workshops, and production units require Trade License to operate legally.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Retail / Trading Business</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Shops and traders dealing in goods must obtain Trade License as per municipal regulations.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Local Authority Requirement</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Required as per municipal laws, regardless of turnover, based on business type and location.</TableCell>
                         </TableRow>
                       </TableBody>
                     </Table>
                   </div>
 
                   <h4 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16 tracking-tight">Types of Trade License</h4>
                   <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-12">
                     <Table>
                       <TableHeader className="bg-dbiz-navy">
                         <TableRow hoverable={false}>
                           <TableHead className="font-medium text-white py-4 text-[14.875px]">Type</TableHead>
                           <TableHead className="font-medium text-white py-4 text-[14.875px]">Suitable For</TableHead>
                           <TableHead className="font-medium text-white py-4 text-[14.875px]">Description</TableHead>
                         </TableRow>
                       </TableHeader>
                       <TableBody>
                         <TableRow hoverable={false}>
                           <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Shop / Establishment License</TableCell>
                           <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Retail businesses</TableCell>
                           <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>For shops, showrooms, and commercial establishments operating within municipal limits.</TableCell>
                         </TableRow>
                         <TableRow className="bg-gray-50/50" hoverable={false}>
                           <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Food Trade License</TableCell>
                           <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Restaurants / food businesses</TableCell>
                           <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>For businesses involved in food preparation, sale, and distribution.</TableCell>
                         </TableRow>
                         <TableRow hoverable={false}>
                           <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Industrial Trade License</TableCell>
                           <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Manufacturing units</TableCell>
                           <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>For factories, production units, and industrial operations.</TableCell>
                         </TableRow>
                         <TableRow className="bg-gray-50/50" hoverable={false}>
                           <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>General Trade License</TableCell>
                           <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Service providers</TableCell>
                           <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>For service-based businesses such as offices, consultancies, and small enterprises.</TableCell>
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
                    {["Aadhaar Card of applicant", "Passport-sized photograph", "Business address proof", "Details of business activity"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-[17px]">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

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
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Company / LLP</h3>
                  <ul className="space-y-5">
                    {["Certificate of Incorporation / Registration", "PAN Card of Company / LLP", "MOA & AOA / LLP Agreement", "Directors’ / Partners’ KYC documents (PAN, Aadhaar, address proof)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-[17px] leading-tight">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0 mt-0.5 self-start" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll [animation-delay:300ms] flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50" 
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
                    {["Rent Agreement + NOC from owner (if rented)", "Latest Electricity / Utility Bill (within 2 months)", "Ownership proof (if property is owned)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-[17px] leading-tight">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0 mt-0.5 self-start" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Documents Section */}
            <div className="max-w-4xl mx-auto mb-16 animate-on-scroll">
               <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-10 group transition-all duration-500 hover:shadow-2xl">
                  <div className="w-full md:w-1/3 relative h-48 overflow-hidden rounded-[2rem] shrink-0">
                    <CachedImage 
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=50" 
                        alt="Additional Documents" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-dbiz-navy/40 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-black text-dbiz-navy text-2xl mb-6 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Additional Documents (If Applicable)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          "Trade-specific approvals (for food, manufacturing, etc.)",
                          "Layout plan of premises (in some municipalities)",
                          "Fire safety certificate (for certain businesses)"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-4 text-gray-700 font-bold group/list text-[17px] leading-snug">
                            <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-1" /> {item}
                          </div>
                        ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Documentation Guidelines - Header at Top */}
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll [animation-delay:400ms]">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-xs font-black tracking-widest mb-6 border border-dbiz-teal/20 uppercase">
                  <Sparkles className="h-3 w-3" />
                  Critical
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Documentation Guidelines</h3>
                <p className="text-gray-500 mt-4 font-medium italic">Standard protocols for successful GST registration.</p>
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
                      { title: "Detail Verification", desc: "Details must match across all documents and application." },
                      { title: "Address Validity", desc: "Address proof must be valid and recent." },
                      { title: "Business Definition", desc: "Business activity must be clearly defined and accurate." },
                      { title: "NOC Execution", desc: "NOC must be properly signed by property owner (if rented)." },
                      { title: "Additional Approvals", desc: "Additional approvals may be required based on business type." }
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
              <p className="text-[13px] text-gray-400 font-medium mt-6 italic text-center">Note: Even minute discrepancies in data can lead to application query or rejection.</p>
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
                { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and applicant details. This includes PAN, Aadhaar, nature of business activity, address proof, and premises details. All documents are carefully verified to ensure accuracy." },
                { step: "2", title: "Application Preparation", desc: "The appropriate application is prepared based on the type of business and local municipal regulations. Details such as business category, location zoning, and compliance requirements are finalized." },
                { step: "3", title: "Application Filing with Local Authority", desc: "The application is submitted to the respective Municipal Corporation / Panchayat through online or offline mode depending on the city. All required documents are uploaded or attached." },
                { step: "4", title: "Fee Payment", desc: "The applicable government fee is calculated based on nature of business activity, size of premises, and local rules. Payment is made online/offline and receipt generated." },
                { step: "5", title: "Inspection by Authority (if required)", desc: "In certain cases, the municipal authority may conduct a physical inspection of the premises to verify business activity matches application, safety standards, and zoning." },
                { step: "6", title: "Application Verification & Approval", desc: "The local authority reviews the application and documents. If everything is correct, application gets approved. If clarification is required, notice/query is issued." },
                { step: "7", title: "Trade License Issuance", desc: "Upon approval, the Trade License is issued by the municipal authority. The certificate specifies business activity and location, and validity (usually 1 year, up to 5 years). The business is now legally authorized to operate." }
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
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
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
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
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
                  { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and applicant details. All documents are carefully verified to ensure accuracy." },
                  { step: "2", title: "Application Preparation", desc: "The appropriate application is prepared based on business category and local municipal regulations." },
                  { step: "3", title: "Application Filing", desc: "The application is submitted to the respective Municipal Corporation / Panchayat with all required documents." },
                  { step: "4", title: "Fee Payment", desc: "The applicable government fee is paid online or offline and a receipt is generated for the application." },
                  { step: "5", title: "Authority Inspection", desc: "In some cases, the municipal authority may conduct a physical inspection of the premises for verification." },
                  { step: "6", title: "Verification & Approval", desc: "The local authority reviews the application. If correct, it gets approved; otherwise, a clarification query is issued." },
                  { step: "7", title: "License Issuance", desc: "Upon approval, the Trade License is issued specifying activity, location, and validity (1-5 years)." }
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

        {/* 7. Timeline & Why Choose D BIZ Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
              
              <div>
                {/* Header */}
                <div className="mb-12 text-center">
                  <h3 className="text-[38.25px] font-bold text-dbiz-navy uppercase tracking-tighter">TIMELINE & DELIVERY</h3>
                  <div className="w-20 h-1.5 bg-dbiz-teal rounded-full mt-4 mx-auto"></div>
                </div>

                {/* ── UIVERSE ANIMATED CARDS ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {TIMELINE_DESKTOP.map((item, i) => (
                    <div 
                      key={i} 
                      className="uiverse-timeline-card animate-on-scroll" 
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <div className="uiverse-timeline-card-content">
                        <div className="card-duration">{item.duration}</div>
                        <h4 className="card-title">{item.label}</h4>
                        <p className="card-para">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Summary Cards */}
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
                        {/* Front Face */}
                        <div className="card-face front">
                          <i className="fa-solid fa-person-running text-[42px] text-dbiz-teal mb-4"></i>
                          <h4 className="card-title">Fast Track Approval</h4>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back">
                          <div className="card-duration">3 – 5 Days</div>
                          <p className="card-description">
                            Applicable when no inspection is required and all documents are perfectly filed.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Standard Timeline Flip */}
                    <div className="three-d-card animate-on-scroll" style={{ animationDelay: '100ms' }}>
                      <div className="card-wrapper">
                        {/* Front Face */}
                        <div className="card-face front">
                          <i className="fa-solid fa-calendar-check text-[42px] text-blue-500 mb-4"></i>
                          <h4 className="card-title">Standard Timeline</h4>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back">
                          <div className="card-duration">5 – 7 Days</div>
                          <p className="card-description">
                            Typical timeframe for the issuance of license in most normal cases.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Delayed Cases Flip */}
                    <div className="three-d-card animate-on-scroll" style={{ animationDelay: '150ms' }}>
                      <div className="card-wrapper">
                        {/* Front Face */}
                        <div className="card-face front">
                          <i className="fa-solid fa-hourglass-half text-[42px] text-amber-500 mb-4"></i>
                          <h4 className="card-title text-amber-600">Delayed Cases</h4>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back">
                          <div className="card-duration">Up to 10 Days</div>
                          <p className="card-description">
                            Happens when inspection is mandatory, queries are raised, or there are authority delays.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Hint */}
                  <div className="mt-12 flex items-center justify-center gap-3 animate-on-scroll" style={{ animationDelay: '300ms' }}>
                    <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0" />
                    <p className="text-sm text-gray-500 font-semibold italic">
                      Note: Approval time may vary. <span className="text-dbiz-navy not-italic font-black">Accurate documentation and correct application details</span> help ensure faster approval.
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
                      Once registered, your business must maintain these mandatory filing cycles to remain legally active and avoid high non-compliance penalties.
                    </p>
                  </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center mb-10 py-6 max-w-4xl mx-auto">
                      {[
                        { type: "Trade License Renewal", freq: "Annual (before expiry)" },
                        { type: "Local Authority Updates", freq: "As required (in case of changes)" }
                      ].map((filing, idx) => (
                        <div key={idx} className="blob-card-container animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                           <div className="blob-card-orbit"></div>
                           <div className="blob-card-bg">
                              <h4 className="text-[20px] font-black text-dbiz-navy uppercase tracking-tighter mb-1 select-none">{filing.type}</h4>
                              <p className="text-[10px] font-black text-dbiz-teal uppercase tracking-[0.3em] select-none">{filing.freq}</p>
                           </div>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Section */}
                    <div className="consultancy-section-card animate-on-scroll">
                      <p className="consultancy-label">Essential</p>
                      <h4 className="consultancy-heading">Compliance Requirements</h4>
                      <div className="compliance-grid">
                        {[
                          "Renew Trade License before expiry to continue operations legally",
                          "Display Trade License at business premises (if required by authority)",
                          "Maintain hygiene, safety, and sanitation standards",
                          "Ensure business activity matches approved license category",
                          "Comply with municipal rules, zoning laws, and local regulations",
                          "Update authority in case of change in business address or activity"
                        ].map((req, i) => (
                          <div key={i} className="compliance-inner-card">
                             <div className="compliance-check-icon w-6 h-6 flex-shrink-0 mt-1">
                               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                             </div>
                             <span className="compliance-label-text">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Penalties Section */}
                    <div className="consultancy-section-card animate-on-scroll">
                      <p className="consultancy-label">Caution</p>
                      <h4 className="consultancy-heading">Legal Penalties</h4>
                      <div className="penalty-grid">
                        {[
                          { title: "Operating without Trade License", desc: "Heavy fine / business closure" },
                          { title: "Late Renewal", desc: "Penalty charges and additional fees" },
                          { title: "Violation of license conditions", desc: "Suspension or cancellation of license" },
                          { title: "Providing incorrect information", desc: "Rejection or legal action" }
                        ].map((item, i) => (
                          <div key={i} className="penalty-inner-card">
                             <div className="penalty-header">
                                <div className="penalty-dot"></div>
                                <span className="penalty-title">{item.title}</span>
                             </div>
                             <p className="penalty-desc">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="mt-8 text-[13px] text-gray-500 font-semibold italic text-center animate-on-scroll">
                        Note: Trade License is generally valid for 1 year and must be renewed annually, we can also obtain license for 5 years in some states. Timely renewal and compliance help avoid penalties and ensure uninterrupted business operations.
                      </p>
                    </div>

                </div>

                {/* 9. Why D BIZ CONSULTANCY for GST Registration? */}
                <div className="pt-20 border-t border-gray-100 animate-on-scroll">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                      <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                      Why D BIZ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for Trade License Registration?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Obtaining a Trade License is essential for legally operating a business within municipal limits. However, the process varies across locations, involves dealing with local authorities, and requires accurate documentation and compliance with zoning and safety regulations. That’s where D BIZ CONSULTANCY comes in. We simplify the entire Trade License registration process by managing everything—from document preparation to application filing and approval follow-ups. Our team ensures your application is accurate, compliant, and processed without unnecessary delays.
                    </p>
                  </div>

                  {/* What We Handle vs What You Provide */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-dbiz-navy mb-6 flex items-center">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What D BIZ Handles
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "Assessment of business activity and license requirements",
                          "Identification of correct municipal authority and license type",
                          "Document validation and pre-submission review",
                          "Preparation and filing of Trade License application",
                          "Coordination with municipal authorities",
                          "Handling queries, inspections, and approvals",
                          "Follow-up for faster processing and approval",
                          "License collection and delivery",
                          "Renewal support and compliance guidance"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium leading-snug">{item}</span>
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
                          "PAN and Aadhaar of applicant / business",
                          "Business details and nature of activity",
                          "Registered office / shop address proof",
                          "Rent agreement / ownership documents",
                          "NOC from property owner (if applicable)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium leading-snug">{item}</span>
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
                           <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Identify the key milestones that trigger the need for immediate Trade License registration.</p>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                           {[
                              "Starting a new shop, office, or business",
                              "Opening a restaurant, retail outlet, or service center",
                              "Expanding business to a new location",
                              "Required by municipal authority for compliance",
                              "Applying for other registrations (GST, FSSAI, etc.)"
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

                  <div className="bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-xl p-8 md:p-12 text-white relative overflow-hidden group/banner shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/10 rounded-full blur-[120px] -mr-48 -mt-48 group-hover/banner:bg-dbiz-teal/20 transition-all duration-1000"></div>
                    
                    <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold mb-8 text-dbiz-teal tracking-tighter uppercase underline underline-offset-8 decoration-dbiz-teal/30">Our Advantage</h3>
                        <div className="space-y-6">
                           <p className="text-lg leading-relaxed text-white">
                             Trade License registration is not just about filing an application—it requires understanding local laws, proper classification of business activity, and coordination with authorities.
                           </p>
                           <p className="text-lg leading-relaxed text-blue-100/90 font-medium">
                             At DBIZ CONSULTANCY, we ensure that your license is obtained correctly and without delays. Our structured approach minimizes errors, avoids rejections, and ensures full compliance with municipal regulations.
                           </p>
                           <p className="text-lg leading-relaxed text-blue-100/90 font-bold border-l-2 border-dbiz-teal pl-6">
                             From documentation to approval and renewal, we act as your complete compliance partner.
                           </p>
                        </div>
                      </div>
 
                      <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {[
                            { title: "Expert Professionals", desc: "Expert handling of municipal approvals" },
                            { title: "Quick Processing", desc: "Quick processing with proactive follow-up" },
                            { title: "Error-Free Filing", desc: "Error-free documentation and filing" },
                            { title: "End-to-End Service", desc: "End-to-end service from application to license" },
                            { title: "Dedicated Support", desc: "Dedicated support for queries and inspections" },
                            { title: "Ongoing Guidance", desc: "Renewal and compliance support" }
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
                </div>

                {/* Deadlines Section */}
                <div id="deadlines" className="py-20 scroll-mt-32">
                  <div className="consultancy-section-card animate-on-scroll">
                    <p className="consultancy-label">Timelines</p>
                    <h4 className="consultancy-heading">Trade License Statutory Deadlines</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        { title: "New Registration", due: "Before Commencement", desc: "Mandatory application before starting business operations (or within 30 days of commencement)." },
                        { title: "Annual Renewal", due: "By 31st March", desc: "Most municipalities require annual renewal by the end of the financial year." },
                        { title: "Ownership Change", due: "Within 30 Days", desc: "Notification to the local authority for changes in business ownership or structure." },
                        { title: "Premises Relocation", due: "Within 30 Days", desc: "Mandatory update if the business shifts to a new location within the jurisdiction." }
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all">
                          <Clock className="h-6 w-6 text-dbiz-teal shrink-0 mt-1" />
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

                {/* Penalties Section */}
                <div id="penalties" className="py-20 bg-gray-50/50 scroll-mt-32 rounded-[3rem]">
                  <div className="consultancy-section-card animate-on-scroll">
                    <p className="consultancy-label">Legal Risks</p>
                    <h4 className="consultancy-heading">Penalties & Legal Risks</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "Late Renewal Fee", desc: "Delay in license renewal attracts monthly interest or fixed penalties as per municipal bye-laws." },
                        { title: "Operation Without License", desc: "Operating without a valid license can lead to heavy daily fines and immediate business closure notices." },
                        { title: "Premises Sealing", desc: "Repeated violations or failure to obtain a license may lead to the physical sealing of business premises." },
                        { title: "Statutory Prosecution", desc: "Serious non-compliance can result in legal prosecution under State Municipal Corporation Acts." }
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

              </div> {/* End of flex-col 871 */}
            </div> {/* End of container-custom 870 */}
        </section> {/* End of section 869 */}

         {/* Our Commitment Section */}
         <section className="py-12 bg-white">
           <div className="container-custom">
             <div className="max-w-4xl mx-auto text-center animate-on-scroll">
               <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
               <p className="text-[19.125px] text-gray-700 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                 With strong expertise in business registrations and compliance services, DBIZ CONSULTANCY is a trusted partner for entrepreneurs and businesses across India. <span className="text-gray-600">We handle the entire Trade License process—so you can focus on running and growing your business without compliance worries.</span>
               </p>
               
                 
               
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
               <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight [animation-delay:100ms]">FAQs on Trade License Registration</h2>
               <p className="text-gray-500 mb-8 font-medium [animation-delay:200ms]">Last updated: March 2026</p>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                 Whether you're starting a business, understanding local compliance, or planning license renewal — here are the most commonly asked questions with clear and practical answers.
               </p>
             </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {tradeLicenseFaq.map((faq, idx) => (
                  <AccordionItem key={faq.value} value={faq.value} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll" style={{ animationDelay: `${idx * 50 + 300}ms` }}>
                    <AccordionTrigger className="text-[17px] font-medium text-[#020817] hover:text-dbiz-teal hover:no-underline py-5 text-left font-sans">
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

      </main>
      <Footer />
    </div>
  );
};

export default TradeLicensePage;
