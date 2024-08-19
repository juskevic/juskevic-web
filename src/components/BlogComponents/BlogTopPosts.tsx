'use client'

import {Card, CardBody, CardFooter, CardHeader, Image, ScrollShadow} from "@nextui-org/react";

//TODO: change fonts later ;)

export default function BlogTopPosts() {
    return (
        <div className="flex justify-start">
            <div className="flex flex-col gap-5">
                <div className="flex flex-row text-3xl md:text-4xl xl:text-5xl">
                    <h2>Top rated posts</h2>
                </div>
               <div className="flex flex-row justify-evenly">
                   <Card></Card>
               </div>
            </div>
        </div>
    )
}