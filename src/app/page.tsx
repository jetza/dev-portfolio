'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import GameSection from '@/components/GameSection';
import ThemePreview from '@/components/ThemePreview';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const [activeSection, setActiveSection] = useState('projects');
  const [isGameOpen, setIsGameOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-black text-white">
      {}
      <Hero onNavigate={setActiveSection} />

      {}
      <div id="portfolio-content" className="container mx-auto px-4 py-16">

        {}
        {theme === 'minimal' ? (
          <ThemePreview />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
              </motion.div>

              {}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={isGameOpen ? 'lg:col-span-5' : 'lg:col-span-9'}
              >
                <MainContent activeSection={activeSection} isGameOpen={isGameOpen} />
              </motion.div>

            {}
            {isGameOpen && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4"
              >
                <GameSection setIsGameOpen={setIsGameOpen} />
              </motion.div>
            )}
          </div>
        )}

        {}
        {!isGameOpen && theme !== 'minimal' && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              scale: { delay: 1, type: 'spring', stiffness: 260, damping: 20 },
              y: {
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            onClick={() => setIsGameOpen(true)}
            className="fixed bottom-8 right-8 z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              {}
              <motion.div
                animate={{ 
                  x: [-2, 3, -1, 2, 0],
                  opacity: [0.7, 0.5, 0.8, 0.6]
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
                  x: [2, -3, 1, -2, 0],
                  opacity: [0.6, 0.4, 0.7, 0.5]
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
                  x: [0, -2, 2, -1, 0],
                  opacity: [0.5, 0.7, 0.4, 0.6]
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
                  boxShadow: [
                    '0 0 20px rgba(163, 230, 53, 0.5), 0 0 40px rgba(168, 0, 119, 0.3)',
                    '0 0 30px rgba(163, 230, 53, 0.7), 0 0 50px rgba(168, 0, 119, 0.5)',
                    '0 0 20px rgba(163, 230, 53, 0.5), 0 0 40px rgba(168, 0, 119, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full bg-black/80 border-2 border-lime-400 backdrop-blur-md flex items-center justify-center"
              >
                {}
                <motion.div
                  animate={{
                    x: [0, -1, 1, 0],
                    y: [0, 1, -1, 0],
                  }}
                  transition={{ 
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Gamepad2 
                    className="w-7 h-7 text-lime-400" 
                    fill="currentColor"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(163, 230, 53, 0.8))'
                    }}
                  />
                </motion.div>

                {}
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
              <div
                className="absolute right-full mr-3 px-3 py-1.5 glass border border-lime-400/30 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <p className="text-xs font-bold text-lime-400 tracking-wider">
                  PLAY GAME
                </p>
              </div>
            </div>
          </motion.button>
        )}
      </div>
    </div>
  );
}
