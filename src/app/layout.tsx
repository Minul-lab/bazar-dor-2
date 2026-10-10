import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Marquee from "./components/navs/Marquee";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const banglaFont = Noto_Sans_Bengali({
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "Bazar-dor",
  description: "Assignment-7 by Minul",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${banglaFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05893E]/10">
        <Navbar></Navbar>
        <Marquee></Marquee>
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
