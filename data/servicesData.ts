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
    id: "accounting",
    number: "01",
    title: "Accounting",
    subtitle: "End-to-End Accounting & Bookkeeping",
    leadSummary: "Comprehensive accounting solutions designed to streamline operations and enhance financial clarity for your practice.",
    fullDescription: "Our accounting specialists provide reliable, scalable support for firms, allowing them to focus on advisory and client relationships rather than day-to-day data entry and reconciliations.",
    keyMetric: {
      value: "Up to 70%",
      label: "Cost savings for accounting practices"
    },
    subServices: [
      { name: "Bookkeeping", description: "Accurate ledger management, bank reconciliations, and AR/AP." },
      { name: "Management Accounts", description: "Monthly and quarterly management reporting with deep insights." },
      { name: "Payroll Services", description: "End-to-end payroll processing and compliance." },
      { name: "Year-End Finalisation", description: "Preparation of year-end accounts and working papers." }
    ],
    image: "/images/svg-accounting-new.svg",
    featuredCaseStudy: {
      client: "Mid-Tier Accounting Firm",
      outcome: "Scaled operations with a dedicated offshore team, reducing overheads by 55%."
    }
  },
  {
    id: "compliance",
    number: "02",
    title: "Compliance",
    subtitle: "SMSF & Tax Compliance Simplified",
    leadSummary: "Ensuring your clients remain compliant with evolving SMSF and tax regulations, delivered with 100% ISO 27001 certified data security.",
    fullDescription: "From complex SMSF administration to tax return preparation, our compliance team ensures meticulous accuracy and adherence to regulatory frameworks across multiple jurisdictions.",
    keyMetric: {
      value: "100%",
      label: "ISO 27001 Certified Data Security"
    },
    subServices: [
      { name: "SMSF Administration", description: "Comprehensive self-managed super fund compliance and reporting." },
      { name: "Tax Return Preparation", description: "Individual, company, trust, and partnership tax returns." },
      { name: "BAS & IAS Preparation", description: "Timely and accurate business and instalment activity statements." },
      { name: "Corporate Secretarial", description: "ASIC compliance, company formations, and statutory updates.", tag: "High Demand" }
    ],
    image: "/images/svg-security.svg",
    featuredCaseStudy: {
      client: "Boutique Advisory Practice",
      outcome: "Outsourced SMSF processing for 200+ funds, achieving 100% lodgement compliance."
    }
  },
  {
    id: "mortgage-broking",
    number: "03",
    title: "Mortgage Broking",
    subtitle: "Back-Office Support for Brokers",
    leadSummary: "Empowering mortgage brokers with seamless loan processing, data entry, and follow-up support to accelerate settlement times.",
    fullDescription: "We act as an integrated extension of your mortgage broking business. By handling the time-consuming administrative tasks, we free up your brokers to write more loans and build stronger client relationships.",
    keyMetric: {
      value: "24/7",
      label: "Capacity and operational support"
    },
    subServices: [
      { name: "Loan Processing", description: "End-to-end processing from submission to settlement." },
      { name: "Data Entry & CRM Management", description: "Accurate input into aggregator platforms and CRM systems." },
      { name: "Lender Follow-Ups", description: "Proactive communication with lenders to fast-track approvals." },
      { name: "Post-Settlement Support", description: "Ongoing client care and portfolio management." }
    ],
    image: "/images/svg-mortgage.svg",
    featuredCaseStudy: {
      client: "National Broker Network",
      outcome: "Reduced average loan processing time by 40% through round-the-clock support."
    }
  },
  {
    id: "financial-planning",
    number: "04",
    title: "Financial Planning Support",
    subtitle: "Paraplanning & Advice Administration",
    leadSummary: "Reliable paraplanning and administrative support to help financial planners deliver high-quality advice efficiently.",
    fullDescription: "Our specialized team assists financial advisers with Statement of Advice (SoA) preparation, financial modelling, and ongoing portfolio administration, ensuring high standards of compliance and quality.",
    keyMetric: {
      value: "Up to 70%",
      label: "Cost savings on paraplanning functions"
    },
    subServices: [
      { name: "Paraplanning", description: "Preparation of complex Statements of Advice (SoAs) and RoAs." },
      { name: "Financial Modelling", description: "Detailed projections and scenario analysis." },
      { name: "Implementation Support", description: "Execution of advice and platform administration." },
      { name: "Fee Disclosure & Opt-In", description: "Managing compliance with FDS and opt-in requirements." }
    ],
    image: "/images/svg-team.svg",
    featuredCaseStudy: {
      client: "Wealth Management Firm",
      outcome: "Streamlined SoA turnaround times from 10 days to 3 days."
    }
  },
  {
    id: "operations-admin",
    number: "05",
    title: "Operations",
    subtitle: "Business Process Outsourcing & Admin",
    leadSummary: "Customized operational support to drive efficiency, reduce overheads, and scale your business effortlessly.",
    fullDescription: "From virtual assistants to specialized back-office roles, NICS provides the talent you need to optimize operations. We simplify talent collaboration so you can outsource your way forward.",
    keyMetric: {
      value: "100%",
      label: "Scalable workforce solutions"
    },
    subServices: [
      { name: "Virtual Assistants", description: "Dedicated administrative support for executives and teams." },
      { name: "Data Management", description: "Secure data entry, cleansing, and database maintenance." },
      { name: "Customer Support", description: "Email and chat support to enhance client experience." },
      { name: "Custom BPO Solutions", description: "Tailored outsourcing strategies for unique business needs." }
    ],
    image: "/images/svg-global.svg",
    featuredCaseStudy: {
      client: "Growing SME Enterprise",
      outcome: "Built an offshore administrative hub that scales dynamically with seasonal demand."
    }
  }
];
