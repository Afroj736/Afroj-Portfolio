import { useCallback, useState } from "react";
import Loader from "./components/Loader.jsx";
import DotField from "./components/DotField.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Navbar from "./components/Navbar.jsx";
import CommandPalette from "./components/CommandPalette.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const onLoaded = useCallback(() => setLoaded(true), []);
  const togglePalette = useCallback(() => setPaletteOpen((open) => !open), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  return (
    <>
      {!loaded && <Loader onDone={onLoaded} />}
      <CustomCursor />
      <DotField />
      <Navbar ready={loaded} onOpenPalette={togglePalette} />
      <CommandPalette open={paletteOpen} onClose={closePalette} onToggle={togglePalette} />

      <main className="flex-1 relative z-10 overflow-x-hidden w-full max-w-full">
        <Hero ready={loaded} />
        <SectionDivider target="about" />
        <About />
        <SectionDivider target="skills" />
        <Skills />
        <SectionDivider target="projects" />
        <Projects />
        <SectionDivider target="journey" />
        <Journey />
        <SectionDivider target="contact" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
