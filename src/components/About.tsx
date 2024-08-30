'use client'
import React from 'react';
import {
    Card, CardBody, CardHeader,
    Progress,
    ScrollShadow,
    Tab, Tabs
} from "@nextui-org/react";
import CardWrapper from "@/components/ui/CardWrapper";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <>
            <ScrollShadow hideScrollBar className="flex flex-col justify-start p-3 text-wrap md:p-6 h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh] overflow-y-auto xl:flex-row xl:overflow-x-auto xl:overflow-y-hidden">
                <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
                    <CardWrapper>
                        <Card className="shadow-none bg-background animate-fade-right animate-once" radius="sm">
                            <CardHeader className="z-10 flex-row justify-between font-medium text-3xl md:text-4xl xl:text-5xl">
                                <div className="inline">
                                    <span>{"Hello."}</span>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <ScrollShadow>
                                    <p className="text-lg md:text-2xl md:h-full h-[250px]">
                                        {"I’m a self-taught Frontend Engineer who loves designing and building user-friendly websites. I specialize in making web pages look great and work smoothly, using tools like React, TypeScript, and NEXT. Whether it’s improving website speed or creating easy-to-use interfaces, I’m all about making the web a better place for everyone."}
                                    </p>
                                </ScrollShadow>
                            </CardBody>
                        </Card>
                    </CardWrapper>
                    <CardWrapper>
                        <Card className="shadow-none bg-background animate-fade-right animate-once animate-delay-500"
                              radius="sm">
                            <CardHeader
                                className="z-10 flex-row justify-between font-medium text-3xl md:text-4xl xl:text-5xl">
                            <div className="inline">
                                    <span>{"Tech Stack"}</span>
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
                    </CardWrapper>
                </div>
            </ScrollShadow>
        </>
    )
}

export default About;