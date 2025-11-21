function Section({ nameSection }) {
    return (
        <div className="border-1 border-bg-secondary rounded-xl w-[150%] h-64 m-12 ml-32 shadow-sombra">
            <div className="text-center pt-6">
                <Text as="span" variant="titulo">
                    {nameSection}
                </Text>
            </div>

        </div>

    )
}