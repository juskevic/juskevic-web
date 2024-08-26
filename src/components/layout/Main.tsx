'use client'

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";

import {Tab, Tabs} from "@nextui-org/react";

export default function Main() {

    return (
        <Tabs variant="underlined" radius="sm" size="lg">
            <Tab key="landing" title="LANDING">
                <Landing/>
            </Tab>
            <Tab key="about" title="ABOUT">
                <About/>
            </Tab>
            <Tab key="projects" title="PROJECTS">
                <Projects />
            </Tab>
            <Tab key="contact" title="CONTACT">
                <Contact/>
            </Tab>
            <Tab isDisabled key="blog" title="BLOG"></Tab>
        </Tabs>
    )
}