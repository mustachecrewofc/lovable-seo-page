import logoWhite from '@/assets/mustache-crew-white.png';

export default function SquadMindsetReveal() {
  const frontLayerHeight = '72vh';
  const sectionHeight = '172vh';

  return (
    <div style={{ position: 'relative', height: sectionHeight }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 90% 75% at 50% 30%, #F5C842 0%, #F08A32 28%, #E63B2E 58%, #7c1d1d 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container flex min-h-screen items-start justify-center px-6 pb-24 pt-[22vh] text-center">
          <div className="max-w-5xl">
            <h2
              className="font-black text-[#F0EDE6] leading-[0.95]"
              style={{ fontSize: 'clamp(42px, 7vw, 116px)' }}
            >
              Squad Mindset = <span className="text-[#F5C842]">Chart Potential</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[760px] text-lg leading-relaxed text-[#F0EDE6]/92 md:text-[24px]">
              30 artists moving in sync — one release week, one coordinated push, one shared chart goal on Beatport.
            </p>

            <div className="mx-auto mt-12 max-w-[860px] rounded-2xl border border-[#F0EDE6]/15 bg-black/25 p-6 text-left backdrop-blur-sm md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C842]">
                The Math Behind the Mission
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#F0EDE6] md:text-[32px]">
                Momentum becomes math — not luck.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#F0EDE6]/85 md:text-[17px]">
                With 30 committed artists executing together, every pre-order, DJ support
                slot, and launch-week action lands in the same window. That synchronized
                pressure is the exact ingredient behind real breakout movement on Beatport.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-[#F0EDE6]/10 bg-[#0A0A0F]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">
                    Baseline
                  </p>
                  <p className="mt-2 text-[#F0EDE6] text-sm">
                    30 artists × 1 purchase each
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#F5C842]">= 30 purchases</p>
                </div>
                <div className="rounded-xl border border-[#F0EDE6]/10 bg-[#0A0A0F]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">
                    Squad support
                  </p>
                  <p className="mt-2 text-[#F0EDE6] text-sm">
                    30 artists × 30 purchases each
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#F5C842]">= 900 purchases</p>
                </div>
                <div className="rounded-xl border border-[#F0EDE6]/10 bg-[#0A0A0F]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">
                    Inner circle boost
                  </p>
                  <p className="mt-2 text-[#F0EDE6] text-sm">
                    +5–10 supporters per artist (friends, family, fans)
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#F5C842]">+150–300 more</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#F0EDE6]/70 md:text-base">
                That's concentrated chart pressure — exactly what Beatport's algorithm rewards during release week.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <img src={logoWhite} alt="Mustache Crew" className="h-12 w-auto invert md:h-14" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: frontLayerHeight,
          zIndex: 10,
          overflow: 'hidden',
          background: '#0A0A0F',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.6), transparent)',
          }}
        />
      </div>
    </div>
  );
}
