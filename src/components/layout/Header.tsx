'use client'
import React from "react";

export default function Header( ) {

    return (
        <header className="md:text-xl flex justify-between p-5 bg-black">
            <p className="text-primary">MAX JUŠKEVIČ</p>
            <div className="hidden text-white xl:flex flex-row gap-1">
                <p>...</p>
            </div>
        </header>
    );
}
