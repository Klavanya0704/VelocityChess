import React, { useState } from 'react';
import { Crown, Zap, Trophy, Target, CheckCircle2, ArrowRight, Clock, Users } from 'lucide-react';
import { programsData } from '../data/mockData';
import { EnrollmentModal } from '../components/common/EnrollmentModal';

export const ProgramsPage: React.FC = () => {
  const [selectedProgId, setSelectedProgId] = useState<string | undefined>(undefined);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const handleEnrollClick = (id: string) => {
    setSelectedProgId(id);
    setIsEnrollOpen(true);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Crown':
        return <Crown className="w-7 h-7 text-[#E5A51B]" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-[#E5A51B]" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-[#E5A51B]" />;
      case 'Target':
      default:
        return <Target className="w-7 h-7 text-[#E5A51B]" />;
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
      <div className="relative z-10 space-y-4">
        
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5A51B]/40 shadow-sm inline-block mb-3">
            Comprehensive Chess Curriculum
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4 drop-shadow-xs">
            Coaching Programs for Every Stage
          </h1>
          <p className="text-base sm:text-lg text-[#25334A]/85 max-w-3xl mx-auto leading-relaxed font-medium">
            From foundational piece mechanics to FIDE rated master preparation, discover our structured training tracks.
          </p>
        </section>

        {/* Detailed Programs Grid (Alternating Left/Right Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-12">
          {programsData.map((prog, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={prog.id}
                className={`bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-[#E5A51B]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-[#E5A51B]/80 ${
                  prog.popular ? 'ring-2 ring-[#E5A51B]' : ''
                }`}
              >
                {/* Icon & Meta Header */}
                <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF9EF] border border-[#E5A51B]/40 flex items-center justify-center shadow-sm">
                      {getIcon(prog.iconName)}
                    </div>
                    {prog.popular && (
                      <span className="px-3 py-1 bg-[#E5A51B] text-[#071A38] text-[10px] font-extrabold uppercase rounded-full shadow">
                        Most Popular Track
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#E5A51B] block">
                    {prog.level} Level
                  </span>

                  <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A]">
                    {prog.title}
                  </h2>

                  <p className="text-sm text-[#25334A]/80 leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#10264A]">
                    <div className="flex items-center space-x-2 bg-[#FFF9EF] p-3 rounded-xl border border-[#E5A51B]/20">
                      <Users className="w-4 h-4 text-[#E5A51B]" />
                      <span>{prog.ageGroup}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[#FFF9EF] p-3 rounded-xl border border-[#E5A51B]/20">
                      <Clock className="w-4 h-4 text-[#E5A51B]" />
                      <span>{prog.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Learning Outcomes & CTA */}
                <div className={`lg:col-span-7 bg-[#F8F0E3]/75 p-6 sm:p-8 rounded-2xl border border-[#E5A51B]/25 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h4 className="font-serif font-bold text-lg text-[#10264A]">Key Curriculum Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {prog.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#25334A] bg-white/90 p-3 rounded-xl border border-[#E5A51B]/15">
                        <CheckCircle2 className="w-4 h-4 text-[#E5A51B] shrink-0" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4">
                    <span className="text-xs text-[#25334A]/80 font-medium">
                      Coaching Format: <strong className="text-[#10264A]">{prog.coachingFormat}</strong>
                    </span>
                    <button
                      onClick={() => handleEnrollClick(prog.id)}
                      className="w-full sm:w-auto px-6 py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition"
                    >
                      <span>Enroll in This Program</span>
                      <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
                    </button>
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
