
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { privateLimitedContent } from "@/data/serviceContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

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

import { faqData } from "@/data/privateLimitedFaq";

// Private Limited Company Registration Page - SEO Optimized Feb 2026
const EnhancedPrivateLimitedPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // JSON-LD structured data is now handled server-side in page.tsx

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined ? "Private Limited Company Registration in India | DBIZ CONSULTANCY" : `Private Limited Company Registration in ${cityName} | DBIZ CONSULTANCY`;

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
    <SEO title={seoTitle} />
    <Navbar />
    <main className="flex-grow pt-24 pb-16">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Business Registration Services
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                Private Limited Company Registration in {cityName || "India"}

              </h1>

              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                {privateLimitedContent.description}
              </p>

              <div className="flex flex-wrap gap-4">


                <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
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
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Private Limited Company" className="w-full h-auto rounded-lg shadow-lg" />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold">7-10</div>
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

      {/* Overview Section — upgraded with statutory definition + minimum requirements */}
      <section id="overview" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                Overview
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a Private Limited Company?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A private limited company (commonly abbreviated as Pvt Ltd) is considered a separate legal entity from its owners, offering a secure framework for operations while safeguarding the personal assets of its members. This business structure, governed by the Companies Act, 2013, is popular among entrepreneurs and small to medium-sized businesses (SMEs) for its combination of limited liability protection, ownership control, and scalability.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Under law, a private company restricts share transfer, limits members to 200 (except OPC), and prohibits public invitations to subscribe to its securities. From incorporation, the company becomes a body corporate with perpetual succession and capacity to own property, contract, and sue or be sued in its own name.
                </p>
              </div>

              {/* Minimum Requirements Mini-block */}
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">2 Directors</p>
                      <p className="text-sm text-gray-600">At least one must be an Indian resident (182+ days in India during the FY)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">2 Shareholders</p>
                      <p className="text-sm text-gray-600">Can be the same individuals as directors; maximum 200 members</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">No Minimum Capital</p>
                      <p className="text-sm text-gray-600">No statutory minimum paid-up capital requirement</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Companies Act, 2013</h3>
                <p className="text-gray-700 mb-4">
                  Section 2(68) of the Companies Act, 2013, defines a Private Limited Company as an entity that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Restricts the Transfer of Shares</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Limits the Number of Members (maximum of 200, except OPC)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prohibits Public Invitations to subscribe to its securities</span>
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

      {/* Key Features Section — strengthened with statutory language */}
      <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Features
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Private Limited Company</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              DBIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features for business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Limited Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">In a company limited by shares, each member's liability is limited to the amount unpaid on shares held — personal assets remain protected from business debts and obligations.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">From incorporation, the company becomes a body corporate with capacity to own property, enter contracts, and sue or be sued — independently from its owners.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Membership Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Requires at least 2 members and allows up to 200 members (except OPC), ideal for small to medium businesses seeking structured growth.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">No Minimum Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">No statutory minimum paid-up capital requirement to register a private limited company in India. Capital should be practical for banking and business needs.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Eligible for concessional corporate tax rates (e.g., Section 115BAA at 22% plus applicable surcharge/cess, subject to conditions) and various startup exemptions.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Perpetual Succession</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The company continues to exist as a body corporate with perpetual succession regardless of changes in ownership or member status.</p>
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
                  Benefits of a Private Limited Company
                  {location !== undefined && <span className="block text-xl mt-2">in {cityName}</span>}
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  DBIZ CONSULTANCY helps businesses in {cityName} leverage these advantages for maximum growth and protection.
                </p>

                <div className="hidden md:block mt-8">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Business Growth" className="rounded-lg shadow-lg max-w-sm" />
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="grid grid-cols-1 gap-4">
                {privateLimitedContent.importance.map((item, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  </div>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Comparison Section — updated tax rate & compliance */}
      <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Comparison
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between Business Structures</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Understand why Private Limited is often the preferred choice for businesses in {cityName}.
            </p>
          </div>

          <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                    <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Sole Proprietorship</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Partnership</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border-r">Liability</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Limited to shares</TableCell>
                    <TableCell className="border-r">Limited to contribution</TableCell>
                    <TableCell className="border-r">Unlimited</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Legal Entity</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Separate entity</TableCell>
                    <TableCell className="border-r">Separate entity</TableCell>
                    <TableCell className="border-r">Not separate</TableCell>
                    <TableCell>Not separate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Ownership</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">2-200 shareholders</TableCell>
                    <TableCell className="border-r">2+ partners</TableCell>
                    <TableCell className="border-r">Single owner</TableCell>
                    <TableCell>2-50 partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Tax Rate</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Corporate tax regime; concessional option available (e.g., 115BAA at 22% + surcharge/cess) subject to conditions</TableCell>
                    <TableCell className="border-r">Flat 30%</TableCell>
                    <TableCell className="border-r">Individual income tax</TableCell>
                    <TableCell>Individual income tax</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Compliance</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Higher statutory compliance (ROC filings, statutory audit, board/AGM requirements)</TableCell>
                    <TableCell className="border-r">Moderate</TableCell>
                    <TableCell className="border-r">Minimal</TableCell>
                    <TableCell>Minimal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Best For</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Startups, scalable businesses</TableCell>
                    <TableCell className="border-r">Small businesses</TableCell>
                    <TableCell className="border-r">Freelancers, small traders</TableCell>
                    <TableCell>Family businesses</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section — with rejection prevention microcopy */}
      <section id="documents" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Documents
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              DBIZ CONSULTANCY assists clients in {cityName} with collecting and preparing all required documentation.
            </p>
          </div>

          {/* Common rejection prevention tip */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Common Rejection Prevention Tips</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Address proofs must match spelling across PAN / Aadhaar / Passport and the SPICe+ application.</li>
                <li>• Registered office proofs must be consistent (owner name on utility bill, rent agreement, and NOC).</li>
                <li>• Utility bills and bank statements should be dated within the last 2 months.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Indian Nationals</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Identity Proof</p>
                    <p className="text-gray-600 mt-1">PAN Card (Mandatory), Passport, Aadhar Card, Voter ID</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Utility Bills, Bank Statements (dated within last 2 months)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Photographs</p>
                    <p className="text-gray-600 mt-1">Recent passport-sized photographs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Foreign Nationals / NRIs</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Identity Proof</p>
                    <p className="text-gray-600 mt-1">Passport (Mandatory)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Driver's License, Bank Statement, or Residence Card</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Notarisation / Apostille</p>
                    <p className="text-gray-600 mt-1">May be required depending on director/shareholder status and current MCA practice</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Photographs</p>
                    <p className="text-gray-600 mt-1">Recent passport-sized photographs</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic mt-2">Note: At least one director must be a resident of India (182+ days stay requirement).</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Company Registration</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Memorandum of Association (MOA)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Articles of Association (AOA)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Declaration and Consent Forms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Digital Signature Certificate (DSC)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Director Identification Number (DIN)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Registered Office</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Rent Agreement + NOC</p>
                    <p className="text-gray-600 mt-1">For a rented office/residential address, with NOC from the owner</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Property Documents</p>
                    <p className="text-gray-600 mt-1">For owned property, proof of ownership</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Utility Bills</p>
                    <p className="text-gray-600 mt-1">Recent electricity or water bill of the premises (owner name must match)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process Section — with AGILE-PRO-S + INC-20A strengthening */}
      <section id="process" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Registration Process
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Private Limited Company Registration Process</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              A Private Limited Company offers limited liability protection to its shareholders, making it one of the most popular business structures for entrepreneurs in {cityName}. The registration process requires submitting key documents, adhering to compliance regulations, and opening a current account for financial transactions.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">1</span>
                      Obtain a Digital Signature Certificate (DSC)
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      A Digital Signature Certificate (DSC) is mandatory for filing electronically signed documents with the Ministry of Corporate Affairs (MCA). The DSC ensures the authenticity of all filings and transactions. Our team will assist you in procuring your DSC from a certified authority on your behalf.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">2</span>
                      File the SPICe+ Form
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      The SPICe+ form (Simplified Proforma for Incorporating Company Electronically Plus) is an integrated online form that simplifies the incorporation process by including multiple services:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Part A:</strong> For name reservation.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Part B:</strong> For incorporation, DIN allocation, PAN, TAN, GST registration, and more.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span><strong>AGILE-PRO-S (INC-35):</strong> Linked form covering GSTIN, ESIC, EPFO, professional tax, bank account opening, and Shops &amp; Establishment registration.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">3</span>
                      Draft and File the MOA and AOA
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Memorandum of Association (MOA):</strong> Defines the company's objectives and operational scope. <strong>Articles of Association (AOA):</strong> Outlines the internal rules and governance structure. We will prepare and file these documents, ensuring all vital clauses are accurately included to reflect your company's purpose and management structure.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">4</span>
                      Obtain the Certificate of Incorporation
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      The Certificate of Incorporation is issued by the Registrar of Companies (ROC) as proof that your company is officially registered. This certificate includes your Company Identification Number (CIN), PAN, and TAN.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">5</span>
                      Opening Bank Account
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      After receiving the Certificate of Incorporation, open a current bank account in the company's name for conducting all business transactions legally.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>Submit Certificate of Incorporation, PAN, MOA, AOA, and board resolution to the bank.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>Provide KYC documents of all directors and authorized signatories.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">6</span>
                      Depositing Capital Contribution
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Once the company bank account is opened, subscribers to the MOA must deposit their capital contribution (share value) into the company's bank account before filing for commencement of business.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>Each subscriber deposits the amount equal to the value of shares agreed as per the MOA.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>A bank statement confirming the deposit is required for the next step.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">7</span>
                      Filing INC-20A Form – Commencement of Business
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Filing Form INC-20A is the final mandatory step. For companies with share capital covered under Section 10A, business and borrowing <strong>cannot commence</strong> unless a director files the prescribed declaration within 180 days of incorporation confirming subscribers paid the agreed share value and the registered office verification is filed.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>Declaration that subscribers have paid the value of shares agreed to be taken.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>Verified by a Chartered Accountant or Company Secretary in practice.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                        <span>Non-compliance can trigger penalties and ROC action for removal of the company's name.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCA Compliance Section — updated DIR-3 KYC (3-year) + ADT-1 (15-day) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Compliance
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory MCA Compliance for Private Limited Companies</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Incorporating a Private Limited Company is just the beginning; staying compliant with the Ministry of Corporate Affairs (MCA) is crucial to maintaining its legal standing. From annual returns to statutory audits, understanding and fulfilling these requirements ensures smooth business operations and avoids penalties.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-dbiz-navy">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white">Aspect</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white">Compliance Requirement</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white">Frequency / Timeline</th>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-white">Why It's Important</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">First Board Meeting</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Hold the first Board Meeting and record foundational resolutions (banking, disclosures, initial governance actions).</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Within 30 days of incorporation</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Establishes governance records early and supports downstream filings and audit trail.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Appointment of First Auditor + ADT-1</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Appoint first statutory auditor; file notice of appointment with the Registrar as required under the rules (commonly via ADT-1). First-auditor appointment is expressly included as an appointment type in updated ADT-1 forms effective July 14, 2025.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">First auditor: within 30 days of registration (or members within 90 days if Board fails). Notice (ADT-1): within 15 days of the meeting in which auditor is appointed.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Mandatory for audit readiness and statutory filing correctness; reduces risk of penalties and defective annual filings.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Commencement of Business (INC-20A)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">File declaration for commencement of business where applicable (commonly via INC-20A) before business/borrowing proceeds.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Within 180 days of incorporation/registration (as applicable)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Unlocks operational legality (commence business/borrow), prevents restrictions and penalties.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Board Meetings</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Maintain board meeting cadence and gap rules (or Small Company relaxation where eligible).</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Standard: minimum 4 meetings/year; max 120-day gap. Small Company: 2 meetings/year with at least 90 days gap.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Demonstrates ongoing governance; meeting cadence is frequently reviewed in compliance checks.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Statutory Audit</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Conduct statutory audit of financial statements by a Chartered Accountant — mandatory regardless of turnover.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Annually (irrespective of turnover)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Ensures financial transparency and legal compliance under Companies Act.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual General Meeting (AGM)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Conduct AGM to approve financial statements, appoint/reappoint auditor, and transact other statutory business. Not more than 15 months between two AGMs.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Annually (within 6 months from FY close; typically by 30th September)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Provides shareholders an opportunity to review company performance and participate in key decisions.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Financial Statements Filing (AOC-4)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">File financial statements with the Registrar after adoption in AGM.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Within 30 days of AGM</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Statutory financial disclosure and baseline ROC compliance.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual Return Filing (MGT-7)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">File annual return with the Registrar containing governance/shareholding/management details.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Within 60 days of AGM (or within 60 days of the date AGM should have been held if not held, with reasons)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Keeps ROC records current and reduces penalty exposure.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Director KYC (DIR-3 KYC-Web)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">File DIR-3 KYC-Web per the revised cadence; update key changes within 30 days. Effective March 31, 2026: file on/before June 30 of the immediately following "every third consecutive financial year" cycle; update mobile/email/residential address within 30 days of change.</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Once every 3 financial years (effective 31 March 2026); event-based updates within 30 days</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Prevents DIN non-compliance and supports correct director identity data in the government database.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Income Tax Filing</td>
                      <td className="px-6 py-4 text-sm text-gray-700">File Income Tax Return (Form ITR-6)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Annually (on or before due date under Income Tax Act)</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Ensures tax compliance and avoids penalties and prosecution under Income Tax Act.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Small Company Compliance Reliefs */}
          <div className="mt-12 bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-dbiz-navy mb-4">Small Company Compliance Reliefs (Check Eligibility First)</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If your Private Limited Company qualifies as a "Small Company" under the Companies Act definition and the latest government thresholds (paid-up capital ≤ ₹10 crore and turnover ≤ ₹100 crore, effective Dec 1, 2025), you may be eligible for reduced board meeting requirements, cash flow statement exemption, and reduced penalties for certain non-compliances. These benefits can materially simplify governance overhead for early-stage companies — without removing annual ROC filings and statutory audit expectations. DBIZ CONSULTANCY can assess eligibility and maintain a simplified compliance calendar for Small Companies.
            </p>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-dbiz-navy">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-white">Compliance Topic</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-white">Standard Private Limited</th>
                        <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-white">Small Company Treatment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">Eligibility Thresholds</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Not applicable</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Paid-up capital ≤ ₹10 crore and turnover ≤ ₹100 crore (subject to exclusions under the Act + rules)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">Board Meeting Frequency</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Minimum 4 meetings/year; max gap 120 days</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Minimum 2 meetings/year: one in each half-year; min gap 90 days</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">Cash Flow Statement</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Included in financial statement definition generally</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Cash flow statement not required for Small Companies (as per definition carve-out). Audit still applies, but reporting can be lighter.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">Abridged Annual Return</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Standard annual return filing within 60 days of AGM</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Act allows abridged annual return for Small Companies/OPC where prescribed</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">Reduced Penalties</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Standard penalties apply</td>
                        <td className="px-6 py-3 text-sm text-gray-700">Lower penalties for Small Companies/OPC for specified defaults</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                    Check Your Small Company Eligibility — Contact Us
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <ContactOptions />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Compliance Timeline Visual */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-dbiz-navy mb-6 text-center">Post-Incorporation Compliance Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-lg">30</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Days</p>
                <p className="text-xs text-gray-600 mt-1">First Board Meeting + First Auditor Appointment</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-lg">180</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Days</p>
                <p className="text-xs text-gray-600 mt-1">INC-20A (Commencement of Business)</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">FY End</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Annual Cycle</p>
                <p className="text-xs text-gray-600 mt-1">Audit → AGM → AOC-4 (30d) → MGT-7 (60d)</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">3 Yr</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">DIR-3 KYC-Web</p>
                <p className="text-xs text-gray-600 mt-1">Every 3rd FY cycle (effective March 2026)</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center italic">Last updated: Feb 2026</p>
        </div>
      </section>

      {/* Why Choose Us Section — upgraded with what-we-handle split */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Why DBIZ
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why DBIZ CONSULTANCY for Private Limited Company Registration?</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Registering a Private Limited Company is a significant step toward building your business in {cityName}. While the process involves several steps, it can feel overwhelming without the right guidance.
            </p>
          </div>

          {/* What We Handle vs What You Provide */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What DBIZ Handles
              </h3>
              <ul className="space-y-3">
                {[
                  "Document validation and pre-upload review",
                  "Company name shortlist + trademark risk check",
                  "Object clause drafting (broad-but-compliant)",
                  "DSC procurement and DIN application",
                  "SPICe+ / AGILE-PRO-S filing and ROC follow-up",
                  "MOA & AOA drafting and filing",
                  "ROC resubmission handling (if required)",
                  "Post-incorporation compliance setup (PAN, TAN, GST)",
                  "INC-20A filing and commencement support",
                  "Annual compliance guidance and reminders"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
              </h3>
              <ul className="space-y-3">
                {[
                  "Identity and address proofs of all directors/shareholders",
                  "Registered office address proofs (rent agreement / ownership docs)",
                  "Passport-sized photographs",
                  "Business activity details and preferred company names",
                  "Capital contribution details (share value per subscriber)",
                  "Bank statement confirming subscription deposit"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  That's where DBIZ CONSULTANCY comes in. We make the process simple and stress-free by handling all the details for you. From preparing and submitting accurate documents to ensuring full compliance with the Companies Act, 2013, our team is here to support you every step of the way. We also take care of post-registration essentials, including obtaining your PAN, TAN, GST Registration, and assisting with annual filings to ensure your business stays compliant.
                </p>
                <p className="text-lg leading-relaxed">
                  With our experience and focus on your success, DBIZ CONSULTANCY is the trusted partner for entrepreneurs and businesses across {cityName}. Let us handle the paperwork while you focus on growing your dream.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-white/80">Personalized support from incorporation specialists</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
                    <p className="text-white/80">Complete assistance from registration to compliance</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                    <p className="text-white/80">Clear communication and no hidden charges</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                    <p className="text-white/80">Quick turnaround time for all services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section — 25 SEO-optimized FAQs */}
      <section id="faqs" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              FAQs
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on Private Limited Company Registration (India)</h2>
            <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're curious about the SPICe+ process, post-incorporation compliance, Small Company benefits, or recent regulatory changes — we've covered the most-searched questions with accurate, statute-aligned answers.
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
  </div>;
};
export default EnhancedPrivateLimitedPage;
