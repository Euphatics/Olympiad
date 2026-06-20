import HomeHero from './components/HomeHero';
import ImportantInfo from './components/ImportantInfo';
import AboutNTI from './components/AboutNTI';
import SubjectsOffered from './components/SubjectsOffered';
import AssociatedSchools from './components/AssociatedSchools';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ImportantInfo />
      <AboutNTI />
      <SubjectsOffered />
      <AssociatedSchools />
    </>
  );
}
