'use client'
import React from 'react';
import {Card, CardBody, CardHeader, Image, useDisclosure} from "@nextui-org/react";
import {IconHandClick} from "@tabler/icons-react";
import FirstProjectModal from "@/components/modals/FirstProjectModal";
import SecondProjectModal from "@/components/modals/SecondProjectModal";

export default function Projects() {

    const { isOpen: isFirstModalOpen, onOpen: openFirstModal, onOpenChange: onFirstModalOpenChange } = useDisclosure();
    const { isOpen: isSecondModalOpen, onOpen: openSecondModal, onOpenChange: onSecondModalOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pb-80">
            <div>
                <h1 className="text-primary !text-right italic text-3xl md:text-4xl">{"What I've Built"}</h1>
            </div>
            <div className="flex xl:flex-row flex-col xl:justify-start gap-8 md:gap-10 xl:gap-14">
                <Card isHoverable isPressable onPress={openFirstModal}
                      className="bg-background shadow outline-1 outline-secondary xl:w-1/3 mb-auto">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <Image
                                alt="portfolio website logo"
                                height={40}
                                radius="md"
                                src="icon.webp"
                                width={40}
                            />
                            <div>
                                <p className="text-primary text-2xl pt-1">{"juskevic.com"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="hidden md:flex text-secondary text-lg">{""}</p>
                            <IconHandClick stroke={1.5} className="my-auto"/>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg">
                        <p>
                            This portfolio website is my first front-end project and a significant milestone in my
                            web development journey. Built with <span
                            className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span> and <span
                            className="bg-cyan-500 rounded-md bg-opacity-20">React</span>, it has garnered over 800
                            commits
                            in six months, showcasing its role as a dynamic sandbox for experimenting with new
                            front-end technologies. It serves not only as a showcase of my work but also as a
                            platform for continuously enhancing my skills and knowledge in the front-end stack.
                        </p>
                    </CardBody>
                </Card>
                <FirstProjectModal isOpen={isFirstModalOpen} onOpenChange={onFirstModalOpenChange}/>
                <Card isHoverable isPressable onPress={openSecondModal}
                      className="bg-background shadow outline-1 outline-secondary xl:w-1/3 mb-auto">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <Image
                                alt="vycetka logo"
                                height={40}
                                radius="md"
                                src="vycetkaLogo.png"
                                width={40}
                            />
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Výčetka"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <IconHandClick stroke={1.5} className="my-auto"/>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg">
                        <p>
                            Výčetka is a simple <span
                            className="bg-cyan-700 rounded-md bg-opacity-20">React Native</span> app
                            designed to help users count their coins and banknotes quickly. With an intuitive interface,
                            it provides an easy way to input and tally your currency, giving you an accurate total with
                            minimal effort. This project showcases my ability to build straightforward, functional
                            applications using <span
                            className="bg-cyan-700 rounded-md bg-opacity-20">React Native</span>.
                        </p>
                    </CardBody>
                </Card>
                <Card isHoverable={false} isPressable={false}
                      className="bg-background shadow outline-1 outline-secondary mb-auto xl:w-1/3">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <Image
                                alt="vycetka logo"
                                height={40}
                                radius="full"
                                src="https://mir-s3-cdn-cf.behance.net/user/115/4061861099650807.616438800e3ff.jpg"
                                width={40}
                            />
                            <div>
                                <p className="text-primary text-2xl pt-1">{"yanayushkevich.com"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="hidden md:flex text-secondary text-lg">{""}</p>
                            <IconHandClick stroke={1.5} className="my-auto"/>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg">
                        <p> This portfolio website was a project I developed for a client, serving as a major milestone
                            in my professional web development journey. Built with <span
                                className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span>, <span
                                className="bg-cyan-500 rounded-md bg-opacity-20">React</span>, <span
                                className="bg-yellow-500 rounded-md bg-opacity-20">TypeScript</span>, and <span
                                className="bg-indigo-500 rounded-md bg-opacity-20">NextUI</span>, this project showcases
                            my ability to deliver high-quality, responsive, and user-centric solutions. The website
                            highlights the {"client's"} work while offering a seamless and intuitive user experience,
                            reflecting my dedication to utilizing cutting-edge technologies to fulfill client needs and
                            create visually engaging web interfaces.</p>
                    </CardBody>
                </Card>
                <SecondProjectModal isOpen={isSecondModalOpen} onOpenChange={onSecondModalOpenChange}/>
            </div>
            <div className="flex xl:flex-row flex-col xl:justify-start gap-8 md:gap-10 xl:gap-14">
                <Card isHoverable isPressable onPress={openFirstModal}
                      className="bg-background shadow outline-1 outline-secondary xl:w-1/3">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Project #4"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="hidden md:flex text-secondary text-lg">{""}</p>
                            <IconHandClick stroke={1.5} className="my-auto opacity-30"/>
                        </div>
                    </CardHeader>
                    <CardBody className="text-lg">
                        <p>
                            ???
                        </p>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}