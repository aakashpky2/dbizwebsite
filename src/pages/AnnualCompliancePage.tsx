
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowDownCircle, Phone, MessageCircle, Building2, Shield, Users, FileText, Calendar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";

const phoneNumber = "+918075273408";

const ContactOptions = () => (
  <div className="grid grid-cols-2 gap-3 p-2">
    <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-dbiz-teal text-white px-4 py-2 rounded-md hover:bg-dbiz-teal/90 transition-colors">
      <Phone size={16} /><span>Call</span>
    </a>
    <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
      <MessageCircle size={16} /><span>WhatsApp</span>
    </a>
  </div>
);

const content = {
  description: "Annual Compliance services ensure your company meets all statutory requirements under the Companies Act, 2013. From annual returns to financial statements, we handle all your compliance needs professionally.",
  benefits: [
    "Avoid Penalties: Stay compliant and avoid fines up to ₹1 lakh per day",
    "Maintain Active Status: Prevent your company from being marked as defaulter",
    "Director Protection: Protect directors from disqualification",
    "Business Credibility: Enhance trust with stakeholders and investors",
    "Loan Eligibility: Banks require compliance for financing",
    "Smooth Operations: Avoid operational disruptions due to non-compliance"
  ],
  features: [
    { title: "Annual Return (MGT-7)", description: "Filing of annual return with company details and shareholding pattern" },
    { title: "Financial Statements (AOC-4)", description: "Filing of audited financial statements with ROC" },
    { title: "Director KYC (DIR-3 KYC)", description: "Annual KYC update for all directors" },
    { title: "Board Meetings", description: "Conduct minimum 4 board meetings annually" },
    { title: "Annual General Meeting", description: "Organize and document AGM proceedings" },
    { title: "Statutory Registers", description: "Maintain all registers as per Companies Act" }
  ],
  faqs: [
    { question: "What is annual compliance for companies?", answer: "Annual compliance refers to the mandatory filings and meetings that every company must complete each year as per the Companies Act, 2013. This includes filing annual returns, financial statements, and conducting board meetings and AGMs." },
    { question: "What is the due date for annual return filing?", answer: "Annual return (MGT-7) must be filed within 60 days from the date of AGM. Financial statements (AOC-4) must be filed within 30 days from the date of AGM." },
    { question: "What happens if I miss the compliance deadlines?", answer: "Missing deadlines results in additional fees of ₹100 per day. Continued non-compliance can lead to company being marked as defaulter, director disqualification, and penalties up to ₹1 lakh per day." },
    { question: "Is DIR-3 KYC mandatory every year?", answer: "Yes, all directors must update their KYC details annually through DIR-3 KYC form. The due date is typically September 30th of each year." }
  ]
};

const AnnualCompliancePage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  
  if (location && !isValidLocation) {
    return <NotFound />;
  }

  const cityName = location 
    ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) 
    : "";

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" 
              alt="Compliance Background" 
              className="w-full h-full object-cover"
              fetchpriority="high"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-3xl animate-fade-in">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Statutory Compliance
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Annual Compliance Services{cityName && <span className="block text-2xl md:text-3xl mt-2 text-dbiz-teal">in {cityName}</span>}
                </h1>
                <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl">
                  Ensure your company remains in good standing with the Ministry of Corporate Affairs. We handle all mandatory annual filings, board meetings, and statutory audits with 100% accuracy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 h-14 text-lg">
                        <Phone className="mr-2 h-5 w-5" /> Contact Us Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 hover:bg-white/20 border-white/20 text-white px-8 h-14 text-lg"
                    onClick={() => handleSectionClick('overview')}
                  >
                    <ArrowDownCircle className="mr-2 h-5 w-5" /> Explore Services
                  </Button>
                </div>
              </div>
              <div className="hidden md:block animate-on-scroll">
                <div className="relative">
                  <div className="absolute -inset-4 bg-dbiz-teal/20 rounded-2xl blur-2xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" 
                    alt="Annual Compliance Documentation" 
                    className="relative w-full h-[450px] rounded-2xl shadow-2xl object-cover border border-white/10"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-[240px]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-dbiz-teal/10 p-2 rounded-lg">
                        <Shield className="h-6 w-6 text-dbiz-teal" />
                      </div>
                      <p className="font-bold text-dbiz-navy">Fully Compliant</p>
                    </div>
                    <p className="text-sm text-gray-500">Expert filing for AOC-4, MGT-7, and Auditor forms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom">
            <div className="flex items-center justify-start overflow-x-auto no-scrollbar gap-8">
              {[
                { id: 'overview', label: 'Overview', icon: Building2 },
                { id: 'features', label: 'Services', icon: FileText },
                { id: 'benefits', label: 'Benefits', icon: Shield },
                { id: 'process', label: 'Process', icon: FileCheck },
                { id: 'deadlines', label: 'Deadlines', icon: Clock },
                { id: 'penalties', label: 'Penalties', icon: AlertTriangle },
                { id: 'faqs', label: 'FAQs', icon: Users },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 transition-all whitespace-nowrap font-medium ${
                    activeSection === item.id 
                      ? 'border-dbiz-teal text-dbiz-teal' 
                      : 'border-transparent text-gray-500 hover:text-dbiz-navy'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-8">Comprehensive Annual Compliance Management</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Annual compliance is not just a legal requirement but a hallmark of a healthy, growing business. In India, every registered company must file various forms and returns with the Ministry of Corporate Affairs (MCA) to report its financial performance and governance activities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At D BIZ CONSULTANCY, we simplify the complex world of statutory filings. Our team of experts ensures that your books are in order, your board meetings are documented, and your returns are filed well within the deadlines—protecting you from heavy penalties and legal risks.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { label: "MCA Filings", value: "100%", sub: "Accuracy Rate" },
                  { label: "Clients", value: "500+", sub: "Satisfied Businesses" },
                  { label: "Experts", value: "15+", sub: "Compliance Officers" },
                  { label: "Support", value: "24/7", sub: "Dedicated Assistance" }
                ].map((stat, i) => (
                  <div key={i} className="bg-dbiz-navy/5 p-6 rounded-2xl border border-dbiz-navy/5 text-center">
                    <p className="text-3xl font-bold text-dbiz-navy mb-1">{stat.value}</p>
                    <p className="text-sm font-semibold text-dbiz-teal uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-gray-50 scroll-mt-32 rounded-[3rem]">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Our Annual Compliance Portfolio</h2>
              <p className="text-lg text-gray-600">We provide a full spectrum of statutory services to keep your company legally secure and operationally smooth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Financials (AOC-4)", desc: "Mandatory filing of audited balance sheets and profit & loss accounts.", icon: FileText },
                { title: "Annual Return (MGT-7)", desc: "Filing detailed shareholding and director information with the ROC.", icon: Calendar },
                { title: "Director KYC (DIR-3)", desc: "Annual verification of director identification data to maintain DIN status.", icon: Users },
                { title: "Auditor Appointment", desc: "Filing Form ADT-1 for appointment or change of statutory auditors.", icon: Shield },
                { title: "Board Resolutions", desc: "Drafting and maintaining minutes for board and general meetings.", icon: FileCheck },
                { title: "Event-based Filings", desc: "Handling changes in directors, capital, or registered office address.", icon: AlertTriangle }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div className="bg-dbiz-teal/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dbiz-teal group-hover:text-white transition-colors">
                    <service.icon className="h-7 w-7 text-dbiz-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dbiz-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="grid gap-6">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="bg-dbiz-teal/20 p-2 rounded-full mt-1">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-dbiz-navy">{benefit.split(':')[0]}</p>
                        <p className="text-gray-600">{benefit.split(':')[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-8">Why Timely Compliance Matters?</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Statutory compliance is the backbone of business sustainability. Beyond legal safety, it opens doors to institutional funding, enhances valuation during M&A, and builds an impeccable reputation with vendors and employees.
                </p>
                <div className="bg-dbiz-navy p-8 rounded-2xl text-white">
                  <p className="text-xl font-semibold mb-4 italic">"Compliance is an investment in your company's future, not just a cost of doing business."</p>
                  <p className="text-dbiz-teal font-bold">— DBIZ Experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Compliance Process Section */}
        <section id="process" className="py-24 bg-white scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Execution Workflow
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Our 4-Step Compliance Workflow</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We've streamlined the annual filing process to minimize your involvement while ensuring 100% statutory accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  step: 1, 
                  title: "Document Collection", 
                  desc: "We gather audited financials, board minutes, and director declarations through our secure portal.",
                  details: ["Audited Balance Sheet & P&L", "Bank Statements", "Director KYC Documents"]
                },
                { 
                  step: 2, 
                  title: "Drafting & Verification", 
                  desc: "Our legal team drafts the AOC-4, MGT-7, and necessary resolutions for your review.",
                  details: ["Form drafting by experts", "Internal audit check", "Cross-verification with MCA data"]
                },
                { 
                  step: 3, 
                  title: "Professional Certification", 
                  desc: "Forms are certified by a practicing CA, CS, or CMA as required by the Companies Act.",
                  details: ["DSC Attachment", "Statutory Certification", "Final approval from Directors"]
                },
                { 
                  step: 4, 
                  title: "Filing & Confirmation", 
                  desc: "We file the forms on the MCA portal and share the official SRN receipts with you.",
                  details: ["Electronic submission", "SRN Tracking", "Final Document Archival"]
                }
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full hover:border-dbiz-teal/30 transition-all">
                  <div className="bg-dbiz-navy p-5 flex items-center gap-4">
                    <div className="bg-white text-dbiz-navy w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm">{step.step}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-gray-700 mb-6 leading-relaxed font-medium">{step.desc}</p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-dbiz-navy shrink-0 mt-0.5" />
                          <span className="ml-3 text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Removed D BIZ ADVANTAGE block */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <div id="deadlines" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Important Timelines</p>
              <h4 className="consultancy-heading">Annual Compliance Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Financials (AOC-4)", due: "30 Days from AGM", desc: "Submission of audited financial statements including Balance Sheet and P&L." },
                  { title: "Annual Return (MGT-7)", due: "60 Days from AGM", desc: "Statutory return providing details of shareholders, directors, and shareholding." },
                  { title: "Director KYC (DIR-3)", due: "By 30th September", desc: "Mandatory annual KYC update for all individuals holding a DIN." },
                  { title: "Auditor (ADT-1)", due: "Within 15 Days", desc: "Filing for auditor appointment or reappointment following the AGM." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all">
                    <Clock className="h-6 w-6 text-dbiz-teal shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-dbiz-navy text-lg">{item.title}</p>
                      <p className="text-dbiz-teal font-bold text-sm mb-1">{item.due}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Penalties Section */}
        <div id="penalties" className="py-24 bg-gray-50/50 scroll-mt-32 rounded-[3rem]">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Risk Assessment</p>
              <h4 className="consultancy-heading">Consequences of Non-Compliance</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Standard Late Fees", desc: "An additional fee of ₹100 per day is charged for each day of delay in filing MCA forms." },
                  { title: "Director Disqualification", desc: "Failure to file returns for 3 consecutive years leads to disqualification of all directors." },
                  { title: "Company Strike-off", desc: "Notice for striking off the company name from the register is issued for significant defaults." },
                  { title: "High Penalty Fines", desc: "Severe defaults can lead to heavy fines up to ₹5 Lakhs on the company and its officers." }
                ].map((item, i) => (
                  <div key={i} className="penalty-inner-card">
                    <div className="penalty-header">
                      <div className="penalty-dot"></div>
                      <span className="penalty-title">{item.title}</span>
                    </div>
                    <p className="penalty-desc text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="faqs" className="py-24 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-dbiz-navy mb-4">Statutory FAQs</h2>
              <p className="text-gray-600">Quick answers to common questions about Indian corporate compliance.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="text-left text-lg font-semibold text-dbiz-navy hover:text-dbiz-teal hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center animate-on-scroll pb-16">
           <h3 className="text-3xl font-bold text-dbiz-navy mb-6">Our Commitment</h3>
           <p className="max-w-4xl mx-auto text-[19.125px] text-gray-700 leading-relaxed font-medium px-4">
             With deep expertise in corporate law and MCA regulations, DBIZ CONSULTANCY is the gold standard for statutory compliances in India. We handle the entire filing lifecycle—so you can focus on growing your business with absolute peace of mind.
           </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnnualCompliancePage;
