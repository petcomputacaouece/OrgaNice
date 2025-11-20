const textVariants = {
    default: "text-xl text-[var(--text)]",
    muted: "text-xl text-[var(--text-secondary)]",
    titulo: "text-2xl font-bold text-[var(--text)]"
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
