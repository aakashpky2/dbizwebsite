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
import { startupLoansFaq } from "@/data/startupLoansFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StartupLoansPage = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        
        {/* Hero Section */}
        <section className="relative bg-dbiz-navy text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/dbiz-uploads/backgroundimage.png"
              alt="Startup Loans Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="absolute inset-0 z-0 bg-dbiz-navy/20"></div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-12 items-start">
              <div className="md:col-span-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-6 animate-on-scroll">
                  <span className="w-2.5 h-2.5 rounded-full bg-dbiz-teal mr-2 shadow-sm"></span>
                  Financial Assistance | Business Activities | Working Capital
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll uppercase drop-shadow-lg">
                  START UP LOANS
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll">
                  Startup loans are repayable financial assistance provided to eligible startups and entrepreneurs by banks, NBFCs, Government schemes, financial institutions, and approved lending agencies.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll"
                  >
                    Explore Loans <ArrowDownCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:col-span-4 animate-on-scroll">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative">
                   <div className="absolute top-0 right-0 p-4"><Rocket className="h-12 w-12 text-dbiz-teal/40" /></div>
                   <img 
                      src="/dbiz-uploads/financial-support-hand.png" 
                      alt="Financial Support" 
                      className="w-full aspect-[4/3] object-cover rounded-2xl mb-6 shadow-inner"
                    />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-dbiz-navy p-4 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-[10px] uppercase opacity-80">Ownership Retention</div>
                    </div>
                    <div className="bg-dbiz-navy p-4 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold">Fast</div>
                      <div className="text-[10px] uppercase opacity-80">Processing</div>
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
                { id: 'types', icon: Layers, label: 'Loan Types' },
                { id: 'eligibility', icon: CheckCircle, label: 'Eligibility' },
                { id: 'sources', icon: Globe, label: 'Sources' },
                { id: 'process', icon: RefreshCw, label: 'Apply Process' },
                { id: 'timeline', icon: Clock, label: 'Timeline' },
                { id: 'risks', icon: AlertTriangle, label: 'Risks' },
                { id: 'docs', icon: FileText, label: 'Documents' },
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
              <div className="md:col-span-5">
                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight">What Are Startup Loans?</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="font-medium leading-relaxed">
                    Startup loans are repayable financial assistance provided to eligible startups and entrepreneurs by banks, NBFCs, Government schemes, financial institutions, and approved lending agencies.
                  </p>
                  <p className="leading-relaxed">
                    They help startups establish, operate, expand, and scale their business by providing access to capital for business activities, infrastructure, technology, working capital, and operational requirements.
                  </p>
                  <p className="leading-relaxed">
                    Unlike grants, startup loans generally require repayment with interest and may involve repayment schedules, eligibility conditions, documentation requirements, collateral obligations (in certain cases), and financial compliance.
                  </p>
                  
                  <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-6 mt-8">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                      <Zap className="text-dbiz-teal h-6 w-6" /> Startup loans may be used for:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Business setup and infrastructure", "Working capital requirements", "Machinery and equipment purchase",
                        "Technology development", "Product development and expansion", "Marketing and operational expenses"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-dbiz-teal shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-gray-500 italic leading-relaxed mt-4">
                    In India, startup loans mainly focus on supporting entrepreneurship, MSME growth, innovation-driven businesses, employment generation, manufacturing, service-sector development, women entrepreneurship, and scalable business models.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-3 items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 leading-relaxed">
                      <strong>Important:</strong> Startup loans are sanctioned based on lender policies and may require credit assessment, repayment capability evaluation, proper utilization of funds, banking compliance, financial reporting, and adherence to loan conditions and repayment schedules.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-5">
                <div className="startup-definition-card ml-auto">
                <img 
                  src="/dbiz-uploads/ngo_law_definition_sidebar_v2.png" 
                  alt="Startup Loans Definition" 
                  className="startup-card-image shadow-sm"
                />

                <h3 className="tracking-tighter">Definition of Startup Loans</h3>

                <p>
                  Startup loans are loans or credit facilities provided to startups and entrepreneurs if they satisfy the following conditions:
                </p>

                <ul className="startup-points">
                  <li>
                    The applicant must be a startup, new business, MSME, or entrepreneur requiring funds for business purposes.
                  </li>
                  <li>
                    The loan should be used for business setup, working capital, machinery purchase, technology development, product development, or business expansion.
                  </li>
                  <li>
                    The applicant should have a valid business registration such as Private Limited Company, LLP, Partnership Firm, or Proprietorship, as required by the lender.
                  </li>
                  <li>
                    The startup should have a clear business model, projected revenue plan, and repayment capacity.
                  </li>
                  <li>
                    The applicant should comply with the eligibility conditions, documentation requirements, fund utilization rules, and repayment terms prescribed by the bank, NBFC, government scheme, or lending institution.
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* 1.5. Legal Framework & Regulations Section */}
        <section className="startup-legal-framework">
          <div className="framework-heading">
            <h2 className="tracking-tighter uppercase">Legal Framework & Regulations (India)</h2>
            <p>
              In India, startup loans are provided through banks, NBFCs, government loan schemes, financial institutions, and approved lending agencies. Each loan scheme or lender has its own eligibility criteria, application process, repayment terms, interest rates, security requirements, and documentation rules.
            </p>
          </div>

          <div className="framework-cards">
            {/* CARD 1 */}
            <div className="framework-card">
              <div className="framework-number">01</div>
              <h3>Major Institutions</h3>
              <p>
                In India, most startup loans and business funding support flow through: Banks, NBFCs, MSME loan schemes, MUDRA, Stand-Up India, and SIDBI.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="framework-card">
              <div className="framework-number">02</div>
              <h3>Mandatory Registrations</h3>
              <p>
                Valid business registration such as Private Limited Company, LLP, Partnership, or Proprietorship is required, along with PAN, GST, and Udyam Registration.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="framework-card active">
              <div className="framework-number">03</div>
              <h3>Compliance & Capacity</h3>
              <p>
                Requires proper bank account, financial records, project report, business plan, financial projections, and a credit assessment showing repayment capacity.
              </p>
            </div>
          </div>

        </section>

        {/* 3. Loan Types Carousel */}
        <section id="types" className="py-28 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Types of Startup Loans in India</h2>
              <p className="text-lg text-gray-500">Startup loans in India are offered by banks, NBFCs, Government schemes, and financial institutions to support business setup, working capital, asset purchase, and business growth.</p>
            </div>

            <Carousel 
              opts={{ align: "start", loop: true }} 
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { 
                    title: "Term Loans", 
                    desc: "Support startups for long-term business requirements such as machinery purchase, office setup, equipment, infrastructure, and business expansion.", 
                    icon: Rocket,
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Working Capital Loans", 
                    desc: "Help startups manage day-to-day business expenses such as salary, rent, inventory, raw materials, vendor payments, and operational costs.", 
                    icon: Target,
                    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "MUDRA Loans", 
                    desc: "Provided to small businesses and entrepreneurs under Shishu, Kishor, and Tarun categories for starting or expanding business activities.", 
                    icon: Layout,
                    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "CGTMSE Collateral-Free Loans", 
                    desc: "Support eligible MSMEs and startups by providing loan facilities without collateral security, subject to scheme and lender conditions.", 
                    icon: Shield,
                    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Equipment / Machinery Loans", 
                    desc: "Provided for purchasing machinery, tools, computers, technology infrastructure, production equipment, or other business assets.", 
                    icon: Activity,
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "State Startup / MSME Loan Schemes", 
                    desc: "Offered under State Government startup and MSME policies for business setup, expansion, working capital, technology adoption, and employment generation.", 
                    icon: MapPin,
                    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=60"
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

        {/* 4. Importance & Benefits Section */}
        <section className="startup-benefits-section">
          <div className="startup-benefits-container">
            {/* LEFT CONTENT */}
            <div className="benefits-left">
              <span className="section-badge">Benefits</span>
              <h2>Importance & Benefits of Startup Loans</h2>
              <p>
                Startup loans are important because they provide financial support to startups for setting up, operating, and expanding their business. They help founders arrange funds for business needs without giving up ownership or equity at an early stage.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" 
                alt="Startup Loans Benefits" 
              />
            </div>

            {/* RIGHT BENEFITS */}
            <div className="benefits-right mt-20">
              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Ownership Retention</strong> — Startups can receive funds without giving equity or ownership share to investors.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Business Setup Support</strong> — Loans help startups meet initial expenses such as office setup, machinery, equipment, technology, and infrastructure.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Working Capital Support</strong> — Startup loans help manage daily expenses such as salary, rent, inventory, vendor payments, and operational costs.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Business Growth & Expansion</strong> — Loans support product development, marketing, customer acquisition, branch expansion, and scaling of business operations.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Credit History Building</strong> — Proper repayment of loans helps the startup build a good banking relationship and credit profile for future funding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Eligibility Section */}
        <section id="eligibility" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-12 text-center">Eligibility Criteria for Startup Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Stage of Startup", desc: "Loans may be available for new startups, early-stage businesses, existing MSMEs, or revenue-generating businesses, depending on the scheme." },
                { title: "Business Registration", desc: "The startup should have proper registration such as Private Limited Company, LLP, Partnership Firm, or Proprietorship, as required by the lender." },
                { title: "Promoter Profile", desc: "Banks and financial institutions usually check the background, experience, credit score, and repayment history of the promoters." },
                { title: "Business Model & Capacity", desc: "The startup should have a clear business model, revenue plan, financial projections, and ability to repay the loan." },
                { title: "Purpose of Loan", desc: "The loan requirement should be clearly defined, such as working capital, machinery purchase, technology development, business setup, or expansion." },
                { title: "Basic Compliance", desc: "The startup should have proper PAN, bank account, GST registration if applicable, accounting records, financial documents, and no major legal defaults." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"><CheckCircle className="text-dbiz-teal h-6 w-6" /></div>
                  <h4 className="text-xl font-bold text-dbiz-navy mb-4 border-l-4 border-dbiz-teal pl-4">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Documents Required Section */}
        <section id="documents" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 border border-dbiz-teal/20">
                <FileText className="h-4 w-4 mr-2" /> DOCUMENTATION
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-6 tracking-tight">Documents Required</h2>
              <p className="text-gray-500 text-lg">Typically required documents include the following. Specific requirements may vary by lender or scheme.</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  "Certificate of Incorporation / Registration",
                  "PAN and GST Registration (if applicable)",
                  "Founders’ / Promoters’ KYC (Aadhaar, PAN, Address Proof)",
                  "Udyam Registration, if applicable",
                  "Detailed business plan / project report",
                  "Financial projections and basic historical financials (if any)",
                  "Bank statements / cancelled cheque / passbook copy",
                  "Income Tax Returns of promoters and business, if available",
                  "Quotation for machinery, equipment, or assets, if applicable",
                  "DPIIT recognition certificate (if available)"
                ].map((doc, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="bg-dbiz-teal/10 p-2 rounded-xl shrink-0 group-hover:bg-dbiz-teal group-hover:text-white transition-all">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed text-[15px]">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-100 flex gap-4 items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Note:</strong> Collateral documents may be required by the lender in certain cases. Always refer to the official lender or scheme guidelines for the most accurate list.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Sources of Startup Loans Section */}
        <section id="sources" className="startup-grants-section scroll-mt-32">
          <div className="section-header-sources">
            <span className="tag-sources uppercase">Sources of Startup Loans</span>
            <h2>Funding Support Available for Startups</h2>
          </div>

          <div className="grants-grid-sources">
            {/* Card 1 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>Banks & Financial Institutions</h3>
                <p>Banks provide startup loans for business setup, working capital, expansion, and machinery purchase.</p>
                <ul>
                  <li>Public sector banks</li>
                  <li>Private sector banks</li>
                  <li>Small finance banks</li>
                  <li>SIDBI and other financial institutions</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>Government Loan Schemes</h3>
                <p>Government-backed schemes support startups through subsidized or collateral-free funding programs.</p>
                <ul>
                  <li>MUDRA Loan Scheme</li>
                  <li>Stand-Up India Scheme</li>
                  <li>PMEGP Scheme</li>
                  <li>CGTMSE collateral-free loan support</li>
                  <li>Ministry of MSME programs</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>NBFCs & Fintech Lenders</h3>
                <p>Digital lending platforms provide business loans with faster processing and flexible options.</p>
                <ul>
                  <li>Working capital loans</li>
                  <li>Invoice financing</li>
                  <li>Equipment financing</li>
                  <li>Digital business loans</li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>State Government Schemes</h3>
                <p>State Governments provide startup and MSME loan assistance through financial corporations.</p>
                <ul>
                  <li>Startup funding support</li>
                  <li>Subsidized loan schemes</li>
                  <li>Interest subsidy assistance</li>
                  <li>Women entrepreneur loan schemes</li>
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>Incubators & Support</h3>
                <p>Incubators connect startups with loan programs and blended funding support.</p>
                <ul>
                  <li>Government-supported incubators</li>
                  <li>Startup missions</li>
                  <li>Innovation councils</li>
                  <li>University incubation centers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Funding Overview Section */}
        <section id="funding-overview" className="funding-grid-section scroll-mt-32">
          <div className="container">
            <h2>How Much Funding Can You Get?</h2>
            <p className="section-intro">
              The amount of startup loan funding depends on the lender, loan scheme, stage of the startup, business model, repayment capacity, credit profile, and purpose of the loan.
            </p>

            <div className="funding-grid-main">
              {/* Card 1 */}
              <div className="funding-grid-card">
                <h3>Idea / Business Setup Stage</h3>
                <p>
                  Startups at the idea, registration, or early business setup stage may receive
                  around <strong>₹50,000 to ₹10 lakh</strong>, depending on the scheme and lender eligibility.
                </p>
              </div>

              {/* Card 2 */}
              <div className="funding-grid-card">
                <h3>Early Revenue / Working Capital Stage</h3>
                <p>
                  Startups with business operations, customer orders, sales records, or working capital requirements may receive around
                  <strong>₹5 lakh to ₹50 lakh or more</strong>.
                </p>
              </div>

              {/* Card 3 */}
              <div className="funding-grid-card">
                <h3>Growth / Expansion Stage</h3>
                <p>
                  Startups planning expansion, machinery purchase, or large-scale operations may receive
                  <strong>₹25 lakh to ₹5 crore or more</strong>, subject to lender approval.
                </p>
              </div>

              {/* Card 4 */}
              <div className="funding-grid-card">
                <h3>Actual Funding Depends On</h3>
                <ul>
                  <li>Purpose and requirement of the loan</li>
                  <li>Promoter profile and credit score</li>
                  <li>Business revenue and repayment capacity</li>
                  <li>Financial projections and project viability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Process Section */}
        <section id="process" className="process-timeline-section scroll-mt-32 overflow-hidden">
          <div className="container">
            <h2 className="animate-on-scroll">Step-by-Step Process to Apply</h2>
            <p className="section-desc animate-on-scroll">
              Applying for startup loans involves identifying the right loan scheme or lender, preparing documents, submitting the application, and completing verification and sanction formalities.
            </p>

            <div className="timeline-main">
              {[
                { step: 1, title: "Assessment", desc: "Evaluate the startup’s stage, business model, funding requirement, repayment capacity, and loan readiness.", side: "left" },
                { step: 2, title: "Lender Mapping", desc: "Identify suitable banks, NBFCs, government loan schemes, MSME schemes, or State programs.", side: "right" },
                { step: 3, title: "Document Preparation", desc: "Arrange incorporation documents, KYC, PAN, GST, bank statements, financials, and compliance records.", side: "left" },
                { step: 4, title: "Project Report Drafting", desc: "Prepare a strong project report covering business details, purpose, market, projections, and repayment plan.", side: "right" },
                { step: 5, title: "Application Submission", desc: "Submit the application through the selected bank, NBFC, government portal, or MSME portal.", side: "left" },
                { step: 6, title: "Bank Verification", desc: "The lender reviews the documents, business model, credit score, repayment capacity, and viability.", side: "right" },
                { step: 7, title: "Lender Discussion", desc: "The applicant may be required to answer queries, provide additional documents, or explain the business plan.", side: "left" },
                { step: 8, title: "Sanction & Agreement", desc: "Once approved, the lender issues a sanction letter and the startup signs the loan agreement.", side: "right" },
                { step: 9, title: "Loan Disbursement", desc: "Loan funds are disbursed either fully or in stages, depending on the nature of loan and sanction terms.", side: "left" },
                { step: 10, title: "Repayment & Compliance", desc: "The startup must repay the loan as per schedule and maintain proper records and banking discipline.", side: "right" }
              ].map((item, idx) => (
                <div key={idx} className={`timeline-item-row ${item.side} animate-on-scroll`} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="timeline-content-card">
                    <h3>Step {item.step}: {item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-16 text-center text-lg md:text-xl font-bold text-dbiz-teal max-w-4xl mx-auto animate-on-scroll">
              D Biz can manage the complete startup loan support process from eligibility assessment to documentation, project report preparation, loan application, follow-up, and post-sanction documentation support.
            </p>
          </div>
        </section>

        {/* 8.5. Typical Timelines Section */}
        <section id="timeline" className="timeline-section scroll-mt-32">
          <div className="container-custom">
            <h2 className="section-title uppercase tracking-tighter">TIMELINE</h2>
            <div className="title-underline"></div>

            <div className="timeline-cards">
              {[
                { 
                  badge: "1 – 3 WEEKS", 
                  title: "ASSESSMENT & PREPARATION", 
                  desc: "Evaluate the startup’s stage, business model, funding requirement, repayment capacity, and loan readiness." 
                },
                { 
                  badge: "1 – 2 WEEKS", 
                  title: "REPORT PREPARATION", 
                  desc: "Document collection and professional project report preparation covering business details and financial projections." 
                },
                { 
                  badge: "2 – 6 WEEKS", 
                  title: "VERIFICATION & DUE DILIGENCE", 
                  desc: "Lender reviews the documents, business model, credit score, repayment capacity, financials, and overall viability." 
                },
                { 
                  badge: "1 – 4 WEEKS", 
                  title: "SANCTION & AGREEMENT", 
                  desc: "Approval issuance, agreement signing, coverage of interest rate, repayment period, and other terms." 
                },
                { 
                  badge: "1 – 8 WEEKS", 
                  title: "LOAN DISBURSEMENT", 
                  desc: "Disbursement after approval, depending on lender processes and compliance completion." 
                }
              ].map((item, i) => (
                <div key={i} className="timeline-card">
                  <span className="timeline-badge uppercase">{item.badge}</span>
                  <h3 className="uppercase tracking-tight">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8.6. Common Risks & Challenges Section */}
        <section id="risks" className="risk-section scroll-mt-32">
          <div className="risk-container">
            {/* LEFT CONTENT */}
            <div className="risk-left">
              <h2 className="uppercase tracking-tighter">Common Risks & Challenges</h2>
              <p>
                Understand the common challenges startups face while applying for loans and business funding schemes to improve approval chances and ensure smooth repayment.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="risk-right">
              {[
                "Applying to unsuitable loan schemes or lenders.",
                "Weak documentation – incomplete forms, improper financials, or missing records.",
                "Poor business presentation – unclear business model or repayment plan.",
                "Low credit score or weak banking history of promoters.",
                "Insufficient collateral or guaranteed support, where required.",
                "Delays due to lender verification or compliance formalities.",
                "Improper financial planning leading to repayment pressure and cash flow issues.",
                "Over-dependence on loans without proper revenue generation planning."
              ].map((risk, i) => (
                <div key={i} className="risk-item">
                  <span className="check">✓</span>
                  {risk}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Why Choose D Biz Section */}
        <section id="services" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 tracking-wide shadow-sm border border-dbiz-teal/5">
                ● Why Choose D BIZ
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight uppercase leading-tight">
                Why D BIZ CONSULTANCY for Startup Loans?
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                D Biz Consultancy provides focused support for startups that are planning to apply for startup loans, MSME loans, collateral-free loans, and business funding schemes.
              </p>
            </div>

            {/* Why Choose Consolidated Card */}
            <div className="max-w-5xl mx-auto mb-24">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/5 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                      { title: "Specialised Startup Loan Support", desc: "We focus on identifying suitable loan schemes, banks, NBFCs, and funding options based on the startup’s stage, sector, and repayment capacity." },
                      { title: "Real-World Startup Experience", desc: "Experience working with startups at idea stage, early revenue stage, growth stage, and expansion stage, helping them structure business professionally." },
                      { title: "Strong Documentation & Financial Preparation", desc: "We prepare professional project reports, financial projections, CMA data, loan proposals, and supporting documents in a lender-friendly manner." },
                      { title: "Transparent Process", desc: "We follow a clear step-by-step approach with proper communication, timelines, document checklists, application tracking, and follow-up support." },
                      { title: "Trust & Ethics First", desc: "We provide honest eligibility assessment and guide startups only towards loan schemes and funding opportunities where they have a realistic possibility of approval." }
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
                      "D Biz becomes your reliable partner in navigating India’s startup loan and MSME funding ecosystem."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services & Support Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Card: D Biz Scope */}
              <div className="bg-[#eef6f9] p-10 md:p-14 rounded-[3.5rem] border border-dbiz-teal/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-dbiz-teal/20">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-dbiz-teal">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-dbiz-navy tracking-tight uppercase">What D BIZ Handles</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { title: "Startup Readiness Assessment", desc: "Evaluating business model, compliance status, financial readiness, repayment capacity, and loan eligibility." },
                    { title: "Registration & Compliance Support", desc: "Assisting with incorporation, Udyam Registration, DPIIT recognition, and GST registration to improve readiness." },
                    { title: "Loan Scheme & Lender Mapping", desc: "Identifying suitable banks, NBFCs, Government loan schemes, MSME programs, and financing options." },
                    { title: "Documentation & Drafting Support", desc: "Preparing project reports, financial projections, CMA reports, loan proposals, and business plans." },
                    { title: "End-to-End Application Management", desc: "Supporting application filing, document submission, clarification replies, and lender coordination." },
                    { title: "Presentation & Discussion Support", desc: "Helping founders prepare for bank discussions and lender meetings by improving business presentation." },
                    { title: "Post-Sanction Support", desc: "Assisting with documentation, compliance support, utilisation planning, and procedural guidance." }
                  ].map((service, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm border border-dbiz-teal/10 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">{service.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card: Additional Support */}
              <div className="bg-[#f0f4f8] p-10 md:p-14 rounded-[3.5rem] border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-dbiz-navy tracking-tight uppercase">Additional Support</h3>
                </div>
                <div className="space-y-8">
                  {[
                    { title: "Investor Pitch Readiness", desc: "Support in preparing investor pitch decks and presentation materials for equity funding discussions." },
                    { title: "Business Model Refinement", desc: "Guidance on improving business model, pricing strategy, revenue planning, and scalability." },
                    { title: "Legal & Compliance Checklist", desc: "Preparation of compliance checklists through partner professionals to ensure proper structuring." },
                    { title: "Banking & Financial Structuring", desc: "Support in understanding working capital management, repayment planning, and banking discipline." },
                    { title: "IP Strategy Guidance", desc: "Support through partners for trademarks, patents, copyrights, and intellectual property requirements." },
                    { title: "Funding Roadmap Preparation", desc: "Assistance in planning how the startup can combine loans, grants, investor funding, and revenue." }
                  ].map((support, i) => (
                    <div key={i} className="flex gap-5 group">
                      <ArrowRight className="h-5 w-5 text-gray-400 shrink-0 mt-1.5 transition-transform group-hover:translate-x-1" />
                      <div>
                        <h4 className="font-bold text-dbiz-navy text-lg mb-1 leading-none">{support.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{support.desc}</p>
                      </div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500">Everything you need to know about Startup Loans in India.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {startupLoansFaq.map((faq, index) => (
                  <AccordionItem key={index} value={faq.value} className="bg-white px-8 rounded-2xl border border-gray-100 shadow-sm">
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

export default StartupLoansPage;
