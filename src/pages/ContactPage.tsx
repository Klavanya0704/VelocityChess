import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ContactSection } from '../components/sections/ContactSection';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'At what age can a child start learning at Velocity Chess Academy?',
      a: 'We accept young learners starting from age 5 in our "Pawn to King" foundations program. Kids learn through fun, interactive chessboard stories and basic captures.'
    },
    {
      q: 'Are classes conducted online or on-campus?',
      a: 'We offer both options! Our luxury campus in City Center features physical DGT electronic boards and grandmaster tables. We also offer online 1-on-1 global coaching.'
    },
    {
      q: 'How do I know which program is right for my child?',
      a: 'We offer a free 30-minute evaluation session with a senior master coach who assesses your child\'s board vision, tactical memory, and recommended entry level.'
    },
    {
      q: 'What is the ratio of students to coaches?',
      a: 'To guarantee personalized attention, group classes maintain a strict maximum of 6 to 8 students per FIDE certified trainer.'
    }
  ];

  return (
    <div className="min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-14 sm:pt-16 pb-16 overflow-x-hidden">
      {/* 1. Main Contact Section matching Image 2 */}
      <ContactSection />

      {/* 2. FAQ Accordion Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <section className="bg-[#FFFDF9] rounded-[24px] p-6 sm:p-8 border border-[#EBD7B2] shadow-xl space-y-6">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-center text-[#10264B]">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#EBD7B2]/40 shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-serif font-bold text-sm text-[#10264B] flex items-center justify-between hover:bg-[#FFF9EF] transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D98A00] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-[#25334A]/80 leading-relaxed border-t border-[#F8F0E3] pt-3 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
