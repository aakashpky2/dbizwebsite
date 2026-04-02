// Content for all service pages

interface ServiceContent {
  title: string;
  description: string;
  importance: string[];
  steps?: { title: string; description: string }[];
  relatedServices?: { name: string; path: string }[];
}

// TDS Filings content
export const tdsFilingsContent: ServiceContent = {
  title: "TDS Filings",
  description: "D BIZ CONSULTANCY offers comprehensive TDS (Tax Deducted at Source) filing services to businesses across India. Our expert team ensures timely and accurate TDS returns to keep you compliant with income tax regulations.",
  importance: [
    "Avoiding penalties and legal issues from non-compliance with TDS regulations",
    "Ensuring accurate tax deductions for various payment categories",
    "Maintaining proper documentation for tax authorities",
    "Building credibility with clients and vendors through proper tax management",
    "Keeping track of tax credits and reconciliations",
    "Preventing notices from the Income Tax Department"
  ],
  steps: [
    {
      title: "Document Collection",
      description: "D BIZ CONSULTANCY collects all relevant payment details, PAN information, and deduction records for the quarter."
    },
    {
      title: "Verification & Calculation",
      description: "Our experts verify and calculate the correct TDS amounts for different payment categories as per latest rates."
    },
    {
      title: "Form Preparation",
      description: "We prepare accurate TDS returns in the appropriate forms (26Q, 27Q, 24Q, etc.) according to your business requirements."
    },
    {
      title: "Filing & Submission",
      description: "Our team files the TDS returns through TRACES portal within the due dates to ensure compliance."
    },
    {
      title: "Certificate Generation",
      description: "We generate and distribute TDS certificates (Form 16/16A) to respective parties after successful filing."
    }
  ],
  relatedServices: [
    { name: "GST Filings", path: "/gst-filings" },
    { name: "Income Tax Filing (ITR)", path: "/income-tax-filing" },
    { name: "MCA Compliance", path: "/mca-compliance" }
  ]
};

// GST Filings content
export const gstFilingsContent: ServiceContent = {
  title: "GST Filings",
  description: "D BIZ CONSULTANCY provides expert GST filing services to businesses of all sizes across India. Our team ensures accurate and timely GST returns to maintain compliance with GST regulations.",
  importance: [
    "Ensuring compliance with GST laws and avoiding penalties",
    "Maintaining proper input tax credit records",
    "Preventing GST notices and audit issues",
    "Ensuring accurate tax payments to the government",
    "Managing complex GST calculations across different tax slabs",
    "Providing detailed reports for business financial analysis"
  ],
  steps: [
    {
      title: "Data Collection",
      description: "We collect all purchase, sales, and expense details along with supporting invoices for the filing period."
    },
    {
      title: "Reconciliation",
      description: "Our experts reconcile input and output GST, identifying any discrepancies in the records."
    },
    {
      title: "Return Preparation",
      description: "We prepare various GST returns (GSTR-1, GSTR-3B, etc.) based on the nature of your business."
    },
    {
      title: "Review & Verification",
      description: "All returns are thoroughly reviewed to ensure accuracy before filing."
    },
    {
      title: "Submission & Payment",
      description: "We submit the returns on the GST portal and assist with tax payment procedures."
    }
  ],
  relatedServices: [
    { name: "TDS Filings", path: "/tds-filings" },
    { name: "Income Tax Filing (ITR)", path: "/income-tax-filing" },
    { name: "GST Registration", path: "/coming-soon" }
  ]
};

// Income Tax Filing content
export const itrFilingContent: ServiceContent = {
  title: "Income Tax Filing",
  description: "D BIZ CONSULTANCY offers comprehensive Income Tax Return (ITR) filing services for individuals, businesses, and organizations throughout India. Our tax experts ensure accurate returns while maximizing legitimate deductions.",
  importance: [
    "Meeting legal compliance requirements to avoid penalties",
    "Claiming all eligible deductions and exemptions",
    "Maintaining a clean tax record for future financial transactions",
    "Easy documentation for loan applications and visa processing",
    "Carrying forward losses for future tax benefits",
    "Peace of mind with professional tax planning and preparation"
  ],
  steps: [
    {
      title: "Information Gathering",
      description: "We collect all income details, investment proofs, and expense documents relevant for tax filing."
    },
    {
      title: "Tax Planning",
      description: "Our experts analyze your financial situation to recommend legitimate tax-saving strategies."
    },
    {
      title: "ITR Preparation",
      description: "We select the appropriate ITR form and prepare the return with accurate calculations."
    },
    {
      title: "Verification & Filing",
      description: "The completed return is verified for accuracy and filed through the Income Tax portal."
    },
    {
      title: "Post-Filing Support",
      description: "We provide assistance for any notices or queries from the Income Tax Department."
    }
  ],
  relatedServices: [
    { name: "TDS Filings", path: "/tds-filings" },
    { name: "GST Filings", path: "/gst-filings" },
    { name: "Annual Compliance", path: "/annual-compliance" }
  ]
};

// MCA Compliance content
export const mcaComplianceContent: ServiceContent = {
  title: "MCA Compliance",
  description: "D BIZ CONSULTANCY provides expert MCA compliance services to companies across India, ensuring they meet all statutory requirements under the Companies Act and MCA regulations.",
  importance: [
    "Avoiding penalties and legal actions for non-compliance",
    "Maintaining good standing with the Ministry of Corporate Affairs",
    "Ensuring transparent corporate governance",
    "Protecting director's liability through proper compliance",
    "Building credibility with stakeholders and investors",
    "Facilitating smooth business operations without regulatory hurdles"
  ],
  steps: [
    {
      title: "Compliance Assessment",
      description: "We assess your company's current compliance status and identify pending requirements."
    },
    {
      title: "Document Preparation",
      description: "Our team prepares necessary forms, resolutions, and documents based on compliance needs."
    },
    {
      title: "Board Meeting & AGM Compliance",
      description: "We ensure proper documentation and filing for board meetings and Annual General Meetings."
    },
    {
      title: "Annual Return Filing",
      description: "We prepare and file Annual Returns (MGT-7) and financial statements with the MCA."
    },
    {
      title: "Ongoing Monitoring",
      description: "Our experts continuously monitor compliance deadlines and upcoming requirements."
    }
  ],
  relatedServices: [
    { name: "Annual Compliance", path: "/annual-compliance" },
    { name: "Nidhi Company Compliance", path: "/nidhi-company-compliance" },
    { name: "Company Audit", path: "/company-audit" }
  ]
};

// Private Limited Company content
export const privateLimitedContent: ServiceContent = {
  title: "Private Limited Company",
  description: "D BIZ CONSULTANCY provides complete Private Limited Company registration services. Our expert team ensures a hassle-free process from name approval to compliance management.",
  importance: [
    "Limited liability protection, safeguarding personal assets from business liabilities",
    "Enhanced credibility and trust among clients, suppliers, and financial institutions",
    "Perpetual succession ensuring business continuity regardless of ownership changes",
    "Easier access to funding from investors, banks, and venture capitalists",
    "Tax benefits and flexibility in financial planning for business growth",
    "Ownership flexibility with regulated transfer of shares maintaining control",
    "Separate legal entity status allowing company to own assets and enter contracts independently",
    "Professional structure attractive to talent with options like ESOPs",
    "Global business opportunities through 100% FDI eligibility in most sectors"
  ],
  steps: [
    {
      title: "Digital Signature Certificate (DSC)",
      description: "D BIZ CONSULTANCY assists in obtaining DSCs for all proposed directors from certified authorities."
    },
    {
      title: "Director Identification Number (DIN)",
      description: "We handle the application process for DIN for all directors through the MCA portal."
    },
    {
      title: "Company Name Approval",
      description: "Our experts help you select and obtain approval for a unique name via the RUN (Reserve Unique Name) form."
    },
    {
      title: "File SPICe+ Form",
      description: "We prepare and file the Simplified Proforma for Incorporating Company Electronically Plus form with all required details."
    },
    {
      title: "Drafting MOA and AOA",
      description: "Our legal experts draft the Memorandum of Association and Articles of Association tailored to your business needs."
    },
    {
      title: "Certificate of Incorporation",
      description: "Once approved by ROC, we help obtain the Certificate of Incorporation, PAN, TAN, and assist with bank account opening."
    },
    {
      title: "Post-Registration Compliance",
      description: "D BIZ CONSULTANCY provides guidance on GST registration, compliance requirements, and annual filings."
    }
  ],
  relatedServices: [
    { name: "GST Registration", path: "/coming-soon" },
    { name: "MCA Compliance", path: "/mca-compliance" },
    { name: "Annual Compliance", path: "/annual-compliance" }
  ]
};

// Limited Liability Partnership (LLP) content
export const llpContent: ServiceContent = {
  title: "Limited Liability Partnership",
  description: "D BIZ CONSULTANCY provides comprehensive Limited Liability Partnership (LLP) registration services across India. Our expert team assists businesses in blending the features of a partnership and a private company, offering limited liability protection with simplified compliance requirements.",
  importance: [
    "Limited liability protection safeguarding partners' personal assets from business liabilities",
    "Separate legal entity status allowing the LLP to own assets and enter contracts independently",
    "Flexible management structure with partners having freedom to define roles and responsibilities",
    "Minimal compliance requirements compared to private limited companies, reducing administrative burden",
    "Tax efficiency with LLPs taxed as partnerships, avoiding double taxation",
    "Perpetual succession ensuring business continuity despite changes in partnership",
    "No minimum capital requirement, making it accessible for startups and small businesses",
    "Easy transferability of ownership interests as per the LLP agreement",
    "Enhanced credibility and trust among stakeholders, clients, and financial institutions",
    "Global recognition facilitating international business operations and partnerships"
  ],
  steps: [
    {
      title: "Consultation and Planning",
      description: "D BIZ CONSULTANCY experts discuss your business requirements to determine the most suitable LLP structure for your needs."
    },
    {
      title: "Name Reservation",
      description: "We conduct a thorough name availability search and reserve a unique name for your LLP by filing the RUN-LLP form with the Ministry of Corporate Affairs."
    },
    {
      title: "Digital Signature Certificates (DSC)",
      description: "Our team assists in obtaining Digital Signature Certificates for all partners involved in the LLP."
    },
    {
      title: "Designated Partner Identification Number (DPIN)",
      description: "We help procure DPINs for all designated partners, which is mandatory for LLP registration."
    },
    {
      title: "Document Preparation",
      description: "D BIZ CONSULTANCY prepares all necessary documentation including the LLP Agreement detailing roles, responsibilities, and profit-sharing."
    },
    {
      title: "Filing with Registrar",
      description: "We file Form FiLLiP and other required documents with the Registrar of Companies on your behalf."
    },
    {
      title: "Certificate of Incorporation",
      description: "Upon approval, we obtain the Certificate of Incorporation, establishing your LLP as a legal entity."
    },
    {
      title: "Post-Registration Compliance",
      description: "D BIZ CONSULTANCY assists with PAN and TAN applications, LLP agreement registration, and guides you through ongoing compliance requirements."
    }
  ],
  relatedServices: [
    { name: "Private Limited Company", path: "/private-limited" },
    { name: "GST Registration", path: "/coming-soon" },
    { name: "MSME Registration", path: "/udyam-msme-registration" }
  ]
};

// Public Limited Company content
export const publicLimitedContent: ServiceContent = {
  title: "Public Limited Company",
  description: "D BIZ CONSULTANCY offers expert Public Limited Company registration services across India. We guide you through the complex regulatory requirements to establish a transparent, scalable legal entity capable of raising public capital.",
  importance: [
    "Ability to raise capital through public issue of shares (IPO) and debentures",
    "Free transferability of shares providing high liquidity to investors and shareholders",
    "Highest level of corporate transparency and credibility with stakeholders and banks",
    "Unlimited number of shareholders allowing for massive scale and broad ownership",
    "Separate legal entity status protecting personal assets of directors and members",
    "Perpetual succession ensuring the company's existence is independent of its members",
    "Improved brand image and trust in the international market and large-scale tenders",
    "Access to diverse funding options including institutional investors and venture capital",
    "Structured governance framework as per the Companies Act, 2013"
  ],
  steps: [
    {
      title: "Digital Signature Certificate (DSC)",
      description: "D BIZ CONSULTANCY obtains DSCs for all proposed directors to sign electronic forms securely."
    },
    {
      title: "Name Approval (RUN)",
      description: "We help you select a compliant name and obtain approval from the ROC through SPICe+ Part A."
    },
    {
      title: "Preparation of MOA & AOA",
      description: "Our experts draft specialized Articles and Memorandum of Association for a public company structure."
    },
    {
      title: "Incorporation Filing (SPICe+)",
      description: "We file the integrated incorporation form with the MCA, including PAN, TAN, and DIN applications."
    },
    {
      title: "ROC Scrutiny & Approval",
      description: "We monitor the application and respond to any queries from the Registrar of Companies until approval."
    },
    {
      title: "Certificate of Incorporation",
      description: "Upon approval, we deliver your Certificate of Incorporation along with share certificates and statutory records."
    },
    {
      title: "Post-Incorporation Compliance",
      description: "Guidance on commencement of business (INC-20A), auditor appointment, and statutory meeting requirements."
    }
  ],
  relatedServices: [
    { name: "Private Limited Company", path: "/private-limited" },
    { name: "MCA Compliance", path: "/mca-compliance" },
    { name: "Trade License", path: "/trade-license" }
  ]
};

// Export all service content in a single object for easy access
export const allServicesContent = {
  "tds-filings": tdsFilingsContent,
  "gst-filings": gstFilingsContent,
  "income-tax-filing": itrFilingContent,
  "mca-compliance": mcaComplianceContent,
  "private-limited": privateLimitedContent,
  "public-company": publicLimitedContent,
  "limited-liability-partnership": llpContent,
  // Add more services as needed
};

// Function to get service content by path
export const getServiceContent = (path: string): ServiceContent | undefined => {
  const servicePath = path.replace(/^\//, '').split('/')[0]; // Get the first part of the path
  return allServicesContent[servicePath as keyof typeof allServicesContent];
};
