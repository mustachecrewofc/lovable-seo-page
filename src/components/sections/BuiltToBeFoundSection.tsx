import { useInView } from '../../hooks/useInView';

const features = [
  {
    title: 'Velocity = Visibility',
    description: "Higher chart velocity means higher visibility across all Beatport surfaces — New Releases, Genre Charts, Editorial picks. The more tracks in a VA push simultaneously, the harder the algorithm notices. Collective velocity beats solo effort every time.",
  },
  {
    title: 'Stacking Plays Into Rankings',
    description: "Visibility stacks into more plays, more profile visits, and more DJ attention. Each repost, playlist add, and email blast adds to the pile. Momentum creates a loop: attention → action → ranking → more attention. That loop is what we're engineering.",
  },
  {
    title: 'The World Cup Timing Window',
    description: "The 2026 FIFA World Cup is the biggest cultural event on the planet. Releasing during this window means your music is positioned inside a global conversation. Electronic music tied to a world moment gets discovered by people who weren't already looking for it.",
  },
  {
    title: 'Curated Lineup, No Random Slots',
    description: "Every track is selected. Not every demo gets in. The curation process is what makes the campaign credible — a tight, quality lineup that DJs actually want to play and Beatport's algorithm treats as serious. You're not just buying a slot. You're being selected.",
  },
];

function FeatureCard({ title, description, index, isLast }: {
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
            padding: '56px 56px',
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 20px 50px -20px rgba(10,10,15,0.18), 0 -2px 30px rgba(245,200,66,0.06)',
          }}
        >
          <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#0A0A0F', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '20px' }}>
            {title}
          </h3>
          <p style={{ fontSize: '17px', color: '#4A4A55', lineHeight: 1.65 }}>
            {description}
          </p>
        </div>
      </div>
      {!isLast && <div style={{ height: '480px' }} />}
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
          background: 'radial-gradient(ellipse 70% 50% at 15% 100%, rgba(245,200,66,0.30) 0%, rgba(230,59,46,0.14) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
          <div className="md:w-[40%] md:sticky md:top-[80px] md:self-start">
            <div
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <h2
                className="font-black text-[#0A0A0F] leading-[1.0] -tracking-[2.5px]"
                style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
              >
                Why this VA <span className="text-[#A8821C]">hits different.</span>
              </h2>
              <p className="mt-5 text-[#0A0A0F] text-lg -tracking-[0.36px] leading-relaxed font-medium">
                Chart positions aren't luck.
              </p>
              <p className="mt-3 text-[#4A4A55] text-sm md:text-base leading-relaxed">
                They're the result of coordinated momentum.
                Curated lineup, 360° promo plan, daily guidance from Mustache Crew —
                every element engineered to push the squad onto Beatport's highest charts.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Beatport chart run',
                  'Curated lineup',
                  'Execution > luck',
                  'Community-driven momentum',
                  '360° promo plan',
                  'Daily crew direction',
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

          <div className="md:w-[60%]">
            {features.map((feat, i) => (
              <FeatureCard
                key={feat.title}
                title={feat.title}
                description={feat.description}
                index={i}
                isLast={i === features.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
