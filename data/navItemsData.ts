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
    label: "Home",
    href: "#home",
  },
  {
    label: "Why Outsourcing",
    href: "#culture",
    heroTag: "Operational Value",
    heroTitle: "More Capacity. Less Operational Pressure.",
    heroDescription:
      "Outsourcing is no longer simply a cost-reduction exercise. Access additional capability, specialist resources and scalable capacity when and where it is needed.",
    heroLinkText: "Why Australian Businesses Work With NICS",
    heroLinkHref: "#stories",
    heroImage: "/images/svg-hero.svg",
    columns: [
      {
        title: "Key Advantages",
        links: [
          { label: "Flexible Capacity", href: "#culture", description: "Scale during growth periods" },
          { label: "Professional Capability", href: "#culture", description: "Experienced finance & ops staff" },
          { label: "Structured Delivery", href: "#stories", description: "SOPs, review mechanisms & QA" },
          { label: "Cost Efficiency", href: "#stories", description: "Capacity without internal overhead" },
        ],
      }
    ],
  },
  {
    label: "Delivery Models",
    href: "#stories",
    heroTag: "Clear Ownership",
    heroTitle: "A Delivery Model Built Around Your Business",
    heroDescription:
      "There is no standard outsourcing package at NICS. We structure our delivery model around your specific requirements.",
    heroLinkText: "What You Keep vs What We Manage",
    heroLinkHref: "#stories",
    heroImage: "/images/team.avif",
    columns: [
      {
        title: "Engagement Structures",
        links: [
          { label: "Dedicated Resource", href: "#stories", description: "Exclusively for your business" },
          { label: "Managed Function", href: "#stories", description: "Supervised operational scope" },
          { label: "Project Support", href: "#stories", description: "Backlog & short-term assignments" },
          { label: "Build–Operate–Transfer", href: "#stories", description: "Custom offshore transition" },
        ],
      }
    ],
  },
  {
    label: "Services",
    href: "#services",
    heroTag: "End-to-End Capabilities",
    heroTitle: "Offshore Support Across Core Business Functions",
    heroDescription:
      "Disciplined accounting, SMSF, audit, financial services, legal and operations support designed for Australian businesses.",
    heroLinkText: "Explore All Capabilities",
    heroLinkHref: "#services",
    heroImage: "/images/audit.avif",
    columns: [
      {
        title: "Core Service Lines",
        links: [
          { label: "Accounting & Finance Operations", href: "#services", description: "Bookkeeping, AP/AR & Reporting" },
          { label: "Support for Australian Practices", href: "#services", description: "Workpapers, Tax & GST/BAS" },
          { label: "SMSF & Audit Support", href: "#services", description: "Back-office SMSF & audit files" },
          { label: "Financial Services Support", href: "#services", description: "Financial planning & mortgages" },
          { label: "Legal & Business Operations", href: "#services", description: "Contract admin, KYC & data" },
        ],
      }
    ],
  },
  {
    label: "Standards & Security",
    href: "#careers-banner",
    heroTag: "Australian Compliance",
    heroTitle: "Australian Requirements. International Standards.",
    heroDescription:
      "Combining India-based delivery capability with processes aligned to AASB, Australian tax & GST, and ISO/IEC 27001 principles.",
    heroLinkText: "View Security Framework",
    heroLinkHref: "#insights",
    heroImage: "/images/svg-accounting.svg",
    columns: [
      {
        title: "Frameworks",
        links: [
          { label: "Information Security", href: "#insights", description: "ISO/IEC 27001 aligned principles" },
          { label: "AASB & Australian Tax", href: "#careers-banner", description: "Local compliance rigor" },
          { label: "Access & Data Protection", href: "#insights", description: "Controlled workflow security" },
          { label: "One Person to Function", href: "#careers-banner", description: "Start small & scale" },
        ],
      }
    ],
  },
  {
    label: "Contact",
    href: "#contact",
    heroTag: "Get Started",
    heroTitle: "Outsource the Work. Keep the Business.",
    heroDescription:
      "You do not need to choose between growth and control. Retain your Australian leadership while building additional capacity.",
    heroLinkText: "Discuss What to Move Offshore",
    heroLinkHref: "#contact",
    heroImage: "/images/team.avif",
    columns: [
      {
        title: "Offices & Inquiry",
        links: [
          { label: "Start an Engagement", href: "#contact", description: "Tell us about your workload" },
          { label: "Global Offices", href: "#locations", description: "Chennai, Sydney & Marlton" },
          { label: "Latest News & Alerts", href: "#news", description: "Practice insights & briefings" },
        ],
      }
    ],
  }
];
