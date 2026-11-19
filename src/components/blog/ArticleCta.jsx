import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_OFFICE_TEL, PHONE_OFFICE_DISPLAY, whatsappLink } from '@/lib/siteData';

export default function ArticleCta({ message }) {
    return (
        <div className="mt-10 glass-dark rounded-[1.5rem] p-7 md:p-9 text-center">
            <p className="font-heading text-lg md:text-xl text-[#F8F5EF] max-w-xl mx-auto">{message}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a href={PHONE_OFFICE_TEL} className="btn-gold">
                    <Phone size={14} aria-hidden="true" /> Call {PHONE_OFFICE_DISPLAY}
                </a>
                <a
                    href={whatsappLink('Hello Sri Kumaran Blue Metals & Bricks, I have a question after reading one of your articles.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                >
                    <MessageCircle size={14} aria-hidden="true" /> WhatsApp Us
                </a>
            </div>
        </div>
    );
}