import React from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'code' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-5 h-5 text-[#E5A51B]" />,
      lastUpdated: 'Updated for 2026 Season',
      sections: [
        {
          heading: 'Information We Collect',
          body: 'Velocity Chess Academy collects student and parent contact details (names, email addresses, phone numbers, and student age/chess experience) solely to coordinate admissions assessments, tournament registrations, and instructional communication.'
        },
        {
          heading: 'Data Usage and Protection',
          body: 'We never sell, rent, or trade student or family personal data to third parties. All tournament ratings and scoresheet records are submitted strictly to official chess governing bodies (AICF, FIDE, and Telangana Chess Association) with parental authorization.'
        },
        {
          heading: 'Photographs and Media',
          body: 'Photographs taken during tournaments, ceremonies, and coaching sessions are used exclusively to celebrate student triumphs and showcase academy achievements on our official website and verified social media channels.'
        },
        {
          heading: 'Contact for Privacy Inquiries',
          body: 'Parents may review, update, or request removal of their child’s contact information at any time by contacting our admissions office at admissions@velocitychess.edu.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      icon: <FileText className="w-5 h-5 text-[#E5A51B]" />,
      lastUpdated: 'Effective 2026 Academic Year',
      sections: [
        {
          heading: 'Coaching Enrollment & Attendance',
          body: 'Enrollment in Velocity Chess Academy coaching programs (Kids Foundations, Intermediate Strategy, or Advanced GM Mentorship) reserves a designated batch seat. Advance notice is appreciated for missed private sessions to arrange suitable makeup opportunities.'
        },
        {
          heading: 'Academy Facilities & Equipment',
          body: 'Students are granted access to official tournament DGT electronic boards, digital clocks, analysis sets, and academy study resources. Respectful care for training equipment and academy property is expected of all participants.'
        },
        {
          heading: 'Tournament Representation',
          body: 'Students competing under the Velocity Chess Academy banner in state, national, and international tournaments are expected to uphold the highest standards of competitive sportsmanship and fair play.'
        },
        {
          heading: 'Modifications to Programs',
          body: 'The academy reserves the right to adapt coaching schedules, guest masterclasses, and tournament dates with reasonable advance notice to enrolled students and families.'
        }
      ]
    },
    code: {
      title: 'Code of Conduct & Fair Play',
      icon: <Scale className="w-5 h-5 text-[#E5A51B]" />,
      lastUpdated: 'FIDE Fair Play Compliant 2026',
      sections: [
        {
          heading: 'The Spirit of Chess (Gens Una Sumus)',
          body: 'We are one family on and off the board. Velocity Chess Academy fosters an environment of mutual respect, humility in victory, and resilience in defeat for all students, parents, and trainers.'
        },
        {
          heading: 'Zero Tolerance for Electronic or External Assistance',
          body: 'All students are held to rigorous fair play standards. Computer engine assistance, unauthorized consultation, or unethical conduct in competitive play or online training is strictly prohibited.'
        },
        {
          heading: 'Sportsmanship Across Ranks',
          body: 'Shaking hands before and after games, gracefully accepting results, recording accurate notation, and treating tournament arbiters and competitors with courtesy are mandatory principles taught from day one.'
        },
        {
          heading: 'Parental Support and Encouragement',
          body: 'Parents are encouraged to support their children’s learning journey with patience and positive reinforcement, fostering love for the game over short-term tournament pressures.'
        }
      ]
    }
  };

  const current = content[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FFF9EF] text-[#25334A] rounded-3xl border-2 border-[#E5A51B]/50 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#10264A] text-white flex items-center justify-between border-b border-[#E5A51B]/20 shrink-0">
          <div className="flex items-center space-x-2.5">
            {current.icon}
            <div>
              <h3 id="legal-modal-title" className="font-serif text-lg sm:text-xl font-bold text-[#FFF9EF]">
                {current.title}
              </h3>
              <p className="text-[10px] text-[#FFE8AB] font-sans font-medium">{current.lastUpdated}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-left">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1">
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#10264A]">
                {sec.heading}
              </h4>
              <p className="text-xs sm:text-[13px] text-[#25334A]/85 leading-relaxed font-sans font-medium">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FFF3DF] border-t border-[#E5A51B]/20 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-[#25334A]/70 font-semibold">Velocity Chess Academy Official Policy</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-xs shadow-sm transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
