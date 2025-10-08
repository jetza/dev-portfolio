'use client';
import { motion } from 'framer-motion';
interface HeroProps {
  onNavigate?: (section: string) => void;
}
export default function Hero({ onNavigate }: HeroProps) {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('portfolio-content');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
    onNavigate?.('projects');
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('portfolio-content');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    onNavigate?.('contact');
  };
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.1),transparent_50%)]" />
      </div>
      {}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-lime-400/20 rounded-3xl blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-lime-400/10 rounded-full blur-2xl"
      />
      {}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {}
          <h1 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black leading-none mb-6 tracking-tight"
            style={{
              fontVariationSettings: '"wght" 900',
              background: 'linear-gradient(135deg, #ffffff 0%, #a3e635 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(163, 230, 53, 0.3))'
            }}
          >
            Jelena
          </h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-300 mb-8"
            style={{ fontVariationSettings: '"wght" 700' }}
          >
            Miodragović
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            <span className="text-magenta-500">Full Stack Developer</span> | Educator | Microsoft MVP
          </motion.p>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-48"
          >
            <button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]"
            >
              View Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 glass border-2 border-lime-400/50 text-lime-400 font-bold rounded-full hover:bg-lime-400/10 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
        {}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={scrollToProjects}
        >
          <div className="relative flex flex-col items-center gap-4">
            {}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-lime-400/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-magenta-500/20 rounded-full blur-3xl"
              />
              {}
              <motion.div
                animate={{ 
                  x: [-4, 5, -3, 4, -2, 0],
                  y: [0, -2, 1, -1, 2, 0],
                  opacity: [0.8, 0.6, 0.9, 0.5, 0.7, 0.6],
                  scaleX: [1, 1.05, 0.95, 1.03, 1]
                }}
                transition={{ 
                  duration: 0.15,
                  repeat: Infinity,
                  repeatDelay: 1.5
                }}
                className="absolute text-8xl font-black text-red-500/70"
                style={{ mixBlendMode: 'screen' }}
              >
                ↓
              </motion.div>
              {}
              <motion.div
                animate={{ 
                  x: [4, -5, 3, -4, 2, 0],
                  y: [0, 2, -1, 1, -2, 0],
                  opacity: [0.7, 0.5, 0.8, 0.6, 0.9, 0.6],
                  scaleX: [1, 0.95, 1.05, 0.97, 1]
                }}
                transition={{ 
                  duration: 0.15,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  delay: 0.05
                }}
                className="absolute text-8xl font-black text-cyan-400/70"
                style={{ mixBlendMode: 'screen' }}
              >
                ↓
              </motion.div>
              {}
              <motion.div
                animate={{ 
                  x: [0, -3, 3, -2, 2, 0],
                  y: [-2, 2, -1, 1, 0],
                  opacity: [0.6, 0.8, 0.5, 0.7, 0.9, 0.6],
                  scaleY: [1, 1.05, 0.95, 1.02, 1]
                }}
                transition={{ 
                  duration: 0.15,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  delay: 0.1
                }}
                className="absolute text-8xl font-black"
                style={{ 
                  mixBlendMode: 'screen',
                  color: '#a80077'
                }}
              >
                ↓
              </motion.div>
              {}
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.08, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative text-8xl font-black text-lime-400"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(163, 230, 53, 0.9)) drop-shadow(0 0 40px rgba(168, 0, 119, 0.5))'
                }}
              >
                ↓
              </motion.div>
              {}
              <motion.div
                animate={{ 
                  opacity: [0, 1, 0, 1, 0, 1, 0],
                  scaleX: [1, 0.9, 1.1, 0.95, 1.05, 1],
                  scaleY: [1, 1.1, 0.9, 1.05, 0.95, 1],
                  x: [0, -5, 5, -3, 3, 0],
                  rotate: [0, -2, 2, -1, 1, 0]
                }}
                transition={{ 
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute text-8xl font-black text-white"
                style={{ mixBlendMode: 'overlay' }}
              >
                ↓
              </motion.div>
              {}
              <motion.div
                animate={{ 
                  y: [-60, 60],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-lime-400/70 to-transparent"
              />
              <motion.div
                animate={{ 
                  y: [-60, 60],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-magenta-500/50 to-transparent"
              />
              {}
              <motion.div
                animate={{ 
                  opacity: [0, 0.7, 0, 0.5, 0],
                  scaleY: [0, 0.3, 0, 0.2, 0]
                }}
                transition={{ 
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute top-1/4 left-0 w-full h-2 bg-magenta-500/60"
                style={{ mixBlendMode: 'screen' }}
              />
              <motion.div
                animate={{ 
                  opacity: [0, 0.6, 0, 0.4, 0],
                  scaleY: [0, 0.4, 0, 0.3, 0]
                }}
                transition={{ 
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: 0.1
                }}
                className="absolute bottom-1/3 left-0 w-full h-3 bg-cyan-400/50"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            {}
            <motion.p
              animate={{ 
                opacity: [1, 0.6, 1, 0.4, 1, 0.7, 1],
                x: [0, -2, 2, -1, 1, 0],
                scaleX: [1, 0.98, 1.02, 0.99, 1.01, 1]
              }}
              transition={{ 
                duration: 0.25,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="text-lime-400 text-sm group-hover:text-lime-300 transition-colors font-black tracking-[0.3em]"
              style={{ 
                textShadow: `
                  0 0 10px rgba(163, 230, 53, 0.8),
                  2px 2px 0 rgba(168, 0, 119, 0.5),
                  -2px -2px 0 rgba(0, 255, 255, 0.3)
                `
              }}
            >
              SC<motion.span
                animate={{ 
                  opacity: [1, 0.2, 1, 0.3, 1],
                  color: ['#a3e635', '#a80077', '#a3e635']
                }}
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 2.5 }}
              >R</motion.span>OLL
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
