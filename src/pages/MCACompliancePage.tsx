
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Check,
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
  AlertCircle,
  Star,
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
  Calendar,
  Scale,
  Briefcase,
  Search,
  BookOpen,
  ClipboardCheck,
  Bell,
  HardHat,
  Gavel,
  History,
  FileCheck2,
  UserPlus,
  Send
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
import Autoplay from "embla-carousel-autoplay";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
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

const MCACompliancePage = () => {
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
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1440&q=80"
              alt="Corporate Compliance Professional Background"
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
                  Hassle-free | Accurate | Expert Supported
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-4 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  MCA Annual Compliance Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-2xl font-bold text-dbiz-teal mb-8 animate-on-scroll [animation-delay:150ms]">
                  Accurate, Timely & Fully Compliant ROC Filing for Companies & LLPs
                </p>

                <div className="space-y-6 text-lg opacity-95 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms] mb-10">
                  <p>
                    MCA Annual Compliance is more than a statutory requirement—it is essential for maintaining your company’s legal status, avoiding penalties, and ensuring smooth business operations. Whether you are a Private Limited Company, LLP, or other registered entity, timely and accurate ROC filings are crucial to remain compliant and avoid disqualification or fines.
                  </p>
                  <p>
                    D BIZ CONSULTANCY provides expert-driven MCA compliance services ensuring accurate filing of annual returns, financial statements, and complete adherence to Companies Act requirements.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-12 animate-on-scroll [animation-delay:300ms]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-6 rounded-xl text-lg font-bold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1">
                        <CheckCircle2 className="h-5 w-5" /> File Your ROC Compliance Now
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0 border-none shadow-2xl">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>

                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-6 rounded-xl text-lg font-bold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1"
                  >
                    <CheckCircle2 className="h-5 w-5" /> Get Free Consultation
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:350ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>Reliable ROC Filing</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>Dedicated Compliance Team</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-dbiz-teal" />
                      <span>Direct Advisory Support</span>
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
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" 
                    alt="MCA Compliance Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  {/* Stats Grid - "The Marked Design" */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Accuracy</div>
                    </div>

                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">Timely</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Filings</div>
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
                { id: 'challenges', icon: AlertTriangle, label: 'Common Challenges' },
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'applicability', icon: Layers, label: 'Applicability' },
                { id: 'features', icon: Shield, label: 'Filing Services' },
                { id: 'advantage', icon: Award, label: 'Our Advantage' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: Gavel, label: 'Penalties' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[13px] font-medium transition-all duration-300 ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }}
                >
                  <item.icon className={`mr-1 h-3.5 w-3.5 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} /> 
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Challenges & Solution Section */}
        <section id="challenges" className="py-24 scroll-mt-32 border-b border-gray-100 bg-gray-50/30 animate-on-scroll">
          <div className="container-custom">
            <div className="max-w-4xl mb-20">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Common Challenges
              </div>
              <h2 className="text-[42px] font-extrabold text-dbiz-navy mb-6 tracking-tight leading-tight animate-on-scroll">
                Common Challenges
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium animate-on-scroll [animation-delay:100ms]">
                Many companies and LLPs face difficulties in managing MCA compliance due to changing regulations, strict deadlines, and complex filing requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                { title: "Form Selection", desc: "Confusion in selecting correct ROC forms (AOC-4, MGT-7, etc.)", icon: FileText },
                { title: "Statutory Deadlines", desc: "Missing statutory deadlines leading to heavy penalties", icon: Clock },
                { title: "Financial Errors", desc: "Errors in financial statement preparation and filing", icon: AlertTriangle },
                { title: "Legal Non-Compliance", desc: "Non-compliance with Companies Act provisions", icon: Scale },
                { title: "KYC Issues", desc: "Director KYC and compliance issues", icon: Users },
                { title: "Legal Complications", desc: "ROC notices and legal complications", icon: AlertTriangle },
              ].map((challenge, idx) => (
                <div key={idx} className="uiverse-corner-card-container animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="go-corner">
                    <div className="go-arrow">
                       <challenge.icon size={22} strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="card-title">{challenge.title}</h3>
                  <p className="small-desc">{challenge.desc}</p>
                </div>
              ))}
            </div>

            <div className="solution-simple-card animate-on-scroll">
              <div className="solution-card-icon">
                <Check size={32} strokeWidth={3} />
              </div>

              <h3>Our Solution</h3>

              <p>
                We simplify MCA annual compliance with expert handling, accurate filing,
                timely submissions, and full adherence to Companies Act requirements —
                helping your business avoid penalties, disqualification, and legal risks.
              </p>

              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="solution-card-btn"
              >
                Get Assistance Now
              </button>
            </div>

            <div className="mt-32 scroll-mt-32" id="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20 animate-on-scroll">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Overview</h2>
                  <p className="text-xl text-gray-700 font-bold leading-relaxed mb-10">
                    MCA Annual Compliance is the process of filing mandatory returns and documents with the Ministry of Corporate Affairs (MCA) to ensure that a company or LLP remains legally compliant under the Companies Act, 2013 and applicable rules.
                  </p>
                  
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-dbiz-teal/5 rounded-[2.5rem] blur-2xl group-hover:bg-dbiz-teal/10 transition-all"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 h-[300px]">
                      <img 
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" 
                        alt="Corporate Compliance" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/40 to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 self-center">
                  {[
                    { title: "Financial Statements (AOC-4)", desc: "Filing of audited balance sheets and profit & loss accounts as per MCA norms." },
                    { title: "Annual Return (MGT-7 / MGT-7A)", desc: "Mandatory filing of annual returns containing ownership and director details." },
                    { title: "Director KYC", desc: "DIR-3 KYC Web filing once in 3 years as per latest MCA update for all DIN holders." },
                    { title: "Statutory Registers", desc: "Maintenance of mandatory statutory registers and corporate records as per law." },
                    { title: "Statutory Meetings", desc: "Conducting Board Meetings and Annual General Meeting (AGM) as per statutory timelines." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex items-center gap-6 group hover:border-dbiz-teal hover:shadow-xl transition-all duration-300 animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="bg-dbiz-teal/5 w-14 h-14 rounded-full flex items-center justify-center text-dbiz-teal shrink-0 group-hover:bg-dbiz-teal group-hover:text-white transition-all duration-500">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="font-black text-dbiz-navy text-lg leading-tight mb-1 group-hover:text-dbiz-teal transition-colors tracking-tight">{item.title}</h4>
                        <p className="text-gray-500 font-bold text-sm leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            {/* Importance Section - Single Card Design (Optimized) */}
            <div className="mt-20 max-w-6xl mx-auto animate-on-scroll">
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-dbiz-teal/5 rounded-full blur-[100px] group-hover:bg-dbiz-teal/10 transition-colors"></div>
                
                <h3 className="text-3xl font-black text-dbiz-navy mb-10 flex items-center gap-5">
                  <div className="bg-dbiz-teal/10 p-4 rounded-[1.5rem] text-dbiz-teal"><Shield className="h-8 w-8" /></div>
                  Importance of MCA Compliance
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {[
                    "Ensures legal compliance under Companies Act",
                    "Avoids penalties, fines, and disqualification",
                    "Maintains active company status",
                    "Builds credibility with banks & investors",
                    "Ensures transparency and governance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5 group/item">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dbiz-teal/5 flex items-center justify-center text-dbiz-teal group-hover/item:bg-dbiz-teal group-hover/item:text-white transition-all duration-300 shadow-sm">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="text-lg font-bold text-dbiz-navy/80 leading-snug group-hover/item:text-dbiz-navy transition-colors tracking-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* 3. Eligibility Matrix Section */}
        <section id="applicability" className="py-16 bg-gray-50/50 scroll-mt-32 animate-on-scroll">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-12 animate-on-scroll text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                3. Eligibility Matrix
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-6 tracking-tight leading-tight">Applicability</h2>
              <p className="text-lg text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">
                To ensure proper compliance, it is important to identify entities required to file MCA returns. The table below outlines the categories and their applicability.
              </p>
            </div>

            {/* Eligibility Matrix - Protocol Table Design */}
            <div className="max-w-4xl mx-auto shadow-2xl rounded-[2rem] overflow-hidden border border-gray-100 animate-on-scroll">
              <div className="bg-dbiz-navy py-4 px-10 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
                <span className="text-white font-medium text-xs uppercase tracking-[0.2em]">Category</span>
                <span className="text-white font-medium text-xs uppercase tracking-[0.2em]">Applicability</span>
              </div>
              <div className="bg-white divide-y divide-gray-50">
                {[
                  { cat: "Private Limited Companies", app: "Mandatory annual compliance" },
                  { cat: "One Person Companies (OPC)", app: "Required to file annual returns" },
                  { cat: "Limited Liability Partnerships (LLPs)", app: "Mandatory compliance filing" },
                  { cat: "Public Limited Companies", app: "Compulsory compliance" },
                  { cat: "Section 8 Companies (NGOs)", app: "Required to file annual returns" },
                  { cat: "Dormant Companies", app: "Limited compliance but mandatory filing" },
                  { cat: "Companies without business activity", app: "Must file Nil returns" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 py-5 px-10 items-center group hover:bg-dbiz-teal/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-dbiz-teal shadow-[0_0_10px_rgba(20,184,166,0.6)]"></div>
                      <span className="font-bold text-dbiz-navy text-lg tracking-tight group-hover:text-dbiz-teal transition-colors">
                        {item.cat}
                      </span>
                    </div>
                    <div className="text-gray-600 font-bold text-[15px] leading-relaxed">
                      {item.app}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-dbiz-teal/5 text-center text-dbiz-navy font-black text-[13px] border-t border-gray-100">
                * All registered companies and LLPs must comply with MCA filing requirements annually, even if there is no business activity.
              </div>
            </div>
          </div>
        </section>

        {/* 4. Statutory Forms Section - Color-Fill Cards */}
        <section id="statutory-forms" className="py-24 bg-gray-50/50 scroll-mt-32 animate-on-scroll">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-20 animate-on-scroll text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                4. Statutory Forms
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Which MCA Forms Apply to You?</h2>
              <p className="text-xl text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">
                Identify the correct ROC forms for your company. Hover over each card to see the specific filing applicability and purpose.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-on-scroll">
              {[
                { task: "AOC-4", desc: "Filing of financial statements (Balance Sheet & P&L) for the financial year." },
                { task: "MGT-7/7A", desc: "Mandatory annual return filing containing shareholding and management details." },
                { task: "DIR-3 KYC", desc: "Annual KYC compliance for every individual holding a DIN (Director ID)." },
                { task: "ADT-1", desc: "Intimation of auditor appointment or reappointment for the statutory audit." },
                { task: "INC-20A", desc: "Mandatory declaration of commencement of business activities for new entities." },
                { task: "DPT-3", desc: "Formal return of deposits or outstanding loans/receipts as per ROC mandates." },
                { task: "PAS-3", desc: "Statutory return of allotment of shares to be filed specifically with the ROC." },
                { task: "DIR-12", desc: "Intimation of appointment, resignation or change in directors/management." },
                { task: "MGT-14", desc: "Filing of specific Board & Special Resolutions authorizing key company actions." }
              ].map((item, i) => (
                <div key={i} className="uiverse-fill-card group animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="uiverse-fill-content">
                    <p className="uiverse-fill-heading">{item.task}</p>
                    <p className="uiverse-fill-para">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex items-center justify-center gap-3 animate-on-scroll">
              <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-gray-500 font-bold text-sm italic tracking-tight">
                Choosing the correct forms and filing them accurately is essential to avoid penalties, notices, and compliance issues.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Compliances Covered Section */}
        <section id="features" className="py-24 bg-white scroll-mt-32 animate-on-scroll">
           <div className="container-custom">
              <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                  5. Full Coverage
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Filing Services</h2>
                <p className="text-xl text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">We handle all aspects of MCA annual compliance with proper classification and adherence to the Companies Act requirements.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[
                  { title: "Financial Statements", desc: "Expert filing of Form AOC-4 as per AS/Ind-AS standards.", icon: FileBarChart, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
                  { title: "Annual Returns", desc: "MGT-7/7A filing with full shareholder and equity details.", icon: FileText, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                  { title: "Director KYC", desc: "Annual DIR-3 KYC updates and verification on MCA portal.", icon: UserPlus, img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=600&q=80" },
                  { title: "AGM Documentation", desc: "Ensuring proper drafting and minutes for Statutory Meetings.", icon: Calendar, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
                  { title: "Statutory Registers", desc: "Full maintenance in compliance with the Companies Act.", icon: BookOpen, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
                  { title: "Auditor Appointment", desc: "Filing Form ADT-1 for timely reappointment or vacancy.", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80" },
                  { title: "Event-Based Filing", desc: "Handling DIR-12, PAS-3, and other statutory event forms.", icon: Zap, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                  { title: "ROC Correction", desc: "Managing amendments, corrections, and resubmissions.", icon: RefreshCw, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" }
                ].map((item, idx) => (
                  <div key={idx} className="uiverse-service-card animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
                    <CachedImage 
                      src={item.img} 
                      alt={item.title} 
                      className="uiverse-card-bg-img" 
                      wrapperClassName="absolute inset-0 z-[1]"
                    />
                    <div className="uiverse-card-gradient"></div>
                    <item.icon />
                    <div className="uiverse-service-card__content">
                      <p className="uiverse-service-card__title">{item.title}</p>
                      <p className="uiverse-service-card__description">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* 6. Why Choose D BIZ Section - Advanced Advantage Grid */}
        <section id="advantage" className="py-24 bg-gray-50/50 scroll-mt-32 animate-on-scroll">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-20 animate-on-scroll text-center">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                6. Our Advantage
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Our Advantage</h2>
              <div className="space-y-6 text-xl text-gray-700 font-medium max-w-5xl mx-auto">
                 <p>D BIZ CONSULTANCY has experienced professionals who handle MCA compliance with accuracy and efficiency. We ensure proper filing of ROC forms, reducing the risk of penalties, late fees, and legal complications.</p>
                 <p>Our approach focuses on precise documentation, correct filing, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.</p>
                 <p>We follow a structured workflow to ensure timely compliance within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free MCA compliance experience.</p>
              </div>
            </div>

            {/* Detailed Explosion Advantage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-4 md:px-0">
               {[
                 {
                   title: "Compliance Analysis & Structuring",
                   points: ["Identify applicable ROC filings", "Proper classification as per Companies Act"],
                   icon: Search
                 },
                 {
                   title: "Documentation & Preparation",
                   points: ["Preparation of financial statements", "Drafting annual returns and documents"],
                   icon: FileText
                 },
                 {
                   title: "Pre-Filing Documentation Support",
                   points: ["Drafting of notices and resolutions", "Preparation of supporting attachments"],
                   icon: ClipboardCheck
                 },
                 {
                   title: "Data Verification & Reconciliation",
                   points: ["Verification of company records", "Reconciliation with books of accounts"],
                   icon: Activity
                 },
                 {
                   title: "ROC Filing & Submission",
                   points: ["Selection of correct MCA forms", "Filing AOC-4, MGT-7, DIR-3 KYC, etc.", "Timely submission on MCA portal"],
                   icon: Send
                 },
                 {
                   title: "Post-Filing Support",
                   points: ["Filing status tracking and follow-up", "Support for instant approval processing", "Handling corrections and resubmissions"],
                   icon: RefreshCw
                 },
                 {
                   title: "Notice Handling & Compliance",
                   points: ["ROC notices response", "Department query handling", "Compliance and legal support"],
                   icon: MessageCircle
                 }
               ].map((item, idx) => (
                 <div key={idx} className="uiverse-explosion-card group animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="uiverse-explosion-bg"></div>
                    <div className="uiverse-explosion-content">
                       <div className="uiverse-explosion-icon">
                          <item.icon size={28} />
                       </div>
                       <h3 className="uiverse-explosion-title">{item.title}</h3>
                       <ul className="uiverse-explosion-list space-y-3">
                         {item.points.map((point, pIdx) => (
                           <li key={pIdx} className="flex items-start gap-3">
                             <Check size={14} className="mt-1 shrink-0" />
                             <span className="text-[13px] font-bold leading-snug">{point}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 7. Advanced & Specialized Support Module */}
        <section id="specialized" className="py-24 scroll-mt-32 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto mb-20 text-center animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                7. Advanced Support
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Advanced & Specialized MCA Compliance Services</h2>
              <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                We provide expert support for complex corporate compliance requirements, ensuring complete legal adherence and smooth operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
               {[
                 { title: "Belated Filings", desc: "Expert support for overdue ROC records and legal compliance.", icon: History },
                 { title: "Revised & Corrections", desc: "Management of revised filings and ROC rectification.", icon: RefreshCw },
                 { title: "Director Compliance", desc: "Director KYC and board-level compliance updates.", icon: Users },
                 { title: "Event-Based Filings", desc: "Handling of DIR-12, PAS-3, and other triggered events.", icon: Zap },
                 { title: "Dormant Companies", desc: "Specialized maintenance for inactive or dormant status.", icon: HardHat },
                 { title: "Companies Act Advisory", desc: "Expert advisory on core Companies Act requirements.", icon: Scale },
                 { title: "Corporate Governance", desc: "Compliance planning and strategic governance support.", icon: Shield }
               ].map((item, idx) => (
                 <div key={idx} className="uiverse-specialized-card group animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-dbiz-teal/5 rounded-full blur-2xl group-hover:bg-dbiz-teal/10 transition-all"></div>
                    <div className="relative z-10 p-8">
                      <div className="bg-dbiz-teal/10 p-3 rounded-xl text-dbiz-teal w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-black text-dbiz-navy mb-3 tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-[15px] text-gray-500 font-bold italic leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. Process Section */}
        <section id="process" className="py-24 bg-dbiz-navy scroll-mt-32 relative overflow-hidden animate-on-scroll">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mb-20">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal text-white text-[11px] font-black tracking-[0.3em] mb-6 uppercase animate-on-scroll">
                8. Workflow
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight animate-on-scroll [animation-delay:100ms]">Process</h2>
              <p className="text-xl text-white/60 font-medium animate-on-scroll [animation-delay:200ms]">We follow a structured and systematic approach to ensure accurate filing and smooth corporate management.</p>
            </div>

            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-white/5 border-white/10 text-white hover:bg-dbiz-teal hover:text-white transition-all" />
                  <CarouselNext className="relative right-0 top-0 translate-y-0 bg-white/5 border-white/10 text-white hover:bg-dbiz-teal hover:text-white transition-all" />
                </div>
              </div>

              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { stage: "Stage 1", title: "Onboarding & Collection", color: "bg-blue-500", items: ["Understand company structure & requirements", "Collect financial & statutory records", "Gather previous filings & relevant docs"] },
                  { stage: "Stage 2", title: "Evaluation & Validation", color: "bg-purple-500", items: ["Analyze financial & company records", "Verify compliance requirements", "Identify missing or incorrect data"] },
                  { stage: "Stage 3", title: "Compliance Preparation", color: "bg-indigo-500", items: ["Prepare financial statements & returns", "Draft required ROC forms", "Ensure accuracy and completeness"] },
                  { stage: "Stage 4", title: "Review & Approval", color: "bg-cyan-500", items: ["Share draft filings with client", "Make necessary corrections", "Obtain final approval"] },
                  { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File forms on MCA portal", "Ensure timely submission in due dates", "Generate acknowledgment & records"] },
                  { stage: "Stage 6", title: "Post-Filing Monitoring", color: "bg-emerald-500", items: ["Track filing status", "Handle notices or resubmissions", "Provide ongoing compliance support"] }
                ].map((process, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] h-full relative group hover:bg-white/[0.08] transition-all">
                       <div className={`${process.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white text-xl font-black mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                         0{idx + 1}
                       </div>
                       <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{process.stage}</h3>
                       <h4 className="text-lg font-bold text-dbiz-teal mb-8">{process.title}</h4>
                       <ul className="space-y-4">
                          {process.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/70 text-base font-medium leading-tight">
                               <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                               {item}
                            </li>
                          ))}
                       </ul>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* 9. Documentation Requirements Section */}
        <section id="documents" className="py-24 bg-gray-50 scroll-mt-32 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                9. DOCUMENTATION
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Documents</h2>
              <p className="text-xl text-gray-600 font-medium max-w-4xl mx-auto">
                To ensure accurate MCA filing and smooth compliance, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and filing of ROC returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {[
                 {
                   title: "Basic Details",
                   icon: Building2,
                   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50",
                   items: ["CIN (Company Identification Number)", "PAN of the company / LLP", "Registered office details"]
                 },
                 {
                   title: "Financial Documents",
                   icon: FileBarChart,
                   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=50",
                   items: ["Balance Sheet", "Profit & Loss Account", "Auditor’s Report", "Director’s Report"]
                 },
                 {
                   title: "Compliance Documents",
                   icon: ClipboardCheck,
                   image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=50",
                   items: ["Details of directors and shareholders", "Board meeting and AGM details", "Auditor appointment details"]
                 },
                 {
                   title: "ROC Filing Data",
                   icon: FileCheck2,
                   image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=50",
                   items: ["Previous MCA filings", "Statutory registers and records", "Shareholding pattern"]
                 },
                 {
                   title: "Additional (If Applicable)",
                   icon: AlertCircle,
                   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=50",
                   items: ["DIR-3 KYC details of directors", "Loan and deposit details (DPT-3)", "Event-based filings (DIR-12, PAS-3, etc.)"]
                 }
               ].map((cat, idx) => (
                 <div key={idx} className="bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group animate-on-scroll flex flex-col overflow-hidden" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-dbiz-navy/40 group-hover:bg-dbiz-navy/20 transition-colors"></div>
                      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white">
                         <cat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-10 flex-grow">
                      <h3 className="text-2xl font-black text-dbiz-navy mb-6 tracking-tight leading-tight uppercase">{cat.title}</h3>
                      <ul className="space-y-4">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="h-5 w-5 text-dbiz-teal/40 mt-0.5 group-hover/item:text-dbiz-teal transition-colors shrink-0" />
                            <span className="text-gray-600 font-bold italic leading-tight text-[15px]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                 </div>
               ))}
            </div>

            {/* Standalone Advisory Line */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center animate-on-scroll">
               <p className="text-lg font-bold text-gray-600 leading-relaxed max-w-4xl mx-auto">
                 This ensures accurate ROC filing, proper documentation, and full compliance with the Companies Act.
               </p>
               <div className="mt-6 flex justify-center">
                  <div className="h-1 w-16 bg-dbiz-teal/30 rounded-full"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 9. Benefits & Deadlines Section */}
        {/* 10. Benefits & Timelines Section */}
        <section id="benefits" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="max-w-4xl mb-20 animate-on-scroll text-center mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                10. BENEFITS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Our Advantage</h2>
              <p className="text-xl text-gray-600 font-medium max-w-3xl leading-relaxed mx-auto">
                Professional MCA compliance ensures smooth corporate functioning and helps companies avoid legal risks and penalties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
               {[
                 {
                   title: "Accurate filing and documentation",
                   desc: "Ensures correct preparation and submission of financial statements and annual returns.",
                   icon: FileCheck2
                 },
                 {
                   title: "Avoid penalties and legal issues",
                   desc: "Reduces the risk of heavy fines, late fees, and director disqualification.",
                   icon: Gavel
                 },
                 {
                   title: "Timely compliance with deadlines",
                   desc: "Ensures all ROC filings are completed within prescribed timelines.",
                   icon: Clock
                 },
                 {
                   title: "Maintains active company status",
                   desc: "Prevents company strike-off and ensures continued legal existence.",
                   icon: Building2
                 },
                 {
                   title: "Improved corporate credibility",
                   desc: "Builds trust with banks, investors, and stakeholders.",
                   icon: Award
                 },
                 {
                   title: "Complete compliance with Companies Act",
                   desc: "Ensures adherence to all statutory and regulatory requirements.",
                   icon: Shield
                 }
               ].map((benefit, idx) => (
                 <div key={idx} className="group p-10 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-dbiz-teal transition-all duration-500 animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 text-dbiz-teal w-fit mb-8 shadow-sm group-hover:scale-110 group-hover:bg-dbiz-teal group-hover:text-white transition-all duration-500">
                       <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black text-dbiz-navy mb-4 tracking-tight leading-tight">{benefit.title}</h3>
                    <p className="text-[15px] text-gray-500 font-bold italic leading-relaxed">{benefit.desc}</p>
                 </div>
               ))}
            </div>

            {/* High-Fidelity Deadline Cards Grid */}
            <div className="max-w-6xl mx-auto animate-on-scroll-big">
               <div id="deadlines" className="animate-on-scroll-big">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] uppercase">
                      11. TIMELINES
                    </div>
                  </div>
                  <h2 className="text-[38.25px] font-black text-dbiz-navy mb-4 tracking-tight leading-tight text-center uppercase">Deadlines</h2>
                  <p className="text-gray-600 font-bold mb-12 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    To ensure smooth compliance and avoid penalties, it is important to be aware of key MCA filing deadlines.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                     {[
                       { cat: "AOC-4", label: "Financial Statements", due: "Within 30 days of AGM", icon: FileBarChart },
                       { cat: "MGT-7 / 7A", label: "Annual Return", due: "Within 60 days of AGM", icon: FileCheck2 },
                       { cat: "DIR-3 KYC", label: "Annual KYC Update", due: "30th September", icon: Users },
                       { cat: "DPT-3", label: "Return of Deposits", due: "30th June", icon: CreditCard }
                     ].map((item, i) => (
                       <div key={i} className="uiverse-flip-card group animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                          <div className="uiverse-flip-card-inner">
                             {/* Front Side */}
                             <div className="uiverse-flip-card-front text-white">
                                <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl text-dbiz-teal mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                                   <item.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-black text-white tracking-tight uppercase mb-2">{item.cat}</h3>
                                <p className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">{item.label}</p>
                                <div className="mt-8 flex items-center gap-2 text-dbiz-teal font-black text-[10px] uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                   <Repeat className="h-3 w-3 animate-spin-slow text-white" />
                                   <span className="text-white">Hover to reveal</span>
                                </div>
                             </div>
                             {/* Back Side */}
                             <div className="uiverse-flip-card-back">
                                <p className="text-dbiz-teal font-black text-xs uppercase tracking-[0.3em] mb-6">Filing Deadline</p>
                                <h4 className="text-2xl font-black text-white leading-tight mb-4">{item.due}</h4>
                                <div className="h-1 w-12 bg-white/20 rounded-full mb-6"></div>
                                <p className="text-white/70 font-bold italic text-sm px-4">Mandatory annual filing for {item.label.toLowerCase()} under the Companies Act.</p>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
                  
                  <p className="text-gray-500 font-bold italic text-[17px] text-center">
                    Timely filing of MCA forms is essential to avoid penalties, late fees, and compliance issues.
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* 12. Penalties & Risks Section - Navy Premium Split Layout */}
        <section id="penalties" className="py-[80px] px-[8%] bg-[linear-gradient(135deg,#f4f7fb,#ffffff)] scroll-mt-32 animate-on-scroll font-['Poppins',_sans-serif]">
          <div className="container-custom">
            <div className="flex flex-wrap lg:flex-nowrap gap-[60px] items-center justify-between">
              
              {/* Left Side: Context & Heading */}
              <div className="flex-1 min-w-[320px]">
                <h2 className="text-[#0b3c5d] text-[36px] font-black mb-[12px] tracking-tight">12. Critical Risk</h2>
                <p className="text-[22px] font-bold text-[#0f172a] mb-[14px]">
                  Penalties
                </p>
                <p className="text-[#475569] text-lg leading-[1.7] font-medium">
                  Non-filing or delayed MCA compliance may result in serious legal, financial, and operational consequences for your company.
                </p>
              </div>

              {/* Right Side: Risk Grid */}
              <div className="flex-1 min-w-[320px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {[
                  "Heavy penalties and late fees",
                  "Disqualification of directors",
                  "Company strike-off by ROC",
                  "Legal notices and compliance actions",
                  "Restrictions on business operations"
                ].map((risk, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-[20px] rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.06)] border-l-[5px] border-[#0b3c5d] font-semibold text-[#1e293b] transition-all duration-350 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)]"
                  >
                    {risk}
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Advisory Line */}
            <div className="mt-[60px] pt-8 border-t border-gray-100 text-center animate-on-scroll">
               <p className="text-lg font-bold text-gray-500 italic leading-relaxed max-w-4xl mx-auto">
                 Timely and accurate MCA compliance ensures smooth business operations and protects your company from legal consequences.
               </p>
            </div>
          </div>
        </section>

        {/* 13. FAQ Section - Centered Layout */}
        <section id="faqs" className="py-24 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            {/* Centered Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll-big">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase animate-on-scroll-big">
                 13. FAQ HUB
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight animate-on-scroll-big [animation-delay:100ms]">FAQs</h2>
               <p className="text-xl text-gray-600 font-bold max-w-4xl mx-auto leading-relaxed animate-on-scroll-big [animation-delay:200ms]">
                 To help you better understand MCA compliance and clear common doubts, we have answered some frequently asked questions below. These provide clarity on statutory requirements, filings, and compliance procedures under the Companies Act.
               </p>
            </div>

            {/* Centered Accordion List */}
            <div className="max-w-4xl mx-auto mb-20 animate-on-scroll-big">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "What is MCA Annual Compliance?", a: "MCA Annual Compliance refers to mandatory filings such as financial statements and annual returns with the Ministry of Corporate Affairs." },
                  { q: "Is MCA compliance mandatory for all companies?", a: "Yes, all registered companies and LLPs must comply with annual filing requirements, even if there is no business activity." },
                  { q: "What happens if MCA compliance is not done on time?", a: "Delayed compliance leads to heavy penalties, late fees, and possible disqualification of directors." },
                  { q: "What is AOC-4?", a: "AOC-4 is a form used to file financial statements of the company with the ROC." },
                  { q: "What is MGT-7 / MGT-7A?", a: "These forms are used to file the annual return of a company with details of shareholders and directors." },
                  { q: "What is DIR-3 KYC?", a: "DIR-3 KYC is mandatory for directors to update their KYC details annually with MCA." },
                  { q: "Is MCA filing required for inactive companies?", a: "Inactive companies are not exempt from MCA compliance. There is no separate nil-return form for a normal company; however, a company registered as dormant files Form MSC-3 under the dormant company provisions." },
                  { q: "What is an Annual General Meeting (AGM)?", a: "AGM is a mandatory meeting where financial statements and company matters are approved by shareholders." },
                  { q: "Can MCA returns be revised after filing?", a: "In some cases, corrected filings or resubmissions can be made if errors are identified." },
                  { q: "What is the penalty for late ROC filing?", a: "Late filing attracts additional fees on a per-day basis without any maximum limit in certain cases." },
                  { q: "What happens if a company does not file returns for years?", a: "The company may be struck off from the MCA register, and directors may be disqualified." },
                  { q: "Is auditor appointment mandatory every year?", a: "No. Auditor appointment is not required every year. An auditor is generally appointed for a period of 5 years, and Form ADT-1 is filed at the time of appointment or reappointment, as applicable." },
                  { q: "What is DPT-3?", a: "DPT-3 is a return filed for reporting loans, deposits, or outstanding amounts." },
                  { q: "Can directors be disqualified for non-compliance?", a: "Yes, continuous non-compliance can lead to director disqualification for a specified period." },
                  { q: "How can I check MCA filing status?", a: "The filing status can be checked on the MCA portal using the company CIN or SRN. However, the filing will be shown in the “My Application” section only under the login through which the form was filed." },
                  { q: "Is MCA compliance required for LLPs?", a: "Yes, LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) annually as part of MCA compliance." },
                  { q: "What is the role of ROC in compliance?", a: "ROC (Registrar of Companies) monitors and regulates company compliance under the Companies Act." },
                  { q: "Can a struck-off company be revived?", a: "Yes, under certain conditions, a company can be restored through legal procedures." },
                  { q: "Is professional help required for MCA compliance?", a: "Yes, professional assistance ensures accurate filing and avoids compliance risks." },
                  { q: "What documents are required for MCA compliance?", a: "Financial statements, director details, statutory records, and previous filings are required." }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-white border border-gray-100 rounded-[2rem] px-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll-big" style={{ animationDelay: `${index * 50}ms` }}>
                    <AccordionTrigger className="text-left font-medium text-dbiz-navy hover:text-dbiz-teal transition-colors py-6 text-xl tracking-tight">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-[17px] leading-relaxed pb-8 pt-0 font-medium">
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

export default MCACompliancePage;