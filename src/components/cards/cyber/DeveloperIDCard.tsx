'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * DeveloperIDCard Component
 * 
 * A cyber-themed ID card displaying developer credentials.
 * Features:
 * - Animated scanning beams on all four edges (lime, cyan, magenta)
 * - Profile image with gradient overlay
 * - Developer information (name, role, experience, status)
 * - Barcode-style footer with ID number
 */
export default function DeveloperIDCard() {
  return (
    <div className="relative h-full p-6 text-white z-10 flex flex-col overflow-hidden rounded-2xl">
      {/* Top scanning beam - Lime */}
      <motion.div
        className="absolute h-[3px] bg-gradient-to-r from-transparent via-lime-400 to-transparent pointer-events-none"
        style={{ top: 0, left: 0, right: 0, boxShadow: '0 0 20px rgba(163, 230, 53, 0.8)' }}
        animate={{
          x: ['-100%', '100%'],
          transition: { duration: 0, delay: 0 }
        }}
        initial={{ x: '-100%' }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 4.5,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Right scanning beam - Cyan */}
      <motion.div
        className="absolute w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none"
        style={{ top: 0, right: 0, bottom: 0, boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }}
        animate={{
          y: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          delay: 1.5,
          repeat: Infinity,
          repeatDelay: 4.5,
          ease: "linear"
        }}
        initial={{ y: '-100%' }}
      />

      {/* Bottom scanning beam - Magenta */}
      <motion.div
        className="absolute h-[3px] bg-gradient-to-r from-transparent via-magenta-500 to-transparent pointer-events-none"
        style={{ bottom: 0, left: 0, right: 0, boxShadow: '0 0 20px rgba(217, 70, 239, 0.8)' }}
        animate={{
          x: ['100%', '-100%']
        }}
        transition={{
          duration: 1.5,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 4.5,
          ease: "linear"
        }}
        initial={{ x: '100%' }}
      />

      {/* Left scanning beam - Lime */}
      <motion.div
        className="absolute w-[3px] bg-gradient-to-b from-transparent via-lime-400 to-transparent pointer-events-none"
        style={{ top: 0, left: 0, bottom: 0, boxShadow: '0 0 20px rgba(163, 230, 53, 0.8)' }}
        animate={{
          y: ['100%', '-100%']
        }}
        transition={{
          duration: 1.5,
          delay: 4.5,
          repeat: Infinity,
          repeatDelay: 4.5,
          ease: "linear"
        }}
        initial={{ y: '100%' }}
      />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] font-bold tracking-wider text-lime-400">
          DEVELOPER CREDENTIALS
        </div>
        <div className="flex items-center gap-1 text-[8px] text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          VERIFIED
        </div>
      </div>

      {/* Main content - Profile and Info */}
      <div className="flex gap-4 flex-1">
        {/* Profile Image */}
        <div className="w-32 flex items-center justify-center">
          <div className="relative w-28 h-28 rounded-lg overflow-hidden border-2 border-lime-400/50 bg-gradient-to-br from-pink-100 to-pink-200">
            <Image 
              src="/princesspeach.png" 
              alt="Princess Peach"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-yellow-400/10 animate-pulse" />
          </div>
        </div>

        {/* Developer Information */}
        <div className="flex-1 flex flex-col justify-center space-y-2 text-[10px]">
          <div className="flex items-baseline gap-2">
            <span className="text-lime-400/60 font-mono text-[8px]">NAME:</span>
            <span className="text-white font-bold">Jelena Miodragović</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lime-400/60 font-mono text-[8px]">ROLE:</span>
            <span className="text-magenta-400 text-[9px]">Full Stack Software Developer</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lime-400/60 font-mono text-[8px]">EXP:</span>
            <span className="text-magenta-400">5+ years</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lime-400/60 font-mono text-[8px]">STATUS:</span>
            <span className="text-green-400">Available</span>
          </div>
        </div>
      </div>

      {/* Footer - Barcode and ID */}
      <div className="mt-auto pt-3 border-t border-lime-400/20">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[8px] text-lime-400/50">
            ░░░░░░░░ BARCODE ░░░░░░░░
          </div>
        </div>
        <div className="font-mono text-[8px] text-magenta-400/70 mt-1">
          ID: DEV-2024-#001337
        </div>
      </div>
    </div>
  );
}
