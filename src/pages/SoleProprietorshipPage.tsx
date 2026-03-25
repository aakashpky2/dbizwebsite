
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowDownCircle,
  Phone,
  MessageCircle,
  Building2,
  Shield,
  Users,
  FileText,
  Briefcase,
  TrendingUp,
  ArrowRightLeft,
  AlertTriangle,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const soleContent = {
  description: "A Sole Proprietorship is the simplest form of business structure where a single individual owns and manages the business. The owner and the business are legally considered the same entity.",
  importance: [
    "Minimal regulatory formalities and low compliance requirements",
    "Complete control over business decisions",
    "Direct ownership of all profits",
    "Easy to establish and operate",
    "Suitable for small traders, freelancers, and individual consultants",
    "Flexible and cost-effective business management"
  ],
  faqs: [
    {
      question: "What is a Proprietorship?",
      answer: "A proprietorship is a business owned and managed by a single individual who is responsible for all operations, profits, and liabilities."
    },
    {
      question: "Who can start a proprietorship business?",
      answer: "Any individual who is an Indian citizen with valid PAN and Aadhaar can start a proprietorship business."
    },
    {
      question: "Is proprietorship registration mandatory in India?",
      answer: "There is no central registration for proprietorships. Businesses are usually established through GST registration, MSME registration, or Shop & Establishment license."
    },
    {
      question: "Can a proprietorship have employees?",
      answer: "Yes. A proprietor can hire employees to assist in business operations."
    },
    {
      question: "Is GST registration mandatory for proprietorship?",
      answer: "GST registration is required if turnover exceeds the GST threshold limit or if the business involves interstate supply."
    },
    {
      question: "Can a proprietorship have a business name?",
      answer: "Yes. The proprietor can operate under a trade name or business name different from their personal name."
    },
    {
      question: "Can a proprietorship open a bank account in business name?",
      answer: "Yes. A current account can be opened using business registration documents such as GST or Shop & Establishment certificate."
    },
    {
      question: "Is audit mandatory for proprietorship?",
      answer: "Audit is required only if the business crosses the audit limits prescribed under the Income Tax Act."
    },
    {
      question: "Can a proprietorship be converted into a company?",
      answer: "Yes. A proprietorship can be converted into Private Limited Company or LLP if the business expands."
    },
    {
      question: "What taxes apply to proprietorship businesses?",
      answer: "Business income is taxed under the individual income tax slab of the proprietor."
    },
    {
      question: "Can NRIs start a proprietorship in India?",
      answer: "Generally, proprietorship businesses are started by resident individuals in India."
    },
    {
      question: "What licenses may be required for proprietorship?",
      answer: "Depending on the business activity, licenses may include: • GST Registration • Shop & Establishment License • Trade License • MSME Registration"
    },
    {
      question: "Is there a minimum capital requirement?",
      answer: "No. There is no minimum capital requirement for starting a proprietorship."
    },
    {
      question: "What are the main advantages of proprietorship?",
      answer: "Key advantages include easy setup, minimal compliance, full control, and direct ownership of profits."
    },
    {
      question: "What are the disadvantages of proprietorship?",
      answer: "The main limitation is unlimited liability, where the owner is personally responsible for business debts."
    },
    {
      question: "Can a proprietorship operate online businesses?",
      answer: "Yes. Proprietorships can operate e-commerce businesses, consulting services, and online platforms."
    },
    {
      question: "Can a proprietorship register a trademark?",
      answer: "Yes. The proprietor can apply for trademark registration for the business brand name."
    },
    {
      question: "Can a proprietorship obtain MSME benefits?",
      answer: "Yes. With Udyam registration, proprietorships can access government schemes and financial support."
    },
    {
      question: "Can a proprietorship raise external investment?",
      answer: "Generally, proprietorships rely on personal funds or bank loans, as equity investment structures are not available."
    },
    {
      question: "Why choose D BIZ CONSULTANCY for proprietorship registration?",
      answer: "D BIZ CONSULTANCY provides end-to-end support including documentation, GST registration, MSME registration, and compliance guidance, ensuring a smooth and hassle-free business setup."
    }
  ]
};

const SoleProprietorshipPage = () => {
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

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-dbiz-teal text-sm font-medium mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal animate-pulse"></span>
                  Quick Registration • Business Setup • Compliance Support
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                  Proprietorship <span className="text-dbiz-teal">Registration</span>
                  {location && <span className="block text-2xl md:text-3xl mt-2 font-semibold">in {cityName}</span>}
                </h1>
                
                <p className="text-xl opacity-90 mb-10 leading-relaxed font-light max-w-2xl">
                  D BIZ CONSULTANCY provides complete Proprietorship registration services across India. Our expert team assists entrepreneurs in starting their business smoothly by helping with business registrations, GST registration, documentation, and compliance requirements.
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
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => handleSectionClick('benefits')}
                  >
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                  alt="Sole Proprietorship" 
                  className="w-full h-80 rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="sticky top-16 z-50 bg-white shadow-md border-b border-gray-200">
          <div className="container-custom py-2">
            <div className="flex items-center overflow-x-auto no-scrollbar">
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('overview') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('overview')}
              >
                <Building2 className="mr-2 h-4 w-4" /> Overview
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('features') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('features')}
              >
                <TrendingUp className="mr-2 h-4 w-4" /> Features
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('benefits') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('benefits')}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> Benefits
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('comparison')}
              >
                <ArrowRightLeft className="mr-2 h-4 w-4" /> Comparison
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('documents')}
              >
                <FileText className="mr-2 h-4 w-4" /> Documents
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('process')}
              >
                <Briefcase className="mr-2 h-4 w-4" /> Process
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('compliance') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('compliance')}
              >
                <Shield className="mr-2 h-4 w-4" /> Compliance
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('why-dbiz') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('why-dbiz')}
              >
                <Star className="mr-2 h-4 w-4" /> Why DBIZ
              </div>
              <div 
                className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('faqs') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`}
                onClick={() => handleSectionClick('faqs')}
              >
                <Users className="mr-3 h-4 w-4" /> FAQs
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section - Replicated Private Limited Design */}
        <section id="overview" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Primary Content Column */}
              <div className="lg:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-dbiz-navy mb-8">What is a Proprietorship?</h2>
                
                <div className="text-gray-700 space-y-6 text-lg leading-relaxed mb-12">
                  <p>
                    A Sole Proprietorship is the simplest form of business structure where the business is owned and managed by a single individual. In this structure, the owner and the business are legally considered the same entity.
                  </p>
                  <p>
                    A proprietorship allows an individual to start a business with minimal regulatory formalities and low compliance requirements. The owner has complete control over business decisions and is entitled to all profits generated by the business.
                  </p>
                  <p>
                    This structure is widely chosen by small traders, freelancers, consultants, and local businesses because it is easy to establish and operate.
                  </p>
                </div>

                {/* Minimum Requirements Horizontal Block */}
                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      "Single Owner to operate the business",
                      "PAN Card of the Proprietor",
                      "Business Address Proof",
                      "Bank Account in the Proprietor's Name",
                      "Registration under applicable laws (GST / Shops Act)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <p className="font-medium text-dbiz-navy text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative overflow-hidden group hover:border-dbiz-teal/20 transition-all mb-8">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                    <FileText size={120} className="text-dbiz-navy" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-dbiz-navy border-b border-gray-100 pb-3 font-outfit">Definition as per Business Law</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A Proprietorship is not governed by a specific statute like companies or LLPs. It is a business owned by one individual who is personally responsible for all business operations, profits, and liabilities.
                  </p>
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-dbiz-teal uppercase tracking-widest mb-1">Key characteristics include:</p>
                    {[
                      "The owner and business are legally the same entity",
                      "The proprietor has full control over business decisions",
                      "The proprietor is personally liable for business debts"
                    ].map((char, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed font-medium">{char}</span>
                      </div>
                    ))}
                  </div>

                  {/* Integrated Contact Box */}
                  <div className="mt-8 pt-8 border-t border-gray-100 group/contact">
                    <div className="flex items-center">
                      <div className="bg-dbiz-teal/10 p-3 rounded-full text-dbiz-teal group-hover/contact:scale-110 transition-transform">
                        <Phone size={20} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm text-gray-500 font-medium">Need expert guidance?</p>
                        <p className="text-dbiz-navy font-bold text-lg">Contact Our Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-24 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Key Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of a Proprietorship</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understand the core characteristics that make Proprietorship a preferred choice for small local businesses and freelancers across {cityName === 'India' ? 'India' : cityName}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Single Ownership",
                  desc: "A proprietorship is owned and controlled by one individual, who makes all business decisions and manages operations independently.",
                  icon: Users
                },
                {
                  title: "Simple Business Formation",
                  desc: "Proprietorships can be started easily without complex incorporation procedures. Registrations such as GST or MSME are generally sufficient.",
                  icon: Building2
                },
                {
                  title: "Complete Control",
                  desc: "The proprietor has full authority over management, finances, and operations, allowing quick decision-making without external approvals.",
                  icon: Shield
                },
                {
                  title: "Direct Profit Ownership",
                  desc: "All profits earned by the business belong directly to the proprietor. There is no requirement to share profits with partners or shareholders.",
                  icon: Briefcase
                },
                {
                  title: "Minimal Compliance",
                  desc: "Compared to companies and LLPs, proprietorships have lower regulatory compliance obligations, making them ideal for small startups.",
                  icon: TrendingUp
                },
                {
                  title: "Unlimited Liability",
                  desc: "Since the business and owner are legally the same, the proprietor is personally responsible for all business debts and liabilities.",
                  icon: CheckCircle2
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="bg-dbiz-teal/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dbiz-teal group-hover:text-white transition-colors duration-300">
                    <feature.icon className="h-7 w-7 text-dbiz-teal transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Replicating Private Limited Design with Updated Points */}
        <section id="benefits" className="py-24 bg-gray-50/30 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left Column: Heading & Image - Sticky */}
              <div className="lg:w-2/5">
                <div className="sticky top-32">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-semibold mb-6">
                    Benefits
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-8 leading-tight">
                    Benefits of a Sole <br /> <span className="text-dbiz-teal">Proprietorship</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    DBIZ CONSULTANCY helps entrepreneurs take advantage of simplicity, flexibility, and cost-effectiveness to start and manage their business with ease.
                  </p>

                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" 
                      alt="Entrepreneur Success" 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-dbiz-navy/40 to-transparent"></div>
                  </div>
                </div>
              </div>

                {/* Right Column: Benefits Checklist Cards - Expanded to 9 points */}
                <div className="lg:w-3/5 space-y-4">
                  {[
                    "Easy and low-cost business setup with minimal documentation and quick registration process",
                    "Full control over business operations allowing the owner to make independent decisions without approvals",
                    "Minimal regulatory compliance compared to companies, reducing administrative burden and costs",
                    "Direct ownership of profits with no sharing, enabling better personal income management",
                    "Flexible business decision-making with the ability to adapt quickly to market changes",
                    "Suitable for small and local businesses, freelancers, and individual service providers",
                    "Simple taxation structure with income taxed as personal income of the proprietor",
                    "Easy closure or exit without complex legal procedures",
                    "Ideal for testing new business ideas with low risk and investment"
                  ].map((benefit, i) => (
                    <div 
                      key={i} 
                      className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center shadow-sm hover:shadow-md hover:border-dbiz-teal/20 transition-all group animate-fade-in"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-full bg-dbiz-teal/10 flex items-center justify-center mr-5 flex-shrink-0 text-dbiz-teal group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </section>        {/* Comparison Section */}
        <section id="comparison" className="py-24 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Comparison of Business Structures</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understand why Sole Proprietorship is a simple and practical choice for individuals starting a business compared to other legal entities.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead className="py-5 px-6 text-dbiz-navy font-bold text-base">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-5 px-6 text-dbiz-teal font-bold text-base">Sole Proprietorship</TableHead>
                      <TableHead className="py-5 px-6 text-dbiz-navy font-bold text-base">Private Limited</TableHead>
                      <TableHead className="py-5 px-6 text-dbiz-navy font-bold text-base">LLP</TableHead>
                      <TableHead className="py-5 px-6 text-dbiz-navy font-bold text-base">Partnership</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { f: "Liability", sp: "Unlimited (owner responsible)", pl: "Limited to shares", llp: "Limited to contribution", p: "Unlimited" },
                      { f: "Legal Entity", sp: "Not separate", pl: "Separate entity", llp: "Separate entity", p: "Not separate" },
                      { f: "Ownership", sp: "Single owner", pl: "2–200 shareholders", llp: "2+ partners", p: "2–50 partners" },
                      { f: "Tax Rate", sp: "Individual income tax slab", pl: "Corporate tax (with conditions)", llp: "Flat 30%", p: "Flat 30%" },
                      { f: "Compliance", sp: "Minimal compliance", pl: "High compliance", llp: "Moderate", p: "Minimal" },
                      { f: "Decision Making", sp: "Fully independent", pl: "Structured and slower", llp: "Moderate", p: "Fast and flexible" },
                      { f: "Cost of Setup", sp: "Very low", pl: "Higher cost", llp: "Moderate", p: "Low cost" },
                      { f: "Best For", sp: "Freelancers, individuals, small traders", pl: "Startups, scalable businesses", llp: "Growing businesses", p: "Small businesses, professionals" }
                    ].map((row, i) => (
                      <TableRow key={i} className="hover:bg-gray-50/50 transition-colors">
                        <TableCell className="py-4 px-6 font-semibold text-dbiz-navy border-r border-gray-100">{row.f}</TableCell>
                        <TableCell className="py-4 px-6 bg-dbiz-teal/5 font-medium text-dbiz-navy border-r border-gray-100">{row.sp}</TableCell>
                        <TableCell className="py-4 px-6 text-gray-700 border-r border-gray-100">{row.pl}</TableCell>
                        <TableCell className="py-4 px-6 text-gray-700 border-r border-gray-100">{row.llp}</TableCell>
                        <TableCell className="py-4 px-6 text-gray-700">{row.p}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Documentation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for Proprietorship</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                DBIZ CONSULTANCY assists clients with collecting, verifying, and preparing all required documentation for smooth Proprietorship registration and setup.
              </p>
            </div>

            {/* Rejection Prevention Alert Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
              <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 mb-2 text-lg">Common Rejection Prevention Tips</p>
                <ul className="text-amber-800 space-y-2 font-medium">
                  {["Name and spelling must match across PAN, Aadhaar, and all submitted documents",
                    "Address proof should be consistent and clearly readable",
                    "Business address documents must match (utility bill, rent agreement, and NOC if applicable)",
                    "Utility bills and bank statements should be dated within the last 2 months",
                    "Ensure all documents are valid, clear, and not expired"].map((tip, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="mr-2">•</span> {tip}
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category 1: For Proprietor */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Proprietor</h3>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Identity Proof</p>
                      <p className="text-gray-600 mt-1">PAN Card (Mandatory), Aadhaar Card, Passport, Voter ID</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Address Proof</p>
                      <p className="text-gray-600 mt-1">Utility Bills, Bank Statements (latest 2 months), or any valid proof</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Photographs</p>
                      <p className="text-gray-600 mt-1">Recent passport-sized photographs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2: For Foreign Nationals */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Foreign Nationals / NRIs</h3>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Identity Proof</p>
                      <p className="text-gray-600 mt-1">Passport (Mandatory)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Address Proof</p>
                      <p className="text-gray-600 mt-1">Driving License, Bank Statement, or Residence Card</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Notarization / Apostille</p>
                      <p className="text-gray-600 mt-1 font-medium italic opacity-80">May be required depending on applicable regulations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 3: For Proprietorship Registration */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Proprietorship Registration</h3>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Business Proof (Any One)</p>
                      <p className="text-gray-600 mt-1">GST Certificate, Udyam (MSME), Shop Act, or Trade License</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">PAN of Proprietor</p>
                      <p className="text-gray-600 mt-1">Mandatory for taxation and business registration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Bank Account Opening</p>
                      <p className="text-gray-600 mt-1">Current account requires PAN, Business proof, and KYC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4: For Business Address */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-xl font-bold">For Business Address</h3>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Rent Agreement + NOC</p>
                      <p className="text-gray-600 mt-1">For rented premises, along with NOC from the owner</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Property Documents</p>
                      <p className="text-gray-600 mt-1">Ownership proof if the premises is owned</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-dbiz-navy">Utility Bills</p>
                      <p className="text-gray-600 mt-1">Electricity or water bill where address exactly matches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 bg-dbiz-teal/5 p-6 rounded-2xl border border-dbiz-teal/20 text-center relative overflow-hidden group max-w-3xl mx-auto">
              <div className="absolute top-0 right-0 w-24 h-24 bg-dbiz-teal/10 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-dbiz-navy/5 rounded-full -ml-12 -mb-12 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-dbiz-navy font-bold text-xl mb-4 text-center">Important Note</h3>
                <p className="text-gray-800 font-semibold mb-4 text-sm">Proper documentation is essential for:</p>
                <div className="flex flex-col items-center space-y-2 mb-6">
                  {["Opening a current account", "Obtaining GST or other registrations", "Avoiding delays or rejection"].map((point, i) => (
                    <div key={i} className="flex items-center text-gray-700 font-medium tracking-tight text-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-dbiz-teal mr-2" />
                      {point}
                    </div>
                  ))}
                </div>
                <p className="text-dbiz-navy font-bold text-base italic mt-2 border-t border-dbiz-teal/10 pt-4">
                  DBIZ CONSULTANCY ensures complete document verification and smooth processing at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process Section */}
        <section id="process" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-dbiz-navy mb-8">
                Step-by-Step Proprietorship Registration Process
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                A Sole Proprietorship is the simplest form of business structure, where a single individual owns and manages the business. The setup process is straightforward and mainly involves obtaining necessary registrations and opening a bank account to conduct business transactions legally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Choose Business Name",
                  desc: "The first step is selecting a unique and suitable name for the business. Points to consider:",
                  points: [
                    "The name should not conflict with existing registered brands or businesses",
                    "It should reflect the nature of the business",
                    "The name will be used in all registrations and banking"
                  ]
                },
                {
                  step: "2",
                  title: "Obtain PAN of Proprietor",
                  desc: "A PAN Card of the proprietor is mandatory for taxation and financial transactions. PAN is required for:",
                  points: [
                    "Opening a bank account",
                    "Filing income tax returns",
                    "Applying for business registrations"
                  ]
                },
                {
                  step: "3",
                  title: "Obtain Basic Business Registration",
                  desc: "To establish the existence of the proprietorship, at least one registration is required:",
                  points: [
                    "GST Registration or Udyam (MSME) Registration",
                    "Shop & Establishment License",
                    "Trade License (if applicable)"
                  ]
                },
                {
                  step: "4",
                  title: "Open Current Bank Account",
                  desc: "A current account is opened in the business name to handle all transactions. Documents required:",
                  points: [
                    "PAN of proprietor",
                    "Business registration proof (GST / Udyam / License)",
                    "Address proof and KYC documents"
                  ]
                },
                {
                   step: "5",
                   title: "GST Registration (If Applicable)",
                   desc: "GST registration is required in cases such as:",
                   points: [
                     "Turnover exceeding prescribed limits",
                     "Interstate supply of goods/services",
                     "Online or e-commerce business"
                   ]
                 },
                 {
                   step: "6",
                   title: "Commencement of Business",
                   desc: "Once registrations and bank accounts are completed, the business can begin operations. Ensure:",
                   points: [
                     "Proper billing and invoicing",
                     "Maintenance of books of accounts",
                     "Compliance with applicable tax laws"
                   ]
                 }
              ].map((process, i) => (
                <div key={i} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:shadow-dbiz-navy/10 transition-all duration-300">
                  {/* Card Header */}
                  <div className="bg-[#0a2540] p-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white text-[#0a2540] flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {process.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 flex-grow">
                    <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                      {process.desc}
                    </p>
                    <div className="space-y-4">
                      {process.points.map((point, idx) => (
                        <div key={idx} className="flex items-start text-gray-600">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-1 flex-shrink-0" />
                          <span className="font-normal leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto shadow-sm">
              <div className="bg-[#0a2540]/5 p-5 rounded-2xl">
                 <FileText className="h-12 w-12 text-[#0a2540]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-[#0a2540] font-bold text-xl mb-3">Important Note</p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  A proprietorship does not require complex approvals or incorporation procedures. However, proper registration and documentation are essential for smooth operations, banking, and compliance. DBIZ CONSULTANCY ensures quick setup, proper registration, and complete support from start to business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="py-24 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Ongoing Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Basic Compliance Requirements</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Starting a Sole Proprietorship is simple, but maintaining proper compliance is essential for smooth business operations and avoiding penalties.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden mb-16">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-dbiz-navy hover:bg-dbiz-navy">
                      <TableHead className="py-5 px-6 text-white font-bold text-base">Aspect</TableHead>
                      <TableHead className="py-5 px-6 text-dbiz-teal font-bold text-base">Compliance Requirement</TableHead>
                      <TableHead className="py-5 px-6 text-white font-bold text-base">Frequency</TableHead>
                      <TableHead className="py-5 px-6 text-white font-bold text-base">Why It's Important</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { a: "PAN & Tax", r: "Maintain PAN and link with activities", f: "One-time", w: "Taxation, banking, financial control" },
                      { a: "Books of Accounts", r: "Maintain records of income/expenses", f: "Continuous", w: "Track performance and tax filing" },
                      { a: "Income Tax", r: "File return in personal name (ITR-3/4)", f: "Annually", w: "Ensures compliance, avoids penalties" },
                      { a: "GST Compliance", r: "File returns like GSTR-1, GSTR-3B", f: "Monthly/Quarterly", w: "Mandatory if GST registered" },
                      { a: "Audit", r: "Conduct audit if criteria met", f: "Annually", w: "Authenticates financial correctness" },
                      { a: "Licenses", r: "Renew licenses (Shop/Trade)", f: "As per rules", w: "Ensures business legality" },
                      { a: "Bank Trans.", r: "Maintain transactions via Current account", f: "Ongoing", w: "Ensures transparency and control" },
                      { a: "MSME etc.", r: "Maintain Udyam/other registrations", f: "As required", w: "Help in availing benefits/subsidies" }
                    ].map((row, i) => (
                      <TableRow key={i} className="hover:bg-gray-50/50 transition-colors">
                        <TableCell className="py-4 px-6 font-bold text-dbiz-navy">{row.a}</TableCell>
                        <TableCell className="py-4 px-6 font-medium text-gray-700">{row.r}</TableCell>
                        <TableCell className="py-4 px-6 text-gray-600 italic">{row.f}</TableCell>
                        <TableCell className="py-4 px-6 text-gray-600 text-sm leading-relaxed">{row.w}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="bg-dbiz-navy/5 p-8 rounded-2xl border border-dbiz-navy/10 mb-8">
               <h3 className="text-dbiz-navy font-bold text-lg mb-6">Important Notes</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   "No requirement for board meetings, AGM, or corporate filings",
                   "No requirement for separate legal compliance filings like companies",
                   "Compliance is mainly individual based (owner level)",
                   "Business and owners are treated as the same legal entity"
                 ].map((note, i) => (
                   <div key={i} className="flex items-start">
                     <div className="w-1.5 h-1.5 rounded-full bg-dbiz-teal mt-2 mr-3 flex-shrink-0"></div>
                     <p className="text-gray-700 font-medium text-sm leading-relaxed">{note}</p>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-16">
               <h3 className="text-dbiz-navy font-bold text-lg mb-4">Simplified Compliance Advantage</h3>
               <p className="text-gray-600 mb-6 font-medium">Sole Proprietorship offers:</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                   "Very low compliance burden",
                   "Minimal regulatory requirements",
                   "Easy maintenance of records",
                   "Cost-effective compliance management"
                 ].map((adv, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                     <span className="text-dbiz-navy font-semibold text-sm leading-snug">{adv}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Post-Registration Compliance Timeline</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4">
              {[
                { label: "Immediate", task: "PAN and Bank Account Setup", milestone: "Start" },
                { label: "Operations", task: "Maintain books of accounts and proper billing", milestone: "Ongoing" },
                { label: "Annual Cycle", task: "Income Tax Filing → GST Returns (if applicable) → Audit (if required)", milestone: "FY End" }
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-dbiz-teal/5 rounded-full -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-700"></div>
                  
                  <p className="text-xl font-bold text-dbiz-teal mb-0.5 tracking-tight">
                    {card.milestone}
                  </p>
                  <p className="text-dbiz-navy font-bold text-[13px] mb-3">
                    {card.label}
                  </p>
                  <p className="text-gray-500 font-normal text-[11px] leading-relaxed max-w-[150px] mx-auto">
                    {card.task}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
               <p className="text-gray-400 text-sm italic">Last updated: March 2026</p>
            </div>

            <div className="mt-16 space-y-16">
              {/* Registration Timeline Cards */}
              <div>
                <h4 className="text-xl font-bold text-dbiz-navy mb-8 text-center italic border-b border-dbiz-teal/20 pb-4 max-w-lg mx-auto">
                  Timeline for Proprietorship Registration
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                  {[
                    { milestone: "1-2", label: "Days", task: "Document Preparation" },
                    { milestone: "2-5", label: "Days", task: "GST / MSME Registration" },
                    { milestone: "2-3", label: "Days", task: "Bank Account Opening" },
                    { milestone: "3-7", label: "Working Days", task: "Total Setup Time", highlight: true }
                  ].map((card, i) => (
                    <div key={i} className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden h-36">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-dbiz-teal/5 rounded-full -mr-8 -mt-8 group-hover:scale-125 transition-transform duration-700"></div>
                      
                      <p className="text-xl font-bold text-dbiz-teal mb-0.5 tracking-tight">
                        {card.milestone}
                      </p>
                      <p className="text-dbiz-navy font-bold text-[13px] mb-2">
                        {card.label}
                      </p>
                      <p className="text-gray-500 font-normal text-[11px] leading-relaxed max-w-[150px] mx-auto">
                        {card.task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mandatory Compliance Cards */}
              <div>
                <h4 className="text-xl font-bold text-dbiz-navy mb-8 text-center italic border-b border-dbiz-teal/20 pb-4 max-w-lg mx-auto">
                  Mandatory Compliance for Proprietorship
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                  {[
                    { milestone: "Monthly", label: "GST Filing", task: "GST Return Filing (if applicable)" },
                    { milestone: "Annual", label: "ITR Filing", task: "Income Tax Return (ITR-3 / ITR-4)" },
                    { milestone: "Renewal", label: "Licenses", task: "Business License Renewal (Local Rules)" }
                  ].map((card, i) => (
                    <div key={i} className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-36">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-dbiz-teal/5 rounded-full -mr-8 -mt-8"></div>
                      <p className="text-xl font-bold text-dbiz-teal mb-0.5 tracking-tight">
                        {card.milestone}
                      </p>
                      <p className="text-dbiz-navy font-bold text-[13px] mb-2">
                        {card.label}
                      </p>
                      <p className="text-gray-500 font-normal text-[11px] leading-relaxed max-w-[150px] mx-auto">
                        {card.task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-gray-400 text-sm italic">
              Last updated: March 2026
            </div>
          </div>
        </section>

        {/* Why DBIZ Section */}
        <section id="why-dbiz" className="py-24 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why DBIZ CONSULTANCY for Proprietorship Registration?</h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Starting a Sole Proprietorship is one of the simplest ways to begin a business. However, selecting the right registrations, preparing proper documentation, and ensuring compliance with tax and regulatory requirements are essential for smooth operations.
                </p>
                <p>
                  That’s where DBIZ CONSULTANCY plays a key role — by helping you set up your business quickly, correctly, and with complete clarity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Box 1: What DBIZ Handles */}
              <div className="bg-cyan-50/20 rounded-3xl p-8 md:p-10 border border-cyan-100 shadow-sm transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-cyan-100 p-2.5 rounded-xl">
                    <CheckCircle2 className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-dbiz-navy">What DBIZ Handles</h3>
                </div>
                
                <div className="space-y-5">
                  {[
                    "Guidance in selecting the appropriate business registration (GST / Udyam / Shop License)",
                    "Assistance in business name selection and basic verification",
                    "Complete document validation and review",
                    "PAN-based business setup guidance",
                    "Support in current account opening",
                    "GST registration assistance (if applicable)",
                    "Udyam (MSME) registration support",
                    "Shop & Establishment / Trade License assistance (if required)",
                    "Handling corrections or rework in documentation (if required)",
                    "Post-setup compliance guidance and reminders"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <div className="bg-white rounded-full p-1 mr-4 mt-0.5 shadow-sm border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 group-hover:text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-[15px] leading-relaxed group-hover:text-dbiz-navy transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 2: What You Provide */}
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-md transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-dbiz-navy/10 p-2.5 rounded-xl">
                    <FileText className="h-7 w-7 text-dbiz-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-dbiz-navy">What You Provide</h3>
                </div>
                
                <div className="space-y-5">
                  {[
                    "Identity and address proof of proprietor",
                    "Passport-sized photographs",
                    "Business address proof (rent agreement / ownership documents)",
                    "Business activity details",
                    "Basic bank details (if required for setup)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                      <ArrowRight className="h-5 w-5 text-gray-400 mr-4 mt-1 flex-shrink-0 group-hover:text-dbiz-teal transition-all duration-300 group-hover:translate-x-1" />
                      <span className="text-gray-700 font-medium text-[15px] leading-relaxed group-hover:text-dbiz-navy transition-colors">{item}</span>
                    </div>
                  ))}
                </div>


              </div>
            </div>

            <div className="bg-[#0b1b35] rounded-[48px] p-8 md:p-12 text-white relative shadow-2xl border border-white/5">
              {/* Decorative elements - contained separately to allow sticky child */}
              <div className="absolute inset-0 rounded-[48px] overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dbiz-teal/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
                <div>
                  <h3 className="text-lg font-bold mb-6 leading-relaxed tracking-tight">
                    That's where DBIZ CONSULTANCY comes in. We make the process simple and stress-free by handling all the details for you.
                  </h3>
                  <div className="space-y-6 opacity-90 text-lg leading-relaxed font-normal text-gray-300">
                    <p>
                      DBIZ CONSULTANCY simplifies the entire process by handling documentation, guiding you on the right registrations, and ensuring accuracy at every stage. Our approach helps you avoid delays, rejections, and compliance issues. From initial setup to ongoing support, we ensure your business starts smoothly and operates without interruptions.
                    </p>
                  </div>
                </div>

                <div className="lg:sticky lg:top-32 grid grid-cols-1 sm:grid-cols-2 gap-6 z-0">
                  {[
                    { t: "Expert Guidance", d: "Professional support for selecting the right registrations and business setup" },
                    { t: "End-to-End Service", d: "Complete assistance from registration to compliance" },
                    { t: "Transparent Process", d: "Clear communication with no hidden charges" },
                    { t: "Timely Delivery", d: "Quick and efficient execution of all services" }
                  ].map((card, i) => (
                    <div key={i} className="bg-[#112240] border border-white/5 p-6 rounded-3xl hover:bg-[#1a365d] transition-all duration-300 group shadow-lg">
                      <div className="bg-dbiz-teal/10 w-10 h-10 rounded-full flex items-center justify-center mb-4 border border-dbiz-teal/20 group-hover:bg-dbiz-teal group-hover:border-dbiz-teal transition-all duration-300">
                        <CheckCircle2 className="h-4 w-4 text-dbiz-teal group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 tracking-tight">{card.t}</h4>
                      <p className="text-gray-400 text-[13px] leading-relaxed font-normal">{card.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-gray-50 scroll-mt-32 relative z-40">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dbiz-navy mb-4">FAQs on Proprietorship Registration</h2>
              <p className="text-[13px] text-gray-500 mb-6 italic">Last updated: March 2026</p>
              <p className="text-base text-gray-600 leading-relaxed font-medium">
                Whether you're exploring how to start a proprietorship, required registrations, taxation, or day-to-day compliance — here are the most commonly asked questions explained in a simple and practical manner.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {soleContent.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left group-hover:bg-gray-50/50 transition-colors">
                      <span className="font-semibold text-dbiz-navy text-[15px] leading-relaxed">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-50">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <div className="relative z-40 bg-white">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default SoleProprietorshipPage;