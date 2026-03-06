
import React, { useState } from "react";
import { useParams } from "next/navigation";
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
    ? "One Person Company Registration in India | D BIZ CONSULTANCY"
    : `One Person Company Registration in ${cityName} | D BIZ CONSULTANCY`;

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
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Background"
              className="w-full h-full object-cover"
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
                  One Person Company Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>

                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  A One Person Company (OPC) is a single-member private company with separate legal personality, created to let solo founders operate with limited liability and corporate continuity without adding shareholders.
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
                  <span>Quick Registration • Guaranteed Compliance • Expert Support</span>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                      alt="One Person Company"
                      className="w-full h-auto rounded-lg shadow-lg"
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
        <section className="sticky top-16 z-10 bg-white shadow-md border-b border-gray-200">
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

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a One Person Company?</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An OPC is a corporate structure designed for single-owner businesses that want a company form (CIN, statutory filings, perpetual succession) but with fewer governance frictions than multi-member companies. The Companies Act defines OPC as "a company which has only one person as a member," and permits formation of a company by one person where the company "is to be One Person Company that is to say, a private company."
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    OPCs benefit from the standard "company" effects: on incorporation, the entity becomes a body corporate capable of owning property, contracting, and suing/being sued, with perpetual succession. The name clause must include "Private Limited" and additionally "(OPC)" in brackets below the company name wherever printed.
                  </p>
                </div>

                {/* Minimum Requirements Mini-block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">1 Member</p>
                        <p className="text-sm text-gray-600">Exactly 1 member (the subscriber/shareholder).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">Min 1 Director</p>
                        <p className="text-sm text-gray-600">Minimum 1 director (and up to 15).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">1 Nominee</p>
                        <p className="text-sm text-gray-600">Mandatory nomination (with prior consent) to step in.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">No Min Capital</p>
                        <p className="text-sm text-gray-600">No statutory minimum paid-up capital.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Limited Liability</h3>
                    <p className="text-gray-600">Protect your personal assets from business debts and liabilities. Liability is limited to any unpaid amount on shares held.</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Perpetual Succession</h3>
                    <p className="text-gray-600">The company continues despite changes in the individual's status, ensuring corporate continuity.</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Major Reforms (April 2021)</h3>
                  <p className="text-gray-700 mb-4">
                    Key relaxations introduced to OPC eligibility and conversion rules:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Indian citizens resident outside India (NRIs) can now form OPCs.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Residency test reduced to 120 days.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Removed earlier conversion restrictions/threshold triggers.</span>
                    </li>
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
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Features
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a One Person Company</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features for business success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Limited Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">The member's liability is limited to any unpaid amount on shares held, separating personal assets from company debts.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Distinct from the member/director, serving as the foundation for contracts, bank accounts, and property ownership.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Governance Simplifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No Annual General Meeting (AGM) required. Relaxed board meeting frequencies and compliance.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <ArrowRight className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Strategic Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Relaxed conversion rules support growth without forced conversion based solely on paid-up capital/turnover.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <AlertTriangle className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Fundraising Constraints</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Equity fundraising requires conversion to a multi-member company, as issuing shares creates additional members.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Activity Restrictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Historically restricted from carrying out Non-Banking Financial Investment activities.</p>
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
                    Benefits of a One Person Company
                    {location !== undefined && <span className="block text-xl mt-2">in {cityName}</span>}
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    D BIZ CONSULTANCY helps businesses in {cityName} leverage advantages tailored for solo entrepreneurs.
                  </p>

                  <div className="hidden md:block mt-8">
                    <img
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                      alt="Business Growth"
                      className="rounded-lg shadow-lg max-w-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Solo Control: Start and manage your company with 100% control.",
                    "Limited Liability Protection: Your personal assets are protected from business liabilities.",
                    "Separate Legal Entity: The OPC exists as a separate legal entity from its owner.",
                    "Minimized Compliance: Exempt from AGMs and fewer board meeting requirements.",
                    "Perpetual Succession: Built-in nominee mechanism ensures corporate continuity.",
                    "Tax Concessions: Eligible to opt into the Section 115BAA corporate tax regime."
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
                Understand why One Person Company is often the preferred choice for solo founders in {cityName}.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">One Person Company</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">Sole Proprietorship</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium border-r">Legal status</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">Separate legal entity (company)</TableCell>
                      <TableCell className="border-r">Separate legal entity (company)</TableCell>
                      <TableCell className="border-r">Separate legal entity (statutory LLP)</TableCell>
                      <TableCell>Not separate from owner</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Ownership</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">1 member (OPC carve-out)</TableCell>
                      <TableCell className="border-r">2–200 members</TableCell>
                      <TableCell className="border-r">2+ partners</TableCell>
                      <TableCell>1 owner</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Directors/Management</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">Min 1 director; resident director required</TableCell>
                      <TableCell className="border-r">Min 2 directors; resident director required</TableCell>
                      <TableCell className="border-r">Designated partners as per LLP law</TableCell>
                      <TableCell>Owner-managed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Liability</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">Limited (unpaid shares) if limited by shares</TableCell>
                      <TableCell className="border-r">Limited (unpaid shares) if limited by shares</TableCell>
                      <TableCell className="border-r">Limited to agreed contribution</TableCell>
                      <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">AGM Requirement</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">AGM not required</TableCell>
                      <TableCell className="border-r">AGM required (subject to exemptions)</TableCell>
                      <TableCell className="border-r">Not applicable</TableCell>
                      <TableCell>Not applicable</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Fundraising (equity)</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">Constrained—single member; conversion usually needed</TableCell>
                      <TableCell className="border-r">Better (still private—no public invitation)</TableCell>
                      <TableCell className="border-r">Typically partner capital / debt</TableCell>
                      <TableCell>Personal funds / debt</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Typical ROC compliance</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Moderate (reduced meetings; filings still apply)</TableCell>
                      <TableCell className="border-r">Higher (AGM + board cadence + filings)</TableCell>
                      <TableCell className="border-r">Moderate (LLP filings)</TableCell>
                      <TableCell>Minimal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Tax positioning</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r">Company taxation; can opt concessional regime if eligible</TableCell>
                      <TableCell className="border-r">Company taxation; can opt concessional regime if eligible</TableCell>
                      <TableCell className="border-r">LLP taxed as firm (separate regime)</TableCell>
                      <TableCell>Taxed in owner's hands</TableCell>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY assists clients in {cityName} with collecting and preparing all required documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Sole Member + Director (Indian Citizen)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">PAN, identity proof, address proof.</p>
                      <p className="text-sm text-gray-500 mt-1">Note: Director must satisfy the resident-director rule at the company level (≥182 days in India).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Nominee</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Consent in Form INC-3, plus PAN/ID/address proofs.</p>
                      <p className="text-sm text-gray-500 mt-1">Pursuant to Companies Act + Incorporation Rules.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Registered Office</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Address + proof for Section 12 verification.</p>
                      <p className="text-sm text-gray-500 mt-1">Registered office verification must be filed within 30 days of incorporation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Incorporation Filings</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">eMoA/eAoA + SPICe+ linked declarations.</p>
                      <p className="text-sm text-gray-500 mt-1">SPICe+ is the integrated incorporation framework used on MCA.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden md:col-span-2 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Post-Incorporation</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Bank a/c documents; subscription proof; INC-20A.</p>
                      <p className="text-sm text-gray-500 mt-1">INC-20A ties to Section 10A and Rule 23A.</p>
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
                Process
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Registration Process</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY delivers an efficient, transparent, and hassle-free OPC registration experience.
              </p>
            </div>

            <div className="mb-16 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white p-6">
              <h3 className="text-xl font-bold text-dbiz-navy mb-6 text-center">Process Flow</h3>
              <div className="overflow-x-auto flex justify-center">
                {mounted ? (
                  <div className="mermaid max-w-full">
                    {`flowchart TD
                      A[DSC for subscriber/director] --> B[Name reservation: OPC format + uniqueness checks]
                      B --> C[Nominee selection + INC-3 consent]
                      C --> D[SPICe+ Part B + linked forms (eMoA/eAoA, INC-9, AGILE-PRO-S)]
                      D --> E[Certificate of Incorporation (COI)]
                      E --> F[Bank account + share subscription deposit]
                      F --> G[INC-20A (Commencement of Business)]
                      G --> H[Operational + annual compliance cycle]`}
                  </div>
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-gray-400">Loading flow diagram...</div>
                )}
              </div>
            </div>

            <div className="relative mt-8">
              <div className="absolute left-6 top-8 bottom-0 w-1 bg-gradient-to-b from-dbiz-navy to-dbiz-teal hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    title: "Digital Signature",
                    desc: "Obtain DSC for the subscriber/director for MCA e-filing. SPICe+ is electronic; DSC is operationally required."
                  },
                  {
                    title: "Name Reservation",
                    desc: "Choose a compliant name and reserve via MCA workflow. Illustrative OPC name format appears in MCA instruction guidance."
                  },
                  {
                    title: "Nominee Appointment",
                    desc: "Confirm nominee and obtain consent. INC-3 (consent), nominee details in MoA. Nominee mechanism required at formation."
                  },
                  {
                    title: "File SPICe+",
                    desc: "Submit integrated incorporation (Part B + linked forms like AGILE-PRO-S, eMoA/eAoA, INC-9). SPICe+ Part B is the main incorporation route; it links multiple services."
                  },
                  {
                    title: "Certificate of Incorporation",
                    desc: "ROC issues COI; company becomes body corporate. Effect of incorporation and corporate status begins from incorporation date."
                  },
                  {
                    title: "Open Bank Account + Fund Subscription",
                    desc: "Open company bank account; subscriber deposits share subscription. Needed to support commencement declaration."
                  },
                  {
                    title: "Commencement of Business",
                    desc: "File commencement declaration before starting business/borrowing (where applicable). Section 10A restricts commencement/borrowing until declaration + office verification."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-teal text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div className="text-sm font-semibold text-dbiz-navy mt-2 hidden md:block">
                        Step {index + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex-1 hover:shadow-md transition-shadow duration-300 group-hover:border-dbiz-teal/30">
                      <h3 className="text-xl font-semibold text-dbiz-navy mb-3 group-hover:text-dbiz-teal transition-colors">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance and Post-Incorporation Timeline</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                What remains mandatory (even with OPC relaxations).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Commencement (INC-20A)</h3>
                <p className="text-sm text-gray-700">A company incorporated after the relevant amendment and having share capital cannot commence business or borrow unless it files the prescribed declaration within 180 days and completes registered-office verification.</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Audit + Auditor Appointment</h3>
                <p className="text-sm text-gray-700">Statutory audit applies to companies through the Companies Act audit framework; the first auditor must be appointed by the Board within 30 days from registration, and the company must file notice of auditor appointment within 15 days.</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Annual Filings (OPC)</h3>
                <p className="text-sm text-gray-700">Financial statements must be filed within 180 days from closure of the financial year. Annual return: OPC is exempt from AGM, so firms generally align the due date to the statutory “AGM should have been held” window (within 60 days).</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Board/Member Actions</h3>
                <p className="text-sm text-gray-700">OPC board meeting obligations are relaxed to one meeting per half-year (90-day gap), and if there is only one director, even that meeting/quorum layer does not apply; resolutions can be recorded in minutes and treated as valid.</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">DIR-3 KYC Update Cycle</h3>
                <p className="text-sm text-gray-700">(Effective March 31, 2026). DIR-3 KYC Web must be filed on or before 30th June of the immediately following every third consecutive financial year, and changes in mobile/email/residential address updated within 30 days.</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Small Company Positioning</h3>
                <p className="text-sm text-gray-700">OPCs are not excluded by definition from being a "small company" and may qualify if thresholds/conditions are met, unlocking lighter reporting elements like cash-flow statement exemption.</p>
              </div>
            </div>

            <div className="mb-16 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-dbiz-navy mb-6 text-center">Post-Incorporation Timeline</h3>
              <div className="overflow-x-auto flex justify-center">
                {mounted ? (
                  <div className="mermaid max-w-full">
                    {`timeline
                      title OPC Post-Incorporation Compliance
                      day 0 : Certificate of Incorporation (COI)
                      day 0-30 : RO verification (Sec 12) + First auditor appt
                      day 0-180 : INC-20A (Commencement of Business)
                      every half-year : Board meeting (or minutes-only if 1 director)
                      FY close + 180 days : File financial statements (OPC specific)
                      post FY close window : Annual return filing window (AGM-exempt)
                      every 3rd FY cycle : DIR-3 KYC-Web by 30 June (eff. Mar 2026)`}
                  </div>
                ) : (
                  <div className="h-[300px] flex items-center justify-center text-gray-400">Loading timeline...</div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why D BIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for OPC Registration?</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY's OPC registration service scope (aligned to MCA process requirements) focuses on reducing resubmissions and keeping incorporation + compliance "audit-ready" from day one.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-8">
                <ul className="space-y-4">
                  {[
                    "Eligibility + structure check (OPC vs Private Ltd vs LLP) against statutory constraints (single member, nominee requirement, director residency rule).",
                    "Name shortlisting + OPC naming format alignment (including the statutory 'One Person Company' bracket disclosure).",
                    "Nominee documentation workflow (INC-3 consent; nominee change/withdrawal handling using INC-4 where required).",
                    "SPICe+ preparation and filing (Part B + linked forms), and post-incorporation steps including INC-20A readiness.",
                    "Conversion readiness planning (OPC → Private/Public) with the April 2021 amended conversion pathway (INC-6 and updated conditions)."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on OPC Registration (India)</h2>
              <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prioritized sources (for legal accuracy and auditability): Companies Act, 2013; Companies (Incorporation) Rules; MCA21 instruction kit.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={`faq-${index}`} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-left font-medium text-base">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
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
