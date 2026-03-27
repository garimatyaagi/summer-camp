import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://summerclub.in"),
  title: "The Summer Club — Summer Camp for Kids | Bangalore",
  description:
    "A summer camp where kids make amazing things. Paintings, volcanoes, robots, and a real exhibition. Ages 5–8, HSR Layout, Bangalore. April–May 2026.",
  openGraph: {
    title: "The Summer Club — A summer camp where kids make amazing things",
    description:
      "Seven weeks of art, science, cooking, nature, robots, and entrepreneurship. Ages 5–8, HSR Layout, Bangalore.",
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
      className={`${nunito.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
