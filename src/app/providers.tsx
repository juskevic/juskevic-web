'use client'

import {NextUIProvider} from '@nextui-org/react';
import {usePathname, useRouter} from 'next/navigation'
import React from "react";
import Footer from "@/components/layout/Footer";
import Header from '@/components/layout/Header';
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400'],
});

export function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const showHeader = !pathname.startsWith('/blog')

    return (
        <NextUIProvider navigate={router.push} className={`${montserrat.className}`}>
            {showHeader && <Header/>}
            {children}
            {showHeader && <Footer/>}
        </NextUIProvider>
    )
}