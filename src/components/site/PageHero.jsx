import Reveal from '@/components/site/Reveal';

export default function PageHero({ eyebrow, title, description, center = false }) {
    return (
        <section className="relative overflow-hidden bg-[#111111] text-[#F8F5EF]">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, #C9A84C 0, transparent 45%), radial-gradient(circle at 85% 70%, #E8D6B3 0, transparent 40%)`,
                }}
            />
            <div className={`relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 ${center ? 'text-center' : ''}`}>
                <Reveal className={center ? 'flex flex-col items-center' : ''}>
                    {eyebrow && <p className="label-caps text-[10px] text-[#C9A84C] mb-4">{eyebrow}</p>}
                    <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight max-w-3xl">{title}</h1>
                    {description && <p className="mt-5 max-w-2xl text-base md:text-lg text-[#F8F5EF]/70 leading-relaxed">{description}</p>}
                    <div className={`glass-divider mt-10 max-w-xl ${center ? 'mx-auto' : ''}`} />
                </Reveal>
            </div>
        </section>
    );
}