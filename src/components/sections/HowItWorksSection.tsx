import { useInView } from '../../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Submit free.',
    desc: 'Any genre. SoundCloud, WeTransfer or Dropbox. Zero cost, zero commitment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We review in 7 days.',
    desc: 'Every track gets a real listen. You hear back either way — accepted or not.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Join the squad.',
    desc: 'Lock your spot (€299), sign the agreement, and enter the private Telegram war room.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Execute. Chart.',
    desc: 'All 30 artists push simultaneously. The machine runs. You ride it to the charts.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="how-it-works"
      className="container py-20 md:py-28"
    >
      {/* Header */}
      <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
        The process
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 md:mb-20">
        <h2
          className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ fontSize: 'clamp(42px, 6vw, 88px)' }}
        >
          Four steps.<br/>
          <span className="text-[#22C55E]">Demo to chart.</span>
        </h2>
        <p className={`max-w-[300px] text-[#728A72] text-sm leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Submission is free. €299 only if you're selected and you say yes.
        </p>
      </div>

      {/* ── DESKTOP: horizontal timeline ── */}
      <div className="hidden md:block">
        {/* Number + connector row */}
        <div className="relative flex items-start">
          {steps.map((step, i) => (
            <div key={step.number} className="flex-1 flex flex-col items-center relative">
              {/* Connector line — left side */}
              {i > 0 && (
                <div className="absolute top-[22px] right-1/2 w-full h-[2px] bg-[#182B18] overflow-hidden" style={{ zIndex: 0 }}>
                  <div
                    className="h-full bg-[#22C55E] transition-all duration-700"
                    style={{
                      width: inView ? '100%' : '0%',
                      transitionDelay: `${i * 200 + 200}ms`,
                    }}
                  />
                </div>
              )}

              {/* Circle */}
              <div
                className={`relative z-10 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  inView
                    ? 'border-[#22C55E] bg-[#0C140C] text-[#22C55E]'
                    : 'border-[#182B18] bg-[#060A06] text-[#728A72]'
                }`}
                style={{
                  width: 44,
                  height: 44,
                  transitionDelay: `${i * 180}ms`,
                }}
              >
                {step.icon}
              </div>

              {/* Step content below */}
              <div
                className={`mt-6 px-4 text-center transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 180 + 150}ms` }}
              >
                <div className="text-xs font-bold text-[#728A72] tracking-[2px] uppercase mb-2">{step.number}</div>
                <h3 className="text-lg font-bold text-[#F0EDE6] -tracking-[0.4px] mb-2">{step.title}</h3>
                <p className="text-sm text-[#728A72] leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: vertical timeline ── */}
      <div className="md:hidden flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-5">
            {/* Left: circle + line */}
            <div className="flex flex-col items-center">
              <div
                className={`flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${
                  inView ? 'border-[#22C55E] bg-[#0C140C] text-[#22C55E]' : 'border-[#182B18] bg-[#060A06] text-[#728A72]'
                }`}
                style={{ width: 40, height: 40, transitionDelay: `${i * 180}ms` }}
              >
                {step.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="w-[2px] flex-1 bg-[#182B18] my-1 overflow-hidden min-h-[60px]">
                  <div
                    className="w-full bg-[#22C55E] transition-all duration-700"
                    style={{ height: inView ? '100%' : '0%', transitionDelay: `${i * 180 + 300}ms` }}
                  />
                </div>
              )}
            </div>

            {/* Right: content */}
            <div
              className={`pb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              style={{ transitionDelay: `${i * 180 + 100}ms` }}
            >
              <div className="text-xs font-bold text-[#728A72] tracking-[2px] uppercase mb-1 mt-2">{step.number}</div>
              <h3 className="text-xl font-bold text-[#F0EDE6] -tracking-[0.4px] mb-2">{step.title}</h3>
              <p className="text-sm text-[#728A72] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
