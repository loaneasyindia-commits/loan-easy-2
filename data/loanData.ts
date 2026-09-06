export interface LoanProduct {
  id: string;
  title: string;
  iconName: "User" | "Car" | "Briefcase" | "RefreshCw";
  categoryColor: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  accentColor: string;
  shortDesc: string;
  fullDesc: string;
  indicativeRate: string;
  maxAmount: string;
  tenureRange: string;
  features: string[];
  ctaText: string;
}

export interface BenefitItem {
  id: string;
  iconName: "Zap" | "Building2" | "Layers" | "Headphones" | "ClipboardCheck" | "Users" | "ShieldCheck";
  title: string;
  description: string;
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: "FileEdit" | "Compass" | "CheckCircle2" | "Coins";
}

export interface BankPartner {
  id: string;
  name: string;
  shortCode: string;
  category: "Private Bank" | "Public Sector" | "NBFC";
  startingRate: string;
  maxTenure: string;
  processingTime: string;
  logoUrl: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Eligibility" | "Process" | "Documents";
}

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: "personal-loan",
    title: "Personal Loan",
    iconName: "User",
    categoryColor: "#DC2626", // Red
    badgeBg: "bg-red-50 text-red-700 border-red-200",
    badgeText: "Most Popular",
    borderColor: "border-t-red-600",
    accentColor: "text-red-600",
    shortDesc: "Simple financing for your personal needs.",
    fullDesc: "Access hassle-free personal loan assistance with minimal documentation, flexible repayment tenures, and competitive interest options.",
    indicativeRate: "From 10.49% p.a.",
    maxAmount: "Up to ₹40 Lakhs",
    tenureRange: "12 to 72 Months",
    features: [
      "No collateral required",
      "Quick documentation check",
      "Flexible repayment tenure",
      "Personal assistance throughout"
    ],
    ctaText: "Explore Personal Loan →",
  },
  {
    id: "car-loan",
    title: "Car Loan",
    iconName: "Car",
    categoryColor: "#159447", // Green
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    badgeText: "Low Interest",
    borderColor: "border-t-emerald-600",
    accentColor: "text-emerald-600",
    shortDesc: "Explore suitable financing options for your dream car.",
    fullDesc: "Drive home your dream car with tailored loan options for new and pre-owned vehicles with attractive financing terms.",
    indicativeRate: "From 8.75% p.a.",
    maxAmount: "Up to 90% On-Road",
    tenureRange: "12 to 84 Months",
    features: [
      "New & used car options",
      "High LTV financing",
      "Pocket-friendly EMIs",
      "Fast lender evaluation"
    ],
    ctaText: "Explore Car Loan →",
  },
  {
    id: "business-loan",
    title: "Business Loan",
    iconName: "Briefcase",
    categoryColor: "#EAB308", // Yellow/Gold
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    badgeText: "High Value",
    borderColor: "border-t-amber-500",
    accentColor: "text-amber-600",
    shortDesc: "Funding solutions to support your business needs.",
    fullDesc: "Fuel your enterprise growth, working capital, machinery purchase, or business expansion with custom financial assistance.",
    indicativeRate: "From 13.50% p.a.",
    maxAmount: "Up to ₹1 Crore",
    tenureRange: "12 to 60 Months",
    features: [
      "Collateral-free options",
      "Custom working capital",
      "Tax benefits applicable",
      "Dedicated business advisor"
    ],
    ctaText: "Explore Business Loan →",
  },
  {
    id: "balance-transfer",
    title: "Balance Transfer",
    iconName: "RefreshCw",
    categoryColor: "#0B4FA2", // Blue
    badgeBg: "bg-blue-50 text-blue-800 border-blue-200",
    badgeText: "Save Money",
    borderColor: "border-t-blue-600",
    accentColor: "text-blue-600",
    shortDesc: "Explore options to manage your existing loan better.",
    fullDesc: "Lower your monthly EMI outflow by facilitating a balance transfer of existing personal or home loans to lenders offering better rates.",
    indicativeRate: "Save up to 3.5% p.a.",
    maxAmount: "Top-Up Available",
    tenureRange: "Up to 300 Months",
    features: [
      "Reduce monthly EMI burden",
      "Additional top-up facility",
      "Single-point transfer guide",
      "Transparent fee structure"
    ],
    ctaText: "Explore Balance Transfer →",
  },
];

export const TRUST_BENEFITS: BenefitItem[] = [
  {
    id: "b1",
    iconName: "Zap",
    title: "Quick Process",
    description: "Streamlined evaluation and personal guidance for prompt assistance.",
  },
  {
    id: "b2",
    iconName: "Building2",
    title: "All Leading Banks",
    description: "Compare options across top public, private & NBFC institutions.",
  },
  {
    id: "b3",
    iconName: "Layers",
    title: "All Loan Options",
    description: "Personal, Car, Business loans & Balance transfer under one roof.",
  },
  {
    id: "b4",
    iconName: "Headphones",
    title: "Personal Assistance",
    description: "Dedicated financial representative guiding you from start to finish.",
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: "01",
    title: "Apply",
    description: "Tell us about your loan requirement through our simple online inquiry form.",
    iconName: "FileEdit",
  },
  {
    stepNumber: "02",
    title: "Explore",
    description: "Explore suitable loan options curated based on your financial profile and eligibility.",
    iconName: "Compass",
  },
  {
    stepNumber: "03",
    title: "Choose",
    description: "Select the option that works best for your monthly budget and long-term financial goals.",
    iconName: "CheckCircle2",
  },
  {
    stepNumber: "04",
    title: "Get Disbursed",
    description: "Complete lender documentation and verification to receive funds directly into your account.",
    iconName: "Coins",
  },
];

export const WHY_CHOOSE_ITEMS: BenefitItem[] = [
  {
    id: "wc1",
    iconName: "ClipboardCheck",
    title: "Simple Application Process",
    description: "No lengthy physical paperwork or multi-step confusion. Express your requirement in less than 60 seconds.",
  },
  {
    id: "wc2",
    iconName: "Users",
    title: "Multiple Loan Options",
    description: "Gain access to a wide array of loan products and lender options tailored to varied credit profiles.",
  },
  {
    id: "wc3",
    iconName: "Building2",
    title: "Leading Banking Partners",
    description: "Explore options from India's most trusted banks and RBI-regulated financial institutions.",
  },
  {
    id: "wc4",
    iconName: "Headphones",
    title: "Personal Assistance",
    description: "Get end-to-end guidance from knowledgeable loan specialists who understand Indian market needs.",
  },
  {
    id: "wc5",
    iconName: "Zap",
    title: "Quick Response",
    description: "Receive swift callback and eligibility feedback so you can plan your financial decisions without delay.",
  },
  {
    id: "wc6",
    iconName: "ShieldCheck",
    title: "Support Throughout the Loan Journey",
    description: "We stay with you from document preparation and bank submission right up to loan disbursement.",
  },
];

export const BANK_PARTNERS: BankPartner[] = [
  {
    id: "sbi",
    name: "State Bank of India",
    shortCode: "SBI",
    category: "Public Sector",
    startingRate: "10.30% p.a.",
    maxTenure: "72 Months",
    processingTime: "2-4 Days",
    logoUrl: "/banks/sbi.svg",
  },
  {
    id: "hdfc",
    name: "HDFC Bank",
    shortCode: "HDFC",
    category: "Private Bank",
    startingRate: "10.50% p.a.",
    maxTenure: "60 Months",
    processingTime: "24-48 Hours",
    logoUrl: "/banks/hdfc.svg",
  },
  {
    id: "icici",
    name: "ICICI Bank",
    shortCode: "ICICI",
    category: "Private Bank",
    startingRate: "10.65% p.a.",
    maxTenure: "60 Months",
    processingTime: "24-48 Hours",
    logoUrl: "/banks/icici.svg",
  },
  {
    id: "axis",
    name: "Axis Bank",
    shortCode: "AXIS",
    category: "Private Bank",
    startingRate: "10.49% p.a.",
    maxTenure: "60 Months",
    processingTime: "24-48 Hours",
    logoUrl: "/banks/axis.svg",
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    shortCode: "KOTAK",
    category: "Private Bank",
    startingRate: "10.99% p.a.",
    maxTenure: "60 Months",
    processingTime: "24-48 Hours",
    logoUrl: "/banks/kotak.svg",
  },
  {
    id: "pnb",
    name: "Punjab National Bank",
    shortCode: "PNB",
    category: "Public Sector",
    startingRate: "10.40% p.a.",
    maxTenure: "72 Months",
    processingTime: "2-3 Days",
    logoUrl: "/banks/pnb.svg",
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    shortCode: "BOB",
    category: "Public Sector",
    startingRate: "10.40% p.a.",
    maxTenure: "72 Months",
    processingTime: "2-3 Days",
    logoUrl: "/banks/bob.svg",
  },
  {
    id: "canara",
    name: "Canara Bank",
    shortCode: "CANARA",
    category: "Public Sector",
    startingRate: "10.45% p.a.",
    maxTenure: "72 Months",
    processingTime: "2-3 Days",
    logoUrl: "/banks/canara.svg",
  },
  {
    id: "federal",
    name: "Federal Bank",
    shortCode: "FEDERAL",
    category: "Private Bank",
    startingRate: "10.80% p.a.",
    maxTenure: "60 Months",
    processingTime: "24 Hours",
    logoUrl: "/banks/federal.svg",
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    shortCode: "IDFC",
    category: "Private Bank",
    startingRate: "10.75% p.a.",
    maxTenure: "60 Months",
    processingTime: "24-48 Hours",
    logoUrl: "/banks/idfc.svg",
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    shortCode: "INDUSIND",
    category: "Private Bank",
    startingRate: "10.49% p.a.",
    maxTenure: "60 Months",
    processingTime: "24-48 Hours",
    logoUrl: "/banks/indus.svg",
  },
  {
    id: "yes",
    name: "YES Bank",
    shortCode: "YES",
    category: "Private Bank",
    startingRate: "10.99% p.a.",
    maxTenure: "60 Months",
    processingTime: "24 Hours",
    logoUrl: "/banks/yes.svg",
  },
];

export const FAQ_ITEMS: FAQItemData[] = [
  {
    id: "faq-1",
    question: "What types of loans do you offer?",
    answer: "LoanEasyIndia assists with four primary loan categories: Personal Loans (for medical, wedding, travel, or general personal expenses), Car Loans (new and pre-owned vehicle financing), Business Loans (working capital and enterprise expansion), and Balance Transfers (lowering monthly interest on existing loans).",
    category: "General",
  },
  {
    id: "faq-2",
    question: "How do I apply?",
    answer: "Applying is quick and easy! Simply fill out our online enquiry form with your basic contact details, selected loan category, and desired amount. One of our dedicated loan advisors will reach out to understand your requirements, evaluate your eligibility across leading banking partners, and guide you through the submission.",
    category: "Process",
  },
  {
    id: "faq-3",
    question: "How quickly will I get a response?",
    answer: "Our team typically reaches out within 30 to 60 minutes during standard business hours (9:30 AM to 6:30 PM IST, Monday to Saturday). If you submit an inquiry after business hours, we will contact you first thing the next business morning.",
    category: "Process",
  },
  {
    id: "faq-4",
    question: "Will I definitely get a loan?",
    answer: "LoanEasyIndia is an independent loan facilitation and assistance platform. Final loan approval, interest rates, sanctioned amount, processing fees, and disbursement timelines are strictly subject to individual lender eligibility criteria, your credit score (CIBIL), income verification, documentation, and respective bank approval policies.",
    category: "Eligibility",
  },
  {
    id: "faq-5",
    question: "What documents may be required?",
    answer: "Standard documentation generally includes Proof of Identity (PAN Card, Aadhaar), Proof of Address (Aadhaar, Passport, Utility Bills), Income Proof (latest 3 months payslips or 2 years ITR with computation for business owners), and 6 months Bank Account Statements. Additional documents may be requested based on the specific loan type and lender requirements.",
    category: "Documents",
  },
  {
    id: "faq-6",
    question: "How does the loan process work?",
    answer: "Our process is divided into four simple steps: 1) Submit your loan inquiry. 2) Explore suitable lender options matching your profile. 3) Select your preferred bank offer and complete document submission. 4) Verification & lender disbursement directly into your bank account.",
    category: "Process",
  },
];
