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
  title: "Eventos Corporativos España | Growth4Events - Tu Partner 360°",
  description:
    "Conecta con proveedores especializados en eventos corporativos, MICE y roadshows. Staffing, catering, logística y branding para tu evento.",
  keywords: [
    "eventos corporativos",
    "organización eventos",
    "event planner España",
    "MICE eventos",
    "ferias comerciales",
    "roadshows",
    "staffing eventos",
    "catering eventos",
  ],
  openGraph: {
    title: "Eventos Corporativos España | Growth4Events",
    description:
      "Red de partners especializados para eventos corporativos. Staffing, DMC, MICE, catering y logística integral.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growth4Events - Tu Partner 360° en Eventos",
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
  "@type": "EventPlanner",
  name: "Growth4Events",
  description: "Red de partners especializados para eventos corporativos en España",
  url: "https://growth4events.com",
  telephone: "+34-645-966-701",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  areaServed: "ES",
  serviceType: ["Event Planning", "Corporate Events", "MICE Events", "Trade Shows"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable}`}>
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
