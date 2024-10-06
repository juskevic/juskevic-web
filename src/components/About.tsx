'use client'
import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Chip, Progress, useDisclosure} from "@nextui-org/react";
import {
    IconBrandNodejs,
    IconBrandReactNative,
    IconBulb,
    IconHandClick,
} from "@tabler/icons-react";
import { motion } from 'framer-motion';
import AboutModal from "@/components/modals/AboutModal";

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
    "Fencing", "EDM"
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
    "Lo-fi Music" , "Fantasy Books", "Techno",
    "Coffee", "Synthwave",
];

function shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
}

const About: React.FC<AboutProps> = ({}) => {

    const mixedItemsLine1: string[] = shuffleArray([...techItemsLine1, ...nonTechItemsLine1]);
    const mixedItemsLine2: string[] = shuffleArray([...techItemsLine2, ...nonTechItemsLine2]);
    const mixedItemsLine3: string[] = shuffleArray([...techItemsLine3, ...nonTechItemsLine3]);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div>
                <h1 className="text-primary text-3xl md:text-4xl xl:text-5xl pb-5 md:pb-0">{"My Story"}</h1>
            </div>
            <div className="flex justify-end pb-5">
                <div className="flex flex-row gap-3">
                    <h2 className="text-secondary text-xl xl:text-2xl">{"Tap to learn more"}</h2>
                    <IconHandClick stroke={1.5} className="my-auto text-secondary"/>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pb-80">
                <div className="flex xl:flex-row flex-col xl:justify-evenly gap-8 md:gap-10 xl:gap-14">
                    <Card
                        isHoverable
                        isPressable
                        className="bg-background shadow outline-1 outline-secondary xl:w-2/3"
                        onPress={onOpen}
                    >
                        <CardHeader className="flex flex-row justify-between pb-0">
                            <p className="text-primary text-2xl xl:text-3xl">{"Hello 👋"}</p>
                            <div className="flex flex-row gap-3">
                                <IconHandClick stroke={1.5} className="my-auto"/>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p className="text-lg md:text-xl">
                                {"I'm"} Max, a self-taught frontend developer who loves turning creative ideas into
                                interactive web experiences. I started by learning <span
                                className="bg-orange-600 rounded-md bg-opacity-20">HTML</span> and <span
                                className="bg-blue-600 rounded-md bg-opacity-20">CSS</span>, building responsive layouts
                                and writing clean, accessible code. As I got more into web development, I learned <span
                                className="bg-yellow-300 rounded-md bg-opacity-20">JavaScript</span> and modern
                                frameworks like <span
                                className="bg-cyan-500 rounded-md bg-opacity-20">React</span> and <span
                                className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span>.
                            </p>

                        </CardBody>
                    </Card>
                    <AboutModal isOpen={isOpen} onOpenChange={onOpenChange}/>
                    <Card isHoverable isPressable className="bg-background shadow outline-1 outline-secondary xl:w-1/3">
                        <CardHeader className="flex flex-row justify-between">
                            <p className="text-primary text-xl xl:text-2xl">{"Latest blog post"}</p>
                            <div className="flex flex-row gap-3">
                                <IconHandClick stroke={1.5} className="my-auto"/>
                            </div>
                        </CardHeader>
                        <CardBody></CardBody>
                        <CardFooter>
                            <Chip color="warning" variant="flat" size="sm"
                                  endContent={<IconBulb stroke={1.5} size={20}/>}>
                                {"All of my posts are available on Medium"}
                            </Chip>
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex xl:flex-row flex-col xl:justify-evenly gap-8 md:gap-10 xl:gap-14">
                    <Card className="bg-background shadow outline-1 outline-secondary xl:w-1/3">
                        <CardBody>
                            <div
                                className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none z-10"></div>
                            <div
                                className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none z-10"></div>
                            <div className="overflow-hidden flex flex-col gap-2 text-lg md:text-xl xl:my-auto">
                                <motion.div
                                    className="whitespace-nowrap flex"
                                    animate={{x: [-1000, 0]}}
                                    transition={{repeat: Infinity, duration: 15, ease: "linear"}}
                                >
                                    {mixedItemsLine1.map((item, index) => (
                                        <span key={index}
                                              className={nonTechItemsLine1.includes(item) ? "opacity-60 mr-4" : "mr-4"}>{item}</span>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="whitespace-nowrap flex"
                                    animate={{x: [0, -1000]}}
                                    transition={{repeat: Infinity, duration: 20, ease: "linear"}}
                                >
                                    {mixedItemsLine2.map((item, index) => (
                                        <span key={index}
                                              className={nonTechItemsLine2.includes(item) ? "opacity-60 mr-4" : "mr-4"}>{item}</span>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="whitespace-nowrap flex"
                                    animate={{x: [-1000, 0]}}
                                    transition={{repeat: Infinity, duration: 10, ease: "linear"}}
                                >
                                    {mixedItemsLine3.map((item, index) => (
                                        <span key={index}
                                              className={nonTechItemsLine3.includes(item) ? "opacity-60 mr-4" : "mr-4"}>{item}</span>
                                    ))}
                                </motion.div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-background shadow outline-1 outline-secondary xl:w-2/3">
                        <CardHeader className="!text-left">
                            <p className="text-primary text-xl xl:text-2xl">{"What am I currently learning?"}</p>
                        </CardHeader>
                        <CardBody className="gap-4">
                            <Progress
                                size="md"
                                radius="full"
                                classNames={{
                                    base: "w-full",
                                    track: "border border-default",
                                    indicator: "bg-gradient-to-r from-cyan-400 to-cyan-600",
                                    label: "tracking-wider",
                                    value: "text-foreground/60",
                                }}
                                label=
                                    {<div className="flex flex-row text-lg gap-1">
                                        {"React Native"}
                                        <IconBrandReactNative stroke={1.5} className="my-auto"/>
                                    </div>}
                                value={77}
                                showValueLabel={true}
                            />
                            <Progress
                                size="md"
                                radius="full"
                                classNames={{
                                    base: "w-full",
                                    track: "border border-default",
                                    indicator: "bg-gradient-to-r from-green-400 to-green-600",
                                    label: "tracking-wider",
                                    value: "text-foreground/60",
                                }}
                                label=
                                    {<div className="flex flex-row text-lg gap-1">
                                        {"Node.js"}
                                        <IconBrandNodejs stroke={1.5} className="my-auto"/>
                                    </div>}
                                value={52}
                                showValueLabel={true}
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default About;