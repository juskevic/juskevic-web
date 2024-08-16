import React from "react";
import {Divider} from "@nextui-org/react";

const Footer = () => {
    return (
        <>
            <Divider />
            <footer className="p-5 text-center text-black">
                <p>&copy; {new Date().getFullYear()} Max Juškevič. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer;