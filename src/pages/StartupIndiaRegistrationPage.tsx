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
import { startupFaq } from "@/data/startupFaq";
import CachedImage from "@/components/CachedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StartupIndiaRegistrationPage = () => {
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
            <CachedImage
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1440&q=60"
              alt="Startup Grants Background"
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
                  Non-Repayable Funding | Innovation Support | Government Schemes
                </div>

                <h1 className="text-[63.75px] font-extrabold mb-6 leading-tight tracking-tight animate-on-scroll">
                  STARTUP GRANTS
                  {location && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal font-semibold">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl animate-on-scroll">
                  Get non-repayable financial support to develop, test, validate, and scale your innovative business ideas without equity dilution or loan repayment burdens.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button
                    onClick={() => handleSectionClick('overview')}
                    className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-6 rounded-xl text-lg font-semibold flex items-center gap-3 shadow-xl transition-all hover:-translate-y-1 animate-on-scroll"
                  >
                    Explore Grants <ArrowDownCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:col-span-4 animate-on-scroll">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative">
                   <div className="absolute top-0 right-0 p-4"><Rocket className="h-12 w-12 text-dbiz-teal/40" /></div>
                   <img 
                    src="/dbiz-uploads/startup-grants-hero.png" 
                    alt="Financial Support" 
                    className="w-full aspect-[4/3] object-cover rounded-2xl mb-6 shadow-inner"
                  />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-dbiz-navy p-4 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold">0%</div>
                      <div className="text-[10px] uppercase opacity-80">Equity Dilution</div>
                    </div>
                    <div className="bg-dbiz-navy p-4 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold">Zero</div>
                      <div className="text-[10px] uppercase opacity-80">Repayment</div>
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
                { id: 'types', icon: Layers, label: 'Grant Types' },
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
                <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-8 tracking-tight">What Are Startup Grants?</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <p className="font-medium leading-relaxed">
                    Startup grants are non-repayable financial support given to eligible startups by the Government, State authorities, incubators, innovation centers, research institutions, and approved funding bodies.
                  </p>
                  <p className="leading-relaxed">
                    They help startups develop, test, validate, and scale innovative business ideas without the burden of loan repayment, collateral, interest, or normal equity dilution.
                  </p>
                  
                  <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-6 mt-8">
                    <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center gap-2">
                      <Zap className="text-dbiz-teal h-6 w-6" /> Grants May Be Used For:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Prototype development", "Product testing", "Research and development",
                        "Market entry support", "Technology improvement", "Business scaling"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-dbiz-teal shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-gray-500 italic leading-relaxed mt-4">
                    In India, grants mainly focus on innovation, technology, employment generation, women entrepreneurship, social impact, sustainability, and scalable business models.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-3 items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 leading-relaxed">
                      <strong>Important:</strong> Grants must be used as per scheme guidelines and may require milestone achievement, proper fund utilization, reporting, record maintenance, and compliance with specific conditions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-5">
                <div className="startup-definition-card ml-auto">
                <img 
                  src="/dbiz-uploads/ngo_law_definition_sidebar_v2.png" 
                  alt="Startup India Registration" 
                  className="startup-card-image shadow-sm"
                />

                <h3 className="tracking-tighter">Definition of Startup (DPIIT)</h3>

                <p>
                  A company or entity can be recognized as a Startup by DPIIT if it satisfies the following conditions:
                </p>

                <ul className="startup-points">
                  <li>
                    The entity must be within 10 years from the date of incorporation or registration.
                  </li>
                  <li>
                    It should be incorporated as a Private Limited Company, Registered Partnership Firm, or Limited Liability Partnership (LLP).
                  </li>
                  <li>
                    The annual turnover of the entity should not exceed INR 100 crore in any financial year since its incorporation.
                  </li>
                  <li>
                    The entity should work towards innovation, development, or improvement of products, processes, or services, or should have a scalable business model with high employment or wealth creation potential.
                  </li>
                  <li>
                    The entity should not be formed by splitting up or reconstructing an already existing business.
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
            <h2 className="tracking-tighter">LEGAL FRAMEWORK & REGULATIONS</h2>
            <p>
              In India, startup grants are provided through various government schemes, departments, incubators, and funding agencies. Each scheme has its own eligibility criteria, application process, and utilization rules.
            </p>
          </div>

          <div className="framework-cards">
            {/* CARD 1 */}
            <div className="framework-card">
              <div className="framework-number">01</div>
              <h3>Governance & Flow</h3>
              <p>
                Grants flow through established initiatives like Startup India (DPIIT), MSME schemes, and sectoral ministries for Biotech, Energy, and Electronics.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="framework-card">
              <div className="framework-number">02</div>
              <h3>Major Sources</h3>
              <p>
                Includes Central grants (SISFS), state-specific startup missions (Karnataka, Maharashtra, Gujarat), and specialized incubator-led funding portals.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="framework-card active">
              <div className="framework-number">03</div>
              <h3>Compliance Roadmap</h3>
              <p>
                Requires valid business registration (Pvt Ltd/LLP), DPIIT recognition, PAN/GST compliance, and adherence to specific reporting rules.
              </p>
            </div>
          </div>

        </section>

        {/* 3. Grant Types Carousel */}
        <section id="types" className="py-28 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-dbiz-navy mb-6 tracking-tight">Types of Startup Grants</h2>
              <p className="text-lg text-gray-500">Startup grants in India are categorized by stage, sector, and founder profile.</p>
            </div>

            <Carousel 
              opts={{ align: "start", loop: true }} 
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { 
                    title: "Idea-Stage & Prototyping", 
                    desc: "Support early-stage startups for idea validation, prototype development, testing, and proof-of-concept through TBIs, DST, and BIRAC.", 
                    icon: Rocket,
                    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Commercialisation Grants", 
                    desc: "Help startups launch products, conduct pilot projects, acquire early customers, and successfully enter the market.", 
                    icon: Target,
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Sector-Specific Grants", 
                    desc: "Dedicated support for Biotechnology, Clean Energy, Agritech, Deep Tech, Healthtech, Robotics, and Artificial Intelligence.", 
                    icon: Layout,
                    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "Women & Social Focused", 
                    desc: "Specific schemes designed to encourage entrepreneurship among women founders, SC/ST entrepreneurs, and youth.", 
                    icon: Users,
                    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "R&D and Innovation", 
                    desc: "Grants for technology development, research activities, intellectual property creation, and advanced proof-of-concept.", 
                    icon: Activity,
                    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=60"
                  },
                  { 
                    title: "State Policy Grants", 
                    desc: "Seed support, rental subsidy, capital subsidy, patent reimbursement, and marketing support offered under state startup policies.", 
                    icon: MapPin,
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=60"
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
              <h2>Importance & Benefits of Startup Grants</h2>
              <p>
                Startup grants provide financial support to startups without
                creating repayment pressure. They help founders develop ideas,
                test products, and scale businesses at an early stage.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80" 
                alt="Startup Grants Benefits" 
              />
            </div>

            {/* RIGHT BENEFITS */}
            <div className="benefits-right mt-20">
              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Non-Dilutive Funding</strong> — Receive funding without giving up equity or ownership.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Less Financial Pressure</strong> — No EMIs, interest payments, or immediate repayment obligations.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Validation & Credibility</strong> — Government or institutional support builds investor and customer trust.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Access to Networks & Mentors</strong> — Incubation programs provide mentorship and industry connections.</p>
              </div>

              <div className="benefit-item">
                <div className="icon">✓</div>
                <p><strong>Support for Risky Ideas</strong> — Ideal for deep-tech, R&D, and innovation-driven startups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Eligibility Section */}
        <section id="eligibility" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-12 text-center">Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Stage of Startup", desc: "Many grants support idea-stage, prototype-stage, or early-revenue startups rather than very mature businesses." },
                { title: "DPIIT Recognition", desc: "DPIIT recognition may not be mandatory for all grants, but it often improves eligibility and credibility." },
                { title: "Founder Commitment", desc: "Grant committees usually prefer serious founders or teams who are actively involved in the business." },
                { title: "Innovation & Impact", desc: "The startup should have a clear problem, unique solution, and measurable benefit to customers or society." },
                { title: "Sector Fit", desc: "The business must match the focus area of the grant scheme, such as technology, healthcare, or clean energy." },
                { title: "Basic Compliance", desc: "Proper incorporation, PAN, bank account, basic accounting records, and no major legal disputes." }
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
              <p className="text-gray-500 text-lg">Typically required documents include the following. Specific requirements may vary by scheme.</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  "Certificate of Incorporation / Registration",
                  "PAN, GST (if applicable)",
                  "Founders' KYC (Aadhaar, PAN)",
                  "DPIIT recognition certificate (if available)",
                  "Detailed pitch deck / business plan",
                  "Financial projections and basic historical financials (if any)",
                  "Shareholding pattern / cap table",
                  "IP details (patents applied/granted, trademarks, etc.), if relevant",
                  "MoU with incubator (for certain schemes)",
                  "Bank details (cancelled cheque, passbook/statement)"
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
                  <strong>Note:</strong> Document requirements may vary depending on the specific grant scheme, state policy, or incubator program. Always refer to the official scheme guidelines for the most accurate and up-to-date list.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Sources of Startup Grants Section */}
        <section id="sources" className="startup-grants-section scroll-mt-32">
          <div className="section-header-sources">
            <span className="tag-sources">SOURCES OF STARTUP GRANTS</span>
            <h2>Funding Support Available for Startups</h2>
          </div>

          <div className="grants-grid-sources">
            {/* Card 1 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>Central Government Schemes</h3>
                <p>Government ministries promote innovation and entrepreneurship through structured grant programs.</p>
                <ul>
                  <li>Startup India Seed Fund Scheme (SISFS)</li>
                  <li>Department of Science & Technology (DST)</li>
                  <li>Department of Biotechnology (DBT)</li>
                  <li>MeitY Programs</li>
                  <li>Ministry of MSME & Central Bodies</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>State Government Startup Policies</h3>
                <p>State startup missions offer financial incentives and ecosystem support.</p>
                <ul>
                  <li>Seed Funding Support</li>
                  <li>Prototype & Innovation Grants</li>
                  <li>Rental & Capital Subsidy</li>
                  <li>Marketing & Patent Reimbursement</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>Incubators & Accelerators</h3>
                <p>Incubation programs combine funding with mentoring and infrastructure.</p>
                <ul>
                  <li>Government Supported Incubators</li>
                  <li>University & Research Incubators</li>
                  <li>Private Accelerator Programs</li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>Sectoral & CSR Funds</h3>
                <p>Corporates and institutions support innovation through CSR initiatives.</p>
                <ul>
                  <li>Corporate Innovation Challenges</li>
                  <li>CSR Startup Programs</li>
                  <li>Sector-Focused Funding Initiatives</li>
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="grant-card-source">
              <div 
                className="card-image-source" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=600&q=60')" }}
              ></div>
              <div className="card-content-source">
                <h3>International Agencies</h3>
                <p>Global development organizations support impact-driven startups.</p>
                <ul>
                  <li>Climate & Clean Energy Projects</li>
                  <li>Healthcare & Education Initiatives</li>
                  <li>Women Empowerment Programs</li>
                  <li>Social Impact Entrepreneurship</li>
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
              The amount of startup grant funding depends on the scheme, stage of the startup,
              sector, and strength of the application.
            </p>

            <div className="funding-grid-main">
              {/* Card 1 */}
              <div className="funding-grid-card">
                <h3>Idea / Prototype Stage</h3>
                <p>
                  Startups at the idea, proof-of-concept, or prototype stage may receive
                  around <strong>₹5 lakh to ₹25 lakh</strong>, depending on the scheme.
                </p>
              </div>

              {/* Card 2 */}
              <div className="funding-grid-card">
                <h3>Market Entry / Early Growth Stage</h3>
                <p>
                  Startups ready for pilot projects, customer acquisition, product launch,
                  or early market expansion may receive around
                  <strong>₹20 lakh to ₹1 crore or more</strong>.
                </p>
              </div>

              {/* Card 3 */}
              <div className="funding-grid-card">
                <h3>Specialized / Deep-Tech and R&D Startups</h3>
                <p>
                  Startups involved in advanced technology, research, innovation,
                  or product development may receive higher funding,
                  sometimes above <strong>₹1 crore to ₹2 crore</strong>,
                  usually in stages or tranches.
                </p>
              </div>

              {/* Card 4 */}
              <div className="funding-grid-card">
                <h3>Actual Funding Depends On</h3>
                <ul>
                  <li>Strength and uniqueness of the idea</li>
                  <li>Capability and experience of the founding team</li>
                  <li>Proper budget justification and fund utilisation plan</li>
                  <li>Sector focus and limits prescribed under the relevant scheme</li>
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
              Applying for startup grants involves identifying the right scheme,
              preparing documents, submitting the application, and completing
              evaluation formalities.
            </p>

            <div className="timeline-main">
              {[
                { step: 1, title: "Assessment", desc: "Evaluate the startup’s stage, sector, business model, funding requirement, and readiness for grant application.", side: "left" },
                { step: 2, title: "Scheme Mapping", desc: "Identify suitable Central Government schemes, State startup policies, incubators, or sector-specific grant programs.", side: "right" },
                { step: 3, title: "Document Preparation", desc: "Arrange incorporation documents, DPIIT certificate, KYC, financials, compliance records, and other required documents.", side: "left" },
                { step: 4, title: "Pitch Deck & Proposal Drafting", desc: "Prepare a strong pitch deck covering problem, solution, market, business model, projections, funding needs, and expected impact.", side: "right" },
                { step: 5, title: "Online Application", desc: "Submit applications through Startup India, State startup portals, incubators, or scheme-specific platforms.", side: "left" },
                { step: 6, title: "Screening & Shortlisting", desc: "Authorities review applications and may request clarifications or additional documents.", side: "right" },
                { step: 7, title: "Pitch / Evaluation Committee", desc: "Shortlisted startups present their ideas before an expert panel and respond to evaluation queries.", side: "left" },
                { step: 8, title: "Sanction & Agreement", desc: "Approved startups sign grant agreements covering milestones, fund utilisation, reporting, and compliance requirements.", side: "right" },
                { step: 9, title: "Fund Disbursement", desc: "Grant funds are released in stages or tranches based on approved milestones and deliverables.", side: "left" },
                { step: 10, title: "Monitoring & Reporting", desc: "Submit progress reports, utilisation certificates, and audit-related documents as required.", side: "right" }
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
              D Biz can manage the complete grant application process from eligibility assessment to documentation, submission, follow-up, and reporting support.
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
                  badge: "2 – 4 WEEKS", 
                  title: "IDENTIFYING & PREPARING", 
                  desc: "Startup assessment, eligibility check, proposal preparation, documentation collection, and readiness for grant application." 
                },
                { 
                  badge: "SCHEME BASED", 
                  title: "APPLICATION SUBMISSION", 
                  desc: "Submission timeline depends on government scheme schedules, including fixed calls or rolling application windows." 
                },
                { 
                  badge: "1 – 3 MONTHS", 
                  title: "SCREENING & EVALUATION", 
                  desc: "Application review, technical evaluation, expert committee assessment, and selection process by authorities." 
                },
                { 
                  badge: "2 – 6 WEEKS", 
                  title: "SANCTION & DOCUMENTATION", 
                  desc: "Approval issuance, agreement signing, compliance verification, and completion of sanction formalities." 
                },
                { 
                  badge: "3 – 6 MONTHS", 
                  title: "FIRST TRANCHE RELEASE", 
                  desc: "Initial fund disbursement after approval and documentation, depending on authority processing timelines." 
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
                Understand the common challenges startups face while applying for
                grants and funding programs to improve approval chances and ensure
                smooth compliance.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="risk-right">
              {[
                "Applying to wrong schemes or at the wrong stage",
                "Weak documentation – inconsistent financials, incomplete forms",
                "Poor pitch – unclear value proposition, no market validation",
                "Underestimating compliance – utilisation rules, reporting, audits",
                "Delays – government processing time, committee schedules",
                "Over-dependence on grants – no parallel revenue or investor plan"
              ].map((risk, i) => (
                <div key={i} className="risk-item">
                  <span className="check">✓</span>
                  {risk}
                </div>
              ))}
            </div>
          </div>
        </section>        {/* 9. Why Choose D Biz Section */}
        <section id="services" className="py-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-bold mb-6 tracking-wide shadow-sm border border-dbiz-teal/5">
                ● Why Choose D BIZ
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight uppercase leading-tight">
                Why D BIZ CONSULTANCY for Startup Grants?
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                D Biz Consultancy provides focused support for startups that are planning to apply for grants, seed funds, and innovation-based funding schemes.
              </p>
            </div>

            {/* Why Choose Consolidated Card */}
            <div className="max-w-5xl mx-auto mb-24">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/5 rounded-full -mr-48 -mt-48 blur-3xl transition-transform duration-1000 group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {[
                      { title: "Specialised Startup Grant Support", desc: "We focus on identifying the right grant opportunities based on the startup’s stage, sector, innovation level, and funding requirement." },
                      { title: "Real-World Startup Experience", desc: "Experience working with startups at idea stage, MVP stage, early revenue stage, and scaling stage, helping them present their business properly." },
                      { title: "Strong Documentation & Pitching", desc: "We prepare professional pitch decks, reports, financial projections, grant proposals, and application documents in a committee-friendly way." },
                      { title: "Transparent Process", desc: "We follow a clear step-by-step approach with proper communication, timelines, document checklists, and application tracking." },
                      { title: "Trust & Ethics First", desc: "We provide honest eligibility assessment and guide startups only towards schemes where they have a realistic chance of selection." }
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
                      "D Biz becomes your reliable partner in navigating India’s complex startup grant ecosystem."
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
                    { title: "Readiness Assessment", desc: "Evaluating startup stage, business model, compliance status, and funding readiness." },
                    { title: "DPIIT Recognition Support", desc: "Assisting in preparing and filing the DPIIT recognition application for credibility." },
                    { title: "Grant Scouting", desc: "Identifying Central/State Gov, incubator, accelerator, and sector-specific opportunities." },
                    { title: "Drafting Support", desc: "Preparing pitch decks, project reports, financial models, and grant proposals." },
                    { title: "Application Management", desc: "Portal filing, document submission, follow-up, and coordination with authorities." },
                    { title: "Pitch Preparation Support", desc: "Structure, key questions, and mock presentation support for evaluation committees." },
                    { title: "Post-Sanction Support", desc: "After approval, we assist with fund utilisation planning, milestone tracking, and compliance support." }
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
                    { title: "Investor Pitch Readiness", desc: "Support in preparing pitch decks and material for equity funding discussions." },
                    { title: "Business Model Refinement", desc: "Guidance on revenue model, pricing strategy, unit economics, and scalability." },
                    { title: "Legal & Compliance", desc: "Preparation of basic checklists through partner professionals to ensure proper structuring." },
                    { title: "Incubator & Mentor Connections", desc: "Guidance in approaching suitable incubators, mentors, and experts based on sector." },
                    { title: "IP Strategy Guidance", desc: "Support through partners for trademarks, patents, and intellectual property requirements." },
                    { title: "Funding Roadmap Preparation", desc: "Assistance in planning how to combine grants, equity, and loans for sustainable growth." }
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
              <p className="text-gray-500">Everything you need to know about Startup Grants in India.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {startupFaq.map((faq, index) => (
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

export default StartupIndiaRegistrationPage;
