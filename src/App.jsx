import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';
import SubjectsOffered from './components/SubjectsOffered';
import AboutNTI from './components/AboutNTI';
import AssociatedSchools from './components/AssociatedSchools';
import Footer from './components/Footer';

const ContactUs = lazy(() => import('./components/ContactUs'));
const FAQ = lazy(() => import('./components/FAQ'));
const MathematicsClass1 = lazy(() => import('./pages/MathematicsClass1'));
const MarkingScheme = lazy(() => import('./pages/MarkingScheme'));
const Gallery = lazy(() => import('./pages/Gallery'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const SyllabusPYQs = lazy(() => import('./pages/SyllabusPYQs'));
const SyllabusDetail = lazy(() => import('./pages/SyllabusDetail'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));
const SubjectRankersPage = lazy(() => import('./pages/SubjectRankersPage'));
const RankersListPage = lazy(() => import('./pages/RankersListPage'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-10 h-10 border-4 border-blue-200 border-t-[#00b0ff] rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'contact'
  const [selectedSyllabus, setSelectedSyllabus] = useState('');
  const [selectedRankerSubject, setSelectedRankerSubject] = useState('');

  // Dynamic page title & metadata updates for SEO
  useEffect(() => {
    let title = 'NTI Olympiad – Academic Excellence Starts Here';
    let description = "NTI Olympiad – India's premier academic competition platform for students from Nursery to Class 10.";

    switch (page) {
      case 'home':
        title = 'NTI Olympiad – Academic Excellence Starts Here';
        description = "NTI Olympiad – India's premier academic competition platform for students from Nursery to Class 10.";
        break;
      case 'contact':
        title = 'Contact Us – NTI Olympiad Support';
        description = 'Get in touch with NTI Olympiad support. We are here to answer questions about registrations, exam syllabus, dates, and results.';
        break;
      case 'faq':
        title = 'Frequently Asked Questions – NTI Olympiad';
        description = 'Find answers to common questions about NTI Olympiad registrations, marking schemes, syllabi, and student performance rankings.';
        break;
      case 'math_class_1':
        title = 'Mathematics Class 1 Olympiad Syllabus – NTI';
        description = 'Detailed syllabus and guidelines for the NTI Mathematics Class 1 Olympiad exam.';
        break;
      case 'marking_scheme':
        title = 'Marking Scheme and Exam Pattern – NTI Olympiad';
        description = 'Understand the marking criteria, distribution of marks, and total questions across classes for the NTI Olympiad.';
        break;
      case 'gallery':
        title = 'Gallery & Moments – NTI Olympiad';
        description = 'View photos and highlights from NTI Olympiad award ceremonies, events, and student achievements.';
        break;
      case 'syllabus_pyqs':
        title = 'Exam Syllabus and Past Year Papers – NTI Olympiad';
        description = 'Access the complete syllabus, sample questions, and past papers (PYQs) for all subjects and classes.';
        break;
      case 'syllabus_detail':
        title = `NTI ${selectedSyllabus} Syllabus – All Classes`;
        description = `Detailed syllabus breakdown, topics, and exam guides for NTI ${selectedSyllabus} from Class 1 to 10.`;
        break;
      case 'awards':
        title = 'Awards and Recognition – NTI Olympiad Winners';
        description = 'Discover student ranks, cash prizes, shields, gold/silver/bronze medals, and school certificates awarded by NTI Olympiad.';
        break;
      case 'subject_rankers':
        title = 'Subject Rankers – NTI Olympiad Hall of Fame';
        description = 'Browse top performing students by subject in the NTI Olympiad and explore national rankers.';
        break;
      case 'rankers_list':
        title = `${selectedRankerSubject} Rankers List – NTI Olympiad`;
        description = `View the complete list of national rankers and top scorers for NTI ${selectedRankerSubject} across classes.`;
        break;
      case 'login':
        title = 'Sign In – NTI Olympiad Portal';
        description = 'Access your NTI Olympiad student or school coordinator portal to view registrations and results.';
        break;
      case 'register':
        title = 'School Registration Portal – NTI Olympiad';
        description = 'Register your school or student profile for upcoming NTI Olympiad academic competitions.';
        break;
      default:
        break;
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [page, selectedSyllabus, selectedRankerSubject]);

  const handleSelect = (category, item) => {
    console.log('Selected:', category, '→', item);
    if (item === 'Contact Us') {
      setPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Marking Scheme') {
      setPage('marking_scheme');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Exam Syllabus and PYQs') {
      setPage('syllabus_pyqs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Awards & Recognition') {
      setPage('awards');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Subject Rankers') {
      setPage('subject_rankers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'FAQs' || category === 'FAQs') {
      setPage('faq');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (category === 'Mathematics Olympiad' && item === 'Class 1') {
      setPage('math_class_1');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Gallery') {
      setPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Login' || item === 'Sign In') {
      setPage('login');
    } else if (item === 'Register' || item === 'Sign Up') {
      setPage('register');
    }
  };

  const handleLogoClick = () => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSelect={handleSelect} onLogoClick={handleLogoClick} />

      {/* Spacer for fixed navbar */}
      <div className="pt-16">
        {page === 'home' && (
          <>
            <HomeHero />
            <ImportantInfo />
            <AboutNTI />
            <SubjectsOffered />
            <AssociatedSchools />
          </>
        )}
        <Suspense fallback={<PageLoader />}>
          {page === 'contact' && <ContactUs />}
          {page === 'faq' && <FAQ />}
          {page === 'math_class_1' && <MathematicsClass1 />}
          {page === 'marking_scheme' && <MarkingScheme />}
          {page === 'gallery' && <Gallery />}
          {page === 'syllabus_pyqs' && (
            <SyllabusPYQs 
              onSelectSyllabus={(subject) => {
                setSelectedSyllabus(subject);
                setPage('syllabus_detail');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          )}
          {page === 'syllabus_detail' && (
            <SyllabusDetail 
              subjectName={selectedSyllabus} 
              onBack={() => {
                setPage('syllabus_pyqs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              onMarkingSchemeClick={() => {
                setPage('marking_scheme');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
          {page === 'awards' && <AwardsPage />}
          {page === 'subject_rankers' && (
            <SubjectRankersPage 
              onSelectSubject={(subjectName) => {
                setSelectedRankerSubject(subjectName);
                setPage('rankers_list');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
          {page === 'rankers_list' && (
            <RankersListPage 
              subjectName={selectedRankerSubject}
              onBack={() => {
                setPage('subject_rankers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
          {page === 'login' && <LoginPage onSignUp={() => { setPage('register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
          {page === 'register' && <RegisterPage />}
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
