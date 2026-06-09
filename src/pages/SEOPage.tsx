import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import SquadMindsetReveal from '../components/sections/SquadMindsetReveal';
import IntroductionSection from '../components/sections/IntroductionSection';
import SEOReviewSection from '../components/sections/SEOReviewSection';
import ChatSemrushSection from '../components/sections/ChatSemrushSection';
import ExtraPushSection from '../components/sections/ExtraPushSection';
import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#060A06]">
      <Navbar />

      <main id="main-content">
        {/* 1 — Hook */}
        <HeroSection />

        {/* 2 — Understanding: what this community is */}
        <div id="mission"><IntroductionSection /></div>

        {/* 3 — Desire: solo vs VA contrast */}
        <SquadMindsetReveal />

        {/* 4 — Proof: three campaigns, real screenshots */}
        <SEOReviewSection />

        {/* 5 — Inside: the community in action */}
        <div id="community"><ChatSemrushSection /></div>

        {/* 7 — Value stack: beyond Beatport */}
        <ExtraPushSection />

        {/* 8 — CTA */}
        <CTASection />

        {/* 9 — FAQ (last) */}
        <FAQSection />
      </main>
    </div>
  );
}
