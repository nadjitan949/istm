import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/MegaMenu";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISTM - Institut Supérieur de Technologies et de Management",
  description:
    "Établissement d'enseignement du primaire, secondaire et supérieur (BTS, BT, Licence, Master). Formons les leaders de demain.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<div className="h-20 border-b border-istm-200 bg-white" aria-hidden="true" />}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}