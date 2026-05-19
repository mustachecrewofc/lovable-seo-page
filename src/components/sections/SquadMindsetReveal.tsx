import { useInView } from '../../hooks/useInView';

export default function SquadMindsetReveal() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Green gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 75% at 50% 30%, #F5C842 0%, #4ADE80 28%, #22C55E 58%, #14532d 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container">
        {/* Label */}
        <div className={`mb-4 text-xs font-bold uppercase tracking-[2px] text-[#14532d]/70 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          The secret weapon
        </div>

        {/* Heading */}
        <h2
          className={`font-black text-[#060A06] leading-[0.95] -tracking-[2.5px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}
        >
          1 album purchase.<br /><span className="text-[#F0EDE6]">30 chart votes.</span>
        </h2>

        <p className={`mt-6 max-w-[600px] text-[#060A06]/80 text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Most artists don't know this: on Beatport, when someone buys a VA compilation,
          every single track gets a chart credit — simultaneously.
          That's why a coordinated VA push hits 30× harder than a solo release.
        </p>

        {/* Comparison cards */}
        <div className={`mt-12 flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Solo */}
          <div style={{
            background: 'rgba(6,10,6,0.50)',
            border: '1px solid rgba(240,237,230,0.15)',
            borderRadius: '20px',
            padding: '36px 32px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,237,230,0.4)' }}>
              Solo release
            </div>
            <div style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 900, color: 'rgba(240,237,230,0.3)', lineHeight: 1, letterSpacing: '-3px' }}>
              1
            </div>
            <div style={{ fontSize: '15px', color: 'rgba(240,237,230,0.45)', lineHeight: 1.5 }}>
              chart credit per purchase.<br />One voice. Easy to ignore.
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', flexWrap: 'wrap', paddingTop: '8px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'rgba(240,237,230,0.2)' }} />
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px', minWidth: '60px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(90deg)' }} className="md:[transform:rotate(0deg)]">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#060A06" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* VA */}
          <div style={{
            background: 'rgba(6,10,6,0.65)',
            border: '1px solid #22C55E',
            borderRadius: '20px',
            padding: '36px 32px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 50px rgba(34,197,94,0.20)',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#22C55E' }}>
              Mustache Gang World Cup 2026
            </div>
            <div style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 900, color: '#22C55E', lineHeight: 1, letterSpacing: '-3px' }}>
              30
            </div>
            <div style={{ fontSize: '15px', color: '#F0EDE6', lineHeight: 1.5 }}>
              chart credits per purchase.<br />Thirty voices — all at once.
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', flexWrap: 'wrap', paddingTop: '8px' }}>
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#22C55E', opacity: 0.6 + (i % 3) * 0.13 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Insight callout */}
        <div className={`mt-8 rounded-2xl border border-[#060A06]/20 bg-[#060A06]/40 px-6 py-5 backdrop-blur-sm transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-start gap-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <p className="font-semibold text-[#F0EDE6] text-sm">Why this matters for you</p>
              <p className="text-[#F0EDE6]/65 text-sm mt-1 leading-relaxed">
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
