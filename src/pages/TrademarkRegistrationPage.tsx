
import React, { useState, useEffect } from "react";
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
  Briefcase
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
  const modifiedDate = "2026-04-01T12:45:00+05:30";

  // Check if location is valid
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined 
    ? "Trademark Registration Services in India | Brand Registration | D BIZ CONSULTANCY" 
    : `Trademark Registration in ${cityName} | Brand Name Registration in ${cityName}`;
  
  const seoDescription = location === undefined
    ? "Register your trademark in India with D BIZ CONSULTANCY. Secure your brand name, logo, and identity with expert support and hassle-free registration."
    : `Trademark Registration in ${cityName}. Secure your brand name and logo with DBIZ CONSULTANCY. Expert support for brand registration in ${cityName}.`;

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
      const headerOffset = 160; // Adjusted for sticky nav
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
      <SEO 
        title={seoTitle} 
        description={seoDescription}
        url={seoUrl}
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        breadcrumbs={breadcrumbs.map(b => ({ name: b.name, item: b.item }))}
        keywords={`trademark registration ${cityName}, brand registration ${cityName}, register logo india, intellectual property, trade license ${cityName}`}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <Breadcrumbs items={breadcrumbs.map(b => ({ name: b.name, path: b.item, current: b.item === seoUrl }))} />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <CachedImage 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=70" 
              alt="Trademark Law Background" 
              className="w-full h-full object-cover"
              loading="eager"
            />
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
                  Register your trademark in India with DBIZ CONSULTANCY. Secure your brand name, logo, and identity with expert support and hassle-free registration.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-dbiz-teal font-bold uppercase tracking-tight">
                     <CheckCircle2 className="h-5 w-5" /> Free Trademark Search
                  </div>
                  <div className="flex items-center gap-2 text-dbiz-teal font-bold uppercase tracking-tight">
                     <CheckCircle2 className="h-5 w-5" /> Expert Support
                  </div>
                </div>

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

              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative text-center">
                    <CachedImage 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                      alt="Trademark Registration" 
                      className="w-full h-auto rounded-lg shadow-lg mb-6"
                      aspectRatio={4/3}
                    />
                    <div className="space-y-4">
                      <div className="text-sm font-bold uppercase tracking-widest text-dbiz-teal">Immediate Result</div>
                      <div className="text-3xl font-bold">TM Symbol Usage</div>
                    </div>
                  </div>
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
                { id: 'features', icon: Shield, label: 'Features' },
                { id: 'benefits', icon: CheckCircle2, label: 'Benefits' },
                { id: 'comparison', icon: FileBarChart, label: 'Comparison' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: AlertTriangle, label: 'Penalties' },
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

        {/* Overview Section */}
        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a Trademark?</h2>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>Your brand is one of the most valuable assets of your business. It represents your identity, reputation, and trust in the market. Trademark Registration in India provides legal protection to your brand name, logo, tagline, or symbol by granting exclusive ownership rights. Without registration, your brand is vulnerable to misuse, duplication, or legal disputes.</p>
                  <p>A trademark is a unique identifier that distinguishes your business from others. It gives you exclusive legal rights across India and prevents others from using similar marks in your business category.</p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Registration Essentials</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy text-sm uppercase">Uniqueness</p>
                        <p className="text-sm text-gray-600">Must distinguish your business from others in the market.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy text-sm uppercase">Class Selection</p>
                        <p className="text-sm text-gray-600">Correct classification among 45 divisions is critical.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy text-sm uppercase">Quick Filing</p>
                        <p className="text-sm text-gray-600">Receive application number on the same day for TM usage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">What Can Be Registered?</h3>
                    <p className="text-gray-700 mb-6 italic text-sm">Elements that customers recognize as your brand identity:</p>
                    <ul className="space-y-4">
                      {[
                        "Brand Name (Word Mark)",
                        "Logo or Symbol",
                        "Tagline or Slogan",
                        "Product or Service Name",
                        "Website or App Name"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-transform hover:translate-x-1 duration-300">
                          <Stamp className="h-5 w-5 text-dbiz-teal shrink-0" />
                          <span className="font-bold text-dbiz-navy text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                       <p className="text-xs font-black text-dbiz-navy uppercase tracking-widest text-center opacity-40">End-to-End Legal Protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Importance of Trademark Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Legally protecting your brand identity is a fundamental step for every serious business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Exclusive Ownership", desc: "You get sole legal rights over your brand name, logo, or slogan across the entire country." },
                { icon: AlertTriangle, title: "Prevents Copying", desc: "Strong legal grounds to stop others from using similar or deceptive marks in your category." },
                { icon: Award, title: "Builds Trust", desc: "Enhances business credibility and market presence. Customers rely on registered trademarks." },
                { icon: Globe, title: "Business Expansion", desc: "Makes franchising, licensing, and scaling your brand much easier and safer." },
                { icon: Scale, title: "Asset Creation", desc: "A registered trademark is a valuable intangible asset that grows in value as your brand grows." },
                { icon: Briefcase, title: "Market Authority", desc: "Prevents competitors from capitalizing on your reputation and success." }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 p-2">
                  <CardHeader className="pb-3">
                    <item.icon className="h-10 w-10 text-dbiz-teal mb-4" />
                    <CardTitle className="text-xl font-semibold text-dbiz-navy">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/5">
                <div className="sticky top-32">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                    Classification
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">
                    Trademark Classes & Symbols
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Correct classification is critical for valid protection and preventing application rejection.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-dbiz-navy p-8 rounded-2xl text-white">
                       <h4 className="text-6xl font-black text-dbiz-teal mb-4 tracking-tighter">™</h4>
                       <p className="font-bold mb-2">TM (Trademark)</p>
                       <p className="text-sm opacity-60">Status: Application Filed. Used to declare brand claim.</p>
                    </div>
                    <div className="bg-dbiz-teal p-8 rounded-2xl text-white">
                       <h4 className="text-6xl font-black text-white mb-4 tracking-tighter">®</h4>
                       <p className="font-bold mb-2">Registered</p>
                       <p className="text-sm opacity-90">Status: Process Complete. Used after certificate issuance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-black text-dbiz-navy mb-6">Standard Class Examples</h3>
                    <div className="space-y-4">
                      {[ 
                        { class: "Class 35", text: "Business & Consultancy Services" },
                        { class: "Class 41", text: "Education & Training" },
                        { class: "Class 25", text: "Clothing & Apparel" }
                      ].map((cls, idx) => (
                        <div key={idx} className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border border-gray-100 group">
                           <span className="font-black text-dbiz-teal">{cls.class}</span>
                           <span className="text-gray-500 font-bold group-hover:text-dbiz-navy transition-colors">{cls.text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-sm text-gray-400 italic">Registration is divided into 45 classes based on goods or services categories.</p>
                  </div>
                  
                  <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 flex gap-6">
                     <AlertTriangle className="h-8 w-8 text-amber-600 shrink-0" />
                     <div>
                        <h4 className="text-lg font-black text-amber-900 mb-2 uppercase">Common Selection Errors</h4>
                        <p className="text-amber-800 text-sm leading-relaxed">Selecting the wrong class can lead to complete protection failure or legal disputes if another business registers in the correct class first.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Standard Timeline & Validity</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understand the expected duration and legal lifespan of your trademark.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-4 text-dbiz-navy font-bold">Registration Step</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold text-center">Typical Timeline</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold text-center">Legal Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium border-r p-6">Application Filing</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r p-6 text-center font-bold">Same Day</TableCell>
                      <TableCell className="p-6 text-center text-gray-500">TM Status Obtained</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r p-6">Examination Period</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r p-6 text-center font-bold">1 to 3 Months</TableCell>
                      <TableCell className="p-6 text-center text-gray-500">Department Review</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r p-6">Full Registration</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r p-6 text-center font-bold">6 to 12 Months</TableCell>
                      <TableCell className="p-6 text-center text-gray-500">® Symbol Authorized</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r p-6">Validity Period</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r p-6 text-center font-bold uppercase text-dbiz-navy">10 Years</TableCell>
                      <TableCell className="p-6 text-center text-gray-500 italic">Renewable Indefinitely</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents" className="py-16 scroll-mt-32">
          <div className="container-custom">
             <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight">Documents Required</h2>
              <p className="text-lg text-gray-600">Checklist for error-free trademark application submission.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex items-start gap-4 shadow-sm">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 mb-1 uppercase tracking-tight text-sm">Critical Consistency Check</p>
                <p className="text-amber-700 text-sm leading-relaxed">The applicant's name and address must precisely match the identity and address proofs submitted. Any discrepancy leads to immediate objections.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-dbiz-navy p-8 text-white">
                  <h3 className="text-xl font-semibold uppercase tracking-tighter">Individual / Proprietor</h3>
                </div>
                <div className="p-10 space-y-6">
                  {[
                    "PAN Card (Identity Proof)",
                    "Aadhaar / Address Proof",
                    "Logo (High resolution image)",
                    "Authorization Letter"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                       <CheckCircle className="h-6 w-6 text-dbiz-teal shrink-0" />
                       <span className="font-bold text-gray-700 tracking-tight">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-dbiz-navy p-8 text-white">
                  <h3 className="text-xl font-semibold uppercase tracking-tighter">Companies / LLP</h3>
                </div>
                <div className="p-10 space-y-6">
                  {[
                    "Company / LLP PAN",
                    "Certificate of Incorporation",
                    "Authorization Letter (Board Resolution)",
                    "Brand Logo",
                    "KYC of Authorized Director"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                       <CheckCircle className="h-6 w-6 text-dbiz-teal shrink-0" />
                       <span className="font-bold text-gray-700 tracking-tight">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-extrabold text-dbiz-navy mb-8 tracking-tighter">Step-by-Step Registration Process</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Our systematic approach ensures your 브랜드 is protected with maximum efficiency.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                { s: "1", t: "Trademark Search", d: "Exhaustive check of available marks to ensure no conflicts with existing applications." },
                { s: "2", t: "Class Selection", d: "Categorizing your business correctly across 45 legal divisions for accurate protection." },
                { s: "3", t: "Application Filing", d: "Electronic submission. Your TM application number is issued immediately upon filing." },
                { s: "4", t: "Examination", d: "Legal review by Department examiners. We handle objections if they arise." },
                { s: "5", t: "Publication", d: "Listed in the Trademark Journal for a standard 4-month public status." },
                { s: "6", t: "Registration", d: "Authorized issuance of the Certificate of Registration for 10 years of initial validity." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-8 group hover:shadow-xl hover:-translate-y-1 transition-all">
                   <div className="w-14 h-14 rounded-2xl bg-dbiz-navy text-white flex items-center justify-center font-black text-2xl group-hover:bg-dbiz-teal transition-colors shrink-0">
                     {item.s}
                   </div>
                   <div>
                      <h3 className="text-2xl font-semibold text-dbiz-navy mb-3 uppercase tracking-tighter group-hover:text-dbiz-teal transition-colors">{item.t}</h3>
                      <p className="text-gray-500 leading-relaxed font-medium">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade License Sub-Section (Integrated Structure) */}
        <section id="trade-license" className="py-24 bg-white scroll-mt-32 border-t border-gray-100">
           <div className="container-custom">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                 <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-semibold text-dbiz-navy mb-10 tracking-tighter">Trade License Services</h2>
                    <div className="prose prose-lg text-gray-700 mb-10 leading-relaxed font-medium">
                       <p>Getting a Trade License is essential to legally operate your business within municipal limits. Any error can lead to delays, rejection, or penalties.</p>
                       <p>DBIZ CONSULTANCY makes the process simple, fast, and hassle-free — handling everything from filing to final approval.</p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                       <h3 className="text-xl font-semibold text-dbiz-navy mb-6 uppercase tracking-widest">Who Needs It?</h3>
                       <div className="space-y-4">
                          {[
                            "Shops and retail businesses",
                            "Offices and service providers",
                            "Restaurants and food businesses",
                            "Small businesses and startups"
                          ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm font-bold text-gray-600">
                               <CheckCircle2 className="h-5 w-5 text-dbiz-teal" />
                               {item}
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="lg:w-1/2 bg-dbiz-navy text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                       <Scale className="w-56 h-56 text-dbiz-teal" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-10 tracking-tight text-dbiz-teal underline underline-offset-[14px]">Required for License</h3>
                    <ul className="space-y-8">
                       {[
                         "PAN & Aadhaar of applicant",
                         "Business details and activity",
                         "Address proof of premises",
                         "Rent agreement / ownership proof",
                         "Owner NOC (if rented)",
                         "Recent Photograph"
                       ].map((item, idx) => (
                         <li key={idx} className="flex items-center gap-6 group">
                            <div className="w-4 h-4 rounded-full border-4 border-dbiz-teal group-hover:bg-dbiz-teal transition-all"></div>
                            <span className="text-xl font-bold tracking-tight">{item}</span>
                         </li>
                       ))}
                    </ul>
                    <div className="mt-12 pt-12 border-t border-white/10 text-center">
                       <p className="text-blue-100/60 font-black uppercase text-xs tracking-widest">Ensuring fast municipal approval</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Deadlines Section */}
        <section id="deadlines" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card">
              <p className="consultancy-label">Timelines</p>
              <h4 className="consultancy-heading">Trademark Compliance Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Application to TM Status", due: "Same Day", desc: "Upon filing, the application number is issued immediately, allowing use of the ™ symbol." },
                  { title: "Examination Report", due: "1–3 Months", desc: "The Registrar issues an examination report within 30–90 days of filing the application." },
                  { title: "Opposition Period", due: "4 Months (Post-Journal)", desc: "After publication in the Trademark Journal, a 4-month window is open for third-party opposition." },
                  { title: "Renewal", due: "Every 10 Years", desc: "Trademark registration is valid for 10 years and must be renewed 6 months before expiry." }
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
        </section>

        {/* Penalties Section */}
        <section id="penalties" className="py-20 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card">
              <p className="consultancy-label">Legal Risks</p>
              <h4 className="consultancy-heading">Penalties & Legal Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Infringement Damages", desc: "Using a registered trademark without permission can result in damages, injunctions, and legal costs." },
                  { title: "Passing Off Claims", desc: "Even unregistered marks can lead to passing off lawsuits if deceptive similarity is proven." },
                  { title: "Criminal Prosecution", desc: "Trademark counterfeiting is a criminal offence with imprisonment up to 3 years and fines up to ₹2 lakh." },
                  { title: "Brand Loss", desc: "Failure to register leaves your brand unprotected—competitors can legally adopt similar marks." }
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
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Standard FAQs</h2>
              <p className="text-gray-500 mb-8 font-medium italic">Essential knowledge for trademark and licensing compliance.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "Can I apply for a Trade License before starting my business?", a: "Yes, you can apply before commencing operations to ensure your business starts legally and avoids compliance issues." },
                  { q: "Is a Trade License required for home-based businesses?", a: "Yes, depending on the nature of the activity and local regulations, even home-based businesses may require a Trade License." },
                  { q: "What happens if my business location changes?", a: "Since a Trade License is location-specific, you must update the license or apply for a new one for the new premises." },
                  { q: "Can one Trade License cover multiple business activities?", a: "Generally, a Trade License is issued for a specific activity. Additional activities may require modification or a separate license." },
                  { q: "Is inspection required for Trade License approval?", a: "Inspection is not mandatory in all cases. It depends on the type of business and the requirements of the local authority." },
                  { q: "Can a Trade License be transferred to another person?", a: "No, Trade Licenses are usually non-transferable. A fresh application is required if there is a change in ownership." },
                  { q: "What is the difference between Trade License and Shop & Establishment Registration?", a: "A Trade License permits business operations, while Shop & Establishment Registration governs employee conditions, working hours, and labor compliance." },
                  { q: "Are e-commerce businesses required to obtain a Trade License?", a: "If the business operates from a physical location, office, or warehouse, a Trade License may be required as per local regulations." },
                  { q: "What are the consequences of operating without a Trade License?", a: "Operating without a valid Trade License may result in penalties, fines, or even closure of the business by local authorities." }
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

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container-custom">
             <div className="bg-dbiz-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">Your Brand is Your Identity — <span className="text-dbiz-teal block">Protect it Today</span></h2>
                   <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <a href={`tel:${phoneNumber}`} className="bg-dbiz-teal text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all shadow-xl shadow-dbiz-teal/20 w-fit flex items-center gap-3 group">
                        <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" /> Contact DBIZ Now
                      </a>
                   </div>
                   <p className="mt-8 text-blue-100/40 font-bold uppercase tracking-[0.3em] text-xs">Expert Legal Protection across India</p>
                </div>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default TrademarkRegistrationPage;