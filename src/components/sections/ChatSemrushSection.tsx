import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

type ChatMessage = {
  author: string;
  role?: string;
  time: string;
  content: string;
  color: string;
  delay: number;
};

const messages: ChatMessage[] = [
  {
    author: 'Mustache Crew',
    role: 'A&R',
    time: '9:14 AM',
    content: "Pre-order links go live in 2 hours. Everyone ready to blast socials at 11 AM sharp? 🚀",
    color: '#F5C842',
    delay: 600,
  },
  {
    author: 'Artist_Carlos',
    time: '9:16 AM',
    content: "Posts scheduled. Email list primed. Let's go 🔥",
    color: '#3B82F6',
    delay: 1600,
  },
  {
    author: 'DJ_Sofia',
    time: '9:18 AM',
    content: "Same! Stories + reel ready. Let's crack that Beatport Top 10 🚀",
    color: '#F59E0B',
    delay: 2600,
  },
  {
    author: 'TechnoMike',
    time: '9:20 AM',
    content: "Pre-save link in bio updated. Squad assets all loaded ✅",
    color: '#10B981',
    delay: 3600,
  },
  {
    author: 'Mustache Crew',
    role: 'A&R',
    time: '9:21 AM',
    content: "This is what winning looks like. First 72h = everything. Let's make history 💪",
    color: '#F5C842',
    delay: 4600,
  },
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
    messages.forEach((s, i) => {
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
            <div className="bg-[#13131F] border border-[#2A2A3E] rounded-2xl shadow-xl overflow-hidden">
              {/* Telegram group header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2A2A3E] bg-[#0F0F1A]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5C842] to-[#E63B2E] flex items-center justify-center flex-shrink-0">
                  <Users size={18} className="text-[#060612]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#F0EDE6] text-sm">Carnival Worldwide Squad</p>
                  <p className="text-xs text-[#8A8A9A] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                    15 artists · coordinating release week
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#F5C842] font-bold border border-[#F5C842]/40 rounded px-2 py-0.5">Telegram</span>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-4 px-5 py-5 min-h-[340px]">
                {messages.map((m, i) => (
                  show(i) && (
                    <div key={i} className="flex gap-3 animate-[chat-message_0.35s_ease-out_forwards]">
                      <div
                        className="w-9 h-9 rounded-full flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}99)` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          <span className="font-semibold text-[#F0EDE6] text-sm" style={{ color: m.color }}>
                            {m.author}
                          </span>
                          {m.role && (
                            <span className="text-[10px] uppercase tracking-wider text-[#F5C842] font-bold border border-[#F5C842]/40 rounded px-1.5 py-0.5">
                              {m.role}
                            </span>
                          )}
                          <span className="text-xs text-[#8A8A9A]">{m.time}</span>
                        </div>
                        <p className="text-[#F0EDE6] text-sm leading-relaxed mt-0.5">{m.content}</p>
                      </div>
                    </div>
                  )
                ))}

                {show(messages.length - 1) === false && started && (
                  <div className="flex items-center gap-2 text-[#8A8A9A] text-xs">
                    <span>squad is typing</span>
                    <Dots />
                  </div>
                )}
              </div>

              {/* Input bar (decorative) */}
              <div className="flex items-center gap-2 px-4 py-3 border-t border-[#2A2A3E] bg-[#0F0F1A]">
                <div className="flex-1 bg-[#1A1A28] border border-[#2A2A3E] rounded-full px-4 py-2 text-sm text-[#8A8A9A]">
                  Message Carnival Worldwide Squad…
                </div>
                <button className="w-9 h-9 rounded-full bg-[#F5C842] flex items-center justify-center flex-shrink-0" aria-label="Send">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#060612" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </div>
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
