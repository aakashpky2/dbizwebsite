
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, TrendingUp, Award, Factory, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

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

const MSMERegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  
  if (location && !isValidLocation) {
    return <NotFound />;
  }

  const cityName = location 
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) 
    : "India";
  
  const seoTitle = location === undefined
    ? "MSME / Udyam Registration | Free MSME Certificate | DBIZ CONSULTANCY"
    : `MSME / Udyam Registration in ${cityName} | Free MSME Certificate | DBIZ CONSULTANCY`;

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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  MSME / Udyam Registration Services
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  MSME / Udyam Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Get your Udyam Registration Certificate instantly online with DBIZ CONSULTANCY. Access government benefits, subsidies, and priority sector lending with this free MSME registration.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => handleSectionClick('features')}
                    className="border-white text-slate-50 bg-dbiz-navy"
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                  <Clock className="h-4 w-4 mr-2" /> 
                  <span>Instant Registration • Free Process • Lifetime Validity</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
                      alt="MSME Registration" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">100%</div>
                        <div className="text-sm opacity-80">Free Registration</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">Instant</div>
                        <div className="text-sm opacity-80">Certificate</div>
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
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('overview')}
              >
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('features')}
              >
                <Shield className="mr-2 h-4 w-4" /> Key Features
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('benefits') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('benefits')}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('classification') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('classification')}
              >
                <FileBarChart className="mr-2 h-4 w-4" /> Classification
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('documents')}
              >
                <FileText className="mr-2 h-4 w-4" /> Documents
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('process')}
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Process
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('faqs')}
              >
                <CheckCircle className="mr-2 h-4 w-4" /> FAQs
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is MSME / Udyam Registration?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Udyam Registration (formerly known as MSME or Udyog Aadhaar Registration) is a government registration process for Micro, Small, and Medium Enterprises in India. Introduced on July 1, 2020, this system replaced the earlier processes and provides a unique identification number to MSMEs.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    The registration is completely free, paperless, and based on self-declaration. It's valid for a lifetime and opens doors to numerous government benefits including priority sector lending, subsidy schemes, easier compliance, and protection against delayed payments.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Factory className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Free & Simple</h3>
                    <p className="text-gray-600">100% free government registration with minimal documentation required.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <CreditCard className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Financial Benefits</h3>
                    <p className="text-gray-600">Access to collateral-free loans and priority sector lending from banks.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">MSME Act, 2006</h3>
                  <p className="text-gray-700 mb-4">
                    The MSME Development Act, 2006 defines MSMEs based on investment and turnover:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Micro:</strong> Investment ≤ ₹1 Cr, Turnover ≤ ₹5 Cr</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Small:</strong> Investment ≤ ₹10 Cr, Turnover ≤ ₹50 Cr</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Medium:</strong> Investment ≤ ₹50 Cr, Turnover ≤ ₹250 Cr</span>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of Udyam Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                DBIZ CONSULTANCY helps businesses across {cityName} obtain MSME registration and access all available benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">100% Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Completely free government registration with no charges or fees involved.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Instant Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Quick online registration process with instant certificate generation upon approval.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Lifetime Validity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Registration is valid for lifetime with self-updating through Aadhaar and PAN integration.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Single Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">One registration valid across India for all business activities and locations.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Minimal Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Only Aadhaar and PAN required, with automatic verification from government databases.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Award className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Priority Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Access to government subsidies, schemes, and priority sector lending from banks.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                Benefits
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of MSME / Udyam Registration</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Collateral-Free Bank Loans",
                  description: "Get collateral-free loans up to ₹1 Crore under Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)."
                },
                {
                  title: "Lower Interest Rates",
                  description: "Avail loans at reduced interest rates of 1-1.5% lower compared to non-MSMEs, saving significantly on borrowing costs."
                },
                {
                  title: "Government Subsidies",
                  description: "Access various government subsidies on electricity bills, patent registration, industrial promotion, and quality certification."
                },
                {
                  title: "Protection Against Delayed Payments",
                  description: "MSME Development Act ensures buyers pay within 45 days, with provisions for compound interest on delayed payments."
                },
                {
                  title: "Priority in Government Tenders",
                  description: "Get exemption from EMD (Earnest Money Deposit) and priority in government procurement and tenders."
                },
                {
                  title: "Reimbursement for ISO Certification",
                  description: "Receive reimbursement of 75% of ISO certification charges, making quality certification affordable."
                },
                {
                  title: "Industrial Property Subsidy",
                  description: "Get stamp duty exemption and reduced rates on land and property purchases for business use."
                },
                {
                  title: "Tax Rebates & Exemptions",
                  description: "Benefit from direct and indirect tax exemptions and concessions under various state and central schemes."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-dbiz-teal/10 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-dbiz-teal" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dbiz-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Classification Section */}
        <section id="classification" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Classification
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">MSME Classification Criteria</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-dbiz-navy">Enterprise Type</TableHead>
                    <TableHead className="font-semibold text-dbiz-navy">Investment in Plant & Machinery / Equipment</TableHead>
                    <TableHead className="font-semibold text-dbiz-navy">Annual Turnover</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Micro Enterprise</TableCell>
                    <TableCell>Not more than ₹1 Crore</TableCell>
                    <TableCell>Not more than ₹5 Crore</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Small Enterprise</TableCell>
                    <TableCell>Not more than ₹10 Crore</TableCell>
                    <TableCell>Not more than ₹50 Crore</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Medium Enterprise</TableCell>
                    <TableCell>Not more than ₹50 Crore</TableCell>
                    <TableCell>Not more than ₹250 Crore</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-dbiz-navy mb-3">Important Notes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Classification is based on <strong>composite criteria</strong> of investment and turnover</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">If either investment or turnover exceeds the limit, the enterprise moves to the higher category</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">No distinction between manufacturing and service sectors since June 2020</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                Documents
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for Udyam Registration</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-dbiz-navy">Document Type</TableHead>
                    <TableHead className="font-semibold text-dbiz-navy">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Aadhaar Number</TableCell>
                    <TableCell>Aadhaar of proprietor/partner/director (for validation)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PAN Card</TableCell>
                    <TableCell>PAN of the business entity or proprietor</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business Name</TableCell>
                    <TableCell>Name of the enterprise as per official documents</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business Type</TableCell>
                    <TableCell>Proprietorship, Partnership, Company, or LLP</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business Address</TableCell>
                    <TableCell>Complete address with pin code</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bank Account Details</TableCell>
                    <TableCell>Bank account number and IFSC code</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business Activity</TableCell>
                    <TableCell>NIC code and description of business activities</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Investment & Turnover</TableCell>
                    <TableCell>Details of investment in plant & machinery and annual turnover</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">GSTIN (if applicable)</TableCell>
                    <TableCell>GST number if registered (auto-fetched from system)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-dbiz-teal/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-dbiz-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dbiz-navy mb-2">Simple Documentation Process</h3>
                  <p className="text-gray-600 mb-4">
                    DBIZ CONSULTANCY helps you gather and verify all required information for seamless Udyam registration.
                  </p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
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
                Process
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Udyam Registration Process</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Visit Udyam Portal",
                  description: "Go to the official Udyam Registration portal (udyamregistration.gov.in) to begin your registration process.",
                  advantage: "DBIZ CONSULTANCY guides you through the portal and ensures you're on the correct official website."
                },
                {
                  step: "2",
                  title: "Enter Aadhaar Number",
                  description: "Enter the Aadhaar number of the proprietor, partner, or authorized representative. OTP will be sent for verification.",
                  advantage: "We help verify Aadhaar details and troubleshoot any OTP or validation issues instantly."
                },
                {
                  step: "3",
                  title: "Fill Basic Details",
                  description: "Enter PAN number (auto-fetched with Aadhaar), business name, type of organization, and official address.",
                  advantage: "Our team ensures accurate data entry with correct business classification and NIC codes."
                },
                {
                  step: "4",
                  title: "Enter Business Information",
                  description: "Provide details about business activities, number of employees, investment in plant & machinery, and annual turnover.",
                  advantage: "We help calculate and enter accurate investment and turnover figures for proper classification."
                },
                {
                  step: "5",
                  title: "Add Bank Details",
                  description: "Enter bank account number and IFSC code. GSTIN details are auto-fetched if registered.",
                  advantage: "DBIZ CONSULTANCY verifies bank details and ensures seamless integration with GST database."
                },
                {
                  step: "6",
                  title: "Submit & Get Certificate",
                  description: "Review all information and submit. Udyam Registration Certificate with unique number is generated instantly.",
                  advantage: "We download your certificate immediately and help you understand how to utilize MSME benefits effectively."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dbiz-teal to-dbiz-navy flex items-center justify-center text-white text-2xl font-bold">
                          {item.step}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-dbiz-navy mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                        
                        <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-dbiz-navy mb-1">DBIZ Advantage</p>
                              <p className="text-sm text-gray-600">{item.advantage}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                FAQs
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Is Udyam Registration mandatory?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  While not legally mandatory for all businesses, Udyam Registration is highly recommended to avail MSME benefits including collateral-free loans, subsidies, and government scheme access. It's essential for participating in government tenders and procurement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  What is the difference between Udyog Aadhaar and Udyam?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Udyog Aadhaar was the old MSME registration system (2015-2020). Udyam Registration replaced it on July 1, 2020, with better integration, self-declaration, and automatic updates. All Udyog Aadhaar registrations expired on March 31, 2021, and must be migrated to Udyam.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Can I register without GST?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, GST registration is not mandatory for Udyam Registration. You can register with just Aadhaar and PAN. However, if you have GSTIN, it will be automatically fetched and linked to your Udyam certificate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How long is Udyam Registration valid?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Udyam Registration has lifetime validity and doesn't require renewal. However, you must update your information if there are significant changes in investment or turnover that affect your classification.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Can I update my Udyam Registration details?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, you can update your Udyam Registration details anytime through the portal using your Udyam Registration Number and Aadhaar OTP. Updates should be made when there are changes in business information, investment, or turnover.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Are there any charges for Udyam Registration?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  No, Udyam Registration is completely free. The Government of India does not charge any fee for this registration. Be cautious of intermediaries charging exorbitant fees. DBIZ CONSULTANCY provides assistance at minimal charges for convenience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Why Choose DBIZ Section */}
        <section className="py-16 bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose DBIZ CONSULTANCY?</h2>
              <p className="text-lg opacity-90">
                Your trusted partner for MSME registration across {cityName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="opacity-80">Professional support throughout the registration process</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
                <p className="opacity-80">Fast and efficient registration with instant certificate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Post-Registration Support</h3>
                <p className="opacity-80">Help accessing benefits and government schemes</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                    <Phone className="mr-2 h-4 w-4" /> Get Started Today
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <ContactOptions />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MSMERegistrationPage;