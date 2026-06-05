import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import HeroBg from '../components/sections/HeroBg';
import SquadMindsetReveal from '../components/sections/SquadMindsetReveal';
import SEOReviewSection from '../components/sections/SEOReviewSection';
import ChatSemrushSection from '../components/sections/ChatSemrushSection';
import ExtraPushSection from '../components/sections/ExtraPushSection';
import CTASection from '../components/sections/CTASection';

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#060A06]">
      <Navbar />

      <main id="main-content">
        {/* 1 — Hook: your name on Beatport charts */}
        <HeroSection />

        {/* 2 — Visual transition */}
        <HeroBg />

        {/* 3 — The mechanism: 1 purchase = 30 votes + the trick */}
        <SquadMindsetReveal />

        {/* 4 — Proof: previous chart tops */}
        <SEOReviewSection />

        {/* 5 — Community: Telegram + same mindset artists */}
        <ChatSemrushSection />

        {/* 6 — Extra push: EDM Army + SoundCloud + Email */}
        <ExtraPushSection />

        {/* 7 — Submit demo CTA */}
        <CTASection />
      </main>
    </div>
  );
}
