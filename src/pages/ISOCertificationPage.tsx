
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, TrendingUp, Award, Globe, BadgeCheck } from "lucide-react";
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

const ISOCertificationPage = () => {
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
    ? "ISO Certification | ISO 9001, 14001, 45001 | D BIZ CONSULTANCY"
    : `ISO Certification in ${cityName} | ISO 9001, 14001, 45001 | D BIZ CONSULTANCY`;

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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  ISO Certification Services
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  ISO Certification
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Get internationally recognized ISO certifications including ISO 9001, ISO 14001, ISO 45001, and more with D BIZ CONSULTANCY. Enhance your business credibility and access global markets.
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
                  <span>Expert Guidance • Global Recognition • Competitive Advantage</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" 
                      alt="ISO Certification" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">30-45</div>
                        <div className="text-sm opacity-80">Days for Certification</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">Global</div>
                        <div className="text-sm opacity-80">Recognition</div>
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
                  isActive('types') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('types')}
              >
                <FileBarChart className="mr-2 h-4 w-4" /> ISO Types
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is ISO Certification?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    ISO (International Organization for Standardization) certification is a globally recognized standard that validates an organization's quality management systems, processes, and procedures. It demonstrates that your business meets international standards for quality, safety, and efficiency.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    ISO certifications are developed by international experts and are recognized worldwide. They help organizations improve their operations, reduce costs, increase customer satisfaction, and gain access to new markets. With over 23,000+ international standards, ISO covers almost every industry and sector.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Globe className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Global Recognition</h3>
                    <p className="text-gray-600">Internationally accepted certification recognized in over 160 countries.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <BadgeCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Quality Assurance</h3>
                    <p className="text-gray-600">Demonstrates commitment to quality, safety, and continuous improvement.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Popular ISO Standards</h3>
                  <p className="text-gray-700 mb-4">
                    Most commonly required ISO certifications:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>ISO 9001:</strong> Quality Management System</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>ISO 14001:</strong> Environmental Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>ISO 45001:</strong> Occupational Health & Safety</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>ISO 27001:</strong> Information Security</span>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of ISO Certification</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps businesses across {cityName} achieve ISO certification and enhance their competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Globe className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">International Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Globally accepted certification that opens doors to international markets and clients.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Improved Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Streamlined processes and reduced waste leading to cost savings and better productivity.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Better risk identification and mitigation through systematic management approaches.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Customer Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Enhanced credibility and trust among clients, suppliers, and stakeholders.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Regulatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Easier compliance with legal and regulatory requirements across jurisdictions.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Award className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Competitive Edge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Stand out from competitors and win more business opportunities with ISO certification.</p>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of ISO Certification</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Access to Global Markets",
                  description: "ISO certification is often a prerequisite for exporting and participating in international tenders, opening up global business opportunities."
                },
                {
                  title: "Enhanced Brand Reputation",
                  description: "Demonstrate your commitment to quality and excellence, building trust and credibility with customers and partners."
                },
                {
                  title: "Operational Excellence",
                  description: "Identify inefficiencies, reduce waste, and optimize processes for better operational performance and cost reduction."
                },
                {
                  title: "Customer Satisfaction",
                  description: "Consistently meet customer requirements and expectations, leading to increased satisfaction and retention."
                },
                {
                  title: "Employee Engagement",
                  description: "Clear processes and responsibilities lead to better employee engagement, morale, and productivity."
                },
                {
                  title: "Legal Protection",
                  description: "Demonstrate due diligence and compliance, reducing legal risks and potential liabilities."
                },
                {
                  title: "Continuous Improvement",
                  description: "Built-in framework for ongoing improvement ensuring your business evolves and stays competitive."
                },
                {
                  title: "Financial Benefits",
                  description: "Cost savings through improved efficiency, reduced waste, and access to better insurance rates and financing."
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

        {/* ISO Types Section */}
        <section id="types" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                ISO Types
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Popular ISO Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-dbiz-navy">ISO 9001:2015</CardTitle>
                  <CardDescription className="text-base">Quality Management System</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 mb-4">Most widely recognized ISO standard for quality management.</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Improve customer satisfaction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Enhance process efficiency</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reduce operational costs</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 border-2 border-dbiz-teal">
                <CardHeader>
                  <div className="inline-block px-3 py-1 rounded-full bg-dbiz-teal text-white text-xs font-medium mb-2">
                    Most Popular
                  </div>
                  <CardTitle className="text-2xl font-semibold text-dbiz-navy">ISO 14001:2015</CardTitle>
                  <CardDescription className="text-base">Environmental Management System</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 mb-4">Demonstrates environmental responsibility and sustainability.</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reduce environmental impact</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Meet legal requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Improve resource efficiency</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-dbiz-navy">ISO 45001:2018</CardTitle>
                  <CardDescription className="text-base">Occupational Health & Safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 mb-4">Ensures workplace safety and employee well-being.</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reduce workplace accidents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Improve employee morale</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Lower insurance costs</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-dbiz-navy">ISO 27001:2013</CardTitle>
                  <CardDescription className="text-base">Information Security Management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 mb-4">Protect sensitive business and customer information.</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Secure data and systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Meet compliance requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Build customer trust</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-dbiz-navy">ISO 22000:2018</CardTitle>
                  <CardDescription className="text-base">Food Safety Management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 mb-4">Ensures food safety throughout the supply chain.</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Control food hazards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Meet regulatory standards</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Enhance consumer confidence</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-dbiz-navy">ISO 50001:2018</CardTitle>
                  <CardDescription className="text-base">Energy Management System</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 mb-4">Optimize energy consumption and reduce costs.</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reduce energy consumption</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Lower operational costs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Reduce carbon footprint</span>
                  </div>
                </CardContent>
              </Card>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for ISO Certification</h2>
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
                    <TableCell className="font-medium">Company Registration</TableCell>
                    <TableCell>Certificate of incorporation or business registration proof</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PAN & GST</TableCell>
                    <TableCell>PAN card and GST registration certificate of the company</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business Address Proof</TableCell>
                    <TableCell>Electricity bill, property documents, or rent agreement</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Process Documents</TableCell>
                    <TableCell>Details of business processes, workflows, and procedures</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Organizational Structure</TableCell>
                    <TableCell>Organization chart showing roles and responsibilities</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quality Policy</TableCell>
                    <TableCell>Documented quality objectives and management commitment</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Product/Service Details</TableCell>
                    <TableCell>Complete description of products/services offered</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Employee Records</TableCell>
                    <TableCell>List of employees, training records, and qualifications</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Previous Certifications</TableCell>
                    <TableCell>Copies of any existing certifications or quality awards</TableCell>
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
                  <h3 className="text-lg font-semibold text-dbiz-navy mb-2">Complete Documentation Support</h3>
                  <p className="text-gray-600 mb-4">
                    D BIZ CONSULTANCY provides end-to-end support in preparing all documentation, creating quality manuals, and ensuring compliance with ISO standards.
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">ISO Certification Process</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation & Gap Analysis",
                  description: "We assess your current processes, identify gaps, and develop a customized implementation plan for ISO certification.",
                  advantage: "D BIZ CONSULTANCY provides expert gap analysis to identify areas needing improvement and creates a realistic timeline."
                },
                {
                  step: "2",
                  title: "Documentation Preparation",
                  description: "Develop quality manuals, procedures, work instructions, and all required documentation as per ISO standards.",
                  advantage: "Our team creates comprehensive, industry-specific documentation that's practical and easy to implement."
                },
                {
                  step: "3",
                  title: "Implementation & Training",
                  description: "Implement ISO processes across your organization and train employees on new procedures and quality management systems.",
                  advantage: "We provide hands-on training to ensure smooth adoption and understanding at all organizational levels."
                },
                {
                  step: "4",
                  title: "Internal Audit",
                  description: "Conduct internal audits to verify implementation, identify non-conformities, and ensure readiness for certification audit.",
                  advantage: "Our experienced auditors identify and help resolve issues before the official certification audit."
                },
                {
                  step: "5",
                  title: "Certification Body Selection",
                  description: "Help select an accredited certification body and coordinate the certification audit schedule.",
                  advantage: "We liaise with reputable certification bodies to ensure a smooth and efficient audit process."
                },
                {
                  step: "6",
                  title: "Certification Audit",
                  description: "The certification body conducts a two-stage audit to verify compliance with ISO standards and award certification.",
                  advantage: "D BIZ CONSULTANCY provides on-site support during the audit and helps address any auditor queries."
                },
                {
                  step: "7",
                  title: "Certificate Issuance",
                  description: "Upon successful audit, receive your ISO certificate valid for three years with periodic surveillance audits.",
                  advantage: "We help you leverage your ISO certification for marketing, tenders, and business development opportunities."
                },
                {
                  step: "8",
                  title: "Ongoing Support & Maintenance",
                  description: "Continuous support for maintaining certification, preparing for surveillance audits, and continual improvement.",
                  advantage: "Our team provides ongoing consultation to help you maintain compliance and maximize ISO benefits."
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
                        <h3 className="text-2xl font-semibold text-dbiz-navy mb-3">{item.title}</h3>
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
                  How long does ISO certification take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  The timeline varies based on organization size and readiness, but typically takes 3-6 months from initial consultation to certification. Smaller organizations with well-defined processes can achieve certification faster, while larger organizations with complex operations may take longer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How much does ISO certification cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Costs vary based on organization size, number of employees, certification scope, and chosen certification body. Generally includes consultation fees, documentation costs, training expenses, and certification body audit fees. D BIZ CONSULTANCY provides transparent pricing and helps optimize costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Is ISO certification mandatory?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  ISO certification is voluntary in most cases, but may be mandatory for certain industries, government contracts, or export requirements. Even when not mandatory, it provides significant competitive advantages and is often expected by clients and partners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How long is ISO certification valid?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  ISO certificates are valid for three years. During this period, the certification body conducts annual surveillance audits to ensure continued compliance. After three years, a recertification audit is required to renew the certificate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Can small businesses get ISO certified?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Absolutely! ISO certification is suitable for organizations of all sizes. We help small businesses implement practical, scalable systems that meet ISO requirements without unnecessary complexity or burden.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  What happens if we don't pass the certification audit?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  If non-conformities are identified, you'll be given time to address them before certification is awarded. Minor issues can typically be resolved quickly through corrective actions. D BIZ CONSULTANCY supports you throughout this process to ensure successful certification.
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
                Your trusted partner for ISO certification across {cityName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ISO Experts</h3>
                <p className="opacity-80">Experienced consultants with proven track record in ISO implementation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficient Process</h3>
                <p className="opacity-80">Streamlined approach ensuring timely certification with minimal disruption</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                <p className="opacity-80">Complete assistance from gap analysis to certification and beyond</p>
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

export default ISOCertificationPage;