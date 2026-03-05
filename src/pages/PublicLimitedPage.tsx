"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle } from "lucide-react";
import { publicLimitedContent } from "@/data/serviceContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { faqData } from "@/data/publicLimitedFaq";

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

// Public Limited Company Registration Page - SEO Optimized
const EnhancedPublicLimitedPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

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
                Public Limited Company Registration in {cityName || "India"}
              </h1>

              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                {publicLimitedContent?.description || "A Public Limited Company (legally, a “public company”) is a company structure in India designed for scalable ownership, capital raising, and (where applicable) listing on a recognized stock exchange."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
                  <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </div>

              <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                <Clock className="h-4 w-4 mr-2" />
                <span>Large Scale Readiness • IPO Potential • Institutional Trust</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1454165833767-1316b0215b3f" alt="Public Limited Company" className="w-full h-auto rounded-lg shadow-lg" />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold text-center">7+</div>
                      <div className="text-sm opacity-80 text-center">Shareholders</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <div className="text-4xl font-bold text-center">3+</div>
                      <div className="text-sm opacity-80 text-center">Directors</div>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a Public Limited Company?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A Public Limited Company (legally, a “public company”) is a company structure in India designed for scalable ownership, capital raising, and (where applicable) listing on a recognized stock exchange. Unlike a private company, a public company can issue securities to the public through a prospectus (public offer) and can also use private placement, rights issue, or bonus issue routes depending on the situation and compliance requirements.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  From the date mentioned in the Certificate of Incorporation, a company becomes a body corporate with perpetual succession, with the legal capacity to own property, contract, and sue or be sued in its own name. A Public Limited Company’s name is reflected in its Memorandum of Association (MOA) and must end with the word “Limited” (except where exemptions apply, such as certain Section 8 companies).
                </p>
                <p className="text-gray-700 font-medium">
                  <strong>Governance note (critical for public companies):</strong> The compliance load is generally higher than for private companies, especially if the public company is listed or meets thresholds that trigger enhanced governance requirements (e.g., independent directors/board committees).
                </p>
              </div>

              {/* Minimum Requirements Mini-block */}
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">3 Directors</p>
                      <p className="text-sm text-gray-600">Minimum 3 directors; can have up to 15 (more by special resolution)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">7 Shareholders</p>
                      <p className="text-sm text-gray-600">Minimum 7 at incorporation (no statutory maximum members)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Resident Director</p>
                      <p className="text-sm text-gray-600">At least one director resident in India (182+ days during FY)</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Companies Act, 2013</h3>
                <p className="text-gray-700 mb-4">
                  Section 2(71) defines a “public company” as a company that is not a private company, with an important proviso:
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200 mt-2 mb-4 italic text-gray-600">
                  A company that is a subsidiary of a company that is not a private company is deemed to be a public company for the purposes of the Act, even if the subsidiary’s articles continue to label it private.
                </div>

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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Public Limited Company</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              D BIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features for scalable business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A public limited company exists independently from its shareholders and directors and continues regardless of changes in members/management.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Limited Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Where the company is limited by shares, members’ liability is limited to the amount unpaid (if any) on the shares they hold.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Share Transferability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">In a public company, securities (or other interest of any member) are stated to be freely transferable, subject to the Act’s framework.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Raise Capital / Get Listed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">May issue securities to the public through a prospectus (public offer), right issues, or private placements. Supports SEC/SEBI overseen public listings.</p>
              </CardContent>
            </Card>

             <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Governance-ready Board</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Requires at least 3 directors and can scale beyond 15 via special resolution. Listed companies require independent directors.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">No Minimum Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Historical minimum paid-up capital thresholds for public (and private) companies were omitted by the Companies (Amendment) Act, 2015.</p>
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
                  Benefits of a Public Limited Company
                  {location !== undefined && <span className="block text-xl mt-2">in {cityName}</span>}
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  A Public Limited Company registration in India is commonly chosen when the business roadmap includes: institutional funding, broad shareholder participation, brand signaling for large contracts, and/or eventual listing.
                </p>

                <div className="hidden md:block mt-8">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Business Growth" className="rounded-lg shadow-lg max-w-sm" />
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Capital raising pathways (including public offer)</h3>
                      <p className="text-gray-700">Public companies can access a broader set of securities issuance routes, including public offers through a prospectus, alongside private placements and rights/bonus issues.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Market credibility through formal governance</h3>
                      <p className="text-gray-700">The Companies Act prescribes structured governance and periodic filings (board meetings, AGM cycles, annual return, and financial statements filing), supporting larger-scale operating models.</p>
                    </div>
                  </div>
                </div>

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Continuity and asset-holding advantages</h3>
                      <p className="text-gray-700">As a body corporate, the company can hold assets, enter contracts, and litigate in its own name—useful for long-duration projects, IP ownership, and long-term contracting.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Corporate tax planning options</h3>
                      <p className="text-gray-700">Domestic companies may opt for concessional corporate taxation under Section 115BAA (subject to conditions, including filing requirements and restrictions on certain deductions/incentives).</p>
                    </div>
                  </div>
                </div>

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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Comparison with other business structures</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              This comparison is intentionally aligned to the typical "business structure selection" decision Indian founders make.
            </p>
          </div>

          <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                    <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Public Limited Company</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited Company</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">LLP (Limited Liability Partnership)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border-r">Minimum members/owners</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium">7 members</TableCell>
                    <TableCell className="border-r">2 members</TableCell>
                    <TableCell>2 partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Minimum directors/management</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium">3 directors</TableCell>
                    <TableCell className="border-r">2 directors</TableCell>
                    <TableCell>No “directors” concept; partners govern</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Share transferability</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium">Securities framed as freely transferable</TableCell>
                    <TableCell className="border-r">Articles restrict share transfer</TableCell>
                    <TableCell>No shares; partnership rights governed by LLP agreement</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-medium border-r">Public fundraising</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium">Public offer through prospectus allowed</TableCell>
                    <TableCell className="border-r">No public invitation; rights/bonus/private placement routes</TableCell>
                    <TableCell>Not a share-issuance model</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Typical compliance burden</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium">Higher (especially if listed/intending to list)</TableCell>
                    <TableCell className="border-r">Moderate-to-high</TableCell>
                    <TableCell>Generally lighter than company formats</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Income tax (headline)</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium">Corporate tax options like 115BAA (conditions apply)</TableCell>
                    <TableCell className="border-r">Same as public company (company taxation framework)</TableCell>
                    <TableCell>30% for firm/LLP for AY 2025-26 (plus surcharge/cess)</TableCell>
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
              Public Limited Company incorporation documentation overlaps heavily with private company incorporation, with the key difference being member/director minimums and the public company governance profile.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Practical Drafting Note</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Keep address proofs internally consistent because SPICe+ requires specified attachments and formats.</li>
                <li>• Resubmissions often occur where documentation is incomplete or inconsistent.</li>
                <li>• Ensure director/subscriber KYC is valid with identifiers such as PAN, Voter ID, Passport, and DL.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Directors/Subscribers</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Identity & KYC</p>
                    <p className="text-gray-600 mt-1">PAN Card (Mandatory), Voter ID, Passport, and Driving License. (Particularly for individuals securing DIN via SPICe+)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Utility Bills, Bank Statements (dated within last 2 months)</p>
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
                    <p className="font-medium text-dbiz-navy">Address Validation</p>
                    <p className="text-gray-600 mt-1">NOC from property owner alongside rent agreement or ownership proof.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Utility Proof</p>
                    <p className="text-gray-600 mt-1">Recent electricity, gas, or water bill in owner's name.</p>
                  </div>
                </div>
              </div>
            </div>
             
             <div className="md:col-span-2 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">Core Incorporation Set (SPICe+ aligned)</h3>
              </div>
              <div className="p-6 space-y-4">
                 <p className="text-gray-700">SPICe+ Part B provides integrated workflows. Forms commonly include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <p className="font-medium text-dbiz-navy">eMOA & eAOA (Company Constitution)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <p className="font-medium text-dbiz-navy">INC-9 (Declaration by Subscribers)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <p className="font-medium text-dbiz-navy">AGILE-PRO-S (for GSTIN, ESIC, EPFO, Bank open)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <p className="font-medium text-dbiz-navy">Digital Signature Certificates (DSC)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section id="process" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Registration Process
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Public Limited Registration Process</h2>
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">1</span>
                      Name reservation and incorporation filing (SPICe+)
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      SPICe+ Part B simplifies company incorporation with the RoC and provides integrated applications including DIN, PAN/TAN, GSTIN, ESIC, EPFO, and bank account opening. The name approved ends with 'Limited'.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">2</span>
                      Typical SPICe+ filing workflow
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Submit SPICe+ Part B, access linked forms (eMoA, eAoA, INC-9, AGILE-PRO-S), affix DSC, and upload DSC-affixed PDFs to MoCA for processing. Wait for Certificate of Incorporation and CIN/DIN allocations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">3</span>
                      Public company-specific considerations
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      Because the class of company is “Public,” certain validations (including director directorship limits tailored for public companies) are explicitly checked by the SPICe+ system before approval.
                    </p>
                  </div>
                </div>
              </div>

               <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-xl font-bold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">4</span>
                      Commencement of business (INC-20A)
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      If the company has share capital, it cannot commence business / borrow unless a director declares within 180 days that subscribers paid their share values and the RoC registered office is verified.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-dbiz-navy text-white">
        <div className="container-custom">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mandatory Compliance Timeline</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Public companies carry the Companies Act compliance baseline. Keep your public limited company in good standing. Note: Small Company relief is not available to public companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <div className="h-12 w-12 bg-dbiz-teal rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">30</span>
                  <span className="text-xs ml-1">Days</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Initial Setup</h3>
                <p className="opacity-80 text-sm">First board meeting must be held. First auditor appointed by the Board of Directors within 30 days from registration date.</p>
             </div>
             
             <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <div className="h-12 w-12 bg-dbiz-teal rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold">180</span>
                  <span className="text-xs ml-1">Days</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Commencement</h3>
                <p className="opacity-80 text-sm">Section 10A commencement declaration (INC-20A form) must be filed verifying subscriber payments.</p>
             </div>

             <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <div className="h-12 w-12 bg-dbiz-teal rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6"/>
                </div>
                <h3 className="text-xl font-bold mb-2">Annual Cycle</h3>
                <p className="opacity-80 text-sm">At least 4 board meetings/year (max 120 gap). Hold AGM. File financial statements in 30 days. File annual return within 60 days of AGM.</p>
             </div>

             <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <div className="h-12 w-12 bg-dbiz-teal rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6"/>
                </div>
                <h3 className="text-xl font-bold mb-2">Director KYC</h3>
                <p className="opacity-80 text-sm">March 2026 update: DIR-3-KYC-Web filing required once every 3rd consecutive financial year, plus event-based updates within 30 days.</p>
             </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 scroll-mt-32">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Questions Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <span className="font-semibold text-dbiz-navy">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  </div>;
};

export default EnhancedPublicLimitedPage;
