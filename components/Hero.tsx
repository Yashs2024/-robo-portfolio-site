import React from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open to Internships | Graduating 2027
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-tech tracking-tight text-white mb-6"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-medium text-cyan-400 mb-4"
        >
          {PERSONAL_INFO.title}
        </motion.h2>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-gray-400 mb-8"
        >
            <MapPin className="w-4 h-4" />
            <span>{PERSONAL_INFO.location}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-base md:text-lg text-gray-400 mb-10 leading-relaxed"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-cyan-400 hover:bg-cyan-300 md:text-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href={PERSONAL_INFO.resumeLink}
            className="inline-flex items-center justify-center px-8 py-3 border border-cyan-500/50 text-base font-medium rounded-md text-cyan-400 bg-transparent hover:bg-cyan-900/20 md:text-lg transition-all backdrop-blur-sm"
          >
            Download Resume
            <Download className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
