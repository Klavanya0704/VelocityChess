import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, ArrowRight } from 'lucide-react';
import { achievementsData } from '../../data/mockData';

export const AchievementsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#FFF9EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white px-4 py-1.5 rounded-full border border-[#E5A51B]/30 shadow-sm inline-block mb-3">
              Hall of Fame
            </span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#10264A]">
              Celebrating Champions
            </h2>
          </div>
          <button
            onClick={() => navigate('/achievements')}
            className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs transition shadow-md"
          >
            <span>Explore All Achievements</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5A51B]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5A51B]/20 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 bg-[#E5A51B] text-[#071A38] text-[10px] font-extrabold uppercase rounded-full shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-[#E5A51B] uppercase tracking-wider mb-1">
                  {item.winnerName} · {item.category}
                </p>
                <h3 className="font-serif font-bold text-lg text-[#10264A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#25334A]/70 line-clamp-2">
                  {item.tournament}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
