import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/common/AosInit";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "LoanEasyIndia | Making Loans Simple",
  description:
    "Explore personal, car, business and balance transfer loan options with LoanEasyIndia. Simple process, multiple options and personal assistance throughout your loan journey.",
  keywords: [
    "LoanEasyIndia",
    "Making Loans Simple",
    "Personal Loan India",
    "Car Loan India",
    "Business Loan India",
    "Balance Transfer Loan",
    "Loan Assistance India",
    "Compare Bank Loans India",
    "Best Interest Rates",
  ],
  authors: [{ name: "LoanEasyIndia" }],
  openGraph: {
    title: "LoanEasyIndia | Making Loans Simple",
    description:
      "Explore personal, car, business and balance transfer loan options with LoanEasyIndia. Simple process, multiple options and personal assistance.",
    url: "https://loaneasyindia.com",
    siteName: "LoanEasyIndia",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanEasyIndia | Making Loans Simple",
    description:
      "One-stop solution for Personal, Car, Business loans & Balance Transfers in India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-white text-brand-navy antialiased selection:bg-brand-blue selection:text-white">
        <AosInit />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
