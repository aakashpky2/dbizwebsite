
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowDownCircle, Phone, MessageCircle, Building2, Shield, Users, FileText, Calendar, AlertTriangle, Clock } from "lucide-react";
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
  description: "Nidhi Company Compliance ensures your Nidhi Company meets all regulatory requirements under the Companies Act, 2013 and Nidhi Rules, 2014. Stay compliant and avoid penalties with our expert assistance.",
  benefits: [
    "Avoid Heavy Penalties: Non-compliance can result in fines up to ₹5 lakhs",
    "Maintain Good Standing: Keep your company in active status with MCA",
    "Build Trust: Compliance enhances credibility with members and stakeholders",
    "Legal Protection: Directors are protected from personal liability",
    "Smooth Operations: Compliant companies face fewer operational hurdles",
    "Easy Financing: Banks prefer lending to compliant companies"
  ],
  features: [
    { title: "Annual Returns Filing", description: "Timely filing of AOC-4 and MGT-7 with Registrar of Companies" },
    { title: "NDH-1 Filing", description: "Half-yearly return filing for Nidhi Companies within 30 days" },
    { title: "NDH-3 Filing", description: "Annual return for net owned funds compliance" },
    { title: "Board Meetings", description: "Conduct and document minimum 4 board meetings annually" },
    { title: "AGM Compliance", description: "Annual General Meeting within statutory timelines" },
    { title: "Statutory Registers", description: "Maintain all required registers and records" }
  ],
  faqs: [
    { question: "What is a Nidhi Company?", answer: "A Nidhi Company is a type of NBFC that promotes savings and lends money only to its members. It is governed by Section 406 of the Companies Act, 2013 and the Nidhi Rules, 2014." },
    { question: "Is Nidhi Company compliance mandatory?", answer: "Yes, compliance is mandatory under the Companies Act, 2013 and Nidhi Rules, 2014. Non-compliance can lead to penalties, restrictions, or cancellation of Nidhi status." },
    { question: "What is the minimum member requirement?", answer: "A Nidhi Company must have at least 200 members within 1 year of incorporation. Maintaining this requirement is a continuous statutory obligation." },
    { question: "What is Net Owned Funds (NOF)?", answer: "NOF is the company's own capital — share capital plus free reserves minus accumulated losses and intangible assets. A minimum of ₹10 lakhs NOF must be maintained at all times." },
    { question: "What is the NOF to deposit ratio?", answer: "The ratio of Net Owned Funds to deposits should not exceed 1:20. This means for every ₹1 of NOF, the company cannot accept more than ₹20 in deposits." },
    { question: "What is NDH-1?", answer: "NDH-1 is an annual return filed with the ROC confirming compliance with member count, deposit requirements, and Net Owned Funds as prescribed under the Nidhi Rules." },
    { question: "What is NDH-3?", answer: "NDH-3 is a half-yearly return containing details of members, deposits, and loans. It must be filed within 30 days from the close of each half year." },
    { question: "Can a Nidhi Company accept deposits from the public?", answer: "No. A Nidhi Company can only accept deposits from its registered members. Accepting deposits from the public is strictly prohibited under the Nidhi Rules, 2014." },
    { question: "Is audit compulsory for a Nidhi Company?", answer: "Yes, statutory audit by a Chartered Accountant is mandatory every financial year. Audited financial statements are required for ROC filings and general meetings." },
    { question: "What happens if compliance is not done?", answer: "Non-compliance may lead to monetary penalties, restrictions on operations, disqualification of directors, or cancellation of the Nidhi Company's recognition by the Central Government." },
    { question: "What are the main annual compliances?", answer: "The key annual compliances include AOC-4 (financial statements), MGT-7 (annual return), NDH-1, statutory audit, and holding the Annual General Meeting (AGM) within the prescribed timelines." },
    { question: "What is an unencumbered term deposit?", answer: "A Nidhi Company must maintain at least 10% of its outstanding deposits as unencumbered term deposits with a scheduled bank or post office. This acts as a liquidity reserve to protect member deposits." },
    { question: "Can a Nidhi Company give loans to non-members?", answer: "No. Loans can only be given to registered members of the Nidhi Company. Lending to non-members is not permitted under the Nidhi Rules, 2014." },
    { question: "Is ROC filing mandatory every year?", answer: "Yes, annual ROC filings such as AOC-4 and MGT-7 are compulsory to maintain legal status. Failure to file can result in penalties and may affect the company's active status with MCA." },
    { question: "How can D BIZ CONSULTANCY help?", answer: "D BIZ CONSULTANCY handles complete compliance management including NDH-1, NDH-3, AOC-4, MGT-7, audit coordination, member monitoring, and NOF tracking — ensuring 100% regulatory compliance for your Nidhi Company." }
  ]
};

const NidhiCompanyCompliancePage = () => {
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
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1440&q=40" 
              alt="Background" 
              className="w-full h-full object-cover" 
              fetchPriority="high"
            />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-wider mb-6">
                  <Shield className="h-4 w-4 text-dbiz-teal" />
                  <span className="uppercase text-white">Hassle-free | Accurate | Expert Supported</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[63.75px] font-bold mb-6 leading-[1.1] tracking-tight">
                  Nidhi Company Compliance Services
                  {location && <span className="block text-3xl md:text-4xl mt-3 text-dbiz-teal/90">in {cityName}</span>}
                </h1>
                
                <h2 className="text-xl md:text-2xl text-dbiz-teal font-bold mb-6 tracking-wide leading-snug max-w-3xl">
                  Accurate, Timely & Fully Compliant Nidhi Company Compliance for Businesses
                </h2>
                
                <div className="text-base md:text-[19.125px] opacity-90 mb-8 leading-relaxed space-y-4 font-medium max-w-3xl">
                  <p>Managing Nidhi Company compliance is more than a statutory requirement—it is essential for maintaining regulatory approval, avoiding penalties, and ensuring smooth financial operations. Whether you are a newly incorporated Nidhi Company or an existing one, proper compliance is crucial to continue operations without restrictions or legal issues.</p>
                  <p>D BIZ CONSULTANCY provides expert-driven Nidhi Company compliance services ensuring accurate filings, timely submissions, and complete adherence to regulatory requirements.</p>
                </div>

                <div className="flex flex-wrap gap-5">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dbiz-navy text-lg h-14 px-8 rounded-md transition-all" onClick={() => handleSectionClick('benefits')}>
                    <ArrowDownCircle className="mr-2 h-5 w-5" /> Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-dbiz-teal/40 to-transparent rounded-lg blur-lg"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=60" 
                      alt="Nidhi Company Compliance Documents" 
                      className="w-full aspect-[4/3] rounded-lg shadow-lg object-cover"
                    />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-3xl md:text-4xl font-bold">12</div>
                        <div className="text-sm opacity-80">Returns (Typical)</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-3xl md:text-4xl font-bold">0</div>
                        <div className="text-sm opacity-80">Penalties</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[70px] lg:top-[90px] z-40 bg-white shadow-sm border-b border-gray-100">
          <div className="container-custom py-1">
            <div className="flex items-center overflow-x-auto no-scrollbar py-2 gap-1 justify-start lg:justify-center">
              {[
                { id: 'overview', icon: Building2, label: 'Overview' },
                { id: 'features', icon: FileText, label: 'Services' },
                { id: 'benefits', icon: CheckCircle2, label: 'Benefits' },
                { id: 'process', icon: ArrowRight, label: 'Process' },
                { id: 'deadlines', icon: Clock, label: 'Deadlines' },
                { id: 'penalties', icon: AlertTriangle, label: 'Penalties' },
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

        <section id="overview" className="py-16 scroll-mt-32 border-b border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-dbiz-navy mr-2"></span>
                  Overview
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6 tracking-tight">
                  What Is Nidhi Company Compliance?
                </h2>

                <div className="text-[17px] text-gray-700 leading-relaxed space-y-6 font-medium mb-8">
                  <p>
                    Nidhi Company compliance refers to the ongoing legal, statutory, and regulatory requirements that a Nidhi Company must follow after incorporation under the Companies Act, 2013 and the Nidhi Rules, 2014. A Nidhi is formed to cultivate thrift and savings among its members and can accept deposits from, and lend only to, its members for their mutual benefit.
                  </p>
                  <p>
                    Because a Nidhi Company deals with member deposits and loans, compliance is not limited to annual ROC filings alone. It also includes maintaining prescribed financial ratios, minimum membership, unencumbered term deposits, proper registers and records, and timely submission of Nidhi-specific returns. Regular compliance helps the company continue operations smoothly and avoid penalties or regulatory restrictions.
                  </p>
                  <p>
                    Under the law, a Nidhi Company functions only with its members and is regulated as a special class of company under Section 406 of the Companies Act, 2013 read with the Nidhi Rules. This makes compliance especially important for maintaining legal validity, financial discipline, and member confidence.
                  </p>
                </div>

                <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-dbiz-navy mb-5">Minimum Requirements at a Glance</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800 mb-1 text-[17px]">Minimum 200 Members</p>
                        <p className="text-sm text-gray-600 leading-relaxed">A Nidhi Company is required to have at least 200 members within the prescribed period.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800 mb-1 text-[17px]">Net Owned Funds</p>
                        <p className="text-sm text-gray-600 leading-relaxed">It must maintain the minimum prescribed Net Owned Funds.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800 mb-1 text-[17px]">NOF to Deposit Ratio</p>
                        <p className="text-sm text-gray-600 leading-relaxed">The ratio of Net Owned Funds to deposits must remain within the prescribed limit.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800 mb-1 text-[17px]">Unencumbered Term Deposits</p>
                        <p className="text-sm text-gray-600 leading-relaxed">A certain percentage of outstanding deposits must be kept as unencumbered term deposits with a scheduled bank or post office, as required under the rules.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden group mb-auto self-start">
                  <div className="absolute inset-0 bg-gradient-to-br from-dbiz-teal/5 to-transparent z-0"></div>
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=60"
                    alt="Legal Definition"
                    className="w-full h-48 object-cover rounded-xl shadow-md mb-6 relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4 text-dbiz-navy mt-2">Definition as per the Companies Act, 2013</h3>
                    <p className="text-gray-700 mb-4 text-[17px] leading-relaxed">
                      Section 406 of the Companies Act, 2013 describes a Nidhi as a company incorporated with the object of cultivating the habit of thrift and savings amongst its members, receiving deposits from, and lending to, its members only, for their mutual benefit, subject to compliance with the prescribed rules.
                    </p>
                    <p className="text-gray-700 mb-3 font-medium text-[17px]">
                      A Nidhi Company is therefore characterized by the following:
                    </p>
                    <ul className="space-y-3 mb-2 text-[17px] text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[#1f2937]">It promotes thrift and savings among members.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[#1f2937]">It accepts deposits only from members.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[#1f2937]">It gives loans only to members.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[#1f2937]">It must comply with the Nidhi Rules and related statutory filing requirements.</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="bg-dbiz-teal/10 p-2 rounded-full">
                          <Phone className="h-5 w-5 text-dbiz-teal" />
                        </div>
                        <div className="ml-3">
                          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Need expert guidance?</p>
                          <p className="text-dbiz-navy font-bold">Contact Our Team</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50 scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Features
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Key Features of Nidhi Company Compliance</h2>

              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                D BIZ CONSULTANCY helps Nidhi Companies maintain proper compliance and leverage these key features for smooth and regulated operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Users className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Member-Based Operations</h3>
                <p className="text-gray-600 leading-relaxed">
                  A Nidhi Company deals exclusively with its members. All deposits and loans are restricted to members only, ensuring a closed and controlled financial system.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Regulated Compliance Framework</h3>
                <p className="text-gray-600 leading-relaxed">
                  Governed by the Companies Act, 2013 and Nidhi Rules, 2014, Nidhi Companies must follow strict compliance requirements including filing of NDH forms, financial ratios, and statutory returns.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Building2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Mandatory Financial Discipline</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nidhi Companies must maintain Net Owned Funds, deposit ratios (1:20), and unencumbered term deposits, ensuring financial stability and risk management.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Separate Legal Entity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Like any company, a Nidhi is a separate legal entity capable of owning assets, entering contracts, and operating independently from its members.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Calendar className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Perpetual Succession</h3>
                <p className="text-gray-600 leading-relaxed">
                  The company continues to exist irrespective of changes in membership, ensuring continuity and long-term sustainability.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Restricted Business Activities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nidhi Companies cannot engage in chit funds, leasing, insurance, or trading activities. Their operations are strictly limited to borrowing and lending among members.
                </p>
              </div>

              {/* Feature 7 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <FileText className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">High Compliance Requirement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular ROC filings such as NDH-1, NDH-3, AOC-4, and MGT-7 are mandatory, ensuring transparency and accountability.
                </p>
              </div>

              {/* Feature 8 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Shield className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Trust and Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Strict compliance enhances credibility among members, builds trust, and ensures proper governance within the organization.
                </p>
              </div>

              {/* Feature 9 */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-10 w-10 text-dbiz-teal mb-4" />
                <h3 className="text-xl font-bold text-dbiz-navy mb-3">Professional Compliance Management</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nidhi Companies require continuous monitoring of statutory requirements, filings, and financial conditions. With expert compliance support, companies can ensure error-free filings, avoid penalties, and maintain smooth operations without regulatory issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 scroll-mt-32 border-t border-gray-100 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/5">
                <div className="sticky top-32">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                    Benefits
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">
                    Benefits of Nidhi Company Compliance
                  </h2>

                  <p className="text-[19.125px] text-gray-600 mb-8 leading-relaxed font-medium">
                    D BIZ CONSULTANCY helps Nidhi Companies leverage compliance advantages for sustainable growth and smooth operations.
                  </p>

                  <div className="hidden md:block mt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=600&q=60" 
                      alt="Nidhi Compliance Benefits" 
                      className="rounded-xl shadow-lg max-w-sm w-full object-cover aspect-[4/3] border border-gray-100" 
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-3/5">
                <div className="grid grid-cols-1 gap-5">
                  {/* Benefit 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Regulatory Protection ensures the company operates within legal limits and avoids penalties.</p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Member Trust &amp; Credibility builds confidence among members through transparent compliance practices.</p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Smooth Business Operations helps the company function without interruptions or regulatory issues.</p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Financial Discipline maintains financial stability through proper ratio and reserve compliance.</p>
                    </div>
                  </div>

                  {/* Benefit 5 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Improved Governance strengthens accountability, record-keeping, and internal control systems.</p>
                    </div>
                  </div>

                  {/* Benefit 6 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Audit Readiness keeps books, records, and statements ready for audit and verification.</p>
                    </div>
                  </div>

                  {/* Benefit 7 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Legal Continuity supports uninterrupted legal existence and ongoing business operations.</p>
                    </div>
                  </div>

                  {/* Benefit 8 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Member Protection protects members' interests through proper fund management and compliance.</p>
                    </div>
                  </div>

                  {/* Benefit 9 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-dbiz-teal/30 hover:shadow-md transition-all">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-dbiz-teal/10 p-2 rounded-full h-10 w-10 flex items-center justify-center">
                        <CheckCircle2 className="text-dbiz-teal h-5 w-5" />
                      </div>
                      <p className="ml-5 text-gray-700 font-medium leading-relaxed">Long-Term Sustainability improves the company's stability, credibility, and future growth.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structure Comparison Section */}
        <section id="comparison" className="py-16 bg-gray-50 scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Comparison
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Difference Between Business Structures</h2>

              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                Understand why Nidhi Company is a unique structure specifically designed for member-based financial activities.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 border-b border-gray-200 text-dbiz-navy">
                    <tr>
                      <th className="px-6 py-4 font-bold border-r border-gray-200 whitespace-nowrap">Feature</th>
                      <th className="bg-dbiz-teal/10 px-6 py-4 font-bold border-r border-teal-100 whitespace-nowrap">Nidhi Company</th>
                      <th className="px-6 py-4 font-bold border-r border-gray-200 whitespace-nowrap">Private Limited</th>
                      <th className="px-6 py-4 font-bold border-r border-gray-200 whitespace-nowrap">LLP</th>
                      <th className="px-6 py-4 font-bold border-r border-gray-200 whitespace-nowrap">Sole Proprietorship</th>
                      <th className="px-6 py-4 font-bold whitespace-nowrap">Partnership</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Purpose</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Savings & lending among members</td>
                      <td className="px-6 py-4 border-r border-gray-200">General business activities</td>
                      <td className="px-6 py-4 border-r border-gray-200">Professional / small business</td>
                      <td className="px-6 py-4 border-r border-gray-200">Individual business</td>
                      <td className="px-6 py-4">Partnership business</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Liability</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Limited to shares</td>
                      <td className="px-6 py-4 border-r border-gray-200">Limited to shares</td>
                      <td className="px-6 py-4 border-r border-gray-200">Limited to contribution</td>
                      <td className="px-6 py-4 border-r border-gray-200">Unlimited</td>
                      <td className="px-6 py-4">Unlimited</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Legal Entity</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Separate entity</td>
                      <td className="px-6 py-4 border-r border-gray-200">Separate entity</td>
                      <td className="px-6 py-4 border-r border-gray-200">Separate entity</td>
                      <td className="px-6 py-4 border-r border-gray-200">Not separate</td>
                      <td className="px-6 py-4">Not separate</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Ownership</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Minimum 200 members (within 1 year)</td>
                      <td className="px-6 py-4 border-r border-gray-200">2–200 shareholders</td>
                      <td className="px-6 py-4 border-r border-gray-200">2+ partners</td>
                      <td className="px-6 py-4 border-r border-gray-200">Single owner</td>
                      <td className="px-6 py-4">2–50 partners</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Regulation</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Companies Act + Nidhi Rules</td>
                      <td className="px-6 py-4 border-r border-gray-200">Companies Act</td>
                      <td className="px-6 py-4 border-r border-gray-200">LLP Act</td>
                      <td className="px-6 py-4 border-r border-gray-200">No specific act</td>
                      <td className="px-6 py-4">Partnership Act</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Public Involvement</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Not allowed</td>
                      <td className="px-6 py-4 border-r border-gray-200">Not allowed</td>
                      <td className="px-6 py-4 border-r border-gray-200">Not allowed</td>
                      <td className="px-6 py-4 border-r border-gray-200">Allowed</td>
                      <td className="px-6 py-4">Allowed</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Fund Raising</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Only from members</td>
                      <td className="px-6 py-4 border-r border-gray-200">Equity / loans / investors</td>
                      <td className="px-6 py-4 border-r border-gray-200">Partner contribution / loans</td>
                      <td className="px-6 py-4 border-r border-gray-200">Personal funds</td>
                      <td className="px-6 py-4">Partner funds</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Compliance</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">High (NDH forms + ROC filings + ratios)</td>
                      <td className="px-6 py-4 border-r border-gray-200">High (ROC filings, audit, AGM)</td>
                      <td className="px-6 py-4 border-r border-gray-200">Moderate</td>
                      <td className="px-6 py-4 border-r border-gray-200">Minimal</td>
                      <td className="px-6 py-4">Minimal</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Taxation</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Corporate tax applicable</td>
                      <td className="px-6 py-4 border-r border-gray-200">Corporate tax</td>
                      <td className="px-6 py-4 border-r border-gray-200">Flat 30%</td>
                      <td className="px-6 py-4 border-r border-gray-200">Individual tax</td>
                      <td className="px-6 py-4">Individual tax</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200">Best For</td>
                      <td className="px-6 py-4 bg-dbiz-teal/5 border-r border-teal-100 font-medium text-dbiz-navy">Member-based finance businesses</td>
                      <td className="px-6 py-4 border-r border-gray-200">Startups & scalable businesses</td>
                      <td className="px-6 py-4 border-r border-gray-200">Small businesses</td>
                      <td className="px-6 py-4 border-r border-gray-200">Freelancers</td>
                      <td className="px-6 py-4">Family businesses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Required / Error Prevention Tips Section */}
        <section id="documents" className="py-16 bg-white scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Documents
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Documents Required</h2>
              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                D BIZ CONSULTANCY assists Nidhi Companies in collecting, verifying, and preparing all required compliance documents accurately.
              </p>
            </div>

            <div className="w-full mb-12">
              <div className="bg-[#fffbeb] border border-[#fef08a] rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-[#d97706] mr-3" />
                  <h3 className="text-[17px] font-bold text-[#92400e]">Common Compliance Error Prevention Tips</h3>
                </div>
                <div className="text-[#b45309] space-y-1.5 pl-9 text-[15px] font-medium">
                  <p>• Member records must be accurate and updated at all times.</p>
                  <p>• Deposit and loan registers should match the books of accounts.</p>
                  <p>• Financial statements and statutory returns must be prepared consistently.</p>
                  <p>• Net Owned Funds, deposit ratio, and unencumbered term deposit requirements must be properly maintained.</p>
                  <p>• All ROC and Nidhi forms should be filed within the prescribed due dates.</p>
                </div>
              </div>
            </div>

            {/* Documents Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Category 1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-[21.25px] font-bold">For Incorporation & Basic Company Records</h3>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Certificate of Incorporation</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Basic incorporation proof of the Nidhi Company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">PAN & TAN of the Company</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Mandatory tax registration documents of the company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Memorandum of Association (MOA)</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Defines the main objects and scope of the Nidhi Company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Articles of Association (AOA)</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Contains the internal rules and governance structure of the company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">DSC & DIN of Directors</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Digital Signature Certificate and Director Identification Number of directors.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-[21.25px] font-bold">For Member Compliance</h3>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Member Register</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Updated details of all members of the Nidhi Company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">KYC Documents of Members</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Identity and address proof of members as required for records.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Share Allotment / Membership Documents</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Documents relating to membership admission and shareholding.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-[21.25px] font-bold">For Financial Compliance</h3>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Financial Statements</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Balance Sheet, Profit & Loss Account, and related financial reports.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Bank Statements</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Company bank account statements for compliance verification.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Deposit Details</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Records of deposits accepted from members.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Loan Details</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Records of loans provided to members.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Net Owned Funds Working</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Supporting calculation for required NOF compliance.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Unencumbered Term Deposit Proof</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Proof of maintenance of required term deposits with bank or post office.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-[21.25px] font-bold">For Statutory Filing</h3>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">NDH-1 Filing Details</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Return relating to statutory compliance of members and deposits.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">NDH-3 Filing Details</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Half-yearly return for member and deposit details.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">AOC-4</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Filing of financial statements with ROC.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">MGT-7</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Annual return of the company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Auditor Appointment Details</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Documents relating to statutory auditor appointment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-[21.25px] font-bold">For Registered Office</h3>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Registered Office Address Proof</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Proof of the company's registered office address.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Utility Bill</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Recent electricity bill, water bill, or similar address proof.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Rent Agreement / Ownership Proof</p>
                      <p className="text-gray-600 mt-1 text-[15px]">If the premises are rented, rent agreement and owner NOC; if owned, ownership proof.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-6 text-white">
                  <h3 className="text-[21.25px] font-bold">For Statutory Registers & Corporate Records</h3>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Minutes Book (Board & General Meetings)</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Records of Board Meetings and General Meetings conducted by the Nidhi Company.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Statutory Registers</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Registers maintained under Companies Act such as Register of Members, Directors, and Share Transfers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Share Certificates</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Issued share certificates to members as proof of shareholding.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Common Seal (if applicable)</p>
                      <p className="text-gray-600 mt-1 text-[15px]">Company seal used for executing official documents and agreements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-dbiz-teal mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dbiz-navy">Director Disclosure Documents</p>
                      <p className="text-gray-600 mt-1 text-[15px]">MBP-1, DIR-8 and other disclosures submitted by directors annually.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Registration Process Section */}
        <section id="process" className="py-16 bg-gray-50 scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Process
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Step-by-Step Nidhi Company Compliance Process</h2>

              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                A Nidhi Company is incorporated for cultivating thrift and savings among its members and can accept deposits from, and lend only to, its members for their mutual benefit. Its compliance process involves both general company law filings and Nidhi-specific requirements under Section 406 of the Companies Act, 2013 and the Nidhi Rules.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                
                {/* Step 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">1</span>
                      Obtain Incorporation and Basic Company Setup
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      The first step is to complete incorporation and keep the basic company records in place, such as the Certificate of Incorporation, PAN, TAN, MOA, AOA, DSC, and DIN details of directors. These form the foundation for all further compliance and regulatory filings. Nidhi companies are still companies under the Companies Act, so regular corporate documentation remains essential.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">2</span>
                      Declaration Requirement Before Commencing
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      For a company incorporated as a Nidhi, the 2022 incorporation amendment requires that the company must obtain the declaration under Section 406 from the Central Government before commencing the business of a Nidhi, and this requirement is also reflected in the updated incorporation and INC-20A framework.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">3</span>
                      Maintain Minimum Members and Net Owned Funds
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      After incorporation, the company must work toward maintaining the prescribed membership and financial conditions applicable to a Nidhi, including the required number of members, minimum Net Owned Funds, and related financial thresholds. These are core compliance conditions and are monitored through statutory Nidhi filings.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">4</span>
                      Maintain Deposit Ratio and Unencumbered Term Deposits
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      A Nidhi Company must ensure that its Net Owned Funds to deposit ratio remains within the prescribed limit and that the required portion of outstanding deposits is maintained as unencumbered term deposits. This step is essential for financial discipline and regulatory compliance.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">5</span>
                      Maintain Statutory Registers & Financial Records
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      The company must regularly maintain member records, deposit registers, loan records, bank statements, financial statements, and other supporting books of account. Accurate documentation is important because Nidhi compliance is based not only on filing forms but also on maintaining supporting records that reflect the company’s actual financial position.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">6</span>
                      File NDH-1 for Statutory Compliance Position
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      NDH-1 is one of the key Nidhi compliance forms used to report whether the company has complied with the prescribed requirements relating to members, deposits, and Net Owned Funds. This is a major compliance checkpoint in the Nidhi framework.
                    </p>
                  </div>
                </div>

                {/* Step 7 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">7</span>
                      File NDH-3 Half-Yearly Return
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      The company is also required to file NDH-3 as a half-yearly return containing details relating to members, deposits, loans, and other prescribed particulars. This helps regulators monitor the company’s ongoing compliance position during the year.
                    </p>
                  </div>
                </div>

                {/* Step 8 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">8</span>
                      Complete Annual ROC Filings
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      Along with Nidhi-specific forms, the company must complete annual ROC compliances such as filing financial statements and annual returns through forms like AOC-4 and MGT-7, along with audit-related compliances wherever applicable. This ensures that the company remains compliant both as a company and as a Nidhi.
                    </p>
                  </div>
                </div>

                {/* Step 9 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">9</span>
                      Ongoing Monitoring and Timely Compliance
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      Nidhi compliance is not a one-time process. The company must continuously monitor member strength, deposit position, lending activity, statutory ratios, filing deadlines, and internal records. Delays or non-compliance can lead to penalties, restrictions, and regulatory action.
                    </p>
                  </div>
                </div>

                {/* Step 10 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 p-4 text-white">
                    <h3 className="text-[21.25px] font-bold flex items-center pr-2">
                      <span className="flex-shrink-0 flex items-center justify-center bg-white text-dbiz-navy rounded-full h-8 w-8 text-lg mr-3 font-bold">10</span>
                      Conduct Board Meetings & AGM
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      A Nidhi Company must regularly conduct Board Meetings and at least one Annual General Meeting (AGM) every year as per the Companies Act, 2013. These meetings are essential for approving financial statements, reviewing compliance status, and making key business decisions. Proper minutes must be recorded and maintained as part of statutory compliance.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Compliance Table Section */}
        <section id="compliance-table" className="py-16 bg-white scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Compliance
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Mandatory Nidhi Company Compliance</h2>

              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                D BIZ CONSULTANCY provides complete support to ensure your Nidhi Company remains fully compliant with the Companies Act, 2013 and Nidhi Rules, 2014, avoiding penalties and ensuring smooth operations.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-md border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-[14.875px] text-left font-medium">
                  <thead className="bg-gradient-to-r from-dbiz-navy to-dbiz-navy/90 text-white text-[14.875px]">
                    <tr>
                      <th className="px-6 py-5 font-medium border-r border-gray-200/20 whitespace-nowrap">Aspect</th>
                      <th className="px-6 py-5 font-medium border-r border-gray-200/20">Compliance requirement</th>
                      <th className="px-6 py-5 font-medium border-r border-gray-200/20 whitespace-nowrap">Frequency / timeline</th>
                      <th className="px-6 py-5 font-medium">Why it's important</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Declaration for Nidhi Status (NDH-4)</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">File declaration for recognition as a Nidhi Company from Central Government</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Within prescribed time after incorporation</td>
                      <td className="px-6 py-4 text-gray-700">Mandatory to commence Nidhi operations legally</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Minimum Members Compliance</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Achieve and maintain minimum 200 members</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Within 1 year and ongoing</td>
                      <td className="px-6 py-4 text-gray-700">Core requirement to continue as a Nidhi Company</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Net Owned Funds (NOF)</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Maintain minimum ₹10 Lakhs NOF</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Continuous</td>
                      <td className="px-6 py-4 text-gray-700">Ensures financial stability</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">NOF to Deposit Ratio</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Maintain ratio not exceeding 1:20</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Continuous</td>
                      <td className="px-6 py-4 text-gray-700">Prevents excessive risk exposure</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Unencumbered Term Deposits</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Maintain at least 10% of deposits in bank/post office</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Continuous</td>
                      <td className="px-6 py-4 text-gray-700">Safeguards member deposits</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">NDH-1 Filing</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Return of statutory compliance (members, deposits, NOF)</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Annually</td>
                      <td className="px-6 py-4 text-gray-700">Confirms compliance status to ROC</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">NDH-3 Filing</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Half-yearly return of deposits, loans, and members</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Half-Yearly</td>
                      <td className="px-6 py-4 text-gray-700">Tracks ongoing compliance position</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Board Meetings</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Conduct Board Meetings as per Companies Act</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Minimum 4 per year</td>
                      <td className="px-6 py-4 text-gray-700">Ensures governance and decision-making</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Annual General Meeting (AGM)</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Hold AGM for approval of financials and compliance</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Annually</td>
                      <td className="px-6 py-4 text-gray-700">Mandatory shareholder compliance</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Statutory Audit</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Audit of financial statements by CA</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Annually</td>
                      <td className="px-6 py-4 text-gray-700">Ensures financial transparency</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">AOC-4 Filing</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Filing of financial statements with ROC</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Within 30 days of AGM</td>
                      <td className="px-6 py-4 text-gray-700">Mandatory ROC disclosure</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">MGT-7 Filing</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Filing of annual return</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Within 60 days of AGM</td>
                      <td className="px-6 py-4 text-gray-700">Updates company records with ROC</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">DIR-3 KYC</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">KYC of Directors</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">As per timeline</td>
                      <td className="px-6 py-4 text-gray-700">Maintains active DIN status</td>
                    </tr>
                    <tr className="even:bg-gray-50/70 hover:bg-gray-100/60 transition-colors">
                      <td className="px-6 py-4 font-medium border-r border-gray-200 text-gray-900">Income Tax Filing</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700">Filing of ITR (ITR-6)</td>
                      <td className="px-6 py-4 border-r border-gray-200 text-gray-700 whitespace-nowrap">Annually</td>
                      <td className="px-6 py-4 text-gray-700">Ensures tax compliance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Incorporation Compliance Timeline Section */}
        <section id="compliance-timeline" className="py-16 bg-gray-50 scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Timeline
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Post-Incorporation Compliance Timeline</h2>
              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                Keep your Nidhi Company strictly on track and avoid regulatory penalties with this structured compliance timeline.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { time: "30",       unit: "Days",         text: "First Board Meeting and initial governance setup" },
                { time: "1",        unit: "Year",          text: "Achieve 200 members and comply with Nidhi requirements" },
                { time: "Half",     unit: "Yearly",        text: "NDH-3 Filing" },
                { time: "FY End",   unit: "Annual Cycle",  text: "Audit → AGM → AOC-4 → MGT-7 → NDH-1" },
                { time: "∞",        unit: "Continuous",    text: "Maintain NOF, deposit ratios, and statutory records" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center text-center">
                  <div className="w-[56px] h-[56px] rounded-full bg-[#f0f9f9] flex flex-col items-center justify-center mb-3">
                    <span className="text-[#0891b2] font-bold text-base leading-tight">{item.time}</span>
                  </div>
                  <p className="font-medium text-[#1a365d] mb-1 text-[14.875px]">{item.unit}</p>
                  <p className="text-[12.75px] text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Compliance Is Critical Section */}
        <section className="py-16 bg-white scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why It Matters
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dbiz-navy mb-6">Why Compliance Is Critical for Nidhi Companies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Ensures legal validity of Nidhi operations",
                "Prevents penalties, restrictions, and closure risk",
                "Builds strong trust among members",
                "Maintains financial discipline and transparency",
                "Enables smooth long-term growth",
              ].map((point, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dbiz-teal/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-dbiz-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium text-[14.875px] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why D BIZ CONSULTANCY Section */}
        <section className="py-16 bg-gray-50 scroll-mt-32 border-t border-gray-100">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-[14.875px] font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                Why D BIZ
              </div>
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-6">Why D BIZ CONSULTANCY for Nidhi Company Compliance?</h2>
              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                D BIZ CONSULTANCY helps your Nidhi Company stay compliant with the Companies Act, 2013 and the Nidhi Rules, 2014 without stress or delays. From regular filings to ongoing compliance monitoring, we manage the process with accuracy and care so you can focus on running your business.
              </p>
              <p className="text-[17px] text-gray-500 leading-relaxed font-medium mt-4">
                With our experience in corporate compliance and financial documentation, we are a trusted compliance partner for businesses across India.
              </p>
            </div>

            {/* What We Handle vs What You Provide */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 rounded-xl p-6">
                <h3 className="text-[21.25px] font-bold text-dbiz-navy mb-4 flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-dbiz-teal mr-2" /> What D BIZ Handles
                </h3>
                <ul className="space-y-3">
                  {[
                    "Complete compliance calendar management for NDH-1, NDH-3, AOC-4, and MGT-7",
                    "Monitoring of member count and statutory conditions, including 200 members compliance",
                    "Tracking of Net Owned Funds (NOF) and deposit ratio requirements",
                    "Preparation and filing of all ROC and Nidhi compliance forms",
                    "Financial statement support and audit coordination",
                    "Maintenance guidance for statutory registers relating to members, deposits, and loans",
                    "Compliance support for unencumbered term deposit requirements",
                    "Handling of ROC notices, resubmissions, and compliance corrections",
                    "Annual compliance planning, review, and reminders",
                    "Advisory support for smooth and compliant Nidhi operations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-[17px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-[21.25px] font-bold text-dbiz-navy mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-dbiz-navy mr-2" /> What You Provide
                </h3>
                <ul className="space-y-3">
                  {[
                    "Company incorporation documents such as COI, PAN, MOA, and AOA",
                    "Member details and KYC documents",
                    "Deposit and loan transaction details",
                    "Company bank statements",
                    "Financial data and supporting records",
                    "Details of the statutory auditor",
                    "Registered office proof, where applicable or updated",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-[17px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dbiz-navy to-dbiz-navy/90 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    D BIZ CONSULTANCY helps your Nidhi Company stay compliant with the Companies Act, 2013 and the Nidhi Rules, 2014 without stress or delays. From regular filings to ongoing compliance monitoring, we manage the process with accuracy and care so you can focus on running your business.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With our experience in corporate compliance and financial documentation, we are a trusted compliance partner for businesses across India.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-white/80">Personalized support from professionals with practical expertise in Nidhi Company compliance.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
                    <p className="text-white/80">Complete assistance from compliance setup to ongoing statutory filing and monitoring.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
                    <p className="text-white/80">Clear communication, structured workflow, and professional support at every stage.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <CheckCircle2 className="h-8 w-8 text-dbiz-teal mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Timely Compliance</h3>
                    <p className="text-white/80">On-time filings and proactive follow-up to reduce the risk of penalties and non-compliance.</p>
                  </div>
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
              <h4 className="consultancy-heading">Nidhi Company Statutory Deadlines</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "NDH-1 Filing", due: "Within 90 Days", desc: "Return of statutory compliance within 90 days from the close of the first financial year." },
                  { title: "NDH-3 Filing", due: "Within 30 Days", desc: "Half-yearly return to be filed within 30 days from the end of each half-year (Sept & March)." },
                  { title: "Annual Return (MGT-7)", due: "Within 60 Days", desc: "Annual return containing member and management details must be filed within 60 days of AGM." },
                  { title: "Financial Statements (AOC-4)", due: "Within 30 Days", desc: "Audited financial statements and board report must be filed within 30 days of the AGM." }
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
              <h4 className="consultancy-heading">Penalties & Statutory Risks</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Monetary Penalties", desc: "Failure to comply with Nidhi Rules attracts a penalty of up to ₹5,000, plus ₹500 per day for continuing defaults." },
                  { title: "Restriction on Deposits", desc: "Non-compliance with NDH-4 or NOF requirements can lead to a ban on accepting fresh deposits from members." },
                  { title: "Director Disqualification", desc: "Persistent non-filing of AOC-4/MGT-7 for three years results in director disqualification under Section 164(2)." },
                  { title: "Loss of Nidhi Status", desc: "Failure to maintain minimum member count (200) or NOF ratio can lead to cancellation of Nidhi recognition by the MCA." }
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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-dbiz-teal/10 text-dbiz-teal text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-dbiz-teal mr-2"></span>
                FAQs
              </div>
              <h2 className="text-[38.25px] font-bold text-dbiz-navy mb-3">FAQs on Nidhi Company Compliance</h2>
              <p className="text-sm text-gray-400 italic mb-4">Last updated: Feb 2026</p>
              <p className="text-[19.125px] text-gray-600 leading-relaxed font-medium">
                Here are the most important and commonly asked questions on Nidhi Company compliance, explained in a simple and practical manner.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-left font-medium text-base text-dbiz-navy">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-[14.875px] text-gray-700 leading-relaxed">
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

export default NidhiCompanyCompliancePage;
