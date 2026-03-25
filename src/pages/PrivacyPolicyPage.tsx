
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const PrivacyPolicyPage = () => {
    const publishDate = "2026-03-19T10:00:00+05:30";

    return (
        <div className="min-h-screen flex flex-col">
            <SEO 
                title="Privacy Policy | DBIZ CONSULTANCY"
                description="Our privacy policy details how we handle your personal data and protect your information at DBIZ CONSULTANCY."
                url="/privacy-policy"
                publishDate={publishDate}
            />
            <Navbar />
            <main className="flex-grow pt-24 pb-20">
                <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy", current: true }]} />
                
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                        <h1 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-8">Privacy Policy</h1>
                        
                        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                            <p><strong>Effective Date: March 19, 2026</strong></p>
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-dbiz-navy mb-4">1. Introduction</h2>
                                <p>Welcome to DBIZ CONSULTANCY. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
                            </section>
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-dbiz-navy mb-4">2. Information We Collect</h2>
                                <p>We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or sign up for our newsletter. This may include:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name and contact information</li>
                                    <li>Business details</li>
                                    <li>Identity proofs for registration purposes</li>
                                    <li>Communication history with us</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-dbiz-navy mb-4">3. How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide and manage our consultancy services</li>
                                    <li>Process registrations and filings with government authorities</li>
                                    <li>Communicate with you about your projects and our services</li>
                                    <li>Improve our website and user experience</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-dbiz-navy mb-4">4. Data Protection</h2>
                                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. Your sensitive business documents are handled with the highest level of confidentiality.</p>
                            </section>
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-dbiz-navy mb-4">5. Your Rights</h2>
                                <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at info@dbizsolutions.in.</p>
                            </section>
                            
                            <section>
                                <h2 className="text-2xl font-semibold text-dbiz-navy mb-4">6. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                                <p><strong>DBIZ CONSULTANCY</strong><br />
                                Thiruvananthapuram, Kerala, India<br />
                                Email: info@dbizsolutions.in<br />
                                Phone: +91 8075273408</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
