'use client'
import React from 'react';
import {Caveat} from "next/font/google";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
});

export default function BlogLanding() {

    return (
        <>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pt-20 xl:pt-0 pb-40">
                <div className={`flex flex-col text-foreground text-3xl gap-8 xl:text-4xl xl:gap-10 xl:w-2/3`}>
                    <div>
                        {"I’m certain that "}
                        <span className="font-bold">{"knowledge sharing"}</span>
                        {" plays a vital role in "}
                        <span className="font-bold">{"achieving expertise."}</span>
                    </div>
                </div>
                <div className="flex-col pt-8 md:pt-6">
                    <div>
                        <p className="text-secondary xl:w-1/2">
                            {"As a dedicated Web Developer, I believe that "}
                            <span className="font-bold">{"sharing knowledge"}</span>
                            {" is essential for "}
                            <span className="font-bold">{"becoming an expert."}</span>
                            {" This blog is where I explore and discuss "}
                            <span className="font-bold">{"modern frontend technologies"}</span>
                            {" and techniques, aiming to help others build high-quality, user-friendly websites and applications."}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
