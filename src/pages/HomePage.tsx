import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { AboutUsSection } from '../components/sections/AboutUsSection';
import { ProgramsSection } from '../components/sections/ProgramsSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { EventsSection } from '../components/sections/EventsSection';
import { ResourcesSection } from '../components/sections/ResourcesSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#FFF9EF]">
      <HeroSection />
      <AboutUsSection />
      <ProgramsSection />
      <AchievementsSection />
      <EventsSection />
      <ResourcesSection />
    </main>
  );
};

export default HomePage;
