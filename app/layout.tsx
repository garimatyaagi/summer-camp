import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Tinkerhood — Screen-Free Summer Camp for Kids | Bangalore",
  description:
    "A hands-on summer camp for kids aged 5–8 in HSR Layout, Bangalore. Weekly themes, daily take-homes, no screens. April–May 2026.",
  openGraph: {
    title: "Tinkerhood — Screen-Free Summer Camp for Kids",
    description:
      "Clay, paint, robots, and zero screens. Summer camp in HSR Layout, Bangalore.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
