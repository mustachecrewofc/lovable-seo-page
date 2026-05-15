import { useInView } from '../../hooks/useInView';

const includes = [
  'Distribution to 50+ platforms (Beatport, Spotify, Apple Music, SoundCloud, etc.)',
  'Spotify single release under your artist profile (not just the VA)',
  'Full media kit per track (cover art, SoundCloud + Facebook covers)',
  'Individual YouTube video for your track',
  'Individual Instagram Story launch video (16:9 motion design)',
  'Individual pre-save video (16:9 motion design)',
  'Full DJ set with all VA tracks on YouTube + SoundCloud',
  'SoundCloud repost network reach (≈ 2M followers)',
  'Spotify playlist support + editorial submission',
  'Beatport chart mission — coordinated release-week velocity push',
  'Instagram content campaign across the full squad',
  'Blog & press coverage',
  'Daily crew direction from prep through the full promo window',
];

export default function PricingSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="pricing"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,200,66,0.12) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div
          className={`max-w-[860px] mx-auto bg-[#13131F] border border-[#F5C842]/30 rounded-3xl p-8 md:p-14 shadow-[0_30px_80px_-30px_rgba(245,200,66,0.25)] transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#F5C842] font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Investment
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 pb-8 border-b border-[#2A2A3E]">
            <div>
              <h2
                className="font-black text-[#F0EDE6] leading-[0.95] -tracking-[2px]"
                style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
              >
                <span className="text-[#F5C842]">€299</span>
              </h2>
              <p className="mt-2 text-[#F0EDE6] text-lg md:text-xl font-medium -tracking-[0.4px]">
                per accepted track
              </p>
              <p className="mt-2 text-[#8A8A9A] text-sm">
                One-time investment. No hidden fees. No subscriptions.
              </p>
            </div>
            <a
              href="#submit"
              className="h-[52px] flex items-center justify-center px-7 rounded-full bg-[#F5C842] text-[#060612] text-base font-bold hover:bg-[#FFD75A] transition-colors whitespace-nowrap self-start md:self-end"
            >
              Submit Your Track →
            </a>
          </div>

          <p className="text-sm font-semibold text-[#F0EDE6] uppercase tracking-[0.15em] mb-5">
            What's included
          </p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-[15px] text-[#C4C2B8] leading-relaxed">
                <span className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F5C842]/15">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="#F5C842" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-[#2A2A3E] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <div className="flex items-start gap-2 text-sm text-[#8A8A9A] leading-relaxed">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>
                <span className="text-[#F0EDE6] font-medium">Submission is always free.</span>{' '}
                €299 only applies if your track is selected and you choose to join.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}