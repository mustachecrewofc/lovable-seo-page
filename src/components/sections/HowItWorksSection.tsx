import { useInView } from '../../hooks/useInView';

const steps = [
  {
    title: 'Submit Your Demo',
    desc: 'Send your best, most finished track via the submission form. Private SoundCloud link, WeTransfer, or Dropbox. Include your artist name, email, and Spotify profile. Submission is free.',
  },
  {
    title: 'We Review Within 7 Days',
    desc: "We listen to every submission. You'll receive feedback either way — accepted or not. Selection is based on track quality, energy, fit with the World Cup theme, and genre balance across the compilation.",
  },
  {
    title: 'Confirm & Join the Squad',
    desc: 'Accepted artists receive the artist agreement, artwork brief, and campaign timeline. You confirm your spot (€299 investment) and join the private Telegram group with the full lineup.',
  },
  {
    title: 'Push Together',
    desc: 'From pre-save launch to release day, every artist moves together. Coordinated posts, shared assets, daily guidance from Mustache Crew — one unit, one push, one campaign built around the world\'s biggest moment.',
  },
];

export default function HowItWorksSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="how-it-works"
      className="container py-20 md:py-28"
    >
      <h2
        className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
      >
        How it <span className="text-[#F5C842]">works</span>
      </h2>
      <p className="mt-5 max-w-[560px] text-[#8A8A9A] text-base md:text-lg">
        Four steps from demo to release. Submission is always free.
      </p>

      <div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`relative bg-[#13131F] border border-[#2A2A3E] rounded-2xl p-7 md:p-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: inView ? `${i * 100 + 100}ms` : '0ms' }}
          >
            <div
              className="text-[#F5C842] font-black leading-none mb-5 -tracking-[2px]"
              style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#F0EDE6] mb-3 -tracking-[0.4px]">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-[#8A8A9A] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}