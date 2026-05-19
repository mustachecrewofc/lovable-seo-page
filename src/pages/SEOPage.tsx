import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import HeroBg from '../components/sections/HeroBg';
import BuiltToBeFoundSection from '../components/sections/BuiltToBeFoundSection';
import BeatportMultiplierSection from '../components/sections/BeatportMultiplierSection';
import SEOReviewSection from '../components/sections/SEOReviewSection';
import WhatsPossibleSection from '../components/sections/WhatsPossibleSection';
import SquadMindsetReveal from '../components/sections/SquadMindsetReveal';
import ChatSemrushSection from '../components/sections/ChatSemrushSection';
import WorldCupWindowSection from '../components/sections/WorldCupWindowSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import PricingSection from '../components/sections/PricingSection';
import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#060A06]">
      <Navbar />

      <main id="main-content">
        {/* Beat 1 — O Chamado */}
        <HeroSection />

        {/* Beat 2 — A Tensão (scroll reveal) */}
        <HeroBg />

        {/* Beat 3 — O Problema: Solo releases don't chart */}
        <BuiltToBeFoundSection />

        {/* Beat 4 — A Arma Secreta: 1 album = 30 chart votes */}
        <BeatportMultiplierSection />

        {/* Beat 5 — A Prova: Proof. Not promises. */}
        <SEOReviewSection />

        {/* Beat 6 — A Máquina: The infrastructure */}
        <WhatsPossibleSection />

        {/* Beat 7 — O Squad: 30 artists. One heartbeat. */}
        <SquadMindsetReveal />

        {/* Beat 8 — A Comunidade: Squad in action (Telegram chat) */}
        <ChatSemrushSection hideHero />

        {/* Beat 9 — A Janela: July 17, 2026. 5 billion people watching. */}
        <WorldCupWindowSection />

        {/* Beat 10 — O Processo: 4 steps */}
        <HowItWorksSection />

        {/* Beat 11 — O Investimento: €299. Everything included. */}
        <PricingSection />

        {/* Beat 12 — O Chamado Final: Ready to write your chapter? */}
        <CTASection />

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
