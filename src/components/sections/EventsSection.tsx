import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { eventsData } from '../../data/mockData';

export const EventsSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#F8F0E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white px-4 py-1.5 rounded-full border border-[#E5A51B]/30 shadow-sm inline-block mb-3">
              Tournaments & Workshops
            </span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#10264A]">
              Upcoming Events
            </h2>
          </div>
          <button
            onClick={() => navigate('/events')}
            className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs transition shadow-md"
          >
            <span>View All Events</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5A51B]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsData.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl p-6 border border-[#E5A51B]/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#10264A] text-[#FFF9EF] text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {evt.type}
                  </span>
                  <span className="text-xs font-bold text-[#E5A51B]">
                    {evt.entryFee}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#10264A] mb-3 leading-snug">
                  {evt.title}
                </h3>

                <p className="text-xs text-[#25334A]/80 leading-relaxed mb-6">
                  {evt.description}
                </p>
              </div>

              <div className="space-y-2 border-t border-[#F8F0E3] pt-4 text-xs text-[#25334A]/80">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#E5A51B] shrink-0" />
                  <span>{evt.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#E5A51B] shrink-0" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#E5A51B] shrink-0" />
                  <span>{evt.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
