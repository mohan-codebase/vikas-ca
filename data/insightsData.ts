export interface InsightSection {
  heading: string;
  body: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    office: string;
  };
  featured?: boolean;
  edition?: string;
  tags: string[];
  image: string;
  href: string;
  fullContent?: {
    overview: string;
    sections: InsightSection[];
    bullets?: string[];
    keyTakeaway?: string;
  };
}

export const featuredInsight: InsightArticle = {
  id: "information-security-framework",
  category: "Security Architecture",
  edition: "Information Security Framework",
  title: "Information Security Is Part of the Delivery Model",
  excerpt: "When you outsource business processes, you are entrusting your service provider with business information. That is why information security is built into our operating approach, aligned with ISO/IEC 27001 principles across access control, user permissions, confidentiality, and secure information handling.",
  date: "Security Standard",
  readTime: "8 min read",
  author: {
    name: "Information Security Team",
    role: "Governance & Security",
    office: "Chennai & Sydney"
  },
  featured: true,
  tags: ["ISO/IEC 27001", "Access Control", "Confidentiality", "Data Protection"],
  image: "/images/security.avif",
  href: "#insights",
  fullContent: {
    overview: "When delegating sensitive financial, tax, or operational workflows offshore, information governance is paramount. NICS embeds ISO/IEC 27001 security principles directly into every layer of our operating architecture—from physical workstation controls in Chennai to encrypted cloud access protocols.",
    sections: [
      {
        heading: "Role-Based Access Control (RBAC)",
        body: "Analysts operate under strict least-privilege principles. Access is limited solely to active client files and authorized software tenants, with MFA enforced across all cloud accounting environments."
      },
      {
        heading: "Secure Workstation Infrastructure",
        body: "Our Chennai Delivery Centre features hardened workstations with disabled external storage ports, zero unauthorized printing, encrypted SSDs, and real-time security logging."
      },
      {
        heading: "Confidentiality & Compliance Alignment",
        body: "All engagements are governed by Australian Privacy Principles (APPs) and contractual non-disclosure agreements, ensuring complete alignment with Australian regulatory expectations."
      }
    ],
    bullets: [
      "ISO/IEC 27001 aligned management systems & continuous monitoring",
      "End-to-end encryption in transit (TLS 1.3) and at rest (AES-256)",
      "Dedicated virtual environments or secure client-hosted VPN access",
      "Independent audit logging and regular security posture reviews"
    ],
    keyTakeaway: "Security is not an add-on; it is the structural foundation of every workflow and team pod we deploy."
  }
};

export const secondaryInsights: InsightArticle[] = [
  {
    id: "australian-accounting-practice-support",
    category: "Practice Operations",
    title: "Support for Australian Accounting Practices: Expanding Capacity Without Permanent Overhead",
    excerpt: "How accounting firms maintain delivery capacity for workpapers, financial statements, GST/BAS data, and year-end accounting while Australian partners retain professional judgement and sign-off.",
    date: "Practice Briefing",
    readTime: "6 min read",
    author: {
      name: "Boobalan Madhavan",
      role: "Founder & MD",
      office: "Sydney"
    },
    tags: ["AASB", "Tax Return Support", "Workpapers", "Australian Practices"],
    image: "/images/security.avif",
    href: "#insights",
    fullContent: {
      overview: "Australian accounting practices face acute seasonal bottlenecks during peak BAS and year-end compliance cycles. Adding permanent local headcount often introduces unsustainable fixed overheads. NICS provides structured offshore accounting pods that integrate directly into your firm's existing software stack and working paper templates.",
      sections: [
        {
          heading: "Standardized Workpapers & AASB Compliance",
          body: "Our analysts prepare rigorous electronic workpapers with supporting schedules, lead sheets, and clear cross-references aligned with AASB reporting requirements."
        },
        {
          heading: "Year-End Financials & Tax Pack Assembly",
          body: "We compile comprehensive draft financial statements, trial balance reconciliations, and tax return schedules (Company, Trust, Partnership, and Individual) ready for partner review."
        },
        {
          heading: "GST/BAS Data Preparation & Reconciliations",
          body: "Handling transactional ledger review, payroll/PAYG withholding reconciliations, and draft IAS/BAS preparation across Xero, MYOB, and QuickBooks."
        },
        {
          heading: "Clear Separation of Duties & Sign-Off",
          body: "Australian registered practitioners retain full professional responsibility, client advisory, and statutory sign-off, while offshore pods handle the time-intensive preparation."
        }
      ],
      bullets: [
        "Structured working paper preparation ready for immediate partner review",
        "Seamless integration with Xero Practice Manager, MYOB AE/AO, HandiSoft, and APS",
        "Direct communication with dedicated pod seniors via Slack, Teams, or email",
        "Flexible capacity scaling to accommodate June and October/May tax crunches"
      ],
      keyTakeaway: "Expand production throughput by 40–60% during peak lodgement windows while protecting firm margins and client advisory standards."
    }
  },
  {
    id: "smsf-audit-back-office",
    category: "Compliance & Assurance",
    title: "SMSF & Audit Back-Office: Managing Uneven Workloads with Rigorous Documentation",
    excerpt: "Audit teams often experience uneven seasonal demand. Explore how structured lead schedules, evidence organisation, sampling support, and SMSF bookkeeping bridge capacity gaps.",
    date: "Technical Analysis",
    readTime: "7 min read",
    author: {
      name: "Gorav Gupta",
      role: "Co-Founder & Director",
      office: "Chennai"
    },
    tags: ["SMSF", "Audit Files", "Lead Schedules", "Evidence Organisation"],
    image: "/images/security.avif",
    href: "#insights",
    fullContent: {
      overview: "Audit workflows and SMSF compliance are characterized by severe seasonal compression and strict documentation mandates under Australian Auditing Standards (ASAs). NICS delivers dedicated audit support analysts who meticulously assemble, cross-reference, and verify evidentiary files before Australian auditor review.",
      sections: [
        {
          heading: "Structured Lead Schedules & Evidence Gathering",
          body: "We organize audit binders with indexed lead schedules, source documentation, bank confirmations, and asset register reconciliations formatted to your firm's methodology."
        },
        {
          heading: "SMSF Administration & Platform Feeds",
          body: "Reconciling automated bank and broker data feeds in Class Super and BGL Simple Fund 360, tracking pension minimum drawdowns, asset valuations, and corporate action adjustments."
        },
        {
          heading: "Substantive Testing & Sampling Workpapers",
          body: "Executing substantive analytical procedures, sample selections, mathematical recalculations, and variance analysis based on predetermined materiality thresholds."
        },
        {
          heading: "Internal Multi-Tier Quality Gate",
          body: "Each file undergoes a mandatory two-tier review by our offshore senior audit supervisors before dispatch to ensure zero missing supporting documents."
        }
      ],
      bullets: [
        "Audit binders formatted to ASA standards with comprehensive tick-mark legends",
        "Deep expertise in Class Super, BGL 360, CaseWare, and Audit-Exchange",
        "Eliminates auditor downtime spent tracking missing client invoices and bank statements",
        "Smooth turnaround times even during peak statutory audit deadlines"
      ],
      keyTakeaway: "Eliminate audit file backlogs and reduce time-to-signoff by up to 50% with audit-ready documentation."
    }
  },
  {
    id: "one-person-to-function",
    category: "Scalability Guide",
    title: "From One Person to an Offshore Function: Growing With Your Business",
    excerpt: "Start small with a single bookkeeping resource, add accounts payable, and scale into reporting, audit support, or complete business operations when you're ready.",
    date: "Strategy Guide",
    readTime: "5 min read",
    author: {
      name: "Andrew Noble",
      role: "Co-Founder",
      office: "USA"
    },
    tags: ["Scalable Model", "Offshore Function", "Dedicated Resource", "BOT Transition"],
    image: "/images/security.avif",
    href: "#insights",
    fullContent: {
      overview: "Building offshore operational capability does not require high upfront capital or large initial team commitments. The most successful organizations begin with a single dedicated specialist, establish documented Standard Operating Procedures (SOPs), and systematically scale into a dedicated division.",
      sections: [
        {
          heading: "Phase 1: Dedicated Foundation Specialist",
          body: "Begin with a single dedicated resource focused on core transactional workflows (e.g., AP invoice processing, bank reconciliations, or debtor follow-ups) while documenting daily SOPs."
        },
        {
          heading: "Phase 2: Multi-Disciplinary Pod",
          body: "Expand into management accounting, payroll preparation, and tax compliance by adding pod specialists supervised by a dedicated offshore Team Leader."
        },
        {
          heading: "Phase 3: Autonomous Offshore Division",
          body: "Scale into a complete back-office operational center with dedicated QA managers, shift leads, continuous training programs, and real-time SLA dashboards."
        },
        {
          heading: "Build-Operate-Transfer (BOT) Pathway",
          body: "For enterprises aiming for long-term ownership, NICS provides seamless Build-Operate-Transfer options to transition the offshore entity and staff under direct corporate ownership."
        }
      ],
      bullets: [
        "Low-risk progressive onboarding starting with 1 dedicated resource",
        "Full institutional SOP documentation protecting against single-person risk",
        "Dedicated offshore leadership handling HR, workstation security, and retention",
        "Custom escalation workflows aligned with your local management team"
      ],
      keyTakeaway: "A proven, disciplined scalability framework that reduces operational overhead while maintaining total quality control."
    }
  }
];

export const latestNewsItems = [
  {
    id: "news-1",
    category: "Information Security",
    title: "ISO/IEC 27001 principles embedded across all client workflows and user permissions",
    date: "Security Update",
    readTime: "4 min",
    href: "#insights"
  },
  {
    id: "news-2",
    category: "AASB & GST",
    title: "Supporting Australian accounting practices with structured workpapers and GST data prep",
    date: "Practice Update",
    readTime: "5 min",
    href: "#insights"
  },
  {
    id: "news-3",
    category: "Operating Principle",
    title: "What you keep vs what we take care of: establishing clear ownership in offshore models",
    date: "Governance Guide",
    readTime: "6 min",
    href: "#stories"
  },
  {
    id: "news-4",
    category: "Financial Services",
    title: "Streamlining mortgage processing and SOA preparation support for Australian advisers",
    date: "Operations Alert",
    readTime: "5 min",
    href: "#services"
  },
  {
    id: "news-5",
    category: "Due Diligence & Legal Ops",
    title: "Organising data rooms and contract administration for professional firms",
    date: "Advisory Briefing",
    readTime: "4 min",
    href: "#services"
  }
];
