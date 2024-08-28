'use strict'
import React from "react";
import {IconFileDownload, IconPointFilled} from "@tabler/icons-react";
import {Link} from "@nextui-org/react";

export default function Header() {

    const calculatePragueDateTime = () => {
        const userDate = new Date();
        const userTimezoneOffset = userDate.getTimezoneOffset() * 60 * 1000;
        const pragueOffsetInMilliseconds = 3600 * 1000;
        let pragueTime = new Date(userDate.getTime() + userTimezoneOffset + pragueOffsetInMilliseconds);
        return (`${pragueTime.getFullYear()}-${pragueTime.getMonth()+1}-${pragueTime.getDate()} ${pragueTime.getHours()}:${pragueTime.getMinutes()}`);
    }

    const currentDateTime = calculatePragueDateTime();

    return (
        <header className="md:text-xl flex justify-between p-5 bg-black animate-fade animate-once animate-duration-[3000ms] animate-ease-in-out">
            <div className="flex flex-col md:flex-row md:gap-20">
                <p className="text-primary text-xl">MAX JUŠKEVIČ</p>
                <div className="flex flex-row gap-1">
                    <Link underline="hover" href="/" className="text-secondary text-xl">DOWNLOAD CV</Link>
                    <IconFileDownload className="text-secondary" stroke={1.5}/>
                </div>
            </div>
            <div className="hidden xl:flex flex-row gap-1">
                <IconPointFilled
                    className="animate-ping animate-infinite animate-duration-[1500ms] animate-ease-linear text-green-500 my-auto"/>
                <p className="text-primary">
                    <span>{"PRAGUE, CZECHIA "}</span><span>{currentDateTime}</span>
                </p>
            </div>
        </header>
    );
}