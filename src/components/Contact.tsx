'use client'
import React from 'react';
import {Card, CardBody, CardHeader, Divider, Link} from "@nextui-org/react";
import {IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconMail, IconBrandUpwork, IconBrandMedium } from "@tabler/icons-react";

export default function Socials() {
    return (
        <>
            <div className="flex justify-center pb-32">
                <Card className="shadow-none bg-opacity-25 md:w-[600px]">
                    <CardHeader>
                        <h2 className="font-medium text-3xl md:text-4xl !text-left">{"Let's get in touch"}</h2>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex flex-col gap-5">
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconMail stroke={1.5} size="30"/>
                                <p className="text-xl">{"Email me. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="mailto:hello@juskevic.com">hello@juskevic.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandGithub stroke={1.5} size="30"/>
                                <p className="text-xl">{"See my work. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="https://github.com/juskevic">@juskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandLinkedin stroke={1.5} size="30"/>
                                <p className="text-xl">{"Connect with my network. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="https://www.linkedin.com/in/maxjuskevic/">in/maxjuskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandTelegram stroke={1.5} size="30"/>
                                <p className="text-xl">{"Message me. "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="https://t.me/juskevic">me/juskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandUpwork stroke={1.5} size="30"/>
                                <p className="text-xl">{"Do you need a website? "}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="https://www.upwork.com/freelancers/~01f6c71aea76152016">maxjuskevic</Link>
                            </div>
                        </div>
                        <div className="flex flex-row flew-wrap justify-between">
                            <div className="flex flex-row md:gap-1">
                                <IconBrandMedium stroke={1.5} size="30"/>
                                <p className="text-xl">{"Read my blog."}</p>
                            </div>
                            <div>
                                <Link color="foreground" className="text-xl" underline="always" href="https://medium.com/@juskevic">@juskevic</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}