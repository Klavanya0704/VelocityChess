import React, { useState } from 'react';
import { Trophy, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { achievementsData } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

export const AchievementCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const currentAchievement = achievementsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? achievementsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === achievementsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="glass-card rounded-3xl p-3.5 sm:p-4 w-full max-w-[365px] xl:max-w-[380px] shadow-2xl border border-white/60 relative z-20 transition-all duration-300">
      {/* 1. Header Row */}
      <div className="flex items-center justify-between mb-2 border-b border-[#F8F0E3]/60 pb-1.5">
        <div className="flex items-center space-x-2">
          <div className="w-5.5 h-5.5 rounded-full bg-[#FFF5E0] text-[#E99A00] flex items-center justify-center shrink-0 shadow-xs border border-[#E99A00]/20">
            <Trophy className="w-3 h-3 fill-current" />
          </div>
          <h3 className="font-serif font-extrabold text-sm sm:text-base text-[#10264B]">
            Our Achievements
          </h3>
        </div>
        <button
          onClick={() => navigate('/achievements')}
          className="inline-flex items-center space-x-1 text-[10px] font-semibold text-[#10264B] glass-btn-ivory px-2.5 py-0.5 rounded-full transition"
        >
          <span>View All</span>
          <ArrowRight className="w-2.5 h-2.5 text-[#E99A00]" />
        </button>
      </div>

      {/* 2. Achievement Info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentAchievement.id}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -3 }}
          transition={{ duration: 0.15 }}
          className="mb-2"
        >
          <div className="flex items-start justify-between gap-1.5">
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#10264B] leading-tight">
                {currentAchievement.title}
              </h4>
              <p className="text-[11px] font-bold text-[#E99A00] mt-0.5">
                {currentAchievement.winnerName} <span className="text-[#303846]/70 font-normal">| {currentAchievement.category}</span>
              </p>
              <p className="text-[10px] font-medium text-[#303846] mt-0.5 leading-tight">
                {currentAchievement.tournament}
              </p>
            </div>
            <span className="px-2 py-0.5 bg-[#FFF5E0] text-[#E99A00] border border-[#E99A00]/30 text-[9px] font-bold uppercase tracking-wider rounded-full shrink-0 shadow-xs">
              {currentAchievement.badge}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 3. Main Featured Image (155–165px tall) */}
      <div className="relative h-[158px] sm:h-[162px] w-full rounded-xl overflow-hidden mb-2 bg-black/10 border border-white/40">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentAchievement.imageUrl}
            src={currentAchievement.imageUrl}
            alt={currentAchievement.title}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Glassmorphism Navigation Arrow Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full glass-btn-icon text-[#10264B] flex items-center justify-center transition"
          aria-label="Previous achievement"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full glass-btn-icon text-[#10264B] flex items-center justify-center transition"
          aria-label="Next achievement"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4. Four Small Thumbnails (52–56px tall) */}
      <div className="grid grid-cols-4 gap-1.5 mb-1.5">
        {achievementsData.map((item, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-[52px] sm:h-[55px] w-full rounded-lg overflow-hidden border-2 transition ${
                isSelected
                  ? 'border-[#E99A00] scale-105 shadow-sm'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </button>
          );
        })}
      </div>

      {/* 5. Pagination Dots */}
      <div className="flex items-center justify-center space-x-1.5 pt-0.5">
        {achievementsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-4 bg-[#E99A00]' : 'w-1.5 bg-[#E99A00]/30 hover:bg-[#E99A00]/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
