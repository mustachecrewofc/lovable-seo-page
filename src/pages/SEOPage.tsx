import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import IntroductionSection from '../components/sections/IntroductionSection';
import JourneySection from '../components/sections/JourneySection';
import SquadMindsetReveal from '../components/sections/SquadMindsetReveal';
import SEOReviewSection from '../components/sections/SEOReviewSection';
import ChatSemrushSection from '../components/sections/ChatSemrushSection';
import ExtraPushSection from '../components/sections/ExtraPushSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#060A06]">
      <Navbar />

      <main id="main-content">
        {/* 1 — Hook: your name on Beatport charts */}
        <HeroSection />

        {/* 2 — Mission: community intro, goal, why together */}
        <div id="mission"><IntroductionSection /></div>

        {/* 3 — Journey: 6-step orbital from demo to chart */}
        <div id="journey"><JourneySection /></div>

        {/* 4 — The mechanism: community is the strategy */}
        <SquadMindsetReveal />

        {/* 5 — Proof: previous chart tops */}
        <SEOReviewSection />

        {/* 6 — Community: Telegram + same mindset artists */}
        <div id="community"><ChatSemrushSection /></div>

        {/* 7 — Extra push: EDM Army + SoundCloud + Email */}
        <ExtraPushSection />

        {/* 8 — Submit demo CTA */}
        <CTASection />

        {/* 9 — FAQ (last) */}
        <FAQSection />
      </main>
    </div>
  );
}
