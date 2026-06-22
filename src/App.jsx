import { lazy } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ROUTES } from './config/routes';
import { getSubjectByName } from './config/subjects';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const ContactUs = lazy(() => import('./pages/Contact/ContactUsPage'));
const FAQ = lazy(() => import('./pages/FAQ/FAQPage'));
const MarkingScheme = lazy(() => import('./pages/MarkingScheme/MarkingScheme'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));
const SyllabusPYQs = lazy(() => import('./pages/Syllabus/SyllabusPYQs'));
const SyllabusDetail = lazy(() => import('./pages/Syllabus/SyllabusDetail'));
const SyllabusClassPage = lazy(() => import('./pages/Syllabus/SyllabusClassPage'));
const AwardsPage = lazy(() => import('./pages/Awards/AwardsPage'));
const SubjectRankersPage = lazy(() => import('./pages/Rankers/SubjectRankersPage'));
const RankersListPage = lazy(() => import('./pages/Rankers/RankersListPage'));
const PreviousYearPage = lazy(() => import('./pages/PreviousYear/PreviousYearPage'));
const SubjectPreviousYearPage = lazy(() => import('./pages/PreviousYear/SubjectPreviousYearPage'));
const PreviousYearDetailPage = lazy(() => import('./pages/PreviousYear/PreviousYearDetailPage'));
const SchoolPanelPage = lazy(() => import('./pages/SchoolPanel/SchoolPanelPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  const navigate = useNavigate();

  const handleSelect = (category, item) => {
    console.log('Selected:', category, '→', item);

    // Check if this is a subject + class selection from Olympiad menu
    const subject = getSubjectByName(category);
    if (subject && item.startsWith('Class ')) {
      const classSlug = item.toLowerCase().replace(/\s+/g, '-');
      navigate(ROUTES.syllabusClass(subject.slug, classSlug));
      return;
    }

    // Static page navigation
    if (item === 'Contact Us') {
      navigate(ROUTES.contact);
    } else if (item === 'Marking Scheme') {
      navigate(ROUTES.markingScheme);
    } else if (item === 'Exam Syllabus and PYQs') {
      navigate(ROUTES.syllabusPyqs);
    } else if (item === 'PYQs') {
      navigate(ROUTES.previousYear);
    } else if (item === 'Awards & Recognition') {
      navigate(ROUTES.awards);
    } else if (item === 'Subject Rankers') {
      navigate(ROUTES.subjectRankers);
    } else if (item === 'FAQs' || category === 'FAQs') {
      navigate(ROUTES.faq);
    } else if (item === 'Gallery') {
      navigate(ROUTES.gallery);
    } else if (item === 'Login' || item === 'Sign In') {
      navigate(ROUTES.login);
    } else if (item === 'Register' || item === 'Sign Up') {
      navigate(ROUTES.register);
    }
  };

  return (
    <Routes>
      <Route element={<MainLayout onSelect={handleSelect} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/marking-scheme" element={<MarkingScheme />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/syllabus-pyqs" element={
          <SyllabusPYQs 
            onSelectSyllabus={(subjectSlug) => {
              navigate(ROUTES.syllabusDetail(subjectSlug));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        } />
        <Route path="/syllabus/:subjectSlug" element={
          <SyllabusDetail 
            onBack={() => {
              navigate(ROUTES.syllabusPyqs);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            onMarkingSchemeClick={() => {
              navigate(ROUTES.markingScheme);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        } />
        <Route path="/syllabus/:subjectSlug/:classSlug" element={<SyllabusClassPage />} />
        <Route path="/previous-year" element={<PreviousYearPage />} />
        <Route path="/previous-year/:subjectSlug" element={<SubjectPreviousYearPage />} />
        <Route path="/previous-year/:subjectSlug/:classSlug/:year" element={<PreviousYearDetailPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/school-panel" element={<SchoolPanelPage />} />
        <Route path="/subject-rankers" element={
          <SubjectRankersPage 
            onSelectSubject={(subjectName) => {
              navigate(ROUTES.rankersList(subjectName));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        } />
        <Route path="/rankers-list/:subjectName" element={
          <RankersListPage 
            onBack={() => {
              navigate(ROUTES.subjectRankers);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        } />
        <Route path="/login" element={
          <LoginPage 
            onSignUp={() => { 
              navigate(ROUTES.register); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }} 
          />
        } />
        <Route path="/register" element={<RegisterPage />} />

        {/* Legacy redirect: /math-class-1 → /syllabus/mathematics/class-1 */}
        <Route
          path="/math-class-1"
          element={<Navigate to="/syllabus/mathematics/class-1" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
