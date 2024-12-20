'use client'
import React from 'react';
import {Button, Link} from "@nextui-org/react";
import {    IconAt, IconBrandCodepen, IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin,} from "@tabler/icons-react";


export default function Contact() {
    return (
        <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pb-80">
            <div>
                <h1 className="text-primary !text-right italic text-3xl md:text-4xl">{"Let's get in touch"}</h1>
            </div>
            <div className="flex flex-row gap-3 flex-wrap md:max-w-[700px]">
                <Button radius="full" className="text-lg" as={Link} href="mailto:hello@juskevic.com" color="primary" variant="ghost" endContent={<IconAt stroke={1.5}/>}>
                    Send an Email
                </Button>
                <Button radius="full" className="text-lg" as={Link} href="https://www.linkedin.com/in/maxjuskevic/" color="primary" variant="ghost" endContent={<IconBrandLinkedin stroke={1.5}/>}>
                    Connect on LinkedIn
                </Button>
                <Button radius="full" className="text-lg" as={Link} href="https://github.com/juskevic" color="primary" variant="ghost" endContent={<IconBrandGithub stroke={1.5}/>}>
                    Check Out My Code on GitHub
                </Button>
                <Button radius="full" className="text-lg" as={Link} href="https://codepen.io/juskevic" color="primary" variant="ghost" endContent={<IconBrandCodepen stroke={1.5}/>}>
                    See My Work on CodePen
                </Button>
                <Button radius="full" className="text-lg" as={Link} href="https://leetcode.com/u/juskevic/" color="primary" variant="ghost" endContent={<IconBrandLeetcode stroke={1.5}/>}>
                    Follow My LeetCode Journey
                </Button>
            </div>
        </div>
    );
}