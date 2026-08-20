export interface OfficeLocation {
  id: string;
  name: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  leadPartner: string;
  leadPartnerTitle: string;
  partnersCount: number;
  specialties: string[];
  image: string;
}

export const locationsData: OfficeLocation[] = [
  {
    id: "sydney",
    name: "Sydney",
    state: "NSW",
    country: "Australia",
    address: "Level 19, 207 Kent Street, Sydney NSW 2000",
    phone: "(02) 9020 4000",
    email: "mailbox@hlbnsw.com.au",
    description: "Our flagship Sydney practice delivers high-calibre advisory, audit, and tax consulting to prominent ASX-listed entities, private institutions, and generational family offices.",
    leadPartner: "Tony Fittler",
    leadPartnerTitle: "Managing Partner — Sydney",
    partnersCount: 26,
    specialties: ["Corporate Advisory", "Statutory Audit", "Tax Consulting", "Family Office"],
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "melbourne",
    name: "Melbourne",
    state: "VIC",
    country: "Australia",
    address: "Level 9, 575 Bourke Street, Melbourne VIC 3000",
    phone: "(03) 9606 3888",
    email: "mailbox@hlbvic.com.au",
    description: "Located in Melbourne's central financial district, our Victorian practice is widely celebrated for mid-market business advisory, risk consulting, and debt advisory.",
    leadPartner: "Michael Flavel",
    leadPartnerTitle: "Managing Partner — Melbourne",
    partnersCount: 22,
    specialties: ["Mid-Market Advisory", "Debt Advisory", "Forensic Accounting", "Wealth Management"],
    image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "brisbane",
    name: "Brisbane",
    state: "QLD",
    country: "Australia",
    address: "Level 15, 66 Eagle Street, Brisbane QLD 4000",
    phone: "(07) 3001 8800",
    email: "mailbox@hlbqld.com.au",
    description: "Anchoring our Queensland presence from the Golden Triangle, supporting fast-scaling infrastructure, agribusiness, and property leaders across the Sunshine State.",
    leadPartner: "James Henderson",
    leadPartnerTitle: "Managing Partner — Brisbane",
    partnersCount: 18,
    specialties: ["Property & Construction", "Agribusiness", "Corporate Finance", "Assurance"],
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "perth",
    name: "Perth",
    state: "WA",
    country: "Australia",
    address: "Level 4, 130 Stirling Street, Perth WA 6000",
    phone: "(08) 9227 7500",
    email: "mailbox@hlbwa.com.au",
    description: "A dominant force in Western Australia's resources, mining services, and ASX junior IPO sectors with comprehensive audit, tax, and corporate finance teams.",
    leadPartner: "Norman Neill",
    leadPartnerTitle: "Managing Partner — Perth",
    partnersCount: 20,
    specialties: ["Mining & Energy", "IPO & Capital Markets", "Corporate Tax", "R&D Incentives"],
    image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "adelaide",
    name: "Adelaide",
    state: "SA",
    country: "Australia",
    address: "Level 1, 169 Fullarton Road, Dulwich SA 5065",
    phone: "(08) 8133 5000",
    email: "mailbox@hlbsa.com.au",
    description: "Delivering trusted advisory to South Australian viticulture, defense, advanced manufacturing, and private family businesses for decades.",
    leadPartner: "Corey McGowan",
    leadPartnerTitle: "Managing Partner — Adelaide",
    partnersCount: 12,
    specialties: ["Defence & Tech", "Wine & Viticulture", "Business Succession", "Tax Structuring"],
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "auckland",
    name: "Auckland",
    state: "Auckland",
    country: "New Zealand",
    address: "Level 6, 57 Symonds Street, Grafton, Auckland 1010",
    phone: "+64 9 303 4586",
    email: "mailbox@hlbnz.com",
    description: "Our trans-Tasman gateway offering full-suite chartered accounting, trans-Tasman tax harmonization, and audit services for New Zealand businesses.",
    leadPartner: "Craig Fisher",
    leadPartnerTitle: "Partner — Auckland",
    partnersCount: 10,
    specialties: ["Trans-Tasman Tax", "Audit & Assurance", "Not For Profit", "Business Consulting"],
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "newcastle",
    name: "Newcastle",
    state: "NSW",
    country: "Australia",
    address: "Level 2, 117 Bull Street, Newcastle West NSW 2302",
    phone: "(02) 4969 5566",
    email: "mailbox@hlbnewcastle.com.au",
    description: "Partnering with Hunter Region innovators, industrial leaders, and healthcare groups through transformative growth and generational ownership transitions.",
    leadPartner: "Grant Saxon",
    leadPartnerTitle: "Partner — Newcastle",
    partnersCount: 9,
    specialties: ["Hunter Region Commerce", "Healthcare", "Family Enterprise", "Assurance"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "wollongong",
    name: "Wollongong",
    state: "NSW",
    country: "Australia",
    address: "65 Kembla Street, Wollongong NSW 2500",
    phone: "(02) 4254 6500",
    email: "mailbox@hlbwollongong.com.au",
    description: "Dedicated to the Illawarra region's booming clean energy, manufacturing, and commercial real estate ecosystem.",
    leadPartner: "Peter Nevin",
    leadPartnerTitle: "Partner — Wollongong",
    partnersCount: 8,
    specialties: ["Illawarra Business", "Manufacturing", "Commercial Advisory", "Wealth Planning"],
    image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "robina",
    name: "Robina (Gold Coast)",
    state: "QLD",
    country: "Australia",
    address: "Level 2, The Rocket, 203 Robina Town Centre Dr, Robina QLD 4226",
    phone: "(07) 5575 8855",
    email: "mailbox@hlbgoldcoast.com.au",
    description: "Positioned in the heart of the Gold Coast's premier commercial hub, advising high-growth tech entrepreneurs, medical practices, and property syndicates.",
    leadPartner: "Karen Howard",
    leadPartnerTitle: "Partner — Gold Coast",
    partnersCount: 7,
    specialties: ["Gold Coast Growth", "Medical & Healthcare", "Property Syndication", "Tax Strategy"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "lismore",
    name: "Lismore",
    state: "NSW",
    country: "Australia",
    address: "123 Molesworth Street, Lismore NSW 2480",
    phone: "(02) 6621 2544",
    email: "mailbox@hlblismore.com.au",
    description: "Deeply embedded in Northern NSW, supporting primary producers, regional retailers, and community organizations with steadfast local commitment.",
    leadPartner: "David Mitchell",
    leadPartnerTitle: "Partner — Lismore",
    partnersCount: 6,
    specialties: ["Northern Rivers Commerce", "Agribusiness", "Regional Recovery", "Succession"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
  }
];
