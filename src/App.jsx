import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';
import SubjectsOffered from './components/SubjectsOffered';
import AboutNTI from './components/AboutNTI';
import AssociatedSchools from './components/AssociatedSchools';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import FAQPage from './pages/FAQPage';
import MathematicsClass1 from './pages/MathematicsClass1';
import MarkingScheme from './pages/MarkingScheme';
import Gallery from './pages/Gallery';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import SyllabusPYQs from './pages/SyllabusPYQs';
import SyllabusDetail from './pages/SyllabusDetail';
import AwardsPage from './pages/AwardsPage';
import SubjectRankersPage from './pages/SubjectRankersPage';
import RankersListPage from './pages/RankersListPage';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'contact'
  const [selectedSyllabus, setSelectedSyllabus] = useState('');
  const [selectedRankerSubject, setSelectedRankerSubject] = useState('');

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
    } else { }
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
        {page === 'contact' && <ContactUs />}
        {page === 'faq' && <FAQPage />}
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
