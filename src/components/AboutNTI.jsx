import React from 'react';
import {
  Star,
  School,
  GraduationCap,
  Globe,
  Eye,
  Target,
} from 'lucide-react';

const stats = [
  { value: '5',          label: 'Years of Excellence',    icon: Star,          color: 'bg-amber-500' },
  { value: 'Thousands',  label: 'Students Participated',  icon: GraduationCap, color: 'bg-blue-500' },
  { value: 'Hundreds',   label: 'Schools Associated',     icon: School,        color: 'bg-emerald-500' },
  { value: 'Pan-India',  label: 'Participants From',      icon: Globe,         color: 'bg-purple-500' },
];

export default function AboutNTI() {
  return (
    <section id="about-nti" className="w-full bg-white py-10 lg:py-14 border-b border-gray-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
            About NTI Olympiad
          </h2>
          <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">

          {/* Left: Description */}
          <div className="lg:col-span-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              India's Leading Academic Olympiad Platform
            </h3>
            <p className="text-[15px] leading-7 text-gray-600 mb-3">
              NTI Olympiad is a <strong className="text-gray-800">national-level academic competition</strong> designed to identify, encourage and nurture the talent of students from <strong className="text-gray-800">Classes 1 to 12</strong>. For the past <strong className="text-[#007BFF]">5 years</strong>, NTI Olympiad has been inspiring young minds across India.
            </p>
            <p className="text-[15px] leading-7 text-gray-600 mb-3">
              Students from <strong className="text-gray-800">all boards — CBSE, ICSE, State Boards & International Schools</strong> can participate. Exams are conducted <strong className="text-gray-800">Offline (At Schools)</strong> and <strong className="text-gray-800">Online (From Home)</strong>, across School, Zonal, and National levels.
            </p>
            <p className="text-[14px] leading-7 text-gray-400 italic">
              "We don't just conduct exams, we create opportunities that shape future achievers."
            </p>
          </div>

          {/* Right: Vision & Mission stacked */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Vision */}
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Eye size={18} strokeWidth={2} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Our Vision</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Empowering young minds through knowledge and innovation — every student deserves the chance to discover excellence and become a champion.
              </p>
            </div>

            {/* Mission */}
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Target size={18} strokeWidth={2} />
                </div>
                <h4 className="text-sm font-bold text-gray-800">Our Mission</h4>
              </div>
              <p className="text-[13px] leading-relaxed text-gray-500">
                To be India's fastest growing academic movement — identifying talent, building confidence, and preparing students for future challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full bg-royal-700 text-white rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center md:border-r border-royal-500/30 last:border-r-0"
                >
                  <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center mb-2 shadow-md`}>
                    <IconComp size={20} strokeWidth={1.8} className="text-white" />
                  </div>
                  <span className="text-xl sm:text-2xl font-extrabold text-white">
                    {item.value}
                  </span>
                  <span className="text-[11px] font-semibold text-royal-300 uppercase tracking-wider mt-1">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
