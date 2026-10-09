import React from 'react';
import { GraduationCap, Trophy, Award, TrendingUp } from 'lucide-react';
import { statisticsData } from '../../data/mockData';

export const StatisticsBar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#F2A000]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#F2A000]" />;
      case 'Award':
      case 'Medal':
        return <Award className="w-5 h-5 text-[#F2A000]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-[#F2A000]" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-full px-6 py-3.5 border border-[#F2A000]/30 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-[#F2A000]/20">
        {statisticsData.map((stat, idx) => (
          <div
            key={stat.id}
            className={`flex items-center gap-3.5 justify-center pt-2 sm:pt-0 ${idx > 0 ? 'md:pl-4' : ''}`}
          >
            <div className="w-10 h-10 rounded-full bg-[#FFF5E5] border border-[#F2A000]/30 flex items-center justify-center shrink-0 shadow-xs">
              {getIcon(stat.iconName)}
            </div>
            <div className="text-left">
              <span className="block font-serif font-extrabold text-xl sm:text-2xl text-[#10294F] leading-tight">
                {stat.value}
              </span>
              <span className="block text-xs font-sans font-medium text-[#25334A]/80 leading-tight">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
