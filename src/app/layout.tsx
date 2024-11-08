import type { Metadata, Viewport } from "next";
import "./globals.css";
import React from "react";
import {Providers} from "@/app/providers";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
});


export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: "Max Juškevič | Frontend Developer & Web Engineer",
    description: "Max Juškevič is a Frontend Developer specializing in responsive web design, performance optimization, and building modern web applications using React and Vue.",
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
        "Web Applications",
        "Performance Optimization",
        "SEO Optimization",
        "Portfolio Website",
        "E-commerce Websites",
        "SaaS Frontend Development"
    ],
    openGraph: {
        title: "Max Juškevič | Frontend Developer & Web Engineer",
        description: "Frontend developer specializing in responsive web design and modern web applications.",
        url: 'https://juskevic.com',
        siteName: 'Max Juškevič',
        type: 'website',
    },
    twitter: {
        title: 'Max Juškevič | Frontend Developer & Web Engineer',
        description: 'Max Juškevič is a Frontend Developer specializing in responsive web design, modern web apps, and performance optimization.',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="light">
            <body className={`${montserrat.className}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}