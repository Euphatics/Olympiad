import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { getSubjectBySlug, CLASS_LEVELS } from '../../config/subjects';
import { ROUTES } from '../../config/routes';
import { Breadcrumb, PageContainer, SectionHeading } from '../../components/ui';

const YEARS = ['2025-26', '2024-25', '2023-24'];

// Custom styling configurations based on subject slug
const SUBJECT_THEMES = {
  mathematics: {
    accentText: 'text-blue-600',
    accentBg: 'bg-blue-50/50',
    accentBorder: 'border-blue-200',
    hoverBg: 'hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300',
    heroBg: 'bg-gradient-to-r from-blue-50/30 to-white',
    badgeText: 'text-blue-800 bg-blue-100/60',
  },
  english: {
    accentText: 'text-emerald-600',
    accentBg: 'bg-emerald-50/50',
    accentBorder: 'border-emerald-200',
    hoverBg: 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300',
    heroBg: 'bg-gradient-to-r from-emerald-50/30 to-white',
    badgeText: 'text-emerald-800 bg-emerald-100/60',
  },
  science: {
    accentText: 'text-amber-600',
    accentBg: 'bg-amber-50/50',
    accentBorder: 'border-amber-200',
    hoverBg: 'hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300',
    heroBg: 'bg-gradient-to-r from-amber-50/30 to-white',
    badgeText: 'text-amber-800 bg-amber-100/60',
  },
  'information-technology': {
    accentText: 'text-purple-600',
    accentBg: 'bg-purple-50/50',
    accentBorder: 'border-purple-200',
    hoverBg: 'hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300',
    heroBg: 'bg-gradient-to-r from-purple-50/30 to-white',
    badgeText: 'text-purple-800 bg-purple-100/60',
  },
  finance: {
    accentText: 'text-rose-600',
    accentBg: 'bg-rose-50/50',
    accentBorder: 'border-rose-200',
    hoverBg: 'hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300',
    heroBg: 'bg-gradient-to-r from-rose-50/30 to-white',
    badgeText: 'text-rose-800 bg-rose-100/60',
  },
};

export default function SubjectPreviousYearPage() {
  const { subjectSlug } = useParams();
  const subject = getSubjectBySlug(subjectSlug);

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="text-center p-8 bg-gray-50 border border-gray-200 rounded-lg max-w-sm text-left">
          <h1 className="text-xl font-medium text-gray-800 mb-2">Subject Not Found</h1>
          <p className="text-gray-500 text-sm mb-4">The past papers for this subject could not be located.</p>
          <Link to={ROUTES.previousYear} className="text-[#007BFF] hover:underline font-medium">
            Back to All Subjects
          </Link>
        </div>
      </div>
    );
  }

  // Load subject-specific theme variables (default to blue if not found)
  const theme = SUBJECT_THEMES[subject.slug] || SUBJECT_THEMES.mathematics;

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      <Helmet>
        <title>{`NTI ${subject.abbr} Previous Year Papers – Class 1 to 10`}</title>
        <meta name="description" content={`Download NTI ${subject.name} (${subject.abbr}) previous year question papers for classes 1 to 10.`} />
        <link rel="canonical" href={`https://ntiolympiad.in/previous-year/${subject.slug}`} />
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Previous Year Papers', path: ROUTES.previousYear },
        { label: `${subject.abbr} Papers` }
      ]} />

      <PageContainer className="py-8">
        {/* Header Block / Hero Frame */}
        <div className={`w-full border border-gray-200 rounded-xl p-6 mb-10 text-left ${theme.heroBg}`}>
          <Link to={ROUTES.previousYear} className={`text-xs hover:underline block mb-3 font-semibold ${theme.accentText}`}>
            &larr; Back to All Subjects
          </Link>
          <SectionHeading level="h1" className="font-normal text-gray-900 mb-3">
            NTI <span className="font-semibold">{subject.name} ({subject.abbr})</span> Past Papers
          </SectionHeading>
          <p className="text-[14.5px] text-gray-600 leading-relaxed max-w-4xl">
            Strengthen your examination preparation by solving authentic, grade-specific previous year question sheets. 
            Select your class level below to open the practice files inside the interactive PDF viewer.
          </p>
        </div>

        {/* Classes Listing Section */}
        <div className="max-w-4xl text-left">
          
          <div className="space-y-6">
            {CLASS_LEVELS.map((cls) => (
              <div 
                key={cls.slug} 
                className="scroll-mt-24 border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-all duration-200"
              >
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-[17px] font-semibold text-gray-900">
                      {cls.name}
                    </h2>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${theme.badgeText}`}>
                      {cls.number <= 5 ? 'Primary' : 'Secondary'}
                    </span>
                  </div>
                  <Link
                    to={ROUTES.syllabusClass(subject.slug, cls.slug)}
                    className={`text-xs hover:underline font-semibold ${theme.accentText}`}
                  >
                    View Syllabus &rsaquo;
                  </Link>
                </div>

                {/* Years Paper Selectors Row */}
                <div className="flex flex-wrap gap-3">
                  {YEARS.map((year) => (
                    <Link
                      key={year}
                      to={ROUTES.previousYearDetail(subject.slug, cls.slug, year)}
                      className={`flex items-center gap-1 py-2 px-4 rounded-[4px] border text-[13px] font-semibold transition-all duration-150 bg-white border-gray-300 text-gray-700 ${theme.hoverBg}`}
                    >
                      <span>{year} NTI {subject.abbr} Practice Paper</span>
                      <span className="text-gray-400 font-normal">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related Resources Grid */}
          <div className="border-t border-gray-200 pt-10 mt-12">
            <h2 className="text-[16px] font-bold text-gray-900 mb-6 uppercase tracking-wider">
              Related Prep Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to={ROUTES.awards}
                className={`border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-all duration-200 block text-left bg-white`}
              >
                <div className={`w-8 h-8 rounded bg-gray-50 flex items-center justify-center font-bold text-sm mb-3 border border-gray-200 text-gray-600`}>
                  B
                </div>
                <h3 className="font-semibold text-gray-900 text-[14.5px] mb-1">
                  Olympiad Workbooks
                </h3>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  Deepen conceptual clarity with expert study workbooks designed for all classes.
                </p>
              </Link>
              <Link
                to={ROUTES.syllabusPyqs}
                className={`border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-all duration-200 block text-left bg-white`}
              >
                <div className={`w-8 h-8 rounded bg-gray-50 flex items-center justify-center font-bold text-sm mb-3 border border-gray-200 text-gray-600`}>
                  P
                </div>
                <h3 className="font-semibold text-gray-900 text-[14.5px] mb-1">
                  Mock Sample Sheets
                </h3>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  Download complimentary sample mock papers to test speed and format levels.
                </p>
              </Link>
              <Link
                to={ROUTES.subjectRankers}
                className={`border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-all duration-200 block text-left bg-white`}
              >
                <div className={`w-8 h-8 rounded bg-gray-50 flex items-center justify-center font-bold text-sm mb-3 border border-gray-200 text-gray-600`}>
                  R
                </div>
                <h3 className="font-semibold text-gray-900 text-[14.5px] mb-1">
                  Results & Rankers
                </h3>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  Inspect result release schedules and verify final state rankers announcements.
                </p>
              </Link>
            </div>
          </div>

        </div>
      </PageContainer>
    </div>
  );
}
