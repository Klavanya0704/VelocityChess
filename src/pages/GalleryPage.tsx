import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
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
    <div className="bg-[#FFF9EF] pt-8 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <Camera className="w-3.5 h-3.5 text-[#E5A51B]" />
          <span>Academy Photo Gallery</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4">
          Life at Velocity Chess
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed">
          Explore our state-of-the-art academy environment, tournament galas, simultaneous exhibitions, and student training sessions.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#10264A] text-white shadow-md'
                  : 'bg-white border border-[#E5A51B]/20 text-[#10264A] hover:bg-[#F8F0E3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5A51B]/20 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider">
                  View Full Image
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-[#E5A51B] uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#10264A] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#25334A]/70">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
