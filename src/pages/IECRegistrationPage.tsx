
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, TrendingUp, Award, Globe2, Ship } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const IECRegistrationPage = () => {
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
    ? "IEC Registration | Import Export Code | D BIZ CONSULTANCY"
    : `IEC Registration in ${cityName} | Import Export Code | D BIZ CONSULTANCY`;

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
        <section className="relative text-white py-28 lg:py-36 overflow-hidden">
          {/* High-Definition Workspace Background - Matching GST Aesthetic */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80" 
              alt="Modern Professional Workspace" 
              className="w-full h-full object-cover opacity-60 transition-all duration-1000"
            />
            {/* Lighter Gradient Overlays for High Visibility */}
            <div className="absolute inset-0 bg-dbiz-navy/40 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-dbiz-navy/80 via-dbiz-navy/40 to-transparent z-10"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-semibold mb-8 animate-on-scroll">
                  <span className="w-2.5 h-2.5 rounded-full bg-dbiz-teal mr-2 animate-pulse"></span>
                  Fast IEC Registration | DGFT Filing | Complete Compliance Support
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] uppercase tracking-tighter animate-on-scroll [animation-delay:100ms]">
                  IMPORT EXPORT CODE (IEC) <br className="hidden lg:block" /> REGISTRATION SERVICES
                  {location && <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 normal-case font-medium text-dbiz-teal italic tracking-normal">in {cityName}</span>}
                </h1>
                
                <p className="text-lg md:text-xl opacity-95 mb-10 leading-relaxed font-medium max-w-2xl animate-on-scroll [animation-delay:200ms]">
                  DBIZ CONSULTANCY provides complete Import Export Code (IEC) registration services. From eligibility verification to IEC issuance and compliance guidance, our experts ensure a smooth and hassle-free registration process.
                </p>
                
                <div className="flex flex-wrap gap-5 animate-on-scroll [animation-delay:300ms]">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white font-bold h-16 px-10 text-xl rounded-xl shadow-xl shadow-dbiz-teal/20 transition-all duration-300 hover:scale-105">
                        Apply Now <ArrowRight className="ml-2 h-5 w-5" />
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
                    className="border-white/40 text-white bg-white/10 backdrop-blur-md font-bold h-16 px-10 text-xl rounded-xl hover:bg-white hover:text-dbiz-navy transition-all duration-500 shadow-xl shadow-black/10 hover:scale-105"
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>

              <div className="hidden md:block md:col-span-2 relative animate-on-scroll [animation-delay:400ms]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/30 to-transparent rounded-2xl blur-2xl"></div>
                <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-dbiz-teal/10 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/20 pb-4">Quick Highlights</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-dbiz-teal/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-7 h-7 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Timeline</p>
                        <p className="text-2xl font-bold text-white">1 – 3 Days</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-dbiz-teal/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-7 h-7 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Compliance</p>
                        <p className="text-2xl font-bold text-white">100% Filing Accuracy</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full bg-dbiz-teal/20 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-7 h-7 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-blue-200">Support</p>
                        <p className="text-2xl font-bold text-white">Expert Guidance</p>
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
                
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is IEC Registration?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Import Export Code (IEC) is a unique 10-digit identification number issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Government of India. It is mandatory for anyone who wants to import or export goods and services from India.
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    IEC is a PAN-based number and is valid for a lifetime. Once obtained, it doesn't require renewal and can be used across all import-export transactions. No import or export shall be made by any person without obtaining IEC unless specifically exempted.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Globe2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Global Trade</h3>
                    <p className="text-gray-600">Essential for conducting international business and trading globally.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="text-dbiz-teal mb-3">
                      <Ship className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">No Renewal</h3>
                    <p className="text-gray-600">Lifetime validity with no need for periodic renewal or fees.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Who Needs IEC?</h3>
                  <p className="text-gray-700 mb-4">
                    IEC is mandatory for:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Businesses importing goods or services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Businesses exporting goods or services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>Manufacturers dealing with international trade</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span>E-commerce sellers shipping internationally</span>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of IEC Registration</h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps businesses across {cityName} obtain IEC and expand into international markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <CheckCircle className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Lifetime Validity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">One-time registration valid for lifetime with no renewal requirements.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <TrendingUp className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Quick Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Fast online registration process with instant digital IEC certificate.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">PAN-Based</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Linked to your PAN ensuring seamless integration with tax systems.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">No Renewal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No renewal fees or periodic compliance requirements after registration.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Globe2 className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Global Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Accepted worldwide for all import-export transactions from India.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-3">
                  <Award className="h-10 w-10 text-dbiz-teal mb-4" />
                  <CardTitle className="text-xl font-semibold text-dbiz-navy">Mandatory Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Required by customs authorities for all import-export clearances.</p>
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
              
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of IEC Registration</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Legal Import-Export",
                  description: "Conduct legal import and export business operations without any restrictions or complications."
                },
                {
                  title: "Customs Clearance",
                  description: "Essential for customs clearance of goods at ports, airports, and land borders."
                },
                {
                  title: "Government Benefits",
                  description: "Access various export promotion schemes, incentives, and benefits from the government."
                },
                {
                  title: "Foreign Currency Transactions",
                  description: "Receive and remit foreign currency for international trade transactions legally."
                },
                {
                  title: "Bank Facilities",
                  description: "Open foreign currency accounts and avail trade finance facilities from banks."
                },
                {
                  title: "Business Expansion",
                  description: "Expand your business globally and tap into international markets effortlessly."
                },
                {
                  title: "No Renewal Hassle",
                  description: "Lifetime validity means no periodic renewal requirements or additional costs."
                },
                {
                  title: "Quick Registration",
                  description: "Simple online process with minimal documentation and fast approval."
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

        {/* Why Choose D BIZ Section */}
        <section className="py-16 bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose D BIZ CONSULTANCY?</h2>
              <p className="text-lg opacity-90">
                Your trusted partner for IEC registration across {cityName}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="opacity-80">Experienced professionals for seamless IEC registration</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                <p className="opacity-80">Quick turnaround with minimal documentation</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-dbiz-teal/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dbiz-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Support</h3>
                <p className="opacity-80">End-to-end assistance for global trade setup</p>
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

export default IECRegistrationPage;