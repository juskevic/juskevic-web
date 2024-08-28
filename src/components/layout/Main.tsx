'use client'

import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";

import {Tab, Tabs} from "@nextui-org/react";

export default function Main() {

    return (
        <div className="overflow-x-auto border-1 border-primary rounded">
            <Tabs variant="underlined" radius="sm" size="lg" className="flex nowrap">
                <Tab key="landing" title="LANDING" className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
                    <Landing/>
                </Tab>
                <Tab key="about" title="ABOUT" className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-in-out">
                    <About/>
                </Tab>
                <Tab key="projects" title="PROJECTS" className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out">
                    <Projects/>
                </Tab>
                <Tab key="contact" title="CONTACT" className="animate-fade-right animate-once animate-duration-[2000ms] animate-delay-700 animate-ease-in-out">
                    <Contact/>
                </Tab>
            </Tabs>
        </div>
    )
}