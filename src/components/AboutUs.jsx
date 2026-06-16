import React from 'react';
import {
  GraduationCap,
  Globe,
  Award,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   ABOUT US PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function AboutUs() {
  return (
    <div className="w-full bg-[#f9fafb]">

      {/* ─── 1. PAGE HEADER ──────────────────────────────────── */}
      <section className="w-full bg-royal-800 py-12 lg:py-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            About NTI Academy & Olympiad
          </h1>
          <p className="mt-3 text-sm sm:text-base text-royal-200 max-w-2xl mx-auto leading-relaxed">
            Empowering young minds through knowledge and innovation by identifying, encouraging, and nurturing the talent of students across India.
          </p>
        </div>
      </section>

      {/* ─── 2. WHO WE ARE ───────────────────────────────────── */}
      <section className="w-full bg-white py-10 lg:py-14 border-b border-gray-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
              Who We Are
            </h2>
            <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Story & Mission</h3>
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                <strong className="text-gray-800">NTI ACADEMY</strong> was founded in 2019 by Izhar Khan, an Engineering Graduate from the University of Mumbai and a Post Graduate from the University of Glasgow. After studying and working abroad, Izhar Khan realized that while Indian students possess immense potential, many lack the critical analytical and problem-solving skills required to compete on a global stage.
              </p>
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                To bridge this gap, NTI Academy launched the <strong className="text-[#007BFF]">NTI Olympiad</strong>, a premier <strong className="text-gray-800">National Olympiad Competition</strong>. We conduct comprehensive <strong className="text-gray-800">School Olympiad Exams</strong> including the <strong className="text-gray-800">Maths Olympiad, Science Olympiad, English Olympiad, Information Technology, and Finance Olympiad</strong> for students from Classes 1 to 12 across India.
              </p>
              <p className="text-[15px] leading-7 text-gray-600">
                Whether you are looking for an <strong className="text-gray-800">Online Olympiad for Students</strong> or an offline school-based test, our platform caters to all. As we gear up for the <strong className="text-gray-800">Olympiad Exam 2026</strong>, our mission remains to empower young minds through knowledge and innovation. By participating in the NTI Olympiad, students gain early exposure to national-level assessments, build confidence, and prepare for future academic challenges.
              </p>
            </div>

            {/* Key highlights */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                  Why Participate?
                </h4>
                <ul className="space-y-3">
                  {[
                    'National-level Recognition & Medals',
                    'Enhances Analytical & Problem-solving Skills',
                    'Scholarship Opportunities for Top Achievers',
                    'Builds Confidence for Future Academic Challenges',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#007BFF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[14px] text-gray-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. STATS BAR ────────────────────────────────────── */}
      <section className="w-full bg-[#f9fafb] py-4">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="w-full bg-royal-700 text-white rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '5', label: 'Years of Excellence', icon: BookOpen },
                { value: '100s', label: 'Schools Associated', icon: Globe },
                { value: '1000s', label: 'Students Participated', icon: GraduationCap },
                { value: 'Pan-India', label: 'Participants', icon: Award },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center md:border-r border-royal-500/30 last:border-r-0"
                  >
                    <IconComp size={24} strokeWidth={1.8} className="text-royal-300 mb-2" />
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      {item.value}
                    </span>
                    <span className="text-xs font-semibold text-royal-300 uppercase tracking-wider mt-1">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. OUR MISSION ──────────────────────────────────── */}
      <section className="w-full bg-white py-10 lg:py-14 border-b border-gray-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
              Our Mission
            </h2>
            <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                The goal of our organisation is to help fulfil academic goals of
                the students by instilling life skills & scholastic skills in
                them so that they excel at every level in their life.
              </p>
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                Every child is talented. STEM Olympiad helps them realize their
                true intellectual potential through International Level
                Olympiads.
              </p>
              <p className="text-[15px] leading-7 text-gray-600">
                We're a highly collaborative and supportive team, coming together
                on every project to ensure our students get the very best result.
              </p>
            </div>

            {/* Mission pillars */}
            <div className="lg:col-span-5 space-y-4">
              {[
                {
                  img: '/academics.svg',
                  title: 'Academic Excellence',
                  text: 'Helping students excel at every level through structured Olympiad preparation.',
                  bg: 'bg-blue-50',
                  filter: 'brightness(0) saturate(100%) invert(32%) sepia(93%) saturate(1700%) hue-rotate(205deg) brightness(97%) contrast(98%)',
                },
                {
                  img: '/global.svg',
                  title: 'Global Competence',
                  text: 'Preparing Indian students to compete at international standards with confidence.',
                  bg: 'bg-emerald-50',
                  filter: 'brightness(0) saturate(100%) invert(44%) sepia(63%) saturate(530%) hue-rotate(108deg) brightness(92%) contrast(91%)',
                },
                {
                  img: '/potential.svg',
                  title: 'True Potential',
                  text: "Identifying and nurturing each child's unique capabilities and talents.",
                  bg: 'bg-purple-50',
                  filter: 'brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(3000%) hue-rotate(258deg) brightness(88%) contrast(95%)',
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 border border-gray-200 rounded-xl p-5"
                >
                  <div className={`w-10 h-10 rounded-lg ${pillar.bg} flex items-center justify-center flex-shrink-0`}>
                    <img
                      src={pillar.img}
                      alt={pillar.title}
                      className="w-6 h-6"
                      style={{ filter: pillar.filter }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHY OLYMPIAD INDIA ───────────────────────────── */}
      <section className="w-full bg-white py-10 lg:py-14 border-b border-gray-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
              Why Olympiad India?
            </h2>
            <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                Olympiad examinations go beyond regular school assessments. They
                test conceptual clarity, analytical ability, and the capacity to
                apply knowledge in unfamiliar situations — skills that matter in
                the real world.
              </p>
              <p className="text-[15px] leading-7 text-gray-600">
                Our team of experienced educators ensures that every examination
                is thoughtfully designed to challenge students while nurturing
                their confidence and intellectual curiosity.
              </p>
            </div>

            <div>
              <div className="space-y-3">
                {[
                  'Assessments designed by experienced educators',
                  'Fair, transparent evaluation at every level',
                  'Recognition of effort, not just top scores',
                  'Comprehensive performance analytics for schools',
                  'Exams for Nursery to Class 10',
                  'Covers Maths, Science, English, IT & Finance',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-[14px] text-gray-600"
                  >
                    <CheckCircle2 size={18} className="text-[#007BFF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
