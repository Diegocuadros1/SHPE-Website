import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lmu",
});

export const metadata: Metadata = {
  title: "SHPE LMU",
  description: "Society of Hispanic Engineers LMU",
  openGraph: {
    title: "SHPE LMU",
    description: "Society of Hispanic Engineers LMU",
    url: "https://shpelmu.org/",
    siteName: "SHPE LMU",
    images: [
      {
        url: "SHPE1.jpg",
        width: 800,
        height: 600,
        alt: "SHPE LMU",
      },
    ],
    type: "website",
  },
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
          <Toaster />
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
