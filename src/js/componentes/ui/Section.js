function Section({ nameSection, className = "", children }) {
    return (
        <div className={`border-1 border-bg-secondary rounded-xl w-full m-12 ml-32 shadow-sombra h-64 ${className}`}>
            <div className="text pt-6">
                <Text as="span" variant="titulo" className="">
                    {nameSection}
                </Text>
                {children}
            </div>

        </div>

    )
}