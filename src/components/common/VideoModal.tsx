import React from 'react';
import { X, Play, Award, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-4xl bg-[#071A38] text-white rounded-3xl border border-[#E5A51B]/30 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-sm transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Banner Header */}
        <div className="relative aspect-video bg-black/80 flex flex-col items-center justify-center overflow-hidden">
          <img
            src="/assets/ref_hero_bg.jpg"
            alt="Velocity Chess Academy Story"
            className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-75 scale-105 transition hover:scale-100 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A38] via-transparent to-black/40" />

          {/* Interactive Play Button */}
          <div className="relative z-10 text-center px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E5A51B] text-[#071A38] shadow-lg shadow-[#E5A51B]/40 hover:scale-110 transition cursor-pointer mb-4 group">
              <Play className="w-8 h-8 fill-current ml-1 group-hover:scale-110 transition" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Building Champions Beyond the Board
            </h3>
            <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto font-sans">
              Watch how Velocity Chess Academy nurtures discipline, strategic calculation, and lifetime confidence in young minds.
            </p>
          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 md:p-8 bg-[#10264A]/90 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#E5A51B]/20">
          <div className="flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-[#E5A51B] shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-[#FFF9EF] text-sm">Grandmaster Mentorship</h4>
              <p className="text-xs text-gray-300 mt-1">Direct guidance from FIDE rated International Masters & coaches.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Award className="w-5 h-5 text-[#E5A51B] shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-[#FFF9EF] text-sm">State & National Titles</h4>
              <p className="text-xs text-gray-300 mt-1">Over 50+ medalists and state champions trained since 2015.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-[#E5A51B]/20 border border-[#E5A51B] flex items-center justify-center text-[#E5A51B] text-xs font-bold shrink-0 mt-1">✓</div>
            <div>
              <h4 className="font-semibold text-[#FFF9EF] text-sm">Holistic Youth Growth</h4>
              <p className="text-xs text-gray-300 mt-1">Fostering focus, resilience, and critical thinking for life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
