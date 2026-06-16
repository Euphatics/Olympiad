import React from 'react';
import { Eye, Target, Globe, School, Users, GraduationCap } from 'lucide-react';

const stats = [
  {
    label: 'Countries Active',
    value: '153',
    icon: Globe,
  },
  {
    label: 'Schools Partnered',
    value: '1700+',
    icon: School,
  },
  {
    label: 'Teachers Involved',
    value: '2100+',
    icon: Users,
  },
  {
    label: 'Students Enrolled',
    value: '38000+',
    icon: GraduationCap,
  },
];

export default function AboutNTI() {
  return (
    <section className="w-full bg-white py-8 lg:py-12 border-b border-gray-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
            1.5 About NTI
          </h2>
          <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full"></div>
        </div>

        {/* Top Row: Poster Image & Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Poster Image Container */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-gray-100 shadow-md">
            <img 
              src="/about_nti_banner.png" 
              alt="About NTI Olympiad Banner" 
              className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105 select-none"
            />
            {/* Subtle overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Intro Text Container */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold text-gray-800 tracking-tight mb-4">
              Nurturing Young Talent Globally
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-600 mb-4 font-normal">
              NTI Olympiad (National Talent Initiative) is India's premier academic competition platform, 
              designed to identify, nurture, and inspire young minds from Nursery to Class 10. Our goal is 
              to promote logical thinking, scientific reasoning, and analytical capabilities among school 
              children through interactive, competitive national and international exams.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-600 font-normal">
              By participating in NTI Olympiads, students evaluate their conceptual understanding, build 
              academic confidence, and benchmark themselves against peers at school, state, national, 
              and international levels. We work closely with thousands of schools, teachers, and coordinators 
              globally to provide a seamless, high-impact competition experience that opens new horizons.
            </p>
          </div>
        </div>

        {/* Middle Row: Statistics Grid Banner */}
        <div className="w-full bg-gradient-to-r from-royal-700 to-royal-800 text-white rounded-2xl shadow-lg p-6 sm:p-8 md:px-12 my-8 relative overflow-hidden">
          {/* Background shapes overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-600 rounded-full blur-3xl opacity-20 pointer-events-none -mr-20 -mt-20"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {stats.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.label}
                  className="flex flex-col items-center md:items-start text-center md:text-left md:border-r border-royal-600/40 last:border-r-0 md:pr-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-royal-600/50 flex items-center justify-center mb-3 text-royal-200">
                    <IconComp size={22} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-royal-200/90 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Row: Vision & Mission Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Vision Card */}
          <div className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            {/* Subtle background hover color */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-blue-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Eye size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                  Our Vision
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-500 font-normal">
                  To create a world-class educational ecosystem that empowers students to unlock their full 
                  scientific, logical, and computational potential, fostering a generation of innovators, 
                  critical thinkers, and passionate problem solvers who will lead with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            {/* Subtle background hover color */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-purple-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Target size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 tracking-tight mb-2 group-hover:text-purple-600 transition-colors">
                  Our Mission
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-500 font-normal">
                  To make advanced academic challenges accessible, fun, and highly rewarding for students 
                  everywhere. We strive to provide diagnostic insights to teachers, support educational 
                  institutions, and reward conceptual mastery with national-level recognition.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
