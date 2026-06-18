import React from 'react';

// Dummy data for rankers
const rankersData = [
  { zone: 'ANDHRA PRADESH ZONE', class: '01', name: 'PODILI SATYA SRAVAN', school: 'SRINIVASA PUBLIC SCHOOL' },
  { zone: 'ANDHRA PRADESH ZONE', class: '02', name: 'RAJOLU VENKATA SRI KEDHAR', school: 'SRINIVASA PUBLIC SCHOOL' },
  { zone: 'ANDHRA PRADESH ZONE', class: '03', name: 'PASUPULETI KOMALI DEVI', school: 'SRINIVASA PUBLIC SCHOOL' },
  { zone: 'ANDHRA PRADESH ZONE', class: '04', name: 'AYAAN AGRAWAL', school: 'LITTLE WOODS SCHOOL' },
  { zone: 'ANDHRA PRADESH ZONE', class: '05', name: 'KAKARLA MANASWINI', school: 'SRINIVASA PUBLIC SCHOOL' },
  { zone: 'DELHI NCR ZONE', class: '06', name: 'ANMOL ANIKET', school: 'DELHI PUBLIC SCHOOL' },
  { zone: 'MAHARASHTRA ZONE', class: '07', name: 'AARAV SHARMA', school: 'BOMBAY SCOTTISH SCHOOL' },
  { zone: 'KARNATAKA ZONE', class: '08', name: 'MEGHANA REDDY', school: 'NATIONAL PUBLIC SCHOOL' },
];

export default function RankersListPage({ subjectName, onBack }) {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* ── Breadcrumb ── */}
      <div className="w-full bg-[#f0f8ff] border-b border-blue-100 py-3 px-6 sm:px-10 lg:px-16">
        <div className="text-[13px] sm:text-[14px] text-gray-500">
          <a href="#" className="text-[#007BFF] hover:underline" onClick={(e) => { e.preventDefault(); onBack(); }}>Subject Rankers</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{subjectName} Rankers</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10">
        
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-2 font-semibold">
          {subjectName} - Rankers List
        </h1>
        
        <p className="text-sm text-gray-600 mb-8">
          The following students from various zones have been awarded the NTI Academic Excellence Scholarship for the year 2026-27.
        </p>

        <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-t-lg">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-white border-b-2 border-gray-200">
                <th className="py-4 px-6 text-base font-semibold text-[#0b5f83] border-r border-gray-200 uppercase tracking-wide">Zone</th>
                <th className="py-4 px-6 text-base font-semibold text-[#0b5f83] border-r border-gray-200 uppercase tracking-wide">Class</th>
                <th className="py-4 px-6 text-base font-semibold text-[#0b5f83] border-r border-gray-200 uppercase tracking-wide">Name</th>
                <th className="py-4 px-6 text-base font-semibold text-[#0b5f83] uppercase tracking-wide">School Name</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {rankersData.map((student, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 border-r border-gray-200 text-gray-600">{student.zone}</td>
                  <td className="py-4 px-6 border-r border-gray-200">{student.class}</td>
                  <td className="py-4 px-6 border-r border-gray-200 text-gray-800 font-medium">{student.name}</td>
                  <td className="py-4 px-6 text-gray-600">{student.school}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
