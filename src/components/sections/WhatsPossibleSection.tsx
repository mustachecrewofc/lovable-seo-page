import { useInView } from '../../hooks/useInView';

const useCases = [
  {
    title: 'Full Media Kit per Track',
    desc: 'Official cover art, SoundCloud cover, Facebook cover, individual YouTube video, Instagram Story launch video (16:9 motion) and pre-save video (16:9 motion). Built per artist, per track.',
  },
  {
    title: 'Full DJ Set with All Tracks',
    desc: 'A complete DJ set including every VA track posted on YouTube and SoundCloud — extra visibility for the whole squad on the platforms DJs actually browse.',
  },
  {
    title: 'SoundCloud Reach (~2M)',
    desc: 'Repost campaign across our partner network reaching roughly 2M followers. Real ears, real DJs, real velocity into the chart push.',
  },
  {
    title: 'Spotify Playlist Support',
    desc: 'Curated submission and placement support across our editorial network — your single, not just the VA.',
  },
  {
    title: 'Beatport Chart Mission',
    desc: 'Coordinated release date, pre-save sync, day-one velocity push — engineered for Beatport New Releases and Genre Charts.',
  },
  {
    title: 'Instagram + Press Coverage',
    desc: 'Coordinated Instagram content campaign across all 30 artists, plus blog and press coverage to extend the reach beyond the algorithm.',
  },
];

export default function WhatsPossibleSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container py-20 md:py-28">
      <h2
        className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(52px, 8vw, 120px)' }}
      >
        360° promotional <span className="text-[#F5C842]">campaign</span>
      </h2>
      <p className="mt-5 max-w-[640px] text-[#8A8A9A] text-base md:text-lg leading-relaxed">
        A coordinated multi-platform campaign designed to push the entire squad
        toward Beatport's highest chart positions.
      </p>

      <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2">
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className={`p-1 rounded-[22px] bg-[#13131F] md:rounded-[28px] transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: inView ? `${i * 80 + 150}ms` : '0ms' }}
          >
            <div className="h-full px-5 py-5 md:p-[23px] md:pr-[39px] flex flex-col gap-y-3 md:gap-y-4 rounded-[18px] border border-[#2A2A3E] bg-[#0A0A0F] md:rounded-[24px]">
              <h3 className="text-xl leading-[24px] font-bold -tracking-[0.2px] text-pretty text-[#F0EDE6] md:text-2xl md:leading-[120%] md:-tracking-[0.24px]">
                {uc.title}
              </h3>
              <p className="text-base leading-[22px] text-[#8A8A9A]">{uc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
