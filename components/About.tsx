import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import { User, Target, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Avatar / Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-4 flex justify-center md:justify-start"
          >
            <div className="relative w-64 md:w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.15)] group">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-tech">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="prose prose-lg prose-invert text-gray-300 mb-8">
              <p className="leading-relaxed">
                {PERSONAL_INFO.about}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 transition-colors hover:border-cyan-500/30"
                >
                    <div className="flex items-center gap-3 mb-2 text-cyan-400">
                        <Target className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Career Goal</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        To contribute to the next generation of autonomous industrial robotics, focusing on safety, efficiency, and human-robot collaboration.
                    </p>
                </motion.div>
                
                <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 transition-colors hover:border-cyan-500/30"
                >
                    <div className="flex items-center gap-3 mb-2 text-cyan-400">
                        <Cpu className="w-5 h-5" />
                        <h3 className="font-semibold text-white">Core Focus</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                        Bridging the gap between AI algorithms and real-time hardware control using ROS2 and embedded systems.
                    </p>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;