
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Clock,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Users,
  FileText,
  Trophy,
} from 'lucide-react';

/* ── Timeline phases ── */
const phases = [
  {
    id: 1,
    label: 'Phase 1',
    period: 'December',
    title: 'Registration Opens',
    color: '#007BFF',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    icon: FileText,
    details: [
      'School coordinators receive the registration portal access',
      'Individual student registrations accepted online',
      'Subject selection for Mathematics, Science, English, IT & Finance',
      'Early-bird registration available at reduced fees',
    ],
  },
  {
    id: 2,
    label: 'Phase 2',
    period: 'January',
    title: 'Participation Window',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    icon: Users,
    details: [
      'Students from Class 1 to Class 10 may enroll',
      'Both online and offline modes of participation available',
      'School-level registrations consolidated by coordinators',
      'Admit cards / hall tickets issued to enrolled students',
    ],
  },
  {
    id: 3,
    label: 'Phase 3',
    period: 'February',
    title: 'Examinations Conducted',
    color: '#059669',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    icon: BookOpen,
    details: [
      'Level 1 examinations held at designated school / center venues',
      'Online proctored examinations for remote participants',
      'Duration: 60 minutes per subject',
      'Multiple-choice format — 40 to 50 questions per paper',
    ],
  },
];

/* ── Key eligibility pointers ── */
const eligibilityPoints = [
  'Students currently enrolled in Class 1 through Class 10 at any recognized Indian school.',
  'No minimum score or prior qualification required to register.',
  'Students may appear in one or more subjects during the same cycle.',
  'Schools not yet partnered with NTI can register their students independently.',
  'Individual students whose schools are not enrolled may also self-register online.',
];

/* ── Important dates table data ── */
const importantDates = [
  { event: 'Registration Opens', date: 'December 1, 2025', status: 'upcoming' },
  { event: 'Early-Bird Registration Closes', date: 'December 20, 2025', status: 'upcoming' },
  { event: 'Regular Registration Deadline', date: 'January 15, 2026', status: 'upcoming' },
  { event: 'Late Registration (with surcharge)', date: 'January 20, 2026', status: 'upcoming' },
  { event: 'Admit Card / Hall Ticket Release', date: 'January 25, 2026', status: 'upcoming' },
  { event: 'Level 1 Examinations Begin', date: 'February 2026', status: 'upcoming' },
  { event: 'Results Declaration', date: 'March – April 2026', status: 'upcoming' },
  { event: 'Awards & Recognition Ceremony', date: 'April – May 2026', status: 'upcoming' },
];

/* ── FAQ quick answers ── */
const quickFAQs = [
  {
    q: 'Can I register after the deadline?',
    a: 'A late registration option with a small surcharge may be available depending on seat availability at your examination center. It is strongly recommended to enroll before the regular deadline.',
  },
  {
    q: 'Are dates the same for all subjects?',
    a: 'The registration and result windows are shared across all five subjects. However, individual examination dates within February may differ per subject — your admit card will carry the exact date and timing.',
  },
  {
    q: 'What if I miss the exam day?',
    a: 'No re-examination is offered for Level 1. Students who miss their scheduled slot will not be eligible for the current cycle and may participate in the next academic session.',
  },
];

export default function ExamDatesPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb] pb-20 font-sans">
      <Helmet>
        <title>Exam Dates & Schedule – NTI Olympiad 2025-26</title>
        <meta
          name="description"
          content="View the NTI Olympiad exam schedule for 2025-26. Students from Class 1 to 10 can participate between December and February. Find registration deadlines, exam dates, and result timelines."
        />
        <link rel="canonical" href="https://ntiolympiad.in/exam-dates" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Exam Dates & Schedule – NTI Olympiad 2025-26" />
        <meta
          property="og:description"
          content="View the NTI Olympiad exam schedule for 2025-26. Students from Class 1 to 10 can participate between December and February."
        />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/exam-dates" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exam Dates & Schedule – NTI Olympiad 2025-26" />
        <meta
          name="twitter:description"
          content="View the NTI Olympiad exam schedule for 2025-26. Students from Class 1 to 10 can participate between December and February."
        />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />

        {/* Event JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'NTI Olympiad 2025-26',
            startDate: '2025-12-01',
            endDate: '2026-02-28',
            location: { '@type': 'Place', name: 'Pan India – Schools & Online Centers' },
            organizer: { '@type': 'Organization', name: 'NTI Olympiad', url: 'https://ntiolympiad.in' },
            description:
              'National talent identification olympiad for students of Class 1 to Class 10 across Mathematics, Science, English, IT, and Finance.',
          })}
        </script>
      </Helmet>

      {/* ── Page Header ── */}
      <div className="w-full px-6 sm:px-10 lg:px-16 py-6 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
            <Link to="/" className="hover:text-[#007BFF] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-600">Exam Dates</span>
          </nav>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 tracking-tight">
            Exam Dates &amp; Schedule
          </h1>
          <div className="h-1 w-12 bg-[#007BFF] mt-2 rounded-full" />
          <p className="mt-3 text-sm lg:text-base text-gray-500 font-medium max-w-2xl">
            The NTI Olympiad runs from <strong className="text-gray-700">December to February</strong> each
            academic session. Below you will find the complete participation window, important deadlines, and
            subject-wise examination details.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col gap-12">

        {/* ── Academic Year Banner ── */}
        <div
          className="w-full rounded-2xl overflow-hidden shadow-sm"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #007BFF 60%, #38bdf8 100%)' }}
        >
          <div className="px-8 py-8 lg:px-12 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <CalendarDays size={28} color="white" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-blue-100 text-sm font-medium uppercase tracking-wider mb-1">
                  Academic Session
                </p>
                <h2 className="text-white text-2xl lg:text-3xl font-bold">2025 – 2026</h2>
                <p className="text-blue-100 text-sm mt-1 font-medium">
                  Participation window: <span className="text-white font-semibold">December 2025 – February 2026</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/register"
                id="exam-dates-register-btn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#007BFF] font-semibold text-sm rounded-xl hover:shadow-lg active:scale-95 transition-all duration-200"
                style={{ textDecoration: 'none' }}
              >
                Register Now
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/faq"
                id="exam-dates-faq-btn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/30 text-white font-semibold text-sm rounded-xl hover:bg-white/25 active:scale-95 transition-all duration-200"
                style={{ textDecoration: 'none' }}
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* ── Three-Phase Timeline ── */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Participation Timeline</h2>
          <div className="h-1 w-10 bg-[#007BFF] mb-6 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.id}
                  className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ borderColor: phase.border }}
                >
                  {/* Card top strip */}
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ backgroundColor: phase.bg, borderBottom: `1px solid ${phase.border}` }}
                  >
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: phase.color }}
                      >
                        {phase.label}
                      </span>
                      <h3 className="text-lg font-bold text-gray-800 mt-0.5">{phase.title}</h3>
                    </div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: phase.color }}
                    >
                      <Icon size={22} color="white" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="px-6 pt-4 pb-2">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock size={14} color={phase.color} strokeWidth={2} />
                      <span className="text-sm font-semibold" style={{ color: phase.color }}>
                        {phase.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {phase.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={15}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: phase.color }}
                            strokeWidth={2}
                          />
                          <span className="text-[13.5px] text-gray-600 leading-relaxed font-medium">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-4" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Important Dates Table ── */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Key Dates at a Glance</h2>
          <div className="h-1 w-10 bg-[#007BFF] mb-6 rounded-full" />

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-3 px-6 text-sm font-semibold text-gray-700 w-8">#</th>
                    <th className="py-3 px-6 text-sm font-semibold text-gray-700">Event / Milestone</th>
                    <th className="py-3 px-6 text-sm font-semibold text-gray-700">Tentative Date</th>
                    <th className="py-3 px-6 text-sm font-semibold text-gray-700 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-600">
                  {importantDates.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-gray-400 font-medium">{idx + 1}</td>
                      <td className="py-4 px-6 font-medium text-gray-800">{row.event}</td>
                      <td className="py-4 px-6 text-gray-600 font-medium">{row.date}</td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                          Upcoming
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
            <AlertCircle size={16} className="flex-shrink-0 mt-0.5 text-amber-600" strokeWidth={2} />
            <p className="text-sm text-amber-800 font-medium leading-relaxed">
              <strong>Note:</strong> All dates are tentative and subject to revision. Official confirmed dates will
              be announced on the NTI Olympiad portal and communicated directly to registered schools and
              participants.
            </p>
          </div>
        </div>

        {/* ── Eligibility ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Who Can Participate?</h2>
            <div className="h-1 w-10 bg-[#007BFF] mb-6 rounded-full" />

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Users size={20} color="#007BFF" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Eligibility</p>
                  <p className="text-sm font-bold text-gray-800">Classes 1 to 10 &nbsp;|&nbsp; All recognized Indian schools</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {eligibilityPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#007BFF]" strokeWidth={2} />
                    <span className="text-[13.5px] text-gray-600 leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Quick FAQs ── */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Quick Answers</h2>
            <div className="h-1 w-10 bg-[#007BFF] mb-6 rounded-full" />

            <div className="flex flex-col gap-4">
              {quickFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-5"
                >
                  <p className="text-sm font-bold text-gray-800 mb-1.5 flex items-start gap-2">
                    <span className="text-[#007BFF] flex-shrink-0 font-black text-base leading-5">Q.</span>
                    {faq.q}
                  </p>
                  <p className="text-[13.5px] text-gray-600 leading-relaxed font-medium pl-5">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Subjects offered ── */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Subjects Available</h2>
          <div className="h-1 w-10 bg-[#007BFF] mb-6 rounded-full" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Mathematics', color: '#4F46E5', bg: '#EEF2FF', emoji: '📐' },
              { name: 'Science', color: '#059669', bg: '#F0FDF4', emoji: '🔬' },
              { name: 'English', color: '#7C3AED', bg: '#F5F3FF', emoji: '📚' },
              { name: 'Information Technology', color: '#0D9488', bg: '#F0FDFA', emoji: '💻' },
              { name: 'Finance', color: '#E11D48', bg: '#FFF1F2', emoji: '💹' },
            ].map((sub) => (
              <div
                key={sub.name}
                className="rounded-2xl border flex flex-col items-center justify-center gap-2 py-6 px-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default"
                style={{ backgroundColor: sub.bg, borderColor: sub.color + '33' }}
              >
                <span className="text-3xl">{sub.emoji}</span>
                <span className="text-[13px] font-bold leading-snug" style={{ color: sub.color }}>
                  {sub.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-7 lg:px-10 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-4">
            <Trophy size={26} color="#007BFF" strokeWidth={1.8} />
            <div>
              <h4 className="text-base lg:text-lg font-bold text-gray-800">Ready to Participate?</h4>
              <p className="text-xs lg:text-sm text-gray-500 font-medium mt-0.5">
                Register your school or enroll as an individual student before the deadline.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/register"
              id="exam-dates-cta-register"
              className="px-7 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #007BFF 0%, #0056b3 100%)',
                textDecoration: 'none',
              }}
            >
              Register Now
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              id="exam-dates-cta-contact"
              className="px-7 py-2.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all duration-200"
              style={{ textDecoration: 'none' }}
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
