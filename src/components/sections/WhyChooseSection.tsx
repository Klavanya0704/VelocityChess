import React from 'react';
import { Award, Brain, Target, Users } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Grandmaster & IM Mentorship',
      description: 'Learn directly from certified FIDE rated coaches and International Masters with decades of competitive expertise.'
    },
    {
      icon: Brain,
      title: 'Structured Cognitive Growth',
      description: 'Our proprietary curriculum builds spatial reasoning, focus, memory retention, and multi-step foresight.'
    },
    {
      icon: Target,
      title: 'Tournament & FIDE Prep',
      description: 'Comprehensive preparation including live clock matches, DGT electronic board practice, and engine opening prep.'
    },
    {
      icon: Users,
      title: 'Empowering Academy Atmosphere',
      description: 'A warm, supportive educational environment with luxury chess tables, trophy galleries, and sunlit study rooms.'
    }
  ];

  return (
    <section className="py-20 bg-[#10264A] text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#E5A51B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white/10 px-4 py-1.5 rounded-full border border-[#E5A51B]/30 inline-block">
            The Velocity Advantage
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FFF9EF]">
            Why Velocity Chess Academy?
          </h2>
          <p className="text-base text-gray-300">
            We don't just teach moves; we cultivate lifelong leaders, disciplined thinkers, and confident competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#071A38]/80 border border-[#E5A51B]/20 hover:border-[#E5A51B] transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E5A51B]/15 border border-[#E5A51B]/40 text-[#E5A51B] flex items-center justify-center mb-6">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#FFF9EF] mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
