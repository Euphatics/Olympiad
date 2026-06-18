import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

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
  );
}
