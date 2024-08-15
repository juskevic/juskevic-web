'use client'
import React, {useEffect} from 'react'
import {Element, Events} from "react-scroll"

import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
        <div className="pt-16 p-6 md:p-20 xl:p-36 space-y-64 md:space-y-[300px] light text-foreground inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <Landing />
            <Element name="about"><About /></Element>
            <Element name="projects"><Projects /></Element>
            <Element name="contact"><Contact /></Element>
        </div>
    );
}
