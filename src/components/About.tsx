'use client'
import React from 'react';
import {
    Accordion, AccordionItem,
    Card, CardBody, CardHeader,
    Chip,
    Progress,
    ScrollShadow,
    Tab, Tabs
} from "@nextui-org/react";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <>
            <div className="flex justify-start p-3 text-wrap md:p-6 h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh]">
                <ScrollShadow hideScrollBar>
                    <div className="flex flex-col xl:flex-row justify-evenly">
                        <Card className="shadow-none bg-background xl:w-1/2" radius="sm">
                            <CardHeader className="z-10 flex-row justify-between font-medium text-3xl md:text-4xl xl:text-5xl">
                                <div className="inline">
                                    <span>{"Hello."}</span>
                                </div>
                            </CardHeader>
                            <CardBody className="text-xl md:text-2xl">
                                <p>
                                    {"I’m Max, a self-taught Frontend Engineer with a passion for UI and UX design. My expertise lies in creating seamless web experiences using technologies like React, TypeScript and NEXT. From optimizing performance to crafting elegant interfaces, I’m dedicated to enhancing user interactions."}
                                </p>
                            </CardBody>
                        </Card>
                        <Card className="shadow-none bg-background" radius="sm">
                            <CardHeader className="z-10 flex-row justify-between">
                                <div className="flex flex-col">
                                    <p className={`text-lg text-secondary`}>
                                        The tools behind stunning interfaces
                                    </p>
                                    <h2 className="font-medium text-3xl md:text-4xl xl:text-5xl">
                                        {"Tech Stack"}
                                    </h2>
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <Tabs size="lg" variant="underlined">
                                    <Tab title={<span className="text-medium md:text-lg">Frontend</span>}>
                                        <ScrollShadow hideScrollBar className="flex flex-col gap-3 w-full max-w-md overflow-y-auto max-h-[300px]">
                                            <Progress radius="none" label="HTML" value={90}/>
                                            <Progress radius="none" label="CSS" value={80}/>
                                            <Progress radius="none" label="JavaScript" value={75}/>
                                            <Progress radius="none" label="Tailwind" value={70}/>
                                            <Progress radius="none" label="TypeScript" value={68}/>
                                            <Progress radius="none" label="React" value={65}/>
                                            <Progress disableAnimation radius="none" label="Next.js" value={60}/>
                                            <Progress disableAnimation radius="none" label="Next.js" value={60}/>
                                            <Progress disableAnimation radius="none" label="React Native" value={47}/>
                                            <Progress disableAnimation radius="none" label="Expo" value={46}/>
                                            <Progress disableAnimation radius="none" label="Bootstrap" value={45}/>
                                            <Progress disableAnimation radius="none" label="Framer Motion" value={25}/>
                                        </ScrollShadow>
                                    </Tab>
                                    <Tab title={<span className="text-medium md:text-lg">Other</span>}>
                                    </Tab>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </div>
                </ScrollShadow>
            </div>
        </>
    )
}

export default About;