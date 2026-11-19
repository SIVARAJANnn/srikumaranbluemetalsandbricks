import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import {
    IMG, PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, whatsappLink,
    AGGREGATE_SIZES, AGGREGATE_FILLERS,
} from '@/lib/siteData';
import { useSeo } from '@/lib/seo';

const PRODUCT_WA = (name) =>
    whatsappLink(`Hello Sri Kumaran Blue Metals & Bricks, I would like to enquire about ${name}. Please share availability and details.`);

const PRODUCTS = [
    {
        number: '01',
        img: IMG.mSand,
        alt: 'A large mound of dark grey double washing M Sand at the yard',
        name: 'Double Washing M Sand',
        tag: 'For Concrete Work',
        body: 'Manufactured sand produced by crushing and grading rock, then double-washed to keep it cleaner and more consistent. M Sand is generally used for concrete work, where a dependable, evenly graded sand matters most. Cleanliness and consistency are the qualities to look for — and the qualities we wash for.',
        bullets: ['Double-washed manufactured sand', 'Suited to concrete and structural work', 'Consistent grading, batch after batch'],
    },
    {
        number: '02',
        img: IMG.pSand,
        alt: 'A close view of grey double washing P Sand held in two hands',
        name: 'Double Washing P Sand',
        tag: 'For Plastering & Finishing',
        body: 'A finer grade of manufactured sand, double-washed and prepared for plastering and finishing applications. P Sand is chosen for smoother wall finishes where a finer particle size works better than concrete-grade sand.',
        bullets: ['Double-washed, finer manufactured sand', 'Suited to plastering and finishing', 'Smooth, workable texture'],
    },
    {
        number: '03',
        img: IMG.aggregates,
        alt: 'A close-up texture of crushed grey granite aggregates',
        name: 'Aggregates',
        tag: 'Jally, Chips & Filling Materials',
        body: 'Crushed blue-metal Aggregates in the sizes your project calls for — from jally for concrete to chips and filling materials for base work and site development. Availability of each size is confirmed on enquiry.',
        bullets: AGGREGATE_SIZES,
        extraNote: 'Wed mix, GSB and sludge are supplied mainly for basement filling and road construction.',
        textures: [
            { img: IMG.blueMetalTexture, alt: 'Texture of small dark grey crushed blue-metal stones' },
            { img: IMG.aggregatesPile, alt: 'A pile of freshly crushed grey aggregates at the yard' },
            { img: IMG.chips, alt: 'An overhead view of fine 6 mm stone chips' },
        ],
    },
    {
        number: '04',
        img: IMG.flyAshBricks,
        alt: 'A single grey Sri Kumaran fly ash brick with SKB embossed on its face',
        name: 'Fly Ash Bricks',
        tag: 'ISI-Certified',
        body: 'Sri Kumaran Fly Ash Bricks are ISI-certified and measure 9 × 4 × 3 inches (length × breadth × height). Fly Ash Bricks are a widely used choice for masonry walls, offering a uniform shape that many masons find easier to lay. Delivery is available within approximately 100 km of Thuraiyur, Tamil Nadu 621010, subject to order, location and availability confirmation.',
        bullets: ['ISI-certified product', '9 × 4 × 3 inches (L × B × H)', 'Delivery within ~100 km of Thuraiyur'],
    },
];

export default function Products() {
    useSeo(
        'Products | M Sand, P Sand, Aggregates & Fly Ash Bricks — Sri Kumaran Blue Metals & Bricks',
        'Double washing M Sand and P Sand, Aggregates (20 mm, 40 mm, 12 mm jally, 6 mm chips, quarry dust, 100 waste, wed mix, GSB, sludge) and ISI-certified Fly Ash Bricks in Thuraiyur, Tamil Nadu.',
    );

    return (
        <div>
            <PageHero
                eyebrow="Our Materials"
                title="Products"
                description="Four core material lines from the Kumaran yard — each confirmed for availability, size and suitability when you enquire."
                center
            />

            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-6xl mx-auto space-y-10 md:space-y-14">
                    {PRODUCTS.map((product, i) => (
                        <Reveal key={product.name} delay={0.05}>
                            <article className="glass rounded-[2rem] overflow-hidden">
                                <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                                    <div className={`relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden md:[direction:ltr]`}>
                                        <Image
                                            src={product.img}
                                            alt={product.alt}
                                            className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700"
                                            fittingType="fill"
                                        />
                                        <span
                                            aria-hidden="true"
                                            className="absolute top-5 left-5 font-heading text-5xl md:text-6xl font-bold text-[#F8F5EF]/90 [text-shadow:0_2px_16px_rgba(17,17,17,0.6)]"
                                        >
                                            {product.number}
                                        </span>
                                    </div>
                                    <div className="p-7 md:p-10 md:[direction:ltr] flex flex-col">
                                        <p className="label-caps text-[10px] text-[#C9A84C]">{product.tag}</p>
                                        <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-[#111111]">{product.name}</h2>
                                        <p className="mt-4 text-[15px] leading-relaxed text-[#2E2E2E]">{product.body}</p>
                                        <ul className="mt-5 space-y-2">
                                            {product.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-2.5 text-sm text-[#2E2E2E]">
                                                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        {product.extraNote && (
                                            <p className="mt-4 text-sm leading-relaxed text-[#2E2E2E] bg-[#E8D6B3]/30 border border-[#C9A84C]/25 rounded-xl px-4 py-3">
                                                {product.extraNote}
                                            </p>
                                        )}
                                        {product.textures && (
                                            <div className="mt-5 grid grid-cols-3 gap-2.5">
                                                {product.textures.map((t) => (
                                                    <div key={t.img} className="aspect-square rounded-xl overflow-hidden ring-1 ring-[#C9A84C]/30">
                                                        <Image src={t.img} alt={t.alt} className="w-full h-full" fittingType="fill" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mt-auto pt-7 flex flex-wrap gap-3">
                                            <Link to="/contact" className="btn-gold">
                                                Enquire Now <ArrowRight size={14} aria-hidden="true" />
                                            </Link>
                                            <a href={PRODUCT_WA(product.name)} target="_blank" rel="noopener noreferrer" className="btn-glass">
                                                <MessageCircle size={14} aria-hidden="true" /> WhatsApp
                                            </a>
                                            <a href={PHONE_OFFICE_TEL} className="btn-dark md:hidden">
                                                <Phone size={14} aria-hidden="true" /> Call
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="px-4 md:px-6 pb-20 md:pb-28">
                <Reveal className="max-w-4xl mx-auto glass-dark rounded-[2rem] p-8 md:p-12 text-center">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#F8F5EF]">Not sure which material you need?</h2>
                    <p className="mt-3 text-[#F8F5EF]/70 text-sm md:text-base max-w-lg mx-auto">
                        Tell us about your project and we will help you choose. For technical selection, we also recommend confirming with your project professional.
                    </p>
                    <p className="mt-4 text-[#E8D6B3] font-heading italic text-lg">
                        Office / WhatsApp: {PHONE_OFFICE_DISPLAY}
                    </p>
                </Reveal>
            </section>
        </div>
    );
}