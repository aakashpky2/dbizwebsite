
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, Users, Shield, Building2, FileBarChart, ArrowDownCircle, Phone, Clock, CheckCircle, MessageCircle, AlertTriangle } from "lucide-react";
import { publicLimitedContent } from "@/data/serviceContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { faqData } from "@/data/publicLimitedFaq";

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

// Public Limited Company Registration Page - SEO Optimized
const EnhancedPublicLimitedPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if location is valid (if provided)
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

  // If location is provided, we're on a city-specific page
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

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
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=70" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-10 flex justify-center text-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Business Registration Services
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
              Public Limited Company Registration
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in [animation-delay:400ms]">
              D BIZ CONSULTANCY provides complete Public Limited Company registration services. Our expert team ensures a seamless and compliant incorporation process — from company name approval and documentation to ROC filing and post-incorporation compliance management.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-fade-in [animation-delay:600ms]">
              <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
                <ArrowDownCircle className="mr-2 h-5 w-5" /> Learn More
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center text-sm font-medium text-white/80 animate-fade-in [animation-delay:800ms]">
              <Clock className="h-4 w-4 mr-2 text-dbiz-teal animate-pulse" />
              <span>Quick Registration • Regulatory Compliance • Expert Advisory</span>
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

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Public Limited Company?</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A Public Limited Company (PLC) is a company incorporated under the Companies Act, 2013 that allows the public to subscribe to its shares and invest in its capital. It is considered a separate legal entity distinct from its shareholders, enabling it to own property, enter contracts, and initiate legal proceedings in its own name.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Public Limited Companies are commonly formed by businesses that intend to raise capital from the public, attract institutional investors, and expand operations on a large scale. These companies operate under the regulatory framework of the Ministry of Corporate Affairs (MCA) and, where applicable, the Securities and Exchange Board of India (SEBI).
                </p>
              </div>

              {/* Minimum Requirements Mini-block */}
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minimum 3 Directors</p>
                      <p className="text-sm text-gray-600">At least one must be an Indian resident director</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minimum 7 Shareholders</p>
                      <p className="text-sm text-gray-600">No maximum limit on the number of members</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minimum Paid-up Capital</p>
                      <p className="text-sm text-gray-600">Generally ₹5,00,000 for public companies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Limited Liability</p>
                      <p className="text-sm text-gray-600">Protection for shareholders limited to their shareholding</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Perpetual Succession</p>
                      <p className="text-sm text-gray-600">Company continues regardless of ownership changes</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Companies Act, 2013</h3>
                <p className="text-gray-700 mb-4">
                  As per Section 2(71) of the Companies Act, 2013, a Public Limited Company is a company that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Does not restrict the transfer of shares, allowing shareholders to freely transfer their shares.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>Requires a minimum of 7 members, with no maximum limit on the number of members.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span>May invite the public to subscribe to its shares, debentures, or other securities for raising capital.</span>
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
      <section id="features" className="py-16 bg-gray-50 scroll-mt-32 overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Features
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Public Limited Company</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              DBIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features for scalable business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                Icon: Building2, 
                title: "Separate Legal Entity", 
                content: "A Public Limited Company has its own independent legal identity, separate from its shareholders and directors. This allows the company to own property, enter contracts, and undertake legal actions in its own name."
              },
              { 
                Icon: Shield, 
                title: "Limited Liability Protection", 
                content: "Shareholders are liable only to the extent of the unpaid value of the shares they hold. This protects the personal assets of shareholders from the company’s debts and financial liabilities."
              },
              { 
                Icon: FileBarChart, 
                title: "Ability to Raise Public Capital", 
                content: "Public Limited Companies can raise substantial capital by issuing shares or debentures to the public. This provides businesses with greater opportunities to secure funding for expansion and long-term growth."
              },
              { 
                Icon: Users, 
                title: "Large Shareholder Base", 
                content: "A Public Limited Company must have a minimum of seven shareholders, and there is no upper limit on the number of members. This structure enables businesses to attract a wide pool of investors."
              },
              { 
                Icon: FileText, 
                title: "Free Transferability of Shares", 
                content: "Shares of a Public Limited Company can generally be transferred without major restrictions. For listed companies, shares can be traded on recognized stock exchanges, providing liquidity to investors."
              },
              { 
                Icon: Clock, 
                title: "Perpetual Succession", 
                content: "The company continues to exist regardless of changes in shareholders, directors, or management. Its existence remains unaffected until it is legally dissolved under the Companies Act."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-white to-gray-50 group animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader className="pb-3">
                  <feature.Icon className="h-10 w-10 text-dbiz-teal mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-dbiz-navy group-hover:text-dbiz-teal transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.content}</p>
                </CardContent>
              </Card>
            ))}
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

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 min-h-[80px]">
                  Benefits of a Public Limited Company
                  {location !== undefined && <span className="block text-xl mt-2">in {cityName}</span>}
                </h2>

                <div className="hidden md:block mt-8 relative group">
                  <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                    alt="Business Growth" 
                    className="rounded-lg shadow-lg max-w-sm transition-opacity duration-500 opacity-0 bg-gray-100" 
                    onLoad={(e) => (e.currentTarget.classList.remove('opacity-0'))}
                    width="400"
                    height="300"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Access to Large Capital</h3>
                      <p className="text-gray-700">Public Limited Companies can raise substantial funds through public investment, issuing shares or debentures to a wide pool of investors.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Increased Credibility</h3>
                      <p className="text-gray-700">Being a public entity enhances the business's standing and trust among investors, financial institutions, and global partners.</p>
                    </div>
                  </div>
                </div>

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Shareholder Liquidity</h3>
                      <p className="text-gray-700">The free transferability of shares provides liquidity, allowing shareholders to buy and sell their interests with relative ease.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Expansion Opportunities</h3>
                      <p className="text-gray-700">Access to public funding and a robust structure enables businesses to scale operations and explore large-scale expansion opportunities.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Corporate Governance</h3>
                      <p className="text-gray-700">Operates under a formal board and strict regulatory framework, ensuring professional management and transparency.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-dbiz-navy mb-1">Government Incentives</h3>
                      <p className="text-gray-700">Public Limited Companies are often eligible for various government incentives, subsidies, and support schemes for large enterprises.</p>
                    </div>
                  </div>
                </div>

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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Comparison of Business Structures</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Understand how a Public Limited Company compares with other common business entities in India.
            </p>
          </div>

          <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                    <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">Public Limited</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">LLP</TableHead>
                    <TableHead className="py-4 text-dbiz-navy font-bold">Proprietorship</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium border-r">Liability</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Limited</TableCell>
                    <TableCell className="border-r">Limited</TableCell>
                    <TableCell className="border-r">Limited</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Legal Entity</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Separate</TableCell>
                    <TableCell className="border-r">Separate</TableCell>
                    <TableCell className="border-r">Separate</TableCell>
                    <TableCell>Not separate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Ownership</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Min 7 members</TableCell>
                    <TableCell className="border-r">2–200 members</TableCell>
                    <TableCell className="border-r">2+ partners</TableCell>
                    <TableCell>Single owner</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Capital Raising</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">Public investment</TableCell>
                    <TableCell className="border-r">Private investment</TableCell>
                    <TableCell className="border-r">Partner contribution</TableCell>
                    <TableCell>Personal funds</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium border-r">Compliance</TableCell>
                    <TableCell className="bg-dbiz-teal/5 border-r">High</TableCell>
                    <TableCell className="border-r">Moderate</TableCell>
                    <TableCell className="border-r">Moderate</TableCell>
                    <TableCell>Minimal</TableCell>
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

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for Public Limited Company Registration</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Ensure you have the following documents ready for a smooth and quick registration process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "PAN Card of Directors", desc: "Mandatory identification for all proposed directors." },
              { title: "ID Proof", desc: "Aadhaar Card, Passport, or Voter ID for identity verification." },
              { title: "Address Proof", desc: "Latest bank statement or utility bill (electricity/telephone)." },
              { title: "Photographs", desc: "Recent passport-sized photographs of all directors." },
              { title: "MOA & AOA", desc: "Memorandum and Articles of Association defining company objectives." },
              { title: "DIN", desc: "Director Identification Number for all proposed directors." },
              { title: "DSC", desc: "Digital Signature Certificate for electronic filing of documents." },
            ].map((doc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
                <div className="bg-dbiz-teal/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-dbiz-teal" />
                </div>
                <div>
                  <h4 className="font-bold text-dbiz-navy">{doc.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section id="process" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Registration Process
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Public Limited Company Registration Process in India</h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Registering a Public Limited Company in India involves several legal and procedural steps under the Companies Act, 2013 and regulations issued by the Ministry of Corporate Affairs (MCA). The process includes obtaining digital signatures, reserving the company name, filing incorporation documents with the Registrar of Companies (ROC), and completing post-incorporation formalities.
            </p>
            
            <p className="text-lg font-medium text-dbiz-teal mb-12">
              With professional assistance from D BIZ CONSULTANCY, businesses can complete the Public Limited Company registration process efficiently while ensuring full compliance with statutory requirements.
            </p>

            <h3 className="text-2xl font-bold text-dbiz-navy mt-12 mb-8">Step-by-Step Public Limited Company Registration Process</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">1</span>
                  Obtain Digital Signature Certificate (DSC)
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The first step in registering a Public Limited Company is obtaining a Digital Signature Certificate (DSC) for all proposed directors. A DSC is required to digitally sign electronic documents submitted to the MCA portal.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dbiz-navy text-sm">Key Points:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Mandatory for all directors and authorized signatories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Used for signing incorporation documents online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Issued by government-approved certifying authorities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">2</span>
                  Apply for Director Identification Number (DIN)
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A Director Identification Number (DIN) is a unique identification number allotted to individuals who wish to become directors of a company.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dbiz-navy text-sm">Important Aspects:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Mandatory for all directors under the Companies Act, 2013</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Applied through MCA during incorporation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Remains valid for lifetime once allotted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">3</span>
                  Company Name Reservation
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The next step is reserving the proposed company name through the MCA portal.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dbiz-navy text-sm">While selecting the company name:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>It must be unique and not identical to existing companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>It should comply with Companies (Incorporation) Rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>It should avoid conflicts with registered trademarks</span>
                    </li>
                  </ul>
                  <p className="text-xs text-dbiz-teal font-medium mt-3 italic">Once approved, the name is reserved for incorporation filing.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">4</span>
                  Drafting MOA and AOA
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The MOA and AOA are fundamental documents required for company incorporation.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-dbiz-navy text-sm mb-1">Memorandum of Association (MOA):</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                        <span>Company's main objectives and activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                        <span>Scope of operations and authorized capital</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-dbiz-navy text-sm mb-1">Articles of Association (AOA):</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                        <span>Internal rules and governance structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                        <span>Rights of directors and shareholders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">5</span>
                  Filing with Registrar of Companies
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Incorporation forms are filed with the ROC through the MCA portal. Supporting documents like ID proofs, addresses, and declarations are mandatory.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dbiz-navy text-sm">Commonly Filed Forms:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>INC-7 – Application for incorporation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>DIR-12 – Appointment of directors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>INC-22 – Registered office address</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">6</span>
                  Certificate of Incorporation (COI)
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  After successful verification, the ROC issues the Certificate of Incorporation (COI), legally confirming the company's existence.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dbiz-navy text-sm">COI includes:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Company Identification Number (CIN)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Official Date of incorporation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Legal confirmation of company existence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">7</span>
                  PAN and TAN Allocation
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  After incorporation, the company receives its unique tax identifiers issuing by the Income Tax Department.
                </p>
                <div className="space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Permanent Account Number (PAN) for income tax purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Tax Deduction and Collection Account Number (TAN) for TDS compliance</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">Essential for tax filing and financial operations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">8</span>
                  Opening a Company Bank Account
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The company must open a current account in its name. Banks generally require the COI, PAN, and constitutional documents.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-dbiz-navy text-sm">Required Documents:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Certificate of Incorporation & Company PAN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>MOA, AOA and Board Resolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>KYC documents of directors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                <h4 className="text-lg font-bold flex items-center">
                  <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">9</span>
                  Commencement of Business
                </h4>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before starting operations, the company must complete commencement formalities.
                </p>
                <div className="space-y-2">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Depositing share capital in the company bank account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                      <span>Filing commencement declaration with MCA (INC-20A)</span>
                    </li>
                  </ul>
                  <p className="text-xs text-dbiz-teal font-medium mt-3 italic">Once completed, the company can legally borrow funds and start operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Timeline Section */}
      <section id="timeline" className="py-16 bg-white scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Timeline
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Timeline for Public Limited Company Registration</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Typical timeframe for various stages of registration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="py-4 text-dbiz-navy font-bold">Stage</TableHead>
                  <TableHead className="py-4 text-dbiz-navy font-bold text-right">Typical Time Required</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">DSC and DIN</TableCell>
                  <TableCell className="text-right">1 – 2 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Name Reservation</TableCell>
                  <TableCell className="text-right">2 – 3 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Document Preparation</TableCell>
                  <TableCell className="text-right">2 – 4 Days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ROC Approval</TableCell>
                  <TableCell className="text-right">7 – 15 Days</TableCell>
                </TableRow>
                <TableRow className="bg-dbiz-teal/5">
                  <TableCell className="font-bold text-dbiz-teal text-lg">Total Registration Time</TableCell>
                  <TableCell className="text-right font-bold text-dbiz-teal text-lg">20 – 30 Working Days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-16 bg-dbiz-navy text-white scroll-mt-32">
        <div className="container-custom">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mandatory Compliance for Public Limited Companies</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              Ongoing compliance is critical for Public Limited Companies to maintain legal standing and avoid penalties.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="py-5 text-dbiz-teal font-bold text-lg">Compliance Requirement</TableHead>
                  <TableHead className="py-5 text-dbiz-teal font-bold text-lg text-right">Timeline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">First Board Meeting</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Within 30 days of incorporation</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Appointment of Auditor</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Within 30 days</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Board Meetings</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Minimum 4 per year</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Statutory Audit</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Annually</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Annual General Meeting</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Once every year</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Financial Statement Filing (AOC-4)</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Within 30 days of AGM</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Annual Return Filing (MGT-7)</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Within 60 days of AGM</TableCell>
                </TableRow>
                <TableRow className="border-none hover:bg-white/5 transition-colors">
                  <TableCell className="py-4 font-medium text-white">Income tax Return</TableCell>
                  <TableCell className="py-4 text-right text-gray-300">Annually</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm opacity-60 italic">
              * Non-compliance can lead to heavy penalties and legal consequences for directors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-dbiz-teal/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dbiz-navy/5 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why Choose D BIZ CONSULTANCY?</h2>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    D BIZ CONSULTANCY is a trusted business consultancy firm based in <span className="font-semibold text-dbiz-navy">Trivandrum and Kochi</span>, providing comprehensive support for business registrations, statutory compliance, taxation services, and corporate advisory across Kerala and major states in India.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    With extensive experience in company incorporation and regulatory compliance, our team ensures that entrepreneurs, startups, and growing businesses receive reliable guidance, accurate documentation, and complete compliance support under the applicable laws and regulations.
                  </p>
                  
                  <div className="bg-dbiz-teal/5 p-6 rounded-2xl border border-dbiz-teal/10 hover:bg-dbiz-teal/10 transition-colors duration-300">
                    <p className="text-dbiz-navy font-medium italic">
                      "By choosing D BIZ CONSULTANCY, businesses benefit from professional expertise, streamlined processes, and end-to-end support, enabling them to focus on growth while we handle the legal and regulatory requirements."
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-dbiz-navy mb-8">Our Key Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Public Limited Company Registration",
                      "Private Limited Company Incorporation",
                      "GST Registration and Compliance",
                      "ROC Filing and Law Compliance",
                      "Startup Advisory and Structuring",
                      "Annual Compliance and Audit"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-dbiz-teal/30 hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                        <span className="text-dbiz-navy font-medium text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Button className="bg-dbiz-navy hover:bg-dbiz-navy/90 text-white px-8 py-6 rounded-xl text-lg group hover:scale-105 transition-all">
                      Get Started with D BIZ
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 scroll-mt-32">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Questions Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy">FAQs on Public Limited Company Registration in India</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <span className="font-semibold text-dbiz-navy">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed border-t border-gray-50">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  </div>;
};

export default EnhancedPublicLimitedPage;
