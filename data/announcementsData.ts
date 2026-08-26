export interface AnnouncementItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  summary: string;
  date: string;
  linkText: string;
  href: string;
  image: string;
}

export const announcementsData: AnnouncementItem[] = [
  {
    id: "iso-27001-2026",
    category: "Data Security",
    badge: "ISO 27001 Certified",
    title: "NICS Achieves 100% ISO 27001 Compliance Renewal",
    summary: "Reaffirming our absolute commitment to client data protection, our global delivery centres have successfully completed the rigorous ISO 27001 certification audit.",
    date: "August 2026",
    linkText: "Read about our security standards",
    href: "#about-security",
    image: "/images/svg-global.svg"
  },
  {
    id: "us-office-expansion",
    category: "Global Growth",
    badge: "New Office",
    title: "NICS officially opens new US headquarters in Marlton, New Jersey",
    summary: "Led by Co-Founder Andrew Noble, our new US presence allows us to provide tailored BPO and tax compliance support to North American firms.",
    date: "August 2026",
    linkText: "Learn about our US services",
    href: "#about-us-expansion",
    image: "/images/svg-global.svg"
  },
  {
    id: "leadership-update",
    category: "Firm News",
    badge: "Leadership",
    title: "Boobalan Madhavan and Gorav Gupta celebrate 10 years of global BPO excellence",
    summary: "Marking a decade of simplifying talent collaboration and delivering exceptional offshore services to accounting and financial planning firms worldwide.",
    date: "July 2026",
    linkText: "Read our founders' story",
    href: "#people",
    image: "/images/svg-global.svg"
  }
];
