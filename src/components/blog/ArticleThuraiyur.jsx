import ArticleShell from '@/components/blog/ArticleShell';
import Faq from '@/components/blog/Faq';
import ArticleCta from '@/components/blog/ArticleCta';
import { Phone } from 'lucide-react';
import { PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY } from '@/lib/siteData';
import { useSeo } from '@/lib/seo';

const TOC = [
    { href: '#a5-difference', label: 'The general difference' },
    { href: '#a5-spec', label: 'Who decides: the engineer and the grade' },
    { href: '#a5-service', label: 'Delivery around Thuraiyur' },
    { href: '#a5-faq', label: 'FAQs' },
];

export default function ArticleThuraiyur() {
    useSeo(
        'M-Sand and P-Sand in Thuraiyur | Delivery Around Thuraiyur, Tamil Nadu',
        'The difference between M-Sand for concrete and P-Sand for plastering, and delivery of M-Sand, P-Sand and aggregates within approximately 50 km of Thuraiyur, PIN 621010.',
    );

    return (
        <ArticleShell
            id="article-5"
            number="5"
            title="M-Sand and P-Sand in Thuraiyur"
            intro="A short, practical guide to the two manufactured sands most asked about in the Thuraiyur region — what separates them, and who actually decides which one your site needs."
            toc={TOC}
        >
            <h3 id="a5-difference" className="blog-h3 scroll-mt-32">The general difference</h3>
            <p className="blog-p">M-Sand and P-Sand both begin as crushed rock. What separates them is the grading — the spread of particle sizes the crushing and screening process produces.</p>
            <ul className="blog-list">
                <li><strong>M-Sand</strong> is graded for concrete applications: slabs, columns, footings and other structural work, where angular, interlocking grains and a consistent grading support the mix.</li>
                <li><strong>P-Sand</strong> is a finer grade intended for plastering: wall faces, ceilings and finishing work, where a finer particle size gives a smoother result.</li>
            </ul>
            <p className="blog-p">In short: M-Sand for concrete, P-Sand for plastering — as a general principle.</p>

            <h3 id="a5-spec" className="blog-h3 scroll-mt-32">Who decides: the engineer and the grade</h3>
            <p className="blog-p">That general rule is only the starting point. The engineer's specification and the actual product grade determine suitability for your project — a mix design may call for specific grading, and the material you receive must match it. Always confirm the specification with your engineer, and verify the grade and cleanliness of the material on delivery rather than relying on the name alone.</p>

            <h3 id="a5-service" className="blog-h3 scroll-mt-32">Delivery around Thuraiyur</h3>
            <p className="blog-p">As provided by the business: M-Sand, P-Sand and aggregates are available for delivery within approximately <strong>50 km of Thuraiyur, PIN 621010</strong>, subject to location and availability confirmation. Delivery to a specific site is always confirmed with the business before an order is placed.</p>

            <Faq
                items={[
                    { q: 'Can I use P-Sand in concrete?', a: 'P-Sand is a finer grade intended for plastering. Whether any given material suits your concrete mix is a decision for your engineer\u2019s specification — do not substitute grades without approval.' },
                    { q: 'Do you deliver M-Sand to my village near Thuraiyur?', a: 'M-Sand, P-Sand and aggregates are generally available within approximately 50 km of Thuraiyur, PIN 621010, subject to location and availability confirmation. Call or WhatsApp to confirm your location.' },
                ]}
            />

            <div className="mt-10 glass-dark rounded-[1.5rem] p-7 md:p-9 text-center">
                <p className="font-heading text-lg md:text-xl text-[#F8F5EF] max-w-xl mx-auto">
                    To check availability and delivery of M-Sand, P-Sand or aggregates for your site near Thuraiyur, call the business directly.
                </p>
                <a href={PHONE_OFFICE_TEL} className="btn-gold mt-5">
                    <Phone size={14} aria-hidden="true" /> Call {PHONE_OFFICE_DISPLAY}
                </a>
            </div>
        </ArticleShell>
    );
}