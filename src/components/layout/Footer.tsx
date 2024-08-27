import React from "react";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";

const Footer = () => {
    return (
        <>
            <footer className="md:text-xl flex justify-between p-5 bg-black">
                <p className="text-secondary">&copy; {new Date().getFullYear()} Max Juškevič. All rights reserved.</p>
                <SocialsButtonGroup />
            </footer>
        </>
    )
}

export default Footer;