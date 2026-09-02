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
  href: "#insights"
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
    href: "#insights"
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
    href: "#insights"
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
    href: "#insights"
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
