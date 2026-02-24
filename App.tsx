import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBackground from './components/TechBackground';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import PathfindingVisualizer from './components/PathfindingVisualizer';
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
        
        {/* Robotics Lab / Playground Section */}
        <section className="py-20 bg-slate-900/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-tech text-white mb-4">
                Robotics <span className="text-cyan-400">Lab</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Interactive demonstrations of algorithms and control systems.
              </p>
            </div>
            <PathfindingVisualizer />
          </div>
        </section>

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