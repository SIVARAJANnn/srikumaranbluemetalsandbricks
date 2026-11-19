import { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

const TIMELINE = [
    {
        year: '1970',
        title: 'The Foundation',
        body: 'Periyasami founded the business, laying the first stone of a family legacy in construction materials. What began as a modest yard on the family ground at Kilakuvadi grew on one simple practice — honest measure, fair dealing, and material a mason could trust without checking twice.',
    },
    {
        year: '1989',
        title: 'The Second Generation',
        body: 'Prabakaran took over as second-generation leader, carrying the family standard forward with steady hands. Under him the yard\u2019s reach widened across the Thuraiyur region — repeat customers, season after season — and the promise his father made at the gate became the way every load left it.',
    },
    {
        year: '2018',
        title: 'A New Chapter',
        body: 'Surya Prakash started Sri Kumaran Bricks, bringing a third generation of Kumaran Blue Metals to the yard. His chapter added double-washed M Sand and P Sand, graded Aggregates and ISI-certified Fly Ash Bricks — newer materials and finer finishing, supplied with the same family care.',
    },
    {
        year: 'Today',
        title: 'The Legacy Continues',
        body: 'Three generations on, the same ground still supplies the materials the region builds with. From the foundation stone to the plastering sand, the yard at Kilakuvadi remains what it was in 1970 — a family name that builders pass on by word of mouth.',
    },
];

export default function HeritageTimeline() {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.35'] });
    const lineScale = useSpring(scrollYProgress, { stiffness: 55, damping: 18 });

    return (
        <div ref={ref} className="relative max-w-3xl mx-auto">
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/15" aria-hidden="true">
                <motion.div
                    className="w-full h-full origin-top bg-gradient-to-b from-[#C9A84C] via-[#E8D6B3] to-[#C9A84C]"
                    style={reduce ? { scaleY: 1 } : { scaleY: lineScale }}
                />
            </div>
            <ol className="space-y-8 md:space-y-12">
                {TIMELINE.map((item, i) => (
                    <li key={item.year} className={`relative md:flex ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                        <motion.span
                            className="absolute left-[7px] md:left-1/2 top-9 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-[#C9A84C] ring-4 ring-[#C9A84C]/25"
                            initial={reduce ? false : { scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false, amount: 0.6 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 12 }}
                            aria-hidden="true"
                        />
                        <motion.div
                            initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -70 : 70, rotate: i % 2 === 0 ? -2 : 2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: false, amount: 0.35 }}
                            transition={{ type: 'spring', stiffness: 70, damping: 16 }}
                            className="glass rounded-2xl p-6 md:p-8 md:w-[46%] ml-8 md:ml-0"
                        >
                            <p className="label-caps text-[10px] text-[#C9A84C]">{item.year}</p>
                            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#111111] mt-1.5">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#2E2E2E]">{item.body}</p>
                        </motion.div>
                    </li>
                ))}
            </ol>
        </div>
    );
}