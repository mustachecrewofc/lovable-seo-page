import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const faqs = [
  { q: 'Do you guarantee a Beatport chart position?', a: "We don't guarantee positions — no label can honestly do that. What we guarantee is the full execution of our proven promotional strategy. Our past VAs hit #38 Overall Top 100, #2 Dubstep, and #1 Electronica/Downtempo on Beatport. We engineer for maximum chart potential, not guaranteed outcomes." },
  { q: 'How many artists will be selected?', a: 'Maximum 30 tracks — hard cap, no exceptions. The lineup is curated — not everyone who submits gets in. Selection is based on track quality, energy, genre fit, and overall compilation balance. Smaller lineup = more focused push = better chart potential per track.' },
  { q: 'When do submissions close?', a: 'Submissions close on August 15, 2026. The lineup will be locked and confirmed by August 22. Early submissions have a higher chance of selection as spots fill on a rolling basis — don\'t wait until the deadline.' },
  { q: 'When is the release?', a: 'The VA World Cup 2026 is scheduled for the World Cup 2026 window. The exact release date will be confirmed to accepted artists at lineup lock. Pre-save campaign begins 4 weeks before release.' },
  { q: 'What genres are accepted?', a: "We're open to all electronic music genres that carry World Cup energy: Tech House, House, Afro House, Techno, Breaks, Melodic Techno, Bass House, and similar styles. The main criteria is energy, originality, and a strong hook. If it makes a crowd move, submit it." },
  { q: 'What is the investment?', a: 'The investment is €299 per track upon acceptance. This covers production of all campaign assets, distribution costs, the full 360° promotional budget (playlists, email, SoundCloud, social, press), and full campaign coordination. Submission is always free — the investment only applies if your track is selected and you choose to join.' },
  { q: 'Do I need to promote my own track?', a: "Yes — and that's exactly what makes this model powerful. We coordinate a collective promotion calendar. Every artist posts on the same days with the same campaign assets. The combined reach of 30 artists promoting simultaneously is what drives the chart push. We provide all assets and the full schedule." },
  { q: 'What happens after I submit?', a: "We review within 7 business days. You'll receive feedback regardless of outcome. If accepted: artist agreement, artwork brief, campaign timeline, and access to the squad Telegram group. If not selected: we'll tell you why and may keep you in consideration for future VA campaigns." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-t border-[#2A2A3E] ${index === faqs.length - 1 ? 'border-b' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-8 group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-medium text-[#F0EDE6] group-hover:text-[#F5C842] transition-colors -tracking-[0.3px]">
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 5l5 5 5-5" stroke="#F5C842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[400px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm md:text-base leading-relaxed text-[#8A8A9A] max-w-[680px]">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="container py-16 md:py-24">
      <h2 className={`text-[40px] md:text-[56px] lg:text-[72px] font-black -tracking-[1.5px] text-[#F0EDE6] mb-10 md:mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        Questions? We've got answers.
      </h2>
      <div className={`max-w-[780px] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {faqs.map((item, i) => <FAQItem key={item.q} q={item.q} a={item.a} index={i} />)}
      </div>
    </section>
  );
}
