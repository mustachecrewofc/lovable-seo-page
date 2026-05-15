import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import HeroBg from '../components/sections/HeroBg';
import IntroVideoSection from '../components/sections/IntroVideoSection';
import BuiltToBeFoundSection from '../components/sections/BuiltToBeFoundSection';
import ChatSemrushSection from '../components/sections/ChatSemrushSection';
import SEOReviewSection from '../components/sections/SEOReviewSection';
import LetLovableFixSection from '../components/sections/LetLovableFixSection';
import WhatsPossibleSection from '../components/sections/WhatsPossibleSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import PricingSection from '../components/sections/PricingSection';
import WhatsIncludedSection from '../components/sections/WhatsIncludedSection';

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <HeroBg />
        <IntroVideoSection />
        <BuiltToBeFoundSection />
        <div className="relative">
          <SEOReviewSection />
          <div
            className="relative z-10 -mt-[20vh] rounded-t-[48px] overflow-hidden"
            style={{ boxShadow: '0 -30px 80px -10px rgba(0,0,0,0.6)' }}
          >
            <ChatSemrushSection />
          </div>
        </div>
        <LetLovableFixSection />
        <HowItWorksSection />
        <WhatsPossibleSection />
        <WhatsIncludedSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
