import { useInView } from '../../hooks/useInView';

const items = [
  'Professional release on Beatport, Spotify, Apple Music, and all major platforms',
  '360° promo campaign: social media, DJ sets, press outreach, playlist pitching',
  'Private Telegram squad with coordinated strategy, content calendars, and real-time guidance',
  'Full media kit: professional artwork, press materials, social assets',
  'Coordinated pre-order push + first 72-hour release blitz',
  'Collective momentum of 30 artists pushing together toward Beatport #1 Overall',
];

export default function WhatsIncludedSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container py-20 md:py-28">
      <h2
        className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
      >
        What's <span className="text-[#F5C842]">Included</span>
      </h2>

      <div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
        {items.map((text, i) => (
          <div
            key={i}
            className={`flex gap-4 items-start p-6 md:p-7 rounded-2xl border border-[#2A2A3E] bg-[#13131F] transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: inView ? `${i * 80 + 100}ms` : '0ms' }}
          >
            <div className="shrink-0 w-8 h-8 rounded-full bg-[#F5C842] text-[#0A0A0F] flex items-center justify-center font-black text-sm">
              {i + 1}
            </div>
            <p className="text-base md:text-lg text-[#F0EDE6] leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
