import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFF9EF] pt-24 sm:pt-28 pb-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white border border-[#E5A51B]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#10264A] shadow-sm mb-4">
          <Mail className="w-3.5 h-3.5 text-[#E5A51B]" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] mb-4">
          Contact & Academy Admissions
        </h1>
        <p className="text-base sm:text-lg text-[#25334A]/80 max-w-3xl mx-auto leading-relaxed">
          Have questions about our coaching programs, tournament registration, or free evaluation session? Reach out to our admissions team.
        </p>
      </section>

      {/* Main Form & Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#10264A] text-white p-8 rounded-3xl border border-[#E5A51B]/30 shadow-xl space-y-6">
              <h3 className="font-serif font-bold text-2xl text-[#FFF9EF]">Academy Campus</h3>
              
              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#E5A51B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold text-sm">Velocity Campus</strong>
                    <span>Premier Education District, City Center</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#E5A51B] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold text-sm">Admissions Helpline</strong>
                    <span>+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#E5A51B] shrink-0" />
                  <div>
                    <strong className="block text-white font-semibold text-sm">Email Address</strong>
                    <span>admissions@velocitychess.edu</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-300">
                <p className="font-semibold text-[#E5A51B] mb-1">Campus Timings:</p>
                <p>Monday – Saturday: 09:00 AM – 07:00 PM IST</p>
                <p>Sunday: 10:00 AM – 04:00 PM IST (Tournament Days)</p>
              </div>
            </div>

            {/* Interactive Campus Map Placeholder */}
            <div className="bg-white p-6 rounded-3xl border border-[#E5A51B]/20 shadow-md text-center space-y-3">
              <div className="aspect-video bg-[#F8F0E3] rounded-2xl border border-[#E5A51B]/30 flex flex-col items-center justify-center p-4">
                <MapPin className="w-8 h-8 text-[#E5A51B] mb-2" />
                <p className="font-serif font-bold text-sm text-[#10264A]">Interactive Location Map</p>
                <p className="text-xs text-[#25334A]/70">Located in the heart of the educational hub with ample student parking.</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E5A51B]/25 shadow-xl">
            <h3 className="font-serif font-bold text-2xl text-[#10264A] mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#FFF9EF] rounded-2xl border border-[#E5A51B]/30">
                <CheckCircle className="w-12 h-12 text-[#E5A51B] mx-auto" />
                <h4 className="font-serif font-bold text-2xl text-[#10264A]">Message Sent Successfully!</h4>
                <p className="text-sm text-[#25334A]/80">
                  Thank you, <span className="font-semibold text-[#10264A]">{formData.name}</span>. Our admissions coordinator will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#10264A] text-white rounded-full text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10264A] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFF9EF] border border-[#E5A51B]/30 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10264A] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFF9EF] border border-[#E5A51B]/30 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10264A] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFF9EF] border border-[#E5A51B]/30 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10264A] mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFF9EF] border border-[#E5A51B]/30 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                    >
                      <option>General Inquiry</option>
                      <option>Schedule Free Assessment</option>
                      <option>Tournament Registration</option>
                      <option>Online Coaching Track</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10264A] mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your child's age, chess experience, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FFF9EF] border border-[#E5A51B]/30 rounded-xl text-sm focus:outline-none focus:border-[#E5A51B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#10264A] hover:bg-[#071A38] text-white rounded-full font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-[#10264A]/20 transition"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 text-[#E5A51B]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h3 className="font-serif font-bold text-3xl text-center text-[#10264A] mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5A51B]/20 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-base text-[#10264A] flex items-center justify-between hover:bg-[#FFF9EF] transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#E5A51B] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#25334A]/80 leading-relaxed border-t border-[#F8F0E3] pt-3 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
