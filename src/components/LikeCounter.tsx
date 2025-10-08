'use client';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LikeCounter() {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load likes from localStorage on mount
  useEffect(() => {
    const storedLikes = localStorage.getItem('portfolioLikes');
    const userHasLiked = localStorage.getItem('userHasLiked');
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
    if (userHasLiked === 'true') {
      setHasLiked(true);
    }
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      setIsAnimating(true);
      localStorage.setItem('portfolioLikes', newLikes.toString());
      localStorage.setItem('userHasLiked', 'true');
      setTimeout(() => {
        setIsAnimating(false);
      }, 1200);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`relative w-full h-full ${hasLiked ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 blur-xl opacity-40 pointer-events-none">
        <div className="w-full h-full bg-magenta-500 rounded-2xl" />
      </div>

      {/* Main heart container */}
      <motion.div
        animate={!hasLiked && { scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative w-full h-full"
      >
        {/* Heart card - full height */}
        <motion.div 
          className="relative bg-black/60 backdrop-blur-sm border-2 border-magenta-400/40 rounded-2xl shadow-[0_0_30px_rgba(232,121,249,0.3)] group-hover:shadow-[0_0_40px_rgba(232,121,249,0.5)] transition-all duration-300 w-full h-full overflow-visible"
          animate={isAnimating ? {
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 30px rgba(232,121,249,0.3)',
              '0 0 60px rgba(232,121,249,0.8)',
              '0 0 30px rgba(232,121,249,0.3)'
            ]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Heart icon */}
            <motion.div
              animate={isAnimating ? {
                scale: [1, 1.4, 1.1],
                rotate: [0, -15, 10, -5, 0],
                y: [0, -10, 0]
              } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <Heart
                className={`w-20 h-20 transition-all duration-300 ${
                  hasLiked
                    ? 'fill-magenta-400 text-magenta-400 drop-shadow-[0_0_20px_rgba(232,121,249,1)]'
                    : 'fill-transparent text-magenta-400 group-hover:fill-magenta-400/20'
                }`}
                strokeWidth={2}
              />
            </motion.div>

            {/* Like counter */}
            <motion.div
              animate={isAnimating ? { 
                scale: [1, 1.3, 1.1],
                y: [0, -5, 0]
              } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-center relative z-10"
            >
              <div className="text-3xl font-bold text-magenta-400 font-mono drop-shadow-[0_0_10px_rgba(232,121,249,0.8)]">
                {likes}
              </div>
              <div className="text-xs text-magenta-300 mt-1 font-mono tracking-wider">
                {hasLiked ? 'LIKED!' : 'LIKES'}
              </div>
            </motion.div>
          </div>

          {/* Particle effects on like */}
          {isAnimating && (
            <>
              {/* Main particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [1, 1, 0],
                    scale: [0, 1.5, 0.5],
                    x: Math.cos((i * Math.PI * 2) / 12) * 60,
                    y: Math.sin((i * Math.PI * 2) / 12) * 60,
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-magenta-400 rounded-full blur-[1px]"
                  style={{ 
                    boxShadow: '0 0 10px rgba(232,121,249,1)'
                  }}
                />
              ))}
              
              {/* Heart particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`heart-${i}`}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    x: Math.cos((i * Math.PI * 2) / 5 + Math.PI/4) * 45,
                    y: Math.sin((i * Math.PI * 2) / 5 + Math.PI/4) * 45,
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  className="absolute top-1/2 left-1/2"
                >
                  <Heart className="w-4 h-4 fill-magenta-400 text-magenta-400" />
                </motion.div>
              ))}
              
              {/* Flash effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.6, 0], scale: [0.5, 2, 3] }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-magenta-400/30 rounded-2xl"
              />
            </>
          )}
        </motion.div>

        {/* Tooltip */}
        {!hasLiked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-magenta-400/10 border border-magenta-400/30 rounded-lg px-3 py-1 text-xs text-magenta-300 font-mono pointer-events-none z-20"
          >
            Click to like! 💜
          </motion.div>
        )}
      </motion.div>
    </button>
  );
}
