import React from "react";
import { IconHeartFilled } from "@tabler/icons-react";

// Footer component that renders the footer section of the website
const Footer = () => {
    return (
        <footer>
            {/* Main container for the footer with flexbox for centering content */}
            <div className="flex flex-col justify-center items-center w-full p-6 text-sm md:text-lg">
                {/* Text with an icon to indicate "Made with love" */}
                <p className="inline-flex gap-1 text-primary">
                    <span>Made with </span>
                    {/* Heart icon with animation to add visual appeal */}
                    <IconHeartFilled
                        stroke={1.5}
                        size={20}
                        className="my-auto animate-jump animate-infinite animate-duration-[1500ms]"
                    />
                    <span> using Next.js, React & NextUI.</span>
                </p>
                <div>
                    {/* Copyright information, dynamically setting the current year */}
                    <p className="ml-4 text-secondary">
                        © {new Date().getFullYear()} Max Juškevič. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
