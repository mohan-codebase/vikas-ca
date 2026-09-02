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
  id: "delivery-model-ownership",
  badge: "Clear Ownership",
  category: "Operating Principle",
  headline: "What You Keep. What We Take Care Of.",
  subheadline: "A successful offshore model requires clear ownership. You control the outcome. We help deliver the work.",
  quote: "You retain client relationships, commercial decisions, professional judgement, and final approvals. NICS manages resource allocation, day-to-day processing, staff coordination, and quality review.",
  author: {
    name: "Operating Principle",
    title: "Shared Governance Framework",
    firm: "NICS Delivery Model",
    avatar: "/images/svg-team.svg"
  },
  synopsis: "There is no standard outsourcing package at NICS. Some clients need one accountant. Others need an entire finance support team. Some require assistance only during month-end or tax season, while others want a long-term offshore operation. Our delivery model is structured around your exact requirements.",
  stats: [
    { label: "You Retain", value: "Strategy" },
    { label: "NICS Manages", value: "Execution" },
    { label: "Governance", value: "100% Clear" }
  ],
  linkText: "Discuss how we structure ownership",
  href: "#contact",
  image: "/images/svg-case-study-scaling.svg",
  tags: ["Dedicated Resource", "Managed Function", "Project Support", "BOT Model"]
};

export const podcastStory: ClientStory = {
  id: "why-australian-businesses-work-with-nics",
  badge: "The NICS Advantage",
  category: "Client Value",
  headline: "Why Australian Businesses Work With NICS",
  subheadline: "Eight core advantages that make NICS a disciplined extension of your existing team.",
  synopsis: "Access flexible capacity when workloads peak, professional capability across accounting and operations, structured delivery with SOPs, scalable resourcing, technology enablement in your existing software, quality review focus, cost efficiency, and true integration.",
  linkText: "Read about our client advantages",
  href: "#contact",
  image: "/images/svg-webinar.svg",
  tags: ["Flexible Capacity", "Structured Delivery", "Quality Focus", "Cost Efficiency"]
};

export const peopleQAStory: ClientStory = {
  id: "tailored-delivery-models",
  badge: "Engagement Models",
  category: "Delivery Architecture",
  headline: "A Delivery Model Built Around Your Business",
  subheadline: "Flexible engagement structures tailored to your scale, timeline, and operational control requirements.",
  synopsis: "Whether you need a Dedicated Resource who works exclusively on your systems, a Managed Function with defined supervisor workflows, Project Support for backlog clearance, or Build–Operate–Transfer (BOT) to build your own offshore entity.",
  author: {
    name: "Delivery Leadership",
    title: "Client Solutions Team",
    firm: "NICS",
    avatar: "/images/svg-team.svg"
  },
  linkText: "Explore our 4 engagement models",
  href: "#contact",
  image: "/images/svg-team-interview.svg",
  tags: ["Dedicated Resource", "Managed Function", "Project Support", "BOT Transition"]
};
