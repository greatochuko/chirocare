import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import companyInformation from "@/data";

const inter = Inter({
  subsets: ["latin"],
});

const BASE_URL = "https://chirocare.vercel.app";

export const metadata: Metadata = {
  title: companyInformation.companyName,
  description: `${companyInformation.companyName} provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.`,
  openGraph: {
    title: companyInformation.companyName,
    description: `${companyInformation.companyName} provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.`,
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${companyInformation.companyName} - Personalized Chiropractic Care`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInformation.companyName,
    description: `${companyInformation.companyName} provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-base-800 flex min-h-dvh flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
