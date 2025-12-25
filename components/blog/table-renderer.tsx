import React from 'react';

export function TableRenderer({ rows }: { rows: string[] }) {
    if (rows.length < 2) return null; // Need at least header and separator

    const headerRow = rows[0].replace(/^\||\|$/g, '').split('|').map(c => c.trim());
    // rows[1] is the separator |---|---| which we skip or use for alignment
    const bodyRows = rows.slice(2).map(row => row.replace(/^\||\|$/g, '').split('|').map(c => c.trim()));

    return (
        <div className="overflow-x-auto my-4 md:my-8 rounded-lg md:rounded-xl border border-[#E0E0E0] shadow-sm -mx-1 md:mx-0" style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full text-right border-collapse bg-white min-w-[400px]">
                <thead>
                    <tr className="bg-[#4B0082] text-white">
                        {headerRow.map((cell, i) => (
                            <th key={i} className="p-2.5 md:p-4 font-bold font-tajawal text-xs md:text-sm border-b border-[#3498DB]/30 whitespace-nowrap">
                                {cell}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F0F0]">
                    {bodyRows.map((row, i) => (
                        <tr key={i} className="hover:bg-[#F9F9F9] transition-colors odd:bg-white even:bg-[#F8F9FA]">
                            {row.map((cell, j) => (
                                <td key={j} className="p-2.5 md:p-4 text-[#333333] font-medium font-tajawal text-xs md:text-sm">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
