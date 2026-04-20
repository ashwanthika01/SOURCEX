import "./globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SourceX Technologies | Electronic Component Sourcing",
  description:
    "Global sourcing and BOM fulfillment for high-quality electronic components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}   
      </body>
    </html>
  );
}