import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import ImportantInfo from '../components/ImportantInfo';
import SubjectsOffered from '../components/SubjectsOffered';
import AboutNTI from '../components/AboutNTI';

export default function HomePage({ onSelect }) {
  return (
    <>
      <Navbar onSelect={onSelect} />
      <div className="pt-16">
        <HomeHero />
        <ImportantInfo />
        <SubjectsOffered />
        <AboutNTI />
      </div>
    </>
  );
}
