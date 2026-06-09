import { useInView } from '../../hooks/useInView';

export default function BeatportMultiplierSection() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section className="relative bg-[#060A06] overflow-hidden">
      {/* Gold grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,200,66,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="container py-20 md:py-32 relative z-10"
      >
        {/* Label */}
        <div className={`mb-4 text-xs font-bold uppercase tracking-[2px] text-[#728A72] transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          The secret weapon
        </div>

        {/* Heading */}
        <h2
          className={`font-black text-[#F0EDE6] leading-[1.0] -tracking-[2.5px] transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}
        >
          1 album purchase.<br/><span className="text-[#22C55E]">30 tracks pushed.</span>
        </h2>

        <p className={`mt-6 max-w-[600px] text-[#C4C2B8] text-base md:text-lg leading-relaxed transition-all duration-700 delay-150 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Most artists don't know this: on Beatport, when someone buys a VA compilation,
          every single track in that album gets a chart credit — simultaneously.
          That's the multiplier. That's why a coordinated VA push hits 30× harder than a solo release.
        </p>

        {/* Visual: each artist's part + the collective */}
        <div className={`mt-14 flex flex-col md:flex-row items-stretch gap-5 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Block A — Your track */}
          <div
            style={{
              background: '#0C140C',
              border: '1px solid #182B18',
              borderRadius: '20px',
              padding: '36px 32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#728A72' }}>
              Your track — day one
            </div>
            <div style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 900, color: '#22C55E', lineHeight: 1, letterSpacing: '-3px' }}>
              30
            </div>
            <div style={{ fontSize: '15px', color: '#F0EDE6', lineHeight: 1.6 }}>
              unique sales credited to your track<br/>before you reach a single fan.
            </div>
            <p style={{ fontSize: '13px', color: '#728A72', lineHeight: 1.5 }}>
              All 30 co-artists buy the album on launch day. Each purchase credits your track. You start with momentum — not from zero.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#22C55E', opacity: 0.55 + (i % 4) * 0.1 }} />
              ))}
            </div>
          </div>

          {/* Plus connector */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px', minWidth: '48px' }}>
            <span style={{ fontSize: '32px', fontWeight: 900, color: '#F5C842', lineHeight: 1 }}>+</span>
          </div>

          {/* Block B — The album */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0F2A0F 0%, #0C140C 100%)',
              border: '1px solid #22C55E',
              borderRadius: '20px',
              padding: '36px 32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 0 40px rgba(34,197,94,0.12)',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#22C55E' }}>
              The album — collective push
            </div>
            <div style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 900, color: '#F5C842', lineHeight: 1, letterSpacing: '-3px' }}>
              900
            </div>
            <div style={{ fontSize: '15px', color: '#F0EDE6', lineHeight: 1.6 }}>
              unique album sales when every artist<br/>activates their audience.
            </div>
            <p style={{ fontSize: '13px', color: '#728A72', lineHeight: 1.5 }}>
              30 artists × 30 fans each = 900 sales for the album. One coordinated climb. The chart doesn't know what hit it.
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#F5C842', opacity: 0.6 + (i % 3) * 0.13 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Insight callout */}
        <div className={`mt-10 bg-[#0C140C] border border-[#182B18] rounded-2xl px-6 py-5 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-start gap-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <p className="font-semibold text-[#F0EDE6] text-sm">Why this matters for you</p>
              <p className="text-[#728A72] text-sm mt-1 leading-relaxed">
                Every fan, every DJ, every person who buys the VA — they're voting for your track 30 times without knowing it.
                That's collective velocity. That's why VA campaigns consistently outperform solo releases on Beatport.{' '}
                <span className="text-[#22C55E] font-medium">We've done this three times. The charts don't lie.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
