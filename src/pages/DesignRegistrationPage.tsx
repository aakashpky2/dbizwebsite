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
  ShieldCheck,
  Package,
  Truck,
  Shirt,
  Box,
  Layout,
  Shapes,
  Palette
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

const DesignRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const publishDate = "2026-03-01T10:00:00+05:30";
  const modifiedDate = "2026-04-23T12:45:00+05:30";

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

  const seoTitle = location === undefined
    ? "Design Registration Services in India | Protect Product Appearance | D BIZ CONSULTANCY"
    : `Design Registration in ${cityName} | Protect Product Appearance in ${cityName}`;

  const seoDescription = location === undefined
    ? "Register your product design in India with D Biz Consultancy Private Limited. Secure your unique shapes, patterns, and configurations with expert support."
    : `Design Registration in ${cityName}. Secure your product designs and visual assets with D Biz Consultancy. Expert support for design filing in ${cityName}.`;

  const seoUrl = location ? `/design-registration/${location}` : "/design-registration";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "Design Registration", item: "/design-registration" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: `/design-registration/${location}` });
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
        keywords={`design registration ${cityName}, protect product design ${cityName}, intellectual property, designs act 2000`}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <Breadcrumbs items={breadcrumbs.map(b => ({ name: b.name, path: b.item, current: b.item === seoUrl }))} />

        {/* Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <CachedImage
              src="/dbiz-uploads/design-registration-hero-new.png"
              alt="Design Registration Services Hero Background"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
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
                  Design Registration Services{location ? ` in ${cityName}` : ""}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Register your product design in India with D Biz Consultancy Private Limited. Secure your unique shapes, patterns, and configurations with expert support.
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
                { id: 'definition', icon: FileText, label: 'What is it?' },
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
                <div className="text-gray-700 leading-relaxed mb-8 text-lg">
                  <p>In today’s competitive business environment, product appearance plays a crucial role in attracting customers and building a strong market identity. A unique design enhances product value, creates differentiation, and strengthens brand positioning. Design Registration is a legal process that protects the visual appearance of a product, including its shape, configuration, pattern, or ornamentation. It grants exclusive rights to the owner and prevents unauthorized copying or imitation by competitors. Without proper design protection, businesses may face duplication, loss of uniqueness, and reduced market value. A structured design registration process helps establish legal ownership and supports enforcement in case of infringement. Governed by the Designs Act, 2000 and administered by the Design Office, design protection is essential for manufacturers, designers, startups, and businesses. At D Biz Consultancy Private Limited, we provide professional end-to-end design registration services, helping clients protect their product designs with clarity and confidence.</p>
                </div>

              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,44,95,0.1)] group">
                  <div className="absolute inset-0 bg-dbiz-navy/5 mix-blend-multiply transition-colors group-hover:bg-transparent duration-500 z-10"></div>
                  <CachedImage
                    src="/dbiz-uploads/design-intro-final.jpg"
                    alt="Design Registration Protection"
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
              {/* Left Column: What is Design Registration? */}
              <div id="definition" className="flex-1 text-left scroll-mt-32 pt-4">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-8">3. What is Design Registration?</h2>
                <div className="text-gray-700 mb-8 text-lg font-medium">
                  <p>Design registration is a legal right granted to protect the visual appearance of a product, ensuring that its unique look is not copied or misused by others. It focuses on the aesthetic aspects of a product, such as its shape, configuration, pattern, or ornamentation, which contribute to its overall visual appeal and market identity.</p>
                </div>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 font-medium">
                  <li>Legal Protection of Appearance – Design registration protects the external look of a product, including its shape, configuration, pattern, and decorative elements.</li>
                  <li>Covers Aesthetic Features Only – It applies only to visual aspects and does not protect functionality, technical features, or working mechanism.</li>
                  <li>Exclusive Rights to Use – The registered owner gets exclusive rights to use, apply, and commercially exploit the design.</li>
                  <li>Prevents Unauthorized Use – It helps prevent copying, imitation, or reproduction of the design by competitors.</li>
                  <li>Builds Product Identity – A unique design enhances product recognition and helps create a strong market presence.</li>
                  <li>Strengthens Legal Position – Registration provides enforceable legal rights in case of infringement or disputes.</li>
                </ul>
              </div>

              {/* Right Column: Legal Framework */}
              <div id="legal" className="lg:w-[500px] xl:w-[600px] shrink-0 scroll-mt-32">
                <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 text-left w-full h-full flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold font-sans text-dbiz-navy mb-4">2. Design Registration – Legal Framework</h2>
                  
                  <h3 className="text-base font-bold text-dbiz-teal mb-2">Definition under the Designs Act, 2000</h3>
                  <p className="text-gray-700 mb-4 font-medium leading-relaxed text-sm">
                    The Designs Act, 2000 provides legal protection to the visual design of articles and grants exclusive rights to the registered proprietor to apply the design.
                  </p>

                  <h3 className="text-base font-bold text-dbiz-teal mb-3">Key Legal Provisions Include:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Protection is granted only for aesthetic features, not functionality",
                      "Design must be new and original",
                      "Registration provides exclusive rights over the design",
                      "Rights apply to specific articles and classifications",
                      "Design registration is valid for an initial period of 10 years and may be extended for a further period of 5 years"
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
                    The process is administered by the Design Office (Patent Office), which examines applications, handles objections, and grants registration.
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
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Types of Designs & Importance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Designs can be registered in different forms based on how the visual features are applied to a product. The type of design depends on the nature of appearance that needs protection.</p>
            </div>
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Types of Designs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 mb-16">
              {[
                { title: "Shape Design", desc: "Protects the three-dimensional (3D) shape of a product, such as containers, bottles, or product structures." },
                { title: "Pattern Design", desc: "Protects surface patterns, prints, or repeated designs applied to products like textiles, wallpapers, or packaging." },
                { title: "Configuration Design", desc: "Protects the specific arrangement or structure of elements in a product that gives it a distinctive look." },
                { title: "Ornamental Design", desc: "Protects decorative features, artistic elements, or aesthetic enhancements applied to a product." },
                { title: "Combination Design", desc: "Protects a combination of shape, pattern, and ornamentation, creating a complete and distinctive product appearance." }
              ].map((item, idx) => (
                <TrademarkTypeCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
            <h3 className="text-3xl font-black text-dbiz-navy mb-8 text-center uppercase tracking-tighter">5. Why Design Registration is Important</h3>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed font-medium px-4">
              Design registration is important because it protects the unique visual identity of a product and gives the owner exclusive legal rights over its use. It helps businesses maintain originality and prevents competitors from copying or imitating their designs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Shield, title: "Exclusive Ownership", desc: "Grants full legal rights over the use and application of the design." },
                { icon: AlertTriangle, title: "Prevents Copying", desc: "Stops competitors from imitating or reproducing the design without permission." },
                { icon: Award, title: "Builds Market Identity", desc: "Enhances product recognition and strengthens brand positioning in the market." },
                { icon: Globe, title: "Commercial Advantage", desc: "Enables licensing, assignment, and monetization of the design." },
                { icon: Scale, title: "Creates Intellectual Property Asset", desc: "Adds value to the business as a recognized IP asset." },
                { icon: Gavel, title: "Legal Protection", desc: "Provides the right to take action against infringement and unauthorized use." }
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
              <h2 className="text-4xl font-black text-dbiz-navy mb-8 tracking-tighter uppercase">6. Documents Required for Design Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium px-4">
                The documents required for design registration may vary depending on whether the applicant is an individual designer or a company/LLP, but proper documentation is essential in all cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Individuals / Designers */}
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
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white relative z-10">For Individuals / Designers</h3>
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Personal Identity & Design Drawings</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "PAN Card", desc: "Used as identity proof of the applicant for official verification." },
                      { label: "Aadhaar / Address Proof", desc: "Required to confirm the address details of the applicant." },
                      { label: "Design Images or Drawings", desc: "Clear representations from multiple views showing complete visual appearance." },
                      { label: "Description of Design", desc: "Brief description explaining nature and visual features proposed for registration." }
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
                      { label: "Certificate of Incorporation", desc: "Proof of legal existence and registration of the entity." },
                      { label: "Authorization Letter", desc: "Board Resolution authorizing a representative to handle the application." },
                      { label: "Design Representations", desc: "Clear design images, drawings, and relevant details to be registered." }
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
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                <p className="text-dbiz-navy text-lg font-bold leading-relaxed">
                  Proper documentation plays an important role in the design registration process. It helps ensure correct filing, smooth examination, and reduces the possibility of objections or delays.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Form 1</span>
                    <span className="text-xs text-gray-500">Design application form</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Images</span>
                    <span className="text-xs text-gray-500">Multi-view representations</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">PAN Card</span>
                    <span className="text-xs text-gray-500">Identity verification</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Auth Letter</span>
                    <span className="text-xs text-gray-500">Entity authorization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-bold font-sans text-dbiz-navy mb-8">7. Step-by-Step Design Registration Process</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">We provide end-to-end professional support to ensure a smooth and professionally managed process from start to finish.</p>
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
                    d: "The process begins with collecting details of the applicant and the design. Design is reviewed for novelty and originality, classification is identified, and representations are prepared.",
                    img: "/dbiz-uploads/tm-step1.png"
                  },
                  { 
                    s: "02", 
                    t: "Filing of Design Application", 
                    d: "Application is filed in the prescribed format, generally Form 1, along with the required fee. Includes applicant details, representations, class, and brief description.",
                    img: "/dbiz-uploads/tm-step2.png"
                  },
                  { 
                    s: "03", 
                    t: "Application Number Generation", 
                    d: "After successful filing, an official application number is generated for tracking the status and future communication with the authority.",
                    img: "/dbiz-uploads/tm-step3.png"
                  },
                  { 
                    s: "04", 
                    t: "Examination of Application", 
                    d: "The Design Office examines the application for novelty, originality, classification, and overall compliance under the Designs Act, 2000.",
                    img: "/dbiz-uploads/tm-step4.png"
                  },
                  { 
                    s: "05", 
                    t: "Reply to Objection, if Any", 
                    d: "If objections are raised, the applicant must submit an appropriate reply addressing issues with explanation, corrections, or supporting documents.",
                    img: "/dbiz-uploads/tm-step5.png"
                  },
                  { 
                    s: "06", 
                    t: "Registration Approval", 
                    d: "Once authority is satisfied and objections resolved, the application is approved for entry in the official register.",
                    img: "/dbiz-uploads/tm-step6.png"
                  },
                  { 
                    s: "07", 
                    t: "Issue of Registration Certificate", 
                    d: "Registration certificate is issued, serving as official proof of ownership and granting legal protection against unauthorized copying or misuse.",
                    img: "/dbiz-uploads/tm-step7.png"
                  }
                ].map((item, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-4">
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

        {/* Classification Section */}
        <section id="classes" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Side Image */}
              <div className="lg:w-[45%] shrink-0">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group min-h-[500px]">
                  <img
                    src="/dbiz-uploads/design-classification-v2.png"
                    alt="Design Classification Visual"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-dbiz-navy/10 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dbiz-navy/90 to-transparent z-20">
                    <h3 className="text-white text-2xl font-bold mb-2">Aesthetic Features</h3>
                    <p className="text-gray-200 font-medium">Protecting the shape, configuration, and pattern of your products.</p>
                  </div>
                </div>
              </div>

              {/* Right Side Writings */}
              <div className="lg:w-[55%] flex flex-col">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-4">8. Design Classification</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Design registration follows the Locarno Classification system, which classifies designs based on the category of the article. Selecting the correct class is essential for proper examination and accurate legal protection.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Shirt className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">Class 2</span>
                      <span className="text-gray-600 font-medium">Apparel</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Box className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">Class 9</span>
                      <span className="text-gray-600 font-medium">Packaging</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">Classification Examples:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      { c: "Transport", d: "Class 12 - Transport equipment and vehicles" },
                      { c: "Furnishing", d: "Class 6 - Furnishing and household goods" },
                      { c: "Electronics", d: "Class 14 - Recording or communication equipment" }
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
                        Incorrect classification may lead to objections, delays, or limited scope of protection for your registered design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Validity Full Width */}
            <div className="mt-24">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-12 text-center">9. Timeline & Validity</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-[1200px] mx-auto px-4">
                {[
                  { v: "Day 1", u: "Filing", t: "Application Filing", d: "Same day submission" },
                  { v: "1–2", u: "Months", t: "Examination Stage", d: "1 to 2 months" },
                  { v: "2–4", u: "Months", t: "Registration Completion", d: "Usually 2 to 4 months, if no objection is raised" },
                  { v: "Varies", u: "If Objection", t: "If Objection Arises", d: "The timeline may extend depending on the case" },
                  { v: "10", u: "Years", t: "Validity of Registered Design", d: "10 years from the date of registration" },
                  { v: "+5", u: "Years", t: "Extension", d: "Additional 5 years upon application" }
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
              <p className="text-center text-gray-500 mt-8 text-sm italic font-medium">The timeline may vary depending on examination, objections, and processing time of the authority. Extension must be applied for as per applicable law.</p>
            </div>
          </div>
        </section>

        {/* Rights Intro Section (Mapped to Symbols Section 10) */}
        <section id="rights-intro" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-8">10. Design Rights and Protection</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
              Design registration grants the owner important legal rights and protection over the registered design. It helps secure the visual identity of a product and gives the owner a stronger legal position in the market. Once a design is registered, the owner gets exclusive control over its use and can prevent unauthorized copying or imitation by others.
            </p>
            <div className="inline-flex items-center justify-center gap-3 text-dbiz-navy font-bold italic">
              <ShieldCheck className="w-6 h-6 text-dbiz-teal" />
              <span>Exclusive legal protection for your product's visual identity</span>
            </div>
          </div>
        </section>

        {/* Rights Details Section (Mapped to Rights Section 11) */}
        <section id="rights" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h3 className="text-2xl md:text-3xl font-bold font-sans text-dbiz-navy mb-16 text-center">Design Rights Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  t: "Exclusive Right to Use", 
                  d: "The registered owner gets the exclusive legal right to apply and use the design in relation to the article for which it is registered.",
                  icon: Shield
                },
                { 
                  t: "Prevent Copying", 
                  d: "Registration helps stop competitors or third parties from copying, reproducing, or imitating the registered design without permission.",
                  icon: Gavel
                },
                { 
                  t: "Licensing & Transfer", 
                  d: "A registered design becomes an IP asset that can be licensed, assigned, sold, or otherwise commercially transferred.",
                  icon: Scale
                },
                { 
                  t: "Legal Enforcement", 
                  d: "The owner gets the right to take legal action against infringement or unauthorized use of the design.",
                  icon: Briefcase
                },
                { 
                  t: "Market Position", 
                  d: "A protected design helps create product recognition, supports brand value, and improves competitive strength in the market.",
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

        {/* Common Challenges Section (Mapped to Risks Section 12) */}
        <section id="risks" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-6">11. Common Challenges and Risks</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Design registration may involve certain challenges and risks if the application is not properly prepared, reviewed, or filed.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              <div className="space-y-4">
                {[
                  { t: "Lack of Originality", d: "A design must be new and original. If it is already known or not sufficiently distinctive, it may not qualify." },
                  { t: "Similar Existing Designs", d: "If a similar design already exists or has been registered earlier, the application may face refusal." },
                  { t: "Incorrect Classification", d: "Choosing the wrong design class may affect the scope of protection and delay the process." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-gray-50 rounded-[2rem] shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(180,83,9,0.05)] transition-all duration-300">
                    <div>
                      <strong className="text-dbiz-navy block text-lg mb-1 font-bold leading-tight">{item.t}</strong>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { t: "Errors in Drawings", d: "Incomplete drawings, unclear representations, or inaccurate documents lead to objections." },
                  { t: "Prior Public Disclosure", d: "If design is published or displayed before filing, it may lose novelty and eligibility." },
                  { t: "Procedural Deficiencies", d: "Inaccurate planning or incorrect legal understanding can lead to objections or rejection." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-gray-50 rounded-[2rem] shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(180,83,9,0.05)] transition-all duration-300">
                    <div>
                      <strong className="text-dbiz-navy block text-lg mb-1 font-bold leading-tight">{item.t}</strong>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-500 mt-12 font-bold italic">With proper guidance, accurate documentation, and professional support, these risks can be effectively minimized.</p>
          </div>
        </section>

        {/* Why Choose Us Section (Mapped to Why Us Section 13) */}
        <section id="why-us" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-8">12. Why Choose D BIZ CONSULTANCY for Design Registration?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Protecting a product design requires more than simply filing an application. Design registration involves proper classification, accurate preparation of drawings and documents, verification of novelty, and timely compliance with legal requirements. Any error, mismatch, or prior disclosure may lead to objections, delay, or rejection.
                </p>
                <p className="text-lg text-black leading-relaxed font-medium">
                  D BIZ CONSULTANCY provides complete support to make the design registration process smooth, accurate, and professionally managed. We assist clients from the initial stage of evaluating the design up to the final stage of registration, ensuring that their product designs are legally protected without complications.
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
                    items: ["Design search and novelty review", "Risk analysis of approval", "Guidance on presentation", "Classification identification"],
                  },
                  {
                    t: "Documentation",
                    d: "Filing Support",
                    items: ["Preparation of application", "Verification of drawings", "Selection of design class", "Official system filing"],
                  },
                  {
                    t: "Follow-Up",
                    d: "Objection Handling",
                    items: ["Status tracking", "Responding to queries", "Authority follow-up", "Clarification coordination"],
                  },
                  {
                    t: "Post-Registration",
                    d: "Assistance",
                    items: ["Renewal and extension", "Assignment or transfer", "Commercial use advisory", "Ongoing IP matters"],
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

            <div className="bg-[#0b1d33] rounded-[3rem] p-12 lg:p-16 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-dbiz-teal/20 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">What You Need to Provide</h3>
                  <p className="text-white/80 text-lg mb-8 font-medium leading-relaxed">
                    To begin your design registration journey, we require a few essential details to ensure the application is complete and accurate.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold border border-white/20 shadow-xl">
                    <AlertTriangle className="w-6 h-6 text-dbiz-teal" />
                    <span>Essential Checklist</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Applicant details",
                    "Design images or drawings",
                    "Product details and class",
                    "Use details, if any",
                    "Authorization documents"
                  ].map((item, idx) => (
                    <div key={idx} className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-sm flex items-center gap-4 border border-white/10 hover:border-dbiz-teal transition-all duration-300 ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                      <span className="font-bold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { t: "Professional Guidance", d: "Experienced support at every stage", i: User },
                { t: "Complete Management", d: "End-to-end assistance for registration", i: Briefcase },
                { t: "Accurate Filing", d: "Careful handling of drawings and class", i: FileText },
                { t: "Transparent Support", d: "Simple communication and coordination", i: Users },
                { t: "Timely Follow-Up", d: "Active monitoring to reduce delays", i: Clock }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.i className="w-6 h-6 text-dbiz-teal" />
                  </div>
                  <h4 className="font-bold text-dbiz-navy text-sm mb-2">{item.t}</h4>
                  <p className="text-gray-500 text-xs font-medium">{item.d}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-12 font-medium italic">With D BIZ CONSULTANCY, your design registration is handled with care, clarity, and professional attention, allowing you to focus on your product while we take care of the process.</p>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32 border-t border-gray-200">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 font-medium italic">Essential knowledge for design protection and compliance.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "Is design registration mandatory?", a: "No, it is not mandatory, but it is important for legal protection and to prevent copying." },
                  { q: "What is the validity of design registration?", a: "It is valid for 10 years, extendable by 5 years." },
                  { q: "Can I protect the shape of my product?", a: "Yes, if the shape is unique and visually distinctive." },
                  { q: "Can I sell or transfer design rights?", a: "Yes, design rights can be licensed, assigned, or transferred." },
                  { q: "What happens if someone copies my design?", a: "You can take legal action for infringement." },
                  { q: "Can an old design be registered?", a: "No, the design must be new and original." },
                  { q: "Is design protection international?", a: "No, it is territorial and requires separate registration in other countries." },
                  { q: "Can packaging design be registered?", a: "Yes, if it is unique and visually distinctive." },
                  { q: "Can a design be cancelled?", a: "Yes, if it is not original or previously published." },
                  { q: "Can I apply for design registration online?", a: "Yes, the process can be completed online." },
                  { q: "What is considered a “new” design?", a: "A design is new if it has not been published or disclosed anywhere before filing." },
                  { q: "Can I register multiple designs in one application?", a: "Generally, one application is for one design, except in specific cases." },
                  { q: "What is design infringement?", a: "It is the unauthorized copying or imitation of a registered design." },
                  { q: "Can I modify my design after filing?", a: "Only minor corrections are allowed; major changes require a new application." },
                  { q: "Who can apply for design registration?", a: "Individuals, designers, startups, and companies can apply." },
                  { q: "What is the role of the design examiner?", a: "The examiner checks novelty, originality, and compliance with legal requirements." },
                  { q: "Do I need physical presence for registration?", a: "No, the process can be completed online." },
                  { q: "Can I license my registered design?", a: "Yes, you can allow others to use your design through licensing." },
                  { q: "What documents are required for design registration?", a: "Identity proof, design drawings, and applicant details are required." },
                  { q: "What happens after design registration is granted?", a: "You receive exclusive rights and legal protection over the design." }
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

export default DesignRegistrationPage;
