import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Info,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

export default function ExamDatesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans text-slate-800">
      <Helmet>
        <title>Exam Dates – NTI Olympiad</title>
        <meta name="description" content="View the official NTI Olympiad examination schedule for 2025-26. Students from Class 1 to 10 may participate between December and February." />
      </Helmet>

      {/* ── Page Header ── */}
      <div className="w-full bg-white border-b border-slate-200 px-6 sm:px-10 lg:px-16 py-8">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4 font-medium">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Official Schedule</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Official Examination Schedule
          </h1>
          <p className="mt-2 text-base text-slate-600 max-w-2xl">
            The NTI Olympiad is administered on a national scale. Please review the official examination timeframe and essential directives provided below.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col gap-8">

        {/* ── Main Info Box ── */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 bg-slate-50 flex items-center gap-3 rounded-t-lg">
            <Calendar className="text-slate-600" size={20} />
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wider">
              Academic Session Window
            </h2>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border border-slate-200 rounded-md p-6 bg-white">
              
              <div className="flex-1">
                <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-widest">Examination Period</p>
                <p className="text-2xl font-bold text-[#1E3A8A]">December 2025 – February 2026</p>
                <p className="text-sm text-slate-500 mt-2 font-medium">Applicable for all registered schools and independent candidates.</p>
              </div>

              <div className="bg-amber-50/50 border border-amber-200 px-5 py-4 rounded-md w-full md:w-[400px]">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="text-amber-600" size={16} />
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wide">Provisional Notice</p>
                </div>
                <p className="text-sm text-amber-800/80 leading-relaxed">
                  These dates are tentative and subject to administrative revision. Final confirmed examination schedules will be issued directly to all registered participants.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── Ready to Participate ── */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 bg-slate-50 flex items-center gap-3 rounded-t-lg">
            <GraduationCap className="text-slate-600" size={22} />
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wider">
              Enrollment & Registration
            </h2>
          </div>

          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-base text-slate-700 leading-relaxed">
                Applications are currently being accepted for the upcoming cycle. We encourage institutional representatives and independent candidates to complete their registration prior to the final deadline to ensure participation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                to="/register"
                className="px-6 py-2.5 bg-[#1E3A8A] text-white font-medium rounded hover:bg-[#1E40AF] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Begin Registration
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-white text-slate-700 border border-slate-300 font-medium rounded hover:bg-slate-50 transition-colors flex items-center justify-center text-sm"
              >
                Official Support
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
