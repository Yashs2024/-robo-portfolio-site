import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBackground from './components/TechBackground';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-950 text-gray-100 selection:bg-neon-400/30 cursor-none">
      <CustomCursor />
      <TechBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer className="relative z-10 bg-space-900 border-t border-space-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2 font-mono text-xs text-gray-600">SYSTEM.STATUS: ONLINE // ROS2 NODE ACTIVE</p>
        </div>
      </footer>
    </div>
  );
};

export default App;