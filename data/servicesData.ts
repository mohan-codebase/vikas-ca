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
    id: "advisory",
    number: "01",
    title: "Advisory",
    subtitle: "Strategic Guidance & Capital Optimization",
    leadSummary: "Guiding organizations through high-stakes growth, transaction execution, transformation, and complex financial challenges.",
    fullDescription: "From debt restructuring and independent valuations to M&A due diligence and ESG roadmaps, our advisory specialists combine commercial pragmatism with technical precision to help directors and leadership teams make confident decisions.",
    keyMetric: {
      value: "$4.2B+",
      label: "Annual transactions and capital advised across Australasia"
    },
    subServices: [
      { name: "Debt Advisory", description: "Capital structuring, refinancing negotiations, and credit facility optimization." },
      { name: "ESG & Sustainability", description: "Readiness assessments, decarbonization roadmaps, and mandatory ESG governance.", tag: "High Demand" },
      { name: "Finance Transformation", description: "Modernizing CFO architecture, chart of accounts, and financial forecasting." },
      { name: "Financial Modelling", description: "Dynamic financial models for project feasibility, capital raising, and valuations." },
      { name: "Forensic Services", description: "Fraud investigation, dispute advisory, and expert witness testimony." },
      { name: "Insolvency & Turnaround", description: "Formal insolvency administrations, voluntary administrations, and turnarounds." },
      { name: "Restructuring & Risk", description: "Operational recovery, liquidity management, and stakeholder workouts." },
      { name: "Transaction Advisory", description: "Buy-side and sell-side financial due diligence and transaction structuring." },
      { name: "Business Valuations", description: "Independent valuations for tax, litigation, M&A, and financial reporting." }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    featuredCaseStudy: {
      client: "ASX-Listed Infrastructure Group",
      outcome: "Executed complex capital restructuring and $85M debt refinancing program."
    }
  },
  {
    id: "audit-assurance",
    number: "02",
    title: "Audit & Assurance",
    subtitle: "Clarity, Credibility & Independence",
    leadSummary: "Delivering robust, independent assurance that enhances financial integrity and stakeholder trust.",
    fullDescription: "Our partner-led audit practice provides transparent, insightful reporting for publicly listed companies, large proprietary firms, not-for-profits, and government entities. We combine modern analytics with deep regulatory mastery.",
    keyMetric: {
      value: "99.4%",
      label: "Audit quality review rating across national engagements"
    },
    subServices: [
      { name: "Financial Audits & Reviews", description: "Statutory audits and half-year reviews for listed, unlisted, and NFP entities." },
      { name: "Financial Reporting Advisory", description: "Technical guidance on complex AASB/IFRS accounting standards implementation." },
      { name: "Internal Audit & Controls", description: "Evaluating governance frameworks, risk appetite, and internal control effectiveness." },
      { name: "Risk Assurance & Consulting", description: "Specialized reviews across IT controls, cybersecurity, and regulatory compliance." },
      { name: "Sustainability Reporting & Assurance", description: "Independent assurance for AASB S1/S2 climate disclosures and ESG reports.", tag: "New Standards" },
      { name: "Transparency & Quality", description: "Commitment to public reporting and rigorous quality management frameworks." }
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    featuredCaseStudy: {
      client: "National Aged Care Provider",
      outcome: "Full statutory audit and AASB 18 transition roadmap across 32 regional facilities."
    }
  },
  {
    id: "business-services",
    number: "03",
    title: "Business Services",
    subtitle: "Proactive Accounting & Commercial Advisory",
    leadSummary: "Empowering mid-market enterprises and business owners with actionable financial clarity and strategic support.",
    fullDescription: "We act as an integrated extension of your leadership team. Whether managing day-to-day financial operations, structuring overseas expansion, or designing multi-year succession plans, we help business owners unlock sustainable value.",
    keyMetric: {
      value: "1,200+",
      label: "Private and mid-market enterprises actively supported"
    },
    subServices: [
      { name: "Accounting & Financial Reporting", description: "Timely management reporting, cash flow visibility, and statutory compliance." },
      { name: "Business Planning & Strategy", description: "Strategic workshops, KPI frameworks, and growth acceleration roadmaps." },
      { name: "Cloud Accounting Ecosystems", description: "Modern ERP and cloud accounting integration for automated workflows." },
      { name: "Finance Function Outsourcing", description: "Virtual CFO and full outsourced bookkeeping, payroll, and controller services." },
      { name: "International Business Services", description: "Inbound and outbound structuring, entity setup, and cross-border expansion." },
      { name: "Operational Efficiency Reviews", description: "Cost rationalization, margin improvement, and working capital optimization." },
      { name: "Succession & Governance", description: "Intergenerational wealth transition and family business board governance." }
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    featuredCaseStudy: {
      client: "Australian Manufacturing Group",
      outcome: "Transitioned finance function to virtual CFO model, achieving 28% overhead reduction."
    }
  },
  {
    id: "tax-consulting",
    number: "04",
    title: "Tax Consulting",
    subtitle: "Strategic Tax Structuring & Compliance",
    leadSummary: "Pragmatic tax strategies that safeguard compliance while optimizing enterprise value across complex jurisdictions.",
    fullDescription: "In an era of intensified regulatory scrutiny and constant statutory shifts, our senior tax specialists provide forward-looking counsel for corporate groups, international operators, private family enterprises, and high-net-worth individuals.",
    keyMetric: {
      value: "40+ Years",
      label: "Of trusted Australian and international tax advisory excellence"
    },
    subServices: [
      { name: "Corporate Tax Advisory", description: "Tax consolidation, CGT rollovers, debt/equity characterization, and ATO rulings." },
      { name: "Employment & Payroll Tax", description: "Fringe benefits tax (FBT), payroll tax harmonization, and contractor risk reviews." },
      { name: "Family-Owned Businesses", description: "Division 7A structuring, trust distributions, and capital gains tax concessions." },
      { name: "International Tax & Transfer Pricing", description: "Cross-border tax planning, thin capitalization, and BEPS documentation." },
      { name: "R&D Tax Incentives", description: "Maximizing eligible innovation claims with robust technical and financial substantiation." },
      { name: "Tax Compliance & Governance", description: "Corporate tax returns, tax risk governance frameworks, and audit defense." }
    ],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    featuredCaseStudy: {
      client: "BioTech Innovation Firm",
      outcome: "Secured $3.4M in R&D tax refunds while structuring IP holding architecture for US rollout."
    }
  },
  {
    id: "wealth-management",
    number: "05",
    title: "Wealth Management",
    subtitle: "Personal Stewardship & Intergenerational Legacy",
    leadSummary: "Holistic wealth advisory, family office stewardship, and superannuation tailored to your personal ambitions.",
    fullDescription: "We partner with business owners, executives, retirees, and multigenerational families to build resilient wealth strategies. Our advice is independent, transparent, and seamlessly coordinated with your accounting and tax structures.",
    keyMetric: {
      value: "$3.8B+",
      label: "Funds under advisory and stewardship across Australasia"
    },
    subServices: [
      { name: "Aged Care Financial Planning", description: "RAD calculations, accommodation options, and pension optimization for families." },
      { name: "Estate Planning & Asset Protection", description: "Wills, testamentary trusts, powers of attorney, and wealth transfer structures." },
      { name: "Family Office Services", description: "Consolidated portfolio reporting, lifestyle asset administration, and governance." },
      { name: "Risk Management & Insurance", description: "Life, TPD, income protection, and key person insurance structures." },
      { name: "Philanthropic Strategy", description: "Private Ancillary Funds (PAFs), charitable trusts, and structured giving." },
      { name: "Superannuation & SMSF", description: "Self-managed super fund establishment, investment strategy, and compliance." }
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
    featuredCaseStudy: {
      client: "Multi-Generational Australian Family",
      outcome: "Structured family office governance framework and generational wealth transfer across 3 lineages."
    }
  }
];
