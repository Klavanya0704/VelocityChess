import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Medal, Users, Crown, ArrowRight, Award, Sparkles, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const navigate = useNavigate();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // All seven real student achievement photographs
  const achievementCards = [
    {
      id: 'student-ach-1',
      title: 'Championship Victory',
      badgeLabel: 'Trophy Winner',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-01.jpg',
      altText: 'Chess student holding a championship trophy with medal',
      description: 'Celebrating tournament triumph, strategic discipline, and championship honors on the competitive stage.',
      category: 'Tournament Excellence',
      objectPosition: 'object-[center_18%]'
    },
    {
      id: 'student-ach-2',
      title: 'Focus in Competition',
      badgeLabel: 'Match Play',
      badgeIcon: <Crown className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-02.jpg',
      altText: 'Chess student concentrating deeply during a competitive match',
      description: 'Deep positional calculation and unwavering mental stamina in high-stakes tournament conditions.',
      category: 'Tactical Mastery',
      objectPosition: 'object-[center_22%]'
    },
    {
      id: 'student-ach-3',
      title: 'Youth Championship Triumph',
      badgeLabel: 'Gold Cup',
      badgeIcon: <Medal className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-03.jpg',
      altText: 'Young chess player posing with a grand championship trophy',
      description: 'Recognizing outstanding young talent, dedication, and championship victories in youth competitions.',
      category: 'Junior Champions',
      objectPosition: 'object-[center_18%]'
    },
    {
      id: 'student-ach-4',
      title: 'A Moment of Achievement',
      badgeLabel: 'Academy Honors',
      badgeIcon: <Award className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-04.jpg',
      altText: 'Chess student proudly presenting a tournament championship trophy',
      description: 'Honoring steadfast commitment to chess excellence, tactical prowess, and tournament success.',
      category: 'Tournament Success',
      objectPosition: 'object-[center_18%]'
    },
    {
      id: 'student-ach-5',
      title: 'National Schools Championship',
      badgeLabel: 'Runner Up',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-05.jpg',
      altText: 'U-17 Girls Category Runner Up award ceremony at 13th National Schools Chess Championship 2024 with coach Krishna Teja and parent',
      description: 'Celebrating our student achieving Runner Up in the U-17 Girls Category at the 13th National Schools Chess Championship 2024 organized by AICF.',
      category: 'National Competition',
      objectPosition: 'object-[center_25%]'
    },
    {
      id: 'student-ach-6',
      title: 'Czech Chess Open International',
      badgeLabel: 'FIDE Rated',
      badgeIcon: <Sparkles className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-06.jpg',
      altText: 'WCM Modipalli Deekshitha playing against FM Dietmar Hiermann at the Czech Chess Open',
      description: 'WCM Modipalli Deekshitha competing against international titleholders on the world stage at the Czech Chess Open.',
      category: 'International Arena',
      objectPosition: 'object-[center_38%]'
    },
    {
      id: 'student-ach-7',
      title: 'All India Championship Podium',
      badgeLabel: 'Top Podium',
      badgeIcon: <Medal className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-07.jpg',
      altText: 'Four Velocity Chess Academy students with 1st, 2nd, and 3rd place trophies at the All India Chess Tournament',
      description: 'Academy students sweeping 1st, 2nd, and 3rd place championship trophies at the All India Chess Tournament.',
      category: 'Team Triumph',
      objectPosition: 'object-[center_30%]'
    },
    {
      id: 'student-ach-8',
      title: 'National Tournament Match Play',
      badgeLabel: 'Match Play',
      badgeIcon: <Crown className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-08.jpg',
      altText: 'Students competing in intense tournament match play with digital DGT boards and tournament clocks',
      description: 'Deep positional calculation and tournament focus during competitive match play with digital DGT boards and clocks.',
      category: 'Tactical Precision',
      objectPosition: 'object-[center_30%]'
    },
    {
      id: 'student-ach-9',
      title: '38th National U-13 Champion',
      badgeLabel: '1st Place · ₹80,000',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-09.jpg',
      altText: 'Student winner holding 1st place trophy and ₹80,000 cheque at 38th National Under-13 Chess Championship 2025 in Goa',
      description: 'Celebrating our student crowned 1st Place Winner at the 38th National Under-13 Chess Championship 2025 with grand trophy and ₹80,000 cash prize.',
      category: 'National Champion',
      objectPosition: 'object-[center_28%]'
    },
    {
      id: 'student-ach-10',
      title: '38th National Championship Podium',
      badgeLabel: 'National Honors',
      badgeIcon: <Award className="w-4 h-4 text-[#10264B]" />,
      imageUrl: '/assets/student-achievement-10.jpg',
      altText: 'Five students with 1st place trophies on stage at 38th National Under-13 Open & Girls Chess Championship 2025 in Goa',
      description: 'Academy students and winners on stage with 1st Place trophies and certificates at the 38th National Under-13 Open & Girls Championship 2025.',
      category: 'Championship Stage',
      objectPosition: 'object-[center_32%]'
    }
  ];

  // Carousel handlers
  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? achievementCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === achievementCards.length - 1 ? 0 : prev + 1));
  };

  // Calculate 4 visible cards on desktop with seamless looping
  const visibleCards = [
    achievementCards[carouselIndex],
    achievementCards[(carouselIndex + 1) % achievementCards.length],
    achievementCards[(carouselIndex + 2) % achievementCards.length],
    achievementCards[(carouselIndex + 3) % achievementCards.length],
  ];

  return (
    <section
      id="achievements"
      className="relative py-12 sm:py-16 lg:py-20 bg-[#FFF9EF] overflow-hidden select-none border-t border-[#F2A000]/25 scroll-mt-24"
    >
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
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-1.5">
          
          {/* Eyebrow Label with Ornamental Lines */}
          <div className="inline-flex items-center space-x-2.5">
            <span className="w-7 h-[2px] bg-[#F2A000] rounded-full" />
            <span className="text-[#D98A00] font-sans font-extrabold text-[11px] uppercase tracking-[0.2em]">
              OUR ACHIEVEMENTS
            </span>
            <span className="w-7 h-[2px] bg-[#F2A000] rounded-full" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-[40px] leading-[1.1] tracking-tight">
            <span className="text-[#10264B]">Celebrating </span>
            <span className="text-[#E99A00] font-serif relative inline-block">
              Success Stories
              <svg
                className="w-full h-2.5 text-[#F2A000] absolute -bottom-1.5 left-0"
                viewBox="0 0 240 20"
                fill="none"
              >
                <path
                  d="M5 12 C 80 4, 160 18, 235 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#25334A]/85 font-sans leading-relaxed max-w-2xl mx-auto pt-1 font-medium">
            Our students consistently achieve excellence in local, state, national, and international tournaments,
            bringing pride to the academy on every move.
          </p>

        </div>

        {/* 3. ACHIEVEMENT STATISTICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-10 sm:mb-12 max-w-5xl mx-auto">
          
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
              <Award className="w-5 h-5 text-[#10264B]" />
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

        {/* 4. REAL STUDENT ACHIEVEMENTS CAROUSEL GRID & CONTROLS */}
        <div className="relative mb-6">
          
          {/* Top Carousel Navigation Buttons (Mobile & Desktop) */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#D98A00] flex items-center space-x-1.5">
              <Trophy className="w-4 h-4 text-[#F2A000]" />
              <span>Real Student Triumphs · Slide {carouselIndex + 1} of {achievementCards.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white text-[#10264B] border border-[#F2A000]/40 flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264B] transition-all shadow-xs cursor-pointer"
                aria-label="Previous achievement slide"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white text-[#10264B] border border-[#F2A000]/40 flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264B] transition-all shadow-xs cursor-pointer"
                aria-label="Next achievement slide"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Cards Grid (4 visible on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
            {visibleCards.map((card, idx) => {
              const originalIndex = achievementCards.findIndex((c) => c.id === card.id);
              return (
                <div
                  key={`${card.id}-${idx}`}
                  onClick={() => setActiveModalIndex(originalIndex)}
                  className="bg-white/95 rounded-3xl overflow-hidden border-2 border-[#F2A000]/35 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left cursor-pointer"
                >
                  {/* Photo Section with Object-Cover and Precise Focal Point Positioning */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#10264B]/10">
                    <img
                      src={card.imageUrl}
                      alt={card.altText}
                      className={`w-full h-full object-cover ${card.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                    />
                    {/* Gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

                    {/* Corner Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#10264B]/90 backdrop-blur-md border border-[#F2A000]/60 shadow-sm flex items-center space-x-1">
                      <span className="text-[10px] font-sans font-extrabold uppercase tracking-wider text-[#FFE8AB]">
                        {card.badgeLabel}
                      </span>
                    </div>

                    {/* Quick Enlarge Indicator on Hover */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs text-white p-1 rounded-lg text-[10px] flex items-center space-x-1">
                      <ZoomIn className="w-3 h-3 text-[#F2A000]" />
                      <span>Zoom</span>
                    </div>

                    {/* Overlapping Bottom Circular Badge */}
                    <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] border-2 border-white shadow-md flex items-center justify-center z-20">
                      {card.badgeIcon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="pt-6 p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#D98A00] block mb-1">
                        {card.category}
                      </span>
                      <h3 className="font-serif font-extrabold text-base sm:text-lg text-[#10264B] leading-tight mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#25334A]/80 font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom subtle chess-inspired checkerboard accent strip */}
                    <div className="mt-4 pt-3 border-t border-[#F2A000]/20 flex items-center justify-between text-[11px] font-semibold text-[#D98A00]">
                      <span>Velocity Chess</span>
                      <div className="grid grid-cols-6 h-2 w-16 border border-[#F2A000]/30 rounded-xs overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={i % 2 === 0 ? 'bg-[#FFE8AB]' : 'bg-[#FFFDF8]'}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {achievementCards.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCarouselIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  carouselIndex === dotIdx ? 'w-7 bg-[#F2A000]' : 'w-2 bg-[#F2A000]/30 hover:bg-[#F2A000]/60'
                }`}
                aria-label={`Jump to achievement photo ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* LIGHTBOX MODAL FOR FULL RESOLUTION HOMEPAGE INSPECTION */}
        {activeModalIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
            onClick={() => setActiveModalIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FFF9EF] rounded-3xl overflow-hidden border-2 border-[#F2A000] shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalIndex(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#10264A] text-white flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264A] transition-colors shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Modal Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex((prev) => (prev === 0 || prev === null ? achievementCards.length - 1 : prev - 1));
                }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-[#10264A] flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264A] transition-all shadow-lg border border-[#F2A000]/40"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex((prev) => (prev === null || prev === achievementCards.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-[#10264A] flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264A] transition-all shadow-lg border border-[#F2A000]/40"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Modal Image (object-contain ensures complete photograph with all faces & trophies is uncropped) */}
              <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/10 px-2 sm:px-6">
                <img
                  src={achievementCards[activeModalIndex].imageUrl}
                  alt={achievementCards[activeModalIndex].altText}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto rounded-xl drop-shadow-lg"
                />
              </div>

              {/* Modal Caption */}
              <div className="pt-4 text-center space-y-1">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#D98A00]">
                  {achievementCards[activeModalIndex].category} · {achievementCards[activeModalIndex].badgeLabel} · Photo {activeModalIndex + 1} of {achievementCards.length}
                </div>
                <h4 className="font-serif font-extrabold text-xl text-[#10264A]">
                  {achievementCards[activeModalIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#25334A]/85 max-w-xl mx-auto font-medium">
                  {achievementCards[activeModalIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 5. BOTTOM CALL TO ACTION BUTTON */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 flex-1 max-w-[180px]">
            <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent to-[#F2A000]" />
            <div className="w-2 h-2 rotate-45 bg-[#F2A000] shrink-0" />
          </div>

          <button
            onClick={() => navigate('/achievements')}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#10264B] to-[#0A1A33] hover:from-[#0A1A33] hover:to-[#071326] text-white border-2 border-[#F2A000]/70 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 flex items-center space-x-2.5 cursor-pointer"
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
