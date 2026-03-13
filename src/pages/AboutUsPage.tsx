
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Target, Eye, Users, FileText, CheckCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import CachedImage from "@/components/CachedImage";

const AboutUsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                {/* Hero section */}
                <section className="relative bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <CachedImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Background" className="w-full h-full object-cover" />
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-4xl mx-auto text-center animate-fade-in">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-dbiz-teal/20 text-dbiz-teal text-sm font-medium mb-6">
                                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                                About Our Company
                            </div>

                            {/* H1 */}
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Business Consultancy Services in <span className="text-dbiz-teal">Thiruvananthapuram, Kerala</span>
                                <br />
                                <span className="text-2xl md:text-4xl text-white/90 mt-4 block">DBIZ CONSULTANCY PVT. LTD.</span>
                            </h1>

                            <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light mt-6">
                                Your trusted partner for comprehensive financial advisory, statutory compliance, and corporate consultancy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* About Content */}
                <section className="py-20 bg-gray-50">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-8">
                                <h2 className="text-3xl font-bold text-dbiz-navy mb-8 flex items-center">
                                    <Target className="mr-3 h-8 w-8 text-dbiz-teal" />
                                    About DBIZ CONSULTANCY PVT. LTD.
                                </h2>

                                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                                    <p className="text-xl leading-relaxed font-medium">
                                        DBIZ CONSULTANCY PVT. LTD. is a professional business consultancy firm based in Thiruvananthapuram, Kerala, India, delivering comprehensive financial advisory, statutory compliance, and corporate consultancy services to startups, SMEs, and established enterprises.
                                    </p>

                                    <div className="bg-white rounded-2xl p-8 border border-gray-100 my-10 shadow-md transition-shadow hover:shadow-lg">
                                        <h3 className="text-xl font-bold text-dbiz-navy mb-6">We specialize in:</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {[
                                                "GST Registration & GST Return Filing",
                                                "ROC Compliance & Company Law Matters",
                                                "Income Tax Filing & Tax Advisory",
                                                "Internal & Statutory Audit Services",
                                                "Startup Registration & Business Incorporation",
                                                "Corporate Governance & Regulatory Compliance"
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-start">
                                                    <CheckCircle2 className="h-6 w-6 text-dbiz-teal mt-0.5 mr-3 flex-shrink-0" />
                                                    <span className="font-medium text-gray-800">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="leading-relaxed">
                                        Our approach is holistic and strategy-driven. We carefully evaluate financial systems, taxation structure, statutory compliance, risk exposure, and long-term growth plans to deliver practical and result-oriented business solutions.
                                    </p>

                                    <div className="flex flex-col md:flex-row gap-6 p-8 bg-dbiz-teal/5 border-l-4 border-dbiz-teal rounded-r-xl my-8">
                                        <Users className="h-10 w-10 text-dbiz-teal flex-shrink-0" />
                                        <p className="leading-relaxed text-dbiz-navy font-medium">
                                            Our team comprises highly qualified Chartered Accountants, Company Secretaries, Cost Accountants, Legal Professionals, and other skilled experts with more than 10 years of industry experience. By combining technical expertise with real-world business insight, we ensure reliable, compliant, and growth-focused advisory services tailored to each client’s needs.
                                        </p>
                                    </div>

                                    <p className="leading-relaxed font-medium text-lg">
                                        As a trusted consultancy firm in Kerala, we are committed to supporting businesses across India with transparent, ethical, and professional services.
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar / Vision */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-32">
                                    <div className="bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                                        <div className="absolute -top-10 -right-10 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                                            <Eye className="w-48 h-48" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                                                <Lightbulb className="h-8 w-8 text-white" />
                                            </div>
                                            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                                            <p className="text-white/90 leading-relaxed text-lg">
                                                To be the most trusted business consultancy and corporate advisory firm in Kerala and India, recognized for delivering innovative, compliant, and growth-driven solutions that empower businesses to succeed in a rapidly evolving economic environment.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                        <h3 className="text-xl font-bold text-dbiz-navy mb-4">Need Expert Guidance?</h3>
                                        <p className="text-gray-600 mb-6">Contact our team of professionals to discuss how we can help your business grow.</p>
                                        <a href="/#contact">
                                            <Button className="w-full bg-dbiz-teal hover:bg-dbiz-teal/90 text-white font-medium py-6 h-auto text-base">
                                                Contact Us Now
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;
