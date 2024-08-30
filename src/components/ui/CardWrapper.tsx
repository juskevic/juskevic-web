import React from "react";

interface CardWrapperProps {
    children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
    return (
        <div className="xl:flex-grow-0 xl:flex-shrink-0 xl:w-[500px] mr-4">
            {children}
        </div>
    );
};

export default CardWrapper;