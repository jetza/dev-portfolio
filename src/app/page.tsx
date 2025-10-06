'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import GameSection from '@/components/GameSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Jelena Miodragović
          </h1>
          <p className="text-xl text-gray-400 mt-2">Frontend Developer</p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar - Folder Structure */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={isGameOpen ? 'lg:col-span-5' : 'lg:col-span-9'}
          >
            <MainContent activeSection={activeSection} />
          </motion.div>

          {/* Game Section */}
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

        {/* Floating Game Toggle Button */}
        {!isGameOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsGameOpen(true)}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300 z-50"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-2xl">🎮</span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
