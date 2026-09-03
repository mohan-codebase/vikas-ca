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
    href: "#culture",
    description: "More Capacity. Less Operational Pressure.",
    featured: {
      tag: "Operational Value",
      title: "Why Australian Businesses Work With NICS",
      description: "Access flexible capacity, professional capability, structured delivery, and quality focus.",
      linkText: "Learn more",
      href: "#stories",
      image: "/images/svg-hero.svg",
    },
    columns: [
      {
        heading: "Strategic Advantages",
        items: [
          { title: "Flexible Capacity", href: "#culture", description: "Scale during peak workloads" },
          { title: "Professional Capability", href: "#culture", description: "Experienced finance professionals" },
          { title: "Structured Delivery", href: "#stories", description: "SOPs, review & quality controls" },
          { title: "Cost Efficiency", href: "#stories", description: "Build capacity without in-house overhead" },
        ],
      }
    ]
  },
  {
    title: "Services",
    href: "#services",
    description: "Offshore Support Across Core Business Functions.",
    featured: {
      tag: "Specialised Delivery",
      title: "Support for Australian Practices",
      description: "Workpapers, tax returns, SMSF, audit, and management reporting.",
      linkText: "Explore Services",
      href: "#services",
      image: "/images/team.avif",
    },
    columns: [
      {
        heading: "Service Capabilities",
        items: [
          { title: "Accounting & Finance", href: "#services", description: "Bookkeeping, AP/AR & Reporting" },
          { title: "Australian Practice Support", href: "#services", description: "Workpapers & Tax return support" },
          { title: "SMSF & Audit Support", href: "#services", description: "Back-office SMSF & audit files" },
          { title: "Financial Services Support", href: "#services", description: "Financial planning & mortgage BPO" },
          { title: "Legal & Business Ops", href: "#services", description: "Contracts, due diligence, KYC & data" },
        ],
      }
    ]
  },
  {
    title: "Delivery Models",
    href: "#stories",
    description: "A Delivery Model Built Around Your Business.",
    columns: [
      {
        heading: "Engagement Models",
        items: [
          { title: "Dedicated Resource", href: "#stories", description: "Works exclusively on your business" },
          { title: "Managed Function", href: "#stories", description: "Supervised agreed operational scope" },
          { title: "Project Support", href: "#stories", description: "Specific assignment or backlog" },
          { title: "Build–Operate–Transfer", href: "#stories", description: "Transition to your offshore entity" },
        ],
      }
    ]
  },
  {
    title: "Standards & Security",
    href: "#careers-banner",
    description: "Australian Requirements. International Standards.",
    columns: [
      {
        heading: "Compliance & Security",
        items: [
          { title: "Information Security", href: "#insights", description: "ISO/IEC 27001 aligned principles" },
          { title: "AASB & Australian Tax", href: "#careers-banner", description: "Australian accounting standards" },
          { title: "Quality Focus", href: "#stories", description: "Accountability & continuous improvement" },
          { title: "One Person to Function", href: "#careers-banner", description: "Start small. Scale when ready." },
        ],
      }
    ]
  }
];
