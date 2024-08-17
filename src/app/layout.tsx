import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {Providers} from "@/app/providers";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });


export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: "Max Juškevič",
    description: "Max's portfolio website and blog. 💫",
    creator: "Max Juškevič",
    publisher: "Max Juškevič",
    category: 'technology',
    icons: {
      icon: '/favicon.ico',
    },
    keywords: [
        "Frontend Development",
        "Web Development",
        "UI/UX Design",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vue.js",
        "Angular",
        "Responsive Design",
        "User Experience",
        "User Interface",
        "Web Applications",
        "E-commerce Websites",
        "Portfolio Website",
        "Blog",
        "Web Design Trends",
        "Frontend Frameworks",
        "Accessibility",
        "Performance Optimization",
        "Cross-Browser Compatibility",
        "Mobile First Approach",
        "Interactive Web Elements",
        "Animation",
        "Single Page Applications",
        "API Integration",
        "State Management",
        "Component-Based Architecture"
    ],
    openGraph: {
        images: '',
        title: "Max Juškevič: Frontend Engineer",
        description: "Max's portfolio website and blog. 💫",
        url: 'https://juskevic.com',
        siteName: 'Max Juškevič',
        type: 'website',
    },
    twitter: {
        title: 'Max Juškevič: Frontend Engineer',
        description: 'Max\'s portfolio website and blog. 💫',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
        <body className={`${inter.className} light text-foreground inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]`}>
          <Providers>
              {children}
              <Footer />
          </Providers>
        </body>
      </html>
  );
}