import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AxiGrid | Optimization Intelligence for Complex Decisions",
    template: "%s | AxiGrid",
  },
  description:
    "AxiGrid develops advanced optimization applications for energy systems, transportation networks, manufacturing operations, logistics, and complex industries.",
  keywords: [
    "optimization",
    "operations research",
    "mathematical optimization",
    "AI decision support",
    "energy systems",
    "logistics optimization",
    "manufacturing optimization",
    "supply chain",
  ],
  authors: [{ name: "AxiGrid" }],
  openGraph: {
    title: "AxiGrid | Optimization Intelligence for Complex Decisions",
    description:
      "Advanced optimization applications for energy, transportation, manufacturing, and logistics.",
    url: "https://axigrid.com",
    siteName: "AxiGrid",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxiGrid | Optimization Intelligence",
    description:
      "Advanced optimization applications for complex industrial decision-making.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
