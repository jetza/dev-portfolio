'use client';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { educatorExperience, experienceContent } from '@/data/experience';
export default function EducatorSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-2" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
          {experienceContent.educator.title}
        </h2>
        <p className="text-gray-400 mb-6">{experienceContent.educator.description}</p>
      </motion.div>
      <div className="space-y-6">
        {educatorExperience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={index < 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            whileInView={index >= 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            viewport={index >= 2 ? { once: true, margin: '0px 0px -200px 0px' } : undefined}
            transition={{ delay: index < 2 ? index * 0.3 : 0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="glass p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300 card-hover"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-lime-400">{exp.title}</h3>
                {exp.company && (
                  <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                )}
              </div>
              <GraduationCap className="w-8 h-8 text-lime-400 flex-shrink-0 ml-4" />
            </div>
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{exp.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-lime-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {exp.techStack && (
              <div className="mb-4 pb-4 border-b border-gray-700">
                <p className="text-xs font-semibold text-lime-400 mb-3">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.split(',').map((tech, techIndex) => {
                    const gradients = [
                      ['#a3e635', '#84cc16'],
                      ['#ffffff', '#d1d5db'],
                      ['#84cc16', '#65a30d'],
                      ['#d1d5db', '#9ca3af'],
                      ['#a3e635', '#ffffff'],
                      ['#65a30d', '#a3e635'],
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
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lime-400 hover:text-lime-300 text-sm transition-colors duration-200 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                <span className="underline underline-offset-2">Visit Website</span>
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
