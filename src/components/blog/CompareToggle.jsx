import { useState } from 'react';

export default function CompareToggle({ leftTitle, left, rightTitle, right }) {
    const [side, setSide] = useState('left');
    return (
        <section className="mt-10">
            <div role="group" aria-label="Switch comparison view" className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => setSide('left')}
                    aria-pressed={side === 'left'}
                    className={`label-caps text-[10px] px-5 py-2.5 rounded-full transition-all duration-300 ${side === 'left' ? 'btn-gold' : 'glass text-[#2E2E2E] hover:text-[#C9A84C]'
                        }`}
                >
                    {leftTitle}
                </button>
                <button
                    type="button"
                    onClick={() => setSide('right')}
                    aria-pressed={side === 'right'}
                    className={`label-caps text-[10px] px-5 py-2.5 rounded-full transition-all duration-300 ${side === 'right' ? 'btn-gold' : 'glass text-[#2E2E2E] hover:text-[#C9A84C]'
                        }`}
                >
                    {rightTitle}
                </button>
            </div>
            <div className="mt-5 glass rounded-[1.5rem] p-6 md:p-8" role="status">
                <h4 className="font-heading text-lg font-bold text-[#111111]">{side === 'left' ? leftTitle : rightTitle}</h4>
                <div className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#2E2E2E] space-y-3">
                    {(side === 'left' ? left : right).map((p, i) => <p key={i}>{p}</p>)}
                </div>
            </div>
        </section>
    );
}