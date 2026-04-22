
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowDownCircle, Phone, MessageCircle, Building2, Shield, Users, Clock, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  description: "12A and 80G registrations are crucial for NGOs and charitable trusts to receive tax exemptions and enable donors to claim tax deductions. These registrations provide credibility and encourage donations.",
  importance: [
    "Tax Exemption: Organizations get exemption from income tax on their surplus.",
    "Donor Benefits: Donors can claim tax deductions on their donations.",
    "Enhanced Credibility: Increases trust and credibility among stakeholders.",
    "Increased Donations: Attracts more donors due to tax benefits.",
    "Compliance: Ensures legal compliance with Income Tax Act.",
    "Long-term Benefits: Valid for perpetuity unless cancelled."
  ],
  faqs: [
    { question: "What is 12A Registration?", answer: "12A registration provides tax exemption to NGOs, trusts, and charitable organizations on their surplus income. It exempts the organization from paying income tax on their receipts." },
    { question: "What is 80G Registration?", answer: "80G registration allows donors to claim tax deductions on donations made to the registered organization. Donors can claim 50% or 100% deduction depending on the category." },
    { question: "Who is eligible for 12A & 80G registration?", answer: "NGOs, charitable trusts, Section 8 companies, and other non-profit organizations engaged in charitable, religious, educational, or social welfare activities are eligible." },
    { question: "What is the validity period?", answer: "Both 12A and 80G registrations are generally valid in perpetuity unless cancelled by the Income Tax Department for non-compliance or violation of conditions." }
  ]
};

const TwelveAEightyGPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);
  if (location && !isValidLocation) return <NotFound />;
  const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";

  const handleSectionClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 160;
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
        <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  12A & 80G Registration{location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
                </h1>
                <p className="text-lg opacity-90 mb-8 leading-relaxed">{content.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="lg" className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                        <Phone className="mr-2 h-4 w-4" /> Contact Us Today
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0"><ContactOptions /></PopoverContent>
                  </Popover>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => handleSectionClick('benefits')}>
                    <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433" alt="12A 80G" className="w-full h-80 rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'benefits', icon: CheckCircle2, label: 'Benefits' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: AlertTriangle, label: 'Penalties' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[14px] font-medium transition-all duration-300 ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }}
                >
                  <item.icon className={`mr-1.5 h-3.5 w-3.5 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is 12A & 80G Registration?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.importance.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                  <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <section id="deadlines" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Timelines</p>
              <h4 className="consultancy-heading">12A & 80G Compliance Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Renewal Filing", due: "6 Months Before Expiry", desc: "Organizations must apply for renewal of 12A/80G registration at least six months before the expiry of the 5-year validity." },
                  { title: "Annual Audit", due: "By 30th September", desc: "Audit of accounts by a Chartered Accountant is mandatory for maintaining 12A/80G status." },
                  { title: "Form 10B/10BB", due: "With Income Tax Return", desc: "Filing of audit report in Form 10B/10BB along with the income tax return is required." },
                  { title: "Donation Reporting", due: "By 31st May", desc: "NGOs must file Form 10BD annually to report all donations received during the financial year." }
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
        </section>

        {/* Penalties Section */}
        <section id="penalties" className="py-20 bg-gray-50/50 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Legal Risks</p>
              <h4 className="consultancy-heading">Penalties & Legal Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Loss of Tax Exemption", desc: "Failure to comply with registration conditions leads to withdrawal of tax exemption on the organization's income." },
                  { title: "Donor Deduction Rejection", desc: "Donors cannot claim tax deductions if the organization's 80G registration is expired or cancelled." },
                  { title: "Late Filing Fees", desc: "Delayed filing of donation reports (Form 10BD) attracts a late fee of ₹200 per day u/s 234G." },
                  { title: "Taxation at Maximum Marginal Rate", desc: "In case of cancellation of registration, the organization's income may be taxed at the maximum marginal rate." }
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
        </section>
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default TwelveAEightyGPage;