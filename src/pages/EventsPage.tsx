import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { eventsData } from '../data/mockData';
import { EnrollmentModal } from '../components/common/EnrollmentModal';

export const EventsPage: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const handleRegister = (title: string) => {
    setRegisteredEvent(title);
    setIsEnrollOpen(true);
  };

  return (
    <div className="bg-[#FFF9EF] pt-24 sm:pt-28 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <Calendar className="w-3.5 h-3.5 text-[#E5A51B]" />
          <span>Tournaments & Workshops Calendar</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4">
          Upcoming Events & Championships
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed">
          Compete in FIDE recognized tournaments, attend exclusive Grandmaster masterclasses, and participate in weekly blitz arenas.
        </p>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {eventsData.map((evt) => (
          <div
            key={evt.id}
            className="bg-white rounded-3xl p-8 border border-[#E5A51B]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 bg-[#10264A] text-[#FFF9EF] text-xs font-bold uppercase tracking-wider rounded-full">
                  {evt.type}
                </span>
                <span className="px-3.5 py-1 bg-[#E5A51B]/20 text-[#10264A] border border-[#E5A51B]/30 text-xs font-bold uppercase rounded-full">
                  {evt.status}
                </span>
                {evt.entryFee && (
                  <span className="text-xs font-bold text-[#E5A51B]">
                    Entry Fee: {evt.entryFee}
                  </span>
                )}
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A]">
                {evt.title}
              </h2>

              <p className="text-sm text-[#25334A]/80 leading-relaxed">
                {evt.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-[#10264A]">
                <div className="flex items-center space-x-2 bg-[#FFF9EF] p-3 rounded-xl border border-[#E5A51B]/20">
                  <Calendar className="w-4 h-4 text-[#E5A51B]" />
                  <span>{evt.date}</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#FFF9EF] p-3 rounded-xl border border-[#E5A51B]/20">
                  <Clock className="w-4 h-4 text-[#E5A51B]" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#FFF9EF] p-3 rounded-xl border border-[#E5A51B]/20">
                  <MapPin className="w-4 h-4 text-[#E5A51B]" />
                  <span>{evt.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8F0E3] p-6 rounded-2xl border border-[#E5A51B]/30 text-center space-y-4">
              <Trophy className="w-10 h-10 text-[#E5A51B] mx-auto" />
              <h4 className="font-serif font-bold text-lg text-[#10264A]">Reserve Your Slot</h4>
              <p className="text-xs text-[#25334A]/70">Limited slots available to ensure optimal board pairing and referee supervision.</p>
              <button
                onClick={() => handleRegister(evt.title)}
                className="w-full py-3 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs transition shadow-md"
              >
                Register For Event
              </button>
            </div>
          </div>
        ))}
      </section>

      <EnrollmentModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} />
    </div>
  );
};
