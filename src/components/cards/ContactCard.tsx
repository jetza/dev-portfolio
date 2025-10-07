'use client';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles } from 'lucide-react';

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -200px 0px' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-lime rounded-2xl overflow-hidden cursor-pointer group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 to-transparent" />
      
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{
              rotateY: [0, 15, 0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="w-24 h-16 bg-gradient-to-br from-lime-400 to-magenta-500 rounded-lg relative">
              <div className="absolute inset-x-0 top-0 h-8 bg-white/10 rounded-t-lg" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
                <Mail className="w-8 h-8 text-black" />
              </div>
            </div>
            
            <motion.div
              animate={{
                y: [-5, -15, -5],
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-5 h-5 text-lime-400" />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-magenta-400 mb-2">
            Get In Touch
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Let&apos;s create something amazing together
          </p>
          
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-lime-400/20 to-magenta-500/20 rounded-full border border-lime-400/30 group-hover:border-magenta-500/50 transition-colors">
            <Send className="w-4 h-4 text-lime-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <span className="text-lime-400 text-sm font-semibold">Send Message</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
