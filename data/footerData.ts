export interface FooterColumn {
  heading: string;
  links: {
    title: string;
    href: string;
    badge?: string;
  }[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { title: "Accounting & Finance Operations", href: "#services" },
      { title: "Support for Australian Practices", href: "#services" },
      { title: "SMSF & Audit Back-Office", href: "#services" },
      { title: "Financial Planning & Mortgages", href: "#services" },
      { title: "Legal & Business Operations", href: "#services" },
    ],
  },
  {
    heading: "Delivery Models",
    links: [
      { title: "Dedicated Resource", href: "#stories" },
      { title: "Managed Function", href: "#stories" },
      { title: "Project Support", href: "#stories" },
      { title: "Build–Operate–Transfer (BOT)", href: "#stories" },
      { title: "What You Keep vs What We Manage", href: "#stories" },
    ],
  },
  {
    heading: "Standards & Why NICS",
    links: [
      { title: "Flexible Capacity", href: "#culture" },
      { title: "Professional Capability", href: "#culture" },
      { title: "ISO/IEC 27001 Information Security", href: "#insights" },
      { title: "AASB & Australian Tax Alignment", href: "#careers-banner" },
      { title: "From One Person to Function", href: "#careers-banner" },
    ],
  },
  {
    heading: "Locations & Contact",
    links: [
      { title: "Chennai (HQ Delivery Centre)", href: "#locations" },
      { title: "Sydney (Australian Client Relations)", href: "#locations" },
      { title: "Marlton, NJ (USA Office)", href: "#locations" },
      { title: "Discuss What to Move Offshore", href: "/contact" },
    ],
  },
];

export const legalLinks = [
  { title: "Privacy Policy", href: "#privacy" },
  { title: "Terms of Engagement", href: "#terms" },
  { title: "Information Security", href: "#insights" },
  { title: "Australian Standards & Compliance", href: "#careers-banner" },
  { title: "Accessibility", href: "#accessibility" },
];
