import logoWhite from '@/assets/mustache-crew-white.png';

/**
 * Sticky scroll reveal — same pattern as HeroBg.
 * BACK layer (sticky): the Squad Mindset hero header (revealed).
 * FRONT layer (absolute top): the dark proof background that scrolls
 * UP off the top, uncovering the back. Pure CSS, no JS.
 */
export default function SquadMindsetReveal() {
  return (
    <div style={{ position: 'relative', height: '130vh' }}>
      {/* BACK LAYER — sticky, stays pinned while front scrolls up */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '70vh',
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
              'radial-gradient(ellipse 80% 60% at 50% 0%, #F5C842 0%, #E63B2E 40%, #7c1d1d 80%, #0A0A0F 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 container text-center">
          <h2
            className="font-black text-[#F0EDE6] leading-tight -tracking-[2px]"
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Squad Mindset = <span className="text-[#F5C842]">Chart Potential</span>
          </h2>
          <p className="mt-4 text-[#F0EDE6]/85 text-lg max-w-[560px] mx-auto leading-relaxed">
            30 artists working as one coordinated squad, aiming for Beatport chart positions.
            This is how independent music competes at the highest level.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img src={logoWhite} alt="Mustache Crew" className="h-14 w-auto invert" />
          </div>
        </div>
      </div>

      {/* FRONT LAYER — covers initially, scrolls up to reveal the back */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60vh',
          zIndex: 10,
          background: '#0A0A0F',
          overflow: 'hidden',
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
      </div>
    </div>
  );
}
