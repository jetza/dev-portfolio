'use client';

import { motion } from 'framer-motion';
import { Headphones, MapPin, Calendar } from 'lucide-react';
import { technicalSupportExperience, experienceContent } from '@/data/experience';

export default function TechnicalSupportSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          {experienceContent.technicalSupport.title}
        </h2>
        <p className="text-gray-400 mb-6">{experienceContent.technicalSupport.description}</p>
      </motion.div>

      <div className="space-y-6">
        {technicalSupportExperience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 card-hover"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-300 mb-1">{exp.title}</h3>
                {exp.company && (
                  <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                )}
              </div>
              <Headphones className="w-8 h-8 text-purple-400 flex-shrink-0 ml-4" />
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

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
