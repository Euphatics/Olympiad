import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/routes';
import { Breadcrumb, PageContainer, SectionHeading } from '../../components/ui';

// Register all 10 subjects from the grid layout
const ALL_SUBJECTS = [
  // Active NTI subjects (mapped from SUBJECTS config)
  {
    abbr: 'NMO',
    name: 'NTI Mathematics Olympiad',
    slug: 'mathematics',
    active: true,
    bgClass: 'bg-blue-50/40 border-blue-200 hover:bg-blue-50/80',
    textClass: 'text-blue-800',
    btnClass: 'bg-[#007BFF] hover:bg-[#0069D9] text-white',
  },
  {
    abbr: 'NEO',
    name: 'NTI English Olympiad',
    slug: 'english',
    active: true,
    bgClass: 'bg-blue-50/40 border-blue-200 hover:bg-blue-50/80',
    textClass: 'text-blue-800',
    btnClass: 'bg-[#007BFF] hover:bg-[#0069D9] text-white',
  },
  {
    abbr: 'NSO',
    name: 'NTI Science Olympiad',
    slug: 'science',
    active: true,
    bgClass: 'bg-blue-50/40 border-blue-200 hover:bg-blue-50/80',
    textClass: 'text-blue-800',
    btnClass: 'bg-[#007BFF] hover:bg-[#0069D9] text-white',
  },
  {
    abbr: 'NITO',
    name: 'NTI IT Olympiad',
    slug: 'information-technology',
    active: true,
    bgClass: 'bg-blue-50/40 border-blue-200 hover:bg-blue-50/80',
    textClass: 'text-blue-800',
    btnClass: 'bg-[#007BFF] hover:bg-[#0069D9] text-white',
  },
  {
    abbr: 'NFO',
    name: 'NTI Finance Olympiad',
    slug: 'finance',
    active: true,
    bgClass: 'bg-blue-50/40 border-blue-200 hover:bg-blue-50/80',
    textClass: 'text-blue-800',
    btnClass: 'bg-[#007BFF] hover:bg-[#0069D9] text-white',
  },
];

export default function PreviousYearPage() {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      <Helmet>
        <title>Previous Year Papers – NTI Olympiad Past Papers</title>
        <meta
          name="description"
          content="Access and download previous year question papers for NTI Mathematics, Science, English, IT, and Finance Olympiads."
        />
        <link rel="canonical" href="https://ntiolympiad.in/previous-year" />
      </Helmet>

      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Previous Year Papers' },
        ]}
      />

      <PageContainer className="py-8">
        {/* Hero Section */}
        <div className="w-full border-b border-gray-200 pb-5 mb-8 text-left">
          <SectionHeading level="h1" className="font-normal text-gray-900 mb-3">
            NTI Olympiad Previous Year Papers
          </SectionHeading>
          <p className="text-[15px] text-gray-600 leading-relaxed max-w-4xl">
            Boost your exam preparation by solving authentic, official previous year question papers. 
            Gain a solid understanding of the question formats, difficulty levels, and optimize your 
            exam-taking strategies for the upcoming testing events.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="mb-12 text-left">
          <h2 className="text-[22px] font-normal text-gray-800 mb-6 border-b border-gray-100 pb-2">
            Olympiad Subjects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ALL_SUBJECTS.map((sub) => (
              <div
                key={sub.abbr}
                className={`border rounded-lg p-5 flex flex-col justify-between transition-all duration-200 ${sub.bgClass}`}
              >
                <div>
                  <span className={`text-[12px] font-bold tracking-wider block mb-1.5 ${sub.textClass}`}>
                    {sub.abbr}
                  </span>
                  <h3 className="text-[16px] font-semibold text-gray-900 leading-snug mb-3">
                    {sub.name}
                  </h3>
                </div>
                <div>
                  {sub.active ? (
                    <Link
                      to={ROUTES.subjectPreviousYear(sub.slug)}
                      className={`inline-block w-full text-center py-2 px-3 rounded text-[13px] font-semibold transition-colors duration-150 ${sub.btnClass}`}
                    >
                      View Papers &rarr;
                    </Link>
                  ) : (
                    <span className="inline-block w-full text-center py-2 px-3 rounded text-[13px] font-medium bg-gray-100 text-gray-400 border border-gray-200">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Solve Past Papers Section */}
        <div className="mb-12 text-left max-w-4xl">
          <h2 className="text-[22px] font-normal text-gray-800 mb-4 border-b border-gray-100 pb-2">
            Why solve previous years' papers?
          </h2>
          <ul className="space-y-3.5 text-[14.5px] text-gray-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#007BFF] font-bold mt-0.5">&bull;</span>
              <div>
                <strong className="text-gray-900 font-semibold">Understand Exam Pattern:</strong> Identify the distribution of marks, question weightage across syllabus sections, and structure of Achievers sections.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#007BFF] font-bold mt-0.5">&bull;</span>
              <div>
                <strong className="text-gray-900 font-semibold">Pinpoint Weak Areas:</strong> Regular practice highlights conceptual gaps, telling you exactly which chapters require further revisions.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#007BFF] font-bold mt-0.5">&bull;</span>
              <div>
                <strong className="text-gray-900 font-semibold">Improve Speed:</strong> Refine time-allocation tactics by simulating actual examination time limits of 60 minutes.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#007BFF] font-bold mt-0.5">&bull;</span>
              <div>
                <strong className="text-gray-900 font-semibold">Improve Accuracy:</strong> Build confidence and reduce minor conceptual errors by checking answers against structured guidelines.
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="mb-12 text-left max-w-4xl">
          <h2 className="text-[22px] font-normal text-gray-800 mb-4 border-b border-gray-100 pb-2">
            Quick Subject Links
          </h2>
          <div className="flex flex-col gap-3">
            {ALL_SUBJECTS.filter((s) => s.active).map((sub) => (
              <Link
                key={sub.slug}
                to={ROUTES.subjectPreviousYear(sub.slug)}
                className="text-[14px] text-[#007BFF] hover:underline flex items-center gap-1.5 font-medium"
              >
                &raquo; Previous Year Questions of {sub.name} ({sub.abbr})
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gray-200 pt-8">
          <div>
            <h3 className="text-[17px] font-semibold text-gray-950 mb-3">
              Benefits of Past Papers
            </h3>
            <p className="text-[13.5px] text-gray-600 leading-relaxed">
              Practicing previous year documents gives children authentic exposure to testing patterns. It builds 
              confidence, helps in managing time, and enables student diagnostics before national-level finals.
            </p>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-gray-950 mb-3">
              Preparation Tips
            </h3>
            <p className="text-[13.5px] text-gray-600 leading-relaxed">
              We recommend solving the past year mock files within a strict 60-minute duration. Check incorrect answers 
              against solutions sheets, study topic patterns, and focus revision efforts on higher-weightage sections.
            </p>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold text-gray-950 mb-3">
              Exam Coverage
            </h3>
            <p className="text-[13.5px] text-gray-600 leading-relaxed">
              NTI practice sets cover syllabus contents aligned with leading school curriculums (CBSE, ICSE, and state boards) 
              tailored explicitly from Class 1 to Class 10 levels.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
