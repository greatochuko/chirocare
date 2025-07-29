import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChiroCare",
  description:
    "ChiroCare provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.",
  openGraph: {
    title: "ChiroCare",
    description:
      "ChiroCare provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.",
    url: "https://chirocare.vercel.app",
    images: [
      {
        url: "https://chirocare.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChiroCare - Personalized Chiropractic Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChiroCare",
    description:
      "ChiroCare provides personalized chiropractic care focused on relieving pain, restoring mobility, and improving overall wellness.",
    images: ["https://chirocare.vercel.app/og-image.png"],
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
