import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import {
    IMG, NAV_LINKS, PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, PHONE_OFFICE_RAW,
    PHONE_PERSONAL_TEL, PHONE_PERSONAL_DISPLAY,
    MAPS_LINK, LOCATION_SHORT, HOURS, whatsappLink,
} from '@/lib/siteData';

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    const navClass = ({ isActive }) =>
        `label-caps text-[11px] transition-colors duration-300 ${isActive ? 'gold-text' : 'text-[#2E2E2E] hover:text-[#C9A84C]'
        }`;

    return (
        <header className="sticky top-0 z-50">
            <div className="glass border-b border-[#C9A84C]/25">
                {/* Row 1 — brand + both contact lines */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Sri Kumaran Blue Metals & Bricks — Home">
                        <Image
                            src={IMG.logoBlueMetals}
                            alt="Kumaran Blue Metals logo, since 1970"
                            className="h-10 w-10 md:h-12 md:w-12 rounded-lg"
                            fittingType="fit"
                        />
                        <Image
                            src={IMG.logoBricks}
                            alt="Kumaran Bricks logo"
                            className="h-10 w-10 md:h-12 md:w-12 rounded-lg"
                            fittingType="fit"
                        />
                        <span className="hidden sm:flex flex-col leading-tight ml-1">
                            <span className="font-heading font-bold text-[15px] md:text-lg text-[#111111]">Sri Kumaran</span>
                            <span className="label-caps text-[9px] text-[#C9A84C]">Blue Metals &amp; Bricks</span>
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-7">
                        <a
                            href={PHONE_PERSONAL_TEL}
                            className="group flex items-center gap-3"
                            aria-label="Surya Prakash — call +91 63832 57570"
                        >
                            <span className="h-9 w-9 rounded-full glass flex items-center justify-center shrink-0">
                                <Phone size={14} className="text-[#C9A84C]" aria-hidden="true" />
                            </span>
                            <span className="flex flex-col leading-tight">
                                <span className="label-caps text-[8px] text-[#2E2E2E] group-hover:text-[#C9A84C] transition-colors">Surya Prakash</span>
                                <span className="font-heading text-[15px] font-bold text-[#111111]">{PHONE_PERSONAL_DISPLAY}</span>
                            </span>
                        </a>
                        <span className="h-8 w-px bg-[#C9A84C]/30" aria-hidden="true" />
                        <a
                            href={PHONE_OFFICE_TEL}
                            className="group flex items-center gap-3"
                            aria-label="Office and WhatsApp — call +91 98428 66389"
                        >
                            <span className="h-9 w-9 rounded-full glass flex items-center justify-center shrink-0">
                                <MessageCircle size={14} className="text-[#C9A84C]" aria-hidden="true" />
                            </span>
                            <span className="flex flex-col leading-tight">
                                <span className="label-caps text-[8px] text-[#2E2E2E] group-hover:text-[#C9A84C] transition-colors">Office / WhatsApp</span>
                                <span className="font-heading text-[15px] font-bold text-[#111111]">{PHONE_OFFICE_DISPLAY}</span>
                            </span>
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-expanded={open}
                        aria-label="Open menu"
                        className="lg:hidden p-2.5 rounded-full glass"
                    >
                        <Menu size={20} className="text-[#111111]" aria-hidden="true" />
                    </button>
                </div>

                {/* Row 2 — the status bar */}
                <div className="hidden md:flex items-center justify-center gap-10 lg:gap-16 py-3.5 bg-[#111111] label-caps text-[10px] text-[#E8D6B3]">
                    <a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-[#C9A84C] transition-colors"
                    >
                        <MapPin size={12} className="text-[#C9A84C]" aria-hidden="true" />
                        {LOCATION_SHORT} — Find us on Google Maps
                    </a>
                    <span className="h-1 w-1 rounded-full bg-[#C9A84C]/60" aria-hidden="true" />
                    <span className="inline-flex items-center gap-2">
                        <Clock size={12} className="text-[#C9A84C]" aria-hidden="true" />
                        {HOURS}
                    </span>
                </div>

                {/* Row 3 — primary navigation, below the status bar */}
                <nav aria-label="Primary" className="hidden lg:flex items-center justify-center gap-10 py-3 border-t border-[#C9A84C]/15">
                    {NAV_LINKS.map((link) => (
                        <NavLink key={link.path} to={link.path} className={navClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {open && (
                <div className="fixed inset-0 z-[70] bg-[#F8F5EF]/98 backdrop-blur-xl flex flex-col" role="dialog" aria-modal="true" aria-label="Site menu">
                    <div className="flex items-center justify-between px-4 h-16">
                        <span className="label-caps text-[10px] text-[#C9A84C]">Menu</span>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="p-2.5 rounded-full glass"
                        >
                            <X size={20} className="text-[#111111]" aria-hidden="true" />
                        </button>
                    </div>
                    <nav aria-label="Mobile" className="flex-1 flex flex-col items-center justify-center gap-5 px-6">
                        {NAV_LINKS.map((link, i) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `font-heading text-2xl font-bold ${isActive ? 'gold-text' : 'text-[#111111]'}`
                                }
                                style={{ transitionDelay: `${i * 40}ms` }}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="px-6 pb-10 flex flex-col items-center gap-3">
                        <div className="glass-divider w-40 mb-1" />
                        <a href={PHONE_PERSONAL_TEL} className="btn-gold w-64 justify-center">
                            <Phone size={15} aria-hidden="true" /> Call {PHONE_PERSONAL_DISPLAY}
                        </a>
                        <a
                            href={whatsappLink('Hello Sri Kumaran Blue Metals & Bricks, I have an enquiry.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glass w-64 justify-center"
                        >
                            <MessageCircle size={15} aria-hidden="true" /> WhatsApp Us
                        </a>
                        <p className="label-caps text-[10px] text-[#2E2E2E] mt-2">{HOURS}</p>
                    </div>
                </div>
            )}
        </header>
    );
}