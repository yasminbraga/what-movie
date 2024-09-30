import Header from "@/components/header";
import { DataProvider } from "@/contexts/dataContext";
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
        <DataProvider>
          <main className=" h-screen flex flex-col">
            <Header />
            {children}
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
