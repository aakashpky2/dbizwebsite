
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowDownCircle, Phone, MessageCircle, Building2, Users, Presentation, Sparkles, Clock, AlertTriangle } from "lucide-react";
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
  description: "Create a compelling pitch deck that captures investor attention and effectively communicates your startup's value proposition. Our expert designers craft visually stunning presentations that tell your story.",
  benefits: [
    "Investor Impact: Designed to capture attention in the first 30 seconds",
    "Visual Excellence: Professional design that reflects your brand",
    "Clear Messaging: Concise content that communicates value",
    "Data Visualization: Complex data presented simply and effectively",
    "Customizable: Easily editable for different investor audiences",
    "Quick Turnaround: Ready within 5-7 business days"
  ],
  features: [
    { title: "Problem & Solution", description: "Compelling articulation of the problem you solve and your unique solution" },
    { title: "Market Opportunity", description: "TAM, SAM, SOM analysis with supporting market research" },
    { title: "Business Model", description: "Clear revenue model and unit economics explanation" },
    { title: "Traction & Metrics", description: "Key metrics and growth trajectory visualization" },
    { title: "Team Slide", description: "Showcase your team's expertise and credibility" },
    { title: "Financial Ask", description: "Clear funding ask with use of funds breakdown" }
  ],
  faqs: [
    { question: "How many slides should a pitch deck have?", answer: "An effective pitch deck typically has 10-15 slides. Our standard deck includes all essential elements: Problem, Solution, Market, Business Model, Traction, Team, Competition, Go-to-Market, Financials, and The Ask." },
    { question: "What format will I receive?", answer: "You'll receive editable PowerPoint and Google Slides formats, plus a PDF version. We also provide design assets and guidelines for maintaining brand consistency." },
    { question: "Can you help with pitch practice?", answer: "Yes, we offer pitch coaching sessions where our experts help you refine your delivery, anticipate investor questions, and improve your presentation skills." },
    { question: "Do you sign NDAs?", answer: "Yes, we're happy to sign NDAs before discussing your business details. We understand the sensitive nature of startup information and maintain strict confidentiality." }
  ]
};

const PitchDeckPage = () => {
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
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                  Pitch Deck Services{location && <span className="block text-2xl md:text-3xl mt-2">in {cityName}</span>}
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
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Pitch Deck" className="w-full h-80 rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'features', icon: Presentation, label: "What's Included" },
                { id: 'benefits', icon: CheckCircle2, label: 'Benefits' },
                { id: 'deadlines', icon: Clock, label: 'Timelines' },
                { id: 'penalties', icon: AlertTriangle, label: 'Risks' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Professional Pitch Deck Services</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <Sparkles className="text-dbiz-teal h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 scroll-mt-32">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-8 text-center">Benefits of Our Pitch Decks</h2>
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
              <h4 className="consultancy-heading">Project Timelines & Milestones</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Initial Draft", due: "3-4 Business Days", desc: "Creation of the first outline and visual concept based on your business model and data." },
                  { title: "Review & Feedback", due: "48 Hours", desc: "Collaborative review session to refine the messaging and visual storytelling." },
                  { title: "Final Design", due: "2-3 Business Days", desc: "Applying final polish, animations, and high-fidelity graphics to the approved draft." },
                  { title: "Delivery", due: "Total 7-10 Days", desc: "Handover of editable source files and presentation-ready formats." }
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
              <p className="consultancy-label">Risks</p>
              <h4 className="consultancy-heading">Common Risks in Poor Pitch Decks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Information Overload", desc: "Too much text on slides leads to investor disengagement and loss of core message." },
                  { title: "Weak Data Visualization", desc: "Unclear charts or missing metrics can make your business model look unverified." },
                  { title: "Lack of Brand Consistency", desc: "Poor design quality reflects poorly on the startup's professionalism and attention to detail." },
                  { title: "Missing 'The Ask'", desc: "Failing to clearly state the funding requirement and use of funds can stall investor interest." }
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

export default PitchDeckPage;
