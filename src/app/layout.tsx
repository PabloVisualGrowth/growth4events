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
  title: "Growth 4 Events — Tu Partner 360° en Eventos",
  description:
    "Orquestamos cada detalle de tu presencia en ferias y congresos. Leads, reuniones y pipeline. Sin dolores de cabeza.",
  keywords: [
    "eventos corporativos",
    "ferias",
    "congresos",
    "lead generation",
    "event partner",
    "España",
  ],
  openGraph: {
    title: "Growth 4 Events — Tu Partner 360° en Eventos",
    description:
      "Hacemos que tu evento genere negocio real. Coordinación integral, tecnología y estrategia de crecimiento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable}`}>
      <body
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        className="antialiased"
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
