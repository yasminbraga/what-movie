import MainContainer from "@/components/mainContainer";
import Sidebar from "@/components/sidebar";
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
          <main className="relative">
            <Sidebar />
            <MainContainer>{children}</MainContainer>
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
