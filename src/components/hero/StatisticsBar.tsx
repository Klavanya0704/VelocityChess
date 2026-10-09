import React from 'react';
import { GraduationCap, Trophy, Award, TrendingUp } from 'lucide-react';
import { statisticsData } from '../../data/mockData';

export const StatisticsBar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-4.5 h-4.5 text-[#F2A000]" />;
      case 'Trophy':
        return <Trophy className="w-4.5 h-4.5 text-[#F2A000]" />;
      case 'Award':
        return <Award className="w-4.5 h-4.5 text-[#F2A000]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-4.5 h-4.5 text-[#F2A000]" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="glass-capsule rounded-full px-6 py-3.5 border border-white/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left 4 Statistics Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full md:w-auto divide-x-0 sm:divide-x divide-[#F2A000]/25">
          {statisticsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex items-center space-x-3 ${idx > 0 ? 'sm:pl-6' : ''}`}
            >
              <div className="w-9 h-9 rounded-full glass-btn-ivory border border-[#F2A000]/30 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(stat.iconName)}
              </div>
              <div>
                <span className="block font-serif font-extrabold text-xl sm:text-2xl text-[#10264B] leading-none">
                  {stat.value}
                </span>
                <span className="block text-xs font-sans font-medium text-[#26354A] leading-none mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Decorative Quote */}
        <div className="hidden lg:flex items-center pl-6 border-l border-[#F2A000]/30 max-w-xs">
          <p className="font-serif italic text-xs md:text-sm text-[#10264B] font-medium leading-snug">
            <span className="text-[#F2A000] font-bold text-base leading-none mr-1">“</span>
            Chess teaches you to think ahead in life.
            <span className="text-[#F2A000] font-bold text-base leading-none ml-0.5">”</span>
          </p>
        </div>

      </div>
    </div>
  );
};
