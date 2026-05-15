import { useInView } from '../../hooks/useInView';
import { PortfolioGallery } from '../ui/portfolio-gallery';
import proofOverall from '@/assets/proof-overall.jpg';
import proofProgressive from '@/assets/proof-progressive.jpg';
import proofPeaktime from '@/assets/proof-peaktime.jpg';
import proofHouse from '@/assets/proof-house.jpg';
import proofTechhouse from '@/assets/proof-techhouse.jpg';
import proofDubstep from '@/assets/proof-dubstep.jpg';
import proofElectronica from '@/assets/proof-electronica.jpg';

const proofImages = [
  { src: proofOverall, alt: 'Mustache Gang Xmas — #38 Beatport Overall Top 100' },
  { src: proofProgressive, alt: 'Mustache Gang Xmas — #4 Progressive House Releases' },
  { src: proofPeaktime, alt: 'Mustache Gang Xmas — #4 Techno (Peak Time / Driving) Releases' },
  { src: proofHouse, alt: 'Mustache Gang Xmas — #7 House Releases' },
  { src: proofTechhouse, alt: 'Mustache Gang Xmas — #9 Tech House Releases' },
  { src: proofDubstep, alt: 'Mustache Gang Xmas — #2 Dubstep Releases' },
  { src: proofElectronica, alt: 'Mustache Gang Xmas — #2 Electronica / Downtempo Releases' },
];

const issues = [
  { label: 'Mustache Gang Xmas — #38 Beatport Overall Top 100 Releases', status: 'ok', badge: 'Charted' },
  { label: 'Mustache Gang Xmas — #2 Beatport Dubstep Releases', status: 'ok' },
  { label: 'Brazilian Carnival VA — #1 Electronica/Downtempo Releases', status: 'ok', badge: '#1' },
  { label: 'Mustache Gang Xmas — Top 5 Genre Releases', status: 'ok' },
  { label: '29+ artists coordinated across past missions', status: 'ok' },
  { label: 'Pre-save campaigns synced across the full squad', status: 'ok' },
  { label: 'SoundCloud repost network ≈ 2M followers', status: 'ok' },
  { label: 'Daily crew direction from prep through release week', status: 'ok', badge: 'Verified' },
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
                  <stop offset="100%" stopColor="#E63B2E"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2
            className="font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] pl-14 md:pl-16"
            style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          >
            Proof from <span className="text-[#F5C842]">our missions</span>
          </h2>
          <p className="mt-6 pl-14 md:pl-16 text-[#8A8A9A] text-base md:text-lg leading-relaxed max-w-[460px]">
            Mustache Gang Xmas 2025 — the blueprint that started it all.
            Real chart positions from coordinated squad pushes.
          </p>
          <a
            href="https://www.instagram.com/mustachecrew/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 ml-14 md:ml-16 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A3E] text-sm text-[#F0EDE6] hover:bg-[#13131F] transition-colors"
          >
            📷 Watch the highlights on Instagram ↗
          </a>
        </div>

        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-[#13131F] rounded-2xl border border-[#2A2A3E] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#2A2A3E] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#F0EDE6] text-sm">Label achievements</p>
                <p className="text-[#8A8A9A] text-xs mt-0.5">Highlights from previous VA editions.</p>
              </div>
              <span className="h-8 px-3 rounded-lg bg-[#F5C842] text-[#060612] text-xs font-bold flex items-center">
                Since 2018
              </span>
            </div>

            <div className="divide-y divide-[#2A2A3E]">
              {issues.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-5 py-3">
                  <StatusIcon />
                  <span className="text-sm text-[#F0EDE6] flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-[#F5C842]/15 text-[#F5C842] px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className={`mt-16 md:mt-24 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <PortfolioGallery images={proofImages} spacing="-space-x-24 md:-space-x-28" />
      </div>
    </section>
  );
}
