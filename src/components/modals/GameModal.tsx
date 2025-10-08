'use client';
import { motion } from 'framer-motion';
import Portal from '@/components/Portal';
import GameSection from '@/components/GameSection';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GameModal({ isOpen, onClose }: GameModalProps) {
  if (!isOpen) return null;

  return (
    <Portal key="game-modal">
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
            scale: 0.1, 
            opacity: 0, 
            x: typeof window !== 'undefined' ? window.innerWidth / 2 - 100 : 0,
            y: typeof window !== 'undefined' ? window.innerHeight / 2 - 100 : 0,
            rotate: 180
          }} 
          animate={{ 
            scale: 1, 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotate: 0
          }} 
          exit={{ 
            scale: 0.1, 
            opacity: 0, 
            x: typeof window !== 'undefined' ? window.innerWidth / 2 - 100 : 0,
            y: typeof window !== 'undefined' ? window.innerHeight / 2 - 100 : 0,
            rotate: 180
          }} 
          transition={{ 
            type: 'spring', 
            damping: 25, 
            stiffness: 200, 
            duration: 0.6
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
          <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
            </div>
            
            <GameSection setIsGameOpen={onClose} />
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}
