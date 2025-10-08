'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences, experienceContent } from '@/data/experience';
import { TECH_STACK_GRADIENTS } from '@/constants/gradients';
export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-6" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
          {experienceContent.title}
        </h2>
      </motion.div>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={index < 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            whileInView={index >= 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            viewport={index >= 2 ? { once: true, margin: '0px 0px -200px 0px' } : undefined}
            transition={{ delay: index < 2 ? index * 0.3 : 0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.01, y: -3 }}
            className="glass p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Cyber corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 relative z-10">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-lime-400 group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]">{exp.title}</h3>
                {exp.project && (
                  <p className="text-md text-gray-400 mt-1 italic">{exp.project}</p>
                )}
                {exp.company && (
                  <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                )}
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <div className="flex items-center text-magenta-400 text-sm mb-1 font-mono">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center text-cyan-400 text-sm font-mono">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-2 mb-4 relative z-10">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-2 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {exp.techStack && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs font-semibold text-lime-400 mb-3">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.split(',').map((tech, techIndex) => {
                    const [color1, color2] = TECH_STACK_GRADIENTS[techIndex % TECH_STACK_GRADIENTS.length];
                    return (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.7 + techIndex * 0.2,
                          duration: 0.5,
                          ease: 'easeOut'
                        }}
                        whileHover={{ 
                          scale: 1.08, 
                          y: -3,
                          transition: { duration: 0.2, ease: 'easeOut' }
                        }}
                        className="inline-block p-[1px] rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-default"
                        style={{
                          background: `linear-gradient(to right, ${color1}, ${color2})`,
                        }}
                      >
                        <span className="block px-3 py-1 bg-gray-900 rounded-lg text-white text-xs font-medium">
                          {tech.trim()}
                        </span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
