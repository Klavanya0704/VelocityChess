import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
    </main>
  );
};

export default HomePage;
