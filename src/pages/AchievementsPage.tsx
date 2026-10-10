import React, { useState } from 'react';
import { Trophy, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Featured Championship Spotlight Data
  const spotlightAchievement = {
    title: 'Nurturing Champions on the Grand Stage',
    badge: 'CHAMPIONSHIP SPOTLIGHT',
    category: 'Tournament Excellence',
    imageUrl: '/assets/student-achievement-01.jpg',
    altText: 'Chess student holding a championship trophy with medal',
    description:
      'Under the direct mentorship of International Master Krishna Teja, Velocity Chess Academy students develop deep positional calculation, emotional composure, and the tactical sharpness required to triumph in high-stakes competitive play.',
    caption: 'Celebrating student dedication, tactical discipline, and championship victory on the competitive tournament stage.'
  };

  return (
    <div className="relative min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-24 sm:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. FULL-WIDTH PAGE BACKGROUND IMAGE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/achievements_full_bg.jpg"
          alt="Velocity Chess Academy Achievements Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle cream translucent overlay for text & card contrast */}
        <div className="absolute inset-0 bg-[#FFF9EF]/25 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <section className="py-6 text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/95 backdrop-blur-md border border-[#E5A51B]/40 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#10264A] shadow-sm inline-block">
            <Trophy className="w-3.5 h-3.5 text-[#E5A51B]" />
            <span>VELOCITY HALL OF FAME</span>
          </div>

          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] drop-shadow-xs">
            Our <span className="text-[#E5A51B]">Achievements</span>
          </h1>

          <p className="text-base sm:text-lg text-[#25334A]/85 max-w-3xl mx-auto leading-relaxed font-medium">
            Celebrating the hard work, tactical brilliance, and tournament success achieved by
            Velocity Chess Academy students across state, national, and international competitions.
          </p>
        </section>

        {/* SINGLE HIGHLIGHTED CHAMPIONSHIP SPOTLIGHT CARD */}
        <section className="py-4">
          <div className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] border-2 border-[#E5A51B]/40 shadow-xl overflow-hidden hover:border-[#E5A51B]/80 transition-all duration-300 relative group max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[280px]">
              
              {/* LEFT CONTENT AREA */}
              <div className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div>
                  <span className="px-3.5 py-1.5 bg-[#E5A51B] text-[#071A38] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs inline-block">
                    {spotlightAchievement.badge}
                  </span>
                </div>

                <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#10264A] leading-tight">
                  {spotlightAchievement.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#25334A]/80 leading-relaxed font-normal">
                  {spotlightAchievement.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="px-6 py-3 bg-[#0B1B3D] hover:bg-[#152C5B] text-white rounded-full font-semibold text-xs flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200 inline-flex"
                  >
                    <span>View All Achievements</span>
                    <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                  </button>
                </div>
              </div>

              {/* RIGHT PHOTO VISUAL AREA */}
              <div className="relative p-6 sm:p-8 lg:col-span-5 flex items-center justify-center order-1 lg:order-2 bg-gradient-to-br from-[#FFF8EE]/60 to-[#FFF4E0]/60">
                
                {/* Photo frame with gold border */}
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="rounded-2xl overflow-hidden border-2 border-[#E5A51B] shadow-xl w-full aspect-[4/3] max-h-[300px] cursor-pointer group/photo relative"
                >
                  <img
                    src={spotlightAchievement.imageUrl}
                    alt={spotlightAchievement.altText}
                    className="w-full h-full object-cover object-[center_18%] group-hover/photo:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white font-medium flex items-center space-x-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5 text-[#E5A51B]" />
                      <span>View Photograph</span>
                    </span>
                  </div>
                </div>

                {/* Curved S-Shape Gold Boundary Overlay on Desktop */}
                <svg
                  className="hidden lg:block absolute inset-y-0 left-0 h-full w-14 pointer-events-none text-[#FFFDF9]"
                  viewBox="0 0 56 280"
                  preserveAspectRatio="none"
                >
                  <path d="M 56,0 C 11,90 11,190 56,280 L 0,280 L 0,0 Z" fill="currentColor" />
                  <path d="M 56,0 C 11,90 11,190 56,280" fill="none" stroke="#E5A51B" strokeWidth="3" />
                </svg>

              </div>

            </div>
          </div>
        </section>

      </div>

      {/* LIGHTBOX MODAL FOR PHOTOGRAPH */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-[#E5A51B] shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0B1B3D] text-white flex items-center justify-center hover:bg-[#E5A51B] hover:text-[#0B1B3D] transition-colors shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/10 px-2 sm:px-6">
              <img
                src={spotlightAchievement.imageUrl}
                alt={spotlightAchievement.altText}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto rounded-xl drop-shadow-lg"
              />
            </div>

            <div className="pt-4 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#E5A51B]">
                {spotlightAchievement.category} · {spotlightAchievement.badge}
              </div>
              <h4 className="font-serif font-extrabold text-xl text-[#10264A]">
                {spotlightAchievement.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#25334A]/85 max-w-xl mx-auto font-medium">
                {spotlightAchievement.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AchievementsPage;
