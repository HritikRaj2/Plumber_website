import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import EmergencyBanner from "@/components/EmergencyBanner";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Plum Plumbing Services | 24/7 Emergency Plumber in Ghaziabad & Moradabad",
  description:
    "Trusted, licensed plumbing services in Ghaziabad, Moradabad, and surrounding areas. Leak repair, geyser installation, drain cleaning & more. Available 24/7 for emergencies. Call now for upfront pricing.",
  keywords:
    "plumber Ghaziabad, plumber Moradabad, emergency plumbing, leak repair, geyser installation, drain cleaning, local plumber India",
  openGraph: {
    title: "Plum Plumbing – Trusted Local Plumbers",
    description: "24/7 Emergency plumbing. Upfront pricing. Licensed & insured.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased font-[var(--font-inter)]`}>
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <EmergencyBanner />
        <Navbar />
        <main>{children}</main>
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  );
}
