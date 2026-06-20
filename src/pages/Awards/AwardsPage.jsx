
import { Helmet } from 'react-helmet-async';

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      <Helmet>
        <title>Awards and Recognition – NTI Olympiad Winners</title>
        <meta name="description" content="Discover student ranks, cash prizes, shields, gold/silver/bronze medals, and school certificates awarded by NTI Olympiad." />
        <link rel="canonical" href="https://ntiolympiad.in/awards" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Awards and Recognition – NTI Olympiad Winners" />
        <meta property="og:description" content="Discover student ranks, cash prizes, shields, gold/silver/bronze medals, and school certificates awarded by NTI Olympiad." />
        <meta property="og:site_name" content="NTI Olympiad" />
        <meta property="og:image" content="https://ntiolympiad.in/about_nti_banner.png" />
        <meta property="og:url" content="https://ntiolympiad.in/awards" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Awards and Recognition – NTI Olympiad Winners" />
        <meta name="twitter:description" content="Discover student ranks, cash prizes, shields, gold/silver/bronze medals, and school certificates awarded by NTI Olympiad." />
        <meta name="twitter:image" content="https://ntiolympiad.in/about_nti_banner.png" />
      </Helmet>
      {/* ── Header ── */}
      <div className="w-full px-6 sm:px-10 lg:px-16 py-6 border-b border-gray-200">
        <h1 className="text-2xl text-gray-800">Awards & Recognition | Academic Year 2026-27</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">

        {/* Buttons at the top */}
        <div className="flex items-center gap-4 mb-10">
          <button className="text-lg text-[#007BFF] border-b-2 border-[#007BFF] font-medium pb-1">Students Awards</button>
          <span className="text-gray-300 text-xl font-light">|</span>
          <button className="text-lg text-[#007BFF] border-b-2 border-transparent hover:border-[#007BFF] font-medium pb-1 transition-colors">Teachers Awards</button>
        </div>

        {/* ── Key Pointers ── */}
        <h2 className="text-xl font-normal text-gray-800 mb-4">Key Pointers for NTI Olympiads Awards</h2>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 mb-10 max-w-4xl">
          <li>For students in classes 1-10, the awards include medals, certificates, and exciting cash prizes for top performers.</li>
          <li>Ranking is determined based on the total score. In case of a tie, the time taken to complete the test will be considered.</li>
          <li>Top 3 International rankers will receive special Gold, Silver, and Bronze medals respectively.</li>
          <li>Top 3 Zonal rankers will also receive Zonal Medals and Certificates of Excellence.</li>
          <li>Every participating student receives a digital participation certificate. These will be available online in the student dashboard.</li>
        </ul>

        {/* ── Student Awards Table ── */}
        <h2 className="text-xl font-normal text-gray-800 mb-4">NTI Olympiads Awards for Students</h2>
        <p className="text-sm text-gray-600 mb-4">Awards for Students Appearing Online</p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-200 w-16">Sl No.</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-200">Ranking Criteria</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-200 w-32">Grades</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700">Awards</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">1</td>
                <td className="py-4 px-4 border-r border-gray-200">International rankers from 1st to 3rd positions globally</td>
                <td className="py-4 px-4 border-r border-gray-200">Grades 1-10</td>
                <td className="py-4 px-4 leading-relaxed">
                  <strong>International Rank 1:</strong> Gold Medal + Certificate of Excellence + Cash Prize<br />
                  <strong>International Rank 2:</strong> Silver Medal + Certificate of Excellence + Cash Prize<br />
                  <strong>International Rank 3:</strong> Bronze Medal + Certificate of Excellence + Cash Prize<br />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">2</td>
                <td className="py-4 px-4 border-r border-gray-200">Zonal rankers from 1st to 3rd positions in each zone</td>
                <td className="py-4 px-4 border-r border-gray-200">Grades 1-10</td>
                <td className="py-4 px-4 leading-relaxed">
                  <strong>Zonal Rank 1:</strong> Zonal Gold Medal + Certificate of Excellence<br />
                  <strong>Zonal Rank 2:</strong> Zonal Silver Medal + Certificate of Excellence<br />
                  <strong>Zonal Rank 3:</strong> Zonal Bronze Medal + Certificate of Excellence<br />
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">3</td>
                <td className="py-4 px-4 border-r border-gray-200">Top 10% students</td>
                <td className="py-4 px-4 border-r border-gray-200">Grades 1-10</td>
                <td className="py-4 px-4">
                  Medal of Distinction + Merit Certificate
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">4</td>
                <td className="py-4 px-4 border-r border-gray-200">Top 25% students</td>
                <td className="py-4 px-4 border-r border-gray-200">Grades 1-10</td>
                <td className="py-4 px-4">
                  Commendation Certificate
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">5</td>
                <td className="py-4 px-4 border-r border-gray-200">All other participants</td>
                <td className="py-4 px-4 border-r border-gray-200">Grades 1-10</td>
                <td className="py-4 px-4">
                  Digital Participation Certificate
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Teacher Awards Table ── */}
        <h2 className="text-xl font-normal text-gray-800 mb-4 mt-12">Awards for NTI International Teacher Olympiads</h2>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-y border-gray-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-200">Category</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 border-r border-gray-200">Eligibility</th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700">Award Details</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">Outstanding Teacher Award</td>
                <td className="py-4 px-4 border-r border-gray-200">Top 5% of all participating teachers globally</td>
                <td className="py-4 px-4">Certificate of Outstanding Performance + Memento</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">Excellent Teacher Award</td>
                <td className="py-4 px-4 border-r border-gray-200">Next 10% of participating teachers</td>
                <td className="py-4 px-4">Certificate of Excellence</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 border-r border-gray-200">Participation</td>
                <td className="py-4 px-4 border-r border-gray-200">All participating teachers</td>
                <td className="py-4 px-4">Digital Participation Certificate</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
