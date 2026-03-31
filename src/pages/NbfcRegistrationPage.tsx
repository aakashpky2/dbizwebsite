
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
    Landmark,
    PiggyBank,
    BadgeCent,
    AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { indianCities } from "@/data/keralaLocations";
import NotFound from "./NotFound";
import { nbfcRegistrationFaq } from "@/data/nbfcRegistrationFaq";

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

// NBFC Registration Page - SEO Optimized Feb 2026
const NbfcRegistrationPage = () => {
    const params = useParams();
    const location = params?.location as string;
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Check if location is valid (if provided)
    const isValidLocation = !location || indianCities.map(city => city.toLowerCase().replace(/\s+/g, '-')).includes(location);

    // If location is provided, we're on a city-specific page
    const cityName = location ? indianCities.find(city => city.toLowerCase().replace(/\s+/g, '-') === location) : "India";
    const seoTitle = location === undefined ? "NBFC Registration in India | D BIZ CONSULTANCY" : `NBFC Registration in ${cityName} | D BIZ CONSULTANCY`;

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
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f" alt="Background" className="w-full h-full object-cover" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                                    <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                    Financial & Banking Registrations
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                                    NBFC Registration in {cityName || "India"}
                                </h1>

                                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                                    A Non-Banking Financial Company (NBFC) is a company incorporated under the Companies Act that engages in the business of loans and advances, acquisition of securities, leasing/hiring or insurance business. Get RBI-approved compliance and setup with our experts.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" variant="outline" onClick={() => handleSectionClick('features')} className="border-white text-slate-50 bg-dbiz-navy">
                                        <ArrowDownCircle className="mr-2 h-4 w-4" /> Discover Features
                                    </Button>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm font-medium text-white/80">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>Quick Registration</span>
                                    </div>
                                    <div className="hidden sm:block text-white/40">•</div>
                                    <div className="flex items-center">
                                        <Shield className="h-4 w-4 mr-2" />
                                        <span>RBI-approved Compliance</span>
                                    </div>
                                    <div className="hidden sm:block text-white/40">•</div>
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-2" />
                                        <span>Expert Support</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                                        <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc" alt="NBFC Registration" className="w-full h-auto rounded-lg shadow-lg" />

                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                                <div className="text-xl font-bold">₹2 to ₹10 Cr</div>
                                                <div className="text-sm opacity-80">Minimum Capital (NOF)</div>
                                            </div>

                                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                                                <div className="text-xl font-bold">RBI</div>
                                                <div className="text-sm opacity-80">Regulator</div>
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

                                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">What is a Non-Banking Financial Company (NBFC)?</h2>

                                <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Under Section 45-I of the RBI Act, an NBFC is defined as any company that is a financial institution or has loans/deposits as its principal business. They cannot operate until the RBI issues a Certificate of Registration (CoR) under Section 45-IA.
                                    </p>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        Unlike banks, NBFCs cannot accept demand deposits or issue cheques. They raise funds through equity, deposits (if explicitly permitted by RBI/licensed), or borrowing. RBI classifies NBFCs into multiple categories (e.g. NBFC-ND, NBFC-D, NBFC-MFI, NBFC-IFC, NBFC-P2P) based on their specific financial activities and scale.
                                    </p>
                                </div>

                                {/* Minimum Requirements Mini-block */}
                                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-6">
                                    <h3 className="text-xl font-semibold text-dbiz-navy mb-4">Minimum Requirements at a Glance</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-dbiz-navy">Type of Entity</p>
                                                <p className="text-sm text-gray-600">Company (usually Private Limited, could be Public).</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-dbiz-navy">Members & Directors</p>
                                                <p className="text-sm text-gray-600">At least 2 members/directors (for private), including at least one resident Indian director.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-dbiz-navy">Capital (NOF)</p>
                                                <p className="text-sm text-gray-600">Must maintain statutory Net Owned Fund (NOF), raised by RBI to ₹2 crore+ (up to ₹10 crore for some categories).</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-dbiz-navy">Limited Liability</p>
                                                <p className="text-sm text-gray-600">As a company, member liability is limited to unpaid share amounts, featuring perpetual succession.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                        <div className="text-dbiz-teal mb-3">
                                            <Landmark className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">RBI Regulation</h3>
                                        <p className="text-gray-600">Subject strictly to Reserve Bank of India (RBI) through Master Directions and stringent notifications rather than just MCA controls.</p>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                        <div className="text-dbiz-teal mb-3">
                                            <PiggyBank className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-dbiz-navy">Deposit Clarifications</h3>
                                        <p className="text-gray-600">Cannot accept demand deposits (like Savings/Current accounts). Deposit-taking NBFCs (NBFC-D) follow highly restrictive deposit rules.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/3">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy">Name Suffix Rules</h3>
                                    <p className="text-gray-700 mb-4">
                                        Strict adherence to RBI naming conventions is necessary.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <span>No special suffix required by law (unlike Private Limited).</span>
                                        </li>
                                        <li className="flex items-start">
                                            <AlertTriangle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <span>Cannot use “Bank” or “Finance Company” misleadingly if unregistered.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                                            <span>Deposit-taking NBFCs must prefix their name with “Deposit-taking NBFC” per RBI transparency guidelines.</span>
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

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of an NBFC</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                NBFCs are powerful alternatives to Banks designed for flexible, niche lending, but highly structured in risk management.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Separate Legal Entity</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">On incorporation (SPICe+ filing), it becomes a corporate body with perpetual succession. It can own assets and sue/be sued.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <Landmark className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">RBI-regulated Lending</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Principal business is lending/investments. They cannot operate until RBI explicitly issues a Certificate of Registration (CoR) under Section 45-IA.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <BadgeCent className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">NOF Requirements</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">Must maintain RBI-specified NOF (Net Owned Funds), separate from paid-up share capital, ensuring financial strength before and during operations.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <FileBarChart className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Category-specific Norms</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">NBFC-Ds follow deposit acceptance rules/CRR. NBFC-MFIs have income/debt ratio norms. NBFC-IFCs have infrastructure lending norms.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <PiggyBank className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Strict Deposit Controls</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">NBFCs cannot accept public deposits unless RBI permits. Raising funds via private debt or equity is heavily preferred and more common.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                                <CardHeader className="pb-3">
                                    <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                                    <CardTitle className="text-xl text-dbiz-navy">Separate KYC/CDD</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">As financial institutions, strict compliance with KYC and Anti-Money Laundering (AML) norms under RBI’s Master Directions (PML Act) is mandatory.</p>
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
                                        Advantages of NBFC Formation
                                    </h2>

                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        NBFC status fundamentally elevates a company into the formal financial sector.
                                    </p>
                                </div>
                            </div>

                            <div className="md:w-3/5">
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        "Enhanced funding options: Grants formal access to capital markets (e.g. bond markets, private placement) and attracts institutional lenders/investors.",
                                        "Regulatory credibility: Being RBI-regulated massively boosts credibility with corporate customers and banking partners compared to unregulated financiers.",
                                        "Flexibility in operations: Credit models can be highly tailored, operating often more flexibly than banks in niche sectors (microfinance, MSMEs, infra).",
                                        "Tax transparency: NBFCs are taxed as corporations. Companies may opt for the concessional tax rate (22% + cess under Sec 115BAA with conditions).",
                                        "Limited liability & Succession: Protects promoters’ personal assets. Because it is a corporate body, changes in directors or shareholders do not break the entity's progression."
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

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">NBFC vs Banks vs Private Ltd</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                An NBFC straddles the line between a standard corporation and a full-fledged banking entity.
                            </p>
                        </div>

                        <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50">
                                            <TableHead className="py-4 text-dbiz-navy font-bold">Feature</TableHead>
                                            <TableHead className="bg-dbiz-teal/10 py-4 text-dbiz-navy font-bold">NBFC</TableHead>
                                            <TableHead className="py-4 text-dbiz-navy font-bold">Private Limited</TableHead>
                                            <TableHead className="py-4 text-dbiz-navy font-bold">Bank</TableHead>
                                            <TableHead className="py-4 text-dbiz-navy font-bold">FinTech / Payment Co</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Regulator</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Reserve Bank of India (RBI)</TableCell>
                                            <TableCell className="border-r">MCA / Companies Act</TableCell>
                                            <TableCell className="border-r">RBI (Special License)</TableCell>
                                            <TableCell>RBI (PPI/AA only) or others</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Capital req.</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">RBI NOF requirement (₹2–10 cr)</TableCell>
                                            <TableCell className="border-r">No minimum (defunct)</TableCell>
                                            <TableCell className="border-r">₹500+ cr for new</TableCell>
                                            <TableCell>No minimum capital generally</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Accept deposits</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Only if licensed NBFC-D (strict limits)</TableCell>
                                            <TableCell className="border-r">Cannot accept public deposits</TableCell>
                                            <TableCell className="border-r">Yes (full banking)</TableCell>
                                            <TableCell>Only permitted receipts</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Funding ability</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">Can lend, issue bonds; ltd public FI raising</TableCell>
                                            <TableCell className="border-r">Private funding, loans; no public</TableCell>
                                            <TableCell className="border-r">Deposits, bonds, shares</TableCell>
                                            <TableCell>Depends on license</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium border-r">Compliance</TableCell>
                                            <TableCell className="bg-dbiz-teal/5 border-r font-medium text-dbiz-navy">High (RBI returns, disclosures, strict CG)</TableCell>
                                            <TableCell className="border-r">High (ROC filings)</TableCell>
                                            <TableCell className="border-r">Very high (CRR, norms)</TableCell>
                                            <TableCell>Moderate (varies)</TableCell>
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

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required for Registration</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Registration occurs in two phases: Company Incorporation (MCA) and CoR Application (RBI).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">Company KYC & Identity</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">Director PAN, Aadhaar/Passport, address proofs. Digital Signature Certificates (DSC) of directors for SPICe+.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">Incorporation Forms</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">SPICe+ Part A (name approval) & Part B, MOA/AOA drafted with specific NBFC objects, INC-9 declarations.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="bg-gradient-to-r from-dbiz-teal to-dbiz-teal/90 p-6 text-white">
                                    <h3 className="text-xl font-bold">Capital & NOF Proof</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-600">Bank statements showing paid-up capital deposit meeting RBI's NOF requirements (₹2 Cr - ₹10 Cr).</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 lg:col-span-3">
                                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
                                    <h3 className="text-xl font-bold flex items-center"><Landmark className="mr-2 h-5 w-5" /> RBI Application (Form A) Package</h3>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ul className="space-y-2 list-disc list-inside text-gray-600">
                                            <li>Detailed Business Plan mapping lending model</li>
                                            <li>Projected Financials</li>
                                            <li>Current audited financials of subscribers</li>
                                        </ul>
                                        <ul className="space-y-2 list-disc list-inside text-gray-600">
                                            <li>Credit Rating (if applying as Deposit-taking NBFC)</li>
                                            <li>Board Resolution approving NBFC application</li>
                                            <li>Copy of Certificate of Incorporation (COI)</li>
                                        </ul>
                                    </div>
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

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Registration Process</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Incorporating the company is merely step one; crossing the RBI CoR threshold is the core effort.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { step: "1", title: "Select Company Type & Name", desc: "Choose Private/Public Limited. Ensure name obeys Companies Act & RBI deposit-taking naming guidelines (no 'Bank')." },
                                { step: "2", title: "Obtain DSC & DIN", desc: "Acquire Digital Signature Certificates and Director Identification Numbers for all proposed directors." },
                                { step: "3", title: "SPICe+ Incorporation Filing", desc: "File SPICe+ Part A & B. Attach MOA/AOA drafted explicitly with NBFC financial objectives." },
                                { step: "4", title: "Company Incorporation (COI)", desc: "The Registrar issues the Certificate of Incorporation. The entity is now legally formed." },
                                { step: "5", title: "Capital & NOF Deposit", desc: "Deposit required Net Owned Funds (e.g. ₹2 Cr minimum) into the bank and obtain a CA certificate." },
                                { step: "6", title: "Apply to RBI (Form A)", desc: "File RBI Form A for the CoR, including business plans, NOF certificates, board resolutions, and KYC." },
                                { step: "7", title: "RBI Scrutiny & CoR Issuance", desc: "RBI reviews 'fit and proper' criteria. Upon satisfaction, RBI grants the Certificate of Registration (CoR)." },
                                { step: "8", title: "Begin Operations", desc: "Commence actual lending and setups. Implement KYC/AML systems strictly following RBI Master Directions." }
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
                                Post-Registration
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Compliance Framework</h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                NBFCs run on a hybrid compliance model, reporting both to the MCA (for corporate standing) and the RBI (for operational prudence).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Board Meetings & AGMs</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Minimum 4 board meetings/year. First AGM within 9 months of first FY-end, and subsequently every 15 months.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100 border-l-4 border-l-dbiz-teal">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">RBI SBR Returns</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">File consistent RBI returns under the Scale-Based Regulation (SBR) framework (half-yearly/annual prudential disclosures).</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Statutory Audits (Sec 139)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Mandatory annual CA audit. Deposit-taking NBFCs must also maintain explicit statutory reserves (Section 45-IC).</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">Annual ROC Filings</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Financial Statements (AOC-4) within 30 days of AGM and Annual Return (MGT-7) within 60 days of AGM.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100 border-l-4 border-l-dbiz-teal">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">KYC / AML Adherence</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">Daily operations must stringently align with the PML Act and RBI's Anti-Money Laundering and CDD Master Directions.</p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-white border border-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-dbiz-navy font-bold text-lg">DIR-3 KYC Web Changes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700">From 31 March 2026, directors must do KYC once every 3 financial years, with event-based updates falling within 30 days.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                Why D BIZ
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Expert NBFC Registration Services</h2>
                            <p className="text-lg text-gray-600">We turn immense regulatory complexity into clear, timely action.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-dbiz-navy mb-4 flex items-center">
                                    <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What We Handle
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "End-to-end documentation (MOA/AOA drafting with NBFC-specific objects, SPICe+ filings)",
                                        "Pre-submission compliance checks (Minimum capital logic, credit ratings if needed, director RBI eligibility)",
                                        "Complex Coordination with RBI (Form A preparation, Board resolutions mapping, follow-up)",
                                        "Post-registration operational setup (Banking linkage, compliance calendar for ROC/RBI returns)",
                                        "Tax strategy consulting and PAN/TAN workflows"
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
                                        "Standard KYC proofs of all promoters and directors",
                                        "A valid Registered Office proof",
                                        "Detailed business plan overview (crucial for RBI)",
                                        "Solid evidence of capital funding to clear the NOF minimums",
                                        "Standard nominee forms and incorporation declarations"
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

                            <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Frequently Asked Questions</h2>
                            <p className="text-sm text-gray-500 mb-2 italic">Last updated: Feb 2026. Data referencing RBI Act & Master Directions.</p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="space-y-4">
                                {nbfcRegistrationFaq.map((faq, index) => (
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

            </main>
            <Footer />
        </div>
    );
};

export default NbfcRegistrationPage;
