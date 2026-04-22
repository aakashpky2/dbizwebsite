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
import { msmeFaq } from "@/data/msmeFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, Aadhaar verification, and submission of Udyam application on the portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "Instant to Same Day",
    desc: "System-based processing with PAN and Aadhaar validation through government database.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "Same Day",
    desc: "Udyam Registration Number and certificate are issued immediately if details are correct.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  }
];

const TIMELINE_MOBILE = [
  { step: "01", label: "Application Filing", duration: "Same Day", desc: "Collection of business details, Aadhaar verification, and submission of Udyam application on the portal.", pill: "bg-blue-50 text-blue-700 border-blue-100" },
  { step: "02", label: "Processing", duration: "Instant to Same Day", desc: "System-based processing with PAN and Aadhaar validation through government database.", pill: "bg-blue-100 text-blue-800 border-blue-200" },
  { step: "03", label: "Approval (Normal Case)", duration: "Same Day", desc: "Udyam Registration Number and certificate are issued immediately if details are correct.", pill: "bg-blue-200 text-blue-900 border-blue-300" }
];

const TIMELINE_ICONS = [Clock, Users, CheckCircle2];

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



const MSMERegistrationPage = () => {
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
              alt="GST Services Professional Background"
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
                  Fast MSME Registration | Government Recognition | Complete Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  UDYAM MSME REGISTRATION SERVICES
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  D BIZ CONSULTANCY provides complete Udyam MSME registration services. From eligibility assessment to Udyam certificate issuance and benefits guidance, our experts ensure a smooth and hassle-free registration process.
                </p>

                <Button
                  onClick={() => handleSectionClick('overview')}
                  className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 mb-10 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                >
                  <ArrowDownCircle className="h-5 w-5" /> Apply Now
                </Button>

                {/* Status Detail - Small text line under description */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>Same Day Filing</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>100% Accurate</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-dbiz-teal" />
                      <span>Expert Guidance</span>
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
                    alt="Udyam MSME Registration Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  {/* Stats Grid - "The Marked Design" */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">Same</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Day Filing</div>
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
                  What is Udyam MSME Registration?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Udyam Registration is a government registration provided to Micro, Small, and Medium Enterprises (MSMEs) under the Ministry of Micro, Small & Medium Enterprises. It gives official recognition to businesses as MSMEs and enables them to avail various benefits, subsidies, and support schemes offered by the Government of India.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Upon registration, a unique Udyam Registration Number (URN) and certificate are issued. This certificate serves as proof of MSME status and is required to claim benefits such as priority sector lending, subsidies, and protection under MSME laws.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    Udyam registration is completely online, paperless, and based on self-declaration, making it simple and accessible for businesses across India.
                  </p>
                </div>

                {/* Why GST Importance block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why Udyam Registration is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Udyam registration plays a key role in business growth and government recognition:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Provides official MSME recognition from the Government of India",
                         "Enables access to government schemes, subsidies, and incentives",
                         "Helps in obtaining collateral-free loans under MSME schemes",
                         "Provides protection against delayed payments under MSME Act",
                         "Enhances credibility with banks, financial institutions, and clients"
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
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per the MSME Development Act, 2006</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      As per the Ministry of Micro, Small and Medium Enterprises, Udyam Registration is the official government recognition provided to Micro, Small, and Medium Enterprises (MSMEs) in India:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Provides Official MSME Recognition Certificate",
                        "Enables Access to Government Subsidies & Schemes",
                        "Required for MSME Benefits & Priority Lending",
                        "Supports Business Growth & Credit Facilities"
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
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expert Guidance</p>
                          <p className="text-dbiz-navy font-bold">Contact Our MSME Team</p>
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
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">Udyam Registration is governed by the following:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "MSME Development Act, 2006", desc: "Governs MSME classification and benefits" },
                  { title: "Ministry of MSME", desc: "Authority issuing Udyam Registration" },
                  { title: "Government of India Notifications", desc: "Defines classification and eligibility criteria" }
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
                <div className="text-sm text-dbiz-navy/80 font-bold leading-relaxed tracking-tight flex flex-col">
                  <span>Eligibility Conditions (Quick Understanding): applicable if</span>
                  <span className="font-normal">• Business falls under Micro, Small, or Medium category</span>
                  <span className="font-normal">• Engaged in manufacturing or service activities</span>
                  <span className="font-normal">• Investment and turnover are within prescribed MSME limits</span>
                  <span className="font-normal">• New or existing business seeking government benefits</span>
                  <span className="font-normal">• Businesses looking for MSME recognition and support</span>
                </div>
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight [animation-delay:100ms]">Key Features of Udyam MSME Registration (Detailed)</h2>
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
                  { icon: Shield, title: "Government Recognition of Business", desc: "Udyam registration provides official recognition as a Micro, Small, or Medium Enterprise under the Government of India. This status helps businesses avail various MSME benefits and protections.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { icon: CheckCircle2, title: "Unique Udyam Registration Number (URN)", desc: "A permanent Udyam Registration Number (URN) and certificate are issued. This certificate acts as valid proof for banks, government authorities, and business transactions.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
                  { icon: CreditCard, title: "Completely Online & Paperless Process", desc: "The entire registration process is digital and based on self-declaration. No physical documents or manual approvals are required, making it fast and convenient.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=500&q=50" },
                  { icon: TrendingUp, title: "No Government Fees", desc: "Udyam registration is completely free on the official government portal, making it easily accessible for startups and small businesses.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
                  { icon: MapPin, title: "Lifetime Validity", desc: "Once registered, the Udyam certificate remains valid for the lifetime of the business. Only periodic updates may be required based on business changes on every year.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=50" },
                  { icon: FileText, title: "Integration with PAN & GST Systems", desc: "The system is linked with PAN and GST databases, enabling automatic verification of turnover and investment details, reducing chances of errors.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: Building2, title: "Applicable to All Business Structures", desc: "Available for proprietorships, partnerships, LLPs, and companies engaged in manufacturing or service sectors.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=50" },
                  { icon: Users, title: "Simplified Compliance Requirements", desc: "Compared to other registrations, MSME compliance is minimal, making it easier for small businesses to maintain their registration.", image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=500&q=50" },
                  { icon: Award, title: "Access to Government Schemes & Incentives", desc: "Registered MSMEs can avail benefits such as subsidies, credit support, priority sector lending, and various central and state government schemes.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" },
                  { icon: Shield, title: "Enhanced Business Credibility", desc: "Udyam registration improves credibility with banks, financial institutions, vendors, and customers, making it easier to secure loans and business opportunities.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" }
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
                    3. BENEFITS OF UDYAM MSME REGISTRATION
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
                        <li>• Official recognition as MSME under Government of India</li>
                        <li>• Improved credibility with banks, clients, and vendors</li>
                        <li>• Protection against delayed payments under MSME Act</li>
                        <li>• Easier participation in government tenders and contracts</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Access to collateral-free loans under MSME schemes</li>
                        <li>• Lower interest rates on business loans</li>
                        <li>• Eligibility for subsidies, incentives, and tax benefits</li>
                        <li>• Better access to credit and working capital support</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Access to government support schemes and funding programs</li>
                        <li>• Expansion opportunities with priority sector lending</li>
                        <li>• Support for technology upgradation and modernization</li>
                        <li>• Increased scalability and business development opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* When is it Mandatory Table */}
                <div className="animate-on-scroll [animation-delay:400ms]">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When Udyam MSME Registration is Applicable</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-6">
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
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Micro Enterprise</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Investment not more than 2.5 Crore & not more than 10 Crore</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Businesses with low investment and turnover engaged in manufacturing or services can register under Micro category to avail of MSME benefits.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Small Enterprise</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Investment not more than 25 Crore & not more than 100 Crore</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Businesses with moderate operations and growing scale qualify as Small Enterprises and can access financial support and subsidies.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Medium Enterprise</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Investment not more than 125 Crore & not more than 500 Crore</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Larger businesses within MSME limits can register as Medium Enterprises to benefit from government schemes and institutional support.</TableCell>
                        </TableRow>
                       </TableBody>
                     </Table>
                   </div>
                   
                   <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
                     <AlertTriangle className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                     <div>
                       <p className="font-bold text-dbiz-navy mb-2">Last updated on 01-04-2025</p>
                       <ul className="text-sm text-gray-600 space-y-1">
                         <li>• The above mentioned classification is based on amendment made till 01-04-2025</li>
                         <li>• Applicable from April 2026 onwards; subject to change as per Government regulations from time to time</li>
                       </ul>
                     </div>
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
                    {["PAN Card (Mandatory)", "Aadhaar Card of proprietor (mandatory for registration)", "Bank account details (for business transactions)", "Address proof (Aadhaar / utility bill / bank statement)"].map((item, i) => (
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
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
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
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Important Documentation Guidelines</h3>
                <p className="text-gray-500 mt-4 font-medium italic">Standard protocols for successful Udyam MSME registration.</p>
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
                      { title: "ID Consistency", desc: "Details must match across PAN, Aadhaar, and application." },
                      { title: "Mobile Linking", desc: "Aadhaar must be linked with mobile number for OTP verification." },
                      { title: "Recent Proofs", desc: "Utility bills should be recent (within 2 months)." },
                      { title: "Address Consistency", desc: "Address consistency across all documents is essential." },
                      { title: "Activity Accuracy", desc: "Business activity and classification details must be accurate." },
                      { title: "Paperless Process", desc: "No documents needed to submit to the MSME department; documents are for verification purpose only." }
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
                { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and applicant details. All details are verified carefully to ensure accuracy and avoid rejection." },
                { step: "2", title: "Aadhaar-Based Registration on Portal", desc: "The applicant visits the Udyam Registration portal and enters Aadhaar details. OTP verification is completed using the Aadhaar-linked mobile number." },
                { step: "3", title: "Filling Udyam Registration Form", desc: "The application is filled out online, including business details, organization type, investment in plant & machinery, turnover, and bank account information." },
                { step: "4", title: "Self-Declaration & Classification", desc: "The applicant declares business details based on investment and turnover. The system automatically classifies the business as Micro, Small, or Medium enterprise." },
                { step: "5", title: "Application Submission", desc: "After entering all details, the application is submitted online using Aadhaar OTP authentication. No physical documents are required to be uploaded." },
                { step: "6", title: "Udyam Certificate Generation", desc: "Upon successful verification, the system issues the Udyam Registration Number (URN) and Certificate. The business is now officially recognized as an MSME." }
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
                  { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and applicant details. All details are verified carefully to ensure accuracy and avoid rejection." },
                  { step: "2", title: "Aadhaar-Based Registration on Portal", desc: "The applicant visits the Udyam Registration portal and enters Aadhaar details. OTP verification is completed using the Aadhaar-linked mobile number." },
                  { step: "3", title: "Filling Udyam Registration Form", desc: "The application is filled out online, including business details, organization type, investment in plant & machinery, turnover, and bank account information." },
                  { step: "4", title: "Self-Declaration & Classification", desc: "The applicant declares business details based on investment and turnover. The system automatically classifies the business as Micro, Small, or Medium enterprise." },
                  { step: "5", title: "Application Submission", desc: "After entering all details, the application is submitted online using Aadhaar OTP authentication. No physical documents are required to be uploaded." },
                  { step: "6", title: "Udyam Certificate Generation", desc: "Upon successful verification, the system issues the Udyam Registration Number (URN) and Certificate. The business is now officially recognized as an MSME." }
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                          <div className="card-duration">Same Day</div>
                          <p className="card-description">
                            In most cases where valid Aadhaar authentication and correct details are provided.
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
                          <h4 className="card-title">Delayed Cases</h4>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back">
                          <div className="card-duration">1–2 Days</div>
                          <p className="card-description">
                            Applies if there are technical portal errors or delays in document submission.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Hint */}
                  <div className="mt-12 flex items-center justify-center gap-3 animate-on-scroll" style={{ animationDelay: '300ms' }}>
                    <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0" />
                    <p className="text-sm text-gray-500 font-semibold italic max-w-2xl text-center">
                      Note: Since Udyam registration is fully automated, <span className="text-dbiz-navy not-italic font-black">accurate PAN, Aadhaar, and business details</span> ensure instant approval without delays.
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
                    <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">8. Post-Registration MSME Compliance</h3>
                    <p className="text-gray-500 font-medium text-sm max-w-2xl">
                      Once registered as an MSME, there are no monthly returns, but some updates help maintain active status and benefits.
                    </p>
                  </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-12 place-items-center mb-10 py-6">
                      {[
                        { type: "Address or Data Updates", freq: "As required (based on changes)" },
                        { type: "Income Tax Filing Updates", freq: "Annually" }
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



                    {/* Penalties Section */}
                    <div className="consultancy-section-card animate-on-scroll">
                      <p className="consultancy-label">Caution</p>
                      <h4 className="consultancy-heading">Penalties</h4>
                      <div className="penalty-grid">
                        {[
                          { title: "Incorrect Information", desc: "Cancellation of Udyam Registration" },
                          { title: "Non-update of Business Details", desc: "Loss of MSME benefits" },
                          { title: "Misclassification (wrong data)", desc: "Reclassification or legal action" },
                          { title: "Non-compliance with MSME rules", desc: "Disqualification from schemes / benefits" }
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

                      <div className="mt-8 pt-6 border-t border-red-500/10">
                        <p className="text-[13px] text-gray-500 italic leading-relaxed">
                          <span className="font-semibold text-red-600 not-italic mr-1">Note:</span> 
                          Udyam registration has lifetime validity, but updating correct business details is essential to continue availing MSME benefits.
                        </p>
                      </div>
                    </div>

                </div>

                {/* 9. Why D BIZ CONSULTANCY for GST Registration? */}
                <div className="pt-20 border-t border-gray-100 animate-on-scroll">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                      <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                      Why D BIZ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for Udyam MSME Registration?</h2>
                    <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                      <p>Registering under Udyam MSME is an important step for businesses to gain government recognition and unlock various benefits. While the process is online and simple, incorrect details, mismatched data, or improper classification can lead to rejection or loss of benefits.</p>
                      <p className="font-semibold text-dbiz-navy">That’s where D BIZ CONSULTANCY comes in.</p>
                      <p>We make the entire Udyam registration process smooth, accurate, and hassle-free by handling everything—from eligibility check to certificate issuance and guidance on MSME benefits.</p>
                    </div>
                  </div>

                  {/* What We Handle vs What You Provide */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-dbiz-navy mb-6 flex items-center">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What D BIZ Handles
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "MSME eligibility assessment based on investment and turnover",
                          "Classification guidance (Micro / Small / Medium)",
                          "Document verification and data validation",
                          "Udyam portal registration and application filing",
                          "Aadhaar authentication and OTP verification support",
                          "Ensuring correct PAN and GST data linkage",
                          "Error-free submission to avoid rejection or mismatch",
                          "Udyam certificate download and delivery",
                          "Guidance on MSME schemes, subsidies, and benefits",
                          "Post-registration advisory and updates"
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
                          "Aadhaar and PAN of applicant / business",
                          "Business details and nature of activity",
                          "Investment and turnover details",
                          "Bank account details",
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
                           <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Identify the key milestones that trigger the need for immediate MSME registration.</p>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                           {[
                              "Starting a new business or startup",
                              "Wanting MSME recognition and government benefits",
                              "Applying for business loans or subsidies",
                              "Participating in government tenders",
                              "Expanding business operations",
                              "Seeking protection under MSME Act (delayed payments)"
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
                             Udyam registration is not just about getting a certificate, it is about proper classification, correct data submission, and ensuring eligibility for long-term benefits.
                           </p>
                           <p className="text-lg leading-relaxed text-blue-100/90 font-medium">
                             At D BIZ CONSULTANCY, we go beyond registration. We ensure your business is correctly registered and positioned to take full advantage of MSME schemes and opportunities.
                           </p>
                           <p className="text-lg leading-relaxed text-blue-100/90 font-bold border-l-2 border-dbiz-teal pl-6">
                             From application to post-registration guidance, we act as your complete MSME partner.
                           </p>
                        </div>
                      </div>
 
                      <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {[
                            { title: "Expert Professionals", desc: "With MSME and compliance experience" },
                            { title: "Quick & Same-Day", desc: "Registration support" },
                            { title: "Error-Free Filing", desc: "With proper classification" },
                            { title: "End-to-End Service", desc: "From application to certificate" },
                            { title: "Dedicated Support", desc: "For queries and updates" },
                            { title: "Ongoing Guidance", desc: "On loans, subsidies, and MSME benefits" }
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

              </div> {/* End of flex-col 871 */}
            </div> {/* End of container-custom 870 */}
        </section> {/* End of section 869 */}

          {/* Deadlines Section */}
          <div id="deadlines" className="py-20 scroll-mt-32">
            <div className="container-custom">
              <div className="consultancy-section-card animate-on-scroll">
                <p className="consultancy-label">Timelines</p>
                <h4 className="consultancy-heading">MSME Compliance Deadlines</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Udyam Registration", due: "Immediate / Anytime", desc: "Registration can be done anytime after starting business operations." },
                    { title: "Data Update", due: "Annual (by 31st Oct)", desc: "Mandatory annual update of turnover and investment details on Udyam portal." },
                    { title: "Delayed Payment Filing", due: "Half-Yearly (MSME-1)", desc: "For companies: Filings regarding outstanding payments to MSME suppliers." }
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
          </div>

          {/* Penalties Section */}
          <div id="penalties" className="py-20 bg-gray-50/50 scroll-mt-32">
            <div className="container-custom">
              <div className="consultancy-section-card animate-on-scroll">
                <p className="consultancy-label">Legal Risks</p>
                <h4 className="consultancy-heading">Consequences & Penalties</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "False Information", desc: "Furnishing false information in Udyam registration can lead to penalties under the MSME Act." },
                    { title: "Penalty for 1st Offence", desc: "Fine up to ₹1,000 as per statutory provisions." },
                    { title: "Subsequent Offences", desc: "Fine ranging from ₹1,000 to ₹10,000 for repeated violations." },
                    { title: "Loss of Benefits", desc: "Incorrect registration may lead to cancellation of MSME benefits and subsidies." }
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
          </div>

         {/* Our Commitment Section */}
         <section className="py-12 bg-white">
           <div className="container-custom">
             <div className="max-w-4xl mx-auto text-center animate-on-scroll">
               <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
               <p className="text-[19.125px] text-gray-700 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                 With strong expertise in business registrations and compliance, D BIZ CONSULTANCY is a trusted partner for startups and growing businesses across India. <span className="text-gray-600">We take care of the entire Udyam registration process—so you can focus on scaling your business with confidence.</span>
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
               <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight [animation-delay:100ms]">FAQs on Udyam MSME Registration</h2>
               <p className="text-gray-500 mb-8 font-medium [animation-delay:200ms]">Last updated: March 2026</p>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                 Whether you're starting a business, understanding MSME eligibility, or planning to avail government benefits — here are the most commonly asked questions with clear and practical answers.
               </p>
             </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {msmeFaq.map((faq, idx) => (
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

export default MSMERegistrationPage;
