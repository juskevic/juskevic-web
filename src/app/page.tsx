'use client'
import React, {useEffect} from 'react'
import {Events} from "react-scroll"
import Landing from "@/components/Landing";


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
                xl:p-48
                top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
            >
                <Landing/>
            </div>
        </>
    );
}

/*
absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]
*/
