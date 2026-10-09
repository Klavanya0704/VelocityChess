import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { WelcomeSection } from '../components/sections/WelcomeSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { EventsSection } from '../components/sections/EventsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CtaSection } from '../components/sections/CtaSection';

export const HomePage: React.FC = () => {
  return (
    <main className="space-y-0">
      <HeroSection />
      <WelcomeSection />
      <ProgramsSection />
      <WhyChooseSection />
      <AchievementsSection />
      <EventsSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
};
