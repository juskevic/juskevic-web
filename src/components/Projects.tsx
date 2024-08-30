'use client'
import React from 'react';
import {Card, CardHeader, CardBody, Button, Tabs, Tab, Image, Chip, ScrollShadow} from "@nextui-org/react";
import {IconBrandGithub, IconArrowUpRight, IconBrandGooglePlay, IconBrandAppstore, IconAlertCircle} from "@tabler/icons-react";
import CardWrapper from "@/components/ui/CardWrapper";

export default function Projects() {
    return (
        <ScrollShadow hideScrollBar={true} className="flex flex-col justify-start p-3 text-wrap md:p-6 h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh] overflow-y-auto xl:flex-row xl:overflow-x-auto xl:overflow-y-hidden">
            <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
                <CardWrapper>
                    <Card className="shadow-none bg-background animate-fade-right animate-once" radius="sm">
                        <CardHeader className="flex gap-3 pb-1 font-medium text-xl md:text-2xl xl:text-3xl">
                            <Image
                                className="outline-1 outline outline-secondary"
                                alt="portfolio website logo"
                                height={50}
                                radius="md"
                                src="/icon.webp"
                                width={50}
                            />
                            <div className="flex flex-col">
                                <p className="text-primary">Portfolio Website</p>
                                <p className="text-secondary text-lg md:text-xl xl:text-2xl">Website</p> {/* Size has to be adjusted according to <CardHeader> */}
                            </div>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <Tabs size="md" variant="underlined">
                                <Tab title={<span className="text-medium md:text-lg">Description</span>}>
                                    <ScrollShadow size={50}>
                                        <p className="text-lg md:text-xl md:h-full h-[250px]">
                                            {"My portfolio website was my very first front-end project. I started with basic HTML and CSS, but it has evolved significantly since then. Now, it's powered by modern frameworks like Next.js and React, and enhanced with various JavaScript libraries for a sleek, contemporary design. With over 800 commits so far, I continue to use this site as a testing ground for new technologies, constantly improving and refining it."}
                                        </p>
                                    </ScrollShadow>
                                </Tab>
                                <Tab title={<span className="text-medium md:text-lg">Links</span>}>
                                    <div className="space-x-3 space-y-3 md:flex-row xl:flex-col flex-col">
                                        <Button
                                            as="a"
                                            href="https://github.com/juskevic/juskevic-web"
                                            className="text-lg"
                                            radius="sm"
                                            variant="bordered"
                                            size="sm"
                                            endContent={<IconBrandGithub stroke={1.5}/>}
                                        >
                                            source-code
                                        </Button>
                                    </div>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </CardWrapper>
                <CardWrapper>
                    <Card className="shadow-none bg-background animate-fade-right animate-once animate-delay-1000" radius="sm">
                        <CardHeader className="flex gap-3 pb-1 font-medium text-xl md:text-2xl xl:text-3xl">
                            <Image
                                className="outline-1 outline outline-secondary"
                                alt="vycetka logo"
                                height={50}
                                radius="md"
                                src="vycetkaLogo.png"
                                width={50}
                            />
                                <div className="flex flex-col">
                                    <p className="text-primary">Výčetka</p>
                                    <p className="text-secondary text-lg md:text-xl xl:text-2xl">Android, iOS</p>
                                </div>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <Tabs size="md" variant="underlined">
                                <Tab title={<span className="text-medium md:text-lg">Description</span>}>
                                    <ScrollShadow>
                                        <p className="text-lg md:text-xl md:h-full h-[250px]">
                                            {"Vyčetka is a mobile app built with Expo, React Native, and React Native Paper UI. It quickly and accurately counts banknotes and coins, originally starting as a web app with Bootstrap. Now, it's a handy way to manage currency denominations on the go. 💰📱"}
                                        </p>
                                    </ScrollShadow>
                                </Tab>
                                <Tab title={<span className="text-medium md:text-lg">Preview</span>}>
                                    <Image width={500} src="/vycetka_preview_1.png" alt="preview image"></Image>
                                </Tab>
                                <Tab title={<span className="text-medium md:text-lg">Links</span>}>
                                    <div className="space-x-3 space-y-3 md:flex-row xl:flex-col flex-col pb-5">
                                        <Button
                                            as="a"
                                            href="#"
                                            className="text-medium"
                                            radius="sm"
                                            variant="bordered"
                                            size="sm"
                                            endContent={<IconArrowUpRight stroke={1.5}/>}
                                        >
                                            website
                                        </Button>
                                        <Button
                                            isDisabled={true}
                                            as="a"
                                            href="#"
                                            className="text-medium"
                                            radius="sm"
                                            variant="bordered"
                                            size="sm"
                                            endContent={<IconBrandGooglePlay stroke={1.5}/>}
                                        >
                                            google play
                                        </Button>
                                        <Button
                                            isDisabled={true}
                                            as="a"
                                            href="#"
                                            className="text-medium"
                                            radius="sm"
                                            variant="bordered"
                                            size="sm"
                                            endContent={<IconBrandAppstore stroke={1.5}/>}
                                        >
                                            app store
                                        </Button>
                                    </div>
                                    <Chip
                                        className="!text-center"
                                        startContent={<IconAlertCircle stroke={1.5}/>}
                                        color="warning"
                                        variant="flat"
                                        radius="sm"
                                    >
                                        This project is currently under development.
                                    </Chip>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </CardWrapper>
            </div>
        </ScrollShadow>
    )
}