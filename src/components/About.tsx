'use client'
import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Chip} from "@nextui-org/react";
import {
    IconBulb,
    IconHandClick,
} from "@tabler/icons-react";

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

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
                                All my posts are available on Medium
                            </Chip>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default About;