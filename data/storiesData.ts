export interface ClientStory {
  id: string;
  badge: string;
  category: string;
  headline: string;
  subheadline: string;
  quote?: string;
  author?: {
    name: string;
    title: string;
    firm: string;
    avatar?: string;
  };
  synopsis: string;
  stats?: {
    label: string;
    value: string;
  }[];
  linkText: string;
  href: string;
  image: string;
  tags: string[];
}

export const featuredCaseStudy: ClientStory = {
  id: "infini-resources",
  badge: "Client Case Study",
  category: "Resources & Capital Markets",
  headline: "From Greenfield Exploration to ASX Debut: Powering the Clean Energy Transition",
  subheadline: "How Vikas CA Perth guided Infini Resources through complex structuring, statutory audits, and an oversubscribed initial public offering.",
  quote: "Vikas CA acted as true partners from day one. Their commercial agility and deep mining sector knowledge gave our board total confidence through the listing process.",
  author: {
    name: "Charles Thomas",
    title: "Managing Director",
    firm: "Infini Resources (ASX: I88)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  synopsis: "Infini Resources required specialized transaction advisory, Investigating Accountant's Reports (IAR), and tax structuring for its critical minerals assets across Western Australia and Canada. Vikas CA's Perth office delivered an end-to-end listing advisory program.",
  stats: [
    { label: "IPO Capital Raised", value: "$5.5M" },
    { label: "Oversubscription", value: "140%" },
    { label: "Timeline to Listing", value: "14 Weeks" }
  ],
  linkText: "Read the Infini Resources case study",
  href: "#case-study-infini",
  image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
  tags: ["Transaction Advisory", "ASX Listing", "Tax Structuring", "Mining & Resources"]
};

export const podcastStory: ClientStory = {
  id: "talking-family-business",
  badge: "Special Podcast Series",
  category: "Family Business & Succession",
  headline: "Talking Family Business: Navigating Harmony, Wealth & Legacy",
  subheadline: "A 6-part investigative audio series unpacking the emotional and financial realities of Australia's family-owned enterprises.",
  synopsis: "Family businesses generate over 50% of Australia's GDP. In this exclusive series, Vikas CA partners sit down with prominent multi-generational business leaders to discuss succession friction, governance frameworks, and preparing next-gen leadership.",
  linkText: "Listen to all 6 podcast episodes",
  href: "#podcast-series",
  image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80",
  tags: ["6 Episodes", "Apple Podcasts & Spotify", "Succession Planning", "Family Governance"]
};

export const peopleQAStory: ClientStory = {
  id: "will-and-remi",
  badge: "People & Culture Spotlight",
  category: "Life at Vikas CA",
  headline: "Where Ambition Meets Humanity: Inside the Careers of Will & Rémi",
  subheadline: "How our Sydney and Perth team members balance high-stakes corporate deals with endurance athletic pursuits and growing families.",
  synopsis: "In this candid conversation, Will (Corporate Advisory Manager in Sydney) shares how becoming a stepparent and training for ultra-marathons thrives alongside heavy M&A dealflow, while Rémi (Tax Advisory in Perth) reflects on rapid promotion, mentorship, and community leadership.",
  author: {
    name: "Will & Rémi",
    title: "Corporate Advisory & Tax Managers",
    firm: "Vikas CA Sydney & Vikas CA Perth",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80"
  },
  linkText: "Read the full interview",
  href: "#people-qa",
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  tags: ["Sydney & Perth", "Career Growth", "Wellbeing", "Work-Life Integration"]
};
