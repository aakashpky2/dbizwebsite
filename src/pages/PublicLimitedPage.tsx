
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

  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "";
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

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-24 pb-16">
      {/* Hero Section with Side-by-Side Design */}
      <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=50" 
            alt="Background" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Business Registration Services
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
                Public Limited Company Registration
              </h1>

              <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed max-w-3xl animate-fade-in [animation-delay:400ms]">
                D BIZ CONSULTANCY provides complete Public Limited Company registration services. Our expert team ensures a seamless and compliant incorporation process — from company name approval and documentation to ROC filing and post-incorporation compliance management.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:600ms]">
                <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
                  <ArrowDownCircle className="mr-2 h-5 w-5" /> Learn More
                </Button>
              </div>

              <div className="mt-12 flex items-center text-sm font-medium text-white/80 animate-fade-in [animation-delay:800ms]">
                <Clock className="h-4 w-4 mr-2 text-dbiz-teal animate-pulse" />
                <span>Quick Registration • Regulatory Compliance • Expert Advisory</span>
              </div>
            </div>

            <div className="hidden md:block animate-fade-in [animation-delay:1000ms]">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                  <img 
                    src="/public-limited-hero.png" 
                    alt="Public Limited Company Meeting" 
                    className="w-full h-auto rounded-lg shadow-lg" 
                  />
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
                      <p className="text-sm text-gray-600">At least one must be a local resident director</p>
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
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" 
                  alt="Companies Act Legal Definition" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per the Companies Act, 2013</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    As per Section 2(71) of the Companies Act, 2013, a Public Limited Company is a company that:
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Does not restrict the transfer of shares, allowing shareholders to freely transfer their shares.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Requires a minimum of 7 members, with no maximum limit on the number of members.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">May invite the public to subscribe to its shares, debentures, or other securities for raising capital.</span>
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
              D BIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features for scalable business success.
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
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  D BIZ CONSULTANCY helps businesses {location ? `in ${cityName}` : ""} leverage the practical advantages for maximum growth and protection.
                </p>

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

      {/* Documents Required Section — matching Private Limited design */}
      <section id="documents" className="py-16 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Documents
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              D BIZ CONSULTANCY assists clients {location ? `in ${cityName}` : ""} with collecting and preparing all required documentation.
            </p>
          </div>

          {/* Common rejection prevention tip */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Common Rejection Prevention Tips</p>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Address proofs must match spelling across PAN / Aadhaar / Passport and the SPICe+ application.</li>
                <li>• Registered office proofs must be consistent (owner name on utility bill, rent agreement, and NOC).</li>
                <li>• Utility bills and bank statements should be dated within the last 2 months.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                <h3 className="text-xl font-bold">For Domestic Nationals</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Identity Proof</p>
                    <p className="text-gray-600 mt-1">PAN Card (Mandatory), Passport, Aadhar Card, Voter ID</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Utility Bills, Bank Statements (dated within last 2 months)</p>
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
                <h3 className="text-xl font-bold">For Foreign Nationals / NRIs</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Identity Proof</p>
                    <p className="text-gray-600 mt-1">Passport (Mandatory)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Address Proof</p>
                    <p className="text-gray-600 mt-1">Driver's License, Bank Statement, or Residence Card</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Notarisation / Apostille</p>
                    <p className="text-gray-600 mt-1">May be required depending on director/shareholder status and current MCA practice</p>
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
                <h3 className="text-xl font-bold">For Company Registration</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Memorandum of Association (MOA)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Articles of Association (AOA)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Declaration and Consent Forms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Digital Signature Certificate (DSC)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Director Identification Number (DIN)</p>
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
                    <p className="text-gray-600 mt-1">For a rented office/residential address, with NOC from the owner</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Property Documents</p>
                    <p className="text-gray-600 mt-1">For owned property, proof of ownership</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-dbiz-navy">Utility Bills</p>
                    <p className="text-gray-600 mt-1">Recent electricity or water bill of the premises (owner name must match)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section id="process" className="py-24 bg-dbiz-navy text-white scroll-mt-32 relative overflow-hidden">
        {/* Subtle patterned background for depth */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Decorative glows */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-dbiz-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-dbiz-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              Registration Process
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Public Limited Company Registration Process</h2>
            
            <div className="text-lg text-white/80 mb-8 leading-relaxed max-w-5xl mx-auto flex flex-col items-center">
              <p className="text-center">Registering a Public Limited Company{location ? ` in ${cityName}` : ""} involves several legal and procedural steps under the Companies Act, 2013 and regulations issued by the Ministry of Corporate Affairs (MCA).</p>
              <p className="text-center">The process includes obtaining digital signatures, reserving the company name, filing incorporation documents with the Registrar of Companies (ROC),</p>
              <p className="text-center">and completing post-incorporation formalities.</p>
            </div>
            
            <p className="text-dbiz-teal font-medium mb-12 border-l-4 border-dbiz-teal pl-6 italic bg-white/5 py-4 rounded-r-lg">
              With professional assistance from D BIZ CONSULTANCY, businesses can complete the Public Limited Company registration process efficiently while ensuring full compliance with statutory requirements.
            </p>

            <h3 className="text-2xl font-bold mt-12 mb-8 text-center text-white">Step-by-Step Public Limited Company Registration Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Obtain Digital Signature Certificate (DSC)",
                desc: "The first step in registering a Public Limited Company is obtaining a Digital Signature Certificate (DSC) for all proposed directors. A DSC is required to digitally sign electronic documents submitted to the MCA portal.",
                points: ["Mandatory for all directors and authorized signatories", "Used for signing incorporation documents online", "Issued by government-approved certifying authorities"]
              },
              {
                step: "2",
                title: "Apply for Director Identification Number (DIN)",
                desc: "A Director Identification Number (DIN) is a unique identification number allotted to individuals who wish to become directors of a company.",
                points: ["Mandatory for all directors under the Companies Act, 2013", "Applied through MCA during incorporation", "Remains valid for lifetime once allotted"]
              },
              {
                step: "3",
                title: "Company Name Reservation",
                desc: "The next step is reserving the proposed company name through the MCA portal. It must be unique and not identical to existing companies.",
                points: ["Must comply with Companies (Incorporation) Rules", "Should avoid conflicts with registered trademarks", "Reserved for 20 days for incorporation filing"]
              },
              {
                step: "4",
                title: "Drafting MOA and AOA",
                desc: "The Memorandum of Association (MOA) and Articles of Association (AOA) are the most critical documents created for the company.",
                points: ["MOA defines objectives and operational scope", "AOA outlines internal rules and governance", "Rights of directors and shareholders defined"]
              },
              {
                step: "5",
                title: "Filing with Registrar of Companies",
                desc: "Incorporation forms are filed with the ROC through the MCA portal. Supporting documents like ID proofs and declarations are mandatory.",
                points: ["INC-32 (SPICe+) application for incorporation", "DIR-12 for appointment of directors", "INC-22 for registered office address"]
              },
              {
                step: "6",
                title: "Certificate of Incorporation (COI)",
                desc: "After successful verification, the ROC issues the Certificate of Incorporation (COI), legally confirming the company's existence.",
                points: ["Contains Company Identification Number (CIN)", "Official date of incorporation mentioned", "Conclusive proof of legal existence"]
              },
              {
                step: "7",
                title: "PAN and TAN Allocation",
                desc: "After incorporation, the company receives its unique tax identifiers issuing by the Income Tax Department.",
                points: ["PAN for income tax and financial identity", "TAN for tax deduction and collection (TDS)", "Essential for opening bank accounts"]
              },
              {
                step: "8",
                title: "Opening a Company Bank Account",
                desc: "The company must open a current account in its name. Banks generally require the COI, PAN, and constitutional documents.",
                points: ["Requires Board Resolution and COI", "KYC documents of all directors", "Allows legal business transactions"]
              },
              {
                step: "9",
                title: "Commencement of Business",
                desc: "Public companies must file a declaration for commencement of business within 180 days of incorporation.",
                points: ["Form INC-20A is mandatory filing", "Requires proof of share capital payment", "Crucial for starting legal operations"]
              }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all group">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                  <h4 className="text-lg font-bold flex items-center">
                    <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold group-hover:scale-110 transition-transform">{s.step}</span>
                    {s.title}
                  </h4>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                  <div className="space-y-2 mt-auto">
                    <p className="font-semibold text-dbiz-navy text-xs uppercase">Key Highlights:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {s.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-dbiz-teal mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center">Estimated Timeline for Registration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">1-2</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Days</p>
                <p className="text-xs text-gray-600 mt-1">DSC and DIN Acquisition</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">2-3</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Days</p>
                <p className="text-xs text-gray-600 mt-1">Name Reservation (RUN)</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">2-4</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Days</p>
                <p className="text-xs text-gray-600 mt-1">Document Preparation (MOA/AOA)</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">7-15</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Days</p>
                <p className="text-xs text-gray-600 mt-1">ROC Approval & Incorporation</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center hover:border-dbiz-teal/30 hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
                <div className="bg-dbiz-teal/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-dbiz-teal font-bold text-sm">20-30</span>
                </div>
                <p className="text-sm font-medium text-dbiz-navy">Working Days</p>
                <p className="text-xs text-gray-600 mt-1 font-bold">Total Registration Time</p>
              </div>
            </div>
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
                    D BIZ CONSULTANCY is a trusted business consultancy firm based in <span className="font-semibold text-dbiz-navy">Trivandrum and Kochi</span>, providing comprehensive support for business registrations, statutory compliance, taxation services, and corporate advisory.
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
      <section id="faqs" className="py-20 bg-gray-50 scroll-mt-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on Public Limited Company Registration</h2>
            <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're curious about the SPICe+ process, post-incorporation compliance, institutional investor interest, or stock exchange listing requirements — we've covered the most-searched questions with accurate, statute-aligned answers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={`faq-${index}`} 
                  value={`item-${index}`} 
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline text-left group-hover:bg-gray-50/50 transition-colors">
                    <span className="font-semibold text-dbiz-navy text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 bg-white">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default EnhancedPublicLimitedPage;
