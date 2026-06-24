import { School, Calendar, BookOpen, ClipboardList, FileText, HelpCircle } from 'lucide-react';

export default function AssociatedSchools() {
  // 8 placeholder items to repeat for the seamless loop
  const placeholders = Array.from({ length: 8 }, (_, idx) => idx);

  const quickLinks = [
    { icon: Calendar, title: 'Exam Dates' },
    { icon: BookOpen, title: 'Syllabus' },
    { icon: ClipboardList, title: 'Exam Pattern' },
    { icon: FileText, title: 'Sample Papers' },
    { icon: School, title: 'School Registration' },
    { icon: HelpCircle, title: 'FAQs' },
  ];

  return (
    <section className="w-full bg-[#1E293B] py-12 border-b border-slate-900 overflow-hidden">
      
      {/* Inline styles for the marquee loop */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        /* Pause animation on hover */
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col items-start">
        
        {/* Quick Links Menu (Upar Wala Feature) */}
        <div className="w-full max-w-6xl self-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 mb-12">
          {quickLinks.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Large light slate icon */}
                <div className="text-slate-300 group-hover:scale-105 transition-transform duration-300 mb-3">
                  <IconComponent size={48} strokeWidth={1.5} />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                {/* Know More Button */}
                <button
                  type="button"
                  className="bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs font-bold tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-md focus:outline-none uppercase"
                >
                  Know More
                </button>
              </div>
            );
          })}
        </div>

        {/* Schools Associated Section Divider */}
        <div className="w-full flex flex-col items-center mb-6">
          <h2 className="text-sm md:text-base font-extrabold text-slate-400 uppercase tracking-widest">
            Schools Associated With Us
          </h2>
          <div className="h-0.5 w-16 bg-slate-700 mt-2 rounded-full"></div>
        </div>

        {/* Marquee sliding container */}
        <div className="w-full relative marquee-container overflow-hidden py-2">
          
          {/* Subtle fading gradients on left and right edges for a premium look */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1E293B] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1E293B] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="marquee-track gap-8 flex">
            
            {/* First Set of placeholders */}
            {placeholders.map((i) => (
              <div
                key={`p1-${i}`}
                className="w-36 sm:w-44 h-16 sm:h-20 bg-white/95 border border-slate-700/30 rounded-xl flex items-center justify-center shadow-md select-none flex-shrink-0"
              >
                <div className="flex flex-col items-center gap-1.5 text-slate-400">
                  <School size={20} strokeWidth={1.5} />
                  <span className="text-[10px] font-bold tracking-wider uppercase">School Partner</span>
                </div>
              </div>
            ))}

            {/* Second Set (duplicated for a seamless infinite loop) */}
            {placeholders.map((i) => (
              <div
                key={`p2-${i}`}
                className="w-36 sm:w-44 h-16 sm:h-20 bg-white/95 border border-slate-700/30 rounded-xl flex items-center justify-center shadow-md select-none flex-shrink-0"
              >
                <div className="flex flex-col items-center gap-1.5 text-slate-400">
                  <School size={20} strokeWidth={1.5} />
                  <span className="text-[10px] font-bold tracking-wider uppercase">School Partner</span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

