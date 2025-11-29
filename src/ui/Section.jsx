import React from "react";

import Typography from './Typography';

function Section({ nameSection, className = "", children }) {
    return (
        <div className={`border-1 border-bg-secondary rounded-xl w-full m-12 ml-0 shadow-sombra h-auto ${className}`}>
            <div className="grid text pt-6">
                <Typography as="span" variant="titulo" className="">
                    {nameSection}
                </Typography>
                {children}
            </div>

        </div>

    )
}

export default Section;