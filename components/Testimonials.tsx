import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mr. Akshay Joshi",
    role: "CEO, Botmakers Pvt. Ltd.",
    content: "Yash successfully transitioned from a student to an engineer capable of designing and deploying intelligent robotic systems. His work on the Sesame Quadruped demonstrates a rare grasp of both mechanical systems and firmware.",
    rating: 5
  },
  {
    id: 2,
    name: "Mr. Rahul Ishi",
    role: "COO, Botmakers Pvt. Ltd.",
    content: "His execution of high-stakes events at IIT Bombay Techfest was impressive. Yash combines technical expertise in embedded systems with excellent communication skills, making him a valuable asset for any R&D team.",
    rating: 5
  },
  {
    id: 3,
    name: "Workshop Student",
    role: "PCCOE Akurdi",
    content: "The Robotics Kinematics workshop was a game changer. Yash made complex concepts like Inverse Kinematics and DOF easy to understand through practical simulations and hands-on demos.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-tech text-white mb-4"
          >
            Endorsements <span className="text-cyan-400">& Feedback</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            Words from mentors and students I've worked with.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:border-cyan-500/30 transition-all shadow-lg"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-cyan-900/40" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="mt-auto">
                <h4 className="text-white font-bold font-tech">{testimonial.name}</h4>
                <p className="text-cyan-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;