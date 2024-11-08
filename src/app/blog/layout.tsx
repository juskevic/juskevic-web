import type { Metadata, Viewport } from "next";
import React from "react";
import { Montserrat } from 'next/font/google';

import Footer from "@/components/layout/Footer";
import BlogHeader from "@/app/blog/components/blogHeader";

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
    title: "Blog | Max Juškevič",
    description: "Explore blog posts by Max Juškevič on frontend development, modern web practices, and insights into web technologies like React and Vue.",
    creator: "Max Juškevič",
    publisher: "Max Juškevič",
    category: 'technology',
    icons: {
        icon: '/favicon.ico',
    },
    keywords: [
        "Frontend Development Blog",
        "Web Development Insights",
        "React Blog",
        "Vue.js",
        "JavaScript Tips",
        "UI/UX Design",
        "HTML",
        "CSS",
        "Responsive Design",
        "Performance Optimization",
        "SEO for Web Developers",
        "Modern Web Applications",
        "Max Juškevič Blog"
    ],
    openGraph: {
        title: "Max Juškevič Blog | Frontend Insights & Web Development",
        description: "Stay updated with the latest insights and tutorials on frontend development and modern web practices from Max Juškevič.",
        url: 'https://juskevic.com/blog',
        siteName: 'Max Juškevič Blog',
        type: 'website',
    },
    twitter: {
        title: 'Max Juškevič Blog | Frontend Insights & Web Development',
        description: 'Follow the latest blog posts by Max Juškevič on frontend development, modern web apps, and performance optimization.',
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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${montserrat.className}`}>
            <BlogHeader />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
