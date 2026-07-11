import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumb, PageContainer, SectionHeading } from '../../components/ui';
import { 
  Calendar, 
  Info, 
  ArrowRight, 
  GraduationCap 
} from 'lucide-react';

export default function ExamDatesPage() {
  return (
    <div className="min-h-screen bg-white pb-24 font-sans text-slate-800 text-left">
      <Helmet>
        <title>Exam Dates – NTI Olympiad</title>
        <meta name="description" content="View the official NTI Olympiad examination schedule for 2025-26. Students from Class 1 to 10 may participate between December and February." />
        <link rel="canonical" href="https://ntiolympiad.in/exam-dates" />
      </Helmet>

      <Breadcrumb items={[
        { label: 'Home', path: '/' },
        { label: 'Official Schedule' }
      ]} />

      <PageContainer className="py-8">
        {/* Header Block */}
        <div className="w-full border-b-2 border-gray-300 pb-4 mb-6">
          <SectionHeading level="h1" className="font-normal text-gray-900">
            Official Examination Schedule
          </SectionHeading>
        </div>

        <p className="text-[15px] text-gray-600 leading-relaxed max-w-4xl mb-8">
          The NTI Olympiad is administered on a national scale. Please review the official examination timeframe and essential directives provided below.
        </p>

        {/* Unified Container: Left-aligned, no rounded corners, divided sections */}
        <div className="border-2 border-gray-300 bg-white shadow-sm divide-y-2 divide-gray-300 rounded-none max-w-4xl">
          
          {/* Section 1: Academic Session Window */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="text-gray-500" size={18} />
              <h2 className="text-[16px] font-bold text-gray-900 uppercase tracking-wider">
                Academic Session Window
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
              <div className="flex-1">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Examination Period</p>
                <p className="text-2xl font-bold text-[#1E3A8A]">December 2025 – February 2026</p>
                <p className="text-xs text-gray-400 mt-2 font-medium">Applicable for all registered schools and independent candidates.</p>
              </div>

              <div className="bg-amber-50/50 border-l-4 border-amber-500 p-4 rounded-none w-full md:w-[380px] flex-shrink-0">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Info className="text-amber-600" size={14} />
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Provisional Notice</p>
                </div>
                <p className="text-[13px] text-amber-800/90 leading-relaxed font-normal">
                  These dates are tentative and subject to administrative revision. Final confirmed examination schedules will be issued directly to all registered participants.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Enrollment & Registration */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-gray-500" size={20} />
              <h2 className="text-[16px] font-bold text-gray-900 uppercase tracking-wider">
                Enrollment & Registration
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-[14px] text-gray-600 leading-relaxed font-normal">
                  Applications are currently being accepted for the upcoming cycle. We encourage institutional representatives and independent candidates to complete their registration prior to the final deadline to ensure participation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                <Link
                  to="/register"
                  className="px-5 py-2.5 bg-[#1E3A8A] text-white font-medium hover:bg-[#172554] transition-colors flex items-center justify-center gap-2 text-xs rounded-none uppercase tracking-wider"
                >
                  <span>Begin Registration</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center text-xs rounded-none uppercase tracking-wider"
                >
                  <span>Official Support</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </PageContainer>
    </div>
  );
}
