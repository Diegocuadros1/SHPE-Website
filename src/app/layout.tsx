import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lmu",
});

export const metadata: Metadata = {
  title: "SHPE LMU",
  description: "SHPE LMU website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {/* IMPORTANT: no top padding here so navbar sits on video */}
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
