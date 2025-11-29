import React from "react";

const textVariants = {
    default: "text-2xl text-text font-primary font-normal",
    muted: "text-xl text-text-secondary font-secondary font-normal",
    titulo: "text-3xl text-text font-primary font-normal"
};

function Typography({ as: Component = "span", children, variant = "default", className = "", ...props }) {

    return (
        <Component
            className={`${textVariants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}

export default Typography;