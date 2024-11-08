'use client'

import {NextUIProvider} from '@nextui-org/react';
import {usePathname, useRouter} from 'next/navigation'
import React from "react";
import Footer from "@/components/layout/Footer";
import Header from '@/components/layout/Header';

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