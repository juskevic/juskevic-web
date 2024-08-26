'use client'
import React, {useEffect} from 'react';
import {Button, Tooltip} from "@nextui-org/react";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";
import { IconVolume } from '@tabler/icons-react';

export default function Landing() {

    useEffect(() => {}, []);

    const audioRef = React.useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.log("playback error", error));
        }
    };

    return (
        <>
            <div className="flex flex-row justify-between max-w-screen-xl mx-auto md:pt-0 pt-20">
                <div className="flex flex-col md:space-y-14 space-y-10">
                    <div className="max-w-screen-xl">
                        <h1 className={`font-bold text-4xl md:text-5xl xl:text-7xl space-y-3`}>
                            {/*{'Expert in crafting responsive, user-centric web experiences with clean code and intuitive design.'}*/}
                            <div className="animate-fade-down animate-delay-[200ms]">
                                Bringing Ideas to Life
                            </div>
                            <div className="opacity-90 animate-fade-down animate-delay-[400ms]">
                                with <span className="text-secondary">Code</span> and <span className="text-secondary">Design</span>
                            </div>
                        </h1>
                    </div>
                    <div className="flex flex-col pt-10 md:pt-14 justify-start animate-fade-down animate-delay-[1000ms]">
                        <div className="space-y-14">
                            <div className="w-[350px] md:w-[380px] xl:w-full pb-8">
                                <p className={`text-lg md:text-xl xl:text-2xl text-foreground animate-fade animate-delay-[2000ms]`}>
                                    <span>{"I love creating great user experiences through "}</span>
                                    <span className="">{"UI and UX design."}</span>
                                </p>
                            </div>
                            <div>
                                <div className="flex flex-row space-x-1">
                                    <h1 className={`text-3xl sm:text-4xl italic`}>
                                        {"Max Juškevič"}
                                    </h1>
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
                                    </Tooltip>
                                </div>
                                <p className={`text-foreground text-lg sm:text-xl animate-fade-down animate-delay-[1200ms]`}>
                                    {"Frontend Engineer"}
                                </p>
                            </div>
                        </div>
                        <div className="pt-1 animate-fade-down animate-delay-[1600ms]">
                            <SocialsButtonGroup/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}