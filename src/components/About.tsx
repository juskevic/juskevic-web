'use client'
import React, {useEffect, useState} from 'react';
import {Button, Divider, Link, Tab, Tabs} from "@nextui-org/react";
import {IconCode, IconFileDownload, IconSettings, IconStar, IconTool} from "@tabler/icons-react";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    const [orientation, setOrientation] = useState<"top" | "start">('top');

    useEffect(() => {
        const checkScreenSize = () => {
            setOrientation(window.innerWidth > 1280 ? 'start' : 'top');
        };

        // check on component mounting
        checkScreenSize();

        // check when window resizes
        window.addEventListener('resize', checkScreenSize);

        // cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

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
                <div className="overflow-x-auto whitespace-nowrap">
                    <Tabs variant="bordered" color="primary" size="lg" placement={orientation}>
                        <Tab
                            key="languages"
                            title={
                                <div className="flex items-center space-x-2">
                                    <IconCode stroke={1.5}/>
                                    <span>Languages</span>
                                </div>
                            }
                        >
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
                        </Tab>
                    </Tabs>
                </div>

            </div>
        </>
    )
}

export default About;