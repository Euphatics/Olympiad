import React from 'react';

export default function MarkingScheme() {
  const subjects = [
    'English',
    'Mathematics',
    'Science',
    'Information Technology',
    'Finance'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── Breadcrumb ── */}
      <div className="w-full bg-[#f0f8ff] border-b border-blue-100 py-3 px-6 sm:px-10 lg:px-16">
        <div className="text-[13px] sm:text-[14px] text-gray-500">
          <a href="#" className="text-[#007BFF] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Marking Scheme</span>
        </div>
      </div>

      {/* ── Page Header ── */}
      <div className="w-full px-6 sm:px-10 lg:px-16 py-8">
        <div className="w-full border-b border-gray-300 pb-4 mb-8">
          <h1 className="text-2xl lg:text-[28px] font-normal text-[#333]">NTI Olympiad Marking Scheme</h1>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-8">
          {/* Note about offline mode */}
          <div className="bg-[#f0f8ff] border-l-4 border-[#28589c] p-4 rounded shadow-sm mb-12">
            <p className="text-[#333] font-semibold text-[16px]">Important Information:</p>
            <p className="text-[#555] text-[15px] mt-1">The examination is conducted <strong>strictly offline in school premises</strong>.</p>
          </div>

          {subjects.map((subject, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-[24px] font-bold text-[#28589c] mb-4">{subject} Olympiad</h3>
              <div className="overflow-x-auto shadow-sm rounded-sm border border-gray-200">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-50 text-[14px] text-gray-700 border-b-2 border-gray-300">
                      <th className="py-4 px-6 font-semibold">Topic/Section</th>
                      <th className="py-4 px-6 font-semibold">No. of Questions</th>
                      <th className="py-4 px-6 font-semibold">Marks per Question</th>
                      <th className="py-4 px-6 font-semibold">Total Marks</th>
                      <th className="py-4 px-6 font-semibold">Total Time (in minutes)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] text-gray-700">
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">General Section</td>
                      <td className="py-4 px-6">30</td>
                      <td className="py-4 px-6">1</td>
                      <td className="py-4 px-6">30</td>
                      <td className="py-4 px-6"></td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">Achiever's Section</td>
                      <td className="py-4 px-6">10</td>
                      <td className="py-4 px-6">2</td>
                      <td className="py-4 px-6">20</td>
                      <td className="py-4 px-6"></td>
                    </tr>
                    <tr className="bg-[#f4f8fc] font-bold text-[#111] border-b border-gray-300">
                      <td className="py-4 px-6">Grand Total</td>
                      <td className="py-4 px-6">40</td>
                      <td className="py-4 px-6"></td>
                      <td className="py-4 px-6">50</td>
                      <td className="py-4 px-6 text-[#28589c]">60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
