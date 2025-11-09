import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexia - AI Solutions for Every Business",
  description: "Complete AI solutions from automation to machine learning, website creation, AI callers, and more. Custom solutions from A to Z.",
  keywords: "AI automation, machine learning, website design, AI callers, dashboard management, social media management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
