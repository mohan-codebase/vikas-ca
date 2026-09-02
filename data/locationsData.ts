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
    description: "NICS operates its core delivery capability in Chennai, with disciplined processes, structured workflows, and information security aligned with ISO/IEC 27001 principles.",
    leadPartner: "Gorav Gupta",
    leadPartnerTitle: "Co-Founder & Director",
    partnersCount: 12,
    specialties: ["Global Delivery Centre", "Accounting & Finance Ops", "SMSF & Audit Support", "Information Security"],
    image: "/images/global-office.avif"
  },
  {
    id: "australia-pymble",
    name: "Sydney",
    state: "NSW",
    country: "Australia",
    address: "Bridgeport Business Park, Pymble NSW 2073",
    phone: "+61 2 9000 1234",
    email: "hello@nics.com",
    description: "Our Australian office manages client relationships, practice onboarding, and strategic alignment for Australian accounting firms and growing enterprises.",
    leadPartner: "Boobalan Madhavan",
    leadPartnerTitle: "Founder & MD",
    partnersCount: 5,
    specialties: ["Australian Practice Liaison", "Engagement Models", "AASB Process Alignment", "Client Governance"],
    image: "/images/global-office.avif"
  },
  {
    id: "usa-marlton",
    name: "Marlton",
    state: "New Jersey",
    country: "USA",
    address: "1000 Lincoln Drive East, Marlton, NJ 08053",
    phone: "+1 856 555 0199",
    email: "us.sales@nics.com",
    description: "Our US office supports North American client engagements, delivering structured operational and back-office services across corporate functions.",
    leadPartner: "Andrew Noble",
    leadPartnerTitle: "Co-Founder",
    partnersCount: 3,
    specialties: ["International Operations", "Workflow Transition", "Business Operations", "Client Relations"],
    image: "/images/global-office.avif"
  }
];
