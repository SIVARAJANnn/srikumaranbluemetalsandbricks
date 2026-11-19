import ArticleShell from '@/components/blog/ArticleShell';
import GoldTable from '@/components/blog/GoldTable';
import Faq from '@/components/blog/Faq';
import ArticleCta from '@/components/blog/ArticleCta';
import { useSeo } from '@/lib/seo';

const TOC = [
    { href: '#a1-what', label: 'What are fly ash bricks?' },
    { href: '#a1-advantages', label: 'Potential advantages' },
    { href: '#a1-limitations', label: 'Limitations to weigh' },
    { href: '#a1-compare', label: 'Fly ash vs red clay: comparison' },
    { href: '#a1-facts', label: 'Sri Kumaran Fly Ash Bricks' },
    { href: '#a1-choosing', label: 'Choosing for your project' },
    { href: '#a1-faq', label: 'FAQs' },
];

export default function ArticleFlyAsh() {
    useSeo(
        'Sri Kumaran Fly Ash Bricks: Advantages vs Red Clay Bricks | Thuraiyur',
        'Learn what fly ash bricks are, their advantages and limitations, and how they compare with red clay bricks — with Sri Kumaran ISI-certified fly ash brick details for Thuraiyur, Tamil Nadu.',
    );

    return (
        <ArticleShell
            id="article-1"
            number="1"
            title="Sri Kumaran Fly Ash Bricks: Advantages and How They Compare with Red Clay Bricks"
            intro="Fly ash bricks are one of the most widely used masonry materials in modern construction. This article explains what they are, where they perform well, where they need care, and how to compare them fairly with red clay bricks before you choose for your project."
            toc={TOC}
        >
            <h3 id="a1-what" className="blog-h3 scroll-mt-32">What are fly ash bricks?</h3>
            <p className="blog-p">Fly ash bricks are masonry units made using fly ash — a fine powder recovered from coal combustion — combined with other ingredients such as cement and sand, then moulded and cured. Because the mixture is moulded rather than cut or hand-moulded from clay, the resulting bricks are typically more uniform in shape and size than many clay bricks.</p>
            <p className="blog-p">Uniformity matters in practice: walls built with consistent bricks need less mortar to correct level differences, and masons often find the work goes faster. Beyond shape, the material behaves differently from clay — it is generally smoother on the face and different in water absorption behaviour. How any specific brick performs, of course, depends on how it was made and cured.</p>

            <h3 id="a1-advantages" className="blog-h3 scroll-mt-32">Potential advantages of fly ash bricks</h3>
            <ul className="blog-list">
                <li><strong>Uniform shape and size:</strong> moulded production generally gives cleaner geometry, which helps with neat mortar joints.</li>
                <li><strong>Smooth faces:</strong> plastering work often needs less correction on the wall face.</li>
                <li><strong>Cleaner sites:</strong> the moulding process produces relatively less breakage waste on site compared with more brittle alternatives — confirm handling practice with your supplier.</li>
                <li><strong>Consistent supply:</strong> because they are manufactured continuously, availability is typically steadier than seasonal clay production.</li>
            </ul>

            <h3 id="a1-limitations" className="blog-h3 scroll-mt-32">Limitations to weigh</h3>
            <ul className="blog-list">
                <li><strong>Early water behaviour:</strong> some fly ash bricks absorb water differently from clay bricks, so curing and mortar practice may need adjustment. Follow your mason's or engineer's guidance.</li>
                <li><strong>Quality varies by manufacturer:</strong> not all fly ash bricks are equal — always check for the manufacturer's documentation and any certification claimed.</li>
                <li><strong>Not ideal for every exposure:</strong> for special conditions — high heat zones, heavy load walls, below-grade work — ask your structural engineer before deciding.</li>
            </ul>

            <h3 id="a1-compare" className="blog-h3 scroll-mt-32">Fly ash vs red clay: a fair comparison</h3>
            <p className="blog-p">Both materials build good walls when they are good bricks. The right question is not "which is better in general" but "which suits this project, this budget conversation with your builder, and this mason's practice."</p>
            <GoldTable
                caption="Comparison of fly ash bricks and red clay bricks"
                headers={['Aspect', 'Fly Ash Bricks', 'Red Clay Bricks']}
                rows={[
                    ['Material', 'Made from fly ash blended with binders such as cement, moulded and cured', 'Made from natural clay, moulded and fired in kilns'],
                    ['Dimensions & shape', 'Moulded production gives generally uniform size and sharp edges; less mortar needed to level courses', 'Hand-moulded or machine-made; size varies more between batches and kilns'],
                    ['Appearance', 'Smoother, more even face; grey tone; generally needs less plaster correction', 'Reddish tone; face texture varies; may need more mortar and plaster correction for uneven units'],
                    ['Choosing for a project', 'A strong choice where uniform masonry, steady supply and documented quality matter — check certification and size with the supplier', 'A familiar, widely available choice valued by some masons; check source quality and firing consistency'],
                ]}
            />

            <h3 id="a1-facts" className="blog-h3 scroll-mt-32">Sri Kumaran Fly Ash Bricks — supplied facts</h3>
            <ul className="blog-list">
                <li><strong>ISI-certified:</strong> Sri Kumaran Fly Ash Bricks are ISI-certified, as stated by the business.</li>
                <li><strong>Size:</strong> 9 × 4 × 3 inches (length × breadth × height).</li>
                <li><strong>Delivery:</strong> available within approximately 100 km of Thuraiyur, Tamil Nadu 621010, subject to order, location and availability confirmation.</li>
            </ul>
            <p className="blog-p">These are the facts the business supplies. No license number is quoted here — if your project's documentation requires one, please request the certificate details from the business directly when you enquire.</p>

            <h3 id="a1-choosing" className="blog-h3 scroll-mt-32">Choosing for your project</h3>
            <p className="blog-p">Before ordering, confirm four things: the size and quantity your masonry schedule needs; the product documentation your engineer or client expects; the suitability of the brick for your wall type and exposure; and the delivery practicalities for your site. Your project professional — the mason, supervisor or structural engineer who knows the build — is the right person to confirm suitability.</p>

            <Faq
                items={[
                    { q: 'Are Sri Kumaran Fly Ash Bricks certified?', a: 'Yes — the business states its fly ash bricks are ISI-certified. Request the certificate details when you enquire if your documentation needs them.' },
                    { q: 'What size are Sri Kumaran Fly Ash Bricks?', a: '9 × 4 × 3 inches (length × breadth × height), as supplied by the business.' },
                    { q: 'Do you deliver fly ash bricks to my village?', a: 'Delivery is available within approximately 100 km of Thuraiyur, Tamil Nadu 621010, subject to order, location and availability. Call or WhatsApp to confirm your location.' },
                    { q: 'Can I use fly ash bricks for load-bearing walls?', a: 'Many builders do, but suitability depends on your wall design and loads. Always confirm with your structural engineer before finalising.' },
                ]}
            />

            <ArticleCta message="Have a wall to build in the Thuraiyur region? Speak to Sri Kumaran Blue Metals & Bricks about fly ash brick availability and delivery." />
        </ArticleShell>
    );
}