
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { nidhiCompanyFaq } from "@/data/nidhiCompanyFaq";

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

// Nidhi Company Registration Page - SEO Optimized Feb 2026
const NidhiCompanyPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined ? "Nidhi Company Registration in India | D BIZ CONSULTANCY" : `Nidhi Company Registration in ${cityName} | D BIZ CONSULTANCY`;

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
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" alt="Background" className="w-full h-full object-cover" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Business Registration Services
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Nidhi Company Registration in {cityName || "India"}
                </h1>

                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  A Nidhi Company is a member-based mutual benefit structure recognized under the Companies Act framework and governed primarily by the Nidhi Rules, 2014 (as amended). Its permitted business is narrowly defined: cultivating thrift and savings among members, accepting deposits from members, and lending to members only for mutual benefit.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>

                <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>100% Compliance Assured • NDH-4 Guidance • Expert Support</span>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" alt="Nidhi Company" className="w-full h-auto rounded-lg shadow-lg" />

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-2xl font-bold">≥ 200</div>
                        <div className="text-sm opacity-80">Members Required</div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-2xl font-bold">₹20 Lakh</div>
                        <div className="text-sm opacity-80">Net Owned Funds</div>
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
                { id: 'comparison', icon: FileBarChart, label: 'Comparison' },
                { id: 'documents', icon: FileText, label: 'Documents' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: Gavel, label: 'Penalties' },
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

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Nidhi Company?</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Operationally, a Nidhi is a public company created for mutual benefit finance among its members. The Nidhi Rules require that core objects in the MOA be limited to thrift/savings, member deposits, and member lending only. A Nidhi is structured as a public company, so incorporation follows the Companies Act public-company baseline.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Since April 2022, the entry regime tightened: a newly incorporated public company desirous to be declared as a Nidhi must apply in Form NDH-4 within 120 days of incorporation, and it must satisfy the government's rigorous "fit and proper person" declarations for promoters/directors.
                  </p>
                </div>

                {/* Minimum Requirements Mini-block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">7+ Members (Formation)</p>
                        <p className="text-sm text-gray-600">Post-incorporation, membership must reach ≥200 for the NDH-4 declaration.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">₹10 Lakh Equity Capital</p>
                        <p className="text-sm text-gray-600">Minimum paid-up equity share capital raised to ₹10 lakh (post-2022).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">₹20 Lakh Net Owned Funds</p>
                        <p className="text-sm text-gray-600">Net Owned Funds (NOF) requirement raised to ≥ ₹20 lakh for new applicants.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">3 Directors Baseline</p>
                        <p className="text-sm text-gray-600">Standard minimum for a public company, with ≥1 resident in India.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Membership Protections</h3>
                    <p className="text-gray-600">Membership is restricted exclusively to natural persons (no body corporate/trust). Nominations are permitted for deposits subject to the law.</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Limited Liability</h3>
                    <p className="text-gray-600">A Nidhi is still a company; from incorporation it becomes a body corporate with perpetual succession and capacity to own property and contract.</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Name Suffix Rules</h3>
                  <p className="text-gray-700 mb-4">
                    The Nidhi (Amendment) Rules, 2024 introduced a major sequencing change.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>A company shall not use "Nidhi Limited" in its name <b>unless</b> it is declared as such under Section 406(1).</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Incorporation may proceed with a standard public-company "Limited" name, followed by declaration-driven name alignment once declared.</span>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features and Prudential Safeguards</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                A Nidhi company is distinct strictly for community-based savings and credit within well-defined statutory boundaries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Members-only constraints</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Can only accept deposits from, and lend to, members. Barred from dealing with non-members, body corporates, and trusts.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Deposit-to-NOF ceiling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Total deposits accepted by a Nidhi cannot exceed 20 times its Net Owned Funds (NOF) to ensure financial stability.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Reserve requirement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Must maintain ≥10% of outstanding deposits in unencumbered term deposits with prescribed institutions for liquidity safeguarding.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Secured lending only</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Loans to members must be secured against permitted securities (e.g., gold/silver/jewellery, properties) observing strict rule-based conditions.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Marketing restrictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Strictly cannot advertise to solicit deposits, except through private circulation exclusively to its members detailing mandated disclosures.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">No debt instruments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Cannot issue preference shares, debentures, or other debt instruments; strictly relies on equity capital and member deposits.</p>
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
                    Why choose the Nidhi structure?
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    A Nidhi format is often preferred by localized communities to ensure systematic operation without full NBA licensing.
                  </p>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Member-Trust Signaling: Recognized as a mutual benefit entity promoting a saving culture.",
                    "Defined Legal Framework: Bounded tightly by Nidhi rules giving structured confidence.",
                    "Corporate Continuity: Limited liability combined with perpetual succession.",
                    "Operational Niche: Performs lending without needing a full-blown RBI NBFC license (subject to Nidhi Rules and RBI exemptions)."
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
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

        {/* Comparison Section */}
        <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Nidhi Company vs OPC vs Private Ltd vs LLP</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Compare business structures to identify which formulation matches your mutual-benefit or commercial vision.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Nidhi Company</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">OPC</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">Private Ltd</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium border-r">Legal form</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Public company + Nidhi Rules</TableCell>
                      <TableCell className="border-r">Company (single member)</TableCell>
                      <TableCell className="border-r">Company (2–200 members)</TableCell>
                      <TableCell>Separate entity under LLP law</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Owners</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">7+ at incorporation; then 200+</TableCell>
                      <TableCell className="border-r">1 member</TableCell>
                      <TableCell className="border-r">2+ members</TableCell>
                      <TableCell>2+ partners</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Fundraising</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">No debentures; member-only deposits</TableCell>
                      <TableCell className="border-r">Equity constrained (single)</TableCell>
                      <TableCell className="border-r">Private placements/rights</TableCell>
                      <TableCell>Contribution/profit share</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">FDI permissibility</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Prohibited</TableCell>
                      <TableCell className="border-r">Sector-dependent</TableCell>
                      <TableCell className="border-r">Sector-dependent</TableCell>
                      <TableCell>Sector-dependent</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Tax headline</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Domestic company; 115BAA optional</TableCell>
                      <TableCell className="border-r">Domestic company; 115BAA optional</TableCell>
                      <TableCell className="border-r">Domestic company; 115BAA optional</TableCell>
                      <TableCell>30% (AY 2025–26)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Documents
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required Checklist</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The incorporation integrates SPICe+ documents coupled with post-incorporation NDH-4 declaration needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Directors & Subscribers</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">PAN, ID and Address proofs, DSC, DIN.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Required for SPICe+ Part B framework processing.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Registered Office</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">Proof of address + supporting NOC documents.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Needed for incorporation and Section 12 verification.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Capital Structure Proof</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">Paid-up equity share capital planning declarations.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Minimum paid-up equity post-incorporation is ₹10 lakh.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Nidhi Declaration (NDH-4)</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">Member list (≥200) + NOF proof (≥₹20 lakh) + "fit & proper" declarations.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Mandatory to file within 120 days of incorporation.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Ongoing Nidhi Forms</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">NDH-1 / NDH-2 / NDH-3 compliance.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Subject to updated forms via 2023 Gazette amendment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Registration Process
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Registration Process</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Incorporation first, followed by Nidhi activation and NDH-4 declaration gating.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { step: "1", title: "Name & DSC", desc: "Decide a compliant name and apply for Digital Signatures (DSCs)." },
                { step: "2", title: "Incorporate Public Company", desc: "File SPICe+ Part B (DIN/PAN/TAN) + linked forms (eMoA/eAoA/INC-9/AGILE-Pro-S)." },
                { step: "3", title: "Capitalization & Onboarding", desc: "Reach capital thresholds and onboard ≥200 members. Build Net Owned Funds to ≥₹20 lakh." },
                { step: "4", title: "Apply for Declaration (NDH-4)", desc: "File NDH-4 within 120 days limit; Central Government decides within 45 days (deemed approval if silent)." },
                { step: "5", title: "Commencement Gating", desc: "Filing form 20A tying up the NDH-4 approval/commencement dependencies." },
                { step: "6", title: "Begin Operations", desc: "Accept member deposits, lend to members under rule limits, and maintain unencumbered term deposits." }
              ].map((process, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center border-l-4 border-dbiz-navy">
                    <div className="p-6 bg-dbiz-navy/5 h-full flex items-center justify-center min-w-[120px]">
                      <span className="text-3xl font-bold text-dbiz-navy">Step {process.step}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-dbiz-navy mb-2">{process.title}</h3>
                      <p className="text-gray-700">{process.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Post-Incorporation
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance & Timeline</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Nidhi Companies endure strict public-company baselines and Nidhi-specific bounds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">NDH Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Must file NDH-1 / NDH-2 / NDH-3 as prescribed under the updated 2023 Gazette amendment mapping (e.g. half-yearly returns).</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Annual ROC Filings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Being public companies, they must hold AGMs and undergo statutory audit and annual ROC filings. Small company reliefs do not apply.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Deposit Constraints</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Max deposits limited to 20× NOF. Applications must mandate risk disclosures ("not insured, no government guarantee").</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Auditor Rotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Limits on continuous auditor tenure specifically prescribed within the Nidhi Rules distinct from generic private company rules.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">DIR-3 KYC Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Effective 31 March 2026, DIN KYC becomes triennial (every three years) with event-based updates inside 30 days for contact changes.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Tax Obligations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Taxed as domestic companies, with an option to select the 115BAA concessional 22% regime (+ surcharge/cess) upon filing Form 10-IC.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why D BIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> Our Scope of Service
                </h3>
                <ul className="space-y-3">
                  {[
                    "Name and object clause alignment to Nidhi constraints",
                    "SPICe+ drafting, incorporation, and linked forms",
                    "NDH-4 readiness plan and NOF calculation strategies",
                    "Compliance mapping for NDH-1/2/3 returns",
                    "Governance and disclosure preparation for deposit taking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What We Need From You
                </h3>
                <ul className="space-y-3">
                  {[
                    "KYC documents for at least 7 original subscribers and 3 directors",
                    "A roadmap to reach 200 members and ₹20 Lakh NOF effectively",
                    "Address proof for registered office setup"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

                {/* Deadlines Section */}
                <div id="deadlines" className="py-20 scroll-mt-32">
                  <div className="consultancy-section-card animate-on-scroll">
                    <p className="consultancy-label">Timelines</p>
                    <h4 className="consultancy-heading">Nidhi Statutory Deadlines</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[
                        { title: "Form NDH-4", due: "Within 120 Days", desc: "Mandatory application for declaration as a Nidhi company after incorporation." },
                        { title: "Form NDH-1", due: "90 Days from FY Close", desc: "Statutory return detailing membership and Net Owned Funds (NOF) compliance." },
                        { title: "Form NDH-3", due: "Within 30 Days (Half-Yearly)", desc: "Half-yearly return to be filed with the ROC to ensure ongoing compliance with Nidhi Rules." },
                        { title: "Annual MCA Filings", due: "AOC-4 & MGT-7", desc: "Standard public company filings for financial statements and annual returns." }
                      ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all">
                          <Clock className="h-6 w-6 text-dbiz-teal shrink-0 mt-1" />
                          <div>
                            <p className="font-bold text-dbiz-navy text-lg">{item.title}</p>
                            <p className="text-dbiz-teal font-bold text-sm mb-1">{item.due}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Penalties Section */}
                <div id="penalties" className="py-20 bg-gray-50/50 scroll-mt-32 rounded-[3rem]">
                  <div className="consultancy-section-card animate-on-scroll">
                    <p className="consultancy-label">Legal Risks</p>
                    <h4 className="consultancy-heading">Penalties & Consequences</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "NDH-4 Rejection", desc: "Failure or rejection of NDH-4 bars the company from accepting any further deposits from members." },
                        { title: "Rule Violation Fine", desc: "Non-compliance with Nidhi Rules attracts a penalty of up to ₹5,000 per violation." },
                        { title: "Continuing Default", desc: "A further fine of ₹500 per day is levied for defaults that continue after the initial penalty." },
                        { title: "Insolvency Risk", desc: "Breach of deposit-to-NOF ratios or reserve requirements can lead to mandatory winding up." }
                      ].map((item, i) => (
                        <div key={i} className="penalty-inner-card">
                           <div className="penalty-header">
                              <div className="penalty-dot"></div>
                              <span className="penalty-title">{item.title}</span>
                           </div>
                           <p className="penalty-desc text-gray-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-16 text-center animate-on-scroll">
                   <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
                   <p className="max-w-4xl mx-auto text-[19.125px] text-gray-700 leading-relaxed font-medium">
                     With deep expertise in Nidhi Rules and MCA regulations, DBIZ CONSULTANCY is a trusted partner for mutual benefit companies. We handle the entire incorporation and NDH-4 declaration process—so you can foster thrift and savings with confidence.
                   </p>
                </div>
        <section id="faqs" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on Nidhi Company</h2>
              <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {nidhiCompanyFaq.map((faq, index) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default NidhiCompanyPage;