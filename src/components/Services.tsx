'use client'
import React from 'react';
import { Card, CardHeader, Button } from "@nextui-org/react";
import {IconAlignRight} from "@tabler/icons-react";

export default function Services() {
    return (
        <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pb-80">
            <div>
                <h1 className="text-primary !text-right italic text-3xl md:text-4xl">{"Services"}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 xl:gap-14">
                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-secondary mb-auto">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Portfolio Websites"}</p>
                                <p className="text-secondary">{"Showcase your work with a stunning, modern portfolio website. Perfect for artists, designers, developers, or anyone wanting to highlight their projects."}</p>
                            </div>
                        </div>
                        <Button color="primary" className="mt-4 w-full">
                            I want a Portfolio Website <IconAlignRight size="20"/>
                        </Button>
                    </CardHeader>
                </Card>

                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-secondary mb-auto">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Landing Websites"}</p>
                                <p className="text-secondary">{"Create an engaging landing page to capture leads and promote your product or service. Ideal for businesses launching new products or campaigns."}</p>
                            </div>
                        </div>
                        <Button variant="solid" className="mt-4 w-full">Learn More</Button>
                    </CardHeader>
                </Card>

                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-secondary mb-auto">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"E-commerce Websites"}</p>
                                <p className="text-secondary">{"Build an online store with a smooth user experience, from product listings to checkout. Designed to convert visitors into customers."}</p>
                            </div>
                        </div>
                        <Button variant="solid" className="mt-4 w-full">Learn More</Button>
                    </CardHeader>
                </Card>

                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-secondary mb-auto">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Fullstack Web Applications"}</p>
                                <p className="text-secondary">{"Develop complex web applications with both front-end and back-end features, tailored to your business needs."}</p>
                            </div>
                        </div>
                        <Button variant="solid" className="mt-4 w-full">Learn More</Button>
                    </CardHeader>
                </Card>

                <Card className="bg-background shadow border-1 border-b-3 border-r-3 border-secondary mb-auto">
                    <CardHeader className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <div>
                                <p className="text-primary text-2xl pt-1">{"Mobile Applications"}</p>
                                <p className="text-secondary">{"Build cross-platform mobile apps for iOS and Android, offering a seamless user experience across devices."}</p>
                            </div>
                        </div>
                        <Button variant="solid" className="mt-4 w-full">Learn More</Button>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
