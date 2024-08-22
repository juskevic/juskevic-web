'use client'

import {Card, CardBody, Divider} from "@nextui-org/react";

export default function BlogPostList() {
    return (
        <div className="flex flex-col justify-center gap-5">
            <div>
                <h1 className="text-xl md:text-2xl xl:text-3xl">
                    {"All posts"}
                </h1>
            </div>
            <div className="flex flex-col gap-5 w-full">
                <Card isHoverable isPressable className="p-3 border-1 border-gray-300 shadow-none">
                    <CardBody className="flex flex-row justify-between text-lg md:text-xl xl:text-2xl">
                        <div>
                            <h3>
                                {"Blog Post Title"}
                            </h3>
                        </div>
                        <Divider orientation="horizontal" className="hidden md:flex md:w-1/3 xl:w-2/3 my-auto"/>
                        <div>
                            <p className="text-gray-500">
                                {"1.1.2024"}
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card isHoverable isPressable className="p-3 border-1 border-gray-300 shadow-none">
                    <CardBody className="flex flex-row justify-between text-lg md:text-xl xl:text-2xl">
                        <div>
                            <h3>
                                {"Blog Post Title"}
                            </h3>
                        </div>
                        <Divider orientation="horizontal" className="hidden md:flex md:w-1/3 xl:w-2/3 my-auto"/>
                        <div>
                            <p className="text-gray-500">
                                {"1.1.2024"}
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card isHoverable isPressable className="p-3 border-1 border-gray-300 shadow-none">
                    <CardBody className="flex flex-row justify-between text-lg md:text-xl xl:text-2xl">
                        <div>
                            <h3>
                                {"Blog Post Title"}
                            </h3>
                        </div>
                        <Divider orientation="horizontal" className="hidden md:flex md:w-1/3 xl:w-2/3 my-auto"/>
                        <div>
                            <p className="text-gray-500">
                                {"1.1.2024"}
                            </p>
                        </div>
                    </CardBody>
                </Card>
                <Card isHoverable isPressable className="p-3 border-1 border-gray-300 shadow-none">
                    <CardBody className="flex flex-row justify-between text-lg md:text-xl xl:text-2xl">
                        <div>
                            <h3>
                                {"Blog Post Title"}
                            </h3>
                        </div>
                        <Divider orientation="horizontal" className="hidden md:flex md:w-1/3 xl:w-2/3 my-auto"/>
                        <div>
                            <p className="text-gray-500">
                                {"1.1.2024"}
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}