import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nina Kannan — ECE @ UT Austin",
  description:
    "Portfolio of Nina Kannan — Electrical & Computer Engineering student at UT Austin. AI intern, embedded systems engineer, and electrical team lead.",
  openGraph: {
    title: "Nina Kannan — ECE @ UT Austin",
    description:
      "Portfolio of Nina Kannan — Electrical & Computer Engineering student at UT Austin.",
    type: "website",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
