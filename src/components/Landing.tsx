'use client'
import React from 'react';
import {Archivo_Black} from "next/font/google";

const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Landing() {

    return (
        <>
            <div className="flex justify-start">
                <div className={`${archivoBlack.className} flex flex-col xl:text-9xl`}>
                    <div><p className="hollow-text">{"MAX"}</p></div>
                    <div><p className="hollow-text">{"JUŠKEVIČ"}</p></div>
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
