import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import logoWhite from '@/assets/mustache-crew-white.png';
import mustacheIcon from '@/assets/mustache-icon.png';

type Msg = {
  author: string;
  role?: string;
  isCrew?: boolean;
  content: string;
  color?: string;
  delay: number;
};

const messages: Msg[] = [
  {
    author: 'Mustache Crew',
    role: 'A&R · admin',
    isCrew: true,
    content: "Squad, it's official 🚨 VA World Cup 2026 drops June 12. 30 artists, one coordinated push. Pre-save links go live tomorrow at 11AM CET. Are we ready? 🔥",
    delay: 600,
  },
  {
    author: 'Carlos Mendez',
    role: 'Tech House · MX',
    color: '#3B82F6',
    content: "LET'S GOOO 🚀🚀 Stories already drafted, posting the second the link drops. This is THE one.",
    delay: 1800,
  },
  {
    author: 'Sofia Lindqvist',
    role: 'Melodic Techno · SE',
    color: '#F59E0B',
    content: "My track is mastered and loaded ✅ Pre-save banner in bio, reel cut for launch day. Squad energy 💪",
    delay: 3000,
  },
  {
    author: 'TechnoMike',
    role: 'Peak Time · DE',
    color: '#10B981',
    content: "Just hit my mailing list — 12k subs primed for the drop. Let's chart this thing 📈",
    delay: 4200,
  },
  {
    author: 'Lua Ferreira',
    role: 'Afro House · BR',
    color: '#EC4899',
    content: "Linha de comunicação aberta com a galera daqui do Brasil 🇧🇷 vamos empurrar forte na semana de lançamento!",
    delay: 5400,
  },
  {
    author: 'Mustache Crew',
    role: 'A&R · admin',
    isCrew: true,
    content: "That's the squad mindset 🔥 30 artists, one drop, one push. We run the war room — you bring the heat. World Cup window is ours.",
    delay: 6800,
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

function Avatar({ msg }: { msg: Msg }) {
  if (msg.isCrew) {
    return (
      <div className="w-9 h-9 rounded-full bg-[#F5C842] flex items-center justify-center flex-shrink-0 shadow-sm">
        <img src={mustacheIcon} alt="" className="w-6 h-6 object-contain" />
      </div>
    );
  }
  const initials = msg.author.split(' ').map(s => s[0]).slice(0, 2).join('');
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[#0A0A0F] text-xs font-bold shadow-sm"
      style={{ background: `linear-gradient(135deg, ${msg.color}, ${msg.color}cc)` }}
    >
      {initials}
    </div>
  );
}

export default function ChatSemrushSection({ hideHero = false }: { hideHero?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const [visible, setVisible] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    messages.forEach((m, i) => {
      setTimeout(() => setVisible(p => [...p, i]), m.delay);
    });
  }, [inView, started]);

  const show = (i: number) => visible.includes(i);
  const showTyping = (i: number) => visible.length === i && i < messages.length;

  return (
    <section className="relative overflow-hidden">
      {!hideHero && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #F5C842 0%, #E63B2E 40%, #7c1d1d 80%, #0A0A0F 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(245,200,66,0.12) 0%, rgba(10,10,15,0) 60%)' }} aria-hidden="true" />
        </>
      )}

      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="relative z-10">
        {!hideHero && (
        <div className="container pt-20 md:pt-28 pb-16 text-center">
          <h2
            className={`font-black text-[#F0EDE6] leading-tight -tracking-[2px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Squad Mindset = <span className="text-[#F5C842]">Chart Potential</span>
          </h2>
          <p className={`mt-4 text-[#F0EDE6]/85 text-lg max-w-[560px] mx-auto leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            30 artists working as one coordinated squad, aiming for Beatport chart positions.
            This is how independent music competes at the highest level.
          </p>
          <div className={`mt-8 flex items-center justify-center gap-3 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <img src={logoWhite} alt="Mustache Crew" className="h-14 w-auto invert" />
          </div>
          <p className={`mt-3 text-[#F0EDE6]/70 text-sm max-w-[480px] mx-auto transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            Independent label born from a global crew of producers and DJs. We push underground sounds with worldwide distribution and a tight-knit community.
          </p>
        </div>
        )}

        <div
          className="relative"
          style={{ background: hideHero ? '#0A0A0F' : 'linear-gradient(to bottom, transparent 0%, #0A0A0F 12%)' }}
        >
          <div className={`container max-w-[700px] pb-20 ${hideHero ? 'pt-24 md:pt-32' : 'pt-12'}`}>
            {/* Telegram-like header */}
            <div className="flex items-center gap-3 bg-[#13131F] border border-[#2A2A3E] rounded-t-2xl px-5 py-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center flex-shrink-0">
                <img src={mustacheIcon} alt="" className="w-7 h-7 object-contain" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-[#F0EDE6] text-sm">VA World Cup 2026 — Squad</p>
                <p className="text-xs text-[#8A8A9A]">30 artists · 1 drop · coordinated push</p>
              </div>
              <span className="text-xs text-[#8A8A9A] bg-[#0A0A0F] border border-[#2A2A3E] px-2 py-1 rounded-full">Telegram</span>
            </div>

            <div className="bg-[#0F0F1A] border-x border-b border-[#2A2A3E] rounded-b-2xl px-4 py-5 flex flex-col gap-4 min-h-[400px]">
              {messages.map((msg, i) =>
                show(i) ? (
                  <div key={i} className="flex gap-2.5 items-start animate-[chat-message_0.35s_ease-out_forwards]">
                    <Avatar msg={msg} />
                    <div className="max-w-[80%]">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: msg.isCrew ? '#F5C842' : msg.color }}
                        >
                          {msg.author}
                        </span>
                        {msg.role && <span className="text-[10px] text-[#8A8A9A] uppercase tracking-wide">{msg.role}</span>}
                      </div>
                      <div
                        className={`text-[15px] leading-relaxed px-4 py-2.5 rounded-2xl rounded-tl-sm ${
                          msg.isCrew
                            ? 'bg-[#F5C842]/10 border border-[#F5C842]/30 text-[#F0EDE6]'
                            : 'bg-[#1A1A2E] text-[#F0EDE6]'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  </div>
                ) : showTyping(i) ? (
                  <div key={`typing-${i}`} className="flex gap-2.5 items-center text-[#8A8A9A] text-sm pl-12">
                    <span>{msg.author} is typing</span>
                    <Dots />
                  </div>
                ) : null
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
