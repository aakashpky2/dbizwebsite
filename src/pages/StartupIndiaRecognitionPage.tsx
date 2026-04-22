
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowDownCircle, Phone, MessageCircle, Building2, Shield, Users, Rocket, Award, Clock, AlertTriangle, FileText } from "lucide-react";
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
  description: "Get recognized under Startup India initiative by DPIIT to unlock exclusive benefits including tax exemptions, easier compliance, funding support, and networking opportunities with investors and mentors.",
  benefits: [
    "Tax Exemption: 3-year income tax holiday under Section 80-IAC",
    "Self-Certification: Simplified compliance for labor and environment laws",
    "Patent Fast-Track: 80% rebate on patent filing fees",
    "Faster Exits: Easy winding up within 90 days under Insolvency Act",
    "Fund of Funds: Access to ₹10,000 crore government fund",
    "Public Procurement: Exemption from prior turnover requirements"
  ],
  features: [
    { title: "DPIIT Recognition", description: "Official recognition certificate from Department for Promotion of Industry and Internal Trade" },
    { title: "Tax Benefits Filing", description: "Assistance in applying for Section 80-IAC tax exemption" },
    { title: "Documentation Support", description: "Complete preparation of required documents and business plan" },
    { title: "Portal Registration", description: "End-to-end assistance with Startup India portal registration" },
    { title: "Certificate Tracking", description: "Follow-up and tracking until certificate is issued" },
    { title: "Post-Recognition Support", description: "Guidance on availing benefits after recognition" }
  ],
  faqs: [
    { question: "What is Startup India Recognition?", answer: "Startup India Recognition is a certification issued by DPIIT that identifies a business entity as a startup under the Startup India initiative. This recognition unlocks various benefits like tax exemptions, easier compliance, and access to funding." },
    { question: "Who is eligible for Startup India Recognition?", answer: "To be eligible, your entity must be incorporated as Private Limited Company, Partnership Firm, or LLP, be less than 10 years old, have annual turnover not exceeding ₹100 crore, and be working towards innovation or improvement of products/services." },
    { question: "How long does the recognition process take?", answer: "The recognition process typically takes 2-3 weeks after submitting all required documents. Our experts ensure error-free applications for faster approval." },
    { question: "What documents are required?", answer: "Required documents include Certificate of Incorporation, PAN card of entity, brief description of business, authorization letter, and details of directors/partners." }
  ]
};

const StartupIndiaRecognitionPage = () => {
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
            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Startup India Recognition{location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
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
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Startup India" className="w-full h-80 rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'features', icon: Award, label: 'Services' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is Startup India Recognition?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <Rocket className="text-dbiz-teal h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Benefits of Startup India Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefits.map((item, index) => (
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
              <h4 className="consultancy-heading">Startup India Compliance Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Recognition Validity", due: "Up to 10 Years", desc: "Startup recognition is valid for 10 years from the date of incorporation or until turnover exceeds ₹100 crore." },
                  { title: "Income Tax Exemption", due: "Section 80-IAC Application", desc: "Eligible startups must apply for Section 80-IAC tax exemption through the Inter-Ministerial Board." },
                  { title: "Annual Compliance", due: "With ROC/Income Tax", desc: "Regular ROC filings and Income Tax returns must be maintained to keep the recognition active." },
                  { title: "Angel Tax Exemption", due: "Form 2 Submission", desc: "Startups must file Form 2 to claim exemption from tax on share premium (Angel Tax) u/s 56(2)(viib)." }
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
              <h4 className="consultancy-heading">Penalties & Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Revocation of Recognition", desc: "Non-compliance with eligibility criteria or false declarations can lead to immediate revocation of DPIIT recognition." },
                  { title: "Recovery of Tax Benefits", desc: "If recognition is revoked, tax benefits claimed under 80-IAC or Angel Tax exemption may be recovered with interest." },
                  { title: "Loss of Procurement Benefits", desc: "Startups losing recognition lose preferential treatment in government tenders and public procurement." },
                  { title: "Misrepresentation Fines", desc: "Providing false information during registration attracts penalties under the Companies Act or Partnership Act." }
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
        <section id="faqs" className="py-16 scroll-mt-32">
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

export default StartupIndiaRecognitionPage;
