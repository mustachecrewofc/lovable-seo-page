import { useInView } from '../../hooks/useInView';

export default function SquadMindsetReveal() {
  const { ref, inView } = useInView({ threshold: 0.08 });

  const anim = (delay: number, fromY = 24): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${fromY}px)`,
    transition: `opacity 0.75s ease, transform 0.75s ease`,
    transitionDelay: `${delay}ms`,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-24 md:py-36"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 85% at 50% 15%, #F5C842 0%, #4ADE80 20%, #22C55E 50%, #166534 78%, #060A06 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #060A06)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container">

        {/* Label */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-6 bg-[#14532d]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#14532d]">
            Solo vs VA
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{ ...anim(80, 28), fontSize: 'clamp(40px, 6vw, 86px)' }}
          className="font-black text-[#060A06] leading-[0.92] -tracking-[3px] max-w-[700px]"
        >
          See the difference<br />
          <span style={{ color: '#F0EDE6' }}>one decision makes.</span>
        </h2>

        {/* Comparison cards */}
        <div
          style={{ ...anim(220) }}
          className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_64px_1fr] items-stretch gap-3 md:gap-0"
        >
          {/* Solo card */}
          <div
            className="rounded-[22px] flex flex-col gap-4 cursor-default"
            style={{
              background: 'rgba(6,10,6,0.52)',
              border: '1px solid rgba(240,237,230,0.10)',
              padding: '40px 36px 36px',
              backdropFilter: 'blur(14px)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-4px)';
              el.style.borderColor = 'rgba(240,237,230,0.22)';
              el.style.background = 'rgba(6,10,6,0.62)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.borderColor = 'rgba(240,237,230,0.10)';
              el.style.background = 'rgba(6,10,6,0.52)';
            }}
          >
            <div className="text-[10px] font-black uppercase tracking-[2.5px]" style={{ color: 'rgba(240,237,230,0.30)' }}>
              Solo release
            </div>

            <div
              className="font-black leading-none"
              style={{ fontSize: 'clamp(72px, 9vw, 108px)', color: 'rgba(240,237,230,0.18)', letterSpacing: '-5px' }}
            >
              1
            </div>

            <div className="text-sm leading-relaxed" style={{ color: 'rgba(240,237,230,0.38)' }}>
              track pushed per purchase.<br />One drop. Lost in the ocean.
            </div>

            {/* What you deal with solo */}
            <div className="mt-2 flex flex-col gap-2">
              {[
                'Only your own audience sees it',
                'Chart impact dies within days',
                'Thousands in ads to replicate any traction',
                'No network. No second wave.',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(240,237,230,0.18)' }} />
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(240,237,230,0.30)' }}>{line}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 flex gap-1.5 flex-wrap">
              <div className="w-[18px] h-[18px] rounded-[3px]" style={{ background: 'rgba(240,237,230,0.14)' }} />
            </div>
          </div>

          {/* VS divider */}
          <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-2 py-3 md:py-0 px-0 md:px-3">
            <div className="flex-1 md:flex-none h-px md:h-12 w-full md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#060A06]/40 to-transparent" />
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '2px',
                color: 'rgba(6,10,6,0.45)',
                textTransform: 'uppercase',
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.6s ease',
                transitionDelay: '500ms',
                flexShrink: 0,
              }}
            >
              vs
            </span>
            <div className="flex-1 md:flex-none h-px md:h-12 w-full md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#060A06]/40 to-transparent" />
          </div>

          {/* VA card */}
          <div
            className="rounded-[22px] flex flex-col gap-4 cursor-default"
            style={{
              background: 'rgba(6,10,6,0.68)',
              border: '1.5px solid #22C55E',
              padding: '40px 36px 36px',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 0 64px rgba(34,197,94,0.20), inset 0 1px 0 rgba(34,197,94,0.12)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 8px 80px rgba(34,197,94,0.32), inset 0 1px 0 rgba(34,197,94,0.18)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 0 64px rgba(34,197,94,0.20), inset 0 1px 0 rgba(34,197,94,0.12)';
            }}
          >
            <div className="text-[10px] font-black uppercase tracking-[2.5px] text-[#22C55E]">
              Mustache Gang World Cup 2026
            </div>

            <div
              className="font-black leading-none"
              style={{
                fontSize: 'clamp(72px, 9vw, 108px)',
                color: '#22C55E',
                letterSpacing: '-5px',
                textShadow: '0 0 48px rgba(34,197,94,0.30)',
              }}
            >
              30
            </div>

            <div className="text-sm leading-relaxed text-[#F0EDE6]">
              tracks pushed per purchase.<br />Thirty tracks. One coordinated climb.
            </div>

            {/* What you get with the VA */}
            <div className="mt-2 flex flex-col gap-2">
              {[
                '30 audiences activated on launch day',
                'Chart momentum compounds across the squad',
                'Organic second wave as the album peaks',
                'Network that stays long after the charts',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(34,197,94,0.60)' }} />
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(240,237,230,0.65)' }}>{line}</p>
                </div>
              ))}
            </div>

            {/* Animated dot grid */}
            <div className="mt-auto pt-4 flex gap-[5px] flex-wrap">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '3px',
                    background: '#22C55E',
                    opacity: inView ? (0.4 + (i % 3) * 0.20) : 0,
                    transform: inView ? 'scale(1)' : 'scale(0.4)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    transitionDelay: `${480 + i * 30}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bridge to next section */}
        <div
          style={{ ...anim(800, 8) }}
          className="mt-10 flex flex-col items-center gap-2 pb-2"
        >
          <p className="text-sm text-[#F0EDE6]/30 text-center">
            Don't take our word for it.
          </p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(240,237,230,0.20)" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

        {/* Inline CTA */}
        <div
          style={{
            ...anim(700, 12),
            background: 'rgba(6,10,6,0.50)',
            border: '1px solid rgba(240,237,230,0.08)',
          }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl"
        >
          <p className="font-semibold text-[#F0EDE6]/70 text-sm text-center sm:text-left">
            Ready to be on the VA card, not the solo one?
          </p>
          <a
            href="/submit"
            className="flex-shrink-0 h-[40px] px-5 rounded-full bg-[#F5C842] text-sm font-bold text-[#060612] hover:bg-[#FFD75A] transition-colors flex items-center gap-2"
          >
            Send Your Demo →
          </a>
        </div>

      </div>
    </section>
  );
}
