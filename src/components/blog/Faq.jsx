import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Faq({ items, title = 'Frequently Asked Questions' }) {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <section className="mt-10">
            <h3 className="blog-h3 mb-4">{title}</h3>
            <div className="space-y-3">
                {items.map((item, i) => (
                    <div key={i} className="glass rounded-2xl overflow-hidden">
                        <button
                            type="button"
                            aria-expanded={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                        >
                            <span className="font-medium text-[15px] text-[#111111]">{item.q}</span>
                            <ChevronDown
                                size={16}
                                className={`shrink-0 text-[#C9A84C] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                            />
                        </button>
                        {openIndex === i && (
                            <div className="px-5 pb-5 text-sm leading-relaxed text-[#2E2E2E]">{item.a}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}