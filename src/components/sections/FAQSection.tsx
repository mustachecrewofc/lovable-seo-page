import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const faqs = [
  {
    q: 'What genres are accepted?',
    a: 'All electronic music genres. We curate for diversity across the 30 slots — tech house, melodic techno, dubstep, electronica, progressive house, bass house, peaktime techno, and more. The VA is stronger when the range is wide.',
  },
  {
    q: 'Is there a cost to submit?',
    a: 'Submitting is completely free. There are no upfront costs to send your demo.',
  },
  {
    q: 'What happens after I submit?',
    a: 'Mustache Crew A&R listens personally to every demo and responds within 7 days. No bots, no auto-rejections. If selected, you receive access to the squad Telegram group and the full campaign brief for July 17.',
  },
  {
    q: 'What if my track is not selected?',
    a: "Not every track fits every campaign — and that's not a quality judgment. If you're not in for this VA, we'll let you know and you're welcome to submit for future Mustache Crew campaigns.",
  },
  {
    q: 'Do I have to do anything on launch day?',
    a: 'Yes. Every artist is expected to activate their own audience on July 17 — stories, reels, email list, bio link, whatever your channels are. The coordinated push only works when everyone shows up. That commitment is part of being in the squad.',
  },
  {
    q: 'Does my audience need to buy the full album on Beatport?',
    a: 'Yes — and this is the key. For the chart strategy to work, people need to buy the full VA album on Beatport, not just your individual track. Every album purchase counts as a sale for all 30 tracks at once. That is what creates the chart momentum. Make sure you direct your fans specifically to the album link on Beatport, not just your track page.',
  },
  {
    q: 'When is the submission deadline?',
    a: 'Demos must be submitted by July 10, 2026. The VA releases July 17 — two days before the FIFA World Cup Final.',
  },
  {
    q: 'How many spots are still available?',
    a: '30 spots total. We are filling them now on a rolling basis — earlier submissions get priority consideration. Once the 30 are confirmed, submissions close.',
  },
  {
    q: 'Why is the release date July 17?',
    a: 'The FIFA World Cup Final 2026 is July 19. Releasing two days before the most-watched sporting event on the planet puts our album — and all 30 artists — in front of a global, highly engaged audience at exactly the right moment.',
  },
];

function FAQItem({ q, a, index, inView }: { q: string; a: string; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-[#182B18] overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        transitionDelay: `${80 + index * 60}ms`,
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-semibold text-sm md:text-base transition-colors"
          style={{ color: open ? '#F0EDE6' : 'rgba(240,237,230,0.70)' }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? '#22C55E' : 'transparent',
            border: open ? '1px solid #22C55E' : '1px solid #182B18',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke={open ? '#060A06' : '#728A72'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0px' }}
      >
        <p className="pb-5 text-sm text-[#728A72] leading-relaxed pr-10">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-32"
    >
      <div className="container max-w-[760px]">

        {/* Label */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
          className="mb-7 flex items-center gap-3"
        >
          <div className="h-px w-6 bg-[#22C55E]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#22C55E]">
            FAQ
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-black text-[#F0EDE6] leading-[0.95] -tracking-[2px] mb-12"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            transitionDelay: '40ms',
          }}
        >
          Questions.<br />
          <span className="text-[#728A72]">Answered.</span>
        </h2>

        {/* FAQ items */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
