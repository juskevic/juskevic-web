'use client'
import React from 'react';

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <>
            <div className="flex justify-start flex-col gap-8 md:gap-10 xl:gap-14">
                <div className="flex justify-end text-3xl md:text-5xl xl:text-6xl text-foreground italic">
                    <p>{"About Me"}</p>
                </div>
            </div>
        </>
    )
}

export default About;