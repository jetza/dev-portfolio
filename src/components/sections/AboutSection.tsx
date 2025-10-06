'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { aboutData } from '@/data/about';

const iconMap = {
  MapPin,
  Briefcase,
  GraduationCap
};

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          About Me
        </h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg leading-relaxed">
            Hi! I&apos;m <span className="text-purple-400 font-semibold">{aboutData.name}</span>, 
            a passionate <span className="text-pink-400 font-semibold">{aboutData.role}</span> based in {aboutData.location}.
          </p>
          {aboutData.introduction.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="leading-relaxed mt-2">
            <strong>Contact:</strong> {aboutData.email} | {aboutData.phone}<br/>
            <strong>LinkedIn:</strong> <a href={aboutData.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">{aboutData.linkedin.display}</a><br/>
            <strong>GitHub:</strong> <a href={aboutData.github.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">{aboutData.github.display}</a>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
      >
        {aboutData.cards.map((card, index) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap];
          return (
            <div key={index} className="bg-gray-700/30 p-4 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 card-hover">
              <Icon className="w-8 h-8 text-purple-400 mb-2" />
              <h3 className="font-semibold text-gray-200 mb-1">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30"
      >
        <h3 className="text-xl font-semibold text-purple-300 mb-3">{aboutData.whatIDo.title}</h3>
        <ul className="space-y-2 text-gray-300">
          {aboutData.whatIDo.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-400 mr-2">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
