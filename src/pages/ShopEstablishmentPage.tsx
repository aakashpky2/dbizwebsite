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
  FileCheck,
  Briefcase,
  Store,
  Map,
  XCircle
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
import { shopEstablishmentFaq } from "@/data/shopEstablishmentFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, document verification, and submission of application on Labour Department portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "1 – 3 Working Days",
    desc: "Initial verification of application and documents by the Labour Department.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "2 – 5 Working Days",
    desc: "Registration certificate is issued if all details are correct and no clarification is required.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Query / Correction",
    duration: "Up to 7 Working Days",
    desc: "Time may increase if department raises queries or additional documents are required.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];

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

const ShopEstablishmentPage = () => {
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1440&q=60"
              alt="Shop & Establishment Registration Services Professional Background"
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
                  Fast Registration | Labour Law Compliance | Complete Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  Shop & Establishment License Registration Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete Shop & Establishment registration services. From eligibility assessment to registration certificate issuance and compliance setup, our experts ensure a smooth, error-free process.
                </p>

                <Button
                  onClick={() => handleSectionClick('overview')}
                  className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 mb-10 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                >
                  <ArrowDownCircle className="h-5 w-5" /> Apply Now
                </Button>

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
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=60" 
                    alt="Shop & Establishment Registration Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">2-5</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Days Approval</div>
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
                  What is Shop & Establishment Registration?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Shop & Establishment Registration is a statutory requirement under the respective State Shops and Establishments Act for businesses operating shops, offices, or commercial establishments. It provides legal recognition to businesses and regulates working conditions, employee rights, wages, working hours, and overall workplace compliance.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Upon registration, a Shop & Establishment Registration Certificate is issued by the Labour Department. This certificate is used for compliance, opening bank accounts, and obtaining other business registrations.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    This registration applies to a wide range of businesses including retail shops, offices, service providers, restaurants, and other commercial establishments.
                  </p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why Shop & Establishment Registration is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal">Shop & Establishment registration is not just a legal requirement — it plays a critical role in business operations:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Ensures legal recognition under labour laws",
                         "Mandatory for businesses employing staff in most states",
                         "Regulates working conditions, wages, and employee benefits",
                         "Helps in opening current bank accounts and other registrations",
                         "Builds trust with employees, clients, and authorities"
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
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per the Shop & Establishment Act</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium">
                      Section-wise, the Shop & Establishment Act (applicable State Law) defines registration as the process of legally recognizing a commercial establishment or shop operating within a State:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Mandatory for Shops & Commercial Establishments",
                        "Required for Business Operation Legality",
                        "Essential for Employee & Labour Law Compliance",
                        "Provides Legal Business Identity & Local Authority Approval",
                        "Required for Opening Business Bank Accounts & Trade Activities"
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
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">Shop & Establishment Registration is governed by state-specific laws regulating labour and working conditions:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "State Shops Act", desc: "Governs labour conditions and registration requirements in each state" },
                  { title: "Labour Department", desc: "The regulatory authority responsible for issuing registration certificates" },
                  { title: "State Rules", desc: "Define compliance, working hours, employee welfare, and wages" }
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Key Features of Shop & Establishment</h2>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full relative group/carousel">
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Building2, title: "Official Legal Recognition", desc: "Provides legal status to businesses under State Labour Laws, confirming compliance with local regulations.", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=50" },
                  { icon: Clock, title: "Regulates Work Conditions", desc: "Standardizes working hours, opening/closing timings, holidays, and overtime rules for fair operations.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=50" },
                  { icon: Users, title: "Employee Welfare Protection", desc: "Ensures employee rights including wages, leave policies, and safe workplace environments.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=50" },
                  { icon: Store, title: "Mandatory for Most Units", desc: "Compulsory for shops, offices, restaurants, and service providers operating commercially within a state.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=50" },
                  { icon: MapPin, title: "Location-Based Compliance", desc: "Required for each place of business separately as per the applicable State Act at that specific location.", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=500&q=50" },
                  { icon: FileBarChart, title: "Enables Other Registrations", desc: "Often required for opening bank accounts, getting GST, Trade License, and other statutory approvals.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" },
                  { icon: Zap, title: "Online Registration Support", desc: "Quick and user-friendly digital process based on basic business details for instant certificate issuance.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
                  { icon: RefreshCw, title: "Periodic State Renewals", desc: "Depending on state rules, registration may be lifetime or require periodic renewals for active status.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" },
                  { icon: Search, title: "Inspection Readiness", desc: "Ensures businesses are ready for verification by authorities regarding safety norms and welfare.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: Award, title: "Improves Business Credibility", desc: "Builds absolute trust among employees, banks, and clients as a professionally managed, legal entity.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=50" }
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
                    3. BENEFITS OF REGISTRATION
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">Categorized Advantages</h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl">
                    <CachedImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=50" alt="Business Compliance Success" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Legal & Structured</div>
                      <p className="text-sm opacity-90">Regulatory compliance for long-term operational success.</p>
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
                        <li>• Legal recognition (Labour Laws)</li>
                        <li>• Compliance with wage norms</li>
                        <li>• Credibility with clients</li>
                        <li>• Avoids business interruptions</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Helps open current bank accounts</li>
                        <li>• Supports business loan approval</li>
                        <li>• Avoids non-compliance fines</li>
                        <li>• Structured payroll management</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Support business expansion</li>
                        <li>• Required for GST & Trade License</li>
                        <li>• Improves business reputation</li>
                        <li>• Smooth scaling structure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When Registration is Required</h3>
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
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Opening Shop / Office</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Any establishment operating commercially must register under the State Act.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Hiring Employees</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Compulsory when hiring staff, as labour laws governing wages become active.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Service-Based Units</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Offices, consultancies, and IT agencies must obtain registration.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Retail / Trading</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Shops and showrooms require this for legal business identification.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Bank / GST Need</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Necessary proof for opening current accounts and local tax registration.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <h1 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16">Types of Establishments Covered</h1>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-12">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="font-medium text-white py-4 text-[14.875px]">Type</TableHead>
                          <TableHead className="font-medium text-white py-4 text-[14.875px]">Suitable For</TableHead>
                          <TableHead className="font-medium text-white py-4 text-[14.875px]">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Shops</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Retail businesses</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Stores, outlets, and showrooms engaged in selling goods.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Commercial Units</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Offices / Services</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Offices, IT units, consultancies, and agencies providing services.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Hospitality</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Hotels / Food units</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Includes hotels, restaurants, cafes, and food service establishments.</TableCell>
                        </TableRow>
                         <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]">Entertainment</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]">Service businesses</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">Theatres, salons, gyms, and other service-oriented establishments.</TableCell>
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
                    {["PAN Card", "Aadhaar Card", "Photograph", "Business details", "Personal address proof"].map((item, i) => (
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
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Company / LLP / Units</h3>
                  <ul className="space-y-5">
                    {["Certificate of Incorporation", "PAN Card of Unit", "MOA & AOA / LLP Agreement", "Directors’ KYC documents", "Employee Records (if any)"].map((item, i) => (
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
                    {["Rent Agreement + NOC", "Utility Bill (Latest 2 months)", "Property ownership proof"].map((item, i) => (
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
                  Important
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Documentation Guidelines</h3>
                <p className="text-gray-500 mt-4 font-medium italic">Standard protocols for successful Shop & Establishment registration.</p>
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
                      { title: "Universal ID Match", desc: "Details across PAN, Aadhaar, and application must match for 100% processing speed." },
                      { title: "Address Validity", desc: "Premises proof must be valid, consistent, and correctly localized for state approval." },
                      { title: "Activity Definition", desc: "Business nature must be clearly defined as per State Shop & Establishment categories." },
                      { title: "NOC Requirement", desc: "Property NOC must be properly signed and authorized by the owner (if premises is rented)." },
                      { title: "Stamp Paper Norms", desc: "Agreements should be executed as per state-specific stamp paper requirements." },
                      { title: "Document Legibility", desc: "Ensure all uploaded scans are clear and all text is easily readable by authorities." }
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
              <p className="text-[13px] text-gray-400 font-medium mt-6 italic text-center">Note: Even minute discrepancies in data can lead to application query or rejection by the Labour Department.</p>
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section id="process" className="py-24 scroll-mt-32 relative overflow-hidden border-y border-[#c8e6e6]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1440&q=40')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }}>
          <div className="absolute inset-0 bg-dbiz-navy/80 backdrop-blur-[2px] z-0"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20 tracking-wider">
                6. REGISTRATION PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Step-by-Step Detailed Guide</h2>
            </div>

            <div className="max-w-5xl mx-auto relative py-8">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full z-0"></div>

              {[
                { step: "1", title: "Data Collection & Verification", desc: "Collecting business activity, address proof, and employee info. Mismatch checks prevent future rejection." },
                { step: "2", title: "Application Preparation", desc: "Drafting the filing as per State Act. Deciding on timings, holidays, and worker welfare norms." },
                { step: "3", title: "Online Application Filing", desc: "Official submission on State Labour portal with all business identifiers and supporting documents." },
                { step: "4", title: "Department Verification", desc: "Labour authorities review the submission. Queries for clarification are addressed promptly." },
                { step: "5", title: "Approval & Certificate Issue", desc: "Post-approval, the Shop & Establishment Registration Certificate is issued as legal proof of unit." },
                { step: "6", title: "Display & Compliance Setup", desc: "Maintaining the certificate at premises and setting up mandatory worker welfare registers." },
                { step: "7", title: "Renewal / Updates (If Needed)", desc: "Applying for periodic renewals or updating changes in business data/employees as per state laws." }
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                  {/* Card 1: Fast Track Flip */}
                  <div className="three-d-card animate-on-scroll">
                    <div className="card-wrapper">
                      {/* Front Face */}
                      <div className="card-face front">
                        <Zap className="h-12 w-12 text-dbiz-teal mb-4" />
                        <h4 className="card-title">Fast Track Approval</h4>
                      </div>
                      {/* Back Face */}
                      <div className="card-face back">
                        <div className="card-duration">2-3 Days</div>
                        <p className="card-description">
                          Typical timeframe with active Aadhaar authentication and perfect documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Standard Timeline Flip */}
                  <div className="three-d-card animate-on-scroll" style={{ animationDelay: '150ms' }}>
                    <div className="card-wrapper">
                      {/* Front Face */}
                      <div className="card-face front">
                        <Shield className="h-12 w-12 text-amber-500 mb-4" />
                        <h4 className="card-title">Standard Timeline</h4>
                      </div>
                      {/* Back Face */}
                      <div className="card-face back">
                        <div className="card-duration">3-5 Days</div>
                        <p className="card-description">
                          Applicable for applications requiring deeper department review or site verification.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Post-Registration Compliance */}
              <div className="pt-16 border-t border-gray-100 animate-on-scroll">
                <div className="mb-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
                    8. POST-REGISTRATION COMPLIANCE
                  </div>
                  <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">Mandatory Requirements</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center mb-10 py-6">
                  {[
                    { type: "License Renewal", freq: "As per State Rules" },
                    { type: "Labour Law Updates", freq: "On Business Changes" }
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
                  <p className="consultancy-label uppercase tracking-widest bg-emerald-100 text-emerald-600 border-emerald-200">Mandatory</p>
                  <h4 className="consultancy-heading">Compliance Requirements</h4>
                  <div className="compliance-grid">
                    {[
                      "Maintain employee attendance & wage records",
                      "Follow working hours & holiday schedules",
                      "Display registration certificate at premises",
                      "Official registers as per State Labour Act"
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

                {/* Penalties Section */}
                <div className="consultancy-section-card animate-on-scroll mt-8">
                  <p className="consultancy-label uppercase tracking-widest bg-red-100 text-red-600 border-red-200">Caution</p>
                  <h4 className="consultancy-heading">Statutory Penalties</h4>
                  <div className="penalty-grid">
                    {[
                      { title: "Non-Registration", desc: "Heavy fines & site closure notices" },
                      { title: "Labour Law Violation", desc: "Legal action & inspection penalties" },
                      { title: "Incomplete Records", desc: "Cumulative fines per employee/incident" }
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
              </div>

              {/* 9. Why DBIZ */}
              <div className="pt-20 border-t border-gray-100 animate-on-scroll">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4 uppercase">
                    9. Why DBIZ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight">Why DBIZ CONSULTANCY for Registration?</h2>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    Shop & Establishment Registration is essential for complying with labour laws. Proper classification and documentation avoid rejection. We simplify the entire process ensuring accuracy, speed, and full compliance.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-6 flex items-center">
                      <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What DBIZ Handles
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "State-specific eligibility assessment",
                        "Identification of correct registration norms",
                        "Document verification and filing",
                        "Ensuring accurate details to avoid rejection",
                        "Handling queries from the Labour Department",
                        "Registration certificate download & delivery",
                        "Guidance on record maintenance rules",
                        "Renewal and local update support"
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
                        "PAN and Aadhaar of applicant",
                        "Business nature and nature of activity",
                        "Registered shop / office address proof",
                        "Employee count (if applicable)",
                        "Rent agreement or ownership credentials"
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
                         <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Identify the key business milestones that necessitate immediate Shop & Establishment registration.</p>
                      </div>

                      <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                         {[
                            "Starting a new shop, office, or business establishment",
                            "Hiring employees or expanding workforce",
                            "Opening current bank account for business",
                            "Applying for GST, Trade License, or other registrations",
                            "Ensuring compliance with labour laws",
                            "Avoiding penalties and legal issues"
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

              {/* Our Commitment Section */}
              <section className="py-12 bg-white mt-12">
                <div className="max-w-4xl mx-auto text-center animate-on-scroll">
                  <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
                  <p className="text-[19.125px] text-gray-700 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    With a strong track record in handling business registrations and tax compliance, DBIZ CONSULTANCY is a trusted partner for entrepreneurs, startups, and growing businesses across India. <span className="text-gray-600">We take care of the entire Shop & Establishment process—so you can focus on building and scaling your business with confidence.</span>
                  </p>
                </div>
              </section>
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
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight">FAQs on Shop & Establishment</h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-8">Last updated: March 2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {shopEstablishmentFaq.map((faq, idx) => (
                  <AccordionItem key={faq.value} value={faq.value} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll" style={{ animationDelay: `${idx * 50 + 300}ms` }}>
                    <AccordionTrigger className="text-[17px] font-medium text-[#020817] hover:text-dbiz-teal hover:no-underline py-5 text-left font-sans">
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

export default ShopEstablishmentPage;
