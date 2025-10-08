'use client';
import { motion } from 'framer-motion';
import { Music, Book, Palette, Plane, Code2, Camera, Users, Calendar, Heart, MessageSquare, Lightbulb } from 'lucide-react';
import { hobbies, hobbiesContent } from '@/data/hobbies';
const iconMap = {
  Code2,
  Palette,
  Book,
  Music,
  Camera,
  Plane,
  Users,
  Calendar,
  Heart,
  MessageSquare,
  Lightbulb
};
export default function HobbiesSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-6" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
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
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              animate={index < 3 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
              whileInView={index >= 3 ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : undefined}
              viewport={index >= 3 ? { once: true, margin: '0px 0px -200px 0px' } : undefined}
              transition={{ delay: index < 3 ? index * 0.2 : 0, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-lg hover:border-lime-400/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Cyber corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl border transition-shadow relative z-10 ${
                  index % 3 === 0 
                    ? 'bg-lime-400/20 border-lime-400/30 shadow-[0_0_15px_rgba(163,230,53,0.2)] group-hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]'
                    : index % 3 === 1
                    ? 'bg-cyan-400/20 border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                    : 'bg-magenta-400/20 border-magenta-400/30 shadow-[0_0_15px_rgba(232,121,249,0.2)] group-hover:shadow-[0_0_20px_rgba(232,121,249,0.4)]'
                }`}>
                  <Icon className={`w-8 h-8 ${
                    index % 3 === 0 
                      ? 'text-lime-400' 
                      : index % 3 === 1 
                      ? 'text-cyan-400' 
                      : 'text-magenta-400'
                  }`} />
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-2 group-hover:text-white transition-colors ${
                index % 3 === 0 
                  ? 'text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]' 
                  : index % 3 === 1 
                  ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' 
                  : 'text-magenta-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]'
              }`}>{hobby.name}</h3>
              <p className="text-gray-300 text-sm">{hobby.description}</p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: '0px 0px -200px 0px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="mt-8 p-6 glass-lime rounded-lg"
      >
        <h3 className="text-xl font-semibold text-lime-400 mb-3">{hobbiesContent.philosophy.title}</h3>
        <p className="text-gray-300 leading-relaxed">
          {hobbiesContent.philosophy.description}
        </p>
      </motion.div>
    </div>
  );
}
