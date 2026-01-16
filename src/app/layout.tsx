import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Scale Vault AI - AI Automation for Online Education",
  description:
    "Scale Vault AI helps course creators automate student support, personalize learning, and boost enrollments WITHOUT hiring extra staff.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
