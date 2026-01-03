import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dr. Dinesh Jain | Expert Laparoscopic & General Surgeon | Pune",
  description: "Dr. Dinesh Jain - 30+ years of excellence in laparoscopic surgery, general surgery, and colorectal procedures in Pune. Book your appointment today. Expert care for hernia, gallbladder, appendix, piles, fissure, and fistula treatments.",
  keywords: "Dr Dinesh Jain, laparoscopic surgeon Pune, general surgeon Pune, hernia surgery Pune, piles surgery Pune, colorectal surgeon Pune, gallbladder surgery Pune",
  openGraph: {
    title: "Dr. Dinesh Jain | Expert Surgeon | Pune",
    description: "Expert Surgical Care with Over 30 Years of Excellence. Specialized in laparoscopic, general, and colorectal surgery.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
