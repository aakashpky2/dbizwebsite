
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { partnershipFaq } from "@/data/partnershipFaq";

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

// Partnership Firm Registration Page - SEO Optimized Feb 2026
const PartnershipPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined ? "Partnership Firm Registration in India | D BIZ CONSULTANCY" : `Partnership Firm Registration in ${cityName} | D BIZ CONSULTANCY`;

  if (location && !isValidLocation) {
    return <NotFound />;
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

  return <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-16">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=50" 
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
                Partnership Firm Registration
              </h1>

              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                D BIZ CONSULTANCY provides end-to-end Partnership Firm registration services. ensuring a legally sound structure, properly drafted agreements, and smooth business setup with ongoing compliance guidance.
              </p>

              <div className="flex flex-wrap gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white border-0">
                      Contact Us Today
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0 border-white/20">
                    <ContactOptions />
                  </PopoverContent>
                </Popover>

                <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
                  <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </div>

              <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                <Clock className="h-4 w-4 mr-2" />
                <span>Quick Setup • Legally Structured • Expert Support</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                   <img 
                     src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
                     alt="Partnership Firm" 
                     className="w-full h-auto rounded-lg shadow-lg" 
                     loading="eager"
                     fetchPriority="high"
                   />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">5-7</div>
                      <div className="text-sm opacity-80">Days (Typical)</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">100%</div>
                      <div className="text-sm opacity-80">Documentation Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="sticky top-16 z-10 bg-white shadow-md border-b border-gray-200">
        <div className="container-custom py-2">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('overview')}>
              <Building2 className="mr-2 h-4 w-4" /> Overview
            </div>

            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('features')}>
              <Shield className="mr-2 h-4 w-4" /> Key Features
            </div>

            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('benefits') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('benefits')}>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
            </div>

            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('comparison')}>
              <FileBarChart className="mr-2 h-4 w-4" /> Comparison
            </div>

            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('documents')}>
              <FileText className="mr-2 h-4 w-4" /> Documents
            </div>

            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('process')}>
              <ArrowRight className="mr-2 h-4 w-4" /> Process
            </div>

            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('faqs')}>
              <Users className="mr-2 h-4 w-4" /> FAQs
            </div>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a Partnership Firm?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A Partnership Firm is a business structure in which two or more individuals come together to carry on a business and share its profits based on a mutually agreed arrangement. This form of business is governed by the Indian Partnership Act, 1932 and is widely adopted by small and medium enterprises, professionals, and family-run businesses due to its simplicity and operational flexibility.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Unlike a private limited company, a partnership firm does not have a separate legal identity from its partners, meaning the business and its owners are legally considered the same. As a result, partners have unlimited liability, making them personally responsible for the obligations and debts of the firm.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Under the law, a partnership is created through an agreement (Partnership Deed), which defines the roles, responsibilities, and profit-sharing ratios among partners. The relationship between partners is based on mutual trust and agency, where each partner acts on behalf of the firm and other partners.
                </p>
              </div>



              {/* Minimum Requirements Mini-block */}
              <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">2 Partners</p>
                      <p className="text-sm text-gray-600">A minimum of two individuals are required to form a partnership firm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Maximum 50 Partners</p>
                      <p className="text-sm text-gray-600">The number of partners is restricted as per applicable rules</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Partnership Deed</p>
                      <p className="text-sm text-gray-600">A legally binding agreement defining rights, duties, and profit-sharing ratio</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">No Minimum Capital</p>
                      <p className="text-sm text-gray-600">There is no statutory minimum capital requirement; contribution is based on mutual agreement</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                <div className="mb-6 rounded-xl overflow-hidden shadow-md relative z-10">
                  <img 
                    src="/dbiz-uploads/partnership_definition_sidebar.png" 
                    alt="Partnership Act Definition" 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-dbiz-navy">Definition as per the Indian Partnership Act, 1932</h3>
                  <p className="text-gray-700 mb-4">
                    Section 4 of the Indian Partnership Act, 1932, defines a Partnership as an entity that:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      "Involving two or more people entering into an agreement",
                      "Exists for carrying on a lawful business",
                      "Operates with the objective of sharing profits",
                      "Functions under mutual agency, where each partner acts for all"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="bg-dbiz-teal/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">Need expert guidance?</p>
                        <p className="text-dbiz-navy font-medium">Contact Our Team</p>
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Partnership Firm</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              D BIZ CONSULTANCY helps entrepreneurs understand and effectively structure Partnership Firms for smooth operations, flexibility, and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "1. Unlimited Liability",
                desc: "In a partnership firm, each partner has unlimited liability, meaning they are personally responsible for all business debts and obligations. If the firm’s assets are insufficient, partners’ personal assets may be used to settle liabilities."
              },
              {
                icon: Building2,
                title: "2. No Separate Legal Entity",
                desc: "A partnership firm does not have a separate legal identity from its partners. The firm and its partners are considered the same under law, and all legal rights and obligations are directly linked to the partners."
              },
              {
                icon: Users,
                title: "3. Mutual Agency",
                desc: "Each partner acts as an agent of the firm as well as other partners, meaning any act done by one partner during business is binding on the entire firm and all partners."
              },
              {
                icon: FileText,
                title: "4. Partnership Deed (Deed-Based Structure)",
                desc: "The partnership is governed by a Partnership Deed, which defines profit-sharing ratio, capital contribution, roles, responsibilities, and operational rules. This provides flexibility to customize business arrangements."
              },
              {
                icon: Users,
                title: "5. Membership Flexibility",
                desc: "A partnership firm requires a minimum of 2 partners and can have up to 50 partners, making it suitable for small businesses, professional firms, and family enterprises."
              },
              {
                icon: CheckCircle2,
                title: "6. No Minimum Capital Requirement",
                desc: "There is no statutory minimum capital requirement to start a partnership firm. Partners can decide the capital contribution based on business needs and mutual agreement."
              },
              {
                icon: Clock,
                title: "7. Ease of Formation and Closure",
                desc: "A partnership firm can be formed easily with simple legal procedures and low cost, as it does not require complex incorporation formalities. It can also be dissolved conveniently through mutual consent or according to the partnership deed."
              },
              {
                icon: Shield,
                title: "8. Optional Registration",
                desc: "Registration with the Registrar of Firms is not mandatory; however, a registered firm enjoys legal benefits such as the right to file suits against third parties and improved business credibility."
              },
              {
                icon: FileBarChart,
                title: "9. Taxation and Limited Compliance Requirement",
                desc: "Partnership firms are taxed at a flat rate (generally 30%), and partners may receive salary or interest as per the partnership deed. Compliance requirements are minimal compared to companies, with no ROC filings or mandatory meetings."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6">
                  <feature.icon className="h-10 w-10 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Benefits
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 leading-tight">
                  Benefits of a Partnership Firm
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  D BIZ CONSULTANCY helps businesses leverage the practical advantages of Partnership Firms for efficient operations, cost control, and flexible business management.
                </p>

                <div className="hidden md:block">
                   <img 
                     src="/dbiz-uploads/partnership_benefits_main.png" 
                     alt="Partnership Benefits" 
                     className="rounded-2xl shadow-xl w-full h-[450px] object-cover" 
                     loading="lazy"
                   />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-4">
                {[
                  "Easy to manage with minimal legal formalities.",
                  "Low cost to start and maintain the business.",
                  "Faster decisions due to fewer stakeholders.",
                  "Partners directly manage and control operations.",
                  "Profit sharing can be decided and changed mutually.",
                  "Easy to dissolve or restructure the firm.",
                  "No requirement to publicly disclose financial details.",
                  "Ideal for small businesses and professional services.",
                  "Can be converted into LLP or company when needed.",
                  "Built on trust and strong partner relationships."
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-center">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-1.5 rounded-full mr-4 group-hover:bg-dbiz-teal group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal group-hover:text-white" />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Comparison Section */}
      <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Comparison
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between Business Structures</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Understand how Partnership Firm compares with other popular business entities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                    <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Partnership</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Sole Proprietorship</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { f: "Liability", p: "Unlimited (shared among partners)", pl: "Limited to shares", llp: "Limited to contribution", sp: "Unlimited" },
                    { f: "Legal Entity", p: "Not separate", pl: "Separate entity", llp: "Separate entity", sp: "Not separate" },
                    { f: "Ownership", p: "2–50 partners", pl: "2–200 shareholders", llp: "2+ partners", sp: "Single owner" },
                    { f: "Tax Rate", p: "Flat 30% (simple taxation)", pl: "Corporate tax (with conditions)", llp: "Flat 30%", sp: "Individual income tax" },
                    { f: "Compliance", p: "Minimal compliance", pl: "High compliance", llp: "Moderate", sp: "Very minimal" },
                    { f: "Decision Making", p: "Fast and flexible", pl: "Structured and slower", llp: "Moderate", sp: "Fully independent" },
                    { f: "Cost of Setup", p: "Low cost", pl: "Higher cost", llp: "Moderate", sp: "Very low" },
                    { f: "Best For", p: "Small businesses, professionals, partnerships", pl: "Startups, scalable businesses", llp: "Growing small businesses", sp: "Individual businesses" }
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium border-r">{row.f}</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">{row.p}</TableCell>
                      <TableCell className="border-r">{row.pl}</TableCell>
                      <TableCell className="border-r">{row.llp}</TableCell>
                      <TableCell>{row.sp}</TableCell>
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
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Documents
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              D BIZ CONSULTANCY assists clients with collecting, verifying, and preparing all required documentation for smooth Partnership Firm registration.
            </p>
          </div>

          {/* Common Rejection Prevention Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-2 text-lg">Common Rejection Prevention Tips</p>
              <ul className="text-amber-800 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ensure name and spelling are consistent across PAN, Aadhaar, Passport, and all submitted documents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Address proofs must be uniform and clearly readable in all documents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Registered office documents must match — owner name in utility bill, rent agreement, and NOC should be identical</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Utility bills and bank statements should be recent (within the last 2 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Signatures of partners should be consistent across all documents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ensure all documents are clear, valid, and not expired</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Partners */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-semibold">For Partners</h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="font-semibold text-dbiz-navy mb-3">Identity Proof</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> PAN Card (Mandatory)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Aadhaar Card</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Passport (for international)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Voter ID / Govt ID</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-dbiz-navy mb-3">Address Proof</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Bank Statement (latest 2 months)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Electricity / Water / Gas Bill</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-dbiz-navy mb-3">Photographs</p>
                  <p className="text-gray-600 flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Recent passport-sized photographs</p>
                </div>
              </div>
            </div>

            {/* For Foreign Nationals */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-semibold">For Foreign Nationals / NRIs</h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="font-semibold text-dbiz-navy mb-3">Identity & Address</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Passport (Mandatory)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Driving License / Residence Card</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Bank Statement</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-dbiz-navy mb-3">Legal Verification</p>
                  <p className="text-gray-600 flex items-center leading-tight">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 flex-shrink-0" /> 
                    Notarisation / Apostille depending on jurisdiction
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-dbiz-navy mb-3">Photographs</p>
                  <p className="text-gray-600 flex items-center"><CheckCircle className="h-4 w-4 text-dbiz-teal mr-2" /> Recent passport-sized photographs</p>
                </div>
              </div>
            </div>

            {/* For Partnership Registration */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-semibold">For Partnership Registration</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dbiz-navy">Partnership Deed</p>
                    <p className="text-sm text-gray-600 mt-1">Stampted deed with capital, profit ratio, rights, and exit clauses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dbiz-navy">PAN Application</p>
                    <p className="text-sm text-gray-600 mt-1">PAN obtained in the firm name for taxation and banking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dbiz-navy">Bank Account Opening</p>
                    <p className="text-sm text-gray-600 mt-1">Current account using Deed, PAN, and Partner KYCs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Registered Office */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-semibold">For Registered Office</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dbiz-navy">Rent Agreement + NOC</p>
                    <p className="text-sm text-gray-600 mt-1">Required if premises is rented; must match owner names</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dbiz-navy">Property Documents</p>
                    <p className="text-sm text-gray-600 mt-1">Ownership proof required if property is owned by partners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-dbiz-navy">Utility Bills</p>
                    <p className="text-sm text-gray-600 mt-1">Recent electricity or water bill (last 2 months)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section id="process" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Registration Process
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">Step-by-Step Partnership Firm Registration Process</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              A Partnership Firm is one of the simplest forms of business to establish, offering flexibility in operations and minimal regulatory requirements. The registration process involves drafting a legally valid agreement, completing essential registrations, and setting up a bank account for business transactions.
            </p>
          </div>

          {/* Important Note Box — Synced with Rejection Prevention Style */}
          <div className="bg-transparent border border-amber-200 rounded-xl p-6 mb-12 flex items-start gap-4 shadow-sm max-w-4xl">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-2 text-lg">Important Note</p>
              <p className="text-amber-800 mb-4 font-medium italic">Proper documentation is critical for ensuring the longevity and legal standing of your firm.</p>
              <ul className="text-amber-800 flex flex-col space-y-2">
                {[
                  "Smooth registration and banking process",
                  "Avoiding application rejection or delays",
                  "Ensuring legal validity of the partnership firm"
                ].map((note, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-amber-600">•</span>
                    <span className="text-sm md:text-base">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                step: "1",
                title: "Drafting the Partnership Deed",
                desc: "Preparing a legally sound Partnership Deed is the foundation of your business.",
                details: [
                  "Firm Name, address, and partner details",
                  "Capital contribution & profit-sharing ratio",
                  "Roles, responsibilities, and authority of partners",
                  "Admission, retirement, and dispute resolution clauses"
                ]
              },
              {
                step: "2",
                title: "Execution of the Partnership Deed",
                desc: "Legally formalizes the agreement and makes it binding on all partners.",
                details: [
                  "Printed on stamp paper as per State laws",
                  "Signed by all partners",
                  "Witnessed by at least two individuals"
                ]
              },
              {
                step: "3",
                title: "Apply for PAN of the Firm",
                desc: "A Permanent Account Number (PAN) must be obtained in the firm name for legal identity.",
                details: [
                  "Essential for all future tax filings",
                  "Required for bank account opening",
                  "Mandatory for financial transactions"
                ]
              },
              {
                step: "4",
                title: "Opening of Bank Account",
                desc: "A current account ensures separation of personal and business finances.",
                details: [
                  "Uses firm's PAN and executed Deed",
                  "Requires KYC documents of all partners",
                  "Necessary for GST and GST operations"
                ]
              },
              {
                step: "5",
                title: "Registration with Registrar of Firms",
                desc: "Optional but highly recommended for legal standing in Indian courts.",
                details: [
                  "Right to file cases against third parties",
                  "Formal legal recognition of the firm",
                  "Improved banking and vendor credibility"
                ]
              },
              {
                step: "6",
                title: "GST Registration (If Applicable)",
                desc: "Required based on turnover or nature of operations.",
                details: [
                  "Mandatory if turnover exceeds specified limits",
                  "Required for interstate transactions",
                  "Essential for e-commerce and digital services"
                ]
              },
              {
                step: "7",
                title: "Commencement of Business",
                desc: "Begin commercial activities once all compliance steps are complete.",
                details: [
                  "Capital introduction and maintenance",
                  "Proper books of accounts established",
                  "Routine compliance monitoring started"
                ]
              },
              {
                step: "8",
                title: "Ongoing Compliance and Record Maintenance",
                desc: "Ensures smooth functioning and legal sustainability of the partnership firm.",
                details: [
                  "Maintenance of proper books of accounts and financial records",
                  "Filing of Income Tax Returns annually",
                  "Renewal of licenses and compliance with applicable laws and regulations"
                ]
              }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-sky-50/50 border-b border-sky-100 p-5 text-dbiz-navy flex items-center">
                  <span className="flex items-center justify-center bg-dbiz-teal text-white rounded-full h-8 w-8 text-lg font-bold mr-4 shrink-0 shadow-sm">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 font-medium leading-relaxed">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-3 mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Mandatory Compliance Section */}
      <section id="compliance" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Compliance
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Basic Compliance Requirements for Partnership Firms</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Establishing a Partnership Firm is only the first step; maintaining proper compliance is essential to ensure smooth operations, financial discipline, and legal validity. Compared to companies, partnership firms have simplified compliance requirements, but certain key obligations must still be followed to avoid penalties and operational issues.
            </p>
          </div>



          <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-dbiz-navy hover:bg-dbiz-navy border-none">
                    <TableHead className="py-4 text-white font-bold min-w-[200px]">Aspect</TableHead>
                    <TableHead className="py-4 text-white font-bold min-w-[280px]">Compliance Requirement</TableHead>
                    <TableHead className="py-4 text-white font-bold min-w-[150px]">Frequency / Timeline</TableHead>
                    <TableHead className="py-4 text-white font-bold min-w-[250px]">Why It's Important</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { a: "Partnership Deed Maintenance", r: "Maintain and update the Partnership Deed whenever there are changes in partners, profit-sharing ratio, or business terms", f: "As and when changes occur", w: "Ensures clarity in rights, duties, and prevents disputes" },
                    { a: "PAN & Tax Registration", r: "Obtain and maintain PAN in the name of the firm", f: "One-time (update if changes)", w: "Mandatory for taxation, banking, and financial transactions" },
                    { a: "Books of Accounts", r: "Maintain proper books of accounts including income, expenses, assets, and liabilities", f: "Continuous / Ongoing", w: "Helps in financial tracking, tax filing, and decision making" },
                    { a: "Income Tax Return (ITR-5)", r: "File income tax return of the partnership firm", f: "Annually (as per due date)", w: "Ensures compliance with tax laws and avoids penalties" },
                    { a: "GST Compliance (If Applicable)", r: "File GST returns such as GSTR-1, GSTR-3B", f: "Monthly / Quarterly", w: "Mandatory if registered under GST" },
                    { a: "Audit Requirement", r: "Conduct audit if turnover exceeds prescribed limits under tax laws", f: "Annually (if applicable)", w: "Ensures accuracy of financial statements and compliance" },
                    { a: "Bank Account Compliance", r: "Maintain proper banking records and transactions through firm’s account", f: "Ongoing", w: "Supports transparency and financial control" },
                    { a: "Changes in Constitution", r: "Inform authorities (where applicable) for changes in partners or structure", f: "As required", w: "Maintains updated legal and financial records" }
                  ].map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium border-r text-dbiz-navy">{item.a}</TableCell>
                      <TableCell className="border-r text-gray-700">{item.r}</TableCell>
                      <TableCell className="border-r text-gray-700">{item.f}</TableCell>
                      <TableCell className="text-gray-700">{item.w}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
            {/* Important Notes */}
            <div className="bg-transparent border border-gray-200 rounded-[2rem] p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-white p-3 rounded-full shadow-sm text-dbiz-teal shrink-0">
                <Info className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dbiz-navy mb-4">Important Notes</h3>
                <ul className="space-y-4">
                  {[
                    "No requirement for board meetings or annual general meetings",
                    "No requirement for corporate filings or complex regulatory approvals",
                    "Compliance is mainly focused on taxation, documentation, and records",
                    "Proper documentation reduces the risk of disputes among partners"
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base leading-snug">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Simplified Compliance Advantage */}
            <div className="bg-transparent border border-gray-200 rounded-[2rem] p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-white p-3 rounded-full shadow-sm text-dbiz-teal shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dbiz-navy mb-4">Simplified Compliance Advantage</h3>
                <ul className="space-y-4">
                  {[
                    "Significantly lower compliance burden compared to companies",
                    "Reduced Administrative and Management Costs",
                    "Greater flexibility in internal operational management",
                    "Simplified record maintenance and reporting structures"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center uppercase tracking-wider">Post-Registration Compliance Timeline</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { label: "Immediate", task: "PAN Application and Bank Account Setup", milestone: "Start" },
                { label: "During Operations", task: "Maintain books of accounts and proper documentation", milestone: "Ongoing" },
                { label: "Annual Cycle", task: "Income Tax Filing → Audit (if applicable) → GST Returns (if registered)", milestone: "FY End" }
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full md:max-w-[300px] flex flex-col items-center">
                  <div className="bg-dbiz-teal/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-dbiz-teal/20">
                    <span className="text-dbiz-teal font-bold text-base">{card.milestone}</span>
                  </div>
                  <p className="text-base font-bold text-dbiz-navy mb-2">{card.label}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.task}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
               <p className="text-gray-400 text-xs italic">Last updated: March 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why D BIZ Section — Clean Grid Style */}
      <section id="why-dbiz" className="py-20 bg-gray-50/30 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Why Choose D BIZ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for Partnership Firm Registration?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Registering a Partnership Firm is a crucial step toward starting a business with the right structure and clarity between partners. While the process is simpler than other business forms, it still requires proper drafting, documentation, and legal structuring. D BIZ additions value by ensuring your partnership is legally strong and smoothly executed from the beginning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What D BIZ Handles */}
            <div className="bg-sky-50/50 border border-sky-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-dbiz-teal">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-dbiz-navy">What D BIZ Handles</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Drafting a customized Partnership Deed",
                  "Structuring profit-sharing and partner roles",
                  "Document validation and pre-submission review",
                  "Assistance in firm name selection and check",
                  "PAN application for the partnership firm",
                  "Support in current account opening",
                  "Guidance on GST registration (if applicable)",
                  "Registration with Registrar of Firms (if opted)",
                  "Handling corrections or rework in documentation",
                  "Post-registration compliance and support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Provide */}
            <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-full shadow-sm text-dbiz-navy">
                   <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-dbiz-navy">What You Provide</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Identity and address proof of all partners",
                  "Passport-sized photographs",
                  "Registered office address proof (Rent/Ownership)",
                  "Business activity details and firm name",
                  "Capital contribution details of each partner"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <ArrowRight className="h-5 w-5 text-gray-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">FAQs on Partnership Firm Registration</h2>
            <div className="flex flex-col items-center">
              <p className="text-xl font-semibold text-gray-500 mb-6 italic">Last updated: March 2026</p>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-center mb-12">
                Whether you're exploring the basics of partnership formation, documentation, taxation, or operational aspects — here are the most commonly asked questions explained in a clear and practical manner.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {partnershipFaq.map((faq, index) => (
                <AccordionItem key={`faq-${index}`} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                      <h3 className="font-medium text-base leading-relaxed text-dbiz-navy">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed bg-white border-t border-gray-100">
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
    </div>;
};

export default PartnershipPage;
