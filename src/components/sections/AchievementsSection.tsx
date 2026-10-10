import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Medal, Users, Crown, Globe, ChevronLeft, ChevronRight, ArrowRight, Award } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1); // Default center on National Champion
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // 5 Carousel Slides for smooth rotation
  const carouselItems = [
    {
      id: 'ach-1',
      title: 'State Champion 2025',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      badgeLabel: 'State Champion 2025',
      imageUrl: '/assets/classroom_hero_bg.jpg',
      description: 'Our student secured 1st place in the Andhra Pradesh State Chess Championship.',
      category: 'U-12 Category'
    },
    {
      id: 'ach-2',
      title: 'National Champion 2025',
      badgeIcon: <Crown className="w-4 h-4 text-[#10264B]" />,
      badgeLabel: 'National Champion 2025',
      imageUrl: '/assets/ref_hero_bg.jpg',
      description: 'Our student won the National Chess Championship and brought pride to the academy.',
      category: 'U-14 Category'
    },
    {
      id: 'ach-3',
      title: 'International Representation',
      badgeIcon: <Globe className="w-4 h-4 text-[#10264B]" />,
      badgeLabel: 'International Rep.',
      imageUrl: '/assets/player_hero_bg.jpg',
      description: 'Selected to represent India in the International Youth Chess Tournament.',
      category: 'Youth Category'
    },
    {
      id: 'ach-4',
      title: 'FIDE Rating Master 2024',
      badgeIcon: <Medal className="w-4 h-4 text-[#10264B]" />,
      badgeLabel: 'FIDE Rated',
      imageUrl: '/assets/clean_player_hero_bg.jpg',
      description: 'Gained +140 FIDE ELO rating points competing against rated international masters.',
      category: 'Open Category'
    },
    {
      id: 'ach-5',
      title: 'Asian Youth Blitz Gold',
      badgeIcon: <Award className="w-4 h-4 text-[#10264B]" />,
      badgeLabel: 'Asian Blitz Gold',
      imageUrl: '/assets/ref_hero_ui.jpg',
      description: 'Secured gold medal in Asian Youth Blitz Championship with an undefeated streak.',
      category: 'Junior Category'
    }
  ];

  const totalSlides = carouselItems.length;

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

  // Get index for left, center, right cards
  const leftIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const centerIndex = currentIndex;
  const rightIndex = (currentIndex + 1) % totalSlides;

  // Render 3 visible cards array
  const visibleCards = [
    { card: carouselItems[leftIndex], position: 'left' as const },
    { card: carouselItems[centerIndex], position: 'center' as const },
    { card: carouselItems[rightIndex], position: 'right' as const }
  ];

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25">
      
      {/* 1. PRESERVED ACHIEVEMENTS BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#FFF9EF]">
        <img
          src="/assets/achievements-bg.png"
          alt="Velocity Chess Academy Achievements Background"
          className="w-full h-full object-cover object-center opacity-35"
        />
        {/* Soft translucent warm cream overlay ensuring optimal legibility for text & cards */}
        <div className="absolute inset-0 bg-[#FFF9EF]/55 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-1">
          
          {/* Eyebrow Label with Ornamental Lines */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-7 h-[2px] bg-[#F2A000] rounded-full" />
            <span className="text-[#D98A00] font-sans font-extrabold text-[11px] uppercase tracking-[0.2em]">
              OUR ACHIEVEMENTS
            </span>
            <span className="w-7 h-[2px] bg-[#F2A000] rounded-full" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-[38px] leading-[1.1] tracking-tight">
            <span className="text-[#10264B]">Celebrating </span>
            <span className="text-[#E99A00] font-serif relative inline-block">
              Success Stories
              <svg className="w-full h-2.5 text-[#F2A000] absolute -bottom-1.5 left-0" viewBox="0 0 240 20" fill="none">
                <path d="M5 12 C 80 4, 160 18, 235 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#25334A]/85 font-sans leading-relaxed max-w-2xl mx-auto pt-0.5">
            Our students consistently achieve excellence in local, national and international tournaments, making us proud on every move.
          </p>

        </div>

        {/* 3. ACHIEVEMENT STATISTICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-8 sm:mb-10 max-w-5xl mx-auto">
          
          {/* Stat 1 */}
          <div className="bg-[#FFF8EE]/90 backdrop-blur-md rounded-2xl border border-[#F2A000]/30 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] flex items-center justify-center text-[#10264B] shadow-sm shrink-0 border border-white">
              <Trophy className="w-5 h-5 text-[#10264B]" />
            </div>
            <div>
              <div className="font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-none mb-1">
                500+
              </div>
              <div className="text-[10.5px] sm:text-xs font-semibold text-[#25334A]/80 uppercase tracking-wider leading-tight">
                Students Trained
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#FFF8EE]/90 backdrop-blur-md rounded-2xl border border-[#F2A000]/30 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] flex items-center justify-center text-[#10264B] shadow-sm shrink-0 border border-white">
              <Medal className="w-5 h-5 text-[#10264B]" />
            </div>
            <div>
              <div className="font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-none mb-1">
                150+
              </div>
              <div className="text-[10.5px] sm:text-xs font-semibold text-[#25334A]/80 uppercase tracking-wider leading-tight">
                Tournament Wins
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#FFF8EE]/90 backdrop-blur-md rounded-2xl border border-[#F2A000]/30 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] flex items-center justify-center text-[#10264B] shadow-sm shrink-0 border border-white">
              <Users className="w-5 h-5 text-[#10264B]" />
            </div>
            <div>
              <div className="font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-none mb-1">
                50+
              </div>
              <div className="text-[10.5px] sm:text-xs font-semibold text-[#25334A]/80 uppercase tracking-wider leading-tight">
                Champions
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#FFF8EE]/90 backdrop-blur-md rounded-2xl border border-[#F2A000]/30 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] flex items-center justify-center text-[#10264B] shadow-sm shrink-0 border border-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#10264B]" fill="currentColor">
                <path d="M19 22H5v-2h14v2zm-4-5.5L12 12l-2 1.5V11l-3 2.5V8.5L12 3l7 4v9.5z" />
              </svg>
            </div>
            <div>
              <div className="font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-none mb-1">
                20+
              </div>
              <div className="text-[10.5px] sm:text-xs font-semibold text-[#25334A]/80 uppercase tracking-wider leading-tight">
                State & National Reps
              </div>
            </div>
          </div>

        </div>

        {/* 4. ACHIEVEMENT CAROUSEL */}
        <div 
          className="relative max-w-5xl mx-auto px-4 sm:px-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous Achievement"
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF9EF] text-[#10264B] hover:bg-[#10264B] hover:text-white shadow-md border border-[#F2A000]/40 flex items-center justify-center transition-all duration-300 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Achievement"
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF9EF] text-[#10264B] hover:bg-[#10264B] hover:text-white shadow-md border border-[#F2A000]/40 flex items-center justify-center transition-all duration-300 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3-Card Layout Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-center">
            {visibleCards.map(({ card, position }) => {
              const isCenter = position === 'center';
              return (
                <div
                  key={card.id}
                  onClick={() => {
                    if (position === 'left') prevSlide();
                    if (position === 'right') nextSlide();
                  }}
                  className={`bg-[#FFF8EE] rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between relative group cursor-pointer ${
                    isCenter
                      ? 'border-[#F2A000] ring-2 ring-[#F2A000]/25 shadow-xl scale-100 md:scale-105 z-20'
                      : 'border-[#F2A000]/25 shadow-md scale-95 opacity-90 hover:opacity-100 hidden md:flex z-10'
                  }`}
                >
                  {/* Photo Section */}
                  <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Circular Badge Overlapping Image Bottom */}
                    <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] border-2 border-white shadow-md flex items-center justify-center z-20">
                      {card.badgeIcon}
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="pt-6 p-4 sm:p-4.5 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-extrabold text-base sm:text-lg text-[#10264B] leading-tight mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#25334A]/80 font-medium leading-relaxed px-1 line-clamp-3">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#F2A000]/20 flex items-center justify-center space-x-1 text-[11px] font-bold text-[#D98A00]">
                      <span>{card.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5 Carousel Pagination Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {carouselItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-7 bg-[#F2A000]'
                    : 'w-2.5 bg-[#F2A000]/30 hover:bg-[#F2A000]/60'
                }`}
              />
            ))}
          </div>

        </div>

        {/* 5. BOTTOM CALL TO ACTION BUTTON */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[180px]">
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent to-[#F2A000]" />
            <div className="w-2 h-2 rotate-45 bg-[#F2A000] shrink-0" />
          </div>

          <button
            onClick={() => navigate('/achievements')}
            className="px-7 py-2.5 rounded-full bg-[#10264B] hover:bg-[#071A38] text-white border border-[#F2A000]/60 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 flex items-center space-x-2"
          >
            <span>View All Achievements</span>
            <ArrowRight className="w-4 h-4 text-[#F2A000]" />
          </button>

          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[180px]">
            <div className="w-2 h-2 rotate-45 bg-[#F2A000] shrink-0" />
            <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent to-[#F2A000]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
