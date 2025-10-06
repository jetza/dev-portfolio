'use client';

import { motion } from 'framer-motion';
import { skillCategories, skillsContent } from '@/data/skills';

export default function SkillsSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          {skillsContent.title}
        </h2>
      </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  className="bg-gray-700/30 p-4 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30"
      >
        <h3 className="text-xl font-semibold text-purple-300 mb-3">{skillsContent.currentlyLearning.title}</h3>
        <div className="flex flex-wrap gap-2">
          {skillsContent.currentlyLearning.items.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/50"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
