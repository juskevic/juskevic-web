'use client'
import React from 'react';
import { Card, CardHeader, Button } from "@nextui-org/react";
import {IconArrowRight, IconPointFilled} from "@tabler/icons-react";

export default function Services() {
    return (
        <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pb-80">
            <div className="relative">
                <h1 className="text-primary !text-right italic text-3xl md:text-4xl">{"Services"}</h1>
                <div className="flex flex-row mt-4 justify-end">
                    <p className="text-primary !text-right italic text-lg my-auto">
                        currently unavailable
                    </p>
                    <IconPointFilled size="40" className="text-warning animate-pulse animate-duration-[1500ms] !text-right"/>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 xl:gap-14">
                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-primary mb-auto relative">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <p className="text-primary text-3xl">{"Portfolio Websites"}</p>
                            <p className="text-primary text-lg">{"Elevate your online presence with a modern, visually stunning portfolio website. Tailored for artists, designers, developers, and other creatives looking to make a lasting impression. My portfolio websites are built to showcase your best work while offering a seamless user experience."}</p>
                            <p className="text-secondary text-lg mt-2 italic">{"from 10,000 CZK ($450 / €410)"}</p>
                        </div>
                        <Button isDisabled color="primary" className="mt-4 w-full" endContent={<IconArrowRight size="20" />}>I want a Portfolio Website</Button>
                    </CardHeader>
                </Card>

                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-primary mb-auto">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <p className="text-primary text-3xl">{"Landing Pages"}</p>
                            <p className="text-primary text-lg">{"Drive conversions with an engaging landing page tailored to your product or service. Perfect for businesses looking to capture leads and promote new campaigns, my landing pages are optimized for maximum impact and user engagement."}</p>
                            <p className="text-secondary text-lg mt-2 italic">{"from 8,000 CZK ($360 / €330)"}</p>
                        </div>
                        <Button isDisabled color="primary" className="mt-4 w-full" endContent={<IconArrowRight size="20" />}>I want a Landing Page</Button>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
