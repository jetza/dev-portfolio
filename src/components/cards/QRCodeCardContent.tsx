'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function QRCodeCardContent() {
  const [squares, setSquares] = useState<boolean[][]>([]);

  useEffect(() => {
    const size = 8;
    const newSquares = Array(size).fill(null).map(() => 
      Array(size).fill(null).map(() => Math.random() > 0.5)
    );
    setSquares(newSquares);

    const interval = setInterval(() => {
      const newSquares = Array(size).fill(null).map(() => 
        Array(size).fill(null).map(() => Math.random() > 0.5)
      );
      setSquares(newSquares);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl p-4">
      <motion.div
        className="relative p-3 bg-white rounded-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(163, 230, 53, 0.3)',
            '0 0 40px rgba(34, 211, 238, 0.5)',
            '0 0 20px rgba(163, 230, 53, 0.3)',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="grid grid-cols-8 gap-0.5">
          {squares.map((row, i) => 
            row.map((isActive, j) => (
              <motion.div
                key={`${i}-${j}`}
                className={`w-3 h-3 ${isActive ? 'bg-black' : 'bg-white'}`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  scale: isActive ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: (i + j) * 0.02,
                }}
              />
            ))
          )}
        </div>

        <div className="absolute top-2 left-2 w-5 h-5 border-2 border-black" />
        <div className="absolute top-2 right-2 w-5 h-5 border-2 border-black" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-2 border-black" />
      </motion.div>

      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-lime-400 text-[10px] font-mono mb-1">
          SCAN FOR GITHUB
        </div>
        <div className="text-cyan-400 text-[8px] font-mono">
          github.com/jelena
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
        <motion.div
          className="absolute inset-0 border-2 border-lime-400/30"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ borderRadius: '16px' }}
        />
      </div>
    </div>
  );
}
