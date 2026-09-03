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
  { label: "Accounting", href: "/#services" },
  { label: "Compliance", href: "/#services" },
  { label: "Legal", href: "/legal" },
  { label: "Operational", href: "/operational" },
  { label: "Administrative", href: "/administrative" },
];
