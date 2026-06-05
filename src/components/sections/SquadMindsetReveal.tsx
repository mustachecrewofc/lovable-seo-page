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
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* Multi-layer background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 110% 85% at 50% 15%, #F5C842 0%, #4ADE80 20%, #22C55E 50%, #166534 78%, #060A06 100%)',
        }}
        aria-hidden="true"
      />
      {/* Noise grain for depth */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />
      {/* Bottom fade to dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #060A06)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 container">

        {/* Label — slides in from left */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            transitionDelay: '0ms',
          }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-px w-6 bg-[#14532d]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#14532d]">
            The Beatport trick most artists never learn
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{ ...anim(80, 28), fontSize: 'clamp(46px, 7vw, 100px)' }}
          className="font-black text-[#060A06] leading-[0.92] -tracking-[3px]"
        >
          1 album purchase.<br />
          <span style={{ color: '#F0EDE6', textShadow: '0 2px 48px rgba(6,10,6,0.2)' }}>
            30 chart votes.
          </span>
        </h2>

        {/* Text + Pain card — side by side */}
        <div
          style={{ ...anim(200) }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start"
        >
          {/* Left: explanation paragraphs */}
          <div className="space-y-4">
            <p className="text-[#060A06]/80 text-base md:text-lg leading-relaxed">
              Most artists never figure this out: on Beatport, every VA album sale pushes
              all 30 tracks up the chart — simultaneously. One purchase. Thirty chart credits.
              The algorithm doesn't distinguish. That's not a loophole. That's how it works.
            </p>
            <p className="text-[#060A06]/60 text-base leading-relaxed">
              And when the album peaks, Beatport starts surfacing individual tracks to new listeners.
              Artists in previous Mustache Gang VAs landed{' '}
              <span className="font-semibold text-[#060A06]/85">Top 10 in their genre</span>{' '}
              weeks after launch — with zero additional spend. You don't just get a chart run. You get a second one.
            </p>
          </div>

          {/* Right: pain context card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(6,10,6,0.55)',
              border: '1px solid rgba(240,237,230,0.18)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 4px 24px rgba(6,10,6,0.25)',
            }}
          >
            <div className="flex">
              <div
                className="w-1 flex-shrink-0 rounded-l-2xl"
                style={{ background: 'rgba(240,237,230,0.30)' }}
              />
              <div className="px-5 py-5">
                <p
                  className="font-black text-[10px] uppercase tracking-[2.5px] mb-3"
                  style={{ color: 'rgba(240,237,230,0.55)' }}
                >
                  What actually happens to most artists
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    'You spend months on the track.',
                    'You master it. You release it. You post.',
                    '300 streams the first week. Then 40. Then nothing.',
                    'The algorithm never surfaces it again.',
                  ].map((line, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'rgba(240,237,230,0.40)' }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(240,237,230,0.70)' }}
                      >
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="mt-4 text-xs font-bold border-t pt-3"
                  style={{
                    color: 'rgba(240,237,230,0.45)',
                    borderColor: 'rgba(240,237,230,0.10)',
                  }}
                >
                  Not a talent problem. A numbers problem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison cards */}
        <div
          style={{ ...anim(360) }}
          className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_64px_1fr] items-stretch gap-3 md:gap-0"
        >
          {/* Solo card */}
          <div
            className="group rounded-[22px] flex flex-col gap-4 cursor-default"
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
              chart vote per purchase.<br />One drop. Lost in the ocean.
            </div>
            <div className="mt-auto pt-4 flex gap-1.5 flex-wrap">
              <div
                className="w-[18px] h-[18px] rounded-[3px]"
                style={{ background: 'rgba(240,237,230,0.14)' }}
              />
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
            className="group rounded-[22px] flex flex-col gap-4 cursor-default"
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
              chart votes per purchase.<br />Thirty voices. One coordinated flood.
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

        {/* Insight callout — gold left border accent */}
        <div
          style={{ ...anim(700, 16) }}
          className="mt-6 rounded-2xl border border-[#060A06]/20 bg-[#060A06]/48 backdrop-blur-sm overflow-hidden"
        >
          <div className="flex">
            <div className="w-1 bg-[#F5C842] rounded-l-full flex-shrink-0" />
            <div className="flex items-start gap-4 px-6 py-5">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <p className="font-bold text-[#F0EDE6] text-sm">The math nobody teaches you</p>
                <p className="text-[#F0EDE6]/55 text-sm mt-1 leading-relaxed">
                  30 artists. Each brings their own audience. Every single fan who buys the album
                  casts 30 votes — without knowing it. That's not just momentum.
                  That's a chart position that would cost thousands in ads to replicate on your own.{' '}
                  <span className="text-[#22C55E] font-medium">We've done it three times. The screenshots are on this page.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
