import logoWhite from '@/assets/mustache-crew-white.png';

/**
 * Sticky scroll reveal — same pattern as HeroBg, but compact.
 * BACK (sticky): bright Squad Mindset hero, gives strong contrast.
 * FRONT (absolute top): dark layer that fades to transparent + glowing
 * edge at the bottom so the reveal line is clearly visible against the
 * already-dark proof section.
 */
export default function SquadMindsetReveal() {
  return (
    <div style={{ position: 'relative', height: '90vh' }}>
      {/* BACK LAYER — sticky, bright gradient stays pinned */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '60vh',
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
              'radial-gradient(ellipse 80% 70% at 50% 50%, #F5C842 0%, #E63B2E 45%, #7c1d1d 90%)',
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
          <p className="mt-4 text-[#F0EDE6]/85 text-base md:text-lg max-w-[560px] mx-auto leading-relaxed">
            30 artists working as one coordinated squad, aiming for Beatport chart positions.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <img src={logoWhite} alt="Mustache Crew" className="h-12 w-auto invert" />
          </div>
        </div>
      </div>

      {/* FRONT LAYER — short dark cover with glowing edge so the
          reveal line is visible even against the dark proof bg above. */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '35vh',
          zIndex: 10,
          background:
            'linear-gradient(to bottom, #0A0A0F 0%, #0A0A0F 70%, rgba(10,10,15,0.6) 100%)',
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
        {/* Glowing edge at the bottom — the visible "reveal line" */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background:
              'linear-gradient(90deg, transparent, #F5C842 50%, transparent)',
            boxShadow: '0 0 20px 4px rgba(245,200,66,0.6)',
          }}
        />
      </div>
    </div>
  );
}
