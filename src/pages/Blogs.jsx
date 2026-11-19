import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import { useSeo } from '@/lib/seo';
import ArticleFlyAsh from '@/components/blog/ArticleFlyAsh';
import ArticleMSand from '@/components/blog/ArticleMSand';
import ArticleRiverVsM from '@/components/blog/ArticleRiverVsM';
import ArticleMSandAggregates from '@/components/blog/ArticleMSandAggregates';
import ArticleThuraiyur from '@/components/blog/ArticleThuraiyur';

const ARTICLES = [
    { href: '#article-1', title: 'Sri Kumaran Fly Ash Bricks: Advantages and How They Compare with Red Clay Bricks', blurb: 'What fly ash bricks are, their advantages and limitations, and a fair comparison with red clay bricks — with Sri Kumaran\u2019s supplied product facts.' },
    { href: '#article-2', title: 'Advantages and Limitations of M-Sand for Construction', blurb: 'Who M-Sand suits, its benefits and cautions, what to ask a supplier — plus an M-Sand vs river sand comparison and a knowledge check.' },
    { href: '#article-3', title: 'River Sand and M-Sand Compared', blurb: 'A balanced, side-by-side comparison of river sand and M-Sand, with guidance for concrete, plastering and filling work.' },
    { href: '#article-4', title: 'M-Sand and Aggregates for Construction', blurb: 'M-Sand, P-Sand and every common aggregate size explained — and the five checks to make before you order.' },
    { href: '#article-5', title: 'M-Sand and P-Sand in Thuraiyur', blurb: 'The general difference between M-Sand and P-Sand, and delivery availability within approximately 50 km of Thuraiyur.' },
];

export default function Blogs() {
    useSeo(
        'Blogs | Construction Material Guides — M-Sand, P-Sand, Aggregates & Fly Ash Bricks',
        'Practical guides from Sri Kumaran Blue Metals & Bricks, Thuraiyur: M-Sand advantages, river sand comparisons, aggregates and jally sizes, and fly ash bricks vs red clay bricks.',
    );

    return (
        <div>
            <PageHero
                eyebrow="Knowledge & Guides"
                title="Blogs"
                description="Plain-language guides on the materials we supply — written to help you choose well, with your project professional as the final word."
                center
            />

            {/* Article index */}
            <section className="py-14 md:py-20 px-4 md:px-6" aria-labelledby="index-heading">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h2 id="index-heading" className="flex items-center gap-3 font-heading text-2xl md:text-3xl font-bold text-[#111111] mb-8">
                            <BookOpen size={22} className="text-[#C9A84C]" aria-hidden="true" /> Article Index
                        </h2>
                    </Reveal>
                    <div className="space-y-4">
                        {ARTICLES.map((article, i) => (
                            <Reveal key={article.href} delay={i * 0.06}>
                                <a
                                    href={article.href}
                                    className="group block glass rounded-2xl p-6 hover:shadow-[0_12px_32px_rgba(201,168,76,0.22)] hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <p className="label-caps text-[10px] text-[#C9A84C] mb-2">Article {i + 1}</p>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#111111] leading-snug">{article.title}</h3>
                                    <p className="mt-2.5 text-sm leading-relaxed text-[#2E2E2E]">{article.blurb}</p>
                                    <span className="mt-3.5 inline-flex items-center gap-1.5 label-caps text-[10px] text-[#2E2E2E] group-hover:text-[#C9A84C] transition-colors">
                                        Read article <ArrowRight size={12} aria-hidden="true" />
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="pb-20 md:pb-28 px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-14 md:space-y-20">
                    <ArticleFlyAsh />
                    <ArticleMSand />
                    <ArticleRiverVsM />
                    <ArticleMSandAggregates />
                    <ArticleThuraiyur />
                    <Reveal className="text-center">
                        <a href="#index-heading" className="btn-glass">
                            <ArrowRight size={14} className="rotate-180" aria-hidden="true" /> Back to Article Index
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}