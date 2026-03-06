
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, TrendingUp, Award, Lightbulb, Banknote } from "lucide-react";
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

const StartupRegistrationPage = () => {
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
    ? "Startup India Registration | DPIIT Recognition | D BIZ CONSULTANCY"
    : `Startup India Registration in ${cityName} | DPIIT Recognition | D BIZ CONSULTANCY`;

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
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Startup India Registration Services
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Startup India Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Get DPIIT recognition for your startup and unlock exclusive benefits including tax exemptions, easier compliance, and access to funding opportunities with D BIZ CONSULTANCY.
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
                  <span>Quick Registration • Tax Benefits • Funding Access</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd" 
                      alt="Startup Registration" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">2-3</div>
                        <div className="text-sm opacity-80">Days for Recognition</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">3 Years</div>
                        <div className="text-sm opacity-80">Tax Exemption</div>
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
                  isActive('eligibility') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('eligibility')}
              >
                <FileBarChart className="mr-2 h-4 w-4" /> Eligibility
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is Startup India Registration?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Startup India is a flagship initiative of the Government of India, launched to build a strong ecosystem for nurturing innovation and startups. Registration under Startup India provides DPIIT (Department for Promotion of Industry and Internal Trade) recognition, unlocking numerous benefits for eligible startups.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    This recognition validates your business as an innovative startup and provides access to tax exemptions, easier compliance norms, funding opportunities, and various government schemes designed to support entrepreneurship and innovation in India.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Innovation Focus</h3>
                    <p className="text-gray-600">Recognition for innovative business models and scalable solutions.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Banknote className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Tax Benefits</h3>
                    <p className="text-gray-600">3 consecutive years of income tax exemption and other tax holidays.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Startup India Criteria</h3>
                  <p className="text-gray-700 mb-4">
                    To qualify for Startup India registration:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Entity incorporated as a Private Limited Company, LLP, or Partnership Firm</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Less than 10 years old from date of incorporation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Annual turnover not exceeding ₹100 Crore</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Working towards innovation or improvement of existing products/services</span>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of Startup India Recognition</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps startups across {cityName} leverage these powerful benefits for growth and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Banknote className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Tax Exemptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Income tax exemption for 3 consecutive years out of first 10 years of operation.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Funding Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Access to ₹10,000 Crore Fund of Funds for funding through SIDBI and various VC firms.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">IPR Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">80% rebate on patent filing fees and expedited examination of patent applications.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Easier Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Self-certification under 9 labor laws and 3 environmental laws for first 5 years.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Government Tenders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Exemption from requirement of prior experience/turnover for government tenders.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Award className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Access to startup events, mentorship programs, and networking opportunities.</p>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of Startup India Registration</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "3-Year Tax Holiday",
                  description: "Eligible startups can avail 100% income tax exemption for any 3 consecutive years out of first 10 years, subject to DPIIT certification."
                },
                {
                  title: "Angel Tax Exemption",
                  description: "No scrutiny for investments received from angel investors and venture capital funds for DPIIT-recognized startups."
                },
                {
                  title: "Fast-Track Patent Examination",
                  description: "80% reduction in patent filing fees and expedited examination process for startup patent applications."
                },
                {
                  title: "Easy Public Procurement",
                  description: "Relaxation from 'prior experience/turnover' criteria for government tenders and procurement processes."
                },
                {
                  title: "Access to Government Programs",
                  description: "Eligibility for various government schemes like credit guarantee, incubation support, and seed funding programs."
                },
                {
                  title: "Simplified Winding Up Process",
                  description: "Fast-track exit mechanism allowing startups to wind up operations within 90 days under the Insolvency and Bankruptcy Code."
                },
                {
                  title: "Free Legal Support",
                  description: "Access to panel of facilitators for assistance in filing patents, trademarks, and design applications."
                },
                {
                  title: "Networking & Mentorship",
                  description: "Connect with industry leaders, successful entrepreneurs, and get guidance from experienced mentors."
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

        {/* Eligibility Section */}
        <section id="eligibility" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Eligibility
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Eligibility Criteria for Startup India</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-dbiz-navy">Criteria</TableHead>
                    <TableHead className="font-semibold text-dbiz-navy">Requirement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Entity Type</TableCell>
                    <TableCell>Private Limited Company, Registered Partnership Firm, or Limited Liability Partnership (LLP)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Age of Entity</TableCell>
                    <TableCell>Should not exceed 10 years from the date of incorporation/registration</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Annual Turnover</TableCell>
                    <TableCell>Turnover should not exceed ₹100 Crore for any financial year since incorporation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Innovation</TableCell>
                    <TableCell>Entity should be working towards innovation, development, or improvement of products, processes, or services</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Original Entity</TableCell>
                    <TableCell>Should not be formed by splitting up or reconstruction of an existing business</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scalability</TableCell>
                    <TableCell>Must have potential for wealth and employment generation with scalable business model</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for Startup India Registration</h2>
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
                    <TableCell className="font-medium">Certificate of Incorporation</TableCell>
                    <TableCell>Company registration certificate or LLP/Partnership registration proof</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PAN & TAN</TableCell>
                    <TableCell>PAN and TAN of the entity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Company Details</TableCell>
                    <TableCell>Brief description of business, nature of innovation, and area of operation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Website/Social Media</TableCell>
                    <TableCell>Website URL or links to social media pages (if available)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Logo</TableCell>
                    <TableCell>Company logo in prescribed format</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Patent/Trademark (Optional)</TableCell>
                    <TableCell>Patent or trademark registration certificate if applicable</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Funding Details (Optional)</TableCell>
                    <TableCell>Details of funding received, awards, incubation support if any</TableCell>
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
                  <h3 className="text-lg font-semibold text-dbiz-navy mb-2">Expert Assistance Available</h3>
                  <p className="text-gray-600 mb-4">
                    D BIZ CONSULTANCY provides complete support in preparing your application and gathering required documents for Startup India recognition.
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Startup India Registration Process</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Incorporate Your Entity",
                  description: "First, incorporate your business as a Private Limited Company, LLP, or Partnership Firm. We can help with entity formation if needed.",
                  advantage: "D BIZ CONSULTANCY provides complete entity incorporation services along with Startup India registration."
                },
                {
                  step: "2",
                  title: "Register on Startup India Portal",
                  description: "Create an account on the Startup India portal (www.startupindia.gov.in) using your mobile number and email address.",
                  advantage: "Our team guides you through the portal registration and helps set up your account correctly."
                },
                {
                  step: "3",
                  title: "Fill Application Form",
                  description: "Complete the recognition application form with details about your business, innovation, and team members.",
                  advantage: "We help craft a compelling application highlighting your startup's innovative aspects for better approval chances."
                },
                {
                  step: "4",
                  title: "Upload Documents",
                  description: "Upload all required documents including certificate of incorporation, company details, and supporting documents.",
                  advantage: "Our experts ensure all documents are in proper format and meet DPIIT requirements to avoid rejections."
                },
                {
                  step: "5",
                  title: "Submit for Review",
                  description: "Submit the completed application for DPIIT review. The review process typically takes 2-3 working days.",
                  advantage: "We track your application status and coordinate with authorities if any additional information is required."
                },
                {
                  step: "6",
                  title: "Receive Recognition Certificate",
                  description: "Upon approval, you'll receive the DPIIT recognition certificate via email. You can now avail all Startup India benefits.",
                  advantage: "D BIZ CONSULTANCY helps you understand and access all available benefits post-recognition including tax exemptions and funding opportunities."
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
                              <p className="text-sm font-medium text-dbiz-navy mb-1">D BIZ Advantage</p>
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
                  What is the difference between startup registration and DPIIT recognition?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Startup registration refers to incorporating your business entity (Pvt Ltd, LLP, etc.). DPIIT recognition is an additional certification under Startup India scheme that provides tax benefits and other advantages. You need to first register your entity and then apply for DPIIT recognition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Is Startup India registration free?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, Startup India registration (DPIIT recognition) is completely free. There are no government fees for this recognition. However, you may need professional assistance for proper documentation and application preparation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Can a sole proprietorship get Startup India recognition?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  No, sole proprietorships are not eligible for Startup India recognition. Only Private Limited Companies, Registered Partnership Firms, and Limited Liability Partnerships (LLPs) are eligible. We can help you convert your proprietorship to an eligible entity type.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How long does DPIIT recognition last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  DPIIT recognition is valid for 10 years from the date of incorporation of the entity, subject to meeting eligibility criteria. However, specific benefits like tax exemption are available for limited periods as per scheme guidelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  What happens if my Startup India application is rejected?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  If rejected, you'll receive reasons for rejection. You can address the issues and reapply. Common reasons include insufficient innovation description or not meeting eligibility criteria. D BIZ CONSULTANCY helps ensure applications meet all requirements to minimize rejection chances.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Do I need separate recognition for tax exemption?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, DPIIT recognition is the first step. To avail income tax exemption under Section 80-IAC, you need to separately apply for tax exemption certificate from the Inter-Ministerial Board (IMB). We assist with both applications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Why Choose D BIZ Section */}
        <section className="py-16 bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose D BIZ CONSULTANCY?</h2>
              <p className="text-lg opacity-90">
                Your trusted partner for Startup India registration across {cityName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="opacity-80">Experienced professionals helping you navigate Startup India benefits</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="opacity-80">Quick turnaround with dedicated support throughout</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Service</h3>
                <p className="opacity-80">End-to-end support from incorporation to benefit access</p>
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

export default StartupRegistrationPage;