import React from "react";

function PopUpUI({ nameSection, children, onPopUpClick, isOpen }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <Section nameSection={nameSection} className="bg-white w-[40%] p-8 relative text-center">

                <button onClick={onPopUpClick} className="absolute top-2 right-2"> ✕ </button>

                <div>
                    {children}
                </div>
            </Section>
        </div>
    )
}

export default PopUpUI;
