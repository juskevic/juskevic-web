'use client'
import React, {useEffect} from 'react'
import {Events} from "react-scroll"
import Landing from "@/components/Landing";
import About from "@/components/About";


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
            <div
                className="
                p-6 md:p-20 xl:p-32 2xl:p-44 space-y-80
                bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
            >
                <Landing/>
                <About/>
            </div>
        </>
    );
}

/*
absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]
*/
