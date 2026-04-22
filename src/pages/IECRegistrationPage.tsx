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
  Globe,
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
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of applicant details, document verification, and submission of IEC application on the DGFT portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "Same Day",
    desc: "System processing along with Aadhaar / DSC verification and validation of submitted details.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "Same Day",
    desc: "IEC number is issued if all details are correct and verification is completed successfully.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Approval (With Query / Correction)",
    duration: "1-2 Working Days",
    desc: "Time may increase if DGFT raises queries or requires clarification or correction.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];

const IECRegistrationPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const iecFaqs = [
    { q: "What is IEC and why is it required?", a: "IEC (Import Export Code) is required to legally import or export goods and services from India. Without IEC, international trade is not permitted." },
    { q: "Who needs IEC registration?", a: "Any individual or business involved in import, export, or receiving foreign payments must obtain IEC." },
    { q: "Is IEC mandatory for service exports?", a: "Yes, IEC is required if you are receiving foreign currency for services such as freelancing, consulting, or software exports." },
    { q: "Is there any minimum turnover required for IEC?", a: "No, there is no minimum turnover requirement. IEC can be obtained at any stage of business." },
    { q: "How long does IEC registration take?", a: "Typically, IEC is issued on the Same Day if documents and details are correct." },
    { q: "Does IEC require renewal?", a: "No renewal is required. However, annual update on the DGFT portal is mandatory to keep IEC active." },
    { q: "Can an individual apply for IEC?", a: "Yes, individuals can apply for IEC without forming a company." },
    { q: "Is GST required for IEC registration?", a: "No, GST is not mandatory for obtaining IEC. However, it may be required based on business activities." },
    { q: "Can IEC be modified after registration?", a: "Yes, IEC details such as address, bank details, and contact information can be updated online on the DGFT portal." },
    { q: "What happens if IEC is not updated annually?", a: "IEC may be deactivated if not updated annually as per DGFT requirements." },
    { q: "Is IEC required for importing services?", a: "Generally, IEC is not required for importing services, but it may be needed for certain transactions and compliance." },
    { q: "Can one person have multiple IEC codes?", a: "No, only one IEC is allowed per PAN." },
    { q: "Is IEC linked with PAN?", a: "Yes, IEC is issued based on PAN and is permanently linked to it." },
    { q: "Do exporters need to file returns under IEC?", a: "No regular return filing is required under IEC, but compliance with DGFT and other regulations must be maintained." },
    { q: "Can IEC be cancelled?", a: "Yes, IEC can be surrendered or cancelled through the DGFT portal if no longer required." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        
        {/* Dynamic Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CachedImage
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1440&q=60"
              alt="IEC Registration Global Logistics Background"
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
                  Fast IEC Registration | DGFT Filing | Complete Compliance Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  IMPORT EXPORT CODE (IEC) REGISTRATION SERVICES
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete Import Export Code (IEC) registration services. From eligibility verification to IEC issuance and compliance guidance, our experts ensure a smooth and hassle-free registration process.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-on-scroll [animation-delay:300ms]">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1"
                  >
                    <ArrowDownCircle className="h-5 w-5" /> Learn More
                  </Button>
                </div>

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

              {/* Right Content - Hero Sidebar Stats Grid */}
              <div className="hidden md:block md:col-span-4 relative animate-on-scroll [animation-delay:400ms]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-2xl blur-3xl opacity-50"></div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative transition-transform transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/5 rounded-full blur-3xl"></div>
                  
                  {/* Hero Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=60" 
                    alt="IEC Registration Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">1 - 2</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Days (Typical)</div>
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
                  1. IEC REGISTRATION OVERVIEW
                </div>

                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 animate-on-scroll [animation-delay:100ms] tracking-tight">
                  What is Import Export Code (IEC)?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 text-[17px] leading-relaxed font-medium">
                    Import Export Code (IEC) is a mandatory registration issued by the Directorate General of Foreign Trade (DGFT) for businesses engaged in import or export of goods and services from India. It establishes the business as a legally recognized entity for international trade.
                  </p>
                  <p className="text-gray-700 mb-6 text-[17px] leading-relaxed font-medium">
                    Upon registration, a unique 10-digit IEC number is allotted, which must be used for customs clearance, international payments, and trade documentation. Without IEC, businesses cannot import or export goods legally.
                  </p>
                  <p className="text-gray-700 mb-8 text-[17px] leading-relaxed font-medium">
                    IEC is a one-time registration with lifetime validity, and annual update is required. It simplifies global trade by enabling businesses to expand beyond domestic markets.
                  </p>
                </div>

                {/* Why IEC Importance block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why IEC Registration is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal">IEC registration is essential for businesses involved in international trade:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Provides legal authorization to import and export goods/services",
                         "Required for customs clearance and shipping processes",
                         "Enables receiving foreign payments through banks",
                         "Helps avail government export incentives and benefits",
                         "Builds credibility with international clients and suppliers"
                       ].map((point, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                           <p className="text-[14.875px] font-medium text-gray-700 leading-tight">{point}</p>
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
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per the Foreign Trade (Development & Regulation) Act, 1992</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium">
                      Section-wise, the DGFT framework defines IEC registration as the process of being legally authorized as an international trade entity:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Mandatory for Import of Goods into India",
                        "Required for Export of Goods and Services Abroad",
                        "Compulsory for Foreign Currency Transactions via Banks",
                        "Enables Legal Customs Clearance Capability",
                        "Mandatory for E-commerce Cross-Border Selling Platforms",
                        "Required to Avail Government Export Incentives and Schemes"
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
                          <Globe className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div className="ml-4">
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expert Guidance</p>
                          <p className="text-dbiz-navy font-bold">Import-Export Services</p>
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
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">IEC registration is governed by the following authorities and laws:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "Foreign Trade (Development & Regulation) Act, 1992", desc: "Governs import-export activities in India" },
                  { title: "DGFT (Directorate General of Foreign Trade)", desc: "Issues and regulates IEC registration" },
                  { title: "Customs Act, 1962", desc: "Governs import/export clearance procedures" }
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
            <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-dbiz-teal/10 rounded-full blur-[160px] opacity-80 animate-pulse transition-all duration-[10000ms]"></div>
            <div className="absolute bottom-[-150px] left-[-150px] w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-[180px] opacity-60"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-dbiz-navy text-sm font-bold tracking-[0.4em] mb-8 border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                2. FEATURES
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight [animation-delay:100ms]">Key Features of Import Export Code (IEC) Registration (Detailed)</h2>
            </div>

            <Carousel 
              opts={{ 
                align: "start", 
                loop: true,
                autoplay: true,
                interval: 2000 
              }} 
              className="w-full relative group/carousel">
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Shield, title: "Legal Authorization for International Trade", desc: "IEC registration provides legal permission to import and export goods or services from India, ensuring compliance with foreign trade regulations.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { icon: CheckCircle2, title: "Unique IEC Allotment", desc: "A unique 10-digit Import Export Code is issued by DGFT, which is used for all import-export transactions, customs clearance, and international payments.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
                  { icon: Clock, title: "One-Time Registration (Annual Update Is Required)", desc: "IEC is a one-time registration with no renewal requirement. It remains valid for the lifetime of the business, subject to annual updates if required.", image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=500&q=50" },
                  { icon: Activity, title: "Mandatory for Import & Export Activities", desc: "IEC is compulsory for clearing goods through customs, sending shipments abroad, and receiving goods from foreign countries.", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=50" },
                  { icon: CreditCard, title: "Facilitates International Payments", desc: "Banks require IEC for processing foreign currency transactions, remittances, and export proceeds, making it essential for global trade.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=500&q=50" },
                  { icon: Award, title: "Access to Government Benefits & Incentives", desc: "IEC holders can avail various export promotion schemes, subsidies, and incentives provided by the Government of India.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: Zap, title: "No Compliance Burden", desc: "Unlike GST, IEC does not require regular return filing. There are minimal compliance requirements after registration.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" },
                  { icon: TrendingUp, title: "Global Market Expansion", desc: "IEC enables businesses to expand beyond domestic markets and access international customers and suppliers.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=50" },
                  { icon: Building2, title: "Applicable to All Business Types", desc: "IEC can be obtained by individuals, proprietorships, partnerships, LLPs, and companies engaged in import-export activities.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=50" },
                  { icon: Award, title: "Enhances Business Credibility", desc: "Having IEC increases trust among international clients, suppliers, and financial institutions, supporting global business relationships.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" }
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
                          <p className="text-gray-600 text-[17px] leading-relaxed font-medium">{feature.desc}</p>
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

        {/* 3. Benefits Section */}
        <section id="benefits" className="py-24 scroll-mt-32 border-y border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col xl:flex-row gap-16">
              <div className="xl:w-1/3">
                <div className="sticky top-32 animate-on-scroll">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20">
                    3. BENEFITS OF IEC REGISTRATION
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight [animation-delay:200ms]">
                    Categorized Advantages
                  </h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 [animation-delay:400ms]">
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=50" 
                      alt="Global Business Growth" 
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Global Expansion</div>
                      <p className="text-sm opacity-90 text-blue-50">Scale your business across international borders with ease.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:w-2/3 space-y-16">
                <div className="animate-on-scroll [animation-delay:200ms]">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">Business Advantages</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Business Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Legal authorization to import and export goods/services</li>
                        <li>• Improved credibility with international clients and suppliers</li>
                        <li>• Smooth customs clearance and trade operations</li>
                        <li>• Eligibility to participate in global trade and contracts</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Enables receipt of foreign currency payments through banks</li>
                        <li>• Access to export incentives, subsidies, and government schemes</li>
                        <li>• Better financial transparency in international transactions</li>
                        <li>• Supports growth in foreign revenue generation</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Expansion into international markets</li>
                        <li>• Access to global customers and suppliers</li>
                        <li>• Opportunity to sell through global e-commerce platforms</li>
                        <li>• Increased scalability and business diversification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll [animation-delay:400ms]">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When IEC Registration is Mandatory</h3>
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
                         {[
                           { c: "Import of Goods", r: "Mandatory", d: "Any business or individual importing goods into India must obtain IEC for customs clearance." },
                           { c: "Export of Goods", r: "Mandatory", d: "IEC is required to export goods from India and complete shipping and customs procedures." },
                           { c: "Foreign Currency Transactions", r: "Mandatory", d: "Required for receiving payments in foreign currency through banks for export services or goods." },
                           { c: "Online International Selling", r: "Mandatory", d: "Businesses selling products on global platforms (Amazon Global, eBay, etc.) require IEC." },
                           { c: "Availing Export Benefits", r: "Mandatory", d: "Required to claim government export incentives, subsidies, and benefits under DGFT schemes." }
                         ].map((row, i) => (
                           <TableRow key={i} className={i % 2 !== 0 ? 'bg-gray-50/50' : ''}>
                             <TableCell className="font-normal text-gray-700 text-[14.875px]">{row.c}</TableCell>
                             <TableCell className="text-gray-700 font-normal text-[14.875px]">{row.r}</TableCell>
                             <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">{row.d}</TableCell>
                           </TableRow>
                         ))}
                      </TableBody>
                    </Table>
                  </div>

                  <h4 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16 tracking-tight">Types of IEC Registration</h4>
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
                        {[
                          { t: "Individual IEC", s: "Individuals / Freelancers", d: "For individuals engaged in import-export activities such as freelancers, consultants, or small traders." },
                          { t: "Proprietorship IEC", s: "Small Business Owners", d: "For sole proprietors dealing in import-export of goods or services." },
                          { t: "Partnership / LLP IEC", s: "Partnership Firms / LLPs", d: "For businesses operating as partnership firms or LLPs involved in international trade." },
                          { t: "Company IEC", s: "Private / Public Companies", d: "For registered companies engaged in large-scale import-export activities." }
                        ].map((row, i) => (
                           <TableRow key={i} className={i % 2 !== 0 ? 'bg-gray-50/50' : ''}>
                              <TableCell className="font-bold text-dbiz-navy text-[14.875px]">{row.t}</TableCell>
                              <TableCell className="text-gray-700 font-normal text-[14.875px]">{row.s}</TableCell>
                              <TableCell className="text-gray-600 text-[14.875px] leading-relaxed">{row.d}</TableCell>
                           </TableRow>
                        ))}
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
              {[
                { 
                  title: "For Individual / Proprietor", 
                  docs: ["PAN Card (Mandatory)", "Aadhaar Card for verification", "Recent passport-sized photograph", "Bank account details (cancelled cheque / bank certificate)", "Address proof (Aadhaar / utility bill / bank statement)"],
                  image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=50",
                  icon: Users
                },
                { 
                  title: "For Company / LLP", 
                  docs: ["Certificate of Incorporation / Registration", "PAN Card of Company / LLP", "MOA & AOA / LLP Agreement", "Directors’ / Partners’ KYC documents (PAN, Aadhaar, address proof)"],
                  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=50",
                  icon: Building2
                },
                { 
                  title: "For Registered Office Proof", 
                  docs: ["Rent Agreement + NOC from owner (if rented)", "Latest Electricity / Utility Bill (within 2 months)", "Ownership proof (if property is owned)"],
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50",
                  icon: MapPin
                }
              ].map((group, idx) => (
                <div key={idx} className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll flex flex-col" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="relative h-56 overflow-hidden shrink-0">
                    <CachedImage 
                      src={group.image} 
                      alt={group.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-8">
                      <div className="bg-dbiz-teal/20 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                        <group.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-10 flex-grow">
                    <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">{group.title}</h3>
                    <ul className="space-y-5">
                      {group.docs.map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group/list text-lg">
                          <CheckCircle2 className="h-6 w-6 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll [animation-delay:400ms]">
               <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-xs font-black tracking-widest mb-6 border border-dbiz-teal/20 uppercase">
                  <Sparkles className="h-3 w-3" />
                  Critical
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Documentation Guidelines</h3>
                <p className="text-gray-500 mt-4 font-medium italic">Standard protocols for successful IEC registration.</p>
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
                      { title: "Detail Verification", desc: "Verify all details carefully before submission. Name and particulars must match across all documents especially PAN and Aadhaar." },
                      { title: "Office Consistency", desc: "The registered office address must exactly match address proof and ownership documents provided in the application." },
                      { title: "Rent Agreement", desc: "If premises are rented, a valid rent agreement with matching owner and tenant details is mandatory along with NOC." },
                      { title: "Active Bank Account", desc: "The bank account provided must be active and in the name of the applicant/business entity." },
                      { title: "Address Proof Recent", desc: "Utility bills or bank statements used as address proof should strictly be within the last two months." },
                      { title: "Data Validation", desc: "Ensure mobile and email are active for OTP verification during the registration process on DGFT portal." }
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
              <p className="text-[13px] text-gray-400 font-medium mt-6 italic text-center">Note: Even minute discrepancies in data can lead to application query or rejection by DGFT.</p>
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section
          id="process"
          className="py-32 scroll-mt-32 relative overflow-hidden transition-all duration-1000"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1440&q=40')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Immersive Dark Overlay */}
          <div className="absolute inset-0 bg-dbiz-navy/85 backdrop-blur-[2px] z-0"></div>

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
                { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and KYC details. All documents are carefully verified to ensure accuracy and consistency." },
                { step: "2", title: "Creation of DGFT Login", desc: "The applicant visits the DGFT portal, enters basic details (PAN, mobile, email), and completes OTP verification to create secure login credentials." },
                { step: "3", title: "Filling IEC Application", desc: "Using the DGFT login, the full application is completed including Business Details, Bank accounts, and uploading forms." },
                { step: "4", title: "Aadhaar Authentication", desc: "Opting for Aadhaar authentication generates OTP. If successful, ensures significantly faster approval. If not, Digital Signature (DSC) is required." },
                { step: "5", title: "Application Submission", desc: "Digital submission using EVC for proprietors or DSC for companies. An application reference number is generated instantly for tracking." },
                { step: "6", title: "DGFT Verification", desc: "The system reviews the application. If clarification is needed, a query is issued. Proper response must be filed quickly to avoid delays." },
                { step: "7", title: "IEC Allotment & Cert Issue", desc: "Once approved, the unique 10-digit IEC is activated. The IEC Certificate is generated and available for download indicating full trade authority." }
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
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-right group">
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 group-hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-[14.875px]">{item.desc}</p>
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
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-left group">
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 group-hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-[14.875px]">{item.desc}</p>
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
                  { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and KYC details. All documents are carefully verified to ensure accuracy and consistency." },
                  { step: "2", title: "Creation of DGFT Login", desc: "The applicant visits the DGFT portal, enters basic details (PAN, mobile, email), and completes OTP verification to create secure login credentials." },
                  { step: "3", title: "Filling IEC Application", desc: "Using the DGFT login, the full application is completed including Business Details, Bank accounts, and uploading forms." },
                  { step: "4", title: "Aadhaar Authentication", desc: "Opting for Aadhaar authentication generates OTP. If successful, ensures significantly faster approval. If not, Digital Signature (DSC) is required." },
                  { step: "5", title: "Application Submission", desc: "Digital submission using EVC for proprietors or DSC for companies. An application reference number is generated instantly for tracking." },
                  { step: "6", title: "DGFT Verification", desc: "The system reviews the application. If clarification is needed, a query is issued. Proper response must be filed quickly to avoid delays." },
                  { step: "7", title: "IEC Allotment & Cert Issue", desc: "Once approved, the unique 10-digit IEC is activated. The IEC Certificate is generated and available for download indicating full trade authority." }
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
        <section className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
              
              <div>
                {/* Header */}
                <div className="mb-12 text-center animate-on-scroll">
                  <h3 className="text-[38.25px] font-bold text-dbiz-navy uppercase tracking-tighter">7. TIMELINE & DELIVERY</h3>
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

                <div className="mt-24">
                  <div className="flex items-center gap-4 mb-14">
                    <div className="h-px bg-gray-100 flex-1"></div>
                    <p className="text-[11px] font-black tracking-[0.6em] text-gray-400 uppercase">Quick Summary</p>
                    <div className="h-px bg-gray-100 flex-1"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Card 1: Fast Track Approval */}
                    <div className="three-d-card animate-on-scroll">
                      <div className="card-wrapper">
                        {/* Front Face */}
                        <div className="card-face front bg-white shadow-sm border border-gray-100">
                          <div className="flex flex-col items-center justify-center h-full">
                            <Zap className="h-16 w-16 text-dbiz-teal mb-6 animate-pulse" />
                            <h4 className="card-title text-dbiz-navy text-2xl font-black uppercase tracking-tighter">Fast Track Approval</h4>
                          </div>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back bg-dbiz-navy">
                          <div className="card-duration text-dbiz-teal">Same Day</div>
                          <p className="card-description text-blue-50/80 font-medium">
                            Typical timeframe for IEC issuance with correct documentation and active Aadhaar verification.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Delayed Cases */}
                    <div className="three-d-card animate-on-scroll" style={{ animationDelay: '200ms' }}>
                      <div className="card-wrapper">
                        {/* Front Face */}
                        <div className="card-face front bg-white shadow-sm border border-gray-100">
                          <div className="flex flex-col items-center justify-center h-full">
                            <Clock className="h-16 w-16 text-amber-500 mb-6" />
                            <h4 className="card-title text-dbiz-navy text-2xl font-black uppercase tracking-tighter">Delayed Cases</h4>
                          </div>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back bg-amber-500">
                          <div className="card-duration text-white">1-2 Working Days</div>
                          <p className="card-description text-white font-medium">
                            Applies when DGFT raises queries or clarification is required in the submitted application.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Hint */}
                  <div className="mt-12 flex items-center justify-center gap-3 animate-on-scroll" style={{ animationDelay: '400ms' }}>
                    <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0" />
                    <p className="text-sm text-gray-500 font-semibold italic">
                      Note: <span className="text-dbiz-navy not-italic font-black">Accurate documents and correct details</span> ensure faster IEC approval without delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Post-Registration Compliance Section */}
        <section id="compliance" className="py-24 bg-[#f0fbff] scroll-mt-32">
          <div className="container-custom">
            
            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
              <div>
                <div className="mb-10 text-center animate-on-scroll">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
                    <Shield className="h-3 w-3" /> Mandatory Maintenance
                  </div>
                  <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">8. Post-Registration Compliance</h3>
                  <p className="text-gray-500 font-medium text-sm max-w-2xl mx-auto">
                    Once registered, your business must maintain these mandatory filing cycles to remain legally active and avoid deactivation or penalties by DGFT.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center mb-16 py-6 transition-all duration-700">
                  {[
                    { type: "Annual Update", freq: "Once a year (April - June)" },
                    { type: "Trade Reporting", freq: "Based on export activities" }
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

                <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {/* Compliance Section */}
                    <div className="consultancy-section-card animate-on-scroll">
                      <p className="consultancy-label">Essential</p>
                      <h4 className="consultancy-heading">Compliance Requirements</h4>
                      <div className="compliance-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                          "Update IEC details annually on DGFT portal",
                          "Ensure correct usage in customs/banking",
                          "Maintain proper trade transaction records",
                          "Comply with DGFT & RBI regulations"
                        ].map((req, i) => (
                           <div key={i} className="compliance-inner-card">
                              <div className="compliance-check-icon shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="compliance-label-text">{req}</span>
                           </div>
                        ))}
                      </div>
                    </div>

                    {/* Penalties Section */}
                    <div className="consultancy-section-card animate-on-scroll" style={{ animationDelay: '200ms' }}>
                      <p className="consultancy-label">Caution</p>
                      <h4 className="consultancy-heading">Legal Penalties</h4>
                      <div className="penalty-grid grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                        {[
                          { title: "Non-updation", desc: "IEC deactivation by DGFT" },
                          { title: "Incorrect Info", desc: "Suspension of trade license" },
                          { title: "Non-compliance", desc: "Hefty fines & legal restrictions" }
                        ].map((item, i) => (
                          <div key={i} className="penalty-inner-card group-hover:border-red-200 transition-colors">
                             <div className="penalty-header">
                                <div className="penalty-dot bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.4)]"></div>
                                <span className="penalty-title">{item.title}</span>
                             </div>
                             <p className="penalty-desc">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Why DBIZ Section */}
        <section className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 border border-dbiz-teal/20 uppercase tracking-widest">
                Why D BIZ
              </div>
              <h2 className="text-[38.25px] font-black text-dbiz-navy mb-8 tracking-tighter [animation-delay:200ms]">
                9. Why DBIZ CONSULTANCY <br /> for IEC Registration?
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed font-medium">
                Obtaining an Import Export Code (IEC) is a crucial step for businesses planning to enter international markets. While the process is online and appears simple, errors in documentation, incorrect details, or improper filing can lead to rejection or delays in approval. That’s where DBIZ CONSULTANCY comes in.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 animate-on-scroll">
               {/* Left Card: What DBIZ Handles */}
               <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-dbiz-navy mb-6 flex items-center gap-3 border-b border-dbiz-teal/10 pb-4">
                     <CheckCircle2 className="h-6 w-6 text-dbiz-teal" /> What DBIZ Handles
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "IEC eligibility assessment based on your business activity",
                       "Document validation and pre-upload review back to avoid rejection",
                       "DGFT portal registration and IEC application filing",
                       "Aadhaar / DSC authentication support",
                       "Application submission and fee payment guidance",
                       "Continuous status tracking and follow-up",
                       "Handling DGFT queries and corrections (if required)",
                       "IEC certificate download and delivery",
                       "Post-registration guidance and compliance support"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm leading-relaxed">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                          <span>{item}</span>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Right Card: What You Provide */}
               <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-dbiz-navy mb-6 flex items-center gap-3 border-b border-gray-200 pb-4">
                     <FileText className="h-6 w-6 text-gray-400" /> What You Provide
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "PAN and Aadhaar of applicant / business",
                       "Business details and nature of import-export activity",
                       "Registered office address proof (rent agreement / ownership proof)",
                       "Bank account details (cancelled cheque / statement)",
                       "Photograph (if applicable)"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm leading-relaxed">
                          <ArrowRight className="h-4 w-4 text-gray-500 mt-1 shrink-0" />
                          <span>{item}</span>
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
                     <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Identify the key milestones that trigger the need for immediate IEC registration.</p>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                     {[
                       "Starting an import-export business",
                       "Planning to sell goods or services internationally",
                       "Receiving foreign currency payments",
                       "Expanding business to global markets",
                       "Required for customs clearance or trade documentation",
                       "To avail export incentives and government schemes"
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



            <div className="bg-dbiz-navy text-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-dbiz-teal/10 to-transparent z-0"></div>
               <div className="relative z-10 grid lg:grid-cols-5 gap-16">
                  <div className="lg:col-span-2">
                     <h3 className="text-2xl font-bold mb-8 text-dbiz-teal border-l-4 border-dbiz-teal pl-6 tracking-tight uppercase">Why Choose DBIZ CONSULTANCY?</h3>
                     <p className="text-[19.125px] leading-relaxed font-medium mb-10 text-white leading-relaxed">
                       IEC registration is not just about obtaining a code—it is about ensuring smooth international trade operations and compliance with DGFT regulations.
                     </p>
                     <div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 italic text-[17px]">
                       At DBIZ CONSULTANCY, we go beyond basic registration. We ensure that your IEC is correctly obtained and aligned with your business needs, helping you avoid delays and future issues.
                     </div>
                  </div>
                  <div className="lg:col-span-3">
                     <div className="grid sm:grid-cols-2 gap-6">
                       {[
                         { t: "Expert professionals with import-export compliance experience" },
                         { t: "Quick turnaround time with proactive follow-up" },
                         { t: "Error-free filing with compliance-focused approach" },
                         { t: "End-to-end service from application to approval" },
                         { t: "Dedicated support for queries and corrections" },
                         { t: "Ongoing guidance for international trade compliance" }
                       ].map((item, i) => (
                         <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all font-bold">
                            <CheckCircle2 className="h-6 w-6 text-dbiz-teal mb-4" /> {item.t}
                         </div>
                       ))}
                     </div>
                  </div>
               </div>
            </div>

                {/* Deadlines Section */}
                <div id="deadlines" className="py-20 scroll-mt-32">
                  <div className="consultancy-section-card animate-on-scroll">
                    <p className="consultancy-label">Timelines</p>
                    <h4 className="consultancy-heading">IEC Deadlines & Compliance</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        { title: "Annual Update", due: "April – June (Every Year)", desc: "Mandatory annual update of IEC details on DGFT portal to keep the code active." },
                        { title: "Initial Allotment", due: "Same Day", desc: "IEC number is typically issued instantly after successful Aadhaar/DSC verification." },
                        { title: "Query Response", due: "Immediate", desc: "Response to DGFT queries must be filed promptly to ensure quick approval." },
                        { title: "Profile Modification", due: "As Needed", desc: "Updates to bank details or address should be done immediately after changes." }
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
                    <h4 className="consultancy-heading">Penalties & Consequences</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "IEC Deactivation", desc: "Failure to update IEC annually leads to automatic deactivation on the DGFT portal." },
                        { title: "Trade Suspension", desc: "Import and export activities are suspended while the IEC is inactive or deactivated." },
                        { title: "Benefit Forfeiture", desc: "Inability to claim export incentives or subsidies if IEC compliance is not maintained." },
                        { title: "Customs Delays", desc: "Incorrect or inactive IEC leads to significant delays and storage costs at customs ports." }
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

                <div className="mt-20 text-center max-w-4xl mx-auto border-t border-gray-100 pt-16 animate-on-scroll">
                   <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
                   <p className="text-[19.125px] text-gray-700 leading-relaxed font-medium">
                     With strong experience in business registrations and compliance services, DBIZ CONSULTANCY is a trusted partner for businesses entering global markets. We handle the entire IEC process—so you can focus on expanding your business internationally with confidence.
                   </p>
                </div>
          </div>
        </section>

        {/* 10. FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 border border-dbiz-teal/20 uppercase">
                10. FAQs
              </div>
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight">FAQs on IEC Registration</h2>
              <p className="text-gray-500 mb-8 font-medium">Last updated: March 2026</p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're planning to start import-export, understanding IEC applicability, or exploring international trade — here are the most commonly asked questions with clear and practical answers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {iecFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll">
                    <AccordionTrigger className="text-[17px] font-medium text-[#020817] hover:text-dbiz-teal hover:no-underline py-5 text-left font-sans">
                       {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed text-[15px] pb-6 whitespace-pre-line font-medium">
                       {faq.a}
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

export default IECRegistrationPage;