import { useInView } from '../../hooks/useInView';

const TOTAL_SPOTS = 30;
const SPOTS_TAKEN = 18; // update as submissions come in

export default function CTASection() {
  const { ref, inView } = useInView();
  const remaining = TOTAL_SPOTS - SPOTS_TAKEN;
  const pct = Math.round((SPOTS_TAKEN / TOTAL_SPOTS) * 100);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="submit"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 10% 80%, rgba(245,200,66,0.15) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 90% 20%, rgba(34,197,94,0.10) 0%, transparent 50%), #060A06',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">

        <p className={`text-[#22C55E] font-semibold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          3 chart campaigns · 30 artists · Beatport proven
        </p>

        <h2
          className={`font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] max-w-[860px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          Ready to write<br/>your <span className="text-[#22C55E]">chapter?</span>
        </h2>

        <p className={`mt-6 max-w-[520px] text-[#728A72] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Forty years from now, you'll either remember being part of this
          — or you'll remember not submitting.
        </p>

        {/* Spots progress bar */}
        <div className={`mt-10 w-full max-w-[480px] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#F0EDE6]">
              {SPOTS_TAKEN} spots confirmed
            </span>
            <span className="text-sm font-bold text-[#22C55E]">
              {remaining} remaining
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-[#182B18] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#22C55E] to-[#F5C842] transition-all duration-1000 ease-out"
              style={{ width: inView ? `${pct}%` : '0%', transitionDelay: '400ms' }}
            />
          </div>
          <p className="mt-2 text-xs text-[#728A72] text-center">
            {TOTAL_SPOTS} spots max · Deadline August 15, 2026
          </p>
        </div>

        <div
          className={`mt-8 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="/submit"
            className="h-[52px] flex items-center px-8 rounded-full bg-[#F5C842] text-[#060612] text-base font-bold hover:bg-[#FFD75A] transition-colors"
          >
            Submit Your Track — Free →
          </a>
          <p className="text-sm text-[#728A72]">No fee now · €299 only if accepted</p>
        </div>

        <p className={`mt-6 text-xs text-[#728A72] transition-all duration-700 delay-400 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Review within 7 days · All genres welcome · All countries welcome
        </p>
      </div>
    </section>
  );
}
