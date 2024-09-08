import React from "react";
import {IconHeartFilled} from "@tabler/icons-react";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col justify-center items-center w-full p-6 text-sm md:text-lg">
                <p className="inline-flex gap-1 text-primary">
                    <span>Made with </span>
                    <IconHeartFilled stroke={1.5} size={20} className="my-auto animate-jump animate-infinite animate-duration-[1500ms]" />
                    <span> using Next.js, React & NextUI.</span>
                </p>
                <div>
                    <p className="ml-4 text-secondary">
                        © {new Date().getFullYear()} Max Juškevič. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;