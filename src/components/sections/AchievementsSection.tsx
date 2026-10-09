import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Award, Medal, Crown, ChevronLeft, ChevronRight, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { achievementsData } from '../../data/mockData';

export const AchievementsSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = achievementsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // 4-second Autoplay timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFF8EE] relative overflow-hidden select-none">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute -top-12 -left-12 w-96 h-96 text-[#F2A000]/15" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-16 -right-16 w-[30rem] h-[30rem] text-[#F2A000]/10" viewBox="0 0 500 500" fill="none">
          <path d="M 50,250 Q 250,50 450,250 T 850,250" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="350" cy="350" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-[#F2A000]/40 blur-[1px]"></div>
        <div className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full bg-[#F2A000]/30 blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#F2A000]/30 shadow-sm text-xs font-bold uppercase tracking-wider text-[#10264B] mb-4">
            <Trophy className="w-4 h-4 text-[#F2A000]" />
            <span>OUR ACHIEVEMENTS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10264B] leading-tight mb-4">
            Young Minds.{' '}
            <span className="relative inline-block text-[#F2A000] italic font-serif">
              Remarkable
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#F2A000]"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 3.5 120 2 198 8"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            Achievements.
          </h2>

          <p className="text-sm sm:text-base text-[#25334A]/75 max-w-2xl mx-auto leading-relaxed">
            Celebrating the extraordinary tournament victories, FIDE rating gains, and national milestones achieved by Velocity Chess Academy prodigies.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Side Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous Achievement"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-[#10264B] hover:bg-[#10264B] hover:text-white shadow-lg border border-[#F2A000]/30 flex items-center justify-center transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Achievement"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-[#10264B] hover:bg-[#10264B] hover:text-white shadow-lg border border-[#F2A000]/30 flex items-center justify-center transition-all duration-300 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4">
            {achievementsData.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`bg-white rounded-3xl overflow-hidden border ${
                    isActive ? 'border-[#F2A000] ring-2 ring-[#F2A000]/20 shadow-xl' : 'border-[#F2A000]/25 shadow-md'
                  } hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col cursor-pointer`}
                >
                  {/* Top Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge Top Right */}
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#F2A000] text-[#10264B] text-[11px] font-extrabold tracking-wider uppercase rounded-full shadow-md z-10">
                      {item.badge}
                    </span>

                    {/* Overlapping Medal Icon */}
                    <div className="absolute -bottom-4 left-5 w-9 h-9 rounded-full bg-gradient-to-br from-[#F2A000] to-[#D98A00] text-white flex items-center justify-center shadow-md border-2 border-white z-10">
                      {index % 2 === 0 ? <Trophy className="w-4 h-4" /> : <Medal className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-6 p-5 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <p className="text-xs font-bold text-[#E5A51B] uppercase tracking-wide mb-1 flex items-center gap-1.5">
                        <span>{item.winnerName}</span>
                        <span className="w-1 h-1 rounded-full bg-[#E5A51B]/50 inline-block"></span>
                        <span>{item.category}</span>
                      </p>
                      
                      <h3 className="font-serif font-bold text-lg text-[#10264B] leading-tight mb-2 group-hover:text-[#F2A000] transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-[#25334A]/70 line-clamp-2 leading-relaxed">
                        {item.tournament} — {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {achievementsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-[#F2A000]'
                    : 'w-2.5 bg-[#F2A000]/30 hover:bg-[#F2A000]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Achievements CTA Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/achievements')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#10264B] hover:bg-[#0A1A36] text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <span>View All Achievements</span>
            <ArrowRight className="w-4 h-4 text-[#F2A000] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Statistics Capsule */}
        <div className="max-w-5xl mx-auto mt-14 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#F2A000]/30 shadow-md p-6 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#F2A000]/20">
          
          <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
            <div className="flex items-center gap-2 text-[#10264B] font-extrabold text-2xl sm:text-3xl">
              <Award className="w-6 h-6 text-[#F2A000]" />
              <span>50+</span>
            </div>
            <span className="text-xs font-semibold text-[#25334A]/70 uppercase tracking-wider mt-1">
              State Medals
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            <div className="flex items-center gap-2 text-[#10264B] font-extrabold text-2xl sm:text-3xl">
              <Medal className="w-6 h-6 text-[#F2A000]" />
              <span>20+</span>
            </div>
            <span className="text-xs font-semibold text-[#25334A]/70 uppercase tracking-wider mt-1">
              National Medals
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            <div className="flex items-center gap-2 text-[#10264B] font-extrabold text-2xl sm:text-3xl">
              <Crown className="w-6 h-6 text-[#F2A000]" />
              <span>5+</span>
            </div>
            <span className="text-xs font-semibold text-[#25334A]/70 uppercase tracking-wider mt-1">
              FIDE Rated Players
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
            <div className="flex items-center gap-2 text-[#10264B] font-extrabold text-2xl sm:text-3xl">
              <TrendingUp className="w-6 h-6 text-[#F2A000]" />
              <span>100+</span>
            </div>
            <span className="text-xs font-semibold text-[#25334A]/70 uppercase tracking-wider mt-1">
              Students Ranked
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
