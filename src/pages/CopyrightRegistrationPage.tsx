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
  Music,
  Video,
  Code,
  Image as ImageIcon,
  BookOpen,
  Clapperboard
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

const CopyrightRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const publishDate = "2026-03-01T10:00:00+05:30";
  const modifiedDate = "2026-04-23T12:45:00+05:30";

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

  const seoTitle = location === undefined
    ? "Copyright Registration Services in India | Register Original Work | D BIZ CONSULTANCY"
    : `Copyright Registration in ${cityName} | Register Original Work in ${cityName}`;

  const seoDescription = location === undefined
    ? "Register your copyright in India with D Biz Consultancy Private Limited. Secure your creative works, software, music, and designs with expert support."
    : `Copyright Registration in ${cityName}. Secure your creative works and intellectual property with D Biz Consultancy. Expert support for copyright filing in ${cityName}.`;

  const seoUrl = location ? `/copyright-registration/${location}` : "/copyright-registration";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "Copyright Registration", item: "/copyright-registration" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: `/copyright-registration/${location}` });
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
        keywords={`copyright registration ${cityName}, register original work ${cityName}, intellectual property protection, copyright act 1957`}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <Breadcrumbs items={breadcrumbs.map(b => ({ name: b.name, path: b.item, current: b.item === seoUrl }))} />

        {/* Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 md:py-40 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center select-none pointer-events-none"
            style={{ backgroundImage: "url('/dbiz-uploads/copyright-registration-hero.png')" }}
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
                  Copyright Registration Services{location ? ` in ${cityName}` : ""}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Register your copyright in India with D Biz Consultancy Private Limited. Secure your creative works, software, music, and designs with expert support.
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
                { id: 'definition', icon: FileText, label: 'What is Copyright?' },
                { id: 'features', icon: Shield, label: 'Types & Importance' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'classes', icon: Search, label: 'Timeline & Validity' },
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
                  In today’s digital and creative world<br />
                  Copyright Registration – Legal Protection
                </h2>
                <div className="text-gray-700 leading-relaxed mb-8 text-lg">
                  <p>In today’s digital and creative world, intellectual property is a valuable asset for individuals and businesses alike. Original works such as content, designs, software, music, and artistic creations involve creativity, effort, and commercial value, making legal protection important. Protecting such work helps creators and businesses preserve ownership and prevent unauthorized use. Copyright Registration is a legal process that grants exclusive rights to the creator or owner of an original work. It gives legal control over reproduction, distribution, publication, and commercial use of the work, helping prevent copying, misuse, or exploitation by others. It also creates a stronger legal foundation for establishing ownership and protecting creative assets. Without proper protection, original works may be vulnerable to infringement and unauthorized use. A structured copyright registration process helps establish clear ownership rights and strengthens legal protection in the event of disputes. Governed by the Copyright Act, 1957 and administered by the Copyright Office, copyright protection is important for creators, authors, software developers, artists, and businesses seeking to safeguard their intellectual assets. At D Biz Consultancy Private Limited, we provide professional end-to-end copyright registration services, from application filing to final registration, helping clients protect their creative work with clarity and confidence.</p>
                </div>

              </div>
              <div className="md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,44,95,0.1)] group">
                  <div className="absolute inset-0 bg-dbiz-navy/5 mix-blend-multiply transition-colors group-hover:bg-transparent duration-500 z-10"></div>
                  <CachedImage
                    src="/dbiz-uploads/copyright-intro-final.png"
                    alt="Copyright Registration Protection"
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
              {/* Left Column: What is Copyright? */}
              <div id="definition" className="flex-1 text-left scroll-mt-32 pt-4">
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-8">3. What is Copyright?</h2>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 font-medium">
                  <li>Copyright is a legal right granted to the creator of an original work.</li>
                  <li>It protects original creative expressions such as literary works, artistic works, musical works, software, and digital content.</li>
                  <li>It gives the creator exclusive rights to use, reproduce, distribute, publish, perform, and adapt the work.</li>
                  <li>It helps prevent unauthorized copying, misuse, or commercial exploitation of the work.</li>
                  <li>Copyright protects the expression of an idea, not the idea itself.</li>
                  <li>In simple terms, a concept or theme cannot be protected, but the original way it is written, designed, composed, or created can be protected.</li>
                  <li>It acts as an important legal safeguard for creators, authors, artists, designers, software developers, and businesses.</li>
                  <li>Copyright protection strengthens ownership rights and supports legal action in case of infringement.</li>
                </ul>
              </div>

              {/* Right Column: Legal Framework */}
              <div id="legal" className="lg:w-[500px] xl:w-[600px] shrink-0 scroll-mt-32">
                <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 text-left w-full h-full flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold font-sans text-dbiz-navy mb-4">2. Copyright Registration – Legal Framework</h2>
                  
                  <h3 className="text-base font-bold text-dbiz-teal mb-2">Definition under the Copyright Act, 1957</h3>
                  <p className="text-gray-700 mb-4 font-medium leading-relaxed text-sm">
                    The Copyright Act, 1957 provides legal protection to creators of original works and grants them exclusive rights over their creations. Copyright is a legal right that arises automatically upon creation and can be formally registered for stronger legal recognition.
                  </p>

                  <h3 className="text-base font-bold text-dbiz-teal mb-3">Key Legal Provisions Include:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Protection is granted for original literary, artistic, musical, dramatic, and digital works",
                      "Copyright protects the expression of an idea, not the idea itself",
                      "Registration creates official evidence of ownership and strengthens legal claims",
                      "Rights include reproduction, distribution, publication, licensing, and commercial use",
                      "Moral rights protect authorship and the reputation of the creator"
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
                    The process is administered by the Copyright Office, Government of India, which examines applications and issues registration certificates.
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
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Types of Copyright Works & Importance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Under the Copyright Act, copyright protection is available for a wide range of original creative works. If a work is original and expressed in a creative form, it can generally be registered and legally protected.</p>
            </div>
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Types of Works that can be Registered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 mb-16">
              {[
                { title: "Literary Works", desc: "books, articles, blogs, poems, scripts, written content, computer programs, software code, and databases." },
                { title: "Dramatic Works", desc: "plays, screenplays, dramatic scripts, and choreographic notations." },
                { title: "Musical Works", desc: "original musical compositions, sheet music, and musical notations." },
                { title: "Artistic Works", desc: "paintings, drawings, sketches, logos, designs, photographs, and architectural works." },
                { title: "Cinematograph Films", desc: "movies, documentaries, videos, animations, and other visual recordings." },
                { title: "Sound Recordings", desc: "recorded music, audio tracks, voice recordings, and podcasts." }
              ].map((item, idx) => (
                <TrademarkTypeCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
            <h3 className="text-3xl font-black text-dbiz-navy mb-8 text-center uppercase tracking-tighter">5. Why Copyright Registration is Important</h3>
            <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16 text-lg leading-relaxed font-medium px-4">
              Copyright registration is important because it strengthens the legal protection available for an original work and creates a formal record of ownership. Although copyright exists from the moment a work is created, registration provides stronger evidentiary value in case of disputes, infringement, or unauthorized use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Shield, title: "Establishes Proof of Ownership", desc: "Creates an official record of ownership and helps support the creator’s legal claim over the work." },
                { icon: AlertTriangle, title: "Protects Against Unauthorized Use", desc: "Helps prevent copying, misuse, reproduction, or exploitation of the work without permission." },
                { icon: Gavel, title: "Strengthens Legal Protection", desc: "Enables the owner to take legal action more effectively in case of infringement or disputes." },
                { icon: Globe, title: "Adds Commercial Value", desc: "Makes it easier to license, sell, assign, transfer, or monetize the work." },
                { icon: Award, title: "Supports Brand and Creative Identity", desc: "Helps protect the originality, reputation, and identity associated with the creator or business." },
                { icon: ShieldCheck, title: "Acts as a Deterrent", desc: "Discourages potential infringers by creating a formal and recognized claim over the work." }
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
              <h2 className="text-4xl font-black text-dbiz-navy mb-8 tracking-tighter uppercase">6. Documents Required for Copyright Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium px-4">
                The documents required for copyright registration may vary depending on whether the applicant is an individual or a company/entity, but certain basic documents are commonly required in all cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Individuals */}
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
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white relative z-10">For Individuals</h3>
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Personal Identity & Original Work</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "Identity proof", desc: "PAN, Aadhaar, Passport, or other valid ID." },
                      { label: "Address proof", desc: "Required to confirm the address details of the applicant." },
                      { label: "Soft copy of original work", desc: "In relevant format such as PDF, JPG, MP3, MP4, or source file." },
                      { label: "Details of creator/author", desc: "Information about the actual creator of the work." }
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
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-white relative z-10">For Companies, LLPs, or Entities</h3>
                      <p className="text-dbiz-teal font-bold mt-1 relative z-10">Entity Registration & Ownership Proof</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { label: "Entity Registration", desc: "PAN, Certificate of Incorporation, or Partnership Deed of the entity." },
                      { label: "Authorization", desc: "Board Resolution or Authorization Letter for filing the application." },
                      { label: "Ownership Proof", desc: "Proof showing that the work belongs to the company or entity." },
                      { label: "NOC from Creators", desc: "Required from employees, contractors, or creators wherever applicable." }
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
                  Proper documentation is crucial to ensure a smooth filing process and avoid objections or delays. Well-drafted employment or assignment agreements are necessary to clearly establish ownership.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Identity Proof</span>
                    <span className="text-xs text-gray-500">Applicant verification</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Soft Copy</span>
                    <span className="text-xs text-gray-500">Original creative work</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">NOC</span>
                    <span className="text-xs text-gray-500">Author authorization</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <span className="block font-bold text-dbiz-teal">Declaration</span>
                    <span className="text-xs text-gray-500">Authorship confirmation</span>
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
              <h2 className="text-4xl font-bold font-sans text-dbiz-navy mb-8">7. Step-by-Step Copyright Registration Process</h2>
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
                    d: "The process begins with collecting the complete details of the original work and the applicant. Nature of the work is identified and supporting documents are prepared.",
                    img: "/dbiz-uploads/tm-step1.png"
                  },
                  { 
                    s: "02", 
                    t: "Filing of Copyright Application", 
                    d: "The process is carried out entirely through an online system. The application is filed in the prescribed format along with the required government fee.",
                    img: "/dbiz-uploads/tm-step2.png"
                  },
                  { 
                    s: "03", 
                    t: "Diary Number Generation", 
                    d: "After successful filing, an official Diary Number is generated. This number acts as an acknowledgment of submission and is used for tracking status.",
                    img: "/dbiz-uploads/tm-step3.png"
                  },
                  { 
                    s: "04", 
                    t: "Mandatory Waiting Period", 
                    d: "The application is kept under a mandatory waiting period of 30 days to allow any third party to raise an objection.",
                    img: "/dbiz-uploads/tm-step4.png"
                  },
                  { 
                    s: "05", 
                    t: "Examination of Application", 
                    d: "If no objection is received, the application is taken up for examination by the authority to verify details and documents.",
                    img: "/dbiz-uploads/tm-step5.png"
                  },
                  { 
                    s: "06", 
                    t: "Objection or Discrepancy Handling", 
                    d: "If any objection is filed or discrepancy found, the applicant is required to submit a reply within the prescribed time.",
                    img: "/dbiz-uploads/tm-step6.png"
                  },
                  { 
                    s: "07", 
                    t: "Hearing, if Required", 
                    d: "If the authority is not satisfied with the reply, a hearing may be scheduled where the applicant can explain the claim.",
                    img: "/dbiz-uploads/tm-step7.png"
                  },
                  { 
                    s: "08", 
                    t: "Approval and Registration", 
                    d: "Once the authority is satisfied, the application is approved and details are entered in the official Register of Copyrights.",
                    img: "/dbiz-uploads/tm-step8.png"
                  },
                  { 
                    s: "09", 
                    t: "Issue of Registration Certificate", 
                    d: "After registration, the Copyright Registration Certificate is issued, serving as official proof of ownership and rights.",
                    img: "/dbiz-uploads/tm-step9.png"
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

        {/* Categories Section (Replacing Classes) */}
        <section id="classes" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Side Image */}
              <div className="lg:w-[45%] shrink-0">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group min-h-[500px]">
                  <img 
                    src="/dbiz-uploads/copyright-digital-content.png"
                    alt="Digital & Creative Content Copyright"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-dbiz-navy/10 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dbiz-navy/90 to-transparent z-20">
                    <h3 className="text-white text-2xl font-bold mb-2">Digital & Creative Content</h3>
                    <p className="text-gray-200 font-medium">Protecting websites, mobile applications, UI/UX designs, and online media.</p>
                  </div>
                </div>
              </div>

              {/* Right Side Writings */}
              <div className="lg:w-[55%] flex flex-col">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-4">4. Software and Digital Content</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Modern digital content such as websites, mobile applications, UI/UX designs, and online media are also eligible for copyright protection. Any original literary, artistic, musical, digital, audio, or visual work can be considered.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <Code className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">Software Code</span>
                      <span className="text-gray-600 font-medium">Databases & Programs</span>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center mb-3">
                        <ImageIcon className="w-5 h-5 text-dbiz-teal" />
                      </div>
                      <span className="font-bold text-dbiz-navy text-xl block mb-1">Digital Design</span>
                      <span className="text-gray-600 font-medium">Multimedia & UI/UX</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">Creative Media Examples:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      { c: "Audio Visual", d: "Cinematograph films, videos, and animations" },
                      { c: "Sound Tracks", d: "Music, voice recordings, and podcasts" },
                      { c: "Digital Apps", d: "Software applications and digital programs" }
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
                        Copyright protects the expression of an idea, not the idea, concept, method, or procedure itself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Validity Full Width */}
            <div className="mt-24">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-12 text-center">8. Timeline and Validity of Copyright</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-4">
                {[
                  { v: "Same Day", u: "Filing", t: "Application Filing", d: "Immediate submission upon document readiness" },
                  { v: "30-60", u: "Days", t: "Waiting Period", d: "Includes mandatory waiting and examination phase" },
                  { v: "2-6", u: "Months", t: "Registration", d: "Usual completion time if no objections are raised" },
                  { v: "8-12+", u: "Months", t: "Objection/Hearing", d: "Extended timeline depending on the case complexity" }
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

              {/* Validity Details */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto px-4">
                {[
                  { t: "Literary & Artistic", v: "Life + 60 Years", d: "Covers books, music, and art works" },
                  { t: "Films & Sound", v: "60 Years", d: "From the date of publication" },
                  { v: "No Renewal", t: "Required", d: "Once registered for the validity period" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#0b1d33] rounded-2xl p-6 text-center text-white border border-white/10">
                    <p className="text-dbiz-teal font-black text-xl mb-1">{item.v}</p>
                    <p className="text-sm font-bold uppercase tracking-widest mb-2">{item.t}</p>
                    <p className="text-xs text-white/60 font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-gray-500 mt-8 text-sm italic font-medium">No renewal is required during the validity period once copyright is registered. Validity periods vary by type of work as per the Copyright Act.</p>
            </div>
          </div>
        </section>

        {/* Rights Section */}
        <section id="rights" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom relative">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-16 text-center">9. Copyright Rights and Protection</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  t: "Economic Rights", 
                  d: "Right to reproduce, publish, distribute, perform, license, sell, or commercially exploit the work.",
                  icon: TrendingUp
                },
                { 
                  t: "Moral Rights", 
                  d: "Right to claim authorship and protect work from distortion or misuse that harms reputation.",
                  icon: Shield
                },
                { 
                  t: "Control & Distribution", 
                  d: "Enables the owner to control the use, distribution, and commercial exploitation of the creation.",
                  icon: Users
                },
                { 
                  t: "Legal Enforcement", 
                  d: "Registration helps strengthen claims by serving as official evidence of ownership and rights.",
                  icon: Gavel
                },
                { 
                  t: "Commercialization", 
                  d: "Supports the commercial use of the work by making ownership clearer and more enforceable.",
                  icon: Briefcase
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
              <span>Copyright grants the creator or owner important legal rights and protection over the original work.</span>
            </div>
          </div>
        </section>

        {/* Common Challenges Section */}
        <section id="risks" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-dbiz-navy mb-6">10. Common Challenges and Risks</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Copyright registration involves several risks that can be effectively minimized through proper documentation and professional guidance.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              <div className="space-y-4">
                {[
                  { t: "Lack of Originality", d: "Protection is available only for original expression. Ideas or methods cannot be registered." },
                  { t: "Incorrect Documentation", d: "Incomplete or incorrect documents may lead to delays, objections, or rejection." },
                  { t: "Ownership Disputes", d: "Issues arise when creator/employer/contractor relationships are not properly documented." },
                  { t: "Categorization Errors", d: "Filing under the wrong category can create legal confusion and affect registration." }
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
                  { t: "Third-Party Objections", d: "Objections raised during the waiting period can delay registration and require response." },
                  { t: "Strict Originality Checks", d: "Copyright Office closely examines work for plagiarism and proof of originality." },
                  { t: "Digital Misuse & Piracy", d: "Unauthorized online use, copying, or infringement remain practical challenges after registration." },
                  { t: "International Theft", d: "Stopping piracy in other countries requires taking extra legal steps in those locations." }
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
            <p className="text-center text-gray-500 mt-12 font-bold italic">Prevention of delays and risks through accurate filing and structured professional support.</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-8">11. Why Choose D BIZ CONSULTANCY for Copyright Registration?</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Protecting original creative work requires more than simply filing an application. Copyright registration involves proper classification of the work, careful preparation of documents, verification of ownership, and timely compliance with procedural requirements. Any error, mismatch, or incomplete submission may lead to objections, delay, or rejection.
                </p>
                <p className="text-lg text-black leading-relaxed font-medium">
                  D BIZ CONSULTANCY offers complete support to make the copyright registration process smooth, accurate, and professionally managed. We assist clients from the initial stage of evaluating the work up to the final stage of registration, helping ensure that creative assets are legally protected without unnecessary complications.
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
                    items: ["Review of originality", "Copyright eligibility guidance", "Category identification", "Content organization"],
                  },
                  {
                    t: "Documentation",
                    d: "Filing Support",
                    items: ["Application preparation", "Document verification", "Accurate submission", "Official system filing"],
                  },
                  {
                    t: "Follow-Up",
                    d: "Objection Handling",
                    items: ["Status tracking", "Response to queries", "Department follow-up", "Hearing coordination"],
                  },
                  {
                    t: "Post-Registration",
                    d: "Assistance",
                    items: ["Licensing support", "Protection advisory", "Maintenance of records", "Compliance matters"],
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
                    To begin your copyright registration journey, we require a few essential details to ensure the application is technically complete and accurate.
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold border border-white/20 shadow-xl">
                    <AlertTriangle className="w-6 h-6 text-dbiz-teal" />
                    <span>Essential Checklist</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Identity and address proof",
                    "Soft copy of original work",
                    "Details of creator or author",
                    "Ownership details/NOC",
                    "Basic information about the work"
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
                { t: "Accurate Filing", d: "Careful handling of documentation", i: FileText },
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
            <p className="text-center text-gray-500 mt-12 font-medium italic">With D BIZ CONSULTANCY, your creative assets are handled with care, clarity, and professional attention, allowing you to focus on your creativity and growth.</p>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-gray-50 scroll-mt-32 border-t border-gray-200">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500 mb-8 font-medium italic">Essential knowledge for creators and businesses.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  { q: "Is copyright registration mandatory?", a: "No. Copyright generally exists from the moment an original work is created. However, registration is highly recommended because it provides stronger legal proof of ownership and helps in enforcement against infringement." },
                  { q: "How long does copyright registration take?", a: "The registration process usually takes around 2 to 4 months in normal cases. If objections, discrepancies, or hearings arise, it may take longer." },
                  { q: "What is the validity of copyright?", a: "For most literary, dramatic, musical, and artistic works, copyright is valid for the lifetime of the author plus 60 years. Certain other works may have a different validity period based on publication." },
                  { q: "Can published or unpublished work be registered?", a: "Yes. Both published and unpublished works can be registered under copyright." },
                  { q: "Can digital content or online content be protected?", a: "Yes. Copyright protection is available for digital content, website content, software, code, online media, and other creative digital works." },
                  { q: "Can a logo be registered under copyright?", a: "Yes. A logo may be protected as an artistic work under copyright law. It may also be protected separately under trademark law, depending on its use." },
                  { q: "Can a name, title, or slogan be copyrighted?", a: "Generally, no. Names, titles, short phrases, and slogans are not usually protected under copyright. Such elements are more commonly protected under trademark law." },
                  { q: "Who is the owner of copyright?", a: "The creator of the work is usually the original owner of copyright, unless the rights are assigned, transferred, or created under specific employment or contractual arrangements." },
                  { q: "Can multiple authors claim copyright in the same work?", a: "Yes. In the case of a jointly created work, all eligible contributors may be recognized as co-authors or joint owners." },
                  { q: "Can freelancers or contractors claim copyright?", a: "Yes. Freelancers or independent creators generally own the copyright in their work unless they have assigned those rights to a client through a written agreement." },
                  { q: "Can copyright be sold, licensed, or transferred?", a: "Yes. Copyright can be licensed, assigned, sold, or transferred through a proper legal agreement." },
                  { q: "What is copyright infringement?", a: "Copyright infringement means the unauthorized use, reproduction, publication, distribution, or commercial exploitation of a protected work without permission." },
                  { q: "What happens if someone copies my work without permission?", a: "You may take legal action against the infringer. Registration helps strengthen your claim by serving as official evidence of ownership." },
                  { q: "Can I modify my work after registration?", a: "Yes. However, if the modified version is substantially different, a fresh application may be required for the updated work." },
                  { q: "Is copyright protection automatic?", a: "Yes. Copyright generally arises automatically upon creation of an original work, but registration provides stronger legal and evidentiary support." },
                  { q: "Is copyright valid internationally?", a: "Copyright protection is recognized in many countries through international arrangements, but enforcement depends on the laws and procedures of the country where protection is sought." },
                  { q: "Do I need to renew copyright registration?", a: "No renewal is generally required during the validity period of copyright." },
                  { q: "Can ideas be protected under copyright?", a: "No. Copyright protects the expression of an idea, not the idea, concept, method, or procedure itself." },
                  { q: "What is the role of the Copyright Office?", a: "The authority examines applications, records ownership details, and issues the registration certificate after completion of the process." },
                  { q: "Can the application be filed online?", a: "Yes. The copyright registration process is generally carried out online through the official system." },
                  { q: "What types of works are not eligible for copyright?", a: "Ideas, facts, concepts, methods, procedures, and other non-original material are generally not eligible for copyright protection." }
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

export default CopyrightRegistrationPage;