import React from "react";
import {IconHeartFilled} from "@tabler/icons-react";

const Footer = () => {
    return (
        <>
            <footer className="md:text-medium flex justify-evenly p-5 bg-black">
                <p className="text-white">&copy; {new Date().getFullYear()} Max Juškevič. All rights reserved.</p>
                <div className="hidden text-white xl:flex flex-row gap-1">
                    <p>Build on top of Next.js, using React, Tailwind CSS & NextUI</p>
                    <IconHeartFilled stroke={1}/>
                </div>
            </footer>
        </>
    )
}

export default Footer;