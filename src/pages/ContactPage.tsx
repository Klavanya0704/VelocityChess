import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Car, Users, Trophy, ExternalLink, ChevronDown } from 'lucide-react';

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
    <div className="relative min-h-screen text-[#25334A] select-none bg-[#FFF9EF] pt-24 sm:pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. FULL-WIDTH PAGE BACKGROUND IMAGE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/assets/contact_full_bg.jpg"
          alt="Velocity Chess Academy Interior Background"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Subtle cream overlay for readability */}
        <div className="absolute inset-0 bg-[#FFF9EF]/25 pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <section className="pt-4 pb-2 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5A51B] bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5A51B]/40 shadow-sm inline-block">
              GET IN TOUCH
            </span>
            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#10264A] leading-tight drop-shadow-xs">
              Contact &amp; Academy Admissions
            </h1>
            <p className="text-xs sm:text-sm text-[#25334A]/85 leading-relaxed font-medium">
              Have questions about our coaching programs, tournament registration, or free evaluation session? Reach out to our admissions team.
            </p>
          </div>

          {/* Decorative Handwritten Quote */}
          <div className="hidden md:block text-right pr-4 pb-2">
            <p className="font-serif italic text-xl sm:text-2xl text-[#10264A] opacity-85 leading-snug">
              &quot;Have Questions?<br />
              <span className="text-[#E5A51B]">Let&apos;s Plan Your Next Move&quot;</span>
            </p>
            <div className="w-24 h-0.5 bg-[#E5A51B]/50 ml-auto mt-1 rounded-full" />
          </div>
        </section>

        {/* MAIN CONTACT SECTION (TWO-COLUMN CARDS) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT CARD — ACADEMY INFORMATION */}
          <div className="lg:col-span-6 bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] border-2 border-[#E5A51B]/40 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch hover:border-[#E5A51B]/80 transition-all duration-300">
            
            {/* Left Contact Details */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-5 text-left flex flex-col justify-center">
              
              {/* Item 1: Academy Campus */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#10264A]">Academy Campus</h4>
                  <p className="text-xs font-semibold text-[#10264A]">Velocity Chess Academy</p>
                  <p className="text-[11px] text-[#25334A]/75 leading-tight">
                    Premiere Educational District, City Center, Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

              {/* Item 2: Admissions Helpline */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#10264A]">Admissions Helpline</h4>
                  <p className="text-xs font-extrabold text-[#10264A]">+91 98765 43210</p>
                  <p className="text-[11px] text-[#25334A]/75">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Item 3: Email Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#10264A]">Email Address</h4>
                  <p className="text-xs font-extrabold text-[#10264A]">admissions@velocitychess.edu</p>
                  <p className="text-[11px] text-[#25334A]/75">We usually respond within one business day.</p>
                </div>
              </div>

              {/* Item 4: Campus Timings */}
              <div className="flex items-start space-x-3.5 pt-1">
                <div className="w-10 h-10 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-[#10264A]">Campus Timings</h4>
                  <p className="text-[11px] text-[#25334A]/85 font-medium">
                    Monday – Saturday: 09:00 AM – 07:00 PM IST
                  </p>
                  <p className="text-[11px] text-[#25334A]/75">
                    Sunday: 10:00 AM – 04:00 PM IST (Tournament Days)
                  </p>
                </div>
              </div>

            </div>

            {/* Right Student Photo Column */}
            <div className="md:col-span-5 relative min-h-[280px] overflow-hidden bg-slate-900">
              <img
                src="/assets/contact_student_learning.jpg"
                alt="Velocity Chess Academy Student Learning"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex items-end">
                <p className="font-serif italic text-sm text-white drop-shadow-md leading-snug">
                  &quot;Guiding Young Minds Through The Game of a Lifetime.&quot;
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT CARD — CONTACT FORM ("SEND US A MESSAGE") */}
          <div className="lg:col-span-6 bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border-2 border-[#E5A51B]/40 shadow-xl hover:border-[#E5A51B]/80 transition-all duration-300 flex flex-col justify-between">
            
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#10264A] mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#25334A]/75 mb-5 font-normal">
                Fill out the form below and our admissions team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-[#FFF9EF] rounded-2xl border border-[#E5A51B]/30 my-4">
                  <CheckCircle className="w-12 h-12 text-[#E5A51B] mx-auto" />
                  <h4 className="font-serif font-bold text-2xl text-[#10264A]">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-[#25334A]/80 font-medium">
                    Thank you, <span className="font-semibold text-[#10264A]">{formData.name}</span>. Our admissions coordinator will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0B1B3D] text-white rounded-full text-xs font-semibold shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Your Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#10264A] mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#E5A51B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Varma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF5EC] border border-[#E5A51B]/35 rounded-xl text-xs text-[#10264A] placeholder-gray-400 focus:outline-none focus:border-[#E5A51B]"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-[#10264A] mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#E5A51B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF5EC] border border-[#E5A51B]/35 rounded-xl text-xs text-[#10264A] placeholder-gray-400 focus:outline-none focus:border-[#E5A51B]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#10264A] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#E5A51B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF5EC] border border-[#E5A51B]/35 rounded-xl text-xs text-[#10264A] placeholder-gray-400 focus:outline-none focus:border-[#E5A51B]"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-bold text-[#10264A] mb-1">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-[#E5A51B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAF5EC] border border-[#E5A51B]/35 rounded-xl text-xs text-[#10264A] focus:outline-none focus:border-[#E5A51B]"
                        >
                          <option>General Inquiry</option>
                          <option>Schedule Free Assessment</option>
                          <option>Tournament Registration</option>
                          <option>Online Coaching Track</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#10264A] mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your child's age, chess experience, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF5EC] border border-[#E5A51B]/35 rounded-xl text-xs text-[#10264A] placeholder-gray-400 focus:outline-none focus:border-[#E5A51B]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#0B1B3D] hover:bg-[#152C5B] text-white rounded-full font-semibold text-xs flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <Send className="w-4 h-4 text-[#E5A51B]" />
                      <span>Send Your Message &rarr;</span>
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>

        </section>

        {/* LOCATION SECTION (WIDE HORIZONTAL CARD) */}
        <section className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border-2 border-[#E5A51B]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading & Button */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="font-serif font-bold text-2xl text-[#10264A]">Our Location</h3>
            <p className="text-xs text-[#25334A]/75 leading-relaxed">
              Easy to reach, right in the heart of the city.
            </p>
            <div className="pt-1">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FFF5E6] hover:bg-[#FAF0D9] text-[#10264A] border border-[#E5A51B]/40 rounded-full text-xs font-semibold inline-flex items-center space-x-1.5 transition shadow-2xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E5A51B]" />
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#E5A51B]" />
              </a>
            </div>
          </div>

          {/* Middle Column: Interactive Location Map Card */}
          <div className="lg:col-span-4 h-32 rounded-2xl overflow-hidden border border-[#E5A51B]/30 relative shadow-inner bg-slate-100 flex items-center justify-center p-3">
            <div className="absolute inset-0 bg-[radial-gradient(#E5A51B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <div className="relative z-10 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#E5A51B]/40 shadow-md text-center flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E5A51B] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-serif font-bold text-xs text-[#10264A]">Velocity Chess Academy</p>
                <p className="text-[10px] text-[#25334A]/75">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Feature Highlight Pills */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center border-t lg:border-t-0 lg:border-l border-[#E5A51B]/20 pt-4 lg:pt-0 lg:pl-6">
            
            {/* Feature 1 */}
            <div className="space-y-1">
              <div className="w-9 h-9 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 mx-auto shadow-2xs">
                <Car className="w-4 h-4" />
              </div>
              <h5 className="font-serif font-bold text-xs text-[#10264A]">Convenient Access</h5>
              <p className="text-[10px] text-[#25334A]/75 leading-tight">
                Located with ample parking and public transport access.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-1">
              <div className="w-9 h-9 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 mx-auto shadow-2xs">
                <Users className="w-4 h-4" />
              </div>
              <h5 className="font-serif font-bold text-xs text-[#10264A]">Meet Our Team</h5>
              <p className="text-[10px] text-[#25334A]/75 leading-tight">
                Visit and discuss the best program for your child.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-1">
              <div className="w-9 h-9 rounded-full bg-[#FAF0D9] text-[#E5A51B] flex items-center justify-center border border-[#E5A51B]/30 mx-auto shadow-2xs">
                <Trophy className="w-4 h-4" />
              </div>
              <h5 className="font-serif font-bold text-xs text-[#10264A]">Experience Our Facilities</h5>
              <p className="text-[10px] text-[#25334A]/75 leading-tight">
                State-of-the-art training halls and interactive learning spaces.
              </p>
            </div>

          </div>

        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="bg-[#FFFDF9]/95 backdrop-blur-md rounded-[28px] p-6 sm:p-8 border-2 border-[#E5A51B]/40 shadow-xl space-y-6">
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-center text-[#10264A]">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#E5A51B]/25 shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-serif font-bold text-sm text-[#10264A] flex items-center justify-between hover:bg-[#FFF9EF] transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#E5A51B] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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
