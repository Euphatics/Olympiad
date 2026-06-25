import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Breadcrumb, PageContainer, SectionHeading } from '../../components/ui';
import { ROUTES } from '../../config/routes';
import { 
  BookOpen, Clock, ClipboardCheck, Trophy, FileText, Bookmark, 
  Download, CheckCircle2, XCircle, AlertCircle, ChevronDown, ChevronUp,
  BrainCircuit, Globe, PenTool, Calculator, FlaskConical, Monitor, 
  Landmark, ArrowRight, BookMarked
} from 'lucide-react';

const PREP_SECTIONS = [
  { slug: 'introduction', label: 'Introduction' },
  { slug: 'prep-steps', label: 'Preparation Steps' },
  { slug: 'subject-tips', label: 'Subject-wise Preparation' },
  { slug: 'class-tips', label: 'Class-wise Preparation' },
  { slug: 'prep-checklist', label: 'Before You Start' },
  { slug: 'exam-day', label: 'Exam Day Checklist' },
  { slug: 'common-mistakes', label: 'Common Mistakes' },
  { slug: 'resources', label: 'Preparation Resources' },
  { slug: 'faq', label: 'FAQs' },
];

const PREP_STEPS = [
  { title: 'Download the syllabus', icon: Download, desc: 'Obtain the official syllabus for your class. This ensures you only study the topics that will be tested.' },
  { title: 'Complete school concepts', icon: BookOpen, desc: 'Finish your regular school curriculum first. Olympiad questions are built upon these foundational topics.' },
  { title: 'Practice chapter-wise questions', icon: FileText, desc: 'Solve questions after completing each chapter. This helps identify areas where you need more practice.' },
  { title: 'Solve sample papers', icon: PenTool, desc: 'Familiarize yourself with the question formats. Sample papers provide a clear picture of the difficulty level.' },
  { title: 'Practice previous year papers', icon: Clock, desc: 'Attempt past papers under timed conditions. This is the most accurate way to simulate the real exam.' },
  { title: 'Revise weak topics', icon: BrainCircuit, desc: 'Identify the questions you consistently get wrong. Revisit the concepts behind those specific topics.' }
];

const SUBJECT_TIPS = [
  { title: 'Mathematics', icon: Calculator, color: 'text-blue-600', bg: 'bg-blue-50', tips: ['Practice daily calculations to improve speed.', 'Understand the logic behind formulas instead of memorizing them.', 'Solve reasoning and logic-based puzzles regularly.'] },
  { title: 'Science', icon: FlaskConical, color: 'text-emerald-600', bg: 'bg-emerald-50', tips: ['Focus on practical applications of scientific principles.', 'Learn to read and interpret diagrams and charts.', 'Understand the core concepts of physics, chemistry, and biology according to your grade.'] },
  { title: 'English', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50', tips: ['Read extensively to build a strong vocabulary.', 'Practice grammar rules through varied exercises.', 'Solve reading comprehension passages to improve inference skills.'] },
  { title: 'Information Technology', icon: Monitor, color: 'text-purple-600', bg: 'bg-purple-50', tips: ['Familiarize yourself with basic hardware and software terms.', 'Practice fundamental logical reasoning and flowchart concepts.', 'Stay updated with general knowledge about recent technological advancements.'] },
  { title: 'Finance', icon: Landmark, color: 'text-amber-600', bg: 'bg-amber-50', tips: ['Understand basic concepts of money, banking, and savings.', 'Solve word problems involving simple interest and percentages.', 'Read about general financial awareness suitable for your age group.'] }
];

const FAQS = [
  { q: "How should beginners prepare?", a: "Start by thoroughly understanding your school textbooks. Once the basics are clear, move on to chapter-wise Olympiad workbooks and eventually solve previous year papers." },
  { q: "Are previous year papers enough?", a: "Previous year papers are excellent for understanding the exam pattern and time management, but they should be attempted only after you have a strong grasp of the fundamental concepts from your syllabus." },
  { q: "Which books should I use?", a: "Begin with your prescribed school textbooks (NCERT or State Board). Supplement them with official NTI Olympiad workbooks and recommended reference guides for your specific class." },
  { q: "Is coaching necessary?", a: "Coaching is not mandatory. Consistent self-study, a clear understanding of concepts, and regular practice with sample papers are usually sufficient to perform well." },
  { q: "How many mock tests should I attempt?", a: "Aim to solve at least 3-5 full-length mock tests or previous year papers in a timed environment during the final month of your preparation." },
  { q: "When should I start preparing?", a: "Ideally, start your preparation 3-4 months before the exam date. This provides ample time to cover the syllabus, revise, and practice mock tests without feeling rushed." },
  { q: "How much time should I study daily?", a: "Consistency is more important than duration. Dedicate 30-45 minutes of focused study specifically for Olympiad preparation alongside your regular school work." },
  { q: "Is there negative marking?", a: "Please refer to the official exam pattern for your specific class and subject. Marking schemes can vary, so it is crucial to read the instructions on the question paper." },
  { q: "How do I improve my Olympiad score?", a: "Analyze your mistakes from practice tests. Focus your revision on the topics where you lose the most marks, and work on improving your calculation speed and accuracy." },
  { q: "Which topics should I revise first?", a: "Prioritize topics that carry a high weightage in the exam and those you find conceptually difficult. Ensure you are completely confident in the fundamentals." }
];

export default function PrepGuidePage() {
  const [activeSection, setActiveSection] = useState(PREP_SECTIONS[0].slug);
  const [openFaq, setOpenFaq] = useState(null);

  // Scrollspy observer for sidebar highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    };

    const sectionElements = PREP_SECTIONS.map(sec => 
      document.getElementById(sec.slug)
    ).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach(el => observer.observe(el));

    // Bottom-of-page detector
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection(PREP_SECTIONS[PREP_SECTIONS.length - 1].slug);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      sectionElements.forEach(el => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (slug) => {
    setActiveSection(slug);
    const element = document.getElementById(slug);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-slate-800 text-left">
      <Helmet>
        <title>Olympiad Preparation Guide – NTI Olympiad</title>
        <meta name="description" content="Practical preparation guide for NTI Olympiad. Access subject-wise tips, checklists, and resources for Mathematics, Science, English, IT, and Finance." />
        <link rel="canonical" href="https://ntiolympiad.in/prep-guide" />
      </Helmet>

      <div className="bg-white border-b border-gray-200 pt-6 pb-4">
        <PageContainer>
          <Breadcrumb items={[
            { label: 'Home', path: '/' },
            { label: 'Olympiad Preparation Guide' }
          ]} />
          <SectionHeading level="h1" className="font-bold text-gray-900 mt-6 mb-2">
            Olympiad Preparation Guide
          </SectionHeading>
          <p className="text-gray-600 max-w-3xl text-sm md:text-base">
            A practical resource hub for students, parents, and teachers preparing for the NTI Olympiad.
          </p>
        </PageContainer>
      </div>

      <PageContainer className="py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start relative">
          
          {/* Left Vertical Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 sticky top-24 bg-white border border-gray-200 rounded-lg shadow-sm z-10 p-2 hidden md:block">
            <div className="px-4 py-3 border-b border-gray-100 mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sections</span>
            </div>
            <ul className="space-y-1">
              {PREP_SECTIONS.map((sec) => (
                <li key={sec.slug}>
                  <button
                    onClick={() => scrollToSection(sec.slug)}
                    className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      activeSection === sec.slug
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 w-full space-y-16 min-w-0">
            
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-28 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Bookmark className="text-blue-600" size={24} />
                Introduction
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                <p>
                  Olympiad preparation requires a different approach than regular school exams. While school exams often test your memory of the curriculum, Olympiads test how well you can apply those concepts to unfamiliar and complex problems.
                </p>
                <p>
                  Knowing the exact syllabus is your most important first step. The NTI Olympiad questions are designed around specific class-level topics, so studying outside the syllabus wastes valuable time.
                </p>
                <p>
                  Consistent, daily practice is more effective than cramming before the exam. Regular problem-solving builds the speed and accuracy necessary to perform well under timed conditions.
                </p>
              </div>
            </section>

            {/* 2. Preparation Steps */}
            <section id="prep-steps" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ClipboardCheck className="text-blue-600" size={24} />
                Preparation Steps
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PREP_STEPS.map((step, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <step.icon size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Subject-wise Preparation Tips */}
            <section id="subject-tips" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-600" size={24} />
                Subject-wise Preparation Tips
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SUBJECT_TIPS.map((subject, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className={`${subject.bg} px-5 py-4 border-b border-gray-100 flex items-center gap-3`}>
                      <subject.icon className={subject.color} size={20} />
                      <h3 className="font-bold text-gray-900">{subject.title}</h3>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-3">
                        {subject.tips.map((tip, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Class-wise Preparation */}
            <section id="class-tips" className="scroll-mt-28 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Trophy className="text-blue-600" size={24} />
                Class-wise Preparation
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-3 bg-blue-50 px-3 py-1.5 rounded-md inline-block border border-blue-100">Classes 1–4</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Focus heavily on concept building.</li>
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Prioritize accuracy over speed.</li>
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Parental guidance is crucial for routines.</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-bold text-indigo-800 mb-3 bg-indigo-50 px-3 py-1.5 rounded-md inline-block border border-indigo-100">Classes 5–7</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Develop strong logical reasoning.</li>
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Ensure consistent chapter-wise practice.</li>
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Start strict time management.</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-bold text-purple-800 mb-3 bg-purple-50 px-3 py-1.5 rounded-md inline-block border border-purple-100">Classes 8–10</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mt-2">
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Take regular, full mock tests.</li>
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Dedicate time to analysing mistakes.</li>
                    <li className="flex items-center gap-2 text-gray-600 text-sm md:text-base"><CheckCircle2 size={16} className="text-green-500 flex-shrink-0" /> Practice higher-order thinking questions.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Before You Start & 6. Exam Day Checklist */}
            <div className="grid md:grid-cols-2 gap-6">
              <section id="prep-checklist" className="scroll-mt-28 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ClipboardCheck className="text-blue-600" size={22} />
                  Before You Start
                </h2>
                <ul className="space-y-3">
                  {['Download syllabus', 'Review exam pattern', 'Understand marking scheme', 'Collect study material', 'Prepare revision notes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center flex-shrink-0 text-blue-600 bg-gray-50">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="exam-day" className="scroll-mt-28 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="text-blue-600" size={22} />
                  Exam Day Checklist
                </h2>
                <ul className="space-y-3">
                  {['Admit card', 'Reporting time', 'Required stationery', 'Reading instructions', 'Time management', 'Reviewing answers before submission'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                      <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center flex-shrink-0 text-blue-600 bg-gray-50">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* 7. Common Preparation Mistakes */}
            <section id="common-mistakes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle className="text-blue-600" size={24} />
                Common Preparation Mistakes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-800 mb-4 text-lg">Good Practice</h3>
                  <ul className="space-y-3">
                    {['Understand concepts', 'Solve previous year papers', 'Review mistakes', 'Revise regularly', 'Practice under exam conditions'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-emerald-700 text-sm md:text-base">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
                  <h3 className="font-bold text-rose-800 mb-4 text-lg">Avoid</h3>
                  <ul className="space-y-3">
                    {['Memorizing answers', 'Ignoring weak topics', 'Skipping revision', 'Leaving questions unanswered (where applicable)', 'Spending too much time on one question'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-rose-700 text-sm md:text-base">
                        <XCircle size={20} className="flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Preparation Resources */}
            <section id="resources" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookMarked className="text-blue-600" size={24} />
                Preparation Resources
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Official Syllabus', desc: 'Detailed topics for all classes.', icon: FileText, action: 'View', link: ROUTES.syllabusPyqs },
                  { title: 'Sample Papers', desc: 'Practice with official formats.', icon: PenTool, action: 'Download', link: ROUTES.syllabusPyqs },
                  { title: 'Previous Year Papers', desc: 'Solve actual past exams.', icon: Clock, action: 'Explore', link: ROUTES.previousYear },
                  { title: 'Exam Pattern', desc: 'Understand the structure.', icon: ClipboardCheck, action: 'View', link: ROUTES.markingScheme },
                  { title: 'Marking Scheme', desc: 'See how points are awarded.', icon: Bookmark, action: 'View', link: ROUTES.markingScheme },
                  { title: 'FAQs', desc: 'Answers to common questions.', icon: AlertCircle, action: 'Explore', link: ROUTES.faq }
                ].map((res, i) => (
                  <Link key={i} to={res.link} className="bg-white border border-gray-200 p-5 rounded-xl hover:border-blue-500 hover:shadow-md transition-all group">
                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors mb-3">
                      <res.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{res.title}</h3>
                    <p className="text-xs text-gray-500 mb-4">{res.desc}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-blue-600">
                      {res.action} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* 9. Frequently Asked Questions */}
            <section id="faq" className="scroll-mt-28 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle className="text-blue-600" size={24} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                      {openFaq === index ? (
                        <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200 text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </PageContainer>
    </div>
  );
}
