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
              'radial-gradient(ellipse 90% 75% at 50% 30%, #F5C842 0%, #4ADE80 28%, #22C55E 58%, #14532d 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container flex h-screen flex-col items-center px-6 pb-8 pt-[16vh] text-center">
          <div className="max-w-5xl flex-1 flex flex-col">
            {/* Label */}
            <div className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#14532d]/70">
              The Squad
            </div>

            <h2
              className="font-black text-[#060A06] leading-[0.95]"
              style={{ fontSize: 'clamp(38px, 6vw, 96px)' }}
            >
              30 artists.<br/><span className="text-[#F0EDE6]">One heartbeat.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-[#060A06]/85 md:text-[20px]">
              When 30 artists push simultaneously — same week, same energy, same goal —
              the algorithm notices. That's not theory. That's the mechanic we've exploited three times already.
            </p>

            {/* Math card */}
            <div className="mx-auto mt-6 w-full max-w-[860px] rounded-2xl border border-[#060A06]/20 bg-[#060A06]/30 p-5 text-left backdrop-blur-sm md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F0EDE6]">
                The math behind the mission
              </p>
              <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#F0EDE6] md:text-[26px]">
                Momentum becomes math — not luck.
              </h3>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-[#F0EDE6]/15 bg-[#060A06]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">
                    Minimum baseline
                  </p>
                  <p className="mt-1.5 text-[#F0EDE6]/80 text-[13px]">
                    30 artists × 1 purchase each
                  </p>
                  <p className="mt-2 text-xl font-black text-[#22C55E]">= 900 chart votes</p>
                  <p className="mt-1 text-[11px] text-[#F0EDE6]/50">at 30× multiplier per album</p>
                </div>
                <div className="rounded-xl border border-[#F5C842]/30 bg-[#060A06]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F5C842]/70">
                    With squad support
                  </p>
                  <p className="mt-1.5 text-[#F0EDE6]/80 text-[13px]">
                    Each artist mobilises 10 fans
                  </p>
                  <p className="mt-2 text-xl font-black text-[#F5C842]">= 9,000+ chart votes</p>
                  <p className="mt-1 text-[11px] text-[#F0EDE6]/50">same release week</p>
                </div>
                <div className="rounded-xl border border-[#F0EDE6]/15 bg-[#060A06]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">
                    EDMArmy + SoundCloud
                  </p>
                  <p className="mt-1.5 text-[#F0EDE6]/80 text-[13px]">
                    300k + 2M external reach
                  </p>
                  <p className="mt-2 text-xl font-black text-[#22C55E]">Velocity spike</p>
                  <p className="mt-1 text-[11px] text-[#F0EDE6]/50">exactly when it matters</p>
                </div>
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-[#F0EDE6]/70 md:text-sm">
                That concentrated pressure in a single 7-day window is exactly what Beatport's algorithm rewards.
                One artist can't create it. <span className="text-[#22C55E] font-semibold">A squad can.</span>
              </p>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-center">
              <img src={logoWhite} alt="Mustache Crew" className="h-10 w-auto invert md:h-12" />
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
          background: '#060A06',
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
