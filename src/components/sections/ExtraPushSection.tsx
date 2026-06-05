import { useInView } from '../../hooks/useInView';

const pushItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    stat: '+2.000',
    statLabel: 'artists emailed',
    label: 'Email marketing',
    description:
      'The album is sent directly to 2,000+ contacts — a key industry network built over 8 years in the electronic music scene. Real people. Real reach.',
    color: '#F5C842',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15V6"/>
        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        <path d="M12 12H3"/>
        <path d="M16 6H3"/>
        <path d="M12 18H3"/>
      </svg>
    ),
    stat: '+1M',
    statLabel: 'SoundCloud followers',
    label: 'SoundCloud repost',
    description:
      'Your track is reposted individually on SoundCloud to a network of over 1 million followers — additional visibility running parallel to the Beatport push.',
    color: '#22C55E',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F0EDE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/>
        <path d="M2 12h10"/>
        <path d="m9 9 3 3-3 3"/>
        <path d="M14 8h5"/>
        <path d="M14 12h5"/>
        <path d="M14 16h5"/>
      </svg>
    ),
    stat: 'edmarmy.com',
    statLabel: 'press coverage',
    label: 'Press article',
    description:
      'A dedicated article published on EDM Army — one of the biggest EDM portals — promoting the album and putting your name in front of a global dance music audience.',
    color: '#F0EDE6',
  },
];

export default function ExtraPushSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#060A06] overflow-hidden py-24 md:py-32"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 100% 100%, rgba(34,197,94,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div
          className={`mb-4 text-xs font-bold uppercase tracking-[2px] text-[#728A72] transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          Extra push
        </div>

        <h2
          className={`font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          Beyond the<br />
          <span className="text-[#22C55E]">Beatport push.</span>
        </h2>

        <p
          className={`mt-6 max-w-[540px] text-[#728A72] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          Your release doesn't stop at the chart push. It gets promoted across multiple channels at the same time.
        </p>

        <div
          className={`mt-12 grid md:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {pushItems.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#182B18] bg-[#0C140C] p-7 flex flex-col gap-5"
              style={{ boxShadow: `0 0 50px -12px ${item.color}18` }}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#060A06] border border-[#182B18] flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>

              {/* Stat */}
              <div>
                <div
                  className="font-black leading-none"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: item.color, letterSpacing: '-1.5px' }}
                >
                  {item.stat}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#728A72] mt-1">
                  {item.statLabel}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-[#182B18] pt-5">
                <p className="text-xs font-bold uppercase tracking-[1.5px] mb-2" style={{ color: item.color }}>
                  {item.label}
                </p>
                <p className="text-[#728A72] text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
