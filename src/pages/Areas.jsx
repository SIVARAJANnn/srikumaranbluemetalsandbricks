import { Phone, MapPin, MessageCircle, Info } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import {
    DELIVERY_HUBS, PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, whatsappLink, MAPS_LINK,
} from '@/lib/siteData';
import { useSeo } from '@/lib/seo';

const AreaChip = ({ name }) => (
    <span className="inline-block rounded-full glass px-4 py-2 text-sm text-[#2E2E2E] hover:text-[#111111] hover:shadow-[0_4px_16px_rgba(201,168,76,0.25)] transition-all duration-300">
        {name}
    </span>
);

export default function Areas() {
    useSeo(
        'Areas We Deliver | M Sand, Aggregates & Bricks around Thuraiyur & Perambalur',
        'Sri Kumaran Blue Metals & Bricks delivers M Sand, P Sand and Aggregates within ~50 km of Thuraiyur and Fly Ash Bricks within ~100 km — covering Kalipatti, Pulivalam, Kilakuvadi, Nagalapuram and nearby villages.',
    );

    return (
        <div>
            <PageHero
                eyebrow="Delivery Coverage"
                title="Areas We Deliver"
                description="Our main supply hubs, and the villages around them we serve. Every delivery depends on the exact location, the order, and availability — always confirmed with us first."
                center
            />

            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Thuraiyur hub */}
                    <Reveal>
                        <article className="glass rounded-[2rem] p-7 md:p-12" aria-labelledby="hub-thuraiyur">
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="h-12 w-12 rounded-2xl bg-[#111111] flex items-center justify-center shrink-0">
                                    <MapPin size={22} className="text-[#C9A84C]" aria-hidden="true" />
                                </span>
                                <div>
                                    <h2 id="hub-thuraiyur" className="font-heading text-3xl md:text-4xl font-bold text-[#111111]">THURAIYUR</h2>
                                    <p className="label-caps text-[10px] text-[#C9A84C] mt-1">Main Service Hub · PIN 621010</p>
                                </div>
                            </div>

                            <div className="grid gap-10 lg:grid-cols-2">
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-[#111111] mb-4">Thuraiyur Road supply areas</h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        {DELIVERY_HUBS.thuraiyurRoad.map((a) => <AreaChip key={a} name={a} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-[#111111] mb-4">Other Thuraiyur-area supply regions</h3>
                                    <div className="flex flex-wrap gap-2.5">
                                        {DELIVERY_HUBS.otherThuraiyur.map((a) => <AreaChip key={a} name={a} />)}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-[#E8D6B3]/30 border border-[#C9A84C]/25 rounded-2xl px-5 py-4 flex items-start gap-3">
                                <Info size={16} className="text-[#A9863A] mt-0.5 shrink-0" aria-hidden="true" />
                                <p className="text-sm leading-relaxed text-[#2E2E2E]">
                                    <strong>M Sand, P Sand and Aggregates</strong> are generally available within approximately <strong>50 km of Thuraiyur</strong>. <strong>Fly Ash Bricks</strong> are available within approximately <strong>100 km of Thuraiyur</strong>. All deliveries depend on the exact location, the order and availability, and are confirmed by us.
                                    We also serve nearby locations within these ranges — if your village is not listed, please enquire.
                                </p>
                            </div>
                        </article>
                    </Reveal>

                    {/* Perambalur hub */}
                    <Reveal>
                        <article className="glass rounded-[2rem] p-7 md:p-12" aria-labelledby="hub-perambalur">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="h-12 w-12 rounded-2xl bg-[#111111] flex items-center justify-center shrink-0">
                                    <MapPin size={22} className="text-[#C9A84C]" aria-hidden="true" />
                                </span>
                                <div>
                                    <h2 id="hub-perambalur" className="font-heading text-3xl md:text-4xl font-bold text-[#111111]">PERAMBALUR</h2>
                                    <p className="label-caps text-[10px] text-[#C9A84C] mt-1">Service Hub · PIN 621212</p>
                                </div>
                            </div>

                            <h3 className="font-heading text-lg font-bold text-[#111111] mb-4">Perambalur-area supply regions</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {DELIVERY_HUBS.perambalur.map((a) => <AreaChip key={a} name={a} />)}
                            </div>

                            <p className="mt-6 text-sm leading-relaxed text-[#2E2E2E]">
                                These are supplied service regions as provided by the business. Exact delivery availability for your location is
                                always confirmed with us before an order.
                            </p>
                        </article>
                    </Reveal>

                    {/* CTA */}
                    <Reveal>
                        <div className="glass-dark rounded-[2rem] p-8 md:p-12 text-center">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#F8F5EF]">Is your village on the list?</h2>
                            <p className="mt-3 text-[#F8F5EF]/70 text-sm md:text-base max-w-lg mx-auto">
                                Call or WhatsApp us to confirm delivery of M Sand, P Sand, Aggregates or Fly Ash Bricks to your site.
                            </p>
                            <div className="mt-7 flex flex-wrap justify-center gap-4">
                                <a href={PHONE_OFFICE_TEL} className="btn-gold">
                                    <Phone size={15} aria-hidden="true" /> Call {PHONE_OFFICE_DISPLAY}
                                </a>
                                <a
                                    href={whatsappLink('Hello Sri Kumaran Blue Metals & Bricks, could you confirm delivery to my village?')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-glass"
                                >
                                    <MessageCircle size={15} aria-hidden="true" /> Confirm on WhatsApp
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}