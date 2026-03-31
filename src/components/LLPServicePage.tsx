

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, CheckCircle2, FileText, Calendar, HelpCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { indianCities } from "@/data/keralaLocations";
import { llpContent } from "@/data/serviceContent";

interface LLPServicePageProps {
  location?: string;
}

const LLPServicePage = ({
  location = "India"
}: LLPServicePageProps) => {
  const [content, setContent] = useState(llpContent);
  
  useEffect(() => {
    // Check if there is updated content in localStorage
    const savedContent = localStorage.getItem('llp-content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
      } catch (error) {
        console.error("Failed to parse saved content:", error);
      }
    }
  }, []);

  const seoTitle = location === "India" 
    ? `Limited Liability Partnership Registration | Best in India | D BIZ CONSULTANCY` 
    : `Limited Liability Partnership Registration in ${location} | Best in India | D BIZ CONSULTANCY`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={seoTitle} />
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{content.title}</h1>
              <p className="text-lg opacity-90 mb-6">
                {content.description}
              </p>
              
              {location !== "India" && (
                <div className="inline-block bg-dbiz-teal/20 px-4 py-2 rounded-md text-sm font-medium mb-6">
                  <Link to="/limited-liability-partnership" className="text-dbiz-teal hover:underline">
                    View our services across India
                  </Link>
                </div>
              )}
              
              <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white">
                Contact D BIZ CONSULTANCY Today
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center">
              LLP Registration {location !== "India" ? `in ${location}` : "in India"}
            </h2>
            <p className="section-subtitle text-center">
              Understanding Limited Liability Partnership and its advantages for your business
            </p>

            <div className="mt-12">
              <div className="prose prose-lg max-w-none">
                <p>
                  Limited Liability Partnership (LLP) registration is a popular choice for startups and small businesses {location !== "India" ? `in ${location}` : "across India"}, 
                  blending the features of a partnership and a private company. One key advantage is that LLPs require no minimum capital, 
                  making them accessible to new entrepreneurs. The process begins with selecting a unique business name, which is checked 
                  for availability using the RUN-LLP service on the Ministry of Corporate Affairs (MCA) portal.
                </p>
                <p>
                  D BIZ CONSULTANCY provides complete LLP registration services {location !== "India" ? `in ${location}` : "throughout India"}, 
                  ensuring that your business gets established with proper compliance and documentation. We assist with every step, from name 
                  reservation to obtaining the Certificate of Incorporation.
                </p>
                <p>
                  After the business name is approved, the LLP agreement is drafted to define the roles, responsibilities, and profit-sharing 
                  ratios among partners. This agreement is a foundational document for the LLP's internal structure. Upon verification, the 
                  MCA issues a Certificate of Incorporation, officially recognizing the LLP as a legal entity.
                </p>
                <p>
                  Our expert team at D BIZ CONSULTANCY will help you navigate the entire process, ensuring that all statutory requirements are met 
                  and your LLP is registered properly {location !== "India" ? `in ${location}` : "across India"}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full mb-8">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
              
              {/* Features Tab */}
              <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-6">Key Features of LLP</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Legal Status of LLPs</h4>
                    <p className="text-gray-700">
                      LLPs have a separate legal entity status, distinct from their partners, which allows them to own assets, 
                      enter into contracts, and sue or be sued in their own name.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Flexibility in Management</h4>
                    <p className="text-gray-700">
                      LLPs offer flexibility in management structure and decision-making processes. Partners can choose to manage 
                      the LLP directly or appoint designated managers or committees for specific functions.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Liability Protection</h4>
                    <p className="text-gray-700">
                      LLP partners enjoy limited liability, meaning their personal assets are protected from the debts 
                      and liabilities of the LLP. Each partner is only liable to the extent of their agreed contribution to the LLP.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Minimal Compliance Requirements</h4>
                    <p className="text-gray-700">
                      Compared to companies, LLPs have fewer compliance requirements. They are not required to hold annual 
                      general meetings (AGMs) or maintain extensive statutory records, simplifying administrative burdens.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Perpetual Succession</h4>
                    <p className="text-gray-700">
                      LLPs have perpetual succession, meaning the LLP continues to exist even if partners change due to 
                      retirement, resignation, or death. The LLP's existence is not affected by changes in its membership.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Ease of Transferability</h4>
                    <p className="text-gray-700">
                      LLP interests can be easily transferred, subject to the terms of the LLP agreement. This allows for 
                      changes in ownership and investment without disrupting the LLP's operations.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              {/* Benefits Tab */}
              <TabsContent value="benefits" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-6">Benefits of LLP Registration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.importance.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex">
                      <CheckCircle2 className="text-dbiz-teal h-6 w-6 mt-1 flex-shrink-0" />
                      <p className="ml-4 text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* Documents Tab */}
              <TabsContent value="documents" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-6">Documents Required for LLP Registration</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Identity Proof of Partners</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>PAN Card (Indian Nationals) or Passport (Foreign Nationals)</li>
                      <li>Aadhaar Card or Voter ID Card</li>
                      <li>Passport-sized photograph</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Address Proof of Partners</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Aadhaar Card or Voter ID Card</li>
                      <li>Passport or Driving License</li>
                      <li>Utility bills (electricity bill, water bill, gas bill or telephone bill) not more than 2 months old</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Registered Office Proof</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Rent agreement or lease deed (if rented)</li>
                      <li>Property tax receipt or ownership deed (if owned)</li>
                      <li>NOC (No Objection Certificate) from the landlord (if rented)</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Other Required Documents</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Digital Signature Certificates (DSC) of all partners</li>
                      <li>Drafted LLP agreement specifying roles, responsibilities, profit-sharing, and decision-making processes</li>
                      <li>Consent of each partner to act as partners of the LLP</li>
                      <li>Form FiLLiP - Application for the incorporation of LLP</li>
                      <li>Declaration by Designated Partners regarding compliance with all requirements</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Process Tab */}
              <TabsContent value="process" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-6">D BIZ CONSULTANCY's LLP Registration Process</h3>
                
                <div className="mt-8 space-y-8">
                  {content.steps?.map((step, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col md:flex-row items-start gap-6 border-b border-gray-100 pb-8"
                    >
                      <div className="bg-dbiz-navy text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* FAQs Tab */}
              <TabsContent value="faqs" className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-dbiz-navy mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">What is a Limited Liability Partnership (LLP)?</h4>
                    <p className="text-gray-700">
                      A Limited Liability Partnership (LLP) is a legal entity that combines the benefits of a partnership with limited liability for its partners. 
                      It is governed by the Limited Liability Partnership Act of 2008.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">What are the advantages of forming an LLP?</h4>
                    <p className="text-gray-700">
                      Forming an LLP offers limited liability protection to its partners, flexibility in management, minimal compliance requirements compared to 
                      companies, and tax efficiency as profits are taxed at the individual partner level.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">Who can be partners in an LLP?</h4>
                    <p className="text-gray-700">
                      Partners in an LLP can be individuals or corporate entities. There must be at least two designated partners, one of whom must be an Indian resident. 
                      There is no limit on the maximum number of partners in an LLP.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">What is the minimum capital requirement for starting an LLP?</h4>
                    <p className="text-gray-700">
                      There is no minimum capital requirement for starting an LLP in India. The partners can contribute any amount of capital agreed upon in the LLP agreement.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">How is an LLP taxed?</h4>
                    <p className="text-gray-700">
                      LLPs are taxed as pass-through entities, similar to partnerships. They do not pay taxes at the entity level. Instead, profits or losses are 
                      passed through to the partners, who report them on their individual income tax returns.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">How long does it take to register an LLP in India?</h4>
                    <p className="text-gray-700">
                      The timeframe to register your LLP typically ranges from 15 to 20 working days, subject to the submission of complete documents and 
                      approvals from regulatory authorities. D BIZ CONSULTANCY strives to expedite the process as much as possible.
                    </p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-2">Is LLP better than Private Limited Company?</h4>
                    <p className="text-gray-700">
                      LLPs offer greater flexibility in management and fewer compliance requirements compared to Private Limited Companies. However, Private Limited 
                      Companies might be preferred for attracting equity investment and providing clearer structures for ownership and control. The choice depends 
                      on the specific needs and goals of your business.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Cities Coverage - Only show on main India page */}
        {location === "India" && (
          <section className="py-16 bg-white">
            <div className="container-custom">
              <h2 className="section-title text-center">Our LLP Registration Services Across India</h2>
              <p className="section-subtitle text-center">
                D BIZ CONSULTANCY provides the best Limited Liability Partnership registration services in the following cities and towns:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                {indianCities.map((city, index) => (
                  <Link 
                    key={index}
                    to={`/limited-liability-partnership/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all text-center border border-gray-100 hover:border-dbiz-teal/40"
                  >
                    <span className="text-dbiz-navy font-medium">{city}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Related Services</h2>
            <p className="section-subtitle text-center">
              Explore other services offered by D BIZ CONSULTANCY in {location}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {content.relatedServices?.map((service, index) => (
                <Link 
                  key={index}
                  to={service.path}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-dbiz-teal/40 group"
                >
                  <h3 className="text-xl font-semibold text-dbiz-navy mb-2 group-hover:text-dbiz-teal transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-dbiz-teal mt-4">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-dbiz-teal/10">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-dbiz-navy mb-4">
              Ready to Register Your Limited Liability Partnership?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              D BIZ CONSULTANCY is the leading service provider for LLP registration in {location}. 
              Contact us today to get started!
            </p>
            <Button className="bg-dbiz-teal hover:bg-dbiz-teal/90 text-white text-lg px-8 py-6">
              Contact Us Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LLPServicePage;
