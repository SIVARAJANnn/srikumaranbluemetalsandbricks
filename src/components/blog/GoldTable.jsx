export default function GoldTable({ headers, rows, caption }) {
    return (
        <div className="overflow-x-auto mt-8 rounded-2xl border border-[#C9A84C]/25 bg-white/40">
            <table className="w-full text-sm min-w-[560px]">
                {caption && <caption className="sr-only">{caption}</caption>}
                <thead>
                    <tr className="bg-[#111111] text-[#E8D6B3]">
                        {headers.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3.5 text-left label-caps text-[10px] whitespace-nowrap">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={`border-b border-[#C9A84C]/20 last:border-b-0 ${i % 2 ? 'bg-white/50' : 'bg-white/20'}`}>
                            {row.map((cell, ci) =>
                                ci === 0 ? (
                                    <th key={ci} scope="row" className="px-4 py-3.5 text-left font-semibold text-[#111111] whitespace-nowrap">{cell}</th>
                                ) : (
                                    <td key={ci} className="px-4 py-3.5 text-[#2E2E2E] leading-relaxed">{cell}</td>
                                ),
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}