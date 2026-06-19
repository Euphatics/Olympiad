import { useState, useEffect } from 'react';

const CLASSES = [
  'About',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10'
];

export default function SyllabusDetail({ subjectName, onBack, onMarkingSchemeClick }) {
  const [activeClass, setActiveClass] = useState('About');

  // Performant scroll spy using IntersectionObserver to avoid layout jank
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    };

    const sectionElements = CLASSES.map(cls => 
      document.getElementById(cls.replace(/\s+/g, '-'))
    ).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const cls = id.replace(/-/g, ' ');
          setActiveClass(cls);
        }
      });
    }, observerOptions);

    sectionElements.forEach(el => observer.observe(el));

    // Simple bottom-of-page detector to make sure Class 10 is highlighted
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveClass('Class 10');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionElements.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (className) => {
    setActiveClass(className);
    const element = document.getElementById(className.replace(/\s+/g, '-'));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* ── Breadcrumb ── */}
      <div className="w-full bg-[#f0f8ff] border-b border-blue-100 py-3 px-6 sm:px-10 lg:px-16">
        <div className="text-[13px] sm:text-[14px] text-gray-500">
          <a href="#" className="text-[#007BFF] hover:underline" onClick={(e) => { e.preventDefault(); onBack(); }}>Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="text-[#007BFF] hover:underline" onClick={(e) => { e.preventDefault(); onBack(); }}>Exam Syllabus and PYQs</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">NTI {subjectName} Syllabus</span>
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 mt-8 mb-4 border-b border-gray-200 pb-4">
        <h1 className="text-3xl text-gray-800">NTI <span className="font-semibold">{subjectName}</span> Syllabus</h1>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row gap-8 relative mt-6">
        {/* Sidebar */}
        <div className="w-full md:w-48 flex-shrink-0">
          <div className="md:sticky md:top-24 bg-white">
            <h3 className="font-semibold text-gray-800 mb-4 px-2">Classes</h3>
            <ul className="flex flex-col border-t border-gray-200">
              {CLASSES.map((cls) => (
                <li key={cls}>
                  <button
                    onClick={() => scrollToSection(cls)}
                    className={`w-full text-left px-3 py-1.5 border-b border-gray-200 flex justify-between items-center text-[13px] transition-colors duration-200 ${
                      activeClass === cls ? 'text-[#00b0ff] font-medium' : 'text-[#00b0ff] hover:text-[#0090e0]'
                    }`}
                  >
                    {cls}
                    <span className="text-lg">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl">
          {CLASSES.map((cls) => (
            <div key={cls} id={cls.replace(/\s+/g, '-')} className="mb-14 pt-4">
              {cls === 'About' ? (
                <>
                  <h2 className="text-[28px] font-normal text-gray-900 mb-4">About NTI {subjectName}</h2>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    The National Talent Information (NTI) {subjectName} is designed to test the critical thinking and problem-solving skills of students. Below is the detailed syllabus for various classes. 
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-[28px] font-normal text-gray-900 mb-6">
                    {subjectName.split(' ')[0]} Olympiad Syllabus for {cls}
                  </h2>
                  
                  <div className="space-y-4 text-[14px] text-gray-800 leading-relaxed mb-6">
                    <p>
                      <strong>Topics Covered:</strong> Basic Concepts on Comparison (Big and Small, Tall and Short, Open and Close, Sit and Stand, Same and Different), Numbers (Numbers 1–50, What Comes After, What Comes Before), Shapes (Circle, Square, Triangle, Rectangle).
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-4 py-1.5 border border-gray-300 bg-gray-50 text-[13px] text-gray-700 hover:bg-gray-100 transition-colors">
                      Sample Paper
                    </button>
                    <button 
                      onClick={(e) => { e.preventDefault(); onMarkingSchemeClick && onMarkingSchemeClick(); }}
                      className="px-4 py-1.5 border border-gray-300 bg-gray-50 text-[13px] text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Marking Scheme
                    </button>
                    <button className="px-4 py-1.5 border border-gray-300 bg-gray-50 text-[13px] text-gray-700 hover:bg-gray-100 transition-colors">
                      PYQs
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
