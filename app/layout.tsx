import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SourceX Technologies | Electronic Component Sourcing",
  description: "Global sourcing and BOM fulfillment for high‑quality electronic components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
