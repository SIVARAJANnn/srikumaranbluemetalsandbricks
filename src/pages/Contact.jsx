import { Phone, MessageCircle, MapPin, Clock, Instagram, ExternalLink, HeartPulse } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import EnquiryForm from '@/components/EnquiryForm';
import {
    PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, PHONE_PERSONAL_TEL, PHONE_PERSONAL_DISPLAY,
    WHATSAPP, MAPS_LINK, MAPS_EMBED, DIRECTIONS_LINK, INSTAGRAM, CLOUDPHYSIO,
    LOCATION, HOURS,
} from '@/lib/siteData';
import { useSeo } from '@/lib/seo';

const CARDS = [
    {
        href: PHONE_PERSONAL_TEL,
        icon: Phone,
        title: 'Call Us',
        line1: PHONE_PERSONAL_DISPLAY,
        line2: 'Surya Prakash',
        external: false,
    },
    {
        href: WHATSAPP,
        icon: MessageCircle,
        title: 'WhatsApp',
        line1: PHONE_OFFICE_DISPLAY,
        line2: 'Chat with our team',
        external: true,
    },
    {
        href: MAPS_LINK,
        icon: MapPin,
        title: 'Find Us',
        line1: 'Sri Kumaran Blue Metals',
        line2: 'Open in Google Maps',
        external: true,
    },
    {
        href: INSTAGRAM,
        icon: Instagram,
        title: 'Instagram',
        line1: 'kumaran_buliding_materials',
        line2: 'Follow our work',
        external: true,
    },
];

export default function Contact() {
    useSeo(
        'Contact Us | Sri Kumaran Blue Metals & Bricks, Kilakuvadi Village, Thuraiyur',
        'Call +91 98428 66389, WhatsApp or visit Sri Kumaran Blue Metals & Bricks at 4/12, Kilakuvadi Village, Thuraiyur, Tamil Nadu 621010. Open Monday–Sunday, 7:00 AM–6:00 PM.',
    );

    return (
        <div>
            <PageHero
                eyebrow="Contact Us"
                title="Let's Talk Materials"
                description="Call, WhatsApp, visit or send an enquiry — whichever is fastest for you."
                center
            />

            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {CARDS.map((card, i) => (
                            <Reveal key={card.title} delay={i * 0.07}>
                                <a
                                    href={card.href}
                                    {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="group flex flex-col glass rounded-3xl p-6 h-full hover:shadow-[0_14px_36px_rgba(201,168,76,0.28)] hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="h-12 w-12 rounded-2xl bg-[#111111] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                        <card.icon size={20} className="text-[#C9A84C]" aria-hidden="true" />
                                    </span>
                                    <h2 className="label-caps text-[11px] text-[#2E2E2E]">{card.title}</h2>
                                    <p className="mt-2 font-heading text-lg font-bold text-[#111111] break-words">{card.line1}</p>
                                    <p className="mt-1 text-xs text-[#2E2E2E]">{card.line2}</p>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    {/* Details strip */}
                    <Reveal className="mt-12">
                        <div className="glass-dark rounded-[2rem] p-7 md:p-10 grid gap-6 md:grid-cols-3 text-center md:text-left">
                            <div>
                                <h2 className="label-caps text-[10px] text-[#C9A84C] mb-2.5">Location</h2>
                                <p className="text-sm text-[#F8F5EF]/85">4/12, Kilakuvadi Village<br />Thuraiyur, Tamil Nadu 621010</p>
                                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#C9A84C] hover:text-[#E8D6B3] transition-colors">
                                    View on Google Maps <ExternalLink size={11} aria-hidden="true" />
                                </a>
                            </div>
                            <div>
                                <h2 className="label-caps text-[10px] text-[#C9A84C] mb-2.5">Working Hours</h2>
                                <p className="inline-flex items-center gap-2 text-sm text-[#F8F5EF]/85"><Clock size={14} className="text-[#C9A84C]" aria-hidden="true" /> {HOURS}</p>
                                <p className="mt-3 text-sm text-[#F8F5EF]/70">Surya Prakash: <a href={PHONE_PERSONAL_TEL} className="text-[#E8D6B3] hover:text-[#C9A84C] transition-colors">{PHONE_PERSONAL_DISPLAY}</a></p>
                            </div>
                            <div>
                                <h2 className="label-caps text-[10px] text-[#C9A84C] mb-2.5">Our Family</h2>
                                <a href={CLOUDPHYSIO} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2.5 rounded-2xl border border-[#C9A84C]/55 bg-[#C9A84C]/15 px-4 py-3 text-sm text-[#F8F5EF] hover:bg-[#C9A84C]/25 transition-colors text-left">
                                    <HeartPulse size={16} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" />
                                    <span className="font-semibold">CloudPhysio — our family's physiotherapy clinic<br /><span className="text-xs text-[#E8D6B3]">cloudphysio.co.in</span></span>
                                </a>
                                <p className="mt-3 text-xs text-[#F8F5EF]/55">Dr. Monish. PT (BPT, FOMT (AUSTRALIA) &amp; ABC.)</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Form + Map */}
                    <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
                        <Reveal>
                            <EnquiryForm />
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="glass rounded-[2rem] p-4 md:p-5 h-full flex flex-col">
                                <iframe
                                    title="Map showing Sri Kumaran Blue Metals, Kilakuvadi Village, Thuraiyur"
                                    src={MAPS_EMBED}
                                    className="w-full flex-1 min-h-[340px] rounded-2xl border border-[#C9A84C]/25"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                                <a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer" className="btn-glass mt-4 w-full justify-center">
                                    <MapPin size={14} aria-hidden="true" /> Get Directions
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}