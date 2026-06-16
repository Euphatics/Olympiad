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
            About Olympiad India
          </h1>
          <p className="mt-3 text-sm sm:text-base text-royal-200 max-w-2xl mx-auto leading-relaxed">
            Providing a platform where Indian students can compete with
            international students in Olympiads and contests on similar
            educational levels.
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
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                <strong className="text-gray-800">Olympiad India</strong> aims
                to provide a platform where Indian students can compete with
                International students in Olympiads and contests on similar
                educational levels.
              </p>
              <p className="text-[15px] leading-7 text-gray-600 mb-4">
                Olympiad Examinations help to identify a child's capability and
                real potential that may help him survive better in today's modern
                competitive world at the international level. They motivate
                students to endeavor for a deeper understanding of scientific
                facts to enhance their reasoning, analytical, and problem-solving
                skills.
              </p>
              <p className="text-[15px] leading-7 text-gray-600">
                Olympiad India is founded by like-minded people with vast
                experience in Education. It is an initiative taken by{' '}
                <strong className="text-gray-800">
                  STEM OLYMPIAD INDIA – (Shrikant Chandrakant Thale HUF Firm)
                </strong>.
              </p>
            </div>

            {/* Key highlights */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                  At a Glance
                </h4>
                <ul className="space-y-3">
                  {[
                    'Platform for national and international level competition',
                    'Enhances reasoning, analytical & problem-solving skills',
                    'Founded by experienced educators',
                    'Initiative of STEM Olympiad India',
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
                { value: '5+', label: 'Subjects', icon: BookOpen },
                { value: '10+', label: 'Class Levels', icon: GraduationCap },
                { value: '150+', label: 'Countries', icon: Globe },
                { value: '1000+', label: 'Awards Given', icon: Award },
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
