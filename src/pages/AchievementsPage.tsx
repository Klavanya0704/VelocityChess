import React, { useState } from 'react';
import { Trophy, Award, Medal, Crown, Sparkles, X, ZoomIn, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { CtaSection } from '../components/sections/CtaSection';

export const AchievementsPage: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // All seven real student achievement photographs in upload & category order
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

  return (
    <div className="bg-[#FFF9EF] pt-24 sm:pt-28 pb-16 select-none overflow-x-hidden">
      
      {/* 1. PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#F2A000]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <Trophy className="w-3.5 h-3.5 text-[#F2A000]" />
          <span>Velocity Hall of Fame</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4 tracking-tight">
          Our Achievements
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed font-sans">
          Celebrating the hard work, tactical brilliance, and tournament success achieved by
          Velocity Chess Academy students across state, national, and international competitions.
        </p>
      </section>

      {/* 2. FEATURED CHAMPIONSHIP SPOTLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4 mb-8">
        <div className="bg-gradient-to-br from-[#10264A] via-[#0D2040] to-[#071A38] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#F2A000]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative overflow-hidden">
          
          {/* Subtle gold decorative background flair */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2A000]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-left relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#F2A000] text-[#071A38] text-xs font-extrabold uppercase rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Championship Spotlight</span>
            </div>

            <h2 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#FFF9EF] leading-tight">
              Nurturing Champions on the Grand Stage
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              Under the direct mentorship of International Master Krishna Teja, Velocity Chess
              Academy students develop deep positional calculation, emotional composure, and the
              tactical sharpness required to triumph in high-stakes competitive play.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-semibold">
              <div className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20 text-[#FFF9EF] flex items-center space-x-1.5">
                <Trophy className="w-3.5 h-3.5 text-[#F2A000]" />
                <span>State & National Honors</span>
              </div>
              <div className="bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/20 text-[#FFF9EF] flex items-center space-x-1.5">
                <Crown className="w-3.5 h-3.5 text-[#F2A000]" />
                <span>FIDE Rated Mentorship</span>
              </div>
              <div className="bg-[#F2A000]/25 text-[#FFE8AB] px-3.5 py-1.5 rounded-xl border border-[#F2A000]/40 flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F2A000]" />
                <span>Master-Level Coaching</span>
              </div>
            </div>
          </div>

          {/* Right Photo Column */}
          <div className="lg:col-span-5 relative z-10 flex justify-center">
            <div
              onClick={() => setActivePhotoIndex(0)}
              className="rounded-2xl overflow-hidden border-2 border-[#F2A000] shadow-2xl aspect-[4/3] w-full max-w-md group cursor-pointer relative"
            >
              <img
                src={achievementsList[0].imageUrl}
                alt={achievementsList[0].altText}
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="font-serif font-bold text-sm text-[#FFE8AB]">
                  {achievementsList[0].title}
                </span>
                <span className="flex items-center space-x-1 bg-[#10264A]/80 px-2 py-0.5 rounded-full border border-white/30 text-[10px]">
                  <ZoomIn className="w-3 h-3" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. RESPONSIVE FOUR-CARD ACHIEVEMENT GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <span className="w-6 h-[2px] bg-[#F2A000]" />
            <span className="text-[#D98A00] font-sans font-extrabold text-xs uppercase tracking-[0.2em]">
              STUDENT GALLERY
            </span>
            <span className="w-6 h-[2px] bg-[#F2A000]" />
          </div>
          <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#10264A]">
            Moments of Victory & Dedication
          </h3>
          <p className="text-xs sm:text-sm text-[#25334A]/80 font-sans">
            Click on any photograph to view the full-size image.
          </p>
        </div>

        {/* Responsive Seven Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {achievementsList.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="bg-white rounded-3xl overflow-hidden border-2 border-[#F2A000]/30 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
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
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#10264A]/90 backdrop-blur-md text-[#FFE8AB] text-[10px] font-extrabold uppercase rounded-full shadow border border-[#F2A000]/60 flex items-center space-x-1">
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
                  <span className="text-[11px] font-bold text-[#D98A00] uppercase tracking-wider block mb-1">
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
                <div className="mt-4 pt-3 border-t border-[#F2A000]/20 flex items-center justify-between text-[11px] font-semibold text-[#D98A00]">
                  <span>Velocity Chess Academy</span>
                  <div className="grid grid-cols-6 h-2 w-14 border border-[#F2A000]/30 rounded-xs overflow-hidden">
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

      {/* 4. LIGHTBOX MODAL FOR FULL RESOLUTION VIEWING */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFF9EF] rounded-3xl overflow-hidden border-2 border-[#F2A000] shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#10264A] text-white flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264A] transition-colors shadow-md"
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
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-[#10264A] flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264A] transition-all shadow-lg border border-[#F2A000]/40"
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
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 text-[#10264A] flex items-center justify-center hover:bg-[#F2A000] hover:text-[#10264A] transition-all shadow-lg border border-[#F2A000]/40"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Lightbox Image (object-contain ensures complete photograph with all faces & trophies is uncropped) */}
            <div className="rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black/10 px-2 sm:px-6">
              <img
                src={achievementsList[activePhotoIndex].imageUrl}
                alt={achievementsList[activePhotoIndex].altText}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto rounded-xl drop-shadow-lg"
              />
            </div>

            {/* Lightbox Caption & Counter */}
            <div className="pt-4 text-center space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#D98A00]">
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

      {/* 5. CALL TO ACTION SECTION */}
      <CtaSection />

    </div>
  );
};

export default AchievementsPage;
