import React, { useState } from 'react';
import { Trophy, Award, Medal, Crown, Sparkles, X, ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CtaSection } from '../components/sections/CtaSection';

export const AchievementsPage: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // All student achievement photographs
  const achievementsList = [
    {
      id: 'student-ach-1',
      title: 'Championship Victory',
      badge: 'TROPHY WINNER',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      category: 'Tournament Excellence',
      imageUrl: '/assets/student-achievement-01.jpg',
      altText: 'Chess student holding a championship trophy with medal',
      caption: 'Celebrating student dedication, tactical discipline, and championship victory on the competitive tournament stage.',
      objectPosition: 'object-[center_18%]'
    },
    {
      id: 'student-ach-2',
      title: 'Focus in Competition',
      badge: 'MATCH PLAY',
      badgeIcon: <Crown className="w-4 h-4 text-[#10264B]" />,
      category: 'Tactical Mastery',
      imageUrl: '/assets/student-achievement-02.jpg',
      altText: 'Chess student concentrating deeply during a competitive match',
      caption: 'Demonstrating deep positional calculation, calm composure, and tactical resilience during intense match play.',
      objectPosition: 'object-[center_22%]'
    },
    {
      id: 'student-ach-3',
      title: 'Youth Championship Triumph',
      badge: 'GOLD CUP',
      badgeIcon: <Medal className="w-4 h-4 text-[#10264B]" />,
      category: 'Junior Champions',
      imageUrl: '/assets/student-achievement-03.jpg',
      altText: 'Young chess player posing with a grand championship trophy',
      caption: 'Recognizing outstanding young talent and triumphant achievement in competitive youth chess tournaments.',
      objectPosition: 'object-[center_18%]'
    },
    {
      id: 'student-ach-4',
      title: 'A Moment of Achievement',
      badge: 'ACADEMY HONORS',
      badgeIcon: <Award className="w-4 h-4 text-[#10264B]" />,
      category: 'Tournament Success',
      imageUrl: '/assets/student-achievement-04.jpg',
      altText: 'Chess student proudly presenting a tournament championship trophy',
      caption: 'Honoring steadfast commitment to chess excellence, strategic growth, and hard-earned tournament success.',
      objectPosition: 'object-[center_18%]'
    },
    {
      id: 'student-ach-5',
      title: 'National Schools Championship',
      badge: 'RUNNER UP',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      category: 'National Competition',
      imageUrl: '/assets/student-achievement-05.jpg',
      altText: 'U-17 Girls Category Runner Up award ceremony at 13th National Schools Chess Championship 2024 with coach Krishna Teja and parent',
      caption: 'Celebrating our student achieving Runner Up in the U-17 Girls Category at the 13th National Schools Chess Championship 2024 organized by AICF.',
      objectPosition: 'object-[center_25%]'
    },
    {
      id: 'student-ach-6',
      title: 'Czech Chess Open International',
      badge: 'FIDE RATED',
      badgeIcon: <Sparkles className="w-4 h-4 text-[#10264B]" />,
      category: 'International Arena',
      imageUrl: '/assets/student-achievement-06.jpg',
      altText: 'WCM Modipalli Deekshitha playing against FM Dietmar Hiermann at the Czech Chess Open',
      caption: 'WCM Modipalli Deekshitha competing against international titleholders on the world stage at the Czech Chess Open.',
      objectPosition: 'object-[center_38%]'
    },
    {
      id: 'student-ach-7',
      title: 'All India Championship Podium',
      badge: 'TOP PODIUM',
      badgeIcon: <Medal className="w-4 h-4 text-[#10264B]" />,
      category: 'Team Triumph',
      imageUrl: '/assets/student-achievement-07.jpg',
      altText: 'Four Velocity Chess Academy students with 1st, 2nd, and 3rd place trophies at the All India Chess Tournament',
      caption: 'Academy students sweeping 1st, 2nd, and 3rd place championship trophies at the All India Chess Tournament.',
      objectPosition: 'object-[center_30%]'
    },
    {
      id: 'student-ach-8',
      title: 'National Tournament Match Play',
      badge: 'MATCH PLAY',
      badgeIcon: <Crown className="w-4 h-4 text-[#10264B]" />,
      category: 'Tactical Precision',
      imageUrl: '/assets/student-achievement-08.jpg',
      altText: 'Students competing in intense tournament match play with digital DGT boards and tournament clocks',
      caption: 'Deep positional calculation and tournament focus during competitive match play with digital DGT boards and clocks.',
      objectPosition: 'object-[center_30%]'
    },
    {
      id: 'student-ach-9',
      title: '38th National U-13 Champion',
      badge: '1ST PLACE · ₹80,000',
      badgeIcon: <Trophy className="w-4 h-4 text-[#10264B]" />,
      category: 'National Champion',
      imageUrl: '/assets/student-achievement-09.jpg',
      altText: 'Student winner holding 1st place trophy and ₹80,000 cheque at 38th National Under-13 Chess Championship 2025 in Goa',
      caption: 'Celebrating our student crowned 1st Place Winner at the 38th National Under-13 Chess Championship 2025 in Margao, Goa with grand trophy and ₹80,000 cash prize.',
      objectPosition: 'object-[center_28%]'
    },
    {
      id: 'student-ach-10',
      title: '38th National Championship Podium',
      badge: 'NATIONAL HONORS',
      badgeIcon: <Award className="w-4 h-4 text-[#10264B]" />,
      category: 'Championship Stage',
      imageUrl: '/assets/student-achievement-10.jpg',
      altText: 'Five students with 1st place trophies on stage at 38th National Under-13 Open & Girls Chess Championship 2025 in Goa',
      caption: 'Academy students and winners on stage with 1st Place trophies and certificates at the 38th National Under-13 Open & Girls Championship 2025.',
      objectPosition: 'object-[center_32%]'
    }
  ];

  // Featured Championship Spotlight Item
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
    <div className="relative min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-28 sm:pt-32 pb-20 overflow-x-hidden">
      
      {/* 1. FULL-WIDTH PAGE BACKGROUND IMAGE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/achievements_full_bg.jpg"
          alt="Velocity Chess Academy Achievements Background"
          className="w-full h-full object-cover object-center opacity-40 blur-[1px]"
        />
        {/* Soft cream translucent overlay for readability & contrast */}
        <div className="absolute inset-0 bg-[#FFF9EF]/50 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 space-y-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <section className="pt-2 pb-4 text-center space-y-3">
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

        {/* FEATURED CHAMPIONSHIP SPOTLIGHT CARD */}
        <section className="py-2">
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
                    onClick={() => setActivePhotoIndex(0)}
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
                  onClick={() => setActivePhotoIndex(0)}
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

        {/* RESPONSIVE STUDENT ACHIEVEMENT GALLERY GRID */}
        <section className="py-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[2px] bg-[#E5A51B]" />
              <span className="text-[#E5A51B] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
                STUDENT GALLERY
              </span>
              <span className="w-6 h-[2px] bg-[#E5A51B]" />
            </div>
            <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#10264A]">
              Moments of Victory &amp; Dedication
            </h3>
            <p className="text-xs sm:text-sm text-[#25334A]/80 font-medium">
              Click on any photograph to view the full-size image in high definition.
            </p>
          </div>

          {/* Student Achievement Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {achievementsList.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActivePhotoIndex(idx)}
                className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-[#E5A51B]/35 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] w-full bg-[#10264B]/5 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className={`w-full h-full object-cover ${item.objectPosition} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Corner Badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#10264A]/90 backdrop-blur-md text-[#FFE8AB] text-[10px] font-extrabold uppercase rounded-full shadow border border-[#E5A51B]/60 flex items-center space-x-1">
                    <span>{item.badge}</span>
                  </span>

                  {/* Overlapping Badge Icon */}
                  <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D6] via-[#FFE29A] to-[#E99A00] border-2 border-white shadow-md flex items-center justify-center z-20">
                    {item.badgeIcon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="pt-6 p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#E5A51B] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-extrabold text-lg text-[#10264A] mb-2 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#25334A]/80 font-medium leading-relaxed font-sans">
                      {item.caption}
                    </p>
                  </div>

                  {/* Bottom Checkerboard Accent Strip */}
                  <div className="mt-4 pt-3 border-t border-[#E5A51B]/20 flex items-center justify-between text-[11px] font-semibold text-[#E5A51B]">
                    <span>Velocity Chess Academy</span>
                    <div className="grid grid-cols-6 h-2 w-14 border border-[#E5A51B]/30 rounded-xs overflow-hidden">
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
            ))}
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <CtaSection />

      </div>

      {/* LIGHTBOX MODAL FOR PHOTOGRAPHS */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFF9EF] rounded-3xl overflow-hidden border-2 border-[#E5A51B] shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#10264A] text-white flex items-center justify-center hover:bg-[#E5A51B] hover:text-[#10264A] transition-colors shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev === 0 || prev === null ? achievementsList.length - 1 : prev - 1));
              }}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-[#10264A] flex items-center justify-center hover:bg-[#E5A51B] hover:text-[#10264A] transition-all shadow-lg border border-[#E5A51B]/40"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev === null || prev === achievementsList.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-[#10264A] flex items-center justify-center hover:bg-[#E5A51B] hover:text-[#10264A] transition-all shadow-lg border border-[#E5A51B]/40"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/10 px-2 sm:px-6">
              <img
                src={achievementsList[activePhotoIndex].imageUrl}
                alt={achievementsList[activePhotoIndex].altText}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto rounded-xl drop-shadow-lg"
              />
            </div>

            {/* Lightbox Caption & Counter */}
            <div className="pt-4 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#E5A51B]">
                {achievementsList[activePhotoIndex].category} · {achievementsList[activePhotoIndex].badge} · Photo {activePhotoIndex + 1} of {achievementsList.length}
              </div>
              <h4 className="font-serif font-extrabold text-xl text-[#10264A]">
                {achievementsList[activePhotoIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#25334A]/85 max-w-xl mx-auto font-medium">
                {achievementsList[activePhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AchievementsPage;
