import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Crown, 
  Users, 
  TrendingUp, 
  Trophy, 
  Laptop, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  X, 
  Calendar, 
  UserCheck, 
  BookOpen 
} from 'lucide-react';
import { servicesData } from '../../data/mockData';
import { Service } from '../../types';

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#D98A00]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#D98A00]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#D98A00]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#D98A00]" />;
      default:
        return <Crown className="w-5 h-5 text-[#D98A00]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFF8EE] relative overflow-hidden select-none">
      {/* Background Subtle Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="absolute -top-10 -right-10 w-80 h-80 text-[#F2A000]/15" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute -bottom-16 -left-16 w-96 h-96 text-[#F2A000]/10" viewBox="0 0 400 400" fill="none">
          <path d="M 40,200 Q 200,40 360,200 T 680,200" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="200" cy="280" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        <div className="absolute top-1/4 right-12 w-2.5 h-2.5 rounded-full bg-[#F2A000]/30 blur-[1px]"></div>
        <div className="absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-[#F2A000]/25 blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEED4]/80 border border-[#F2A000]/30 shadow-sm text-xs font-extrabold uppercase tracking-wider text-[#10264B] mb-4">
            <Crown className="w-4 h-4 text-[#F2A000]" />
            <span>OUR SERVICES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10264B] leading-tight mb-4">
            More Than Classes, A Complete{' '}
            <span className="italic font-serif text-[#F2A000] inline-block">
              Chess Journey
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#25334A]/75 max-w-2xl mx-auto leading-relaxed">
            We offer a holistic learning experience designed to nurture every aspect of a chess player's growth — from skill development to real-world competition.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-3xl overflow-hidden border border-[#F2A000]/25 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between cursor-pointer"
            >
              {/* Top Image & Overlapping Icon */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlapping Badge Icon at Boundary */}
                <div className="absolute -bottom-5 left-5 w-11 h-11 rounded-full bg-[#FFF5E5] text-[#D98A00] flex items-center justify-center border-2 border-white shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-7 p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#10264B] leading-tight mb-2 group-hover:text-[#F2A000] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-[#25334A]/70 leading-relaxed mb-4 min-h-[3.5rem]">
                    {service.description}
                  </p>

                  {/* Service Benefits List */}
                  <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#25334A] font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#FFF5E5] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#F2A000]" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Row */}
                <div className="flex items-center justify-end pt-2 border-t border-slate-50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="w-9 h-9 rounded-full bg-[#FFF5E5] text-[#D98A00] hover:bg-[#F2A000] hover:text-white flex items-center justify-center transition-colors shadow-sm ml-auto group/btn focus:outline-none"
                    aria-label={`View details for ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Benefits Capsule */}
        <div className="max-w-6xl mx-auto mt-14 bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#F2A000]/30 shadow-md p-6 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#F2A000]/20">
          
          <div className="flex items-center gap-3.5 text-left justify-center sm:justify-start sm:pl-4 pt-2 sm:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#FFF5E5] text-[#D98A00] flex items-center justify-center shrink-0 border border-[#F2A000]/20 shadow-sm">
              <Users className="w-5 h-5 text-[#F2A000]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#10264B] leading-tight">Expert Coaches</h4>
              <p className="text-xs text-[#25334A]/70">Trained & certified mentors</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left justify-center sm:justify-start sm:pl-6 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#FFF5E5] text-[#D98A00] flex items-center justify-center shrink-0 border border-[#F2A000]/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#F2A000]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#10264B] leading-tight">Structured Curriculum</h4>
              <p className="text-xs text-[#25334A]/70">For all age groups</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left justify-center sm:justify-start sm:pl-6 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#FFF5E5] text-[#D98A00] flex items-center justify-center shrink-0 border border-[#F2A000]/20 shadow-sm">
              <TrendingUp className="w-5 h-5 text-[#F2A000]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#10264B] leading-tight">Holistic Development</h4>
              <p className="text-xs text-[#25334A]/70">On & off the board</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left justify-center sm:justify-start sm:pl-6 pt-4 sm:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#FFF5E5] text-[#D98A00] flex items-center justify-center shrink-0 border border-[#F2A000]/20 shadow-sm">
              <Globe className="w-5 h-5 text-[#F2A000]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#10264B] leading-tight">Flexible Learning Modes</h4>
              <p className="text-xs text-[#25334A]/70">Online & Offline options</p>
            </div>
          </div>

        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#F2A000]/30 animate-scale-up relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F2A000] text-[#10264B] flex items-center justify-center shadow-lg font-bold">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <h3 className="font-serif font-bold text-2xl text-white drop-shadow-md">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-sm text-[#25334A]/80 leading-relaxed mb-5">
                {selectedService.fullDetails?.overview || selectedService.description}
              </p>

              <div className="space-y-3 bg-[#FFF8EE] p-4 rounded-2xl border border-[#F2A000]/20 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-[#10264B]">
                  <Calendar className="w-4 h-4 text-[#F2A000] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Schedule & Batches:</span>
                    <span className="text-[#25334A]/70">{selectedService.fullDetails?.schedule}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#10264B]">
                  <UserCheck className="w-4 h-4 text-[#F2A000] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Target Audience:</span>
                    <span className="text-[#25334A]/70">{selectedService.fullDetails?.targetAudience}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#10264B]">
                  <BookOpen className="w-4 h-4 text-[#F2A000] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Coaching Ratio:</span>
                    <span className="text-[#25334A]/70">{selectedService.fullDetails?.coachingRatio}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    navigate('/contact');
                  }}
                  className="flex-1 py-3 px-6 bg-[#10264B] hover:bg-[#0A1A36] text-white rounded-full font-bold text-sm shadow-md transition text-center"
                >
                  Enroll / Enquire Now
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-[#10264B] rounded-full font-bold text-sm transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
