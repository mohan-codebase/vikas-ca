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
    default: "NICS | Scale Your Business Without Building Every Function In-House",
    template: "%s | NICS",
  },
  description:
    "NICS provides Australian businesses and accounting practices with a flexible offshore delivery model across accounting, SMSF, audit, financial services, legal operations, and business administration.",
  keywords: [
    "NICS",
    "outsourcing",
    "BPO",
    "Australian accounting outsourcing",
    "SMSF back-office support",
    "audit support",
    "financial planning support",
    "mortgage processing",
    "legal operations support",
    "business operations",
    "ISO 27001",
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
    title: "NICS | Scale Your Business Without Building Every Function In-House",
    description:
      "A flexible offshore delivery model giving Australian businesses and practices access to experienced accounting, finance, and operational professionals.",
    url: "https://www.nics.com",
    siteName: "NICS",
    locale: "en_AU",
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
    title: "NICS | Scale Your Business Without Building Every Function In-House",
    description:
      "Flexible offshore delivery model for Australian businesses. Increase capacity, access specialist capability, and reduce operational pressure.",
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
    alternateName: "NICS Offshore Delivery",
    url: "https://www.nics.com",
    logo: "https://www.nics.com/logo.png",
    description:
      "NICS provides Australian businesses and accounting practices with a flexible offshore delivery model across accounting, finance, SMSF, audit, legal, and operational support.",
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
