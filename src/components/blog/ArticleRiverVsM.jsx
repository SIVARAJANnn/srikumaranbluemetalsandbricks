import ArticleShell from '@/components/blog/ArticleShell';
import GoldTable from '@/components/blog/GoldTable';
import Faq from '@/components/blog/Faq';
import Quiz from '@/components/blog/Quiz';
import UsageSelector from '@/components/blog/UsageSelector';
import CompareToggle from '@/components/blog/CompareToggle';
import ArticleCta from '@/components/blog/ArticleCta';
import { useSeo } from '@/lib/seo';

const TOC = [
    { href: '#a3-quick', label: 'Quick answer' },
    { href: '#a3-table', label: 'Side-by-side comparison' },
    { href: '#a3-river', label: 'About river sand' },
    { href: '#a3-msand', label: 'About M-Sand' },
    { href: '#a3-psand', label: 'About P-Sand' },
    { href: '#a3-applications', label: 'Guidance for common applications' },
    { href: '#a3-conclusion', label: 'A balanced conclusion' },
    { href: '#a3-quiz', label: 'Knowledge check' },
    { href: '#a3-faq', label: 'FAQs' },
];

export default function ArticleRiverVsM() {
    useSeo(
        'River Sand and M-Sand Compared | Sri Kumaran Blue Metals & Bricks, Thuraiyur',
        'A balanced comparison of river sand and M-Sand for homeowners, builders and contractors — source, grading, consistency and suitability, with practical guidance for concrete and plastering.',
    );

    return (
        <ArticleShell
            id="article-3"
            number="3"
            title="River Sand and M-Sand Compared"
            intro="Both river sand and manufactured sand build good structures when they are clean and well graded. This article compares the two fairly — without cost discussion — and closes with practical guidance for common construction applications."
            toc={TOC}
        >
            <h3 id="a3-quick" className="blog-h3 scroll-mt-32">Quick answer</h3>
            <p className="blog-p">River sand is natural sand gathered from riverbeds — naturally rounded grains, but grading and cleanliness vary by source and batch. M-Sand is made by crushing and grading rock — consistent and angular, but quality depends on the producer's washing and screening. For structural concrete, your structural engineer's specification and mix design should decide between them; for plastering, a finer plastering-grade sand (P-Sand) is typically specified.</p>

            <h3 id="a3-table" className="blog-h3 scroll-mt-32">Side-by-side comparison</h3>
            <GoldTable
                caption="Comparison of river sand and M-Sand (no cost information)"
                headers={['Aspect', 'River Sand', 'M-Sand']}
                rows={[
                    ['Source', 'Naturally deposited sand collected from riverbeds', 'Produced by crushing rock at a quarry or crushing plant'],
                    ['Particle shape', 'Naturally rounded, smooth feel', 'Angular, interlocking grains'],
                    ['Grading consistency', 'Varies by source and batch; each load needs checking', 'Controlled by crushing and screening; typically steadier between batches'],
                    ['Cleanliness', 'Depends on source; silt and clay can vary widely', 'Controlled by washing at the plant when properly done'],
                    ['Suitability', 'Can suit plastering and some concrete work when clean and well graded', 'Concrete-grade M-Sand for structural mixes; finer P-Sand for plastering'],
                ]}
            />

            <h3 id="a3-river" className="blog-h3 scroll-mt-32">About river sand</h3>
            <p className="blog-p">River sand's naturally rounded grains give mortar a smooth, workable feel that many masons have long preferred, especially for plaster. Its challenges sit on the supply side: grading and silt content vary by source and season, and availability can be affected by monsoon conditions and regulation. Every load should be checked — even a well-known source varies from batch to batch.</p>

            <h3 id="a3-msand" className="blog-h3 scroll-mt-32">About M-Sand</h3>
            <p className="blog-p">M-Sand is produced by crushing rock to sand-sized particles and grading the output. The angular, interlocking grains are favoured by many engineers in concrete, and washing at the plant controls dust when it is done properly. Its caution is the mirror image of river sand's: because quality depends on the producer, the name of the product matters less than its actual grading, cleanliness and documentation.</p>

            <h3 id="a3-psand" className="blog-h3 scroll-mt-32">About P-Sand</h3>
            <p className="blog-p">P-Sand is a finer grade of manufactured sand intended for plastering and finishing. Where a fine, smooth wall face is the goal, plastering-grade material gives a better result than concrete-grade sand. As with all grades, the engineer's or mason's specification — and the actual product you receive — determine suitability.</p>

            <UsageSelector
                title="Guidance selector"
                tips={[
                    { key: 'concrete', label: 'Concrete', text: 'For structural concrete, follow your engineer\u2019s mix design. Whether it calls for M-Sand or another material, verify grading and cleanliness before batching begins.' },
                    { key: 'plaster', label: 'Plastering', text: 'For plastering, finer plastering-grade sand (P-Sand) is typically specified for a smooth finish. Confirm the grade with your mason before ordering.' },
                    { key: 'general', label: 'General', text: 'For general enquiries, describe your project when you contact a supplier and let your project professional confirm the material selection.' },
                ]}
            />

            <CompareToggle
                leftTitle="River Sand"
                rightTitle="M-Sand"
                left={[
                    'Natural, rounded grains with a smooth, workable feel in mortar.',
                    'Grading and silt content vary by source — every load should be inspected.',
                    'Availability can be limited by season and regulation.',
                    'Can perform well in plastering and concrete when clean and well graded.',
                ]}
                right={[
                    'Manufactured by crushing and grading rock — consistency is engineered, not natural.',
                    'Angular grains interlock well in concrete mixes.',
                    'Plant washing controls dust when done properly.',
                    'Steady availability independent of river conditions; quality depends on the producer.',
                ]}
            />

            <h3 id="a3-applications" className="blog-h3 scroll-mt-32">Practical guidance for common applications</h3>
            <ul className="blog-list">
                <li><strong>Slabs, columns, footings (structural concrete):</strong> use exactly the sand grade your engineer's mix design specifies; check cleanliness and grading on delivery.</li>
                <li><strong>Masonry mortar:</strong> a clean, well-graded sand is what matters most; either material can work when properly graded.</li>
                <li><strong>Plastering:</strong> finer plastering-grade sand (P-Sand) is typically chosen for a smooth face; confirm the specification.</li>
                <li><strong>Filling and base work:</strong> other materials — quarry dust, GSB, sludge — are often used; confirm suitability with your site supervisor.</li>
            </ul>

            <h3 id="a3-conclusion" className="blog-h3 scroll-mt-32">A balanced conclusion</h3>
            <p className="blog-p">Neither material is automatically "better." River sand offers natural roundness and a familiar feel; M-Sand offers engineered consistency and steady availability. What decides the outcome in real buildings is the same in both cases: correct grade for the application, verified cleanliness and grading, and a mix design approved by a structural engineer. Material selection and mix design should always be confirmed with your structural engineer.</p>

            <div id="a3-quiz" className="scroll-mt-32">
                <Quiz
                    title="Knowledge check"
                    questions={[
                        {
                            q: 'Which property is typical of M-Sand grains?',
                            options: ['Rounded and smooth', 'Angular and interlocking', 'Perfectly spherical'],
                            answer: 1,
                            explain: 'M-Sand is crushed rock, so its grains are angular and interlock well — a property many engineers favour in concrete.',
                        },
                        {
                            q: 'What should decide the sand choice for structural concrete?',
                            options: ['Habit', 'The structural engineer\u2019s specification and mix design', 'Whatever is loaded first'],
                            answer: 1,
                            explain: 'Material selection and mix design for structural work belong with your structural engineer.',
                        },
                        {
                            q: 'Which sand grade is typically finer and used for plastering?',
                            options: ['P-Sand', '40 mm jally', 'Coarse aggregate'],
                            answer: 0,
                            explain: 'P-Sand is the finer plastering-grade manufactured sand; jally and coarse aggregates are stone, not sand.',
                        },
                    ]}
                />
            </div>

            <Faq
                items={[
                    { q: 'Is M-Sand as good as river sand for concrete?', a: 'A clean, properly graded M-Sand is widely used in structural concrete, and many engineers specify it. Suitability for your project should be confirmed by your structural engineer.' },
                    { q: 'Which is better for plastering?', a: 'A finer plastering-grade sand (such as P-Sand) is typically specified for smooth plaster finishes. Confirm the grade your mason or engineer expects.' },
                    { q: 'Where can I get M-Sand and P-Sand near Thuraiyur?', a: 'Sri Kumaran Blue Metals and Bricks supplies M-Sand, P-Sand and aggregates near Thuraiyur, Tamil Nadu – 621010. Call or WhatsApp to confirm availability and delivery to your location.' },
                ]}
            />

            <ArticleCta message="For sand and aggregates around Thuraiyur, Tamil Nadu – 621010, contact Sri Kumaran Blue Metals and Bricks at +91 98428 66389." />
        </ArticleShell>
    );
}