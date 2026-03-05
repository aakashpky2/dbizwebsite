"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Phone, Mail, MessageCircle, ChevronRight, CheckCircle, FileText, Shield, Clock, Award, Users, BookOpen, Music, Camera, Code } from "lucide-react";

const CopyrightRegistrationPage = () => {
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
    { icon: <Shield className="w-6 h-6" />, title: "Legal Protection", description: "Exclusive rights to reproduce, distribute, and display your work" },
    { icon: <Award className="w-6 h-6" />, title: "Proof of Ownership", description: "Official certificate as evidence of your creative ownership" },
    { icon: <BookOpen className="w-6 h-6" />, title: "Literary Works", description: "Protection for books, articles, software, and databases" },
    { icon: <Music className="w-6 h-6" />, title: "Musical Works", description: "Safeguard compositions, lyrics, and sound recordings" },
    { icon: <Camera className="w-6 h-6" />, title: "Artistic Works", description: "Protect photographs, paintings, sculptures, and designs" },
    { icon: <Code className="w-6 h-6" />, title: "Software Copyright", description: "Complete protection for computer programs and apps" },
  ];

  const benefits = [
    { title: "Lifetime Protection", description: "Copyright protection lasts for author's lifetime plus 60 years" },
    { title: "Commercial Rights", description: "Exclusive rights to commercially exploit your creative work" },
    { title: "Legal Evidence", description: "Registration serves as prima facie evidence in court" },
    { title: "Licensing Revenue", description: "Earn royalties by licensing your copyrighted work" },
    { title: "Global Protection", description: "International protection through Berne Convention" },
    { title: "Transfer Rights", description: "Ability to assign or transfer copyright to others" },
  ];

  const copyrightTypes = [
    { title: "Literary Works", description: "Books, novels, poems, articles, computer programs, databases, and compilations" },
    { title: "Musical Works", description: "Musical compositions with or without words, sound recordings" },
    { title: "Artistic Works", description: "Paintings, drawings, photographs, sculptures, architecture, and craftsmanship" },
    { title: "Cinematograph Films", description: "Movies, documentaries, video recordings, and visual recordings" },
    { title: "Sound Recordings", description: "Audio recordings regardless of the medium of recording" },
    { title: "Software & Apps", description: "Computer programs, mobile applications, and digital content" },
  ];

  const documents = [
    "Application Form XIV",
    "Copies of the Work (2 copies)",
    "NOC from Author (if applicant is different)",
    "NOC from Publisher (if published)",
    "Power of Attorney",
    "ID Proof of Applicant",
    "Address Proof",
    "Search Certificate (for artistic works)",
  ];

  const process = [
    { step: "1", title: "Work Submission", description: "Submit details of your creative work for evaluation" },
    { step: "2", title: "Application Filing", description: "File Form XIV with Copyright Office" },
    { step: "3", title: "Examination", description: "30-day waiting period for objections" },
    { step: "4", title: "Scrutiny", description: "Registrar examines the application" },
    { step: "5", title: "Registration", description: "Copyright certificate issued upon approval" },
  ];

  const faqs = [
    { question: "What is copyright and why register it?", answer: "Copyright is an automatic right that protects original creative works. While protection exists automatically, registration provides legal evidence of ownership and is essential for enforcement in courts." },
    { question: "How long does copyright registration take?", answer: "Copyright registration in India typically takes 2-3 months. The process includes a mandatory 30-day waiting period for objections after the diary number is issued." },
    { question: "What is the validity of copyright?", answer: "For literary, dramatic, musical, and artistic works, copyright lasts for the author's lifetime plus 60 years. For cinematograph films and sound recordings, it's 60 years from publication." },
    { question: "Can I copyright my software or app?", answer: "Yes, computer programs and software are protected as literary works under the Copyright Act. Registration provides strong legal protection for your code." },
    { question: "Is copyright registration mandatory?", answer: "No, copyright exists automatically upon creation of an original work. However, registration is highly recommended as it provides legal proof of ownership and is required for enforcement." },
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
              Copyright Registration in {displayLocation}
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Protect your creative works with comprehensive copyright registration services. 
              Secure exclusive rights to your literary, artistic, and digital creations.
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
            <h2 className="text-3xl font-bold text-dbiz-navy mb-6">What is Copyright Registration?</h2>
            <p className="text-gray-600 mb-4">
              Copyright is a form of intellectual property protection that gives creators exclusive rights over their 
              original works of authorship. In India, copyright registration is governed by the Copyright Act, 1957, 
              and provides legal recognition and protection for creative works.
            </p>
            <p className="text-gray-600 mb-4">
              While copyright exists automatically upon creation of an original work, registration provides crucial 
              legal evidence of ownership. A registered copyright enables you to take legal action against infringers 
              and claim damages in court.
            </p>
            <div className="bg-dbiz-teal/10 p-6 rounded-lg mt-8">
              <h3 className="font-semibold text-dbiz-navy mb-2">Why Register Your Copyright?</h3>
              <p className="text-gray-600">
                Registration serves as prima facie evidence of ownership, enables legal enforcement, provides 
                statutory damages for infringement, and is required for customs protection against pirated imports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Our Copyright Services</h2>
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
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Benefits of Copyright Registration</h2>
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
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Types of Works We Protect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {copyrightTypes.map((type, index) => (
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
          <h2 className="text-3xl font-bold text-dbiz-navy mb-12 text-center">Copyright Registration Process</h2>
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
              <h3 className="font-semibold text-dbiz-navy mb-2">IP Specialists</h3>
              <p className="text-gray-600 text-sm">Experienced team specializing in copyright and intellectual property protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-dbiz-navy mb-2">Fast Processing</h3>
              <p className="text-gray-600 text-sm">Quick turnaround with regular status updates throughout the process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dbiz-teal/10 rounded-full flex items-center justify-center text-dbiz-teal mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-dbiz-navy mb-2">Complete Support</h3>
              <p className="text-gray-600 text-sm">End-to-end assistance from application to certificate delivery</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Creative Work?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Get expert assistance for copyright registration in {displayLocation}. Our team will guide you through every step of the process.
          </p>
          <ContactPopover />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CopyrightRegistrationPage;