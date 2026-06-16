import React from 'react';

export default function MathematicsClass1() {
  const navLinks = [
    { label: "Olympiad Details", id: "olympiad-details" },
    { label: "Eligibility", id: "eligibility" },
    { label: "Benefits", id: "benefits" },
    { label: "How to apply", id: "how-to-apply" },
    { label: "Syllabus", id: "syllabus" },
    { label: "Exam Dates and Fees", id: "exam-dates-and-fees" },
    { label: "How to Prepare", id: "how-to-prepare" },
    { label: "Cut-off & Answer Keys", id: "cut-off-and-answer-keys" },
    { label: "Results", id: "results" },
    { label: "Awards and Recognition", id: "awards-and-recognition" },
    { label: "Frequently Asked Questions", id: "frequently-asked-questions" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ── Breadcrumb Bar ── */}
      <div className="w-full bg-[#f0f8ff] border-b border-blue-100 py-3 px-6 sm:px-10 lg:px-16">
        <div className="text-[13px] sm:text-[14px] text-gray-500">
          <a href="#" className="text-[#007BFF] hover:underline">About Maths Olympiad</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Maths Olympiad Class 1</span>
        </div>
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-16 py-8">

        {/* ── Page Header ── */}
        <div className="w-full border-b border-gray-300 pb-4 mb-8">
          <h1 className="text-2xl lg:text-[28px] font-normal text-[#333]">Maths Olympiad for Class 1</h1>
        </div>

        {/* ── Layout Wrapper: Sidebar + Content ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-4">

          {/* Left Sidebar (TOC) */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <div className="border border-gray-300 rounded-sm p-5">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block text-[14px] py-2.5 text-[#007BFF] hover:text-[#0056b3] hover:underline transition-colors ${
                      index !== navLinks.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 space-y-8">

            {/* About the Olympiad */}
            <section id="olympiad-details">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">About the Olympiad</h3>
              <div className="space-y-4 text-[14px] text-[#333] leading-[1.7]">
                <p>
                  The NTI Class 1 Maths Olympiad is designed to help young learners build a strong foundation in mathematics while developing logical reasoning, critical thinking, and problem-solving skills. Based on the Class 1 curriculum, the Olympiad encourages students to apply mathematical concepts in different situations rather than simply memorizing them.
                </p>
                <p>
                  The examination includes carefully designed questions that assess how well students understand key concepts and their ability to use these concepts to solve problems. Through participation, students gain exposure to national-level academic competition and have the opportunity to benchmark their performance against peers from different schools.
                </p>
                <p>
                  NTI follows a structured examination and evaluation process that provides detailed performance insights. Students, parents, and teachers receive a clear understanding of a student's strengths and areas for improvement. This approach helps make mathematics more engaging while supporting continuous academic growth.
                </p>
              </div>
            </section>

            {/* Benefits of Participating */}
            <section id="benefits">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-2">Benefits of Participating</h3>
              <div className="text-[14px] text-[#333] leading-[1.8]">
                <p>Strengthens understanding of Class 1 mathematics concepts</p>
                <p>Develops logical thinking and problem-solving skills</p>
                <p>Encourages analytical and critical thinking abilities</p>
                <p>Builds confidence through academic achievement</p>
                <p>Provides exposure to national-level academic competition</p>
                <p>Offers certificates, medals, and recognition for outstanding performance</p>
                <p>Creates a strong foundation for future Olympiads and competitive examinations</p>
              </div>
            </section>

            {/* Why Participate */}
            <section>
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">Why Participate in the NTI Class 1 Maths Olympiad?</h3>
              <div className="space-y-4 text-[14px] text-[#333] leading-[1.7]">
                <p>
                  The Olympiad provides an excellent platform for students to challenge themselves beyond routine classroom learning. It encourages curiosity, independent thinking, and confidence while helping students develop essential mathematical skills at an early age.
                </p>
                <p>
                  Whether a student already enjoys mathematics or needs additional encouragement to explore the subject, the NTI Class 1 Maths Olympiad offers a rewarding learning experience that supports both academic growth and personal development.
                </p>
              </div>
            </section>

            {/* Key Highlights */}
            <section>
              <h3 className="text-[32px] font-bold text-[#28589c] mb-2">Key Highlights</h3>
              <div className="text-[14px] text-[#333] leading-[1.8]">
                <p>Based on the Class 1 school curriculum</p>
                <p>Focus on conceptual understanding and application-based learning</p>
                <p>National-level participation opportunity</p>
                <p>Detailed performance analysis and ranking</p>
                <p>Certificates and awards for deserving participants</p>
                <p>Student-friendly examination pattern</p>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section id="eligibility">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-2">Eligibility Criteria for Mathematics Olympiad</h3>
              <div className="text-[14px] text-[#333] leading-[1.8] pl-4">
                <p>a. Students interested in taking the Maths Olympiad test for class 1 can do the registration either through their schools or on their own.</p>
                <p>b. Candidates from all around the world are welcome to apply for the exam.</p>
                <p>c. The test for class Nursery is performed in 1 level.</p>
                <p>d. Only class 1 students can apply to it.</p>
              </div>
            </section>

            {/* How to Apply */}
            <section id="how-to-apply">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">How to Apply</h3>
              <div className="space-y-4 text-[14px] text-[#333] leading-[1.7]">
                <p>
                  Schools can register their students by filling out the school registration form available on the NTI Olympiad website. Individual students can also register directly through the website with the help of their parents or guardians.
                </p>
                <p>
                  After successful registration, students will receive their admit cards and examination details via email. Schools will be provided with bulk registration options and dedicated support.
                </p>
              </div>
            </section>

            {/* Syllabus */}
            <section id="syllabus">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-2">Syllabus</h3>
              <div className="text-[14px] text-[#333] leading-[1.8]">
                <p>Number Sense and Counting (1 to 100)</p>
                <p>Addition and Subtraction (Basic)</p>
                <p>Shapes and Patterns</p>
                <p>Time and Money Basics</p>
                <p>Measurement and Data Handling</p>
                <p>Logical Reasoning</p>
              </div>
            </section>

            {/* Exam Dates and Fees */}
            <section id="exam-dates-and-fees">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">Exam Dates and Fees</h3>
              <div className="text-[14px] text-[#333] leading-[1.7]">
                <p>Exam dates and fee structure will be updated soon. Please check back regularly or register to receive notifications.</p>
              </div>
            </section>

            {/* How to Prepare */}
            <section id="how-to-prepare">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-2">How to Prepare</h3>
              <div className="text-[14px] text-[#333] leading-[1.8]">
                <p>Revise Class 1 mathematics concepts thoroughly</p>
                <p>Practice previous year question papers</p>
                <p>Use NTI preparation books and sample papers</p>
                <p>Focus on understanding concepts rather than rote learning</p>
                <p>Solve puzzles and logical reasoning exercises regularly</p>
              </div>
            </section>

            {/* Cut-off & Answer Keys */}
            <section id="cut-off-and-answer-keys">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">Cut-off & Answer Keys</h3>
              <div className="text-[14px] text-[#333] leading-[1.7]">
                <p>Cut-off marks and answer keys will be published after the examination. Students can check their performance against the official answer keys on the NTI website.</p>
              </div>
            </section>

            {/* Results */}
            <section id="results">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">Results</h3>
              <div className="text-[14px] text-[#333] leading-[1.7]">
                <p>Results will be declared within 4-6 weeks after the examination. Students and schools can access detailed performance reports through the NTI portal.</p>
              </div>
            </section>

            {/* Awards and Recognition */}
            <section id="awards-and-recognition">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-2">Awards and Recognition</h3>
              <div className="text-[14px] text-[#333] leading-[1.8]">
                <p>Gold, Silver, and Bronze medals for top performers</p>
                <p>Merit certificates for qualifying students</p>
                <p>Participation certificates for all registered students</p>
                <p>Special scholarships for outstanding achievers</p>
                <p>School-level recognition and trophies</p>
              </div>
            </section>

            {/* Frequently Asked Questions */}
            <section id="frequently-asked-questions">
              <h3 className="text-[32px] font-bold text-[#28589c] mb-3">Frequently Asked Questions</h3>
              <div className="space-y-4 text-[14px] text-[#333] leading-[1.7]">
                <div>
                  <p className="font-bold text-black">1. Who can participate in the NTI Class 1 Maths Olympiad?</p>
                  <p className="mt-1">The NTI Class 1 Mathematics Olympiad is open to all students currently enrolled in Grade 1 across various recognized educational boards (CBSE, ICSE, State Boards, etc.). We encourage young learners who have an interest in mathematics to participate, as it provides an excellent early platform to build logical thinking and numerical skills. There are no minimum marks required in regular school exams to be eligible for this Olympiad.</p>
                </div>
                <div>
                  <p className="font-bold text-black">2. Is there any negative marking?</p>
                  <p className="mt-1">No, there is absolutely no negative marking in the NTI Class 1 Mathematics Olympiad. We believe that young students should be encouraged to attempt all questions without the fear of losing marks for incorrect answers. This approach builds their confidence and encourages them to apply their reasoning skills freely across all sections of the examination.</p>
                </div>
                <div>
                  <p className="font-bold text-black">3. Can students register individually?</p>
                  <p className="mt-1">Yes, students have the flexibility to register individually for the examination. While we highly encourage schools to participate and register their students in bulk, parents or guardians can directly enroll their children if their respective schools are not participating. Individual registration can be easily completed by reaching out to the school coordinator or following our independent registration guidelines.</p>
                </div>
                <div>
                  <p className="font-bold text-black">4. What is the medium of the examination?</p>
                  <p className="mt-1">The NTI Class 1 Mathematics Olympiad is conducted entirely in the English language. All question papers, instructions, and communication related to the examination will be provided in English. Students are expected to have a basic understanding of English to comprehend the mathematical word problems and logical reasoning questions presented in the test.</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
