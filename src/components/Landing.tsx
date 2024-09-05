'use client'
import React from 'react';
import {Archivo_Black, Caveat} from "next/font/google";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";
import {Button, Chip} from "@nextui-org/react";

const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Landing() {

    return (
        <>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pt-20 xl:pt-0">
                <div
                    className={`${archivoBlack.className} flex flex-col !text-center gap-20 md:gap-32 xl:gap-7 text-foreground text-4xl md:text-7xl xl:text-9xl`}>
                    <div><p className="hollow-text">{"MAX JUŠKEVIČ"}</p></div>
                    <div><p className="hollow-text">{"MAX JUŠKEVIČ"}</p></div>
                    <div><p className="hollow-text">{"MAX JUŠKEVIČ"}</p></div>
                    <div><p className="hollow-text">{"MAX JUŠKEVIČ"}</p></div>
                </div>
                <div className="flex-col space-y-5 pt-20 md:pt-28 xl:pt-32">
                    <div className="flex flex-col gap-1">
                        <p className={`${caveat.className} text-primary text-4xl xl:text-5xl`}>{"Max Juškevič"}</p>
                        <p className={`text-secondary text-xl xl:text-2xl`}>{"Frontend Engineer"}</p>
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

/*I'm a passionate Web Developer specializing in creating dynamic and user-friendly websites and applications. With a focus on modern frontend technologies, I deliver high-quality code and engaging user experiences.*/

/*
<audio
    ref={audioRef}
    src="/MaxYushkevich.mp3"
    preload="auto"
>
</audio>
<Tooltip content="Listen to the pronunciation" showArrow={true}>
    <Button radius="full" isIconOnly onClick={playAudio} variant="light" size="sm"
            as="button" className="text-primary mt-1">
        <IconVolume stroke={1.5}/>
    </Button>
</Tooltip>*/

/*useEffect(() => {
}, []);

const audioRef = React.useRef<HTMLAudioElement>(null);

const playAudio = () => {
    if (audioRef.current) {
        audioRef.current.play().catch(error => console.log("playback error", error));
    }
};*/
