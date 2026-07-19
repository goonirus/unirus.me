import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterStats from './components/CharacterStats';
import BadgeWall from './components/BadgeWall';
import MoveSet from './components/MoveSet';
import ProjectDex from './components/ProjectDex';
import StarterProject from './components/StarterProject';
import ResearchField from './components/ResearchField';
import FieldReports from './components/FieldReports';
import FavoriteBiomes from './components/FavoriteBiomes';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CharacterStats />
        <BadgeWall />
        <MoveSet />
        <ProjectDex />
        <StarterProject />
        <ResearchField />
        <FieldReports />
        <FavoriteBiomes />
        <Contact />
      </main>
    </>
  );
}
