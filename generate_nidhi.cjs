const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'NidhiCompanyPage.tsx');
let content = fs.readFileSync(path.join(__dirname, 'src', 'pages', 'MCACompliancePage.tsx'), 'utf8');

// Component Name Replace
content = content.replace(/MCACompliancePage/g, 'NidhiCompanyPage');

// Hero Section
content = content.replace('MCA Annual Compliance Services', 'Nidhi Company Compliance Services');
content = content.replace('Accurate, Timely & Fully Compliant ROC Filing for Companies & LLPs', 'Accurate, Timely & Fully Compliant Nidhi Company Compliance for Businesses');
content = content.replace(
    'MCA Annual Compliance is more than a statutory requirement—it is essential for maintaining your company’s legal status, avoiding penalties, and ensuring smooth business operations. Whether you are a Private Limited Company, LLP, or other registered entity, timely and accurate ROC filings are crucial to remain compliant and avoid disqualification or fines.',
    'Managing Nidhi Company compliance is more than a statutory requirement—it is essential for maintaining regulatory approval, avoiding penalties, and ensuring smooth financial operations. Whether you are a newly incorporated Nidhi Company or an existing one, proper compliance is crucial to continue operations without restrictions or legal issues.'
);
content = content.replace(
    'D BIZ CONSULTANCY provides expert-driven MCA compliance services ensuring accurate filing of annual returns, financial statements, and complete adherence to Companies Act requirements.',
    'D BIZ CONSULTANCY provides expert-driven Nidhi Company compliance services ensuring accurate filings, timely submissions, and complete adherence to regulatory requirements.'
);
content = content.replace('File Your ROC Compliance Now', 'Ensure Your Nidhi Compliance');
content = content.replace('Reliable ROC Filing', 'Reliable Nidhi Compliance');
// Images for hero
content = content.replace('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80');
content = content.replace('MCA Compliance Professional Services', 'Nidhi Compliance Professional Services');

// 1. Challenges
content = content.replace(
    'Many companies and LLPs face difficulties in managing MCA compliance due to changing regulations, strict deadlines, and complex filing requirements.',
    'Many Nidhi Companies face difficulties in managing compliance due to strict regulatory requirements and continuous monitoring by authorities.'
);

const challengesOrig = `              {[
                { title: "Form Selection", desc: "Confusion in selecting correct ROC forms (AOC-4, MGT-7, etc.)", icon: FileText },
                { title: "Statutory Deadlines", desc: "Missing statutory deadlines leading to heavy penalties", icon: Clock },
                { title: "Financial Errors", desc: "Errors in financial statement preparation and filing", icon: AlertTriangle },
                { title: "Legal Non-Compliance", desc: "Non-compliance with Companies Act provisions", icon: Scale },
                { title: "KYC Issues", desc: "Director KYC and compliance issues", icon: Users },
                { title: "Legal Complications", desc: "ROC notices and legal complications", icon: AlertTriangle },
              ]`;
const challengesNew = `              {[
                { title: "Form Selection", desc: "Confusion in filing correct Nidhi forms (NDH-1, NDH-3, NDH-4, etc.)", icon: FileText },
                { title: "NOF Requirements", desc: "Difficulty in maintaining minimum members and Net Owned Fund (NOF)", icon: Scale },
                { title: "ROC Filings", desc: "Errors in annual ROC filings and compliance reporting", icon: Clock },
                { title: "Ratio Maintenance", desc: "Non-maintenance of deposit and loan ratios as per rules", icon: AlertTriangle },
                { title: "ROC Compliance", desc: "Notices and compliance issues from Registrar of Companies", icon: Users },
                { title: "Legal Action", desc: "Notice and operational restrictions", icon: AlertTriangle }
              ]`;
content = content.replace(challengesOrig, challengesNew);
content = content.replace(
    'We simplify MCA annual compliance with expert handling, accurate filing,\n                timely submissions, and full adherence to Companies Act requirements —\n                helping your business avoid penalties, disqualification, and legal risks.',
    'We simplify Nidhi Company compliance with expert handling, ensuring accurate filings, proper documentation, and complete adherence to regulatory laws, helping you avoid risks, penalties, and operational restrictions.'
);

// 2. Overview
content = content.replace('<h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Overview</h2>', '<h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">What is Nidhi Company Compliance?</h2>');
content = content.replace(
    'MCA Annual Compliance is the process of filing mandatory returns and documents with the Ministry of Corporate Affairs (MCA) to ensure that a company or LLP remains legally compliant under the Companies Act, 2013 and applicable rules.',
    'Nidhi Company Compliance is the process of fulfilling periodic and event-based requirements under the Companies Act, 2013 and Nidhi Rules, 2014, including filings, financial reporting, and regulatory adherence.'
);
// replace image in overview
content = content.replace('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1454165205736-662b2ac14761?auto=format&fit=crop&w=800&q=80');

const componentsOrig = `                  {[
                    { title: "Financial Statements (AOC-4)", desc: "Filing of audited balance sheets and profit & loss accounts as per MCA norms." },
                    { title: "Annual Return (MGT-7 / MGT-7A)", desc: "Mandatory filing of annual returns containing ownership and director details." },
                    { title: "Director KYC", desc: "DIR-3 KYC Web filing once in 3 years as per latest MCA update for all DIN holders." },
                    { title: "Statutory Registers", desc: "Maintenance of mandatory statutory registers and corporate records as per law." },
                    { title: "Statutory Meetings", desc: "Conducting Board Meetings and Annual General Meeting (AGM) as per statutory timelines." }
                  ]`;
const componentsNew = `                  {[
                    { title: "Member Compliance", desc: "Maintenance of minimum 200 members" },
                    { title: "NOF Compliance", desc: "Net Owned Fund (NOF) compliance" },
                    { title: "Deposit Ratios", desc: "Deposit to NOF ratio maintenance" },
                    { title: "NDH Filings", desc: "Filing of NDH returns and ROC forms" },
                    { title: "Financial Statements", desc: "Financial statements and audit compliance" }
                  ]`;
content = content.replace(componentsOrig, componentsNew);

content = content.replace('Importance of MCA Compliance', 'Importance of Nidhi Company Compliance');
const importanceOrig = `                  {[
                    "Ensures legal compliance under Companies Act",
                    "Avoids penalties, fines, and disqualification",
                    "Maintains active company status",
                    "Builds credibility with banks & investors",
                    "Ensures transparency and governance"
                  ]`;
const importanceNew = `                  {[
                    "Ensures legal compliance under MCA regulations",
                    "Enables smooth acceptance of deposits and operations",
                    "Avoids penalties, restrictions, and notices",
                    "Maintains accurate financial and statutory records",
                    "Builds credibility among members and stakeholders"
                  ]`;
content = content.replace(importanceOrig, importanceNew);

// 3. Applicability
content = content.replace(
    'To ensure proper compliance, it is important to identify entities required to file MCA returns. The table below outlines the categories and their applicability.',
    'To help you clearly understand your Nidhi Company compliance obligations, the table below outlines the categories of entities and their respective applicability under Nidhi Rules and the Companies Act, 2013.'
);
const applicabilityOrig = `                {[
                  { cat: "Private Limited Companies", app: "Mandatory annual compliance" },
                  { cat: "One Person Companies (OPC)", app: "Required to file annual returns" },
                  { cat: "Limited Liability Partnerships (LLPs)", app: "Mandatory compliance filing" },
                  { cat: "Public Limited Companies", app: "Compulsory compliance" },
                  { cat: "Section 8 Companies (NGOs)", app: "Required to file annual returns" },
                  { cat: "Dormant Companies", app: "Limited compliance but mandatory filing" },
                  { cat: "Companies without business activity", app: "Must file Nil returns" }
                ]`;
const applicabilityNew = `                {[
                  { cat: "Nidhi Companies", app: "Mandatory compliance" },
                  { cat: "Newly Incorporated Nidhi Companies", app: "Must meet initial compliance requirements" },
                  { cat: "Existing Nidhi Companies", app: "Continuous and annual compliance required" },
                  { cat: "Companies Applying for Nidhi Status", app: "Required to file NDH-4" },
                  { cat: "Companies Accepting Deposits from Members", app: "Mandatory compliance under Nidhi Rules" },
                  { cat: "Companies with Member-Based Financing Activities", app: "Required to comply with Nidhi provisions" },
                  { cat: "Companies Failing Minimum Member Requirement", app: "Must regularize compliance" },
                  { cat: "Companies under ROC Monitoring", app: "Strict compliance required" }
                ]`;
content = content.replace(applicabilityOrig, applicabilityNew);
content = content.replace(
    '* All registered companies and LLPs must comply with MCA filing requirements annually, even if there is no business activity.',
    '* All Nidhi Companies are required to comply with regulations regularly, even if there are no significant transactions or changes during the period.'
);

// 4. Statutory Forms
content = content.replace('Which MCA Forms Apply to You?', 'Which Nidhi Compliance Applies to You?');
content = content.replace(
    'Identify the correct ROC forms for your company. Hover over each card to see the specific filing applicability and purpose.',
    'To ensure accurate compliance and avoid errors, it is important to follow the correct Nidhi compliance requirements based on your company’s status and operations. The table below provides a clear understanding of different Nidhi compliances and their applicability.'
);
const formsOrig = `              {[
                { task: "AOC-4", desc: "Filing of financial statements (Balance Sheet & P&L) for the financial year." },
                { task: "MGT-7/7A", desc: "Mandatory annual return filing containing shareholding and management details." },
                { task: "DIR-3 KYC", desc: "Annual KYC compliance for every individual holding a DIN (Director ID)." },
                { task: "ADT-1", desc: "Intimation of auditor appointment or reappointment for the statutory audit." },
                { task: "INC-20A", desc: "Mandatory declaration of commencement of business activities for new entities." },
                { task: "DPT-3", desc: "Formal return of deposits or outstanding loans/receipts as per ROC mandates." },
                { task: "PAS-3", desc: "Statutory return of allotment of shares to be filed specifically with the ROC." },
                { task: "DIR-12", desc: "Intimation of appointment, resignation or change in directors/management." },
                { task: "MGT-14", desc: "Filing of specific Board & Special Resolutions authorizing key company actions." }
              ]`;
const formsNew = `              {[
                { task: "NDH-1", desc: "Member and deposit compliance reporting" },
                { task: "NDH-3", desc: "Half-yearly return of members and deposits" },
                { task: "NDH-4", desc: "Application for declaration as Nidhi Company" },
                { task: "AOC-4", desc: "Filing of financial statements" },
                { task: "MGT-7", desc: "Annual return filing" },
                { task: "DIR-3 KYC", desc: "Director KYC compliance" },
                { task: "ADT-1", desc: "Appointment of auditor" },
                { task: "Board Meetings & AGM", desc: "Mandatory governance compliance" }
              ]`;
content = content.replace(formsOrig, formsNew);
content = content.replace(
    'Choosing the correct forms and filing them accurately is essential to avoid penalties, notices, and compliance issues.',
    'Choosing the correct compliance and completing it accurately is essential to avoid penalties, restrictions, and regulatory issues.'
);

// 5. Full Coverage
content = content.replace('<h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Filing Services</h2>', '<h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Transactions Covered in Nidhi Company Compliance</h2>');
content = content.replace(
    'We handle all aspects of MCA annual compliance with proper classification and adherence to the Companies Act requirements.',
    'We handle all types of Nidhi-related transactions with proper classification and compliance as per regulatory requirements: This comprehensive coverage ensures accurate reporting of all financial activities, proper compliance with Nidhi rules, and smooth company operations.'
);
const coverageOrig = `                {[
                  { title: "Financial Statements", desc: "Expert filing of Form AOC-4 as per AS/Ind-AS standards.", icon: FileBarChart, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
                  { title: "Annual Returns", desc: "MGT-7/7A filing with full shareholder and equity details.", icon: FileText, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                  { title: "Director KYC", desc: "Annual DIR-3 KYC updates and verification on MCA portal.", icon: UserPlus, img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=600&q=80" },
                  { title: "AGM Documentation", desc: "Ensuring proper drafting and minutes for Statutory Meetings.", icon: Calendar, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
                  { title: "Statutory Registers", desc: "Full maintenance in compliance with the Companies Act.", icon: BookOpen, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
                  { title: "Auditor Appointment", desc: "Filing Form ADT-1 for timely reappointment or vacancy.", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80" },
                  { title: "Event-Based Filing", desc: "Handling DIR-12, PAS-3, and other statutory event forms.", icon: Zap, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                  { title: "ROC Correction", desc: "Managing amendments, corrections, and resubmissions.", icon: RefreshCw, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" }
                ]`;
const coverageNew = `                {[
                  { title: "Member Deposits", desc: "Member deposits (Fixed Deposits, Recurring, Savings)", icon: FileBarChart, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
                  { title: "Loan Disbursement", desc: "Loan disbursement to members", icon: FileText, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                  { title: "Share Capital", desc: "Share capital transactions", icon: UserPlus, img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=600&q=80" },
                  { title: "Interest Reporting", desc: "Interest calculation and financial reporting", icon: Calendar, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
                  { title: "NOF & Deposit Ratios", desc: "Maintenance of Net Owned Fund (NOF) and ratios", icon: BookOpen, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
                  { title: "Statutory Registers", desc: "Member register and documentation maintenance", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80" },
                  { title: "ROC Filings", desc: "Statutory filings and compliance records", icon: Zap, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                  { title: "Corrections", desc: "Amendments and corrections in compliance filings", icon: RefreshCw, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" }
                ]`;
content = content.replace(coverageOrig, coverageNew);

// 6. Our Advantage
content = content.replace(
    'D BIZ CONSULTANCY has experienced professionals who handle MCA compliance with accuracy and efficiency. We ensure proper filing of ROC forms, reducing the risk of penalties, late fees, and legal complications.',
    'D BIZ CONSULTANCY has experienced professionals who handle even complex Nidhi Company compliance requirements with ease. We ensure accurate and compliant filings, reducing the risk of errors, penalties, and regulatory restrictions.'
);
content = content.replace(
    'Our approach focuses on precise documentation, correct filing, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.',
    'Our approach focuses on precise compliance tracking, correct financial structuring, and adherence to Nidhi Rules while maintaining complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and trust.'
);
content = content.replace(
    'We follow a structured workflow to ensure timely compliance within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free MCA compliance experience.',
    'We follow an efficient process to ensure timely compliance within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free Nidhi compliance experience.'
);

const advantageOrig = `               {[
                 {
                   title: "Compliance Analysis & Structuring",
                   points: ["Identify applicable ROC filings", "Proper classification as per Companies Act"],
                   icon: Search
                 },
                 {
                   title: "Documentation & Preparation",
                   points: ["Preparation of financial statements", "Drafting annual returns and documents"],
                   icon: FileText
                 },
                 {
                   title: "Pre-Filing Documentation Support",
                   points: ["Drafting of notices and resolutions", "Preparation of supporting attachments"],
                   icon: ClipboardCheck
                 },
                 {
                   title: "Data Verification & Reconciliation",
                   points: ["Verification of company records", "Reconciliation with books of accounts"],
                   icon: Activity
                 },
                 {
                   title: "ROC Filing & Submission",
                   points: ["Selection of correct MCA forms", "Filing AOC-4, MGT-7, DIR-3 KYC, etc.", "Timely submission on MCA portal"],
                   icon: Send
                 },
                 {
                   title: "Post-Filing Support",
                   points: ["Filing status tracking and follow-up", "Support for instant approval processing", "Handling corrections and resubmissions"],
                   icon: RefreshCw
                 },
                 {
                   title: "Notice Handling & Compliance",
                   points: ["ROC notices response", "Department query handling", "Compliance and legal support"],
                   icon: MessageCircle
                 }
               ]`;
const advantageNew = `               {[
                 {
                   title: "Compliance Analysis & Structuring",
                   points: ["Identify company status, members, and deposit structure", "Proper classification as per Nidhi Rules"],
                   icon: Search
                 },
                 {
                   title: "Regulatory Compliance & Ratio Management",
                   points: ["Ensure Net Owned Fund (NOF) compliance", "Maintain deposit to NOF ratio", "Verify member requirements"],
                   icon: FileText
                 },
                 {
                   title: "Data Reconciliation",
                   points: ["Financial data and compliance matching", "Member and deposit reconciliation", "Compliance verification"],
                   icon: ClipboardCheck
                 },
                 {
                   title: "Nidhi Return Preparation & Filing",
                   points: ["Selection of correct compliance forms (NDH-1, NDH-3, etc.)", "Preparation of required ROC filings", "Timely filing on MCA portal"],
                   icon: Send
                 },
                 {
                   title: "Post-Filing Support",
                   points: ["Compliance status tracking", "Amendments and corrections", "Ongoing compliance support"],
                   icon: RefreshCw
                 },
                 {
                   title: "Notice Handling & Compliance",
                   points: ["ROC notices response", "Department queries handling", "Compliance and audit support"],
                   icon: MessageCircle
                 }
               ]`;
content = content.replace(advantageOrig, advantageNew);

// 7. Advanced Support
content = content.replace('Advanced & Specialized MCA Compliance Services', 'Advanced & Specialized Nidhi Company Compliance Services');
content = content.replace(
    'We provide expert support for complex corporate compliance requirements, ensuring complete legal adherence and smooth operations.',
    'We provide expert support for complex Nidhi compliance requirements, ensuring accurate compliance and efficient regulatory management.'
);
const advancedOrig = `               {[
                 { title: "Belated Filings", desc: "Expert support for overdue ROC records and legal compliance.", icon: History },
                 { title: "Revised & Corrections", desc: "Management of revised filings and ROC rectification.", icon: RefreshCw },
                 { title: "Director Compliance", desc: "Director KYC and board-level compliance updates.", icon: Users },
                 { title: "Event-Based Filings", desc: "Handling of DIR-12, PAS-3, and other triggered events.", icon: Zap },
                 { title: "Dormant Companies", desc: "Specialized maintenance for inactive or dormant status.", icon: HardHat },
                 { title: "Companies Act Advisory", desc: "Expert advisory on core Companies Act requirements.", icon: Scale },
                 { title: "Corporate Governance", desc: "Compliance planning and strategic governance support.", icon: Shield }
               ]`;
const advancedNew = `               {[
                 { title: "Belated Filings", desc: "Belated Nidhi Compliance Filing", icon: History },
                 { title: "Revised Amendments", desc: "Revised Filings & Amendments", icon: RefreshCw },
                 { title: "Nidhi Application", desc: "Nidhi Status Application (NDH-4)", icon: Zap },
                 { title: "Ratio Correction", desc: "Compliance Ratio Correction (NOF & Deposits)", icon: Scale },
                 { title: "Audit Reconciliation", desc: "Audit Support & Financial Reconciliation", icon: FileCheck2 },
                 { title: "Member Structuring", desc: "Member and Deposit Structuring", icon: Users },
                 { title: "Complex Issues", desc: "Handling Complex Compliance Issues", icon: Shield },
                 { title: "Regulatory Advisory", desc: "Nidhi Advisory & Regulatory Support for Companies", icon: HardHat }
               ]`;
content = content.replace(advancedOrig, advancedNew);

// 8. Workflow
content = content.replace(
    'We follow a structured and systematic approach to ensure accurate filing and smooth corporate management.',
    'We follow a structured and systematic approach to ensure accurate compliance, timely filing, and smooth Nidhi Company operations.'
);
const workflowOrig = `                {[
                  { stage: "Stage 1", title: "Onboarding & Collection", color: "bg-blue-500", items: ["Understand company structure & requirements", "Collect financial & statutory records", "Gather previous filings & relevant docs"] },
                  { stage: "Stage 2", title: "Evaluation & Validation", color: "bg-purple-500", items: ["Analyze financial & company records", "Verify compliance requirements", "Identify missing or incorrect data"] },
                  { stage: "Stage 3", title: "Compliance Preparation", color: "bg-indigo-500", items: ["Prepare financial statements & returns", "Draft required ROC forms", "Ensure accuracy and completeness"] },
                  { stage: "Stage 4", title: "Review & Approval", color: "bg-cyan-500", items: ["Share draft filings with client", "Make necessary corrections", "Obtain final approval"] },
                  { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File forms on MCA portal", "Ensure timely submission in due dates", "Generate acknowledgment & records"] },
                  { stage: "Stage 6", title: "Post-Filing Monitoring", color: "bg-emerald-500", items: ["Track filing status", "Handle notices or resubmissions", "Provide ongoing compliance support"] }
                ]`;
const workflowNew = `                {[
                  { stage: "Stage 1", title: "Client Onboarding & Data Collection", color: "bg-blue-500", items: ["Understand company structure and compliance status", "Collect CIN, financial data, and member details", "Gather previous filings and compliance records"] },
                  { stage: "Stage 2", title: "Compliance Evaluation & Validation", color: "bg-purple-500", items: ["Analyze member count and deposit structure", "Verify Net Owned Fund (NOF) and ratios", "Identify gaps, mismatches, or non-compliance"] },
                  { stage: "Stage 3", title: "Compliance Structuring & Planning", color: "bg-indigo-500", items: ["Plan corrective actions for compliance gaps", "Align operations with Nidhi Rules and requirements"] },
                  { stage: "Stage 4", title: "Return Preparation & Review", color: "bg-cyan-500", items: ["Select applicable forms (NDH-1, NDH-3, etc.)", "Prepare draft filings based on validated data", "Share summary with client for review and approval"] },
                  { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File returns on MCA portal", "Ensure timely submission within due dates", "Generate acknowledgment and compliance reports"] },
                  { stage: "Stage 6", title: "Post-Compliance Monitoring", color: "bg-emerald-500", items: ["Track compliance status and updates", "Handle notices, corrections, or follow-ups", "Provide ongoing compliance support and advisory services"] }
                ]`;
content = content.replace(workflowOrig, workflowNew);

// 9. Documents
content = content.replace(
    'To ensure accurate MCA filing and smooth compliance, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and filing of ROC returns.',
    'To ensure accurate Nidhi Company compliance and smooth filing, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and submission of compliance filings.'
);
const docsOrig = `               {[
                 {
                   title: "Basic Details",
                   icon: Building2,
                   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50",
                   items: ["CIN (Company Identification Number)", "PAN of the company / LLP", "Registered office details"]
                 },
                 {
                   title: "Financial Documents",
                   icon: FileBarChart,
                   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=50",
                   items: ["Balance Sheet", "Profit & Loss Account", "Auditor’s Report", "Director’s Report"]
                 },
                 {
                   title: "Compliance Documents",
                   icon: ClipboardCheck,
                   image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=50",
                   items: ["Details of directors and shareholders", "Board meeting and AGM details", "Auditor appointment details"]
                 },
                 {
                   title: "ROC Filing Data",
                   icon: FileCheck2,
                   image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=50",
                   items: ["Previous MCA filings", "Statutory registers and records", "Shareholding pattern"]
                 },
                 {
                   title: "Additional (If Applicable)",
                   icon: AlertCircle,
                   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=50",
                   items: ["DIR-3 KYC details of directors", "Loan and deposit details (DPT-3)", "Event-based filings (DIR-12, PAS-3, etc.)"]
                 }
               ]`;
const docsNew = `               {[
                 {
                   title: "Basic Details",
                   icon: Building2,
                   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=50",
                   items: ["CIN (Corporate Identification Number)", "PAN of the company", "Bank account details", "Director details (DIN & KYC status)"]
                 },
                 {
                   title: "Financial Documents",
                   icon: FileBarChart,
                   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=50",
                   items: ["Balance Sheet", "Profit & Loss Statement", "Net Owned Fund (NOF) calculation", "Auditor’s report"]
                 },
                 {
                   title: "Member & Deposit",
                   icon: ClipboardCheck,
                   image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=50",
                   items: ["List of members (minimum 200)", "Shareholding details", "Deposit details (FD, RD, savings)", "Loan details provided to members"]
                 },
                 {
                   title: "Compliance Filings",
                   icon: FileCheck2,
                   image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=50",
                   items: ["Previous NDH filings (NDH-1, NDH-3, etc.)", "Annual return (MGT-7)", "Financial statements (AOC-4)"]
                 },
                 {
                   title: "Additional Records",
                   icon: AlertCircle,
                   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=50",
                   items: ["NDH-4 application documents", "Board resolutions and meeting records", "Compliance correction details", "ROC notices and replies"]
                 }
               ]`;
content = content.replace(docsOrig, docsNew);
content = content.replace(
    'This ensures accurate ROC filing, proper documentation, and full compliance with the Companies Act.',
    'This ensures accurate compliance filing, proper regulatory adherence, and smooth functioning of the Nidhi Company.'
);

// 10. Benefits
content = content.replace(
    'Professional MCA compliance ensures smooth corporate functioning and helps companies avoid legal risks and penalties.',
    'Professional Nidhi Company compliance plays a crucial role in ensuring accurate reporting and smooth company operations. It helps companies stay compliant, reduce risks, and efficiently manage regulatory requirements.'
);
const benefitsOrig = `               {[
                 {
                   title: "Accurate filing and documentation",
                   desc: "Ensures correct preparation and submission of financial statements and annual returns.",
                   icon: FileCheck2
                 },
                 {
                   title: "Avoid penalties and legal issues",
                   desc: "Reduces the risk of heavy fines, late fees, and director disqualification.",
                   icon: Gavel
                 },
                 {
                   title: "Timely compliance with deadlines",
                   desc: "Ensures all ROC filings are completed within prescribed timelines.",
                   icon: Clock
                 },
                 {
                   title: "Maintains active company status",
                   desc: "Prevents company strike-off and ensures continued legal existence.",
                   icon: Building2
                 },
                 {
                   title: "Improved corporate credibility",
                   desc: "Builds trust with banks, investors, and stakeholders.",
                   icon: Award
                 },
                 {
                   title: "Complete compliance with Companies Act",
                   desc: "Ensures adherence to all statutory and regulatory requirements.",
                   icon: Shield
                 }
               ]`;
const benefitsNew = `               {[
                 {
                   title: "Accurate compliance and reporting",
                   desc: "Ensures correct filing of all Nidhi forms and regulatory documents.",
                   icon: FileCheck2
                 },
                 {
                   title: "Avoid penalties, restrictions, and notices",
                   desc: "Reduces the risk of non-compliance, fines, and operational restrictions.",
                   icon: Gavel
                 },
                 {
                   title: "Timely compliance management",
                   desc: "Ensures all filings are completed within due dates without delays.",
                   icon: Clock
                 },
                 {
                   title: "Smooth business operations",
                   desc: "Prevents disruptions due to compliance failures.",
                   icon: Building2
                 },
                 {
                   title: "Improved credibility and trust",
                   desc: "Builds confidence among members, depositors, and authorities.",
                   icon: Award
                 },
                 {
                   title: "Complete adherence to Nidhi Rules",
                   desc: "Maintains proper records and compliance with all regulatory requirements.",
                   icon: Shield
                 }
               ]`;
content = content.replace(benefitsOrig, benefitsNew);

// 11. Timelines
content = content.replace(
    'To ensure smooth compliance and avoid penalties, it is important to be aware of key MCA filing deadlines.',
    'To ensure smooth compliance and avoid penalties, it is important to be aware of the due dates for various Nidhi filings. The table below provides a clear overview of key compliance deadlines.'
);
const timelinesOrig = `                     {[
                       { cat: "AOC-4", label: "Financial Statements", due: "Within 30 days of AGM", icon: FileBarChart },
                       { cat: "MGT-7 / 7A", label: "Annual Return", due: "Within 60 days of AGM", icon: FileCheck2 },
                       { cat: "DIR-3 KYC", label: "Annual KYC Update", due: "30th September", icon: Users },
                       { cat: "DPT-3", label: "Return of Deposits", due: "30th June", icon: CreditCard }
                     ]`;
const timelinesNew = `                     {[
                       { cat: "NDH-1", label: "Annual Requirements", due: "Within 90 days from the close of financial year", icon: FileBarChart },
                       { cat: "NDH-3", label: "Half-Yearly Return", due: "Within 30 days from half-year end", icon: FileCheck2 },
                       { cat: "NDH-4", label: "Nidhi Status Declaration", due: "As applicable", icon: Users },
                       { cat: "AOC-4", label: "Financial Statements", due: "Within 30 days of AGM", icon: CreditCard },
                       { cat: "MGT-7", label: "Annual Return", due: "Within 60 days of AGM", icon: BookOpen },
                       { cat: "DIR-3 KYC", label: "Director KYC", due: "Annually (as per MCA due date)", icon: Shield }
                     ]`;
content = content.replace(timelinesOrig, timelinesNew);
content = content.replace(
    'Timely filing of MCA forms is essential to avoid penalties, late fees, and compliance issues.',
    'Timely filing of Nidhi compliance is essential to avoid penalties, restrictions, and regulatory issues.'
);

// 12. Penalties
content = content.replace(
    'Non-filing or delayed MCA compliance may result in serious legal, financial, and operational consequences for your company.',
    'Non-compliance or delay in Nidhi Company filings may result in:'
);
const penaltiesOrig = `                {[
                  "Heavy penalties and late fees",
                  "Disqualification of directors",
                  "Company strike-off by ROC",
                  "Legal notices and compliance actions",
                  "Restrictions on business operations"
                ]`;
const penaltiesNew = `                {[
                  "Late fees for delayed filing",
                  "Heavy penalties from ROC",
                  "Restrictions on accepting deposits",
                  "Notices and compliance actions from authorities",
                  "Loss of Nidhi Company status",
                  "Disqualification of directors"
                ]`;
content = content.replace(penaltiesOrig, penaltiesNew);
content = content.replace(
    'Timely and accurate MCA compliance ensures smooth business operations and protects your company from legal consequences.',
    'Timely and accurate compliance is essential to avoid financial loss and ensure smooth operations of the Nidhi Company.'
);

// 13. FAQs
content = content.replace(
    'To help you better understand MCA compliance and clear common doubts, we have answered some frequently asked questions below. These provide clarity on statutory requirements, filings, and compliance procedures under the Companies Act.',
    'To help you better understand Nidhi Company compliance and clear common doubts, we have answered some frequently asked questions below. These will provide clarity on key concepts, compliance requirements, and practical aspects of Nidhi regulations.'
);

const faqsOrigRegex = /\{\[\s*\{\s*q:\s*"What is MCA Annual Compliance\?".*?\]\s*\.\s*map\(/gs;
const faqsNew = `{[
  { q: "What is Nidhi Company compliance?", a: "Nidhi Company compliance refers to fulfilling statutory requirements under the Companies Act, 2013 and Nidhi Rules, including filings, member management, and financial compliance." },
  { q: "Is compliance mandatory for all Nidhi Companies?", a: "Yes, all Nidhi Companies must comply with regulatory requirements, even if there are no major transactions." },
  { q: "What happens if Nidhi compliance is not done on time?", a: "Non-compliance may lead to penalties, restrictions on operations, and possible loss of Nidhi status." },
  { q: "What is NDH-1?", a: "NDH-1 is a return that contains details of members, deposits, and compliance with Nidhi requirements." },
  { q: "What is NDH-3?", a: "NDH-3 is a half-yearly return showing details of members, deposits, and loans." },
  { q: "What is Net Owned Fund (NOF)?", a: "NOF is the minimum capital requirement that a Nidhi Company must maintain to operate legally." },
  { q: "What is the minimum number of members required?", a: "A Nidhi Company must have at least 200 members." },
  { q: "Can a Nidhi Company accept deposits from non-members?", a: "No, Nidhi Companies can accept deposits only from their members." },
  { q: "What is NDH-4?", a: "NDH-4 is a form used to apply for declaration as a Nidhi Company." },
  { q: "What is the penalty for late compliance?", a: "Late filing attracts penalties and additional fees as per MCA rules." },
  { q: "Is audit mandatory for Nidhi Companies?", a: "Yes, annual audit of financial statements is mandatory." },
  { q: "Can compliance be revised after filing?", a: "Certain corrections can be made, but penalties may apply for delays or errors." },
  { q: "What happens if minimum requirements are not met?", a: "The company may face restrictions and may need to apply for extension or corrective measures." },
  { q: "Are directors required to complete KYC?", a: "Yes, directors must file DIR-3 KYC annually." },
  { q: "Can a Nidhi Company lose its status?", a: "Yes, continuous non-compliance can result in cancellation of Nidhi status." },
  { q: "Is annual return filing mandatory?", a: "Yes, filing of MGT-7 and AOC-4 is compulsory every year." },
  { q: "What is the deposit to NOF ratio?", a: "Nidhi Companies must maintain prescribed limits between deposits and NOF." },
  { q: "Can a Nidhi Company operate without compliance?", a: "No, non-compliance can lead to legal actions and operational restrictions." },
  { q: "How can I check compliance status?", a: "You can check the status on the MCA portal using your company details." },
  { q: "What support is available for compliance?", a: "Professional consultancy services help ensure accurate filings and full compliance." }
].map(`;
content = content.replace(faqsOrigRegex, faqsNew);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacement');
