
const subjects = [
  { name: 'Mathematics Olympiad', abbr: 'NMO', label: 'NMO Syllabus' },
  { name: 'English Olympiad', abbr: 'NEO', label: 'NEO Syllabus' },
  { name: 'Science Olympiad', abbr: 'NSO', label: 'NSO Syllabus' },
  { name: 'Information Technology Olympiad', abbr: 'NITO', label: 'NITO Syllabus' },
  { name: 'Finance Olympiad', abbr: 'NFO', label: 'NFO Syllabus' },
];

const LogoSVG = ({ abbr }) => (
  <svg width="120" height="60" viewBox="0 0 120 60" className="mx-auto">
    <text x="10" y="40" fontSize="36" fontWeight="bold" fill="#28589c" fontFamily="sans-serif">N</text>
    {/* Simple mountain peak vector */}
    <path d="M 40 40 L 55 20 L 65 30 L 75 15 L 90 40 Z" fill="none" stroke="#28589c" strokeWidth="2" />
    <text x="45" y="38" fontSize="24" fontWeight="normal" fill="#28589c" fontFamily="sans-serif">{abbr.substring(1)}</text>
    <text x="45" y="52" fontSize="10" fontStyle="italic" fill="#28589c" fontFamily="sans-serif">Olympiads</text>
    {/* Curve underneath */}
    <path d="M 10 55 Q 60 65 110 50" fill="none" stroke="#28589c" strokeWidth="2" />
  </svg>
);

export default function SyllabusPYQs({ onSelectSyllabus }) {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* ── Breadcrumb ── */}
      <div className="w-full bg-[#f0f8ff] border-b border-blue-100 py-3 px-6 sm:px-10 lg:px-16">
        <div className="text-[13px] sm:text-[14px] text-gray-500">
          <a href="#" className="text-[#007BFF] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Exam Syllabus and PYQs</span>
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Grid of Subjects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 text-center mt-10">
            {subjects.map((subject, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => onSelectSyllabus && onSelectSyllabus(subject.name)}
              >
                <div className="mb-4 transform transition-transform group-hover:scale-105 duration-300">
                  <LogoSVG abbr={subject.abbr} />
                </div>
                <button className="text-[#00b0ff] text-[15px] hover:underline hover:text-[#0090e0] font-medium">
                  {subject.label}
                </button>
                <p className="text-[12px] text-gray-500 mt-1 font-medium">{subject.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
