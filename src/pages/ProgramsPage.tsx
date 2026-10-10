import React, { useState } from 'react';
import { Crown, Zap, Trophy, Target, CheckCircle2, ArrowRight, Clock, Users } from 'lucide-react';
import { programsData } from '../data/mockData';
import { EnrollmentModal } from '../components/common/EnrollmentModal';

const programImages: Record<string, string> = {
  'prog-1': '/assets/program_pawn_card.jpg',
  'prog-2': '/assets/program_knight_card.jpg',
  'prog-3': '/assets/program_rook_card.jpg',
  'prog-4': '/assets/program_king_card.jpg',
};

export const ProgramsPage: React.FC = () => {
  const [selectedProgId, setSelectedProgId] = useState<string | undefined>(undefined);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const handleEnrollClick = (id: string) => {
    setSelectedProgId(id);
    setIsEnrollOpen(true);
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-[#E5A51B]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#E5A51B]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#E5A51B]" />;
      case 'Target':
      default:
        return <Target className="w-5 h-5 text-[#E5A51B]" />;
    }
  };

  return (
    <div className="relative min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-24 sm:pt-28 pb-16">
      
      {/* 1. FULL-WIDTH PAGE BACKGROUND IMAGE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/programs_full_bg.jpg"
          alt="Velocity Chess Academy Programs Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle cream translucent overlay for text & card contrast */}
        <div className="absolute inset-0 bg-[#FFF9EF]/25 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 space-y-6">
        
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5A51B]/40 shadow-sm inline-block mb-3">
            — OUR PROGRAMS —
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4 drop-shadow-xs">
            Coaching Programs for <span className="text-[#E5A51B]">Every Stage</span>
          </h1>
          <p className="text-base sm:text-lg text-[#25334A]/85 max-w-3xl mx-auto leading-relaxed font-medium">
            From foundational piece mechanics to FIDE rated master preparation, discover our structured training tracks.
          </p>
        </section>

        {/* Horizontal Programs Cards (Alternating Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-8 sm:space-y-10">
          {programsData.map((prog, index) => {
            const isImageLeft = index % 2 === 0;
            const pieceImg = programImages[prog.id] || '/assets/program_pawn_card.jpg';

            return (
              <div
                key={prog.id}
                className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] border-2 border-[#E5A51B]/40 shadow-xl overflow-hidden hover:border-[#E5A51B]/80 transition-all duration-300 relative group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[220px]">
                  
                  {/* CHESS IMAGE VISUAL AREA */}
                  <div
                    className={`relative w-full h-56 lg:h-auto overflow-hidden ${
                      isImageLeft
                        ? 'lg:col-span-3 order-1 lg:order-1'
                        : 'lg:col-span-3 order-1 lg:order-3'
                    }`}
                  >
                    <img
                      src={pieceImg}
                      alt={prog.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Circular Icon Badge near Upper Left */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#FFFDF9]/95 border-2 border-[#E5A51B] shadow-md flex items-center justify-center z-10">
                      {getBadgeIcon(prog.iconName)}
                    </div>

                    {/* Curved S-Shape Gold Boundary Overlay on Desktop */}
                    {isImageLeft ? (
                      <svg
                        className="hidden lg:block absolute inset-y-0 right-0 h-full w-14 pointer-events-none text-[#FFFDF9]"
                        viewBox="0 0 56 220"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,0 C 45,70 45,150 0,220 L 56,220 L 56,0 Z" fill="currentColor" />
                        <path d="M 0,0 C 45,70 45,150 0,220" fill="none" stroke="#E5A51B" strokeWidth="3" />
                      </svg>
                    ) : (
                      <svg
                        className="hidden lg:block absolute inset-y-0 left-0 h-full w-14 pointer-events-none text-[#FFFDF9]"
                        viewBox="0 0 56 220"
                        preserveAspectRatio="none"
                      >
                        <path d="M 56,0 C 11,70 11,150 56,220 L 0,220 L 0,0 Z" fill="currentColor" />
                        <path d="M 56,0 C 11,70 11,150 56,220" fill="none" stroke="#E5A51B" strokeWidth="3" />
                      </svg>
                    )}
                  </div>

                  {/* CENTER PROGRAM INFO (Level, Title, Description, Meta Pills) */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-center space-y-3.5 ${
                      isImageLeft
                        ? 'lg:col-span-4 order-2 lg:order-2'
                        : 'lg:col-span-4 order-2 lg:order-2'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#E5A51B] flex items-center gap-1.5">
                        {prog.level} Level
                      </span>
                      {prog.popular && (
                        <span className="px-3 py-1 bg-[#E5A51B] text-[#071A38] text-[10px] font-extrabold uppercase rounded-full shadow-sm">
                          Most Popular Track
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A] leading-tight">
                      {prog.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#25334A]/80 leading-relaxed font-normal">
                      {prog.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <div className="flex items-center space-x-2 bg-[#FAF5EC] px-3.5 py-2.5 rounded-xl border border-[#E5A51B]/25 text-xs font-semibold text-[#10264A]">
                        <Users className="w-4 h-4 text-[#E5A51B] shrink-0" />
                        <span className="truncate">{prog.ageGroup}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-[#FAF5EC] px-3.5 py-2.5 rounded-xl border border-[#E5A51B]/25 text-xs font-semibold text-[#10264A]">
                        <Clock className="w-4 h-4 text-[#E5A51B] shrink-0" />
                        <span className="truncate">{prog.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT / LEFT CURRICULUM PANEL (Highlights 2x2 grid, Coaching format, Button) */}
                  <div
                    className={`p-3 sm:p-4 flex flex-col justify-center ${
                      isImageLeft
                        ? 'lg:col-span-5 order-3 lg:order-3'
                        : 'lg:col-span-5 order-3 lg:order-1'
                    }`}
                  >
                    <div className="bg-[#FDF8EE] p-5 sm:p-6 rounded-2xl border border-[#E5A51B]/30 flex flex-col justify-between space-y-5 h-full shadow-xs">
                      
                      <div className="space-y-3">
                        <h4 className="font-serif font-bold text-base text-[#10264A]">
                          Key Curriculum Highlights
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {prog.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 text-xs font-medium text-[#10264A] bg-white px-3 py-2 rounded-xl border border-[#E5A51B]/20 shadow-2xs"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#E5A51B] shrink-0" />
                              <span className="truncate">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-2 gap-3 border-t border-[#E5A51B]/15">
                        <span className="text-xs text-[#25334A]/75 font-medium">
                          Coaching Format: <strong className="text-[#10264A]">{prog.coachingFormat}</strong>
                        </span>
                        <button
                          onClick={() => handleEnrollClick(prog.id)}
                          className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#152C5B] text-white rounded-full font-semibold text-xs flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200 shrink-0"
                        >
                          <span>Enroll in This Program</span>
                          <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

      </div>

      <EnrollmentModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        defaultProgramId={selectedProgId}
      />
    </div>
  );
};
