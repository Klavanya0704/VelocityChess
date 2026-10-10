import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top automatically on route navigation (or smooth scroll to hash anchor)
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFF9EF] font-sans antialiased text-[#25334A]">
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
