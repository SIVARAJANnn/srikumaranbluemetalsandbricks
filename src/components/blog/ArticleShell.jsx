import Reveal from '@/components/site/Reveal';

export default function ArticleShell({ id, number, title, intro, toc, children }) {
    return (
        <article id={id} className="scroll-mt-32 glass rounded-[2rem] p-6 md:p-12">
            <Reveal>
                <p className="label-caps text-[10px] text-[#C9A84C]">Article {number}</p>
                <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold text-[#111111] leading-tight">{title}</h2>
                {intro && <p className="mt-4 text-[15px] md:text-base text-[#2E2E2E] leading-relaxed max-w-3xl">{intro}</p>}
                <nav aria-label={`Contents: ${title}`} className="mt-7 bg-[#F1ECE1] border border-[#C9A84C]/25 rounded-2xl p-5">
                    <p className="label-caps text-[10px] text-[#2E2E2E] mb-2.5">In this article</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                        {toc.map((t) => (
                            <li key={t.href}>
                                <a href={t.href} className="text-sm text-[#2E2E2E] hover:text-[#C9A84C] transition-colors">{t.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Reveal>
            <div className="mt-6">{children}</div>
        </article>
    );
}