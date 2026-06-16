import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';
import SubjectsOffered from './components/SubjectsOffered';
import AboutNTI from './components/AboutNTI';
import AssociatedSchools from './components/AssociatedSchools';
import Footer from './components/Footer';

function App() {
  const handleSelect = (category, item) => {
    console.log('Selected:', category, '→', item);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSelect={handleSelect} />

      {/* Spacer for fixed navbar */}
      <div className="pt-16">
        <HomeHero />
        <ImportantInfo />
        <SubjectsOffered />
        <AboutNTI />
        <AssociatedSchools />
        <Footer />
      </div>
    </div>
  );
}

export default App;
