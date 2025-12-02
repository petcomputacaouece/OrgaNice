import React from "react";

import Typography from './Typography';


function Section({ nameSection, className = "", children }) {
    return (
        <div className={`border-1 border-bg-secondary rounded-xl m-12 ml-0 shadow-sombra h-auto inline-block ${className}`}>
            <div className="flex flex-col text pt-6">
                <Typography as="span" variant="titulo" className="">
                    {nameSection}
                </Typography>
                {children}
            </div>

        </div>

    )
}

export default Section;