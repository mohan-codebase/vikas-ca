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
  metadataBase: new URL("https://vikasca.com"),
  title: {
    default: "Vikas CA | Chartered Accountants & Financial Advisers",
    template: "%s | Vikas CA",
  },
  description:
    "Award-winning Australian chartered accounting and advisory network. Providing specialist advisory, audit & assurance, business services, tax consulting, and wealth management across 10 offices.",
  keywords: [
    "Vikas CA",
    "Chartered Accountants Sydney",
    "Business Advisers Melbourne",
    "Audit and Assurance Perth",
    "Tax Consulting Brisbane",
    "Family Business Advisory",
    "AASB 18 Guidance",
    "Debt Advisory Australia",
    "Client Choice Awards 2026",
  ],
  authors: [{ name: "Vikas CA" }],
  creator: "Vikas CA",
  publisher: "Vikas CA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://vikasca.com",
  },
  openGraph: {
    title: "Vikas CA | Chartered Accountants & Financial Advisers",
    description:
      "Together we make it happen. Integrated advisory, accounting, tax, and wealth management across Australia and New Zealand.",
    url: "https://vikasca.com",
    siteName: "Vikas CA",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Vikas CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas CA | Chartered Accountants & Business Advisers",
    description:
      "Award-winning chartered accounting and business advisory network across 10 offices in Australia and New Zealand.",
    site: "@VikasCA",
    creator: "@VikasCA",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
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
    "@type": "AccountingService",
    name: "Vikas CA",
    alternateName: "Vikas CA",
    url: "https://vikasca.com",
    logo: "https://vikasca.com/wp-content/themes/hlb/img/hlb-logo-white.svg",
    description:
      "Vikas CA is an association of award-winning chartered accounting and advisory firms with offices throughout Australia and New Zealand.",
    areaServed: ["AU", "NZ"],
    award: "Best Accounting & Consulting Services Firm 2026 - Client Choice Awards",
    sameAs: [
      "https://x.com/VikasCA",
      "https://www.linkedin.com/company/vikas-ca/",
      "https://www.youtube.com/user/VikasCA",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 19, 207 Kent Street",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "2000",
      addressCountry: "AU",
    },
  };

  return (
    <html
      lang="en-IN"
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

