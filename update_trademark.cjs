const fs = require('fs');

let content = fs.readFileSync('src/pages/TrademarkRegistrationPage.tsx', 'utf8');

// Replace Trade License Section (Lines 544 to 599 in original view)
const newTradeLicense = `
        {/* Trade License Sub-Section (Integrated Structure) */}
        <section id="trade-license" className="py-24 bg-white scroll-mt-32 border-t border-gray-100">
           <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl md:text-5xl font-semibold text-dbiz-navy mb-6 tracking-tighter">Why DBIZ CONSULTANCY for Trade License?</h2>
                 <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Getting a Trade License is essential to legally operate your business within municipal limits. The process involves local authority approvals, proper documentation, and compliance with regulations. Any error can lead to delays, rejection, or penalties.
                 </p>
                 <p className="text-lg text-dbiz-teal font-medium">
                    DBIZ CONSULTANCY makes the process simple, fast, and hassle-free. We handle everything from application filing to approval, ensuring your business gets licensed without complications.
                 </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                 {/* Our Trade License Services */}
                 <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-dbiz-navy">Our Services</h3>
                    <Accordion type="single" collapsible className="w-full">
                       <AccordionItem value="1" className="bg-gray-50 rounded-xl mb-3 border border-gray-100 px-4">
                          <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Pre-Filing Support</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                             <ul className="list-disc pl-5 space-y-2">
                                <li>Trademark availability search</li>
                                <li>Risk assessment</li>
                                <li>Brand improvement suggestions</li>
                             </ul>
                          </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="2" className="bg-gray-50 rounded-xl mb-3 border border-gray-100 px-4">
                          <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Application Filing</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                             <ul className="list-disc pl-5 space-y-2">
                                <li>Class selection</li>
                                <li>Document preparation</li>
                                <li>Accurate filing</li>
                             </ul>
                          </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="3" className="bg-gray-50 rounded-xl mb-3 border border-gray-100 px-4">
                          <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Post-Filing Support</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                             <ul className="list-disc pl-5 space-y-2">
                                <li>Status tracking</li>
                                <li>Objection reply drafting</li>
                                <li>Hearing assistance</li>
                             </ul>
                          </AccordionContent>
                       </AccordionItem>
                       <AccordionItem value="4" className="bg-gray-50 rounded-xl border border-gray-100 px-4">
                          <AccordionTrigger className="font-bold text-dbiz-navy hover:no-underline">Post-Registration Services</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                             <ul className="list-disc pl-5 space-y-2">
                                <li>Trademark renewal</li>
                                <li>Ownership transfer</li>
                                <li>Brand protection support</li>
                             </ul>
                          </AccordionContent>
                       </AccordionItem>
                    </Accordion>
                 </div>

                 {/* Documents & Eligibility */}
                 <div className="bg-dbiz-navy text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                       <Scale className="w-48 h-48 text-dbiz-teal" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-dbiz-teal">Documents Required</h3>
                    <ul className="space-y-4 mb-8">
                       {[
                         "PAN & Aadhaar of applicant",
                         "Business details and activity",
                         "Address proof of business premises",
                         "Rent agreement / ownership proof",
                         "Owner NOC (if rented)",
                         "Photograph"
                       ].map((doc, idx) => (
                         <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" />
                            <span>{doc}</span>
                         </li>
                       ))}
                    </ul>

                    <h3 className="text-2xl font-bold mb-6 text-dbiz-teal border-t border-white/10 pt-8">Who Needs It?</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm font-medium">
                       <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">Shops & Retail</div>
                       <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">Offices</div>
                       <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">Restaurants</div>
                       <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm">Small Businesses</div>
                       <div className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm col-span-2">Home-based businesses</div>
                    </div>
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-amber-50 rounded-2xl border border-amber-100 flex gap-6">
                   <Clock className="w-10 h-10 text-amber-600 shrink-0" />
                   <div>
                      <h4 className="font-bold text-amber-900 text-xl mb-3">When to Apply?</h4>
                      <ul className="space-y-2 text-amber-800 font-medium">
                         <li>• Before starting your business</li>
                         <li>• Opening a new shop or office</li>
                         <li>• Changing business location</li>
                         <li>• Expanding business activities</li>
                         <li>• As required by local authority</li>
                      </ul>
                   </div>
                </div>

                <div className="p-8 bg-dbiz-teal/10 rounded-2xl border border-dbiz-teal/20 flex gap-6">
                   <Award className="w-10 h-10 text-dbiz-teal shrink-0" />
                   <div>
                      <h4 className="font-bold text-dbiz-navy text-xl mb-3">Why Choose Us?</h4>
                      <ul className="space-y-2 text-gray-700 font-medium">
                         <li>• Expert support with local regulations</li>
                         <li>• Fast processing and approval</li>
                         <li>• Error-free documentation</li>
                         <li>• End-to-end service</li>
                         <li>• Support for renewal and compliance</li>
                      </ul>
                      <p className="mt-4 italic text-sm text-gray-500 font-semibold">We ensure your Trade License is obtained quickly and correctly—so you can focus on growing your business.</p>
                   </div>
                </div>
              </div>
           </div>
        </section>
`;

let startIndex = content.indexOf('{/* Trade License Sub-Section (Integrated Structure) */}');
let endIndex = content.indexOf('{/* Deadlines Section */}');

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + newTradeLicense + content.substring(endIndex);
}

// Updating FAQs
const faqString = `[
                  { q: "Can I apply for a Trade License before starting my business?", a: "Yes, you can apply before commencing operations to ensure your business starts legally and avoids compliance issues." },
                  { q: "Is a Trade License required for home-based businesses?", a: "Yes, depending on the nature of the activity and local regulations, even home-based businesses may require a Trade License." },
                  { q: "What happens if my business location changes?", a: "Since a Trade License is location-specific, you must update the license or apply for a new one for the new premises." },
                  { q: "Can one Trade License cover multiple business activities?", a: "Generally, a Trade License is issued for a specific activity. Additional activities may require modification or a separate license." },
                  { q: "Is inspection required for Trade License approval?", a: "Inspection is not mandatory in all cases. It depends on the type of business and the requirements of the local authority." },
                  { q: "Can a Trade License be transferred to another person?", a: "No, Trade Licenses are usually non-transferable. A fresh application is required if there is a change in ownership." },
                  { q: "What is the difference between Trade License and Shop & Establishment Registration?", a: "A Trade License permits business operations, while Shop & Establishment Registration governs employee conditions, working hours, and labor compliance." },
                  { q: "Are online or e-commerce businesses required to obtain a Trade License?", a: "If the business operates from a physical location, office, or warehouse, a Trade License may be required as per local regulations." },
                  { q: "What are the renewal requirements for a Trade License?", a: "Renewal requires submission of updated documents and payment of the applicable renewal fee before the license expiry date." },
                  { q: "Can a Trade License be cancelled by authorities?", a: "Yes, it can be cancelled if the business violates regulations, fails to renew, or operates beyond permitted activities." },
                  { q: "Is a Trade License required for freelancers or consultants?", a: "In certain jurisdictions, professionals providing services may also need a Trade License depending on municipal rules." },
                  { q: "How are Trade License fees determined?", a: "Fees vary based on the type of business, size of premises, and location, and are set by the local authority." },
                  { q: "How do I identify the correct authority for applying?", a: "The issuing authority depends on your business location—municipality, municipal corporation, or panchayat." },
                  { q: "Can I operate multiple branches under one Trade License?", a: "No, a separate Trade License is generally required for each business location or branch." },
                  { q: "What are the consequences of operating without a Trade License?", a: "Operating without a valid Trade License may result in penalties, fines, or even closure of the business by local authorities." }
                ]`;

// Find the FAQ map block inside TrademarkRegistrationPage.tsx
const matchFaq = content.match(/\s+\[\s+{ q: "Can I apply for a Trade License before starting my business\?",[\s\S]*?\]\.map/);

if (matchFaq) {
    content = content.replace(matchFaq[0], \`\n                \${faqString}.map\`);
}

// CTA text update - the prompt asks for "Contact D Biz Consultancy Private Limited Now" instead of Contact DBIZ Now
content = content.replace('Contact DBIZ Now', 'Contact D Biz Consultancy Private Limited Now');

fs.writeFileSync('src/pages/TrademarkRegistrationPage.tsx', content, 'utf8');
console.log("Updated Trademark Registration Page");
