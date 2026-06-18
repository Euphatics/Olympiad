import React from 'react';

const subjects = [
  { no: 1, name: 'NTI Mathematics Olympiad (NMO)', link: 'NMO' },
  { no: 2, name: 'NTI English Olympiad (NEO)', link: 'NEO' },
  { no: 3, name: 'NTI Science Olympiad (NSO)', link: 'NSO' },
  { no: 4, name: 'NTI Information Technology Olympiad (NITO)', link: 'NITO' },
  { no: 5, name: 'NTI Finance Olympiad (NFO)', link: 'NFO' },
];

export default function SubjectRankersPage({ onSelectSubject }) {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10">
        
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-10 font-semibold border-b border-gray-200 pb-4">
          Subject Rankers
        </h1>

        <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-t-lg">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-[#0b5f83] text-white">
                <th className="py-4 px-6 text-base font-semibold border-r border-white/20 w-32">Serial No</th>
                <th className="py-4 px-6 text-base font-semibold border-r border-white/20">Subject Name</th>
                <th className="py-4 px-6 text-base font-semibold w-56">Rankers List</th>
              </tr>
            </thead>
            <tbody className="text-base text-gray-700">
              {subjects.map((subject, index) => (
                <tr 
                  key={subject.no} 
                  className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'}
                >
                  <td className="py-5 px-6 border-r border-gray-100">{subject.no}</td>
                  <td className="py-5 px-6 border-r border-gray-100 text-gray-800">{subject.name}</td>
                  <td 
                    className="py-5 px-6 text-[#007BFF] hover:underline cursor-pointer font-medium"
                    onClick={() => onSelectSubject && onSelectSubject(subject.name)}
                  >
                    Click Here
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
