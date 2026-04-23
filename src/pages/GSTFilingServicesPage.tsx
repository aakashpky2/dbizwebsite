
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

const GSTFilingServicesPage = () => {
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
                  GST Filing Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-2xl font-bold text-dbiz-teal mb-8 animate-on-scroll [animation-delay:150ms]">
                  Accurate, Timely & Fully Compliant GST Filing for Businesses & Professionals
                </p>

                <div className="space-y-6 text-lg opacity-95 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms] mb-10">
                  <p>
                    Filing your GST returns is more than a compliance requirement—it is essential for maintaining proper tax records, avoiding penalties, and ensuring smooth business operations. Whether you are a small business, trader, service provider, or company, accurate GST filing is crucial to stay compliant and avoid notices.
                  </p>
                  <p>
                    D BIZ CONSULTANCY provides expert-driven GST filing services ensuring accurate reporting, timely submissions, and complete compliance with GST regulations.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-12 animate-on-scroll [animation-delay:300ms]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-6 rounded-xl text-lg font-bold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1">
                        <CheckCircle2 className="h-5 w-5" /> File Your GST Returns Now
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
                    <span>Reliable GST Filing</span>
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
                    alt="GST Filing Professional Services"
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
                Many businesses face difficulties in managing GST compliance due to frequent changes in regulations and complex reporting requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                { title: "Return Selection", desc: "Confusion in selecting correct GST returns (GSTR-1, GSTR-3B, etc.)", icon: FileText },
                { title: "Data Mismatch", desc: "Mismatch between GSTR-2A, GSTR-2B, and purchase records", icon: Clock },
                { title: "ITC Claims", desc: "Incorrect or excess Input Tax Credit (ITC) claims", icon: AlertTriangle },
                { title: "Calculation Errors", desc: "Errors in sales reporting and tax calculation", icon: Scale },
                { title: "Compliance Issues", desc: "Notices and compliance issues from GST department", icon: Users }
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
                We simplify GST compliance with expert handling, ensuring accurate data reporting,
                correct ITC claims, and complete adherence to GST laws,
                helping you avoid risks and penalties.
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
                  <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">What is GST Filing?</h2>
                  <p className="text-xl text-gray-700 font-bold leading-relaxed mb-10">
                    GST Filing is the process of submitting periodic returns to the GST Department, reporting details of sales, purchases, tax collected, and input tax credit (ITC) claimed for a specific period.
                  </p>

                  <div className="relative group">
                    <div className="absolute -inset-4 bg-dbiz-teal/5 rounded-[2.5rem] blur-2xl group-hover:bg-dbiz-teal/10 transition-all"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 h-[300px]">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                        alt="GST Filing Overview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/40 to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 self-center">
                  {[
                    { title: "Outward Supplies", desc: "Details of outward supplies (sales)" },
                    { title: "Inward Supplies", desc: "Details of inward supplies (purchases)" },
                    { title: "Output Tax", desc: "Output tax liability" },
                    { title: "ITC Claimed", desc: "Input Tax Credit (ITC) claimed" },
                    { title: "Net Tax Payable", desc: "Net tax payable or refund" }
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
                    Importance of GST Filing
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {[
                      "Ensures legal compliance under GST laws",
                      "Enables proper claim of Input Tax Credit",
                      "Avoids penalties, interest, and notices",
                      "Maintains accurate business records",
                      "Builds credibility with customers and vendors"
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
                To help you clearly understand your GST filing obligations, the table below outlines the categories of taxpayers and their respective applicability under GST laws.
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
                  { cat: "Registered Businesses", app: "Mandatory GST return filing" },
                  { cat: "Traders & Dealers", app: "Required for supply of goods" },
                  { cat: "Service Providers", app: "Required for taxable services" },
                  { cat: "Companies & LLPs", app: "Compulsory compliance" },
                  { cat: "E-commerce Sellers", app: "Mandatory under GST" },
                  { cat: "Composition Scheme Dealers", app: "Filing under composition scheme" },
                  { cat: "Casual Taxable Persons", app: "Required during business period" },
                  { cat: "Input Service Distributors", app: "Mandatory return filing" }
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
                * All entities registered under GST are required to file returns regularly, even if there are no transactions (Nil returns).
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
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Which GST Return Applies to You?</h2>
              <p className="text-xl text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">
                To ensure accurate compliance and avoid errors, it is important to select the correct GST return based on your business type and transactions. The table below provides a clear understanding of different GST returns and their applicability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-on-scroll">
              {[
                { task: "GSTR-1", desc: "Reporting outward supplies (sales)" },
                { task: "GSTR-3B", desc: "Monthly summary return & tax payment" },
                { task: "GSTR-2A / 2B", desc: "ITC reconciliation (auto-generated)" },
                { task: "GSTR-9", desc: "Annual return for regular taxpayers" },
                { task: "GSTR-9C", desc: "GST audit & reconciliation" },
                { task: "CMP-08", desc: "Composition scheme tax payment" },
                { task: "GSTR-4", desc: "Annual return for composition dealers" },
                { task: "GSTR-7", desc: "TDS under GST" },
                { task: "GSTR-8", desc: "E-commerce operators" }
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
                Choosing the correct GST return and filing it accurately is essential to avoid penalties, notices, and compliance issues.
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
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Transactions Covered in GST Filing</h2>
              <p className="text-xl text-gray-700 font-bold leading-relaxed max-w-3xl mx-auto">We handle all types of GST transactions with proper classification and compliance as per GST regulations: This comprehensive coverage ensures accurate reporting of all transactions, proper ITC claims, and complete GST compliance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                { title: "Outward Supplies", desc: "Sales of goods and services", icon: FileBarChart, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
                { title: "Inward Supplies", desc: "Purchases and expenses", icon: FileText, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                { title: "ITC Claims", desc: "Input Tax Credit (ITC) claims", icon: UserPlus, img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=600&q=80" },
                { title: "RCM Transactions", desc: "Reverse Charge Mechanism (RCM) transactions", icon: Calendar, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
                { title: "Export Supplies", desc: "Export and Zero-rated supplies", icon: BookOpen, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
                { title: "Interstate & Intrastate", desc: "Interstate and Intrastate transactions", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80" },
                { title: "E-commerce Sales", desc: "E-commerce and online sales transactions", icon: Zap, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                { title: "Return Corrections", desc: "Amendments and corrections in returns", icon: RefreshCw, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" }
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
                <p>D BIZ CONSULTANCY has experienced professionals who handle even complex GST compliance with ease. We ensure accurate and compliant GST filing, reducing the risk of errors, penalties, and notices.</p>
                <p>Our approach focuses on precise transaction reporting and correct tax calculations while maintaining complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and trust.</p>
                <p>We follow an efficient process to ensure timely filing within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free GST compliance experience.</p>
              </div>
            </div>

            {/* Detailed Explosion Advantage Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 px-4 md:px-0">
              {[
                {
                  title: "GST Data Analysis & Structuring",
                  points: ["Identify all sales and purchase transactions", "Proper classification as per GST rules"],
                  icon: Search
                },
                {
                  title: "Tax Calculation & Optimization",
                  points: ["Accurate output tax computation", "Correct Input Tax Credit (ITC) utilization", "Minimize tax liability within legal limits"],
                  icon: Activity
                },
                {
                  title: "Data Reconciliation",
                  points: ["GSTR-2A & 2B matching", "Purchase and sales reconciliation", "ITC verification"],
                  icon: FileCheck2
                },
                {
                  title: "GST Return Preparation & Filing",
                  points: ["Selection of correct GST returns", "Preparation of GSTR-1, GSTR-3B, etc.", "Timely filing on GST portal"],
                  icon: Send
                },
                {
                  title: "Post-Filing Support",
                  points: ["Return status tracking", "Amendments and corrections", "Ongoing compliance support"],
                  icon: RefreshCw
                },
                {
                  title: "Notice Handling & Compliance",
                  points: ["GST notices response", "Department queries handling", "Compliance and audit support"],
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
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Advanced & Specialized GST Filing Services</h2>
              <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                We provide expert support for complex GST requirements, ensuring accurate compliance and efficient tax management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
              {[
                { title: "Tax Planning", desc: "GST Liability Calculation & Tax Planning", icon: Activity },
                { title: "GST Audit Support", desc: "GST Audit Support & Reconciliation (GSTR-9C)", icon: Zap },
                { title: "ITC Reconciliation", desc: "GSTR-2A & 2B ITC Reconciliation", icon: FileCheck2 },
                { title: "Data Reconciliation", desc: "GST & Accounting Data Reconciliation", icon: Layers },
                { title: "Complex Transactions", desc: "Handling Complex Transactions (RCM, exports, e-commerce)", icon: Shield },
                { title: "Compliance Support", desc: "GST Advisory & Compliance Support for Businesses", icon: Users }
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
              <p className="text-xl text-white/60 font-medium animate-on-scroll [animation-delay:200ms]">We follow a structured and systematic approach to ensure accurate filing, timely compliance, and smooth GST management</p>
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
                  { stage: "Stage 1", title: "Client Onboarding & Data Collection", color: "bg-blue-500", items: ["Understand business nature and GST registration details", "Collect GSTIN, sales data, purchase data, and accounting records", "Gather invoices, expense details, and previous return data"] },
                  { stage: "Stage 2", title: "Data Evaluation & Validation", color: "bg-purple-500", items: ["Analyze sales and purchase transactions", "Reconcile data with GSTR-2A, GSTR-2B, and books of accounts", "Identify mismatches, missing invoices, or incorrect entries"] },
                  { stage: "Stage 3", title: "Tax Computation & ITC Optimization", color: "bg-indigo-500", items: ["Calculate output tax liability", "Verify and optimize Input Tax Credit (ITC)", "Ensure correct tax payable after ITC adjustment"] },
                  { stage: "Stage 4", title: "Return Preparation & Review", color: "bg-cyan-500", items: ["Select applicable GST returns (GSTR-1, GSTR-3B, etc.)", "Prepare draft returns based on validated data", "Share summary with client for review and approval"] },
                  { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File GST returns on the GST portal", "Ensure timely submission within due dates", "Generate filing acknowledgment and reports"] },
                  { stage: "Stage 6", title: "Post-Filing Monitoring", color: "bg-emerald-500", items: ["Track return status and compliance updates", "Handle notices, mismatches, or corrections", "Provide ongoing GST support and advisory services"] }
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
                To ensure accurate GST filing and smooth compliance, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and filing of GST returns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Basic Details",
                  icon: Building2,
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50",
                  items: ["GSTIN and login credentials", "PAN of the business", "Bank account details"]
                },
                {
                  title: "Sales Documents",
                  icon: FileBarChart,
                  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=50",
                  items: ["Sales invoices (B2B & B2C)", "Debit and credit notes", "Export invoices (if applicable)"]
                },
                {
                  title: "Purchase Documents",
                  icon: ClipboardCheck,
                  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=50",
                  items: ["Purchase invoices", "Expense bills", "Import documents (if applicable)"]
                },
                {
                  title: "Tax Data",
                  icon: FileCheck2,
                  image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=50",
                  items: ["GSTR-2A & GSTR-2B", "Previous GST returns", "Input Tax Credit (ITC) details"]
                },
                {
                  title: "Additional Data",
                  icon: AlertCircle,
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=50",
                  items: ["E-way bill details", "RCM transactions", "E-commerce transaction reports"]
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
                This ensures accurate GST filing, proper ITC claims, and full compliance with GST regulations.
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
                Professional GST filing plays a crucial role in ensuring accurate tax reporting and smooth business operations. It helps businesses stay compliant, reduce risks, and efficiently manage tax obligations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {[
                {
                  title: "Accurate tax calculation and reporting",
                  desc: "Ensures correct computation of GST liability with proper classification of transactions.",
                  icon: FileCheck2
                },
                {
                  title: "Proper Input Tax Credit (ITC) utilization",
                  desc: "Maximizes eligible ITC claims and avoids incorrect or excess credit usage.",
                  icon: Activity
                },
                {
                  title: "Avoid penalties, interest, and notices",
                  desc: "Reduces the risk of non-compliance, late fees, and departmental notices.",
                  icon: Gavel
                },
                {
                  title: "Timely return filing and compliance",
                  desc: "Ensures all GST returns are filed within due dates without delays.",
                  icon: Clock
                },
                {
                  title: "Improved business credibility",
                  desc: "Builds trust with vendors, customers, and financial institutions through proper compliance.",
                  icon: Award
                },
                {
                  title: "Complete compliance with GST laws",
                  desc: "Maintains accurate records and adherence to all GST rules and regulations.",
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
                  To ensure smooth compliance and avoid penalties, it is important to be aware of the due dates for various GST returns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {[
                    { cat: "GSTR-1", label: "Outward Supplies", due: "11th of next month", icon: FileBarChart },
                    { cat: "GSTR-3B", label: "Summary Return", due: "20th of next month", icon: FileCheck2 },
                    { cat: "GSTR-1 QRMP", label: "Quarterly Return", due: "13th of month after Q", icon: Calendar },
                    { cat: "GSTR-3B QRMP", label: "Quarterly Summary", due: "22nd/24th after Q", icon: Layers },
                    { cat: "CMP-08", label: "Composition Tax", due: "18th of month after Q", icon: CreditCard },
                    { cat: "GSTR-4", label: "Composition Annual", due: "30th April", icon: Activity },
                    { cat: "GSTR-9", label: "Annual Return", due: "31st December", icon: FileText }
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
                          <p className="text-white/70 font-bold italic text-sm px-4">Mandatory filing for {item.label.toLowerCase()} under GST laws.</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-500 font-bold italic text-[17px] text-center">
                  Timely filing of GST returns is essential to avoid penalties, interest, and compliance issues.
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
                  Non-filing or late filing of GST returns may result in GST notices, penalties, and compliance actions.
                </p>
              </div>

              {/* Right Side: Risk Grid */}
              <div className="flex-1 min-w-[320px] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {[
                  "Late fees for delayed return filing",
                  "Interest on unpaid GST liability",
                  "GST notices and compliance actions",
                  "Blocking or reversal of Input Tax Credit (ITC)",
                  "Suspension or cancellation of GST registration"
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
                Timely and accurate GST filing is essential to avoid financial loss and ensure smooth business operations.
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
                To help you better understand GST filing and clear common doubts, we have answered some frequently asked questions below. These will provide clarity on key concepts, compliance requirements, and practical aspects of GST returns.
              </p>
            </div>

            {/* Centered Accordion List */}
            <div className="max-w-4xl mx-auto mb-20 animate-on-scroll-big">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "What is GST return filing?", a: "GST return filing is the process of reporting sales, purchases, tax liability, and Input Tax Credit (ITC) to the GST department." },
                  { q: "Is GST return filing mandatory for all registered businesses?", a: "Yes, all GST-registered businesses must file returns, even if there are no transactions (Nil return)." },
                  { q: "What happens if GST returns are not filed on time?", a: "Late filing leads to penalties, interest on tax dues, and possible suspension of GST registration." },
                  { q: "What is GSTR-1?", a: "GSTR-1 is a return that contains details of outward supplies (sales) made during a period." },
                  { q: "What is GSTR-3B?", a: "GSTR-3B is a summary return used to declare tax liability and make GST payments." },
                  { q: "What is Input Tax Credit (ITC)?", a: "ITC is the credit claimed on GST paid for purchases, which can be adjusted against output tax liability." },
                  { q: "What is GSTR-2A and GSTR-2B?", a: "These are auto-generated statements showing purchase data and eligible ITC based on supplier filings." },
                  { q: "Can I revise a GST return after filing?", a: "GST returns cannot be revised, but corrections can be made in subsequent returns." },
                  { q: "What is a Nil GST return?", a: "A Nil return is filed when there are no sales or purchases during the return period." },
                  { q: "What is the penalty for late GST filing?", a: "Late fees and interest are charged for delayed filing depending on the return type." },
                  { q: "Do small businesses need to file GST returns monthly?", a: "Not always. Eligible taxpayers can opt for the QRMP scheme and file quarterly returns." },
                  { q: "What is the QRMP scheme?", a: "QRMP (Quarterly Return Monthly Payment) allows small taxpayers to file returns quarterly while paying tax monthly." },
                  { q: "What is Reverse Charge Mechanism (RCM)?", a: "Under RCM, the buyer is liable to pay GST instead of the supplier." },
                  { q: "Is GST filing required for composition dealers?", a: "Yes, composition dealers must file returns, but under a simplified format." },
                  { q: "What is GSTR-9?", a: "GSTR-9 is the annual return summarizing all GST transactions of the financial year." },
                  { q: "What is GST audit (GSTR-9C)?", a: "It is a reconciliation statement required for certain taxpayers to verify GST data with financial records." },
                  { q: "Can GST returns be filed without invoices?", a: "No, proper invoices are required for accurate GST filing and ITC claims." },
                  { q: "What happens if ITC is claimed incorrectly?", a: "Incorrect ITC claims may lead to reversal, penalties, and notices from the GST department." },
                  { q: "How can I check GST return status?", a: "You can check the status on the GST portal using your GSTIN and login credentials." },
                  { q: "Can GST registration be cancelled for non-filing?", a: "Yes, continuous non-filing of returns can lead to suspension or cancellation of GST registration." }
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

export default GSTFilingServicesPage;