
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
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import SEO from "@/components/SEO";
import CachedImage from "@/components/CachedImage";

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

const NgoRegistrationPage = () => {
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

  const faqs = [
    { question: "What is an NGO / Trust?", answer: "An NGO / Trust is a non-profit organization formed for charitable, social, or religious purposes to serve the public or a specific group." },
    { question: "What are the types of NGO registration in India?", answer: "NGOs can be registered as Trust, Society, or Section 8 Company depending on structure, compliance level, and objectives." },
    { question: "How many members are required to start a Trust?", answer: "A minimum of 2 trustees is required to form a Trust." },
    { question: "Is registration of NGO mandatory?", answer: "Yes, registration is required to operate legally, open a bank account, and receive donations or grants." },
    { question: "What is 12A registration?", answer: "12A registration provides income tax exemption to the NGO on its surplus income." },
    { question: "What is 80G registration?", answer: "80G allows donors to claim tax deductions on donations made to the NGO." },
    { question: "Can an NGO receive foreign donations?", answer: "Yes, but only after obtaining FCRA registration from the government." },
    { question: "How long does NGO / Trust registration take?", answer: "Typically, it takes 5–10 working days depending on the state and document readiness." },
    { question: "Is audit mandatory for NGOs?", answer: "Audit is required if income exceeds the prescribed limit under the Income Tax Act." },
    { question: "Can NGO earn income?", answer: "Yes, but income must be used only for charitable purposes and not for profit distribution." },
    { question: "What is the difference between Trust and Section 8 Company?", answer: "Trust is simpler with lower compliance, while Section 8 Company has higher credibility and stricter regulations." },
    { question: "Do NGOs need to file returns?", answer: "Yes, NGOs must file Income Tax Returns (ITR-7) and maintain proper records." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`NGO / Trust Registration in ${cityName} | D BIZ CONSULTANCY`}
        description={`Get your NGO or Trust registered in ${cityName} with D BIZ CONSULTANCY. We provide end-to-end registration services including trust deed drafting and compliance support.`}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c" alt="NGO Registration" className="w-full h-full object-cover" />
          </div>
          <div className="container-custom relative z-10 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                  NGO / Trust Registration
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  NGO / Trust Registration{location ? ` in ${cityName}` : ""}
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  D BIZ CONSULTANCY provides complete NGO / Trust registration services. Our expert team ensures a smooth and compliant process from drafting the trust deed to final registration and post-registration compliance support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white px-8 py-4 h-auto text-lg font-semibold group">
                        Get Started
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64 p-0">
                      <ContactOptions />
                    </PopoverContent>
                  </Popover>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-4 h-auto text-lg font-semibold" onClick={() => handleSectionClick('overview')}>
                    <ArrowDownCircle className="mr-2 h-5 w-5" /> Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-white/70">
                  <span className="flex items-center gap-2"><CheckCircle size={16} className="text-dbiz-teal" /> Quick Registration</span>
                  <span className="flex items-center gap-2"><CheckCircle size={16} className="text-dbiz-teal" /> Legal Compliance</span>
                  <span className="flex items-center gap-2"><CheckCircle size={16} className="text-dbiz-teal" /> Expert Guidance</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <CachedImage 
                      src="/dbiz-uploads/ngo_registration_consultancy.png" 
                      alt="NGO / Trust Registration" 
                      className="w-full h-auto rounded-lg shadow-lg"
                      aspectRatio={16/10}
                    />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold text-dbiz-teal">5–10</div>
                        <div className="text-sm opacity-80">Days (Typical)</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-4xl font-bold text-dbiz-teal">100%</div>
                        <div className="text-sm opacity-80">Compliance Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Navigation Sidebar/Tabs */}
        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'types', icon: FileText, label: 'NGO Types' },
                { id: 'process', icon: Clock, label: 'Process' },
                { id: 'documents', icon: Shield, label: 'Documents' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: AlertTriangle, label: 'Penalties' },
                { id: 'faqs', icon: Users, label: 'FAQs' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-2.5 py-2 whitespace-nowrap cursor-pointer flex items-center rounded-full text-[14px] font-medium transition-all duration-300 ${
                    isActive(item.id)
                      ? 'bg-dbiz-teal text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-dbiz-navy'
                  }`}
                >
                  <item.icon className={`mr-1.5 h-3.5 w-3.5 ${isActive(item.id) ? 'text-white' : 'text-dbiz-teal'}`} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section id="overview" className="py-20 scroll-mt-32 border-b border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What Is an NGO / Trust?</h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A Trust is a legal arrangement created for charitable, religious, or social purposes, where a settlor transfers property or assets to trustees for the benefit of the public or a specific group.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    An NGO (Non-Governmental Organization) can be registered as a Trust, Society, or Section 8 Company, with Trust being one of the simplest and most commonly used structures in India.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Trusts are governed by the Indian Trusts Act, 1882 (for private trusts) and relevant state laws for public charitable trusts.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                    Once registered, the Trust becomes a recognized entity capable of holding property, receiving donations, and carrying out charitable activities.
                  </p>
                </div>

                <div className="mt-12 bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-dbiz-navy mb-6">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: "2 Trustees (Minimum)", desc: "At least two trustees are required to form a Trust" },
                      { title: "Settlor (Author of Trust)", desc: "Person who creates the trust and contributes initial assets" },
                      { title: "Trust Deed", desc: "Mandatory legal document defining objectives, rules, and structure" },
                      { title: "Registered Office Address", desc: "Valid address proof required for registration" },
                      { title: "No Minimum Capital", desc: "No statutory requirement for minimum capital" }
                    ].map((req, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal mt-1">
                          <CheckCircle size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-dbiz-navy text-sm mb-1">{req.title}</p>
                          <p className="text-gray-600 text-xs leading-relaxed">{req.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <CachedImage 
                    src="/dbiz-uploads/ngo_law_definition_sidebar_v2.png" 
                    alt="NGO / Trust Legal Definition" 
                    className="w-full h-48 object-cover rounded-xl shadow-md mb-6 relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Definition as per Law</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      A Trust or NGO is legally formed when:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "A person (Settlor) transfers property, assets, or funds",
                        "To one or more Trustees or managing members",
                        "For the benefit of specific beneficiaries or the general public",
                        "For lawful charitable, social, or religious purposes"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 mb-6">
                      <p className="text-sm text-gray-500 leading-relaxed italic">
                        Such entities are created to carry out non-profit activities like education, healthcare, social welfare, and community development, and must operate in accordance with their governing documents and applicable laws.
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="flex items-center cursor-pointer group/contact">
                            <div className="bg-dbiz-teal/10 p-2 rounded-full group-hover/contact:bg-dbiz-teal/20 transition-colors">
                              <Phone className="h-5 w-5 text-dbiz-teal" />
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-gray-500">Need expert guidance?</p>
                              <p className="text-dbiz-navy font-medium group-hover/contact:text-dbiz-teal transition-colors">Contact Our Team</p>
                            </div>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-0" align="end">
                          <ContactOptions />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of an NGO / Trust</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY helps individuals and organizations {location ? `across ${cityName}` : ""} understand and leverage these key features for effective social impact and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { 
                  title: "Non-Profit Objective", 
                  desc: "An NGO / Trust is established solely for charitable, social, or religious purposes. Profits or income generated cannot be distributed to members and must be utilized for achieving its objectives.",
                  icon: Shield
                },
                { 
                  title: "Separate Legal Recognition", 
                  desc: "Once registered, a Trust or NGO is recognized as a legal entity capable of holding property, receiving donations, entering into contracts, and operating independently through its trustees or governing body.",
                  icon: Building2
                },
                { 
                  title: "No Minimum Capital Requirement", 
                  desc: "There is no statutory requirement for minimum capital. A Trust can be started with a nominal initial contribution based on its objectives and activities.",
                  icon: CheckCircle2
                },
                { 
                  title: "Management by Trustees", 
                  desc: "The affairs of the NGO / Trust are managed by trustees or governing members who are responsible for decision-making and ensuring that activities align with the stated objectives.",
                  icon: Users
                },
                { 
                  title: "Tax Benefits", 
                  desc: "Eligible for tax exemptions under the Income Tax Act through 12A registration, and donors can claim deductions under 80G, subject to approval and compliance.",
                  icon: FileText
                },
                { 
                  title: "Perpetual Existence", 
                  desc: "A Trust or NGO continues to exist irrespective of changes in trustees or members, ensuring continuity of charitable activities over time.",
                  icon: Clock
                },
                { 
                  title: "Eligibility for Grants & Funding", 
                  desc: "Registered NGOs / Trusts can receive donations, CSR funding, government grants, and international funding (subject to FCRA registration).",
                  icon: Building2
                },
                { 
                  title: "Simple Compliance Structure", 
                  desc: "Compared to companies, Trusts have relatively simpler compliance requirements, making them suitable for small to medium charitable organizations.",
                  icon: CheckCircle
                }
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 flex flex-col">
                  <CardHeader className="pb-3">
                    <feature.icon className="h-10 w-10 text-dbiz-teal mb-4" />
                    <CardTitle className="text-xl font-semibold text-dbiz-navy">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                  Benefits
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Benefits of NGO / Trust Registration</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  D BIZ CONSULTANCY helps you unlock these advantages by ensuring proper registration and compliance for your organization {location ? `in ${cityName}` : ""}.
                </p>
                
                <div className="relative group">
                  <div className="absolute -inset-4 bg-dbiz-teal/5 rounded-2xl blur-xl group-hover:bg-dbiz-teal/10 transition-all duration-500"></div>
                  <div className="relative z-10 bg-gray-50/50 rounded-2xl overflow-hidden shadow-sm">
                    <CachedImage 
                      src="/dbiz-uploads/ngo_benefits_office.png" 
                      alt="NGO Consultancy" 
                      className="w-full h-auto aspect-video object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col gap-4 max-h-[650px] overflow-y-auto pr-4 no-scrollbar lg:py-2">
                {[
                  "Provides legal identity and official recognition for the NGO / Trust",
                  "Eligible for tax exemptions under 12A and donor benefits under 80G",
                  "Can receive donations, CSR funding, and other financial support",
                  "Eligible to apply for government grants and welfare schemes",
                  "Operates as a separate legal entity with its own identity",
                  "Continues to exist despite changes in trustees or members",
                  "Builds credibility and trust among donors and stakeholders",
                  "Enables structured social, charitable, and community activities",
                  "Eligible for FCRA registration to receive international funds",
                  "Facilitates partnerships with local and global stakeholders"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-dbiz-teal/30 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 bg-dbiz-teal/10 p-3 rounded-full mr-5">
                      <CheckCircle2 className="h-6 w-6 text-dbiz-teal" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-20 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between NGO Structures</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Understand which structure is best suited for your non-profit objectives {location ? `across ${cityName}` : ""}.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="py-5 text-dbiz-navy font-bold border-r">Feature</TableHead>
                      <TableHead className="bg-dbiz-teal/10 py-5 text-dbiz-navy font-bold border-r">Trust</TableHead>
                      <TableHead className="py-5 text-dbiz-navy font-bold border-r">Society</TableHead>
                      <TableHead className="py-5 text-dbiz-navy font-bold">Section 8 Company</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Governing Law", "Indian Trusts Act / State Laws", "Societies Registration Act, 1860", "Companies Act, 2013"],
                      ["Registration Process", "Simple and quick", "Moderate", "More detailed and regulated"],
                      ["Minimum Members", "2 Trustees", "7 Members", "2 Directors & Members"],
                      ["Legal Status", "Separate legal recognition", "Separate legal recognition", "Separate legal entity"],
                      ["Compliance", "Low", "Moderate", "High"],
                      ["Management", "Trustees", "Governing Body", "Board of Directors"],
                      ["Credibility", "Moderate", "Good", "High"],
                      ["Best For", "Small NGOs, family trusts", "Membership-based NGOs", "Large NGOs, funded organizations"]
                    ].map((row, i) => (
                      <TableRow key={i} className="hover:bg-gray-50/50 transition-colors">
                        <TableCell className="font-medium text-dbiz-navy border-r py-4">{row[0]}</TableCell>
                        <TableCell className="bg-dbiz-teal/5 border-r py-4 font-medium text-dbiz-navy">{row[1]}</TableCell>
                        <TableCell className="border-r py-4 text-gray-700">{row[2]}</TableCell>
                        <TableCell className="py-4 text-gray-700">{row[3]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        <section id="documents" className="py-20 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Documents
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                D BIZ CONSULTANCY assists clients {location ? `in ${cityName}` : ""} with collecting and preparing all required documentation carefully.
              </p>
            </div>

            {/* Common rejection prevention tip */}
            <div className="max-w-6xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12 flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-2">Common Rejection Prevention Tips</p>
                <ul className="text-sm text-amber-700 space-y-2">
                  <li>• Name and address must be consistent across PAN, Aadhaar, Passport, and other documents</li>
                  <li>• Registered office details must match across utility bill, rent agreement, and NOC</li>
                  <li>• Utility bills and bank statements should be recent (within last 2 months)</li>
                  <li>• Trust Deed / MOA details must align with application forms</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1: Indian Trustees */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-center">
                  <h3 className="text-xl font-semibold">For Indian Trustees / Members</h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { title: "Identity Proof", desc: "PAN Card (Mandatory), Aadhaar Card, Passport, or Voter ID" },
                    { title: "Address Proof", desc: "Latest utility bills or bank statements (within last 2 months)" },
                    { title: "Photographs", desc: "Recent passport-sized photographs of all trustees / members" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full mr-4">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-dbiz-navy text-lg">{doc.title}</p>
                        <p className="text-gray-600 mt-1 leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Foreign Trustees */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-center">
                  <h3 className="text-xl font-semibold">For Foreign Trustees / NRIs</h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { title: "Identity Proof", desc: "Passport (Mandatory)" },
                    { title: "Address Proof", desc: "Driving License, Bank Statement, or Residence Permit" },
                    { title: "Notarisation / Apostille", desc: "Documents must be notarised or apostilled as per applicable regulations" },
                    { title: "Photographs", desc: "Recent passport-sized photographs" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full mr-4">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-dbiz-navy text-lg">{doc.title}</p>
                        <p className="text-gray-600 mt-1 leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: NGO Registration */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-center">
                  <h3 className="text-xl font-semibold">For NGO / Trust Registration</h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { title: "Trust Deed / MOA", desc: "Core legal document defining objectives, activities, roles, and rules" },
                    { title: "Consent Letters", desc: "Written consent from trustees / members agreeing to their roles" },
                    { title: "Registration Application", desc: "Duly filled and signed application forms as per requirements" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full mr-4">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-dbiz-navy text-lg">{doc.title}</p>
                        <p className="text-gray-600 mt-1 leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: Registered Office */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white text-center">
                  <h3 className="text-xl font-semibold">For Registered Office</h3>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    { title: "Address Proof", desc: "Recent electricity or water bill of the premises" },
                    { title: "Rent Agreement + NOC", desc: "If rented, along with NOC from the property owner" },
                    { title: "Ownership Proof", desc: "Property documents if the premises are owned" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full mr-4">
                        <CheckCircle className="h-5 w-5 text-dbiz-teal" />
                      </div>
                      <div>
                        <p className="font-semibold text-dbiz-navy text-lg">{doc.title}</p>
                        <p className="text-gray-600 mt-1 leading-relaxed">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Registration Process
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step NGO / Trust Registration Process</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                An NGO / Trust is established for charitable, social, or religious purposes. The registration process involves drafting legal documents, submission to authorities, and completing basic compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Finalize Name and Objectives",
                  content: "Select a suitable name and clearly define objectives such as education, healthcare, or social welfare. Our team assists in drafting clear and legally compliant objectives."
                },
                {
                  title: "Draft the Trust Deed / MOA",
                  content: "The Trust Deed or Memorandum is the core legal document. We prepare a comprehensive draft specifying roles, governance, and activities.",
                  points: ["Defines objectives and activities", "Specifies roles of trustees / members", "Includes rules and governance structure"]
                },
                {
                  title: "Prepare Required Documents",
                  content: "Collect and verify all documents of trustees and registered office. Our team ensures all documents are properly validated to avoid rejection.",
                  points: ["Identity and address proofs", "Photographs", "Office address proof"]
                },
                {
                  title: "Execution of Trust Deed",
                  content: "The Deed must be printed on stamp paper and signed by settlor and trustees in the presence of witnesses. Proper execution is mandatory.",
                  points: ["Must follow state stamp laws", "Mandatory for registration"]
                },
                {
                  title: "Registration with Authority",
                  content: "Submit the Deed and documents to the Sub-Registrar or Registrar. A registration certificate is issued upon approval.",
                  points: ["State-dependent submission", "Verification by authority"]
                },
                {
                  title: "Apply for PAN and Bank Account",
                  content: "Apply for PAN in the name of the NGO / Trust and open a bank account for financial transactions and receiving donations."
                },
                {
                  title: "Apply for 12A and 80G Registration",
                  content: "To avail tax benefits, apply under the Income Tax Act. 12A provides tax exemption for the NGO, while 80G provides tax benefits for donors."
                },
                {
                  title: "Additional Registrations (Optional)",
                  content: "Depending on activities, apply for FCRA (foreign funding), CSR registration (corporate funding), or other sector-specific registrations."
                }
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-5 text-white">
                    <h3 className="text-xl font-semibold flex items-center">
                      <span className="flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">{i + 1}</span>
                      {step.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">{step.content}</p>
                    {step.points && (
                      <ul className="mt-4 space-y-2">
                        {step.points.map((pt, j) => (
                          <li key={j} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-0.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compliance" className="py-20 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Compliance
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance for NGO / Trust</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Registering an NGO / Trust is just the beginning; maintaining proper compliance is essential to retain legal status, tax benefits, and credibility {location ? `in ${cityName}` : ""}.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden max-w-6xl mx-auto">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-dbiz-navy hover:bg-dbiz-navy transition-none border-b-0">
                      <TableHead className="py-5 text-white font-bold border-r border-white/10">Aspect</TableHead>
                      <TableHead className="py-5 text-white font-bold border-r border-white/10">Compliance Requirement</TableHead>
                      <TableHead className="py-5 text-white font-bold border-r border-white/10">Frequency / Timeline</TableHead>
                      <TableHead className="py-5 text-white font-bold">Why It's Important</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Trust Deed / Registration", "Proper execution and registration of Trust Deed / MOA", "At registration", "Establishes legal validity"],
                      ["Maintenance of Accounts", "Maintain books of accounts, receipts, and expense records", "Continuous / Annual", "Ensures transparency and audit readiness"],
                      ["Income Tax Filing (ITR-7)", "File Income Tax Return for NGO / Trust", "Annually", "Mandatory for tax compliance"],
                      ["12A Compliance", "Follow conditions under 12A registration", "Ongoing", "Ensures continued tax exemption benefits"],
                      ["80G Compliance", "Maintain donation records and issue receipts", "Ongoing", "Enables donors to claim tax deductions"],
                      ["Audit of Accounts", "Conduct audit by Chartered Accountant (if applicable)", "Annually", "Ensures accuracy and legal compliance"],
                      ["Annual Filing", "File returns for Society / Section 8 Company", "Annually", "Maintains legal status and avoids penalties"],
                      ["FCRA Compliance", "File FC-4 return and maintain foreign records", "Annually", "Required for foreign funds legally"],
                      ["Governing Meetings", "Conduct meetings and maintain minutes", "Periodic", "Ensures proper governance"],
                      ["PAN & Bank Compliance", "Maintain PAN and proper banking transactions", "Ongoing", "Required for financial transparency"]
                    ].map((row, i) => (
                      <TableRow key={i} className={`transition-colors ${i % 2 !== 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-gray-100/50`}>
                        <TableCell className="font-medium text-dbiz-navy border-r py-4">{row[0]}</TableCell>
                        <TableCell className="border-r py-4 text-gray-700">{row[1]}</TableCell>
                        <TableCell className="border-r py-4 text-gray-700">{row[2]}</TableCell>
                        <TableCell className="py-4 text-sm text-gray-600">{row[3]}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            {/* Compliance Timeline Visual */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-dbiz-navy mb-8 text-center uppercase tracking-wide">Post-Registration Compliance Timeline</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { days: "30", title: "PAN & Bank Account", desc: "Apply for PAN and open a dedicated bank account for financial operations." },
                  { days: "60-90", title: "12A & 80G Registration", desc: "Apply for critical tax exemption and donor benefit certifications." },
                  { days: "FY End", title: "ITR-7 & Audit", desc: "Ensure audit completeness and file income tax returns for the organization." },
                  { days: "Annual", title: "Donor Records", desc: "Maintain 80G compliance and issue transparency-focused activity reports." },
                  { days: "FCRA", title: "Foreign Funding", desc: "Complete FCRA registration and file FC-4 as per foreign funding receipt." },
                  { days: "Ongoing", title: "Governance", desc: "Conduct regular trustee meetings and maintain the official minutes book." }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                    <div className="bg-dbiz-teal/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 ring-4 ring-dbiz-teal/5">
                      <span className="text-dbiz-teal font-extrabold text-lg uppercase leading-tight px-1 text-center">{item.days}</span>
                    </div>
                    <p className="text-sm font-bold text-dbiz-navy uppercase tracking-tight mb-2">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-12 text-center italic font-medium">Last updated: Feb 2026</p>
            </div>
          </div>
        </section>

        <section id="why-dbiz" className="py-20 bg-white border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why D BIZ
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for NGO / Trust Registration?</h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Registering an NGO / Trust is an important step to start your social or charitable activities legally. The process involves complex documentation, which can be overwhelming without expert support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Card: What D BIZ Handles - Sky Blue Theme */}
              <div className="bg-[#f0f9ff] border border-sky-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-8 flex items-center">
                  <CheckCircle2 className="h-7 w-7 text-sky-500 mr-3" /> What D BIZ Handles
                </h3>
                <ul className="space-y-4">
                  {[
                    "Document verification and pre-registration review",
                    "Name selection guidance and objective planning",
                    "Drafting of Trust Deed / MOA (clear and compliant)",
                    "Stamp duty guidance and execution support",
                    "Registration with Sub-Registrar / authority",
                    "PAN application for NGO / Trust",
                    "Bank account setup guidance",
                    "12A and 80G registration support",
                    "FCRA registration guidance (if applicable)",
                    "Post-registration compliance setup and advisory",
                    "Ongoing compliance reminders and support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400 mr-3 flex-shrink-0 group-hover:text-sky-500 transition-colors" />
                      <span className="text-gray-600 font-medium text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Card: What You Provide - Gray/Navy Theme */}
              <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-8 flex items-center">
                  <FileText className="h-7 w-7 text-dbiz-navy mr-3" /> What You Provide
                </h3>
                <ul className="space-y-4">
                  {[
                    "Identity and address proof of trustees / members",
                    "Registered office address proof (rent agreement / ownership documents)",
                    "Passport-sized photographs",
                    "Details of NGO objectives and activities",
                    "Basic details of trustees and structure",
                    "Initial contribution details (if any)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <ArrowRight className="mt-1 h-5 w-5 text-slate-400 mr-3 flex-shrink-0 group-hover:text-dbiz-navy transition-colors" />
                      <span className="text-gray-600 font-medium text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Dark Navy Expertise Section - Streamlined Typography */}
            <div className="mt-12 bg-dbiz-navy rounded-[2rem] p-8 md:p-10 text-white overflow-hidden max-w-6xl mx-auto shadow-2xl relative group">
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                    D BIZ CONSULTANCY simplifies the entire NGO / Trust registration process by handling documentation, drafting, and approvals efficiently. From preparing legally compliant Trust Deeds to assisting with tax registrations like 12A and 80G, we ensure your organization is set up correctly from day one.
                  </p>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                    With our expertise, you can focus on your mission while we take care of legal and compliance requirements. D BIZ CONSULTANCY is your trusted partner for building a legally strong and compliant NGO / Trust.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Expert Guidance", desc: "Personalized support from specialists" },
                    { title: "End-to-End Service", desc: "Full registration-to-compliance" },
                    { title: "Transparent Process", desc: "No hidden charges, clear terms" },
                    { title: "Timely Delivery", desc: "Efficient registration timeline" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 shadow-xl">
                      <div className="flex items-center justify-center bg-sky-500/20 rounded-full w-10 h-10 mb-4">
                        <CheckCircle2 className="h-5 w-5 text-sky-400" />
                      </div>
                      <h4 className="text-base font-bold mb-1 text-white">{item.title}</h4>
                      <p className="text-xs text-gray-300/80 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deadlines Section */}
        <section id="deadlines" className="py-20 scroll-mt-32">
          <div className="container-custom">
            <div className="consultancy-section-card animate-on-scroll">
              <p className="consultancy-label">Timelines</p>
              <h4 className="consultancy-heading">NGO / Trust Statutory Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Trust Deed Registration", due: "Immediate", desc: "The Trust Deed must be registered with the Sub-Registrar as soon as it is executed on stamp paper." },
                  { title: "12A & 80G Application", due: "Within 6 Months", desc: "Ideally, apply for 12A and 80G registrations within 6 months of incorporation to avail tax benefits." },
                  { title: "Income Tax Filing (ITR-7)", due: "By 30th Sept / Oct", desc: "Annual income tax return must be filed by Sept 30th (or Oct 31st if audit is mandatory)." },
                  { title: "FCRA Annual Return", due: "By 31st Dec", desc: "For NGOs with FCRA registration, the annual return (Form FC-4) must be filed by Dec 31st every year." }
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
                  { title: "ITR Late Filing Fee", desc: "Late filing of ITR-7 attracts a penalty of ₹5,000 to ₹10,000 depending on the delay and income level." },
                  { title: "Loss of Tax Exemptions", desc: "Failure to comply with 12A/80G conditions can lead to the cancellation of tax-exempt status for the NGO." },
                  { title: "FCRA Cancellation", desc: "Non-filing of FCRA returns or misutilization of foreign funds results in suspension or cancellation of FCRA license." },
                  { title: "Trustee Personal Liability", desc: "Trustees can be held personally liable for breach of trust, fraud, or gross negligence in managing NGO assets." }
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

        <section id="faqs" className="py-20 bg-gray-50 scroll-mt-32">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on NGO / Trust Registration</h2>
              
              <p className="text-sm text-gray-500 mb-6 italic font-medium uppercase tracking-wider">
                Last updated: Feb 2026
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're understanding the registration process, tax exemptions like 12A and 80G, compliance requirements, or choosing between Trust, Society, and Section 8 Company — we've covered the most common questions with clear and practical answers.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg mb-4 border border-gray-200">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed text-sm pt-4 pb-6">{faq.answer}</AccordionContent>
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

export default NgoRegistrationPage;
