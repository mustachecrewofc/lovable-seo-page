import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

type Step = { type: 'user' | 'ai' | 'loading' | 'thinking' | 'file'; content?: string; delay: number };

const steps: Step[] = [
  { type: 'user', content: "Pre-order links go live in 2 hours. Everyone ready to blast socials at 11 AM sharp? 🚀", delay: 600 },
  { type: 'loading', delay: 1400 },
  { type: 'ai', content: "Posts scheduled. Email list primed. Let's go 🔥 — Artist_Carlos · Stories + reel locked, cracking that Top 10 🚀 — DJ_Sofia · Pre-save in bio updated, squad assets loaded ✅ — TechnoMike", delay: 2600 },
  { type: 'file', content: 'world-cup-release-week-playbook.pdf', delay: 3600 },
  { type: 'user', content: "Same here. First 72h = everything. Let's make history 💪", delay: 4600 },
  { type: 'ai', content: "That's the squad mindset. 15 artists, one push, coordinated drop. Mustache Crew runs the direction — you bring the track, we run the war room from prep through the full World Cup window.", delay: 5600 },
];

function Dots() {
  return (
    <div className="flex gap-1 py-1">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#F5C842] animate-[loading-dot_1.4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </div>
  );
}

export default function ChatSemrushSection() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [visible, setVisible] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    steps.forEach((s, i) => {
      setTimeout(() => setVisible(p => [...p, i]), s.delay);
    });
  }, [inView, started]);

  const show = (i: number) => visible.includes(i);

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #F5C842 0%, #E63B2E 40%, #7c1d1d 80%, #0A0A0F 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(245,200,66,0.12) 0%, rgba(10,10,15,0) 60%)' }} aria-hidden="true" />

      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="relative z-10">
        <div className="container pt-20 md:pt-28 pb-16 text-center">
          <h2
            className={`font-black text-[#F0EDE6] leading-tight -tracking-[2px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Squad Mindset = <span className="text-[#F5C842]">Chart Potential</span>
          </h2>
          <p className={`mt-4 text-[#F0EDE6]/85 text-lg max-w-[560px] mx-auto leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            15 artists working as one coordinated squad, aiming for Beatport chart positions.
            This is how independent music competes at the highest level.
          </p>
          <div className={`mt-6 flex items-center justify-center gap-2 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#F5C842"/>
              <path d="M7 14c1.5-2 3-2 5 0s3.5 2 5 0" stroke="#060612" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            <span className="font-black text-[#F0EDE6] text-lg tracking-wide">MUSTACHE CREW</span>
            <span className="text-[#F0EDE6]/70 text-sm font-medium">Records · est. 2018</span>
          </div>
          <p className={`mt-3 text-[#F0EDE6]/70 text-sm max-w-[480px] mx-auto transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            Independent label born from a global crew of producers and DJs. We push underground sounds with worldwide distribution and a tight-knit community.
          </p>
        </div>

        <div
          className="relative"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #0A0A0F 12%)' }}
        >
          <div className="container max-w-[700px] pb-20">
            <div className="flex flex-col gap-5 pt-4">

              {show(0) && (
                <div className="flex justify-end animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="bg-[#F5C842] text-[#060612] text-base px-5 py-3.5 rounded-[20px] rounded-br-sm shadow-sm max-w-[75%] font-medium">
                    {steps[0].content}
                  </div>
                </div>
              )}

              {show(1) && !show(2) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="text-[#8A8A9A] text-sm">
                    <span>Squad is typing...</span>
                    <Dots />
                  </div>
                </div>
              )}

              {show(2) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="max-w-[80%]">
                    <p className="text-[#F0EDE6] text-base leading-relaxed">{steps[2].content}</p>
                    <p className="text-xs text-[#8A8A9A] mt-1.5">World Cup Squad · Telegram</p>
                  </div>
                </div>
              )}

              {show(3) && (
                <div className="animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="inline-flex items-center gap-2 bg-[#13131F] border border-[#2A2A3E] px-3 py-2 rounded-xl text-sm text-[#8A8A9A] shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span className="text-[#F5C842] underline">Open</span>
                    <span className="font-medium text-[#F0EDE6]">{steps[3].content}</span>
                  </div>
                  <p className="text-xs text-[#8A8A9A] mt-1.5 ml-1">Shared in the squad group · pinned by Mustache Crew.</p>
                </div>
              )}

              {show(4) && (
                <div className="flex justify-end animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="bg-[#F5C842] text-[#060612] text-base px-5 py-3.5 rounded-[20px] rounded-br-sm shadow-sm max-w-[75%] font-medium">
                    {steps[4].content}
                  </div>
                </div>
              )}

              {show(5) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="max-w-[80%]">
                    <p className="text-[#F0EDE6] text-base leading-relaxed">{steps[5].content}</p>
                    <p className="text-xs text-[#8A8A9A] mt-1.5">Mustache Crew · A&R</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 bg-[#13131F] border border-[#2A2A3E] rounded-2xl px-5 py-4 shadow-sm">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C842" strokeWidth="2" className="mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <div>
                  <p className="font-semibold text-[#F0EDE6] text-sm">Free to submit. Worldwide.</p>
                  <p className="text-[#8A8A9A] text-sm mt-1 leading-relaxed">
                    No submission fee, no membership. Selected artists sign a fair distribution deal with{' '}
                    <span className="font-medium text-[#F5C842]">transparent royalty splits</span>. Deadline: March 31, 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
