
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, RefreshCw, Info, ThumbsUp, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle,
  Gavel
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "../NotFound";
import CachedImage from "@/components/CachedImage";

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


import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const LLPRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const publishDate = "2026-02-20T10:00:00+05:30";
  const modifiedDate = "2026-03-19T12:50:00+05:30";

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  
  if (location && !isValidLocation) {
    return <NotFound />;
  }

  const cityName = location 
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) 
    : "India";
  
  const seoTitle = location === undefined
    ? "Limited Liability Partnership Registration | Best in India | D BIZ CONSULTANCY"
    : `Limited Liability Partnership Registration in ${cityName} | Best in India | D BIZ CONSULTANCY`;

  const seoDescription = location === undefined
    ? "Register your Limited Liability Partnership (LLP) in India with D BIZ CONSULTANCY. Expert LLP registration, DSC, DIN, and compliance support."
    : `Register LLP in ${cityName}. D BIZ CONSULTANCY provide fast LLP registration services in ${cityName} with minimal documentation and experts support.`;

  const seoUrl = location ? `/llp/${location}` : "/llp";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "LLP Registration", item: "/llp" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: `/llp/${location}` });
  }

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
      <SEO 
        title={seoTitle}
        description={seoDescription}
        url={seoUrl}
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        breadcrumbs={breadcrumbs.map(b => ({ name: b.name, item: b.item }))}
        keywords={`llp registration ${cityName}, limited liability partnership ${cityName}, register llp india, llp agreement, designated partner`}
      />
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <Breadcrumbs items={breadcrumbs.map(b => ({ name: b.name, path: b.item, current: b.item === seoUrl }))} />
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=50" 
              alt="Background" 
              className="w-full h-full object-cover" 
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Business Registration Services
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Limited Liability Partnership (LLP) Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  D BIZ CONSULTANCY provides complete Limited Liability Partnership (LLP) registration services. Our expert team ensures a smooth and compliant incorporation process — from name reservation and documentation to MCA filing and post-registration compliance support.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => handleSectionClick('features')}
                    className="border-white text-slate-50 bg-dbiz-navy"
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                  <Clock className="h-4 w-4 mr-2" /> 
                  <span>Quick Registration • Regulatory Compliance • Expert Advisory</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <CachedImage 
                      src="/dbiz-uploads/llp_hero_v2.png" 
                      alt="LLP Registration" 
                      className="w-full h-auto rounded-lg shadow-lg"
                      aspectRatio={4/3}
                      loading="eager"
                      fetchPriority="high"
                    />
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">7-10</div>
                        <div className="text-sm opacity-80">Days for Registration</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">Min 2</div>
                        <div className="text-sm opacity-80">Partners Required</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                { id: 'penalties', icon: Gavel, label: 'Penalties' },
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
        <section id="overview" className="pt-24 pb-16 scroll-mt-40">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a Limited Liability Partnership (LLP)?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A Limited Liability Partnership (LLP) is a business structure governed by the Limited Liability Partnership Act, 2008, which combines the flexibility of a partnership firm with the advantage of limited liability protection.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An LLP is a separate legal entity distinct from its partners, allowing it to own assets, enter contracts, and conduct business in its own name. The liability of partners is limited to their agreed capital contribution in the LLP.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    LLPs are commonly preferred by professionals, consultants, startups, and small businesses because they offer flexible management, limited liability protection, and comparatively lower compliance requirements than companies.
                  </p>
                </div>

                {/* Minimum Requirements Mini-block — Combined into Overview */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                  <h3 className="text-lg font-bold text-dbiz-navy mb-5 flex items-center">
                    <span className="w-7 h-7 rounded-full bg-dbiz-teal text-white flex items-center justify-center mr-3 text-sm">
                      <ChevronRight size={16} />
                    </span>
                    Minimum Requirements at a Glance
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10">
                    {[
                      {
                        title: "Minimum 2 Partners",
                        desc: "At least two individuals or corporate entities"
                      },
                      {
                        title: "2 Designated Partners",
                        desc: "Mandatory for statutory compliance"
                      },
                      {
                        title: "1 Resident DP",
                        desc: "One must be resident in India"
                      },
                      {
                        title: "Digital Signatures",
                        desc: "Required for all designated partners"
                      },
                      {
                        title: "No Min Capital",
                        desc: "Flexible contribution for partners"
                      },
                      {
                        title: "Registered Office",
                        desc: "Must be located within India"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="mt-1 mr-4 bg-white p-1 rounded-full shadow-sm border border-dbiz-teal/20 group-hover:scale-110 transition-transform">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div>
                          <p className="font-bold text-dbiz-navy leading-tight mb-1">{item.title}</p>
                          <p className="text-xs text-gray-500 leading-normal">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="mb-6 overflow-hidden rounded-xl shadow-sm border border-gray-200">
                    <CachedImage 
                      src="/dbiz-uploads/llp_definition_v2.png" 
                      alt="LLP Act Definition" 
                      className="w-full h-auto object-cover"
                      aspectRatio={4/3}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy text-center">Definition as per the LLP Act, 2008</h3>
                  <p className="text-gray-700 mb-4">
                    The LLP Act, 2008, defines a Limited Liability Partnership as a body corporate that is:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">A separate legal entity distinct from its partners</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Equipped with perpetual succession (independent of partner changes)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">A structure where partner liability is limited to agreed contributions</span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-dbiz-teal/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">Need expert guidance?</p>
                        <p className="text-dbiz-navy font-medium text-sm">Contact Our Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Key Features Section */}
        <section id="features" className="pt-24 pb-16 bg-gray-50 scroll-mt-40">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Features
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">Key Features of a Limited Liability Partnership</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps businesses across {cityName} leverage LLP advantages for professional growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">An LLP has an independent legal identity separate from its partners. It can own property, enter contracts, and undertake legal proceedings in its own name.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Limited Liability Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Partners are liable only to the extent of their capital contribution, protecting their personal assets from business liabilities.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Flexible Internal Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">The internal structure of an LLP is governed by the LLP Agreement, which defines the rights, duties, and profit-sharing arrangements between partners.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">No Minimum Capital Requirement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Unlike companies, LLPs can be incorporated without any mandatory minimum capital, making them suitable for startups and small businesses.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Lower Compliance Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">LLPs generally have fewer compliance obligations compared to companies, which reduces administrative burden and operational costs.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Perpetual Succession</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">An LLP continues to exist regardless of changes in partners, ensuring continuity of business operations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="pt-24 pb-16 scroll-mt-40">
          <div className="container-custom">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left Side: Content & Image */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Benefits
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 leading-tight">
                  Benefits of a Limited Liability Partnership
                </h2>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  D BIZ CONSULTANCY helps businesses leverage the practical advantages of an LLP for maximum growth and asset protection.
                </p>

                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <CachedImage 
                    src="/dbiz-uploads/llp_benefits_v2.png" 
                    alt="LLP Benefits" 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    aspectRatio={4/3}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dbiz-navy/20 to-transparent"></div>
                </div>
              </div>

              {/* Right Side: Benefits list */}
              <div className="lg:col-span-7 space-y-4">
                {[
                  "Limited liability protection for partners",
                  "Separate legal entity status",
                  "Flexible internal management through LLP agreement",
                  "Lower compliance burden compared to companies",
                  "No minimum capital requirement",
                  "Suitable structure for professional services and small businesses"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-dbiz-teal/5 flex items-center justify-center group-hover:bg-dbiz-teal/10 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-dbiz-teal" />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="pt-24 pb-16 bg-gray-50 scroll-mt-40">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between Business Structures</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understand why Limited Liability Partnership (LLP) is a preferred choice for professionals and growing businesses.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-100">
                    <TableHead className="py-5 font-bold text-black text-lg pl-6">Feature</TableHead>
                    <TableHead className="py-5 font-bold text-black text-lg bg-dbiz-teal/10 text-left pl-6">LLP</TableHead>
                    <TableHead className="py-5 font-bold text-black text-lg">Private Limited</TableHead>
                    <TableHead className="py-5 font-bold text-black text-lg text-center">Sole Proprietorship</TableHead>
                    <TableHead className="py-5 font-bold text-black text-lg pr-6 text-center">Partnership</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Liability</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Limited to contribution</TableCell>
                    <TableCell className="py-4 text-black">Limited to shares</TableCell>
                    <TableCell className="py-4 text-black text-center">Unlimited</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Unlimited</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50/50">
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Legal Entity</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Separate legal entity</TableCell>
                    <TableCell className="py-4 text-black">Separate legal entity</TableCell>
                    <TableCell className="py-4 text-black text-center">Not a separate entity</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Not a separate entity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Ownership</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Minimum 2 partners (no limit)</TableCell>
                    <TableCell className="py-4 text-black">2–200 shareholders</TableCell>
                    <TableCell className="py-4 text-black text-center">Single owner</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">2–50 partners</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50/50">
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Tax Rate</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Flat 30%</TableCell>
                    <TableCell className="py-4 text-black">Corporate tax regime</TableCell>
                    <TableCell className="py-4 text-black text-center">Individual slab</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Flat 30%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Compliance</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Moderate compliance</TableCell>
                    <TableCell className="py-4 text-black">High compliance</TableCell>
                    <TableCell className="py-4 text-black text-center">Minimal</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Minimal</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50/50">
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Management</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Flexible partner-managed</TableCell>
                    <TableCell className="py-4 text-black">Structured & regulated</TableCell>
                    <TableCell className="py-4 text-black text-center">Fully controlled</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Jointly managed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Cost of Setup</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Moderate</TableCell>
                    <TableCell className="py-4 text-black">Higher</TableCell>
                    <TableCell className="py-4 text-black text-center">Very low</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Low</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50/50">
                    <TableCell className="py-4 font-semibold text-black pl-6 border-r border-gray-100">Best For</TableCell>
                    <TableCell className="py-4 text-black font-bold bg-dbiz-teal/5 text-left pl-6">Professionals, growth firms</TableCell>
                    <TableCell className="py-4 text-black">Startups & scalable biz</TableCell>
                    <TableCell className="py-4 text-black text-center">Freelancers</TableCell>
                    <TableCell className="py-4 text-black pr-6 text-center">Small family ventures</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="pt-24 pb-16 scroll-mt-40">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                Documents
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-4">Documents Required for LLP Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY assists clients with collecting, verifying, and preparing all required documentation for smooth Limited Liability Partnership (LLP) registration.
              </p>
            </div>

            {/* Common Rejection Prevention Tips */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-2">Common Rejection Prevention Tips</p>
                <ul className="text-sm text-amber-700 space-y-1.5">
                  <li>• Name and spelling must match across PAN, Aadhaar, Passport, and all submitted documents</li>
                  <li>• Address proofs should be consistent and clearly readable</li>
                  <li>• Registered office documents must match (owner name in utility bill, rent agreement, and NOC)</li>
                  <li>• Utility bills and bank statements should be dated within the last 2 months</li>
                  <li>• Ensure all documents are valid, clear, and not expired</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

              {/* For Designated Partners */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                  <h3 className="text-xl font-bold">For Designated Partners</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Identity Proof</p>
                      <p className="text-gray-600 mt-1">PAN Card (Mandatory), Passport, Aadhaar Card, Voter ID</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Address Proof</p>
                      <p className="text-gray-600 mt-1">Utility Bills, Bank Statements (latest 2 months)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Photographs</p>
                      <p className="text-gray-600 mt-1">Recent passport-sized photographs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Foreign Nationals / NRIs */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                  <h3 className="text-xl font-bold">For Foreign Nationals / NRIs (if applicable)</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Identity Proof</p>
                      <p className="text-gray-600 mt-1">Passport (Mandatory)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Address Proof</p>
                      <p className="text-gray-600 mt-1">Driving License, Bank Statement, or Residence Card</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Notarization / Apostille</p>
                      <p className="text-gray-600 mt-1">May be required depending on applicable regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Photographs</p>
                      <p className="text-gray-600 mt-1">Recent passport-sized photographs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For LLP Registration */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                  <h3 className="text-xl font-bold">For LLP Registration</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">LLP Agreement</p>
                      <p className="text-gray-600 mt-1">Primary legal document defining rights, duties, profit-sharing ratio, and management structure of partners</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Incorporation Forms & Declarations</p>
                      <p className="text-gray-600 mt-1">Required forms and consent declarations for LLP registration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Digital Signature Certificate (DSC)</p>
                      <p className="text-gray-600 mt-1">Required for filing electronic documents and registration process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Designated Partner Identification Number (DPIN/DIN)</p>
                      <p className="text-gray-600 mt-1">Mandatory for designated partners of the LLP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Registered Office */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                  <h3 className="text-xl font-bold">For Registered Office</h3>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Rent Agreement + NOC</p>
                      <p className="text-gray-600 mt-1">For rented premises, along with No Objection Certificate from owner</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Property Documents</p>
                      <p className="text-gray-600 mt-1">Ownership proof if premises is owned</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dbiz-navy">Utility Bills</p>
                      <p className="text-gray-600 mt-1">Recent electricity or water bill of the premises (name should match ownership documents)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-dbiz-teal/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-dbiz-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dbiz-navy mb-2">Important Note</h3>
                  <p className="text-gray-600 mb-3">Proper documentation is essential for:</p>
                  <ul className="text-gray-600 space-y-1.5 mb-4">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-dbiz-teal flex-shrink-0" /> Successful LLP registration</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-dbiz-teal flex-shrink-0" /> Avoiding delays or rejections</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-dbiz-teal flex-shrink-0" /> Smooth banking and compliance processes</li>
                  </ul>
                  <p className="text-dbiz-navy font-semibold">D BIZ CONSULTANCY ensures complete document verification and accurate filing at every stage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="pt-24 pb-16 bg-gray-50 scroll-mt-40">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Registration Process
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">LLP Registration Process in India</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Registering a Limited Liability Partnership (LLP) in India involves several legal and procedural steps under the Limited Liability Partnership Act, 2008 and rules prescribed by the Ministry of Corporate Affairs (MCA). The process includes obtaining digital signatures, reserving the LLP name, filing incorporation documents with the Registrar of Companies (ROC), and executing the LLP Agreement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                With professional assistance from D BIZ CONSULTANCY, businesses can complete the LLP registration process smoothly while ensuring full compliance with statutory requirements.
              </p>
            </div>

            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold text-dbiz-navy">Step-by-Step LLP Registration Process</h3>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">

                {/* Step 1 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">1</span>
                        Obtain Digital Signature Certificate (DSC)
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        The first step in registering a Limited Liability Partnership (LLP) is obtaining a Digital Signature Certificate (DSC) for all designated partners. A DSC is required to digitally sign electronic documents submitted on the Ministry of Corporate Affairs (MCA) portal during the registration process.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span>Mandatory for all designated partners</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span>Required for filing electronic forms with MCA</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span>Issued by government-approved certifying authorities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">2</span>
                        Apply for Designated Partner Identification Number (DPIN)
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        A Designated Partner Identification Number (DPIN) is a unique identification number issued to individuals who wish to act as designated partners in an LLP.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-dbiz-navy mb-2">Important Aspects:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Mandatory for designated partners under the LLP Act, 2008</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Applied through MCA during LLP incorporation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Remains valid for lifetime once allotted</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">3</span>
                        LLP Name Reservation
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        The next step is reserving the proposed LLP name through the MCA portal.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-dbiz-navy mb-2">While selecting the LLP name:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">It must be unique and not identical to any existing LLP or company</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">It should comply with LLP naming guidelines issued by MCA</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">It must avoid conflicts with registered trademarks</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">Once approved, the name is reserved for filing LLP incorporation documents.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">4</span>
                        Filing LLP Incorporation Documents with the Registrar of Companies (ROC)
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        After name approval, the LLP incorporation form is filed with the Registrar of Companies (ROC) through the MCA portal.
                      </p>
                      <p className="text-sm font-semibold text-dbiz-navy mt-4 mb-2">The main form used for LLP incorporation is:</p>
                      <ul className="mb-4">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">FiLLiP (Form for Incorporation of Limited Liability Partnership)</span>
                        </li>
                      </ul>
                      <p className="text-sm font-semibold text-dbiz-navy mb-2">This form is filed along with supporting documents such as:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Identity proof of partners</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Address proof of partners</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Registered office address proof</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Consent of designated partners</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">5</span>
                        Certificate of Incorporation
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        After verification of the documents, the Registrar of Companies (ROC) issues the Certificate of Incorporation.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-dbiz-navy mb-2">The Certificate of Incorporation contains:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">LLPIN (Limited Liability Partnership Identification Number)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Date of incorporation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Legal confirmation of LLP existence</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">Once the certificate is issued, the LLP becomes a legally recognized business entity.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">6</span>
                        Execution of LLP Agreement
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        After incorporation, the partners must execute an LLP Agreement which defines the internal structure and management of the LLP.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-dbiz-navy mb-2">The LLP Agreement generally specifies:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Capital contribution of partners</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Profit sharing ratio</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Rights and duties of partners</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Decision-making procedures</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Management and operational rules</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">The LLP Agreement must be filed with the MCA within 30 days of incorporation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 7 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">7</span>
                        PAN and TAN Allocation
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        After LLP incorporation, the entity must obtain:
                      </p>
                      <div className="mt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Permanent Account Number (PAN) for income tax purposes</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Tax Deduction and Collection Account Number (TAN) if the LLP is required to deduct tax at source.</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">These are issued by the Income Tax Department and are necessary for financial and tax compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 8 */}
                <div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">8</span>
                        Opening an LLP Bank Account
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        The LLP must open a current bank account in the name of LLP for conducting business transactions.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-dbiz-navy mb-2">Banks generally require the following documents:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Certificate of Incorporation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">PAN of the LLP</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">LLP Agreement</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">KYC documents of partners</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Board/partner resolution for account opening</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 9 — spans full width */}
                <div className="md:col-span-2">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold flex-shrink-0">9</span>
                        Commencement of Business
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        After completing the above formalities, the LLP can legally commence business operations.
                      </p>
                      <div className="mt-4">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Capital contribution by partners</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Setting up financial and operational systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Complying with applicable tax and regulatory requirements</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4 italic">Once these steps are completed, the Limited Liability Partnership can start its business activities legally in India.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="pt-24 pb-16 bg-gray-50 scroll-mt-44">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Compliance
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance Requirements for Limited Liability Partnership (LLP)</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Registering an LLP is just the beginning; maintaining proper compliance is essential to ensure legal validity, smooth operations, and avoidance of penalties. Compared to companies, LLP compliance is simpler but still requires timely filings and proper financial reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  aspect: "LLP Agreement Filing",
                  req: "File LLP Agreement with authorities after incorporation",
                  timeline: "Within 30 days of incorporation",
                  importance: "Defines rights, duties, and profit-sharing among partners"
                },
                {
                  aspect: "Annual Return (Form 11)",
                  req: "File annual return with partner and management details",
                  timeline: "Annually (Within 60 days of FY end)",
                  importance: "Keeps official records updated and avoids heavy penalties"
                },
                {
                  aspect: "Statement of Accounts (Form 8)",
                  req: "File financial statement including assets, liabilities, and solvency",
                  timeline: "Annually (Within 30 days from 6 months of FY end)",
                  importance: "Ensures financial transparency and statutory compliance"
                },
                {
                  aspect: "Income Tax Return",
                  req: "File mandatory income tax return of LLP",
                  timeline: "Annually (By July 31st or Sept 30th if audit required)",
                  importance: "Mandatory tax compliance with Income Tax Dept"
                },
                {
                  aspect: "Books of Accounts",
                  req: "Maintain proper financial records of income and expenses",
                  timeline: "Continuous / Ongoing",
                  importance: "Provides accurate financial health and audit readiness"
                },
                {
                  aspect: "Statutory Audit",
                  req: "Conduct audit if turnover > 40L or contribution > 25L",
                  timeline: "Annually (if applicable)",
                  importance: "Verifies accuracy of financial statements for stakeholders"
                },
                {
                  aspect: "GST Compliance",
                  req: "File monthly/quarterly returns (GSTR-1, GSTR-3B)",
                  timeline: "Monthly / Quarterly",
                  importance: "Required to maintain active GST status and ITC eligibility"
                },
                {
                  aspect: "Partner Details Update",
                  req: "Update any changes in partners or address with ROC",
                  timeline: "Within 30 days of change",
                  importance: "Ensures legal records show current management"
                },
                {
                  aspect: "Bank Compliance",
                  req: "Maintain active bank account in LLP name",
                  timeline: "Continuous / Ongoing",
                  importance: "Ensures financial discipline and transparent transactions"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="bg-dbiz-navy p-5 text-white">
                    <h3 className="text-lg font-bold group-hover:text-dbiz-teal transition-colors">
                      {item.aspect}
                    </h3>
                  </div>
                  <div className="p-6 space-y-4 flex-grow">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Requirement</p>
                      <p className="text-gray-900 font-medium leading-relaxed">{item.req}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-50 flex items-start gap-3">
                      <Clock className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-dbiz-navy">Timeline</p>
                        <p className="text-sm text-gray-600">{item.timeline}</p>
                      </div>
                    </div>
                    <div className="pt-2 flex items-start gap-3">
                      <Shield className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-dbiz-navy">Importance</p>
                        <p className="text-sm text-gray-600 italic">"{item.importance}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <Info className="h-5 w-5 text-dbiz-teal mr-2" />
                  Important Notes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">No requirement for board meetings or annual general meetings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">LLP offers flexibility in internal management compared to companies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Compliance is mainly focused on annual filings and financial reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Proper and timely filing avoids additional fees and penalties</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <ThumbsUp className="h-5 w-5 text-dbiz-teal mr-2" />
                  Compliance Relaxation Advantage
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Reduced compliance burden compared to companies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">No complex meeting or governance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Flexible operational structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Lower administrative costs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Compliance Timeline Visual — mirroring Private Limited page style */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dbiz-navy mb-6 text-center">Post-Incorporation Compliance Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-dbiz-teal font-bold text-lg">30</span>
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">Within 30 Days</p>
                  <p className="text-xs text-gray-600 mt-1">LLP Agreement Filing</p>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <RefreshCw className="h-6 w-6 text-dbiz-teal" />
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">Annual Cycle</p>
                  <p className="text-xs text-gray-600 mt-1 uppercase">Statement of Accounts &rarr; Annual Return &rarr; Income Tax Filing &rarr; Audit (if applicable)</p>
                </div>
              </div>
            </div>

            {/* Registration Timeline Cards — matching Public/Private Limited design */}
            <div className="mt-16 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Estimated Timeline for LLP Registration</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all group">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-dbiz-teal/20 transition-colors">
                    <span className="text-dbiz-teal font-bold text-sm">1-2</span>
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">Days</p>
                  <p className="text-xs text-gray-600 mt-1">DSC and DPIN Acquisition</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all group">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-dbiz-teal/20 transition-colors">
                    <span className="text-dbiz-teal font-bold text-sm">1-2</span>
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">Days</p>
                  <p className="text-xs text-gray-600 mt-1">LLP Name Reservation</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all group">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-dbiz-teal/20 transition-colors">
                    <span className="text-dbiz-teal font-bold text-sm">2-3</span>
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">Days</p>
                  <p className="text-xs text-gray-600 mt-1">Document Preparation</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all group">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-dbiz-teal/20 transition-colors">
                    <span className="text-dbiz-teal font-bold text-sm">2-3</span>
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">Days</p>
                  <p className="text-xs text-gray-600 mt-1">ROC Approval & Incorporation</p>
                </div>

                <div className="bg-white rounded-xl border-2 border-dbiz-teal/20 p-5 shadow-md text-center hover:border-dbiz-teal/40 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1 bg-dbiz-teal/5">
                  <div className="bg-dbiz-teal/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-dbiz-teal font-bold text-sm">7-10</span>
                  </div>
                  <p className="text-sm font-bold text-dbiz-navy uppercase tracking-wider">Working Days</p>
                  <p className="text-xs text-dbiz-teal mt-1 font-bold">Total Registration Time</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-12 text-center italic font-medium">Last updated: March 2026</p>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-dbiz-navy p-4 rounded-t-xl text-white text-center">
                <h3 className="text-xl font-bold">Mandatory Compliance for LLP</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-x border-b border-gray-200 rounded-b-xl overflow-hidden bg-white">
                {[
                  { title: "Filing Statement of Accounts", form: "Form 8", timeline: "Annually" },
                  { title: "Filing Annual Return", form: "Form 11", timeline: "Annually" },
                  { title: "Income Tax Return", form: "ITR", timeline: "Annually" }
                ].map((item, i) => (
                  <div key={i} className={`p-6 text-center ${i !== 2 ? 'border-r border-gray-100' : ''} hover:bg-gray-50 transition-colors`}>
                    <p className="text-xs font-bold text-dbiz-teal uppercase tracking-widest mb-1">{item.form}</p>
                    <p className="text-sm font-bold text-dbiz-navy mb-2 leading-tight">{item.title}</p>
                    <div className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-500 uppercase">
                      <Clock className="h-3 w-3 mr-1" /> {item.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose us Section — following Private Limited page design exactly */}
        <section id="why-dbiz" className="pt-24 pb-16 scroll-mt-44">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why D BIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for LLP Registration?</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Registering a Limited Liability Partnership (LLP) is an important step for businesses seeking a balance between flexibility and limited liability protection. While the process is simpler than a company, it still requires proper documentation, structured agreements, and accurate filings. 
              </p>
            </div>

            {/* What We Handle vs What You Provide */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What D BIZ Handles
                </h3>
                <ul className="space-y-3">
                  {[
                    "Document validation and pre-submission review",
                    "Assistance in LLP name selection and availability check",
                    "Drafting of LLP Agreement (comprehensive and compliant)",
                    "DSC procurement for designated partners",
                    "Designated Partner Identification Number (DPIN/DIN) application",
                    "LLP incorporation filing and follow-up",
                    "Handling resubmissions or corrections (if required)",
                    "PAN and GST registration support (if applicable)",
                    "LLP Agreement filing within prescribed timeline",
                    "Post-registration compliance, guidance and reminders"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                </h3>
                <ul className="space-y-3">
                  {[
                    "Identity and address proofs of all partners",
                    "Passport-sized photographs",
                    "Registered office address proof (rent agreement / ownership documents)",
                    "Business activity details and preferred LLP name",
                    "Capital contribution details of partners"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-xl p-8 md:p-12 text-white overflow-hidden shadow-2xl mt-16">
              <div className="grid md:grid-cols-2 gap-12 items-center relative">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    That's where D BIZ CONSULTANCY comes in. We make the process simple and stress-free by handling all the details for you. From preparing and submitting accurate documents to ensuring full compliance with the LLP Act, our team is here to support you every step of the way. 
                  </p>
                  <p className="text-lg leading-relaxed mb-8">
                    With our experience and focus on your success, D BIZ CONSULTANCY is the trusted partner for entrepreneurs and businesses seeking reliable LLP registration and maintenance support.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white font-bold h-14 px-8 text-lg rounded-full shadow-lg shadow-dbiz-teal/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                          <Phone className="mr-2 h-5 w-5" /> Get Started Today
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-56 p-0 shadow-2xl border-none overflow-hidden transition-all duration-300">
                        <ContactOptions />
                      </PopoverContent>
                    </Popover>
                    <div className="text-sm opacity-60 italic mt-2 text-center sm:text-left">Trusted by 500+ Businesses</div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-all cursor-default">
                      <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                      <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                      <p className="text-white/80 text-sm">Professional support for LLP structuring and registration</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-all cursor-default">
                      <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                      <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
                      <p className="text-white/80 text-sm">Complete assistance from registration to compliance</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-all cursor-default">
                      <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                      <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                      <p className="text-white/80 text-sm">Clear communication and no hidden charges</p>
                    </div>

                    <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-all cursor-default">
                      <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                      <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                      <p className="text-white/80 text-sm">Quick and efficient execution of all services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section — relocated to the bottom */}
        <section id="faqs" className="pt-24 pb-16 scroll-mt-44">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                FAQs
              </div>
              
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on LLP Registration</h2>
            <p className="text-sm text-gray-500 mb-2 italic text-center">Last updated: March 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Whether you're exploring LLP formation, partner responsibilities, compliance requirements, or taxation — here are the most commonly asked questions explained in a clear and practical manner.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  1. What is a Limited Liability Partnership (LLP)?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  A Limited Liability Partnership (LLP) is a business structure governed by the Limited Liability Partnership Act, 2008, which combines the flexibility of a partnership firm with the advantage of limited liability protection. In an LLP, partners are not personally liable for the debts and obligations of the business beyond their agreed contribution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  2. How many partners are required to start an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  A minimum of two partners is required to incorporate a Limited Liability Partnership. There is no maximum limit on the number of partners in an LLP.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  3. Who are designated partners in an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Designated partners are individuals responsible for legal compliance and regulatory filings of the LLP. Every LLP must have at least two designated partners, and one of them must be a resident of India.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  4. Is there a minimum capital requirement for LLP registration?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  No. There is no mandatory minimum capital requirement to register an LLP. Partners can decide the capital contribution based on their business needs and mutual agreement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  5. Is audit mandatory for an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Statutory audit is required only if:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>The annual turnover exceeds ₹40 lakh, or</li>
                    <li>The capital contribution exceeds ₹25 lakh</li>
                  </ul>
                  If these limits are not crossed, audit is not mandatory.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  6. What documents are required for LLP registration?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  The basic documents required include:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>PAN card of partners</li>
                    <li>Aadhaar card / Passport / Voter ID</li>
                    <li>Address proof of partners (bank statement or utility bill)</li>
                    <li>Passport-size photographs</li>
                    <li>Registered office address proof and NOC from the owner</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  7. How long does it take to register an LLP in India?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  The LLP registration process generally takes 7 to 10 working days, depending on document verification, name approval, and processing by the Registrar of Companies (ROC).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  8. Can LLP have corporate partners?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. An LLP can have individual partners as well as corporate partners, such as companies or other LLPs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  9. What are the annual compliance requirements for an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Every LLP must comply with the following annual filings:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Form 11 – Annual Return</li>
                    <li>Form 8 – Statement of Accounts and Solvency</li>
                    <li>Income Tax Return filing</li>
                  </ul>
                  These filings ensure compliance with the LLP Act and income tax regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  10. Can a Private Limited Company be converted into an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. A Private Limited Company can be converted into an LLP by following the conversion provisions under the LLP Act and filing the required forms with the Ministry of Corporate Affairs (MCA).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  11. Can foreign nationals become partners in an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. Foreign nationals and Non-Resident Indians (NRIs) can become partners in an LLP in India, subject to Foreign Direct Investment (FDI) regulations and sector-specific restrictions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  12. Why choose LLP for professional services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  LLPs are commonly chosen by professionals such as consultants, accountants, lawyers, architects, and startups because they offer limited liability, flexible management, and lower compliance requirements compared to companies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  13. Can an LLP have only individual partners?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  No. An LLP can have individual partners as well as corporate partners, such as companies or other LLPs. However, at least two designated partners must be individuals, and one of them must be a resident of India.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  14. Is an LLP required to have a registered office?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. Every LLP must have a registered office address in India for receiving official communications from the Ministry of Corporate Affairs (MCA) and other regulatory authorities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  15. Can the registered office of an LLP be changed after incorporation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. An LLP can change its registered office address after incorporation by passing a resolution among partners and filing the required form with the Registrar of Companies (ROC).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  16. Is GST registration mandatory for an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  GST registration is not mandatory for every LLP. It becomes compulsory only when the LLP’s annual turnover exceeds the prescribed threshold under GST law or when the LLP is engaged in interstate supply or specific notified services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  17. Can an LLP raise funds from the public?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  No. LLPs cannot raise funds from the public by issuing shares. Capital in an LLP is usually raised through partner contributions, loans, or private funding arrangements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-18" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  18. Can an LLP be converted into a Private Limited Company?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. An LLP can be converted into a Private Limited Company by following the provisions of the Companies Act, 2013 and filing the required documents with the Ministry of Corporate Affairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-19" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  19. Is it mandatory to maintain books of accounts for an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. Every LLP must maintain proper books of accounts relating to its financial transactions and prepare financial statements in accordance with the LLP Act.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-20" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  20. What is the tax treatment of an LLP in India?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  An LLP is taxed as a separate legal entity under the Income Tax Act. The LLP pays tax on its profits, and partners are generally not taxed again on the share of profits received from the LLP.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-21" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  21. Can an LLP operate in multiple business activities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  Yes. An LLP can carry out multiple business activities as long as they are permitted under law and clearly mentioned in the LLP Agreement or related incorporation documents.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-22" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline text-left">
                  22. Who regulates LLPs in India?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  LLPs in India are regulated by the Ministry of Corporate Affairs (MCA) and governed by the Limited Liability Partnership Act, 2008 along with related rules and regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LLPRegistrationPage;