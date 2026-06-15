import React from 'react';

const subjects = [
  {
    name: 'Mathematics',
    color: '#3B82F6',
    bgGradient: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    topics: [
      'Arithmetic & Numbers',
      'Algebra & Equations',
      'Geometry & Shapes',
      'Number System & Data Handling'
    ],
    logo: (
      <img
        src="/icons8-math-50.png"
        alt="Mathematics"
        className="w-7 h-7 object-contain select-none brightness-0 invert"
      />
    )
  },
  {
    name: 'Information Technology',
    color: '#8B5CF6',
    bgGradient: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
    topics: [
      'AI Basics',
      'Coding Concepts',
      'Cyber Safety',
      'Digital Literacy'
    ],
    logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 select-none" fill="white">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
      </svg>
    )
  },
  {
    name: 'Science',
    color: '#10B981',
    bgGradient: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
    topics: [
      'Conceptual Understanding',
      'Scientific Reasoning',
      'Practical Applications',
      'Innovation Mindset'
    ],
    logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 select-none" fill="white">
        <path d="M19.8 18.4L14 10.2V5h1V3H9v2h1v5.2L4.2 18.4c-.5.7-.1 1.6.8 1.6h14c.9 0 1.3-.9.8-1.6zM6.5 18l3.5-5V5h4v8l3.5 5H6.5z" />
      </svg>
    )
  },
  {
    name: 'English',
    color: '#EC4899',
    bgGradient: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)',
    topics: [
      'Language Proficiency',
      'Communication',
      'Global Prespective',
      'Confidence Building'
    ],
    logo: (
      <img
        src="/auto_stories_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
        alt="English"
        className="w-7 h-7 object-contain select-none brightness-0 invert"
      />
    )
  },
  {
    name: 'Finance',
    color: '#F97316',
    bgGradient: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
    topics: [
      'Banking Basics',
      'Budgeting & Savings',
      'Investment Awareness',
      'Financial Literacy'
    ],
    logo: (
      <img
        src="/finance_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
        alt="Finance"
        className="w-7 h-7 object-contain select-none brightness-0 invert"
      />
    )
  }
];

// Memoized SubjectCard component to prevent unnecessary re-renders
const SubjectCard = React.memo(({ sub }) => {
  return (
    <div className="group relative bg-white border border-gray-200/80 rounded-2xl p-5 lg:p-6 flex flex-col items-center gap-4 transition-all duration-300 shadow-sm hover:shadow-md cursor-default overflow-hidden">
      {/* Subtle background gradient glow on card hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
        style={{ background: sub.bgGradient }}
      />

      {/* Circular Icon badge matching ImportantInfo.jsx style */}
      <div
        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: sub.color }}
      >
        {sub.logo}
      </div>

      {/* Subject Label */}
      <h3 className="relative z-10 text-base font-bold text-gray-800 text-center tracking-wide group-hover:text-gray-900 transition-colors duration-200">
        {sub.name}
      </h3>

      {/* Topics / Syllabus items */}
      <ul className="relative z-10 w-full text-xs text-gray-500 font-medium space-y-1.5 border-t border-gray-100 pt-3.5 mt-1">
        {sub.topics.map((topic, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: sub.color }}
            />
            <span className="truncate">{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

SubjectCard.displayName = 'SubjectCard';

export default function SubjectsOffered() {
  return (
    <section className="w-full bg-[#f9fafb] py-8 lg:py-12 border-b border-gray-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading section styled to match Important Information exactly */}
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">
            1.4 Subjects Offered
          </h2>
          <div className="h-1 w-12 bg-[#007BFF] mt-1.5 rounded-full"></div>
        </div>

        {/* Subjects horizontal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {subjects.map((sub) => (
            <SubjectCard key={sub.name} sub={sub} />
          ))}
        </div>

      </div>
    </section>
  );
}
