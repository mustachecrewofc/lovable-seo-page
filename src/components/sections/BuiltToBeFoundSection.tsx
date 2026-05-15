import { useInView } from '../../hooks/useInView';

const features = [
  {
    title: 'Renderização no servidor para apps novos',
    description: 'As páginas são renderizadas como HTML completo antes de chegarem ao navegador, para que Google, ChatGPT e Perplexity descubram seu conteúdo imediatamente. Gratuito em todos os planos.',
  },
  {
    title: 'Pré-renderização para apps existentes',
    description: 'Snapshots de HTML estático são gerados automaticamente para todos os apps da Lovable criados na nossa tecnologia anterior. Sem ativação manual ou migração. Gratuito em todos os planos.',
  },
  {
    title: 'Prévias sociais mais completas',
    description: 'Links de prévia social, por exemplo no LinkedIn, Slack, WhatsApp e X, agora são únicos por página.',
  },
  {
    title: 'Visibilidade em busca por IA',
    description: 'Saída em markdown estruturado, HTML semântico e dados estruturados ajudam seu app a aparecer no ChatGPT, Claude, Perplexity e outras ferramentas de busca por IA.',
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
      {/* Sticky card — cada card fica preso enquanto o próximo sobe por cima */}
      <div
        className="sticky"
        style={{
          top: `${88 + index * 18}px`,
          zIndex: index + 1,
        }}
      >
        <div
          style={{
            background: '#F0EDE6',
            borderRadius: '28px',
            padding: '56px 56px',
            minHeight: '420px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 -2px 20px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#1B1B1B', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: '20px' }}>
            {title}
          </h3>
          <p style={{ fontSize: '17px', color: '#73726F', lineHeight: 1.65 }}>
            {description}
          </p>
        </div>
      </div>
      {/* Espaçador: cria o espaço de scroll entre um card e o próximo */}
      {!isLast && <div style={{ height: '480px' }} />}
    </div>
  );
}

export default function BuiltToBeFoundSection() {
  const { ref, inView } = useInView();

  return (
    <section className="relative" style={{ overflow: 'clip' }}>
      {/* Orange glow at bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 15% 100%, #fb923c55 0%, #f4724433 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">

          {/* LEFT: sticky heading */}
          <div className="md:w-[40%] md:sticky md:top-[80px] md:self-start">
            <div
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <h2
                className="font-bold text-[#1B1B1B] leading-[1.0] -tracking-[2.5px]"
                style={{ fontSize: 'clamp(48px, 6.5vw, 88px)' }}
              >
                Criado para ser encontrado
              </h2>
              <p className="mt-5 text-[#73726F] text-lg -tracking-[0.36px] leading-relaxed font-medium">
                Seus apps são descobertos assim que você publica
              </p>
              <p className="mt-3 text-[#73726F] text-sm md:text-base leading-relaxed">
                Apps novos já saem com renderização no servidor completa — HTML real que mecanismos
                de busca e crawlers de IA conseguem ler imediatamente. Apps criados na tecnologia
                anterior recebem snapshots pré-renderizados para que crawlers também acessem seu
                conteúdo.
              </p>
            </div>
          </div>

          {/* RIGHT: stacking sticky cards */}
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
