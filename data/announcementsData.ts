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
    id: "info-security-framework",
    category: "Information Security",
    badge: "ISO/IEC 27001",
    title: "Information Security Is Part of the Delivery Model",
    summary: "Our controls and processes are designed around recognised information security principles, with an emphasis on access control, confidentiality, and data protection aligned with ISO/IEC 27001 principles.",
    date: "Current Practice",
    linkText: "Read about our security approach",
    href: "#insights",
    image: "/images/global-office.avif"
  },
  {
    id: "australian-standards-alignment",
    category: "Australian Standards",
    badge: "AASB & GST",
    title: "Processes Aligned with Australian Requirements & International Standards",
    summary: "NICS combines India-based delivery capability with processes designed for AASB requirements, Australian taxation and GST, privacy obligations, and professional practice standards.",
    date: "Delivery Framework",
    linkText: "Learn about our compliance standards",
    href: "#careers-banner",
    image: "/images/global-office.avif"
  },
  {
    id: "scalable-delivery-model",
    category: "Scalable Model",
    badge: "Flexible Capacity",
    title: "From One Person to an Offshore Function",
    summary: "Start small with a single bookkeeping resource, add accounts payable, and expand into reporting, audit support or administration when ready. Our model is designed to grow with you.",
    date: "Engagement Model",
    linkText: "Explore our delivery models",
    href: "#stories",
    image: "/images/global-office.avif"
  }
];
