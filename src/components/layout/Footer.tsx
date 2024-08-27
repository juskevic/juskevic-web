import React from "react";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";

const Footer = () => {
    return (
        <>
            <footer className="md:text-xl flex justify-between p-5 bg-black animate-fade animate-once animate-duration-[3000ms] animate-ease-in-out">
                <p className="text-secondary">&copy; {new Date().getFullYear()} Max Juškevič. All rights reserved.</p>
                <SocialsButtonGroup />
            </footer>
        </>
    )
}

export default Footer;