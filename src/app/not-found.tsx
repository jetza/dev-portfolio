'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: (i * 5.2 + 3) % 100,
  duration: 2 + (i % 3),
  delay: (i * 0.25) % 5,
  xOffset: (i % 2 === 0 ? 1 : -1) * ((i % 5) * 10),
}));

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('hide-theme-toggle');
    
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('hide-theme-toggle');
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          body.hide-theme-toggle button.fixed {
            display: none !important;
          }
          body.hide-theme-toggle [class*="fixed"][class*="top-8"][class*="right-8"] {
            display: none !important;
          }
        `
      }} />
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-magenta-950/30 via-transparent to-transparent" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(163, 230, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(163, 230, 53, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Scan line */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-lime-400/50 to-transparent blur-sm"
      />

      {/* Falling particles */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, particle.xOffset],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
          className="absolute w-1 h-1 bg-lime-400 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: '-10px',
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Main 404 with 3D effect */}
        <div className="relative mb-8" style={{ perspective: '1000px' }}>
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            {/* Glitch clones */}
            <motion.h1
              animate={{
                x: [-2, 2, -2],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-0 text-[15rem] font-black text-cyan-400/50 blur-[2px]"
            >
              404
            </motion.h1>
            <motion.h1
              animate={{
                x: [2, -2, 2],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.1,
              }}
              className="absolute inset-0 text-[15rem] font-black text-magenta-500/50 blur-[2px]"
            >
              404
            </motion.h1>
            
            {/* Main 404 */}
            <h1 className="relative text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-lime-400 via-lime-300 to-lime-500 drop-shadow-[0_0_30px_rgba(163,230,53,0.5)]">
              404
            </h1>

            {/* Border animations like ID card */}
            <motion.div
              className="absolute h-[3px] bg-gradient-to-r from-transparent via-lime-400 to-transparent pointer-events-none -top-8 left-0 right-0"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent pointer-events-none top-0 -right-8 bottom-0"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-[3px] bg-gradient-to-r from-transparent via-magenta-500 to-transparent pointer-events-none -bottom-8 left-0 right-0"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-[3px] bg-gradient-to-b from-transparent via-lime-400 to-transparent pointer-events-none top-0 -left-8 bottom-0"
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 2, delay: 3, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
            />
          </motion.div>
        </div>

        {/* Error message with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-lime rounded-2xl p-8 border-2 border-lime-400/30 mb-8 relative overflow-hidden"
        >
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-400/10 to-transparent"
          />
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-lime-400 animate-pulse" />
              <h2 className="text-3xl font-black text-lime-400 font-mono">SYSTEM ERROR</h2>
            </div>
            
            <div className="space-y-2 text-left max-w-md mx-auto font-mono text-sm">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-gray-300"
              >
                <span className="text-lime-400">&gt;</span> Requested dimension not found
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="text-gray-300"
              >
                <span className="text-cyan-400">&gt;</span> Reality.status: <span className="text-magenta-500">CORRUPTED</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="text-gray-300"
              >
                <span className="text-magenta-500">&gt;</span> Scanning for alternative routes<motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >...</motion.span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(163, 230, 53, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/')}
            className="group relative px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-black font-black rounded-xl flex items-center gap-3 overflow-hidden"
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
            <Home className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Return to Home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.refresh()}
            className="px-8 py-4 bg-black border-2 border-magenta-500 text-magenta-500 font-black rounded-xl flex items-center gap-3 hover:bg-magenta-500/10 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Refresh Reality</span>
          </motion.button>
        </div>
      </div>
      </div>
    </>
  );
}
