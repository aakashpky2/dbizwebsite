import React from "react";
import {
    CheckCircle,
    ShieldCheck,
    TrendingUp,
    Layers,
    FileCheck,
    Users,
    Calendar,
    Network,
    Lightbulb,
    Check
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SEOContentSection = () => {
    return (
        <section className="py-24 bg-gray-50/30">
            <div className="container-custom">
                {/* Main Heading Section */}
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-dbiz-navy leading-tight tracking-tight">
                        Why Choose <span className="text-3xl md:text-5xl uppercase inline-block my-1">DBIZ CONSULTANCY</span> as your Business Growth & Compliance Partner?
                    </h2>
                    <div className="w-24 h-1.5 bg-dbiz-teal mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Starting a business in India is more than just company registration. It requires strategic planning, legal precision, and ongoing statutory monitoring.
                    </p>
                </div>

                {/* Detailed Blocks: Unified 4-Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Block 1: Legal Support */}
                    <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                        <CardContent className="p-8 md:p-10 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-dbiz-teal/10 rounded-2xl flex-shrink-0">
                                    <ShieldCheck className="h-8 w-8 text-dbiz-teal" />
                                </div>
                                <h3 className="text-xl font-bold text-dbiz-navy uppercase tracking-wide leading-tight mt-1">
                                    Complete Business Setup & Legal Support Under One Roof
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-8 italic">
                                Unlike ordinary registration consultants, DBIZ CONSULTANCY offers comprehensive statutory and legal support including:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 flex-grow mb-8">
                                {[
                                    "Private Limited Company Registration",
                                    "LLP, OPC & Partnership Registration",
                                    "GST Registration & GST Compliance",
                                    "Startup India Registration & Recognition",
                                    "Trademark & Intellectual Property Filing",
                                    "ROC / MCA Compliance Management",
                                    "Income Tax Filing & TDS Returns",
                                    "Internal Audit & Statutory Audit Services",
                                    "Financial Structuring & Documentation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                        <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                                        <span className="group-hover:text-dbiz-teal transition-colors font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-gray-100 font-bold text-dbiz-navy bg-dbiz-teal/5 -mx-8 -mb-8 p-6 md:p-8 rounded-b-3xl italic text-center text-sm md:text-base">
                                We act as your extended compliance team so you never miss a statutory deadline.
                            </div>
                        </CardContent>
                    </Card>

                    {/* Block 2: Startup & Fundraising */}
                    <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                        <CardContent className="p-8 md:p-10 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-dbiz-teal/10 rounded-2xl flex-shrink-0">
                                    <TrendingUp className="h-8 w-8 text-dbiz-teal" />
                                </div>
                                <h3 className="text-xl font-bold text-dbiz-navy uppercase tracking-wide leading-tight mt-1">
                                    End-to-End Startup Support & Fund Raising Guidance
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-8 italic">
                                Starting a business requires more than incorporation. We build the foundation for your scale with specialized advisory:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 flex-grow mb-8">
                                {[
                                    "Business model structuring",
                                    "Legal documentation drafting",
                                    "Shareholding & ESOP structuring",
                                    "Investor-ready compliance support",
                                    "Fundraising documentation assistance",
                                    "Startup pitch support & advisory"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                        <Layers className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                                        <span className="group-hover:text-dbiz-teal transition-colors font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-gray-100 font-bold text-dbiz-navy bg-dbiz-teal/5 -mx-8 -mb-8 p-6 md:p-8 rounded-b-3xl italic text-center text-sm md:text-base">
                                We help you establish it with legal clarity, regulatory compliance, and scalable structure.
                            </div>
                        </CardContent>
                    </Card>

                    {/* Block 3: Monthly Compliance */}
                    <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                        <CardContent className="p-8 md:p-10 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-dbiz-teal/10 rounded-2xl flex-shrink-0">
                                    <Calendar className="h-8 w-8 text-dbiz-teal" />
                                </div>
                                <h3 className="text-xl font-bold text-dbiz-navy uppercase tracking-wide leading-tight mt-1">
                                    Monthly Compliance & Long-Term Governance Management
                                </h3>
                            </div>
                            <div className="space-y-6 flex-grow mb-8">
                                <p className="text-gray-600 italic">
                                    Our team ensures your company stays in good standing with all government authorities by managing complex statutory requirements:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                    {[
                                        "Companies Act Compliance",
                                        "Income Tax Management",
                                        "GST Act & Monthly Returns",
                                        "Labour Law Compliance",
                                        "MCA / ROC Filings",
                                        "TDS Returns & Payments",
                                        "Annual MCA Compliance",
                                        "Statutory Audit Coordination",
                                        "Board Resolution Support",
                                        "Compliance Calendar Management"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 group">
                                            <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                                            <span className="group-hover:text-dbiz-teal transition-colors font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-6 border-t border-gray-100 font-bold text-dbiz-navy bg-dbiz-teal/5 -mx-8 -mb-8 p-6 md:p-8 rounded-b-3xl italic text-center text-sm md:text-base">
                                This ensures your company stays in good standing with government authorities.
                            </div>
                        </CardContent>
                    </Card>

                    {/* Block 4: Strategic Growth */}
                    <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                        <CardContent className="p-8 md:p-10 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-dbiz-teal/10 rounded-2xl flex-shrink-0">
                                    <Network className="h-8 w-8 text-dbiz-teal" />
                                </div>
                                <h3 className="text-xl font-bold text-dbiz-navy uppercase tracking-wide leading-tight mt-1">
                                    Networking & Strategic Growth Support
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-8 italic">
                                Beyond compliance, we leverage our network and professional expertise to help scale your business entity:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 flex-grow mb-8">
                                {[
                                    "Professional Networking",
                                    "Strategic Advisory",
                                    "Process Structuring",
                                    "Governance Best Practices",
                                    "Operational Audits"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                        <CheckCircle className="h-5 w-5 text-dbiz-teal flex-shrink-0 mt-0.5" />
                                        <span className="group-hover:text-dbiz-teal transition-colors font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-gray-100 font-bold text-dbiz-navy bg-dbiz-teal/5 -mx-8 -mb-8 p-6 md:p-8 rounded-b-3xl italic text-center text-sm md:text-base">
                                We help convert your idea into a legally strong and professionally structured business entity.
                            </div>
                        </CardContent>
                    </Card>

                </div>

                {/* Local Presence Section */}
                <div className="mt-24 pt-16 border-t border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-dbiz-navy mb-4">Our Local Presence & Service Areas in Kerala</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Providing best-in-class business consultancy and registration services across major hubs in Kerala.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <div className="p-3 bg-dbiz-teal/10 rounded-xl">
                                <Network className="h-6 w-6 text-dbiz-teal" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dbiz-navy mb-2">Thiruvananthapuram (Trivandrum)</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Headquartered in the capital city, we provide extensive support for **Company Registration in Trivandrum**, GST filings, and Technopark startup compliance. Our local experts understand the regulatory landscape of Thiruvananthapuram to ensure seamless business setup.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5">
                            <div className="p-3 bg-dbiz-teal/10 rounded-xl">
                                <Network className="h-6 w-6 text-dbiz-teal" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dbiz-navy mb-2">Kochi (Ernakulam)</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    As the commercial hub, Kochi is central to our operations. We offer specialized **Business Consultancy in Kochi**, including Trademark registration, Import Export Code (IEC), and ROC compliance for enterprises in Infopark and across Ernakulam district.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center text-gray-500 text-sm italic">
                        Serving clients across Kerala including Kozhikode, Thrissur, Kollam, and Kottayam.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOContentSection;
