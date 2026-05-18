import { useInView } from '../../hooks/useInView';

export default function LetLovableFixSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="promo"
      className="container pt-20 pb-20 md:pt-28 md:pb-[138px]"
    >
      <h2
        className={`max-w-[360px] text-[48px] leading-[52px] font-black -tracking-[1.44px] text-[#F0EDE6] md:max-w-[520px] md:text-[64px] md:leading-[70px] md:-tracking-[1.92px] lg:max-w-[700px] lg:text-[96px] lg:leading-[110%] lg:-tracking-[2.88px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        Smart <span className="text-[#F5C842]">distribution</span> strategy
      </h2>

      <div
        className={`mt-10 md:mt-20 lg:mt-[172px] grid gap-y-10 md:grid-cols-2 md:gap-x-[45px] transition-all duration-700 delay-150 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-[360px] text-lg leading-[23px] font-[500] -tracking-[0.36px] text-[#8A8A9A] md:max-w-[440px] md:text-2xl md:leading-[109%] md:-tracking-[0.48px]">
          The VA goes to 50+ platforms as a classic VA. On Spotify, each track is
          <span className="text-[#F0EDE6]"> also released as a single under your artist profile</span> —
          so you don't lose visibility on your own page.
        </div>

        <div>
          {[
            {
              title: 'VA on every relevant store',
              desc: 'Beatport + 50+ download stores and DSPs where a VA actually drives chart velocity. Full ISRC, metadata and royalty splits handled.',
            },
            {
              title: 'Singles on Spotify',
              desc: 'Each track also released as a single under your artist profile. VA tracks often don\'t show on artist pages — this fixes it. You keep the streams, you keep the page.',
            },
            {
              title: 'Aim: Beatport Top Charts',
              desc: 'Every distribution decision serves one goal — coordinated chart velocity during the World Cup window. No random platforms, no wasted reach.',
            },
          ].map((item, i) => (
            <div key={item.title} className={`py-5 md:py-6 ${i > 0 ? 'border-t border-[#2A2A3E]' : ''}`}>
              <h3 className="text-xl leading-[24px] font-semibold -tracking-[0.4px] text-[#F0EDE6] md:text-2xl md:leading-[109%] md:-tracking-[0.48px]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[360px] text-base leading-[21px] font-[500] -tracking-[0.32px] text-[#8A8A9A] md:mt-2.5 md:max-w-[379px] md:text-lg md:leading-[109%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
