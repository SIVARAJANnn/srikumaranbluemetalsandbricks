import ArticleShell from '@/components/blog/ArticleShell';
import Faq from '@/components/blog/Faq';
import Quiz from '@/components/blog/Quiz';
import UsageSelector from '@/components/blog/UsageSelector';
import CompareToggle from '@/components/blog/CompareToggle';
import ArticleCta from '@/components/blog/ArticleCta';
import { useSeo } from '@/lib/seo';

const TOC = [
    { href: '#a2-summary', label: 'Quick summary' },
    { href: '#a2-who', label: 'Who may find M-Sand useful' },
    { href: '#a2-benefits', label: 'Benefits' },
    { href: '#a2-limitations', label: 'Limitations' },
    { href: '#a2-mp', label: 'M-Sand vs P-Sand' },
    { href: '#a2-choose', label: 'Choosing and using M-Sand' },
    { href: '#a2-ask', label: 'What to ask a supplier' },
    { href: '#a2-compare', label: 'M-Sand vs river sand' },
    { href: '#a2-quiz', label: 'Knowledge check' },
    { href: '#a2-faq', label: 'FAQs' },
];

export default function ArticleMSand() {
    useSeo(
        'Advantages and Limitations of M-Sand for Construction | Sri Kumaran Blue Metals',
        'An original guide to M-Sand for homeowners, builders and contractors: benefits, limitations, how to choose and what to ask a supplier — plus M-Sand vs P-Sand and river sand comparisons.',
    );

    return (
        <ArticleShell
            id="article-2"
            number="2"
            title="Advantages and Limitations of M-Sand for Construction"
            intro="Manufactured sand (M-Sand) has become a mainstream choice for concrete and plastering across Tamil Nadu. This guide explains, in plain language, who it suits, where it helps, where it needs care — and how to check the material you are actually being sold."
            toc={TOC}
        >
            <h3 id="a2-summary" className="blog-h3 scroll-mt-32">Quick summary</h3>
            <p className="blog-p">M-Sand is sand produced by crushing rock to sand-sized particles and grading it for construction use. Its main advantages are consistency of grading, cleanliness when properly washed, and dependable availability. Its main cautions are quality variation between producers, the need to match the grade to the application, and the value of an engineer-approved mix design for structural concrete.</p>

            <h3 id="a2-who" className="blog-h3 scroll-mt-32">Who may find M-Sand useful</h3>
            <ul className="blog-list">
                <li><strong>Homeowners building a house</strong> who want a consistent material for their mason to work with.</li>
                <li><strong>Contractors</strong> running concrete work on a schedule, where grading consistency helps batching.</li>
                <li><strong>Masons</strong> who prefer sand with fewer impurities for plastering and finishing.</li>
                <li><strong>Anyone sourcing near Thuraiyur</strong> — M-Sand is commonly stocked by local blue-metals suppliers [CONFIRM WITH BUSINESS].</li>
            </ul>

            <h3 id="a2-benefits" className="blog-h3 scroll-mt-32">Benefits</h3>
            <ul className="blog-list">
                <li><strong>Consistent grading:</strong> crushing and screening produce a particle-size distribution that stays steadier between batches than naturally gathered sand.</li>
                <li><strong>Cleanliness when washed:</strong> double-washed M-Sand carries less dust and silt, which is generally better for bond in concrete and plaster.</li>
                <li><strong>Angular particles:</strong> crushed grains interlock, which many engineers favour in concrete mixes.</li>
                <li><strong>Reliable availability:</strong> produced continuously at crushing plants, independent of river and seasonal factors.</li>
            </ul>

            <h3 id="a2-limitations" className="blog-h3 scroll-mt-32">Limitations</h3>
            <ul className="blog-list">
                <li><strong>Quality varies by producer:</strong> poorly washed or badly graded M-Sand can hurt a mix — the name on the lorry is not the test; the grading and cleanliness are.</li>
                <li><strong>Grade must match the job:</strong> concrete-grade M-Sand is not the best choice for fine plastering, and plastering-grade P-Sand should not be used for structural concrete.</li>
                <li><strong>Workability feel:</strong> some masons initially find manufactured sand slightly less "silky" than river sand; a good mix design resolves this.</li>
                <li><strong>Check, don't assume:</strong> claims about any particular product's certification or performance should be verified from its documentation [CONFIRM WITH BUSINESS].</li>
            </ul>

            <h3 id="a2-mp" className="blog-h3 scroll-mt-32">M-Sand vs P-Sand — knowing the difference</h3>
            <p className="blog-p">M-Sand (manufactured sand for concrete) is graded for use in concrete — structural slabs, columns, footings. P-Sand (plastering sand) is a finer grade intended for plastering and finishing. Using the right one matters: P-Sand in concrete weakens the mix's intent, and M-Sand in fine plaster gives a coarser finish. Your engineer's specification decides which grade goes where.</p>

            <UsageSelector
                tips={[
                    { key: 'concrete', label: 'Concrete Work', text: 'For structural concrete, use M-Sand graded for concrete, and let your engineer approve the mix design. Check that the sand is clean and evenly graded before batching begins.' },
                    { key: 'plaster', label: 'Plastering', text: 'For plastering and finishing, finer P-Sand gives a smoother wall face. Ask for plastering-grade material and check for excess dust before it goes on the wall.' },
                    { key: 'general', label: 'General Enquiry', text: 'Not sure which grade your job needs? Describe your work when you enquire, and confirm the final selection with your mason or engineer.' },
                ]}
            />

            <h3 id="a2-choose" className="blog-h3 scroll-mt-32">Choosing and using M-Sand well</h3>
            <ul className="blog-list">
                <li><strong>Check gradation:</strong> a properly graded sand has a balanced spread of particle sizes, not all fines or all coarse grains.</li>
                <li><strong>Check cleanliness:</strong> look and feel for excess dust, silt or clay. Washing quality shows up here first.</li>
                <li><strong>Match the application:</strong> confirm with your engineer which grade the specification calls for, and use it.</li>
                <li><strong>Review product documents:</strong> for structural work, ask for any test or grading documentation the producer can supply [CONFIRM WITH BUSINESS].</li>
            </ul>

            <h3 id="a2-ask" className="blog-h3 scroll-mt-32">What to ask a supplier</h3>
            <ul className="blog-list">
                <li>Which grade is this — concrete M-Sand or plastering P-Sand?</li>
                <li>Is it washed? How many wash cycles?</li>
                <li>Can you provide grading or quality documentation for this batch?</li>
                <li>What quantity can you reliably supply to my site, and what is the delivery arrangement? [CONFIRM WITH BUSINESS]</li>
            </ul>

            <h3 id="a2-compare" className="blog-h3 scroll-mt-32">M-Sand vs river sand — a fair comparison</h3>
            <p className="blog-p">River sand is a natural material gathered from riverbeds; M-Sand is manufactured by crushing rock. Both can produce good concrete when properly graded and clean. Switch between the two views below for a balanced picture.</p>
            <CompareToggle
                leftTitle="M-Sand View"
                rightTitle="River Sand View"
                left={[
                    'Consistent grading from controlled crushing and screening; batch-to-batch variation is typically low.',
                    'Angular, interlocking particles, which many engineers favour in concrete mixes.',
                    'Washing at the plant controls dust; clean, double-washed M-Sand is widely available.',
                    'Availability is steady and independent of monsoon and riverbed restrictions.',
                ]}
                right={[
                    'Natural, rounded grains with a smooth feel that many masons have long preferred for plaster.',
                    'Grading varies by source and batch; each load needs checking.',
                    'Cleanliness depends on the source and washing on site; silt content can vary widely.',
                    'Supply can be limited by season and regulation, which affects planning for larger projects.',
                ]}
            />

            <div id="a2-quiz" className="scroll-mt-32">
                <Quiz
                    title="Knowledge check"
                    questions={[
                        {
                            q: 'Which sand grade is generally intended for plastering and finishing?',
                            options: ['P-Sand (plastering grade)', 'Concrete M-Sand', 'Any grade works equally'],
                            answer: 0,
                            explain: 'P-Sand is the finer manufactured sand intended for plastering, while concrete-grade M-Sand is graded for structural mixes.',
                        },
                        {
                            q: 'What is the most practical way to judge M-Sand quality on site?',
                            options: ['By its price', 'By its grading and cleanliness', 'By its colour alone'],
                            answer: 1,
                            explain: 'Grading (particle-size spread) and cleanliness (low dust and silt) are the practical, on-site quality indicators — colour alone can be misleading.',
                        },
                        {
                            q: 'For structural concrete, who should approve the mix design?',
                            options: ['The lorry driver', 'Your structural engineer', 'No approval is needed'],
                            answer: 1,
                            explain: 'The mix design and material selection for structural work should always be approved by your structural engineer.',
                        },
                    ]}
                />
            </div>

            <Faq
                items={[
                    { q: 'Is M-Sand suitable for my house construction?', a: 'M-Sand is widely used for house construction, but the right grade for each part of the build — concrete versus plastering — should be confirmed with your engineer or mason.' },
                    { q: 'Does Sri Kumaran supply double washing M-Sand?', a: 'The business supplies double washing M Sand and double washing P Sand from its yard near Thuraiyur. Confirm current availability and grades when you enquire [CONFIRM WITH BUSINESS].' },
                    { q: 'How do I check the quality of a load before accepting it?', a: 'Look for even grading (not all fines or all coarse grains), low dust, and no visible silt or clay. For structural work, ask for grading documentation and follow your engineer\u2019s advice.' },
                    { q: 'Is M-Sand better than river sand?', a: 'Both can produce good results when clean and well graded. The practical choice depends on your specification, availability and your engineer\u2019s advice — this article avoids cost comparisons on purpose.' },
                ]}
            />

            <ArticleCta message="Building around Thuraiyur? Ask Sri Kumaran Blue Metals & Bricks about double washing M Sand and P Sand for your site." />
        </ArticleShell>
    );
}