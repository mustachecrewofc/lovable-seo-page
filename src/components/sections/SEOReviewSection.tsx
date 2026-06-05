import { useInView } from '../../hooks/useInView';
import { PortfolioGallery } from '../ui/portfolio-gallery';
import proofOverall from '@/assets/proof-overall.jpg';
import proofProgressive from '@/assets/proof-progressive.jpg';
import proofPeaktime from '@/assets/proof-peaktime.jpg';
import proofHouse from '@/assets/proof-house.jpg';
import proofTechhouse from '@/assets/proof-techhouse.jpg';
import proofDubstep from '@/assets/proof-dubstep.jpg';
import proofElectronica from '@/assets/proof-electronica.jpg';
import xmasDubstep2 from '@/assets/xmas-dubstep-2.png';
import xmasHouse7 from '@/assets/xmas-house-7.png';
import euroFunky4 from '@/assets/euro-funky-4.jpg';
import euroDubstep3 from '@/assets/euro-dubstep-3.jpg';
import euroAfrohouse8 from '@/assets/euro-afrohouse-8.jpg';
import euroProgressive15 from '@/assets/euro-progressive-15.jpg';
import euroDeephouse20 from '@/assets/euro-deephouse-20.jpg';
import carnivalOverall from '@/assets/carnival-overall.jpg';
import carnivalElectronica from '@/assets/carnival-electronica.jpg';
import carnivalProgressive from '@/assets/carnival-progressive.jpg';
import carnivalHouse from '@/assets/carnival-house.jpg';
import carnivalTechhouse from '@/assets/carnival-techhouse.jpg';
import carnivalDance from '@/assets/carnival-dance.jpg';
import carnivalPeaktime from '@/assets/carnival-peaktime.jpg';
import carnivalElectro from '@/assets/carnival-electro.jpg';
import carnivalBassHouse from '@/assets/carnival-bass-house.jpg';
import carnivalDeepDubstep from '@/assets/carnival-deepdubstep.jpg';

const euroImages = [
  { src: euroDubstep3,      alt: 'Mustache Gang Euro Tour — #3 Dubstep Releases' },
  { src: euroFunky4,        alt: 'Mustache Gang Euro Tour — #4 Funky / Groove / Jackin\' House Releases' },
  { src: euroAfrohouse8,    alt: 'Mustache Gang Euro Tour — #8 Afro House Releases' },
  { src: euroProgressive15, alt: 'Mustache Gang Euro Tour — #15 Progressive House Releases' },
  { src: euroDeephouse20,   alt: 'Mustache Gang Euro Tour — #20 Deep House Releases' },
];

const xmasImages = [
  { src: proofOverall, alt: 'Mustache Gang Xmas — #38 Beatport Overall Top 100' },
  { src: proofProgressive, alt: 'Mustache Gang Xmas — #4 Progressive House Releases' },
  { src: proofPeaktime, alt: 'Mustache Gang Xmas — #4 Techno (Peak Time / Driving) Releases' },
  { src: proofHouse, alt: 'Mustache Gang Xmas — #7 House Releases' },
  { src: proofTechhouse, alt: 'Mustache Gang Xmas — #9 Tech House Releases' },
  { src: proofDubstep, alt: 'Mustache Gang Xmas — #2 Dubstep Releases' },
  { src: proofElectronica, alt: 'Mustache Gang Xmas — #2 Electronica / Downtempo Releases' },
];

const carnivalImages = [
  { src: carnivalOverall, alt: 'Brazilian Carnival — #58 Beatport Overall Top 100' },
  { src: carnivalElectronica, alt: 'Brazilian Carnival — #1 Electronica / Downtempo Releases' },
  { src: carnivalDeepDubstep, alt: 'Brazilian Carnival — #1 140 / Deep Dubstep / Grime Releases' },
  { src: carnivalDance, alt: 'Brazilian Carnival — #2 Dance Releases' },
  { src: carnivalElectro, alt: 'Brazilian Carnival — #2 Electro (Classic / Detroit / Modern) Releases' },
  { src: carnivalBassHouse, alt: 'Brazilian Carnival — #2 Bass House Releases' },
  { src: carnivalPeaktime, alt: 'Brazilian Carnival — #4 Techno (Peak Time / Driving) Releases' },
  { src: carnivalProgressive, alt: 'Brazilian Carnival — #5 Progressive House Releases' },
  { src: carnivalHouse, alt: 'Brazilian Carnival — #10 House Releases' },
  { src: carnivalTechhouse, alt: 'Brazilian Carnival — #14 Tech House Releases' },
];

const issues = [
  { label: 'Mustache Gang Xmas — #38 Beatport Overall Top 100 Releases', status: 'ok', badge: '#38 Overall' },
  { label: 'Mustache Gang Brazilian Carnival — #58 Beatport Overall Top 100 Releases', status: 'ok', badge: '#58 Overall' },
  { label: 'Brazilian Carnival — #1 Electronica · #1 Deep Dubstep · #2 Bass House', status: 'ok', badge: '#1 Genres' },
  { label: 'Mustache Gang Xmas — #2 Dubstep · #4 Peaktime · #7 House · #9 Tech House', status: 'ok', badge: 'Multi-chart' },
  { label: 'Chart positions held for 10+ days across all VA campaigns', status: 'ok', badge: '10+ days' },
  { label: 'Artists from past VAs booked for shows after their chart run', status: 'ok', badge: 'Bookings' },
  { label: '29+ artists coordinated across squad pushes — 0 late deliveries', status: 'ok' },
  { label: 'SoundCloud repost network ≈ 2 million followers · EDMArmy 300k+', status: 'ok', badge: 'Verified' },
];

function StatusIcon() {
  return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#F5C842]/15 flex-shrink-0">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="#F5C842" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
}

export default function SEOReviewSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="proof" className="container pt-20 pb-10 md:pt-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute -left-4 top-2 md:top-6 w-20 h-20 md:w-28 md:h-28 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 90 L55 20 L65 60 L100 45 Z" fill="url(#ptr-grad)" opacity="0.95"/>
              <defs>
                <linearGradient id="ptr-grad" x1="30" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F5C842"/>
                  <stop offset="100%" stopColor="#22C55E"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="pl-14 md:pl-16 mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
            Proof. Not promises.
          </div>
          <h2
            className="font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] pl-14 md:pl-16"
            style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          >
            We've done this before.<br/><span className="text-[#22C55E]">Three times.</span>
          </h2>
          <p className="mt-6 pl-14 md:pl-16 text-[#728A72] text-base md:text-lg leading-relaxed max-w-[460px]">
            Three VA campaigns. Three Beatport chart runs. Real screenshots,
            real positions — not projections. Every number below is documented.
          </p>
          <a
            href="https://www.instagram.com/mustachecrew/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 ml-14 md:ml-16 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#182B18] text-sm text-[#F0EDE6] hover:bg-[#0C140C] transition-colors"
          >
            📷 Watch the highlights on Instagram ↗
          </a>
        </div>

        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-[#0C140C] rounded-2xl border border-[#182B18] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#182B18] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#F0EDE6] text-sm">Label achievements</p>
                <p className="text-[#728A72] text-xs mt-0.5">Highlights from previous VA editions.</p>
              </div>
              <span className="h-8 px-3 rounded-lg bg-[#F5C842] text-[#060612] text-xs font-bold flex items-center">
                Since 2018
              </span>
            </div>

            <div className="divide-y divide-[#182B18]">
              {issues.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-5 py-3">
                  <StatusIcon />
                  <span className="text-sm text-[#F0EDE6] flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-[#F5C842]/15 text-[#22C55E] px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Xmas gallery */}
      <div className={`mt-16 md:mt-24 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#FF8A7A] text-xs font-bold uppercase tracking-wider">
            🎅 Mustache Gang Xmas 2025
          </span>
          <span className="text-[#728A72] text-xs hidden sm:inline">8 Beatport chart placements</span>
        </div>
        <PortfolioGallery images={xmasImages} spacing="-space-x-24 md:-space-x-28" />
      </div>

      {/* Brazilian Carnival gallery */}
      <div className={`mt-12 md:mt-20 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C842]/15 border border-[#F5C842]/40 text-[#22C55E] text-xs font-bold uppercase tracking-wider">
            🇧🇷 Brazilian Carnival VA
          </span>
          <span className="text-[#728A72] text-xs hidden sm:inline">12 Beatport chart placements</span>
        </div>
        <PortfolioGallery
          images={carnivalImages}
          variant="straight"
          cardSize={200}
          spacing="-space-x-10 md:-space-x-12"
        />
      </div>

      {/* Euro Tour gallery — last */}
      <div className={`mt-12 md:mt-20 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-[#3B82F6] text-xs font-bold uppercase tracking-wider">
            🌍 Mustache Gang Euro Tour
          </span>
          <span className="text-[#728A72] text-xs hidden sm:inline">9 Beatport chart placements</span>
        </div>
        <PortfolioGallery images={euroImages} spacing="-space-x-20 md:-space-x-24" />
      </div>

      {/* Inline CTA after proof */}
      <div className={`mt-14 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl"
          style={{
            background: 'rgba(34,197,94,0.05)',
            border: '1px solid rgba(34,197,94,0.18)',
          }}
        >
          <div>
            <p className="font-bold text-[#F0EDE6] text-sm">Three times proven. Now it's your turn.</p>
            <p className="text-[#728A72] text-xs mt-0.5">Submit by July 10 · Releases July 17, 2026</p>
          </div>
          <a
            href="/submit"
            className="flex-shrink-0 h-[40px] px-5 rounded-full bg-[#F5C842] text-sm font-bold text-[#060612] hover:bg-[#FFD75A] transition-colors flex items-center gap-2"
          >
            Send Your Demo →
          </a>
        </div>
      </div>

      {/* Bridge to Community */}
      <div className={`mt-12 flex flex-col items-center gap-2 transition-all duration-700 delay-600 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-[#728A72] text-center">
          Behind every one of those chart runs, the same group chat was the engine.
        </p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#728A72" strokeWidth="2" strokeLinecap="round" className="opacity-50">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
