import React from 'react';
import { GraduationCap, Trophy, Award, TrendingUp } from 'lucide-react';
import { statisticsData } from '../../data/mockData';

export const StatisticsBar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#F2A000]" />;
      case 'Trophy':
        return <Trophy className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#F2A000]" />;
      case 'Award':
      case 'Medal':
        return <Award className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#F2A000]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-4 sm:w-4.5 h-4 sm:h-4.5 text-[#F2A000]" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white/25 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-2 sm:py-2.5 border border-white/60 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/40">
        {statisticsData.map((stat, idx) => (
          <div
            key={stat.id}
            className={`flex items-center gap-2.5 sm:gap-3 justify-center pt-1.5 sm:pt-0 ${idx > 0 ? 'md:pl-3' : ''}`}
          >
            <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-[#FFF5E5] border border-[#F2A000]/30 flex items-center justify-center shrink-0 shadow-xs">
              {getIcon(stat.iconName)}
            </div>
            <div className="text-left">
              <span className="block font-serif font-extrabold text-lg sm:text-xl xl:text-2xl text-[#10294F] leading-tight">
                {stat.value}
              </span>
              <span className="block text-[11px] sm:text-xs font-sans font-medium text-[#25334A]/90 leading-tight">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsBar;
