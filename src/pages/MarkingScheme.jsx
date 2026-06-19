import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const subjects = [
  { name: 'Mathematics Olympiad', id: 'math' },
  { name: 'Science Olympiad', id: 'science' },
  { name: 'English Olympiad', id: 'english' },
  { name: 'Information Technology Olympiad', id: 'it' },
  { name: 'Finance Olympiad', id: 'finance' }
];

export default function MarkingScheme() {
  const [activeSubject, setActiveSubject] = useState(subjects[0].id);

  const scrollToSection = (id) => {
    setActiveSubject(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

      {/* ── Main Layout ── */}
      <div className="w-full px-6 sm:px-10 lg:px-16 py-8">
        <div className="w-full border-b border-gray-300 pb-4 mb-8">
          <h1 className="text-2xl lg:text-[28px] font-normal text-[#333]">Level 1 Exam Pattern and Marking Scheme</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          
          {/* ── Left Sidebar ── */}
          <div className="w-full md:w-64 flex-shrink-0 sticky top-24 bg-white border border-gray-100 shadow-sm rounded-sm z-10">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Level 1 Marking Scheme</h2>
            </div>
            <div className="flex flex-col py-2">
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => scrollToSection(sub.id)}
                  className={`w-full text-left px-4 py-2.5 border-b border-gray-100 flex justify-between items-center text-[14px] transition-colors duration-200 ${
                    activeSubject === sub.id 
                    ? 'text-[#007BFF] bg-blue-50/50 font-medium' 
                    : 'text-[#007BFF] hover:bg-gray-50'
                  }`}
                >
                  NTI {sub.name}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right Content ── */}
          <div className="flex-1 min-w-0">
            <div className="space-y-16">
              
              {/* Note about offline mode */}
              <div className="bg-[#f0f8ff] border-l-4 border-[#28589c] p-4 rounded shadow-sm">
                <p className="text-[#333] font-semibold text-[16px]">Important Information:</p>
                <p className="text-[#555] text-[15px] mt-1">The examination is conducted <strong>strictly offline in school premises</strong>.</p>
              </div>

              {subjects.map((subject) => (
                <div key={subject.id} id={subject.id} className="scroll-mt-24">
                  <h3 className="text-[24px] font-normal text-gray-800 mb-6">NTI {subject.name}</h3>
                  <div className="overflow-x-auto shadow-sm rounded-sm border border-gray-200">
                    <Table hoverable>
                      <TableHead>
                        <TableHeadCell>Topic/Section</TableHeadCell>
                        <TableHeadCell>No. of Questions</TableHeadCell>
                        <TableHeadCell>Marks per Question</TableHeadCell>
                        <TableHeadCell>Total Marks</TableHeadCell>
                        <TableHeadCell>Total Time (in minutes)</TableHeadCell>
                      </TableHead>
                      <TableBody className="divide-y">
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            General Section
                          </TableCell>
                          <TableCell>30</TableCell>
                          <TableCell>1</TableCell>
                          <TableCell>30</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Achiever's Section
                          </TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>20</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow className="bg-[#f4f8fc] font-bold text-[#111] dark:bg-gray-700 dark:text-white">
                          <TableCell className="whitespace-nowrap">Grand Total</TableCell>
                          <TableCell>40</TableCell>
                          <TableCell></TableCell>
                          <TableCell>50</TableCell>
                          <TableCell className="text-[#28589c] dark:text-blue-400">60</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
