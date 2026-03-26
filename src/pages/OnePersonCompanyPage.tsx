
import React, { useState } from "react";
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
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { faqData } from "@/data/onePersonCompanyFaq";
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

const EnhancedOnePersonCompanyPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  if (location && !isValidLocation) {
    return <NotFound />;
  }

  // If location is provided, we're on a city-specific page
  const cityName = location
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location)
    : "India";

  const seoTitle = location === undefined
    ? "One Person Company Registration in India | DBIZ CONSULTANCY"
    : `One Person Company Registration in ${cityName} | DBIZ CONSULTANCY`;

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);

    // Scroll to section
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
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <CachedImage
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=50"
              alt="Background"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Business Registration Services
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  One Person Company (OPC) Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  D BIZ CONSULTANCY provides complete One Person Company (OPC) registration services. Our expert team ensures a smooth and compliant incorporation process — from name approval and documentation to ROC filing and post-incorporation compliance support.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleSectionClick('features')}
                    className="border-white text-slate-50 bg-dbiz-navy hover:bg-dbiz-navy/90"
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>

                <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Quick Registration • Regulatory Compliance • Expert Advisory</span>
                </div>
              </div>

              <div className="hidden md:flex justify-center md:justify-end md:col-span-2">
                <div className="relative max-w-md w-full">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <CachedImage 
                      src="/dbiz-uploads/opc-hero.png" 
                      alt="One Person Company" 
                      className="w-full h-auto rounded-lg shadow-lg"
                      loading="eager"
                    />

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">5-7</div>
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

        {/* Navigation Section */}
        <section className="sticky top-16 z-40 bg-white shadow-md border-b border-gray-200">
          <div className="container-custom py-2">
            <div className="flex items-center overflow-x-auto no-scrollbar">
              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('overview')}
              >
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>

              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('features')}
              >
                <Shield className="mr-2 h-4 w-4" /> Key Features
              </div>

              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('benefits') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('benefits')}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
              </div>

              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('comparison')}
              >
                <FileBarChart className="mr-2 h-4 w-4" /> Comparison
              </div>

              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('documents')}
              >
                <FileText className="mr-2 h-4 w-4" /> Documents
              </div>

              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('process')}
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Process
              </div>

              <div
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('faqs')}
              >
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

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a One Person Company (OPC)?</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A One Person Company (OPC) is considered a separate legal entity from its owner, providing a structured and secure framework for conducting business while protecting the personal assets of the individual. Introduced under the Companies Act, 2013, this business structure is ideal for individual entrepreneurs who wish to operate with the benefits of a corporate entity.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An OPC combines the advantages of a sole proprietorship and a private limited company by offering limited liability, complete ownership control, and business continuity through a nominee mechanism. It is particularly suitable for small businesses and startups that are owned and managed by a single person.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Under law, an OPC allows only one member, requires the appointment of a nominee, and operates as a private company with simplified compliance requirements. Upon incorporation, it becomes a body corporate with perpetual succession, having the ability to own property, enter contracts, and sue or be sued in its own name.
                  </p>
                </div>

                {/* Minimum Requirements Mini-block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy text-sm">1 Director & 1 Shareholder</p>
                        <p className="text-gray-500 text-xs">(Same person allowed)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy text-sm">Nominee</p>
                        <p className="text-gray-500 text-xs">(Mandatory appointment)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy text-sm">Resident Director</p>
                        <p className="text-gray-500 text-xs">(At least one Indian director)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy text-sm">No Minimum Capital</p>
                        <p className="text-gray-500 text-xs">(No paid-up capital requirement)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-dbiz-navy text-sm">Registered Office</p>
                        <p className="text-gray-500 text-xs">(Must be in India)</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <CachedImage
                    src="/dbiz-uploads/opc-definition.png"
                    alt="One Person Company Definition"
                    className="w-full h-48 object-cover rounded-xl shadow-md mb-6 relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Companies Act, 2013</h3>
                    <p className="text-gray-700 mb-4">
                      As per Section 2(62) of the Companies Act, 2013, a One Person Company (OPC) is a company that:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span>Has only one member (shareholder)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span>Requires the appointment of a nominee</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span>Is incorporated as a private company with one person</span>
                      </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="bg-dbiz-teal/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-500">Need expert guidance?</p>
                          <p className="text-dbiz-navy font-medium text-sm">Contact our team.</p>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a One Person Company (OPC)</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps individual entrepreneurs understand and leverage these key features for structured and secure business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Limited Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">In a One Person Company, the liability of the member is limited to the amount invested in the company. This ensures that the personal assets of the owner remain protected from business liabilities and financial risks.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">An OPC is recognized as a separate legal entity from its owner. It can own property, enter into contracts, and initiate legal proceedings in its own name, independent of the individual.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Single Ownership with Full Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">An OPC allows a single individual to own and manage the entire business, providing complete control over operations, decision-making, and financial management.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">No Minimum Capital Requirement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">There is no statutory minimum paid-up capital requirement for incorporating an OPC. The capital can be decided based on business requirements and operational needs.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Simplified Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Compared to other company structures, OPCs have reduced compliance requirements, including fewer mandatory meetings and simplified filing procedures.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <ArrowRight className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Perpetual Succession</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">An OPC continues to exist as a body corporate with perpetual succession. The appointment of a nominee ensures business continuity even in the event of death or incapacity of the owner.</p>
                </CardContent>
              </Card>
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

                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">
                    Benefits of a One Person Company (OPC)
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    D BIZ CONSULTANCY helps individual entrepreneurs leverage the practical advantages of OPC for structured growth, protection, and business credibility.
                  </p>

                  <div className="hidden md:block mt-8">
                    <CachedImage 
                      src="/dbiz-uploads/opc-benefits.png" 
                      alt="Business Growth" 
                      className="rounded-lg shadow-lg max-w-sm" 
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Limited liability protection, safeguarding the personal assets of the owner from business liabilities",
                    "Enhanced credibility and trust among clients, suppliers, and financial institutions compared to proprietorship",
                    "Perpetual succession through nominee mechanism, ensuring business continuity even in unforeseen circumstances",
                    "Better access to funding options such as bank loans and financial institutions compared to unregistered business structures",
                    "Tax planning flexibility under corporate taxation provisions, allowing structured financial management",
                    "Complete ownership and control, enabling faster decision-making without involvement of partners or shareholders",
                    "Separate legal entity status, allowing the company to own assets and enter into contracts independently",
                    "Professional business structure, improving brand value and making it easier to scale operations",
                    "Opportunity for future expansion, with easy conversion into a Private Limited Company as the business grows"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all"
                    >
                      <div className="flex">
                        <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                        </div>
                        <div className="ml-5">
                          <p className="text-gray-700">{item}</p>
                        </div>
                      </div>
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
                Understand why One Person Company (OPC) is a preferred choice for individual entrepreneurs seeking limited liability with full control.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold text-center">OPC</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold text-center">LLP</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold text-center">Sole Proprietorship</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold text-center">Partnership</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium border-r">Liability</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r text-center">Limited to shares</TableCell>
                      <TableCell className="border-r text-center">Limited to contribution</TableCell>
                      <TableCell className="border-r text-center">Unlimited</TableCell>
                      <TableCell className="text-center">Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Legal Entity</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r text-center">Separate entity</TableCell>
                      <TableCell className="border-r text-center">Separate entity</TableCell>
                      <TableCell className="border-r text-center">Not separate</TableCell>
                      <TableCell className="text-center">Not separate</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Ownership</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r text-center">Single owner</TableCell>
                      <TableCell className="border-r text-center">2+ partners</TableCell>
                      <TableCell className="border-r text-center">Single owner</TableCell>
                      <TableCell className="text-center">2–50 partners</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Tax Rate</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r text-center">Corporate tax regime applicable</TableCell>
                      <TableCell className="border-r text-center">Flat 30%</TableCell>
                      <TableCell className="border-r text-center">Individual income tax</TableCell>
                      <TableCell className="text-center">Individual income tax</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Compliance</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r text-center">Moderate compliance (ROC filings, audit, annual returns)</TableCell>
                      <TableCell className="border-r text-center">Moderate</TableCell>
                      <TableCell className="border-r text-center">Minimal</TableCell>
                      <TableCell className="text-center">Minimal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Best For</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r text-center">Solo entrepreneurs, startups</TableCell>
                      <TableCell className="border-r text-center">Small businesses</TableCell>
                      <TableCell className="border-r text-center">Freelancers, traders</TableCell>
                      <TableCell className="text-center">Family businesses</TableCell>
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Documents
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for OPC Registration</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY assists clients with collecting and preparing all required documentation for One Person Company (OPC) registration to ensure a smooth and compliant incorporation process.
              </p>
            </div>

            {/* Common Rejection Prevention Tips */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-3 shadow-sm">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Common Rejection Prevention Tips</p>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Ensure name spelling consistency across PAN, Aadhaar, Passport, and incorporation forms.</li>
                  <li>• Registered office documents must have matching owner details across utility bill, rent agreement, and NOC.</li>
                  <li>• Utility bills and bank statements should be dated within the last 2 months.</li>
                  <li>• Nominee details must be accurate and properly documented.</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* For Indian Resident */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Indian Resident (Director/Member)</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Identity Proof</h4>
                    <p className="text-gray-600 text-sm">PAN Card (Mandatory), Aadhaar Card, Passport, or Voter ID</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Address Proof</h4>
                    <p className="text-gray-600 text-sm">Bank Statement or Utility Bill (dated within last 2 months)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Photographs</h4>
                    <p className="text-gray-600 text-sm">Recent passport-sized photographs</p>
                  </div>
                </div>
              </div>

              {/* For Nominee */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Nominee (Mandatory in OPC)</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Identity Proof</h4>
                    <p className="text-gray-600 text-sm">PAN Card and Aadhaar Card (or Passport in case of foreign nominee)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Address Proof</h4>
                    <p className="text-gray-600 text-sm">Bank Statement or Utility Bill (latest)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Consent</h4>
                    <p className="text-gray-600 text-sm">Written consent in prescribed format (INC-3)</p>
                  </div>
                </div>
              </div>

              {/* For Foreign Nationals */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Foreign Nationals / NRIs</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Identity Proof</h4>
                    <p className="text-gray-600 text-sm">Passport (Mandatory)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Address Proof</h4>
                    <p className="text-gray-600 text-sm">Driver’s License, Bank Statement, or Residence Card</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-dbiz-teal uppercase tracking-widest mb-3">Notarisation</h4>
                    <p className="text-gray-600 text-sm">Documents may require notarisation or apostille as per MCA requirements</p>
                  </div>
                </div>
              </div>

              {/* For OPC Incorporation */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden lg:col-span-2 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-center">
                  <h3 className="text-xl font-bold">For OPC Incorporation</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-dbiz-navy text-sm uppercase italic tracking-wider leading-tight mb-0.5">Memorandum of Association (MOA)</p>
                          <p className="text-[13px] text-gray-600">Defines business objectives and scope of operations</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-dbiz-navy text-sm uppercase italic tracking-wider leading-tight mb-0.5">Articles of Association (AOA)</p>
                          <p className="text-[13px] text-gray-600">Specifies internal rules and governance structure</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-dbiz-navy text-sm uppercase italic tracking-wider leading-tight mb-0.5">Declaration and Consent</p>
                          <p className="text-[13px] text-gray-600">Required declarations from director and nominee</p>
                        </div>
                      </li>
                    </ul>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-dbiz-navy text-sm uppercase italic tracking-wider leading-tight mb-0.5">Digital Signature (DSC)</p>
                          <p className="text-[13px] text-gray-600">For signing electronic documents</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-dbiz-navy text-sm uppercase italic tracking-wider leading-tight mb-0.5">Director Identification Number (DIN)</p>
                          <p className="text-[13px] text-gray-600">Mandatory for director</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* For Registered Office */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Registered Office</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 font-medium">Rent Agreement + NOC</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 font-medium">Property Docs (Ownership Proof)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 font-medium">Utility Bills (Recent Electricity/Water)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-dbiz-navy text-white p-6 rounded-xl flex items-center gap-4 shadow-lg border border-dbiz-teal/20">
              <div className="bg-dbiz-teal/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-dbiz-teal" />
              </div>
              <p className="text-sm md:text-base font-medium">
                <span className="text-dbiz-teal font-bold uppercase tracking-widest mr-2 underline decoration-dbiz-teal/40">Statutory Note:</span>
                The director of an OPC must be a resident of India (182+ days stay requirement) as per the Companies Act, 2013.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Process Section */}
        {/* Registration Process Section */}
        <section id="process" className="py-24 bg-white text-dbiz-navy scroll-mt-32 relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Registration Process
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Step-by-Step One Person Company (OPC) Registration Process</h2>
              
              <div className="text-lg text-gray-600 mb-12 leading-relaxed max-w-5xl mx-auto space-y-1">
                <p className="text-center">A One Person Company (OPC) provides limited liability protection to a single entrepreneur while offering the benefits of a corporate structure.</p>
                <p className="text-center">The registration process involves submitting required documents, complying with statutory requirements, and completing post-incorporation formalities through the Ministry of Corporate Affairs (MCA).</p>
              </div>
              
              <p className="text-dbiz-teal font-medium mb-12 border-l-4 border-dbiz-teal pl-6 italic bg-dbiz-teal/5 py-4 rounded-r-lg">
                With professional assistance from D BIZ CONSULTANCY, individual entrepreneurs can complete the OPC registration process efficiently while ensuring full compliance with the Companies Act, 2013.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Obtain Digital Signature Certificate (DSC)",
                  desc: "A Digital Signature Certificate (DSC) is mandatory for filing electronically signed documents with the Ministry of Corporate Affairs (MCA). It ensures the authenticity and security of all filings.",
                  points: ["Mandatory for all electronically filed documents", "Ensures authenticity and security of filings", "Our team assists in obtaining from certified authorities"]
                },
                {
                  step: "2",
                  title: "File the SPICe+ Form",
                  desc: "The SPICe+ form is an integrated online application used for OPC incorporation. It covers name reservation, DIN allotment, and various tax registrations in a single workflow.",
                  points: ["Part A: Reserved name approval", "Part B: Incorporation and DIN/PAN/TAN allotment", "AGILE-PRO-S: Statutory registrations (GST, ESIC, etc.)"]
                },
                {
                  step: "3",
                  title: "Draft and File MOA and AOA",
                  desc: "The Memorandum of Association (MOA) and Articles of Association (AOA) are foundational documents defining the company’s objectives and internal rules.",
                  points: ["MOA: Defines business objectives and scope", "AOA: Specifies internal governance and management", "Customized clauses to reflect your business structure"]
                },
                {
                  step: "4",
                  title: "Obtain Certificate of Incorporation",
                  desc: "The Certificate of Incorporation (COI) is issued by the Registrar of Companies (ROC) as official confirmation that the OPC is legally registered.",
                  points: ["Contains the unique CIN for the company", "Includes PAN and TAN of the business", "Conclusive proof of separate legal entity status"]
                },
                {
                  step: "5",
                  title: "Opening Bank Account",
                  desc: "After incorporation, a current bank account must be opened in the name of the OPC to facilitate all business transactions legally.",
                  points: ["Requires COI, PAN, and MOA/AOA docs", "KYC documents of the director are mandatory", "Necessary for share capital deposit"]
                },
                {
                  step: "6",
                  title: "Appointment of Nominee",
                  desc: "In an OPC, the appointment of a nominee is mandatory to ensure perpetual succession and business continuity in case of death or incapacity.",
                  points: ["Nominee acts as the legal successor", "Provides continuity of operations", "Written consent via Form INC-3 required"]
                },
                {
                  step: "7",
                  title: "Commencement of Business (INC-20A)",
                  desc: "Filing Form INC-20A is a mandatory statutory requirement before commencing business operations to certify capital payment and office verification.",
                  points: ["Must be filed within 180 days of incorporation", "Declaration of paid-up share capital", "Professional certification required for filing"]
                }
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all group">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                    <h4 className="text-lg font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold group-hover:scale-110 transition-transform">{s.step}</span>
                      {s.title}
                    </h4>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {s.desc}
                    </p>
                    <div className="space-y-2 mt-auto">
                      <p className="font-semibold text-dbiz-navy text-xs uppercase">Key Highlights:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {s.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mandatory MCA Compliance Section */}
        <section id="compliance" className="py-20 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">Mandatory MCA Compliance for One Person Company (OPC)</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
                Maintaining compliance with the Ministry of Corporate Affairs (MCA) is essential to ensure legal validity and operational continuity. OPCs enjoy certain relaxations compared to private companies, but key statutory filings and audits remain mandatory.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 shadow-xl overflow-hidden bg-white mb-12">


              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-dbiz-navy hover:bg-dbiz-navy transition-none border-none">
                      <TableHead className="py-5 text-white font-bold text-lg">Aspect</TableHead>
                      <TableHead className="py-5 text-white font-bold text-lg">Compliance Requirement</TableHead>
                      <TableHead className="py-5 text-white font-bold text-lg">Frequency / Timeline</TableHead>
                      <TableHead className="py-5 text-white font-bold text-lg">Why It's Important</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { 
                        aspect: "First Board Meeting", 
                        req: "Conduct first Board Meeting and record resolutions (bank account, setup).", 
                        timeline: "Within 30 days of incorporation", 
                        importance: "Establishes governance framework and official documentation." 
                      },
                      { 
                        aspect: "Auditor Appointment", 
                        req: "Appoint first statutory auditor (Filing ADT-1 where applicable).", 
                        timeline: "Within 30 days of incorporation", 
                        importance: "Ensures audit readiness and compliance with the 2013 Act." 
                      },
                      { 
                        aspect: "INC-20A Filing", 
                        req: "Declaration of Commencement of Business (Section 10A).", 
                        timeline: "Within 180 days of incorporation", 
                        importance: "Statutory requirement to legally start operations and avoid penalties." 
                      },
                      { 
                        aspect: "Board Meetings", 
                        req: "Exempt from frequent meetings if only one director exists; record resolutions.", 
                        timeline: "As applicable", 
                        importance: "Simplifies management while maintaining audit trails of decisions." 
                      },
                      { 
                        aspect: "Statutory Audit", 
                        req: "Audit of financial statements by a Chartered Accountant.", 
                        timeline: "Annually", 
                        importance: "Mandatory for all OPCs irrespective of turnover or capital." 
                      },
                      { 
                        aspect: "AGM", 
                        req: "OPC is exempt from holding AGM; minutes serve as record.", 
                        timeline: "Not required", 
                        importance: "Significantly reduces the compliance burden for solo entrepreneurs." 
                      },
                      { 
                        aspect: "Financial (AOC-4)", 
                        req: "File financial statements with the ROC.", 
                        timeline: "Within 180 days from end of FY", 
                        importance: "Ensures financial disclosure and transparency with the MCA." 
                      },
                      { 
                        aspect: "Return (MGT-7A)", 
                        req: "File annual return containing the company's detailed data.", 
                        timeline: "Within 60 days from due date", 
                        importance: "Ensures company records stay updated in the national registry." 
                      },
                      { 
                        aspect: "DIR-3 KYC", 
                        req: "Update director KYC details with the MCA.", 
                        timeline: "Periodic / Event-based", 
                        importance: "Prevents DIN deactivation and operational disruptions." 
                      },
                      { 
                        aspect: "Income Tax Filing", 
                        req: "File Income Tax Return (ITR-6).", 
                        timeline: "Annually (by statutory deadline)", 
                        importance: "Ensures adherence to the Income Tax Act and avoids high penalties." 
                      }
                    ].map((row, idx) => (
                      <TableRow key={idx} className={`${idx % 2 === 0 ? "bg-white hover:bg-white" : "bg-gray-50/30 hover:bg-gray-50/30"} transition-none border-none`}>
                        <TableCell className="py-4 font-medium text-dbiz-navy whitespace-nowrap">{row.aspect}</TableCell>
                        <TableCell className="py-4 text-gray-700 min-w-[200px]">{row.req}</TableCell>
                        <TableCell className="py-4 text-gray-700 whitespace-nowrap font-medium text-sm">{row.timeline}</TableCell>
                        <TableCell className="py-4 text-gray-600 text-sm border-l border-gray-100">{row.importance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="bg-dbiz-teal/10 p-6 rounded-2xl flex items-center gap-6 border border-dbiz-teal/20 max-w-4xl mx-auto shadow-inner">
              <div className="bg-dbiz-navy p-4 rounded-xl shadow-lg">
                <AlertTriangle className="h-8 w-8 text-dbiz-teal" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-dbiz-navy mb-1 tracking-tight">Need expert assistance for your OPC compliance?</h4>
                <p className="text-gray-700">Contact our expert team at D BIZ CONSULTANCY for end-to-end guidance on statutory audit, tax planning, and MCA filings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPC Compliance Reliefs Section */}
        <section className="py-20 bg-gray-50/50 border-y border-gray-100 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Key Advantages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">OPC Compliance Reliefs</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                OPCs are provided with certain relaxations under the Companies Act, 2013, making them easier to manage compared to other company structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Board Meetings",
                  relief: "Not mandatory if only one director; resolutions can be recorded directly in minutes without a formal meeting call.",
                  icon: <Users className="h-6 w-6" />
                },
                {
                  title: "Annual General Meeting (AGM)",
                  relief: "Complete exemption from holding an AGM; statutory resolutions are recorded in the minutes book as valid.",
                  icon: <Clock className="h-6 w-6" />
                },
                {
                  title: "Annual Return",
                  relief: "Can be signed by a single director; no Company Secretary requirement for most OPCs unless certain thresholds are met.",
                  icon: <FileText className="h-6 w-6" />
                },
                {
                  title: "Reduced Compliance Burden",
                  relief: "Significantly fewer statutory filings and a simplified governance structure designed specifically for solo founders.",
                  icon: <Shield className="h-6 w-6" />
                },
                {
                  title: "Lower Penalties",
                  relief: "Reduced penalty rates for certain procedural non-compliances compared to larger private or public firms.",
                  icon: <FileBarChart className="h-6 w-6" />
                }
              ].map((item, i) => (
                <div key={i} className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group border-t-4 ${i >= 3 ? 'border-t-dbiz-teal' : 'border-t-dbiz-navy'}`}>
                  <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${i >= 3 ? 'bg-dbiz-teal/10 text-dbiz-teal group-hover:bg-dbiz-teal group-hover:text-white' : 'bg-dbiz-navy/10 text-dbiz-navy group-hover:bg-dbiz-navy group-hover:text-white'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.relief}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Post-Incorporation Compliance Timeline Section - Redesigned to Match Public Limited Design */}
        <section className="pt-20 pb-2 bg-gray-50/50 border-t border-gray-100 scroll-mt-32">
          <div className="container-custom">
            <h3 className="text-2xl font-bold text-dbiz-navy mb-12 text-center">Post-Incorporation Compliance Timeline</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                {
                  value: "30",
                  sub: "Days",
                  label: "First Board Meeting + First Auditor Appointment"
                },
                {
                  value: "180",
                  sub: "Days",
                  label: "INC-20A (Commencement of Business)"
                },
                {
                  value: "FY",
                  sub: "Cycle",
                  label: "Statutory Audit → AOC-4 → MGT-7A (Annual Return)"
                },
                {
                  value: "KYC",
                  sub: "Annual",
                  label: "DIR-3 KYC Filing / Update with MCA"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-dbiz-teal font-bold text-sm">{item.value}</span>
                  </div>
                  <p className="text-sm font-medium text-dbiz-navy">{item.sub}</p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
                <p className="text-gray-400 italic text-xs font-bold">Last updated: Feb 2026</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Strategic Overview */}
        <section className="py-24 mb-2 bg-gray-50/30 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why DBIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center">Why D BIZ CONSULTANCY for One Person Company (OPC) Registration?</h2>

              <div className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                <p>
                  Registering a One Person Company (OPC) is a strategic step for individual entrepreneurs looking to operate with limited liability and a structured corporate identity. While the process involves legal formalities and compliance requirements, it can be complex without expert support.
                </p>
              </div>
            </div>





            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {/* What DBIZ Handles */}
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What DBIZ Handles
                </h3>
                <ul className="space-y-3">
                  {[
                    "Document validation and pre-upload review",
                    "OPC name selection and trademark risk check",
                    "Object clause drafting aligned with business activities",
                    "DSC procurement and DIN application for director",
                    "SPICe+ / AGILE-PRO-S filing and ROC coordination",
                    "MOA & AOA drafting and incorporation filing",
                    "Nominee documentation and consent (INC-3) handling",
                    "ROC resubmission and clarification handling",
                    "Post-incorporation setup (PAN, TAN, GST)",
                    "INC-20A filing and commencement support",
                    "Annual compliance guidance and reminders"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You Provide */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                </h3>
                <ul className="space-y-3">
                  {[
                    "Identity and address proofs of director/shareholder",
                    "Registered office address proofs (rent / ownership)",
                    "Passport-sized photographs",
                    "Business activity details and preferred names",
                    "Capital contribution details (share value)",
                    "Bank statement confirming subscription deposit"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20 bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-dbiz-teal/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed mb-6">
                    That’s where D BIZ CONSULTANCY adds value. We simplify the OPC registration process by handling all legal, documentation, and compliance requirements on your behalf. From accurate document preparation to seamless MCA filing, our team ensures your company is incorporated efficiently and in full compliance with the Companies Act, 2013.
                  </p>
                  <p className="text-lg leading-relaxed opacity-90">
                    We also support you beyond incorporation — assisting with PAN, TAN, GST registration, and ongoing compliance, so your OPC remains fully compliant and operational without hassle.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Expert Guidance",
                      desc: "Personalized support from experienced incorporation and compliance professionals"
                    },
                    {
                      title: "End-to-End Service",
                      desc: "Complete assistance from registration to post-incorporation compliance"
                    },
                    {
                      title: "Transparent Process",
                      desc: "Clear communication with no hidden charges"
                    },
                    {
                      title: "Timely Delivery",
                      desc: "Efficient processing and quick turnaround for all services"
                    }
                  ].map((card, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
                      <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                      <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="pt-4 pb-16 mb-24 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-4">FAQs on One Person Company (OPC) Registration</h2>
              <p className="text-xs text-dbiz-teal font-bold mb-4 uppercase tracking-widest bg-dbiz-teal/10 inline-block px-4 py-1 rounded-full">Last updated: Feb 2026</p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Whether you're researching OPC eligibility, taxation, conversion rules, compliance, or MCA procedures — below are the most searched, practical, and decision-making questions answered in a clear and statute-aligned manner.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={`faq-${index}`} 
                    value={`item-${index}`} 
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline text-left group-hover:bg-gray-50/50 transition-colors">
                      <span className="font-semibold text-dbiz-navy text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Mermaid init script */}
      <script type="module" dangerouslySetInnerHTML={{
        __html: `
          import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
          mermaid.initialize({ startOnLoad: true, theme: 'default' });
        `
      }} />
    </div>
  );
};
export default EnhancedOnePersonCompanyPage;
