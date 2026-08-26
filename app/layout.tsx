import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nics.com"),
  title: {
    default: "NICS | Outsource your way forward",
    template: "%s | NICS",
  },
  description:
    "NICS is a business process outsource company for accounting, operational, administrative and compliance business processes in small to large enterprises.",
  keywords: [
    "NICS",
    "outsourcing",
    "BPO",
    "accounting outsourcing",
    "SMSF compliance",
    "mortgage broking support",
    "paraplanning offshore",
    "offshore talent",
  ],
  authors: [{ name: "NICS" }],
  creator: "NICS",
  publisher: "NICS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.nics.com",
  },
  openGraph: {
    title: "NICS | Outsource your way forward",
    description:
      "Your trusted back-office BPO partner specializing in Accounting, Compliance, Operations, and Administration.",
    url: "https://www.nics.com",
    siteName: "NICS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NICS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NICS | Talent collaboration simplified",
    description:
      "NICS empowers small and medium businesses to compete with large enterprise corporations by providing institutional-grade back-office infrastructure.",
    site: "@NICS",
    creator: "@NICS",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NICS",
    alternateName: "NICS BPO",
    url: "https://www.nics.com",
    logo: "https://www.nics.com/logo.png",
    description:
      "NICS is a business process outsourcing company for accounting, operational, administrative and compliance business processes.",
    sameAs: [
      "https://twitter.com/NICS",
      "https://www.linkedin.com/company/nics/"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tidel Park, Tharamani",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600113",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0f172a] selection:bg-[#0056b3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
