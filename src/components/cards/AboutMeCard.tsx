'use client';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase } from 'lucide-react';

export default function AboutMeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -200px 0px' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-lime rounded-2xl overflow-hidden cursor-pointer group md:col-span-2"
    >
      <div className="p-6 h-full flex flex-col justify-between relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-magenta-500/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-lime-400 to-magenta-500 flex items-center justify-center">
              <User className="w-8 h-8 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-lime-400">About Me</h3>
              <p className="text-gray-400 text-sm">Full-Stack Developer</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Passionate developer with expertise in building modern web applications. 
            I love turning complex problems into elegant solutions.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-lime-400/10 rounded-lg border border-lime-400/30">
              <MapPin className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 text-xs">Location</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-magenta-500/10 rounded-lg border border-magenta-500/30">
              <Briefcase className="w-4 h-4 text-magenta-400" />
              <span className="text-magenta-400 text-xs">5+ Years</span>
            </div>
          </div>
        </div>
        
        <div className="relative mt-4">
          <div className="h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
          <p className="text-center text-gray-500 text-xs mt-2">Click to learn more</p>
        </div>
      </div>
    </motion.div>
  );
}
