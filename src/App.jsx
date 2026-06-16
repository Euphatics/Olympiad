import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';
import SubjectsOffered from './components/SubjectsOffered';
import AboutNTI from './components/AboutNTI';
import AssociatedSchools from './components/AssociatedSchools';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'contact' | 'faq'

  const navigateTo = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelect = (category, item) => {
    console.log('Selected:', category, '→', item);
    if (item === 'Contact Us') navigateTo('contact');
    if (item === 'FAQ' || item === 'FAQs') navigateTo('faq');
  };

  const handleLogoClick = () => {
    navigateTo('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSelect={handleSelect} onLogoClick={handleLogoClick} />

      {/* Spacer for fixed navbar */}
      <div className="pt-16">
        {page === 'contact' && <ContactUs />}
        {page === 'faq' && <FAQ />}
        {page === 'home' && (
          <>
            <HomeHero />
            <ImportantInfo />
            <SubjectsOffered />
            <AboutNTI />
            <AssociatedSchools />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
