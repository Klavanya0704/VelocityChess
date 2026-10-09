import React from 'react';
import { Crown, ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';
import { CtaSection } from '../components/sections/CtaSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9EF] pt-8 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E5A51B]" />
          <span>About Velocity Chess Academy</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4">
          Nurturing Strategic Excellence Since 2015
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed">
          Velocity Chess Academy was founded with a singular vision: to empower young minds with tactical discipline, spatial intellect, and unwavering confidence through the royal game of chess.
        </p>
      </section>

      {/* Visual Image & Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-[#E5A51B]/20 shadow-xl">
          <div className="lg:col-span-6 relative">
            <img
              src="/assets/ref_hero_bg.jpg"
              alt="Velocity Academy Interior and Students"
              className="rounded-2xl object-cover w-full aspect-[4/3] shadow-md"
            />
            <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-xl text-xs font-bold text-[#10264A] flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#E5A51B]" />
              <span>State & FIDE Recognized Academy</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A]">
              Our Coaching Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#25334A]/80 leading-relaxed">
              We move beyond simple rote memorization of chess openings. Our curriculum integrates classical endgame theory, grandmaster opening preparation, dynamic middle-game calculation, and emotional resilience in match conditions.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <Crown className="w-5 h-5 text-[#E5A51B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-[#10264A]">Customized Learning Tracks</h4>
                  <p className="text-xs text-[#25334A]/70">Tailored instruction aligned with each student's current rating and learning speed.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#E5A51B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-[#10264A]">FIDE Certified Grandmaster Faculty</h4>
                  <p className="text-xs text-[#25334A]/70">Experienced International Masters and senior coaches providing hands-on mentorship.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-[#E5A51B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-[#10264A]">Supportive & Inspiring Campus</h4>
                  <p className="text-xs text-[#25334A]/70">Sunlit study halls, electronic DGT boards, and trophy galleries that spark passion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#10264A] text-white p-8 sm:p-10 rounded-3xl border border-[#E5A51B]/30 shadow-xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A51B] block">Our Mission</span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#FFF9EF]">
              Building Strategic Thinkers for Life
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To provide every aspiring young player with top-tier grandmaster coaching, fostering critical thinking, sportsmanship, and mental stamina that translates directly into academic and personal success.
            </p>
          </div>

          <div className="bg-[#F8F0E3] p-8 sm:p-10 rounded-3xl border border-[#E5A51B]/30 shadow-xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A51B] block">Our Vision</span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A]">
              Leading Global Youth Chess Development
            </h3>
            <p className="text-xs sm:text-sm text-[#25334A]/80 leading-relaxed">
              To be the premier chess institution recognized for producing state champions, FIDE rated prodigies, and well-rounded individuals who approach life's challenges with foresight and confidence.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};
