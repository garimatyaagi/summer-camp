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
  title: "The Summer Club — Seven Skills, One Portfolio | Bangalore Summer Camp",
  description:
    "A maker studio for kids aged 5–8. Seven weeks, seven skills, one portfolio they'll exhibit. HSR Layout, Bangalore. April–May 2026.",
  openGraph: {
    title: "The Summer Club — Seven Skills, One Portfolio",
    description:
      "Art, science, cooking, nature, engineering, entrepreneurship — and a real exhibition. Summer camp in HSR Layout, Bangalore.",
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
