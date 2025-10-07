'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Zap, LayoutGrid } from 'lucide-react';
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isCyber = theme === 'cyber';
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        opacity: { delay: 0.5, duration: 0.5 },
        scale: { delay: 0.5, duration: 0.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        {}
        <motion.div
          animate={{ 
            x: isCyber ? [-2, 3, -1, 2, 0] : 0,
            opacity: isCyber ? [0.7, 0.5, 0.8, 0.6] : 0
          }}
          transition={{ 
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="absolute inset-0 bg-red-500/30 rounded-full blur-sm"
          style={{ mixBlendMode: 'screen' }}
        />
        <motion.div
          animate={{ 
            x: isCyber ? [2, -3, 1, -2, 0] : 0,
            opacity: isCyber ? [0.6, 0.4, 0.7, 0.5] : 0
          }}
          transition={{ 
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.05
          }}
          className="absolute inset-0 bg-cyan-400/30 rounded-full blur-sm"
          style={{ mixBlendMode: 'screen' }}
        />
        <motion.div
          animate={{ 
            x: isCyber ? [0, -2, 2, -1, 0] : 0,
            opacity: isCyber ? [0.5, 0.7, 0.4, 0.6] : 0
          }}
          transition={{ 
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.1
          }}
          className="absolute inset-0 rounded-full blur-sm"
          style={{ 
            mixBlendMode: 'screen',
            backgroundColor: 'rgba(168, 0, 119, 0.3)'
          }}
        />
        {}
        <motion.div
          animate={{
            boxShadow: isCyber 
              ? [
                  '0 0 20px rgba(163, 230, 53, 0.5), 0 0 40px rgba(168, 0, 119, 0.3)',
                  '0 0 30px rgba(163, 230, 53, 0.7), 0 0 50px rgba(168, 0, 119, 0.5)',
                  '0 0 20px rgba(163, 230, 53, 0.5), 0 0 40px rgba(168, 0, 119, 0.3)',
                ]
              : [
                  '0 0 15px rgba(163, 230, 53, 0.3)',
                  '0 0 20px rgba(163, 230, 53, 0.4)',
                  '0 0 15px rgba(163, 230, 53, 0.3)',
                ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`
            relative w-full h-full rounded-full 
            flex items-center justify-center
            border-2 transition-all duration-300
            ${isCyber 
              ? 'bg-black/80 border-lime-400 backdrop-blur-md' 
              : 'bg-white/10 border-lime-400/60 backdrop-blur-lg'
            }
          `}
        >
          {}
          <motion.div
            animate={isCyber ? {
              x: [0, -1, 1, 0],
              y: [0, 1, -1, 0],
            } : {}}
            transition={isCyber ? { 
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3
            } : {}}
            className="relative"
          >
            {isCyber ? (
              <Zap className="w-7 h-7 text-lime-400" fill="currentColor" />
            ) : (
              <LayoutGrid className="w-7 h-7 text-lime-400" />
            )}
          </motion.div>
          {}
          {isCyber && (
            <motion.div
              animate={{ 
                y: [-30, 30],
                opacity: [0, 0.4, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent"
            />
          )}
        </motion.div>
        {}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="absolute top-0 left-1/2 w-1 h-1 bg-lime-400 rounded-full -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-magenta-500 rounded-full -translate-x-1/2" />
          <div className="absolute left-0 top-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-1 h-1 bg-red-500 rounded-full -translate-y-1/2" />
        </motion.div>
        {}
        <motion.div
          className="absolute right-full mr-3 px-3 py-1.5 glass border border-lime-400/30 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <p className="text-xs font-bold text-lime-400 tracking-wider">
            {isCyber ? 'CYBER MODE' : 'MINIMAL MODE'}
          </p>
        </motion.div>
      </div>
    </motion.button>
  );
}
