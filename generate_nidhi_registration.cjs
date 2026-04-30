const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'pages', 'PublicLimitedPage.tsx');
const destPath = path.join(__dirname, 'src', 'pages', 'NidhiCompanyPage.tsx');

let content = fs.readFileSync(srcPath, 'utf8');

// Rename component
content = content.replace(/PublicLimitedPage/g, 'NidhiCompanyPage');
content = content.replace(/Public Limited Company Registration/g, 'Nidhi Company Registration');
content = content.replace(/D BIZ CONSULTANCY provides complete Public Limited Company registration services/g, 'D BIZ CONSULTANCY provides complete Nidhi Company registration services');
content = content.replace(/Our expert team ensures a smooth and compliant process from incorporation to public issue readiness/g, 'Our expert team ensures a smooth and compliant process from incorporation to regulatory compliance support');
content = content.replace(/Public Company/g, 'Nidhi Company');
content = content.replace(/Public Limited Company/g, 'Nidhi Company');

// Definition section
content = content.replace(/What Is a Public Limited Company\?/g, 'What Is a Nidhi Company?');

content = content.replace(/A Public Limited Company is a business entity where shares are offered to the general public/g, 'A Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under Section 406 of the Companies Act, 2013, primarily formed to cultivate the habit of thrift and savings among its members');
content = content.replace(/and it is governed by the Companies Act, 2013/g, '. It functions on the principle of mutual benefit, where members can deposit and borrow funds within the company');

content = content.replace(/This structure is ideal for large-scale businesses that require massive capital infusion/g, 'This business structure is regulated by the Ministry of Corporate Affairs (MCA) and governed by the Nidhi Rules, 2014. It is widely used for community-based financial activities due to its simple compliance structure and member-centric operations');
content = content.replace(/It offers limited liability protection to its shareholders, meaning their personal assets are safe from business debts/g, 'A Nidhi Company can only deal with its members and cannot engage in external lending, making it a secure and controlled financial model. It enjoys perpetual succession and can own property, enter contracts, and operate as a separate legal entity');

// Requirements
content = content.replace(/3 Directors/g, 'TEMP_DIR');
content = content.replace(/7 Shareholders/g, '7 Shareholders');
content = content.replace(/₹5,00,000 Capital/g, '₹5,00,000 Capital');
content = content.replace(/Unlimited Members/g, '200 Members (Post Incorporation Requirement)');

content = content.replace(/Minimum three directors are required to incorporate a Public Limited Company/g, 'Minimum three directors are required to incorporate a Nidhi Company');
content = content.replace(/Minimum seven shareholders required at the time of incorporation/g, 'Minimum seven members required at the time of incorporation');
content = content.replace(/Minimum paid-up equity share capital requirement/g, 'Minimum paid-up equity share capital requirement');
content = content.replace(/There is no limit on the maximum number of shareholders/g, 'Must achieve at least 200 members within one year of incorporation');
content = content.replace(/TEMP_DIR/g, '3 Directors');

// Definition points
content = content.replace(/Section 2\(71\) of the Companies Act, 2013/g, 'Section 406 of the Companies Act, 2013');
content = content.replace(/Public Subscription/g, 'Encourages Savings Among Members');
content = content.replace(/Can offer shares and debentures to the public/g, 'Promotes thrift and financial discipline within its members');
content = content.replace(/Free Transferability of Shares/g, 'Operates on Mutual Benefit Principle');
content = content.replace(/Shares can be easily transferred without restrictions/g, 'Members are both contributors and beneficiaries');
content = content.replace(/Stringent Compliance/g, 'Restricts Business to Members Only');
content = content.replace(/Subject to stricter regulatory monitoring by MCA and SEBI/g, 'Deposits and loans are allowed only between members');
content = content.replace(/No Limit on Members/g, 'Regulated by Nidhi Rules, 2014');
content = content.replace(/Can have unlimited shareholders driving massive scale/g, 'Must comply with specific rules relating to deposits, loans, and governance');

// Features
const oldFeature1 = `{ title: "Limited Liability", desc: "Shareholders' liability is limited to the unpaid amount on shares held, ensuring personal assets remain protected from the company's financial obligations." }`;
const newFeature1 = `{ title: "Limited Liability", desc: "Members’ liability is limited to the unpaid amount on shares held, ensuring personal assets remain protected from the company’s financial obligations." }`;
content = content.replace(oldFeature1, newFeature1);

const oldFeature2 = `{ title: "Separate Legal Entity", desc: "A Public Company is a distinct legal entity from its shareholders, capable of owning property, entering into contracts, and suing or being sued in its own name." }`;
const newFeature2 = `{ title: "Separate Legal Entity", desc: "A Nidhi Company is a distinct legal entity from its members, capable of owning property, entering into contracts, and suing or being sued in its own name." }`;
content = content.replace(oldFeature2, newFeature2);

const oldFeature3 = `{ title: "Large Capital Access", desc: "Can raise vast amounts of capital from the public through IPOs, facilitating massive expansion, research, and global growth." }`;
const newFeature3 = `{ title: "Member-Based Operations", desc: "A minimum of 7 members is required at incorporation, and the company must achieve at least 200 members within one year, promoting community-based financial activities." }`;
content = content.replace(oldFeature3, newFeature3);

const oldFeature4 = `{ title: "Free Transferability", desc: "Shares of a public company can be freely transferred by shareholders without requiring consent from other members, offering high liquidity." }`;
const newFeature4 = `{ title: "Minimum Capital Requirement", desc: "Requires a minimum paid-up equity share capital of ₹5,00,000 to ensure financial stability and compliance with regulatory norms." }`;
content = content.replace(oldFeature4, newFeature4);

const oldFeature5 = `{ title: "Public Confidence", desc: "Maintains high credibility and trust among investors, banks, and stakeholders due to strict transparency and regulatory compliance." }`;
const newFeature5 = `{ title: "Restricted Business Activities", desc: "Can only accept deposits from and lend to its members, ensuring controlled and low-risk financial operations." }`;
content = content.replace(oldFeature5, newFeature5);

const oldFeature6 = `{ title: "Perpetual Succession", desc: "The company continues to exist irrespective of changes in shareholders, ensuring long-term sustainability and continuity." }`;
const newFeature6 = `{ title: "Perpetual Succession", desc: "The company continues to exist irrespective of changes in membership, ensuring long-term sustainability and continuity." }`;
content = content.replace(oldFeature6, newFeature6);

// Benefits replacing logic
const oldBenefitsArr = `[
                "Ability to raise massive capital by issuing shares to the general public",
                "Enhanced credibility and trust among investors, banks, and global stakeholders",
                "Perpetual succession ensuring continuity of the company regardless of ownership changes",
                "High liquidity for investors due to free transferability of shares",
                "Limited liability protection shielding personal assets of shareholders",
                "Better opportunities for scaling, acquisitions, and huge corporate structuring",
                "Separate legal entity status allowing the company to own assets independently",
                "Easier exit routes for early investors through public markets",
                "Attracts top talent by offering Employee Stock Ownership Plans (ESOPs) linked to public valuation"
              ]`;
const newBenefitsArr = `[
                "Promotes savings and borrowing within members, supporting mutual financial growth and stability",
                "Enhanced credibility and trust among members through a regulated and legally recognized business structure",
                "Perpetual succession ensuring continuity of the company regardless of changes in members or directors",
                "Easier access to internal funding through member deposits and structured lending within the company",
                "Simple compliance framework compared to other financial entities, making management more practical and controlled",
                "Ownership and management structure that supports community-based participation and regulated operations",
                "Separate legal entity status allowing the company to own assets and enter contracts independently",
                "Professional and organized financial structure suitable for long-term member-focused operations",
                "Better community financial support by providing secured savings and lending opportunities exclusively to members"
              ]`;
content = content.replace(oldBenefitsArr, newBenefitsArr);
content = content.replace('Benefits of a Public Limited Company', 'Benefits of a Nidhi Company');

// Comparison
const oldComp = `[
                  ['Feature', 'Public Limited Company', 'Private Limited Company', 'LLP', 'One Person Company'],
                  ['Purpose', 'Large scale business & public funding', 'Private business operations', 'Professional or business partnership', 'Sole entrepreneurship'],
                  ['Liability', 'Limited to shares', 'Limited to shares', 'Limited to contribution', 'Limited to shares'],
                  ['Legal Entity', 'Separate entity', 'Separate entity', 'Separate entity', 'Separate entity'],
                  ['Ownership', 'Minimum 7 shareholders', '2–200 shareholders', '2+ partners', 'Single owner'],
                  ['Capital Access', 'High (Public offerings)', 'Medium (Private funding)', 'Partner contributions', 'Owner contribution'],
                  ['Transfer of Shares', 'Freely transferable', 'Restricted', 'Subject to LLP agreement', 'Restricted'],
                  ['Regulation', 'Companies Act & SEBI', 'Companies Act, 2013', 'LLP Act, 2008', 'Companies Act, 2013'],
                  ['Compliance', 'Highest (Statutory & SEBI)', 'Moderate-High', 'Moderate', 'Standard']
                ]`;
const newComp = `[
                  ['Feature', 'Nidhi Company', 'Private Limited Company', 'LLP', 'Cooperative Society'],
                  ['Purpose', 'Member-based savings and lending', 'General business activities', 'Professional or business partnership', 'Member welfare and cooperative activities'],
                  ['Liability', 'Limited to shares', 'Limited to shares', 'Limited to contribution', 'Limited in most cases'],
                  ['Legal Entity', 'Separate entity', 'Separate entity', 'Separate entity', 'Separate entity'],
                  ['Ownership', 'Minimum 7 members', '2–200 shareholders', '2+ partners', 'Minimum members as per applicable law'],
                  ['Capital Requirement', 'Minimum ₹5,00,000 paid-up capital', 'No statutory minimum capital', 'No minimum capital', 'Varies by state law'],
                  ['Business Restriction', 'Can deal only with members', 'Can do general business', 'Can do general business', 'Limited to cooperative objectives'],
                  ['Regulation', 'Companies Act, 2013 and Nidhi Rules, 2014', 'Companies Act, 2013', 'LLP Act, 2008', 'State / Multi-State Cooperative Societies Act'],
                  ['Compliance', 'Moderate to high compliance', 'Higher statutory compliance', 'Moderate compliance', 'Moderate to high depending on law'],
                  ['Best For', 'Mutual benefit financial activities among members', 'Startups and scalable businesses', 'Small businesses and professionals', 'Community welfare and cooperative purposes']
                ]`;
content = content.replace(oldComp, newComp);
content = content.replace('Understand why Public Limited Company is often preferred for massive scale', 'Understand why Nidhi Company is often preferred for member-based financial activities');

// Documents
content = content.replace('For Public Limited Registration', 'For Nidhi Company Registration');
content = content.replace('Additional Public Company Requirements', 'Additional Nidhi-Specific Requirements');
content = content.replace('Minimum 7 Shareholders and 3 Directors Details', 'Minimum 7 Members and 3 Directors Details');

// Process
content = content.replace('Step-by-Step Public Limited Company Registration Process', 'Step-by-Step Nidhi Company Registration Process');
content = content.replace('A Public Limited Company is formed for large-scale operations and public funding', 'A Nidhi Company is formed to promote savings and mutual financial support among members');

const oldProcDesc2 = `Reserve the company name through SPICe+ Part A ensuring it reflects public corporate identity and complies with MCA naming guidelines.`;
const newProcDesc2 = `Reserve the company name through SPICe+ Part A ensuring it reflects Nidhi-related activities such as savings and mutual benefit, and complies with MCA naming guidelines.`;
content = content.replace(oldProcDesc2, newProcDesc2);

const oldProcDesc4 = `Prepare the Memorandum of Association (MOA) detailing wide business objectives, and Articles of Association (AOA) containing public company regulations, and file them with MCA.`;
const newProcDesc4 = `Prepare the Memorandum of Association (MOA) clearly stating Nidhi objectives such as thrift and savings, and Articles of Association (AOA) defining internal rules and governance, and file them with MCA.`;
content = content.replace(oldProcDesc4, newProcDesc4);

const oldProcDesc7 = `Subscribers must deposit the initial paid-up equity share capital into the company’s bank account as per the MOA requirements.`;
const newProcDesc7 = `Subscribers must deposit the minimum paid-up equity share capital of ₹5,00,000 into the company’s bank account as per the MOA requirements.`;
content = content.replace(oldProcDesc7, newProcDesc7);

const oldProcDesc9 = `Ensure compliance with public issue regulations if opting for an IPO, appoint key managerial personnel, and list shares on stock exchanges to invite public capital.`;
const newProcDesc9 = `File Form NDH-4 with the Registrar of Companies to declare the company as a Nidhi Company and ensure compliance with applicable rules.`;
content = content.replace(oldProcDesc9, newProcDesc9);
content = content.replace('Prepare for Public Issue or Allotment', 'Apply for Nidhi Status (NDH-4, if applicable)');

const oldProcDesc10 = `Adhere to strict listing regulations, quarterly financial disclosures, board governance, and shareholder communications as mandated by MCA and SEBI.`;
const newProcDesc10 = `Ensure compliance with Nidhi Rules by achieving at least 200 members, maintaining Net Owned Funds (NOF) of ₹10 lakhs, and filing NDH-1 and NDH-3 forms within prescribed timelines.`;
content = content.replace(oldProcDesc10, newProcDesc10);
content = content.replace('Ongoing Public & SEBI Compliance', 'Post-Incorporation Nidhi Compliance (Within 1 Year)');

// Compliance Table
content = content.replace('Mandatory MCA & SEBI Compliance for Public Limited Companies', 'Mandatory MCA Compliance for Nidhi Companies');
content = content.replace('Incorporating a Public Limited Company is only the first step; maintaining ongoing compliance with the Ministry of Corporate Affairs (MCA) and potentially SEBI is essential', 'Incorporating a Nidhi Company is only the first step; maintaining ongoing compliance with the Ministry of Corporate Affairs (MCA) and the applicable Nidhi Rules is essential');
const compRowOld1 = `{ req: "Annual Return Filing (MGT-7)", freq: "Within 60 days of AGM", imp: "Keeps ROC records updated and avoids additional fees and penalties." },`;
const compRowOld2 = `{ req: "SEBI LODR Regulations (If Listed)", freq: "Quarterly / Annually", imp: "Mandatory compliance for listed public companies for market transparency." }`;
const compRowNew1 = `{ req: "Annual Return Filing (MGT-7)", freq: "Within 60 days of AGM", imp: "Keeps ROC records updated and avoids additional fees and penalties." },
                      { req: "NDH-1 Filing", freq: "Annually / as prescribed", imp: "Confirms compliance with Nidhi norms and member-related thresholds." },
                      { req: "NDH-3 Filing", freq: "Half-yearly", imp: "Helps monitor whether the Nidhi Company is operating within the permitted regulatory framework." },
                      { req: "NDH-4 Filing (if applicable)", freq: "As prescribed", imp: "Supports recognition and regularization of Nidhi status where required." },
                      { req: "Member and Net Owned Funds Compliance", freq: "Ongoing", imp: "Core regulatory requirement for continued operation as a Nidhi Company." }`;
content = content.replace(compRowOld1 + '\n                      ' + compRowOld2, compRowNew1);

content = content.replace('Public Company Compliance Focus Areas', 'Nidhi Company Compliance Focus Areas');
content = content.replace('A Public Limited Company must give special attention to robust financial reporting, structured board meetings, independent directors, and high statutory transparency, since these are core compliance checkpoints for public entities.', 'A Nidhi Company must give special attention to member count, Net Owned Funds, deposit-to-NOF ratio, unencumbered term deposits, and member-only lending and deposit activities, since these are core compliance checkpoints specific to Nidhi entities.');

const timelineOld = `                      { title: "Annual Cycle", desc: "Audit → AGM → AOC-4 (30 days) → MGT-7 (60 days)" },
                      { title: "Ongoing", desc: "Maintain directors, statutory registers, and SEBI disclosures if listed" }`;
const timelineNew = `                      { title: "Half-Yearly", desc: "NDH-3 Filing" },
                      { title: "Annual Cycle", desc: "Audit → AGM → AOC-4 (30 days) → MGT-7 (60 days) → NDH-1" },
                      { title: "Ongoing", desc: "Maintain required members, Net Owned Funds, and prescribed Nidhi ratios" }`;
content = content.replace(timelineOld, timelineNew);

// Why D BIZ Handles
content = content.replace('Why D BIZ CONSULTANCY for Public Limited Company Registration?', 'Why D BIZ CONSULTANCY for Nidhi Company Registration?');
content = content.replace('Registering a Public Limited Company requires careful structuring', 'Registering a Nidhi Company requires careful structuring, compliance with Nidhi Rules, and ongoing monitoring of member-based financial activities, which can be complex without expert guidance.');
content = content.replace('Company name selection aligned with Public company guidelines', 'Company name selection aligned with Nidhi guidelines');
content = content.replace('Object clause drafting focused on large scale operations', 'Object clause drafting focused on thrift and mutual benefit');
content = content.replace('Post-incorporation framework planning for public operations', 'Post-incorporation compliance setup');
content = content.replace('Capital contribution details (No statutory minimum, but practically sufficient)', 'Capital contribution details (minimum ₹5,00,000)');
content = content.replace('Initial shareholder details (minimum 7 shareholders)', 'Initial member details (minimum 7 members)');

// FAQs
content = content.replace('FAQs on Public Limited Company Registration', 'FAQs on Nidhi Company Registration');

const faqsOldRegex = /const faqs = \[.*\];/s;
const faqsNewArr = `const faqs = [
    { question: "What is a Nidhi Company?", answer: "A Nidhi Company is a type of NBFC formed to promote savings and lending among its members on a mutual benefit basis." },
    { question: "Under which law is a Nidhi Company governed?", answer: "It is governed by the Companies Act, 2013 and regulated under the Nidhi Rules, 2014." },
    { question: "What is the minimum requirement to start a Nidhi Company?", answer: "A minimum of 3 directors, 7 members, and ₹5,00,000 paid-up capital is required." },
    { question: "Is RBI approval required for a Nidhi Company?", answer: "No, RBI approval is not required, but the company must comply with MCA and Nidhi Rules." },
    { question: "Can a Nidhi Company deal with non-members?", answer: "No, all deposits and lending activities must be strictly limited to members only." },
    { question: "What is the minimum number of members required after incorporation?", answer: "A Nidhi Company must have at least 200 members within one year of incorporation." },
    { question: "What is Net Owned Funds (NOF) requirement?", answer: "The company must maintain a minimum Net Owned Fund of ₹10 lakhs as per Nidhi Rules." },
    { question: "What forms are required for Nidhi compliance?", answer: "NDH-1, NDH-3, and in certain cases NDH-4 are required for regulatory compliance." },
    { question: "What is NDH-1 filing?", answer: "NDH-1 is an annual return confirming compliance with member count, deposits, and NOF requirements." },
    { question: "What is NDH-3 filing?", answer: "NDH-3 is a half-yearly return containing details of members, deposits, and loans." },
    { question: "Can a Nidhi Company issue loans?", answer: "Yes, but only to its registered members and within prescribed limits." },
    { question: "What are the restrictions on Nidhi Companies?", answer: "They cannot engage in chit funds, leasing, hire purchase, insurance, or trading activities." },
    { question: "Is audit mandatory for Nidhi Company?", answer: "Yes, statutory audit is mandatory every year under the Companies Act, 2013." },
    { question: "Can a Nidhi Company open branches?", answer: "Yes, but only after meeting prescribed conditions and compliance requirements." },
    { question: "What happens if compliance requirements are not met?", answer: "Non-compliance may lead to penalties, restrictions, or loss of Nidhi status by ROC." }
  ];`;
content = content.replace(faqsOldRegex, faqsNewArr);

fs.writeFileSync(destPath, content, 'utf8');
console.log('Done Replacement');
