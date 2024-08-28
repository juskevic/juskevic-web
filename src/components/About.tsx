'use client'
import React, {useEffect, useRef} from 'react';
import {Accordion, AccordionItem, Card, CardBody, CardHeader, Chip, ScrollShadow, Tab, Tabs} from "@nextui-org/react";
import {IconBrandHtml5, IconBrandReact, IconBrandJavascript, IconBrandCss3, IconBrandBootstrap, IconBrandNextjs, IconBrandTailwind, IconBrandFramerMotion, IconBrandNodejs, IconBrandGit, IconBrandNpm, IconSparkles, IconClock, IconNotes, IconCode, IconBrandTypescript} from "@tabler/icons-react"

import ReadMyStoryModal from "@/components/ui/ReadMyStoryModal";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <>
            <div className="flex justify-start p-6 h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh]">
                <ScrollShadow orientation="horizontal" className="flex flex-row max-w-[600px]">
                    <Card className="" radius="sm">
                        <CardHeader className="z-10 flex-row justify-between font-medium text-2xl md:text-3xl xl:text-4xl">
                            <div className="inline">
                                <span>{"Hello."}</span>
                            </div>
                            <div>
                                <ReadMyStoryModal />
                            </div>
                        </CardHeader>
                        <CardBody className="text-xl md:text-2xl inline">
                            <span>{"I’m Max, a "}</span>
                            <span className="bg-green-400 bg-opacity-20 rounded">{"self-taught"}</span>
                            <span>{" Frontend Engineer with a passion for UI and UX design. My expertise lies in creating seamless web experiences using technologies like "}</span>
                            <span className="bg-cyan-700 bg-opacity-20 rounded">{"React"}</span>
                            <span>{", "}</span>
                            <span className="bg-blue-600 bg-opacity-20 rounded">{" TypeScript"}</span>
                            <span>{" and "}</span>
                            <span className="bg-gray-800 bg-opacity-20 rounded">{"NEXT"}</span>
                            <span>{"."}</span>
                            <span>{" From optimizing performance to crafting elegant interfaces, I’m dedicated to enhancing user interactions."}</span>
                        </CardBody>
                    </Card>
                </ScrollShadow>
            </div>
        </>
    )
}

export default About;