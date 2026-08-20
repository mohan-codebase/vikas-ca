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
    title: "About Us",
    href: "#about",
    description: "An award-winning chartered accounting and advisory network helping Australian businesses thrive for over 40 years.",
    featured: {
      tag: "Client Choice Awards Winner",
      title: "Best Accounting & Consulting Services Firm 2026",
      description: "Recognised across Australia for our outstanding client service standards and trusted advisor relationships.",
      linkText: "Discover our recognition",
      href: "#about-awards",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Who We Are",
        items: [
          { title: "About Vikas CA", href: "#about", description: "Our heritage, reach and values" },
          { title: "Awards & Recognition", href: "#awards", description: "Client Choice Awards 2026 Winner" },
          { title: "Vikas CA Global Network", href: "#global", description: "Present in 157+ countries worldwide" },
          { title: "Celebrating 40+ Years", href: "#heritage", description: "Four decades of trusted advisory" },
        ],
      },
      {
        heading: "Our Commitments",
        items: [
          { title: "Our Commitment & CSR", href: "#commitment", description: "Signatory to UN Global Compact" },
          { title: "Sustainability & ESG", href: "#esg", description: "Driving responsible business practices" },
          { title: "Diversity & Inclusion", href: "#diversity", description: "Fostering authentic workplace cultures" },
          { title: "Contact Executive Team", href: "#contact", description: "Connect with national leadership" },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "#services",
    description: "Comprehensive advisory, accounting, tax, and wealth solutions engineered for mid-market leaders and private wealth.",
    featured: {
      tag: "Specialist Capability",
      title: "Strategic Advisory & Finance Transformation",
      description: "Equipping CFOs and leadership teams to modernize financial architecture, manage risk, and capture market opportunities.",
      linkText: "Explore all advisory capabilities",
      href: "#services-advisory",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Advisory",
        items: [
          { title: "Debt Advisory", href: "#advisory-debt" },
          { title: "ESG & Sustainability Advisory", href: "#advisory-esg", badge: "Focus" },
          { title: "Finance Transformation", href: "#advisory-transformation" },
          { title: "Financial Modelling", href: "#advisory-modelling" },
          { title: "Forensic Services", href: "#advisory-forensic" },
          { title: "Insolvency Services", href: "#advisory-insolvency" },
          { title: "Restructuring & Risk", href: "#advisory-restructuring" },
          { title: "Transaction Advisory & M&A", href: "#advisory-transactions" },
          { title: "Valuations", href: "#advisory-valuations" },
        ],
      },
      {
        heading: "Audit & Tax Consulting",
        items: [
          { title: "Financial Audits & Reviews", href: "#audit-financial" },
          { title: "Internal Audit & Risk Assurance", href: "#audit-internal" },
          { title: "Sustainability Reporting (AASB S1/S2)", href: "#audit-sustainability", badge: "New" },
          { title: "Corporate Tax Strategy", href: "#tax-corporate" },
          { title: "International Tax & Transfer Pricing", href: "#tax-international" },
          { title: "R&D Tax Incentives", href: "#tax-rd" },
          { title: "Employment & Payroll Tax", href: "#tax-employment" },
        ],
      },
      {
        heading: "Business & Wealth",
        items: [
          { title: "Accounting & Financial Reporting", href: "#business-accounting" },
          { title: "Business Planning & Strategy", href: "#business-planning" },
          { title: "Finance Function Outsourcing", href: "#business-outsourcing" },
          { title: "Succession & Family Governance", href: "#business-succession" },
          { title: "Family Office Services", href: "#wealth-family-office" },
          { title: "Private Wealth & SMSF", href: "#wealth-smsf" },
          { title: "Estate & Aged Care Planning", href: "#wealth-estate" },
        ],
      },
    ],
  },
  {
    title: "Industries",
    href: "#industries",
    description: "Deep sector expertise tailored to Australian market dynamics and regulatory frameworks.",
    featured: {
      tag: "Sector Spotlight",
      title: "Family Business & Multigenerational Wealth",
      description: "Helping Australian family-owned enterprises navigate succession, governance, and long-term sustainable growth.",
      linkText: "Listen to the podcast series",
      href: "#stories",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Private & Commercial",
        items: [
          { title: "Family Business", href: "#industry-family-business" },
          { title: "Property & Construction", href: "#industry-property" },
          { title: "Mining & Resources", href: "#industry-mining" },
          { title: "Hospitality & Leisure", href: "#industry-hospitality" },
          { title: "Hire & Rental", href: "#industry-hire" },
          { title: "Customs Brokers & Forwarders", href: "#industry-customs" },
        ],
      },
      {
        heading: "Specialist & Regulated",
        items: [
          { title: "Aged Care & Healthcare", href: "#industry-aged-care" },
          { title: "Co-operatives & Mutuals", href: "#industry-coops" },
          { title: "Funds Management", href: "#industry-funds" },
          { title: "Government & Public Services", href: "#industry-government" },
          { title: "Law Firms & Barristers", href: "#industry-legal" },
          { title: "Not-For-Profit & Charities", href: "#industry-nfp" },
        ],
      },
    ],
  },
  {
    title: "Our People",
    href: "#people",
    description: "Collaborative specialists committed to building personal, enduring partnerships with clients across Australasia.",
    featured: {
      tag: "People & Culture",
      title: "Together We Make It Happen",
      description: "When our people work together, great things happen for our clients, our communities, and our firms.",
      linkText: "Meet our leadership",
      href: "#people-story",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Leadership & Experts",
        items: [
          { title: "Partner Directory", href: "#people", description: "Connect directly with firm partners" },
          { title: "Industry Specialists", href: "#people-specialists", description: "Sector-focused advisory teams" },
          { title: "Key Leadership Promotions", href: "#news", description: "Recent executive appointments" },
          { title: "Inclusion & Diversity Council", href: "#about", description: "Fostering inclusive leadership" },
        ],
      },
      {
        heading: "Culture & Insights",
        items: [
          { title: "Q&A with Will & Rémi", href: "#people-qa", description: "Balancing elite sport, family & career" },
          { title: "Client First Philosophy", href: "#about-values", description: "Our award-winning approach" },
          { title: "Community Partnerships", href: "#commitment", description: "Giving back across Australia" },
        ],
      },
    ],
  },
  {
    title: "Locations",
    href: "#locations",
    description: "10 autonomous offices across Australia and New Zealand, backed by a global network of 40,000+ professionals.",
    featured: {
      tag: "Australasian Reach",
      title: "10 Offices Across Australia & NZ",
      description: "Local partner access with the scale, depth, and cross-border capabilities of a top-tier international firm.",
      linkText: "Explore all offices",
      href: "#locations",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Australia East Coast",
        items: [
          { title: "Sydney (NSW)", href: "#loc-sydney", description: "Level 19, 207 Kent Street" },
          { title: "Melbourne (VIC)", href: "#loc-melbourne", description: "Level 9, 575 Bourke Street" },
          { title: "Brisbane (QLD)", href: "#loc-brisbane", description: "Level 15, 66 Eagle Street" },
          { title: "Newcastle (NSW)", href: "#loc-newcastle", description: "Level 2, 117 Bull Street" },
          { title: "Wollongong (NSW)", href: "#loc-wollongong", description: "65 Kembla Street" },
          { title: "Robina (Gold Coast)", href: "#loc-robina", description: "Level 2, 69 Laver Drive" },
          { title: "Lismore (Northern Rivers)", href: "#loc-lismore", description: "123 Molesworth Street" },
        ],
      },
      {
        heading: "Western Australia, SA & NZ",
        items: [
          { title: "Perth (WA)", href: "#loc-perth", description: "Level 4, 130 Stirling Street" },
          { title: "Adelaide (SA)", href: "#loc-adelaide", description: "Level 1, 169 Fullarton Road" },
          { title: "Auckland (New Zealand)", href: "#loc-auckland", description: "Level 6, 57 Symonds Street" },
          { title: "Global Network (157 Countries)", href: "#global-reach", description: "Vikas CA International Network" },
        ],
      },
    ],
  },
  {
    title: "Insights",
    href: "#insights",
    description: "Authoritative commentary, tax alerts, accounting standards guides, and market intelligence from senior advisors.",
    featured: {
      tag: "Flagship Publication",
      title: "The Bottom Line — Issue 25",
      description: "Our comprehensive analysis of AASB 18 financial reporting changes, aged care prudential standards, and federal tax reform.",
      linkText: "Read the current issue",
      href: "#insights-featured",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Publications & Alerts",
        items: [
          { title: "The Bottom Line Magazine", href: "#insights-bottomline", badge: "Flagship" },
          { title: "Tax Alert Series", href: "#insights-tax" },
          { title: "AASB 18 Implementation Guide", href: "#insights-aasb", badge: "Series" },
          { title: "Family Business Podcast", href: "#stories" },
          { title: "Client Case Studies", href: "#stories-case-study" },
        ],
      },
      {
        heading: "Topics & Events",
        items: [
          { title: "Upcoming Webinars & Events", href: "#events" },
          { title: "Superannuation & SMSF Updates", href: "#insights-smsf" },
          { title: "ESG & Sustainability Reporting", href: "#insights-esg" },
          { title: "Federal Budget Analysis", href: "#insights-budget" },
        ],
      },
    ],
  },
  {
    title: "Careers",
    href: "#careers",
    description: "Build a rewarding career surrounded by supportive mentors, complex challenges, and genuine work-life integration.",
    featured: {
      tag: "Graduate & Professional Careers",
      title: "What makes us unique? You do.",
      description: "Discover a culture that values individuality, provides direct partner mentoring, and champions professional growth.",
      linkText: "View current opportunities",
      href: "#careers-banner",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
    },
    columns: [
      {
        heading: "Opportunities",
        items: [
          { title: "Experienced Professionals", href: "#careers-experienced", description: "Accelerate your career trajectory" },
          { title: "Graduates & Students", href: "#careers-graduates", description: "Top-tier graduate development program" },
          { title: "Vacationer Program", href: "#careers-vacation", description: "Real-world advisory experience" },
          { title: "Positions Available", href: "#careers-openings", description: "Explore open roles across Australia & NZ" },
        ],
      },
      {
        heading: "Life at Vikas CA",
        items: [
          { title: "Culture, Values & Inclusion", href: "#careers-culture", description: "Our community and workplace ethos" },
          { title: "Direct Partner Mentorship", href: "#careers-mentorship", description: "Learn from top industry practitioners" },
          { title: "Global Secondments", href: "#careers-global", description: "International transfer opportunities" },
          { title: "Q&A with Team Members", href: "#people-qa", description: "Read real stories from our people" },
        ],
      },
    ],
  },
];
