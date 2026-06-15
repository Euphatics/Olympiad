import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';

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
      </div>
    </div>
  );
}

export default App;
