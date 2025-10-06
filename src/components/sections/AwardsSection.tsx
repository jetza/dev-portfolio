'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { awards, awardsContent } from '@/data/awards';

export default function AwardsSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          {awardsContent.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-700/30 p-5 rounded-lg border border-gray-600 hover:border-yellow-500 transition-all duration-300 card-hover"
          >
            <div className="flex items-start mb-3">
              <Award className="w-8 h-8 text-yellow-400 mr-3 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-yellow-300">{award.title}</h3>
                  {award.category && (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      award.category === 'Professional' 
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                        : award.category === 'Academic'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {award.category}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{award.issuer}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{award.description}</p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-yellow-400 hover:text-yellow-300 text-sm mb-3 transition-colors duration-200 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                <span className="underline underline-offset-2">View Award</span>
              </a>
            )}
            <div className="flex items-center text-gray-400 text-xs">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{award.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-500/30"
      >
        <h3 className="text-xl font-semibold text-yellow-300 mb-3">{awardsContent.description.title}</h3>
        <p className="text-gray-300">
          {awardsContent.description.description}
        </p>
      </motion.div>
    </div>
  );
}
