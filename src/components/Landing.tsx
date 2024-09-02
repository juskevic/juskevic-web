'use client'
import React, { useEffect, useState } from 'react';
import {Archivo_Black} from "next/font/google";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";
import {Button} from "@nextui-org/react";
import { motion } from 'framer-motion';

const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Landing() {

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Ensure the animation only runs once per page load
        if (!hasAnimated) {
            setHasAnimated(true);
        }
    }, [hasAnimated]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div className="flex justify-start flex-col gap-8 md:gap-10 xl:gap-14">
                <motion.div
                    className={`${archivoBlack.className} flex flex-col text-foreground text-6xl md:text-8xl xl:text-9xl`}
                    variants={containerVariants}
                    initial="hidden"
                    animate={hasAnimated ? 'visible' : 'hidden'}
                >
                    <motion.div variants={textVariants}>
                        <p className="hollow-text hover:text-primary-100 transition">{"MAX"}</p>
                    </motion.div>
                    <motion.div variants={textVariants}>
                        <p className="hollow-text hover:text-primary-100 transition">{"JUŠKEVIČ"}</p>
                    </motion.div>
                </motion.div>
                <div className="flex text-3xl md:text-5xl xl:text-6xl text-foreground">
                    <p>{"Frontend Engineer"}</p>
                </div>
                <div className="flex text-lg md:text-xl xl:text-2xl md:w-2/3 xl:w-1/2">
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
                            className="text-lg"
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
