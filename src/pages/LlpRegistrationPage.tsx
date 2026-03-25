
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    ChevronRight,
    ArrowRight,
    FileText,
    Users,
    Shield,
    Building2,
    FileBarChart,
    ArrowDownCircle,
    Phone,
    Clock,
    CheckCircle,
    MessageCircle,
    AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { llpRegistrationFaq } from "@/data/llpRegistrationFaq";

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

// LLP Registration Page - SEO Optimized Feb 2026
const LlpRegistrationPage = () => {
    const params = useParams();
    const location = params?.location as string;
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Check if location is valid (if provided)
    const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

    // If location is provided, we're on a city-specific page
    const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
    const seoTitle = location === undefined ? "LLP Registration in India | DBIZ CONSULTANCY" : `LLP Registration in ${cityName} | DBIZ CONSULTANCY`;

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
                {/* Hero Section with Background Image */}
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

                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                                    LLP Registration in {cityName || "India"}
                                </h1>

                                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                                    This page provides SEO-aligned, regulatory-accurate, website-ready content: LLP registration in India, eligibility, documents, FiLLiP-based incorporation steps, LLP agreement filing, "designated partner" obligations, tax position, FDI conditions, and a compliance calendar.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
                                        <ArrowDownCircle className="mr-2 h-4 w-4" /> Learn More
                                    </Button>
                                </div>

                                <div className="mt-8 flex items-center text-sm font-medium text-white/80">
                                    <Clock className="h-4 w-4 mr-2" />
                                    <span>Quick Registration • Guaranteed Compliance • Expert Support</span>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                                        <img 
                                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                                            alt="LLP Registration" 
                                            className="w-full h-auto rounded-lg shadow-lg" 
                                            loading="eager"
                                            fetchPriority="high"
                                        />

                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                                <div className="text-4xl font-bold">10-15</div>
                                                <div className="text-sm opacity-80">Days (Typical)</div>
                                            </div>

                                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                                <div className="text-4xl font-bold">100%</div>
                                                <div className="text-sm opacity-80">Compliance Assured</div>
                                            </div>
                                        </div>
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

                            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('comparison') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('comparison')}>
                                <FileBarChart className="mr-2 h-4 w-4" /> Comparison
                            </div>

                            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('documents') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('documents')}>
                                <FileText className="mr-2 h-4 w-4" /> Documents
                            </div>

                            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('process') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('process')}>
                                <ArrowRight className="mr-2 h-4 w-4" /> Process
                            </div>

                            <div className={`px-4 py-3 whitespace-nowrap cursor-pointer flex items-center border-b-2 font-medium ${isActive('compliance') ? 'text-dbiz-teal border-dbiz-teal' : 'text-gray-600 border-transparent hover:text-dbiz-navy'}`} onClick={() => handleSectionClick('compliance')}>
                                <Clock className="mr-2 h-4 w-4" /> Compliance
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

                                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Executive Summary</h2>

                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        A Limited Liability Partnership (LLP) is a body corporate and separate legal entity from its partners, with perpetual succession—so changes in partners do not affect the LLP’s existence. It combines partnership-style flexibility (governed primarily by the LLP agreement) with company-like limited liability, subject to statutory carve-outs (e.g., fraud can trigger unlimited liability).
                                    </p>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        LLPs are incorporated and administered through the Registrar under the LLP Act, 2008 and LLP Rules, with mandatory annual filings such as Statement of Account & Solvency (Form 8) and Annual Return (Form 11).
                                    </p>
                                </div>

                                {/* Minimum Requirements Mini-block */}
                                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                                    <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                                            <p className="text-sm">
                                                <span className="font-semibold text-dbiz-navy">Minimum 2 Partners</span> 
                                                <span className="text-gray-600 ml-1">(at least two individuals or entities)</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                                            <p className="text-sm">
                                                <span className="font-semibold text-dbiz-navy">2 Designated Partners</span> 
                                                <span className="text-gray-600 ml-1">(responsible for compliance)</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                                            <p className="text-sm">
                                                <span className="font-semibold text-dbiz-navy">Resident DP</span> 
                                                <span className="text-gray-600 ml-1">(at least one must be resident in India)</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                                            <p className="text-sm">
                                                <span className="font-semibold text-dbiz-navy">No Minimum Capital</span> 
                                                <span className="text-gray-600 ml-1">(no requirement for LLP incorporation)</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0" />
                                            <p className="text-sm">
                                                <span className="font-semibold text-dbiz-navy">Limited Liability</span> 
                                                <span className="text-gray-600 ml-1">(protection for partners)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                        <div className="text-dbiz-teal mb-3">
                                            <Shield className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Separate Legal Entity</h3>
                                        <p className="text-gray-600">The LLP is legally distinct from partners and continues regardless of partner changes—useful for contracts, assets, IP ownership, and long-running client engagements.</p>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                        <div className="text-dbiz-teal mb-3">
                                            <Users className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Limited Liability</h3>
                                        <p className="text-gray-600">A partner is not personally liable for LLP obligations solely by reason of being a partner, and is not liable for another partner’s wrongful act (except in fraud cases).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/3">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Legal Definition (LLP Act, 2008)</h3>
                                    <p className="text-gray-700 mb-4">
                                        An LLP is "a partnership formed and registered under this Act" (LLP Act, 2008), but it is not governed by the Indian Partnership Act, 1932.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <span>Every LLP name must end with "Limited Liability Partnership" or "LLP."</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <span>Recent amendments up to Feb 2026 introduced concepts such as Small LLP with thresholds and conditions.</span>
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
                </section>

                {/* Key Features Section */}
                <section id="features" className="py-16 bg-gray-50 scroll-mt-32">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Features
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features and Benefits</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                DBIZ CONSULTANCY helps entrepreneurs across {cityName} understand and leverage these key features of an LLP.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Separate legal entity + perpetual succession</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">The LLP is legally distinct from partners and continues regardless of partner changes—useful for contracts, assets, IP ownership, and long-running client engagements.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Limited liability (with statutory exceptions)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">A partner is not personally liable for LLP obligations solely by reason of being a partner. If business is carried on with intent to defraud, liability can become unlimited.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Designated partner compliance accountability</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Designated partners are responsible for required acts/filings under the LLP Act and can be liable for penalties for contraventions.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Contract-driven governance</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Mutual rights/duties of partners and LLP governance are primarily determined by the LLP Agreement; default provisions apply only where agreement is silent.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Tax positioning</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">LLPs are taxed as partnership firms: for AY 2025–26, the headline tax rate is 30% (plus surcharge/cess). Corporate concessional regimes are inapplicable to LLPs.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">FDI permissibility</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Eligible foreign investors may invest in LLPs generally only where 100% FDI is allowed under automatic route and there are no FDI-linked performance conditions.</p>
                                </CardContent>
                            </Card>
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

                                    <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">
                                        When is an LLP often preferred?
                                    </h2>

                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        DBIZ CONSULTANCY helps businesses understand why an LLP may be the ideal structure over traditional entities.
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-3/5">
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "Professional services seeking structural flexibility and limited liability.",
                                        "Closely held ventures with targeted funding models and partner alignments.",
                                        "Multiple co-founders who want limited liability + flexible profit sharing through the LLP Agreement.",
                                        "Businesses looking for lower meeting rigidity than companies—while accepting annual ROC/MCA filings and audit triggers."
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                                            <div className="flex">
                                                <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center mt-1">
                                                    <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                                                </div>
                                                <div className="ml-5">
                                                    <p className="text-gray-700">{item}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Comparison
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">LLP vs OPC vs Private Ltd vs Sole Proprietorship</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Understand the key differences to make an informed decision for your business.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                                            <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">LLP</TableHead>
                                            <TableHead className="py-4 text-dbiz-navy font-bold">OPC</TableHead>
                                            <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                                            <TableHead className="py-4 text-dbiz-navy font-bold">Sole Proprietorship</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Legal entity</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Separate body corporate</TableCell>
                                            <TableCell className="border-r">Company (separate on incorporation)</TableCell>
                                            <TableCell className="border-r">Company (separate on incorporation)</TableCell>
                                            <TableCell>Not separate (owner = business)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Owners</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Min 2 partners</TableCell>
                                            <TableCell className="border-r">1 member + nominee</TableCell>
                                            <TableCell className="border-r">Min 2; max 200 members</TableCell>
                                            <TableCell>1 owner</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Management</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Designated partners (min 2)</TableCell>
                                            <TableCell className="border-r">Directors (min 1)</TableCell>
                                            <TableCell className="border-r">Directors (min 2)</TableCell>
                                            <TableCell>Owner-managed</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Resident requirement</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">≥1 DP resident in India (120 days)</TableCell>
                                            <TableCell className="border-r">≥1 resident director</TableCell>
                                            <TableCell className="border-r">≥1 resident director</TableCell>
                                            <TableCell>Unspecified</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Capital model</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Partner contribution</TableCell>
                                            <TableCell className="border-r">Share capital</TableCell>
                                            <TableCell className="border-r">Share capital</TableCell>
                                            <TableCell>Owner capital</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Public fundraising</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Funded via contribution/debt</TableCell>
                                            <TableCell className="border-r">Private constraints</TableCell>
                                            <TableCell className="border-r">Cannot invite public</TableCell>
                                            <TableCell>Not applicable</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documents Section */}
                <section id="documents" className="py-16 scroll-mt-32">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Documents
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required Checklist</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Collecting and preparing all required documentation correctly is essential.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">Partner/DP KYC</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">ID + address proofs for all partners and designated partners.</p>
                                    <p className="text-sm text-gray-500 italic mt-2">Required to establish legal identity for incorporation and filings.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">DSC</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">Digital signatures for designated partners / authorized signatory.</p>
                                    <p className="text-sm text-gray-500 italic mt-2">Needed for MCA e-filing workflows.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">DPIN/DIN</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">DPIN/DIN for designated partners (or apply during incorporation).</p>
                                    <p className="text-sm text-gray-500 italic mt-2">DPs must have identifier; LLP Act applies DIN framework.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">Registered Office Proof</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">Address + supporting proof.</p>
                                    <p className="text-sm text-gray-500 italic mt-2">LLP must maintain a registered office for communication and service.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">Incorporation Filing</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">FiLLiP incorporation document + prescribed attachments.</p>
                                    <p className="text-sm text-gray-500 italic mt-2">LLP incorporation document is filed under section 11.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">LLP Agreement</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">Signed LLP agreement + stamp duty as applicable.</p>
                                    <p className="text-sm text-gray-500 italic mt-2">Governs rights/duties; must be filed in Form 3 within 30 days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="py-16 bg-gray-50 scroll-mt-32">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Registration Process
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step LLP Registration Process</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We guide you through the entire FiLLiP-based incorporation process.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { step: "1", title: "Name Planning", desc: "Shortlist compliant name ending with “LLP”. Based on LLP name rules." },
                                { step: "2", title: "FiLLiP Filing", desc: "File incorporation document with Registrar (MCA). FiLLiP is the prescribed incorporation form." },
                                { step: "3", title: "DP Setup", desc: "Ensure 2 designated partners + 1 resident DP; DPIN/DIN." },
                                { step: "4", title: "Incorporation Approval", desc: "Registrar issues certificate; LLPIN allotted. Certificate is conclusive evidence of incorporation." },
                                { step: "5", title: "LLP Agreement Execution", desc: "Draft, execute, pay stamp duty as applicable. Agreement governs." },
                                { step: "6", title: "File LLP Agreement", desc: "File Form 3 within 30 days of incorporation; changes within 30 days." },
                                { step: "7", title: "Operational Setup", desc: "Bank account, GST/other registrations as applicable." }
                            ].map((process, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                                    <div className="flex flex-col md:flex-row items-center border-l-4 border-dbiz-navy">
                                        <div className="p-6 bg-dbiz-navy/5 h-full flex items-center justify-center min-w-[120px]">
                                            <span className="text-3xl font-bold text-dbiz-navy">Step {process.step}</span>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-dbiz-navy mb-2">{process.title}</h3>
                                            <p className="text-gray-700">{process.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section id="compliance" className="py-16 scroll-mt-32">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Post-Incorporation
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance and Post-Incorporation Timeline</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Stay compliant to avoid penalties. LLPs are required to file certain mandatory annual documents.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">LLP Agreement filing (Form 3)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Every LLP must file information about its LLP Agreement in Form 3 within 30 days of incorporation, and file changes within 30 days of change.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Annual return (Form 11)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Every LLP must file an annual return with the Registrar within 60 days of closure of its financial year.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Statement of Account & Solvency (Form 8)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">LLP must prepare the Statement within 6 months from FY end, and file Form 8 within 30 days from the end of six months from FY end.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Audit Requirement</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Audit exemption where turnover does not exceed ₹40 lakh or contribution does not exceed ₹25 lakh. Otherwise, audit is required.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">DIR-3 KYC Applicability</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">MCA Gazette notification effective 31 March 2026 changes DIN KYC to DIR-3-KYC-Web once every third consecutive FY (by June 30) with event-based updates within 30 days.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Small Company Exclusion</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">"Small Company" concept does not apply to LLPs. LLPs instead may qualify as Small LLP based on statutory thresholds/conditions.</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                                        Need Help With Compliance? Contact Us
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-56 p-0">
                                    <ContactOptions />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Why DBIZ
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why DBIZ CONSULTANCY for LLP Registration?</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                                    <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What We Handle (End-to-end Setup)
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Name strategy and LLP suffix compliance checks",
                                        "FiLLiP preparation and filing support",
                                        "Designated partner setup (DPIN/DIN pathways)",
                                        "LLP Agreement drafting aligned to business model",
                                        "Form 3 filing within 30 days",
                                        "Annual compliance calendar + audit thresholds checking",
                                        "Cross-compliance guidance for DIN KYC changes (March 2026)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                                    <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "KYC documents for partners/designated partners",
                                        "Address proof for registered office",
                                        "Business activity description",
                                        "Contribution/profit-share plan"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="py-16 scroll-mt-32">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                FAQs
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">FAQs on LLP Registration (India)</h2>
                            <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026</p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Clear answers for your LLP registration and compliance queries. Priority sources: LLP Act 2008 & LLP Rules.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="space-y-4">
                                {llpRegistrationFaq.map((faq, index) => (
                                    <AccordionItem key={`faq-${index}`} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                            <h3 className="text-left font-medium text-base">{faq.question}</h3>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
};

export default LlpRegistrationPage;
