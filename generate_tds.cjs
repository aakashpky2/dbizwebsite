const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'TDSFilingServicesPage.tsx');
let content = fs.readFileSync(path.join(__dirname, 'src', 'pages', 'MCACompliancePage.tsx'), 'utf8');

// Component name rename
content = content.replace(/MCACompliancePage/g, 'TDSFilingServicesPage');

// Hero Section
content = content.replace('MCA Annual Compliance Services', 'TDS Filing Services');
content = content.replace('Accurate, Timely & Fully Compliant ROC Filing for Companies & LLPs', 'Accurate, Timely & Fully Compliant TDS Filing for Businesses & Professionals');
content = content.replace(
    'MCA Annual Compliance is more than a statutory requirement—it is essential for maintaining your company’s legal status, avoiding penalties, and ensuring smooth business operations. Whether you are a Private Limited Company, LLP, or other registered entity, timely and accurate ROC filings are crucial to remain compliant and avoid disqualification or fines.',
    'Filing your TDS returns is more than a statutory requirement—it is essential for proper tax deduction reporting, avoiding penalties, and maintaining compliance with income tax regulations. Whether you are a business, company, or professional responsible for deducting tax at source, accurate TDS filing is crucial to avoid notices and ensure smooth operations.'
);
content = content.replace(
    'D BIZ CONSULTANCY provides expert-driven MCA compliance services ensuring accurate filing of annual returns, financial statements, and complete adherence to Companies Act requirements.',
    'D BIZ CONSULTANCY provides expert-driven TDS filing services ensuring accurate deduction reporting, timely return filing, and complete compliance with TDS provisions.'
);
content = content.replace('File Your ROC Compliance Now', 'File Your TDS Returns Now');
content = content.replace('Reliable ROC Filing', 'Reliable TDS Filing');
content = content.replace('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80');
content = content.replace('MCA Compliance Professional Services', 'TDS Filing Professional Services');

// 1. Challenges
content = content.replace(
    'Many companies and LLPs face difficulties in managing MCA compliance due to changing regulations, strict deadlines, and complex filing requirements.',
    'Many businesses and professionals face difficulties in managing TDS compliance due to complex provisions, multiple sections, and strict timelines.'
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
                { title: "Section Selection", desc: "Confusion in selecting correct TDS sections (194C, 194J, 194I, etc.)", icon: FileText },
                { title: "Calculation Errors", desc: "Errors in TDS deduction and calculation", icon: Clock },
                { title: "Return Mismatch", desc: "Mismatch between TDS returns and Form 26AS", icon: AlertTriangle },
                { title: "PAN Errors", desc: "Incorrect PAN details of deductees", icon: Scale },
                { title: "Filing Delays", desc: "Delay in TDS payment and return filing", icon: Users },
                { title: "Compliance Issues", desc: "TDS notices and compliance issues", icon: AlertTriangle }
              ]`;
content = content.replace(challengesOrig, challengesNew);
content = content.replace(
    'We simplify MCA annual compliance with expert handling, accurate filing,\n                timely submissions, and full adherence to Companies Act requirements —\n                helping your business avoid penalties, disqualification, and legal risks.',
    'We simplify TDS compliance with expert handling, ensuring accurate deduction,\n                proper reporting, and complete adherence to TDS provisions,\n                helping you avoid penalties, interest, and notices.'
);

// 2. Overview
content = content.replace('<h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">Overview</h2>', '<h2 className="text-3xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tight leading-tight">What is TDS Filing?</h2>');
content = content.replace(
    'MCA Annual Compliance is the process of filing mandatory returns and documents with the Ministry of Corporate Affairs (MCA) to ensure that a company or LLP remains legally compliant under the Companies Act, 2013 and applicable rules.',
    'TDS (Tax Deducted at Source) filing is the process of reporting tax deducted on payments such as salary, rent, professional fees, and contracts to the Income Tax Department through periodic returns.'
);
content = content.replace('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80');

const componentsOrig = `                  {[
                    { title: "Financial Statements (AOC-4)", desc: "Filing of audited balance sheets and profit & loss accounts as per MCA norms." },
                    { title: "Annual Return (MGT-7 / MGT-7A)", desc: "Mandatory filing of annual returns containing ownership and director details." },
                    { title: "Director KYC", desc: "DIR-3 KYC Web filing once in 3 years as per latest MCA update for all DIN holders." },
                    { title: "Statutory Registers", desc: "Maintenance of mandatory statutory registers and corporate records as per law." },
                    { title: "Statutory Meetings", desc: "Conducting Board Meetings and Annual General Meeting (AGM) as per statutory timelines." }
                  ]`;
const componentsNew = `                  {[
                    { title: "Payment Details", desc: "Details of payments made to deductees" },
                    { title: "TDS Deposited", desc: "TDS deducted and deposited with the government" },
                    { title: "Deductee PAN", desc: "PAN details of deductees" },
                    { title: "Challan Records", desc: "Challan details of TDS payment" },
                    { title: "Quarterly Returns", desc: "Quarterly TDS return filing (24Q, 26Q, etc.)" }
                  ]`;
content = content.replace(componentsOrig, componentsNew);

content = content.replace('Importance of MCA Compliance', 'Importance of TDS Filing');
const importanceOrig = `                  {[
                    "Ensures legal compliance under Companies Act",
                    "Avoids penalties, fines, and disqualification",
                    "Maintains active company status",
                    "Builds credibility with banks & investors",
                    "Ensures transparency and governance"
                  ]`;
const importanceNew = `                  {[
                    "Ensures compliance with income tax laws",
                    "Avoids penalties, interest, and notices",
                    "Enables deductees to claim tax credit",
                    "Maintains proper financial and tax records",
                    "Builds credibility and transparency in business operation"
                  ]`;
content = content.replace(importanceOrig, importanceNew);

// 3. Applicability
content = content.replace(
    'To ensure proper compliance, it is important to identify entities required to file MCA returns. The table below outlines the categories and their applicability.',
    'To ensure proper compliance with TDS provisions, it is important to identify whether you are required to deduct and file TDS returns. The table below provides a clear understanding of categories responsible for TDS deduction and filing.'
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
                  { cat: "Employers", app: "Deducting TDS on salary payments" },
                  { cat: "Businesses & Professionals", app: "Deducting TDS on payments (contract, rent, fees, etc.)" },
                  { cat: "Companies & LLPs", app: "Mandatory TDS compliance" },
                  { cat: "Partnership Firms", app: "Required to deduct and file TDS" },
                  { cat: "Individuals (Audit Cases)", app: "Mandatory if liable under tax audit" },
                  { cat: "Government Bodies", app: "TDS deduction and filing required" },
                  { cat: "E-commerce Operators", app: "Applicable in specified cases" }
                ]`;
content = content.replace(applicabilityOrig, applicabilityNew);
content = content.replace(
    '* All registered companies and LLPs must comply with MCA filing requirements annually, even if there is no business activity.',
    '* All entities responsible for deducting tax at source must file TDS returns within prescribed timelines.'
);

// 4. Statutory Forms
content = content.replace('Which MCA Forms Apply to You?', 'Which TDS Return Applies to You?');
content = content.replace(
    'Identify the correct ROC forms for your company. Hover over each card to see the specific filing applicability and purpose.',
    'Selecting the correct TDS return is essential for accurate reporting and compliance. The table below outlines different TDS returns and their applicability.'
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
                { task: "Form 24Q", desc: "TDS on salary payments" },
                { task: "Form 26Q", desc: "TDS on non-salary payments (contract, professional fees, etc.)" },
                { task: "Form 27Q", desc: "TDS on payments to NRIs" },
                { task: "Form 27EQ", desc: "TCS (Tax Collected at Source) returns" }
              ]`;
content = content.replace(formsOrig, formsNew);
content = content.replace(
    'Choosing the correct forms and filing them accurately is essential to avoid penalties, notices, and compliance issues.',
    'Choosing the correct TDS return and filing it accurately is essential to avoid penalties, notices, and compliance issues.'
);

// 5. Full Coverage
content = content.replace('<h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Filing Services</h2>', '<h2 className="text-4xl md:text-5xl font-black text-dbiz-navy mb-8 tracking-tighter leading-tight">Payments Covered under TDS Filing</h2>');
content = content.replace(
    'We handle all aspects of MCA annual compliance with proper classification and adherence to the Companies Act requirements.',
    'We handle all types of payments liable for TDS with proper classification and compliance as per income tax regulations: This comprehensive coverage ensures accurate TDS deduction, proper reporting, and full compliance with TDS provisions.'
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
                  { title: "Salary Payments", desc: "Salary payments (Section 192)", icon: FileBarChart, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80" },
                  { title: "Contract Payments", desc: "Contract payments (Section 194C)", icon: FileText, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" },
                  { title: "Professional Fees", desc: "Professional & technical fees (Section 194J)", icon: UserPlus, img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=600&q=80" },
                  { title: "Rent Payments", desc: "Rent payments (Section 194I)", icon: Calendar, img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80" },
                  { title: "Interest Payments", desc: "Interest payments (Section 194A)", icon: BookOpen, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
                  { title: "Commission/Brokerage", desc: "Commission & brokerage (Section 194H)", icon: ClipboardCheck, img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=600&q=80" },
                  { title: "Purchase of Goods", desc: "Purchase of goods (Section 194Q)", icon: Zap, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
                  { title: "Payments to NRIs", desc: "Payments to Non-Residents (NRI)", icon: RefreshCw, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80" }
                ]`;
content = content.replace(coverageOrig, coverageNew);

// 6. Our Advantage
content = content.replace(
    'D BIZ CONSULTANCY has experienced professionals who handle MCA compliance with accuracy and efficiency. We ensure proper filing of ROC forms, reducing the risk of penalties, late fees, and legal complications.',
    'D BIZ CONSULTANCY has experienced professionals who handle TDS compliance with accuracy and efficiency. We ensure correct deduction, timely filing, and full compliance with TDS provisions, reducing the risk of errors, penalties, and notices.'
);
content = content.replace(
    'Our approach focuses on precise documentation, correct filing, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.',
    'Our approach focuses on precise deduction, proper reporting, and complete transparency in pricing. There are no hidden charges, and every service is delivered with clarity and reliability.'
);
content = content.replace(
    'We follow a structured workflow to ensure timely compliance within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free MCA compliance experience.',
    'We follow an efficient process to ensure fast turnaround within deadlines. With dedicated support at every stage, we provide a smooth, reliable, and hassle-free TDS filing experience.'
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
                   title: "TDS Analysis & Structuring",
                   points: ["Identify applicable TDS sections", "Proper classification of payments"],
                   icon: Search
                 },
                 {
                   title: "TDS Calculation & Compliance",
                   points: ["Accurate TDS deduction", "Ensure correct rates and applicability", "Timely tax deposit"],
                   icon: Activity
                 },
                 {
                   title: "Data Reconciliation",
                   points: ["Form 26AS verification", "Challan matching", "Deductee data validation"],
                   icon: FileCheck2
                 },
                 {
                   title: "TDS Return Preparation & Filing",
                   points: ["Selection of correct TDS return (24Q, 26Q, etc.)", "Preparation of quarterly returns", "Filing on income tax portal"],
                   icon: Send
                 },
                 {
                   title: "Post-Filing Support",
                   points: ["TDS return status tracking", "Correction statements", "Ongoing compliance support"],
                   icon: RefreshCw
                 },
                 {
                   title: "Notice Handling & Compliance",
                   points: ["TDS notices response", "Default and demand resolution", "Rectification and compliance support"],
                   icon: MessageCircle
                 }
               ]`;
content = content.replace(advantageOrig, advantageNew);

// 7. Advanced Support
content = content.replace('Advanced & Specialized MCA Compliance Services', 'Advanced & Specialized TDS Filing Services');
content = content.replace(
    'We provide expert support for complex corporate compliance requirements, ensuring complete legal adherence and smooth operations.',
    'In addition to regular TDS compliance, we provide advanced services to handle complex requirements and ensure accurate reporting. These services help businesses manage corrections, planning, and specialized TDS scenarios efficiently.'
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
                 { title: "Belated TDS Returns", desc: "Belated TDS Return Filing", icon: History },
                 { title: "Revised TDS Returns", desc: "Revised TDS Return & Correction Statements", icon: RefreshCw },
                 { title: "TDS Planning", desc: "TDS Liability Calculation & Compliance Planning", icon: Activity },
                 { title: "26AS Recon", desc: "TDS Reconciliation with Form 26AS", icon: Zap },
                 { title: "Challan Correction", desc: "Challan Correction & PAN Correction Support", icon: FileCheck2 },
                 { title: "Lower TDS Assist", desc: "Lower / Nil TDS Certificate Assistance", icon: Layers },
                 { title: "Complex Deals", desc: "Handling Complex Transactions (NRI payments, high-value contracts)", icon: Shield },
                 { title: "Compliance Consult", desc: "TDS Advisory & Compliance Support for Businesses", icon: Users }
               ]`;
content = content.replace(advancedOrig, advancedNew);

// 8. Workflow
content = content.replace(
    'We follow a structured and systematic approach to ensure accurate filing and smooth corporate management.',
    'We follow a structured and systematic approach to ensure accurate TDS deduction, timely filing, and complete compliance with applicable provisions. Each stage is carefully managed to minimize errors and avoid penalties.'
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
                  { stage: "Stage 1", title: "Client Onboarding & Data Collection", color: "bg-blue-500", items: ["Understand business profile and nature of payments", "Collect PAN, TAN, deductor details, and financial data", "Gather payment records, challans, and deductee details"] },
                  { stage: "Stage 2", title: "Data Evaluation & Validation", color: "bg-purple-500", items: ["Analyze all payments liable for TDS", "Verify PAN details of deductees", "Reconcile with challans and Form 26AS"] },
                  { stage: "Stage 3", title: "TDS Computation & Compliance", color: "bg-indigo-500", items: ["Calculate TDS as per applicable sections and rates", "Ensure correct deduction and timely deposit", "Verify compliance with TDS provisions"] },
                  { stage: "Stage 4", title: "Return Preparation & Review", color: "bg-cyan-500", items: ["Select correct TDS return (24Q, 26Q, etc.)", "Prepare quarterly TDS return", "Share summary with client for review and approval"] },
                  { stage: "Stage 5", title: "Filing & Submission", color: "bg-dbiz-teal", items: ["File TDS returns on income tax portal", "Ensure timely submission within due dates", "Generate acknowledgment and filing reports"] },
                  { stage: "Stage 6", title: "Post-Filing Monitoring", color: "bg-emerald-500", items: ["Track return status and defaults", "Handle notices, corrections, or mismatches", "Provide ongoing TDS compliance support"] }
                ]`;
content = content.replace(workflowOrig, workflowNew);

// 9. Documents
content = content.replace(
    'To ensure accurate MCA filing and smooth compliance, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and filing of ROC returns.',
    'To ensure smooth and accurate TDS filing, it is important to maintain proper records and provide complete documentation. The following details are required for efficient preparation and compliance.'
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
                   items: ["PAN & TAN of deductor", "GSTIN (if applicable)", "Bank statements"]
                 },
                 {
                   title: "Payment Documents",
                   icon: FileBarChart,
                   image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=50",
                   items: ["Salary details (for Form 24Q)", "Payment records (contract, rent, professional fees, etc.)", "Deductee details with PAN"]
                 },
                 {
                   title: "Tax Documents",
                   icon: FileCheck2,
                   image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=50",
                   items: ["TDS challans (payment proof)", "Form 26AS", "Previous TDS returns"]
                 },
                 {
                   title: "Additional Details",
                   icon: AlertCircle,
                   image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=50",
                   items: ["Interest or late fee details (if any)", "Correction data (if applicable)", "Exemption certificates"]
                 }
               ]`;
content = content.replace(docsOrig, docsNew);
content = content.replace(
    'This ensures accurate ROC filing, proper documentation, and full compliance with the Companies Act.',
    'Providing accurate documents helps ensure proper TDS deduction, timely filing, and full compliance.'
);

// 10. Benefits
content = content.replace(
    'Professional MCA compliance ensures smooth corporate functioning and helps companies avoid legal risks and penalties.',
    'Professional TDS filing ensures accuracy, timely compliance, and smooth management of tax deductions. It helps businesses avoid risks while maintaining proper financial and statutory records.'
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
                   title: "Accurate TDS calculation and deduction",
                   desc: "Ensures correct application of TDS rates and sections on various payments, reducing errors and compliance issues.",
                   icon: FileCheck2
                 },
                 {
                   title: "Timely filing of TDS returns",
                   desc: "Guarantees that quarterly returns are filed within due dates, avoiding delays and associated penalties.",
                   icon: Clock
                 },
                 {
                   title: "Avoid penalties, interest, and notices",
                   desc: "Minimizes the risk of late fees, interest on delayed payments, and notices from the Income Tax Department.",
                   icon: AlertTriangle
                 },
                 {
                   title: "Proper credit to deductees",
                   desc: "Ensures that deducted tax is correctly reflected in Form 26AS, allowing deductees to claim their tax credit without issues.",
                   icon: Award
                 },
                 {
                   title: "Smooth compliance with tax laws",
                   desc: "Maintains proper documentation and adherence to TDS provisions, ensuring hassle-free compliance.",
                   icon: Shield
                 },
                 {
                   title: "Improved financial credibility",
                   desc: "Builds trust with stakeholders and supports smooth audits, financial assessments, and business operations.",
                   icon: Building2
                 }
               ]`;
content = content.replace(benefitsOrig, benefitsNew);

// 11. Timelines
content = content.replace(
    'To ensure smooth compliance and avoid penalties, it is important to be aware of key MCA filing deadlines.',
    'To ensure smooth compliance and avoid penalties, it is important to be aware of the due dates for TDS return filing. The table below provides a clear overview of quarterly deadlines applicable to different periods.'
);
const timelinesOrig = `                     {[
                       { cat: "AOC-4", label: "Financial Statements", due: "Within 30 days of AGM", icon: FileBarChart },
                       { cat: "MGT-7 / 7A", label: "Annual Return", due: "Within 60 days of AGM", icon: FileCheck2 },
                       { cat: "DIR-3 KYC", label: "Annual KYC Update", due: "30th September", icon: Users },
                       { cat: "DPT-3", label: "Return of Deposits", due: "30th June", icon: CreditCard }
                     ]`;
const timelinesNew = `                     {[
                       { cat: "Q1 (Apr–Jun)", label: "Quarterly TDS Return", due: "31st July", icon: FileBarChart },
                       { cat: "Q2 (Jul–Sep)", label: "Quarterly TDS Return", due: "31st October", icon: FileCheck2 },
                       { cat: "Q3 (Oct–Dec)", label: "Quarterly TDS Return", due: "31st January", icon: Clock },
                       { cat: "Q4 (Jan–Mar)", label: "Quarterly TDS Return", due: "31st May", icon: Calendar }
                     ]`;
content = content.replace(timelinesOrig, timelinesNew);
content = content.replace("Mandatory annual filing for {item.label.toLowerCase()} under the Companies Act.", "Mandatory filing for {item.label.toLowerCase()} under Income tax provisions.");
content = content.replace(
    'Timely filing of MCA forms is essential to avoid penalties, late fees, and compliance issues.',
    'Timely filing of TDS returns is essential to avoid late fees, interest, and compliance issues while ensuring proper credit to deductees.'
);

// 12. Penalties
content = content.replace(
    'Non-filing or delayed MCA compliance may result in serious legal, financial, and operational consequences for your company.',
    'Non-filing or late filing may result in financial and legal consequences.'
);
const penaltiesOrig = `                {[
                  "Heavy penalties and late fees",
                  "Disqualification of directors",
                  "Company strike-off by ROC",
                  "Legal notices and compliance actions",
                  "Restrictions on business operations"
                ]`;
const penaltiesNew = `                {[
                  "Late filing fees under Section 234E",
                  "Interest on delayed deduction or payment",
                  "TDS notices and demand",
                  "Disallowance of expenses",
                  "Legal consequences and compliance issues"
                ]`;
content = content.replace(penaltiesOrig, penaltiesNew);
content = content.replace(
    'Timely and accurate MCA compliance ensures smooth business operations and protects your company from legal consequences.',
    'Ensuring timely and accurate TDS filing helps avoid financial and legal risks.'
);

// 13. FAQs
content = content.replace(
    'To help you better understand MCA compliance and clear common doubts, we have answered some frequently asked questions below. These provide clarity on statutory requirements, filings, and compliance procedures under the Companies Act.',
    'To help you understand TDS filing and clarify common queries, we have listed some frequently asked questions below. These answers provide practical insights into TDS concepts, compliance requirements, and filing procedures.'
);

const faqsOrigRegex = /\{\[\s*\{\s*q:\s*"What is MCA Annual Compliance\?".*?\]\s*\.\s*map\(/gs;
const faqsNew = `{[
  { q: "What is TDS?", a: "TDS (Tax Deducted at Source) is tax deducted while making specified payments such as salary, rent, or professional fees." },
  { q: "Who is required to deduct TDS?", a: "Any person or entity making specified payments as per income tax provisions must deduct TDS." },
  { q: "What is TAN and is it mandatory?", a: "TAN (Tax Deduction Account Number) is mandatory for deducting and filing TDS returns." },
  { q: "What happens if TDS is not deducted?", a: "Failure to deduct TDS may result in penalties, interest, and disallowance of expenses." },
  { q: "What is Form 24Q?", a: "Form 24Q is a TDS return filed for salary payments." },
  { q: "What is Form 26Q?", a: "Form 26Q is used for TDS on non-salary payments like contracts, rent, and professional fees." },
  { q: "What is Form 27Q?", a: "Form 27Q is applicable for TDS on payments made to non-residents (NRIs)." },
  { q: "When should TDS be deposited?", a: "TDS must be deposited on or before the 7th of the following month (with some exceptions)." },
  { q: "Can TDS returns be revised?", a: "Yes, TDS returns can be revised to correct errors or update details." },
  { q: "What is Form 26AS in TDS?", a: "Form 26AS shows TDS deducted and deposited against your PAN." },
  { q: "What is a TDS challan?", a: "A TDS challan is proof of tax deposited with the government." },
  { q: "What is late fee under TDS?", a: "Late filing attracts a fee under Section 234E for delay in filing returns." },
  { q: "What is interest on TDS?", a: "Interest is charged for late deduction or late payment of TDS." },
  { q: "Can TDS be filed without PAN of deductee?", a: "TDS can be deducted, but higher rates apply if PAN is not available." },
  { q: "What is a correction return?", a: "It is a revised TDS return filed to correct errors in previously filed returns." },
  { q: "What happens if wrong TDS is deducted?", a: "It can be corrected through revised returns or adjustments." },
  { q: "Is TDS applicable on all payments?", a: "No, only specified payments under the Income Tax Act are subject to TDS." },
  { q: "Can individuals deduct TDS?", a: "Yes, in certain cases like property purchase or if liable under tax audit." },
  { q: "What is Form 16/16A?", a: "These are TDS certificates issued to deductees for tax deducted." },
  { q: "How can I check TDS status?", a: "TDS status can be checked through Form 26AS or the TRACES portal." }
].map(`;
content = content.replace(faqsOrigRegex, faqsNew);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacement');
