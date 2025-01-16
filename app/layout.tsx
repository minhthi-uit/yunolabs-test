import Footer from "@/sections/Footer";
import Navbar from "@/sections/NavBar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistPPNeue = localFont({
  src: "./fonts/ppneuemontreal-book.otf",
  variable: "--font-geist-pp-neue",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "yunolabs Interview",
  description: "yunolabs Evaluation Task for Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPPNeue.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
