'use client'
import React from 'react';

interface AboutProps {
    id?: string;
}

const About: React.FC<AboutProps> = ({}) => {

    return (
        <>
            <div className="flex justify-start flex-col xl:gap-14">
                <div className="flex xl:text-6xl text-foreground italic">
                    <p>{"About Me"}</p>
                </div>
            </div>
        </>
    )
}

export default About;