import React from "react";
import Section from './Section';

function PopUp({ nameSection, children, onPopUpClick, isOpen, className = "" }) {
    return (
        <div
            className={`
                fixed inset-0 flex items-center justify-center bg-black/50
                transition-all duration-200
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
        >
            <Section
                nameSection={nameSection}
                className={`
                    bg-white p-8 relative text-center rounded-xl
                    transition-all duration-200
                    ${isOpen ? "scale-100" : "scale-95"}
                    ${className}
                `}
            >
                <button onClick={onPopUpClick} className="absolute top-2 right-2">✕</button>

                <div>
                    {children}
                </div>
            </Section>
        </div>
    );
}

export default PopUp;
