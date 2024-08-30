'use client'
import React from 'react';
import {Card, CardBody, CardHeader, Divider, Link, ScrollShadow} from "@nextui-org/react";
import {IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconMail, IconBrandUpwork, IconBrandMedium } from "@tabler/icons-react";
import CardWrapper from "@/components/ui/CardWrapper";

export default function Socials() {
    return (
        <ScrollShadow
            hideScrollBar
            className="flex flex-col justify-start p-3 text-wrap md:p-6 h-[60vh] md:h-[58vh] max-h-[60vh] md:max-h-[58vh] overflow-y-auto xl:flex-row xl:overflow-x-auto xl:overflow-y-hidden"
        >
            <CardWrapper>
                <Card className="shadow-none bg-background animate-fade-right animate-once" radius="sm">
                    <CardHeader>
                        <h2 className="font-medium text-3xl md:text-4xl !text-left">{"Let's get in touch"}</h2>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex flex-col gap-5">
                        <div className="flex flex-col md:flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconMail stroke={1.5} size="30"/>
                                <p className="text-lg md:text-xl">{"Email me. "}</p>
                            </div>
                            <div>
                                <Link  color="foreground" className="text-lg md:text-xl" underline="always" href="mailto:hello@juskevic.com">hello@juskevic.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandGithub stroke={1.5} size="30"/>
                                <p className="text-lg md:text-xll">{"See my work. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-lg md:text-xl" underline="always" href="https://github.com/juskevic">@juskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandLinkedin stroke={1.5} size="30"/>
                                <p className="text-lg md:text-xl">{"Connect with my network. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-lg md:text-xl" underline="always" href="https://www.linkedin.com/in/maxjuskevic/">in/maxjuskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandTelegram stroke={1.5} size="30"/>
                                <p className="text-lg md:text-xl">{"Message me. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-lg md:text-xl" underline="always" href="https://t.me/juskevic">me/juskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandUpwork stroke={1.5} size="30"/>
                                <p className="text-lg md:text-xl">{"Do you need a website? "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-lg md:text-xl" underline="always" href="https://www.upwork.com/freelancers/~01f6c71aea76152016">maxjuskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandMedium stroke={1.5} size="30"/>
                                <p className="text-lg md:text-xl">{"Read my blog."}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-lg md:text-xl" underline="always" href="https://medium.com/@juskevic">@juskevic</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </CardWrapper>
        </ScrollShadow>
    );
}