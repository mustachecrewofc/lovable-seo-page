import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';

type Step = { type: 'user' | 'ai' | 'loading' | 'thinking' | 'file'; content?: string; delay: number };

const steps: Step[] = [
  { type: 'user', content: 'Quais palavras-chave devo mirar?', delay: 600 },
  { type: 'loading', delay: 1200 },
  { type: 'thinking', content: 'Pensou por 10s', delay: 3000 },
  { type: 'ai', content: 'Com base no seu tráfego e nos concorrentes, mire em "vibe coding" (12k/mês) e "ai app generator" (9k/mês).', delay: 3700 },
  { type: 'file', content: 'index.html', delay: 4600 },
  { type: 'ai', content: 'Você não está ranqueando para vibe coding. 12k/mês. Quer que eu crie uma página?', delay: 5600 },
  { type: 'user', content: 'Sim, por favor!', delay: 6800 },
  { type: 'ai', content: 'Pronto! /vibe-coding está no ar com título, meta e H1 otimizados.', delay: 7800 },
];

function Dots() {
  return (
    <div className="flex gap-1 py-1">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#aaa] animate-[loading-dot_1.4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
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
      {/* Full-viewport warm orange/red/coral gradient — matches original */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #fb923c 0%, #f43f5e 40%, #a855f7 80%, #7c3aed 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(251,146,60,0.15) 0%, rgba(252,251,248,0) 60%)' }} aria-hidden="true" />

      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="relative z-10">
        {/* Section header — centered on gradient */}
        <div className="container pt-20 md:pt-28 pb-16 text-center">
          <h2
            className={`font-bold text-white leading-tight -tracking-[2px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Seu cofundador de descoberta
          </h2>
          <p className={`mt-4 text-white/80 text-lg max-w-[520px] mx-auto leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            Pergunte como você está performando em busca e aja diretamente no chat
          </p>
          {/* Semrush logo */}
          <div className={`mt-6 flex items-center justify-center gap-2 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#1B1B1B"/>
              <path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-bold text-[#1B1B1B] text-lg tracking-wide">SEMRUSH</span>
            <span className="text-[#1B1B1B]/70 text-sm font-medium">An Adobe Company</span>
          </div>
          {/* Extra tagline */}
          <p className={`mt-3 text-white/70 text-sm max-w-[480px] mx-auto transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            Rankings reais de palavras-chave, insights de tráfego e inteligência competitiva da Semrush disponíveis diretamente no chat do builder. Sem precisar de conta Semrush.
          </p>
        </div>

        {/* Chat messages — fade from gradient to cream */}
        <div
          className="relative"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #FCFBF8 12%)' }}
        >
          <div className="container max-w-[700px] pb-20">
            <div className="flex flex-col gap-5 pt-4">

              {show(0) && (
                <div className="flex justify-end animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="bg-white text-[#1B1B1B] text-base px-5 py-3.5 rounded-[20px] rounded-br-sm shadow-sm max-w-[75%] font-medium">
                    {steps[0].content}
                  </div>
                </div>
              )}

              {show(1) && !show(3) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="text-[#73726F] text-sm">
                    <span>Buscando dados da Semrush...</span>
                    <Dots />
                  </div>
                </div>
              )}

              {show(2) && (
                <div className="animate-[chat-message_0.35s_ease-out_forwards]">
                  <span className="text-xs text-[#aaa] bg-[#F0EDE6] px-3 py-1 rounded-full">
                    {steps[2].content}
                  </span>
                </div>
              )}

              {show(3) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="max-w-[80%]">
                    <p className="text-[#282827] text-base leading-relaxed">{steps[3].content}</p>
                    <p className="text-xs text-[#aaa] mt-1.5">Com tecnologia da Semrush</p>
                  </div>
                </div>
              )}

              {show(4) && (
                <div className="animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="inline-flex items-center gap-2 bg-white border border-[#E0DDD6] px-3 py-2 rounded-xl text-sm text-[#73726F] shadow-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    <span className="text-[#4E93FF] underline">Ler</span>
                    <span className="font-medium text-[#1B1B1B]">{steps[4].content}</span>
                  </div>
                  <p className="text-xs text-[#aaa] mt-1.5 ml-1">Palavras-chave pesquisadas e prontas para ajudar</p>
                </div>
              )}

              {show(5) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="max-w-[80%]">
                    <p className="text-[#282827] text-base leading-relaxed">{steps[5].content}</p>
                    <p className="text-xs text-[#aaa] mt-1.5">Com tecnologia da Semrush</p>
                  </div>
                </div>
              )}

              {show(6) && (
                <div className="flex justify-end animate-[chat-message_0.35s_ease-out_forwards]">
                  <div className="bg-white text-[#1B1B1B] text-base px-5 py-3.5 rounded-[20px] rounded-br-sm shadow-sm max-w-[75%] font-medium">
                    {steps[6].content}
                  </div>
                </div>
              )}

              {show(7) && (
                <div className="flex justify-start animate-[chat-message_0.35s_ease-out_forwards]">
                  <p className="text-[#282827] text-base leading-relaxed max-w-[80%]">
                    <span className="text-green-600 mr-1">✓</span>{steps[7].content}
                  </p>
                </div>
              )}
            </div>

            {/* Info card */}
            <div className="mt-10 bg-white border border-[#E8E4DC] rounded-2xl px-5 py-4 shadow-sm">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#73726F" strokeWidth="2" className="mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <div>
                  <p className="font-semibold text-[#1B1B1B] text-sm">Usa seus créditos normais de build.</p>
                  <p className="text-[#73726F] text-sm mt-1 leading-relaxed">
                    Conversar com dados da Semrush usa créditos normais de build — sem cobrança separada e sem exigir conta Semrush.{' '}
                    <span className="font-medium text-[#1B1B1B]">Conversar com dados da Semrush não tem custo extra até 15 de agosto de 2026.</span>
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
