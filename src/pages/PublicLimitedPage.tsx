
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
  Gavel,
  Rocket,
  Search,
  Layout,
  Briefcase,
  Globe,
  HandCoins,
  Hash,
  UserCircle2,
  Presentation,
  PieChart,
  Handshake,
  Calendar,
  BadgeCheck,
  Check
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
import Autoplay from "embla-carousel-autoplay";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PublicLimitedPage = () => {
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

  const faqs = [
    {
      question: "What is a Public Limited Company?",
      answer: "A Public Limited Company (PLC) is a company incorporated under Section 2(71) of the Companies Act, 2013, which allows the public to invest in its shares or securities. It is considered a separate legal entity from its shareholders and provides limited liability protection, meaning shareholders are liable only to the extent of the unpaid value of their shares."
    },
    {
      question: "What are the basic eligibility requirements to start a Public Limited Company in India?",
      answer: "To register a Public Limited Company, the following minimum conditions must be satisfied: At least three directors, Minimum seven shareholders, At least one resident director in India, A registered office address in India, and Valid identity and address proofs of directors and shareholders."
    },
    {
      question: "What is the minimum number of directors required for a Public Limited Company?",
      answer: "A Public Limited Company must have at least three directors. One of the directors must qualify as a resident director, meaning the individual has stayed in India for 182 days or more during the financial year."
    },
    {
      question: "Is there a maximum limit on the number of shareholders in a Public Limited Company?",
      answer: "No. Unlike Private Limited Companies, Public Limited Companies do not have a maximum limit on shareholders, allowing them to raise capital from a large number of investors."
    },
    {
      question: "What is the minimum capital required to incorporate a Public Limited Company?",
      answer: "Although the Companies Act, 2013 removed strict minimum capital requirements, Public Limited Companies are generally formed with a minimum paid-up capital of ₹5,00,000 to meet regulatory and operational expectations."
    },
    {
      question: "Can a Public Limited Company invite the public to invest in shares?",
      answer: "Yes. A Public Limited Company can issue shares, debentures, or other securities to the public for raising capital. If the company wishes to trade shares publicly, it must comply with SEBI regulations and stock exchange listing requirements."
    },
    {
      question: "What are the main documents required for Public Limited Company registration?",
      answer: "The important documents required include: PAN card of directors and shareholders, Identity proof such as Aadhaar or Passport, Address proof such as bank statement or utility bill, Passport-size photographs, Registered office proof and owner NOC, Memorandum of Association (MOA), and Articles of Association (AOA)."
    },
    {
      question: "What is the process for registering a Public Limited Company in India?",
      answer: "The incorporation process generally includes: 1. Obtaining Digital Signature Certificates (DSC) for directors, 2. Applying for Director Identification Numbers (DIN), 3. Reserving the company name through the MCA portal, 4. Preparing the MOA and AOA, 5. Filing incorporation forms with the Registrar of Companies (ROC), and 6. Receiving the Certificate of Incorporation."
    },
    {
      question: "How long does it take to complete Public Limited Company registration?",
      answer: "The incorporation process typically takes 20 to 30 working days, depending on document verification, name approval, and ROC processing timelines."
    },
    {
      question: "Can the entire Public Limited Company registration process be completed online?",
      answer: "Yes. The incorporation process can be completed online through the Ministry of Corporate Affairs (MCA) portal, where documents are digitally signed and submitted for approval."
    },
    {
      question: "What happens after a Public Limited Company is incorporated?",
      answer: "After incorporation, the company must complete several initial compliances such as: Holding the first Board Meeting within 30 days, Appointing a statutory auditor, Opening a company bank account, and Maintaining statutory registers and records."
    },
    {
      question: "Is statutory audit mandatory for a Public Limited Company?",
      answer: "Yes. All Public Limited Companies must appoint a Chartered Accountant as statutory auditor and conduct annual statutory audits, irrespective of turnover."
    },
    {
      question: "What are the annual compliance requirements for a Public Limited Company?",
      answer: "Public Limited Companies must comply with several annual filings, including: Conducting Annual General Meetings (AGM), Filing Financial Statements (AOC-4), Filing Annual Return (MGT-7), and Filing Income Tax Returns."
    },
    {
      question: "Can a Public Limited Company operate without listing its shares on the stock exchange?",
      answer: "Yes. A Public Limited Company may function as an unlisted public company without listing its shares on stock exchanges. Listing is required only if the company intends to raise funds from the public through stock markets."
    },
    {
      question: "What is the role of the Registrar of Companies (ROC) in company registration?",
      answer: "The Registrar of Companies (ROC) verifies incorporation documents, approves company names, registers companies under the Companies Act, and issues the Certificate of Incorporation, which confirms the legal existence of the company."
    },
    {
      question: "Can foreign nationals or NRIs become shareholders or directors of a Public Limited Company?",
      answer: "Yes. Foreign nationals and Non-Resident Indians (NRIs) can become shareholders or directors in a Public Limited Company, subject to Foreign Direct Investment (FDI) regulations and sector-specific restrictions."
    },
    {
      question: "Can an existing Private Limited Company be converted into a Public Limited Company?",
      answer: "Yes. A Private Limited Company can be converted into a Public Limited Company by altering its Memorandum and Articles of Association, increasing the number of shareholders and directors as required, and filing the necessary forms with the Registrar of Companies."
    },
    {
      question: "What are the major advantages of forming a Public Limited Company?",
      answer: "Key advantages include: Ability to raise capital from the public, Limited Liability protection for shareholders, Higher credibility among investors and financial institutions, and Greater opportunities for business expansion."
    },
    {
      question: "Why do large businesses prefer the Public Limited Company structure?",
      answer: "Large businesses often choose this structure because it provides access to large-scale capital, investor participation, and greater corporate credibility, which helps in expanding operations and attracting institutional funding."
    },
    {
      question: "Why choose D BIZ CONSULTANCY for Public Limited Company registration?",
      answer: "D BIZ CONSULTANCY offers end-to-end support for Public Limited Company incorporation, including documentation preparation, company name approval, ROC filing, compliance guidance, and post-incorporation support, ensuring a smooth and legally compliant registration process."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        
        {/* Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CachedImage
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1440&q=60"
              alt="Public Limited Company Background"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-dbiz-navy/95 via-dbiz-navy/70 to-transparent"></div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-start">
              <div className="md:col-span-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2.5 h-2.5 rounded-full bg-dbiz-teal mr-2"></span>
                  Quick Registration • Regulatory Compliance • Expert Advisory
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll">
                  PUBLIC LIMITED COMPANY REGISTRATION
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll">
                  D BIZ CONSULTANCY provides complete Public Limited Company registration services. Our expert team ensures a seamless and compliant incorporation process — from company name approval and documentation to ROC filing and post-incorporation compliance management.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll"
                  >
                    Start Registration <ArrowDownCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:col-span-4 animate-on-scroll">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative">
                   <div className="absolute top-0 right-0 p-4"><Building2 className="h-12 w-12 text-dbiz-teal/40" /></div>
                   <CachedImage 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=60" 
                    alt="Corporate Office" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl mb-6 shadow-inner"
                  />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-dbiz-navy p-4 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold">3 Min</div>
                      <div className="text-[10px] uppercase opacity-80">Directors</div>
                    </div>
                    <div className="bg-dbiz-navy p-4 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold">7 Min</div>
                      <div className="text-[10px] uppercase opacity-80">Shareholders</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Nav */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Search, label: 'Introduction' },
                { id: 'features', icon: Layers, label: 'Key Features' },
                { id: 'benefits', icon: Award, label: 'Benefits' },
                { id: 'comparison', icon: Gavel, label: 'Comparison' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: RefreshCw, label: 'Process' },
                { id: 'compliance', icon: Shield, label: 'Compliance' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-4 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-sm font-medium transition-all ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleSectionClick(item.id); }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 1. Introduction Section */}
        <section id="overview" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-start">
              <div className="md:col-span-6">
                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight">What is a Public Limited Company?</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="font-medium leading-relaxed">
                    A Public Limited Company (PLC) is a company incorporated under the Companies Act, 2013 that allows the public to subscribe to its shares and invest in its capital. It is considered a separate legal entity distinct from its shareholders, enabling it to own property, enter contracts, and initiate legal proceedings in its own name.
                  </p>
                  <p className="leading-relaxed">
                    Public Limited Companies are commonly formed by businesses that intend to raise capital from the public, attract institutional investors, and expand operations on a large scale. These companies operate under the regulatory framework of the Ministry of Corporate Affairs (MCA) and, where applicable, the Securities and Exchange Board of India (SEBI).
                  </p>
                  
                  <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-6 mt-8">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                      <Zap className="text-dbiz-teal h-6 w-6" /> Minimum Requirements at a Glance:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Minimum 3 Directors (at least one Indian resident director)",
                        "Minimum 7 Shareholders (no maximum limit)",
                        "Minimum Paid-up Capital generally ₹5,00,000",
                        "Limited Liability protection for shareholders",
                        "Perpetual Succession regardless of ownership changes"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-dbiz-teal shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-dbiz-navy rounded-2xl flex items-center justify-center text-white">
                      <Gavel className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-dbiz-navy">Legal Definition</h3>
                  </div>
                  <p className="text-sm font-bold text-dbiz-teal mb-4 uppercase tracking-wider">As per the Companies Act, 2013</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    As per Section 2(71) of the Companies Act, 2013, a Public Limited Company is a company that:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Does not restrict the transfer of shares, allowing shareholders to freely transfer their shares.",
                      "Requires a minimum of 7 members, with no maximum limit on the number of members.",
                      "May invite the public to subscribe to its shares, debentures, or other securities for raising capital."
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm font-semibold text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-dbiz-teal mt-2 shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Carousel */}
        <section id="features" className="py-28 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Key Features of a Public Limited Company</h2>
              <p className="text-lg text-gray-500">A Public Limited Company offers several advantages for businesses looking to scale.</p>
            </div>

            <Carousel 
              opts={{ align: "start", loop: true }} 
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { 
                    title: "Separate Legal Entity", 
                    desc: "A Public Limited Company has its own independent legal identity, separate from its shareholders and directors. This allows the company to own property, enter contracts, and undertake legal actions in its own name.", 
                    icon: Shield,
                    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Limited Liability Protection", 
                    desc: "Shareholders are liable only to the extent of the unpaid value of the shares they hold. This protects the personal assets of shareholders from the company’s debts and financial liabilities.", 
                    icon: BadgeCheck,
                    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Ability to Raise Public Capital", 
                    desc: "Public Limited Companies can raise substantial capital by issuing shares or debentures to the public. This provides businesses with greater opportunities to secure funding for expansion and long-term growth.", 
                    icon: TrendingUp,
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Large Shareholder Base", 
                    desc: "A Public Limited Company must have a minimum of seven shareholders, and there is no upper limit on the number of members. This structure enables businesses to attract a wide pool of investors.", 
                    icon: Users,
                    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Free Transferability of Shares", 
                    desc: "Shares of a Public Limited Company can generally be transferred without major restrictions. For listed companies, shares can be traded on recognized stock exchanges, providing liquidity to investors.", 
                    icon: Repeat,
                    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Perpetual Succession", 
                    desc: "The company continues to exist regardless of changes in shareholders, directors, or management. Its existence remains unaffected until it is legally dissolved under the Companies Act.", 
                    icon: Clock,
                    image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=600&q=60"
                  }
                ].map((type, idx) => (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all rounded-[2rem] bg-white group overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={type.image} 
                          alt={type.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-dbiz-navy/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-lg border border-white/20">
                          <type.icon className="h-5 w-5 text-dbiz-teal" />
                        </div>
                      </div>
                      <CardContent className="p-8">
                        <h3 className="text-xl font-black text-dbiz-navy mb-4 uppercase tracking-tighter">{type.title}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed text-sm">{type.desc}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-3 mt-8">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-xl border-dbiz-teal/20 hover:bg-dbiz-teal hover:text-white transition-all" />
                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-xl border-dbiz-teal/20 hover:bg-dbiz-teal hover:text-white transition-all" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* 3. Benefits Section */}
        <section id="benefits" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 tracking-wide">● Benefits</span>
                <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight uppercase leading-tight">Benefits of a Public Limited Company</h2>
                <div className="space-y-6">
                  {[
                    "Access to large capital through public investment",
                    "Increased credibility among investors and institutions",
                    "Liquidity for shareholders through share transferability",
                    "Business expansion opportunities",
                    "Professional corporate governance structure",
                    "Eligibility for government incentives and support"
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-6 h-6 rounded-full bg-dbiz-teal/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                        <Check className="h-3.5 w-3.5 text-dbiz-teal group-hover:text-white" />
                      </div>
                      <p className="text-gray-700 font-bold text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <CachedImage 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                  alt="Business Benefits" 
                  className="rounded-[3rem] shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-dbiz-navy p-8 rounded-[2rem] text-white shadow-xl max-w-xs">
                  <div className="text-4xl font-black text-dbiz-teal mb-2 tracking-tighter uppercase">SCALE</div>
                  <p className="text-sm font-medium opacity-80">Ideal for businesses aiming for large-scale operations and public funding.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Comparison Section */}
        <section id="comparison" className="py-24 bg-dbiz-navy text-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">Comparison of Business Structures</h2>
              <p className="text-lg opacity-80">Choose the right structure for your business needs.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 overflow-hidden">
              <Table>
                <TableHeader className="bg-white/10">
                  <TableRow className="hover:bg-transparent border-white/10">
                    <TableHead className="text-white font-black uppercase text-center p-6 border-r border-white/10">Feature</TableHead>
                    <TableHead className="text-dbiz-teal font-black uppercase text-center p-6 border-r border-white/10">Public Limited</TableHead>
                    <TableHead className="text-white font-black uppercase text-center p-6 border-r border-white/10">Private Limited</TableHead>
                    <TableHead className="text-white font-black uppercase text-center p-6 border-r border-white/10">LLP</TableHead>
                    <TableHead className="text-white font-black uppercase text-center p-6">Proprietorship</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { feature: "Liability", public: "Limited", private: "Limited", llp: "Limited", prop: "Unlimited" },
                    { feature: "Legal Entity", public: "Separate", private: "Separate", llp: "Separate", prop: "Not separate" },
                    { feature: "Ownership", public: "Min 7 members", private: "2–200 members", llp: "2+ partners", prop: "Single owner" },
                    { feature: "Capital Raising", public: "Public investment", private: "Private investment", llp: "Partner contribution", prop: "Personal funds" },
                    { feature: "Compliance", public: "High", private: "Moderate", llp: "Moderate", prop: "Minimal" }
                  ].map((row, i) => (
                    <TableRow key={i} className="hover:bg-white/5 border-white/10 transition-colors">
                      <TableCell className="font-bold p-6 border-r border-white/10">{row.feature}</TableCell>
                      <TableCell className="text-center p-6 border-r border-white/10 font-black text-dbiz-teal">{row.public}</TableCell>
                      <TableCell className="text-center p-6 border-r border-white/10 font-semibold">{row.private}</TableCell>
                      <TableCell className="text-center p-6 border-r border-white/10 font-semibold">{row.llp}</TableCell>
                      <TableCell className="text-center p-6 font-semibold">{row.prop}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* 5. Documents Required Section */}
        <section id="documents" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 tracking-wide shadow-sm border border-dbiz-teal/5">
                ● Documents Required
              </div>
              <h2 className="font-black text-dbiz-navy mb-8 tracking-tight uppercase leading-tight font-sans" style={{ fontSize: "38.25px" }}>
                Documents Required – Public Limited Company
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-4xl mx-auto">
                  D BIZ CONSULTANCY assists clients with collecting and preparing all required documentation for Public Limited Company incorporation.
                </p>
              </div>
            </div>

            {/* Warning Box: Rejection Prevention */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-8 shadow-sm flex items-start gap-6 animate-fade-in">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-amber-900 mb-4">Common Rejection Prevention Tips</h4>
                  <div className="space-y-3">
                    {[
                      "Name and address spelling must match across PAN / Aadhaar / Passport and SPICe+ application.",
                      "Registered office documents must be consistent (owner name, NOC, rent agreement, utility bill).",
                      "Utility bills and bank statements should be dated within the last 2 months.",
                      "Ensure all directors’ details and signatures match submitted identity proofs."
                    ].map((tip, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-amber-800 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 1. For Indian Directors/Shareholders */}
              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="bg-dbiz-navy p-8 text-white">
                  <h3 className="text-2xl font-bold tracking-tight uppercase">For Indian Directors / Shareholders</h3>
                  <p className="text-dbiz-teal text-xs font-bold mt-1 opacity-80">(Domestic Nationals)</p>
                </div>
                <div className="p-10 space-y-8">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 bg-dbiz-teal/10 rounded-full flex items-center justify-center shrink-0 text-dbiz-teal border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">Identity Proof</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">PAN Card (Mandatory), Aadhaar Card, Passport, Voter ID, Driving License</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 bg-dbiz-teal/10 rounded-full flex items-center justify-center shrink-0 text-dbiz-teal border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">Address Proof</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Utility Bills or Bank Statements (dated within last 2 months)</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 bg-dbiz-teal/10 rounded-full flex items-center justify-center shrink-0 text-dbiz-teal border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">Photographs</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Recent passport-sized photographs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. For Foreign Nationals / NRIs */}
              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="bg-dbiz-navy p-8 text-white">
                  <h3 className="text-2xl font-bold tracking-tight uppercase">For Foreign Nationals / NRIs</h3>
                </div>
                <div className="p-10 space-y-8">
                  <div className="flex gap-5">
                    <div className="w-10 h-10 bg-dbiz-teal/10 rounded-full flex items-center justify-center shrink-0 text-dbiz-teal border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">Identity Proof</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Passport (Mandatory)</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 bg-dbiz-teal/10 rounded-full flex items-center justify-center shrink-0 text-dbiz-teal border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">Address Proof</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Driver’s License, Bank Statement, or Residence Card</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-10 h-10 bg-dbiz-teal/10 rounded-full flex items-center justify-center shrink-0 text-dbiz-teal border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">Notarisation / Apostille</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Required depending on director/shareholder status and MCA regulations</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-dbiz-teal"></div>
                    <p className="text-gray-400 text-xs italic font-bold leading-none">Note: A Public Limited Company must have at least one Resident Director (182+ days stay in India).</p>
                  </div>
                </div>
              </div>

              {/* 3. For Public Limited Company Registration */}
              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="bg-dbiz-navy p-8 text-white flex items-center gap-4">
                  <FileText className="h-6 w-6 text-dbiz-teal" />
                  <h3 className="text-2xl font-bold tracking-tight uppercase">For Public Limited Company Registration</h3>
                </div>
                <div className="p-10 space-y-6">
                  {[
                    { title: "Memorandum of Association (MOA)", desc: "Company's core objectives and scope." },
                    { title: "Articles of Association (AOA)", desc: "Internal governance rules and bylaws." },
                    { title: "Declaration & Consent Forms", desc: "Mandatory forms signed by directors and professionals." },
                    { title: "Digital Signature Certificate (DSC)", desc: "Electronic signature for MCA filing." },
                    { title: "Director Identification Number (DIN)", desc: "Unique ID number for all company directors." }
                  ].map((doc, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-1.5 h-1.5 rounded-full bg-dbiz-teal shrink-0 mt-2.5"></div>
                      <div>
                        <h4 className="font-bold text-dbiz-navy text-base mb-1">{doc.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. For Registered Office */}
              <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="bg-dbiz-navy p-8 text-white flex items-center gap-4">
                  <Building2 className="h-6 w-6 text-dbiz-teal" />
                  <h3 className="text-2xl font-bold tracking-tight uppercase">For Registered Office</h3>
                </div>
                <div className="p-10 space-y-8">
                  <div className="space-y-6">
                    <div className="flex gap-5">
                      <div className="w-10 h-10 bg-dbiz-teal/5 rounded-xl flex items-center justify-center shrink-0 border border-dbiz-teal/10">
                        <Building2 className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dbiz-navy text-base mb-1">Rent Agreement + NOC</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">For rented premises, including property owner's authorization.</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="w-10 h-10 bg-dbiz-teal/5 rounded-xl flex items-center justify-center shrink-0 border border-dbiz-teal/10">
                        <FileText className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dbiz-navy text-base mb-1">Property Ownership Documents</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">For owned premises, including tax receipts or sale deeds.</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="w-10 h-10 bg-dbiz-teal/5 rounded-xl flex items-center justify-center shrink-0 border border-dbiz-teal/10">
                        <Clock className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dbiz-navy text-base mb-1">Recent Utility Bill</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">Electricity/Water bill with matching owner name.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Process Section */}
        <section id="process" className="py-24 bg-dbiz-navy text-white scroll-mt-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-dbiz-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight uppercase leading-tight animate-on-scroll">Public Limited Company Registration Process in India</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed animate-on-scroll">
                Registering a Public Limited Company in India involves several legal and procedural steps under the Companies Act, 2013 and regulations issued by the Ministry of Corporate Affairs (MCA). The process includes obtaining digital signatures, reserving the company name, filing incorporation documents with the Registrar of Companies (ROC), and completing post-incorporation formalities.
              </p>
              <p className="text-dbiz-teal font-black text-xl animate-on-scroll">
                With professional assistance from D BIZ CONSULTANCY, businesses can complete the Public Limited Company registration process efficiently while ensuring full compliance with statutory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Obtain Digital Signature Certificate (DSC)", desc: "The first step in registering a Public Limited Company is obtaining a Digital Signature Certificate (DSC) for all proposed directors. A DSC is required to digitally sign electronic documents submitted to the MCA portal." },
                { step: "02", title: "Apply for Director Identification Number (DIN)", desc: "A Director Identification Number (DIN) is a unique identification number allotted to individuals who wish to become directors of a company. It is mandatory for all directors under the Companies Act, 2013." },
                { step: "03", title: "Company Name Reservation", desc: "The next step is reserving the proposed company name through the MCA portal. It must be unique, comply with Incorporation Rules, and avoid conflicts with registered trademarks." },
                { step: "04", title: "Drafting MOA and AOA", desc: "The Memorandum of Association (MOA) and Articles of Association (AOA) are fundamental documents required for company incorporation, defining objectives and governance rules." },
                { step: "05", title: "Filing Incorporation Documents", desc: "Incorporation forms (SPICe+) are filed with the Registrar of Companies (ROC) along with supporting documents such as identity proofs, address proofs, and declarations." },
                { step: "06", title: "Certificate of Incorporation (COI)", desc: "After successful verification, the ROC issues the COI, which includes the CIN and legal confirmation of the company's existence." },
                { step: "07", title: "PAN and TAN Allocation", desc: "After incorporation, the company receives its Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) for tax compliance." },
                { step: "08", title: "Opening a Company Bank Account", desc: "The company must open a current bank account in its name using the COI, PAN, and other statutory documents to conduct business transactions." },
                { step: "09", title: "Commencement of Business", desc: "Before starting operations, the company must deposit share capital and file the commencement declaration (INC-20A) with the MCA." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all duration-500 animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="text-5xl font-black text-dbiz-teal/20 mb-6 group-hover:text-dbiz-teal/40 transition-colors">{item.step}</div>
                  <h4 className="text-xl font-bold mb-4 tracking-tight leading-tight">{item.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Timeline & Compliance Section */}
        <section id="compliance" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Timeline */}
              <div>
                <h2 className="text-[38.25px] font-black text-dbiz-navy mb-8 tracking-tight uppercase">Timeline for Registration</h2>
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-dbiz-navy font-bold p-6">Stage</TableHead>
                        <TableHead className="text-dbiz-navy font-bold p-6 text-right">Typical Time Required</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { stage: "DSC and DIN", time: "1 – 2 Days" },
                        { stage: "Name Reservation", time: "2 – 3 Days" },
                        { stage: "Document Preparation", time: "2 – 4 Days" },
                        { stage: "ROC Approval", time: "7 – 15 Days" },
                        { stage: "Total Registration Time", time: "20 – 30 Working Days" }
                      ].map((row, i) => (
                        <TableRow key={i} className="border-gray-100">
                          <TableCell className="font-bold text-gray-700 p-6">{row.stage}</TableCell>
                          <TableCell className="text-right p-6 font-black text-dbiz-teal">{row.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Mandatory Compliance */}
              <div>
                <h2 className="text-[38.25px] font-black text-dbiz-navy mb-8 tracking-tight uppercase">Mandatory Compliance</h2>
                <div className="space-y-4">
                  {[
                    { title: "First Board Meeting", time: "Within 30 days of incorporation" },
                    { title: "Appointment of Auditor", time: "Within 30 days" },
                    { title: "Board Meetings", time: "Minimum 4 per year" },
                    { title: "Statutory Audit", time: "Annually" },
                    { title: "Annual General Meeting", time: "Once every year" },
                    { title: "Financial Statement Filing (AOC-4)", time: "Within 30 days of AGM" },
                    { title: "Annual Return Filing (MGT-7)", time: "Within 60 days of AGM" },
                    { title: "Income Tax Return", time: "Annually" }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl flex justify-between items-center group hover:bg-dbiz-navy hover:text-white transition-all duration-300">
                      <span className="font-bold">{item.title}</span>
                      <span className="text-sm font-black text-dbiz-teal group-hover:text-dbiz-teal">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Why Choose D Biz Section */}
        <section id="services" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 tracking-wide shadow-sm border border-dbiz-teal/5">
                ● Why Choose D BIZ
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight uppercase leading-tight">
                Why Choose D BIZ CONSULTANCY?
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                D BIZ CONSULTANCY is a trusted business consultancy firm based in Trivandrum and Kochi, providing comprehensive support for business registrations, statutory compliance, taxation services, and corporate advisory across Kerala and major states in India.
              </p>
            </div>

            {/* Why Choose Consolidated Card */}
            <div className="max-w-5xl mx-auto mb-24">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/5 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                      { title: "Expert Guidance", desc: "Our team ensures that entrepreneurs and businesses receive reliable guidance and accurate documentation under applicable laws." },
                      { title: "End-to-End Support", desc: "From name approval and ROC filing to post-incorporation compliance, we handle the legal and regulatory requirements." },
                      { title: "Professional Expertise", desc: "With extensive experience in company incorporation, we ensure a smooth and legally compliant registration process." },
                      { title: "Trivandrum & Kochi Based", desc: "We provide localized support across Kerala and major states in India for accessible advisory." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="w-10 h-10 bg-dbiz-teal/10 rounded-xl flex items-center justify-center shrink-0 text-dbiz-teal shadow-sm border border-dbiz-teal/10">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-dbiz-navy text-lg mb-2 leading-tight">{item.title}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 pt-10 border-t border-gray-100">
                    <p className="text-center text-dbiz-navy text-lg font-bold italic opacity-80">
                      "By choosing D BIZ CONSULTANCY, businesses benefit from professional expertise and streamlined processes."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-dbiz-navy p-10 md:p-14 rounded-[3.5rem] text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-10 tracking-tight uppercase text-center">Our Key Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    "Public Limited Company Registration",
                    "Private Limited Company Incorporation",
                    "GST Registration and Compliance",
                    "ROC Filing and Company Law",
                    "Startup Advisory and Business Structuring",
                    "Annual Compliance and Audit Support"
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 group hover:bg-dbiz-teal transition-all">
                      <BadgeCheck className="h-6 w-6 text-dbiz-teal group-hover:text-white" />
                      <span className="font-bold">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQs Section */}
        <section id="faqs" className="py-24 scroll-mt-32 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6">FAQ</div>
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-4 uppercase tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-500">Everything you need to know about Public Limited Company Registration in India.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white px-8 rounded-2xl border border-gray-100 shadow-sm">
                    <AccordionTrigger className="text-left font-bold text-dbiz-navy hover:text-dbiz-teal hover:no-underline text-lg py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 pt-2 font-medium">
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

export default PublicLimitedPage;
