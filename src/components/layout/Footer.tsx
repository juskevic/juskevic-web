import React from "react";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";

const Footer = () => {
    return (
        <>
            <footer className="
            text-xl flex flex-col md:flex-row md:justify-between p-5 bg-black
            animate-fade animate-once animate-duration-[3000ms] animate-ease-in-out"
            >
                <div className="text-secondary xl:inline-flex xl:gap-2">
                    <p>&copy; {new Date().getFullYear()} Max Juškevič.</p>
                    <p>{" All rights reserved."}</p>
                </div>
                <div className="hidden md:flex">
                    <SocialsButtonGroup />
                </div>
            </footer>
        </>
    )
}

export default Footer;