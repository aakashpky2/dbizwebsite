const fs = require('fs');

const content = `import React, { useState } from "react";
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
  Gavel
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
    <a href={\`tel:\${phoneNumber}\`} className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors">
      <Phone size={16} />
      <span>Call</span>
    </a>
    <a href={\`https://wa.me/\${phoneNumber.replace('+', '')}\`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
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

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\\s+/g, '-')).includes(location);
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\\s+/g, '-') === location) : "India";

  const seoTitle = location === undefined 
    ? "Trademark Registration Services in India | Brand Registration | D BIZ CONSULTANCY" 
    : \`Trademark Registration in \${cityName} | Brand Name Registration in \${cityName}\`;
  
  const seoDescription = location === undefined
    ? "Register your trademark in India with D Biz Consultancy Private Limited. Secure your brand name, logo, and identity with expert support and hassle-free registration."
    : \`Trademark Registration in \${cityName}. Secure your brand name and logo with D Biz Consultancy. Expert support for brand registration in \${cityName}.\`;

  const seoUrl = location ? \`/trademark-registration/\${location}\` : "/trademark-registration";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "Trademark Registration", item: "/trademark-registration" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: \`/trademark-registration/\${location}\` });
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
        keywords={\`trademark registration \${cityName}, brand registration \${cityName}, register logo india, intellectual property\`}
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
                  Trademark Registration Services{location ? \` in \${cityName}\` : ""}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Register your trademark in India with D Biz Consultancy Private Limited. Secure your brand name, logo, and identity with expert support and hassle-free registration.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-dbiz-teal font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-5 w-5" /> Free Trademark Search
                  </div>
                  <div className="flex items-center gap-2 text-dbiz-teal font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-5 w-5" /> Expert Support
                  </div>
                  <div className="flex items-center gap-2 text-dbiz-teal font-bold uppercase tracking-tight">
                    <CheckCircle2 className="h-5 w-5" /> End-to-End Registration
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
                  href={\`#\${item.id}\`}
                  className={\`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[14px] font-medium transition-all duration-300 \${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }\`}
                  onClick={(e) => { e.preventDefault(); handleSectionClick(item.id); }}
                >
                  <item.icon className={\`mr-1.5 h-3.5 w-3.5 \${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}\`} />
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
                  Introduction
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Trademark?</h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">
                  <p>In today's competitive business environment, a brand is one of the most valuable assets for any individual or business. A brand name, logo, slogan, or symbol represents identity, trust, and reputation in the market. Protecting this identity is essential to avoid misuse and maintain brand value.</p>
                  <p>Trademark Registration is a legal process that grants exclusive rights to the owner over a distinctive mark used for goods or services. It helps prevent unauthorized use, imitation, or duplication and strengthens the legal identity of the business.</p>
                  <p>Without proper trademark protection, businesses may face brand confusion, infringement, and loss of goodwill. A structured trademark registration process helps establish legal ownership and supports enforcement in case of disputes. Governed by the Trade Marks Act, 1999 and administered by the Trade Marks Registry, trademark protection is essential for startups, professionals, and businesses.</p>
                  <p>At D Biz Consultancy Private Limited, we provide professional end-to-end trademark registration services, helping clients secure their brand identity with clarity and confidence.</p>
                </div>
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Trademark Registration – Legal Framework</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Gavel className="h-5 w-5 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-dbiz-navy mb-1 uppercase tracking-tight text-sm">Trade Marks Act, 1999</p>
                        <p className="text-sm text-gray-600">Provides legal protection and grants exclusive rights in relation to specified goods/services. Valid for 10 years, renewable indefinitely.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Scale className="h-5 w-5 text-dbiz-teal mr-2 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-dbiz-navy mb-1 uppercase tracking-tight text-sm">Trade Marks Registry</p>
                        <p className="text-sm text-gray-600">Examines applications, handles objections, publishes marks, and issues registration certificates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">A Trademark Can Include:</h3>
                    <ul className="space-y-4">
                      {["Brand name", "Logo or symbol", "Tagline or slogan", "Product or service name", "Website or app name"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm transition-transform hover:translate-x-1 duration-300">
                          <Stamp className="h-5 w-5 text-dbiz-teal shrink-0" />
                          <span className="font-bold text-dbiz-navy text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-xs font-black text-dbiz-navy uppercase tracking-widest text-center opacity-40">Builds brand recognition</p>
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Word Mark", desc: "Protects the brand name in its textual form. Gives wider protection covering the name regardless of font, style, or colour." },
                { title: "Logo / Device Mark", desc: "Protects the visual representation of the brand, such as a logo, symbol, stylized text, or design." },
                { title: "Service Mark", desc: "Protects marks used for services instead of physical goods. Used by consultants, educational institutions, IT companies." },
                { title: "Collective Mark", desc: "Used by members of an association or group to indicate membership or a shared identity and common standard." },
                { title: "Certification Mark", desc: "Indicates that goods or services meet certain standards of quality, origin, material, or performance." },
                { title: "Shape Mark", desc: "Protects the unique three-dimensional shape of a product or its packaging where the shape itself is distinctive." }
              ].map((item, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-dbiz-teal">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Why Trademark Registration is Important</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Exclusive Ownership", desc: "Gives the owner exclusive legal rights to use the trademark for specified goods or services." },
                { icon: AlertTriangle, title: "Prevents Copying", desc: "Protects the brand from imitation, misuse, or unauthorized duplication by others." },
                { icon: Award, title: "Builds Trust", desc: "Enhances customer confidence and strengthens brand value and credibility in the market." },
                { icon: Globe, title: "Business Expansion", desc: "Supports licensing, franchising, and brand growth with robust legal protection." },
                { icon: Scale, title: "Asset Creation", desc: "Creates a valuable intangible asset that can be licensed, assigned, or transferred." },
                { icon: Briefcase, title: "Legal Protection", desc: "Gives the owner the right to take legal action against infringement and enforce rights." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                  <div className="w-12 h-12 bg-dbiz-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-dbiz-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dbiz-navy mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight">Documents Required</h2>
              <p className="text-lg text-gray-600">The documents required vary depending on whether the applicant is an individual, proprietor, company, or LLP.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-dbiz-navy p-8 text-white">
                  <h3 className="text-xl font-semibold uppercase tracking-tighter">Individuals / Proprietors</h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { label: "PAN Card", desc: "Used as identity proof of the applicant and for official verification." },
                    { label: "Aadhaar / Address Proof", desc: "Required to confirm the address details of the applicant." },
                    { label: "Logo (if applicable)", desc: "Clear image usually in JPEG format. If it is a word mark, the name itself is sufficient." },
                    { label: "Business Proof (if claiming prior use)", desc: "Invoices, GST registration, shop license showing the trademark is already in use." }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="h-6 w-6 text-dbiz-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-dbiz-navy block">{doc.label}</span>
                        <span className="text-sm text-gray-500">{doc.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-dbiz-navy p-8 text-white">
                  <h3 className="text-xl font-semibold uppercase tracking-tighter">Companies / LLP</h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { label: "Company PAN", desc: "Identity proof of the company or LLP." },
                    { label: "Certificate of Incorporation / LLP Agreement", desc: "Proof of legal existence and registration of the entity." },
                    { label: "Authorization Letter / Board Resolution", desc: "Authorizes a director, partner, or representative to file on behalf of the entity." },
                    { label: "Logo (if applicable)", desc: "Copy of the trademark/logo to be registered." },
                    { label: "Business Proof (if applicable)", desc: "Invoices, GST returns, or agreements showing the use of the trademark, if prior use is claimed." }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="h-6 w-6 text-dbiz-teal shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-dbiz-navy block">{doc.label}</span>
                        <span className="text-sm text-gray-500">{doc.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-8 italic text-sm">Proper and accurate documentation helps in smooth processing, reduces objections, and strengthens legal validity.</p>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-extrabold text-dbiz-navy mb-8 tracking-tighter">Step-by-Step Trademark Registration Process</h2>
              <p className="text-lg text-gray-600 leading-relaxed">We implement a structured 10-step approach to ensure maximum compliance and success.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { s: "1", t: "Preparation of Application", d: "Collecting details, identifying mark nature (brand name, logo, slogan, label, device mark, or service mark), class selection, and required document prep." },
                { s: "2", t: "Filing of Application", d: "Filed via Form TM-A at the Trade Marks Registry, including applicant details, mark representation, class, goods/services description, and user claim details." },
                { s: "3", t: "Application Number Generation", d: "Official application number issued after successful filing, used for tracking and all future communications." },
                { s: "4", t: "Examination of Application", d: "Registry reviews the mark, class, goods/services, and documents. If mark is descriptive or similar to existing marks, objections may be raised." },
                { s: "5", t: "Reply to Objection", d: "If objections are raised, a formal reply with legal submissions must be filed within 30 days. Failure to respond can affect the application." },
                { s: "6", t: "Hearing (if required)", d: "Registry may schedule a hearing if not satisfied with the reply. Applicant presents further submissions in support of the application." },
                { s: "7", t: "Publication in Trade Marks Journal", d: "Accepted marks are published in the Trade Marks Journal, giving third parties the opportunity to file opposition within the prescribed period." },
                { s: "8", t: "Opposition (if any)", d: "If a third party opposes, the applicant may need to file a counter-statement and evidence. Registration proceeds only if opposition is resolved favorably." },
                { s: "9", t: "Approval and Registration", d: "After clearing examination, publication, and opposition stages, the mark is approved and entered in the Register of Trade Marks." },
                { s: "10", t: "Issue of Registration Certificate", d: "Certificate issued as official proof of registration. Valid for 10 years and renewable indefinitely for further periods of 10 years each." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-dbiz-navy text-white flex items-center justify-center font-black text-xl group-hover:bg-dbiz-teal transition-colors shrink-0">
                    {item.s}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-2 uppercase tracking-tighter group-hover:text-dbiz-teal transition-colors">{item.t}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-dbiz-navy text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-dbiz-teal mb-4">End-to-End Professional Support</h3>
              <p className="text-gray-300 leading-relaxed">At D Biz Consultancy Private Limited, we provide complete support throughout the trademark registration process, including trademark search, class identification, application filing, follow-up, objection reply, hearing support, and final registration assistance, ensuring a smooth and professionally managed process from start to finish.</p>
            </div>
          </div>
        </section>

        {/* Classes & Timeline */}
        <section id="classes" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-dbiz-navy mb-6">Trademark Classes & Symbols</h2>
                <p className="text-gray-600 mb-6">Registration is divided into 45 classes based on goods and services. Choosing the correct class ensures protection in that exact category.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-dbiz-teal shrink-0 mt-0.5" /> <span><b>Class 1–34:</b> Goods</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-dbiz-teal shrink-0 mt-0.5" /> <span><b>Class 35–45:</b> Services</span></li>
                </ul>
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100"><span className="font-black text-dbiz-navy">Class 35: </span> Business services, consultancy, advertising</div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100"><span className="font-black text-dbiz-navy">Class 41: </span> Education, training, coaching</div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100"><span className="font-black text-dbiz-navy">Class 25: </span> Clothing, garments, footwear</div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-dbiz-navy text-white p-5 rounded-xl flex gap-4 w-1/2">
                    <span className="text-4xl font-black">™</span>
                    <div className="text-sm">Used after filing the trademark application.</div>
                  </div>
                  <div className="bg-dbiz-teal text-white p-5 rounded-xl flex gap-4 w-1/2">
                    <span className="text-4xl font-black">®</span>
                    <div className="text-sm">Used only after registration of the trademark.</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dbiz-navy mb-6">Timeline & Validity</h2>
                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <Table>
                    <TableHeader className="bg-gray-100">
                      <TableRow>
                        <TableHead className="text-dbiz-navy font-bold py-4">Particulars</TableHead>
                        <TableHead className="text-dbiz-navy font-bold py-4">Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white">
                      <TableRow><TableCell className="font-semibold text-gray-700 py-4">Application Filing</TableCell><TableCell className="text-gray-600 font-bold bg-green-50/50">Same day submission</TableCell></TableRow>
                      <TableRow><TableCell className="font-semibold text-gray-700 py-4">Examination Stage</TableCell><TableCell className="text-gray-600 font-bold bg-green-50/50">Usually 1 to 3 months</TableCell></TableRow>
                      <TableRow><TableCell className="font-semibold text-gray-700 py-4">Registration Completion</TableCell><TableCell className="text-gray-600 font-bold bg-green-50/50">Usually 6 to 12 months (if no objection or opposition)</TableCell></TableRow>
                      <TableRow><TableCell className="font-semibold text-gray-700 py-4">Objection / Hearing / Opposition</TableCell><TableCell className="text-amber-600 font-bold bg-amber-50/50">Timeline may extend depending on the case</TableCell></TableRow>
                      <TableRow><TableCell className="font-semibold text-gray-700 py-4">Validity of Registered Trademark</TableCell><TableCell className="text-dbiz-navy uppercase font-black bg-blue-50/50">10 Years from the date of application</TableCell></TableRow>
                      <TableRow><TableCell className="font-semibold text-gray-700 py-4">Renewal</TableCell><TableCell className="text-gray-600 font-bold bg-green-50/50">Renewable indefinitely for further periods of 10 years</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rights and Challenges Section */}
        <section id="risks" className="py-20 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-dbiz-navy mb-8">Trademark Rights and Protection</h3>
                <div className="space-y-6">
                  {[
                    { t: "Exclusive Right to Use the Mark", d: "The registered owner gets the exclusive legal right to use the trademark in relation to the goods or services for which it is registered." },
                    { t: "Right to Take Legal Action Against Infringement", d: "Registration allows the owner to take legal action against any person using an identical or deceptively similar mark without permission." },
                    { t: "Protection Across Registered Classes", d: "Trademark protection applies to the specific class or classes in which the mark is registered." },
                    { t: "Ability to License, Sell, or Transfer", d: "A registered trademark is an intangible asset that can be licensed, assigned, sold, or transferred for commercial benefit." },
                    { t: "Strengthens Brand Identity", d: "Enhances customer trust, protects goodwill, and gives the business a stronger identity and competitive position in the market." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-dbiz-navy mb-1">{item.t}</h4>
                      <p className="text-sm text-gray-600">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-900 mb-8 border-b border-amber-200 pb-4">Common Challenges & Risks</h3>
                <ul className="space-y-4">
                  {[
                    { t: "Similar or Existing Trademarks", d: "If the proposed mark is identical or similar to an already registered or pending trademark, it may face objection or refusal." },
                    { t: "Incorrect Class Selection", d: "Choosing the wrong class may lead to weak protection or rejection, as trademark rights are limited to the selected goods or services category." },
                    { t: "Lack of Uniqueness", d: "Marks that are too generic, descriptive, or non-distinctive may not qualify for registration." },
                    { t: "Delay in Replying to Objections", d: "Failure to respond within the prescribed time can negatively affect the application or even lead to abandonment." },
                    { t: "Weak Documentation", d: "Incomplete or incorrect documents may result in delays, objections, or procedural issues." },
                    { t: "Non-Use of Trademark", d: "If a registered trademark is not used for a continuous period, it may become vulnerable to cancellation." },
                    { t: "Online and International Infringement", d: "Even after registration, misuse of the mark through digital platforms or in other jurisdictions may still create practical challenges." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100 list-none">
                      <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                      <div><strong className="text-amber-900 block">{item.t}</strong> {item.d}</div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm italic font-medium text-amber-700">With proper guidance, accurate filing, and professional support, these challenges and risks can be effectively minimized.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold text-dbiz-navy mb-6 tracking-tighter">Why Choose D BIZ CONSULTANCY for Trademark Registration?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Protecting a brand requires more than simply filing a trademark application. Trademark registration involves proper search, correct class selection, careful preparation of documents, accurate filing, and timely follow-up with the authorities. Any mistake, mismatch, or incomplete submission may lead to objections, delay, or rejection.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-dbiz-navy">How We Support You</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="1" className="bg-gray-50 rounded-xl mb-3 border border-gray-100 px-4">
                    <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Initial Review and Pre-Filing Assistance</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Trademark search</li>
                        <li>Risk analysis</li>
                        <li>Guidance on brand improvement and distinctiveness</li>
                        <li>Support in identifying the correct class or classes</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="2" className="bg-gray-50 rounded-xl mb-3 border border-gray-100 px-4">
                    <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Documentation and Filing Support</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Preparation of trademark application</li>
                        <li>Verification of supporting documents</li>
                        <li>Accurate filing of the application</li>
                        <li>Submission through the official registration system</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="3" className="bg-gray-50 rounded-xl mb-3 border border-gray-100 px-4">
                    <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Follow-Up and Objection Handling</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Tracking the status of the application</li>
                        <li>Responding to objections or examination queries</li>
                        <li>Continuous follow-up with the department concerned</li>
                        <li>Coordination for hearings, wherever required</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="4" className="bg-gray-50 rounded-xl border border-gray-100 px-4">
                    <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Post-Registration Assistance</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Support for trademark renewal</li>
                        <li>Guidance on assignment or ownership transfer</li>
                        <li>Advisory on brand protection and proper use</li>
                        <li>Ongoing assistance for related compliance matters</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="bg-dbiz-navy text-white p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <Award className="w-48 h-48 text-dbiz-teal" />
                </div>
                <h3 className="text-3xl font-bold mb-8 text-dbiz-teal">What Makes Us Different?</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-dbiz-teal shrink-0" /><div><b className="block">Professional Guidance</b>Experienced support at every stage of the trademark registration process</div></li>
                  <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-dbiz-teal shrink-0" /><div><b className="block">Complete Process Management</b>End-to-end assistance from brand review to final registration</div></li>
                  <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-dbiz-teal shrink-0" /><div><b className="block">Accurate and Structured Filing</b>Careful handling of documents, class selection, and application requirements</div></li>
                  <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-dbiz-teal shrink-0" /><div><b className="block">Clear and Transparent Support</b>Simple communication and smooth coordination throughout the process</div></li>
                  <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-dbiz-teal shrink-0" /><div><b className="block">Timely Follow-Up</b>Active monitoring to reduce delays and keep the process moving efficiently</div></li>
                </ul>
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
                  <AccordionItem key={idx} value={\`item-\${idx}\`} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden">
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
                  <a href={\`tel:\${phoneNumber}\`} className="bg-dbiz-teal text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all shadow-xl shadow-dbiz-teal/20 w-fit flex items-center gap-3 group">
                    <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform" /> Contact D Biz Consultancy Private Limited Now
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
`;

fs.writeFileSync('src/pages/TrademarkRegistrationPage.tsx', content, 'utf8');
console.log('File written successfully. Lines:', content.split('\n').length);
