import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BootSequence from "@/components/BootSequence";
import AIAssistant from "@/components/AIAssistant";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadeem Ansari | Oracle APEX Consultant",
  description:
    "Explore Nadeem Ansari's Oracle APEX portfolio, enterprise applications, SQL reporting, dashboards, and business consulting projects.",
  keywords: [
    "Nadeem Ansari",
    "Oracle APEX",
    "Oracle APEX Consultant",
    "Oracle SQL",
    "Enterprise Applications",
    "Business Consultant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BootSequence />
        <AIAssistant />
        {children}
      </body>
    </html>
  );
}

