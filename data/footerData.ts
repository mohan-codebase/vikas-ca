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
      { title: "Accounting", href: "#services" },
      { title: "Compliance (SMSF, Tax)", href: "#services" },
      { title: "Mortgage Broking BPO", href: "#services" },
      { title: "Financial Planning Support", href: "#services" },
      { title: "Operations & Admin", href: "#services" },
    ],
  },
  {
    heading: "Why NICS",
    links: [
      { title: "Up to 70% Cost Savings", href: "#benefits" },
      { title: "100% ISO 27001 Certified", href: "#benefits" },
      { title: "24/7 Capacity", href: "#benefits" },
      { title: "Talent Collaboration Simplified", href: "#benefits" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { title: "India (Chennai) — HQ", href: "#locations" },
      { title: "Australia (Pymble)", href: "#locations" },
      { title: "USA (Marlton, NJ)", href: "#locations" },
    ],
  },
  {
    heading: "Insights & Company",
    links: [
      { title: "BPO Strategy Guides", href: "#insights" },
      { title: "Outsource Your Way Forward Webinar", href: "#stories" },
      { title: "Meet the Founders", href: "#people" },
      { title: "ISO 27001 Announcement", href: "#about" },
      { title: "Careers at NICS", href: "#careers" },
    ],
  },
];

export const legalLinks = [
  { title: "Privacy Policy", href: "#privacy" },
  { title: "Terms of Use", href: "#terms" },
  { title: "Security Standards", href: "#security" },
  { title: "Modern Slavery Statement", href: "#modern-slavery" },
  { title: "Accessibility", href: "#accessibility" },
];
