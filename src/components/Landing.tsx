'use client'
import React from 'react';
import {Archivo_Black} from "next/font/google";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";
import {Button} from "@nextui-org/react";

const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Landing() {

    return (
        <>
            <div className="flex justify-start flex-col xl:gap-14">
                <div className={`${archivoBlack.className} flex flex-col text-foreground xl:text-9xl`}>
                    <div><p className="hollow-text hover:text-primary-100 transition">{"MAX"}</p></div>
                    <div><p className="hollow-text hover:text-primary-100 transition">{"JUŠKEVIČ"}</p></div>
                </div>
                <div className="flex xl:text-6xl text-foreground">
                    <p>{"Web Developer"}</p>
                </div>
                <div className="flex xl:text-2xl w-1/2">
                    <p>
                        {"I'm a passionate Web Developer specializing in creating dynamic and user-friendly websites and applications. With a focus on modern frontend technologies, I deliver high-quality code and engaging user experiences."}
                    </p>
                </div>
                <div className="flex flex-row gap-5">
                    <div><SocialsButtonGroup/></div>
                    <div>
                        <Button
                            size="md"
                            variant="flat"
                            color="primary"
                            className="text-lg font-"
                        >
                            {"Get in Touch"}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

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
