import { useState, useCallback } from 'react';
import { Camera } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import Lightbox from '@/components/gallery/Lightbox';
import { GALLERY_ITEMS } from '@/lib/siteData';
import { useSeo } from '@/lib/seo';

const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'blue-metals', label: 'Blue Metals' },
    { id: 'machinery', label: 'Machinery' },
    { id: 'bricks', label: 'Bricks' },
];

export default function Gallery() {
    useSeo(
        'Our Gallery | Sri Kumaran Blue Metals & Bricks — Yard, Quarry & Materials',
        'Photo gallery from the Sri Kumaran Blue Metals & Bricks yard and quarry in Thuraiyur: M Sand, P Sand, Aggregates, Fly Ash Bricks and machinery at work.',
    );

    const [filter, setFilter] = useState('all');
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const shown = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter);
    const navigate = useCallback((dir) => {
        setLightboxIndex((i) => (i == null ? i : (i + dir + shown.length) % shown.length));
    }, [shown.length]);

    return (
        <div>
            <PageHero
                eyebrow="Our Gallery"
                title="From the Yard & Quarry"
                description="Real photos from our yard, crushing plant and quarry — materials and machinery at work."
                center
            />

            <section className="py-14 md:py-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-wrap items-center gap-3 mb-10" role="group" aria-label="Filter gallery by category">
                            {FILTERS.map((f) => (
                                <button
                                    key={f.id}
                                    type="button"
                                    onClick={() => setFilter(f.id)}
                                    aria-pressed={filter === f.id}
                                    className={`label-caps text-[10px] px-5 py-2.5 rounded-full transition-all duration-300 ${filter === f.id ? 'btn-gold' : 'glass text-[#2E2E2E] hover:text-[#C9A84C]'
                                        }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    {shown.length === 0 ? (
                        <p className="text-center text-[#2E2E2E] py-16">No photos in this category yet.</p>
                    ) : (
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
                            {shown.map((item) => {
                                return (
                                    <Reveal key={item.src} className="mb-4 break-inside-avoid">
                                        <button
                                            type="button"
                                            onClick={() => setLightboxIndex(shown.indexOf(item))}
                                            aria-label={`Open photo: ${item.caption}`}
                                            className="group relative block w-full rounded-2xl overflow-hidden ring-1 ring-[#C9A84C]/25 hover:ring-[#C9A84C]/60 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]"
                                        >
                                            {item.type === 'video' ? (
                                                <video
                                                    src={item.src}
                                                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                                                    muted
                                                    loop
                                                    playsInline
                                                    autoPlay
                                                    preload="metadata"
                                                />
                                            ) : (
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                                                />
                                            )}
                                            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111]/85 to-transparent p-4 pt-10 text-left">
                                                <span className="flex items-center gap-1.5 label-caps text-[9px] text-[#C9A84C] mb-1">
                                                    <Camera size={10} aria-hidden="true" /> View
                                                </span>
                                                <span className="block font-heading italic text-[13px] leading-snug text-[#F8F5EF]">
                                                    {item.caption}
                                                </span>
                                            </span>
                                        </button>
                                    </Reveal>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {lightboxIndex !== null && (
                <Lightbox
                    items={shown}
                    index={Math.min(lightboxIndex ?? 0, shown.length - 1)}
                    onClose={() => setLightboxIndex(null)}
                    onNavigate={navigate}
                />
            )}
        </div>
    );
}