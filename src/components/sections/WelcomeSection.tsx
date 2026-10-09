import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#FFF9EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/ref_hero_bg.jpg"
                alt="Velocity Chess Academy Training Environment"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition duration-700"
              />
            </div>
            {/* Floating Luxury Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 glass-card p-5 rounded-2xl border border-[#E5A51B]/40 max-w-xs shadow-xl hidden sm:flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-[#E5A51B] text-[#071A38] flex items-center justify-center font-serif font-extrabold text-xl shrink-0">
                FIDE
              </div>
              <div>
                <p className="font-bold text-xs text-[#10264A]">Certified FIDE Coaches</p>
                <p className="text-[11px] text-[#25334A]/80">International Masters & Rated Mentors</p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#E5A51B]/15 border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A]">
              <span>Welcome to Velocity Chess</span>
            </div>

            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#10264A] leading-tight">
              Where Young Minds Become Strategic Thinkers
            </h2>

            <p className="text-base text-[#25334A] leading-relaxed">
              At Velocity Chess Academy, we believe chess is far more than a board game. It is a powerful catalyst for cognitive growth, logical decision-making, emotional resilience, and lifelong academic confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E5A51B]/20 shadow-sm flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-[#E5A51B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#10264A]">Structured Curriculum</h4>
                  <p className="text-xs text-[#25334A]/70 mt-1">Progressive 4-stage learning path designed for all age groups.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5A51B]/20 shadow-sm flex items-start space-x-3">
                <Award className="w-6 h-6 text-[#E5A51B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#10264A]">Proven Championship Record</h4>
                  <p className="text-xs text-[#25334A]/70 mt-1">Over 50+ state, national, and FIDE rated medals won.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-sm transition shadow-md"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 text-[#E5A51B]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
