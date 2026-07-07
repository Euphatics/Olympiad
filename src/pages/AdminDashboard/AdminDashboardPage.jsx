import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  Users, 
  MapPin, 
  Search, 
  Filter, 
  CheckCircle2,
  Clock,
  MoreVertical,
  Calendar,
  BookOpen,
  FileText,
  CreditCard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ExamDatesTab from './ExamDatesTab';
import SyllabusTab from './SyllabusTab';
import PapersTab from './PapersTab';

const PRIMARY_BLUE = '#007BFF';
const HEADING_COL  = '#1F2937';
const MUTED_COL    = '#9CA3AF';
const BORDER_COL   = '#E5E7EB';
const BG_SECTION   = '#F9FAFB';
const ICON_BG      = '#EFF6FF';
const ICON_COL     = '#1D4ED8';

const mockSchools = [
  { id: 'SCH-001', name: 'Delhi Public School', principal: 'Dr. R.K. Sharma', email: 'principal@dps.edu.in', region: 'North Zone', studentCount: 1250, status: 'verified', date: '2026-07-01' },
  { id: 'SCH-002', name: 'Springdales School', principal: 'Mrs. Anita Singh', email: 'info@springdales.com', region: 'North Zone', studentCount: 840, status: 'pending', date: '2026-07-03' },
  { id: 'SCH-003', name: 'St. Xavier\'s Collegiate School', principal: 'Fr. John D\'Souza', email: 'contact@stxaviers.org', region: 'East Zone', studentCount: 1560, status: 'verified', date: '2026-07-04' },
  { id: 'SCH-004', name: 'Kendriya Vidyalaya', principal: 'Mr. P.K. Das', email: 'admin@kv.gov.in', region: 'Central Zone', studentCount: 2100, status: 'verified', date: '2026-07-05' },
  { id: 'SCH-005', name: 'National Public School', principal: 'Ms. Geeta Rao', email: 'info@nps.edu', region: 'South Zone', studentCount: 920, status: 'pending', date: '2026-07-06' }
];

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const totalSchools = mockSchools.length;
  const totalStudents = mockSchools.reduce((acc, school) => acc + school.studentCount, 0);
  const pendingApprovals = mockSchools.filter(s => s.status === 'pending').length;

  const filteredSchools = mockSchools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard – NTI Olympiad</title>
      </Helmet>

      <div className="flex min-h-[calc(100vh-64px)] bg-[#F8FAFC] text-left">
        
        {/* Left Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-white border-r hidden md:flex flex-col z-10" style={{ borderColor: BORDER_COL }}>
          <div className="p-6 border-b" style={{ borderColor: BORDER_COL }}>
            <h2 className="text-xl font-extrabold tracking-tight" style={{ color: HEADING_COL }}>Admin Panel</h2>
            <p className="text-[11px] font-bold mt-1 uppercase tracking-widest" style={{ color: PRIMARY_BLUE }}>NTI Olympiad</p>
          </div>
          
          <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-bold transition-colors ${activeTab === 'overview' ? 'bg-[#EFF6FF] text-[#1D4ED8] border border-blue-100' : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
            >
              <Building2 size={16} strokeWidth={2.5} /> Overview
            </button>
            <button 
              onClick={() => navigate('/admin/approvals')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors border border-transparent"
            >
              <CreditCard size={16} strokeWidth={2} /> Approvals
            </button>
            <button 
              onClick={() => setActiveTab('dates')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-bold transition-colors ${activeTab === 'dates' ? 'bg-[#EFF6FF] text-[#1D4ED8] border border-blue-100' : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
            >
              <Calendar size={16} strokeWidth={2.5} /> Exam Dates
            </button>
            <button 
              onClick={() => setActiveTab('syllabus')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-bold transition-colors ${activeTab === 'syllabus' ? 'bg-[#EFF6FF] text-[#1D4ED8] border border-blue-100' : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
            >
              <BookOpen size={16} strokeWidth={2.5} /> Syllabus
            </button>
            <button 
              onClick={() => setActiveTab('papers')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-bold transition-colors ${activeTab === 'papers' ? 'bg-[#EFF6FF] text-[#1D4ED8] border border-blue-100' : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
            >
              <FileText size={16} strokeWidth={2.5} /> Previous Papers
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto w-full">
          {activeTab === 'overview' && (
            <>
              <div className="bg-white border-b px-8 py-6 flex items-center justify-between" style={{ borderColor: BORDER_COL }}>
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: HEADING_COL }}>School Enrollments</h1>
                  <p className="text-sm mt-1" style={{ color: MUTED_COL }}>Monitor and manage registered schools and overall student participation counts.</p>
                </div>
              </div>

              <div className="p-8 max-w-full">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
                    <Building2 size={26} style={{ color: '#6B7280' }} strokeWidth={1.5} className="flex-shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Total Schools</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-none">{totalSchools}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
                    <Users size={26} style={{ color: '#6B7280' }} strokeWidth={1.5} className="flex-shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Total Students</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-none">{totalStudents.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
                    <Clock size={26} style={{ color: '#F59E0B' }} strokeWidth={1.5} className="flex-shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Pending Approvals</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-none">{pendingApprovals}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-sm border p-5 flex items-center gap-4 transition-shadow hover:shadow-md" style={{ borderColor: BORDER_COL }}>
                    <MapPin size={26} style={{ color: '#6B7280' }} strokeWidth={1.5} className="flex-shrink-0" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">Active Regions</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-none">4</p>
                    </div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="bg-white rounded-sm border overflow-hidden" style={{ borderColor: BORDER_COL }}>
                  <div className="p-5 border-b flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: BORDER_COL, background: BG_SECTION }}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: ICON_BG }}>
                        <Users size={15} style={{ color: ICON_COL }} strokeWidth={2} />
                      </div>
                      <h2 className="text-lg font-bold" style={{ color: HEADING_COL }}>
                        Directory
                      </h2>
                    </div>
                    
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <div className="relative flex-1 md:w-72">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Search size={15} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          placeholder="Search by school, ID or region..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-[13px] border rounded-sm outline-none transition-colors border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-sm text-[13px] font-semibold hover:bg-gray-50 transition-colors text-gray-700 bg-white">
                        <Filter size={15} /> Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="border-b bg-gray-50/50" style={{ borderColor: BORDER_COL }}>
                        <tr>
                          <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">School Details</th>
                          <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Contact Person</th>
                          <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px]">Region</th>
                          <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px] text-right">Student Count</th>
                          <th className="px-5 py-4 font-bold text-gray-700 uppercase tracking-wider text-[10px] text-center border-l border-gray-200">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {filteredSchools.map((school) => (
                          <tr key={school.id} className="hover:bg-gray-50/80 transition-colors">
                            <td className="px-5 py-4">
                              <p className="text-[13px] font-bold text-gray-900">{school.name}</p>
                              <p className="text-[11px] text-gray-500 font-medium mt-0.5">ID: {school.id}</p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="text-[13px] font-semibold text-gray-800">{school.principal}</p>
                              <p className="text-[11px] text-gray-500 font-medium mt-0.5">{school.email}</p>
                            </td>
                            <td className="px-5 py-4">
                              <span className="text-[13px] font-medium text-gray-700">{school.region}</span>
                            </td>
                            <td className="px-5 py-4 text-right">
                              <span className="text-[14px] font-bold text-gray-900">{school.studentCount.toLocaleString()}</span>
                            </td>
                            <td className="px-5 py-4 text-center border-l border-gray-200">
                              {school.status === 'verified' ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <CheckCircle2 size={12} strokeWidth={2.5} /> Verified
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                                  <Clock size={12} strokeWidth={2.5} /> Pending
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'dates' && <ExamDatesTab />}
          {activeTab === 'syllabus' && <SyllabusTab />}
          {activeTab === 'papers' && <PapersTab />}
        </main>
      </div>
    </>
  );
}
