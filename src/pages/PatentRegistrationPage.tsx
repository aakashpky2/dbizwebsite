
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, Mail, MessageCircle, ChevronRight, CheckCircle, FileText, Shield, Clock, Award, Users, Lightbulb, Search, Globe } from "lucide-react";

const PatentRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState("overview");

  const displayLocation = location
    ? location.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "India";

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "benefits", label: "Benefits" },
    { id: "types", label: "Types" },
    { id: "documents", label: "Documents" },
    { id: "process", label: "Process" },
    { id: "why-us", label: "Why D BIZ CONSULTANCY" },
    { id: "faqs", label: "FAQs" },
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Legal Protection", description: "Exclusive rights to your invention for 20 years" },
    { icon: <Award className="w-6 h-6" />, title: "Commercial Value", description: "License or sell your patent for revenue generation" },
    { icon: <Globe className="w-6 h-6" />, title: "Market Exclusivity", description: "Prevent competitors from copying your invention" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation Recognition", description: "Official recognition of your innovative work" },
    { icon: <Search className="w-6 h-6" />, title: "Prior Art Search", description: "Comprehensive patentability analysis" },
    { icon: <FileText className="w-6 h-6" />, title: "Complete Documentation", description: "Professional patent specification drafting" },
  ];

  const benefits = [
    { title: "20 Years Protection", description: "Exclusive rights to manufacture, use, and sell your invention" },
    { title: "Revenue Generation", description: "License your patent to others for royalty income" },
    { title: "Competitive Advantage", description: "Block competitors from using your technology" },
    { title: "Asset Value", description: "Patents add significant value to your business" },
    { title: "Attract Investment", description: "Investors value companies with strong IP portfolios" },
    { title: "Legal Recourse", description: "Sue infringers and claim damages" },
  ];

  const patentTypes = [
    { title: "Utility Patent", description: "For new inventions or functional improvements to existing products" },
    { title: "Design Patent", description: "For new, original, and ornamental design for an article of manufacture" },
    { title: "Plant Patent", description: "For new varieties of plants that are asexually reproduced" },
    { title: "Provisional Patent", description: "Temporary protection while preparing complete specification" },
  ];

  const documents = [
    "Patent Application Form 1",
    "Provisional/Complete Specification",
    "Claims and Abstract",
    "Drawings (if applicable)",
    "Priority Document (for convention applications)",
    "Power of Attorney",
    "Proof of Right to Apply",
    "Statement and Undertaking (Form 3)",
  ];

  const process = [
    { step: "1", title: "Invention Disclosure", description: "Share details of your invention with our experts" },
    { step: "2", title: "Patentability Search", description: "Prior art search to assess novelty and inventiveness" },
    { step: "3", title: "Drafting Specification", description: "Prepare detailed patent specification and claims" },
    { step: "4", title: "Filing Application", description: "Submit application to Indian Patent Office" },
    { step: "5", title: "Publication", description: "Application published after 18 months" },
    { step: "6", title: "Examination", description: "Request examination and respond to objections" },
    { step: "7", title: "Grant", description: "Patent granted upon successful examination" },
  ];

  const faqs = [
    { question: "How long does patent registration take?", answer: "The patent registration process in India typically takes 3-5 years from filing to grant. However, expedited examination is available for startups and certain categories." },
    { question: "What can be patented?", answer: "Any new invention that is novel, involves an inventive step, and is capable of industrial application can be patented. This includes products, processes, and improvements." },
    { question: "What cannot be patented in India?", answer: "Mathematical methods, business methods, computer programs per se, scientific theories, and discoveries of natural substances cannot be patented." },
    { question: "What is the validity of a patent?", answer: "A patent is valid for 20 years from the date of filing, subject to payment of annual renewal fees." },
    { question: "Can I file a patent application myself?", answer: "Yes, but it's highly recommended to work with patent professionals to ensure proper drafting and maximize chances of grant." },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ContactPopover = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-3 text-lg">
          Get Started
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4">
        <div className="space-y-3">
          <h4 className="font-semibold text-dbiz-navy">Contact Us</h4>
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm hover:text-dbiz-teal transition-colors">
            <Phone size={16} /> +91 98765 43210
          </a>
          <a href="mailto:info@dbizconsultancy.com" className="flex items-center gap-2 text-sm hover:text-dbiz-teal transition-colors">
            <Mail size={16} /> info@dbizconsultancy.com
          </a>
          <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-sm hover:text-dbiz-teal transition-colors">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Patent Registration in {displayLocation}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Protect your inventions with comprehensive patent registration services. 
              Secure exclusive rights and maximize the commercial value of your innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactPopover />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dbiz-navy px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-3 gap-6 no-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-dbiz-teal border-b-2 border-dbiz-teal"
                    : "text-gray-600 hover:text-dbiz-navy"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-6">What is Patent Registration?</h2>
            <p className="text-gray-600 mb-4">
              A patent is an exclusive right granted for an invention that provides a new way of doing something 
              or offers a new technical solution to a problem. Patent registration in India is governed by the 
              Patents Act, 1970, and grants the inventor exclusive rights for 20 years.
            </p>
            <p className="text-gray-600 mb-4">
              With a registered patent, you can prevent others from making, using, selling, or importing your 
              invention without your permission. This protection encourages innovation by ensuring inventors 
              can benefit commercially from their creations.
            </p>
            <div className="bg-dbiz-teal/10 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-dbiz-navy mb-2">Why Register a Patent?</h3>
              <p className="text-gray-600">
                Patent registration provides legal protection for your inventions, prevents competitors from 
                copying your technology, creates valuable business assets, and enables you to generate revenue 
                through licensing or sale of patent rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Our Patent Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-dbiz-teal/10 rounded-lg flex items-center justify-center text-dbiz-teal mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-dbiz-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Benefits of Patent Registration</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-dbiz-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dbiz-navy mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="types" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Types of Patents</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {patentTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-dbiz-navy mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Documents Required</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-dbiz-teal" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Patent Registration Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-dbiz-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-200 last:border-0">
                    <h3 className="font-semibold text-dbiz-navy mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Why Choose D BIZ CONSULTANCY?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-dbiz-navy mb-2">Expert Patent Agents</h3>
              <p className="text-gray-600 text-sm">Registered patent agents with years of experience in drafting and prosecution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-dbiz-navy mb-2">Timely Filing</h3>
              <p className="text-gray-600 text-sm">Quick turnaround time with priority handling of applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-dbiz-navy mb-2">High Success Rate</h3>
              <p className="text-gray-600 text-sm">Proven track record of successful patent grants across domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-dbiz-navy mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dbiz-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Invention?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get expert assistance for patent registration in {displayLocation}. Our team will guide you through every step of the process.
          </p>
          <ContactPopover />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatentRegistrationPage;