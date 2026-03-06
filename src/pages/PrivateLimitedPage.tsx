

import React from "react";
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
  HelpCircle
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
    : "India";

  const seoTitle = location === undefined
    ? "Private Limited Company Registration | Best in India | D BIZ CONSULTANCY" 
    : `Private Limited Company Registration in ${cityName} | Best in India | D BIZ CONSULTANCY`;

  // Function to scroll to features section
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features-section');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
                    View our services across India
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
              D BIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader className="pb-3">
                  <Shield className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Limited Liability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Shareholders' liability is limited to their investment, protecting personal assets from business debts.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Building2 className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Separate Legal Entity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">The company can own assets, enter contracts, and operate independently from its owners.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Membership Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Requires at least 2 members and allows up to 200 members, ideal for small to medium businesses.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <FileBarChart className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">No Minimum Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">No mandatory minimum capital investment required to register a private limited company in India.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <FileText className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Tax Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Various tax exemptions available for startups and small companies under different schemes.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <Users className="h-8 w-8 text-dbiz-teal mb-2" />
                  <CardTitle className="text-dbiz-navy">Perpetual Succession</CardTitle>
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
              D BIZ CONSULTANCY helps businesses in {cityName} leverage these advantages.
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
              Understand why Private Limited is often the preferred choice for businesses in {cityName}.
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
              D BIZ CONSULTANCY assists clients in {cityName} with collecting and preparing all required documentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-dbiz-navy">For Indian Nationals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Identity Proof:</strong> PAN Card (Mandatory), Passport, Aadhar Card, Voter ID</p>
                  <p><strong>Address Proof:</strong> Utility Bills, Bank Statements (dated within last 2 months)</p>
                  <p><strong>Photographs:</strong> Recent passport-sized photographs</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-dbiz-navy">For Foreign Nationals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Identity Proof:</strong> Passport (Mandatory)</p>
                  <p><strong>Address Proof:</strong> Driver's License, Bank Statement, or Residence Card</p>
                  <p><strong>Photographs:</strong> Recent passport-sized photographs</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-dbiz-navy">For Company Registration</CardTitle>
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
                  <CardTitle className="text-dbiz-navy">Registered Office Proof</CardTitle>
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
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center">Step-by-Step Private Limited Company Registration Process</h2>
            <p className="section-subtitle text-center">
              A Private Limited Company offers limited liability protection to its shareholders, making it one of the most popular business structures for entrepreneurs in {cityName}. 
            </p>

            <div className="mt-12 space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">1</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">Obtain a Digital Signature Certificate (DSC)</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Digital Signature" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    A Digital Signature Certificate (DSC) is mandatory for filing electronically signed documents with the Ministry of Corporate Affairs (MCA). The DSC ensures the authenticity of all filings and transactions.
                  </p>
                  <p className="text-gray-700">
                    Our team will assist you in procuring your DSC from a certified authority on your behalf.
                  </p>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">We handle the entire DSC application process, including document submission and verification.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">2</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">File the SPICe+ Form</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="SPICe Form Filing" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    The SPICe+ form (Simplified Proforma for Incorporating Company Electronically Plus) is an integrated online form that simplifies the incorporation process by including multiple services:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700"><strong>Part A:</strong> For name reservation.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700"><strong>Part B:</strong> For incorporation, DIN allocation, PAN, TAN, GST registration, and more.</p>
                    </li>
                  </ul>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">Our team ensures accurate form filing with all required details to avoid delays in processing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">3</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">Draft and File the MOA and AOA</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="MOA and AOA" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    The two foundational documents of your company are:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <File className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700"><strong>Memorandum of Association (MOA):</strong> Defines the company's objectives and operational scope.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <File className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700"><strong>Articles of Association (AOA):</strong> Outlines the internal rules and governance structure.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    We will prepare and file these documents, ensuring all vital clauses are accurately included to reflect your company's purpose and management structure.
                  </p>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">Our legal experts customize these documents to suit your specific business needs and future growth plans.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">4</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">Obtain the Certificate of Incorporation</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Certificate of Incorporation" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    The Certificate of Incorporation is issued by the Registrar of Companies (ROC) as proof that your company is officially registered. This certificate includes your Company Identification Number (CIN), PAN, and TAN.
                  </p>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">We follow up with the ROC to ensure timely issuance and help you understand all details of your incorporation certificate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">5</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">Opening Bank Account</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Opening Bank Account" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    After receiving the Certificate of Incorporation, the next step is to open a current bank account in the company's name. This is essential for conducting all business transactions legally.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">Submit the Certificate of Incorporation, PAN, MOA, AOA, and board resolution to the bank.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">Provide KYC documents of all directors and authorized signatories.</p>
                    </li>
                  </ul>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">We assist with preparing all required bank documents and guide you through the account opening process with our banking partners.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">6</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">Depositing Capital Contribution</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Capital Contribution" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    Once the company bank account is opened, the subscribers to the MOA must deposit their capital contribution (share value) into the company's bank account. This is a mandatory requirement before filing for commencement of business.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">Each subscriber must deposit the amount equal to the value of shares agreed to be taken as per the MOA.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">A bank statement or certificate confirming the deposit is required for the next step.</p>
                    </li>
                  </ul>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">We guide you on the exact capital amount to be deposited and ensure proper documentation for compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <div className="bg-dbiz-navy text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-3">7</div>
                    <h3 className="text-xl font-semibold text-dbiz-navy">Filing INC-20A Form – Commencement of Business</h3>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Commencement of Business" 
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="mb-4 text-gray-700">
                    Filing Form INC-20A is the final mandatory step to commence business operations. As per the Companies (Amendment) Act, 2019, every company incorporated after November 2, 2018, must file this declaration within 180 days of incorporation.
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">Declaration that subscribers have paid the value of shares agreed to be taken.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">Verified by a Chartered Accountant or Company Secretary in practice.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 text-dbiz-navy flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-gray-700">Failure to file within 180 days may attract penalties and restrictions on business operations.</p>
                    </li>
                  </ul>
                  <div className="mt-4 bg-dbiz-teal/10 p-4 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-1 text-dbiz-teal flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-dbiz-navy">D BIZ Advantage</h4>
                        <p className="text-sm text-gray-600">We ensure timely filing of INC-20A with all required documents and professional certification, so your company can legally commence business without delays.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <Footer />
      </main>
    </div>
  );
};

export default PrivateLimitedPage;
