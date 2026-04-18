const fs = require('fs');
const path = require('path');

const referencePath = path.join(__dirname, 'src', 'pages', 'GSTRegistrationPage.tsx');
let content = fs.readFileSync(referencePath, 'utf8');

// 1. Component naming and imports
content = content.replace(/EnhancedGSTRegistrationPage/g, 'MCACompliancePage');
content = content.replace(/import \{ gstFaq \} from "@\\/data\\/gstFaq";/g, 'import { mcaFaq } from "@/data/mcaFaq";');

// 2. Constants 
content = content.replace(/const TIMELINE_DESKTOP = \\[\\[\\s\\S]*?\\];/s, 'const TIMELINE_DESKTOP = [\n' +
  '  {\n' +
  '    step: "01",\n' +
  '    label: "Data Evaluation",\n' +
  '    duration: "Day 1-2",\n' +
  '    desc: "Analyze financial statements and verify company records.",\n' +
  '    pill: "bg-blue-50 text-blue-700 border-blue-100",\n' +
  '  },\n' +
  '  {\n' +
  '    step: "02",\n' +
  '    label: "Compliance Prep",\n' +
  '    duration: "Day 3-5",\n' +
  '    desc: "Prepare financial statements, AOC-4, and MGT-7 forms.",\n' +
  '    pill: "bg-blue-100 text-blue-800 border-blue-200",\n' +
  '  },\n' +
  '  {\n' +
  '    step: "03",\n' +
  '    label: "Review & Approval",\n' +
  '    duration: "Day 6-7",\n' +
  '    desc: "Share draft filings with client and obtain final approval.",\n' +
  '    pill: "bg-blue-200 text-blue-900 border-blue-300",\n' +
  '  },\n' +
  '  {\n' +
  '    step: "04",\n' +
  '    label: "Filing & Submission",\n' +
  '    duration: "Day 8",\n' +
  '    desc: "File forms on MCA portal and ensure timely submission.",\n' +
  '    pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20",\n' +
  '  },\n' +
  '];');

content = content.replace(/const TIMELINE_MOBILE = \\[\\[\\s\\S]*?\\];/s, 'const TIMELINE_MOBILE = [\n' +
  '  { step: "01", label: "Data Evaluation", duration: "Day 1-2", desc: "Analyze financial statements and verify company records.", pill: "bg-blue-50 text-blue-700 border-blue-100" },\n' +
  '  { step: "02", label: "Compliance Prep", duration: "Day 3-5", desc: "Prepare financial statements, AOC-4, and MGT-7 forms.", pill: "bg-blue-100 text-blue-800 border-blue-200" },\n' +
  '  { step: "03", label: "Review & Approval", duration: "Day 6-7", desc: "Share draft filings with client and obtain final approval.", pill: "bg-blue-200 text-blue-900 border-blue-300" },\n' +
  '  { step: "04", label: "Filing & Submission", duration: "Day 8", desc: "File forms on MCA portal and ensure timely submission.", pill: "bg-[#0b1d3a]/10 text-[#0b1d3a] border-[#0b1d3a]/20" },\n' +
  '];');

// 3. Hero Section
content = content.replace(/Fast GST Registration \\| Expert Filing \\| Complete Compliance Support/g, 'Accurate | Timely & Fully Compliant ROC Filing');
content = content.replace(/GST Registration Services/g, 'MCA Annual Compliance Services');
content = content.replace(/D BIZ CONSULTANCY provides complete GST registration services\\..*?registration process\\./s, 'D BIZ CONSULTANCY provides expert-driven MCA compliance services ensuring accurate filing of annual returns, financial statements, and complete adherence to Companies Act requirements.');
content = content.replace(/Quick Registration/g, 'Timely Filing');
content = content.replace(/Guaranteed Compliance/g, 'Strict Adherence');

// 4. Hero Sidebar Stats
content = content.replace(/1 - 2/g, '100%');
content = content.replace(/Days \\(Typical\\)/g, 'Compliant');
content = content.replace(/Accuracy/g, 'Success Rate');

// Background Image for Hero
content = content.replace(/src="https:\\/\\/images\\.unsplash\\.com\\/photo-1454165804606-c3d57bc86b40\\?auto=format&fit=crop&w=1440&q=60"/g, 
  'src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1440&q=60"');
content = content.replace(/src="https:\\/\\/images\\.unsplash\\.com\\/photo-1554224155-6726b3ff858f\\?auto=format&fit=crop&w=600&q=60"/g, 
  'src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=60"');

// 5. Overview Section
content = content.replace(/What is GST Registration\\?/g, 'What is MCA Annual Compliance?');
content = content.replace(/<p className="text-gray-700 mb-6 leading-relaxed font-medium">[\\s\\S]*?GST \\(Goods and Services Tax\\) Registration is a statutory requirement[\\s\\S]*?<\\/p>/, 
  '<p className="text-gray-700 mb-6 leading-relaxed font-medium">\n' +
  '  MCA Annual Compliance is the process of filing mandatory returns and documents with the Ministry of Corporate Affairs (MCA) to ensure that a company or LLP remains legally compliant under the Companies Act, 2013 and applicable rules.\n' +
  '</p>');
content = content.replace(/<p className="text-gray-700 mb-6 leading-relaxed font-medium">[\\s\\S]*?Upon registration, a unique GST Identification Number[\\s\\S]*?<\\/p>/, 
  '<p className="text-gray-700 mb-6 leading-relaxed font-medium">\n' +
  '  Whether you are a Private Limited Company, LLP, or other registered entity, timely and accurate ROC filings are crucial to remain compliant. It involves filing of financial statements (AOC-4), annual returns (MGT-7/MGT-7A), and updating Director KYC (DIR-3).\n' +
  '</p>');
content = content.replace(/<p className="text-gray-700 mb-8 leading-relaxed font-medium">[\\s\\S]*?GST has replaced multiple indirect taxes[\\s\\S]*?<\\/p>/, 
  '<p className="text-gray-700 mb-8 leading-relaxed font-medium">\n' +
  '  This is more than a statutory requirement—it is essential for maintaining your company’s legal status, avoiding penalties, and ensuring smooth business operations.\n' +
  '</p>');

content = content.replace(/Why GST Registration is Important/g, 'Why MCA Compliance is Important');
content = content.replace(/GST Registration is not just a legal formality — it plays a critical role in business operations:/g, 'MCA Annual Compliance ensures proper corporate governance and is critical for:');
content = content.replace(/"Ensures legal recognition as a tax-compliant entity",[\\s\\S]*?"Enables collection of GST from customers",[\\s\\S]*?"Allows claiming input tax credit to reduce costs",[\\s\\S]*?"Builds trust with clients, vendors, and financial institutions",[\\s\\S]*?"Mandatory for expanding across states or online"/, 
  '"Ensures legal compliance under Companies Act",\n' +
  '"Avoids penalties, fines, and disqualification of directors",\n' +
  '"Maintains active company status",\n' +
  '"Builds credibility with banks, investors, and stakeholders",\n' +
  '"Ensures transparency and proper corporate governance"');

// 6. Sidebar
content = content.replace(/Definition as per the GST Act, 2017/g, 'Common Challenges Faced');
content = content.replace(/Section-wise, the GST Act defines registration as the process of being legally identified as a taxable person:/g, 'Many companies and LLPs face difficulties in managing MCA compliance due to:');
content = content.replace(/"Mandatory for Interstate Supply",[\\s\\S]*?"Required above Turnover Thresholds",[\\s\\S]*?"Compulsory for E-commerce Platforms",[\\s\\S]*?"Enables Legal Tax Collection Capability"/, 
  '"Confusion in selecting correct ROC forms",\n' +
  '"Missing statutory deadlines leading to heavy penalties",\n' +
  '"Errors in financial statement preparation",\n' +
  '"Director KYC and ROC notice complications"');

// 7. Legal Framework Grid
content = content.replace(/GST Registration is governed by the following statutory laws that regulate India's unified tax structure:/g, 'MCA Compliance involves complete adherence to provisions under:');
content = content.replace(/\{ title: "CGST Act, 2017", desc: "Governs central GST on intra-state transactions" \},/g, '{ title: "Companies Act, 2013", desc: "Governs company incorporation, compliance & ROC filings" },');
content = content.replace(/\{ title: "SGST Act", desc: "Governs state GST \\(varies by state\\)" \},/g, '{ title: "LLP Act, 2008", desc: "Regulates Limited Liability Partnerships compliance" },');
content = content.replace(/\{ title: "IGST Act, 2017", desc: "Governs interstate supply of goods\\/services" \}/g, '{ title: "MCA Guidelines", desc: "Provides rules and timelines for specific forms" }');

// 8. Key Features
const features = [
  { title: "Filing of Financial Statements", desc: "Proper preparation and filing of financial statements in Form AOC-4 with the ROC.", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=500&q=50" },
  { title: "Annual Return Filing", desc: "Submission of Form MGT-7 or MGT-7A containing details of directors and shareholders.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=50" },
  { title: "Director KYC", desc: "Filing of DIR-3 KYC Web annually to maintain active DIN status for all directors.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=50" },
  { title: "Statutory Registers", desc: "Maintenance of updated statutory registers and corporate records at the registered office.", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=50" },
  { title: "Board & General Meetings", desc: "Conducting board meetings and Annual General Meetings (AGM) as per Companies Act.", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=50" },
  { title: "Auditor Appointment", desc: "Filing of Form ADT-1 for auditor appointment and related compliance.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=50" },
  { title: "Event-based Compliances", desc: "Handling event-based filings such as change of directors (DIR-12) or share allotment (PAS-3).", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=50" }
];

const featureItems = features.map(f => '                  { icon: Shield, title: "' + f.title + '", desc: "' + f.desc + '", image: "' + f.image + '" }').join(',\n');
content = content.replace(/CarouselContent className="-ml-4 md:-ml-6">\s+\[[\s\S]*?\]\.map/s, 'CarouselContent className="-ml-4 md:-ml-6">\n' +
  '                [\n' +
  featureItems + '\n' +
  '                ].map');
content = content.replace(/Key Features Of GST Registration/g, 'Compliances Covered under MCA Annual Compliance');

// 9. Benefits
content = content.replace(/3\. BENEFITS OF GST REGISTRATION/g, '3. BENEFITS OF ANNUAL COMPLIANCE');
content = content.replace(/Business Advantages<\/h4>\s+<ul className="space-y-3 text-\[17px\] text-gray-600 font-normal\">\s+<li>.*?<\/li>\s+<\/ul>/s, 'Corporate Standing</h4>\n' +
  '                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">\n' +
  '                        <li>• Maintains active company status</li>\n' +
  '                        <li>• Prevents company strike-off by ROC</li>\n' +
  '                        <li>• Improves corporate credibility with investors</li>\n' +
  '                        <li>• Completes compliance with Companies Act</li>\n' +
  '                      </ul>');
content = content.replace(/Financial Advantages<\/h4>\s+<ul className="space-y-3 text-\[17px\] text-gray-600 font-normal\">\s+<li>.*?<\/li>\s+<\/ul>/s, 'Risk Mitigation</h4>\n' +
  '                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">\n' +
  '                        <li>• Avoids heavy penalties and late fees</li>\n' +
  '                        <li>• Prevents disqualification of directors</li>\n' +
  '                        <li>• Reduces the risk of legal notices</li>\n' +
  '                        <li>• Ensures timely adherence to deadlines</li>\n' +
  '                      </ul>');
content = content.replace(/Growth Opportunities<\/h4>\s+<ul className="space-y-3 text-\[17px\] text-gray-600 font-normal\">\s+<li>.*?<\/li>\s+<\/ul>/s, 'Operational Transparency</h4>\n' +
  '                      <ul className="space-y-3 text-[17px] text-gray-600 font-normal">\n' +
  '                        <li>• Ensures transparent financial reporting</li>\n' +
  '                        <li>• Accurate filing and documentation</li>\n' +
  '                        <li>• Easy credit and fund raising capabilities</li>\n' +
  '                        <li>• Validates business metrics for stakeholders</li>\n' +
  '                      </ul>');

// 10. Forms / Eligibility Table
content = content.replace(/4\. When GST Registration is Mandatory/g, '4. Applicable MCA Forms & Eligibility Matrix');
content = content.replace(/<TableBody>[\s\S]*?<\/TableBody>/, '<TableBody>\n' +
  '                        <TableRow>\n' +
  '                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>AOC-4</TableCell>\n' +
  '                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Financial statements</TableCell>\n' +
  '                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Used to file the financial statements, balance sheet, and audit report of the company.</TableCell>\n' +
  '                        </TableRow>\n' +
  '                        <TableRow className="bg-gray-50/50">\n' +
  '                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>MGT-7 / MGT-7A</TableCell>\n' +
  '                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Annual return filing</TableCell>\n' +
  '                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Contains the annual return with details of shareholders, directors, and shareholding pattern.</TableCell>\n' +
  '                        </TableRow>\n' +
  '                        <TableRow>\n' +
  '                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>DIR-3 KYC</TableCell>\n' +
  '                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Director KYC compliance</TableCell>\n' +
  '                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Web-based or form-based update of director\'s KYC details to keep their DIN active.</TableCell>\n' +
  '                        </TableRow>\n' +
  '                        <TableRow className="bg-gray-50/50">\n' +
  '                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>ADT-1</TableCell>\n' +
  '                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Auditor appointment</TableCell>\n' +
  '                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Notice to Registrar for appointment of statutory auditor, usually filed once every 5 years.</TableCell>\n' +
  '                        </TableRow>\n' +
  '                        <TableRow>\n' +
  '                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>INC-20A</TableCell>\n' +
  '                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Commencement of business</TableCell>\n' +
  '                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Must be filed within 180 days of incorporation to verify registered office and initial capital.</TableCell>\n' +
  '                         </TableRow>\n' +
  '                         <TableRow className="bg-gray-50/50">\n' +
  '                          <TableCell className="font-normal text-gray-700 text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>DPT-3</TableCell>\n' +
  '                          <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Return of deposits</TableCell>\n' +
  '                          <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Filed to report details of outstanding receipts/loans not considered as deposits.</TableCell>\n' +
  '                         </TableRow>\n' +
  '                       </TableBody>');

content = content.replace(/Types of GST Registration/g, 'MCA Compliance Deadlines');
content = content.replace(/Type<\/TableHead>\s+<TableHead.*?Suitable For<\/TableHead>\s+<TableHead.*?Description<\/TableHead>/s, 'Category</TableHead>\n' +
  '                            <TableHead className="font-medium text-white py-4 text-[14.875px]">Due Date</TableHead>\n' +
  '                            <TableHead className="font-medium text-white py-4 text-[14.875px]">Description</TableHead>');
content = content.replace(/<TableBody>[\s\S]*?<\/TableBody>/, '<TableBody>\n' +
  '                          <TableRow hoverable={false}>\n' +
  '                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>AOC-4</TableCell>\n' +
  '                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Within 30 days of AGM</TableCell>\n' +
  '                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Financial Statements filing.</TableCell>\n' +
  '                          </TableRow>\n' +
  '                          <TableRow className="bg-gray-50/50" hoverable={false}>\n' +
  '                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>MGT-7 / MGT-7A</TableCell>\n' +
  '                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>Within 60 days of AGM</TableCell>\n' +
  '                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Annual Return filing.</TableCell>\n' +
  '                          </TableRow>\n' +
  '                          <TableRow hoverable={false}>\n' +
  '                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>DIR-3 KYC</TableCell>\n' +
  '                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>30th September</TableCell>\n' +
  '                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Mandatory annual KYC update for all DIN holders.</TableCell>\n' +
  '                          </TableRow>\n' +
  '                          <TableRow className="bg-gray-50/50" hoverable={false}>\n' +
  '                            <TableCell className="font-bold text-dbiz-navy text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>DPT-3</TableCell>\n' +
  '                            <TableCell className="text-gray-700 font-normal text-[14.875px]" style={{ fontFamily: "\'Inter\', sans-serif" }}>30th June</TableCell>\n' +
  '                            <TableCell className="text-gray-600 text-[14.875px] leading-relaxed" style={{ fontFamily: "\'Inter\', sans-serif" }}>Return of deposits or particulars of transactions not considered deposits.</TableCell>\n' +
  '                          </TableRow>\n' +
  '                        </TableBody>');

// 11. Documents
content = content.replace(/"PAN Card", "Aadhaar Card", "Photograph", "Bank account details", "Address proof"/g, 
  '"CIN (Company Identification Number)", "PAN of the company / LLP", "Registered office details"');
content = content.replace(/"Certificate of Incorporation", "PAN CARD", "MOA & AOA \/Partnership Agreement\/ LLP Agreement", "Directors’ KYC documents \/ Partners KYC", "Bank Account Details", "Address Proof"/g,
  '"Balance Sheet", "Profit & Loss Account", "Auditor’s Report", "Director’s Report"');
content = content.replace(/"Rent Agreement \+ NOC \(if not owm\)", "Electricity Bill \(latest\)", "Ownership proof \(if owned\)"/g,
  '"Details of directors and shareholders", "Board meeting and AGM details", "Auditor appointment details"');

content = content.replace(/Individual \/ Proprietor/g, 'Basic Details');
content = content.replace(/Company \/ LLP \/ Proprietorship/g, 'Financial Documents');
content = content.replace(/Registered Office Proof/g, 'Compliance Documents');

// Documentation Guidelines
content = content.replace(/<div className="max-w-5xl mx-auto bg-white rounded-\[2rem\] border border-gray-100 p-8 md:p-14 shadow-sm animate-on-scroll \[animation-delay:400ms\]">[\s\S]*?<\/div>\s+<\/div>\s+<\/section>/,
  '            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-on-scroll [animation-delay:400ms]">\n' +
  '              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">\n' +
  '                <h3 className="text-xl font-bold text-dbiz-navy mb-6">ROC Filing Data</h3>\n' +
  '                <ul className="space-y-4">\n' +
  '                  {[\n' +
  '                    "Previous MCA filings records",\n' +
  '                    "Statutory registers and updated records",\n' +
  '                    "Current Shareholding pattern"\n' +
  '                  ].map((item, i) => (\n' +
  '                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">\n' +
  '                      <CheckCircle2 className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}\n' +
  '                    </li>\n' +
  '                  ))}\n' +
  '                </ul>\n' +
  '              </div>\n' +
  '              <div className="bg-dbiz-teal/5 border border-dbiz-teal/20 p-8 rounded-[2rem]">\n' +
  '                <h3 className="text-xl font-bold text-dbiz-navy mb-6">Additional Documents (If Applicable)</h3>\n' +
  '                <ul className="space-y-4">\n' +
  '                  {[\n' +
  '                    "DIR-3 KYC details of directors (personal contact updates)",\n' +
  '                    "Loan and deposit details for DPT-3 filing",\n' +
  '                    "Event-based filings (DIR-12, PAS-3, etc.)",\n' +
  '                  ].map((item, i) => (\n' +
  '                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">\n' +
  '                      <Sparkles className="h-5 w-5 text-dbiz-teal shrink-0" /> {item}\n' +
  '                    </li>\n' +
  '                  ))}\n' +
  '                </ul>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </section>');

// 12. Process
const steps = [
  { step: "1", title: "Client Onboarding & Data Collection", desc: "Understand company structure and compliance requirements. Collect financial data, company details, and statutory records." },
  { step: "2", title: "Data Evaluation & Validation", desc: "Analyze financial statements and company records. Verify compliance requirements and identify any missing or incorrect data." },
  { step: "3", title: "Compliance Preparation", desc: "Prepare financial statements and annual returns. Draft the required ROC forms securely ensuring accuracy." },
  { step: "4", title: "Review & Approval", desc: "Share draft filings with the client for review. Make any necessary corrections and obtain final sign-off." },
  { step: "5", title: "Filing & Submission", desc: "File forms accurately on the MCA portal. Ensure timely submission within the due dates and generate acknowledgment." },
  { step: "6", title: "Post-Filing Monitoring", desc: "Track filing status continuously. Handle any notices or resubmissions and provide ongoing compliance support." }
];

const stepItems = steps.map(s => '                { step: "' + s.step + '", title: "' + s.title + '", desc: "' + s.desc + '" }').join(',\n');
content = content.replace(/md:grid grid-cols-\[1fr_auto_1fr\][\s\S]*?\[\s+\{\s+step: "1", title: "Data Collection & Verification"[\s\S]*?\}\s+\]\.map/, 
  'md:grid grid-cols-[1fr_auto_1fr] items-start gap-x-8 animate-on-scroll ${isEvenStep ? \'-mt-20\' : index > 0 ? \'mt-12\' : \'\'}"\n' +
  '                    style={{ animationDelay: `${index * 150}ms` }}\n' +
  '                  >\n' +
  '                    {/* LEFT slot */}\n' +
  '                    {isOdd ? (\n' +
  '                      <div className="flex justify-end pr-4">\n' +
  '                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-right">\n' +
  '                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>\n' +
  '                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>\n' +
  '                        </div>\n' +
  '                      </div>\n' +
  '                    ) : (\n' +
  '                      <div></div>\n' +
  '                    )}\n' +
  '\n' +
  '                    {/* CENTER — numbered circle */}\n' +
  '                    <div className="flex flex-col items-center z-10 relative">\n' +
  '                       <div className="w-12 h-12 rounded-full bg-white border-4 border-dbiz-teal flex items-center justify-center text-dbiz-navy font-bold text-xl shadow-lg hover:bg-dbiz-teal hover:text-white transition-colors duration-300 shrink-0">\n' +
  '                        {item.step}\n' +
  '                      </div>\n' +
  '                    </div>\n' +
  '\n' +
  '                    {/* RIGHT slot */}\n' +
  '                    {isEvenStep ? (\n' +
  '                      <div className="flex justify-start pl-4">\n' +
  '                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-dbiz-teal/30 transition-all duration-300 max-w-sm text-left">\n' +
  '                          <h3 className="text-xl lg:text-2xl font-semibold text-dbiz-navy mb-3 hover:text-dbiz-teal transition-colors">Step {item.step}: {item.title}</h3>\n' +
  '                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{item.desc}</p>\n' +
  '                        </div>\n' +
  '                      </div>\n' +
  '                    ) : (\n' +
  '                      <div></div>\n' +
  '                    )}\n' +
  '                  </div>\n' +
  '                );\n' +
  '              })}\n' +
  '\n' +
  '              {/* Mobile: vertical stacked list */}\n' +
  '              <div className="md:hidden space-y-8 relative pl-10">\n' +
  '                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent rounded-full"></div>\n' +
  '                {[\n' +
  stepItems + '\n' +
  '                ].map');

content = content.replace(/md:hidden space-y-8 relative pl-10">\s+<div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal\/40 to-transparent rounded-full"><\/div>\s+\[\s+\{\s+step: "1", title: "Data Collection & Verification"[\s\S]*?\}\s+\]\.map/s, 
  'md:hidden space-y-8 relative pl-10">\n' +
  '                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dbiz-teal via-dbiz-teal/40 to-transparent rounded-full"></div>\n' +
  '                {[\n' +
  stepItems + '\n' +
  '                ].map');

// 13. Penalties & Risks
content = content.replace(/7\. TIMELINE & DELIVERY/g, '7. PENALTIES & RISKS');
content = content.replace(/Processing Timelines/g, 'Risks of Non-Compliance');
content = content.replace(/Fast Track Approval<\/h4>\s+<\/div>\s+<div className="card-face back\">\s+<div className="card-duration\">.*?<\/div>/s, 'Heavy Penalties</h4>\n                        </div>\n                        {/* Back Face */}\n                        <div className="card-face back">\n                          <div className="card-duration text-[20px]">Heavy Late Fees</div>');
content = content.replace(/Delayed Cases<\/h4>\s+<\/div>\s+<div className="card-face back\">\s+<div className="card-duration\">.*?<\/div>/s, 'Disqualification</h4>\n                        </div>\n                        {/* Back Face */}\n                        <div className="card-face back">\n                          <div className="card-duration text-[20px]">Director Risk</div>');
content = content.replace(/Note: Timeline may vary depending on state regulations.*?help in faster approval without delays\./g, 'Note: Non-filing or delayed MCA compliance heavily impacts corporate status and risks company strike-off.');

// 14. Support / Compliance
content = content.replace(/8\. Post-Registration Compliance/g, '8. ADVANCED COMPLIANCE');
content = content.replace(/\[\s+\{\s+type: "GSTR-1"[\s\S]*?\}\s+\]/s, '[\n' +
  '                        { type: "Belated Filings", freq: "Past Defaults" },\n' +
  '                        { type: "Revised Filings", freq: "Corrections" },\n' +
  '                        { type: "Event-Based", freq: "As Required" }\n' +
  '                      ]');

content = content.replace(/Compliance Requirements<\/h4>\s+<div className="compliance-grid\">[\s\S]*?<\/div>/, 'Corporate Governance Ratings</h4>\n' +
  '                      <div className="compliance-grid">\n' +
  '                        {[\n' +
  '                          "Dormant companies support",\n' +
  '                          "Expert Companies Act advisory",\n' +
  '                          "Board resolution drafting",\n' +
  '                          "Maintenance of Registers"\n' +
  '                        ].map((req, i) => (\n' +
  '                          <div key={i} className="compliance-inner-card">\n' +
  '                             <div className="compliance-check-icon">\n' +
  '                               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>\n' +
  '                             </div>\n' +
  '                             <span className="compliance-label-text">{req}</span>\n' +
  '                          </div>\n' +
  '                        ))}\n' +
  '                      </div>');

// 15. Why DBIZ
content = content.replace(/Why DBIZ CONSULTANCY for GST Registration\?/g, 'Why DBIZ CONSULTANCY for MCA Compliance?');
content = content.replace(/What DBIZ Handles<\/h3>\s+<ul className="space-y-4\">[\s\S]*?<\/ul>/, 'What DBIZ Handles</h3>\n' +
  '                      <ul className="space-y-4">\n' +
  '                        {[\n' +
  '                          "Identify applicable ROC filings",\n' +
  '                          "Proper classification as per Companies Act",\n' +
  '                          "Preparation of financial statements",\n' +
  '                          "Drafting annual returns",\n' +
  '                          "Verification of company records",\n' +
  '                          "Reconciliation with books of accounts",\n' +
  '                          "Filing AOC-4, MGT-7, DIR-3 KYC, etc.",\n' +
  '                          "Timely submission on MCA portal",\n' +
  '                          "ROC notices response",\n' +
  '                          "Ongoing compliance monitoring"\n' +
  '                        ].map((item, i) => (\n' +
  '                          <li key={i} className="flex items-start">\n' +
  '                            <CheckCircle className="h-4 w-4 text-dbiz-teal mr-2 mt-1 flex-shrink-0" />\n' +
  '                            <span className="text-gray-700 font-medium">{item}</span>\n' +
  '                          </li>\n' +
  '                        ))}\n' +
  '                      </ul>');
content = content.replace(/What You Provide<\/h3>\s+<ul className="space-y-4\">[\s\S]*?<\/ul>/, 'What You Provide</h3>\n' +
  '                      <ul className="space-y-4">\n' +
  '                        {[\n' +
  '                          "Company Financial statements",\n' +
  '                          "Auditor details",\n' +
  '                          "DSC of Directors",\n' +
  '                          "Changes in registered address (if any)",\n' +
  '                          "Timely review and approval"\n' +
  '                        ].map((item, i) => (\n' +
  '                          <li key={i} className="flex items-start">\n' +
  '                            <ArrowRight className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />\n' +
  '                            <span className="text-gray-700 font-medium">{item}</span>\n' +
  '                          </li>\n' +
  '                        ))}\n' +
  '                      </ul>');

content = content.replace(/When Should You Apply\?<\/h3>\s+<p class.*?<\/p>\s+<\/div>\s+<div className="lg:w-2\/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full\">[\s\S]*?<\/div>/, 'Advanced Corporate Needs</h3>\n' +
  '                           <p className="text-[17px] text-gray-500 leading-relaxed font-normal" style={{ fontFamily: "\'Inter\', sans-serif" }}>We provide expert support for complex corporate compliance requirements, ensuring complete legal adherence.</p>\n' +
  '                        </div>\n' +
  '\n' +
  '                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10 w-full">\n' +
  '                           {[\n' +
  '                              "Handling event-based filings (DIR-12, PAS-3, etc.)",\n' +
  '                              "Compliance for dormant companies",\n' +
  '                              "Advisory on Companies Act requirements",\n' +
  '                              "Corporate governance and compliance planning"\n' +
  '                           ].map((point, index) => (\n' +
  '                              <div key={index} className="flex items-center gap-4 group/point">\n' +
  '                                 <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover/point:bg-dbiz-teal group-hover/point:border-dbiz-teal transition-all">\n' +
  '                                    <CheckCircle2 className="h-3.5 w-3.5 text-dbiz-teal group-hover/point:text-white" />\n' +
  '                                 </div>\n' +
  '                                 <p className="text-[17px] font-medium text-dbiz-navy/80 tracking-tight leading-snug group-hover/point:text-dbiz-teal transition-colors" style={{ fontFamily: "\'Inter\', sans-serif" }}>{point}</p>\n' +
  '                              </div>\n' +
  '                           ))}');

content = content.replace(/Our Advantage<\/h3>\s+<div className="space-y-6\">[\s\S]*?<\/div>/, 'Our Advantage</h3>\n' +
  '                        <div className="space-y-6">\n' +
  '                           <p className="text-lg leading-relaxed text-white">\n' +
  '                             D BIZ CONSULTANCY has experienced professionals who handle MCA compliance with accuracy and efficiency.\n' +
  '                           </p>\n' +
  '                           <p className="text-lg leading-relaxed text-blue-100/90 font-medium">\n' +
  '                             Our approach focuses on precise documentation, correct filing, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.\n' +
  '                           </p>\n' +
  '                           <p className="text-lg leading-relaxed text-blue-100/90 font-bold border-l-2 border-dbiz-teal pl-6">\n' +
  '                             We follow a structured workflow to ensure timely compliance within deadlines.\n' +
  '                           </p>\n' +
  '                        </div>');

// Footer text
content = content.replace(/GST process—so you can focus on building and scaling your business with confidence\./g, 'MCA Annual compliance—so you can focus on building and scaling your business with confidence.');

// FAQ
content = content.replace(/FAQs on GST Registration/g, 'FAQs – MCA Annual Compliance');
content = content.replace(/gstFaq\.map/g, 'mcaFaq.map');

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'MCACompliancePage.tsx'), content);
console.log('Successfully generated MCACompliancePage.tsx');
