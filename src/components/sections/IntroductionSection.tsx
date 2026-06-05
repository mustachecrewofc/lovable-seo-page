import { useInView } from '../../hooks/useInView';

const IconCommunity = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#F5C842"/>
    <circle cx="9" cy="7" r="4" stroke="#F5C842"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#F5C842"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#F5C842"/>
  </svg>
);

const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#22C55E"/>
    <polyline points="17 6 23 6 23 12" stroke="#22C55E"/>
  </svg>
);

const IconNetwork = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" stroke="#22C55E"/>
    <circle cx="5" cy="19" r="2" stroke="#22C55E"/>
    <circle cx="19" cy="19" r="2" stroke="#22C55E"/>
    <path d="M12 7v4M10 17l-3.5-4M14 17l3.5-4" stroke="#22C55E"/>
  </svg>
);

const IconTrophy = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" stroke="#F5C842"/>
    <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" stroke="#F5C842"/>
    <path d="M6 2h12v7a6 6 0 0 1-12 0V2z" stroke="#F5C842"/>
    <path d="M12 15v4" stroke="#F5C842"/>
    <path d="M8 21h8" stroke="#F5C842"/>
  </svg>
);

export default function IntroductionSection() {
  const { ref, inView } = useInView({ threshold: 0.08 });

  const anim = (delay: number, fromY = 24): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${fromY}px)`,
    transition: `opacity 0.75s ease, transform 0.75s ease`,
    transitionDelay: `${delay}ms`,
  });

  const pillars = [
    {
      num: '01',
      accent: '#F5C842',
      accentRgb: '245,200,66',
      icon: <IconCommunity />,
      title: 'A community, not just a compilation',
      body: 'Everyone who joins this VA is committed. Same goal, same launch day, same energy. This is not just a track submission — it is a squad built around accountability and the mindset to make things happen.',
    },
    {
      num: '02',
      accent: '#22C55E',
      accentRgb: '34,197,94',
      icon: <IconChart />,
      title: 'One purchase. Thirty tracks pushed.',
      body: 'When anyone buys the VA album, Beatport counts that sale for all 30 tracks at once. One purchase moves all 30 up the chart simultaneously. That is how it works — and we use it intentionally, every time.',
    },
    {
      num: '03',
      accent: '#22C55E',
      accentRgb: '34,197,94',
      icon: <IconNetwork />,
      title: 'Your audience works for everyone.',
      body: 'Your fans buy the album and push all 30 tracks at once — yours and the other 29. Their fans do the same. Alone, 1 purchase moves 1 track. Together, 1 purchase moves 30.',
    },
    {
      num: '04',
      accent: '#F5C842',
      accentRgb: '245,200,66',
      icon: <IconTrophy />,
      title: "We've done this. Three times.",
      body: '#38 Beatport Overall. #1 Electronica. #1 Deep Dubstep. #2 Bass House. Each campaign sharpens the playbook. We know exactly what it takes — and we are doing it again.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container">

        {/* Label */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            transitionDelay: '0ms',
          }}
          className="mb-7 flex items-center gap-3"
        >
          <div className="h-px w-6 bg-[#22C55E]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#22C55E]">
            The mission
          </span>
        </div>

        {/* Main headline */}
        <h2
          style={{ ...anim(80, 36), fontSize: 'clamp(44px, 7.5vw, 108px)' }}
          className="font-black text-[#F0EDE6] leading-[0.92] -tracking-[3px] max-w-[960px]"
        >
          30 artists.<br />
          One goal:<br />
          <span className="text-[#22C55E]">Beatport Top 100.</span>
        </h2>

        {/* Manifesto paragraph */}
        <p
          style={anim(220)}
          className="mt-8 text-[#F0EDE6]/65 text-base md:text-xl leading-relaxed max-w-[660px]"
        >
          Mustache Gang World Cup is not a random compilation.
          It is a{' '}
          <span className="text-[#F0EDE6]/90 font-semibold">coordinated community of artists</span>{' '}
          who all want the same thing — and who know that the only way to get there is together.
          You bring your audience. Everyone does the same.
          And on July 17, the chart gets flooded.
        </p>

        {/* 4 pillars — 2x2 grid */}
        <div
          style={anim(360)}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'rgba(12,20,12,0.70)',
                border: '1px solid rgba(240,237,230,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `rgba(${p.accentRgb},0.22)`;
                el.style.background = 'rgba(12,20,12,0.90)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(240,237,230,0.07)';
                el.style.background = 'rgba(12,20,12,0.70)';
              }}
            >
              <div className="flex">
                <div
                  className="w-1 flex-shrink-0"
                  style={{ background: p.accent, opacity: 0.55 }}
                />
                <div className="px-6 py-6">
                  {/* Icon + number row */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `rgba(${p.accentRgb},0.10)`,
                        border: `1px solid rgba(${p.accentRgb},0.20)`,
                      }}
                    >
                      {p.icon}
                    </div>
                    <span
                      className="font-black text-[11px] uppercase tracking-[2px]"
                      style={{ color: p.accent, opacity: 0.55 }}
                    >
                      {p.num}
                    </span>
                  </div>
                  <p className="font-bold text-[#F0EDE6] text-sm md:text-[15px] mb-2 leading-snug">
                    {p.title}
                  </p>
                  <p className="text-[#F0EDE6]/50 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom manifesto callout */}
        <div style={anim(620, 16)} className="mt-10">
          <div
            style={{
              background: 'rgba(240,237,230,0.02)',
              border: '1px solid rgba(240,237,230,0.07)',
              borderRadius: '16px',
              padding: '28px 32px',
              textAlign: 'center',
            }}
          >
            <p
              className="font-black uppercase tracking-[2.5px] mb-2"
              style={{ color: 'rgba(240,237,230,0.30)', fontSize: '11px' }}
            >
              Alone, your release disappears into the noise.
            </p>
            <p
              className="font-black text-[#F0EDE6] leading-tight -tracking-[1px]"
              style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
            >
              Together, we make the charts{' '}
              <span className="text-[#22C55E]">impossible to ignore.</span>
            </p>
          </div>
        </div>

        {/* Bridge to Solo vs VA */}
        <div style={anim(720, 8)} className="mt-10 flex flex-col items-center gap-2">
          <p className="text-sm text-[#728A72] text-center">
            See exactly what changes when you stop releasing alone.
          </p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#728A72" strokeWidth="2" strokeLinecap="round" className="opacity-50">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
