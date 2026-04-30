import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
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
  Search,
  Award,
  Scale,
  Stamp,
  Globe,
  Briefcase,
  TrendingUp,
  Gavel,
  User,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import CachedImage from "@/components/CachedImage";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrademarkTypeCard from "@/components/TrademarkTypeCard";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const phoneNumber = "+918075273408";

const ContactOptions = () => {
  return <div className="grid grid-cols-2 gap-3 p-2">
    <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors">
      <Phone size={16} />
      <span>Call</span>
    </a>
    <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
      <MessageCircle size={16} />
      <span>WhatsApp</span>
    </a>
  </div>;
};

const TrademarkRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const publishDate = "2026-03-01T10:00:00+05:30";
  const modifiedDate = "2026-04-23T12:45:00+05:30";

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

  const seoTitle = location === undefined
    ? "Trademark Registration Services in India | Brand Registration | D BIZ CONSULTANCY"
    : `Trademark Registration in ${cityName} | Brand Name Registration in ${cityName}`;

  const seoDescription = location === undefined
    ? "Register your trademark in India with D Biz Consultancy Private Limited. Secure your brand name, logo, and identity with expert support and hassle-free registration."
    : `Trademark Registration in ${cityName}. Secure your brand name and logo with D Biz Consultancy. Expert support for brand registration in ${cityName}.`;

  const seoUrl = location ? `/trademark-registration/${location}` : "/trademark-registration";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "Trademark Registration", item: "/trademark-registration" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: `/trademark-registration/${location}` });
  }

  if (location && !isValidLocation) {
    return <NotFound />;
  }

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  const isActive = (section: string) => activeSection === section;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        url={seoUrl}
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        breadcrumbs={breadcrumbs.map(b => ({ name: b.name, item: b.item }))}
        keywords={`trademark registration ${cityName}, brand registration ${cityName}, register logo india, intellectual property`}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <Breadcrumbs items={breadcrumbs.map(b => ({ name: b.name, path: b.item, current: b.item === seoUrl }))} />

        {/* Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 md:py-40 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center select-none pointer-events-none"
            style={{ backgroundImage: "url('/dbiz-uploads/growth-v2.png')" }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Intellectual Property Services
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Trademark Registration Services{location ? ` in ${cityName}` : ""}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Register your trademark in India with D Biz Consultancy Private Limited. Secure your brand name, logo, and identity with expert support and hassle-free registration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        Start Registration
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  <Button size="lg" variant="outline" onClick={() => handleSectionClick('process')} className="border-white text-slate-50 bg-dbiz-navy">
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'legal', icon: Scale, label: 'Legal Framework' },
                { id: 'definition', icon: FileText, label: 'What is a Trademark?' },
                { id: 'features', icon: Shield, label: 'Types & Importance' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'classes', icon: Search, label: 'Classes & Timeline' },
                { id: 'risks', icon: AlertTriangle, label: 'Challenges' },
                { id: 'why-us', icon: Award, label: 'Why Choose Us' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[14px] font-medium transition-all duration-300 ${isActive(item.id)
                    ? 'bg-dbiz-teal text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                    }`}
                  onClick={(e) => { e.preventDefault(); handleSectionClick(item.id); }}
                >
                  <item.icon className={`mr-1.5 h-3.5 w-3.5 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="overview" className="py-20 bg-[#F6F8FB] scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
              <div className="md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#1E4DB7] text-xs font-bold tracking-widest mb-6">
                  INTRODUCTION
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B2C5F] mb-6 leading-tight">
                  What is a Trademark?<br />
                  Trademark Registration – Brand Protection
                </h2>
                <div className="text-gray-700 leading-relaxed mb-8 text-lg">
                  <p>A trademark represents a business’s identity, reputation, and trust in the market. Trademark Registration provides legal ownership and exclusive rights over a brand name, logo, or symbol, protecting it from unauthorized use or imitation. Governed by the Trade Marks Act, 1999, it helps prevent infringement, ensures brand security, and strengthens legal recognition. At D Biz Consultancy Private Limited, we offer end-to-end trademark registration services to help businesses protect and establish their brand with confidence.</p>
                </div>

              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,44,95,0.1)] group">
                  <div className="absolute inset-0 bg-dbiz-navy/5 mix-blend-multiply transition-colors group-hover:bg-transparent duration-500 z-10"></div>
                  <CachedImage
                    src="/dbiz-uploads/trademark-intro-v2.jpg"
                    alt="Trademark Registration Branding and Growth"
                    aspectRatio={1.2}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework & Definition Section */}
        <section className="py-24 bg-gray-50/50">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
              {/* Left Column: What is a Trademark? */}
              <div id="definition" className="flex-1 text-left scroll-mt-32 pt-4">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-8">3. What is a Trademark?</h2>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 font-medium">
                  <li>A trademark is a unique sign or identifier that represents a business, brand, product, or service in the market.</li>
                  <li>It helps distinguish your goods or services from those of other businesses and creates a separate identity for your brand.</li>
                  <li>
                    A trademark can include:
                    <ul className="list-[circle] pl-8 mt-3 space-y-2 text-gray-600">
                      <li>Brand name</li>
                      <li>Logo or symbol</li>
                      <li>Tagline or slogan</li>
                      <li>Product or service name</li>
                      <li>Website or app name</li>
                    </ul>
                  </li>
                  <li>It plays an important role in building brand recognition, customer trust, and business goodwill.</li>
                  <li>Trademark registration gives the owner legal protection against unauthorized use, imitation, or misuse of the mark.</li>
                  <li>It also strengthens the brand’s legal identity and helps in protecting its value in the market.</li>
                </ul>
              </div>

              {/* Right Column: Legal Framework */}
              <div id="legal" className="lg:w-[500px] xl:w-[600px] shrink-0 scroll-mt-32">
                <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 text-left w-full h-full flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold font-sans text-dbiz-navy mb-4">2. Trademark Registration – Legal Framework</h2>
                  
                  <h3 className="text-base font-bold text-dbiz-teal mb-2">Definition under the Trade Marks Act, 1999</h3>
                  <p className="text-gray-700 mb-4 font-medium leading-relaxed text-sm">
                    The Trade Marks Act, 1999 provides legal protection to trademarks and grants exclusive rights to the registered proprietor to use the mark in relation to specified goods or services.
                  </p>

                  <h3 className="text-base font-bold text-dbiz-teal mb-3">Key Legal Provisions Include:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Protection is granted for distinctive marks used in business",
                      "Registration provides statutory rights and legal recognition",
                      "Rights are applicable to specific goods/services (class-based system)",
                      "Owner gets exclusive rights to use the mark",
                      "Trademark is valid for 10 years and renewable indefinitely"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start group">
                        <div className="w-5 h-5 rounded-full bg-dbiz-teal/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-dbiz-teal transition-colors duration-300">
                          <CheckCircle className="w-3.5 h-3.5 text-dbiz-teal group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-base font-bold text-dbiz-teal mb-2">Registration Authority</h3>
                  <p className="text-gray-700 mb-6 font-medium leading-relaxed text-sm">
                    The process is administered by the Trade Marks Registry, which examines applications, handles objections, publishes marks, and issues registration certificates.
                  </p>

                  <div className="mt-auto bg-dbiz-navy/5 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-dbiz-navy/10 relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-dbiz-teal/10 rounded-full blur-lg"></div>
                    <div className="relative z-10">
                      <h4 className="text-base font-bold text-dbiz-navy mb-1">Need expert guidance?</h4>
                      <p className="text-gray-600 font-medium text-xs">Our team is ready to help you with the registration process.</p>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button size="sm" className="bg-dbiz-navy hover:bg-dbiz-teal text-white shrink-0 shadow-md shadow-dbiz-navy/20 font-bold rounded-lg transition-all duration-300 hover:scale-105 relative z-10">
                          Contact Our Team <ArrowRight className="ml-1 w-3.5 h-3.5" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-0">
                        <ContactOptions />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types & Importance Section */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Classification & Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Types of Trademarks & Importance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Legally protecting your brand identity is a fundamental step for every serious business.</p>
            </div>
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Types of Trademarks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 mb-16">
              {[
                { title: "Word Mark", desc: "Protects the brand name in its textual form. Gives wider protection covering the name regardless of font, style, or colour." },
                { title: "Logo / Device Mark", desc: "Protects the visual representation of the brand, such as a logo, symbol, stylized text, or design." },
                { title: "Service Mark", desc: "Protects marks used for services instead of physical goods. Used by consultants, educational institutions, IT companies." },
                { title: "Collective Mark", desc: "Used by members of an association or group to indicate membership or a shared identity and common standard." },
                { title: "Certification Mark", desc: "Indicates that goods or services meet certain standards of quality, origin, material, or performance." },
                { title: "Shape Mark", desc: "Protects the unique three-dimensional shape of a product or its packaging where the shape itself is distinctive." }
              ].map((item, idx) => (
                <TrademarkTypeCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
            <h3 className="text-3xl font-black text-dbiz-navy mb-8 text-center uppercase tracking-tighter">5. Why Trademark Registration is Important</h3>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed font-medium px-4">
              Trademark registration is important because it protects the brand identity of a business and gives the owner exclusive legal rights over its use. It helps prevent unauthorized copying, imitation, or misuse of the brand and reduces the risk of confusion in the market. A registered trademark also strengthens the credibility of the business and creates a more professional and trustworthy image.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Shield, title: "Exclusive Ownership over the Brand", desc: "Gives the owner exclusive legal rights to use the trademark for specified goods or services." },
                { icon: AlertTriangle, title: "Prevents Unauthorized Use and Copying", desc: "Protects the brand from imitation, misuse, or duplication by others." },
                { icon: Award, title: "Builds Trust and Credibility", desc: "Enhances customer confidence and strengthens brand value in the market." },
                { icon: Globe, title: "Enables Business Expansion and Franchising", desc: "Supports licensing, franchising, and brand growth with legal protection." },
                { icon: Scale, title: "Creates a Valuable Intangible Asset", desc: "Adds commercial value to the business and can be licensed, assigned, or transferred." },
                { icon: Briefcase, title: "Provides Strong Legal Protection", desc: "Gives the owner the right to take legal action against infringement and enforce brand rights effectively." }
              ].map((item, idx) => (
                <div key={idx} className="uiverse-importance-card">
                  <div className="uiverse-importance-icon-wrapper">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-black text-dbiz-navy mb-8 tracking-tighter uppercase">6. Documents Required for Trademark Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium px-4">
                The documents required for trademark registration vary depending on whether the applicant is an individual, proprietor, company, or LLP. Proper documentation is important to ensure accurate filing, avoid objections, and support claims such as prior use of the trademark.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Individuals / Proprietors */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-dbiz-teal/5 rounded-full -z-10"></div>
                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <CachedImage
                      src="/dbiz-uploads/individual-docs-header.png"
                      alt="Individual Documentation"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-dbiz-navy/60 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white relative z-10">For Individuals / Proprietors</h3>
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Personal Identity & Business Proof</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "PAN Card", desc: "Used as identity proof of the applicant and for official verification." },
                      { label: "Aadhaar / Address Proof", desc: "Required to confirm the address details of the applicant." },
                      { label: "Logo (if applicable)", desc: "A clear image of the logo or mark to be registered, usually in JPEG format. If it is a word mark, the name itself is sufficient." },
                      { label: "Business Proof (if claiming prior use)", desc: "Documents such as invoices, GST registration, shop license, or any proof showing that the trademark is already being used in business." }
                    ].map((doc, idx) => (
                      <div key={idx} className="flex gap-4 items-start group/item">
                        <div className="w-10 h-10 rounded-xl bg-dbiz-teal/10 flex items-center justify-center shrink-0 group-hover/item:bg-dbiz-teal group-hover/item:text-white transition-colors">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-bold text-dbiz-navy text-lg block mb-1">{doc.label}</span>
                          <span className="text-sm text-gray-500 leading-relaxed font-medium">{doc.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Companies / LLP */}
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dbiz-navy/5 rounded-full -z-10"></div>
                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <CachedImage
                      src="/dbiz-uploads/company-docs-header.png"
                      alt="Company Documentation"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-dbiz-navy/60 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white relative z-10">For Companies / LLP</h3>
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Entity Registration & Authorization</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "Company PAN", desc: "Identity proof of the company or LLP." },
                      { label: "Certificate of Incorporation", desc: "Proof of legal existence and registration of the entity (CoI or LLP Agreement)." },
                      { label: "Authorization Letter", desc: "Authorizes a director, partner, or representative to file and handle the trademark application (Board Resolution)." },
                      { label: "Logo (if applicable)", desc: "Copy of the trademark/logo to be registered." },
                      { label: "Business Proof (if applicable)", desc: "Documents such as invoices, GST returns, or agreements showing the use of the trademark, if prior use is claimed." }
                    ].map((doc, idx) => (
                      <div key={idx} className="flex gap-4 items-start group/item">
                        <div className="w-10 h-10 rounded-xl bg-dbiz-teal/10 flex items-center justify-center shrink-0 group-hover/item:bg-dbiz-teal group-hover/item:text-white transition-colors">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-bold text-dbiz-navy text-lg block mb-1">{doc.label}</span>
                          <span className="text-sm text-gray-500 leading-relaxed font-medium">{doc.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gray-50 rounded-[2.5rem] border border-dashed border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-dbiz-teal"></div>
              <p className="text-center text-dbiz-navy text-lg font-bold leading-relaxed max-w-5xl mx-auto">
                Proper and accurate documentation plays a crucial role in the trademark registration process. It helps in smooth application processing, reduces the chances of objections, and strengthens the legal validity of the trademark claim.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-bold font-sans text-dbiz-navy mb-8">7. Step-by-Step Trademark Registration Process</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">We implement a highly structured 10-step approach to ensure maximum compliance, accuracy, and long-term brand security.</p>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { 
                    s: "01", 
                    t: "Preparation of Application", 
                    d: "The process begins with collecting the complete details of the applicant and the trademark. At this stage, the nature of the mark (brand name, logo, slogan, device mark) is identified. The relevant class of goods or services is determined, and the required documents are prepared to ensure the application is filed correctly without defects.",
                    img: "/dbiz-uploads/tm-step1.png"
                  },
                  { 
                    s: "02", 
                    t: "Filing of Trademark Application", 
                    d: "The application is filed in the prescribed form, generally Form TM-A, along with the government fee and supporting documents. It contains the applicant's details, representation of the mark, classes, description of goods/services, and user claim details where applicable.",
                    img: "/dbiz-uploads/tm-step2.png"
                  },
                  { 
                    s: "03", 
                    t: "Application Number Generation", 
                    d: "After successful filing, an official application number is generated. This acts as an acknowledgment and is used for tracking the status throughout the registration process, enabling the applicant to refer to it in all future communications.",
                    img: "/dbiz-uploads/tm-step3.png"
                  },
                  { 
                    s: "04", 
                    t: "Examination of Application", 
                    d: "The Registry reviews the mark, class, and documents to ensure compliance with legal requirements. If the mark is found descriptive, non-distinctive, or similar to an existing mark, the Registry may raise objections in the examination report.",
                    img: "/dbiz-uploads/tm-step4.png"
                  },
                  { 
                    s: "05", 
                    t: "Reply to Examination Report", 
                    d: "If objections are raised, the applicant must submit a formal reply within 30 days. The reply must address objections and provide required explanations or legal submissions. Failure to respond within the prescribed period can affect the progress of the application.",
                    img: "/dbiz-uploads/tm-step5.png"
                  },
                  { 
                    s: "06", 
                    t: "Hearing, if Required", 
                    d: "If the Registry is not satisfied with the reply, a hearing may be scheduled. The applicant is given an opportunity to clarify objections and present further submissions. The matter is then considered for acceptance or refusal based on the response.",
                    img: "/dbiz-uploads/tm-step6.png"
                  },
                  { 
                    s: "07", 
                    t: "Publication in Journal", 
                    d: "If accepted, the trademark is published in the Trade Marks Journal. This gives third parties 4 months to file an opposition if they believe the registration may affect their rights. Publication is the final stage before registration.",
                    img: "/dbiz-uploads/tm-step7.png"
                  },
                  { 
                    s: "08", 
                    t: "Opposition, if Any", 
                    d: "If a third party opposes, the applicant must file a counter-statement. The registration process will move forward only if no opposition is filed or if the opposition is decided in favor of the applicant.",
                    img: "/dbiz-uploads/tm-step8.png"
                  },
                  { 
                    s: "09", 
                    t: "Approval and Registration", 
                    d: "Once the application has cleared examination, publication, and opposition stages, the mark is approved for registration. The details of the mark are then entered in the official Register of Trade Marks.",
                    img: "/dbiz-uploads/tm-step9.png"
                  },
                  { 
                    s: "10", 
                    t: "Issue of Registration Certificate", 
                    d: "The Trademark Registration Certificate serves as official proof of registration, granting statutory rights over the mark. It is valid for 10 years and may be renewed indefinitely for further periods of 10 years each.",
                    img: "/dbiz-uploads/tm-step10.png"
                  }
                ].map((item, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2 p-4">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-6 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full">
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <CachedImage
                          src={item.img}
                          alt={item.t}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-white/80 group-hover:bg-white/60 transition-colors duration-500"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/5 rounded-bl-[5rem] z-0 group-hover:bg-dbiz-teal/10 transition-colors"></div>
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-dbiz-navy text-white flex items-center justify-center font-black text-2xl group-hover:bg-dbiz-teal transition-all duration-500 shadow-xl shadow-dbiz-navy/20">
                        {item.s}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-black text-dbiz-navy mb-4 uppercase tracking-tighter group-hover:text-dbiz-teal transition-colors">{item.t}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm font-semibold">{item.d}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="relative static translate-y-0 bg-white border-dbiz-navy/10 text-dbiz-navy hover:bg-dbiz-navy hover:text-white transition-all shadow-md" />
                <CarouselNext className="relative static translate-y-0 bg-white border-dbiz-navy/10 text-dbiz-navy hover:bg-dbiz-navy hover:text-white transition-all shadow-md" />
              </div>
            </Carousel>
            

          </div>
        </section>

        {/* Classes & Timeline Section */}
        <section id="classes" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Side Image */}
              <div className="lg:w-[45%] shrink-0">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group min-h-[500px]">
                  <video 
                    src="https://v1.pinimg.com/videos/iht/expMp4/0c/24/44/0c2444073f97ca37892ec777b6b7a1b5_360w.mp4"
                    poster="https://i.pinimg.com/videos/thumbnails/originals/0c/24/44/0c2444073f97ca37892ec777b6b7a1b5.0000000.jpg"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-dbiz-navy/10 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dbiz-navy/90 to-transparent z-20">
                    <h3 className="text-white text-2xl font-bold mb-2">Expert Classification</h3>
                    <p className="text-gray-200 font-medium">Ensuring your brand is protected in the right categories for the long term.</p>
                  </div>
                </div>
              </div>

              {/* Right Side Writings */}
              <div className="lg:w-[55%] flex flex-col">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-4">8. Trademark Classes</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Trademark registration is divided into 45 classes based on the nature of goods and services. This classification helps ensure that a trademark is protected in the specific business category in which it is used.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Briefcase className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">Class 1–34</span>
                      <span className="text-gray-600 font-medium">Goods</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Briefcase className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">Class 35–45</span>
                      <span className="text-gray-600 font-medium">Services</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">Examples:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      { c: "Class 35", d: "Business services, consultancy, advertising" },
                      { c: "Class 41", d: "Education, training, coaching" },
                      { c: "Class 25", d: "Clothing, garments, footwear" }
                    ].map((ex, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <CheckCircle className="text-dbiz-teal w-5 h-5 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-dbiz-navy font-bold block">{ex.c}</strong>
                          <span className="text-gray-600 font-medium">{ex.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl">
                    <div className="flex gap-4 items-start">
                      <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-amber-900 leading-relaxed font-semibold">
                        Choosing the correct class is very important, as trademark protection is limited to the class or classes selected in the application.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Validity Full Width */}
            <div className="mt-24">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-12 text-center">9. Timeline & Validity</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-[1400px] mx-auto px-4">
                {[
                  { v: "Now", u: "Filing", t: "Application Filing", d: "Same day submission" },
                  { v: "1-3", u: "Months", t: "Examination Stage", d: "Usually 1 to 3 months" },
                  { v: "6-12", u: "Months", t: "Registration Completion", d: "Usually 6 to 12 months, if no objection or opposition is raised" },
                  { v: "Alert", u: "Case", t: "If Objection / Hearing / Opposition Arises", d: "The timeline may extend further depending on the case" },
                  { v: "10", u: "Years", t: "Validity of Registered Trademark", d: "10 years from the date of application" },
                  { v: "∞", u: "Renewal", t: "Renewal", d: "Renewable indefinitely for further periods of 10 years each" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center hover:shadow-xl hover:border-dbiz-teal/20 transition-all duration-300 group">
                    <div className="bg-dbiz-teal/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-dbiz-teal group-hover:scale-110 transition-all duration-300">
                      <span className="text-dbiz-teal font-black text-sm group-hover:text-white">{item.v}</span>
                    </div>
                    <p className="text-sm font-bold text-dbiz-navy uppercase tracking-wider mb-1">{item.u}</p>
                    <p className="text-xs font-bold text-dbiz-teal mb-3">{item.t}</p>
                    <p className="text-[11px] leading-relaxed text-gray-500 font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trademark Symbols Section */}
        <section id="symbols" className="py-24 bg-gray-50 scroll-mt-32 overflow-hidden">
          <div className="container-custom relative">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-16 text-center">10. Trademark Symbols</h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="uiverse-symbol-container">
                <div className="uiverse-symbol-box">
                  <div className="symbol-title">™</div>
                  <div>
                    <strong>Unregistered (TM)</strong>
                    <p>
                      Used after filing the trademark application to indicate that the mark is being used to distinguish goods or services, even before official registration.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="uiverse-symbol-container">
                <div className="uiverse-symbol-box">
                  <div className="symbol-title">®</div>
                  <div>
                    <strong>Registered (R)</strong>
                    <p>
                      Can only be used after the trademark has been successfully registered. It provides public notice of ownership and full legal protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="mt-16 flex items-center justify-center gap-3 text-gray-600 font-bold italic">
              <ShieldCheck className="w-5 h-5 text-dbiz-teal" />
              <span>These symbols indicate the legal status of the trademark and strengthen brand protection.</span>
            </div>
            </div>
          </div>
        </section>

        {/* Trademark Rights Section */}
        <section id="rights" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-6">11. Trademark Rights and Protection</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Trademark registration gives the owner important legal rights and protection over the registered brand. It helps secure the mark as a valuable business asset and strengthens the legal position of the owner in the market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  t: "Exclusive Right to Use the Mark", 
                  d: "The registered owner gets the exclusive legal right to use the trademark in relation to the goods or services for which it is registered.",
                  icon: Shield
                },
                { 
                  t: "Right to Take Legal Action Against Infringement", 
                  d: "Registration allows the owner to take legal action against any person using an identical or deceptively similar mark without permission.",
                  icon: Gavel
                },
                { 
                  t: "Protection Across Registered Classes", 
                  d: "Trademark protection applies to the specific class or classes in which the mark is registered, ensuring legal rights within that business category.",
                  icon: Scale
                },
                { 
                  t: "Ability to License, Sell, or Transfer the Trademark", 
                  d: "A registered trademark is an intangible asset that can be licensed, assigned, sold, or transferred for commercial benefit.",
                  icon: Briefcase
                },
                { 
                  t: "Strengthens Brand Identity and Market Position", 
                  d: "It enhances customer trust, protects goodwill, and gives the business a stronger identity and competitive position in the market.",
                  icon: Award
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-dbiz-teal/20 transition-all duration-300 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-dbiz-teal/10 flex items-center justify-center mb-6 group-hover:bg-dbiz-teal group-hover:rotate-12 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-dbiz-teal group-hover:text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-dbiz-navy mb-4 leading-tight">{item.t}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Challenges Section */}
        <section id="challenges" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-6">12. Common Challenges and Risks</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Trademark registration may involve certain challenges and risks if the application is not properly planned, filed, or followed up. Careful review and correct filing are important to avoid objections, delays, or rejection.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              <div className="space-y-4">
                {[
                  { t: "Similar or Existing Trademarks", d: "If the proposed mark is identical or similar to an already registered or pending trademark, it may face objection or refusal." },
                  { t: "Incorrect Class Selection", d: "Choosing the wrong class may lead to weak protection or rejection, as trademark rights are limited to the selected goods or services category." },
                  { t: "Lack of Uniqueness", d: "Marks that are too generic, descriptive, or non-distinctive may not qualify for registration." },
                  { t: "Delay in Replying to Objections", d: "Failure to respond within the prescribed time can negatively affect the application or even lead to abandonment." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(180,83,9,0.05)] transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <strong className="text-dbiz-navy block text-lg mb-1 font-bold leading-tight">{item.t}</strong>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { t: "Weak Documentation", d: "Incomplete or incorrect documents may result in delays, objections, or procedural issues." },
                  { t: "Non-Use of Trademark", d: "If a registered trademark is not used for a continuous period, it may become vulnerable to cancellation." },
                  { t: "Online and International Infringement", d: "Even after registration, misuse of the mark through digital platforms or in other jurisdictions may still create practical challenges." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(180,83,9,0.05)] transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <strong className="text-dbiz-navy block text-lg mb-1 font-bold leading-tight">{item.t}</strong>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-8">13. Why Choose D BIZ CONSULTANCY for Trademark Registration?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Protecting a brand requires more than simply filing a trademark application. Trademark registration involves proper search, correct class selection, careful preparation of documents, accurate filing, and timely follow-up with the authorities. Any mistake, mismatch, or incomplete submission may lead to objections, delay, or rejection.
                </p>
                <p className="text-lg text-black leading-relaxed font-medium">
                  D BIZ CONSULTANCY offers complete support to make the trademark registration process smooth, accurate, and professionally managed. We assist clients from the initial stage of evaluating the brand up to the final stage of registration, helping ensure that business identity and brand value are protected without unnecessary complications.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-2xl md:text-3xl font-bold text-dbiz-navy mb-12 text-center">
                How We Support You
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    t: "Initial Review",
                    d: "Pre-Filing Assistance",
                    items: ["Trademark search", "Risk analysis", "Brand improvement guidance", "Class identification"],
                  },
                  {
                    t: "Documentation",
                    d: "Filing Support",
                    items: ["Application preparation", "Document verification", "Accurate filing", "Official submission"],
                  },
                  {
                    t: "Follow-Up",
                    d: "Objection Handling",
                    items: ["Status tracking", "Objection responses", "Department follow-up", "Hearing coordination"],
                  },
                  {
                    t: "Post-Registration",
                    d: "Assistance",
                    items: ["Trademark renewal", "Assignment/Transfer", "Brand protection advisory", "Ongoing compliance"],
                  }
                ].map((cat, idx) => (
                  <div key={idx} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 p-10 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group">
                    <h4 className="text-2xl font-bold text-dbiz-navy mb-1">{cat.t}</h4>
                    <p className="text-dbiz-teal font-bold text-xs mb-8 uppercase tracking-[0.2em]">{cat.d}</p>
                    <ul className="space-y-5 mt-auto">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px] font-medium border-l-2 border-gray-100 pl-4 hover:border-dbiz-teal transition-colors">
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-16 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-dbiz-teal/5 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-dbiz-navy mb-6">What You Need to Provide</h3>
                  <p className="text-gray-600 text-lg mb-8 font-medium leading-relaxed">
                    To begin your trademark registration journey, we require a few essential details to ensure the application is complete and accurate.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-dbiz-navy text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-dbiz-navy/20">
                    <AlertTriangle className="w-6 h-6 text-dbiz-teal" />
                    <span>Essential Checklist</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Applicant details",
                    "Brand name / logo / mark representation",
                    "Details of business activity",
                    "Use details, if any",
                    "Authorization, wherever applicable"
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4 border border-gray-100 hover:border-dbiz-teal transition-colors ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center shrink-0">
                        <ArrowRight className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32 border-t border-gray-200">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 font-medium italic">Essential knowledge for trademark protection and compliance.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "Is trademark registration mandatory?", a: "No, trademark registration is not mandatory. However, it is highly recommended because it provides stronger statutory protection and makes enforcement easier." },
                  { q: "How long is a registered trademark valid?", a: "A registered trademark is valid for 10 years from the date of application/registration and can be renewed indefinitely for further periods of 10 years each." },
                  { q: "Can I register a logo and brand name separately?", a: "Yes. A word mark and a logo/device mark can be filed separately if separate protection is required for both." },
                  { q: "What is the difference between ™ and ®?", a: "The ™ symbol can be used to indicate a trademark claim, even before registration, while the ® symbol should be used only after the trademark is officially registered." },
                  { q: "Can someone oppose my trademark application?", a: "Yes. After acceptance, the trademark is published in the Trade Marks Journal, and third parties may file an opposition within the prescribed period." },
                  { q: "What form is used for trademark registration?", a: "Trademark registration is generally filed using Form TM-A along with the prescribed official fee." },
                  { q: "Can a slogan or tagline be registered as a trademark?", a: "Yes, a slogan or tagline may be registered if it is distinctive and capable of identifying the goods or services of the applicant." },
                  { q: "What are trademark classes?", a: "Trademark applications are filed under specific classes based on the goods or services covered by the mark. There are 45 classes in total." },
                  { q: "Is class selection important in trademark registration?", a: "Yes. Trademark protection is granted only in relation to the class or classes applied for, so correct class selection is very important." },
                  { q: "Can I claim prior use of my trademark?", a: "Yes. If the trademark has already been used in business before filing, prior use may be claimed by providing supporting documents." },
                  { q: "What happens if the Registry raises an objection?", a: "If an objection is raised in the examination report, the applicant must submit a proper reply within the prescribed time. A hearing may also be required in some cases." },
                  { q: "Can a trademark application be filed online?", a: "Yes. The trademark filing system supports online filing and provides prescribed forms and official fee details." },
                  { q: "Can a registered trademark be renewed?", a: "Yes. A registered trademark can be renewed indefinitely for further periods of 10 years each by filing the prescribed renewal application and fee." },
                  { q: "Can a trademark be sold or transferred?", a: "Yes. A registered trademark can be assigned or transferred to another person or entity through the prescribed legal process." },
                  { q: "Can a trademark be licensed?", a: "Yes. Trademark rights can be commercially used and permitted to others through proper agreements, subject to applicable law and procedure." },
                  { q: "Can a personal name be registered as a trademark?", a: "Yes, a personal name can be registered, provided it meets the legal requirements and is capable of distinguishing the goods or services of the applicant. Common or non-distinctive names may face objection." },
                  { q: "Can a trademark be removed for non-use?", a: "Yes. A registered trademark may become vulnerable to removal if it is not used continuously for the period recognized under law." },
                  { q: "Is trademark protection available internationally?", a: "Trademark registration is territorial, but international protection may be pursued separately. IP India also provides information on international trademark protection mechanisms." },
                  { q: "What documents are generally required for trademark registration?", a: "The documents generally include applicant identity details, representation of the mark, class details, and supporting business/use documents where applicable. Entity applicants may also need incorporation and authorization documents." },
                  { q: "Why should I take professional support for trademark registration?", a: "Professional support helps in trademark search, class selection, proper filing, objection handling, and follow-up. This reduces the risk of mistakes, delays, or refusal and improves the chances of smooth registration." }
                ].map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden">
                    <AccordionTrigger className="text-[17px] font-bold text-dbiz-navy hover:text-dbiz-teal hover:no-underline py-5 text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-6 pr-4">
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

export default TrademarkRegistrationPage;
