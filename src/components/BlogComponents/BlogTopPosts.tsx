'use client'

import {IconFlame} from "@tabler/icons-react";

//TODO: change fonts later ;)

export default function BlogTopPosts() {
    return (
        <div className="flex justify-start">
            <div className="flex flex-col">
                <div className="flex flex-row text-5xl">
                    <h2>Top rated posts</h2>
                    <IconFlame stroke={1.5} className="size-12"/>
                </div>
                <div></div>
            </div>
        </div>
    )
}