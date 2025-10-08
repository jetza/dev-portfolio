'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

interface FloatingGameButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

export default function FloatingGameButton({ isVisible, onClick }: FloatingGameButtonProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1,
            y: [0, -10, 0]
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: { delay: 1, type: 'spring', stiffness: 260, damping: 20 },
            opacity: { delay: 1, duration: 0.3 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
          onClick={onClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-magenta-500 flex items-center justify-center shadow-2xl shadow-lime-400/50 hover:shadow-lime-400/80 transition-shadow group"
        >
          <Gamepad2 className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-lime-400/30"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
