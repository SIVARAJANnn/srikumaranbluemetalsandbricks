import { useState } from 'react';

export default function UsageSelector({ title = 'Which sand for your work?', tips }) {
    const [active, setActive] = useState(tips[0].key);
    const current = tips.find((t) => t.key === active);
    return (
        <section className="mt-10 glass rounded-[1.5rem] p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-[#111111]">{title}</h3>
            <div role="group" aria-label="Select your type of work" className="flex flex-wrap gap-3 mt-5">
                {tips.map((t) => (
                    <button
                        key={t.key}
                        type="button"
                        onClick={() => setActive(t.key)}
                        aria-pressed={active === t.key}
                        className={`label-caps text-[10px] px-5 py-2.5 rounded-full transition-all duration-300 ${active === t.key ? 'btn-gold' : 'glass text-[#2E2E2E] hover:text-[#C9A84C]'
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>
            <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-[#2E2E2E]" role="status">
                {current.text}
            </p>
        </section>
    );
}