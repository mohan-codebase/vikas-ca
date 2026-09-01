export interface SubService {
  name: string;
  description: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  leadSummary: string;
  fullDescription: string;
  keyMetric: {
    value: string;
    label: string;
  };
  subServices: SubService[];
  image: string;
  accentColor?: string;
  featuredCaseStudy?: {
    client: string;
    outcome: string;
  };
}

export const servicesData: ServiceCategory[] = [
  {
    id: "accounting-finance",
    number: "01",
    title: "Accounting & Finance",
    subtitle: "Accounting & Finance Operations",
    leadSummary: "Your finance function needs more than transaction processing. It needs reliable information, disciplined processes and timely reporting. NICS supports Australian accounting practices and businesses across the finance function.",
    fullDescription: "From general ledger maintenance to monthly management packs and forecasting models, we ensure your financial data is accurate, compliant, and actionable.",
    keyMetric: {
      value: "Timely & Accurate",
      label: "Disciplined processes, reporting & forecasting"
    },
    subServices: [
      { name: "Bookkeeping & Transactions", description: "Bank reconciliations, transaction processing, general ledger maintenance, month-end and journals." },
      { name: "Accounts Payable", description: "Complete supplier payment workflow: invoice receipt, processing, reconciliation and reporting." },
      { name: "Accounts Receivable", description: "Customer billing, invoice processing, receipt allocation, and debtor reporting." },
      { name: "Inventory Support", description: "Physical or online inventory records, reconciliations, reporting and supporting schedules." },
      { name: "Management Reporting", description: "Monthly management packs, P&L, balance sheet, cash flow, KPIs, and budget vs actual analysis." },
      { name: "Budgeting & Forecasting", description: "Financial models, budgets, cash-flow forecasts, scenario analysis and ongoing reporting." }
    ],
    image: "/images/svg-accounting-new.svg",
    featuredCaseStudy: {
      client: "Australian Commercial Enterprise",
      outcome: "Optimised end-to-end accounts payable and monthly management reporting with structured workflows."
    }
  },
  {
    id: "accounting-practices",
    number: "02",
    title: "Practice Support",
    subtitle: "Support for Australian Accounting Practices",
    leadSummary: "NICS works with accounting firms that need additional delivery capacity without continually increasing their internal headcount. We can support recurring compliance and accounting workflows.",
    fullDescription: "Where professional registration, review or lodgement is required, the relevant responsibility remains with the Australian practitioner or registered entity. Our role is to strengthen your delivery capability—not replace your professional responsibility.",
    keyMetric: {
      value: "Flexible Scale",
      label: "Capacity without increasing internal headcount"
    },
    subServices: [
      { name: "Workpaper Preparation", description: "Structured workpaper preparation aligned with Australian accounting practice standards." },
      { name: "Financial Statements", description: "Preparation of interim and annual financial statements for entities and trusts." },
      { name: "GST / BAS Data Preparation", description: "Accurate processing of transaction data and schedules for GST and BAS lodgements." },
      { name: "Tax Return Preparation Support", description: "Drafting tax return workpapers and supporting schedules across entity types." },
      { name: "Account Reconciliations", description: "Comprehensive balance sheet and ledger reconciliations for client accounts." },
      { name: "Year-End Accounting Support", description: "End-of-financial-year processing, adjusting entries, and compliance finalisation." }
    ],
    image: "/images/svg-security.svg",
    featuredCaseStudy: {
      client: "Mid-Tier Accounting Practice",
      outcome: "Strengthened compliance delivery capacity during peak tax season while Australian partners retained review and sign-off."
    }
  },
  {
    id: "smsf-audit",
    number: "03",
    title: "SMSF & Audit",
    subtitle: "SMSF Back-Office & Flexible Audit Support",
    leadSummary: "SMSF work requires attention to detail, consistency and strong documentation. Audit teams often experience uneven workloads — NICS provides flexible audit and SMSF support without expanding your permanent team.",
    fullDescription: "Your Australian team retains responsibility for professional review, judgement, conclusions and sign-off. We provide the disciplined documentation and back-office processing behind them.",
    keyMetric: {
      value: "Even Workloads",
      label: "Flexible audit & SMSF support when required"
    },
    subServices: [
      { name: "SMSF Bookkeeping & Data", description: "SMSF transaction processing, investment data feeds, and bank reconciliations." },
      { name: "SMSF Financials & Tax Support", description: "Workpaper preparation, financial statements, and tax return draft schedules." },
      { name: "Audit Documentation & Schedules", description: "Supporting schedules, audit documentation, and fund file administration." },
      { name: "Audit Preparation & Lead Schedules", description: "Financial statement work, lead schedules, and account reconciliations for audit files." },
      { name: "Evidence & Sampling Support", description: "Evidence organisation, data analysis, and testing sampling support." },
      { name: "Audit File Administration", description: "Audit workpaper preparation and internal control documentation." }
    ],
    image: "/images/svg-mortgage.svg",
    featuredCaseStudy: {
      client: "Specialist SMSF & Audit Firm",
      outcome: "Streamlined SMSF back-office documentation and seasonal audit file preparation across 300+ engagements."
    }
  },
  {
    id: "financial-services",
    number: "04",
    title: "Financial Services",
    subtitle: "Financial Planning & Mortgage Processing Support",
    leadSummary: "Australian financial services businesses often have significant administrative workloads sitting behind client-facing professionals. NICS can support these activities while your authorised professionals remain responsible for advice.",
    fullDescription: "Regulated advice and lending decisions remain with the appropriately authorised Australian professional or licensee. NICS handles the time-consuming administrative workflows behind them.",
    keyMetric: {
      value: "Seamless Admin",
      label: "Support behind client-facing professionals"
    },
    subServices: [
      { name: "Client Data & File Preparation", description: "Client data preparation, file collation, and pre-SOA information gathering." },
      { name: "SOA Preparation Support", description: "Assisting advisers with Statement of Advice (SOA) draft preparation and research." },
      { name: "Implementation Administration", description: "Post-SOA administration, platform paperwork, and execution tracking." },
      { name: "Mortgage Document & Data Entry", description: "Document collection, data entry into aggregator portals, and fact-checking." },
      { name: "Serviceability Calculations", description: "Serviceability worksheets, lender policy checking, and document preparation." },
      { name: "Portal & Settlement Admin", description: "Lender portal administration, application tracking, and settlement administration." }
    ],
    image: "/images/svg-team.svg",
    featuredCaseStudy: {
      client: "National Wealth & Broking Group",
      outcome: "Reduced administrative turnaround on SOAs and mortgage application files by 50%."
    }
  },
  {
    id: "business-operations",
    number: "05",
    title: "Operations & Admin",
    subtitle: "Legal Ops, Customer Admin, KYC & Virtual Support",
    leadSummary: "Your customer-facing team should not spend its day maintaining databases and processing administrative tasks. NICS provides structured back-office assistance across legal ops, customer admin, data, KYC, and virtual support.",
    fullDescription: "NICS provides administrative and operational support and does not replace Australian legal advice or the services of an Australian legal practitioner. Processes are performed according to your policies and regulatory requirements.",
    keyMetric: {
      value: "High-Value Focus",
      label: "Routine operations managed with disciplined SOPs"
    },
    subServices: [
      { name: "Contract Administration", description: "Contract registers, document management, key date tracking, summaries and repository maintenance." },
      { name: "Legal Operations & Due Diligence", description: "Formatting, proofreading, file organisation, data room maintenance and document indexing." },
      { name: "Customer Administration", description: "Customer onboarding, account updates, CRM maintenance, document collection, and follow-ups." },
      { name: "Customer Support", description: "Email support, live chat, inbound enquiry management, and service request processing." },
      { name: "Data Services", description: "Data entry, validation, data cleansing, database maintenance, and data reconciliation." },
      { name: "KYC & Virtual Support", description: "Customer verification checking, KYC status tracking, calendar management, and travel admin." }
    ],
    image: "/images/svg-global.svg",
    featuredCaseStudy: {
      client: "Multi-Disciplinary Professional Firm",
      outcome: "Centralised CRM maintenance, KYC document verification, and contract registers into a managed offshore function."
    }
  }
];
