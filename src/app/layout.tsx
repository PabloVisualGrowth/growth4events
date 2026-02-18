import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Corporate Event Support in Spain | Growth 4 Events",
  description:
    "Strategic operational support for corporate events and trade shows in Spain. Professional staffing, venue bookings, event branding, catering, transfers, live music, and MICE services — coordinated locally.",
  keywords: [
    "corporate event support Spain",
    "trade show services Spain",
    "exhibition staffing Spain",
    "corporate event catering Spain",
    "MICE services Spain",
    "corporate transfers Spain",
    "event branding Spain",
    "trade show staffing Spain",
    "corporate event coordination Spain",
    "MICE coordination Spain",
  ],
  openGraph: {
    title: "Corporate Event Support in Spain | Growth 4 Events",
    description:
      "Strategic operational support for corporate events and trade shows in Spain. Staffing, venues, branding, catering, transfers, and MICE coordination — all through one local contact.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growth 4 Events — Corporate Event Support in Spain",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Growth 4 Events",
  description:
    "Strategic operational support for corporate events and trade shows in Spain. Professional staffing, venue bookings, event branding, catering, transfers, live music, and MICE services.",
  url: "https://growth4events.com",
  telephone: "+34-645-966-701",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  areaServed: "ES",
  serviceType: [
    "Trade Show Support",
    "Corporate Event Services",
    "Exhibition Staffing",
    "Event Branding Design",
    "Professional Driver Transfers",
    "Corporate Catering",
    "Live Music Events",
    "MICE Services",
    "Corporate Travel Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        className="antialiased"
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
