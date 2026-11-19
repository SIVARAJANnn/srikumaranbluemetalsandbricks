import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onNavigate }) {
    const openerRef = useRef(null);
    const closeRef = useRef(null);
    const touchStartX = useRef(null);
    const item = items[index];

    useEffect(() => {
        openerRef.current = document.activeElement;
        closeRef.current?.focus();
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNavigate(1);
            if (e.key === 'ArrowLeft') onNavigate(-1);
        };
        window.addEventListener('keydown', handleKey);
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = previousOverflow;
            openerRef.current?.focus?.();
        };
    }, [onClose, onNavigate]);

    const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartX.current == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) onNavigate(delta < 0 ? 1 : -1);
        touchStartX.current = null;
    };

    return (
        <div
            className="fixed inset-0 z-[80] bg-[#111111]/95 backdrop-blur-md flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${item.caption}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
                <p className="label-caps text-[10px] text-[#C9A84C]">
                    {index + 1} / {items.length}
                </p>
                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close photo viewer"
                    className="p-3 rounded-full glass-dark hover:scale-105 transition-transform"
                >
                    <X size={20} className="text-[#F8F5EF]" aria-hidden="true" />
                </button>
            </div>

            <div className="flex-1 relative flex items-center justify-center px-4 md:px-16 min-h-0">
                {items.length > 1 && (
                    <button
                        type="button"
                        onClick={() => onNavigate(-1)}
                        aria-label="Previous photo"
                        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass-dark hover:scale-105 transition-transform"
                    >
                        <ChevronLeft size={20} className="text-[#F8F5EF]" aria-hidden="true" />
                    </button>
                )}
                {item.type === 'video' ? (
                    <video
                        key={item.src}
                        src={item.src}
                        controls
                        autoPlay
                        playsInline
                        className="max-h-full max-w-full rounded-2xl ring-1 ring-[#C9A84C]/30 shadow-2xl"
                    />
                ) : (
                    <img
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        className="max-h-full max-w-full object-contain rounded-2xl ring-1 ring-[#C9A84C]/30 shadow-2xl"
                    />
                )}
                {items.length > 1 && (
                    <button
                        type="button"
                        onClick={() => onNavigate(1)}
                        aria-label="Next photo"
                        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass-dark hover:scale-105 transition-transform"
                    >
                        <ChevronRight size={20} className="text-[#F8F5EF]" aria-hidden="true" />
                    </button>
                )}
            </div>

            <div className="px-6 md:px-16 py-5 text-center">
                <p className="font-heading italic text-sm md:text-base text-[#E8D6B3] max-w-2xl mx-auto">{item.caption}</p>
            </div>
        </div>
    );
}