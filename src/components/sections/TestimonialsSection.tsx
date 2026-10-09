import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF9EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white px-4 py-1.5 rounded-full border border-[#E5A51B]/30 shadow-sm inline-block">
            Student & Parent Voices
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#10264A]">
            Stories of Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E5A51B]/20 shadow-lg relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 mb-4 text-[#E5A51B]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#E5A51B]/30 mb-2" />

                <p className="font-serif italic text-sm text-[#10264A] leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 border-t border-[#F8F0E3] pt-4">
                <img
                  src={item.avatarUrl}
                  alt={item.authorName}
                  className="w-10 h-10 rounded-full object-cover border border-[#E5A51B]"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#10264A]">{item.authorName}</h4>
                  <p className="text-[11px] text-[#25334A]/70">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
