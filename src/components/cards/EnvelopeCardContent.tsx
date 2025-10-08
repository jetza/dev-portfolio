'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function EnvelopeCardContent() {
  return (
    <div className="relative h-full flex items-center justify-center p-6 text-white z-10">
      <motion.div
        animate={{
          rotateY: [0, 8, 0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full max-h-[180px]"
      >
        <motion.div
          className="w-full h-full bg-gradient-to-br from-lime-400 via-lime-500 to-magenta-500 rounded-2xl relative shadow-2xl"
          whileHover={{
            x: [0, -2, 2, -1, 1, -2, 2, 0],
            y: [0, 1, -1, 2, -2, 1, -1, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-900/40 to-transparent rounded-t-2xl" />
          <div
            className="absolute inset-x-0 top-0 left-1/2 -translate-x-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: '90px solid transparent',
              borderRight: '90px solid transparent',
              borderTop: '60px solid rgba(163, 230, 53, 0.4)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Mail className="w-24 h-24 text-black/80 drop-shadow-2xl relative z-10 group-hover:opacity-80 transition-opacity" />
            <motion.div
              className="absolute opacity-0 group-hover:opacity-60"
              animate={{
                x: [0, 3, -2, 4, -1, 3, 0],
                y: [0, -2, 3, -1, 2, -2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Mail className="w-24 h-24 text-red-500" />
            </motion.div>
            <motion.div
              className="absolute opacity-0 group-hover:opacity-50"
              animate={{
                x: [0, -3, 2, -4, 1, -3, 0],
                y: [0, 2, -3, 1, -2, 2, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                ease: "linear",
                delay: 0.03
              }}
            >
              <Mail className="w-24 h-24 text-cyan-400" />
            </motion.div>
          </div>
          <div className="absolute inset-x-8 bottom-8 h-px bg-black/20" />
          <div className="absolute inset-x-8 bottom-12 h-px bg-black/15" />
          <div className="absolute inset-x-8 bottom-16 h-px bg-black/10" />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-3 -right-3 w-8 h-8 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50"
        />
      </motion.div>
    </div>
  );
}
