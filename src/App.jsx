import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Expertise from "./components/Expertise.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Metrics from "./components/Metrics.jsx";
import ApiTesting from "./components/ApiTesting.jsx";
import DatabaseTesting from "./components/DatabaseTesting.jsx";
import PerformanceTesting from "./components/PerformanceTesting.jsx";
import AIAutomation from "./components/AIAutomation.jsx";
import Defects from "./components/Defects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onNavigate={closeSidebar} />
      <main className="lg:ml-64 min-h-screen">
        <Header onToggleMenu={() => setSidebarOpen((open) => !open)} />
        <div className="pt-24 px-margin-mobile lg:px-margin-desktop pb-16 space-y-16 max-w-container-max mx-auto">
          <Hero />
          <Expertise />
          <Skills />
          <Experience />
          <Projects />
          <ApiTesting />
          <DatabaseTesting />
          <PerformanceTesting />
          <AIAutomation />
          <Metrics />
          <Defects />
          <Contact />
          <Footer />
        </div>
      </main>

      <a
        href="#contact"
        aria-label="Open console"
        className="fixed bottom-8 right-8 w-16 h-16 bg-primary-container text-on-primary-fixed-variant rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
      >
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        <span className="absolute right-20 bg-primary-container px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Open Console
        </span>
      </a>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={closeSidebar} />}
    </>
  );
}
