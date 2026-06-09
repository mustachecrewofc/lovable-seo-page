import { useState, useEffect } from 'react';

const VIDEO_ID = 'rh2MzkDRtLY';

function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#020504]/90 backdrop-blur-2xl" />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        style={{ background: 'rgba(240,237,230,0.10)', border: '1px solid rgba(240,237,230,0.15)' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(240,237,230,0.18)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(240,237,230,0.10)')}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F0EDE6" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      {/* Video */}
      <div
        className="relative z-10 w-full max-w-[960px] rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(240,237,230,0.08)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Mustache Gang World Cup 2026 — VA Breakdown"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="relative bg-[#060A06] overflow-hidden">

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden="true"
        />

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.13) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />

        <section className="relative z-10 flex flex-col items-center text-center px-4 pt-28 pb-20 md:pt-36 md:pb-28">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/08 text-[#22C55E] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>30 Artists · Coordinated Chart Push · World Cup Edition</span>
          </div>

          {/* Title */}
          <h1
            className="font-black text-[#F0EDE6] leading-[0.9] -tracking-[3px] md:-tracking-[5px]"
            style={{ fontSize: 'clamp(52px, 10vw, 140px)' }}
          >
            MUSTACHE GANG<br />
            <span className="text-[#22C55E]">WORLD CUP VA</span>
          </h1>

          {/* Video thumbnail */}
          <div className="mt-14 w-full max-w-[820px]">
            <button
              onClick={() => setModalOpen(true)}
              aria-label="Watch the VA breakdown video"
              className="group relative w-full block rounded-2xl overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
              style={{
                boxShadow: '0 0 0 1px rgba(34,197,94,0.25), 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(34,197,94,0.10)',
                transition: 'box-shadow 0.35s ease, transform 0.35s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.boxShadow = '0 0 0 1px rgba(34,197,94,0.50), 0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(34,197,94,0.20)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.boxShadow = '0 0 0 1px rgba(34,197,94,0.25), 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(34,197,94,0.10)';
                el.style.transform = 'translateY(0)';
              }}
            >
              {/* Thumbnail */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Watch: Mustache Gang World Cup 2026 VA Breakdown"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: 'rgba(6,10,6,0.45)' }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{
                      width: '72px',
                      height: '72px',
                      background: 'rgba(240,237,230,0.12)',
                      border: '1.5px solid rgba(240,237,230,0.30)',
                      backdropFilter: 'blur(16px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.40)',
                    }}
                  >
                    {/* Triangle play icon */}
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="#F0EDE6" style={{ marginLeft: '3px' }}>
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div
                  className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold text-[#F0EDE6]"
                  style={{ background: 'rgba(6,10,6,0.75)', backdropFilter: 'blur(8px)' }}
                >
                  Watch the full breakdown
                </div>
              </div>
            </button>
          </div>

          {/* Hook — connects to the rest of the page */}
          <div className="mt-10 flex flex-col items-center gap-5 max-w-[560px]">
            <p className="text-[#728A72] text-base md:text-lg leading-relaxed">
              Everything about the campaign is below —<br className="hidden md:block" />
              the strategy, the proof, and every detail you need to decide.
            </p>

            <a
              href="/submit"
              className="h-[48px] flex items-center px-7 rounded-full bg-[#F5C842] text-base font-bold text-[#060612] transition-colors hover:bg-[#FFD75A] focus-visible:ring-2 focus-visible:ring-[#F5C842]/60 focus-visible:outline-none"
            >
              Send Your Demo →
            </a>

            <p className="text-sm text-[#728A72]">
              Submit by <span className="text-[#22C55E] font-semibold">July 10</span>
              &nbsp;·&nbsp;
              Releases <span className="text-[#F5C842] font-semibold">July 17, 2026</span>
            </p>

            {/* Scroll cue */}
            <div className="mt-2 flex flex-col items-center gap-1.5 opacity-40">
              <span className="text-[10px] uppercase tracking-[2.5px] text-[#728A72]">scroll to explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#728A72" strokeWidth="2" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

        </section>
      </div>

      {/* Video modal */}
      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
