'use client'
import React from 'react';

export default function Landing() {

    return (
        <>
            <div className="flex justify-center items-center h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh]">
                <div className="flex items-center">
                    <div>
                        <h1 className="font-bold text-2xl md:text-4xl xl:text-7xl space-y-2 text-center">
                            <div className="animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out">
                                Bringing Ideas to Life
                            </div>
                            <div className="animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out animate-delay-200">
                                with <span className="text-secondary">Code</span> and <span className="text-secondary">Design</span>
                            </div>
                        </h1>
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
<Tooltip content="Listen to the pronaucination" showArrow={true}>
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
