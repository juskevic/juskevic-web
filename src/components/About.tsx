'use client'
import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Chip} from "@nextui-org/react";
import {
    IconBulb,
    IconHandClick,
} from "@tabler/icons-react";
import { motion } from 'framer-motion';

interface AboutProps {
    id?: string;
}

const techItemsLine1: string[] = [
    "HTML", "CSS", "React Native", "JavaScript",
    "React", "Web Design", "TypeScript", "Next.js",
    "Bootstrap", "Framer Motion", "UI Design", "Expo",
    "Material UI"
];

const nonTechItemsLine1: string[] = [
    "House Music", "Fantasy Books", "Coffee", "Ambient Music",
    "Swords", "EDM"
];

const techItemsLine2: string[] = [
    "Node.js", "UX Design", "API Development", "Figma",
    "React", "Atomic Design", "Prototyping", "Sketching",
    "GraphQL", "Tailwind CSS", "Typography", "A/B Testing",
    "Micro-interactions", "User Testing", "Design Systems"
];

const nonTechItemsLine2: string[] = [
    "Minimalism", "Zelda", "Creative Writing", "Deep House",
    "Reading", "Sleeping"
];

const techItemsLine3: string[] = [
    "REST APIs", "Information Architecture", "Redux", "WebSockets",
    "User Experience", "Visual Storytelling", "Accessibility", "Design Thinking",
    "Visual Design", "Computer Science"
];

const nonTechItemsLine3: string[] = [
    "Lo-fi Music", "Interior Design", "Fantasy Books", "Techno",
    "Coffee", "Synthwave",
];

function shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
}

const About: React.FC<AboutProps> = ({}) => {

    const mixedItemsLine1: string[] = shuffleArray([...techItemsLine1, ...nonTechItemsLine1]);
    const mixedItemsLine2: string[] = shuffleArray([...techItemsLine2, ...nonTechItemsLine2]);
    const mixedItemsLine3: string[] = shuffleArray([...techItemsLine3, ...nonTechItemsLine3]);

    return (
        <>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14">
                <div className="flex xl:flex-row flex-col xl:justify-evenly gap-8 md:gap-10 xl:gap-14">
                    <Card isHoverable isPressable className="bg-background shadow outline-1 outline-secondary xl:w-2/3">
                        <CardHeader className="flex flex-row justify-between">
                            <p className="text-primary text-2xl xl:text-3xl">{"Hello 👋"}</p>
                            <div className="flex flex-row gap-3">
                                <p className="hidden md:flex text-secondary text-xl xl:text-2xl">{"Tap to learn more"}</p>
                                <IconHandClick stroke={1.5} className="my-auto"/>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p className="text-lg md:text-xl">
                                {"I'm Max, a self-taught frontend developer with a passion for taking creative ideas and turning them into interactive web experiences. I started out learning the basics of HTML and CSS, where I developed my skills in building responsive layouts and crafting clean, accessible code. Over time, I got more into the world of web development, learning more about JavaScript and modern frameworks like React and Next.js."}
                            </p>
                        </CardBody>
                    </Card>
                    <Card isHoverable isPressable className="bg-background shadow outline-1 outline-secondary xl:w-1/3">
                        <CardHeader className="!text-left">
                            <p className="text-primary text-xl xl:text-2xl">{"Latest blog post"}</p>
                        </CardHeader>
                        <CardBody></CardBody>
                        <CardFooter>
                            <Chip color="warning" variant="flat" size="sm" endContent={<IconBulb stroke={1.5} size={20} />}>
                                {"All of my posts are available on Medium"}
                            </Chip>
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex xl:flex-row flex-col xl:justify-evenly gap-8 md:gap-10 xl:gap-14">
                    <Card className="bg-background shadow outline-1 outline-secondary xl:w-1/3">
                        <CardBody>
                            <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-10"></div>
                            <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none z-10"></div>
                            <div className="overflow-hidden flex flex-col gap-2 text-lg md:text-xl">
                                <motion.div
                                    className="whitespace-nowrap flex"
                                    animate={{x: [-1000, 0]}}
                                    transition={{repeat: Infinity, duration: 15, ease: "linear"}}
                                >
                                    {mixedItemsLine1.map((item, index) => (
                                        <span key={index} className={nonTechItemsLine1.includes(item) ? "opacity-60 mr-4" : "mr-4"}>{item}</span>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="whitespace-nowrap flex"
                                    animate={{x: [0, -1000]}}
                                    transition={{repeat: Infinity, duration: 20, ease: "linear"}}
                                >
                                    {mixedItemsLine2.map((item, index) => (
                                        <span key={index} className={nonTechItemsLine2.includes(item) ? "opacity-60 mr-4" : "mr-4"}>{item}</span>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="whitespace-nowrap flex"
                                    animate={{x: [-1000, 0]}}
                                    transition={{repeat: Infinity, duration: 10, ease: "linear"}}
                                >
                                    {mixedItemsLine3.map((item, index) => (
                                        <span key={index} className={nonTechItemsLine3.includes(item) ? "opacity-60 mr-4" : "mr-4"}>{item}</span>
                                    ))}
                                </motion.div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-background shadow outline-1 outline-secondary xl:w-2/3">
                        <CardHeader className="!text-left">
                            <p className="text-primary text-xl xl:text-2xl">{"..."}</p>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default About;