import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What Movie",
  description: "What movie should we watch?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gradient-to-r from-[#ff5656] to-[#ff1c1c] h-screen flex flex-col items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
