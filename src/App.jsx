import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';
import SubjectsOffered from './components/SubjectsOffered';
import AboutNTI from './components/AboutNTI';
import AssociatedSchools from './components/AssociatedSchools';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'contact' | 'about'

  const handleSelect = (category, item) => {
    console.log('Selected:', category, '→', item);
    if (item === 'Contact Us') {
      setPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'About Us') {
      setPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <SubjectsOffered />
            <AboutNTI />
            <AssociatedSchools />
          </>
        )}
        {page === 'contact' && <ContactUs />}
        {page === 'about' && <AboutUs />}
        <Footer />
      </div>
    </div>
  );
}

export default App;

