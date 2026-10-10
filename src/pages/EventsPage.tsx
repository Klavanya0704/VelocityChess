import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, Users, Zap, Crown } from 'lucide-react';
import { eventsData } from '../data/mockData';
import { EnrollmentModal } from '../components/common/EnrollmentModal';

interface EventConfig {
  image: string;
  panelIcon: React.ReactNode;
  panelTitle: string;
  panelText: string;
  buttonText: string;
}

const eventConfigs: Record<string, EventConfig> = {
  'evt-1': {
    image: '/assets/event_1_card.jpg',
    panelIcon: <Trophy className="w-8 h-8 text-[#E5A51B] mx-auto" />,
    panelTitle: 'Reserve Your Slot',
    panelText: 'Limited slots available to ensure optimal board pairing and referee supervision.',
    buttonText: 'Register For Event',
  },
  'evt-2': {
    image: '/assets/event_2_card.jpg',
    panelIcon: <Users className="w-8 h-8 text-[#E5A51B] mx-auto" />,
    panelTitle: 'Limited Attendance',
    panelText: 'Interact, ask questions, and get personalized feedback from the Grandmaster.',
    buttonText: 'Register Now',
  },
  'evt-3': {
    image: '/assets/event_3_card.jpg',
    panelIcon: <Zap className="w-8 h-8 text-[#E5A51B] mx-auto" />,
    panelTitle: 'Join the Action',
    panelText: 'Weekly rankings, prizes, and certificates for top performers.',
    buttonText: 'Register Now',
  },
};

export const EventsPage: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState<string | null>(null);

  const handleRegister = (title: string) => {
    setSelectedEventTitle(title);
    setIsEnrollOpen(true);
  };

  return (
    <div className="relative min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-24 sm:pt-28 pb-16">
      
      {/* 1. FULL-WIDTH PAGE BACKGROUND IMAGE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/events_full_bg.jpg"
          alt="Velocity Chess Academy Events Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle cream translucent overlay for text & card contrast */}
        <div className="absolute inset-0 bg-[#FFF9EF]/25 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 space-y-6">
        
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/95 backdrop-blur-md border border-[#E5A51B]/40 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#10264A] shadow-sm mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#E5A51B]" />
            <span>TOURNAMENTS & WORKSHOPS CALENDAR</span>
          </div>

          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-2">
            Upcoming Events <span className="text-[#E5A51B] font-serif font-normal">&amp;</span> Championships
          </h1>

          <div className="flex justify-center mb-4 text-[#E5A51B]">
            <Crown className="w-4 h-4" />
          </div>

          <p className="text-base sm:text-lg text-[#25334A]/85 max-w-3xl mx-auto leading-relaxed font-medium">
            Compete in FIDE recognized tournaments, attend exclusive Grandmaster masterclasses, and participate in weekly blitz arenas.
          </p>
        </section>

        {/* Events Cards (Alternating Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-8 sm:space-y-10">
          {eventsData.map((evt, index) => {
            const isImageLeft = index % 2 === 0;
            const config = eventConfigs[evt.id] || {
              image: '/assets/event_1_card.jpg',
              panelIcon: <Trophy className="w-8 h-8 text-[#E5A51B] mx-auto" />,
              panelTitle: 'Reserve Your Slot',
              panelText: 'Limited slots available for participants.',
              buttonText: 'Register Now',
            };

            return (
              <div
                key={evt.id}
                className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] border-2 border-[#E5A51B]/40 shadow-xl overflow-hidden hover:border-[#E5A51B]/80 transition-all duration-300 relative group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[220px]">
                  
                  {/* CHESS IMAGE VISUAL AREA */}
                  <div
                    className={`relative w-full h-56 lg:h-auto overflow-hidden ${
                      isImageLeft
                        ? 'lg:col-span-3 order-1 lg:order-1'
                        : 'lg:col-span-3 order-1 lg:order-2'
                    }`}
                  >
                    <img
                      src={config.image}
                      alt={evt.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Curved S-Shape Gold Boundary Overlay on Desktop */}
                    {isImageLeft ? (
                      <svg
                        className="hidden lg:block absolute inset-y-0 right-0 h-full w-14 pointer-events-none text-[#FFFDF9]"
                        viewBox="0 0 56 220"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,0 C 45,70 45,150 0,220 L 56,220 L 56,0 Z" fill="currentColor" />
                        <path d="M 0,0 C 45,70 45,150 0,220" fill="none" stroke="#E5A51B" strokeWidth="3" />
                      </svg>
                    ) : (
                      <svg
                        className="hidden lg:block absolute inset-y-0 left-0 h-full w-14 pointer-events-none text-[#FFFDF9]"
                        viewBox="0 0 56 220"
                        preserveAspectRatio="none"
                      >
                        <path d="M 56,0 C 11,70 11,150 56,220 L 0,220 L 0,0 Z" fill="currentColor" />
                        <path d="M 56,0 C 11,70 11,150 56,220" fill="none" stroke="#E5A51B" strokeWidth="3" />
                      </svg>
                    )}
                  </div>

                  {/* CENTER EVENT DETAILS (Type, Status, Fee, Title, Description, Meta Pills) */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-center space-y-3.5 ${
                      isImageLeft
                        ? 'lg:col-span-5 order-2 lg:order-2'
                        : 'lg:col-span-5 order-2 lg:order-1'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3.5 py-1 bg-[#0B1B3D] text-[#FFF9EF] text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
                        {evt.type}
                      </span>
                      <span className="px-3.5 py-1 bg-[#FAF5EC] text-[#10264A] border border-[#E5A51B]/40 text-[11px] font-extrabold uppercase rounded-full">
                        {evt.status}
                      </span>
                      {evt.entryFee && (
                        <span className="text-xs font-extrabold text-[#E5A51B] ml-1">
                          Entry Fee: {evt.entryFee}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A] leading-tight">
                      {evt.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#25334A]/80 leading-relaxed font-normal">
                      {evt.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      <div className="flex items-center space-x-2 bg-[#FAF5EC] px-3 py-2 rounded-xl border border-[#E5A51B]/25 text-xs font-semibold text-[#10264A]">
                        <Calendar className="w-3.5 h-3.5 text-[#E5A51B] shrink-0" />
                        <span className="truncate">{evt.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-[#FAF5EC] px-3 py-2 rounded-xl border border-[#E5A51B]/25 text-xs font-semibold text-[#10264A]">
                        <Clock className="w-3.5 h-3.5 text-[#E5A51B] shrink-0" />
                        <span className="truncate">{evt.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-[#FAF5EC] px-3 py-2 rounded-xl border border-[#E5A51B]/25 text-xs font-semibold text-[#10264A]">
                        <MapPin className="w-3.5 h-3.5 text-[#E5A51B] shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT REGISTRATION PANEL (Icon, Heading, Subtext, Button) */}
                  <div className="p-3 sm:p-4 flex flex-col justify-center lg:col-span-4 order-3 lg:order-3">
                    <div className="bg-[#FDF8EE] p-6 rounded-2xl border border-[#E5A51B]/30 text-center flex flex-col justify-between space-y-4 h-full shadow-xs">
                      <div className="space-y-2 pt-1">
                        {config.panelIcon}
                        <h4 className="font-serif font-bold text-lg text-[#10264A]">
                          {config.panelTitle}
                        </h4>
                        <p className="text-xs text-[#25334A]/75 leading-relaxed">
                          {config.panelText}
                        </p>
                      </div>

                      <button
                        onClick={() => handleRegister(evt.title)}
                        className="w-full py-3 bg-[#0B1B3D] hover:bg-[#152C5B] text-white rounded-full font-semibold text-xs transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        {config.buttonText}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

      </div>

      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  );
};
