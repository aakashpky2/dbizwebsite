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
  Video,
  Key,
  Lock,
  Stamp,
  FileCheck
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
import { dscFaq } from "@/data/dscFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phoneNumber = "+918075273408";

const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, document verification, and submission of the DSC application.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "Same Day / Few Hours",
    desc: "System processing along with Aadhaar OTP verification and initial validation of documents.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "Same Day",
    desc: "DSC is issued if all details are correct and video verification is successfully completed.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Delayed Case Approval",
    duration: "1 – 2 Working Days",
    desc: "Time may increase if there are mismatches, failed verification, or additional clarification required.",
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

const DigitalSignaturePage = () => {
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
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1440&q=60"
              alt="Digital Signature Services Professional Background"
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
                  Fast DSC Issuance | Secure Digital Signing | Complete Support
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll [animation-delay:100ms]">
                  Digital Signature Certificate (DSC) Services
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete Digital Signature Certificate (DSC) services. From application to issuance and installation, our experts ensure a smooth, secure, and hassle-free process.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-[#0b1d33] hover:bg-[#112a4d] text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll [animation-delay:300ms]"
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-dbiz-navy px-8 py-6 rounded-xl text-lg font-semibold animate-on-scroll [animation-delay:300ms]"
                    onClick={() => window.open(`tel:${phoneNumber}`)}
                  >
                    Get Free Consultation
                  </Button>
                </div>

                {/* Status Detail */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/80 text-sm font-medium animate-on-scroll [animation-delay:300ms]">
                   <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dbiz-teal" />
                      <span>Same Day / 1 Day</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-dbiz-teal" />
                      <span>100% Secure Issuance</span>
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
                    src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=600&q=60" 
                    alt="DSC Professional Services" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg border border-white/20 mb-6"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">Same</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Day Issuance</div>
                    </div>

                    <div className="bg-[#0b1d33] border border-white/20 p-5 rounded-2xl text-center shadow-xl group hover:bg-[#112a4d] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-1">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-[#00e5ff] font-bold">Secure</div>
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
                  What is Digital Signature Certificate (DSC)?
                </h2>

                <div className="prose prose-lg max-w-none animate-on-scroll [animation-delay:200ms]">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    A Digital Signature Certificate (DSC) is a secure digital key issued by authorized Certifying Authorities that is used to sign electronic documents and filings. It serves as the digital equivalent of a physical signature and ensures the authenticity, integrity, and security of digital transactions.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Once issued, the DSC is used for signing documents on government portals such as MCA, Income Tax, GST, and e-tender platforms. It enables individuals and businesses to complete transactions online in a legally valid and secure manner.
                  </p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-[2rem] p-8 md:p-10 mt-10 animate-on-scroll [animation-delay:300ms]">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                       <CheckCircle className="text-dbiz-teal h-6 w-6" /> 
                       Why DSC is Important
                    </h3>
                    <p className="text-[17px] text-gray-600 mb-6 font-normal">DSC is not just a digital tool — it plays a critical role in modern business operations:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                       {[
                         "Ensures secure and authenticated digital signing",
                         "Mandatory for MCA filings and company incorporation",
                         "Required for Income Tax and GST filings",
                         "Prevents data tampering and fraud",
                         "Enables paperless and faster transactions"
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
                    <h3 className="text-xl font-bold mb-6 text-dbiz-navy tracking-tight">Minimum Requirements</h3>
                    <p className="text-gray-600 text-[17px] mb-7 leading-relaxed font-medium">
                      To apply for a Digital Signature Certificate, the following basic requirements must be fulfilled:
                    </p>
                    <ul className="space-y-5">
                      {[
                        "PAN Card (Mandatory for identity verification)",
                        "Aadhaar / Address Proof (Required for authentication)",
                        "Mobile & Email (Required for OTP verification)",
                        "Passport-sized photograph",
                        "Video Verification (Required for final approval)"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal mr-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-normal text-[17px] tracking-tight leading-snug">
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
              <p className="text-dbiz-navy/80 mb-12 text-[19.125px] font-medium text-center max-w-3xl mx-auto">DSC is governed by the following laws which ensure secure digital authentication and legal validity:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { title: "IT Act, 2000", desc: "Governs digital signatures and electronic records in India" },
                  { title: "CCA", desc: "Controller of Certifying Authorities (CCA) regulates DSC issuing authorities" },
                  { title: "Certifying Authorities", desc: "Issuing authorities (CA) responsible for issuing DSCs" }
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Key Features of Digital Signature (DSC)</h2>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full relative group/carousel">
              <CarouselContent className="-ml-4 md:-ml-6">
                {[
                  { icon: Shield, title: "Legal Validity", desc: "Digital signatures are valid and enforceable under the IT Act, 2000, giving electronic signatures legal recognition.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
                  { icon: Lock, title: "Secure Digital Authentication", desc: "Ensures the signer's identity is verified, preventing unauthorized access and ensuring safe transactions.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=50" },
                  { icon: FileCheck, title: "Data Integrity Protection", desc: "Digitally signed documents cannot be altered without detection, ensuring complete data integrity.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=500&q=50" },
                  { icon: Building2, title: "Mandatory for Govt Filings", desc: "Required for MCA filings, company incorporation, Income Tax returns (for companies), and GST submissions.", image: "https://images.unsplash.com/photo-1524143899173-04e9c704fd34?auto=format&fit=crop&w=500&q=50" },
                  { icon: Layers, title: "Multiple Types Available", desc: "Choose from different classes based on usage, including Class 3 DSC for e-tendering and MCA filings.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=50" },
                  { icon: Stamp, title: "E-Tendering & Procurement", desc: "Essential for participating in government online bidding processes and e-procurement systems.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
                  { icon: Zap, title: "Enables Paperless Transactions", desc: "Eliminates the need for physical paperwork, allowing businesses to sign documents digitally and instantly.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
                  { icon: RefreshCw, title: "Easy Portal Integration", desc: "Can be used seamlessly across MCA, Income Tax, GST, and e-tender platforms.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
                  { icon: Users, title: "Enhances Business Credibility", desc: "Improves trust and professionalism in digital transactions with clients and vendors.", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=50" },
                  { icon: Clock, title: "Time-Saving Efficiency", desc: "Reduces processing time for approvals and filings by enabling instant, legally valid digital signing.", image: "https://images.unsplash.com/photo-1533227268408-a774ddde4471?auto=format&fit=crop&w=500&q=50" }
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
                    3. BENEFITS OF DSC
                  </div>
                  <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight leading-tight">Categorized Advantages</h2>
                  <div className="hidden xl:block relative group rounded-3xl overflow-hidden shadow-2xl">
                    <CachedImage src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=50" alt="Secure Digital Authentication" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/90 via-dbiz-navy/20 to-transparent z-10"></div>
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="font-bold text-2xl mb-1">Secure & Paperless</div>
                      <p className="text-sm opacity-90">Digital equivalents for modern business efficiency.</p>
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
                        <li>• Legal validity of digital documents</li>
                        <li>• Improved credibility and trust</li>
                        <li>• Secure business communications</li>
                        <li>• Eligibility for government tenders</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Financial Advantages</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Reduced cost of paperwork</li>
                        <li>• Faster processing saves time</li>
                        <li>• Minimizes risk of fraud</li>
                        <li>• No courier or printing expenses</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Zap className="text-blue-600 h-6 w-6" />
                      </div>
                      <h4 className="text-[21.25px] font-bold text-dbiz-navy mb-3">Growth Opportunities</h4>
                      <ul className="space-y-2 text-[15px] text-gray-600">
                        <li>• Participation in e-tenders</li>
                        <li>• Access to digital government services</li>
                        <li>• Supports digital-only operations</li>
                        <li>• Improved business scalability</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3">4. When DSC is Required</h3>
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
                          <TableCell className="font-bold">MCA Filings</TableCell>
                          <TableCell>Mandatory</TableCell>
                          <TableCell>Required for company incorporation, annual filings, and other MCA submissions.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold">Income Tax Filing</TableCell>
                          <TableCell>Mandatory (Cases)</TableCell>
                          <TableCell>Required for companies, LLPs, and audit cases for filing Income Tax Returns.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold">GST Filings</TableCell>
                          <TableCell>Mandatory (Entities)</TableCell>
                          <TableCell>Required for GST registration and return filing for companies/LLPs.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold">E-Tendering</TableCell>
                          <TableCell>Mandatory</TableCell>
                          <TableCell>Required for participating in government bidding and e-procurement.</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <h4 className="text-2xl font-bold text-dbiz-navy mb-8 border-b border-gray-100 pb-3 mt-16">Types of DSC</h4>
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
                          <TableCell className="font-bold text-dbiz-teal">Class 3 (Individual)</TableCell>
                          <TableCell>Directors / Partner</TableCell>
                          <TableCell>Used for MCA, Income Tax, GST, and general digital signing.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold text-dbiz-teal">Class 3 (Org)</TableCell>
                          <TableCell>Companies / LLPs</TableCell>
                          <TableCell>Used for organizational filings and authorized signatories.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-bold text-dbiz-teal">DGFT DSC</TableCell>
                          <TableCell>Importers/Exporters</TableCell>
                          <TableCell>Required for DGFT customs and related trade filings.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-bold text-dbiz-teal">E-Tender DSC</TableCell>
                          <TableCell>Contractors</TableCell>
                          <TableCell>Used specifically for government tenders and e-procurement.</TableCell>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 animate-on-scroll">
                <div className="bg-dbiz-teal/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-dbiz-teal" />
                </div>
                <h3 className="font-black text-dbiz-navy text-xl mb-6 uppercase tracking-tight leading-tight">Individual / Proprietor</h3>
                <ul className="space-y-4">
                  {["PAN Card (Mandatory)", "Aadhaar Card", "Passport-sized photograph", "Email ID and mobile number", "Address proof (Valid ID)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 font-bold text-[17px]">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 animate-on-scroll" style={{ animationDelay: '100ms' }}>
                <div className="bg-dbiz-teal/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-dbiz-teal" />
                </div>
                <h3 className="font-black text-dbiz-navy text-xl mb-6 uppercase tracking-tight leading-tight">Company / LLP</h3>
                <ul className="space-y-4">
                  {["Certificate of Incorporation", "PAN of Company / LLP", "MOA & AOA / LLP Agreement", "Directors’ KYC documents", "Authorization letter"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 font-bold text-[17px]">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dbiz-navy rounded-3xl p-10 shadow-xl text-white animate-on-scroll" style={{ animationDelay: '200ms' }}>
                <div className="bg-dbiz-teal/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-black text-white text-xl mb-6 uppercase tracking-tight leading-tight">Support Notice</h3>
                <p className="text-white/80 leading-relaxed font-bold mb-6">
                  DSC is person-oriented, so address proof must be applicant-specific. Video verification and Aadhaar-based eKYC are mandatory for final approval.
                </p>
                <div className="pt-6 border-t border-white/10">
                   <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-dbiz-teal" />
                      <span className="font-bold underline">Call for Support</span>
                   </div>
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
                  <thead className="bg-dbiz-navy">
                    <tr>
                      <th className="px-6 py-4 text-xs font-black text-white uppercase tracking-wider w-1/3">Task / Guideline</th>
                      <th className="px-6 py-4 text-xs font-black text-white uppercase tracking-wider">Filing Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      { title: "Detail Consistency", desc: "PAN details must match exactly with the application. Mismatches lead to rejection." },
                      { title: "Verification Contact", desc: "Mobile number and email must be active for mandatory OTP and video verification." },
                      { title: "Authentication eKYC", desc: "Aadhaar-based eKYC or video verification is mandatory for successful DSC issuance." },
                      { title: "Photo Clarity", desc: "Applicant's photograph must be clear, recent, and in passport-sized format." }
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
        <section id="process" className="py-24 scroll-mt-32 relative overflow-hidden border-y border-[#c8e6e6]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1440&q=40')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "local" }}>
          <div className="absolute inset-0 bg-dbiz-navy/80 backdrop-blur-[2px] z-0"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-4 border border-dbiz-teal/20 tracking-wider">
                6. DSC ISSUANCE PROCESS
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Step-by-Step Detailed Guide</h2>
            </div>

            <div className="max-w-5xl mx-auto relative py-8">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent hidden md:block rounded-full z-0"></div>

              {[
                { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting required KYC details such as PAN, Aadhaar, photograph, and contact info. We verify all details for consistency." },
                { step: "2", title: "Selection of DSC Type & Class", desc: "Appropriate type (Individual/Org) and Class (mostly Class 3) is selected based on your usage across government portals." },
                { step: "3", title: "Application Filing", desc: "Online filing of DSC application with the Certifying Authority, including uploading all supporting documents." },
                { step: "4", title: "OTP / Aadhaar Authentication", desc: "Verification via Aadhaar-based OTP or mobile/email authentication ensures secure identity validation." },
                { step: "5", title: "Mandatory Video Verification", desc: "A lightning-fast video verification is conducted where the applicant confirms their identity and document details." },
                { step: "6", title: "Approval & Processing", desc: "The Certifying Authority reviews the submission. Once perfectly approved, the digital file is generated." },
                { step: "7", title: "DSC Issuance & Installation", desc: "The DSC is issued and installed in a secure USB token or system, ready for immediate use across portal filings." }
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

        {/* 7. Timeline & Delivery Section */}
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

                <div className="mt-12 bg-gray-50/50 p-10 rounded-3xl border border-gray-100 animate-on-scroll">
                   <div className="grid md:grid-cols-2 gap-10">
                      <div className="flex items-center gap-6">
                         <div className="bg-dbiz-teal/10 p-4 rounded-2xl">
                            <Zap className="h-8 w-8 text-dbiz-teal" />
                         </div>
                         <div>
                            <h4 className="font-bold text-dbiz-navy text-xl">Fast Track Issuance</h4>
                            <p className="text-gray-500 font-medium">Same day release with complete documents and successful verification.</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="bg-amber-50 p-4 rounded-2xl">
                            <Clock className="h-8 w-8 text-amber-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-dbiz-navy text-xl">Standard Timeline</h4>
                            <p className="text-gray-500 font-medium">Within 24 hours of successful video verification steps.</p>
                         </div>
                      </div>
                   </div>
                   <div className="mt-10 flex items-center justify-center gap-3">
                      <Sparkles className="h-4 w-4 text-dbiz-teal shrink-0" />
                      <p className="text-sm text-gray-400 font-bold italic">Note: Accurate KYC and successful video session ensure instant approval.</p>
                   </div>
                </div>
              </div>

              {/* 8. Post-Usage Compliance */}
              <div className="pt-16 border-t border-gray-100 animate-on-scroll">
                <div className="mb-10 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-widest uppercase mb-4 border border-blue-100">
                    8. RENEWAL & VALIDITY
                  </div>
                  <h3 className="text-3xl font-extrabold text-dbiz-navy mb-4 tracking-tight leading-tight">Post-Usage Compliance</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center mb-10 py-6">
                  {[
                    { type: "DSC Validity", freq: "1 / 2 / 3 Years" },
                    { type: "Renewal", freq: "Before Expiry" },
                    { type: "Compliance", freq: "Usage Support" }
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

                <div className="grid md:grid-cols-2 gap-10">
                   <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                      <h4 className="text-xl font-bold text-dbiz-navy mb-8 border-b border-gray-200 pb-4">Compliance Requirements</h4>
                      <ul className="space-y-4">
                         {[
                           "Use DSC only for authorized official purposes",
                           "Keep DSC token/password secure at all times",
                           "Ensure timely renewal before certificate expiry",
                           "Update DSC on MCA, Income Tax, GST portals regularly",
                           "Revoke DSC immediately in case of loss or misuse"
                         ].map((req, i) => (
                           <li key={i} className="flex gap-3 text-sm font-bold text-gray-700 leading-relaxed">
                              <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" /> {req}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="bg-red-50 p-10 rounded-[2.5rem] border border-red-100">
                      <h4 className="text-xl font-bold text-red-900 mb-8 border-b border-red-200 pb-4 flex items-center gap-2">
                         <AlertTriangle className="h-6 w-6 text-red-600" /> Risks and Penalties
                      </h4>
                      <ul className="space-y-4">
                         {[
                           "Expired DSC blocks all MCA, GST, and Income Tax filings",
                           "Misuse leads to legal consequences under IT Act",
                           "Loss of token risks unauthorized digital usage",
                           "Incorrect details cause rejection of filings"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm font-bold text-red-800 leading-relaxed">
                              <XCircle className="h-5 w-5 text-red-600 shrink-0" /> {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
              </div>

              {/* 9. Why DBIZ */}
              <div className="pt-20 border-t border-gray-100 animate-on-scroll">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4 uppercase">
                    9. Why Choose D BIZ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight font-sans">Why DBIZ CONSULTANCY for DSC Services?</h2>
                  <p className="text-base text-gray-600 font-medium leading-relaxed">
                    Obtaining a Digital Signature Certificate (DSC) is essential for modern compliance. While appearing simple, it involves critical KYC and authentication steps. We make it fast, secure, and hassle-free by handling everything from application to final installation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                   <div className="bg-dbiz-navy rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      <h4 className="text-xl font-bold text-dbiz-teal mb-8 uppercase tracking-widest">What DBIZ Handles</h4>
                      <ul className="space-y-4">
                         {[
                           "Selection of correct DSC type and class",
                           "Complete application filing with the authority",
                           "KYC verification and document validation",
                           "Aadhaar OTP and video verification support",
                           "Error-free submission for quick issuance",
                           "DSC installation and configuration support",
                           "Guidance on usage for MCA, GST, and tenders",
                           "Renewal and life-cycle management"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm font-bold text-blue-50/90 leading-relaxed">
                              <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <div className="bg-gray-50 border border-gray-100 rounded-[3rem] p-12 shadow-sm">
                      <h4 className="text-xl font-bold text-dbiz-navy mb-8 uppercase tracking-widest">What You Provide</h4>
                      <ul className="space-y-4">
                         {[
                           "PAN Card and Aadhaar details",
                           "Mobile number and email ID for OTP",
                           "Passport-sized photograph",
                           "Basic personal or business details",
                           "Availability for short video verification"
                         ].map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm font-bold text-gray-700 leading-relaxed">
                              <ArrowRight className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>

                <div className="bg-dbiz-navy rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/20 to-transparent"></div>
                   <h3 className="text-3xl font-black mb-8 relative z-10">Our Commitment</h3>
                   <p className="max-w-3xl mx-auto text-[19.125px] font-medium leading-relaxed opacity-90 relative z-10">
                     With a strong track record in business registrations and compliance, DBIZ CONSULTANCY is a trusted partner for professionals and companies. We take care of the entire DSC process—so you can focus on building your legacy with confidence.
                   </p>
                </div>
              </div>

              {/* 10. FAQs Section */}
              <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32">
                <div className="container-custom">
                  <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold tracking-wider mb-6 border border-dbiz-teal/20 uppercase">
                      FAQs
                    </div>
                    <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6 tracking-tight">FAQs on Digital Signature Certificate</h2>
                    <p className="text-sm text-gray-400 font-black tracking-widest mb-4">Last updated: March 2026</p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {dscFaq.map((faq, idx) => (
                        <AccordionItem key={faq.value} value={faq.value} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden animate-on-scroll" style={{ animationDelay: `${idx * 50 + 100}ms` }}>
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

export default DigitalSignaturePage;