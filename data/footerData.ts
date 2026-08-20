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
      { title: "Advisory", href: "#services" },
      { title: "Audit & Assurance", href: "#services" },
      { title: "Business Services", href: "#services" },
      { title: "Tax Consulting", href: "#services" },
      { title: "Wealth Management", href: "#services" },
      { title: "Debt Advisory", href: "#services" },
      { title: "ESG & Sustainability", href: "#services" },
      { title: "Forensic Services", href: "#services" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { title: "Family Business", href: "#industries" },
      { title: "Mining & Resources", href: "#industries" },
      { title: "Property & Construction", href: "#industries" },
      { title: "Aged Care & Health", href: "#industries" },
      { title: "Not For Profit", href: "#industries" },
      { title: "Funds Management", href: "#industries" },
      { title: "Hospitality & Leisure", href: "#industries" },
      { title: "Government & Public Sector", href: "#industries" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { title: "Sydney", href: "#locations" },
      { title: "Melbourne", href: "#locations" },
      { title: "Brisbane", href: "#locations" },
      { title: "Perth", href: "#locations" },
      { title: "Adelaide", href: "#locations" },
      { title: "Auckland (NZ)", href: "#locations" },
      { title: "Newcastle", href: "#locations" },
      { title: "Wollongong & Regional", href: "#locations" },
    ],
  },
  {
    heading: "Insights & People",
    links: [
      { title: "The Bottom Line Magazine", href: "#insights" },
      { title: "Tax Alerts", href: "#insights" },
      { title: "AASB 18 Standards Guide", href: "#insights" },
      { title: "Talking Family Business Podcast", href: "#stories" },
      { title: "Meet Our Partners", href: "#people" },
      { title: "Awards & Client Choice 2026", href: "#about" },
      { title: "Life at Vikas CA & Careers", href: "#careers" },
      { title: "UN Global Compact & CSR", href: "#about" },
    ],
  },
];

export const legalLinks = [
  { title: "Privacy Policy", href: "#privacy" },
  { title: "Terms of Use", href: "#terms" },
  { title: "Whistleblower Policy", href: "#whistleblower" },
  { title: "Modern Slavery Statement", href: "#modern-slavery" },
  { title: "Transparency Report", href: "#transparency" },
  { title: "Accessibility", href: "#accessibility" },
];
