'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, X, Calendar, Code, CheckCircle, Gamepad2, Smartphone, Bot, MessageSquare, Car, Lightbulb, Users, Presentation, BarChart3, Settings } from 'lucide-react';
import { useState } from 'react';
import Portal from '@/components/Portal';
import { Project } from '@/types/project';
import { projects } from '@/data/projects';

// Map icon names to Lucide components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Gamepad2,
  Smartphone,
  Bot,
  MessageSquare,
  Car,
  Lightbulb,
  Users,
  Presentation,
  BarChart3,
  Settings,
};

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Bento grid layout - different sizes for visual interest
  const getGridClasses = (index: number) => {
    const patterns = [
      'md:col-span-2', // Wide
      'md:col-span-1', // Normal
      'md:col-span-1', // Normal
      'md:col-span-2 md:row-span-2', // Large featured
      'md:col-span-1', // Normal
      'md:col-span-1', // Normal
    ];
    return patterns[index % patterns.length];
  };

  return (
    <>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-2" 
            style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
            Projects
          </h2>
          <p className="text-gray-400 mb-6">
            Here are some of the professional projects I have worked on throughout my career. Each project showcases different technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={index < 4 ? { opacity: 1, scale: 1 } : undefined}
              whileInView={index >= 4 ? { opacity: 1, scale: 1 } : undefined}
              viewport={index >= 4 ? { once: true, margin: '0px 0px -200px 0px' } : undefined}
              transition={{ delay: index < 4 ? index * 0.1 : 0, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className={`glass-lime rounded-2xl overflow-hidden cursor-pointer group ${getGridClasses(index)}`}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-lime-400/20 p-3 rounded-xl border border-lime-400/30">
                    {(() => {
                      const IconComponent = iconMap[project.icon];
                      return IconComponent ? <IconComponent className="w-8 h-8 text-lime-400" /> : null;
                    })()}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center text-gray-400 text-sm">
                      <Star className="w-4 h-4 mr-1 fill-lime-400 text-lime-400" />
                      {project.stars}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-lime-400 mb-2 group-hover:text-lime-300 transition-colors">
                  {project.title}
                </h3>
                
                {project.duration && (
                  <p className="text-gray-400 text-xs mb-2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </p>
                )}
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-lime-400/10 text-lime-400 rounded-lg text-xs border border-lime-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0, y: hoveredProject === index ? 0 : 10 }}
                  className="flex gap-3 pt-4 border-t border-gray-700 mt-auto"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-sm text-gray-300 hover:text-lime-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-lime-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal - Portal to body for true full screen */}
      <AnimatePresence>
        {selectedProject && (
          <Portal>
            {/* Full Screen Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999]"
            />
            
            {/* Modal Container - Centered */}
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-lime-400/50 shadow-2xl pointer-events-auto"
              >
                {/* Modal Header */}
                <div className="sticky top-0 glass-lime backdrop-blur-md p-6 border-b border-lime-400/30">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-lime-400/20 p-4 rounded-xl border border-lime-400/40">
                        {(() => {
                          const IconComponent = iconMap[selectedProject.icon];
                          return IconComponent ? <IconComponent className="w-12 h-12 text-lime-400" /> : null;
                        })()}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-lime-400">
                          {selectedProject.title}
                        </h2>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center text-gray-300 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {selectedProject.duration}
                          </span>
                          <span className="flex items-center text-lime-400 text-sm">
                            <Star className="w-4 h-4 mr-1 fill-lime-400" />
                            {selectedProject.stars} stars
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-lime-400 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      About the Project
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-lime-400 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-lime-400/20 text-lime-300 rounded-lg text-sm border border-lime-400/50 hover:bg-lime-400/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {selectedProject.features && (
                    <div>
                      <h3 className="text-xl font-semibold text-lime-400 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <span className="text-lime-400 mr-2 mt-1">▹</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </a>
                    {selectedProject.demo !== '#' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 glass border-2 border-lime-400/50 text-lime-400 font-bold rounded-full hover:bg-lime-400/10 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
