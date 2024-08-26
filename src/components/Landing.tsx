'use client'
import React, {useEffect} from 'react';
import {Caveat, Poppins, Inter} from "next/font/google";
import {Button, Tooltip} from "@nextui-org/react";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";
import { IconVolume } from '@tabler/icons-react';

const COMMON_TEXT_COLOR = 'text-black';

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
                <div className="flex flex-col md:space-y-0 space-y-10">
                    <div className="max-w-screen-xl">
                        <h1 className={`font-bold text-2xl md:text-4xl xl:text-6xl space-y-0.5`}>
                            {/*{'Crafting web magic: responsive, user-friendly, and lightning-fast.'}*/}
                            <div className="animate-fade-down animate-delay-[200ms]">{"Crafting web magic: "}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[400ms]">{"responsive, user-friendly, "}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[800ms]">{"and lightning-fast."}</div>
                        </h1>
                    </div>
                    <div className="flex flex-col pt-10 md:pt-14 justify-start animate-fade-down animate-delay-[1000ms]">
                        <div>
                            <div className="w-[350px] md:w-[380px] xl:w-full pb-8">
                                <p className={`text-lg md:text-xl xl:text-2xl text-gray-600 animate-fade animate-delay-[2000ms]`}>
                                    <span>{"I love creating great user experiences through "}</span>
                                    <span className="bg-green-400 bg-opacity-20 rounded">{"UI and UX design."}</span>
                                </p>
                            </div>
                            <div className="flex flex-row space-x-1">
                                <h1 className={`text-3xl sm:text-4xl ${COMMON_TEXT_COLOR}`}>
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
                                            as="button" className="text-gray-400 mt-1">
                                        <IconVolume stroke={1.5}/>
                                    </Button>
                                </Tooltip>
                            </div>
                            <p className={`text-gray-600 text-lg sm:text-xl ${COMMON_TEXT_COLOR} animate-fade-down animate-delay-[1200ms]`}>
                                {"Frontend Engineer"}
                            </p>
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