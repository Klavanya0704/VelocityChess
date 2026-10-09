import React from 'react';
import { GraduationCap, Trophy, Award, TrendingUp } from 'lucide-react';
import { statisticsData } from '../../data/mockData';

export const StatisticsBar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-[#E99A00]" />;
      case 'Trophy':
        return <Trophy className="w-4 h-4 text-[#E99A00]" />;
      case 'Award':
        return <Award className="w-4 h-4 text-[#E99A00]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-4 h-4 text-[#E99A00]" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="glass-capsule rounded-full px-6 py-3 border border-white/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left 4 Statistics Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full md:w-auto divide-x-0 sm:divide-x divide-[#E99A00]/20">
          {statisticsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center space-x-2.5 ${idx > 0 ? 'sm:pl-6' : ''}`}
            >
              <div className="w-8 h-8 rounded-full glass-btn-ivory border border-[#E99A00]/30 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(stat.iconName)}
              </div>
              <div>
                <span className="block font-serif font-extrabold text-lg sm:text-xl text-[#10264B] leading-none">
                  {stat.value}
                </span>
                <span className="block text-[11px] font-sans font-semibold text-[#303846] leading-none mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Decorative Quote */}
        <div className="hidden lg:flex items-center pl-6 border-l border-[#E99A00]/30 max-w-xs">
          <p className="font-serif italic text-xs md:text-sm text-[#10264B] font-medium leading-snug">
            <span className="text-[#E99A00] font-bold text-base leading-none mr-1">“</span>
            Chess teaches you to think ahead in life.
            <span className="text-[#E99A00] font-bold text-base leading-none ml-0.5">”</span>
          </p>
        </div>

      </div>
    </div>
  );
};
