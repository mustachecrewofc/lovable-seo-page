import { useInView } from '../../hooks/useInView';

const tagRows = [
  ['Techno', 'House', 'Tech House', 'Melodic Techno', 'Progressive', 'Minimal', 'Afro House'],
  ['Brazil', 'Germany', 'Mexico', 'UK', 'Argentina', 'Italy', 'Spain', 'Japan'],
  ['Beatport Top 100', 'SoundCloud Premiere', 'Distribution', 'Promo Package', 'Worldwide Release'],
  ['Producers', 'DJs', 'Labels', 'Crews', 'Collectives', 'Independent Artists'],
];

function TagRow({ tags, reverse = false }: { tags: string[]; reverse?: boolean }) {
  const doubled = [...tags, ...tags];
  return (
    <div className="relative overflow-hidden w-full py-1.5">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee-${reverse ? 'reverse' : 'forward'} 28s linear infinite`,
        }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-5 py-2 rounded-full text-[#F0EDE6] text-sm font-semibold"
            style={{
              background: 'rgba(245,200,66,0.08)',
              border: '1.5px solid transparent',
              backgroundClip: 'padding-box',
              boxShadow: '0 0 0 1.5px rgba(245,200,66,0.35), inset 0 0 12px rgba(245,200,66,0.06)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function IntroVideoSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[#EEF1F5]"
    >
     <div className="container py-12 md:py-20 flex flex-col items-center">
      <p
        className={`max-w-[560px] text-center text-[#4A4A55] text-base md:text-lg leading-relaxed -tracking-[0.36px] mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        The VA World Cup is more than a compilation —
        it's a global movement uniting underground talent under one banner.
        From <span className="text-[#A8821C] font-semibold">São Paulo</span> to{' '}
        <span className="text-[#A8821C] font-semibold">Berlin</span>, every track is a flag.
      </p>

      <div
        className={`w-full max-w-[960px] transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-[#182B18]"
          style={{
            aspectRatio: '16 / 9',
            background: 'linear-gradient(135deg, #060A06 0%, #0C140C 50%, #1a1408 100%)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,200,66,0.18) 0%, transparent 70%)',
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-center gap-1 py-8">
            {tagRows.map((row, i) => (
              <TagRow key={i} tags={row} reverse={i % 2 === 1} />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#060A06] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#060A06] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#060A06] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060A06] to-transparent z-10 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              type="button"
              aria-label="Watch teaser"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#F5C842] text-2xl md:text-3xl font-black tracking-tight">VA WORLD CUP</span>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#F5C842] flex items-center justify-center group-hover:bg-[#FFD75A] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#060612" className="ml-0.5">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              </div>
              <span className="text-[#728A72] text-sm">Watch teaser</span>
            </button>
          </div>
        </div>
      </div>
     </div>

      <style>{`
        @keyframes marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
