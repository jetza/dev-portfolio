'use client';
import { motion } from 'framer-motion';
import { User, X, Mail, MapPin } from 'lucide-react';
import { aboutData } from '@/data/about';
import Portal from '@/components/Portal';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardPosition: { x: number; y: number } | null;
}

export default function AboutModal({ isOpen, onClose, cardPosition }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <Portal key="about-modal">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={onClose} 
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" 
      />
      
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
        <motion.div 
          initial={{ 
            scale: 0.2, 
            opacity: 0, 
            x: cardPosition?.x || 0, 
            y: cardPosition?.y || 0, 
            rotateX: 51, 
            rotateY: -6, 
            rotateZ: -20 
          }} 
          animate={{ 
            scale: 1, 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotateX: 0, 
            rotateY: 0, 
            rotateZ: 0 
          }} 
          exit={{ 
            scale: 0.2, 
            opacity: 0, 
            x: cardPosition?.x || 0, 
            y: cardPosition?.y || 0, 
            rotateX: 51, 
            rotateY: -6, 
            rotateZ: -20 
          }} 
          transition={{ 
            type: 'spring', 
            damping: 25, 
            stiffness: 200, 
            duration: 0.6, 
            rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, 
            rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, 
            rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
          }} 
          onClick={(e) => e.stopPropagation()} 
          className="relative max-w-4xl w-full max-h-[85vh] pointer-events-auto" 
          style={{ perspective: '1400px' }}
        >
          <motion.div 
            className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" 
            animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} 
          />
          
          <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
            </div>
            
            <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <User className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                  <div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
                      About Me
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{aboutData.role}</p>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }} 
                  whileTap={{ scale: 0.9 }} 
                  onClick={onClose} 
                  className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
              >
                <h3 className="text-2xl font-black text-lime-400 mb-4">{aboutData.name}</h3>
                <div className="space-y-3 text-gray-300">
                  {aboutData.introduction.map((para, idx) => (
                    <p key={idx} className="leading-relaxed">{para}</p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }} 
                className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
              >
                <h3 className="text-xl font-black text-lime-400 mb-4">Contact Info</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-lime-400" />
                    <span>{aboutData.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{aboutData.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-lime-400" />
                    <span>{aboutData.location}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}
