import React from 'react';
import { Trophy, Award, Medal, Sparkles, Star } from 'lucide-react';
import { achievementsData } from '../data/mockData';
import { CtaSection } from '../components/sections/CtaSection';

export const AchievementsPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9EF] pt-8 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <Trophy className="w-3.5 h-3.5 text-[#E5A51B]" />
          <span>Velocity Hall of Fame</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4">
          Student Achievements & Medals
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed">
          Celebrating the hard work, tactical brilliance, and championship titles achieved by Velocity Chess Academy prodigies.
        </p>
      </section>

      {/* Featured State Champion Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="bg-gradient-to-r from-[#10264A] to-[#071A38] text-white rounded-3xl p-8 sm:p-12 border border-[#E5A51B]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3.5 py-1 bg-[#E5A51B] text-[#071A38] text-xs font-extrabold uppercase rounded-full inline-block">
              State Champion Spotlight 2025
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#FFF9EF]">
              Aditya Varma — Undefeated U-12 Title Winner
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Aditya Varma dominated the Andhra Pradesh State Chess Championship with a phenomenal 8.5/9 score. His deep preparation in King-side attacks and endgame technique secured Velocity's 12th state title.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold">
              <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20">Category: U-12 Open</div>
              <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20">FIDE Rating Gain: +185 Points</div>
              <div className="bg-[#E5A51B]/20 text-[#E5A51B] px-4 py-2 rounded-xl border border-[#E5A51B]/40">Gold Medalist</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border-2 border-[#E5A51B] shadow-xl aspect-[4/3]">
              <img
                src={achievementsData[0].imageUrl}
                alt="Aditya Varma State Champion 2025"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A] mb-8">
          Recent Tournament Victory Gallery
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5A51B]/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-black/10">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 px-3 py-1 bg-[#E5A51B] text-[#071A38] text-[10px] font-extrabold uppercase rounded-full shadow">
                  {item.badge}
                </span>
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold text-[#E5A51B] uppercase tracking-wider block mb-1">
                  {item.winnerName} · {item.category}
                </span>
                <h4 className="font-serif font-bold text-lg text-[#10264A] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#25334A]/80 mb-3">
                  {item.tournament} ({item.year})
                </p>
                <p className="text-xs text-[#25334A]/70 leading-relaxed border-t border-[#F8F0E3] pt-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
};
