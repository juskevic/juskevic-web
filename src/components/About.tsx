'use client'
import React from 'react';
import {
    Accordion, AccordionItem,
    Card, CardBody, CardHeader,
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
            <div className="flex flex-col justify-start p-3 text-wrap md:p-6 h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh] overflow-y-auto xl:flex-row xl:overflow-x-auto xl:overflow-y-hidden">
                <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
                    <Card className="shadow-none bg-background w-full" radius="sm">
                        <CardHeader
                            className="z-10 flex-row justify-between font-medium text-3xl md:text-4xl xl:text-5xl">
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
                    <Card className="shadow-none bg-background w-full" radius="sm">
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
                                    <ScrollShadow hideScrollBar
                                                  className="flex flex-col gap-3 w-full max-w-md overflow-y-auto max-h-[300px]">
                                        <Progress radius="none" label="npm" value={75}/>
                                        <Progress radius="none" label="Git" value={65}/>
                                        <Progress radius="none" label="Node.js" value={55}/>
                                    </ScrollShadow>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                    <Card className="shadow-none bg-background w-full" radius="sm">
                        <CardHeader className="z-10 flex-col !items-start">
                            <div className="text-lg text-secondary">
                                Press to expand
                            </div>
                            <div>
                                {"Learn more about me"}
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Accordion isCompact showDivider={false}>
                                <AccordionItem aria-label="Accordion 1" title={<span className="text-xl md:text-2xl">What inspires you?</span>}>
                                    {"I find inspiration in solving problems, creating interfaces, and learning new things. Reading and music also influence my creativity. People like Steve Jobs and books such as \"Don’t Make Me Think\" have shaped my perspective. So has the open-source community."}
                                </AccordionItem>
                                <AccordionItem aria-label="Accordion 2" title={<span className="text-xl md:text-2xl">How do you spend your free time?</span>}>
                                    {"Outside of my digital life, I enjoy cycling, reading, and listening to music. These activities help me relax and reflect. They’re my escape from screens and algorithms."}
                                </AccordionItem>
                                <AccordionItem aria-label="Accordion 3" title={<span className="text-xl md:text-2xl">What are you currently learning?</span>}>
                                    {"I'm currently learning the ins and outs of mobile app development using tools like React Native, Expo, and Firebase."}
                                </AccordionItem>
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default About;