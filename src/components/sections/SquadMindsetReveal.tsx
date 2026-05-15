import logoWhite from '@/assets/mustache-crew-white.png';

export default function SquadMindsetReveal() {
  return (
    <div style={{ position: 'relative', height: '110vh' }}>
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

        <div className="relative z-10 container flex min-h-screen items-center justify-center px-6 py-24 text-center">
          <div className="max-w-5xl">
            <h2
              className="font-black text-[#F0EDE6] leading-[0.95]"
              style={{ fontSize: 'clamp(42px, 7vw, 116px)' }}
            >
              Squad Mindset = <span className="text-[#F5C842]">Chart Potential</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[700px] text-lg leading-relaxed text-[#F0EDE6]/92 md:text-[28px]">
              30 artists working as one coordinated squad, aiming for Beatport chart positions.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <img src={logoWhite} alt="Mustache Crew" className="h-14 w-auto invert md:h-16" />
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
          height: '45vh',
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
