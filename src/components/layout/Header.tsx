'use strict'
import React from "react";
import {IconPointFilled} from "@tabler/icons-react";

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
            <p className="text-primary">MAX JUŠKEVIČ</p>
            <div className="flex flex-row gap-1">
                <IconPointFilled className="animate-ping animate-infinite animate-duration-[1500ms] animate-ease-linear text-secondary my-auto"/>
                <p className="text-primary">
                    <span>{"PRAGUE, CZECHIA "}</span><span>{currentDateTime}</span>
                </p>
            </div>
        </header>
    );
}