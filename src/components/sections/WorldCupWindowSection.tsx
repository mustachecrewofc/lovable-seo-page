import { useInView } from '../../hooks/useInView';

const fomoPoints = [
  {
    title: '5 billion eyes on the pitch.',
    desc: 'The FIFA World Cup is the single most-watched event in human history. Electronic music tied to that moment gets discovered by people who weren\'t already looking for it.',
  },
  {
    title: 'The algorithm loves a moment.',
    desc: 'Beatport surfaces music tied to cultural peaks. A July 17 release — 2 days before the World Cup Final — positions your track inside the biggest week of global attention. That\'s editorial gravity you can\'t buy.',
  },
  {
    title: 'We\'re Brazilian. We know football.',
    desc: 'Mustache Crew was born in Brazil — the country that lives football like religion. This isn\'t a marketing angle. It\'s our identity. And that energy runs through every campaign we run.',
  },
  {
    title: 'This window only exists once.',
    desc: 'The World Cup is every four years. July 17, 2026 happens once. Mustache Gang World Cup 2026 drops 2 days before the Final. 30 spots. After August 15, the lineup locks. There is no "next round."',
  },
];

export default function WorldCupWindowSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-[#060A06]">
      {/* Brazilian gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 80% 50%, rgba(34,197,94,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(245,200,66,0.10) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="container py-20 md:py-32 relative z-10"
      >
        {/* Label + heading */}
        <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
          A janela
        </div>
        <h2
          className={`font-black text-[#F0EDE6] leading-[1.0] -tracking-[2.5px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}
        >
          July 17, 2026.<br/><span className="text-[#22C55E]">5 billion people</span><br/>watching.
        </h2>

        <div className={`mt-6 max-w-[600px] transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[#C4C2B8] text-base md:text-lg leading-relaxed">
            There are rare moments when the entire world is tuned to the same frequency.
            The 2026 FIFA World Cup is one of them. We're building this campaign to land
            inside that frequency — and we need 30 tracks ready to go when it opens.
          </p>
        </div>

        {/* FOMO grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {fomoPoints.map((point, i) => (
            <div
              key={point.title}
              className={`bg-[#0C140C] border border-[#182B18] rounded-2xl p-6 md:p-7 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: inView ? `${i * 100 + 200}ms` : '0ms' }}
            >
              <h3 className="text-lg md:text-xl font-bold text-[#F0EDE6] -tracking-[0.4px] mb-3">
                {point.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[#728A72] leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FOMO banner */}
        <div className={`mt-10 rounded-2xl border border-[#F5C842]/30 bg-[#F5C842]/5 px-6 py-5 transition-all duration-700 delay-[500ms] ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-[#F5C842] text-base">
                🇧🇷 Led by a Brazilian label. Built for a Brazilian moment.
              </p>
              <p className="mt-2 text-sm text-[#728A72] leading-relaxed">
                Football is culture. Music is culture. In Brazil, they're the same thing.
                Mustache Gang World Cup 2026 isn't a marketing campaign — it's a statement.
                Submit your track and be part of it.
              </p>
            </div>
            <a
              href="#submit"
              className="flex-shrink-0 h-[44px] flex items-center px-5 rounded-full bg-[#F5C842] text-[#060612] text-sm font-bold hover:bg-[#FFD75A] transition-colors"
            >
              Submit Free →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
