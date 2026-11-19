import { MessageCircle, Instagram } from 'lucide-react';
import { WHATSAPP, INSTAGRAM } from '@/lib/siteData';

export default function FloatingButtons() {
    return (
        <div className="fixed left-3 bottom-5 md:left-6 md:bottom-8 z-40 flex flex-col gap-3">
            <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="group relative h-12 w-12 md:h-14 md:w-14 rounded-full glass-float flex items-center justify-center"
            >
                <span
                    className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] label-caps bg-[#111111] text-[#E8D6B3] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 hidden md:block"
                    role="tooltip"
                >
                    Chat with us on WhatsApp.
                </span>
                <MessageCircle size={22} className="text-[#C9A84C]" aria-hidden="true" />
            </a>
            <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="group relative h-10 w-10 md:h-12 md:w-12 rounded-full glass-float flex items-center justify-center"
            >
                <Instagram size={18} className="text-[#C9A84C]" aria-hidden="true" />
            </a>
        </div>
    );
}