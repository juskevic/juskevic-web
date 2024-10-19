'use client'
import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, ScrollShadow, useDisclosure} from "@nextui-org/react";
import {IconHandClick,} from "@tabler/icons-react";
import { motion } from 'framer-motion';
import AboutModal from "@/components/modals/AboutModal";

interface AboutProps {
    id?: string;
}

const techItemsLine1: string[] = [
    "HTML", "CSS", "React Native", "JavaScript",
    "React", "Web Design", "TypeScript", "Next.js",
    "Bootstrap", "Framer Motion", "UI Design", "Expo",
    "Material UI", "Express.js", "Firebase", "MongoDB",
    "PostgreSQL", "REST APIs", "GraphQL", "Docker"
];

const nonTechItemsLine1: string[] = [
    "House Music", "Fantasy Books", "Coffee", "Ambient Music",
    "Fencing", "EDM", "Nature", "IDM", "Reading", "Studying"
];

const techItemsLine2: string[] = [
    "Node.js", "UX Design", "API Development", "Figma",
    "React", "Atomic Design", "Prototyping", "Sketching",
    "GraphQL", "Tailwind CSS", "Typography", "A/B Testing",
    "Micro-interactions", "User Testing", "Design Systems",
    "Redis", "Prisma", "Cypress", "Jest", "AWS", "Serverless"
];

const nonTechItemsLine2: string[] = [
    "Minimalism", "Zelda", "Creative Writing", "Deep House",
    "Reading", "Sleeping"
];

const techItemsLine3: string[] = [
    "REST APIs", "Information Architecture", "Redux", "WebSockets",
    "User Experience", "Visual Storytelling", "Accessibility", "Design Thinking",
    "Visual Design", "Computer Science", "Kubernetes", "SQL", "NoSQL",
    "OAuth", "Serverless Functions", "RabbitMQ", "Nginx", "CI/CD Pipelines",
    "Git", "Docker Compose", "Cloud Functions", "Microservices"
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
                <h1 className="text-primary !text-right italic text-3xl md:text-4xl pb-5">{"My Story"}</h1>
            </div>
            <div className="flex justify-end pb-5">
                <div className="flex flex-row gap-3">
                    <h2 className="text-secondary text-xl xl:text-2xl">{"Tap to learn more"}</h2>
                    <IconHandClick stroke={1.5} className="my-auto text-secondary"/>
                </div>
            </div>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pb-80">
                <div className="flex xl:flex-row flex-col xl:justify-evenly gap-8 md:gap-10 xl:gap-14 xl:h-[250px]">
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
                            <ScrollShadow hideScrollBar={true} className="xl:h-[250px]">
                                <p className="text-lg md:text-xl">
                                    {"I'm"} Max, a self-taught fullstack developer passionate about turning creative
                                    ideas
                                    into interactive experiences. My journey began with <span
                                    className="bg-orange-600 rounded-md bg-opacity-20">HTML</span> and <span
                                    className="bg-blue-600 rounded-md bg-opacity-20">CSS</span>, building responsive
                                    layouts
                                    and clean, accessible code. I soon learned <span
                                    className="bg-yellow-300 rounded-md bg-opacity-20">JavaScript</span>, which led me
                                    to
                                    modern frameworks like <span
                                    className="bg-cyan-500 rounded-md bg-opacity-20">React</span>, <span
                                    className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span>, and <span
                                    className="bg-green-500 rounded-md bg-opacity-20">React Native</span>. I also work
                                    with <span className="bg-purple-600 rounded-md bg-opacity-20">Node.js</span>, <span
                                    className="bg-indigo-500 rounded-md bg-opacity-20">Express.js</span>, and <span
                                    className="bg-red-500 rounded-md bg-opacity-20">Firebase</span> to build scalable,
                                    dynamic applications. {"I'm"} always learning and staying on top of industry trends to
                                    create the best user experiences.
                                </p>
                            </ScrollShadow>
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
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex xl:flex-row flex-col xl:justify-evenly gap-8 md:gap-10 xl:gap-14">
                    <Card className="bg-background shadow outline-1 outline-secondary my-auto">
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
                </div>
            </div>
        </>
    )
}

export default About;