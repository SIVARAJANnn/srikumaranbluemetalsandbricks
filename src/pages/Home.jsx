import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Landmark, Mountain, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/site/Reveal';
import HeritageTimeline from '@/components/site/HeritageTimeline';
import {
    IMG, PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, whatsappLink, PHONE_OFFICE_RAW,
} from '@/lib/siteData';
import { useSeo } from '@/lib/seo';

const SLOGANS = [
    'From Stone to Structure.',
    'Strength you can build on.',
    'Three generations of trust.',
    'A Legacy Built to Last.',
];

function SloganRotator() {
    const reduce = useReducedMotion();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reduce) return undefined;
        const timer = setInterval(() => setIndex((v) => (v + 1) % SLOGANS.length), 4200);
        return () => clearInterval(timer);
    }, [reduce]);

    if (reduce) {
        return <p className="font-heading italic text-xl md:text-2xl text-[#E8D6B3]">{SLOGANS[0]}</p>;
    }

    return (
        <div className="grid justify-center" aria-live="polite">
            <AnimatePresence mode="wait">
                <motion.p
                    key={SLOGANS[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                    className="col-start-1 row-start-1 font-heading italic text-xl md:text-2xl text-[#E8D6B3] whitespace-normal"
                >
                    {SLOGANS[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}



const LEADERS = [
    {
        img: IMG.periyasami,
        name: 'Periyasami',
        era: 'The First Generation',
        role: 'Founder · 1970',
        story: 'In 1970, Periyasami established the family business on the family ground at Kilakuvadi — a modest yard, one load at a time, and a name earned through honest measure. The standard he set at the gate in those early years is the one the yard still keeps today.',
        caption: 'The first stone — laid by a founder\u2019s hands.',
    },
    {
        img: IMG.prabakaran,
        name: 'Prabakaran',
        era: 'The Second Generation',
        role: 'Second-Generation Leader · 1989',
        story: 'In 1989, Prabakaran took over the business and carried the family standard forward with steady hands. Through the years under his lead, the yard\u2019s name spread across the Thuraiyur region on the strength of steady supply and fair dealing — and he taught the next generation the yard the way his father taught him.',
        caption: 'The steady hand that carried the legacy forward.',
    },
    {
        img: IMG.surya,
        name: 'Surya Prakash',
        era: 'The Third Generation',
        role: 'Managing Director · 2018',
        story: 'In 2018, Surya Prakash started Sri Kumaran Bricks, bringing a third generation of Kumaran Blue Metals to the yard. His chapter brought double-washed sands, graded Aggregates and ISI-certified Fly Ash Bricks — newer materials for a new era, on the same family ground and with the same family promise.',
        caption: 'A new chapter, written on the same ground.',
    },
];

const PRODUCTS = [
    { img: IMG.mSand, name: 'Double Washing M Sand', tag: 'Manufactured Sand' },
    { img: IMG.pSand, name: 'Double Washing P Sand', tag: 'Plastering Sand' },
    { img: IMG.aggregates, name: 'Aggregates', tag: 'Jally & Chips' },
    { img: IMG.flyAshBricks, name: 'Fly Ash Bricks', tag: 'ISI-Certified' },
];

export default function Home() {
    useSeo(
        'Sri Kumaran Blue Metals & Bricks | Quality Construction Materials',
        'Suppliers of double washing M Sand, P Sand, Aggregates and ISI-certified Fly Ash Bricks in Kilakuvadi Village, Thuraiyur, Tamil Nadu — a family legacy since 1970. Call +91 98428 66389.',
    );

    return (
        <div>
            {/* Hero */}
            <section className="relative min-h-[88vh] flex items-center overflow-hidden">
                <Image
                    src={IMG.hero}
                    alt="A JCB wheel loader filling a tipper truck with M Sand at the Sri Kumaran Blue Metals yard"
                    className="absolute inset-0 w-full h-full"
                    fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/85 via-[#111111]/55 to-[#111111]/85" aria-hidden="true" />
                <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-24 w-full flex flex-col items-center text-center">
                    <p className="label-caps text-[10px] text-[#C9A84C] mb-5">Since 1970 · Three Generations</p>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#F8F5EF]">
                        Sri Kumaran<br />Blue Metals &amp; Bricks
                    </h1>
                    <div className="mt-6">
                        <SloganRotator />
                    </div>
                    <p className="mt-4 max-w-2xl text-base md:text-lg text-[#F8F5EF]/75 leading-relaxed">
                        M Sand, P Sand, Aggregates and Fly Ash Bricks — supplied from Kilakuvadi Village, Thuraiyur, to the builders who shape this region.
                    </p>
                    <div className="mt-9 flex flex-wrap justify-center gap-4">
                        <a href={PHONE_OFFICE_TEL} className="btn-gold">
                            <Phone size={15} aria-hidden="true" /> Call {PHONE_OFFICE_DISPLAY}
                        </a>
                        <a
                            href={whatsappLink('Hello Sri Kumaran Blue Metals & Bricks, I have an enquiry about construction materials.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glass"
                        >
                            <MessageCircle size={15} aria-hidden="true" /> WhatsApp Us
                        </a>
                        <Link to="/products" className="btn-dark">
                            View Products <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 md:py-32 px-4 md:px-6" aria-labelledby="heritage-heading">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="text-center mb-14 md:mb-20">
                        <p className="label-caps text-[10px] text-[#C9A84C] mb-3">Our Heritage</p>
                        <h2 id="heritage-heading" className="font-heading text-3xl md:text-5xl font-bold text-[#111111]">Three Generations, One Ground</h2>
                        <p className="mt-4 max-w-xl mx-auto text-[#2E2E2E] leading-relaxed">
                            A timeline of the family that built this business — from 1970 to today.
                        </p>
                    </Reveal>
                    <HeritageTimeline />
                </div>
            </section>

            {/* Leadership */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-[#111111]" aria-labelledby="leadership-heading">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="text-center mb-14 md:mb-20">
                        <p className="label-caps text-[10px] text-[#C9A84C] mb-3">Leadership</p>
                        <h2 id="leadership-heading" className="font-heading text-3xl md:text-5xl font-bold text-[#F8F5EF]">The People Behind the Legacy</h2>
                    </Reveal>
                    <div className="space-y-16 md:space-y-24">
                        {LEADERS.map((leader, i) => (
                            <Reveal key={leader.name}>
                                <figure className={`flex flex-col gap-8 md:gap-14 md:items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                    <div className="md:w-[44%] shrink-0">
                                        <div className="aspect-[3/4] max-h-[620px] w-full mx-auto overflow-hidden rounded-[2rem] ring-1 ring-[#C9A84C]/40 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                                            <Image
                                                src={leader.img}
                                                alt={`Portrait of ${leader.name}, ${leader.role} of Sri Kumaran Blue Metals & Bricks`}
                                                className="w-full h-full"
                                                fittingType="fill"
                                            />
                                        </div>
                                    </div>
                                    <figcaption className="md:flex-1">
                                        <p className="label-caps text-[10px] text-[#C9A84C]">{leader.era}</p>
                                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#F8F5EF] mt-2">{leader.name}</h3>
                                        <p className="label-caps text-[10px] text-[#E8D6B3]/70 mt-2">{leader.role}</p>
                                        <div className="glass-divider w-28 mt-5" aria-hidden="true" />
                                        <p className="mt-5 text-[15px] md:text-base leading-relaxed text-[#F8F5EF]/75 max-w-xl">{leader.story}</p>
                                        <p className="mt-5 font-heading italic text-base md:text-lg text-[#E8D6B3]/85">“{leader.caption}”</p>
                                    </figcaption>
                                </figure>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products teaser */}
            <section className="py-20 md:py-32 px-4 md:px-6" aria-labelledby="products-heading">
                <div className="max-w-6xl mx-auto">
                    <Reveal className="text-center mb-14">
                        <p className="label-caps text-[10px] text-[#C9A84C] mb-3">What We Supply</p>
                        <h2 id="products-heading" className="font-heading text-3xl md:text-5xl font-bold text-[#111111]">Materials for Every Stage of Build</h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {PRODUCTS.map((product, i) => (
                            <Reveal key={product.name} delay={i * 0.08}>
                                <Link
                                    to="/products"
                                    className="group block glass rounded-3xl overflow-hidden h-full hover:shadow-[0_16px_40px_rgba(201,168,76,0.25)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={product.img}
                                            alt={`${product.name} supplied by Sri Kumaran Blue Metals & Bricks`}
                                            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                                            fittingType="fill"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="label-caps text-[9px] text-[#C9A84C]">{product.tag}</p>
                                        <h3 className="mt-1.5 font-heading text-lg font-bold text-[#111111]">{product.name}</h3>
                                        <span className="mt-3 inline-flex items-center gap-1.5 label-caps text-[10px] text-[#2E2E2E] group-hover:text-[#C9A84C] transition-colors">
                                            Enquire <ArrowRight size={12} aria-hidden="true" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="text-center mt-10">
                        <Link to="/contact" className="btn-glass">Enquire Now <ArrowRight size={14} aria-hidden="true" /></Link>
                    </Reveal>
                </div>
            </section>

            {/* CTA band */}
            <section className="px-4 md:px-6 pb-20 md:pb-32">
                <Reveal className="max-w-5xl mx-auto glass-dark rounded-[2rem] p-8 md:p-14 text-center">
                    <div className="flex justify-center gap-6 mb-6 text-[#C9A84C]">
                        <Landmark aria-hidden="true" /><Mountain aria-hidden="true" /><Users aria-hidden="true" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F8F5EF] max-w-2xl mx-auto">
                        Building in Thuraiyur? Talk to us first.
                    </h2>
                    <p className="mt-4 text-[#F8F5EF]/70 max-w-xl mx-auto">
                        Call or WhatsApp our team to check availability of M Sand, P Sand, Aggregates or Fly Ash Bricks for your site.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href={PHONE_OFFICE_TEL} className="btn-gold">
                            <Phone size={15} aria-hidden="true" /> Call {PHONE_OFFICE_DISPLAY}
                        </a>
                        <a
                            href={`https://wa.me/${PHONE_OFFICE_RAW}?text=${encodeURIComponent('Hello Sri Kumaran Blue Metals & Bricks, I need materials for my site.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glass"
                        >
                            <MessageCircle size={15} aria-hidden="true" /> Chat on WhatsApp
                        </a>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}