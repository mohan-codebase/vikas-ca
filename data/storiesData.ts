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
  id: "scaling-sme-practice",
  badge: "Client Case Study",
  category: "Accounting & Compliance",
  headline: "From Capacity Constraints to Uncapped Growth: Scaling a Mid-Tier Practice",
  subheadline: "How NICS helped an Australian accounting firm overcome talent shortages and achieve 70% cost savings on compliance tasks.",
  quote: "NICS simplified talent collaboration for us. Their team integrated seamlessly into our workflow, and the 100% ISO 27001 certification gave us absolute peace of mind.",
  author: {
    name: "Sarah Jenkins",
    title: "Managing Partner",
    firm: "Jenkins & Partners Advisory",
    avatar: "/images/svg-team.svg"
  },
  synopsis: "Facing critical domestic talent shortages and rising operational costs, Jenkins & Partners needed a reliable way to handle baseline compliance and SMSF administration. NICS deployed a dedicated offshore team in Chennai that operated as a direct extension of their local staff.",
  stats: [
    { label: "Cost Savings", value: "70%" },
    { label: "Turnaround Time", value: "-45%" },
    { label: "Data Security", value: "ISO 27001" }
  ],
  linkText: "Read the full case study",
  href: "#case-study-sme",
  image: "/images/svg-case-study-scaling.svg",
  tags: ["Outsourcing", "Cost Savings", "SMSF", "Accounting"]
};

export const podcastStory: ClientStory = {
  id: "outsource-your-way-forward",
  badge: "Webinar Series",
  category: "Business Process Outsourcing",
  headline: "Outsource Your Way Forward: Strategies for Modern Firms",
  subheadline: "A 4-part series unpacking the benefits of BPO, offshore teams, and maintaining world-class data security.",
  synopsis: "In this exclusive series, NICS founders Boobalan Madhavan and Andrew Noble discuss how modern practices can leverage global talent to drive margins and focus on high-value advisory.",
  linkText: "Watch the webinar series",
  href: "#webinar-series",
  image: "/images/svg-webinar.svg",
  tags: ["4 Episodes", "On-Demand Video", "BPO Strategy", "Offshoring"]
};

export const peopleQAStory: ClientStory = {
  id: "global-talent",
  badge: "Team Spotlight",
  category: "Life at NICS",
  headline: "Building Bridges: The NICS Global Delivery Team",
  subheadline: "How our operations in Chennai ensure 24/7 capacity and seamless integration with our clients in Australia and the US.",
  synopsis: "We sat down with Gorav Gupta, Co-Founder & Director, and key team leaders in our Chennai office to discuss our rigorous training programs, data security protocols, and what it takes to deliver world-class BPO services continuously.",
  author: {
    name: "Gorav Gupta",
    title: "Co-Founder & Director",
    firm: "NICS",
    avatar: "/images/svg-team.svg"
  },
  linkText: "Read the full interview",
  href: "#people-qa",
  image: "/images/svg-team-interview.svg",
  tags: ["Chennai Operations", "24/7 Capacity", "ISO 27001", "Team Culture"]
};
