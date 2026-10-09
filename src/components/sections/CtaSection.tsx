import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { EnrollmentModal } from '../common/EnrollmentModal';

export const CtaSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#10264A] to-[#071A38] text-white relative overflow-hidden">
        {/* Decorative Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E5A51B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#E5A51B]/20 border border-[#E5A51B]/40 rounded-full text-xs font-bold uppercase tracking-wider text-[#FFF9EF]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A51B]" />
            <span>Begin Your Strategic Journey</span>
          </div>

          <h2 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#FFF9EF] leading-tight">
            Your Next Move Starts Here
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a complimentary assessment session with our Grandmaster coaches and discover the exact roadmap to elevate your child's chess skills.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#E5A51B] hover:bg-[#F2BD48] text-[#071A38] rounded-full font-bold text-base shadow-xl shadow-[#E5A51B]/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Join Velocity Chess Academy</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </>
  );
};
