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
  id: "the-bottom-line-25",
  category: "Flagship Publication",
  edition: "The Bottom Line — Issue 25",
  title: "AASB 18 Disclosures, Aged Care Prudential Overhaul & FY27 Tax Preparedness",
  excerpt: "In this landmark edition of The Bottom Line, our national technical leaders provide an authoritative roadmap through the transformative AASB 18 presentation requirements, the new Aged Care Act financial mandates, and emerging ATO transfer pricing enforcement.",
  date: "August 2026",
  readTime: "12 min read",
  author: {
    name: "Dr. Kimberley Stewart",
    role: "National Head of Financial Reporting & Audit Technical",
    office: "Sydney"
  },
  featured: true,
  tags: ["AASB 18", "Financial Reporting", "Aged Care", "Tax Governance"],
  image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  href: "#insights-bottomline"
};

export const secondaryInsights: InsightArticle[] = [
  {
    id: "aasb-18-part-5",
    category: "Technical Guide",
    title: "A Guide to AASB 18: Part 5 — Aggregation, Disaggregation and Labelling",
    excerpt: "Exploring the stringent new principles for presenting operating, investing, and financing categories in the statement of profit or loss, and avoiding misleading aggregation.",
    date: "August 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Marcus Leung",
      role: "Audit & Assurance Partner",
      office: "Melbourne"
    },
    tags: ["AASB 18", "IFRS 18", "Financial Statements"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    href: "#insights-aasb"
  },
  {
    id: "tax-alert-august-2026",
    category: "Tax Alert",
    title: "Tax Alert August 2026: ATO Targeted Compliance on Family Trust Distributions",
    excerpt: "Key considerations following recent Federal Court precedents and updated ATO guidelines on Section 100A and Division 7A benchmark interest rates.",
    date: "August 12, 2026",
    readTime: "5 min read",
    author: {
      name: "Fiona Callaghan",
      role: "Tax Consulting Partner",
      office: "Brisbane"
    },
    tags: ["Tax Consulting", "Trusts", "ATO Compliance"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    href: "#insights-tax-alert"
  },
  {
    id: "aged-care-prudential",
    category: "Industry Analysis",
    title: "Navigating the New Aged Care Financial and Prudential Standards",
    excerpt: "With the new Aged Care Act in effect, providers must align liquidity management, refundable accommodation deposit (RAD) reserves, and governance reporting.",
    date: "August 04, 2026",
    readTime: "7 min read",
    author: {
      name: "David Edwards",
      role: "National Aged Care Sector Lead",
      office: "Sydney"
    },
    tags: ["Aged Care", "Governance", "Prudential Standards"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    href: "#insights-aged-care"
  }
];

export const latestNewsItems = [
  {
    id: "news-1",
    category: "Regulatory Update",
    title: "Navigating the new aged care Financial and Prudential Standards",
    date: "14 Aug 2026",
    readTime: "4 min",
    href: "#insights-aged-care"
  },
  {
    id: "news-2",
    category: "Accounting Standards",
    title: "A guide to AASB 18: Part 5 – Aggregation, disaggregation and labelling",
    date: "11 Aug 2026",
    readTime: "6 min",
    href: "#insights-aasb"
  },
  {
    id: "news-3",
    category: "Advisory Briefing",
    title: "New Financial Year Financial Health Check: Key Priorities for Mid-Market CFOs",
    date: "02 Aug 2026",
    readTime: "5 min",
    href: "#insights-health-check"
  },
  {
    id: "news-4",
    category: "Tax Alert",
    title: "Tax Alert – August 2026: Federal Court Rulings and State Surcharges",
    date: "28 Jul 2026",
    readTime: "5 min",
    href: "#insights-tax-alert"
  },
  {
    id: "news-5",
    category: "Wealth & Family",
    title: "Family trusts: are they still worth it? Evaluating modern structuring benefits",
    date: "22 Jul 2026",
    readTime: "7 min",
    href: "#insights-family-trusts"
  }
];
