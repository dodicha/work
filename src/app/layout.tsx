import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nika | Frontend Developer",
  description: "Portfolio and personal website of Nika Gogichaishvili",
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
// This layout wraps the entire application, providing a consistent structure
