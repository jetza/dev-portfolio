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
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          {experienceContent.title}
        </h2>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-700/30 p-6 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 card-hover"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-purple-300">{exp.title}</h3>
                <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
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

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2 mt-1">▹</span>
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
