const textVariants = {
    default: "text-xl text-text font-primary font-normal",
    muted: "text-lg text-text-secondary font-secondary font-normal",
    titulo: "text-2xl text-text font-primary font-normal"
};

function Text({ as = "span", children, variant = "default", className = "", ...props }) {
    return React.createElement(
        as,
        {
            className: `${textVariants[variant]} ${className}`,
            ...props
        },
        children
    );
}
