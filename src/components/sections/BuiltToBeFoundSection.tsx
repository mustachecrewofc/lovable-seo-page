import { useInView } from '../../hooks/useInView';

const features = [
  {
    title: 'A truly worldwide lineup',
    description: 'Producers from every continent compete for a spot on the official compilation. The VA World Cup represents the global pulse of underground electronic music, with curated selection from Brazil, Europe, Asia, North America, and beyond.',
  },
  {
    title: 'Professional release on every major store',
    description: 'Selected tracks are mastered, packaged with cover art, and distributed worldwide on Beatport, Spotify, Apple Music, SoundCloud, Tidal, and more. Full credits, ISRC codes, and royalty splits handled by Mustache Crew Records.',
  },
  {
    title: 'Promo package built for impact',
    description: 'Every selected artist gets dedicated social campaigns, premiere coverage, IG reels, animated artwork, and feature spots in the official VA World Cup playlists curated by international tastemakers.',
  },
  {
    title: 'Real exposure to a real audience',
    description: 'Mustache Crew releases land on Beatport Top 100 charts and SoundCloud editorials. Past compilations have featured 29+ artists with combined streams in the millions across DSPs.',
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
    <section className="relative bg-[#EEF1F5]" style={{ overflow: 'clip' }}>
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
                Built for the <span className="text-[#A8821C]">world stage</span>
              </h2>
              <p className="mt-5 text-[#0A0A0F] text-lg -tracking-[0.36px] leading-relaxed font-medium">
                A global compilation engineered for real impact
              </p>
              <p className="mt-3 text-[#4A4A55] text-sm md:text-base leading-relaxed">
                Mustache Crew Records connects underground producers across 5 continents.
                Each VA World Cup edition is a snapshot of where electronic music is heading —
                released globally with full distribution, promo, and editorial support.
              </p>
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
