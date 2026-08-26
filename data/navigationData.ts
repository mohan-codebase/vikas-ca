export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  heading: string;
  items: NavSubItem[];
}

export interface MegaMenuItem {
  title: string;
  href: string;
  description: string;
  featured?: {
    tag: string;
    title: string;
    description: string;
    linkText: string;
    href: string;
    image?: string;
  };
  groups?: NavGroup[];
  columns?: {
    heading: string;
    items: NavSubItem[];
  }[];
  quickLinks?: {
    title: string;
    href: string;
  }[];
}

export const navigationData: MegaMenuItem[] = [
  {
    title: "Why Outsourcing",
    href: "#why",
    description: "The strategic advantages of outsourcing.",
    featured: {
      tag: "Competitive Edge",
      title: "Cost Advantage",
      description: "Up to 70% direct cost savings with zero CapEx and no infrastructure costs.",
      linkText: "Read more",
      href: "#cost",
      image: "/images/svg-hero.svg",
    },
    columns: [
      {
        heading: "Benefits",
        items: [
          { title: "Enhance Productivity", href: "#productivity", description: "Eliminate bottlenecks" },
          { title: "Empowering Business", href: "#empower", description: "Scale without overhead" },
          { title: "Cost Advantages", href: "#cost", description: "Up to 70% savings" },
          { title: "NICS Advantage", href: "#advantage", description: "Proven domain expertise" },
        ],
      }
    ]
  },
  {
    title: "Services",
    href: "#services",
    description: "End-to-End Back-Office Capabilities.",
    featured: {
      tag: "Specialised Teams",
      title: "Compliance & Audit",
      description: "SMSF, tax filings, and audit back-office support.",
      linkText: "Explore Compliance",
      href: "#services",
      image: "/images/svg-team.svg",
    },
    columns: [
      {
        heading: "Core Offerings",
        items: [
          { title: "Accounting", href: "#services", description: "Bookkeeping & reporting" },
          { title: "Compliance", href: "#services", description: "Tax & SMSF" },
          { title: "Mortgage Broking", href: "#services", description: "Loan processing" },
          { title: "Financial Planning", href: "#services", description: "Paraplanning & SOAs" },
          { title: "Operations", href: "#services", description: "Virtual assistants & admin" },
        ],
      }
    ]
  },
  {
    title: "How It Works",
    href: "#how-it-works",
    description: "Seamless integration process and models.",
    columns: [
      {
        heading: "Engagement Models",
        items: [
          { title: "Insourcing", href: "#models", description: "Dedicated resource" },
          { title: "Insourcing with Manager", href: "#models", description: "Supervised dedicated resource" },
          { title: "Job-by-Job", href: "#models", description: "Ad-hoc task basis" },
          { title: "BOT Model", href: "#models", description: "Build, Operate, Transfer" },
        ],
      }
    ]
  },
  {
    title: "Who We Are",
    href: "#who-we-are",
    description: "About NICS.",
    columns: [
      {
        heading: "Our Company",
        items: [
          { title: "About Us", href: "#about", description: "Our mission and vision" },
          { title: "Team", href: "#team", description: "Leadership team" },
          { title: "Customer Value", href: "#cvp", description: "Empowering clients" },
          { title: "Employee Value", href: "#evp", description: "Nurturing careers" },
        ],
      }
    ]
  }
];
