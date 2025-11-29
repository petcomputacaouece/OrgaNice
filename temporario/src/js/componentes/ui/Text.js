const textVariants = {
    default: "text-2xl text-text font-primary font-normal",
    muted: "text-xl text-text-secondary font-secondary font-normal",
    titulo: "text-3xl text-text font-primary font-normal"
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
