const fs = require('fs');
const content = fs.readFileSync('src/pages/PublicLimitedPage.tsx', 'utf8');

let out = content;

// Component Name Replace
out = out.replace(/PublicLimitedPage/g, 'NidhiCompanyPage');

// Hero Section
out = out.replace(/Public Limited Company Registration/g, 'Nidhi Company Registration');
out = out.replace(/D BIZ CONSULTANCY provides complete Public Limited Company registration services/g, 'D BIZ CONSULTANCY provides complete Nidhi Company registration services');
out = out.replace('Our expert team ensures a seamless and compliant incorporation process — from company name approval and documentation to ROC filing and post-incorporation compliance management.', 'Our expert team ensures a smooth and compliant process from incorporation to regulatory compliance support.');

// Overview
out = out.replace(/What is a Public Limited Company\?/g, 'What Is a Nidhi Company?');
out = out.replace('A Public Limited Company (PLC) is a company incorporated under the Companies Act, 2013 that allows the public to subscribe to its shares and invest in its capital. It is considered a separate legal entity distinct from its shareholders, enabling it to own property, enter contracts, and initiate legal proceedings in its own name.', 'A Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under Section 406 of the Companies Act, 2013, primarily formed to cultivate the habit of thrift and savings among its members. It functions on the principle of mutual benefit, where members can deposit and borrow funds within the company.');
out = out.replace('Public Limited Companies are commonly formed by businesses that intend to raise capital from the public, attract institutional investors, and expand operations on a large scale. These companies operate under the regulatory framework of the Ministry of Corporate Affairs (MCA) and, where applicable, the Securities and Exchange Board of India (SEBI).', 'This business structure is regulated by the Ministry of Corporate Affairs (MCA) and governed by the Nidhi Rules, 2014. It is widely used for community-based financial activities due to its simple compliance structure and member-centric operations.\n\nA Nidhi Company can only deal with its members and cannot engage in external lending, making it a secure and controlled financial model. It enjoys perpetual succession and can own property, enter contracts, and operate as a separate legal entity.');

// Requirements mini block
out = out.replace('Minimum 3 Directors', '3 Directors');
out = out.replace('At least one must be a local resident director', 'Minimum three directors are required to incorporate a Nidhi Company');
out = out.replace('No maximum limit on the number of members', 'Minimum seven members required at the time of incorporation');
out = out.replace('Generally ₹5,00,000 for public companies', 'Minimum paid-up equity share capital requirement');
out = out.replace('Limited Liability', '200 Members (Post Incorporation Requirement)');
out = out.replace('Protection for shareholders limited to their shareholding', 'Must achieve at least 200 members within one year of incorporation');

// Definition side block
out = out.replace('Section 2(71) of the Companies Act, 2013, a Public Limited Company', 'Section 406 of the Companies Act, 2013, a Nidhi Company');
out = out.replace('Does not restrict the transfer of shares, allowing shareholders to freely transfer their shares.', 'Promotes thrift and financial discipline within its members.');
out = out.replace('Requires a minimum of 7 members, with no maximum limit on the number of members.', 'Members are both contributors and beneficiaries.');
out = out.replace('May invite the public to subscribe to its shares, debentures, or other securities for raising capital.', 'Deposits and loans are allowed only between members, and must comply with specific rules relating to deposits, loans, and governance.');

// Features
out = out.replace('Key Features of a Public Limited Company', 'Key Features of a Nidhi Company');

out = out.replace("Shareholders are liable only to the extent of the unpaid value of the shares they hold.", "Members’ liability is limited to the unpaid amount on shares held,");
out = out.replace("A Public Limited Company has its own independent legal identity, separate from its shareholders and directors.", "A Nidhi Company is a distinct legal entity from its members,");

out = out.replace('Ability to Raise Public Capital', 'Member-Based Operations');
out = out.replace('Public Limited Companies can raise substantial capital by issuing shares or debentures to the public. This provides businesses with greater opportunities to secure funding for expansion and long-term growth.', 'A minimum of 7 members is required at incorporation, and the company must achieve at least 200 members within one year, promoting community-based financial activities.');

out = out.replace('Large Shareholder Base', 'Minimum Capital Requirement');
out = out.replace('A Public Limited Company must have a minimum of seven shareholders, and there is no upper limit on the number of members. This structure enables businesses to attract a wide pool of investors.', 'Requires a minimum paid-up equity share capital of ₹5,00,000 to ensure financial stability and compliance with regulatory norms.');

out = out.replace('Free Transferability of Shares', 'Restricted Business Activities');
out = out.replace('Shares of a Public Limited Company can generally be transferred without major restrictions. For listed companies, shares can be traded on recognized stock exchanges, providing liquidity to investors.', 'Can only accept deposits from and lend to its members, ensuring controlled and low-risk financial operations.');

out = out.replace('The company continues to exist regardless of changes in shareholders, directors, or management.', 'The company continues to exist irrespective of changes in membership, ensuring long-term sustainability and continuity.');

// Benefits
out = out.replace('Benefits of a Public Limited Company', 'Benefits of a Nidhi Company');
out = out.replace('Public Limited Companies can raise substantial funds through public investment, issuing shares or debentures to a wide pool of investors.', 'Promotes savings and borrowing within members, supporting mutual financial growth and stability.');
out = out.replace('Being a public entity enhances the business\'s standing and trust among investors, financial institutions, and global partners.', 'Enhanced credibility and trust among members through a regulated and legally recognized business structure.');
out = out.replace('Shareholder Liquidity', 'Perpetual Succession');
out = out.replace('The free transferability of shares provides liquidity, allowing shareholders to buy and sell their interests with relative ease.', 'Perpetual succession ensuring continuity of the company regardless of changes in members or directors.');
out = out.replace('Expansion Opportunities', 'Easier Access to Funds');
out = out.replace('Access to public funding and a robust structure enables businesses to scale operations and explore large-scale expansion opportunities.', 'Easier access to internal funding through member deposits and structured lending within the company.');
out = out.replace('Corporate Governance', 'Simple Compliance');
out = out.replace('Operates under a formal board and strict regulatory framework, ensuring professional management and transparency.', 'Simple compliance framework compared to other financial entities, making management more practical and controlled.');
out = out.replace('Government Incentives', 'Community Focus');
out = out.replace('Public Limited Companies are often eligible for various government incentives, subsidies, and support schemes for large enterprises.', 'Ownership and management structure that supports community-based participation and regulated operations.');

out = out.replace('Access to Large Capital', 'Member-Based Financial Growth');

// Documents section
out = out.replace('For Domestic Nationals', 'For Directors and Shareholders');
out = out.replace('For Company Registration', 'For Nidhi Company Registration');
// (Leaves the structure alone since the docs are very similar identity/address proofs)
out = out.replace("May be required depending on director/shareholder status and current MCA practice", "May be required depending on nationality, residency status, and document origin");
out = out.replace("Recent electricity or water bill of the premises (owner name must match)", "Recent electricity bill, water bill, gas bill, or similar address proof of the premises");

// Process
out = out.replace('Public Limited Company Registration Process', 'Step-by-Step Nidhi Company Registration Process');
out = out.replace('Registering a Public Limited Company', 'A Nidhi Company is formed to promote savings and mutual financial support among members, and its registration');
out = out.replace('Reserve a unique name for the company via the MCA portal.', 'Reserve the company name through SPICe+ Part A ensuring it reflects Nidhi-related activities such as savings, and complies with MCA naming guidelines.');
out = out.replace('Creation of company\'s core governing documents (Memorandum & Articles of Association).', 'Prepare the Memorandum of Association (MOA) clearly stating Nidhi objectives, and Articles of Association (AOA) defining internal rules, and file them with MCA.');

// Deadlines -> Compliance section
out = out.replace('Public Limited Compliance Deadlines', 'Mandatory MCA Compliance for Nidhi Companies');
out = out.replace('Financials (AOC-4)', 'Statutory Audit & AGM');
out = out.replace('Mandatory filing of audited financial statements including balance sheet and P&L.', 'Conduct statutory audit of financial statements by a Chartered Accountant Annually.');
out = out.replace('Statutory return providing details of shareholders, directors, and shareholding patterns.', 'File annual return containing company, shareholding, and management details.');

out = out.replace('Auditor Appointment', 'NDH-1 Filing');
out = out.replace('Filing Form ADT-1 after the first Board Meeting following the AGM appointment.', 'File return of statutory compliances relating to members, deposits, loans, and reserves as required for Nidhi Companies.');

out = out.replace('Director KYC (DIR-3)', 'NDH-3 Filing');
out = out.replace('Annual KYC verification for all directors holding a DIN as per MCA regulations.', 'File half-yearly return relating to members, deposits, loans, and compliance status.');

// Penalties
out = out.replace('Listed public companies face heavy fines and potential suspension for non-compliance with SEBI norms.', 'Loss of Nidhi status and restrictions on accepting deposits or making loans.');

// Commitment
out = out.replace('With strong experience in corporate governance and large-scale business compliance, DBIZ CONSULTANCY is a trusted partner for Public Limited Companies. We handle the entire incorporation and statutory process—so you can focus on building market leadership with confidence.', 'With our expertise and structured approach, D BIZ CONSULTANCY becomes your trusted partner in building and managing a compliant and successful Nidhi Company. While we handle the compliance and process, you can focus on growing your member network and operations.');

// FAQs
const newFaqsStr = \`const faqData = [
  { question: "What is a Nidhi Company?", answer: "A Nidhi Company is a type of NBFC formed to promote savings and lending among its members on a mutual benefit basis." },
  { question: "Under which law is a Nidhi Company governed?", answer: "It is governed by the Companies Act, 2013 and regulated under the Nidhi Rules, 2014." },
  { question: "What is the minimum requirement to start a Nidhi Company?", answer: "A minimum of 3 directors, 7 members, and ₹5,00,000 paid-up capital is required." },
  { question: "Is RBI approval required for a Nidhi Company?", answer: "No, RBI approval is not required, but the company must comply with MCA and Nidhi Rules." },
  { question: "Can a Nidhi Company deal with non-members?", answer: "No, all deposits and lending activities must be strictly limited to members only." },
  { question: "What is the minimum number of members required after incorporation?", answer: "A Nidhi Company must have at least 200 members within one year of incorporation." },
  { question: "What is Net Owned Funds (NOF) requirement?", answer: "The company must maintain a minimum Net Owned Fund of ₹10 lakhs as per Nidhi Rules." },
  { question: "What forms are required for Nidhi compliance?", answer: "NDH-1, NDH-3, and in certain cases NDH-4 are required for regulatory compliance." }
];\`;

out = out.replace("import { faqData } from \\"@/data/publicLimitedFaq\\";", newFaqsStr);

fs.writeFileSync('src/pages/NidhiCompanyPage.tsx', out, 'utf8');
