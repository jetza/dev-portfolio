'use client';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function CodeSnippetCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -200px 0px' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-lime rounded-2xl overflow-hidden cursor-pointer group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-gray-900/90" />
      
      <div className="relative p-4 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Terminal className="w-12 h-12 text-lime-400" />
          </motion.div>
        </div>
        
        <div className="flex items-center justify-center mt-2">
          <motion.div
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-2 h-4 bg-lime-400"
          />
        </div>
        
        <div className="text-center mt-2">
          <p className="text-lime-400 text-sm font-semibold">Code Snippets</p>
        </div>
      </div>
    </motion.div>
  );
}
