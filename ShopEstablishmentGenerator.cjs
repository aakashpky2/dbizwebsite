const fs = require('fs');
const path = require('path');

const referencePath = path.join(__dirname, 'src', 'pages', 'GSTRegistrationPage.tsx');
let content = fs.readFileSync(referencePath, 'utf8');

// 1. Component naming and imports
content = content.replace(/EnhancedGSTRegistrationPage/g, 'ShopEstablishmentPage');
content = content.replace(/import { gstFaq } from "@\/data\/gstFaq";/g, 'import { shopEstablishmentFaq } from "@/data/shopEstablishmentFaq";');

// 2. Constants
content = content.replace(/const TIMELINE_DESKTOP = \[.*?\];/s, `const TIMELINE_DESKTOP = [
  {
    step: "01",
    label: "Application Filing",
    duration: "Same Day",
    desc: "Collection of business details, document verification, and submission of application on Labour Department portal.",
    pill: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    step: "02",
    label: "Processing",
    duration: "1 – 3 Working Days",
    desc: "Initial verification of application and documents by the Labour Department.",
    pill: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    step: "03",
    label: "Approval (Normal Case)",
    duration: "2 – 5 Working Days",
    desc: "Registration certificate is issued if all details are correct and no clarification is required.",
    pill: "bg-blue-200 text-blue-900 border-blue-300",
  },
  {
    step: "04",
    label: "Approval (With Query / Correction)",
    duration: "Up to 7 Working Days",
    desc: "Time may increase if department raises queries or additional documents are required.",
    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",
  },
];`);

content = content.replace(/const TIMELINE_MOBILE = \[.*?\];/s, `const TIMELINE_MOBILE = [
  { step: "01", label: "Application Filing",                 duration: "Same Day",             desc: "Collection of business details, document verification, and submission of the application on the Labour Department portal.", pill: "bg-blue-50 text-blue-700 border-blue-100" },
  { step: "02", label: "Processing",                         duration: "1 – 3 Working Days",    desc: "Initial verification of application and documents by the Labour Department.",                         pill: "bg-blue-100 text-blue-800 border-blue-200" },
  { step: "03", label: "Approval (Normal Case)",              duration: "2 – 5 Working Days",    desc: "Registration certificate is issued if all details are correct and no clarification is required.",               pill: "bg-blue-200 text-blue-900 border-blue-300" },
  { step: "04", label: "Approval (With Query / Correction)", duration: "Up to 7 Working Days", desc: "Time may increase if the department raises queries or additional documents are required.",                     pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20" },
];`);

// 3. Hero Section
content = content.replace(/Fast GST Registration \| Expert Filing \| Complete Compliance Support/g, 'Fast Registration | Labour Law Compliance | Complete Support');
content = content.replace(/GST Registration Services/g, 'SHOP & ESTABLISHMENT LICENSE REGISTRATION SERVICES');
content = content.replace(/D BIZ CONSULTANCY provides complete GST registration services\..*?registration process\./s, 'DBIZ CONSULTANCY provides complete Shop & Establishment registration services. From eligibility assessment to registration certificate issuance and compliance setup, our experts ensure a smooth, error-free process.');
content = content.replace(/Quick Registration/g, 'Fast Timeline');
content = content.replace(/Guaranteed Compliance/g, '100% Compliance');

// 4. Hero Sidebar Stats
content = content.replace(/1 - 2/g, '2 – 5');
content = content.replace(/Days \(Typical\)/g, 'Days');
content = content.replace(/Accuracy/g, 'Filing Accuracy');

// 5. Overview Section
content = content.replace(/What is GST Registration\?/g, 'What is Shop & Establishment Registration?');
content = content.replace(/<p className=\"text-gray-700 mb-6 leading-relaxed font-medium\">\s+GST \(Goods and Services Tax\) Registration is a statutory requirement.*?<\/p>/s, `<p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Shop & Establishment Registration is a statutory requirement under the respective State Shops and Establishments Act for businesses operating shops, offices, or commercial establishments. It provides legal recognition to businesses and regulates working conditions, employee rights, wages, working hours, and overall workplace compliance.
                  </p>`);
content = content.replace(/<p className=\"text-gray-700 mb-6 leading-relaxed font-medium\">\s+Upon registration, a unique GST Identification Number.*?<\/p>/s, `<p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    Upon registration, a Shop & Establishment Registration Certificate is issued by the Labour Department. This certificate is used for compliance, opening bank accounts, and obtaining other business registrations.
                  </p>`);
content = content.replace(/<p className=\"text-gray-700 mb-8 leading-relaxed font-medium\">\s+GST has replaced multiple indirect taxes.*?<\/p>/s, `<p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    This registration applies to a wide range of businesses including retail shops, offices, service providers, restaurants, and other commercial establishments.
                  </p>`);

content = content.replace(/Why GST Registration is Important/g, 'Why Shop & Establishment Registration is Important');
content = content.replace(/GST Registration is not just a legal formality — it plays a critical role in business operations:/g, 'Shop & Establishment registration is not just a legal requirement — it plays a critical role in business operations:');
content = content.replace(/\"Ensures legal recognition as a tax-compliant entity\",\s+\"Enables collection of GST from customers\",\s+\"Allows claiming input tax credit to reduce costs\",\s+\"Builds trust with clients, vendors, and financial institutions\",\s+\"Mandatory for expanding across states or online\"/s, `
                        "Ensures legal recognition under labour laws",
                        "Mandatory for businesses employing staff in most states",
                        "Regulates working conditions, wages, and employee benefits",
                        "Helps in opening current bank accounts and other registrations",
                        "Builds trust with employees, clients, and authorities"`);

// 6. Sidebar
content = content.replace(/Definition as per the GST Act, 2017/g, 'Legal Framework');
content = content.replace(/Section-wise, the GST Act defines registration as the process of being legally identified as a taxable person:/g, 'Shop & Establishment Registration is governed by the following:');
content = content.replace(/\"Mandatory for Interstate Supply\",\s+\"Required above Turnover Thresholds\",\s+\"Compulsory for E-commerce Platforms\",\s+\"Enables Legal Tax Collection Capability\"/s, `
                        "State Shops & Establishments Act",
                        "Labour Department",
                        "State-specific Rules",
                        "Labour Law Compliance"`);

// 7. Legal Framework Grid
content = content.replace(/GST Registration is governed by the following statutory laws that regulate India's unified tax structure:/g, 'Shop & Establishment Registration is governed by the following statutory laws:');
content = content.replace(/\{ title: \"CGST Act, 2017\", desc: \"Governs central GST on intra-state transactions\" \},/g, '{ title: "State Shops & Establishments Act", desc: "Governs labour conditions and registration" },');
content = content.replace(/\{ title: \"SGST Act\", desc: \"Governs state GST \(varies by state\)\" \},/g, '{ title: "Labour Department", desc: "Issues registration certificate" },');
content = content.replace(/\{ title: \"IGST Act, 2017\", desc: \"Governs interstate supply of goods\/services\" \}/g, '{ title: "State-specific Rules", desc: "Defines compliance, working hours, and employee welfare" }');

// 8. Key Features
const features = [
  { title: "Legal Recognition of Business", desc: "Shop & Establishment registration provides official legal recognition to businesses under State Labour Laws. It confirms that the business is registered with the Labour Department and is operating in compliance with applicable regulations." },
  { title: "Regulation of Working Conditions", desc: "The Act regulates important aspects such as working hours, opening and closing timings, weekly holidays, overtime rules, and general working conditions to ensure fair and standardized operations." },
  { title: "Employee Welfare Protection", desc: "It ensures protection of employee rights including wages, leave policies, holidays, and workplace conditions, promoting a safe and structured work environment." },
  { title: "Mandatory for Commercial Establishments", desc: "This registration is compulsory for most businesses such as shops, offices, restaurants, and service providers, especially those employing staff or operating commercially within a state." },
  { title: "Location-Based Registration", desc: "Registration is required for each place of business separately and is governed by the specific State Shops and Establishments Act applicable to that location." },
  { title: "Facilitates Other Business Registrations", desc: "The certificate is often required for opening current bank accounts, obtaining GST registration, Trade License, and other statutory approvals." },
  { title: "Simple and Online Registration Process", desc: "In many states, the process is fully online and based on basic business details, making it quick, user-friendly, and easy to obtain." },
  { title: "Periodic Renewal (State-Specific)", desc: "Depending on the state, the registration may require periodic renewal or may be granted for a longer duration or lifetime, subject to compliance." },
  { title: "Inspection and Compliance Monitoring", desc: "Authorities may conduct inspections to verify compliance with labour laws, safety standards, and employee welfare provisions." },
  { title: "Enhances Business Credibility", desc: "Having a valid registration increases trust among employees, clients, banks, and authorities, showing that the business is legally compliant and professionally managed." }
];

const featureItems = features.map((f, i) => `                  { icon: Shield, title: "${f.title}", desc: "${f.desc}", image: "https://images.unsplash.com/photo-${[ '1589829545856-d10d557cf95f', '1586281380349-632531db7ed4', '1554224155-1696413565d3', '1460925895917-afdab827c52f', '1519003722824-194d4455a60c', '1450101499163-c8848c66ca85', '1441986300917-64674bd600d8', '1556740758-90de374c12ad', '1551836022-d5d88e9218df', '1454165804606-c3d57bc86b40'][i]}?auto=format&fit=crop&w=500&q=50" }`).join(',\n');
content = content.replace(/CarouselContent className=\"-ml-4 md:-ml-6\">\s+\[.*?\]\.map/s, `CarouselContent className="-ml-4 md:-ml-6">
                [
${featureItems}
                ].map`);

// 9. Benefits
content = content.replace(/3\. BENEFITS OF GST REGISTRATION/g, '3. BENEFITS OF SHOP & ESTABLISHMENT REGISTRATION');
content = content.replace(/Business Advantages<\/h4>\s+<ul className=\"space-y-3 text-\[17px\] text-gray-600 font-normal\">\s+<li>.*?<\/li>\s+<\/ul>/s, `Business Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Legal recognition under State Labour Laws</li>
                        <li>• Ensures compliance with employee and workplace regulations</li>
                        <li>• Builds credibility with employees, clients, and authorities</li>
                        <li>• Avoids legal issues, penalties, and business interruptions</li>
                      </ul>`);
content = content.replace(/Financial Advantages<\/h4>\s+<ul className=\"space-y-3 text-\[17px\] text-gray-600 font-normal\">\s+<li>.*?<\/li>\s+<\/ul>/s, `Financial Advantages</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Helps in opening current bank accounts</li>
                        <li>• Supports loan approvals and financial credibility</li>
                        <li>• Avoids fines and penalties for non-compliance</li>
                        <li>• Enables structured payroll and employee management</li>
                      </ul>`);
content = content.replace(/Growth Opportunities<\/h4>\s+<ul className=\"space-y-3 text-\[17px\] text-gray-600 font-normal\">\s+<li>.*?<\/li>\s+<\/ul>/s, `Growth Opportunities</h4>
                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">
                        <li>• Supports business expansion and hiring of employees</li>
                        <li>• Required for obtaining other registrations (GST, Trade License, etc.)</li>
                        <li>• Improves business reputation and operational stability</li>
                        <li>• Enables smooth scaling with proper compliance structure</li>
                      </ul>`);

// 10. When Mandatory Table
content = content.replace(/4\. When GST Registration is Mandatory/g, '4. WHEN SHOP & ESTABLISHMENT REGISTRATION IS REQUIRED');
content = content.replace(/<TableBody>.*?<\/TableBody>/s, `<TableBody>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Opening a Shop / Office</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Any business operating from a shop, office, or commercial establishment must obtain registration under the State Shops & Establishments Act.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Hiring Employees</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Registration is required when a business employs staff, as labour laws governing working conditions and wages become applicable.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Service-Based Businesses</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Offices, consultancies, IT companies, agencies, and other service providers must register under this Act.</TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-50/50">
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Retail / Trading Activities</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Shops, showrooms, and trading businesses are required to obtain registration for legal operation.</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>State Labour Law Requirement</TableCell>
                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Mandatory</TableCell>
                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Registration is compulsory as per state-specific labour laws, irrespective of turnover limits.</TableCell>
                         </TableRow>
                       </TableBody>`);

// Types of Establishments
content = content.replace(/Types of GST Registration/g, 'Types of Establishments Covered');
content = content.replace(/Type<\/TableHead>\s+<TableHead.*?Suitable For<\/TableHead>\s+<TableHead.*?Description<\/TableHead>/s, `Type</TableHead>
                            <TableHead className="font-medium text-white py-4 text-[14.875px]">Suitable For</TableHead>
                            <TableHead className="font-medium text-white py-4 text-[14.875px]">Description</TableHead>`);
content = content.replace(/<TableBody>.*?<\/TableBody>/s, `<TableBody>
                          <TableRow hoverable={false}>
                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Shops</TableCell>
                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Retail businesses</TableCell>
                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Includes stores, outlets, showrooms, and trading establishments engaged in selling goods.</TableCell>
                          </TableRow>
                          <TableRow className="bg-gray-50/50" hoverable={false}>
                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Commercial Establishments</TableCell>
                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Offices / Service providers</TableCell>
                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Includes offices, IT companies, consultancies, and agencies providing services.</TableCell>
                          </TableRow>
                          <TableRow hoverable={false}>
                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Hotels & Restaurants</TableCell>
                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Hospitality sector</TableCell>
                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Includes hotels, restaurants, cafes, and food service businesses.</TableCell>
                          </TableRow>
                          <TableRow className="bg-gray-50/50" hoverable={false}>
                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Entertainment & Service Units</TableCell>
                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "'Inter', sans-serif" }}>Service businesses</TableCell>
                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>Includes salons, gyms, theatres, and other service-oriented establishments.</TableCell>
                          </TableRow>
                        </TableBody>`);

// 11. Documents
content = content.replace(/\"PAN Card\", \"Aadhaar Card\", \"Photograph\", \"Bank account details\", \"Address proof\"/g, 
  '"PAN Card (Mandatory)", "Aadhaar Card of proprietor", "Passport-sized photograph", "Business address proof (rent agreement / utility bill)", "Details of business activity and establishment"');
content = content.replace(/\"Certificate of Incorporation\", \"PAN CARD\", \"MOA & AOA \/Partnership Agreement\/ LLP Agreement\", \"Directors’ KYC documents \/ Partners KYC\", \"Bank Account Details\", \"Address Proof\"/g,
  '"Certificate of Incorporation / Registration", "PAN Card of Company / LLP", "MOA & AOA / LLP Agreement", "Directors’ / Partners’ KYC documents (PAN, Aadhaar, address proof)"');
content = content.replace(/\"Rent Agreement \+ NOC \(if not owm\)\", \"Electricity Bill \(latest\)\", \"Ownership proof \(if owned\)\"/g,
  '"Rent Agreement + NOC from owner (if rented)", "Latest Electricity / Utility Bill (within 2 months)", "Ownership proof (if premises is owned)"');

// Additional Docs (Replace the guidelines block)
content = content.replace(/<div className=\"max-w-5xl mx-auto bg-white rounded-\[2rem\] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll \[animation-delay:400ms\]\">.*?<\/div>\s+<\/div>\s+<\/section>/gs, `
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-on-scroll [animation-delay:400ms]">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-dbiz-navy mb-6">Additional Documents (If Applicable)</h3>
                <ul className="space-y-4">
                  {[
                    "Employee details (number of employees, if applicable)",
                    "Appointment letter / employee records (in some states)",
                    "Business registration proof (if already registered under other laws)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-dbiz-navy mb-6">Important Documentation Guidelines</h3>
                <ul className="space-y-4">
                  {[
                    "Details must match across PAN, Aadhaar, and application",
                    "Address proof must be valid and consistent across all documents",
                    "Business activity must be clearly defined as per registration",
                    "NOC must be properly signed by property owner (if rented)",
                    "State-specific requirements may apply based on location"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <Sparkles className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>`);

// 12. Process
const steps = [
  { step: "1", title: "Data Collection & Verification", desc: "The process begins with collecting all required business and employer details. This includes PAN, Aadhaar, business activity, address proof, and employee details (if any).\nAll information is carefully verified to ensure accuracy, as incorrect details may lead to rejection or delays from the Labour Department." },
  { step: "2", title: "Application Preparation", desc: "The registration application is prepared based on the applicable State Shops & Establishments Act.\nDetails such as business name, type of establishment, number of employees, and working conditions are finalized before submission." },
  { step: "3", title: "Online Application Filing", desc: "The application is filed on the respective State Labour Department portal.\nAll required details are entered, and supporting documents are uploaded to complete the application." },
  { step: "4", title: "Verification by Labour Department", desc: "The Labour Department reviews the application:\n• If details are correct → Application approved\n• If clarification required → Query or correction request issued\nApplicants must respond promptly to avoid delays." },
  { step: "5", title: "Approval & Registration Certificate Issue", desc: "Once the application is approved, the Shop & Establishment Registration Certificate is issued.\nThe certificate serves as legal proof of registration under the State Labour Law." },
  { step: "6", title: "Display & Compliance Setup", desc: "After registration, the certificate must be maintained/displayed at the business premises (if required).\nBasic compliance such as maintaining employee records and working hours must be followed." },
  { step: "7", title: "Renewal / Updates (If Applicable)", desc: "Depending on state rules:\n• Registration may require periodic renewal\n• Updates must be made in case of changes in business details\nNon-compliance may lead to penalties or cancellation." }
];

const stepItems = steps.map(s => `                { step: "${s.step}", title: "${s.title}", desc: "${s.desc.replace(/\n/g, '\\n')}" }`).join(',\n');
content = content.replace(/md:grid grid-cols-\[1fr_auto_1fr\].*?\[\n\s+\{ step: \"1\", title: \"Data Collection & Verification\".*?\}\n\s+\]\.map/gs, `md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-8 animate-on-scroll \${isEvenStep ? '-mt-20' : index > 0 ? 'mt-12' : ''}\"
                    style={{ animationDelay: \`\${index * 150}ms\` }}
                  >
                    {/* LEFT slot */}
                    {isOdd ? (
                      <div className="flex justify-end pr-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-right">
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    {/* CENTER — numbered circle */}
                    <div className="flex flex-col items-center z-10 relative">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold text-xl shadow-lg hover:bg-dbiz-teal hover:text-white transition-colors duration-300 shrink-0">
                        {item.step}
                      </div>
                    </div>

                    {/* RIGHT slot */}
                    {isEvenStep ? (
                      <div className="flex justify-start pl-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-left">
                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}

              {/* Mobile: vertical stacked list */}
              <div className="md:hidden space-y-8 relative pl-10">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent rounded-full"></div>
                [
${stepItems}
                ].map`);

// Fix mobile step items again (slight mismatch in previous regex)
content = content.replace(/md:hidden space-y-8 relative pl-10\">\s+<div className=\"absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal\/40 to-transparent rounded-full\"><\/div>\s+\[\n\s+\{ step: \"1\", title: \"Data Collection & Verification\".*?\}\n\s+\]\.map/gs, `md:hidden space-y-8 relative pl-10">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent rounded-full"></div>
                {[
${stepItems}
                ].map`);

// 13. Timeline
content = content.replace(/Fast Track Approval<\/h4>\s+<\/div>\s+<div className=\"card-face back\">\s+<div className=\"card-duration\">.*?<\/div>/s, `Fast Track Approval</h4>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back">
                          <div className="card-duration">2 – 3 Days</div>`);
content = content.replace(/Delayed Cases<\/h4>\s+<\/div>\s+<div className=\"card-face back\">\s+<div className=\"card-duration\">.*?<\/div>/s, `Delayed Cases</h4>
                        </div>
                        {/* Back Face */}
                        <div className="card-face back">
                          <div className="card-duration">Up to 7 Days</div>`);
content = content.replace(/Note: <span className=\"text-dbiz-navy not-italic font-black\">Accurate documents and correct details<\/span> help in faster approval without delays\./g, 'Note: Timeline may vary depending on state regulations, Labour Department processing, and accuracy of submitted details. Proper documentation ensures faster approval.');

// 14. Compliance
content = content.replace(/8\. Post-Registration Compliance/g, '8. Post-REGISTRATION COMPLIANCE');
content = content.replace(/blob-card-bg\">\s+<h4 className=\"text-\[20px\] font-black text-dbiz-navy uppercase tracking-tighter mb-1 select-none\">.*?<\/h4>\s+<p className=\"text-\[10px\] font-black text-dbiz-teal uppercase tracking-\[0.3em\] select-none\">.*?<\/p>\s+<\/div>\s+<\/div>\s+<\/div>/gs, `blob-card-bg">
                               <h4 className="text-[20px] font-black text-dbiz-navy uppercase tracking-tighter mb-1 select-none">{filing.type}</h4>
                               <p className="text-[10px] font-black text-dbiz-teal uppercase tracking-[0.3em] select-none">{filing.freq}</p>
                            </div>
                        </div>`);

content = content.replace(/\[\n\s+\{ type: \"GSTR-1\", freq: \"Monthly \/ Quarterly\" \},.*?Annual Return.*? Yearly\" \}\n\s+\]/s, `[
                        { type: "Renewal", freq: "As per state rules" },
                        { type: "Labour Updates", freq: "As required" },
                        { type: "Record Keeping", freq: "Continuous" }
                      ]`);

content = content.replace(/Compliance Requirements<\/h4>\s+<div className=\"compliance-grid\">.*?<\/div>/s, `Compliance Requirements</h4>
                      <div className="compliance-grid">
                        {[
                          "Maintain employee registers",
                          "Follow working hours rules",
                          "Display certificate at shop",
                          "Comply with wage regulations",
                          "Update changes in details",
                          "Maintain mandatory records"
                        ].map((req, i) => (
                          <div key={i} className="compliance-inner-card">
                             <div className="compliance-check-icon">
                               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                             </div>
                             <span className="compliance-label-text">{req}</span>
                          </div>
                        ))}
                      </div>`);

content = content.replace(/Legal Penalties<\/h4>\s+<div className=\"penalty-grid\">.*?<\/div>\s+<p class.*?<\/p>/s, `Legal Penalties</h4>
                      <div className="penalty-grid">
                        {[
                          { title: "No Registration", desc: "Fine and legal action" },
                          { title: "Labour Violations", desc: "Penalties and notices" },
                          { title: "Record Failures", desc: "Fines or inspection issues" },
                          { title: "Late Renewal", desc: "Additional fees" }
                        ].map((item, i) => (
                          <div key={i} className="penalty-inner-card">
                             <div className="penalty-header">
                                <div className="penalty-dot"></div>
                                <span className="penalty-title">{item.title}</span>
                             </div>
                             <p className="penalty-desc">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-[13px] text-gray-400 font-medium mt-6 italic text-center">
                        Note: Compliance requirements may vary based on state-specific laws, but maintaining proper records and following labour regulations is essential to avoid penalties and ensure smooth business operations.
                      </p>`);

// 15. Why DBIZ
content = content.replace(/Why DBIZ CONSULTANCY for GST Registration\?/g, 'Why DBIZ CONSULTANCY for Shop & Establishment Registration?');
content = content.replace(/What DBIZ Handles<\/h3>\s+<ul className=\"space-y-4\">.*?<\/ul>/s, `What DBIZ Handles</h3>
                      <ul className="space-y-4">
                        {[
                          "Eligibility assessment based on business type and activity",
                          "Identification of correct state-specific registration requirements",
                          "Document verification and pre-submission review",
                          "Preparation and filing of online application",
                          "Ensuring accurate details to avoid rejection or delays",
                          "Handling queries or clarification requests from Labour Department",
                          "Follow-up for faster approval",
                          "Registration certificate download and delivery",
                          "Guidance on labour law compliance and record maintenance",
                          "Renewal and update support (if applicable)"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>`);
content = content.replace(/What You Provide<\/h3>\s+<ul className=\"space-y-4\">.*?<\/ul>/s, `What You Provide</h3>
                      <ul className="space-y-4">
                        {[
                          "PAN and Aadhaar of applicant / business",
                          "Business details and nature of activity",
                          "Registered office / shop address proof",
                          "Employee details (if applicable)",
                          "Rent agreement / ownership documents"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>`);

content = content.replace(/When Should You Apply\?<\/h3>\s+<p class.*?<\/p>\s+<\/div>\s+<div className=\"lg:w-2\/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full\">.*?<\/div>/s, `When Should You Apply?</h3>
                           <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>Identify the key milestones that trigger the need for immediate Shop & Establishment registration.</p>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">
                           {[
                              "Starting a new shop, office, or business establishment",
                              "Hiring employees or expanding workforce",
                              "Opening current bank account for business",
                              "Applying for GST, Trade License, or other registrations",
                              "Ensuring compliance with labour laws",
                              "Avoiding penalties and legal issues"
                           ].map((point, index) => (
                              <div key={index} className="flex items-center gap-4 group/point">
                                 <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover/point:bg-dbiz-teal group-hover/point:border-dbiz-teal transition-all">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-dbiz-teal group-hover/point:text-white" />
                                 </div>
                                 <p className="text-[17px] font-medium text-dbiz-navy/80 tracking-tight leading-snug group-hover/point:text-dbiz-teal transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{point}</p>
                              </div>
                           ))}`);

content = content.replace(/Our Advantage<\/h3>\s+<div className=\"space-y-6\">.*?<\/div>/s, `Our Advantage</h3>
                        <div className="space-y-6">
                           <p className="text-lg leading-relaxed text-white">
                             Shop & Establishment registration is not just about getting a certificate—it is about ensuring proper compliance with labour laws, maintaining employee records, and avoiding future risks.
                           </p>
                           <p className="text-lg leading-relaxed text-blue-100/90 font-medium">
                             At DBIZ CONSULTANCY, we ensure your registration is done correctly from the start, minimizing errors and ensuring smooth approval. Our structured approach helps you build a solid foundation for your business operations.
                           </p>
                           <p className="text-lg leading-relaxed text-blue-100/90 font-bold border-l-2 border-dbiz-teal pl-6">
                             From application to compliance guidance, we act as your complete business compliance partner.
                           </p>
                        </div>`);

content = content.replace(/Expert GST Professionals\", desc: \"Specialists with deep practical experience\" \},.*?Ongoing Guidance\", desc: \"Regular filing reminders and law updates\" \}/s, `Expert knowledge of state-specific labour laws", desc: "Specialists with deep practical experience" },
                            { title: "Quick Processing", desc: "Fast and proactive application filing" },
                            { title: "Error-Free Documentation", desc: "Thorough verification to avoid rejections" },
                            { title: "End-to-End Service", desc: "From registration to compliance setup" },
                            { title: "Dedicated Support", desc: "Expert help for all department queries" },
                            { title: "Ongoing Guidance", desc: "Continuous support for labour law compliance" }`);

// Footer text
content = content.replace(/GST process—so you can focus on building and scaling your business with confidence\./g, 'Shop & Establishment registration process—so you can focus on running and scaling your business with confidence.');

// FAQ
content = content.replace(/FAQs on GST Registration/g, 'FAQs on Shop & Establishment Registration');
content = content.replace(/gstFaq\.map/g, 'shopEstablishmentFaq.map');

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'ShopEstablishmentPage.tsx'), content);
fs.writeFileSync(path.join(__dirname, 'ShopEstablishmentPage_Final.tsx'), content);
console.log('Successfully generated ShopEstablishmentPage.tsx');
