import type { Metadata, Viewport } from "next";
import { Saira_Condensed, Manrope, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proluxe Pare Brise — Réparation & remplacement vitrage automobile à Épône (78)",
  description:
    "Centre Proluxe Pare Brise à Épône : réparation et remplacement de pare-brise toutes marques, toutes assurances. Franchise offerte, intervention en 1h30, RDV sous 24h. Chèque 150 € ou 4 pneus offerts.",
  keywords: [
    "pare-brise Épône",
    "réparation pare-brise 78",
    "remplacement pare-brise toutes assurances",
    "franchise offerte pare-brise",
    "Proluxe Pare Brise",
  ],
  authors: [{ name: "Proluxe Pare Brise" }],
  openGraph: {
    title: "Proluxe Pare Brise — Épône (78)",
    description:
      "Centre agréé toutes assurances. Franchise offerte, intervention en 1h30, RDV sous 24h.",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E1A2F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${saira.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
