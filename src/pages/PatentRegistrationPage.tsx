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

const PatentRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const publishDate = "2026-03-01T10:00:00+05:30";
  const modifiedDate = "2026-04-23T12:45:00+05:30";

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

  const seoTitle = location === undefined
    ? "Patent Registration Services in India | Patent Filing | D BIZ CONSULTANCY"
    : `Patent Registration in ${cityName} | Patent Filing in ${cityName}`;

  const seoDescription = location === undefined
    ? "Register your patent in India with D Biz Consultancy Private Limited. Secure your inventions and technical solutions with expert support and professional filing."
    : `Patent Registration in ${cityName}. Secure your inventions and technical solutions with D Biz Consultancy. Expert support for patent filing in ${cityName}.`;

  const seoUrl = location ? `/patent-registration/${location}` : "/patent-registration";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "Patent Registration", item: "/patent-registration" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: `/patent-registration/${location}` });
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
        keywords={`patent registration ${cityName}, patent filing ${cityName}, register invention india, intellectual property`}
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
                  Patent Registration Services{location ? ` in ${cityName}` : ""}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Register your patent in India with D Biz Consultancy Private Limited. Secure your inventions and technical solutions with expert support and professional filing.
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
                { id: 'definition', icon: FileText, label: 'What is a Patent?' },
                { id: 'features', icon: Shield, label: 'Types & Importance' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'classes', icon: Search, label: 'Patentability & Timeline' },
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
                  In today’s innovation-driven business environment<br />
                  Patent Registration – Legal Protection
                </h2>
                <div className="text-gray-700 leading-relaxed mb-8 text-lg">
                  <p>In today’s innovation-driven business environment, inventions and technical solutions are valuable intellectual assets for individuals, startups, and businesses. A new product, process, system, or technical improvement can create a strong competitive advantage and long-term commercial value. Patent Registration is a legal process that grants exclusive rights to the inventor or applicant over an invention. It protects the functional and technical aspects of a product or process and prevents others from making, using, selling, or importing the invention without permission. Without proper patent protection, an invention may be copied, commercially exploited, or used by competitors without authorization. A structured patent registration process helps establish legal ownership, strengthens enforcement rights, and supports commercialization of innovation. Governed by the Patents Act, 1970 and the Patents Rules, 2003, and administered by the Patent Office, patent protection is important for inventors, researchers, startups, manufacturers, and technology-based businesses. At D Biz Consultancy Private Limited, we provide professional end-to-end patent registration services, helping clients protect their inventions with clarity, technical accuracy, and legal support.</p>
                </div>

              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,44,95,0.1)] group">
                  <div className="absolute inset-0 bg-dbiz-navy/5 mix-blend-multiply transition-colors group-hover:bg-transparent duration-500 z-10"></div>
                  <CachedImage
                    src="/dbiz-uploads/trademark-intro-v2.jpg"
                    alt="Patent Registration Branding and Growth"
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
              {/* Left Column: What is a Patent? */}
              <div id="definition" className="flex-1 text-left scroll-mt-32 pt-4">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-8">3. What is a Patent?</h2>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 font-medium">
                  <li>A patent is a legal right granted by the government to an inventor for a new invention.</li>
                  <li>It protects the functional and technical aspects of a product or process and gives the patent holder exclusive rights over the invention for a limited period.</li>
                  <li>A patent protects a new invention</li>
                  <li>It applies to the technical or functional features of a product or process</li>
                  <li>It grants exclusive rights to prevent unauthorized making, using, selling, or importing</li>
                  <li>It helps protect innovation from commercial exploitation by others</li>
                  <li>It allows licensing, assignment, or commercialization of the invention</li>
                  <li>It provides strong legal protection for technical innovation</li>
                </ul>
              </div>

              {/* Right Column: Legal Framework */}
              <div id="legal" className="lg:w-[500px] xl:w-[600px] shrink-0 scroll-mt-32">
                <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 text-left w-full h-full flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold font-sans text-dbiz-navy mb-4">2. Patent Registration – Legal Framework</h2>
                  
                  <h3 className="text-base font-bold text-dbiz-teal mb-2">Definition under the Patents Act, 1970</h3>
                  <p className="text-gray-700 mb-4 font-medium leading-relaxed text-sm">
                    The Patents Act, 1970 provides legal protection to inventions and grants exclusive rights to the patentee to prevent others from making, using, offering for sale, selling, or importing the patented invention without authorization, subject to the provisions of the Act.
                  </p>

                  <h3 className="text-base font-bold text-dbiz-teal mb-3">Key Legal Provisions Include:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Protection is granted for new inventions that involve an inventive step and are capable of industrial application",
                      "Patents protect functional and technical features, unlike design registration which protects appearance",
                      "Patent applications may be filed with a provisional or complete specification",
                      "Publication generally takes place after 18 months, unless early publication is requested",
                      "Examination is conducted only after a request for examination is filed",
                      "A granted patent is valid for 20 years from the date of filing for standard applications"
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
                    The process is administered by the Patent Office, under the Office of the Controller General of Patents, Designs and Trade Marks, which examines applications, issues examination reports, and grants patents where the legal requirements are satisfied.
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
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Types of Patent Applications & Importance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Patent applications can be filed in different forms depending on the stage of invention, filing strategy, and territorial requirements.</p>
            </div>
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Types of Patent Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 mb-16">
              {[
                { title: "Provisional Application", desc: "Filed to secure an early filing date when the invention is still being developed. A complete specification must be filed within 12 months." },
                { title: "Complete Application", desc: "Filed with the full and final specification containing complete details of the invention, including claims and drawings where required." },
                { title: "Convention Application", desc: "Filed in India claiming priority from an earlier application filed in another convention country, subject to the applicable time limits." },
                { title: "PCT International Application", desc: "Used for seeking patent protection internationally through the Patent Cooperation Treaty route." },
                { title: "Divisional Application", desc: "Filed where an earlier application contains more than one invention." },
                { title: "Patent of Addition", desc: "Filed for improvement or modification of an invention already disclosed in the main patent." }
              ].map((item, idx) => (
                <TrademarkTypeCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
            <h3 className="text-3xl font-black text-dbiz-navy mb-8 text-center uppercase tracking-tighter">6. Why Patent Registration is Important</h3>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed font-medium px-4">
              Patent registration is important because it protects the technical innovation of an inventor and gives the owner exclusive legal rights over its use. It helps prevent others from commercially exploiting the invention and supports long-term business value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Shield, title: "Exclusive Rights", desc: "Gives the owner exclusive legal control over the invention" },
                { icon: AlertTriangle, title: "Prevents Unauthorized Use", desc: "Stops competitors from making, using, or selling the patented invention" },
                { icon: Award, title: "Supports Commercialization", desc: "Enables licensing, assignment, and royalty generation" },
                { icon: Globe, title: "Helps Recover R&D Investment", desc: "Protects the commercial value of research and development" },
                { icon: Scale, title: "Creates Intellectual Property Asset", desc: "Adds value to the business as a recognized IP asset" },
                { icon: Briefcase, title: "Strengthens Market Position", desc: "Gives the inventor a technical and competitive advantage" }
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
              <h2 className="text-4xl font-black text-dbiz-navy mb-8 tracking-tighter uppercase">7. Documents Required for Patent Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium px-4">
                The documents required for patent registration may vary depending on whether the applicant is an individual inventor or a company/LLP, but proper documentation is essential in all cases. Patent filing also requires technical documentation in addition to identity and business documents.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Individuals / Inventors */}
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
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white relative z-10">For Individuals / Inventors</h3>
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Personal Identity & Technical Proof</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "PAN Card / Identity Proof", desc: "Used as identity proof of the applicant and for official verification." },
                      { label: "Aadhaar / Address Proof", desc: "Required to confirm the address details of the applicant." },
                      { label: "Title & Abstract", desc: "Title and a brief summary of the invention to be registered." },
                      { label: "Technical Specification", desc: "Detailed description, drawings, flowcharts, or diagrams supporting the invention." }
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
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Entity Registration & Technical Details</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "Company PAN & CoI", desc: "Identity proof and Certificate of Incorporation of the entity." },
                      { label: "Authorization Letter", desc: "Board Resolution authorizing a representative to handle the patent application." },
                      { label: "Technical Specification", desc: "Title, details, and complete technical specification and drawings of the invention." },
                      { label: "Inventor Details", desc: "Information about the actual inventors and supporting forms/declarations." }
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
                  Proper and accurate documentation plays a crucial role in the patent registration process. It helps ensure correct filing, smooth examination, and stronger legal support for the invention.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Form 1</span>
                    <span className="text-xs text-gray-500">Application for grant</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Form 2</span>
                    <span className="text-xs text-gray-500">Specification</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Form 3</span>
                    <span className="text-xs text-gray-500">Undertaking</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Form 5</span>
                    <span className="text-xs text-gray-500">Inventorship</span>
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
              <h2 className="text-4xl font-bold font-sans text-dbiz-navy mb-8">8. Step-by-Step Patent Registration Process</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">We implement a highly structured 11-step approach to ensure technical accuracy, legal compliance, and maximum protection for your innovation.</p>
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
                    d: "The process begins with collecting complete details of the applicant and the invention. At this stage, the invention is reviewed to determine whether it is new, involves an inventive step, and is capable of industrial application. Technical documents and drawings are finalized.",
                    img: "/dbiz-uploads/tm-step1.png"
                  },
                  { 
                    s: "02", 
                    t: "Patent Search", 
                    d: "A prior-art or patent search is generally conducted to assess novelty and identify similar existing inventions or publications. This helps evaluate the chances of patentability and reduces the risk of rejection during examination.",
                    img: "/dbiz-uploads/tm-step2.png"
                  },
                  { 
                    s: "03", 
                    t: "Drafting of Specification", 
                    d: "The invention is described in detail through a provisional or complete specification, including technical background, detailed description, abstract, and claims. The claims define the legal scope of protection.",
                    img: "/dbiz-uploads/tm-step3.png"
                  },
                  { 
                    s: "04", 
                    t: "Filing of Patent Application", 
                    d: "The application is filed with the Patent Office in the prescribed form along with the required fee. If filed provisionally, the complete specification must be filed within 12 months.",
                    img: "/dbiz-uploads/tm-step4.png"
                  },
                  { 
                    s: "05", 
                    t: "Application Number Generation", 
                    d: "After successful filing, an official application number is generated. This serves as acknowledgment of submission and is used for tracking the status of the patent application.",
                    img: "/dbiz-uploads/tm-step5.png"
                  },
                  { 
                    s: "06", 
                    t: "Publication of Application", 
                    d: "Applications are generally published after 18 months from filing, unless early publication is requested. Publication makes the application visible in the official records.",
                    img: "/dbiz-uploads/tm-step6.png"
                  },
                  { 
                    s: "07", 
                    t: "Request for Examination", 
                    d: "A request for examination must be filed in the prescribed form. After publication and filing of the request, the application is taken up for examination by the Patent Office.",
                    img: "/dbiz-uploads/tm-step7.png"
                  },
                  { 
                    s: "08", 
                    t: "Examination and FER", 
                    d: "The Patent Office examines the application for novelty and industrial applicability. If objections arise, they are communicated through the First Examination Report (FER).",
                    img: "/dbiz-uploads/tm-step8.png"
                  },
                  { 
                    s: "09", 
                    t: "Reply to FER / Hearing", 
                    d: "The applicant must submit an appropriate reply within the prescribed time and may also need to attend a hearing if required. Proper technical response is essential at this stage.",
                    img: "/dbiz-uploads/tm-step9.png"
                  },
                  { 
                    s: "10", 
                    t: "Grant of Patent", 
                    d: "Once all legal and technical requirements are fulfilled and objections are resolved, the patent is granted and recorded in the official register.",
                    img: "/dbiz-uploads/tm-step10.png"
                  },
                  { 
                    s: "11", 
                    t: "Post-Grant Maintenance", 
                    d: "After grant, renewal fees must be paid to keep the patent in force for the full term. If renewal fees are not paid, the patent may lapse.",
                    img: "/dbiz-uploads/tm-step1.png"
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

        {/* Patentability Section */}
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
                    <h3 className="text-white text-2xl font-bold mb-2">Technical Innovation</h3>
                    <p className="text-gray-200 font-medium">Protecting products, processes, and systems that drive industrial progress.</p>
                  </div>
                </div>
              </div>

              {/* Right Side Writings */}
              <div className="lg:w-[55%] flex flex-col">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-4">5. What Can Be Patented?</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    An invention may be considered for patent protection if it satisfies the legal requirements. In general, an invention must be new, involve an inventive step, and be capable of industrial application.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Briefcase className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">New Products</span>
                      <span className="text-gray-600 font-medium">Functional features</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Briefcase className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">New Processes</span>
                      <span className="text-gray-600 font-medium">Technical methods</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">Common Examples:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      { c: "Mechanical", d: "New machines, devices, or mechanical systems" },
                      { c: "Industrial", d: "New manufacturing methods or processes" },
                      { c: "Chemical", d: "New compositions or formulations" }
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
                        Certain subject matter is not patentable, such as mathematical methods, abstract ideas, and mere discoveries, among other exclusions.
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
                  { v: "Now", u: "Filing", t: "Application Filing", d: "Same day submission, subject to document readiness" },
                  { v: "18", u: "Months", t: "Publication", d: "Publication occurs after 18 months from filing/priority date" },
                  { v: "RFE", u: "Request", t: "Examination", d: "Examination begins after filing Request for Examination (RFE)" },
                  { v: "Years", u: "Wait", t: "Examination to Grant", d: "Commonly takes several months to years depending on complexity" },
                  { v: "2-4", u: "Years", t: "Patent Grant", d: "May take around 2 to 4 years or more depending on backlog" },
                  { v: "20", u: "Years", t: "Validity of Patent", d: "20 years from the date of filing for standard applications" }
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
              <p className="text-center text-gray-500 mt-8 text-sm italic font-medium">Annual renewal fees are required to keep the patent in force. The timeline may vary depending on publication, request for examination, objections, hearings, and processing time.</p>
            </div>
          </div>
        </section>

        {/* Rights Section */}
        <section id="rights" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom relative">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-16 text-center">10. Patent Rights and Protection</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  t: "Exclusive Right to Use the Invention", 
                  d: "The patent holder gets exclusive legal rights over the invention, ensuring full control over its commercial use.",
                  icon: Shield
                },
                { 
                  t: "Prevent Unauthorized Exploitation", 
                  d: "Others can be restrained from making, using, selling, or importing the invention without permission.",
                  icon: Gavel
                },
                { 
                  t: "Right to License, Assign, or Sell", 
                  d: "A patent can be commercially transferred, assigned, or licensed for revenue generation and market expansion.",
                  icon: Scale
                },
                { 
                  t: "Legal Protection Against Infringement", 
                  d: "The owner can take legal action against infringement and enforce technical rights effectively through statutory routes.",
                  icon: Briefcase
                },
                { 
                  t: "Strengthens Innovation and Market Position", 
                  d: "A patent improves technical standing, brand value, and competitive strength in the business environment.",
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
            
            <div className="mt-16 flex items-center justify-center gap-3 text-gray-600 font-bold italic">
              <ShieldCheck className="w-5 h-5 text-dbiz-teal" />
              <span>Patent registration grants the owner important legal rights and protection over the patented invention.</span>
            </div>
          </div>
        </section>

        {/* Common Challenges Section */}
        <section id="risks" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-6">11. Common Challenges and Risks</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Patent registration is a technical and legal process that may involve several challenges if the application is not properly prepared, drafted, or prosecuted.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              <div className="space-y-4">
                {[
                  { t: "Lack of Novelty", d: "If similar prior art already exists, the invention may not qualify for registration during examination." },
                  { t: "Weak or Improper Drafting", d: "Poor specification or claim drafting may weaken protection or lead to refusal by the Patent Office." },
                  { t: "Lack of Inventive Step", d: "If the invention is obvious to a skilled person, it may be rejected as per the legal provisions." },
                  { t: "Missing Filing Deadlines", d: "Delay in filing complete specification, examination request, or replies may affect the application status." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(180,83,9,0.05)] transition-all duration-300">
                    <div>
                      <strong className="text-dbiz-navy block text-lg mb-1 font-bold leading-tight">{item.t}</strong>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { t: "Technical Errors", d: "Incomplete or unclear technical disclosure in documentation may create major issues during prosecution." },
                  { t: "Prosecution and Maintenance", d: "Patent prosecution and post-grant renewals require constant planning, monitoring, and follow-up." },
                  { t: "Territorial Limitation", d: "Patent rights are territorial and separate filing strategy may be needed for other countries." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(180,83,9,0.05)] transition-all duration-300">
                    <div>
                      <strong className="text-dbiz-navy block text-lg mb-1 font-bold leading-tight">{item.t}</strong>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-500 mt-12 font-bold italic">With proper guidance, accurate drafting, and professional support, these challenges and risks can be effectively minimized.</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-8">12. Why Choose D BIZ CONSULTANCY for Patent Registration?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Protecting an invention requires more than simply filing a patent application. Patent registration involves proper patentability assessment, technical drafting, legal compliance, timely filing, and continuous follow-up with the authorities. Any error, weak drafting, or missed deadline may lead to objections, delay, or rejection.
                </p>
                <p className="text-lg text-black leading-relaxed font-medium">
                  D BIZ CONSULTANCY provides complete support to make the patent registration process smooth, accurate, and professionally managed. We assist clients from the initial stage of evaluating the invention up to the final stage of grant and post-grant support, helping ensure that innovation is legally protected without unnecessary complications.
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
                    items: ["Patent search and review", "Patentability analysis", "Guidance on filing strategy", "Application type identification"],
                  },
                  {
                    t: "Documentation",
                    d: "Filing Support",
                    items: ["Drafting specification", "Preparation of forms", "Verification of documents", "Accurate official filing"],
                  },
                  {
                    t: "Follow-Up",
                    d: "Examination Handling",
                    items: ["Status tracking", "Responding to FER", "Hearing coordination", "Registry follow-up"],
                  },
                  {
                    t: "Post-Grant",
                    d: "Assistance",
                    items: ["Renewal guidance", "Licensing support", "Protection advisory", "Ongoing IP assistance"],
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
                    To begin your patent registration journey, we require a few essential details to ensure the application is technically complete and accurate.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold border border-white/20 shadow-xl">
                    <AlertTriangle className="w-6 h-6 text-dbiz-teal" />
                    <span>Essential Checklist</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Applicant details",
                    "Invention details and description",
                    "Drawings / flowcharts / diagrams",
                    "Inventor details",
                    "Use and development details"
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
                { t: "Professional Guidance", d: "Experienced support at every stage of the process", i: User },
                { t: "Complete Management", d: "End-to-end assistance from review to grant", i: Briefcase },
                { t: "Accurate Filing", d: "Careful handling of drafting and technical requirements", i: FileText },
                { t: "Transparent Support", d: "Simple communication and smooth coordination", i: Users },
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
            <p className="text-center text-gray-500 mt-12 font-medium italic">With D BIZ CONSULTANCY, your patent registration is handled with care, clarity, and professional attention, allowing you to focus on innovation while we take care of the process.</p>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32 border-t border-gray-200">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 font-medium italic">Essential knowledge for patent protection and compliance.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "What is a patent?", a: "A patent is a legal right granted for a new invention that protects its technical and functional features." },
                  { q: "What is the validity of a patent?", a: "A patent is generally valid for 20 years from the date of filing, subject to payment of renewal fees." },
                  { q: "Is patent registration mandatory?", a: "No, but it is essential if you want exclusive legal protection over your invention." },
                  { q: "Can I apply for a patent before launching my product?", a: "Yes. In fact, filing before public disclosure is generally advisable because public disclosure can affect novelty." },
                  { q: "Can software be patented?", a: "Certain software-related inventions may be considered if they demonstrate technical effect or technical application, subject to the law and examination." },
                  { q: "Can I sell or transfer my patent?", a: "Yes. A patent may be assigned, sold, or transferred through the proper legal process." },
                  { q: "Can I license my patent?", a: "Yes. Patents can be licensed to others for commercial use and royalty income." },
                  { q: "What is the difference between a provisional and complete application?", a: "A provisional application secures an early filing date, while a complete application contains the full specification and claims." },
                  { q: "Can multiple inventors file jointly?", a: "Yes. Joint inventors or joint applicants may file a patent application together." },
                  { q: "What is prior art?", a: "Prior art means existing knowledge, documents, inventions, or publications relevant to the claimed invention." },
                  { q: "What is patent infringement?", a: "Patent infringement occurs when a patented invention is made, used, sold, or imported without permission." },
                  { q: "Can a patent application be filed online?", a: "Yes. Online filing is available through the official system." },
                  { q: "What happens after publication?", a: "After publication, the application becomes publicly visible, and certain rights may accrue subject to the law." },
                  { q: "What is examination in patent registration?", a: "Examination is the stage where the Patent Office reviews the application for patentability and compliance." },
                  { q: "Can a patent application be rejected?", a: "Yes. It may be rejected if the invention lacks novelty, inventive step, industrial applicability, or proper compliance." },
                  { q: "What is expedited examination?", a: "It is a faster examination route available in eligible cases under the rules. The Patents Rules, 2003 include provisions on expedited examination." },
                  { q: "Are there benefits for startups?", a: "Yes. Certain fee benefits and procedural advantages may be available to eligible startups under the applicable framework." },
                  { q: "Is patent protection international?", a: "No. Patent protection is territorial, though international routes such as PCT may be used for wider filing strategy." },
                  { q: "What happens if renewal fees are not paid?", a: "The patent may lapse if the required renewal fees are not paid within the prescribed time." },
                  { q: "Why should I take professional support for patent registration?", a: "Patent registration involves technical drafting, legal compliance, prosecution strategy, and deadline management. Professional support reduces the risk of rejection or weak protection." }
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

export default PatentRegistrationPage;