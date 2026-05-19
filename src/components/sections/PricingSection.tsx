import { useInView } from '../../hooks/useInView';

const includes = [
  {
    title: 'Worldwide Distribution',
    desc: 'Beatport, Spotify, Apple Music, SoundCloud, Tidal, and 50+ platforms — your track, everywhere.',
  },
  {
    title: 'Spotify Playlist Placement',
    desc: 'Your track pitched to curated playlists in our network — up to 30k saves per playlist.',
  },
  {
    title: 'Full Visual Identity Kit',
    desc: 'Custom cover art, SoundCloud cover, Facebook cover — professional assets built for your track.',
  },
  {
    title: 'Motion Content Package',
    desc: 'Individual YouTube video, Instagram Story launch video, and pre-save video — all 16:9 motion design.',
  },
  {
    title: 'SoundCloud Repost Network',
    desc: '≈ 2 million followers reached through our partner repost network. Real DJs, real discovery.',
  },
  {
    title: 'Beatport Chart Push',
    desc: 'Coordinated release timing, pre-save sync, and day-one velocity — engineered for New Releases and Genre Charts.',
  },
  {
    title: 'Spotify Playlist Network',
    desc: 'Active playlist positioning across our curated Spotify network — playlists with up to 30k saves.',
  },
  {
    title: 'Full Squad Instagram Campaign',
    desc: '30 artists posting the same week, same assets, same energy — combined reach that no solo push can match.',
  },
  {
    title: 'Blog & Press Coverage',
    desc: 'Editorial features timed to release week. Your name in print, not just in algorithms.',
  },
  {
    title: 'VA DJ Set on YouTube + SoundCloud',
    desc: 'A full DJ set featuring every track in the compilation — extra exposure on the platforms DJs actually browse.',
  },
  {
    title: 'Daily War Room Direction',
    desc: 'From pre-save launch to release week, Mustache Crew runs the strategy. You execute. We guide.',
  },
  {
    title: 'Private Squad Telegram',
    desc: 'Direct access to the full lineup. Coordination, assets, schedules, and squad energy — all in one place.',
  },
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
          className={`max-w-[900px] mx-auto bg-[#0C140C] border border-[#F5C842]/30 rounded-3xl p-8 md:p-14 shadow-[0_30px_80px_-30px_rgba(245,200,66,0.25)] transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-[#22C55E] font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Investment
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 pb-10 border-b border-[#182B18]">
            <div className="flex-1">
              <h2
                className="font-black text-[#F0EDE6] leading-[0.95] -tracking-[2px]"
                style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
              >
                <span className="text-[#22C55E]">€299.</span>
              </h2>
              <p className="mt-2 text-[#F0EDE6] text-lg md:text-xl font-medium -tracking-[0.4px]">
                Everything included. Nothing hidden.
              </p>
              <p className="mt-2 text-[#728A72] text-sm max-w-[380px]">
                One Facebook ads campaign won't chart you. One press release won't either.
                This does — because it's coordinated, collective, and backed by a label that's done it before.
              </p>
              <a
                href="/submit"
                className="mt-5 h-[52px] inline-flex items-center justify-center px-7 rounded-full bg-[#F5C842] text-[#060612] text-base font-bold hover:bg-[#FFD75A] transition-colors whitespace-nowrap"
              >
                Submit Free →
              </a>
            </div>
            {/* Crew photo */}
            <div className="flex-shrink-0 self-start md:self-end">
              <div className="relative w-[200px] md:w-[240px] rounded-2xl overflow-hidden border border-[#F5C842]/20 shadow-[0_8px_32px_-8px_rgba(245,200,66,0.20)]">
                <img
                  src="https://mustachecrew.com.br/assets/about-crew-DfaZ6Llw.jpg"
                  alt="Mustache Crew Records team"
                  className="w-full h-[150px] md:h-[175px] object-cover object-top"
                />
                <div className="px-3 py-2 bg-[#0C140C]/90 border-t border-[#182B18]">
                  <p className="text-[10px] font-bold text-[#F5C842] uppercase tracking-[1.5px]">Mustache Crew Records</p>
                  <p className="text-[10px] text-[#728A72] mt-0.5">The team behind 3 chart campaigns</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs font-bold text-[#728A72] uppercase tracking-[0.2em] mb-6">
            What's included
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {includes.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-4 p-4 rounded-xl border border-[#182B18] bg-[#060A06]/60 transition-all duration-500 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: inView ? `${i * 40 + 300}ms` : '0ms' }}
              >
                <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-[#22C55E]/15">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#F0EDE6] -tracking-[0.2px]">{item.title}</p>
                  <p className="mt-0.5 text-xs text-[#728A72] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#182B18] flex items-start gap-2 text-sm text-[#728A72] leading-relaxed">
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
    </section>
  );
}
