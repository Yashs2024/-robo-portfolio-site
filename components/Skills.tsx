import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILL_CATEGORIES, SKILL_CHART_DATA } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-850/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-tech text-white mb-4">
            Technical <span className="text-cyan-400">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the tools, languages, and frameworks I utilize to build autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Categories List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors"
                    >
                        <h3 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-cyan-900/50 pb-2">
                            {category.title}
                        </h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill) => (
                                <li key={skill} className="flex items-center text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Radar Chart */}
            <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true }}
                 className="h-[400px] w-full bg-slate-900/50 rounded-xl border border-slate-800 flex items-center justify-center relative"
            >
                <div className="absolute top-4 right-4 text-xs text-gray-500">
                    Proficiency Distribution
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_CHART_DATA}>
                        <PolarGrid gridType="polygon" stroke="#334155" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Proficiency"
                            dataKey="A"
                            stroke="#22d3ee"
                            strokeWidth={2}
                            fill="#22d3ee"
                            fillOpacity={0.4}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f1f5f9' }}
                            itemStyle={{ color: '#22d3ee' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;