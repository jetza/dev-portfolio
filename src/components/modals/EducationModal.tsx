'use client';
import { motion } from 'framer-motion';
import { GraduationCap, X } from 'lucide-react';
import Portal from '@/components/Portal';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardPosition: { x: number; y: number } | null;
}

export default function EducationModal({ isOpen, onClose, cardPosition }: EducationModalProps) {
  if (!isOpen) return null;

  return (
    <Portal key="education-modal">
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
                  <GraduationCap className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                  <div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
                      Education
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">Academic background</p>
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
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
                >
                  <h3 className="text-xl font-black text-lime-400">Bachelor&apos;s Degree</h3>
                  <p className="text-gray-400 mt-2">Faculty of Technical Sciences, Novi Sad</p>
                  <p className="text-gray-500 text-sm mt-1">Software Engineering • 2018 - 2022</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.1 }} 
                  className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
                >
                  <h3 className="text-xl font-black text-lime-400">High School</h3>
                  <p className="text-gray-400 mt-2">Electrical Engineering School</p>
                  <p className="text-gray-500 text-sm mt-1">Computer Science • 2014 - 2018</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2 }} 
                  className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
                >
                  <h3 className="text-xl font-black text-lime-400">Continuous Learning</h3>
                  <p className="text-gray-400 mt-2">
                    Online courses, workshops, and self-study in modern web technologies
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}
