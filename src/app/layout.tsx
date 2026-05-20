import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Quantum Pixels — Engineering The Future of Digital Experiences",
  description:
    "A premium futuristic engineering startup building the next generation of digital experiences across education, gaming, and software innovation.",
  keywords: [
    "futuristic software startup",
    "education technology",
    "gaming studio",
    "software development company",
    "AI-powered digital solutions",
    "engineering startup",
  ],
  openGraph: {
    title: "Quantum Pixels — Engineering The Future of Digital Experiences",
    description:
      "Education. Gaming. Software Innovation — Built by the Next Generation.",
    type: "website",
    locale: "en_US",
    siteName: "Quantum Pixels",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
