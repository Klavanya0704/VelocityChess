import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/mockData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Tournaments', 'Training', 'Events', 'Academy'];

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === activeCategory);

  const currentItem: GalleryItem | null = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <div className="relative min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-24 sm:pt-28 pb-16">
      
      {/* 1. FULL-WIDTH PAGE BACKGROUND IMAGE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/gallery_full_bg.jpg"
          alt="Velocity Chess Academy Gallery Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle cream translucent overlay for text & card contrast */}
        <div className="absolute inset-0 bg-[#FFF9EF]/20 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 space-y-6">
        
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4 drop-shadow-xs">
            Life at <span className="text-[#E5A51B]">Velocity Chess</span>
          </h1>
          <p className="text-base sm:text-lg text-[#25334A]/85 max-w-3xl mx-auto leading-relaxed font-medium">
            Explore our state-of-the-art academy environment, tournament galas, simultaneous exhibitions, and student training sessions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0B1B3D] text-white shadow-md'
                      : 'bg-white/95 backdrop-blur-md border border-[#E5A51B]/35 text-[#10264A] hover:bg-[#F8F0E3] hover:border-[#E5A51B] shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Responsive Gallery 3-Column Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#E5A51B]/40 shadow-lg hover:shadow-xl hover:border-[#E5A51B] transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 bg-[#FFFDF9]/95 flex flex-col justify-between flex-1 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5A51B] block">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#10264A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#25334A]/75 leading-relaxed font-normal">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#071A38] text-white rounded-3xl overflow-hidden border border-[#E5A51B]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-full object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black text-white rounded-full transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black text-white rounded-full transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 bg-[#10264A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#E5A51B] uppercase tracking-wider block">
                  {currentItem.category}
                </span>
                <h4 className="font-serif font-bold text-xl text-[#FFF9EF]">{currentItem.title}</h4>
                <p className="text-xs text-gray-300 mt-1">{currentItem.caption}</p>
              </div>
              <span className="text-xs text-gray-400 font-mono">
                {activeLightboxIndex! + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
