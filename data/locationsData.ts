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
    id: "india-chennai",
    name: "Chennai (HQ)",
    state: "Tamil Nadu",
    country: "India",
    address: "Tidel Park, Tharamani, Chennai, Tamil Nadu 600113",
    phone: "+91 44 2254 1234",
    email: "operations@nics.com",
    description: "NICS is headquartered in Chennai, where our delivery centre operates 24/7 with 100% ISO 27001 certified data security and world-class talent.",
    leadPartner: "Gorav Gupta",
    leadPartnerTitle: "Co-Founder & Director",
    partnersCount: 12,
    specialties: ["Global Delivery Centre", "Data Security", "24/7 Processing", "Talent Management"],
    image: "/images/svg-global.svg"
  },
  {
    id: "australia-pymble",
    name: "Sydney",
    state: "NSW",
    country: "Australia",
    address: "Bridgeport Business Park, Pymble NSW 2073",
    phone: "+61 2 9000 1234",
    email: "hello@nics.com",
    description: "Our Australian client-relations office in Pymble handles engagement management and strategic BPO advisory for firms across the APAC region.",
    leadPartner: "Boobalan Madhavan",
    leadPartnerTitle: "Founder & MD",
    partnersCount: 5,
    specialties: ["Strategic Outsourcing", "Accounting Support", "Compliance Solutions", "Client Relations"],
    image: "/images/svg-global.svg"
  },
  {
    id: "usa-marlton",
    name: "Marlton",
    state: "New Jersey",
    country: "USA",
    address: "1000 Lincoln Drive East, Marlton, NJ 08053",
    phone: "+1 856 555 0199",
    email: "us.sales@nics.com",
    description: "Our US office provides dedicated support to North American firms, delivering tailored BPO solutions with a focus on compliance and financial operations.",
    leadPartner: "Andrew Noble",
    leadPartnerTitle: "Co-Founder",
    partnersCount: 3,
    specialties: ["US Tax Support", "Mortgage Broking BPO", "Operations & Admin", "Business Development"],
    image: "/images/svg-global.svg"
  }
];
