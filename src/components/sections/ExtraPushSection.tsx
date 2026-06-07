import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import soundcloudLogo from '../../assets/soundcloud-logo.png';
import edmarmyLogo from '../../assets/edmarmy-logo.png';
import soundcloudSongstats from '../../assets/soundcloud-songstats.png';
import edmarmyXmas from '../../assets/edmarmy-press-xmas.png';
import edmarmyCarnival from '../../assets/edmarmy-press-carnival.png';
import edmarmyEuroTour from '../../assets/edmarmy-press-eurotour.png';

/** Fanned stack of overlapping screenshots — lifts to a neat row on hover, click to open */
function PressStack({ images, accent, onOpen }: { images: { src: string; alt: string }[]; accent: string; onOpen: (index: number) => void }) {
  const positions = [
    'left-0 top-3 rotate-[-6deg] z-10 hover:!-translate-y-2 hover:!rotate-0',
    'left-[88px] top-0 rotate-[2deg] z-20 hover:!-translate-y-2 hover:!rotate-0',
    'left-[176px] top-4 rotate-[7deg] z-10 hover:!-translate-y-2 hover:!rotate-0',
  ];

  return (
    <div className="relative h-[132px] mt-1">
      {images.map((img, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onOpen(i)}
          aria-label={`Open larger view: ${img.alt}`}
          className={`absolute w-[108px] cursor-pointer rounded-lg border shadow-2xl transition-all duration-300 ease-out hover:!z-30 hover:!scale-105 focus:outline-none focus-visible:ring-2 ${positions[i]}`}
          style={{ borderColor: `${accent}40`, boxShadow: `0 12px 30px -10px ${accent}30` }}
        >
          <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full rounded-[7px] object-cover" />
        </button>
      ))}
    </div>
  );
}

/** Single browser-style screenshot frame */
function ScreenshotFrame({ src, alt, accent, onOpen }: { src: string; alt: string; accent: string; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open larger view: ${alt}`}
      className="mt-1 block w-full overflow-hidden rounded-lg border cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2"
      style={{ borderColor: `${accent}40`, boxShadow: `0 12px 30px -10px ${accent}30` }}
    >
      <img src={src} alt={alt} loading="lazy" className="w-full h-auto object-cover" />
    </button>
  );
}

type LightboxImage = { src: string; alt: string; href?: string };

/** Premium, Apple/iOS-style fullscreen image viewer with frosted-glass chrome */
function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft' && images.length > 1) onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onClose, onNavigate]);

  const current = images[index];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      {/* Frosted backdrop */}
      <div className="absolute inset-0 bg-[#04060A]/80 backdrop-blur-2xl" />

      {/* Close button */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20 cursor-pointer"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + images.length) % images.length); }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % images.length); }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Image card */}
      <div className="relative z-[1] flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[78vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)]"
          />
        </AnimatePresence>

        <p className="mt-5 max-w-[560px] text-center text-sm text-white/60 leading-relaxed">
          {current.alt}
        </p>

        {current.href && (
          <a
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#FF1B8D]/40 bg-[#FF1B8D]/10 px-5 py-2.5 text-sm font-medium text-[#FF1B8D] transition-all duration-200 hover:border-[#FF1B8D]/70 hover:bg-[#FF1B8D]/20 hover:text-white"
          >
            Read full article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}

        {images.length > 1 && (
          <div className="mt-4 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === index ? 'w-6 bg-white/80' : 'w-1.5 bg-white/25 hover:bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

const pushItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    stat: '+2.000',
    statLabel: 'artists emailed',
    label: 'Email marketing',
    description:
      'The album is sent directly to 2,000+ contacts — a key industry network built over 8 years in the electronic music scene. Real people. Real reach.',
    color: '#F5C842',
  },
  {
    logo: (
      <img src={soundcloudLogo} alt="SoundCloud" className="h-9 w-auto object-contain object-left" />
    ),
    stat: '+1M',
    statLabel: 'SoundCloud followers',
    label: 'SoundCloud repost',
    description:
      'Your track is reposted individually on SoundCloud to a network of over 1 million followers — additional visibility running parallel to the Beatport push.',
    color: '#FF5500',
    media: { type: 'single' as const, images: [{ src: soundcloudSongstats, alt: 'Mustache Crew Records SoundCloud analytics — 1.87M streams, 24.8K followers' }] },
  },
  {
    logo: (
      <img src={edmarmyLogo} alt="EDM Army" className="h-8 w-auto object-contain object-left" />
    ),
    stat: 'edmarmy.com',
    statLabel: 'press coverage',
    label: 'Press article',
    description:
      'A dedicated article published on EDM Army — one of the biggest EDM portals — promoting the album and putting your name in front of a global dance music audience.',
    color: '#FF1B8D',
    statHref: 'https://edmarmy.com/',
    media: {
      type: 'stack' as const,
      images: [
        { src: edmarmyXmas, alt: 'EDM Army article — Mustache Crew Turns Christmas Into a Global Rave', href: 'https://edmarmy.com/news/mustache-crew-turns-christmas-into-a-global-rave-with-mustache-gang-xmas-2025' },
        { src: edmarmyCarnival, alt: 'EDM Army article — Mustache Crew Brazilian Carnival Turns Beatport Into a Global Rave Statement', href: 'https://edmarmy.com/news/mustache-gang-brazilian-carnival-turns-beatport-into-a-global-rave-statement' },
        { src: edmarmyEuroTour, alt: 'EDM Army article — Mustache Crew Takes the Underground Global With Mustache Gang Euro Tour', href: 'https://edmarmy.com/news/mustache-crew-takes-the-underground-global-with-mustache-gang-euro-tour' },
      ],
    },
  },
];

export default function ExtraPushSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#060A06] overflow-hidden py-24 md:py-32"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 100% 100%, rgba(34,197,94,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div
          className={`mb-4 text-xs font-bold uppercase tracking-[2px] text-[#728A72] transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          Extra push
        </div>

        <h2
          className={`font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          Beyond the<br />
          <span className="text-[#22C55E]">Beatport push.</span>
        </h2>

        <p
          className={`mt-6 max-w-[540px] text-[#728A72] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          Your release doesn't stop at the chart push. It gets promoted across multiple channels at the same time.
        </p>

        <div
          className={`mt-12 grid md:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {pushItems.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#182B18] bg-[#0C140C] p-7 flex flex-col gap-5"
              style={{ boxShadow: `0 0 50px -12px ${item.color}18` }}
            >
              {/* Icon / Brand logo */}
              {item.logo ? (
                <div className="h-11 flex items-center flex-shrink-0">
                  {item.logo}
                </div>
              ) : (
                <div className="w-11 h-11 rounded-xl bg-[#060A06] border border-[#182B18] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
              )}

              {/* Stat */}
              <div>
                {item.statHref ? (
                  <a
                    href={item.statHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black leading-none inline-block underline decoration-2 underline-offset-4 decoration-[#FF1B8D]/40 hover:decoration-[#FF1B8D] transition-colors duration-200 cursor-pointer"
                    style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: item.color, letterSpacing: '-1.5px' }}
                  >
                    {item.stat}
                  </a>
                ) : (
                  <div
                    className="font-black leading-none"
                    style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: item.color, letterSpacing: '-1.5px' }}
                  >
                    {item.stat}
                  </div>
                )}
                <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#728A72] mt-1">
                  {item.statLabel}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-[#182B18] pt-5">
                <p className="text-xs font-bold uppercase tracking-[1.5px] mb-2" style={{ color: item.color }}>
                  {item.label}
                </p>
                <p className="text-[#728A72] text-sm leading-relaxed">{item.description}</p>

                {item.media?.type === 'stack' && (
                  <PressStack
                    images={item.media.images}
                    accent={item.color}
                    onOpen={(idx) => setLightbox({ images: item.media!.images, index: idx })}
                  />
                )}
                {item.media?.type === 'single' && (
                  <ScreenshotFrame
                    src={item.media.images[0].src}
                    alt={item.media.images[0].alt}
                    accent={item.color}
                    onOpen={() => setLightbox({ images: item.media!.images, index: 0 })}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to CTA */}
        <div
          className={`mt-14 flex flex-col items-center gap-2 transition-all duration-700 delay-400 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-sm text-[#728A72] text-center">
            30 spots. July 17. Your name on the list.
          </p>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#728A72" strokeWidth="2" strokeLinecap="round" className="opacity-50">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            index={lightbox.index}
            onClose={() => setLightbox(null)}
            onNavigate={(next) => setLightbox((prev) => (prev ? { ...prev, index: next } : prev))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
