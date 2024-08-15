import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { NextUIProvider } from '@nextui-org/react'

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Juškevič",
  description: "Max's portfolio website and blog. 💫",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NextUIProvider>
              <Header />
              {children}
              <Footer />
          </NextUIProvider>
        </body>
      </html>
  );
}