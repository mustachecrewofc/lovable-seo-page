export default function HeroSection() {
  return (
    <div className="relative bg-[#0A0A0F] overflow-hidden">
      {/* YouTube background video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <iframe
          title="VA World Cup background"
          src="https://www.youtube.com/embed/tO_JQgsaZno?autoplay=1&mute=1&loop=1&playlist=tO_JQgsaZno&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
          style={{ border: 0, opacity: 0.25 }}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-[#0A0A0F]/55" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] z-[1] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[32px] grid grid-rows-[1fr_auto] lg:grid-rows-[1fr_auto_1fr] relative z-10 min-h-[680px] lg:min-h-[760px]">
        <div className="hidden lg:block" />

        {/* Main content */}
        <div className="pt-[100px] lg:pt-0 pb-4 flex flex-col items-center">
          {/* Badge */}
          <div className="mt-12 lg:mt-0 mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5C842]/40 bg-[#F5C842]/10 text-[#F5C842] text-sm font-medium">
            <span>⚽</span>
            <span>VA World Cup 2026 · 30 Spots Max · Beatport Chart Mission</span>
          </div>

          <h1 className="self-center text-center font-black text-[#F0EDE6] text-5xl leading-[54px] tracking-tight md:text-[96px] md:leading-[100px] md:-tracking-[2.5px] lg:pb-12 lg:text-[140px] lg:leading-[130px] lg:-tracking-[5px] [text-wrap:balance]">
            VA <span className="text-[#F5C842]">/</span> WORLD CUP<br className="hidden lg:block" />
            <span className="text-[#F5C842]"> 2026</span>
          </h1>
        </div>

        {/* Subtitle + CTA */}
        <div className="pt-8 pb-6 flex flex-col items-start justify-end md:pt-8 md:pb-[55px]">
          <p className="max-w-[520px] -tracking-[0.16px] text-[#C4C2B8] text-base md:text-lg leading-relaxed">
            A coordinated, global chart push built around one thing: execution.
            Mustache Crew leads the full direction — curation, rollout, promo
            architecture, and daily guidance — so the squad can perform like one
            unit and push for Beatport's highest chart positions.
          </p>
          <p className="mt-3 max-w-[520px] text-[#F0EDE6] text-base font-medium">
            Top 10 is the baseline. The top is what we're building toward.
          </p>
          <p className="mt-4 max-w-[520px] text-sm text-[#8A8A9A]">
            ✓ 30 curated spots (max)&nbsp;&nbsp;•&nbsp;&nbsp;✓ 360° promo coordination&nbsp;&nbsp;•&nbsp;&nbsp;✓ World Cup 2026 release window
          </p>
          <a
            href="#submit"
            className="mt-6 h-[48px] flex items-center px-6 rounded-full bg-[#F5C842] text-base font-semibold -tracking-[0.32px] text-[#060612] border-0 transition-colors hover:bg-[#FFD75A] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F5C842]/60 focus-visible:outline-none"
          >
            Submit Your Track →
          </a>
          <p className="mt-4 max-w-[520px] text-sm text-[#8A8A9A]">
            📅 Submissions open now&nbsp;&nbsp;•&nbsp;&nbsp;Lineup locks <span className="text-[#F5C842] font-semibold">August 15, 2026</span>
          </p>
        </div>
      </section>
    </div>
  );
}
