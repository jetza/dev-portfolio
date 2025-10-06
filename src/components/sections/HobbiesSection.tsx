'use client';

import { motion } from 'framer-motion';
import { Music, Book, Palette, Plane, Code2, Camera } from 'lucide-react';
import { hobbies, hobbiesContent } from '@/data/hobbies';

const iconMap = {
  Code2,
  Palette,
  Book,
  Music,
  Camera,
  Plane
};

export default function HobbiesSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          {hobbiesContent.title}
        </h2>
        <p className="text-gray-300 mb-6">
          {hobbiesContent.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => {
          const Icon = iconMap[hobby.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gray-700/30 p-5 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${hobby.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-300 mb-2">{hobby.name}</h3>
              <p className="text-gray-400 text-sm">{hobby.description}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30"
      >
        <h3 className="text-xl font-semibold text-purple-300 mb-3">{hobbiesContent.philosophy.title}</h3>
        <p className="text-gray-300 leading-relaxed">
          {hobbiesContent.philosophy.description}
        </p>
      </motion.div>
    </div>
  );
}
