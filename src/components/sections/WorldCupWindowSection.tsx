import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

const RELEASE_DATE = new Date('2026-07-17T00:00:00');

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = RELEASE_DATE.getTime() - Date.now();
      if (diff <= 0) return;
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function CountBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center rounded-2xl border border-[#22C55E]/30 bg-[#0C140C]"
        style={{ width: 'clamp(72px, 14vw, 120px)', height: 'clamp(72px, 14vw, 120px)' }}
      >
        <span
          className="font-black text-[#22C55E] tabular-nums leading-none"
          style={{ fontSize: 'clamp(28px, 6vw, 56px)', letterSpacing: '-2px' }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
        {label}
      </span>
    </div>
  );
}

const globalStats = [
  { value: '5B', label: 'Global viewers' },
  { value: '64', label: 'Matches played' },
  { value: '48', label: 'Nations competing' },
  { value: '30', label: 'Tracks dropping' },
];

export default function WorldCupWindowSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const countdown = useCountdown();

  return (
    <section className="relative overflow-hidden bg-[#060A06]">
      {/* Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,197,94,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(245,200,66,0.08) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="container py-20 md:py-32 relative z-10">

        {/* Label */}
        <div className={`mb-4 text-xs font-bold uppercase tracking-[2px] text-[#728A72] transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          A janela
        </div>

        {/* Heading */}
        <h2
          className={`font-black text-[#F0EDE6] leading-[1.0] -tracking-[2.5px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}
        >
          <span className="text-[#22C55E]">5 billion people</span><br />watching.<br />Be the soundtrack.
        </h2>

        <p className={`mt-5 max-w-[520px] text-[#728A72] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          The 2026 FIFA World Cup is the biggest cultural event on Earth.
          We're dropping <span className="text-[#F0EDE6] font-medium">Mustache Gang World Cup 2026</span> on July 17 — 2 days before the Final.
        </p>

        {/* Countdown */}
        <div className={`mt-12 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
            Release countdown — July 17, 2026
          </p>
          <div className="flex items-start gap-3 md:gap-5">
            <CountBlock value={countdown.days} label="Days" />
            <span className="text-[#22C55E] font-black mt-4 md:mt-7 text-2xl md:text-4xl select-none">:</span>
            <CountBlock value={countdown.hours} label="Hours" />
            <span className="text-[#22C55E] font-black mt-4 md:mt-7 text-2xl md:text-4xl select-none">:</span>
            <CountBlock value={countdown.minutes} label="Min" />
            <span className="text-[#22C55E] font-black mt-4 md:mt-7 text-2xl md:text-4xl select-none">:</span>
            <CountBlock value={countdown.seconds} label="Sec" />
          </div>
        </div>

        {/* Global stats strip */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {globalStats.map((s) => (
            <div key={s.label} className="bg-[#0C140C] border border-[#182B18] rounded-xl px-4 py-4 text-center">
              <div className="text-[#F0EDE6] font-black text-2xl md:text-3xl -tracking-[1px]">{s.value}</div>
              <div className="text-[#728A72] text-xs mt-1 uppercase tracking-[1px]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Brazilian identity banner */}
        <div className={`mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-2xl border border-[#F5C842]/25 bg-[#F5C842]/5 px-6 py-5 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1">
            <p className="font-bold text-[#F5C842] text-sm md:text-base">
              🇧🇷 Led by a Brazilian label. Built for the biggest Brazilian moment in 4 years.
            </p>
            <p className="mt-1 text-xs md:text-sm text-[#728A72]">
              Football is culture. Music is culture. In Brazil, they're the same thing.
            </p>
          </div>
          <a
            href="/submit"
            className="flex-shrink-0 h-[44px] flex items-center px-5 rounded-full bg-[#F5C842] text-[#060612] text-sm font-bold hover:bg-[#FFD75A] transition-colors"
          >
            Submit Free →
          </a>
        </div>

      </div>
    </section>
  );
}
