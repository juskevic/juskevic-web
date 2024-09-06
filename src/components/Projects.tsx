'use client'
import React from 'react';
import {Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import {IconHandClick} from "@tabler/icons-react";

export default function Projects() {
    return (
        <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14">
            <div className="flex xl:flex-row flex-col xl:justify-start gap-8 md:gap-10 xl:gap-14">
                <Card isHoverable isPressable className="bg-background shadow outline-1 outline-secondary xl:w-1/3">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="lg"
                                src="icon.webp"
                                width={40}
                            />
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Portfolio Website"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="hidden md:flex text-secondary text-lg">{""}</p>
                            <IconHandClick stroke={1.5} className="my-auto"/>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg">
                        <p>
                            {"This portfolio website is my first front-end project and a significant milestone in my web development journey. Over the past six months, it has garnered over 800 comments, reflecting its role as a dynamic sandbox for experimenting with new front-end technologies. It serves not only as a showcase of my work but also as a platform for continuously enhancing my skills and knowledge in the front-end stack."}
                        </p>
                    </CardBody>
                </Card>
                <Card isHoverable isPressable className="bg-background shadow outline-1 outline-secondary xl:w-1/3 mb-auto">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="lg"
                                src="vycetkaLogo.png"
                                width={40}
                            />
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Výčetka"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="hidden md:flex text-secondary text-lg">{"Tap to learn more"}</p>
                            <IconHandClick stroke={1.5} className="my-auto"/>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg">
                        <p>
                            {"Výčetka is a simple React Native app designed to help users count their coins and banknotes quickly. With an intuitive interface, it provides an easy way to input and tally your currency, giving you an accurate total with minimal effort. This project showcases my ability to build straightforward, functional applications using React Native."}
                        </p>
                    </CardBody>
                </Card>
                <Card isHoverable={false} isPressable={false} className="bg-background shadow outline-1 outline-secondary mb-auto xl:w-1/3">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Project #3"}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg text-secondary">
                        <p className="!text-center align-middle">
                            {"Coming Soon "}
                        </p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}