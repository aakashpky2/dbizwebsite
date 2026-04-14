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
  UtensilsCrossed,
  ShoppingCart,
  ChefHat
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
import { fssaiFaq } from "@/data/fssaiFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, document verification, and submission of FSSAI application on FoSCoS portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "2 – 5 Working Days",
    desc: "System processing along with document validation and basic scrutiny by FSSAI authority.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "3 – 7 Working Days",
    desc: "FSSAI License/Registration is issued if all details are correct and no clarification is required.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Query / Inspection",
    duration: "Up to 15 Days",
    desc: "Time may increase if FSSAI officers raise queries or conducts physical inspection of premises.",
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

const FSSAIRegistrationPage = () => {
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
              src="https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=1440&q=60"
              alt="FSSAI License Registration Services Professional Background"
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
                  Fast FSSAI Registration | Food Safety Compliance | Expert Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  FSSAI License Registration Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete FSSAI License services. From eligibility assessment to license approval and compliance setup, our experts ensure a smooth, error-free registration process.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                  >
                    Apply Now
                  </Button>
                </div>

                {/* Status Detail */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>3 – 7 Days</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>100% Accurate Filing</span>
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
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=60" 
                    alt="FSSAI Professional Registration Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">3-7</div>
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
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 animate-on-scroll [animation-delay:100ms] tracking-tight">
                  What is FSSAI License?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    FSSAI License is a statutory requirement under the Food Safety and Standards Act, 2006 for businesses engaged in the manufacturing, processing, storage, distribution, or sale of food products in India. It establishes the business as a legally recognized Food Business Operator (FBO) under the food safety regulatory framework.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Upon registration, a unique 14-digit FSSAI License Number is allotted, which must be displayed on food packaging, invoices, and business premises. This ensures traceability and compliance with food safety standards.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    FSSAI registration ensures that food products meet prescribed safety, hygiene, and quality standards, thereby protecting consumer health and promoting fair trade practices in the food industry.
                  </p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why FSSAI License is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal">FSSAI registration is not just a legal formality — it plays a critical role in food business operations:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Ensures compliance with food safety and hygiene standards",
                         "Builds trust with customers and regulatory authorities",
                         "Mandatory for operating any food-related business",
                         "Enables selling through online platforms like Swiggy, Zomato, Amazon, etc.",
                         "Supports business expansion and licensing approvals"
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
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Definition as per the FSSAI</h3>
                    <p className="text-gray-600 text-[15px] mb-7 leading-relaxed font-medium">
                      Section-wise, the Food Safety and Standards Act defines FSSAI Registration/License as the mandatory approval required for businesses involved in manufacturing, processing, storage, distribution, or sale of food products in India.
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Mandatory for Food Business Operators (FBOs)",
                        "Required Above Prescribed Turnover Limits",
                        "Compulsory for Restaurants, Cloud Kitchens & Food Manufacturers",
                        "Ensures Compliance with Food Safety Standards",
                        "Enables Legal Production, Sale & Distribution of Food Products",
                        "Authorizes Use of FSSAI License Number on Food Packaging",
                        "Required for Online Food Sellers & Delivery Platforms"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal mr-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-bold text-[15px] tracking-tight leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">FSSAI License is governed by the following laws which ensure food quality and consumer protection:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "FSS Act, 2006", desc: "Food Safety and Standards Act governs food safety and licensing in India" },
                  { title: "FSSAI (Authority)", desc: "The regulatory body that defines and issues food licenses" },
                  { title: "Safety Regulations", desc: "Define hygiene, safety, and compliance standards for food" }
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Key Features of FSSAI License</h2>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full relative group/carousel">
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Building2, title: "Legal Recognition (FBO)", desc: "Establishes the business as a legally authorized food operator under the FSS Act, ensuring legal compliance.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=50" },
                  { icon: FileBarChart, title: "Unique 14-Digit Number", desc: "A singular license number issued post-registration, mandatory for labels, packaging, and invoices.", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=500&q=50" },
                  { icon: UtensilsCrossed, title: "Mandatory for Food Business", desc: "Covers manufacturers, traders, restaurants, cloud kitchens, and distributors across India.", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=50" },
                  { icon: Shield, title: "Ensures Safety & Hygiene", desc: "FSSAI certification ensures adherence to safety, hygiene, and quality standards in food handling.", image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=500&q=50" },
                  { icon: ChefHat, title: "Applicable to All Sectors", desc: "Used by home kitchens, bakeries, hotels, catering services, and online food sellers.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=60" },
                  { icon: Layers, title: "Three-Type Structure", desc: "Basic Registration (Small), State License (Medium), and Central License (Large/Interstate).", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" },
                  { icon: ShoppingCart, title: "Online Business Enablement", desc: "Mandatory for listing on delivery platforms like Swiggy, Zomato, Amazon, and other e-commerce sites.", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=500&q=50" },
                  { icon: Users, title: "Enhances Business Credibility", desc: "Builds absolute trust among customers and vendors, significantly improving overall brand value.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=50" },
                  { icon: Search, title: "Compliance Monitoring", desc: "Subject to inspection by food authorities to ensure ongoing adherence to hygiene standards.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: TrendingUp, title: "Supports Business Scaling", desc: "Required for other licenses, loans, and approvals, helping food brands scale regionally.", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=50" }
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
                    3. BENEFITS OF FSSAI LICENSE
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">Categorized Advantages</h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl">
                    <CachedImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=50" alt="Food Business Success" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Scale with Trust</div>
                      <p className="text-sm opacity-90">Hygiene and compliance standards for food empires.</p>
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
                        <li>• Reduced risk of legal penalties</li>
                        <li>• Improved credibility and trust</li>
                        <li>• Better vendor relationships</li>
                        <li>• Eligibility for food contracts</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Avoids heavy penalty costs</li>
                        <li>• Improves business stability</li>
                        <li>• Smoother business operations</li>
                        <li>• Bank and financial trust</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Expansion into multiple locations</li>
                        <li>• Access to Swiggy, Zomato, etc.</li>
                        <li>• Increased scalability of business</li>
                        <li>• Opportunity to build a brand</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When FSSAI License is Required</h3>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="text-white py-4 font-bold">Condition</TableHead>
                          <TableHead className="text-white py-4 font-bold">Requirement</TableHead>
                          <TableHead className="text-white py-4 font-bold">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Small Food Business</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Basic Registration</TableCell>
                          <TableCell>For turnover up to ₹12 lakhs (home kitchens, petty vendors, small shops).</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Medium Food Business</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">State License</TableCell>
                          <TableCell>For turnover between ₹12 lakhs and ₹20 crores operating in one state.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Large Food Business</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Central License</TableCell>
                          <TableCell>For turnover above ₹20 crores or operating in multiple states.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Food Manufacturing</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Mandatory</TableCell>
                          <TableCell>Any business manufacturing, processing, or packaging food.</TableCell>
                        </TableRow>
                         <TableRow>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Online Food Selling</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Mandatory</TableCell>
                          <TableCell>Required for platforms like Swiggy, Zomato, Amazon, etc.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <h4 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16">Types of FSSAI License</h4>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-12">
                    <Table>
                      <TableHeader className="bg-dbiz-navy">
                        <TableRow>
                          <TableHead className="text-white py-4 font-bold">Type</TableHead>
                          <TableHead className="text-white py-4 font-bold">Suitable For</TableHead>
                          <TableHead className="text-white py-4 font-bold">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Basic Registration</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Small businesses</TableCell>
                          <TableCell>For small-scale food businesses with limited turnover and operations.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">State License</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Medium businesses</TableCell>
                          <TableCell>For businesses operating within a state with moderate turnover.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Central License</TableCell>
                          <TableCell className="font-medium text-dbiz-navy text-[14.875px]">Large businesses</TableCell>
                          <TableCell>For large-scale businesses, exporters, importers, and interstate operators.</TableCell>
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                5. DOCUMENTATION REQUIREMENTS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Structured Document Lists</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4 md:px-0">
               {/* 1. Individual / Proprietor */}
               <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=600&q=50" 
                      alt="Individual Documentation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-6">
                      <div className="bg-dbiz-teal/20 backdrop-blur-md p-2.5 rounded-xl border border-white/20">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="font-black text-dbiz-navy text-xl mb-6 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Individual / Proprietor</h3>
                    <ul className="space-y-4">
                      {["PAN Card", "Aadhaar Card", "Photograph", "Bank account details", "Address proof"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold group/list text-[15px]">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               {/* 2. Company / LLP */}
               <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll flex flex-col h-full" style={{ animationDelay: '100ms' }}>
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=50" 
                      alt="Corporate Documentation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-6">
                      <div className="bg-dbiz-teal/20 backdrop-blur-md p-2.5 rounded-xl border border-white/20">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="font-black text-dbiz-navy text-xl mb-6 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Company / LLP</h3>
                    <ul className="space-y-4">
                      {["Certificate of Inc.", "PAN of Company/LLP", "MOA & AOA / Agreement", "Directors’ KYC docs", "Authorization letter"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold group/list text-[15px]">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               {/* 3. Business Premises */}
               <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll flex flex-col h-full" style={{ animationDelay: '200ms' }}>
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50" 
                      alt="Office Premises Proof" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-6">
                      <div className="bg-dbiz-teal/20 backdrop-blur-md p-2.5 rounded-xl border border-white/20">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="font-black text-dbiz-navy text-xl mb-6 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">Business Premises</h3>
                    <ul className="space-y-4">
                      {["Rent Agreement + NOC", "Utility Bill (Recent)", "Ownership proof"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold group/list text-[15px]">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               {/* 4. FSSAI Specific */}
               <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-on-scroll flex flex-col h-full" style={{ animationDelay: '300ms' }}>
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&w=600&q=60" 
                      alt="FSSAI Food Safety Documentation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/30 to-transparent flex items-end p-6">
                      <div className="bg-dbiz-teal/20 backdrop-blur-md p-2.5 rounded-xl border border-white/20">
                        <FileCheck className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="font-black text-dbiz-navy text-xl mb-6 uppercase tracking-tighter leading-tight group-hover:text-dbiz-teal transition-colors">FSSAI Specific</h3>
                    <ul className="space-y-4">
                      {["Food category details", "Product list handled", "Premises layout map", "Equipment details", "Water test report"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 font-bold group/list text-[15px]">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal group-hover/list:scale-125 transition-transform shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-xs font-black tracking-widest mb-6 border border-dbiz-teal/20 uppercase">
                  <Sparkles className="h-3 w-3" /> Important
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-dbiz-navy leading-tight">Documentation Guidelines</h3>
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
                      { title: "Document Match", desc: "Details must match across all documents and application for consistency." },
                      { title: "Address Validity", desc: "Address proof must be valid and consistent with the physical location." },
                      { title: "Bill Recency", desc: "Utility bills (electricity, water, etc.) should be within the last 2 months." },
                      { title: "Category Definition", desc: "Food category and nature of business must be clearly defined for correct licensing." }
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
            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section id="process" className="py-24 scroll-mt-32 relative overflow-hidden border-y border-[#c8e6e6]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1440&q=40')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }}>
          <div className="absolute inset-0 bg-dbiz-navy/80 backdrop-blur-[2px] z-0"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20 tracking-wider">
                6. FSSAI LICENSE PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Step-by-Step Detailed Guide</h2>
            </div>

            <div className="max-w-5xl mx-auto relative py-8">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full z-0"></div>

              {[
                { step: "1", title: "Data Collection & Verification", desc: "Begins with collecting business and KYC details (PAN, Aadhaar, address info). Complete validation prevents rejection." },
                { step: "2", title: "Selection of License Type", desc: "Based on turnover, the correct category is chosen: Basic, State, or Central License." },
                { step: "3", title: "Filing on Foscos Portal", desc: "Application is filed on FSSAI Foscos portal including food categories, promoter info, and premises details." },
                { step: "4", title: "Document Upload & Verification", desc: "Supporting docs like ID/address proof are uploaded. Manufacturing units may need layout/water reports." },
                { step: "5", title: "Application Submission", desc: "Digital verification via OTP confirms submission and generates an application number for tracking." },
                { step: "6", title: "Verification / Inspection", desc: "Authority reviews the file. Premises inspection or query for clarification may be conducted." },
                { step: "7", title: "FSSAI License Issuance", desc: "Once approved, a 14-digit FSSAI number and certificate are issued for display at business locations." }
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

                <div className="mt-16">
                  <div className="flex items-center gap-3 mb-12">
                    <div className="h-px bg-gray-100 flex-1"></div>
                    <div className="px-6 py-2 rounded-full border border-gray-100 bg-white shadow-sm">
                      <p className="text-[10px] font-black tracking-[0.4em] text-dbiz-navy/40 uppercase">Quick Summary</p>
                    </div>
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
                          <div className="card-duration text-dbiz-teal">3 – 5 Days</div>
                          <p className="card-description text-blue-50/80 font-medium">
                            3 – 5 working days (with complete documents)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Standard Timeline */}
                    <div className="three-d-card animate-on-scroll" style={{ animationDelay: '200ms' }}>
                      <div className="card-wrapper">
                        {/* Front Face */}
                        <div className="card-face front bg-white shadow-sm border border-gray-100">
                          <div className="flex flex-col items-center justify-center h-full">
                            <Clock className="h-16 w-16 text-amber-500 mb-6" />
                            <h4 className="card-title text-dbiz-navy text-2xl font-black uppercase tracking-tighter">Standard Timeline</h4>
                          </div>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back bg-dbiz-navy">
                          <div className="card-duration text-dbiz-teal">5 – 7 Days</div>
                          <p className="card-description text-blue-50/80 font-medium">
                            5 – 7 working days normally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Post-License Compliance */}
              <div className="pt-16 border-t border-gray-100 animate-on-scroll">
                <div className="mb-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
                    8. POST-LICENSE COMPLIANCE
                  </div>
                  <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">Mandatory Requirements</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center mb-10 py-6">
                  {[
                    { type: "Annual Return", freq: "Yearly (Form D1)" },
                    { type: "Half-Yearly", freq: "Certain Categories" },
                    { type: "Renewal", freq: "Every 1–5 Years" }
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
                      <div className="compliance-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          "Display FSSAI License Number at business premises",
                          "Print FSSAI number on food packaging & invoices",
                          "Maintain hygiene and food safety standards",
                          "Keep proper records of production and sales",
                          "Follow food safety guidelines and storage standards",
                          "Ensure timely renewal of license before expiry"
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
                      <h4 className="consultancy-heading">Statutory Penalties</h4>
                      <div className="penalty-grid grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                        {[
                          { title: "Operating without License", desc: "Heavy fine/Closure" },
                          { title: "Non-compliance with safety", desc: "Notices & fines" },
                          { title: "Mislabeling or incorrect info", desc: "Product recall" },
                          { title: "Hygiene failure", desc: "Suspension/Cancellation" }
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

              {/* 9. Why DBIZ */}
              <div className="pt-20 border-t border-gray-100 animate-on-scroll">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4 uppercase">
                    9. Why Choose DBIZ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight">Why DBIZ CONSULTANCY for FSSAI?</h2>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    Obtaining an FSSAI License is a crucial step for food business. Classification, documentation, and compliance with safety laws require expert handling. Even minor errors cause rejection. We simplify it for you—from classification to approval.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                   {/* Left Card: What DBIZ Handles */}
                   <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl">
                      <h3 className="text-xl font-bold text-dbiz-navy mb-6 flex items-center gap-3 border-b border-dbiz-teal/10 pb-4">
                         <CheckCircle2 className="h-6 w-6 text-dbiz-teal" /> What DBIZ Handles
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "Assessment of business activity and FSSAI eligibility",
                          "Expert document validation and pre-upload review",
                          "Selection of correct license type (Basic, State, or Central)",
                          "FSSAI application filing on the FoSCoS portal",
                          "Preparation and submission of mandatory safety forms",
                          "Coordination with food safety authorities for approval",
                          "Continuous status tracking and follow-up support",
                          "Handling of department queries and clarifications",
                          "License issuance and soft copy delivery post-approval",
                          "Guidance on post-registration food safety compliance"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <CheckCircle className="h-4 w-4 text-dbiz-teal mt-1 shrink-0" />
                             <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
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
                          "Business identity and address proof (PAN / Electric Bill)",
                          "Details of the food products or activity",
                          "Rental or ownership proof for the business premises",
                          "Photograph of the applicant or proprietor",
                          "List of equipment and building layout (if applicable)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <ArrowRight className="h-4 w-4 text-gray-500 mt-1 shrink-0" />
                             <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                <div className="mt-20 text-center max-w-4xl mx-auto border-t border-gray-100 pt-16 animate-on-scroll">
                   <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
                   <p className="text-[19.125px] text-gray-700 leading-relaxed font-medium">
                     With strong experience in food business registrations and compliance, DBIZ CONSULTANCY is a trusted partner for food entrepreneurs. We handle the entire FSSAI process—so you can focus on building your brand with confidence.
                   </p>
                </div>
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
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight">FAQs on FSSAI License</h2>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-8">Last updated: March 2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {fssaiFaq.map((faq, idx) => (
                  <AccordionItem key={faq.value} value={faq.value} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll" style={{ animationDelay: `${idx * 50 + 300}ms` }}>
                    <AccordionTrigger className="text-[17px] font-bold text-dbiz-navy hover:text-dbiz-teal hover:no-underline py-6 text-left">
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

const XCircle = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
);

export default FSSAIRegistrationPage;