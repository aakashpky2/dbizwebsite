
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle,
  Gavel, TrendingUp
} from "lucide-react";
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

const PublicLimitedPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const publishDate = "2026-02-15T10:00:00+05:30";
  const modifiedDate = "2026-03-19T12:50:00+05:30";

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined 
    ? "Public Limited Company Registration in India | D BIZ CONSULTANCY" 
    : `Public Limited Company Registration in ${cityName} | Best PLC Registration`;
  
  const seoDescription = location === undefined
    ? "Register your Public Limited Company in India with D BIZ CONSULTANCY. Expert registration, compliance, and legal support at lowest prices."
    : `Register Public Limited Company in ${cityName}. D BIZ CONSULTANCY provides fast Public Limited registration, DSC, DIN, and ROC compliance services in ${cityName}.`;

  const seoUrl = location ? `/public-limited/${location}` : "/public-limited";

  const breadcrumbs = [
    { name: "Services", item: "/#services" },
    { name: "Public Limited Company", item: "/public-limited" }
  ];
  if (location) {
    breadcrumbs.push({ name: cityName as string, item: `/public-limited/${location}` });
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
      keywords={`public limited registration ${cityName}, plc company ${cityName}, register public company india, roc compliance, capital raising`}
    />
    <Navbar />
    <main className="flex-grow pt-20">
      <Breadcrumbs items={breadcrumbs.map(b => ({ name: b.name, path: b.item, current: b.item === seoUrl }))} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <CachedImage 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=70" 
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
                Corporate Services
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                Public Limited Company Registration
              </h1>

              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                D BIZ CONSULTANCY provides complete Public Limited Company registration services. Our expert team ensures a seamless and compliant incorporation process — from company name approval and documentation to ROC filing and post-incorporation compliance management.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
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
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                    alt="Public Limited Company" 
                    className="w-full h-auto rounded-lg shadow-lg"
                    aspectRatio={4/3}
                  />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">20-30</div>
                      <div className="text-sm opacity-80">Days (Typical)</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Compliance Assured</div>
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
              { id: 'compliance', icon: Gavel, label: 'Compliance' },
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Public Limited Company?</h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  A Public Limited Company (PLC) is a company incorporated under the Companies Act, 2013 that allows the public to subscribe to its shares and invest in its capital. It is considered a separate legal entity distinct from its shareholders, enabling it to own property, enter contracts, and initiate legal proceedings in its own name.
                </p>
                <p className="mb-4">
                  Public Limited Companies are commonly formed by businesses that intend to raise capital from the public, attract institutional investors, and expand operations on a large scale. These companies operate under the regulatory framework of the Ministry of Corporate Affairs (MCA) and, where applicable, the Securities and Exchange Board of India (SEBI).
                </p>
              </div>

              {/* Minimum Requirements Block */}
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minimum 3 Directors</p>
                      <p className="text-sm text-gray-600">At least one Indian resident director</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minimum 7 Shareholders</p>
                      <p className="text-sm text-gray-600">No maximum limit on members</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minimum Paid-up Capital</p>
                      <p className="text-sm text-gray-600">Generally ₹5,00,000 required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start">
                <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Companies Act, 2013</h3>
                  <p className="text-gray-700 mb-4 text-sm font-medium">
                    As per Section 2(71) of the Companies Act, 2013, a Public Limited Company is a company that:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] mt-1 mr-3">1</div>
                      <span className="text-sm text-gray-700">Does not restrict the transfer of shares, allowing shareholders to freely transfer their shares.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] mt-1 mr-3">2</div>
                      <span className="text-sm text-gray-700">Requires a minimum of 7 members, with no maximum limit on the number of members.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] mt-1 mr-3">3</div>
                      <span className="text-sm text-gray-700">May invite the public to subscribe to its shares, debentures, or other securities for raising capital.</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-dbiz-navy/5 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-dbiz-navy" />
                      </div>
                      <div className="ml-3">
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Expert Help</p>
                        <p className="text-dbiz-navy font-bold text-sm">Get Professional Consultation</p>
                      </div>
                    </div>
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Public Limited Company</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Understand the core characteristics that define a Public Limited Company structure in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Separate Legal Entity", icon: Building2, desc: "A Public Limited Company has its own independent legal identity, separate from its shareholders and directors. This allows the company to own property, enter contracts, and undertake legal actions in its own name." },
              { title: "Limited Liability Protection", icon: Shield, desc: "Shareholders are liable only to the extent of the unpaid value of the shares they hold. This protects the personal assets of shareholders from the company’s debts and financial liabilities." },
              { title: "Ability to Raise Public Capital", icon: TrendingUp, desc: "Public Limited Companies can raise substantial capital by issuing shares or debentures to the public. This provides businesses with greater opportunities to secure funding for expansion." },
              { title: "Large Shareholder Base", icon: Users, desc: "A Public Limited Company must have a minimum of seven shareholders, and there is no upper limit on the number of members. This structure enables businesses to attract a wide pool of investors." },
              { title: "Free Transferability of Shares", icon: FileText, desc: "Shares of a Public Limited Company can generally be transferred without major restrictions. For listed companies, shares can be traded on recognized stock exchanges, providing liquidity." },
              { title: "Perpetual Succession", icon: Clock, desc: "The company continues to exist regardless of changes in shareholders, directors, or management. Its existence remains unaffected until it is legally dissolved under the Companies Act." }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-3">
                  <feature.icon className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <div className="sticky top-32">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Benefits
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 leading-tight">
                  Benefits of a Public Limited Company
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Choosing a Public Limited structure provides powerful advantages for growing enterprises seeking market leadership.
                </p>

                <div className="hidden md:block">
                  <CachedImage 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                    alt="Business Growth" 
                    className="rounded-xl shadow-lg" 
                    aspectRatio={4/3}
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Access to large capital through public investment", desc: "Raise funds by issuing shares to the public, enabling massive scalability." },
                  { title: "Increased credibility among investors and institutions", desc: "The public structure commands higher trust from banks, financial institutions, and global investors." },
                  { title: "Liquidity for shareholders through share transferability", desc: "Easier entry and exit for investors compared to private structures." },
                  { title: "Business expansion opportunities", desc: "Strong capital base allows for rapid geographic and product-line expansion." },
                  { title: "Professional corporate governance structure", desc: "Follows higher standards of transparency and reporting, ensuring long-term sustainability." },
                  { title: "Eligibility for government incentives and support", desc: "Preferred status for many state and central government tender opportunities." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all duration-300">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2.5 rounded-full h-11 w-11 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-dbiz-navy font-bold text-lg mb-1">{item.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between Business Structures</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Understand the core differences in liability, ownership, and compliance across various legal entities.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-dbiz-navy text-white hover:bg-dbiz-navy">
                    <TableHead className="py-6 px-6 text-white font-bold text-lg">Feature</TableHead>
                    <TableHead className="bg-dbiz-teal py-6 px-6 text-white font-bold text-lg">Public Limited</TableHead>
                    <TableHead className="py-6 px-6 text-white font-bold">Private Limited</TableHead>
                    <TableHead className="py-6 px-6 text-white font-bold">LLP</TableHead>
                    <TableHead className="py-6 px-6 text-white font-bold">Proprietorship</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { f: "Liability", v1: "Limited", v2: "Limited", v3: "Limited", v4: "Unlimited" },
                    { f: "Legal Entity", v1: "Separate", v2: "Separate", v3: "Separate", v4: "Not separate" },
                    { f: "Ownership", v1: "Min 7 members", v2: "2–200 members", v3: "2+ partners", v4: "Single owner" },
                    { f: "Capital Raising", v1: "Public investment", v2: "Private investment", v3: "Partner contribution", v4: "Personal funds" },
                    { f: "Compliance", v1: "High (High reporting)", v2: "Moderate", v3: "Moderate", v4: "Minimal" }
                  ].map((row, i) => (
                    <TableRow key={i} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-bold border-r px-6 py-5 text-dbiz-navy">{row.f}</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r px-6 py-5 font-medium text-dbiz-navy">{row.v1}</TableCell>
                      <TableCell className="border-r px-6 py-5">{row.v2}</TableCell>
                      <TableCell className="border-r px-6 py-5">{row.v3}</TableCell>
                      <TableCell className="px-6 py-5">{row.v4}</TableCell>
                    </TableRow>
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for Registration</h2>
            <p className="text-lg text-gray-600">Ensure a smooth approval by preparing these essential documents in advance.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-800 mb-1">D BIZ Pro Tip: Avoiding Rejections</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Identity proofs must match exact spellings across all IDs. Utility bills for office proof should be latest (within 2 months) and clearly show the premises owner's name matching the NOC.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "PAN Card of Directors", i: FileText },
              { t: "Aadhaar / Passport / Voter ID", i: Users },
              { t: "Address Proof (Bank Stmt/Utility)", i: Building2 },
              { t: "Passport-sized photographs", i: FileText },
              { t: "Memorandum of Association (MOA)", i: FileText },
              { t: "Articles of Association (AOA)", i: FileText },
              { t: "Director Identification Number", i: Shield },
              { t: "Digital Signature Certificate", i: Shield },
              { t: "Registered Office Proof (Rent/NOC)", i: Building2 }
            ].map((doc, idx) => (
              <div key={idx} className="flex items-center p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-dbiz-teal/10 p-3 rounded-xl mr-5">
                  <doc.i className="h-5 w-5 text-dbiz-teal" />
                </div>
                <p className="text-dbiz-navy font-bold leading-tight">{doc.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section id="process" className="py-16 bg-white scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Registration Process
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Public Limited Company Registration Process</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Registering a Public Limited Company in India involves several legal and procedural steps under the Companies Act, 2013 and regulations issued by the Ministry of Corporate Affairs (MCA). The process includes obtaining digital signatures, reserving the company name, filing incorporation documents with the Registrar of Companies (ROC), and completing post-incorporation formalities.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">1</div>
                  <h3 className="text-xl font-bold">Obtain Digital Signature Certificate (DSC)</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    The first step in registering a Public Limited Company is obtaining a Digital Signature Certificate (DSC) for all proposed directors. A DSC is required to digitally sign electronic documents submitted to the Ministry of Corporate Affairs (MCA) portal.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "Mandatory for all directors and authorized signatories",
                      "Used for signing incorporation documents online",
                      "Issued by government-approved certifying authorities"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">2</div>
                  <h3 className="text-xl font-bold">Apply for Director Identification Number (DIN)</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    A Director Identification Number (DIN) is a unique identification number allotted to individuals who wish to become directors of a company.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "Mandatory for all directors under the Companies Act, 2013",
                      "Applied through MCA during incorporation",
                      "Remains valid for lifetime once allotted"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">3</div>
                  <h3 className="text-xl font-bold">Company Name Reservation</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    The next step is reserving the proposed company name through the MCA portal. Once approved, the name is reserved for incorporation filing.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "Must be unique and not identical to existing companies",
                      "Should comply with Companies (Incorporation) Rules",
                      "Should avoid conflicts with registered trademarks"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">4</div>
                  <h3 className="text-xl font-bold">Drafting MOA and AOA</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    The Memorandum of Association (MOA) and Articles of Association (AOA) are fundamental documents required for company incorporation.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "MOA defines the company's main objectives and scope",
                      "AOA specifies internal rules and governance structure",
                      "Documents define rights of directors and shareholders"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">5</div>
                  <h3 className="text-xl font-bold">Filing Incorporation with ROC</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    Incorporation forms are filed with the Registrar of Companies (ROC) through the MCA portal along with supporting documents.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "INC-7 – Application for company incorporation",
                      "DIR-12 – Appointment of directors",
                      "INC-22 – Registered office address declaration"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">6</div>
                  <h3 className="text-xl font-bold">Certificate of Incorporation (COI)</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    After successful verification of the documents, the ROC issues the Certificate of Incorporation (COI), making the PLC a legal entity.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "Includes unique Company Identification Number (CIN)",
                      "Contains the official date of incorporation",
                      "Serves as legal confirmation of company existence"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">7</div>
                  <h3 className="text-xl font-bold">PAN and TAN Allocation</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    The company receives a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) from the Income Tax Department.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "PAN is essential for income tax purposes",
                      "TAN is required for TDS compliance",
                      "Both are issued by the Income Tax Department"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 8 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="bg-dbiz-navy p-5 text-white flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white text-dbiz-navy flex items-center justify-center font-bold text-lg mr-4 shrink-0">8</div>
                  <h3 className="text-xl font-bold">Opening Company Bank Account</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    The newly incorporated company must open a current bank account in its name to conduct business transactions.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {[
                      "Requires COI, PAN, MOA, and AOA documents",
                      "Need a board resolution authorizing account opening",
                      "KYC documents of all directors are mandatory"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 9 - Full width for the final step */}
            <div className="bg-dbiz-teal text-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-20 h-20 rounded-full bg-white text-dbiz-teal flex items-center justify-center font-bold text-3xl shrink-0">9</div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4">Commencement of Business</h3>
                    <p className="opacity-90 mb-6 max-w-3xl">
                      Before starting business operations, the company must complete commencement of business formalities. This includes depositing share capital in the company bank account and filing the commencement declaration with MCA (INC-20A).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">Deposit share capital in bank account</span>
                       </div>
                       <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                          <CheckCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">File Form INC-20A with MCA</span>
                       </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl text-center">
             <p className="text-gray-700 font-medium max-w-3xl mx-auto italic">
               "With professional assistance from D BIZ CONSULTANCY, businesses can complete the Public Limited Company registration process efficiently while ensuring full compliance with statutory requirements."
             </p>
          </div>
        </div>
      </section>

      {/* Deadlines/Timeline Section */}
      <section id="deadlines" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Timeline for Incorporation</h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { l: "DSC and DIN", t: "1 – 2 Working Days" },
              { l: "Name Reservation", t: "2 – 3 Working Days" },
              { l: "Document Preparation", t: "2 – 4 Working Days" },
              { l: "ROC Approval & COI", t: "7 – 15 Working Days" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm">
                <p className="font-bold text-dbiz-navy">{item.l}</p>
                <div className="flex items-center text-dbiz-teal font-bold">
                  <Clock size={16} className="mr-2" />
                  <span>{item.t}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto bg-dbiz-navy text-white rounded-2xl p-8 text-center shadow-xl">
             <p className="text-white/70 uppercase tracking-widest text-xs font-bold mb-2">Total Expected Time</p>
             <h4 className="text-3xl md:text-5xl font-bold">20 – 30 Working Days</h4>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Post-Incorporation Compliance</h2>
          </div>

          <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-dbiz-navy hover:bg-dbiz-navy">
                    <TableHead className="py-5 px-8 text-white font-bold text-lg">Compliance Activity</TableHead>
                    <TableHead className="py-5 px-8 text-white font-bold text-lg">Due Date / Frequency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { c: "First Board Meeting", t: "Within 30 days of incorporation" },
                    { c: "Appointment of Auditor", t: "Within 30 days" },
                    { c: "Board Meetings", t: "Minimum 4 per year" },
                    { c: "Statutory Audit", t: "Annually (Mandatory)" },
                    { c: "Annual General Meeting (AGM)", t: "Once every year" },
                    { c: "Financial Statement Filing (AOC-4)", t: "Within 30 days of AGM" },
                    { c: "Annual Return Filing (MGT-7)", t: "Within 60 days of AGM" },
                    { c: "Income Tax Return", t: "Annually" }
                  ].map((row, i) => (
                    <TableRow key={i} className="hover:bg-gray-50">
                      <TableCell className="font-bold px-8 py-5 text-dbiz-navy">{row.c}</TableCell>
                      <TableCell className="px-8 py-5 text-gray-700">{row.t}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">Why Choose D BIZ CONSULTANCY?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are a trusted business consultancy firm based in Trivandrum and Kochi, providing end-to-end statutory support across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
             <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-dbiz-navy mb-6">What D BIZ Handles</h4>
                <ul className="space-y-4">
                  {[
                    "Name Reservation & DSC Application",
                    "MOA, AOA & Statutory Drafting",
                    "ROC Coordination & ROC Filing",
                    "PAN, TAN & GST Registration",
                    "Post-Incorporation Compliance Setup"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-dbiz-teal h-5 w-5 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h4 className="text-2xl font-bold text-dbiz-navy mb-6">What You Provide</h4>
                <ul className="space-y-4">
                  {[
                    "KYC Documents of 7 Shareholders",
                    "KYC Documents of 3 Directors",
                    "Proposed Company Objectives",
                    "Registered Office Address Proof",
                    "Initial Capital Deposit Receipt"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-dbiz-navy/20 flex items-center justify-center shrink-0">
                         <div className="w-1.5 h-1.5 bg-dbiz-navy rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          <div className="bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Our Promise</h3>
              <p className="text-xl opacity-90 leading-relaxed mb-10 max-w-4xl">
                By choosing D BIZ CONSULTANCY, businesses benefit from professional expertise and streamlined processes, enabling you to focus on growth while we handle the complex legal requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Public Limited Registration",
                  "GST Compliance Services",
                  "Startup India Advisory"
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 flex items-center">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3" />
                    <span className="font-bold text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-dbiz-teal/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              FAQs
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 text-center">Comprehensive answers to common queries about Public Limited Companies.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                { q: "What is a Public Limited Company?", a: "A Public Limited Company (PLC) is a company incorporated under Section 2(71) of the Companies Act, 2013, which allows the public to invest in its shares or securities. It is considered a separate legal entity from its shareholders and provides limited liability protection." },
                { q: "What are the basic eligibility requirements?", a: "Minimum 3 directors, minimum 7 shareholders, at least one resident director, a registered office address in India, and valid identity/address proofs." },
                { q: "What is the minimum number of directors required?", a: "A Public Limited Company must have at least three directors. One of them must qualify as a resident director." },
                { q: "Is there a maximum limit on shareholders?", a: "No. Unlike Private Limited Companies, Public Limited Companies do not have a maximum limit on the number of members." },
                { q: "What is the minimum capital required?", a: "Although the Act removed strict minimum capital requirements, companies are generally formed with a minimum paid-up capital of ₹5,00,000 for regulatory expectations." },
                { q: "Can a Public Limited Company invite public investment?", a: "Yes. It can issue shares or debentures to the public. If it wants to list shares on stock exchanges, it must follow SEBI regulations." },
                { q: "What are the main documents required?", a: "PAN, Aadhaar/Passport, bank statements, photographs, registered office proof (rent agreement/NOC), MOA, and AOA." },
                { q: "What is the incorporation process?", a: "The process includes obtaining DSC and DIN, reserving a name via MCA, drafting constitutional documents, filing with ROC, and receiving the Certificate of Incorporation." },
                { q: "How long does the registration take?", a: "Typically 20 to 30 working days, depending on name approval and government processing timelines." },
                { q: "Can the registration be done online?", a: "Yes. The entire incorporation process is conducted online through the Ministry of Corporate Affairs (MCA) portal." },
                { q: "What are the immediate post-incorporation steps?", a: "Holding the first Board Meeting within 30 days, appointing a statutory auditor, opening a company bank account, and maintaining statutory registers." },
                { q: "Is a statutory audit mandatory?", a: "Yes. All Public Limited Companies must undergo an annual statutory audit by a qualified Chartered Accountant, regardless of turnover." },
                { q: "What are the annual compliance filings?", a: "Conducting an AGM, filing Financial Statements (AOC-4), filing an Annual Return (MGT-7), and filing Income Tax returns." },
                { q: "Can a PLC operate without listing on stock exchanges?", a: "Yes. It can function as an unlisted public company. Listing is only required for trading shares on public markets." },
                { q: "What is the role of the ROC?", a: "The Registrar of Companies (ROC) verifies documentation, approves the name, registers the company, and issues the Certificate of Incorporation." },
                { q: "Can NRIs become directors or shareholders?", a: "Yes, subject to Foreign Direct Investment (FDI) guidelines and sector-specific restrictions." },
                { q: "Can a Private Limited be converted to Public Limited?", a: "Yes. It requires altering the MOA/AOA, increasing the number of members and directors, and filing the conversion forms with ROC." },
                { q: "What are the major advantages?", a: "Market credibility, ability to raise public funds, limited liability protection, and potential for stock market listing." },
                { q: "Why do large businesses prefer this structure?", a: "For large-scale capital needs, professional governance, and the ability to attract institutional/venture capital funding." },
                { q: "Why choose D BIZ CONSULTANCY?", a: "We provide end-to-end support including expert drafting, coordination with regulators, and post-incorporation compliance management." }
              ].map((faq, index) => (
                <AccordionItem key={`faq-${index}`} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 transition-colors">
                    <h3 className="text-left font-bold text-dbiz-navy">{faq.q}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-dbiz-navy mb-8 italic">"Building Market Leadership with Corporate Integrity"</h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              With strong experience in corporate governance and large-scale business compliance, D BIZ CONSULTANCY is a trusted partner for Public Limited Companies. We handle the entire incorporation and statutory process—so you can focus on building market leadership with confidence.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-10">
                Start Your Registration
              </Button>
              <Button size="lg" variant="outline" className="border-dbiz-navy text-dbiz-navy">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default PublicLimitedPage;
