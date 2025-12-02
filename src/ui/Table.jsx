import React from "react";
import Section from './Section';
import Typography from './Typography';

function Table({ title, columns = [], children, nameSection, className = "" }) {
    return (
        <Section nameSection={nameSection} className={`text-center px-12 py-8 min-w-96 ${className}`}>
            <Typography as="span" variant="default" className="text-left m-4 mt-10 text-text-secondary">
                {title}
            </Typography>

            <table className="whitespace-nowrap">
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

export default Table;
