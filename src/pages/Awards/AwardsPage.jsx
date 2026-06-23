
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
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a href="#student-awards" className="text-lg text-[#007BFF] border-b-2 border-[#007BFF] font-medium pb-1">Students Awards</a>
          <span className="text-gray-300 text-xl font-light">|</span>
          <a href="#school-awards" className="text-lg text-gray-500 border-b-2 border-transparent hover:text-[#007BFF] hover:border-[#007BFF] font-medium pb-1 transition-colors">School Awards</a>
        </div>

        <div id="student-awards" className="scroll-mt-24">
          {/* ── Key Pointers ── */}
          <div className="bg-[#f8fbff] border border-[#d1e6ff] rounded-xl p-6 md:p-8 mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Key Pointers for NTI Olympiads Awards</h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-700 space-y-2.5 max-w-4xl">
              <li>For students in classes 1-10, the awards include medals, certificates, and exciting cash prizes for top performers.</li>
              <li>Ranking is determined based on the total score. In case of a tie, the time taken to complete the test will be considered.</li>
              <li>Top 3 International rankers will receive special Gold, Silver, and Bronze medals respectively.</li>
              <li>Top 3 Zonal rankers will also receive Zonal Medals and Certificates of Excellence.</li>
              <li>Every participating student receives a digital participation certificate. These will be available online in the student dashboard.</li>
            </ul>
          </div>

          {/* ── Student Awards Table ── */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">NTI Olympiads Awards for Students</h2>
          <p className="text-[15px] text-gray-600 mb-6">Awards for Students Appearing Online</p>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 text-[14px] font-bold text-gray-900 w-16">Sl No.</th>
                    <th className="py-4 px-6 text-[14px] font-bold text-gray-900">Ranking Criteria</th>
                    <th className="py-4 px-6 text-[14px] font-bold text-gray-900 w-32">Grades</th>
                    <th className="py-4 px-6 text-[14px] font-bold text-gray-900">Awards</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] text-gray-600 divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900">1</td>
                    <td className="py-5 px-6">International rankers from 1st to 3rd positions globally</td>
                    <td className="py-5 px-6">Grades 1-10</td>
                    <td className="py-5 px-6 leading-relaxed">
                      <strong className="text-gray-900">International Rank 1:</strong> Gold Medal + Certificate of Excellence + Cash Prize<br />
                      <strong className="text-gray-900">International Rank 2:</strong> Silver Medal + Certificate of Excellence + Cash Prize<br />
                      <strong className="text-gray-900">International Rank 3:</strong> Bronze Medal + Certificate of Excellence + Cash Prize
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900">2</td>
                    <td className="py-5 px-6">Zonal rankers from 1st to 3rd positions in each zone</td>
                    <td className="py-5 px-6">Grades 1-10</td>
                    <td className="py-5 px-6 leading-relaxed">
                      <strong className="text-gray-900">Zonal Rank 1:</strong> Zonal Gold Medal + Certificate of Excellence<br />
                      <strong className="text-gray-900">Zonal Rank 2:</strong> Zonal Silver Medal + Certificate of Excellence<br />
                      <strong className="text-gray-900">Zonal Rank 3:</strong> Zonal Bronze Medal + Certificate of Excellence
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900">3</td>
                    <td className="py-5 px-6">Top 10% students</td>
                    <td className="py-5 px-6">Grades 1-10</td>
                    <td className="py-5 px-6">
                      <strong className="text-[#007BFF]">Medal of Distinction + Merit Certificate</strong>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900">4</td>
                    <td className="py-5 px-6">Top 25% students</td>
                    <td className="py-5 px-6">Grades 1-10</td>
                    <td className="py-5 px-6">
                      Commendation Certificate
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900">5</td>
                    <td className="py-5 px-6">All other participants</td>
                    <td className="py-5 px-6">Grades 1-10</td>
                    <td className="py-5 px-6">
                      Digital Participation Certificate
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="school-awards" className="scroll-mt-24 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">School Awards & Recognition</h2>

          <div className="bg-[#f8fbff] border border-[#d1e6ff] rounded-xl p-6 md:p-8 mb-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Excellence Driven by Participation
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px] md:text-base max-w-4xl mt-2">
                <strong className="text-gray-900 font-bold">NTI Olympiad proudly rewards schools that demonstrate exceptional commitment to academic excellence.</strong> 
                <br className="hidden md:block mt-1" />
                Our prestigious school awards are primarily determined by the <strong className="text-gray-900 font-bold">overall student participation rate</strong> and the cumulative performance of the students representing the institution. We believe that encouraging a large number of students to participate is the first step towards fostering a competitive and intellectually stimulating environment.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-6">Categories of School Excellence</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors flex flex-col shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Best Performing School</h4>
              <p className="text-[14px] text-gray-600 mb-6 flex-grow">
                Awarded to schools whose students achieve the highest cumulative average scores across all subjects and grades.
              </p>
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <p className="text-[14px] font-bold text-[#007BFF]">
                  Championship Trophy & Citation
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors flex flex-col shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Maximum Participation Award</h4>
              <p className="text-[14px] text-gray-600 mb-6 flex-grow">
                Recognizing schools that motivate the highest number of students to enroll and actively participate in the Olympiad.
              </p>
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <p className="text-[14px] font-bold text-[#007BFF]">
                  Shield of Honor
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors flex flex-col shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">District Topper School</h4>
              <p className="text-[14px] text-gray-600 mb-6 flex-grow">
                Honoring the top-ranked school in each district based on the number of zonal and international rank holders.
              </p>
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <p className="text-[14px] font-bold text-[#007BFF]">
                  Excellence Plaque
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Additional Recognition for Educators
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[15px] text-gray-900 font-bold mb-2">Principal's Leadership Award</p>
                <p className="text-[14px] text-gray-600">Presented to Principals of the top 20 participating schools globally for visionary leadership.</p>
              </div>
              <div>
                <p className="text-[15px] text-gray-900 font-bold mb-2">Best Coordinator Award</p>
                <p className="text-[14px] text-gray-600">Certificates of Appreciation and special mementos for school coordinators facilitating smooth exam execution.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
