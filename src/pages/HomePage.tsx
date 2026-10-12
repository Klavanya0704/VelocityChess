import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/hero/HeroSection';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { EventsSection } from '../components/sections/EventsSection';
import { ResourcesSection } from '../components/sections/ResourcesSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#FFF9EF]">
      <SEO
        title="Velocity Chess Academy — Strategic Excellence & Master Coaching"
        description="Nurturing strategic, confident, and resilient thinkers through master-level chess instruction, FIDE tournament prep, and holistic youth growth in Hyderabad."
        canonicalPath="/"
      />
      <HeroSection />
      <AboutUsSection />
      <ProgramsSection />
      <AchievementsSection />
      <EventsSection />
      <ResourcesSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
