import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';
import {
    NAV_LINKS, PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, PHONE_PERSONAL_TEL,
    PHONE_PERSONAL_DISPLAY, MAPS_LINK, INSTAGRAM, LOCATION, HOURS, HERITAGE,
} from '@/lib/siteData';

function GratitudeCredit() {
    const reduce = useReducedMotion();
    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                animate={reduce ? undefined : { boxShadow: ['0 0 0px rgba(201,168,76,0)', '0 0 22px rgba(201,168,76,0.4)', '0 0 0px rgba(201,168,76,0)'] }}
                transition={reduce ? undefined : { duration: 2.8, repeat: Infinity }}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 px-5 py-2 text-xs text-[#E8D6B3]"
            >
                With gratitude to{' '}
                <motion.span
                    animate={reduce ? undefined : { opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                    className="gold-text font-heading font-bold text-sm"
                >
                    Sivarajan Stalin
                </motion.span>
                , great web developer.
            </motion.div>
        </motion.div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-[#F8F5EF] mt-0" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20 grid gap-10 md:grid-cols-3">
                <div>
                    <h2 className="font-heading text-2xl font-bold gold-text">Sri Kumaran Blue Metals &amp; Bricks</h2>
                    <p className="mt-4 text-sm leading-relaxed text-[#E8D6B3]/80 max-w-xs">{HERITAGE}</p>
                    <p className="mt-3 text-sm text-[#F8F5EF]/60">Serving builders and home constructors around Kilakuvadi Village and Thuraiyur, Tamil Nadu, since 1970.</p>
                </div>

                <nav aria-label="Footer">
                    <h3 className="label-caps text-[10px] text-[#C9A84C] mb-4">Explore</h3>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                        {NAV_LINKS.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="text-sm text-[#F8F5EF]/75 hover:text-[#C9A84C] transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h3 className="label-caps text-[10px] text-[#C9A84C] mt-8 mb-4">Connect</h3>
                    <div className="flex flex-col gap-2.5">
                        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#F8F5EF]/75 hover:text-[#C9A84C] transition-colors">
                            <Instagram size={15} className="text-[#C9A84C]" aria-hidden="true" /> kumaran_buliding_materials
                        </a>
                        <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#F8F5EF]/75 hover:text-[#C9A84C] transition-colors">
                            <MapPin size={15} className="text-[#C9A84C]" aria-hidden="true" /> Google Maps <ExternalLink size={11} aria-hidden="true" />
                        </a>
                    </div>
                </nav>

                <div>
                    <h3 className="label-caps text-[10px] text-[#C9A84C] mb-4">Contact</h3>
                    <ul className="flex flex-col gap-3 text-sm text-[#F8F5EF]/75">
                        <li>
                            <a href={PHONE_OFFICE_TEL} className="inline-flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                                <Phone size={15} className="text-[#C9A84C]" aria-hidden="true" /> Office / WhatsApp: {PHONE_OFFICE_DISPLAY}
                            </a>
                        </li>
                        <li>
                            <a href={PHONE_PERSONAL_TEL} className="inline-flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                                <Phone size={15} className="text-[#C9A84C]" aria-hidden="true" /> Surya Prakash: {PHONE_PERSONAL_DISPLAY}
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin size={15} className="text-[#C9A84C] mt-0.5 shrink-0" aria-hidden="true" /> {LOCATION}
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={15} className="text-[#C9A84C]" aria-hidden="true" /> {HOURS}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="glass-divider max-w-5xl mx-auto" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col items-center gap-3 text-[11px] text-[#F8F5EF]/45 text-center">
                <p>© {new Date().getFullYear()} Sri Kumaran Blue Metals &amp; Bricks. All rights reserved.</p>
                <GratitudeCredit />
            </div>
        </footer>
    );
}