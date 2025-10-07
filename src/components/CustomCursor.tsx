'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.closest('[data-clickable]') ||
        target.classList.contains('cursor-pointer') ||
        target.style.cursor === 'pointer' ||
        target.closest('.group.cursor-pointer') ||
        target.closest('motion.div[class*="cursor-pointer"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
          mass: 0.3
        }}
      >
        <div className="w-3 h-3 bg-lime-400 rounded-full relative">
          <div className="absolute inset-0 bg-lime-400 rounded-full blur-sm animate-pulse" />
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.6 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5
        }}
      >
        <div className="relative w-10 h-10">
          <div className={`absolute inset-0 border-2 rounded-full transition-colors ${
            isHovering ? 'border-lime-400 animate-pulse' : 'border-lime-400/50'
          }`} />
          <div className={`absolute inset-0 border-2 rounded-full translate-x-px -translate-y-px transition-colors ${
            isHovering ? 'border-red-500/60' : 'border-red-500/30'
          }`} />
          <div className={`absolute inset-0 border-2 rounded-full -translate-x-px translate-y-px transition-colors ${
            isHovering ? 'border-cyan-400/60' : 'border-cyan-400/30'
          }`} />
          <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-px bg-lime-400 transition-all ${
            isHovering ? 'h-3 opacity-100' : 'h-2 opacity-70'
          }`} />
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-px bg-lime-400 transition-all ${
            isHovering ? 'h-3 opacity-100' : 'h-2 opacity-70'
          }`} />
          <div className={`absolute -left-1 top-1/2 -translate-y-1/2 h-px bg-lime-400 transition-all ${
            isHovering ? 'w-3 opacity-100' : 'w-2 opacity-70'
          }`} />
          <div className={`absolute -right-1 top-1/2 -translate-y-1/2 h-px bg-lime-400 transition-all ${
            isHovering ? 'w-3 opacity-100' : 'w-2 opacity-70'
          }`} />
          {isHovering && (
            <motion.div
              className="absolute inset-0 border-2 border-magenta-500/40 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99997] opacity-60"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.6
        }}
      >
        <div className="w-1 h-1 bg-magenta-500 rounded-full blur-[1px]" />
      </motion.div>
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[99996] text-lime-400 text-xs font-mono font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 10,
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          CLICK
        </motion.div>
      )}
    </>
  );
}
