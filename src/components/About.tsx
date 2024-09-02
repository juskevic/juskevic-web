'use client'
import React from 'react';
import {Button, Divider, Link, Tab, Tabs} from "@nextui-org/react";
import {IconCode, IconFileDownload, IconSettings, IconStar, IconTool} from "@tabler/icons-react";
import Languages from "@/components/ui/Languages";
import Frameworks from "@/components/ui/Frameworks";
import Tools from "@/components/ui/Tools";
import Other from "@/components/ui/Other";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <>
            <div className="flex justify-start flex-col gap-8 md:gap-14">
                <div className="flex flex-row justify-between text-3xl md:text-5xl xl:text-6xl text-secondary italic">
                    <Divider orientation="horizontal" className="w-1/2 xl:w-2/3 my-auto"/>
                    <p>{"About Me"}</p>
                </div>
                <div className="flex flex-row justify-start gap-8 text-3xl md:text-5xl text-foreground">
                    <h1>{"Hello 👋"}</h1>
                    <Button
                        className="text-xl md:text-3xl"
                        as={Link}
                        href="#"
                        color="primary"
                        variant="flat"
                        endContent={<IconFileDownload stroke={1.5}/>}
                    >
                        CV
                    </Button>
                </div>
                <div className="text-xl md:text-2xl xl:text-3xl w-full xl:w-4/5 2xl:w-3/4">
                    <p>
                        {"I'm Max, a self-taught frontend developer with a passion for taking creative ideas and turning them into interactive web experiences. I started out learning the basics of HTML and CSS, where I developed my skills in building responsive layouts and crafting clean, accessible code. Over time, I got more into the world of web development, learning more about JavaScript and modern frameworks like React and Next.js."}
                    </p>
                </div>

                <div className="flex flex-row justify-start gap-8 text-3xl md:text-5xl text-foreground">
                    <h1>{"Skills Overview 💻"}</h1>
                </div>
                <div className="overflow-x-auto whitespace-nowrap xl:w-1/2">
                    <Tabs variant="bordered" color="primary" size="lg">
                        <Tab
                            key="languages"
                            title={
                                <div className="flex items-center space-x-2">
                                    <IconCode stroke={1.5}/>
                                    <span>Languages</span>
                                </div>
                            }
                        >
                            <Languages/>
                        </Tab>
                        <Tab
                            key="frameworks"
                            title={
                                <div className="flex items-center space-x-2">
                                    <IconSettings stroke={1.5}/>
                                    <span>Frameworks</span>
                                </div>
                            }
                        >
                            <Frameworks/>
                        </Tab>
                        <Tab
                            key="tools"
                            title={
                                <div className="flex items-center space-x-2">
                                    <IconTool stroke={1.5}/>
                                    <span>Tools</span>
                                </div>
                            }
                        >
                            <Tools/>
                        </Tab>
                        <Tab
                            key="other"
                            title={
                                <div className="flex items-center space-x-2">
                                    <IconStar stroke={1.5}/>
                                    <span>Other</span>
                                </div>
                            }
                        >
                            <Other/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default About;