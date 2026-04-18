
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
  UserPlus
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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
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
          
          <div className="absolute inset-0 z-0 bg-dbiz-navy/60 backdrop-blur-[2px]"></div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-start mt-12 md:mt-[-30px]">
              {/* Centered Unified Hero Content Section */}
              <div className="md:col-span-12 lg:col-span-10 lg:col-start-2 text-center flex flex-col items-center">
                <h1 className="text-[63.75px] font-extrabold mb-4 leading-tight tracking-tight animate-on-scroll-big [animation-delay:100ms] text-center">
                  MCA Annual Compliance Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-2xl font-bold text-dbiz-teal mb-8 animate-on-scroll-big [animation-delay:150ms] text-center">
                  Accurate, Timely & Fully Compliant ROC Filing for Companies & LLPs
                </p>

                <div className="space-y-6 max-w-4xl text-lg lg:text-xl opacity-90 leading-relaxed animate-on-scroll-big [animation-delay:200ms] text-center flex flex-col items-center">
                  <p>
                    MCA Annual Compliance is more than a statutory requirement—it is essential for maintaining your company’s legal status, avoiding penalties, and ensuring smooth business operations. Whether you are a Private Limited Company, LLP, or other registered entity, timely and accurate ROC filings are crucial to remain compliant and avoid disqualification or fines.
                  </p>
                  <p>
                    D BIZ CONSULTANCY provides expert-driven MCA compliance services ensuring accurate filing of annual returns, financial statements, and complete adherence to Companies Act requirements.
                  </p>
                </div>

                <div className="mt-8 mb-10 flex items-center justify-center gap-2 text-dbiz-teal font-bold text-lg animate-on-scroll-big [animation-delay:250ms] w-full">
                  <div className="h-px bg-dbiz-teal/30 w-12 mr-2 hidden sm:block"></div>
                  Hassle-free | Accurate | Expert Supported
                  <div className="h-px bg-dbiz-teal/30 w-12 ml-2 hidden sm:block"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-on-scroll-big [animation-delay:300ms]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-10 py-7 rounded-2xl text-xl font-bold flex items-center gap-3 shadow-[0_20px_40px_rgba(20,184,166,0.3)] transition-all hover:-translate-y-1">
                        <CheckCircle2 className="h-6 w-6" /> File Your ROC Compliance Now
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0 border-none shadow-2xl">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>

                  <Button
                    onClick={() => handleSectionClick('overview')}
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-10 py-7 rounded-2xl text-xl font-bold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1"
                  >
                    <MessageCircle className="h-6 w-6" /> Get Free Consultation
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 text-sm font-semibold animate-on-scroll-big [animation-delay:400ms]">
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
            </div>
          </div>
        </section>

        {/* Navigation Wrapper */}
        <section className="sticky top-16 z-40 bg-white shadow-sm border-b border-gray-100 animate-on-scroll-big">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2">
              {[
                { id: 'challenges', icon: AlertTriangle, label: 'Common Challenges' },
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'applicability', icon: Layers, label: 'Applicability' },
                { id: 'features', icon: Shield, label: 'Filing Services' },
                { id: 'advantage', icon: Award, label: 'Our Advantage' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'penalties', icon: Gavel, label: 'Penalties' },
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

        {/* 1. Challenges & Solution Section */}
        <section id="challenges" className="py-24 scroll-mt-32 border-b border-gray-100 bg-gray-50/30 animate-on-scroll-big">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight leading-tight animate-on-scroll-big">
                Facing Challenges in MCA Annual Compliance?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium animate-on-scroll-big [animation-delay:100ms]">
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
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-dbiz-teal transition-all duration-500 group animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dbiz-teal/10 transition-colors">
                    <challenge.icon className="text-red-500 h-6 w-6 group-hover:text-dbiz-teal transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3 tracking-tight group-hover:text-dbiz-teal transition-colors">{challenge.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{challenge.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white relative rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl overflow-hidden animate-on-scroll-big">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-dbiz-teal/10 p-5 rounded-[1.5rem] border border-dbiz-teal/20 self-start shrink-0">
                  <Sparkles className="h-10 w-10 text-dbiz-teal" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-dbiz-navy mb-4 uppercase tracking-tight">Our Solution</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-bold max-w-4xl">
                    We simplify MCA annual compliance with expert handling, ensuring accurate filing, timely submissions, and complete adherence to Companies Act requirements, helping you avoid penalties, disqualification, and legal risks.
                  </p>
                </div>
                <div className="md:ml-auto shrink-0 w-full md:w-auto">
                  <Button 
                    className="w-full md:w-auto bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-5 rounded-xl text-lg font-bold shadow-lg transition-all hover:-translate-y-1"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Start Compliance Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Overview Section */}
        <section id="overview" className="py-24 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-on-scroll-big">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  What is MCA Annual Compliance?
                </div>
                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 animate-on-scroll-big [animation-delay:100ms] tracking-tight">
                  Understanding Statutory Filings
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6 animate-on-scroll-big [animation-delay:200ms]">
                  <p className="text-xl leading-relaxed font-medium">
                    MCA Annual Compliance is the process of filing mandatory returns and documents with the Ministry of Corporate Affairs (MCA) to ensure that a company or LLP remains legally compliant under the Companies Act, 2013 and applicable rules.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      { icon: FileBarChart, text: "Filing of financial statements (AOC-4)" },
                      { icon: FileText, text: "Filing of annual return (MGT-7 / MGT-7A)" },
                      { icon: Users, text: "Director KYC (DIR-3 KYC Web filing)" },
                      { icon: BookOpen, text: "Maintenance of statutory registers" },
                      { icon: Calendar, text: "Conducting Board Meetings & AGM" }
                    ].map((item, id) => (
                      <div key={id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm animate-on-scroll-big" style={{ animationDelay: `${id * 100}ms` }}>
                        <item.icon className="h-5 w-5 text-dbiz-teal shrink-0" />
                        <span className="font-bold text-dbiz-navy text-[15.3px]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dbiz-navy rounded-[2.5rem] p-10 text-white mt-12 relative overflow-hidden animate-on-scroll-big">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-dbiz-teal/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                   <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      <Shield className="text-dbiz-teal h-7 w-7" />
                      Importance of MCA Compliance
                   </h3>
                   <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        "Ensures legal compliance under Companies Act",
                        "Avoids penalties, fines, and disqualification",
                        "Maintains active company status with ROC",
                        "Builds credibility with banks and investors",
                        "Ensures transparency and proper governance"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-1" />
                          <p className="font-medium text-blue-50/90 leading-snug">{benefit}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="lg:w-1/3 w-full animate-on-scroll-big">
                <div className="bg-dbiz-navy rounded-[3rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden relative group">
                  {/* Glassmorphism Background Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-dbiz-teal/30 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

                  <div className="p-8 pb-4 relative z-10 border-b border-white/5">
                    <div className="flex items-center gap-2 mb-4">
                       <span className="flex h-2 w-2 rounded-full bg-dbiz-teal animate-pulse"></span>
                       <span className="text-dbiz-teal text-[11px] font-black uppercase tracking-widest">Active Monitoring</span>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">Compliance Advisory</h3>
                    <p className="text-white/60 text-sm mt-2 font-medium">Professional guidance for directors & businesses.</p>
                  </div>

                  <div className="p-8 relative z-10">
                    <div className="space-y-8">
                      <div className="flex gap-5 items-start">
                        <div className="bg-white/5 p-3 rounded-2xl text-dbiz-teal border border-white/10 shrink-0"><Clock className="h-6 w-6" /></div>
                        <div>
                          <p className="font-black text-white text-lg">Strict Deadlines</p>
                          <p className="text-sm text-white/50 leading-relaxed mt-1">
                            Avoid the <span className="text-dbiz-teal font-black">₹100/day</span> penalty with our timely filing support.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5 items-start">
                        <div className="bg-white/5 p-3 rounded-2xl text-dbiz-teal border border-white/10 shrink-0"><History className="h-6 w-6" /></div>
                        <div>
                          <p className="font-black text-white text-lg">Once in 3 Years</p>
                          <p className="text-sm text-white/50 leading-relaxed mt-1">
                            <span className="text-dbiz-teal font-black">DIR-3 KYC</span> Web filing update for directors holding DIN.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5 items-start">
                        <div className="bg-white/5 p-3 rounded-2xl text-dbiz-teal border border-white/10 shrink-0"><Shield className="h-6 w-6" /></div>
                        <div>
                          <p className="font-black text-white text-lg">Legal Safety</p>
                          <p className="text-sm text-white/50 leading-relaxed mt-1">
                            Complete adherence to latest <span className="text-dbiz-teal font-black">Companies Act</span> statutory updates.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <Button 
                        className="w-full bg-dbiz-teal hover:bg-dbiz-teal/90 text-white font-black py-7 rounded-2xl text-xl shadow-[0_15px_30px_rgba(20,184,166,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                        onClick={() => window.open(`tel:${phoneNumber}`)}
                      >
                        <Phone className="h-5 w-5" /> Call Advisor
                      </Button>
                      <p className="text-center text-white/30 text-[10px] uppercase font-black tracking-widest mt-6">
                        Statutory Compliance Guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Eligibility Matrix Section - Compact Version */}
        <section id="applicability" className="py-12 bg-gray-50/50 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-navy text-white text-[11px] font-black tracking-[0.3em] mb-4 uppercase animate-on-scroll-big">
                3. Eligibility Matrix
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-4 tracking-tight animate-on-scroll-big [animation-delay:100ms]">Who Should File MCA Annual Compliance?</h2>
              <p className="text-base text-gray-600 font-medium leading-relaxed animate-on-scroll-big [animation-delay:200ms]">
                Identify the entities required to file statutory returns annually under the Companies Act.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden animate-on-scroll-big">
              <Table>
                <TableHeader className="bg-dbiz-navy">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="py-4 px-8 text-white font-bold text-base uppercase tracking-wider w-1/3">Category</TableHead>
                    <TableHead className="py-4 px-8 text-white font-bold text-base uppercase tracking-wider">Applicability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { cat: "Private Limited Companies", app: "Mandatory annual compliance" },
                    { cat: "One Person Companies (OPC)", app: "Required to file annual returns" },
                    { cat: "Limited Liability Partnerships (LLPs)", app: "Mandatory compliance filing" },
                    { cat: "Public Limited Companies", app: "Compulsory compliance" },
                    { cat: "Section 8 Companies (NGOs)", app: "Required to file annual returns" },
                    { cat: "Dormant Companies", app: "Limited compliance but mandatory filing" },
                    { cat: "Companies without business activity", app: "Must file Nil returns" }
                  ].map((row, i) => (
                    <TableRow key={i} className={`group hover:bg-gray-50 transition-colors ${i % 2 !== 0 ? 'bg-gray-50/50' : ''} animate-on-scroll-big`} style={{ animationDelay: `${i * 50}ms` }}>
                      <TableCell className="py-3 px-8 font-black text-dbiz-navy text-base group-hover:text-dbiz-teal transition-colors">{row.cat}</TableCell>
                      <TableCell className="py-3 px-8 text-gray-700 font-semibold text-[15px] flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-dbiz-teal" />
                        {row.app}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="p-4 bg-dbiz-teal/5 italic text-center text-dbiz-navy/70 text-sm font-bold border-t border-gray-100">
                * All registered companies and LLPs must comply with MCA filing requirements annually, even if there is no business activity.
              </div>
            </div>
          </div>
        </section>

        {/* 4. Form Applicability Table - Compact Version */}
        <section className="py-12 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-4 uppercase animate-on-scroll-big">
                4. Statutory Forms
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-4 tracking-tight animate-on-scroll-big [animation-delay:100ms]">Which MCA Forms Apply to You?</h2>
              <p className="text-base text-gray-600 font-medium animate-on-scroll-big [animation-delay:200ms]">Select the correct ROC forms based on your entity type and specific statutory requirements.</p>
            </div>

            <div className="max-w-4xl mx-auto animate-on-scroll-big">
              <div className="bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden">
                <Table>
                  <TableHeader className="bg-dbiz-navy border-b border-white/10">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="py-4 px-8 text-white font-black text-base w-1/4">MCA Form</TableHead>
                      <TableHead className="py-4 px-8 text-white font-black text-base">Applicable For</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-gray-50">
                    {[
                      { form: "AOC-4", for: "Filing of financial statements" },
                      { form: "MGT-7 / MGT-7A", for: "Annual return filing" },
                      { form: "DIR-3 KYC", for: "Director KYC compliance" },
                      { form: "ADT-1", for: "Auditor appointment" },
                      { form: "INC-20A", for: "Commencement of business" },
                      { form: "DPT-3", for: "Return of deposits" },
                      { form: "PAS-3", for: "Return of allotment" },
                      { form: "DIR-12", for: "Appointment/Resignation of directors" },
                      { form: "MGT-14", for: "Board & Special Resolutions" }
                    ].map((row, i) => (
                      <TableRow key={i} className="hover:bg-dbiz-teal/5 transition-colors animate-on-scroll-big" style={{ animationDelay: `${i * 50}ms` }}>
                        <TableCell className="py-3 px-8 font-black text-dbiz-navy text-lg">{row.form}</TableCell>
                        <TableCell className="py-3 px-8 text-gray-700 font-bold text-[15px]">{row.for}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-8 flex items-center justify-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-200 animate-on-scroll-big max-w-3xl mx-auto">
                 <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                 <p className="text-amber-900 font-bold text-sm leading-tight text-center">
                   Accurate form selection is essential to avoid penalties and statutory notices.
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Compliances Covered Section */}
        <section id="features" className="py-24 bg-dbiz-navy text-white scroll-mt-32 relative overflow-hidden animate-on-scroll-big">
           <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
           <div className="container-custom relative z-10">
              <div className="text-center max-w-4xl mx-auto mb-20">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-dbiz-navy text-[11px] font-black tracking-[0.3em] mb-6 uppercase animate-on-scroll-big">
                  5. Full Coverage
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter animate-on-scroll-big [animation-delay:100ms]">Compliances Covered Under MCA Annual Filing</h2>
                <p className="text-xl text-blue-50/70 font-medium animate-on-scroll-big [animation-delay:200ms]">We handle all aspects of MCA annual compliance with proper classification and adherence to the Companies Act requirements.</p>
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

        {/* 6. Why Choose D BIZ Section - Centered Layout */}
        <section id="advantage" className="py-24 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase animate-on-scroll-big">
                6. Our Advantage
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight animate-on-scroll-big [animation-delay:100ms]">Why Choose D BIZ CONSULTANCY?</h2>
              <div className="space-y-6 text-xl text-gray-700 font-medium animate-on-scroll-big [animation-delay:200ms] max-w-5xl mx-auto">
                 <p>D BIZ CONSULTANCY has experienced professionals who handle MCA compliance with accuracy and efficiency. We ensure proper filing of ROC forms, reducing the risk of penalties, late fees, and legal complications.</p>
                 <p>Our approach focuses on precise documentation, correct filing, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.</p>
              </div>
            </div>

            {/* Core Benefits Grid - Centered 3 Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-on-scroll-big">
               {[
                 "Compliance Analysis & Structuring",
                 "Documentation & Preparation",
                 "Verification & Reconciliation",
                 "ROC Filing & Submission",
                 "Notice Handling & Compliance",
                 "Ongoing Compliance Assistance"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center justify-center gap-4 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
                   <CheckCircle2 className="h-6 w-6 text-dbiz-teal shrink-0" />
                   <span className="font-black text-dbiz-navy text-lg text-center leading-tight">{item}</span>
                 </div>
               ))}
            </div>

            {/* Advanced Support Module - Compact Centered Layout */}
            <div className="max-w-4xl mx-auto animate-on-scroll-big">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal to-blue-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                 <div className="bg-white border-2 border-dbiz-teal/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative z-10">
                    <h3 className="text-2xl font-black text-dbiz-navy mb-8 tracking-tight uppercase text-center">Advanced & Specialized Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                       {[
                         { title: "Belated Filing", icon: History },
                         { title: "Revised ROC Filing", icon: RefreshCw },
                         { title: "Dormant Co. Compliance", icon: HardHat },
                         { title: "Event Based Filings", icon: Zap },
                         { title: "Director Disqualification", icon: Gavel },
                         { title: "ROC Notice Response", icon: MessageCircle }
                       ].map((item, idx) => (
                         <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-dbiz-teal/5 transition-colors border border-gray-50 hover:border-dbiz-teal/20 animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="bg-dbiz-teal/10 p-2.5 rounded-xl text-dbiz-teal"><item.icon className="h-5 w-5" /></div>
                            <span className="font-black text-dbiz-navy text-[15px] leading-tight">{item.title}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Process Section */}
        <section id="process" className="py-24 bg-dbiz-navy scroll-mt-32 relative overflow-hidden animate-on-scroll-big">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal text-white text-[11px] font-black tracking-[0.3em] mb-6 uppercase animate-on-scroll-big">
                8. Workflow
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight animate-on-scroll-big [animation-delay:100ms]">Structured Step-by-Step Process</h2>
              <p className="text-xl text-white/60 font-medium animate-on-scroll-big [animation-delay:200ms]">We follow a structured and systematic approach to ensure accurate filing and smooth corporate management.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { stage: "Stage 1", title: "Client Onboarding", color: "bg-blue-500", items: ["Understand company structure", "Collect financial & statutory records", "Gather previous filing history"] },
                { stage: "Stage 2", title: "Data Validation", color: "bg-purple-500", items: ["Analyze financial statements", "Verify compliance requirements", "Identify missing or incorrect data"] },
                { stage: "Stage 3", title: "Compliance Preparation", color: "bg-indigo-500", items: ["Prepare financial statements", "Draft required ROC forms", "Ensure 100% accuracy"] },
                { stage: "Stage 4", title: "Review & Approval", color: "bg-cyan-500", items: ["Share draft with client", "Make necessary corrections", "Obtain final board approval"] },
                { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File forms on MCA portal", "Ensure timely submission", "Generate SRN & Acknowledgment"] },
                { stage: "Stage 6", title: "Post-Filing Monitoring", color: "bg-emerald-500", items: ["Track filing status", "Handle notices/resubmissions", "Ongoing compliance advisory"] }
              ].map((process, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] relative group hover:bg-white/[0.08] transition-all animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
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
              ))}
            </div>
          </div>
        </section>

        {/* 9. Document Requirements Section */}
        <section id="documents" className="py-24 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll-big">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-[11px] font-black tracking-[0.3em] mb-6 uppercase">
                9. Checklists
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-6 tracking-tight animate-on-scroll-big [animation-delay:100ms]">Structured Document Lists</h2>
              <p className="text-xl text-gray-600 font-medium leading-relaxed animate-on-scroll-big [animation-delay:200ms]">To ensure accurate MCA filing and smooth compliance, the following documents are essential.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: "Basic Details", icon: Building2, items: ["CIN (Company Identification Number)", "PAN of the company / LLP", "Registered office details"] },
                 { title: "Financial Documents", icon: FileBarChart, items: ["Balance Sheet", "Profit & Loss Account", "Auditor's Report", "Director's Report"] },
                 { title: "Compliance Data", icon: ClipboardCheck, items: ["Details of directors & shareholders", "Board meeting & AGM details", "Auditor appointment details"] },
                 { title: "Filing History", icon: History, items: ["Previous MCA filings", "Statutory registers and records", "Shareholding pattern"] },
                 { title: "Special Documents", icon: Zap, items: ["DIR-3 KYC details", "Loan deposit details (DPT-3)", "Event-based filings (DIR-12, PAS-3)"] },
                 { title: "KYC Information", icon: UserPlus, items: ["Director DIN details", "Valid Email & Mobile Verification", "Address Proofs where applicable"] }
               ].map((group, idx) => (
                 <div key={idx} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="flex items-center gap-5 mb-8">
                       <div className="bg-dbiz-teal/10 p-3.5 rounded-2xl text-dbiz-teal group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                         <group.icon className="h-6 w-6" />
                       </div>
                       <h3 className="text-xl font-black text-dbiz-navy tracking-tight">{group.title}</h3>
                    </div>
                    <ul className="space-y-4">
                       {group.items.map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-base">
                           <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 10. Benefits & 11. Deadlines Section */}
        <section className="py-24 bg-gray-50/50 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
              <div className="animate-on-scroll-big">
                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">Benefits of Professional Filing</h2>
                <div className="space-y-4">
                  {[
                    { title: "Accurate Documentation", desc: "Ensures correct preparation of financial statements and annual returns." },
                    { title: "Avoid Severe Risks", desc: "Reduces the risk of heavy fines, late fees, and director disqualification." },
                    { title: "Timely Submissions", desc: "Ensures all ROC filings are completed within prescribed statutory timelines." },
                    { title: "Maintain Co. Status", desc: "Prevents company strike-off and ensures continued legal existence." },
                    { title: "Credibility Growth", desc: "Builds trust with banks, financial institutions, and global investors." },
                    { title: "Complete Adherence", desc: "Ensures 100% compliance with latest Companies Act amendments." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-start gap-6 group hover:border-dbiz-teal transition-all animate-on-scroll-big" style={{ animationDelay: `${idx * 100}ms` }}>
                       <div className="bg-dbiz-teal/10 p-3 rounded-xl text-dbiz-teal shrink-0 transition-transform group-hover:scale-110">
                         <CheckCircle className="h-6 w-6" />
                       </div>
                       <div>
                         <h4 className="font-black text-dbiz-navy text-lg leading-tight mb-1">{benefit.title}</h4>
                         <p className="text-gray-600 text-[15px] font-medium leading-relaxed">{benefit.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="penalties" className="animate-on-scroll-big [animation-delay:200ms]">
                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">MCA Compliance Deadlines</h2>
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-200 overflow-hidden mb-12 animate-on-scroll-big">
                   <Table>
                      <TableHeader className="bg-dbiz-navy">
                         <TableRow className="hover:bg-transparent">
                            <TableHead className="py-6 px-8 text-white font-bold text-lg uppercase w-2/3">Category</TableHead>
                            <TableHead className="py-6 px-8 text-white font-bold text-lg uppercase">Due Date</TableHead>
                         </TableRow>
                      </TableHeader>
                      <TableBody>
                         {[
                           { cat: "AOC-4 (Financial Statements)", due: "Within 30 days of AGM" },
                           { cat: "MGT-7 / 7A (Annual Return)", due: "Within 60 days of AGM" },
                           { cat: "DIR-3 KYC", due: "30th September" },
                           { cat: "DPT-3 (Return of Deposits)", due: "30th June" }
                         ].map((row, i) => (
                           <TableRow key={i} className={`hover:bg-amber-50 group transition-colors ${i % 2 !== 0 ? 'bg-gray-50/50' : ''}`}>
                             <TableCell className="py-6 px-8 font-black text-dbiz-navy text-lg">{row.cat}</TableCell>
                             <TableCell className="py-6 px-8 text-amber-700 font-black text-lg">{row.due}</TableCell>
                           </TableRow>
                         ))}
                      </TableBody>
                   </Table>
                </div>

                <div className="bg-red-50 border-2 border-red-100 rounded-[2.5rem] p-10 relative overflow-hidden animate-on-scroll-big">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full -mr-16 -mt-16 blur-xl"></div>
                   <h3 className="text-2xl font-black text-red-900 mb-6 flex items-center gap-3">
                     <AlertTriangle className="h-7 w-7 text-red-600" />
                     Penalties & Risks
                   </h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                     {[
                       "Heavy per-day late fees",
                       "Disqualification of directors",
                       "Company strike-off by ROC",
                       "Legal notices & actions",
                       "Business operation limits"
                     ].map((point, idx) => (
                       <div key={idx} className="flex items-center gap-3">
                         <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                         <span className="font-bold text-red-800 text-base">{point}</span>
                       </div>
                     ))}
                   </div>
                   <p className="mt-8 text-red-700/80 italic font-bold text-sm">
                     * Timely and accurate MCA compliance is essential to avoid legal consequences.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ Section - Centered Layout */}
        <section id="faqs" className="py-24 scroll-mt-32 animate-on-scroll-big">
          <div className="container-custom">
            {/* Centered Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll-big">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[11px] font-black tracking-[0.3em] mb-6 uppercase animate-on-scroll-big">
                13. Knowledge Base
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight animate-on-scroll-big [animation-delay:100ms]">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed animate-on-scroll-big [animation-delay:200ms]">
                Detailed answers to clarify statutory requirements, filings, and procedures under the Companies Act.
              </p>
            </div>

            {/* Centered Accordion List */}
            <div className="max-w-4xl mx-auto mb-20 animate-on-scroll-big">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "What is MCA Annual Compliance?", a: "MCA Annual Compliance refers to mandatory filings such as financial statements and annual returns with the Ministry of Corporate Affairs to ensure that a company or LLP remains legally compliant under the Companies Act, 2013 and applicable rules." },
                  { q: "Is MCA compliance mandatory for all companies?", a: "Yes, all registered companies and LLPs must comply with annual filing requirements, even if there is no business activity." },
                  { q: "What happens if MCA compliance is not done on time?", a: "Delayed compliance leads to heavy penalties, late fees of ₹100 per day, and possible disqualification of directors or company strike-off." },
                  { q: "What is AOC-4?", a: "AOC-4 is a mandatory e-form used to file the financial statements (Balance Sheet, P&L, etc.) of the company with the Registrar of Companies (ROC)." },
                  { q: "What is MGT-7 / MGT-7A?", a: "MGT-7 (for normal companies) or MGT-7A (for small/OPC) are forms used to file the annual return of a company with details of shareholders and directors." },
                  { q: "What is DIR-3 KYC?", a: "DIR-3 KYC is mandatory for all directors holding a DIN. Directors must update their KYC details annually. Web-based filing is now required once in 3 years as per latest updates." },
                  { q: "Is MCA filing required for inactive companies?", a: "Yes. Inactive companies are not exempt. A company registered as dormant must file Form MSC-3, otherwise regular annual filings are required." },
                  { q: "What is an Annual General Meeting (AGM)?", a: "AGM is a mandatory annual meeting where shareholders approve financial statements and discuss company matters. Annual filings are based on the date of this meeting." },
                  { q: "Can MCA returns be revised after filing?", a: "Yes, in certain cases, corrected filings or resubmissions can be made if errors are identified, often through a specific correction procedure." },
                  { q: "What is the penalty for late ROC filing?", a: "Late filing attracts an additional fee of ₹100 per day. In some cases, there is no maximum limit for this additional fee." },
                  { q: "What happens if a company does not file returns for years?", a: "The company may be struck off from the MCA register by the ROC, and directors can be disqualified for up to 5 years." },
                  { q: "Is auditor appointment mandatory every year?", a: "No. Auditors are generally appointed for a block of 5 years. Form ADT-1 is filed at the time of appointment or reappointment." },
                  { q: "What is DPT-3?", a: "DPT-3 is a return filed for reporting loans, deposits, or internal outstanding amounts received by the company." },
                  { q: "Can directors be disqualified for non-compliance?", a: "Yes, continuous non-compliance (missing filings for 3 consecutive years) leads to automatic disqualification of directors." },
                  { q: "How can I check MCA filing status?", a: "Filing status can be checked on the MCA portal under 'Master Data' or 'My Application' using the company CIN or SRN." },
                  { q: "Is MCA compliance required for LLPs?", a: "Yes, LLPs must file Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) every year." },
                  { q: "What is the role of ROC in compliance?", a: "The Registrar of Companies (ROC) is the body that monitors, regulates, and administers company compliance under the Companies Act." },
                  { q: "Can a struck-off company be revived?", a: "Yes, a struck-off company can be restored through legal procedures by filing an application with the NCLT (National Company Law Tribunal)." },
                  { q: "Is professional help required for MCA compliance?", a: "Highly recommended. Professional assistance ensures accurate preparation of financials and avoids technical filing errors and compliance risks." },
                  { q: "What documents are required for MCA compliance?", a: "Key documents include Financial Statements, Director KYC documents, Statutory meeting minutes, and shareholding details." }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-white border border-gray-100 rounded-[2rem] px-8 overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll-big" style={{ animationDelay: `${index * 50}ms` }}>
                    <AccordionTrigger className="text-left font-black text-dbiz-navy hover:text-dbiz-teal transition-colors py-6 text-xl tracking-tight">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-[17px] leading-relaxed pb-8 pt-0 font-medium">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Horizontal Consultation Banner */}
            <div className="max-w-4xl mx-auto animate-on-scroll-big">
               <div className="bg-dbiz-navy rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-dbiz-teal/20 rounded-full blur-[100px] group-hover:bg-dbiz-teal/30 transition-colors"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]"></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                    <div>
                      <p className="text-3xl md:text-4xl font-black mb-3 leading-tight">Need a Personalized Consultation?</p>
                      <p className="text-blue-50/60 font-medium text-lg">Connect with our statutory experts for clear, direct guidance.</p>
                    </div>
                    <Button 
                     className="w-full md:w-auto px-10 bg-dbiz-teal hover:bg-dbiz-teal/90 text-white font-black py-8 rounded-2xl text-xl shadow-[0_15px_30px_rgba(20,184,166,0.3)] min-w-[240px]"
                     onClick={() => window.open(`https://wa.me/${phoneNumber.replace('+', '')}`, '_blank')}
                    >
                      Chat with Expert
                    </Button>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 14. Final CTA Section - Compact Version */}
        <section className="py-20 relative overflow-hidden bg-dbiz-navy animate-on-scroll-big">
           <div className="absolute inset-0 z-0">
             <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-dbiz-teal/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[140%] bg-blue-600/10 rounded-full blur-[120px] opacity-30"></div>
           </div>
           
           <div className="container-custom relative z-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] p-10 md:p-14 text-center max-w-4xl mx-auto shadow-2xl animate-on-scroll-big">
                 <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-[11px] font-black tracking-widest mb-6 border border-white/10 uppercase animate-on-scroll-big [animation-delay:100ms]">
                    <Zap className="h-4 w-4" /> Final Step
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight animate-on-scroll-big [animation-delay:200ms]">
                   Complete Your MCA Annual Compliance with Experts Today
                 </h2>
                 <p className="text-lg md:text-xl text-blue-50/70 mb-10 max-w-2xl mx-auto font-medium animate-on-scroll-big [animation-delay:300ms]">
                   Avoid penalties, ensure 100% accurate filings, and maintain your company’s legal status with D BIZ CONSULTANCY.
                 </p>
                 <div className="flex flex-wrap justify-center gap-5 animate-on-scroll-big [animation-delay:400ms]">
                    <Button 
                      className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-10 py-7 rounded-[1.5rem] text-xl font-black shadow-2xl transition-all hover:-translate-y-2 flex items-center gap-3"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                       Start Now <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-10 py-7 rounded-[1.5rem] text-xl font-black shadow-2xl transition-all hover:-translate-y-2 flex items-center gap-3"
                      onClick={() => window.open(`tel:${phoneNumber}`)}
                    >
                       Get Support <Phone className="h-5 w-5" />
                    </Button>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MCACompliancePage;