

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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
  Phone,
  MessageCircle,
  CheckCheck,
  ClipboardList,
  FileCog,
  BookOpen,
  CreditCard,
  Search,
  ArrowDownCircle,
  File,
  Award,
  AlertTriangle,
  HelpCircle,
  Gavel
} from "lucide-react";
import { Link } from "react-router-dom";
import { privateLimitedContent } from "@/data/serviceContent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const PrivateLimitedPage = () => {
  const params = useParams();
  const location = params?.location as string;

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  if (location && !isValidLocation) {
    return <NotFound />;
  }

  // If location is provided, we're on a city-specific page
  const cityName = location
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location)
    : "";

  const seoTitle = location === undefined
    ? "Private Limited Company Registration | D BIZ CONSULTANCY"
    : `Private Limited Company Registration${cityName ? ` in ${cityName}` : ""} | D BIZ CONSULTANCY`;

  // Function to scroll to features section
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features-section');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={seoTitle} />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Private Limited Company Registration</h1>
              <p className="text-lg opacity-90 mb-6">
                {privateLimitedContent.description}
              </p>

              {location !== undefined && (
                <div className="inline-block bg-dbiz-teal/20 px-4 py-2 rounded-md text-sm font-medium mb-6">
                  <Link to="/private-limited" className="text-dbiz-teal hover:underline">
                    View our services
                  </Link>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                      <Phone className="mr-2 h-4 w-4" /> Contact Us Today
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 p-0">
                    <ContactOptions />
                  </PopoverContent>
                </Popover>

                <Button
                  onClick={scrollToFeatures}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                </Button>
            </div>
          </div>
        </div>
      </section>
        {/* Sticky Navigation */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'features', icon: Shield, label: 'Features' },
                { id: 'benefits', icon: TrendingUp, label: 'Benefits' },
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
                    activeSection === item.id
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      const headerOffset = 160;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                    setActiveSection(item.id);
                  }}
                >
                  <item.icon className={`mr-1.5 h-3.5 w-3.5 ${activeSection === item.id ? 'text-white' : 'text-dbiz-teal'}`} /> 
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center">What Is a Private Limited Company?</h2>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-700 mb-4">
                A private limited company (commonly abbreviated as Pvt Ltd) is considered a separate legal entity from its owners, offering a secure framework for operations while safeguarding the personal assets of its members. This business structure, governed by the Companies Act, 2013, is popular among entrepreneurs and small to medium-sized businesses (SMEs) for its combination of limited liability protection, ownership control, and scalability.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike public companies, a private limited company restricts the transfer of shares and operates with a focused group of stakeholders. This makes it ideal for businesses seeking operational independence, confidentiality, and long-term growth.
              </p>
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-dbiz-navy mt-4">
                <h3 className="text-lg font-semibold text-dbiz-navy mb-2">Definition as per the Companies Act, 2013</h3>
                <p className="text-gray-700">
                  Section 2(68) of the Companies Act, 2013, defines a Private Limited Company as an entity that:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
                  <li>Restricts the Transfer of Shares</li>
                  <li>Limits the Number of Members (maximum of 200 members)</li>
                  <li>Prohibits Public Invitations to subscribe to its shares or debentures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features-section" className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Key Features of a Private Limited Company</h2>
            <p className="section-subtitle text-center">
              D BIZ CONSULTANCY helps entrepreneurs {location ? `across ${cityName}` : ""} understand and leverage these key features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader className="pb-3">
                  <Shield className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Limited Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Shareholders' liability is limited to their investment, protecting personal assets from business debts.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Building2 className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Separate Legal Entity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">The company can own assets, enter contracts, and operate independently from its owners.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Membership Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Requires at least 2 members and allows up to 200 members, ideal for small to medium businesses.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <FileBarChart className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">No Minimum Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">No mandatory minimum capital investment required to register a private limited company.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <FileText className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Tax Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Various tax exemptions available for startups and small companies under different schemes.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Perpetual Succession</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">The company continues to exist regardless of changes in ownership or member status.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center">
              Benefits of a Private Limited Company {location !== undefined ? `in ${cityName}` : ""}
            </h2>
            <p className="section-subtitle text-center">
              D BIZ CONSULTANCY helps businesses {location ? `in ${cityName}` : ""} leverage the practical advantages for maximum growth and protection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {privateLimitedContent.importance.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure Comparison Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Difference Between Business Structures</h2>
            <p className="section-subtitle text-center">
              Understand why Private Limited is often the preferred choice for businesses{location ? ` in ${cityName}` : ""}.
            </p>

            <div className="mt-10 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Feature</TableHead>
                    <TableHead className="bg-dbiz-navy/10 font-bold">Private Limited</TableHead>
                    <TableHead>LLP</TableHead>
                    <TableHead>Sole Proprietorship</TableHead>
                    <TableHead>Partnership</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Liability</TableCell>
                    <TableCell className="bg-dbiz-navy/5">Limited to shares</TableCell>
                    <TableCell>Limited to contribution</TableCell>
                    <TableCell>Unlimited</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Legal Entity</TableCell>
                    <TableCell className="bg-dbiz-navy/5">Separate entity</TableCell>
                    <TableCell>Separate entity</TableCell>
                    <TableCell>Not separate</TableCell>
                    <TableCell>Not separate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ownership</TableCell>
                    <TableCell className="bg-dbiz-navy/5">2-200 shareholders</TableCell>
                    <TableCell>2+ partners</TableCell>
                    <TableCell>Single owner</TableCell>
                    <TableCell>2-50 partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tax Rate</TableCell>
                    <TableCell className="bg-dbiz-navy/5">Corporate tax (22-30%)</TableCell>
                    <TableCell>Flat 30%</TableCell>
                    <TableCell>Individual income tax</TableCell>
                    <TableCell>Individual income tax</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Compliance</TableCell>
                    <TableCell className="bg-dbiz-navy/5">High</TableCell>
                    <TableCell>Moderate</TableCell>
                    <TableCell>Minimal</TableCell>
                    <TableCell>Minimal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Best For</TableCell>
                    <TableCell className="bg-dbiz-navy/5">Startups, scalable businesses</TableCell>
                    <TableCell>Small businesses</TableCell>
                    <TableCell>Freelancers, small traders</TableCell>
                    <TableCell>Family businesses</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-title text-center">Documents Required</h2>
            <p className="section-subtitle text-center">
              D BIZ CONSULTANCY assists clients {location ? `in ${cityName}` : ""} with collecting and preparing all required documentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">For Domestic Nationals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Identity Proof:</strong> PAN Card (Mandatory), Passport, Aadhar Card, Voter ID</p>
                  <p><strong>Address Proof:</strong> Utility Bills, Bank Statements (dated within last 2 months)</p>
                  <p><strong>Photographs:</strong> Recent passport-sized photographs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">For Foreign Nationals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Identity Proof:</strong> Passport (Mandatory)</p>
                  <p><strong>Address Proof:</strong> Driver's License, Bank Statement, or Residence Card</p>
                  <p><strong>Photographs:</strong> Recent passport-sized photographs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">For Company Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Memorandum of Association (MOA)</strong></p>
                  <p><strong>Articles of Association (AOA)</strong></p>
                  <p><strong>Declaration and Consent Forms</strong></p>
                  <p><strong>Digital Signature Certificate (DSC)</strong></p>
                  <p><strong>Director Identification Number (DIN)</strong></p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Registered Office Proof</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Utility Bill:</strong> Electricity bill or property tax receipt not older than 30 days</p>
                  <p><strong>Rental Agreement or NOC:</strong> Agreement or No Objection Certificate from property owner</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Registration Process Section - NEW */}
        <section id="process" className="py-20 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Registration Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 text-center mx-auto block w-full">Step-by-Step Private Limited Company Registration Process</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Private Limited Company offers limited liability protection to its shareholders, making it one of the most popular business structures for entrepreneurs{location ? ` in ${cityName}` : ""}. The registration process requires submitting key documents, adhering to compliance regulations, and opening a current account for financial transactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">1</div>
                  <h3 className="text-xl font-bold text-white">Obtain a Digital Signature Certificate (DSC)</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A Digital Signature Certificate (DSC) is mandatory for filing electronically signed documents with the Ministry of Corporate Affairs (MCA). The DSC ensures the authenticity of all filings and transactions.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our team will assist you in procuring your DSC from a certified authority on your behalf.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">2</div>
                  <h3 className="text-xl font-bold text-white">File the SPICe+ Form</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The SPICe+ form (Simplified Proforma for Incorporating Company Electronically Plus) is an integrated online form that simplifies the incorporation process by including multiple services:
                  </p>
                  <ul className="space-y-4 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700"><strong>Part A:</strong> For name reservation.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700"><strong>Part B:</strong> For incorporation, DIN allocation, PAN, TAN, GST registration, and more.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700"><strong>AGILE-PRO-S (INC-35):</strong> Linked form covering GSTIN, ESIC, EPFO, professional tax, bank account opening, and Shops & Establishment registration.</span>
                    </li>
                  </ul>
                  <div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                      <div className="ml-3">
                        <p className="font-bold text-dbiz-navy text-sm">REMOVED</p>
                        <p className="text-xs text-gray-600">Our team ensures accurate form filing with all required details to avoid delays in processing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">3</div>
                  <h3 className="text-xl font-bold text-white">Draft and File the MOA and AOA</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The two foundational documents of your company are:
                  </p>
                  <ul className="space-y-4 mb-6 flex-grow">
                    <li className="flex items-start">
                      <File className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700"><strong>Memorandum of Association (MOA):</strong> Defines the company's objectives and operational scope.</span>
                    </li>
                    <li className="flex items-start">
                      <File className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700"><strong>Articles of Association (AOA):</strong> Outlines the internal rules and governance structure.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We will prepare and file these documents, ensuring all vital clauses are accurately included to reflect your company's purpose and management structure.
                  </p>
                  <div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                      <div className="ml-3">
                        <p className="font-bold text-dbiz-navy text-sm">REMOVED</p>
                        <p className="text-xs text-gray-600">Our legal experts customize these documents to suit your specific business needs and future growth plans.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">4</div>
                  <h3 className="text-xl font-bold text-white">Obtain the Certificate of Incorporation</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The Certificate of Incorporation is issued by the Registrar of Companies (ROC) as proof that your company is officially registered. This certificate includes your Company Identification Number (CIN), PAN, and TAN.
                  </p>
                  <div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                      <div className="ml-3">
                        <p className="font-bold text-dbiz-navy text-sm">REMOVED</p>
                        <p className="text-xs text-gray-600">We follow up with the ROC to ensure timely issuance and help you understand all details of your incorporation certificate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">5</div>
                  <h3 className="text-xl font-bold text-white">Opening Bank Account</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    After receiving the Certificate of Incorporation, the next step is to open a current bank account in the company's name. This is essential for conducting all business transactions legally.
                  </p>
                  <ul className="space-y-4 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">Submit the Certificate of Incorporation, PAN, MOA, AOA, and board resolution to the bank.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">Provide KYC documents of all directors and authorized signatories.</span>
                    </li>
                  </ul>
                  <div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                      <div className="ml-3">
                        <p className="font-bold text-dbiz-navy text-sm">REMOVED</p>
                        <p className="text-xs text-gray-600">We assist with preparing all required bank documents and guide you through the account opening process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">6</div>
                  <h3 className="text-xl font-bold text-white">Depositing Capital Contribution</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Once the company bank account is opened, the subscribers to the MOA must deposit their capital contribution into the company's bank account.
                  </p>
                  <ul className="space-y-4 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">Each subscriber must deposit the agreed amount as per the MOA.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">A bank certificate confirming the deposit is required for the next step.</span>
                    </li>
                  </ul>
                  <div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                      <div className="ml-3">
                        <p className="font-bold text-dbiz-navy text-sm">REMOVED</p>
                        <p className="text-xs text-gray-600">We ensure proper documentation for compliance during the capital deposit process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-on-scroll md:col-span-2 md:max-w-2xl md:mx-auto w-full">
                <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                  <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">7</div>
                  <h3 className="text-xl font-bold text-white">Commencement of Business (INC-20A)</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The final step is filing the declaration for commencement of business (Form INC-20A) with the MCA. This is a mandatory requirement before starting operational activities.
                  </p>
                  <ul className="space-y-4 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">Submit the declaration within 180 days of incorporation.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">Attach proof of capital deposit and registered office address.</span>
                    </li>
                  </ul>
                  <div className="mt-auto bg-dbiz-teal/5 p-4 rounded-lg border border-dbiz-teal/10">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0 mt-0.5" />
                      <div className="ml-3">
                        <p className="font-bold text-dbiz-navy text-sm">REMOVED</p>
                        <p className="text-xs text-gray-600">We ensure timely filing of INC-20A with all required documents and professional certification, so your company can legally commence business without delays.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <div id="deadlines" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Timelines</p>
              <h4 className="consultancy-heading">Private Limited Compliance Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Auditor Appointment", due: "Within 30 Days", desc: "First auditor must be appointed by the Board within 30 days of incorporation." },
                  { title: "Commencement (INC-20A)", due: "Within 180 Days", desc: "Mandatory declaration to be filed before starting business operations." },
                  { title: "AOC-4 (Financials)", due: "By 29th October", desc: "Filing of financial statements with ROC (30 days from AGM)." },
                  { title: "MGT-7 (Annual Return)", due: "By 28th November", desc: "Annual return filing containing shareholding and director details (60 days from AGM)." }
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
        </div>

        {/* Penalties Section */}
        <div id="penalties" className="py-20 bg-gray-50/50 scroll-mt-32 rounded-[3rem]">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Legal Risks</p>
              <h4 className="consultancy-heading">Penalties & Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "ROC Late Filing Fees", desc: "A penalty of ₹100 per day per form is levied for any delay in filing mandatory MCA forms." },
                  { title: "Director Disqualification", desc: "Directors may be disqualified for 5 years if the company fails to file returns for 3 consecutive years." },
                  { title: "Company Strike-off", desc: "The Registrar may strike off the company name if it fails to commence business within 180 days." },
                  { title: "Legal Prosecution", desc: "Severe non-compliance with the Companies Act 2013 can lead to fines and prosecution of officers in default." }
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
        </div>

        <div className="mt-16 text-center animate-on-scroll pb-16">
           <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
           <p className="max-w-4xl mx-auto text-[19.125px] text-gray-700 leading-relaxed font-medium">
             With deep expertise in corporate law and MCA regulations, DBIZ CONSULTANCY is the gold standard for company registrations in India. We handle the entire incorporation and compliance lifecycle—so you can build your empire with absolute peace of mind.
           </p>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default PrivateLimitedPage;
