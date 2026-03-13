
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
  Leaf,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { producerCompanyFaq } from "@/data/producerCompanyFaq";

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

// Producer Company Registration Page - SEO Optimized Feb 2026
const ProducerCompanyPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
  const seoTitle = location === undefined ? "Producer Company Registration in India | DBIZ CONSULTANCY" : `Producer Company Registration in ${cityName} | DBIZ CONSULTANCY`;

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1595822396116-43dd7c0f1627" alt="Background" className="w-full h-full object-cover" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Agriculture & Allied Business Registrations
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Producer Company Registration in {cityName || "India"}
                </h1>

                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  A Producer Company is a special form of company law entity created for primary producers (farmers, artisans, handloom/handicraft producers, etc.) to collectively produce, process, market, and access finance—while operating as a body corporate with limited liability.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm font-medium text-white/80">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Quick Registration</span>
                  </div>
                  <div className="hidden sm:block text-white/40">•</div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>100% Compliance Assured</span>
                  </div>
                  <div className="hidden sm:block text-white/40">•</div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Expert Support</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img src="https://images.unsplash.com/photo-1592982537447-6f2aa6f2dc04" alt="Producer Company Registration" className="w-full h-auto rounded-lg shadow-lg" />

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-2xl font-bold">10+</div>
                        <div className="text-sm opacity-80">Producers Min.</div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-2xl font-bold">5-15</div>
                        <div className="text-sm opacity-80">Directors</div>
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

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('comparison')}>
                <FileBarChart className="mr-2 h-4 w-4" /> Comparison
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('documents')}>
                <FileText className="mr-2 h-4 w-4" /> Documents
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('process')}>
                <ArrowRight className="mr-2 h-4 w-4" /> Process
              </div>

              <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('compliance') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('compliance')}>
                <Clock className="mr-2 h-4 w-4" /> Compliance
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

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Producer Company?</h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Under Section 378A, a Producer Company is a body corporate registered with specific objects in mind: procurement, processing, marketing, selling, or export of members' primary produce, as well as education, mutual assistance, and financing/credit facilities for its members.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Legally, it is formed by 10+ individual producers or 2+ Producer Institutions. After incorporation, there is no statutory cap on the number of members, giving it massive growth potential among agricultural or artisan communities, while explicitly barring it from becoming a public limited company.
                  </p>
                </div>

                {/* Minimum Requirements Mini-block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">10+ Individuals or 2+ Institutions</p>
                        <p className="text-sm text-gray-600">Must be individual "producers" or Producer Institutions (or a combination).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">No Maximum Member Limit</p>
                        <p className="text-sm text-gray-600">Unlike typical private companies, there's no cap on total members after incorporation.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">5 to 15 Directors</p>
                        <p className="text-sm text-gray-600">Mandatory governance framework ensuring broad representation among producers.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-dbiz-navy">Equity-Only Capital</p>
                        <p className="text-sm text-gray-600">Capital must consist of equity shares only. Every subscriber must take at least 1 share.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Producer-Only Focus</h3>
                    <p className="text-gray-600">Designed purely for primary producers, aligning incentives through patronage-linked shareholding and distributions (patronage bonus, withheld prices).</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Limited Liability Entity</h3>
                    <p className="text-gray-600">Upon registration, it becomes a body corporate with perpetual succession, and members’ liability is strictly limited to any unpaid amount on shares held.</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Name Suffix Rules</h3>
                  <p className="text-gray-700 mb-4">
                    Strict terminology applies to ensure corporate identity.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>A Producer Company’s name must end with "<b>Producer Company Limited</b>" (mandatory suffix in the MOA).</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Misuse of this name suffix by non-Producer Companies is actively penalized under the Act.</span>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Producer Companies operate similarly to private companies but with powerful statutory carve-outs designed to safeguard producers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Special Private Carve-out</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Treated as a private limited company except that it has no limit on the number of members. It cannot become a public limited company.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Equity-only Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Share capital consists of equity shares only. Shares are generally not transferable, barring specific transfers to active members via Board approval.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Membership Nomination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Nominations are mandatory within 3 months of joining. If a nominee isn't a producer, shares are surrendered back to the company at par value.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Active Member Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Voting rights can be restricted solely to "active members." Loss of producer qualification triggers mandatory removal per statutory framework.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Clock className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Meeting Cadence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Board meetings must be held at least once every 3 months (min 4 times a year). The first AGM must happen within 90 days from incorporation.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Professional Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Mandatory appointment of a full-time Chief Executive Officer (CEO) by the Board, structuring professional operations alongside farmer leadership.</p>
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
                    Why incorporate a Producer Company?
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    It beautifully combines corporate credibility with producer-centric mutuality.
                  </p>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Enables collective procurement, processing, marketing, and the ultimate export of members' produce under professional management.",
                    "Provides structured access to member finance support, including credit facilities, member loans, and advances within defined limitations.",
                    "Aligns financial incentives clearly through patronage-linked shareholding and specialized distributions (e.g. withheld price mechanisms).",
                    "A massive advantage in operational continuity and scale without the 200-member ceiling normally associated with a traditional Private Limited Company."
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Producer Company vs OPC vs Private Ltd vs LLP</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Determine if your agricultural or primary produce venture demands the Producer Company formulation.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Producer Company</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">OPC</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                      <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium border-r">Owners/members</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Min 10 producers (or 2 institutions); Max: no limit</TableCell>
                      <TableCell className="border-r">1 member</TableCell>
                      <TableCell className="border-r">2–200 members</TableCell>
                      <TableCell>2+ partners</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Directors Mgmt</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">5–15 directors; ≥1 resident director</TableCell>
                      <TableCell className="border-r">Min 1 director</TableCell>
                      <TableCell className="border-r">Min 2 directors</TableCell>
                      <TableCell>Designated partners</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Capital Form</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Equity shares only; restricted transfer</TableCell>
                      <TableCell className="border-r">Share capital</TableCell>
                      <TableCell className="border-r">Share capital</TableCell>
                      <TableCell>Contribution</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Fund-raising</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Cannot become public; shares non-transferable mostly</TableCell>
                      <TableCell className="border-r">Limited</TableCell>
                      <TableCell className="border-r">Private placement</TableCell>
                      <TableCell>Private funding</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium border-r">Tax headline</TableCell>
                      <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Taxed as company (115BAA 22% optional)</TableCell>
                      <TableCell className="border-r">Company tax</TableCell>
                      <TableCell className="border-r">Company tax</TableCell>
                      <TableCell>Taxed as firm</TableCell>
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
                Documentation heavily emphasizes proving the "primary producer" status of the initial founding members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Producer Eligibility</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">Proof of “producer” activity / linkage to primary produce.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Essential proof per producer definition and “primary produce” constraints.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Member & Director KYC</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">PAN, ID, Address proof, photos, email/mobile details.</p>
                  <p className="text-sm text-gray-500 italic mt-2">For at least 10 producers and ~5 designated directors via SPICe+.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">MOA & AOA</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">Articles must draft specific mutual assistance principles.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Fund-raising limits, rights and specific Producer Company provisions.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Registered Office</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">Ownership proof or rent agreement + NOC + recent utility bill.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Companies Act basic incorporation and Section 12 requirements.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">Bank & Capital Post-Inc</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">INC-20A (Commencement) and proper proof of received subscription money.</p>
                  <p className="text-sm text-gray-500 italic mt-2">Critical path item within first 180 days to begin operations legally.</p>
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
                Navigating specific Producer definitions before locking in the SPICe+ documents.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { step: "1", title: "Name Reservation", desc: "Select a compliant name mandatorily ending in 'Producer Company Limited'." },
                { step: "2", title: "DSC & DIN Readiness", desc: "Obtain DSCs for the subscribers; DINs are typically applied within the SPICe+ form." },
                { step: "3", title: "Drafting Specialized MOA/AOA", desc: "MOA must specifically declare share capital configurations. AOA must detail mutual assistance framework." },
                { step: "4", title: "Incorporation Filing", desc: "Compile and file SPICe+ Part B framework with supporting eMoA/eAoA/INC-9." },
                { step: "5", title: "Certificate of Incorporation", desc: "ROC issues the COI, confirming the members as a legally defined body corporate." },
                { step: "6", title: "Early Governance & INC-20A", desc: "Appoint CEO, secure bank account, deposit share subscriptions, and file INC-20A before transacting." }
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
                Producer Companies operate essentially as strict private companies but lack many of the leniencies applied to single individuals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Meeting Rigidity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Board meetings at least quarterly (min 4 per year). Your very first AGM must be concluded within 90 days of the incorporation date.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Internal Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Internal audit by a Chartered Accountant is heavily emphasized and fully mandatory at intervals/manner strictly specified in the Articles.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Annual ROC Filings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Filings are identical to private entities: proceedings, audited accounts, and the annual return must be filed within 60 days of your AGM.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Statutory Auditor limits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Must appoint an initial auditor within the first 30 days (by the board). Auditor appointment notices flow closely thereafter to Registrar.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">DIR-3 KYC Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Starting 31 March 2026, KYC intimations via DIR-3 switch to once every third consecutive FY, with updates inside 30 days when required.</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-dbiz-navy font-bold text-lg">Funding & Deposits Restrictions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">General deposits aren't allowed indiscriminately; borrowing limits must be hard-coded directly into the AOA constitutional architecture.</p>
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
                Why DBIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why DBIZ CONSULTANCY?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What We Handle (End-to-End)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Document validation aligning with stringent 'Producer Company' requirements",
                    "Customizing MOA/AOA clauses specifically to define funds, nomination structures, and member qualifications",
                    "SPICe+ preparation and flawless filing workflow",
                    "Post-incorporation setup including first AGM structuring, internal audit scheduling, and commencement filing",
                    "Tax strategy consulting including optimal usage of 115BAA framework"
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
                  <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                </h3>
                <ul className="space-y-3">
                  {[
                    "Standard KYC proofs for all 10+ producers and 5+ directors",
                    "Solid verification proving 'producer' or agricultural activity linkages",
                    "A valid registered office address document and NOC",
                    "Completed capital subscription planning mapped to your members"
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

        {/* FAQs Section */}
        <section id="faqs" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on Producer Company</h2>
              <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {producerCompanyFaq.map((faq, index) => (
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
    </div>
  );
};

export default ProducerCompanyPage;