import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Sans, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giorgi | Frontend Developer",
  description: "Portfolio and personal website of Giorgi Gogichaishvili",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex`}>{children}</body>
    </html>
  );
}
