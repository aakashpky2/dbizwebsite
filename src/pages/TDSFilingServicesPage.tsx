
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

const TDSFilingServicesPage = () => {
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
                  TDS Filing Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-2xl font-bold text-dbiz-teal mb-8 animate-on-scroll [animation-delay:150ms]">
                  Accurate, Timely & Fully Compliant TDS Filing for Businesses & Professionals
                </p>

                <div className="space-y-6 text-lg opacity-95 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms] mb-10">
                  <p>
                    Filing your TDS returns is more than a statutory requirement—it is essential for proper tax deduction reporting, avoiding penalties, and maintaining compliance with income tax regulations. Whether you are a business, company, or professional responsible for deducting tax at source, accurate TDS filing is crucial to avoid notices and ensure smooth operations.
                  </p>
                  <p>
                    D BIZ CONSULTANCY provides expert-driven TDS filing services ensuring accurate deduction reporting, timely return filing, and complete compliance with TDS provisions.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-12 animate-on-scroll [animation-delay:300ms]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-6 rounded-xl text-lg font-bold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1">
                        <CheckCircle2 className="h-5 w-5" /> File Your TDS Returns Now
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
                    <span>Reliable TDS Filing</span>
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
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                    alt="TDS Filing Professional Services"
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
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[13px] font-medium transition-all duration-300 ${isActive(item.id)
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
                Many businesses and professionals face difficulties in managing TDS compliance due to complex provisions, multiple sections, and strict timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                { title: "Section Selection", desc: "Confusion in selecting correct TDS sections (194C, 194J, 194I, etc.)", icon: FileText },
                { title: "Calculation Errors", desc: "Errors in TDS deduction and calculation", icon: Clock },
                { title: "Return Mismatch", desc: "Mismatch between TDS returns and Form 26AS", icon: AlertTriangle },
                { title: "PAN Errors", desc: "Incorrect PAN details of deductees", icon: Scale },
                { title: "Filing Delays", desc: "Delay in TDS payment and return filing", icon: Users },
                { title: "Compliance Issues", desc: "TDS notices and compliance issues", icon: AlertTriangle }
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
                We simplify TDS compliance with expert handling, ensuring accurate deduction,
                proper reporting, and complete adherence to TDS provisions,
                helping you avoid penalties, interest, and notices.
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
                  <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">What is TDS Filing?</h2>
                  <p className="text-xl text-gray-700 font-bold leading-relaxed mb-10">
                    TDS (Tax Deducted at Source) filing is the process of reporting tax deducted on payments such as salary, rent, professional fees, and contracts to the Income Tax Department through periodic returns.
                  </p>

                  <div className="relative group">
                    <div className="absolute -inset-4 bg-dbiz-teal/5 rounded-[2.5rem] blur-2xl group-hover:bg-dbiz-teal/10 transition-all"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 h-[300px]">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                        alt="Corporate Compliance"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/40 to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 self-center">
                  {[
                    { title: "Payment Details", desc: "Details of payments made to deductees" },
                    { title: "TDS Deposited", desc: "TDS deducted and deposited with the government" },
                    { title: "Deductee PAN", desc: "PAN details of deductees" },
                    { title: "Challan Records", desc: "Challan details of TDS payment" },
                    { title: "Quarterly Returns", desc: "Quarterly TDS return filing (24Q, 26Q, etc.)" }
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
                    Importance of TDS Filing
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {[
                      "Ensures compliance with income tax laws",
                      "Avoids penalties, interest, and notices",
                      "Enables deductees to claim tax credit",
                      "Maintains proper financial and tax records",
                      "Builds credibility and transparency in business operation"
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
                To ensure proper compliance with TDS provisions, it is important to identify whether you are required to deduct and file TDS returns. The table below provides a clear understanding of categories responsible for TDS deduction and filing.
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
                  { cat: "Employers", app: "Deducting TDS on salary payments" },
                  { cat: "Businesses & Professionals", app: "Deducting TDS on payments (contract, rent, fees, etc.)" },
                  { cat: "Companies & LLPs", app: "Mandatory TDS compliance" },
                  { cat: "Partnership Firms", app: "Required to deduct and file TDS" },
                  { cat: "Individuals (Audit Cases)", app: "Mandatory if liable under tax audit" },
                  { cat: "Government Bodies", app: "TDS deduction and filing required" },
                  { cat: "E-commerce Operators", app: "Applicable in specified cases" }
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
                * All entities responsible for deducting tax at source must file TDS returns within prescribed timelines.
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
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Which TDS Return Applies to You?</h2>
              <p className="text-xl text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">
                Selecting the correct TDS return is essential for accurate reporting and compliance. The table below outlines different TDS returns and their applicability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-on-scroll">
              {[
                { task: "Form 24Q", desc: "TDS on salary payments" },
                { task: "Form 26Q", desc: "TDS on non-salary payments (contract, professional fees, etc.)" },
                { task: "Form 27Q", desc: "TDS on payments to NRIs" },
                { task: "Form 27EQ", desc: "TCS (Tax Collected at Source) returns" }
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
                Choosing the correct TDS return and filing it accurately is essential to avoid penalties, notices, and compliance issues.
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
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Payments Covered under TDS Filing</h2>
              <p className="text-xl text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">We handle all types of payments liable for TDS with proper classification and compliance as per income tax regulations: This comprehensive coverage ensures accurate TDS deduction, proper reporting, and full compliance with TDS provisions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                { title: "Salary Payments", desc: "Salary payments (Section 192)", icon: FileBarChart, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
                { title: "Contract Payments", desc: "Contract payments (Section 194C)", icon: FileText, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                { title: "Professional Fees", desc: "Professional & technical fees (Section 194J)", icon: UserPlus, img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=600&q=80" },
                { title: "Rent Payments", desc: "Rent payments (Section 194I)", icon: Calendar, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
                { title: "Interest Payments", desc: "Interest payments (Section 194A)", icon: BookOpen, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
                { title: "Commission/Brokerage", desc: "Commission & brokerage (Section 194H)", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80" },
                { title: "Purchase of Goods", desc: "Purchase of goods (Section 194Q)", icon: Zap, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                { title: "Payments to NRIs", desc: "Payments to Non-Residents (NRI)", icon: RefreshCw, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" }
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
                <p>D BIZ CONSULTANCY has experienced professionals who handle TDS compliance with accuracy and efficiency. We ensure correct deduction, timely filing, and full compliance with TDS provisions, reducing the risk of errors, penalties, and notices.</p>
                <p>Our approach focuses on precise deduction, proper reporting, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.</p>
                <p>We follow an efficient process to ensure fast turnaround within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free TDS filing experience.</p>
              </div>
            </div>

            {/* Detailed Explosion Advantage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-4 md:px-0">
              {[
                {
                  title: "TDS Analysis & Structuring",
                  points: ["Identify applicable TDS sections", "Proper classification of payments"],
                  icon: Search
                },
                {
                  title: "TDS Calculation & Compliance",
                  points: ["Accurate TDS deduction", "Ensure correct rates and applicability", "Timely tax deposit"],
                  icon: Activity
                },
                {
                  title: "Data Reconciliation",
                  points: ["Form 26AS verification", "Challan matching", "Deductee data validation"],
                  icon: FileCheck2
                },
                {
                  title: "TDS Return Preparation & Filing",
                  points: ["Selection of correct TDS return (24Q, 26Q, etc.)", "Preparation of quarterly returns", "Filing on income tax portal", "Form 16/ Form 16A will be filed"],
                  icon: Send
                },
                {
                  title: "Post-Filing Support",
                  points: ["TDS return status tracking", "Correction statements", "Ongoing compliance support"],
                  icon: RefreshCw
                },
                {
                  title: "Notice Handling & Compliance",
                  points: ["TDS notices response", "Default and demand resolution", "Rectification and compliance support"],
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
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Advanced & Specialized TDS Filing Services</h2>
              <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                In addition to regular TDS compliance, we provide advanced services to handle complex requirements and ensure accurate reporting. These services help businesses manage corrections, planning, and specialized TDS scenarios efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
              {[
                { title: "Belated TDS Returns", desc: "Belated TDS Return Filing", icon: History },
                { title: "Revised TDS Returns", desc: "Revised TDS Return & Correction Statements", icon: RefreshCw },
                { title: "TDS Planning", desc: "TDS Liability Calculation & Compliance Planning", icon: Activity },
                { title: "26AS Recon", desc: "TDS Reconciliation with Form 26AS", icon: Zap },
                { title: "Challan Correction", desc: "Challan Correction & PAN Correction Support", icon: FileCheck2 },
                { title: "Lower TDS Assist", desc: "Lower / Nil TDS Certificate Assistance", icon: Layers },
                { title: "Complex Deals", desc: "Handling Complex Transactions (NRI payments, high-value contracts)", icon: Shield },
                { title: "Compliance Consult", desc: "TDS Advisory & Compliance Support for Businesses", icon: Users }
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
              <p className="text-xl text-white/60 font-medium animate-on-scroll [animation-delay:200ms]">We follow a structured and systematic approach to ensure accurate TDS deduction, timely filing, and complete compliance with applicable provisions. Each stage is carefully managed to minimize errors and avoid penalties.</p>
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
                  { stage: "Stage 1", title: "Client Onboarding & Data Collection", color: "bg-blue-500", items: ["Understand business profile and nature of payments", "Collect PAN, TAN, deductor details, and financial data", "Gather payment records, challans, and deductee details"] },
                  { stage: "Stage 2", title: "Data Evaluation & Validation", color: "bg-purple-500", items: ["Analyze all payments liable for TDS", "Verify PAN details of deductees", "Reconcile with challans and Form 26AS"] },
                  { stage: "Stage 3", title: "TDS Computation & Compliance", color: "bg-indigo-500", items: ["Calculate TDS as per applicable sections and rates", "Ensure correct deduction and timely deposit", "Verify compliance with TDS provisions"] },
                  { stage: "Stage 4", title: "Return Preparation & Review", color: "bg-cyan-500", items: ["Select correct TDS return (24Q, 26Q, etc.)", "Prepare quarterly TDS return", "Share summary with client for review and approval"] },
                  { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File TDS returns on income tax portal", "Ensure timely submission within due dates", "Generate acknowledgment and filing reports"] },
                  { stage: "Stage 6", title: "Post-Filing Monitoring", color: "bg-emerald-500", items: ["Track return status and defaults", "Handle notices, corrections, or mismatches", "Provide ongoing TDS compliance support"] }
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
                To ensure smooth and accurate TDS filing, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Basic Details",
                  icon: Building2,
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50",
                  items: ["PAN & TAN of deductor", "GSTIN (if applicable)", "Bank statements"]
                },
                {
                  title: "Payment Documents",
                  icon: FileBarChart,
                  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=50",
                  items: ["Salary details (for Form 24Q)", "Payment records (contract, rent, professional fees, etc.)", "Deductee details with PAN"]
                },
                {
                  title: "Tax Documents",
                  icon: FileCheck2,
                  image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=50",
                  items: ["TDS challans (payment proof)", "Form 26AS", "Previous TDS returns"]
                },
                {
                  title: "Additional Details",
                  icon: AlertCircle,
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=50",
                  items: ["Interest or late fee details (if any)", "Correction data (if applicable)", "Exemption certificates"]
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
                Providing accurate documents helps ensure proper TDS deduction, timely filing, and full compliance.
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
                Professional TDS filing ensures accuracy, timely compliance, and smooth management of tax deductions. It helps businesses avoid risks while maintaining proper financial and statutory records.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {[
                {
                  title: "Accurate TDS calculation and deduction",
                  desc: "Ensures correct application of TDS rates and sections on various payments, reducing errors and compliance issues.",
                  icon: FileCheck2
                },
                {
                  title: "Timely filing of TDS returns",
                  desc: "Guarantees that quarterly returns are filed within due dates, avoiding delays and associated penalties.",
                  icon: Clock
                },
                {
                  title: "Avoid penalties, interest, and notices",
                  desc: "Minimizes the risk of late fees, interest on delayed payments, and notices from the Income Tax Department.",
                  icon: AlertTriangle
                },
                {
                  title: "Proper credit to deductees",
                  desc: "Ensures that deducted tax is correctly reflected in Form 26AS, allowing deductees to claim their tax credit without issues.",
                  icon: Award
                },
                {
                  title: "Smooth compliance with tax laws",
                  desc: "Maintains proper documentation and adherence to TDS provisions, ensuring hassle-free compliance.",
                  icon: Shield
                },
                {
                  title: "Improved financial credibility",
                  desc: "Builds trust with stakeholders and supports smooth audits, financial assessments, and business operations.",
                  icon: Building2
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
                  To ensure smooth compliance and avoid penalties, it is important to be aware of the due dates for TDS return filing. The table below provides a clear overview of quarterly deadlines applicable to different periods.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {[
                    { cat: "Q1 (Apr–Jun)", label: "Quarterly TDS Return", due: "31st July", icon: FileBarChart },
                    { cat: "Q2 (Jul–Sep)", label: "Quarterly TDS Return", due: "31st October", icon: FileCheck2 },
                    { cat: "Q3 (Oct–Dec)", label: "Quarterly TDS Return", due: "31st January", icon: Clock },
                    { cat: "Q4 (Jan–Mar)", label: "Quarterly TDS Return", due: "31st May", icon: Calendar }
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
                          <p className="text-white/70 font-bold italic text-sm px-4">Mandatory filing for {item.label.toLowerCase()} under Income tax provisions.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-500 font-bold italic text-[17px] text-center">
                  Timely filing of TDS returns is essential to avoid late fees, interest, and compliance issues while ensuring proper credit to deductees.
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
                  Non-filing or late filing may result in financial and legal consequences.
                </p>
              </div>

              {/* Right Side: Risk Grid */}
              <div className="flex-1 min-w-[320px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {[
                  "Late filing fees under Section 234E",
                  "Interest on delayed deduction or payment",
                  "TDS notices and demand",
                  "Disallowance of expenses",
                  "Legal consequences and compliance issues"
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
                Ensuring timely and accurate TDS filing helps avoid financial and legal risks.
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
                To help you understand TDS filing and clarify common queries, we have listed some frequently asked questions below. These answers provide practical insights into TDS concepts, compliance requirements, and filing procedures.
              </p>
            </div>

            {/* Centered Accordion List */}
            <div className="max-w-4xl mx-auto mb-20 animate-on-scroll-big">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "What is TDS?", a: "TDS (Tax Deducted at Source) is tax deducted while making specified payments such as salary, rent, or professional fees." },
                  { q: "Who is required to deduct TDS?", a: "Any person or entity making specified payments as per income tax provisions must deduct TDS." },
                  { q: "What is TAN and is it mandatory?", a: "TAN (Tax Deduction Account Number) is mandatory for deducting and filing TDS returns." },
                  { q: "What happens if TDS is not deducted?", a: "Failure to deduct TDS may result in penalties, interest, and disallowance of expenses." },
                  { q: "What is Form 24Q?", a: "Form 24Q is a TDS return filed for salary payments." },
                  { q: "What is Form 26Q?", a: "Form 26Q is used for TDS on non-salary payments like contracts, rent, and professional fees." },
                  { q: "What is Form 27Q?", a: "Form 27Q is applicable for TDS on payments made to non-residents (NRIs)." },
                  { q: "When should TDS be deposited?", a: "TDS must be deposited on or before the 7th of the following month (with some exceptions)." },
                  { q: "Can TDS returns be revised?", a: "Yes, TDS returns can be revised to correct errors or update details." },
                  { q: "What is Form 26AS in TDS?", a: "Form 26AS shows TDS deducted and deposited against your PAN." },
                  { q: "What is a TDS challan?", a: "A TDS challan is proof of tax deposited with the government." },
                  { q: "What is late fee under TDS?", a: "Late filing attracts a fee under Section 234E for delay in filing returns." },
                  { q: "What is interest on TDS?", a: "Interest is charged for late deduction or late payment of TDS." },
                  { q: "Can TDS be filed without PAN of deductee?", a: "TDS can be deducted, but higher rates apply if PAN is not available." },
                  { q: "What is a correction return?", a: "It is a revised TDS return filed to correct errors in previously filed returns." },
                  { q: "What happens if wrong TDS is deducted?", a: "It can be corrected through revised returns or adjustments." },
                  { q: "Is TDS applicable on all payments?", a: "No, only specified payments under the Income Tax Act are subject to TDS." },
                  { q: "Can individuals deduct TDS?", a: "Yes, in certain cases like property purchase or if liable under tax audit." },
                  { q: "What is Form 16/16A?", a: "These are TDS certificates issued to deductees for tax deducted." },
                  { q: "How can I check TDS status?", a: "TDS status can be checked through Form 26AS or the TRACES portal." }
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

export default TDSFilingServicesPage;