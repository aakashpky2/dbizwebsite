
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle, AlertCircle } from "lucide-react";
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
  const seoTitle = location === undefined ? "Partnership Firm Registration in India | DBIZ CONSULTANCY" : `Partnership Firm Registration in ${cityName} | DBIZ CONSULTANCY`;

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
                Partnership Firm Registration in {cityName || "India"}
              </h1>

              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                DBIZ CONSULTANCY provides comprehensive Partnership Firm Registration services across {cityName || "India"}, including Partnership Deed drafting, stamp duty compliance, Registrar of Firms (ROF) filing, PAN registration, GST registration, and ongoing tax and regulatory support.
              </p>

              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Whether you are starting a trading business, professional practice, family enterprise, or small-scale venture, we ensure your partnership is legally structured, properly documented, and fully compliant.
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
                <span>Quick Registration • Legally Structured Documentation • Expert Compliance Support</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" alt="Partnership Firm" className="w-full h-auto rounded-lg shadow-lg" />

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
                  A Partnership Firm is a business structure formed when two or more individuals agree to carry on a business together and share its profits and losses. It is governed by the Indian Partnership Act, 1932.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Unlike a company, a partnership firm does not have a separate legal identity distinct from its partners. The firm and its partners are legally considered the same entity. The partners jointly own the business and are collectively responsible for its operations, liabilities, and obligations.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
                  Although registration of a partnership firm is not mandatory under the law, an unregistered firm suffers significant legal disadvantages — including restrictions on filing suits to enforce contractual rights. Therefore, formal registration with the Registrar of Firms is strongly recommended to ensure enforceability, banking credibility, and structured governance.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">This structure is widely used for:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {["Small and medium enterprises", "Professional firms (CA, CS, Legal, Architects, Consultants)", "Family businesses", "Trading and distribution businesses", "Service-based enterprises"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minimum Requirements Mini-block */}
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">2 Partners (Minimum)</p>
                      <p className="text-sm text-gray-600">A partnership requires at least two persons. The maximum number of partners is 50.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">No Minimum Capital</p>
                      <p className="text-sm text-gray-600">No statutory minimum capital requirement. Capital contribution is mutually decided.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Partnership Deed</p>
                      <p className="text-sm text-gray-600">A written agreement outlining rights, duties, capital, and profit-sharing makes it essential.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Registered Office</p>
                      <p className="text-sm text-gray-600">A valid business address in India must be provided.</p>
                    </div>
                  </div>
                  <div className="flex items-start sm:col-span-2">
                    <AlertCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Unlimited Liability</p>
                      <p className="text-sm text-gray-600">Partners are personally liable for the debts and obligations of the firm.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Indian Partnership Act, 1932</h3>
                <p className="text-gray-700 mb-4">
                  Section 4 of the Indian Partnership Act, 1932 defines Partnership as:
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-dbiz-teal italic text-gray-800 mb-4 shadow-sm">
                  “The relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all.”
                </div>

                <p className="font-medium text-dbiz-navy mb-2">This highlights four essential elements:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Agreement between two or more persons</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Business activity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Profit-sharing arrangement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mutual agency (each partner acts as agent for others)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600">The concept of mutual agency distinguishes partnership from other business forms.</p>

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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Partnership Firm</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              DBIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Mutual Agency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Every partner has the authority to act on behalf of the firm and bind other partners through business transactions conducted within the scope of the business.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <AlertCircle className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Unlimited Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Partners are personally liable for the debts of the firm. If business assets are insufficient, personal assets can be used to satisfy obligations.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Shared Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Unless otherwise agreed in the partnership deed, all partners have equal rights in the management of the business.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Flexible Internal Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The deed allows customization of profit-sharing ratios, capital contribution, roles, responsibilities, admission rules, and dispute resolution.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">No Separate Legal Entity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The firm does not have independent legal existence separate from its partners. Legal action involving the firm directly affects partners.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-3">
                <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                <CardTitle className="text-xl text-dbiz-navy">Minimal Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">There are no mandatory annual ROC filings, board meetings, or AGMs required under the Partnership Act.</p>
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
                  Benefits of a Registered Partnership Firm
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  DBIZ CONSULTANCY helps businesses leverage these advantages for maximum growth and protection.
                </p>

                <div className="hidden md:block mt-8">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Business Growth" className="rounded-lg shadow-lg max-w-sm" />
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Ease of Formation", text: "The formation process is straightforward and does not require complex statutory approvals like companies or NBFCs." },
                  { title: "Lower Compliance Cost", text: "Compared to companies, partnership firms have significantly reduced compliance obligations and administrative overhead." },
                  { title: "Operational Flexibility", text: "Partners can quickly make decisions without formal board structures." },
                  { title: "Tax Simplicity", text: "Partnership firms are taxed at a flat 30% under the Income Tax Act, plus surcharge and cess, providing clarity in tax planning." },
                  { title: "Suitable for Small & Professional Businesses", text: "Ideal for consultants, traders, service providers, and family-owned businesses where mutual trust exists." },
                  { title: "Banking Recognition", text: "Registered firms enjoy improved credibility when opening bank accounts or applying for loans." },
                ].map((item, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <p className="text-dbiz-navy font-bold text-lg mb-1">{item.title}</p>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                </div>)}
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

          <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                    <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Partnership Firm</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Sole Proprietorship</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border-r">Liability</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Unlimited</TableCell>
                    <TableCell className="border-r">Limited</TableCell>
                    <TableCell className="border-r">Limited</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Legal Entity</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Not Separate</TableCell>
                    <TableCell className="border-r">Separate</TableCell>
                    <TableCell className="border-r">Separate</TableCell>
                    <TableCell>Not Separate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Registration</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Optional (recommended)</TableCell>
                    <TableCell className="border-r">Mandatory</TableCell>
                    <TableCell className="border-r">Mandatory</TableCell>
                    <TableCell>Not Required</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Compliance</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Minimal</TableCell>
                    <TableCell className="border-r">High</TableCell>
                    <TableCell className="border-r">Moderate</TableCell>
                    <TableCell>Minimal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Tax Rate</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">30%</TableCell>
                    <TableCell className="border-r">Corporate tax regime</TableCell>
                    <TableCell className="border-r">30%</TableCell>
                    <TableCell>Individual Slab</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Governance</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Deed-Based</TableCell>
                    <TableCell className="border-r">Board & Shareholders</TableCell>
                    <TableCell className="border-r">Partners</TableCell>
                    <TableCell>Single Owner</TableCell>
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
              DBIZ CONSULTANCY assists clients in {cityName} with collecting and preparing all required documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Indian Partners</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Identity Proof</p>
                    <p className="text-gray-600 mt-1">PAN Card (Mandatory)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Aadhaar / Passport / Voter ID / Driving License</p>
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
                <h3 className="text-xl font-bold">For Foreign Partners</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Passport</p>
                    <p className="text-gray-600 mt-1">(Notarised & Apostilled)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Overseas Address Proof</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">FEMA Documentation</p>
                    <p className="text-gray-600 mt-1">compliance documentation (if applicable)</p>
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
                    <p className="text-gray-600 mt-1">(if rented)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Property Documents</p>
                    <p className="text-gray-600 mt-1">Ownership Documents (if owned)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Utility Bills</p>
                    <p className="text-gray-600 mt-1">(within 2 months)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 mt-4">
              <h3 className="text-2xl font-bold text-dbiz-navy mb-6">Partnership Deed Must Clearly Include</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Firm Name", "Nature of Business", "Principal Place of Business",
                  "Capital Contribution", "Profit & Loss Sharing Ratio", "Duties and Powers of Partners",
                  "Remuneration & Interest Clauses", "Admission & Retirement Rules", "Dissolution Clause"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Partnership Firm Registration Process</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Drafting the Partnership Deed",
                desc: "The deed is drafted according to agreed terms. Stamp duty must be paid as per the relevant State Stamp Act.",
              },
              {
                step: "2",
                title: "Execution of Deed",
                desc: "All partners sign the deed before witnesses. Notarisation is recommended.",
              },
              {
                step: "3",
                title: "PAN Application",
                desc: "Apply for PAN of the partnership firm under Income Tax Act.",
              },
              {
                step: "4",
                title: "Registration with Registrar of Firms",
                desc: "Submit application along with Partnership Deed, Form 1, Affidavit, and Prescribed fee. Upon approval, the firm receives a Registration Certificate.",
              },
              {
                step: "5",
                title: "Bank Account Opening",
                desc: "Open current account in the name of the firm.",
              },
              {
                step: "6",
                title: "GST Registration (If Applicable)",
                desc: "Mandatory if turnover exceeds prescribed threshold.",
              }
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

          <div className="mt-12">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-dbiz-teal to-dbiz-teal/90 p-4 text-white">
                <h3 className="text-xl font-bold">State-Wise Stamp Duty & Registration Fees</h3>
                <p className="text-white/90 text-sm">Stamp duty on Partnership Deed varies by state and capital contribution.</p>
              </div>
              <div className="overflow-x-auto p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold text-dbiz-navy">State</TableHead>
                      <TableHead className="font-bold text-dbiz-navy">Approx Stamp Duty</TableHead>
                      <TableHead className="font-bold text-dbiz-navy">ROF Registration Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Kerala</TableCell>
                      <TableCell>₹1,000 – ₹2,000</TableCell>
                      <TableCell>₹500 – ₹1,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tamil Nadu</TableCell>
                      <TableCell>₹300 – ₹1,000</TableCell>
                      <TableCell>₹500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Karnataka</TableCell>
                      <TableCell>₹500 – ₹2,000</TableCell>
                      <TableCell>₹500 – ₹1,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Maharashtra</TableCell>
                      <TableCell>0.1% of capital (capped)</TableCell>
                      <TableCell>₹1,000+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Delhi</TableCell>
                      <TableCell>₹200 – ₹500</TableCell>
                      <TableCell>₹1,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gujarat</TableCell>
                      <TableCell>0.5% of capital (capped)</TableCell>
                      <TableCell>₹500 – ₹1,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">Exact duty depends on state stamp laws and capital amount.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Compliance */}
      <section className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Compliance
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance for Partnership Firms</h2>
            <p className="text-lg text-gray-600 mb-2">No AGM, Board Meetings, or ROC filings required.</p>
          </div>

          <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="py-4 text-dbiz-navy font-bold">Aspect</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Compliance Requirement</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Frequency</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Why It's Important</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border-r">Income Tax Return</TableCell>
                    <TableCell className="border-r">ITR-5 Filing</TableCell>
                    <TableCell className="border-r">Annually</TableCell>
                    <TableCell>Mandatory tax compliance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Tax Audit</TableCell>
                    <TableCell className="border-r">If turnover exceeds ₹1 crore (business)</TableCell>
                    <TableCell className="border-r">Annually</TableCell>
                    <TableCell>Financial accuracy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">GST Returns</TableCell>
                    <TableCell className="border-r">If registered</TableCell>
                    <TableCell className="border-r">Monthly/Quarterly</TableCell>
                    <TableCell>Avoid penalties</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">TDS Returns</TableCell>
                    <TableCell className="border-r">If applicable</TableCell>
                    <TableCell className="border-r">Quarterly</TableCell>
                    <TableCell>Income Tax compliance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Change in Partners</TableCell>
                    <TableCell className="border-r">Inform ROF</TableCell>
                    <TableCell className="border-r">As required</TableCell>
                    <TableCell>Legal validity</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <h3 className="text-2xl font-bold text-dbiz-navy md:col-span-3 mb-2 text-left">Post-Registration Compliance Timeline</h3>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm">
              <div className="text-blue-600 font-bold text-xl mb-2">30 Days</div>
              <div className="font-medium text-gray-800">PAN + Bank Account</div>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-xl p-6 shadow-sm">
              <div className="text-green-600 font-bold text-xl mb-2">Annual Cycle</div>
              <div className="font-medium text-gray-800">ITR-5 Filing</div>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 shadow-sm">
              <div className="text-purple-600 font-bold text-xl mb-2">As Applicable</div>
              <div className="font-medium text-gray-800">GST / TDS Compliance</div>
            </div>
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why DBIZ CONSULTANCY for Partnership Firm Registration?</h2>

            <p className="text-lg text-gray-600">Registering a partnership firm requires precision in deed drafting, stamp duty compliance, and proper procedural filing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What DBIZ Handles
              </h3>
              <ul className="space-y-3">
                {[
                  "Partnership Deed Drafting",
                  "State-wise Stamp Duty Calculation",
                  "Registrar of Firms Filing",
                  "PAN & GST Registration",
                  "Amendment & Reconstitution",
                  "Ongoing Tax Compliance"
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
                  "Partner KYC Documents",
                  "Office Address Proof",
                  "Capital Contribution Details",
                  "Business Activity Description"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-lg text-dbiz-navy font-semibold italic">"We ensure your partnership is legally structured, enforceable, and fully compliant from day one."</p>
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on Partnership Firm Registration (India)</h2>
            <p className="text-sm text-gray-500 mb-2 italic">Last Updated: Feb 2026</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {partnershipFaq.map((faq, index) => (
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

export default PartnershipPage;
