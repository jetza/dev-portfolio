'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences, experienceContent } from '@/data/experience';
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
            className="glass p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300 card-hover"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-lime-400">{exp.title}</h3>
                {exp.project && (
                  <p className="text-md text-gray-400 mt-1 italic">{exp.project}</p>
                )}
                {exp.company && (
                  <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                )}
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <div className="flex items-center text-gray-400 text-sm mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
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
                    const gradients = [
                      ['#a3e635', '#84cc16'], // lime to lime-500
                      ['#ffffff', '#d1d5db'], // white to gray-300
                      ['#84cc16', '#65a30d'], // lime-500 to lime-600
                      ['#d1d5db', '#9ca3af'], // gray-300 to gray-400
                      ['#a3e635', '#ffffff'], // lime to white
                      ['#65a30d', '#a3e635'], // lime-600 to lime
                    ];
                    const [color1, color2] = gradients[techIndex % gradients.length];
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
