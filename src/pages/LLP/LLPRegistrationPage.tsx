
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "../NotFound";

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

const LLPRegistrationPage = () => {
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
    ? "Limited Liability Partnership Registration | Best in India | D BIZ CONSULTANCY"
    : `Limited Liability Partnership Registration in ${cityName} | Best in India | D BIZ CONSULTANCY`;

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
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" 
              alt="Background" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Business Registration Services
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Limited Liability Partnership Registration
                  {location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  Register your LLP with D BIZ CONSULTANCY - combining the benefits of a partnership with limited liability protection. Perfect for professional services and small businesses seeking flexibility with legal protection.
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
                  <span>Quick Registration • Limited Liability • Easy Compliance</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902" 
                      alt="LLP Registration" 
                      className="w-full h-auto rounded-lg shadow-lg" 
                    />
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">7-10</div>
                        <div className="text-sm opacity-80">Days for Registration</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold">Min 2</div>
                        <div className="text-sm opacity-80">Partners Required</div>
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
                  isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'
                }`}
                onClick={() => handleSectionClick('comparison')}
              >
                <FileBarChart className="mr-2 h-4 w-4" /> Comparison
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is a Limited Liability Partnership?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A Limited Liability Partnership (LLP) is a hybrid business structure that combines the operational flexibility of a traditional partnership with the limited liability protection of a company. Governed by the LLP Act, 2008, this structure is ideal for professional services firms and small businesses.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    LLPs offer partners protection from personal liability for the debts and obligations of the business, while maintaining the tax benefits and management flexibility of a partnership. This makes it an attractive option for professionals like lawyers, chartered accountants, and consultants.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Limited Liability</h3>
                    <p className="text-gray-600">Partners are not personally liable for the LLP's debts beyond their capital contribution.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Flexible Management</h3>
                    <p className="text-gray-600">Partners can directly manage the business without complex corporate structures.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">LLP Act, 2008 Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    An LLP must comply with:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Minimum 2 partners (no maximum limit)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>At least 2 designated partners</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>LLP agreement defining partner rights</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Registered office in India</span>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of Limited Liability Partnership</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps businesses across {cityName} leverage LLP advantages for professional growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Limited Liability Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Partners enjoy protection from personal liability for LLP debts and obligations.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">LLP is distinct from its partners, can own property and enter contracts independently.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Perpetual Succession</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">LLP continues to exist regardless of changes in partnership composition.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">No Minimum Capital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No requirement for minimum capital contribution, making it accessible to startups.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Easy Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Fewer compliance requirements compared to private limited companies.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl text-dbiz-navy">Tax Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Taxed as a partnership, avoiding the double taxation faced by companies.</p>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of LLP Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover why LLP is the preferred structure for professional services and small businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Limited Liability Protection",
                  description: "Partners are protected from personal liability for business debts, safeguarding personal assets from business risks."
                },
                {
                  title: "Flexibility in Operations",
                  description: "Operational flexibility without the rigid corporate governance requirements of a company."
                },
                {
                  title: "Tax Efficiency",
                  description: "Pass-through taxation means profits are taxed only at the partner level, avoiding double taxation."
                },
                {
                  title: "Ease of Formation",
                  description: "Simple registration process with minimal documentation and no minimum capital requirement."
                },
                {
                  title: "Professional Credibility",
                  description: "Enhanced professional image and credibility compared to traditional partnerships."
                },
                {
                  title: "Lower Compliance Burden",
                  description: "Reduced compliance requirements compared to companies, with no mandatory audit for small LLPs."
                },
                {
                  title: "Easy to Manage",
                  description: "Partners can directly manage operations without appointing directors or holding board meetings."
                },
                {
                  title: "Flexible Profit Sharing",
                  description: "Partners can agree on any profit-sharing ratio regardless of capital contribution."
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

        {/* Comparison Section */}
        <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">LLP vs Private Limited Company</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-dbiz-navy">Feature</TableHead>
                    <TableHead className="font-semibold text-dbiz-navy">LLP</TableHead>
                    <TableHead className="font-semibold text-dbiz-navy">Private Limited</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Minimum Members</TableCell>
                    <TableCell>2 Partners</TableCell>
                    <TableCell>2 Directors + 2 Shareholders</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Liability</TableCell>
                    <TableCell>Limited to capital contribution</TableCell>
                    <TableCell>Limited to share capital</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Compliance</TableCell>
                    <TableCell>Lower compliance requirements</TableCell>
                    <TableCell>Higher compliance burden</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Audit</TableCell>
                    <TableCell>Not mandatory for small LLPs</TableCell>
                    <TableCell>Mandatory audit required</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Taxation</TableCell>
                    <TableCell>Partnership taxation</TableCell>
                    <TableCell>Corporate taxation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Profit Distribution</TableCell>
                    <TableCell>Flexible as per agreement</TableCell>
                    <TableCell>Based on shareholding</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fundraising</TableCell>
                    <TableCell>Cannot raise funds from public</TableCell>
                    <TableCell>Can raise funds from VCs/angels</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Foreign Investment</TableCell>
                    <TableCell>Allowed in certain sectors</TableCell>
                    <TableCell>Allowed with FDI compliance</TableCell>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for LLP Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Keep these documents ready for a smooth LLP registration process.
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
                    <TableCell>PAN of all designated partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Identity Proof</TableCell>
                    <TableCell>Aadhaar Card, Passport, Voter ID, or Driving License of all partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Address Proof</TableCell>
                    <TableCell>Bank statement, utility bill, or rental agreement of partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Passport Size Photos</TableCell>
                    <TableCell>Recent photographs of all partners</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Registered Office Proof</TableCell>
                    <TableCell>Ownership documents, NOC from owner, or rent agreement</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Utility Bill</TableCell>
                    <TableCell>Electricity or water bill for registered office (not older than 2 months)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Digital Signature</TableCell>
                    <TableCell>DSC of designated partners for online filing</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DIN/DPIN</TableCell>
                    <TableCell>Director/Designated Partner Identification Number</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Consent Letter</TableCell>
                    <TableCell>Consent from all partners to act as partners and designated partners</TableCell>
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
                    Our expert team at D BIZ CONSULTANCY will guide you through the entire documentation process.
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">LLP Registration Process</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our streamlined process ensures quick and hassle-free LLP registration.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Obtain Digital Signature Certificate (DSC)",
                  description: "Apply for DSC for designated partners who will sign the LLP incorporation documents electronically.",
                  advantage: "D BIZ CONSULTANCY assists in obtaining DSC quickly from authorized certifying agencies."
                },
                {
                  step: "2",
                  title: "Apply for Designated Partner Identification Number (DPIN)",
                  description: "Obtain DPIN for all designated partners through the MCA portal using Form DIR-3.",
                  advantage: "We handle the entire DPIN application process, ensuring error-free submissions."
                },
                {
                  step: "3",
                  title: "Name Reservation",
                  description: "Check and reserve your desired LLP name using the RUN-LLP service on the MCA portal.",
                  advantage: "Our team suggests available names and handles the reservation process efficiently."
                },
                {
                  step: "4",
                  title: "File Form FiLLiP",
                  description: "Submit the integrated LLP incorporation form (FiLLiP) along with required documents to MCA.",
                  advantage: "D BIZ CONSULTANCY prepares and files Form FiLLiP with complete accuracy and compliance."
                },
                {
                  step: "5",
                  title: "Draft LLP Agreement",
                  description: "Prepare the LLP agreement outlining partner rights, duties, and profit-sharing arrangements.",
                  advantage: "We draft comprehensive LLP agreements tailored to your business requirements."
                },
                {
                  step: "6",
                  title: "Certificate of Incorporation",
                  description: "Receive the Certificate of Incorporation and LLP Identification Number (LLPIN) from MCA.",
                  advantage: "D BIZ CONSULTANCY ensures timely receipt and helps with post-incorporation formalities including PAN, TAN, and bank account opening."
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
                  What is the minimum number of partners required for an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  A minimum of 2 partners is required to form an LLP in India. There is no maximum limit on the number of partners. At least 2 partners must be designated partners, and at least one designated partner must be a resident of India.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Is there a minimum capital requirement for LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  No, there is no minimum capital requirement for forming an LLP in India. Partners can contribute any amount as agreed upon in the LLP agreement. This makes LLP an accessible option for small businesses and startups.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How is an LLP different from a partnership firm?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Unlike traditional partnerships where partners have unlimited liability, LLP partners enjoy limited liability protection. LLP is a separate legal entity with perpetual succession, while partnership firms don't have separate legal status. LLPs also have lower compliance requirements compared to companies while offering better protection than partnerships.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  Can foreign nationals become partners in an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  Yes, foreign nationals and foreign companies can become partners in an Indian LLP, subject to FDI regulations. However, at least one designated partner must be a resident of India. Foreign investment is allowed in sectors where 100% FDI is permitted under the automatic route.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  What are the annual compliance requirements for an LLP?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  LLPs must file an Annual Return (Form 11) and Statement of Account & Solvency (Form 8) with the MCA every year. Income tax returns must be filed annually. However, LLPs with turnover less than ₹40 lakhs or contribution less than ₹25 lakhs are exempt from audit requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-xl shadow-md border border-gray-100 px-6">
                <AccordionTrigger className="text-lg font-semibold text-dbiz-navy hover:no-underline">
                  How long does LLP registration take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  With all documents ready, LLP registration typically takes 7-10 working days. The timeline includes DSC and DPIN procurement, name approval, and filing of incorporation documents. D BIZ CONSULTANCY ensures a smooth process with expert guidance at each step.
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
                Your trusted partner for LLP registration across {cityName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="opacity-80">Experienced professionals ensuring smooth LLP registration</p>
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
                  <CheckCircle2 className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Compliance</h3>
                <p className="opacity-80">Complete adherence to LLP Act regulations</p>
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

export default LLPRegistrationPage;