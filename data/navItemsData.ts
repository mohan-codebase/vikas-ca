export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  heroTag?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroLinkText?: string;
  heroLinkHref?: string;
  heroImage?: string;
  columns?: NavColumn[];
}

export const defaultNavItems: NavItem[] = [
  {
    label: "Why Outsourcing",
    href: "#why-outsourcing",
    heroTag: "Strategic Advantage",
    heroTitle: "Enhance Productivity and Efficiency",
    heroDescription:
      "Empowering business growth through agile scalability and strategic focus on client acquisition.",
    heroLinkText: "Discover the NICS Advantage",
    heroLinkHref: "#why-outsourcing",
    heroImage:
      "/images/svg-hero.svg",
    columns: [
      {
        title: "Benefits",
        links: [
          { label: "Enhance Productivity", href: "#productivity" },
          { label: "Empowering Business", href: "#empower" },
          { label: "Cost Advantages", href: "#cost" },
          { label: "NICS Advantage", href: "#advantage" },
        ],
      }
    ],
  },
  {
    label: "How It Works",
    href: "#how-it-works",
    heroTag: "Seamless Integration",
    heroTitle: "4-Step Seamless Integration Process",
    heroDescription:
      "From understanding requirements to continuous quality control, we make outsourcing simple and effective.",
    heroLinkText: "Know your models",
    heroLinkHref: "#models",
    heroImage:
      "/images/svg-team.svg",
    columns: [
      {
        title: "Engagement Models",
        links: [
          { label: "Insourcing", href: "#models" },
          { label: "Insourcing with Manager", href: "#models" },
          { label: "Job-by-Job", href: "#models" },
          { label: "BOT Model", href: "#models" },
        ],
      }
    ],
  },
  {
    label: "Services",
    href: "#services",
    heroTag: "Comprehensive Support",
    heroTitle: "End-to-End Back-Office Capabilities",
    heroDescription:
      "Tailored engagement models designed specifically for small-to-medium enterprises and independent practitioners.",
    heroLinkText: "View all Services",
    heroLinkHref: "#services",
    heroImage:
      "/images/svg-mortgage.svg",
    columns: [
      {
        title: "Core Services",
        links: [
          { label: "Accounting", href: "#services" },
          { label: "Compliance & Audit", href: "#services" },
          { label: "Mortgage Broking", href: "#services" },
          { label: "Financial Planning Support", href: "#services" },
          { label: "Operations & Administration", href: "#services" },
        ],
      }
    ],
  },
  {
    label: "Who We Are",
    href: "#about",
    heroTag: "Our Story",
    heroTitle: "Redefining BPO for SMEs",
    heroDescription:
      "Founded in 2008 by Andrew Noble and Boobalan Madhavan to champion a human-first approach to offshore talent.",
    heroLinkText: "Meet the Team",
    heroLinkHref: "#team",
    heroImage:
      "/images/svg-team.svg",
    columns: [
      {
        title: "About Us",
        links: [
          { label: "Our Story", href: "#about" },
          { label: "Leadership Team", href: "#team" },
          { label: "Customer Value Proposition", href: "#cvp" },
          { label: "Employee Value Proposition", href: "#evp" },
        ],
      }
    ],
  },
  {
    label: "Discover More",
    href: "#discover",
    heroTag: "Knowledge Hub",
    heroTitle: "Resources and Technical Insights",
    heroDescription:
      "Access FAQs, case studies, industry insights, and technology transition guides.",
    heroLinkText: "Explore IT Security",
    heroLinkHref: "#it",
    heroImage:
      "/images/svg-accounting.svg",
    columns: [
      {
        title: "Resources",
        links: [
          { label: "Technology and Security", href: "#it" },
          { label: "Why India?", href: "#india" },
          { label: "Blog & Insights", href: "#blog" },
          { label: "FAQs", href: "#faq" },
        ],
      }
    ],
  }
];
