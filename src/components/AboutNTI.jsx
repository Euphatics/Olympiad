import React from 'react';
import { Eye, Target, Globe, School, Users, GraduationCap, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Countries', value: '153', icon: Globe },
  { label: 'Schools', value: '1,700+', icon: School },
  { label: 'Teachers', value: '2,100+', icon: Users },
  { label: 'Students', value: '38,000+', icon: GraduationCap },
];

const highlights = [
  'Exams for Nursery to Class 10',
  'Covers Maths, Science, English, IT & Finance',
  'School-level, State, National & International rounds',
  'Detailed performance reports for every student',
];

export default function AboutNTI() {
  return (
    <section className="w-full bg-white py-10 lg:py-14 border-b border-gray-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
            1.5 About NTI
          </h2>
          <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full"></div>
        </div>

        {/* Main Content: Two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">

          {/* Left: Description */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              What is NTI Olympiad?
            </h3>
            <p className="text-[15px] leading-7 text-gray-600 mb-3">
              NTI stands for <strong className="text-gray-800">National Talent Initiative</strong>. We conduct academic olympiad exams for school students from Nursery up to Class 10. The exams test how well students understand their subjects — not just what they've memorized.
            </p>
            <p className="text-[15px] leading-7 text-gray-600 mb-3">
              Students who participate get a clear picture of where they stand compared to others at school, state, and national level. Teachers and schools receive performance reports that help them understand which topics need more attention.
            </p>
            <p className="text-[15px] leading-7 text-gray-600">
              We've been working with schools and coordinators across India and abroad to make these exams accessible and useful — not just another test, but a genuine learning tool.
            </p>
          </div>

          {/* Right: Quick highlights list */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                At a Glance
              </h4>
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#007BFF] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-[14px] text-gray-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-royal-700 text-white rounded-xl p-6 sm:p-8 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => {
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

        {/* Vision & Mission — simple side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Vision */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Eye size={20} strokeWidth={2} />
              </div>
              <h4 className="text-base font-bold text-gray-800">Our Vision</h4>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-500">
              Every student should have the chance to discover what they're good at. We want our exams to help kids think clearly, ask better questions, and actually enjoy the process of learning.
            </p>
          </div>

          {/* Mission */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <Target size={20} strokeWidth={2} />
              </div>
              <h4 className="text-base font-bold text-gray-800">Our Mission</h4>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-500">
              Run fair, well-organized olympiad exams. Give schools and teachers useful data on student performance. Recognize students who do well — not just toppers, but everyone who shows real improvement.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
