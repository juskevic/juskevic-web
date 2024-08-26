import React from "react";
import {IconHeartFilled} from "@tabler/icons-react";

const Footer = () => {
    return (
        <>
            <footer className="md:text-xl flex justify-between p-5 bg-black">
                <p className="text-secondary">&copy; {new Date().getFullYear()} Max Juškevič. All rights reserved.</p>
                <div className="hidden text-secondary xl:flex flex-row gap-1">
                    <p>Build on top of Next.js, using React, Tailwind CSS & NextUI</p>
                    <IconHeartFilled stroke={1} className="text-secondary" />
                </div>
            </footer>
        </>
    )
}

export default Footer;