
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, Mail, MessageCircle, ChevronRight, CheckCircle, FileText, Shield, Clock, Award, Users, BookOpen, Music, Camera, Code, AlertTriangle } from "lucide-react";
import SEO from "@/components/SEO";

const PatentRegistrationPage = () => {
  const params = useParams();
  const location = params?.location as string;
  const [activeSection, setActiveSection] = useState("overview");

  const displayLocation = location
    ? location.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "India";

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "features", label: "Features", icon: Shield },
    { id: "benefits", label: "Benefits", icon: Award },
    { id: "types", label: "Types", icon: FileText },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "process", label: "Process", icon: Clock },
    { id: "deadlines", label: "Deadlines", icon: Clock },
    { id: "penalties", label: "Penalties", icon: AlertTriangle },
    { id: "faqs", label: "FAQs", icon: Users },
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Legal Protection", description: "Exclusive rights to prevent others from using your invention" },
    { icon: <Award className="w-6 h-6" />, title: "Market Monopoly", description: "Enjoy exclusive commercial rights for up to 20 years" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Prior Art Search", description: "Comprehensive search to ensure invention novelty" },
    { icon: <FileText className="w-6 h-6" />, title: "Drafting", description: "Expert drafting of patent specifications and claims" },
    { icon: <Shield className="w-6 h-6" />, title: "Prosecution", description: "Handling responses to examination reports and hearings" },
    { icon: <Award className="w-6 h-6" />, title: "Valuation", description: "Assessing the commercial potential of your patent" },
  ];

  const benefits = [
    { title: "Exclusive Rights", description: "Prevent others from making, using, or selling your invention" },
    { title: "Asset Value", description: "Patents are valuable intellectual property assets that can be sold or licensed" },
    { title: "Market Advantage", description: "Stay ahead of competitors with unique technical solutions" },
    { title: "Revenue Generation", description: "Earn royalties by licensing your technology to others" },
    { title: "20 Years Protection", description: "Long-term protection for your innovative solutions" },
    { title: "Global Protection", description: "Basis for international protection through PCT filing" },
  ];

  const patentTypes = [
    { title: "Ordinary Application", description: "Standard application filed with the Indian Patent Office" },
    { title: "Provisional Application", description: "Establish a priority date before fully developing the invention" },
    { title: "Convention Application", description: "Claims priority from an application filed in a convention country" },
    { title: "PCT International", description: "Single application for protection in multiple countries" },
    { title: "PCT National Phase", description: "Entering the Indian national phase after PCT filing" },
    { title: "Divisional/Patent of Addition", description: "For related inventions or improvements to existing patents" },
  ];

  const documents = [
    "Application Form 1",
    "Provisional/Complete Specification (Form 2)",
    "Statement and Undertaking (Form 3)",
    "Declaration as to Inventorship (Form 5)",
    "Power of Authority (if through agent)",
    "Proof of Right to Apply",
    "Priority Documents (for convention cases)",
    "Drawings/Illustrations of the Invention",
  ];

  const processSteps = [
    { step: "1", title: "Invention Disclosure", description: "Share your invention details with our patent experts" },
    { step: "2", title: "Patentability Search", description: "Check for novelty and non-obviousness" },
    { step: "3", title: "Drafting", description: "Prepare detailed specifications and technical claims" },
    { step: "4", title: "Filing", description: "Submit application to the Indian Patent Office" },
    { step: "5", title: "Examination", description: "Responding to office actions and examination reports" },
    { step: "6", title: "Grant", description: "Official grant of patent by the Controller" },
  ];

  const faqData = [
    { question: "What can be patented in India?", answer: "An invention must be new (novel), involve an inventive step (non-obvious), and be capable of industrial application. It must not fall under 'non-patentable' categories defined in the Act." },
    { question: "How long does a patent last?", answer: "In India, a patent is valid for 20 years from the date of filing the application, provided the renewal fees are paid annually." },
    { question: "Is a patent valid worldwide?", answer: "No, patents are territorial. A patent granted in India is only valid in India. To protect your invention globally, you must file applications in each target country or use the PCT route." },
    { question: "What is a provisional specification?", answer: "A provisional specification allows you to secure a priority date for your invention while it's still being refined. A complete specification must follow within 12 months." },
    { question: "Can software be patented in India?", answer: "Software per se is not patentable, but computer-related inventions (CRIs) that demonstrate a technical effect or are tied to hardware can be protected." },
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
      const headerOffset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
          <a href="tel:+918075273408" className="flex items-center gap-2 text-sm hover:text-dbiz-teal transition-colors">
            <Phone size={16} /> +91 80752 73408
          </a>
          <a href="mailto:info@dbizconsultancy.com" className="flex items-center gap-2 text-sm hover:text-dbiz-teal transition-colors">
            <Mail size={16} /> info@dbizconsultancy.com
          </a>
          <a href="https://wa.me/918075273408" className="flex items-center gap-2 text-sm hover:text-dbiz-teal transition-colors" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`Patent Registration in ${displayLocation} | D BIZ CONSULTANCY`}
        description={`Protect your inventions with patent registration in ${displayLocation}. Expert assistance for drafting, filing, and prosecution of patent applications.`}
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Patent Registration in {displayLocation}
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Protect your innovations with comprehensive patent registration services. 
                Secure exclusive rights and maximize the commercial value of your inventions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactPopover />
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dbiz-navy px-8 py-3 text-lg" onClick={() => scrollToSection('overview')}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[14px] font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }`}
                >
                  <item.icon className={`mr-1.5 h-3.5 w-3.5 ${activeSection === item.id ? 'text-white' : 'text-dbiz-teal'}`} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-dbiz-navy mb-6">What is Patent Registration?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A patent is an exclusive right granted for an invention that provides a new way of doing something 
                or offers a new technical solution to a problem. Patent registration in India is governed by the 
                Patents Act, 1970, and grants the inventor exclusive rights for 20 years.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With a registered patent, you can prevent others from making, using, selling, or importing your 
                invention without your permission. This protection encourages innovation by ensuring inventors 
                can benefit commercially from their creations.
              </p>
              <div className="bg-dbiz-teal/10 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-dbiz-navy mb-2">Why Register a Patent?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Patent registration provides legal protection for your inventions, prevents competitors from 
                  copying your technology, creates valuable business assets, and enables you to generate revenue 
                  through licensing or sale of patent rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
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
        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Benefits of Patent Registration</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-dbiz-teal flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dbiz-navy mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section id="types" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Types of Patent Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {patentTypes.map((type, index) => (
                <Card key={index} className="border-none shadow-md">
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
        <section id="documents" className="py-16 scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Documents Required</h2>
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                <ul className="space-y-4">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-dbiz-teal" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <section id="deadlines" className="py-20 scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Timelines</p>
              <h4 className="consultancy-heading">Patent Compliance Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Complete Specification", due: "Within 12 Months", desc: "If a provisional application is filed, the complete specification must be filed within 12 months." },
                  { title: "Request for Examination", due: "Within 48 Months", desc: "A request for examination (RFE) must be filed within 48 months from the date of priority or filing." },
                  { title: "Response to First Examination Report", due: "Within 6 Months", desc: "Applicants must respond to the First Examination Report (FER) within 6 months of its issuance." },
                  { title: "Patent Renewal", due: "Every Year", desc: "Renewal fees must be paid annually from the 3rd year onwards to keep the patent in force for 20 years." }
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
          <div className="container mx-auto px-4">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Legal Risks</p>
              <h4 className="consultancy-heading">Penalties & Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Abandonment of Application", desc: "Failure to file the complete specification or respond to examination reports within the deadline leads to abandonment of the application." },
                  { title: "Lapse of Patent", desc: "Non-payment of renewal fees within the prescribed time (including grace period) results in the patent ceasing to have effect." },
                  { title: "Loss of Priority", desc: "Missing the 12-month deadline for convention filing or PCT national phase leads to loss of the original priority date." },
                  { title: "Infringement Risks", desc: "Operating without a patent or failing to maintain one allows competitors to copy your invention legally without any liability." }
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

        {/* Why Us Section */}
        <section id="why-us" className="py-16 scroll-mt-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Why Choose D BIZ CONSULTANCY?</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Expert Agents</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Registered patent agents with years of experience in drafting and prosecution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Timely Filing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Quick turnaround with regular status updates throughout the process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-dbiz-navy mb-3">Complete Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">End-to-end assistance from application to certificate delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-dbiz-navy mb-3">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-dbiz-navy text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Invention?</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Get expert assistance for patent registration in {displayLocation}. 
              Our team will guide you through every step of the process.
            </p>
            <ContactPopover />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PatentRegistrationPage;