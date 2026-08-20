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
    id: "award-2026",
    category: "Recognition",
    badge: "2026 Client Choice Awards",
    title: "Vikas CA named Best Accounting & Consulting Services Firm",
    summary: "Reflecting our relentless focus on client care and commercial clarity, our network has been awarded top honours in the prestigious Australian Financial Review Client Choice Awards.",
    date: "August 2026",
    linkText: "Read the award announcement",
    href: "#about-awards",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "un-global-compact",
    category: "Sustainability",
    badge: "UN Global Compact",
    title: "Strengthening sustainability commitment: Joining UN Global Compact Network",
    summary: "Aligning our operations, governance, and client advisory practices with the Ten Principles of the UN Global Compact across human rights, labour, environment, and anti-corruption.",
    date: "August 2026",
    linkText: "Explore our ESG commitments",
    href: "#about-commitment",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "leadership-promotions",
    category: "Firm News",
    badge: "Leadership & Growth",
    title: "National leadership strengthened with senior partner and director promotions",
    summary: "Recognising exceptional talent and dedication across our corporate advisory, assurance, and tax divisions in Sydney, Melbourne, Brisbane, and Perth.",
    date: "July 2026",
    linkText: "Meet our new leaders",
    href: "#people",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  }
];
