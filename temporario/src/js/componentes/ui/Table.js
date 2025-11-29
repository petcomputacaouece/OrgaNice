function TableUI({ title, columns = [], children, nameSection }) {
    return (
        <Section nameSection={nameSection} className="text-center px-12 py-8">
            <Text as="span" variant="default" className="text-left m-4 mt-10 text-text-secondary">
                {title}
            </Text>

            <table>
                <thead>
                    <tr className="border-b border-gray-300">
                        {columns.map((col, i) => (
                            <th key={i} className="px-10 py-3 text-left font-medium text-gray-700">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {children}
                </tbody>
            </table>
        </Section>
    );
}
