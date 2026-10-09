import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Zap, Trophy, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { programsData } from '../../data/mockData';

export const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#E5A51B]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#E5A51B]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#E5A51B]" />;
      case 'Target':
      default:
        return <Target className="w-6 h-6 text-[#E5A51B]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8F0E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white px-4 py-1.5 rounded-full border border-[#E5A51B]/30 shadow-sm inline-block">
            Tailored Coaching Programs
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#10264A]">
            Designed for Every Skill Level
          </h2>
          <p className="text-base text-[#25334A]/80">
            From first-time beginners discovering piece moves to advanced tournament contenders mastering deep engine calculations.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((prog) => (
            <div
              key={prog.id}
              className={`bg-white rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative shadow-lg ${
                prog.popular ? 'border-[#E5A51B] ring-2 ring-[#E5A51B]/20' : 'border-[#E5A51B]/20 hover:border-[#E5A51B]/60'
              }`}
            >
              {prog.popular && (
                <span className="absolute -top-3.5 right-6 px-3 py-1 bg-[#E5A51B] text-[#071A38] text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF9EF] border border-[#E5A51B]/30 flex items-center justify-center mb-5 shadow-sm">
                  {getIcon(prog.iconName)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5A51B] block mb-1">
                  {prog.level} · {prog.ageGroup}
                </span>

                <h3 className="font-serif font-bold text-xl text-[#10264A] mb-3">
                  {prog.title}
                </h3>

                <p className="text-xs text-[#25334A]/80 leading-relaxed mb-6">
                  {prog.description}
                </p>

                <div className="space-y-2.5 mb-6 border-t border-[#F8F0E3] pt-4">
                  {prog.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-[#25334A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A51B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold text-[#10264A] bg-[#FFF9EF] p-2.5 rounded-xl border border-[#E5A51B]/20 mb-4 text-center">
                  Format: {prog.coachingFormat}
                </div>
                <button
                  onClick={() => navigate('/programs')}
                  className="w-full py-2.5 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs flex items-center justify-center space-x-2 transition shadow-md"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5A51B]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
