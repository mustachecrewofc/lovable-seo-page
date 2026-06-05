import { useInView } from '../../hooks/useInView';

const stats = [
  {
    number: '<0.1%',
    label: 'of solo releases',
    detail: 'ever break into Beatport Top 100',
  },
  {
    number: '30×',
    label: 'chart multiplier',
    detail: 'every album purchase pushes all 30 tracks up the chart simultaneously',
  },
  {
    number: '3',
    label: 'successful VA runs',
    detail: 'by Mustache Crew — chart results proven, not promised',
  },
];

const problems = [
  {
    title: 'You release alone.',
    description: "You drop a track. You post on Instagram. You send it to a few DJs. Two weeks later, it's buried under the new releases with zero chart movement. Sound familiar?",
  },
  {
    title: 'The algorithm ignores small velocity.',
    description: "Beatport's algorithm rewards coordinated momentum — multiple tracks from one release pushing together. A solo release has one voice. A VA with 30 artists has thirty.",
  },
  {
    title: 'Promo is a full-time job.',
    description: 'Press, playlists, social media, email blasts, DJ outreach — even the best track gets buried without infrastructure behind it. Most independent artists don\'t have that. We built it for you.',
  },
  {
    title: 'The window closes fast.',
    description: 'Chart velocity peaks in the first 7 days. Miss that window and the algorithm moves on. This is why timing, coordination, and a war room matter more than talent alone.',
  },
];

function StatCard({ number, label, detail, index }: {
  number: string;
  label: string;
  detail: string;
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #DDE2EA',
          borderRadius: '20px',
          padding: '32px 28px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: '#22C55E', lineHeight: 1, letterSpacing: '-2px' }}>
          {number}
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#060A06', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '8px' }}>
          {label}
        </div>
        <div style={{ fontSize: '14px', color: '#4A4A55', lineHeight: 1.5, marginTop: '10px' }}>
          {detail}
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ title, description, index, isLast }: {
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <div>
      <div
        className="sticky"
        style={{
          top: `${88 + index * 18}px`,
          zIndex: index + 1,
        }}
      >
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #DDE2EA',
            borderRadius: '28px',
            padding: '48px 56px',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 20px 50px -20px rgba(10,10,15,0.18), 0 -2px 30px rgba(34,197,94,0.04)',
          }}
        >
          <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: '#060A06', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            {title}
          </h3>
          <p style={{ fontSize: '17px', color: '#4A4A55', lineHeight: 1.65 }}>
            {description}
          </p>
        </div>
      </div>
      {!isLast && <div style={{ height: '420px' }} />}
    </div>
  );
}

export default function BuiltToBeFoundSection() {
  const { ref, inView } = useInView();

  return (
    <section id="strategy" className="relative bg-[#EEF1F5]" style={{ overflow: 'clip' }}>
      <div
        className="absolute bottom-0 left-0 w-full h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 15% 100%, rgba(34,197,94,0.18) 0%, rgba(245,200,66,0.10) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      {/* Stats row */}
      <div className="container pt-16 md:pt-24 pb-12">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
            The hard truth
          </div>
          <h2
            className="font-black text-[#060A06] leading-[1.0] -tracking-[2.5px]"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
          >
            Solo releases<br/><span className="text-[#22C55E]">don't chart.</span><br/>Period.
          </h2>
          <p className="mt-5 max-w-[540px] text-[#4A4A55] text-base md:text-lg leading-relaxed">
            The Beatport algorithm is built to reward collective momentum.
            Here's what the numbers actually say — and what we're doing about it.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.number} {...s} index={i} />
          ))}
        </div>
      </div>

      {/* Problem cards sticky stack */}
      <div className="container pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
          <div className="md:w-[38%] md:sticky md:top-[80px] md:self-start">
            <div className="pt-4">
              <h3
                className="font-black text-[#060A06] leading-[1.05] -tracking-[1.5px]"
                style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
              >
                Why most independent releases disappear.
              </h3>
              <p className="mt-4 text-[#4A4A55] text-sm md:text-base leading-relaxed">
                It's not the music. It's the mechanics.
                Four systemic problems that kill chart potential before a track gets a chance.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Algorithm reality',
                  'Velocity mechanics',
                  'Promo infrastructure',
                  'Timing window',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-[#DDE2EA] text-[#4A4A55]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-[62%]">
            {problems.map((p, i) => (
              <ProblemCard
                key={p.title}
                title={p.title}
                description={p.description}
                index={i}
                isLast={i === problems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
