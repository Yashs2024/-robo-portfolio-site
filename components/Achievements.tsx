import React from 'react';
import { Trophy, Code, GraduationCap, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';
import { motion } from 'framer-motion';

const iconMap = {
  'Trophy': Trophy,
  'Code': Code,
  'GraduationCap': GraduationCap,
  'Award': Award
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-tech text-white mb-4">
            Achievements <span className="text-cyan-400">& Recognition</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Highlights of my competitive and academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Award;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-900/20 transition-colors border border-slate-700 group-hover:border-cyan-500/30">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
