'use client'
import React from 'react';
import {Caveat} from "next/font/google";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Landing() {

    return (
        <>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pt-20 xl:pt-0 pb-80">
                <div className={`flex flex-col text-foreground text-3xl gap-8 xl:text-4xl xl:gap-10 xl:w-2/3`}>
                    <div>
                        <span>{"Building websites is what I "}</span>
                        <span className="font-bold">{"love "}</span>
                        <span>{"to do."}</span>
                    </div>
                    <div>
                        <span>{" I focus on using "}</span>
                        <span className="font-bold">{"modern tools "}</span>
                        <span>{"to create something both "}</span>
                        <span className="font-bold">{"functional "}</span>
                        <span>{"and "}</span>
                        <span className="font-bold">{"fun."}</span>
                    </div>
                    <div>
                        <span>{"I'm here to turn your "}</span>
                        <span className="font-bold">{"ideas "}</span>
                        <span>{"into "}</span>
                        <span className="font-bold">{"reality"}</span>
                        <span>{"."}</span>
                    </div>
                </div>
                <div className="flex-col space-y-5 pt-20 md:pt-28 xl:pt-32">
                    <div className="flex flex-col gap-1">
                        <p className={`${caveat.className} text-primary text-4xl xl:text-5xl`}>{"Max Juškevič"}</p>
                        <p className={`text-secondary text-xl xl:text-2xl`}>{"Fullstack Engineer"}</p>
                    </div>
                    <SocialsButtonGroup/>
                    <div>
                        <p className="text-secondary xl:w-1/2">{"I'm a passionate Web Developer specializing in creating dynamic and user-friendly websites and applications. With a focus on modern frontend technologies, I deliver high-quality code and engaging user experiences."}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
