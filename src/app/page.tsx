'use client'
import React, {useEffect} from 'react'
import {Events} from "react-scroll"

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";

export default function Home() {

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    })

    return (
        <>
            <div className="p-6 md:p-20">
                <Header/>
                <div className="border-1 border-primary h-">
                    <Main />
                </div>
                <Footer/>
            </div>
        </>
    );
}