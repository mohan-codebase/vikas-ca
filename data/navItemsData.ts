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
    label: "About Us",
    href: "#about",
    heroTag: "Client Choice Awards Winner",
    heroTitle: "Best Accounting & Advisory Firm 2026",
    heroDescription:
      "Recognised across Australia for our outstanding client service standards, deep technical rigor, and enduring partner relationships.",
    heroLinkText: "Discover our recognition",
    heroLinkHref: "#about",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Who We Are",
        links: [
          { label: "About Vikas CA", href: "#about", description: "Our heritage, reach and values" },
          { label: "Awards & Recognition", href: "#awards", description: "Client Choice Awards 2026 Winner", badge: "2026" },
          { label: "Vikas CA Global Network", href: "#global", description: "Present in 157+ countries worldwide" },
          { label: "Celebrating 40+ Years", href: "#heritage", description: "Four decades of trusted advisory" },
        ],
      },
      {
        title: "Our Commitments",
        links: [
          { label: "Our Commitment & CSR", href: "#commitment", description: "Signatory to UN Global Compact" },
          { label: "Sustainability & ESG", href: "#esg", description: "Driving responsible business practices", badge: "ESG" },
          { label: "Diversity & Inclusion", href: "#diversity", description: "Fostering authentic workplace cultures" },
          { label: "Executive Leadership", href: "#contact", description: "Connect with national managing partners" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "#services",
    heroTag: "Specialist Capability",
    heroTitle: "Strategic Advisory & Finance Transformation",
    heroDescription:
      "Equipping leadership teams and business owners to modernize financial architecture, manage risk, and navigate complex transactions.",
    heroLinkText: "Explore all capabilities",
    heroLinkHref: "#services",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Advisory & Transactions",
        links: [
          { label: "Debt Advisory", href: "#services" },
          { label: "ESG & Sustainability Advisory", href: "#services", badge: "Focus" },
          { label: "Finance Transformation", href: "#services" },
          { label: "Forensic Accounting & Investigations", href: "#services" },
          { label: "Restructuring & Turnaround", href: "#services" },
          { label: "Transaction Advisory & M&A", href: "#services", badge: "M&A" },
          { label: "Valuations & Modelling", href: "#services" },
        ],
      },
      {
        title: "Audit & Tax Consulting",
        links: [
          { label: "Financial Audits & Reviews", href: "#services" },
          { label: "Internal Audit & Assurance", href: "#services" },
          { label: "Sustainability Reporting (AASB S1/S2)", href: "#services", badge: "New" },
          { label: "Corporate & International Tax", href: "#services" },
          { label: "R&D Tax Incentives", href: "#services" },
          { label: "Employment & Payroll Tax", href: "#services" },
        ],
      },
      {
        title: "Business & Wealth",
        links: [
          { label: "Accounting & Financial Reporting", href: "#services" },
          { label: "Business Strategy & Advisory", href: "#services" },
          { label: "Family Office Services", href: "#services" },
          { label: "Private Wealth & SMSF", href: "#services" },
          { label: "Succession & Governance", href: "#services" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    heroTag: "Sector Spotlight",
    heroTitle: "Family Business & Multigenerational Wealth",
    heroDescription:
      "Helping Australian family enterprises navigate succession, governance, and long-term sustainable growth with trusted partner guidance.",
    heroLinkText: "Listen to podcast series",
    heroLinkHref: "#stories",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Commercial & Private",
        links: [
          { label: "Family Business", href: "#industries", description: "Governance & wealth succession" },
          { label: "Property & Construction", href: "#industries", description: "Tax structurings & project advisory" },
          { label: "Mining, Energy & Resources", href: "#industries", description: "Resource tax & asset management" },
          { label: "Hospitality & Leisure", href: "#industries", description: "Operational benchmarking" },
        ],
      },
      {
        title: "Specialist & Regulated",
        links: [
          { label: "Aged Care & Healthcare", href: "#industries", description: "Prudential standards & compliance" },
          { label: "Funds Management & Financial Services", href: "#industries", description: "AFSL & compliance" },
          { label: "Government & Public Services", href: "#industries", description: "Public sector governance" },
          { label: "Not-For-Profit & Charities", href: "#industries", description: "Charity audit & tax exemptions" },
        ],
      },
    ],
  },
  {
    label: "Our People",
    href: "#people",
    heroTag: "People & Culture",
    heroTitle: "Together We Make It Happen",
    heroDescription:
      "When our people work together, extraordinary outcomes happen for our clients, our communities, and our national network.",
    heroLinkText: "Meet our partners",
    heroLinkHref: "#people",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Leadership & Partners",
        links: [
          { label: "Partner Directory", href: "#people", description: "Direct partner contact details" },
          { label: "Industry Specialists", href: "#people", description: "Specialist sector teams" },
          { label: "Leadership Appointments", href: "#news", description: "Recent executive announcements" },
        ],
      },
      {
        title: "Culture & Insights",
        links: [
          { label: "Client-First Philosophy", href: "#culture", description: "Our service distinction" },
          { label: "Partner Mentorship Series", href: "#culture", description: "Inside our leadership culture" },
          { label: "Community Initiatives", href: "#culture", description: "Social impact across Australia" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "#locations",
    heroTag: "Australasian Network",
    heroTitle: "10 Offices Across Australia & NZ",
    heroDescription:
      "Local partner access with the scale, depth, and cross-border capabilities of a premier international firm in 157 countries.",
    heroLinkText: "Find your nearest office",
    heroLinkHref: "#locations",
    heroImage:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Australia East Coast",
        links: [
          { label: "Sydney (NSW)", href: "#locations", description: "Level 19, 207 Kent Street" },
          { label: "Melbourne (VIC)", href: "#locations", description: "Level 9, 575 Bourke Street" },
          { label: "Brisbane (QLD)", href: "#locations", description: "Level 15, 66 Eagle Street" },
          { label: "Newcastle & Wollongong", href: "#locations", description: "Regional NSW hubs" },
          { label: "Gold Coast (QLD)", href: "#locations", description: "Robina Town Centre" },
        ],
      },
      {
        title: "WA, SA & New Zealand",
        links: [
          { label: "Perth (WA)", href: "#locations", description: "Level 4, 130 Stirling Street" },
          { label: "Adelaide (SA)", href: "#locations", description: "Level 1, 169 Fullarton Road" },
          { label: "Auckland (NZ)", href: "#locations", description: "Level 6, 57 Symonds Street" },
          { label: "Global Network (157 Countries)", href: "#locations", description: "Vikas CA International", badge: "Global" },
        ],
      },
    ],
  },
  {
    label: "Insights",
    href: "#insights",
    heroTag: "Flagship Publication",
    heroTitle: "The Bottom Line — Issue 25",
    heroDescription:
      "Authoritative commentary on AASB 18 financial reporting changes, aged care prudential compliance, and commercial tax reform.",
    heroLinkText: "Read the current issue",
    heroLinkHref: "#insights",
    heroImage:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Publications & Alerts",
        links: [
          { label: "The Bottom Line Magazine", href: "#insights", badge: "Flagship" },
          { label: "Federal Budget Analysis", href: "#insights" },
          { label: "AASB 18 Implementation Guide", href: "#insights", badge: "Guide" },
          { label: "Tax Alert Series", href: "#insights" },
        ],
      },
      {
        title: "Multimedia & Events",
        links: [
          { label: "Family Business Podcast", href: "#stories", badge: "Audio" },
          { label: "Upcoming Executive Webinars", href: "#insights" },
          { label: "Client Case Studies", href: "#stories" },
          { label: "Superannuation & SMSF Updates", href: "#insights" },
        ],
      },
    ],
  },
  {
    label: "Careers",
    href: "#careers",
    heroTag: "Graduate & Experienced",
    heroTitle: "What makes us unique? You do.",
    heroDescription:
      "Join a Top 100 Graduate Employer offering direct partner mentorship, global secondment opportunities, and accelerated leadership pathways.",
    heroLinkText: "Explore open positions",
    heroLinkHref: "#careers-banner",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    columns: [
      {
        title: "Pathways",
        links: [
          { label: "Experienced Professionals", href: "#careers-banner", description: "Accelerate your career trajectory" },
          { label: "Graduate Program 2026", href: "#careers-banner", description: "Direct partner mentoring", badge: "Open" },
          { label: "Vacationer Program", href: "#careers-banner", description: "Real-world advisory experience" },
          { label: "Search Open Roles", href: "#careers-banner", description: "Opportunities across 10 offices" },
        ],
      },
      {
        title: "Life at Vikas CA",
        links: [
          { label: "Culture & Inclusion", href: "#careers-banner", description: "Our values and ethos" },
          { label: "Global Secondments", href: "#careers-banner", description: "Mobility in 157 countries", badge: "Global" },
          { label: "Direct Mentorship", href: "#careers-banner", description: "Learn from equity partners" },
          { label: "Employee Testimonials", href: "#careers-banner", description: "Real stories from our team" },
        ],
      },
    ],
  },
];
