'use client'

import Header from '@/components/layout/Header';
import {NextUIProvider} from '@nextui-org/react';
import {usePathname, useRouter} from 'next/navigation'
import React from "react";
import Footer from "@/components/layout/Footer";

export function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const showHeader = !pathname.startsWith('/blog')

    return (
        <NextUIProvider navigate={router.push}>
            {showHeader && <Header/>}
            {children}
            {showHeader && <Footer/>}
        </NextUIProvider>
    )
}