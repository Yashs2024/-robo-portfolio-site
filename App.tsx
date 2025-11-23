import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBackground from './components/TechBackground';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 selection:bg-cyan-500/30">
      <TechBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <footer className="relative z-10 bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS & ROS2 Passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
