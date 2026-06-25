import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumb, PageContainer, SectionHeading } from '../../components/ui';
import { ROUTES } from '../../config/routes';
import { 
  BookOpen, 
  Clock, 
  ClipboardCheck, 
  Trophy, 
  FileText,
  Bookmark
} from 'lucide-react';

const PREP_SECTIONS = [
  { slug: 'overview', label: 'Preparation Overview' },
  { slug: 'study-plan', label: 'Dynamic Study Plan' },
  { slug: 'exam-strategy', label: 'Exam Day Strategy' },
  { slug: 'revision-tips', label: 'Revision Techniques' },
  { slug: 'resources', label: 'Useful Prep Resources' },
];

export default function PrepGuidePage() {
  const [activeSection, setActiveSection] = useState(PREP_SECTIONS[0].slug);

  // Scrollspy observer for sidebar highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    };

    const sectionElements = PREP_SECTIONS.map(sec => 
      document.getElementById(sec.slug)
    ).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach(el => observer.observe(el));

    // Bottom-of-page detector to make sure last item is highlighted
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection(PREP_SECTIONS[PREP_SECTIONS.length - 1].slug);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionElements.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (slug) => {
    setActiveSection(slug);
    const element = document.getElementById(slug);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20 font-sans text-slate-800 text-left">
      <Helmet>
        <title>Olympiad Preparation Guide – NTI Olympiad</title>
        <meta name="description" content="Ultimate prep guide for NTI Mathematics, Science, English, IT, and Finance Olympiads. Learn key strategies, revision schedules, and practice methods." />
        <link rel="canonical" href="https://ntiolympiad.in/prep-guide" />
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Olympiad Preparation Guide' }
      ]} />

      <PageContainer className="py-8">
        {/* Header Block */}
        <div className="w-full border-b border-gray-300 pb-4 mb-6">
          <SectionHeading level="h1" className="font-normal text-gray-900">
            Olympiad Preparation Guide
          </SectionHeading>
        </div>

        <p className="text-[15px] text-gray-600 leading-relaxed max-w-4xl mb-8">
          Succeeding in the National Testing Initiative (NTI) Olympiad demands conceptual excellence, speed, and systematic revision. 
          Use this official guide to organize your prep strategies, revision checklists, and time management tactics.
        </p>

        {/* Sidebar + Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 items-start relative mt-6">
          
          {/* Left Vertical Sidebar (Square corners, clean list) */}
          <div className="w-full md:w-56 flex-shrink-0 sticky top-24 bg-white border border-gray-200 rounded-none shadow-sm z-10">
            <div className="p-3.5 border-b border-gray-200 bg-gray-50/50">
              <h2 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Prep Topics</h2>
            </div>
            <div className="flex flex-col py-1.5 max-h-[70vh] overflow-y-auto custom-scroll">
              {PREP_SECTIONS.map((sec) => (
                <button
                  key={sec.slug}
                  onClick={() => scrollToSection(sec.slug)}
                  className={`w-full text-left px-4 py-2 border-b border-gray-100 last:border-0 flex justify-between items-center text-[13px] transition-colors duration-150 ${
                    activeSection === sec.slug 
                      ? 'text-[#007BFF] bg-blue-50/40 font-semibold' 
                      : 'text-gray-600 hover:text-[#007BFF] hover:bg-gray-50'
                  }`}
                >
                  <span>{sec.label}</span>
                  <span className="text-gray-300 font-normal">&rsaquo;</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Papers Content Area: Single parent div container, no rounded corners, divide-y separators */}
          <div className="flex-1 min-w-0 border-2 border-gray-300 bg-white shadow-sm divide-y-2 divide-gray-300 rounded-none">
            
            {/* Section 1: Overview */}
            <div id="overview" className="scroll-mt-28 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={18} className="text-gray-500" />
                <h3 className="text-[17px] font-bold text-gray-900">Preparation Overview</h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                NTI Olympiad tests assess deep conceptual understanding rather than simple memorization. 
                Whether preparing for Mathematics (NMO), Science (NSO), English (NEO), IT (NITO), or Finance (NFO), 
                your baseline strategy should focus on resolving basic curriculum topics aligned with your class levels (CBSE, ICSE, or State Boards).
              </p>
              <div className="bg-blue-50/50 border-l-4 border-[#007BFF] p-4 rounded-none text-[13px] text-gray-700">
                <strong className="text-gray-900 block mb-1">Key Insight:</strong> 
                Always start by downloading your specific grade syllabus. Pinpoint the highest weightage chapters and resolve the basic rules, logic tables, or formulas before moving on to practice mocks.
              </div>
            </div>

            {/* Section 2: Study Plan */}
            <div id="study-plan" className="scroll-mt-28 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={18} className="text-gray-500" />
                <h3 className="text-[17px] font-bold text-gray-900">Dynamic Study Plan</h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                Setting a structured study plan ensures all chapters are covered evenly. We recommend a 4-step preparation timeline:
              </p>
              <ul className="space-y-3.5 text-[13.5px] text-gray-600 leading-relaxed pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-normal">○</span>
                  <div>
                    <strong className="text-gray-900 font-semibold">Weeks 1-4 (Core Theory):</strong> Revise class syllabus and textbooks. Draw diagrams, make notes on core equations, and clarify doubts.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-normal">○</span>
                  <div>
                    <strong className="text-gray-900 font-semibold">Weeks 5-8 (Conceptual Problems):</strong> Work on Chapter-wise practice workbooks and answer sheets. Check diagnostics to identify weak chapters.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 font-normal">○</span>
                  <div>
                    <strong className="text-gray-900 font-semibold">Weeks 9-10 (Solving PYQs):</strong> Solve official NTI previous year question papers inside a simulated exam environment (strictly offline, 60 minutes limit).
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3: Exam Day Strategy */}
            <div id="exam-strategy" className="scroll-mt-28 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={18} className="text-gray-500" />
                <h3 className="text-[17px] font-bold text-gray-900">Exam Day Strategy</h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                Maximizing your score in the NTI Olympiad requires tactical precision under exam conditions:
              </p>
              <ul className="space-y-3 text-[13.5px] text-gray-600 leading-relaxed pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] font-bold">&bull;</span>
                  <div>
                    <strong className="text-gray-900 font-semibold">Time Allocation:</strong> You have 60 minutes for 50 questions (for classes 5-10) or 40 questions (for classes 1-4). Spend no more than 1 minute per question on standard concepts.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] font-bold">&bull;</span>
                  <div>
                    <strong className="text-gray-900 font-semibold">Achiever's Section Priority:</strong> Achiever's section questions carry higher weightage (2 marks each). Dedicate at least 15-20 minutes of your time to read these conceptual problems carefully.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#007BFF] font-bold">&bull;</span>
                  <div>
                    <strong className="text-gray-900 font-semibold">No Negative Marking:</strong> NTI has no negative marking policy. Do not leave any options blank on your OMR sheet. Always attempt every query.
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 4: Revision Techniques */}
            <div id="revision-tips" className="scroll-mt-28 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <ClipboardCheck size={18} className="text-gray-500" />
                <h3 className="text-[17px] font-bold text-gray-900">Revision Techniques</h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                Efficient revision consolidates conceptual links and reduces minor mistakes in final test rooms. 
                Follow these standard revision techniques in the final 2 weeks:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-gray-600 mt-2">
                <div className="border border-gray-100 p-4 bg-gray-50/30 rounded-none">
                  <strong className="text-gray-900 block mb-1">Concept Mapping</strong>
                  Draw quick mind maps linking formulas, grammar structures, or scientific units to see relationships clearly.
                </div>
                <div className="border border-gray-100 p-4 bg-gray-50/30 rounded-none">
                  <strong className="text-gray-900 block mb-1">Error Logs</strong>
                  Maintain a log of incorrect answers from mock files. Re-solve these specific queries every third day until fully clarified.
                </div>
              </div>
            </div>

            {/* Section 5: Useful Resources */}
            <div id="resources" className="scroll-mt-28 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Bookmark size={18} className="text-gray-500" />
                <h3 className="text-[17px] font-bold text-gray-900">Useful Prep Resources</h3>
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                Maximize study returns using official NTI preparatory books, question sheets, and ranker listings:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <Link
                  to={ROUTES.previousYear}
                  className="border border-gray-200 p-4 rounded-none hover:border-gray-400 transition-colors block"
                >
                  <FileText size={18} className="text-[#007BFF] mb-2" />
                  <strong className="text-[14px] text-gray-900 block mb-0.5">Olympiad PYQs</strong>
                  <span className="text-[12px] text-gray-500 leading-relaxed">Download official previous year papers for all classes.</span>
                </Link>

                <Link
                  to={ROUTES.syllabusPyqs}
                  className="border border-gray-200 p-4 rounded-none hover:border-gray-400 transition-colors block"
                >
                  <BookOpen size={18} className="text-[#007BFF] mb-2" />
                  <strong className="text-[14px] text-gray-900 block mb-0.5">Syllabus Details</strong>
                  <span className="text-[12px] text-gray-500 leading-relaxed">View detailed category structures and topic lists.</span>
                </Link>

                <Link
                  to={ROUTES.examDates}
                  className="border border-gray-200 p-4 rounded-none hover:border-gray-400 transition-colors block"
                >
                  <Clock size={18} className="text-[#007BFF] mb-2" />
                  <strong className="text-[14px] text-gray-900 block mb-0.5">Official Schedule</strong>
                  <span className="text-[12px] text-gray-500 leading-relaxed">Inspect official registration deadlines and dates.</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </PageContainer>
    </div>
  );
}
