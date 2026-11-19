import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export default function Quiz({ title = 'Knowledge Check', questions }) {
    const [answers, setAnswers] = useState({});
    const pick = (qi, oi) => setAnswers((a) => ({ ...a, [qi]: oi }));
    const allAnswered = Object.keys(answers).length === questions.length;

    const buttonClass = (qi, oi) => {
        const chosen = answers[qi];
        if (chosen === undefined) return 'glass text-[#2E2E2E] hover:text-[#111111] hover:shadow-[0_4px_14px_rgba(201,168,76,0.2)]';
        if (oi === questions[qi].answer) return 'bg-[#E8D6B3]/70 border border-[#C9A84C] text-[#111111] font-medium';
        if (oi === chosen) return 'bg-[#111111]/10 border border-[#111111] text-[#111111]';
        return 'glass text-[#2E2E2E] opacity-50';
    };

    return (
        <section className="mt-10 bg-[#F1ECE1] border border-[#C9A84C]/25 rounded-[1.5rem] p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-[#111111]">{title}</h3>
            {questions.map((q, qi) => {
                const chosen = answers[qi];
                return (
                    <fieldset key={qi} className="mt-7">
                        <legend className="font-medium text-[15px] text-[#111111] mb-3">{qi + 1}. {q.q}</legend>
                        <div className="flex flex-col gap-2">
                            {q.options.map((opt, oi) => (
                                <button
                                    key={oi}
                                    type="button"
                                    disabled={chosen !== undefined}
                                    onClick={() => pick(qi, oi)}
                                    aria-pressed={chosen === oi}
                                    className={`text-left text-sm rounded-xl border border-transparent px-4 py-2.5 transition-all duration-300 disabled:cursor-default ${buttonClass(qi, oi)}`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                        {chosen !== undefined && (
                            <p className="mt-3 flex items-start gap-2 text-sm text-[#2E2E2E]" role="status">
                                {chosen === q.answer
                                    ? <CheckCircle2 size={16} className="text-[#A9863A] mt-0.5 shrink-0" aria-hidden="true" />
                                    : <XCircle size={16} className="text-[#111111] mt-0.5 shrink-0" aria-hidden="true" />}
                                <span>{chosen === q.answer ? 'Correct. ' : 'Not quite. '}{q.explain}</span>
                            </p>
                        )}
                    </fieldset>
                );
            })}
            {allAnswered && (
                <button type="button" onClick={() => setAnswers({})} className="btn-glass mt-7">
                    <RotateCcw size={13} aria-hidden="true" /> Try Again
                </button>
            )}
        </section>
    );
}