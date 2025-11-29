import Rect from "react";

function TableUI({ title, columns = [], children, nameSection }) {
    return (
        <Section nameSection={nameSection} className="text-center px-12 py-8">
            <Typography as="span" variant="default" className="text-left m-4 mt-10 text-text-secondary">
                {title}
            </Typography>

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

export default TableUI;
