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
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-6" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
          {skillsContent.title}
        </h2>
      </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={categoryIndex < 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            whileInView={categoryIndex >= 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            viewport={categoryIndex >= 2 ? { once: true, margin: '0px 0px -200px 0px' } : undefined}
            transition={{ delay: categoryIndex < 2 ? categoryIndex * 0.3 : 0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-xl font-semibold text-lime-400 mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + skillIndex * 0.08, duration: 0.4, ease: 'easeOut' }}
                  className="glass p-4 rounded-lg hover:border-lime-400/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-lime-400 text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + skillIndex * 0.08, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-lime-400 to-lime-500 h-full rounded-full shadow-[0_0_10px_rgba(163,230,53,0.5)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: '0px 0px -200px 0px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="mt-8 p-6 glass-lime rounded-lg"
      >
        <h3 className="text-xl font-semibold text-lime-400 mb-3">{skillsContent.currentlyLearning.title}</h3>
        <div className="flex flex-wrap gap-2">
          {skillsContent.currentlyLearning.items.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.4, ease: 'easeOut' }}
              className="px-3 py-1 bg-lime-400/20 text-lime-300 rounded-full text-sm border border-lime-400/50 hover:bg-lime-400/30 transition-colors"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
