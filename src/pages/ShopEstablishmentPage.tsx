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
import { shopEstablishmentFaq } from "@/data/shopEstablishmentFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

// ── Extracted outside component for React Fast Refresh / HMR stability ──
const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, document verification, and submission of the registration application on the Labour Department portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "2 – 4 Working Days",
    desc: "Initial processing by municipal authority including document validation and internal review.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "3 – 7 Working Days",
    desc: "Registration certificate is issued if all details are correct and no inspection/query issues arise.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Approval (With Query / Delay)",
    duration: "Up to 10 Working Days",
    desc: "Time may increase if authority raises queries, requires corrections, or additional approvals.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];

const TIMELINE_MOBILE = [
  { step: "01", label: "Application Filing",                 duration: "Same Day",             desc: "Collection of business details, document verification, and submission of the registration application on the Labour Department portal.", pill: "bg-blue-50 text-blue-700 border-blue-100" },
  { step: "02", label: "Processing",                         duration: "2 – 4 Working Days",    desc: "Initial processing by municipal authority including document validation and internal review.",                         pill: "bg-blue-100 text-blue-800 border-blue-200" },
  { step: "03", label: "Approval (Normal Case)",              duration: "3 – 7 Working Days",    desc: "Registration certificate is issued if all details are correct and no inspection/query issues arise.",               pill: "bg-blue-200 text-blue-900 border-blue-300" },
  { step: "04", label: "Approval (With Query / Delay)", duration: "Up to 10 Working Days", desc: "Time may increase if authority raises queries, requires corrections, or additional approvals.",                     pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20" },
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

const ShopEstablishmentPage = () => {
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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1440&q=60"
              alt="Shop & Establishment Services Professional Background"
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
                  Fast Registration | Expert Compliance | Complete Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  Shop & Establishment Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete Shop & Establishment registration services. From eligibility assessment to certificate issuance and compliance setup, our experts ensure a smooth, error-free registration process.
                </p>

                <Button
                  onClick={() => handleSectionClick('overview')}
                  className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 mb-10 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                >
                  <ArrowDownCircle className="h-5 w-5" /> Learn More
                </Button>

                {/* Status Detail */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                       <Clock className="w-4 h-4 text-dbiz-teal" />
                       <span>Fast Approval</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <Shield className="w-4 h-4 text-dbiz-teal" />
                       <span>Guaranteed Compliance</span>
                   </div>
                   <div className="flex items-center gap-2">
                       <MessageCircle className="w-4 h-4 text-dbiz-teal" />
                       <span>Expert Guidance</span>
                   </div>
                </div>
              </div>

              {/* Right Content - Hero Sidebar Stats */}
              <div className="hidden md:block md:col-span-4 relative animate-on-scroll [animation-delay:400ms]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-2xl blur-3xl opacity-50"></div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative transition-transform transform hover:scale-[1.02] overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/5 rounded-full blur-3xl"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=60" 
                    alt="Registration Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">3 – 5</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Days (Fast Track)</div>
                    </div>

                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Success Rate</div>
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
                { id: 'eligibility', icon: CheckCircle2, label: 'Eligibility' },
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
                    Shop & Establishment Registration is an official authorization issued by the local authority permitting a business to operate legally within its jurisdiction. It is mandatory for commercial business operations including shops, offices, and service-based establishments.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Governed by the State Shops and Establishments Act, this registration ensures compliance with local health and safety regulations, regulates working hours, and protects employee welfare. It serves as a foundational legal document for opening bank accounts and obtaining further business licenses.
                  </p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why This Registration is Mandatory
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Registration is generally required if your business satisfies these criteria:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Starting a shop, office, or commercial establishment",
                         "Running food, retail, manufacturing, or service business",
                         "Operating within municipal limits",
                         "Required by local authority for specific business types",
                         "Applying for other licenses (GST, FSSAI, etc.)"
                       ].map((point, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                           <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                           <p className="text-[14.875px] font-medium text-gray-700 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>{point}</p>
                         </div>
                       ))}
                    </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-7 rounded-[2rem] border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm animate-on-scroll [animation-delay:400ms]">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Legal Definition</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Section-wise, local municipal laws define the license as legal authorization for:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Mandatory for Commercial Business Operations",
                        "Issued by Local Municipal Authority",
                        "Ensures Health & Safety Compliance",
                        "Required for Shops & Service Businesses"
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

        {/* 2. Features Section */}
        <section id="features" className="py-28 relative overflow-hidden bg-dbiz-navy scroll-mt-32">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-dbiz-teal/10 rounded-full blur-[160px] opacity-80 animate-pulse transition-all duration-[10000ms]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,36,71,0.4)_100%)]"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-dbiz-navy text-sm font-bold tracking-[0.4em] mb-8 border border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                2. FEATURES
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight [animation-delay:100ms]">Key Features & Compliance</h2>
            </div>

            <Carousel 
              opts={{
                align: "start",
                loop: true,
                autoplay: true,
                interval: 3000,
              }}
              className="w-full relative group/carousel"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Shield, title: "Official Legal Authorization", desc: "Grants legal permit to carry out business activities within the local municipal area.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { icon: Clock, title: "Regulation of Work Hours", desc: "Specifies opening and closing timings, working hours, and mandatory holidays.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" },
                  { icon: Building2, title: "Pre-requisite for Bank Account", desc: "Most banks require this registration for opening of a business current bank account.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=50" },
                  { icon: Award, title: "Boosts Business Credibility", desc: "Operate as a legally compliant entity, enhancing trust with customers and vendors.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" }
                ].map((feature, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3 flex animate-on-scroll" style={{ animationDelay: `${idx * 100 + 200}ms` }}>
                    <Card className="border-none shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white overflow-hidden group w-full flex flex-col h-full">
                      <div className="relative h-72 overflow-hidden shrink-0">
                        <CachedImage src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
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

        {/* 3. Eligibility/Mandatory Section */}
        <section id="eligibility" className="py-24 bg-gray-50 scroll-mt-32 border-y border-gray-100">
           <div className="container-custom">
             <div className="animate-on-scroll text-center mb-16">
               <h3 className="text-[38.25px] font-bold text-dbiz-navy mb-4 uppercase tracking-tighter">Registration Mandates</h3>
               <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium max-w-3xl mx-auto">Registration is governed by local municipal bylaws ensuring lawful business operation.</p>
             </div>
             
             <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
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
                      <TableCell className="font-bold text-dbiz-navy text-[14.875px]">New Establishment</TableCell>
                      <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                      <TableCell className="text-gray-600 text-[14.875px]">Starting any shop, office, or commercial setup requires immediate registration.</TableCell>
                    </TableRow>
                    <TableRow className="bg-gray-50/50">
                      <TableCell className="font-bold text-dbiz-navy text-[14.875px]">Operating with Municipal Limits</TableCell>
                      <TableCell className="text-gray-700 font-normal text-[14.875px]">Mandatory</TableCell>
                      <TableCell className="text-gray-600 text-[14.875px]">All businesses operating within municipal area boundaries must comply with local laws.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold text-dbiz-navy text-[14.875px]">Application for Other Licenses</TableCell>
                      <TableCell className="text-gray-700 font-normal text-[14.875px]">Required</TableCell>
                      <TableCell className="text-gray-600 text-[14.875px]">A valid Shop registration/Trade license is essential for applying for GST or FSSAI registration.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
             </div>
           </div>
        </section>

        {/* 4. Documents Section */}
        <section id="documents" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                5. DOCUMENTATION REQUIREMENTS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Structured Document Lists</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group animate-on-scroll flex flex-col">
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Individual / Proprietor</h3>
                  <ul className="space-y-5">
                    {["Aadhaar Card of applicant", "Passport-sized photograph", "Business address proof", "Details of business activity"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group animate-on-scroll flex flex-col">
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Company / LLP</h3>
                  <ul className="space-y-5">
                    {["Certificate of Incorporation", "PAN Card of Company / LLP", "MOA & AOA / LLP Agreement", "Directors’ / Partners’ KYC documents"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group animate-on-scroll flex flex-col">
                <div className="p-10 flex-grow">
                  <h3 className="font-black text-dbiz-navy text-2xl mb-8 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Registered Office</h3>
                  <ul className="space-y-5">
                    {["Rent Agreement + NOC from owner", "Latest Electricity Bill", "Ownership proof (if property is owned)"].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-bold text-lg">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll">
              <h3 className="text-xl font-bold text-dbiz-navy mb-6">Additional Documents (If Applicable)</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Trade-specific approvals (food, mfg, etc.)",
                  "Layout plan of premises",
                  "Fire safety certificate (for certain businesses)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <Sparkles className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Process Section */}
        <section id="process" className="py-24 scroll-mt-32 bg-dbiz-navy relative text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20">
                    PROCESS
                 </div>
                 <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">How the Registration Works</h2>
            </div>

            <div className="max-w-5xl mx-auto relative py-8">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full"></div>
              
              {[
                { step: "1", title: "Information Collection", desc: "Our team collects all business details, addresses, and owner KYC documents for verification." },
                { step: "2", title: "Document Verification", desc: "Complete verification of submitted proofs to ensure compliance with municipal standards." },
                { step: "3", title: "Online Application Filing", desc: "Preparation and submission of the registration form on the official Labour Department/Municipal portal." },
                { step: "4", title: "Fee Payment", desc: "Payment of the government license fee based on establishment type and employee count." },
                { step: "5", title: "Department Processing", desc: "Municipal authority reviews the application and validates document digital uploads." },
                { step: "6", title: "Inspection (If Mandatory)", desc: "Physical verification of the commercial premises may be conducted by a local officer." },
                { step: "7", title: "License Certificate Issuance", desc: "Post approval, the official registration certificate is issued digitally, valid typically for 1 to 5 years." }
              ].map((item, index) => {
                const isOdd = index % 2 === 0;
                return (
                  <div key={index} className="hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-8 mt-12 animate-on-scroll">
                    {isOdd ? (
                      <div className="text-right pr-4">
                        <h3 className="text-xl font-bold mb-2">Step {item.step}: {item.title}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    ) : <div></div>}
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold text-xl shadow-lg relative z-10">
                      {item.step}
                    </div>
                    {!isOdd ? (
                      <div className="text-left pl-4">
                        <h3 className="text-xl font-bold mb-2">Step {item.step}: {item.title}</h3>
                        <p className="text-gray-300">{item.desc}</p>
                      </div>
                    ) : <div></div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline & Delivery */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <h3 className="text-[38.25px] font-bold text-dbiz-navy uppercase tracking-tighter text-center mb-16">Timeline & Delivery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {TIMELINE_DESKTOP.map((item, i) => (
                <div key={i} className="uiverse-timeline-card animate-on-scroll">
                  <div className="uiverse-timeline-card-content">
                    <div className="card-duration">{item.duration}</div>
                    <h4 className="card-title">{item.label}</h4>
                    <p className="card-para">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                <div className="three-d-card">
                   <div className="card-wrapper">
                      <div className="card-face front">
                         <h4 className="card-title">Fast Track Approval</h4>
                      </div>
                      <div className="card-face back">
                         <div className="card-duration">3 – 5 Working Days</div>
                         <p className="card-description">Timeframe with no inspections and complete documentation.</p>
                      </div>
                   </div>
                </div>
                <div className="three-d-card">
                   <div className="card-wrapper">
                      <div className="card-face front">
                         <h4 className="card-title">Delayed Cases</h4>
                      </div>
                      <div className="card-face back">
                         <div className="card-duration">Up to 10 Days</div>
                         <p className="card-description">Case of inspection requirements or authority queries.</p>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* Renewal & Penalties */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
           <div className="container-custom max-w-4xl mx-auto text-center">
              <div className="bg-amber-50 border border-amber-200 p-8 rounded-[2rem]">
                 <h4 className="text-2xl font-bold text-amber-900 mb-4 flex items-center justify-center gap-2">
                    <AlertTriangle className="h-6 w-6" /> Renewal & Compliance
                 </h4>
                 <p className="text-amber-800 font-medium text-lg leading-relaxed">
                    Note: Registration is generally valid for 1 year and must be renewed annually. Some local bodies allow registration for up to 5 years. Timely renewal and compliance help avoid heavy penalties and ensure uninterrupted business operations.
                 </p>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight">FAQs on Shop & Establishment Registration</h2>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Commonly asked questions regarding validity, mandatory requirements, and the renewal process.
               </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {shopEstablishmentFaq.map((faq, idx) => (
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

export default ShopEstablishmentPage;
