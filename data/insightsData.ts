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
  id: "bpo-guide-2026",
  category: "Flagship Publication",
  edition: "The NICS Guide — 2026 Edition",
  title: "Maximising Margins: The Strategic Advantage of BPO in 2026",
  excerpt: "Discover how accounting and financial planning firms are utilizing offshore teams to combat local skill shortages, achieving up to 70% cost savings without compromising on quality or security.",
  date: "August 2026",
  readTime: "12 min read",
  author: {
    name: "Boobalan Madhavan",
    role: "Founder & MD",
    office: "Sydney"
  },
  featured: true,
  tags: ["BPO", "Cost Savings", "Offshore Teams", "Strategy"],
  image: "/images/svg-security.svg",
  href: "#insights-bpo-guide"
};

export const secondaryInsights: InsightArticle[] = [
  {
    id: "iso-27001-security",
    category: "Technical Guide",
    title: "Why ISO 27001 Certification is Non-Negotiable for Your BPO Partner",
    excerpt: "Understanding the stringent requirements of ISO 27001 and how NICS guarantees 100% data security for your sensitive client information.",
    date: "August 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Gorav Gupta",
      role: "Co-Founder & Director",
      office: "Chennai"
    },
    tags: ["ISO 27001", "Data Security", "Compliance"],
    image: "/images/svg-security.svg",
    href: "#insights-security"
  },
  {
    id: "mortgage-broking-scale",
    category: "Industry Analysis",
    title: "Accelerating Settlements: Outsourcing for Mortgage Brokers",
    excerpt: "How dedicated offshore processing teams enable brokers to write more loans and reduce turnaround times dramatically.",
    date: "August 12, 2026",
    readTime: "5 min read",
    author: {
      name: "Andrew Noble",
      role: "Co-Founder",
      office: "USA"
    },
    tags: ["Mortgage Broking", "Loan Processing", "Growth"],
    image: "/images/svg-security.svg",
    href: "#insights-mortgage"
  },
  {
    id: "financial-planning-paraplanning",
    category: "Industry Analysis",
    title: "Solving the Paraplanning Bottleneck with Offshore Teams",
    excerpt: "Turn around Statements of Advice faster and reduce the cost of compliance with scalable paraplanning support.",
    date: "August 04, 2026",
    readTime: "7 min read",
    author: {
      name: "Boobalan Madhavan",
      role: "Founder & MD",
      office: "Sydney"
    },
    tags: ["Financial Planning", "Paraplanning", "Efficiency"],
    image: "/images/svg-security.svg",
    href: "#insights-paraplanning"
  }
];

export const latestNewsItems = [
  {
    id: "news-1",
    category: "Security Update",
    title: "NICS renews ISO 27001 certification with zero non-conformances",
    date: "14 Aug 2026",
    readTime: "4 min",
    href: "#insights-security"
  },
  {
    id: "news-2",
    category: "BPO Strategy",
    title: "Talent collaboration simplified: integrating your local and offshore teams",
    date: "11 Aug 2026",
    readTime: "6 min",
    href: "#insights-bpo-guide"
  },
  {
    id: "news-3",
    category: "Advisory Briefing",
    title: "Outsource your way forward: 5 tasks you should delegate today",
    date: "02 Aug 2026",
    readTime: "5 min",
    href: "#insights-delegate"
  },
  {
    id: "news-4",
    category: "Tax Update",
    title: "Streamlining tax season with 24/7 compliance processing",
    date: "28 Jul 2026",
    readTime: "5 min",
    href: "#insights-tax"
  },
  {
    id: "news-5",
    category: "Firm News",
    title: "NICS expands support for US accounting practices",
    date: "22 Jul 2026",
    readTime: "7 min",
    href: "#insights-us-expansion"
  }
];
