'use client';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
export default function ThemePreview() {
  const demoCards = [
    { 
      id: 1, 
      title: 'Projects', 
      icon: Code2, 
      position: 'col-span-2 row-span-1',
      count: '12+'
    },
    { 
      id: 2, 
      title: 'Experience', 
      icon: Briefcase, 
      position: 'col-span-1 row-span-2',
      count: '5+ years'
    },
    { 
      id: 3, 
      title: 'Education', 
      icon: GraduationCap, 
      position: 'col-span-1 row-span-1',
      count: '3 degrees'
    },
    { 
      id: 4, 
      title: 'Awards', 
      icon: Award, 
      position: 'col-span-1 row-span-1',
      count: '8+'
    },
    { 
      id: 5, 
      title: 'Skills', 
      icon: BookOpen, 
      position: 'col-span-2 row-span-1',
      count: '20+ tech'
    },
    { 
      id: 6, 
      title: 'Hobbies', 
      icon: Heart, 
      position: 'col-span-1 row-span-1',
      count: '∞'
    },
  ];
  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-magenta-950/30 via-transparent to-transparent" />
      {}
      <div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
        <h1 className="text-5xl font-black text-white mb-4">
          <span className="text-lime-400">3D</span> <span className="text-magenta-500">Portfolio</span>
        </h1>
      </div>
      {}
      <div 
        className="max-w-7xl mx-auto relative z-10"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '0% 68%'
        }}
      >
        {}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-magenta-500/10 rounded-3xl blur-3xl"
          style={{
            transform: 'rotateX(75deg) rotateY(-4.5deg) translateZ(-150px) scale(1.3)',
            transformStyle: 'preserve-3d'
          }}
        />
        {}
        <div 
          className="grid grid-cols-4 gap-x-10 gap-y-10 auto-rows-[200px] relative"
          style={{
            transform: 'rotateX(51deg) rotateY(-6deg) rotateZ(-20deg) translateY(-17px) translateX(27px)',
            transformStyle: 'preserve-3d'
          }}
        >
          {demoCards.map((card, index) => {
            const Icon = card.icon;
            const levitationHeights = [50, 80, 65, 70, 55, 68];
            const baseHeight = levitationHeights[index] || 60;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, z: -300, rotateX: 90 }}
                animate={{ 
                  opacity: 1, 
                  z: baseHeight,
                  rotateX: 0,
                  y: [0, -15, 0], // Levitacija gore-dole
                }}
                transition={{ 
                  opacity: { delay: index * 0.15, duration: 0.8 },
                  z: { delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  rotateX: { delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  y: {
                    duration: 3 + index * 0.3, // Različite brzine za svaku karticu
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
                whileHover={{ 
                  z: baseHeight + 50,
                  y: -25, // Dodatno podigni ka gore na hover
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`${card.position} relative group cursor-pointer`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-40 blur-xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(163, 230, 53, 0.4), transparent 70%)',
                    transform: `translateZ(-${baseHeight}px) scale(1.1)`,
                    transformStyle: 'preserve-3d'
                  }}
                />
                {}
                <div className="h-full rounded-2xl overflow-hidden relative bg-black border-2 border-lime-400/30 hover:border-lime-400 transition-all duration-300">
                  {}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
                  </div>
                  {}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-200 pointer-events-none">
                    <div className="absolute top-1/4 right-8 w-8 h-1 bg-lime-400 animate-pulse" />
                    <div className="absolute bottom-1/3 left-12 w-6 h-1 bg-magenta-500 animate-pulse delay-100" />
                    <div className="absolute top-1/2 left-1/4 w-4 h-1 bg-cyan-400 animate-pulse delay-200" />
                  </div>
                  {}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-white z-10">
                    {}
                    <div className="relative mb-4">
                      <Icon className="w-16 h-16 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)] relative z-10" />
                      {}
                      <Icon className="w-16 h-16 text-magenta-500/40 absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {}
                    <h3 className="text-3xl font-black tracking-tight mb-2 relative">
                      <span className="relative z-10 text-white group-hover:text-lime-400 transition-colors duration-200">
                        {card.title}
                      </span>
                      {}
                      <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-80 animate-glitch-text-1" aria-hidden="true">
                        {card.title}
                      </span>
                      <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-80 animate-glitch-text-2" aria-hidden="true">
                        {card.title}
                      </span>
                    </h3>
                    {}
                    <div className="px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-sm font-mono">
                      {card.count}
                    </div>
                  </div>
                  {}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
                    <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
                  </div>
                  {}
                  <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-magenta-500 to-transparent" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-magenta-500 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {}
    </div>
  );
}
