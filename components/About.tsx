import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import { User, Target, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          {/* Avatar / Image Area */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-full md:h-auto aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-8">
            <h2 className="text-3xl font-bold text-white mb-6 font-tech">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="prose prose-lg prose-invert text-gray-300 mb-8">
              <p className="leading-relaxed">
                {PERSONAL_INFO.about}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-2 text-cyan-400">
                        <Target className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Career Goal</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        To contribute to the next generation of autonomous industrial robotics, focusing on safety, efficiency, and human-robot collaboration.
                    </p>
                </div>
                
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-2 text-cyan-400">
                        <Cpu className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Core Focus</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        Bridging the gap between AI algorithms and real-time hardware control using ROS2 and embedded systems.
                    </p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;