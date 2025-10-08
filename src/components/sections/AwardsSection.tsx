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
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-6" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
          {awardsContent.title}
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={index < 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            whileInView={index >= 2 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
            viewport={index >= 2 ? { once: true, margin: '0px 0px -200px 0px' } : undefined}
            transition={{ delay: index < 2 ? index * 0.2 : 0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
          >
            {/* Cyber corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
            </div>

            <div className="flex items-start justify-between mb-4">
              <div className="bg-lime-400/20 p-3 rounded-xl border border-lime-400/30 shadow-[0_0_15px_rgba(163,230,53,0.2)] group-hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-shadow relative z-10">
                <Award className="w-8 h-8 text-lime-400" />
              </div>
              {award.category && (
                <span className={`px-3 py-1 rounded-lg text-xs font-semibold relative z-10 ${
                  award.category === 'Professional' 
                    ? 'bg-magenta-400/20 text-magenta-400 border border-magenta-400/30' 
                    : award.category === 'Academic'
                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                    : 'bg-lime-400/20 text-lime-400 border border-lime-400/30'
                }`}>
                  {award.category}
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-lime-400 mb-2 group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(163,230,53,0.5)] line-clamp-2">{award.title}</h3>
            <p className="text-cyan-400 text-sm mb-3 font-mono">{award.issuer}</p>
            <p className="text-gray-300 text-sm mb-3">{award.description}</p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lime-400 hover:text-lime-300 text-sm mb-3 transition-colors duration-200 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                <span className="underline underline-offset-2">View Award</span>
              </a>
            )}
            <div className="flex items-center text-magenta-400 text-xs">
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
        className="mt-8 p-6 glass-lime rounded-lg"
      >
        <h3 className="text-xl font-semibold text-lime-400 mb-3">{awardsContent.description.title}</h3>
        <p className="text-gray-300">
          {awardsContent.description.description}
        </p>
      </motion.div>
    </div>
  );
}
