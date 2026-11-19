import ArticleShell from '@/components/blog/ArticleShell';
import Faq from '@/components/blog/Faq';
import ArticleCta from '@/components/blog/ArticleCta';
import { useSeo } from '@/lib/seo';

const TOC = [
    { href: '#a4-msand', label: 'What M-Sand is' },
    { href: '#a4-psand', label: 'What P-Sand is' },
    { href: '#a4-aggregates', label: 'Aggregates and the common sizes' },
    { href: '#a4-checks', label: 'The five checks before you order' },
    { href: '#a4-process', label: 'How manufactured materials are made' },
    { href: '#a4-faq', label: 'FAQs' },
];

export default function ArticleMSandAggregates() {
    useSeo(
        'M-Sand and Aggregates for Construction | Sri Kumaran Blue Metals & Bricks',
        'Plain-language guide to M-Sand, P-Sand and aggregates — 20 mm jally, 40 mm jally, 12 mm jally, 6 mm chips, quarry dust, 100 mm waste, wet mix, GSB and sludge — and the checks to make before ordering.',
    );

    return (
        <ArticleShell
            id="article-4"
            number="4"
            title="M-Sand and Aggregates for Construction"
            intro="Sand and aggregates are the skeleton of every build. This guide explains what each common material is for, why gradation and cleanliness matter so much, and how manufactured materials are produced."
            toc={TOC}
        >
            <h3 id="a4-msand" className="blog-h3 scroll-mt-32">What M-Sand is</h3>
            <p className="blog-p">M-Sand — manufactured sand — is produced by crushing rock into sand-sized particles and grading them for construction use. It is generally used in concrete work, where a consistent, clean, evenly graded sand helps the mix perform as designed. The engineer's approved mix design should always govern how it is used.</p>

            <h3 id="a4-psand" className="blog-h3 scroll-mt-32">What P-Sand is</h3>
            <p className="blog-p">P-Sand is a finer grade of manufactured sand intended for plastering and finishing work. Because its particles are finer, it produces smoother wall faces than concrete-grade sand. As with M-Sand, the specification from your mason or engineer — not habit — should decide which grade goes on which part of the build.</p>

            <h3 id="a4-aggregates" className="blog-h3 scroll-mt-32">Aggregates and the common sizes</h3>
            <p className="blog-p">Aggregates are the crushed stone fractions that form the bulk of concrete and base layers. The names used in the trade describe the nominal size of the stone. The materials commonly supplied include:</p>
            <ul className="blog-list">
                <li><strong>20 mm jally</strong> — a widely used nominal size in general concrete work.</li>
                <li><strong>40 mm jally</strong> — a larger nominal size, often used in mass concrete and base applications.</li>
                <li><strong>12 mm jally</strong> — a smaller nominal size used where finer aggregate content is required.</li>
                <li><strong>6 mm chips</strong> — a fine stone fraction used in topping and finishing-type work.</li>
                <li><strong>Quarry dust</strong> — a fine by-product of crushing, used in various base and filling applications.</li>
                <li><strong>100 mm waste</strong> — large rock pieces, used where bulk stone is suitable.</li>
                <li><strong>Wet mix, GSB and sludge</strong> — these three are mainly used for basement filling and road construction.</li>
            </ul>
            <p className="blog-p">These descriptions are general guidance only. Current availability, sizes, specifications and site suitability should be confirmed with the supplier and your project professional before ordering.</p>

            <h3 id="a4-checks" className="blog-h3 scroll-mt-32">The five checks before you order</h3>
            <ul className="blog-list">
                <li><strong>Gradation:</strong> the particle-size spread should match what your mix design or application needs — not all fines, not all coarse.</li>
                <li><strong>Cleanliness:</strong> excess dust, silt or clay weakens bonds; washed material is generally the safer choice for concrete and plaster.</li>
                <li><strong>Intended application:</strong> match the material to the job — concrete, plastering, filling or road layers each call for different grades.</li>
                <li><strong>Product documentation:</strong> for structural work, ask the supplier for any grading or quality documentation they can provide, and keep it with your site records.</li>
                <li><strong>Engineer-approved mix design:</strong> for anything structural, the mix design should be approved by your engineer before the first load arrives.</li>
            </ul>

            <h3 id="a4-process" className="blog-h3 scroll-mt-32">How manufactured materials are made</h3>
            <p className="blog-p">Manufactured sand is produced by crushing and grading rock — large stone is fed into crushers, the output is screened into size fractions, and washing removes fines. That is the general principle; in practice, crushing processes and material properties vary between plants and rock types, which is exactly why the checks above matter more than the label. Two plants using the same names can produce noticeably different material.</p>

            <Faq
                items={[
                    { q: 'What is the difference between 20 mm and 40 mm jally?', a: 'The number refers to the nominal size of the stone fraction. 20 mm is a common general-concrete size, while 40 mm is a larger fraction often used in mass concrete and base applications. Your mix design determines which sizes to use.' },
                    { q: 'What are wet mix, GSB and sludge used for?', a: 'As supplied, these three materials are mainly used for basement filling and road construction. Confirm suitability for your specific site with your project professional.' },
                    { q: 'Can quarry dust replace sand?', a: 'Quarry dust is a fine crushing by-product used in various base and filling applications. Whether it can substitute sand in a given use is a technical question for your engineer — do not substitute without approval.' },
                    { q: 'Where can I check availability of these materials?', a: 'Contact Sri Kumaran Blue Metals & Bricks to confirm current availability, sizes and delivery for your location before ordering.' },
                ]}
            />

            <ArticleCta message="Need jally, chips or filling materials for your site? Call Sri Kumaran Blue Metals & Bricks to confirm sizes and availability." />
        </ArticleShell>
    );
}