import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import { Header } from "@/components/layout/MegaMenu";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISTM - Institut Supérieur de Technologies et de Management",
  description:
    "Établissement d'enseignement du primaire, secondaire et supérieur (BTS, BT, Licence, Master). Formons les leaders de demain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Suspense
          fallback={<div className="sticky top-0 z-40 h-16 border-b border-istm-200 bg-white/95 backdrop-blur" />}
        >
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
