
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, IndianRupee, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
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

const GSTRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
    ? "GST Registration | Quick & Easy GST Registration | D BIZ CONSULTANCY"
    : `GST Registration in ${cityName} | Quick & Easy GST Registration | D BIZ CONSULTANCY`;

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
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  GST Registration Services
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  GST Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Get your GST registration done quickly and hassle-free with D BIZ CONSULTANCY. Our expert team ensures 100% compliance with GST regulations, helping your business operate legally and claim input tax credits.
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
                  <span>Quick Registration • Guaranteed Compliance • Expert Support</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                      alt="GST Registration" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">3-5</div>
                        <div className="text-sm opacity-80">Days for Registration</div>
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
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('overview') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('overview')}
              >
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('features') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('features')}
              >
                <Shield className="mr-2 h-4 w-4" /> Key Features
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('benefits') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('benefits')}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('types') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('types')}
              >
                <FileBarChart className="mr-2 h-4 w-4" /> GST Types
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('documents') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('documents')}
              >
                <FileText className="mr-2 h-4 w-4" /> Documents
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('process') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('process')}
              >
                <ArrowRight className="mr-2 h-4 w-4" /> Process
              </div>
              
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${
                  isActive('faqs') 
                    ? 'text-dbiz-teal border-dbiz-teal' 
                    : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is GST Registration?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. GST registration is mandatory for businesses with an annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) for goods and ₹20 lakhs (₹10 lakhs for special category states) for services.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    GST replaced multiple indirect taxes like VAT, service tax, and excise duty, simplifying the tax structure and making compliance easier. A GST registration certificate validates your business and allows you to collect tax from customers and claim input tax credit on your purchases.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <IndianRupee className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Tax Credit Benefits</h3>
                    <p className="text-gray-600">Claim input tax credit on your business purchases and reduce your tax liability.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Legal Compliance</h3>
                    <p className="text-gray-600">Operate your business legally and avoid penalties for non-compliance.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">GST Registration Threshold</h3>
                  <p className="text-gray-700 mb-4">
                    Registration is mandatory when your turnover exceeds:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>₹40 Lakhs for goods suppliers (₹20 Lakhs for special category states)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>₹20 Lakhs for service providers (₹10 Lakhs for special category states)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Mandatory for inter-state supplies regardless of turnover</span>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of GST Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps businesses across {cityName} navigate GST registration with ease and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <IndianRupee className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Input Tax Credit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Claim input tax credit on purchases and reduce your overall tax liability significantly.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Business Credibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Enhance your business reputation and gain trust from customers and suppliers.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Legal Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Get legal recognition for your business and operate without fear of penalties.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Interstate Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Conduct business across state borders seamlessly with valid GST registration.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Simplified Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Unified tax system makes compliance easier compared to multiple indirect taxes.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Award className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Competitive Advantage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Gain a competitive edge and access to larger market opportunities with GST.</p>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of GST Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover how GST registration can transform your business operations and financial management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Input Tax Credit",
                  description: "Claim credit for GST paid on business purchases, reducing your net tax liability and improving cash flow."
                },
                {
                  title: "Legal Validity",
                  description: "Operate your business legally and avoid hefty penalties for non-compliance with GST regulations."
                },
                {
                  title: "Enhanced Credibility",
                  description: "Build trust with customers, suppliers, and financial institutions through formal GST registration."
                },
                {
                  title: "Interstate Business",
                  description: "Conduct seamless interstate trade without restrictions, expanding your market reach."
                },
                {
                  title: "Government Schemes",
                  description: "Access government tenders, subsidies, and various business schemes available only to GST-registered entities."
                },
                {
                  title: "Easy Compliance",
                  description: "Simplified tax structure with online filing, easier record-keeping, and transparent processes."
                },
                {
                  title: "Composition Scheme",
                  description: "Small businesses can opt for the composition scheme with lower tax rates and minimal compliance."
                },
                {
                  title: "Digital Payments",
                  description: "Facilitate digital transactions and maintain proper books of accounts for better financial management."
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

        {/* GST Types Section */}
        <section id="types" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                GST Types
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Types of GST Registration</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-dbiz-navy">Regular GST</CardTitle>
                  <CardDescription className="text-base">For businesses with turnover above threshold</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Full input tax credit available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Monthly/quarterly returns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Issue tax invoices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Collect GST from customers</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 border-2 border-dbiz-teal">
                <CardHeader>
                  <div className="inline-block px-3 py-1 rounded-full bg-dbiz-teal text-white text-xs font-medium mb-2">
                    Popular for SMEs
                  </div>
                  <CardTitle className="text-2xl text-dbiz-navy">Composition Scheme</CardTitle>
                  <CardDescription className="text-base">For small businesses with turnover up to ₹1.5 Crore</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Lower tax rates (1-6%)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Quarterly returns only</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Simplified compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Limited input tax credit</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-dbiz-navy">Casual Taxable Person</CardTitle>
                  <CardDescription className="text-base">For temporary business activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Temporary registration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Valid up to 90 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">For exhibitions, fairs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advance tax deposit required</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                Documents
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for GST Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Keep these documents ready for a smooth and quick GST registration process.
              </p>
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
                    <TableCell className="font-medium">PAN Card</TableCell>
                    <TableCell>PAN of the business entity or proprietor</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Aadhaar Card</TableCell>
                    <TableCell>Aadhaar of proprietor/partners/directors</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Proof of Business Registration</TableCell>
                    <TableCell>Certificate of incorporation, partnership deed, or registration certificate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Identity Proof</TableCell>
                    <TableCell>Passport, Voter ID, or Driving License of authorized signatory</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Address Proof</TableCell>
                    <TableCell>Latest electricity bill, property tax receipt, or rent agreement</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bank Account Details</TableCell>
                    <TableCell>Cancelled cheque or bank statement with account details</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Digital Signature</TableCell>
                    <TableCell>Digital Signature Certificate (DSC) for companies and LLPs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Photographs</TableCell>
                    <TableCell>Passport-size photographs of proprietor/partners/directors</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Authorization Letter</TableCell>
                    <TableCell>Letter authorizing a signatory (if applicable)</TableCell>
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
                  <h3 className="text-lg font-semibold text-dbiz-navy mb-2">Need Help with Documentation?</h3>
                  <p className="text-gray-600 mb-4">
                    Our expert team at D BIZ CONSULTANCY will guide you through the entire documentation process and ensure all requirements are met.
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">GST Registration Process</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our streamlined process ensures quick and hassle-free GST registration for your business.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Document Collection",
                  description: "We help you gather all necessary documents including PAN, Aadhaar, address proof, and business registration documents.",
                  advantage: "Our team verifies all documents beforehand to avoid rejections and delays."
                },
                {
                  step: "2",
                  title: "Application Preparation",
                  description: "We prepare and fill the GST registration application (Form GST REG-01) with accurate business and owner details.",
                  advantage: "Our experts ensure error-free applications with 100% accuracy in data entry."
                },
                {
                  step: "3",
                  title: "Application Submission",
                  description: "The completed application is submitted online on the GST portal along with all supporting documents.",
                  advantage: "We track your application status and provide regular updates throughout the process."
                },
                {
                  step: "4",
                  title: "ARN Generation",
                  description: "Upon successful submission, an Application Reference Number (ARN) is generated for tracking purposes.",
                  advantage: "We share the ARN immediately and help you track the application progress online."
                },
                {
                  step: "5",
                  title: "Verification Process",
                  description: "GST authorities verify the submitted documents and may request additional information if needed.",
                  advantage: "D BIZ CONSULTANCY handles all queries and provides additional documents promptly."
                },
                {
                  step: "6",
                  title: "GSTIN Issuance",
                  description: "Once approved, your unique 15-digit GSTIN (GST Identification Number) is issued along with the GST certificate.",
                  advantage: "We help you understand your GSTIN structure and assist with post-registration compliance."
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
                  Who needs to register for GST?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  GST registration is mandatory for businesses with an annual turnover exceeding ₹40 lakhs for goods (₹20 lakhs for special category states) and ₹20 lakhs for services (₹10 lakhs for special category states). It's also mandatory for businesses making interstate supplies, e-commerce operators, and certain specified categories regardless of turnover.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How long does GST registration take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  The GST registration process typically takes 3-5 working days from the date of application submission, provided all documents are correct and complete. D BIZ CONSULTANCY ensures your application is error-free to avoid any delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  What is the composition scheme?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  The composition scheme is a simple and easy scheme for small taxpayers with turnover up to ₹1.5 crore. Under this scheme, taxpayers pay GST at a fixed rate on their turnover and enjoy simpler compliance requirements with quarterly returns instead of monthly filing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Is there any fee for GST registration?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  No, the Government of India does not charge any fee for GST registration. The process is completely free. However, you may need professional assistance for proper documentation and filing, for which service charges may apply.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Can I register for GST voluntarily?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, you can opt for voluntary GST registration even if your turnover is below the threshold limit. This is beneficial for businesses looking to claim input tax credit, enhance credibility, or participate in inter-state trade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  What happens if I don't register for GST when required?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Failure to register for GST when required can result in penalties of up to 10% of the tax due or ₹10,000, whichever is higher. Additionally, you cannot claim input tax credit and may face legal consequences. D BIZ CONSULTANCY helps ensure timely registration to avoid such penalties.
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
                Your trusted partner for GST registration across {cityName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="opacity-80">Experienced GST professionals guiding you at every step</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="opacity-80">Fast processing with guaranteed timelines</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Compliance</h3>
                <p className="opacity-80">Complete adherence to GST regulations</p>
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

export default GSTRegistrationPage;