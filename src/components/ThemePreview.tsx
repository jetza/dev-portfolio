'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Code2, BookOpen, Award, Briefcase, GraduationCap, Heart, Terminal, User, Mail, X, ExternalLink, Calendar, MapPin, Building, Gamepad2, QrCode } from 'lucide-react';
import { hobbies, hobbiesContent } from '@/data/hobbies';
import GameSection from '@/components/GameSection';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { certificates } from '@/data/certificates';
import { codeSnippets } from '@/data/codeSnippets';
import { aboutData } from '@/data/about';
import { contactData } from '@/data/contact';
import Portal from '@/components/Portal';

export default function ThemePreview() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);

  useEffect(() => {
    if (selectedCard !== null || isGameOpen || showQRModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard, isGameOpen, showQRModal]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showQRModal) {
        setShowQRModal(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showQRModal]);
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
      title: 'Hobbies', 
      icon: Heart, 
      position: 'col-span-1 row-span-1',
      count: '∞'
    },
    { 
      id: 4, 
      title: 'Code Snippets', 
      icon: Terminal, 
      position: 'col-span-1 row-span-1',
      count: '50+',
      isSpecial: 'codeEditor'
    },
    { 
      id: 10, 
      title: 'GitHub QR', 
      icon: QrCode, 
      position: 'col-span-1 row-span-1',
      count: 'Scan Me',
      isSpecial: 'qrCode'
    },
    { 
      id: 5, 
      title: 'About Me', 
      icon: User, 
      position: 'col-span-2 row-span-1',
      count: 'Full-Stack',
      isSpecial: 'idCard'
    },
    { 
      id: 6, 
      title: 'Skills', 
      icon: BookOpen, 
      position: 'col-span-2 row-span-1',
      count: '20+ tech'
    },
    { 
      id: 7, 
      title: 'Certificates', 
      icon: Award, 
      position: 'col-span-1 row-span-1',
      count: '8+'
    },
    { 
      id: 8, 
      title: 'Get In Touch', 
      icon: Mail, 
      position: 'col-span-1 row-span-1',
      count: '24/7',
      isSpecial: 'envelope'
    },
    { 
      id: 9, 
      title: 'Education', 
      icon: GraduationCap, 
      position: 'col-span-1 row-span-1',
      count: '3 degrees'
    },
  ];
  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-magenta-950/30 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
        <h1 className="text-5xl font-black text-white mb-4">
          <span className="text-lime-400">3D</span> <span className="text-magenta-500">Portfolio</span>
        </h1>
      </div>
      <div 
        className="max-w-7xl mx-auto relative z-10"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '0% 68%'
        }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-magenta-500/10 rounded-3xl blur-3xl"
          style={{
            transform: 'rotateX(75deg) rotateY(-4.5deg) translateZ(-150px) scale(1.3)',
            transformStyle: 'preserve-3d'
          }}
        />
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
                  y: [0, -15, 0],
                }}
                transition={{ 
                  opacity: { delay: index * 0.15, duration: 0.8 },
                  z: { delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  rotateX: { delay: index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                  y: {
                    duration: 3 + index * 0.3, 
                    ease: "easeInOut",
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
                whileHover={{ 
                  z: baseHeight + 50,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={(e) => {
                  if (card.id === 10) {
                    setShowQRModal(true);
                    return;
                  }
                  
                  // Check if click came from QR wrapper or its children
                  const target = e.target as HTMLElement;
                  if (target.closest('[data-qr-wrapper="true"]')) {
                    // Don't open card modal if QR code area was clicked
                    return;
                  }
                  
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = window.innerWidth / 2;
                  const centerY = window.innerHeight / 2;
                  setCardPosition({
                    x: rect.left + rect.width / 2 - centerX,
                    y: rect.top + rect.height / 2 - centerY
                  });
                  setSelectedCard(card.id);
                }}
                className={`${card.position} relative group cursor-pointer`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-40 blur-xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(163, 230, 53, 0.4), transparent 70%)',
                    transform: `translateZ(-${baseHeight}px) scale(1.1)`,
                    transformStyle: 'preserve-3d'
                  }}
                />
                <div className="h-full rounded-2xl overflow-hidden relative bg-black border-2 border-lime-400/30 hover:border-lime-400 transition-all duration-300">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-200 pointer-events-none">
                    <div className="absolute top-1/4 right-8 w-8 h-1 bg-lime-400 animate-pulse" />
                    <div className="absolute bottom-1/3 left-12 w-6 h-1 bg-magenta-500 animate-pulse delay-100" />
                    <div className="absolute top-1/2 left-1/4 w-4 h-1 bg-cyan-400 animate-pulse delay-200" />
                  </div>
                  {card.isSpecial === 'idCard' ? (
                    <div className="relative h-full p-6 text-white z-10 flex flex-col overflow-hidden rounded-2xl">
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
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-[10px] font-bold tracking-wider text-lime-400">
                          DEVELOPER CREDENTIALS
                        </div>
                        <div className="flex items-center gap-1 text-[8px] text-green-400">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          VERIFIED
                        </div>
                      </div>
                      <div className="flex gap-4 flex-1">
                        <div className="w-32 flex items-center justify-center">
                          <div className="relative w-28 h-28 rounded-lg overflow-hidden border-2 border-lime-400/50 bg-gradient-to-br from-pink-100 to-pink-200">
                            <Image 
                              src="https://image.pngaaa.com/414/3288414-middle.png" 
                              alt="Princess Peach"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-yellow-400/10 animate-pulse" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center space-y-2 text-[10px]">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lime-400/60 font-mono text-[8px]">NAME:</span>
                            <span className="text-white font-bold">Jelena Miodragović</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-lime-400/60 font-mono text-[8px]">ROLE:</span>
                            <span className="text-cyan-400 text-[9px]">Full Stack Software Developer</span>
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
                  ) : card.isSpecial === 'codeEditor' ? (
                    <div className="relative h-full flex flex-col p-4 text-white z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center font-mono text-xs space-y-1">
                        <div className="text-gray-500">
                          <span className="text-magenta-400">const</span>{' '}
                          <span className="text-lime-400">skills</span> = {'{'}
                        </div>
                        <div className="text-gray-400 pl-4">
                          frontend: <span className="text-cyan-400">&apos;React&apos;</span>,
                        </div>
                        <div className="text-gray-400 pl-4">
                          backend: <span className="text-cyan-400">&apos;Node.js&apos;</span>
                        </div>
                        <div className="text-gray-500">{'}'}</div>
                        <div className="flex items-center gap-1 pt-2">
                          <span className="text-lime-400">&gt;</span>
                          <motion.div
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-4 bg-lime-400"
                          />
                        </div>
                      </div>
                      <div className="text-center text-lime-400 text-xs font-bold mt-2">
                        {card.count} Snippets
                      </div>
                    </div>
                  ) : card.isSpecial === 'envelope' ? (
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
                          whileHover={card.id === 8 ? {
                            x: [0, -2, 2, -1, 1, -2, 2, 0],
                            y: [0, 1, -1, 2, -2, 1, -1, 0],
                          } : {}}
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
                  ) : card.isSpecial === 'qrCode' ? (
                    <div className="relative h-full flex items-center justify-center p-6 text-white z-10">
                      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
                        <motion.div
                          animate={{ y: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute w-full h-12 bg-gradient-to-b from-transparent via-lime-400/50 to-transparent blur-sm"
                        />
                      </div>

                      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 z-10">
                        <div className="grid grid-cols-7 gap-2 p-4">
                          <div className="col-span-3 row-span-3 border-4 border-black rounded-lg p-1">
                            <motion.div 
                              animate={{ scale: [1, 0.9, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-full h-full bg-black rounded"
                            />
                          </div>
                          
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={`center-${i}`}
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                              className="aspect-square bg-black rounded"
                            />
                          ))}
                          
                          <div className="col-span-3 row-span-3 border-4 border-black rounded-lg p-1">
                            <motion.div 
                              animate={{ scale: [1, 0.9, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                              className="w-full h-full bg-black rounded"
                            />
                          </div>

                          {[...Array(7)].map((_, i) => (
                            <motion.div
                              key={`mid-${i}`}
                              animate={{ 
                                backgroundColor: i % 2 === 0 ? ['#000', '#a3e635', '#000'] : '#000',
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                              className="aspect-square bg-black rounded"
                            />
                          ))}

                          <div className="col-span-3 row-span-3 border-4 border-black rounded-lg p-1">
                            <motion.div 
                              animate={{ scale: [1, 0.9, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                              className="w-full h-full bg-black rounded"
                            />
                          </div>

                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={`bottom-${i}`}
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.05 }}
                              className="aspect-square bg-black rounded"
                            />
                          ))}
                        </div>

                        <motion.div
                          animate={{ 
                            opacity: [0.7, 1, 0.7],
                            textShadow: [
                              '0 0 10px rgba(163,230,53,0.5)',
                              '0 0 20px rgba(163,230,53,0.8)',
                              '0 0 10px rgba(163,230,53,0.5)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-lime-400 font-black text-lg tracking-wider"
                        >
                          CLICK TO SCAN
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-white z-10">
                      <div className="relative mb-4">
                        <Icon className="w-16 h-16 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)] relative z-10" />
                        <Icon className="w-16 h-16 text-magenta-500/40 absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="text-3xl font-black tracking-tight mb-2 relative">
                        <span className="relative z-10 text-white group-hover:text-lime-400 transition-colors duration-200">
                          {card.title}
                        </span>
                        <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-80 animate-glitch-text-1" aria-hidden="true">
                          {card.title}
                        </span>
                        <span className="absolute inset-0 text-cyan-400 opacity-0 group-hover:opacity-80 animate-glitch-text-2" aria-hidden="true">
                          {card.title}
                        </span>
                      </h3>
                      <div className="px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/30 text-lime-400 text-sm font-mono">
                        {card.count}
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
                    <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
                  </div>
                  
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
      
      <AnimatePresence>
        {!isGameOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              y: [0, -10, 0]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { delay: 1, type: 'spring', stiffness: 260, damping: 20 },
              opacity: { delay: 1, duration: 0.3 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            onClick={() => setIsGameOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-lime-400 to-magenta-500 flex items-center justify-center shadow-2xl shadow-lime-400/50 hover:shadow-lime-400/80 transition-shadow group"
          >
            <Gamepad2 className="w-8 h-8 text-black group-hover:scale-110 transition-transform" />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-lime-400/30"
            />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {selectedCard === 1 && (
          <Portal key="projects-modal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden"
            />
            
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ 
                  scale: 0.2,
                  opacity: 0,
                  x: cardPosition?.x || 0,
                  y: cardPosition?.y || 0,
                  rotateX: 51,
                  rotateY: -6,
                  rotateZ: -20,
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                }}
                exit={{ 
                  scale: 0.2,
                  opacity: 0,
                  x: cardPosition?.x || 0,
                  y: cardPosition?.y || 0,
                  rotateX: 51,
                  rotateY: -6,
                  rotateZ: -20,
                }}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 200,
                  duration: 0.6,
                  rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full max-h-[85vh] pointer-events-auto"
                style={{ perspective: '1400px' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70"
                  animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                />
                
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
                  </div>
                  
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Code2 className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                        <div>
                          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
                            Projects
                          </h2>
                          <p className="text-gray-400 text-sm mt-1">Showcase of my work</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedCard(null)}
                        className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"
                      >
                        <X className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="glass-lime rounded-xl p-6 border-2 border-lime-400/30 hover:border-lime-400/50 transition-all group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-black text-lime-400 group-hover:text-magenta-400 transition-colors">
                              {project.title}
                            </h3>
                            <div className="flex gap-2">
                              {project.github && (
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-lime-400 hover:text-magenta-400 transition-colors"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tech: string) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 text-xs font-bold bg-lime-400/10 text-lime-400 rounded-full border border-lime-400/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 2 && (
          <Portal key="experience-modal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden"
            />
            
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ 
                  scale: 0.2,
                  opacity: 0,
                  x: cardPosition?.x || 0,
                  y: cardPosition?.y || 0,
                  rotateX: 51,
                  rotateY: -6,
                  rotateZ: -20,
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                }}
                exit={{ 
                  scale: 0.2,
                  opacity: 0,
                  x: cardPosition?.x || 0,
                  y: cardPosition?.y || 0,
                  rotateX: 51,
                  rotateY: -6,
                  rotateZ: -20,
                }}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 200,
                  duration: 0.6,
                  rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[85vh] pointer-events-auto"
                style={{ perspective: '1400px' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70"
                  animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                />
                
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
                  </div>
                  
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Briefcase className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                        <div>
                          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
                            Experience
                          </h2>
                          <p className="text-gray-400 text-sm mt-1">Professional journey</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedCard(null)}
                        className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"
                      >
                        <X className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={`${exp.company}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="glass-lime rounded-xl p-6 border-2 border-lime-400/30 hover:border-lime-400/50 transition-all"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-black text-lime-400">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-3 mt-2 text-gray-400">
                                <div className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  <span className="font-bold">{exp.company}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-lime-400 text-sm">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((desc, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-lime-400 mt-1">▹</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="pt-4 border-t border-lime-400/20">
                            <p className="text-xs text-gray-400 mb-2">Tech Stack:</p>
                            <p className="text-sm text-lime-400 font-mono">{exp.techStack}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 3 && (
          <Portal key="hobbies-modal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden flex items-center justify-center p-4"
            />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ 
                  scale: 0.2,
                  opacity: 0,
                  x: cardPosition?.x || 0,
                  y: cardPosition?.y || 0,
                  rotateX: 51,
                  rotateY: -6,
                  rotateZ: -20,
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                }}
                exit={{ 
                  scale: 0.2,
                  opacity: 0,
                  x: cardPosition?.x || 0,
                  y: cardPosition?.y || 0,
                  rotateX: 51,
                  rotateY: -6,
                  rotateZ: -20,
                }}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 200,
                  duration: 0.6,
                  rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                  rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[85vh] pointer-events-auto"
                style={{ perspective: '1400px' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70"
                  animate={{
                    x: [0, -1, 1, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear"
                  }}
                />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
                  </div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Heart className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                        <div>
                          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
                            {hobbiesContent.title}
                          </h2>
                          <p className="text-gray-400 text-sm mt-1">{hobbiesContent.subtitle}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedCard(null)}
                        className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"
                      >
                        <X className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {hobbies.map((hobby, index) => (
                        <motion.div
                          key={hobby.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="glass-lime rounded-xl p-4 hover:border-lime-400 transition-all group"
                        >
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${hobby.color} flex items-center justify-center mb-3`}>
                            <Heart className="w-6 h-6 text-black" />
                          </div>
                          <h3 className="text-lg font-bold text-lime-400 mb-2 group-hover:text-white transition-colors">
                            {hobby.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {hobby.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="glass-lime rounded-xl p-6 border-2 border-lime-400/50"
                    >
                      <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-magenta-400 mb-4">
                        {hobbiesContent.philosophy.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {hobbiesContent.philosophy.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 4 && (
          <Portal key="snippets-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCard(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }} exit={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6, rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }} onClick={(e) => e.stopPropagation()} className="relative max-w-6xl w-full max-h-[85vh] pointer-events-auto" style={{ perspective: '1400px' }}>
                <motion.div className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" /></div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4"><Terminal className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" /><div><h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">Code Snippets</h2><p className="text-gray-400 text-sm mt-1">Reusable code patterns</p></div></div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"><X className="w-6 h-6" /></motion.button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 gap-6">{codeSnippets.map((snippet, index) => (<motion.div key={snippet.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400 mb-2">{snippet.title}</h3><p className="text-gray-400 text-sm mb-4">{snippet.description}</p><div className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-lime-400/20"><pre className="text-lime-400">{snippet.code}</pre></div><div className="flex flex-wrap gap-2 mt-4">{snippet.tags.map((tag: string) => (<span key={tag} className="px-3 py-1 text-xs font-bold bg-lime-400/10 text-lime-400 rounded-full border border-lime-400/30">{tag}</span>))}</div></motion.div>))}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 5 && (
          <Portal key="about-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCard(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }} exit={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6, rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full max-h-[85vh] pointer-events-auto" style={{ perspective: '1400px' }}>
                <motion.div className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" /></div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4"><User className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" /><div><h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">About Me</h2><p className="text-gray-400 text-sm mt-1">{aboutData.role}</p></div></div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"><X className="w-6 h-6" /></motion.button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-2xl font-black text-lime-400 mb-4">{aboutData.name}</h3><div className="space-y-3 text-gray-300">{aboutData.introduction.map((para, idx) => (<p key={idx} className="leading-relaxed">{para}</p>))}</div></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400 mb-4">Contact Info</h3><div className="space-y-2 text-gray-300"><p><span className="text-lime-400">📧 Email:</span> {aboutData.email}</p><p><span className="text-lime-400">📱 Phone:</span> {aboutData.phone}</p><p><span className="text-lime-400">📍 Location:</span> {aboutData.location}</p></div></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 6 && (
          <Portal key="skills-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCard(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }} exit={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6, rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full max-h-[85vh] pointer-events-auto" style={{ perspective: '1400px' }}>
                <motion.div className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" /></div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4"><BookOpen className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" /><div><h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">Skills</h2><p className="text-gray-400 text-sm mt-1">Technical expertise</p></div></div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"><X className="w-6 h-6" /></motion.button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-8">{skillCategories.map((category, catIndex) => (<motion.div key={category.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * catIndex }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-2xl font-black text-lime-400 mb-6">{category.category}</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{category.skills.map((skill) => (<div key={skill.name} className="space-y-2"><div className="flex justify-between items-center"><span className="text-gray-300 font-bold">{skill.name}</span><span className="text-lime-400 text-sm">{skill.level}%</span></div><div className="h-2 bg-black/50 rounded-full overflow-hidden border border-lime-400/20"><motion.div initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ delay: 0.2 + catIndex * 0.1, duration: 1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-lime-400 to-magenta-400" /></div></div>))}</div></motion.div>))}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 7 && (
          <Portal key="certificates-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCard(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }} exit={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6, rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }} onClick={(e) => e.stopPropagation()} className="relative max-w-5xl w-full max-h-[85vh] pointer-events-auto" style={{ perspective: '1400px' }}>
                <motion.div className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" /></div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4"><Award className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" /><div><h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">Certificates</h2><p className="text-gray-400 text-sm mt-1">Professional certifications</p></div></div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"><X className="w-6 h-6" /></motion.button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{certificates.map((cert, index) => (<motion.div key={cert.title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * index }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30 hover:border-lime-400/50 transition-all group"><div className="flex items-start justify-between mb-3"><h3 className="text-lg font-black text-lime-400 group-hover:text-magenta-400 transition-colors">{cert.title}</h3><Award className="w-6 h-6 text-lime-400" /></div><p className="text-gray-400 text-sm mb-2">{cert.issuer}</p><p className="text-gray-500 text-xs">{cert.date}</p>{cert.link && (<a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-lime-400 hover:text-magenta-400 transition-colors"><ExternalLink className="w-4 h-4" /><span>View Certificate</span></a>)}</motion.div>))}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 8 && (
          <Portal key="contact-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCard(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }} exit={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6, rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }} onClick={(e) => e.stopPropagation()} className="relative max-w-2xl w-full max-h-[85vh] pointer-events-auto" style={{ perspective: '1400px' }}>
                <motion.div className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" /></div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4"><Mail className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" /><div><h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">{contactData.title}</h2><p className="text-gray-400 text-sm mt-1">{contactData.subtitle}</p></div></div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"><X className="w-6 h-6" /></motion.button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400 mb-4">Contact Information</h3><div className="space-y-3 text-gray-300"><p className="flex items-center gap-2"><Mail className="w-5 h-5 text-lime-400" /><a href={`mailto:${contactData.email}`} className="hover:text-lime-400 transition-colors">{contactData.email}</a></p><p className="flex items-center gap-2"><span className="text-lime-400">📱</span>{contactData.phone}</p><p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-lime-400" />{contactData.location}</p></div></motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400 mb-4">Social Links</h3><div className="space-y-3">{contactData.socialLinks.map((link, idx) => (<motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * idx }} className="flex items-center gap-3 p-3 rounded-lg bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/30 hover:border-lime-400/50 transition-all group"><ExternalLink className="w-5 h-5 text-lime-400 group-hover:text-magenta-400 transition-colors" /><span className="text-gray-300 group-hover:text-lime-400 transition-colors font-bold">{link.name}</span></motion.a>))}</div></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {selectedCard === 9 && (
          <Portal key="education-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCard(null)} className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }} exit={{ scale: 0.2, opacity: 0, x: cardPosition?.x || 0, y: cardPosition?.y || 0, rotateX: 51, rotateY: -6, rotateZ: -20 }} transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6, rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }} onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full max-h-[85vh] pointer-events-auto" style={{ perspective: '1400px' }}>
                <motion.div className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 flex flex-col">
                  <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" /></div>
                  <div className="flex-shrink-0 bg-black/95 backdrop-blur-md p-6 border-b border-lime-400/30 z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4"><GraduationCap className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" /><div><h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">Education</h2><p className="text-gray-400 text-sm mt-1">Academic background</p></div></div>
                      <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedCard(null)} className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"><X className="w-6 h-6" /></motion.button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400">Bachelor&apos;s Degree</h3><p className="text-gray-400 mt-2">Faculty of Technical Sciences, Novi Sad</p><p className="text-gray-500 text-sm mt-1">Software Engineering • 2018 - 2022</p></motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400">High School</h3><p className="text-gray-400 mt-2">Electrical Engineering School</p><p className="text-gray-500 text-sm mt-1">Computer Science • 2014 - 2018</p></motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"><h3 className="text-xl font-black text-lime-400">Continuous Learning</h3><p className="text-gray-400 mt-2">Online courses, workshops, and self-study in modern web technologies</p></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}

        {isGameOpen && (
          <Portal key="game-modal">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsGameOpen(false)} 
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] overflow-hidden" 
            />
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none">
              <motion.div 
                initial={{ 
                  scale: 0.1, 
                  opacity: 0, 
                  x: window.innerWidth / 2 - 100,
                  y: window.innerHeight / 2 - 100,
                  rotate: 180
                }} 
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  x: 0, 
                  y: 0, 
                  rotate: 0
                }} 
                exit={{ 
                  scale: 0.1, 
                  opacity: 0, 
                  x: window.innerWidth / 2 - 100,
                  y: window.innerHeight / 2 - 100,
                  rotate: 180
                }} 
                transition={{ 
                  type: 'spring', 
                  damping: 25, 
                  stiffness: 200, 
                  duration: 0.6
                }} 
                onClick={(e) => e.stopPropagation()} 
                className="relative max-w-4xl w-full max-h-[85vh] pointer-events-auto" 
                style={{ perspective: '1400px' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black rounded-2xl border-2 border-lime-400/70" 
                  animate={{ x: [0, -1, 1, 0], opacity: [0.7, 1, 0.7] }} 
                  transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3, ease: "linear" }} 
                />
                <div className="relative bg-black rounded-2xl h-[85vh] border-2 border-lime-400/30 overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
                  </div>
                  
                  <GameSection setIsGameOpen={() => setIsGameOpen(false)} />
                </div>
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQRModal && (
          <Portal key="qr-modal">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowQRModal(false)}
                className="fixed inset-0 bg-black/95 backdrop-blur-md z-[10001] flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/10 rounded-full blur-3xl"
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <motion.h2
                      animate={{
                        x: [-2, 2, -2, 2, 0],
                        textShadow: [
                          '0 0 10px rgba(163,230,53,0.8), 2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5)',
                          '0 0 10px rgba(163,230,53,0.8), -2px 0 0 rgba(255,0,0,0.5), 2px 0 0 rgba(0,255,255,0.5)',
                          '0 0 10px rgba(163,230,53,0.8), 2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5)',
                          '0 0 10px rgba(163,230,53,0.8), -2px 0 0 rgba(255,0,0,0.5), 2px 0 0 rgba(0,255,255,0.5)',
                          '0 0 10px rgba(163,230,53,0.8)'
                        ]
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="text-6xl font-black text-lime-400 mb-2"
                    >
                      SCAN ME
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-gray-400 text-sm"
                    >
                      Click QR code to visit GitHub
                    </motion.p>
                  </motion.div>
                  <motion.a
                    href="https://github.com/jetza"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="relative w-80 h-80 bg-black rounded-2xl border-4 border-lime-400 p-4 shadow-2xl shadow-lime-400/50"
                    >
                      <motion.div
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-magenta-500/10 rounded-xl"
                      />
                      <svg viewBox="0 0 29 29" className="w-full h-full relative z-10">
                        <rect width="29" height="29" fill="white"/>
                        <rect x="0" y="0" width="1" height="1" fill="black"/><rect x="1" y="0" width="1" height="1" fill="black"/><rect x="2" y="0" width="1" height="1" fill="black"/><rect x="3" y="0" width="1" height="1" fill="black"/><rect x="4" y="0" width="1" height="1" fill="black"/><rect x="5" y="0" width="1" height="1" fill="black"/><rect x="6" y="0" width="1" height="1" fill="black"/><rect x="8" y="0" width="1" height="1" fill="black"/><rect x="10" y="0" width="1" height="1" fill="black"/><rect x="12" y="0" width="1" height="1" fill="black"/><rect x="14" y="0" width="1" height="1" fill="black"/><rect x="16" y="0" width="1" height="1" fill="black"/><rect x="22" y="0" width="1" height="1" fill="black"/><rect x="23" y="0" width="1" height="1" fill="black"/><rect x="24" y="0" width="1" height="1" fill="black"/><rect x="25" y="0" width="1" height="1" fill="black"/><rect x="26" y="0" width="1" height="1" fill="black"/><rect x="27" y="0" width="1" height="1" fill="black"/><rect x="28" y="0" width="1" height="1" fill="black"/>
                        <rect x="0" y="1" width="1" height="1" fill="black"/><rect x="6" y="1" width="1" height="1" fill="black"/><rect x="10" y="1" width="1" height="1" fill="black"/><rect x="14" y="1" width="1" height="1" fill="black"/><rect x="22" y="1" width="1" height="1" fill="black"/><rect x="28" y="1" width="1" height="1" fill="black"/>
                        <rect x="0" y="2" width="1" height="1" fill="black"/><rect x="2" y="2" width="1" height="1" fill="black"/><rect x="3" y="2" width="1" height="1" fill="black"/><rect x="4" y="2" width="1" height="1" fill="black"/><rect x="6" y="2" width="1" height="1" fill="black"/><rect x="8" y="2" width="1" height="1" fill="black"/><rect x="10" y="2" width="1" height="1" fill="black"/><rect x="14" y="2" width="1" height="1" fill="black"/><rect x="16" y="2" width="1" height="1" fill="black"/><rect x="18" y="2" width="1" height="1" fill="black"/><rect x="22" y="2" width="1" height="1" fill="black"/><rect x="24" y="2" width="1" height="1" fill="black"/><rect x="25" y="2" width="1" height="1" fill="black"/><rect x="26" y="2" width="1" height="1" fill="black"/><rect x="28" y="2" width="1" height="1" fill="black"/>
                        <rect x="0" y="3" width="1" height="1" fill="black"/><rect x="2" y="3" width="1" height="1" fill="black"/><rect x="3" y="3" width="1" height="1" fill="black"/><rect x="4" y="3" width="1" height="1" fill="black"/><rect x="6" y="3" width="1" height="1" fill="black"/><rect x="10" y="3" width="1" height="1" fill="black"/><rect x="12" y="3" width="1" height="1" fill="black"/><rect x="16" y="3" width="1" height="1" fill="black"/><rect x="22" y="3" width="1" height="1" fill="black"/><rect x="24" y="3" width="1" height="1" fill="black"/><rect x="25" y="3" width="1" height="1" fill="black"/><rect x="26" y="3" width="1" height="1" fill="black"/><rect x="28" y="3" width="1" height="1" fill="black"/>
                        <rect x="0" y="4" width="1" height="1" fill="black"/><rect x="2" y="4" width="1" height="1" fill="black"/><rect x="3" y="4" width="1" height="1" fill="black"/><rect x="4" y="4" width="1" height="1" fill="black"/><rect x="6" y="4" width="1" height="1" fill="black"/><rect x="8" y="4" width="1" height="1" fill="black"/><rect x="12" y="4" width="1" height="1" fill="black"/><rect x="16" y="4" width="1" height="1" fill="black"/><rect x="18" y="4" width="1" height="1" fill="black"/><rect x="22" y="4" width="1" height="1" fill="black"/><rect x="24" y="4" width="1" height="1" fill="black"/><rect x="25" y="4" width="1" height="1" fill="black"/><rect x="26" y="4" width="1" height="1" fill="black"/><rect x="28" y="4" width="1" height="1" fill="black"/>
                        <rect x="0" y="5" width="1" height="1" fill="black"/><rect x="6" y="5" width="1" height="1" fill="black"/><rect x="8" y="5" width="1" height="1" fill="black"/><rect x="10" y="5" width="1" height="1" fill="black"/><rect x="12" y="5" width="1" height="1" fill="black"/><rect x="16" y="5" width="1" height="1" fill="black"/><rect x="22" y="5" width="1" height="1" fill="black"/><rect x="28" y="5" width="1" height="1" fill="black"/>
                        <rect x="0" y="6" width="1" height="1" fill="black"/><rect x="1" y="6" width="1" height="1" fill="black"/><rect x="2" y="6" width="1" height="1" fill="black"/><rect x="3" y="6" width="1" height="1" fill="black"/><rect x="4" y="6" width="1" height="1" fill="black"/><rect x="5" y="6" width="1" height="1" fill="black"/><rect x="6" y="6" width="1" height="1" fill="black"/><rect x="8" y="6" width="1" height="1" fill="black"/><rect x="10" y="6" width="1" height="1" fill="black"/><rect x="12" y="6" width="1" height="1" fill="black"/><rect x="14" y="6" width="1" height="1" fill="black"/><rect x="16" y="6" width="1" height="1" fill="black"/><rect x="18" y="6" width="1" height="1" fill="black"/><rect x="22" y="6" width="1" height="1" fill="black"/><rect x="23" y="6" width="1" height="1" fill="black"/><rect x="24" y="6" width="1" height="1" fill="black"/><rect x="25" y="6" width="1" height="1" fill="black"/><rect x="26" y="6" width="1" height="1" fill="black"/><rect x="27" y="6" width="1" height="1" fill="black"/><rect x="28" y="6" width="1" height="1" fill="black"/>
                        <rect x="8" y="7" width="1" height="1" fill="black"/><rect x="10" y="7" width="1" height="1" fill="black"/><rect x="12" y="7" width="1" height="1" fill="black"/><rect x="16" y="7" width="1" height="1" fill="black"/>
                        <rect x="0" y="8" width="1" height="1" fill="black"/><rect x="2" y="8" width="1" height="1" fill="black"/><rect x="4" y="8" width="1" height="1" fill="black"/><rect x="6" y="8" width="1" height="1" fill="black"/><rect x="10" y="8" width="1" height="1" fill="black"/><rect x="12" y="8" width="1" height="1" fill="black"/><rect x="14" y="8" width="1" height="1" fill="black"/><rect x="16" y="8" width="1" height="1" fill="black"/><rect x="18" y="8" width="1" height="1" fill="black"/><rect x="20" y="8" width="1" height="1" fill="black"/><rect x="22" y="8" width="1" height="1" fill="black"/><rect x="24" y="8" width="1" height="1" fill="black"/><rect x="26" y="8" width="1" height="1" fill="black"/>
                        <rect x="3" y="9" width="1" height="1" fill="black"/><rect x="4" y="9" width="1" height="1" fill="black"/><rect x="6" y="9" width="1" height="1" fill="black"/><rect x="9" y="9" width="1" height="1" fill="black"/><rect x="11" y="9" width="1" height="1" fill="black"/><rect x="13" y="9" width="1" height="1" fill="black"/><rect x="15" y="9" width="1" height="1" fill="black"/><rect x="17" y="9" width="1" height="1" fill="black"/><rect x="20" y="9" width="1" height="1" fill="black"/><rect x="23" y="9" width="1" height="1" fill="black"/><rect x="26" y="9" width="1" height="1" fill="black"/><rect x="27" y="9" width="1" height="1" fill="black"/>
                        <rect x="0" y="10" width="1" height="1" fill="black"/><rect x="2" y="10" width="1" height="1" fill="black"/><rect x="5" y="10" width="1" height="1" fill="black"/><rect x="8" y="10" width="1" height="1" fill="black"/><rect x="10" y="10" width="1" height="1" fill="black"/><rect x="12" y="10" width="1" height="1" fill="black"/><rect x="13" y="10" width="1" height="1" fill="black"/><rect x="16" y="10" width="1" height="1" fill="black"/><rect x="18" y="10" width="1" height="1" fill="black"/><rect x="20" y="10" width="1" height="1" fill="black"/><rect x="22" y="10" width="1" height="1" fill="black"/><rect x="24" y="10" width="1" height="1" fill="black"/><rect x="27" y="10" width="1" height="1" fill="black"/>
                        <rect x="1" y="11" width="1" height="1" fill="black"/><rect x="3" y="11" width="1" height="1" fill="black"/><rect x="5" y="11" width="1" height="1" fill="black"/><rect x="8" y="11" width="1" height="1" fill="black"/><rect x="11" y="11" width="1" height="1" fill="black"/><rect x="13" y="11" width="1" height="1" fill="black"/><rect x="15" y="11" width="1" height="1" fill="black"/><rect x="17" y="11" width="1" height="1" fill="black"/><rect x="19" y="11" width="1" height="1" fill="black"/><rect x="21" y="11" width="1" height="1" fill="black"/><rect x="24" y="11" width="1" height="1" fill="black"/><rect x="27" y="11" width="1" height="1" fill="black"/>
                        <rect x="2" y="12" width="1" height="1" fill="black"/><rect x="4" y="12" width="1" height="1" fill="black"/><rect x="5" y="12" width="1" height="1" fill="black"/><rect x="8" y="12" width="1" height="1" fill="black"/><rect x="10" y="12" width="1" height="1" fill="black"/><rect x="12" y="12" width="1" height="1" fill="black"/><rect x="13" y="12" width="1" height="1" fill="black"/><rect x="14" y="12" width="1" height="1" fill="black"/><rect x="17" y="12" width="1" height="1" fill="black"/><rect x="19" y="12" width="1" height="1" fill="black"/><rect x="21" y="12" width="1" height="1" fill="black"/><rect x="23" y="12" width="1" height="1" fill="black"/><rect x="25" y="12" width="1" height="1" fill="black"/>
                        <rect x="0" y="13" width="1" height="1" fill="black"/><rect x="4" y="13" width="1" height="1" fill="black"/><rect x="6" y="13" width="1" height="1" fill="black"/><rect x="9" y="13" width="1" height="1" fill="black"/><rect x="10" y="13" width="1" height="1" fill="black"/><rect x="11" y="13" width="1" height="1" fill="black"/><rect x="13" y="13" width="1" height="1" fill="black"/><rect x="14" y="13" width="1" height="1" fill="black"/><rect x="18" y="13" width="1" height="1" fill="black"/><rect x="19" y="13" width="1" height="1" fill="black"/><rect x="21" y="13" width="1" height="1" fill="black"/><rect x="23" y="13" width="1" height="1" fill="black"/><rect x="25" y="13" width="1" height="1" fill="black"/><rect x="27" y="13" width="1" height="1" fill="black"/>
                        <rect x="0" y="14" width="1" height="1" fill="black"/><rect x="3" y="14" width="1" height="1" fill="black"/><rect x="4" y="14" width="1" height="1" fill="black"/><rect x="8" y="14" width="1" height="1" fill="black"/><rect x="10" y="14" width="1" height="1" fill="black"/><rect x="11" y="14" width="1" height="1" fill="black"/><rect x="12" y="14" width="1" height="1" fill="black"/><rect x="13" y="14" width="1" height="1" fill="black"/><rect x="16" y="14" width="1" height="1" fill="black"/><rect x="17" y="14" width="1" height="1" fill="black"/><rect x="18" y="14" width="1" height="1" fill="black"/><rect x="19" y="14" width="1" height="1" fill="black"/><rect x="21" y="14" width="1" height="1" fill="black"/><rect x="23" y="14" width="1" height="1" fill="black"/><rect x="24" y="14" width="1" height="1" fill="black"/><rect x="25" y="14" width="1" height="1" fill="black"/><rect x="27" y="14" width="1" height="1" fill="black"/>
                        <rect x="1" y="15" width="1" height="1" fill="black"/><rect x="2" y="15" width="1" height="1" fill="black"/><rect x="3" y="15" width="1" height="1" fill="black"/><rect x="7" y="15" width="1" height="1" fill="black"/><rect x="8" y="15" width="1" height="1" fill="black"/><rect x="11" y="15" width="1" height="1" fill="black"/><rect x="13" y="15" width="1" height="1" fill="black"/><rect x="14" y="15" width="1" height="1" fill="black"/><rect x="15" y="15" width="1" height="1" fill="black"/><rect x="16" y="15" width="1" height="1" fill="black"/><rect x="18" y="15" width="1" height="1" fill="black"/><rect x="19" y="15" width="1" height="1" fill="black"/><rect x="22" y="15" width="1" height="1" fill="black"/><rect x="23" y="15" width="1" height="1" fill="black"/><rect x="27" y="15" width="1" height="1" fill="black"/><rect x="28" y="15" width="1" height="1" fill="black"/>
                        <rect x="1" y="16" width="1" height="1" fill="black"/><rect x="3" y="16" width="1" height="1" fill="black"/><rect x="5" y="16" width="1" height="1" fill="black"/><rect x="6" y="16" width="1" height="1" fill="black"/><rect x="8" y="16" width="1" height="1" fill="black"/><rect x="10" y="16" width="1" height="1" fill="black"/><rect x="11" y="16" width="1" height="1" fill="black"/><rect x="13" y="16" width="1" height="1" fill="black"/><rect x="14" y="16" width="1" height="1" fill="black"/><rect x="18" y="16" width="1" height="1" fill="black"/><rect x="20" y="16" width="1" height="1" fill="black"/><rect x="21" y="16" width="1" height="1" fill="black"/><rect x="22" y="16" width="1" height="1" fill="black"/><rect x="23" y="16" width="1" height="1" fill="black"/><rect x="25" y="16" width="1" height="1" fill="black"/><rect x="28" y="16" width="1" height="1" fill="black"/>
                        <rect x="0" y="17" width="1" height="1" fill="black"/><rect x="4" y="17" width="1" height="1" fill="black"/><rect x="5" y="17" width="1" height="1" fill="black"/><rect x="6" y="17" width="1" height="1" fill="black"/><rect x="9" y="17" width="1" height="1" fill="black"/><rect x="13" y="17" width="1" height="1" fill="black"/><rect x="15" y="17" width="1" height="1" fill="black"/><rect x="17" y="17" width="1" height="1" fill="black"/><rect x="18" y="17" width="1" height="1" fill="black"/><rect x="20" y="17" width="1" height="1" fill="black"/><rect x="23" y="17" width="1" height="1" fill="black"/><rect x="25" y="17" width="1" height="1" fill="black"/><rect x="26" y="17" width="1" height="1" fill="black"/>
                        <rect x="0" y="18" width="1" height="1" fill="black"/><rect x="2" y="18" width="1" height="1" fill="black"/><rect x="3" y="18" width="1" height="1" fill="black"/><rect x="6" y="18" width="1" height="1" fill="black"/><rect x="8" y="18" width="1" height="1" fill="black"/><rect x="9" y="18" width="1" height="1" fill="black"/><rect x="12" y="18" width="1" height="1" fill="black"/><rect x="15" y="18" width="1" height="1" fill="black"/><rect x="17" y="18" width="1" height="1" fill="black"/><rect x="21" y="18" width="1" height="1" fill="black"/><rect x="22" y="18" width="1" height="1" fill="black"/><rect x="24" y="18" width="1" height="1" fill="black"/><rect x="26" y="18" width="1" height="1" fill="black"/><rect x="28" y="18" width="1" height="1" fill="black"/>
                        <rect x="2" y="19" width="1" height="1" fill="black"/><rect x="3" y="19" width="1" height="1" fill="black"/><rect x="5" y="19" width="1" height="1" fill="black"/><rect x="8" y="19" width="1" height="1" fill="black"/><rect x="9" y="19" width="1" height="1" fill="black"/><rect x="11" y="19" width="1" height="1" fill="black"/><rect x="12" y="19" width="1" height="1" fill="black"/><rect x="13" y="19" width="1" height="1" fill="black"/><rect x="14" y="19" width="1" height="1" fill="black"/><rect x="17" y="19" width="1" height="1" fill="black"/><rect x="18" y="19" width="1" height="1" fill="black"/><rect x="22" y="19" width="1" height="1" fill="black"/><rect x="24" y="19" width="1" height="1" fill="black"/><rect x="25" y="19" width="1" height="1" fill="black"/><rect x="26" y="19" width="1" height="1" fill="black"/><rect x="27" y="19" width="1" height="1" fill="black"/><rect x="28" y="19" width="1" height="1" fill="black"/>
                        <rect x="2" y="20" width="1" height="1" fill="black"/><rect x="4" y="20" width="1" height="1" fill="black"/><rect x="5" y="20" width="1" height="1" fill="black"/><rect x="10" y="20" width="1" height="1" fill="black"/><rect x="14" y="20" width="1" height="1" fill="black"/><rect x="15" y="20" width="1" height="1" fill="black"/><rect x="16" y="20" width="1" height="1" fill="black"/><rect x="19" y="20" width="1" height="1" fill="black"/><rect x="20" y="20" width="1" height="1" fill="black"/><rect x="22" y="20" width="1" height="1" fill="black"/><rect x="24" y="20" width="1" height="1" fill="black"/><rect x="26" y="20" width="1" height="1" fill="black"/><rect x="27" y="20" width="1" height="1" fill="black"/>
                        <rect x="8" y="21" width="1" height="1" fill="black"/><rect x="10" y="21" width="1" height="1" fill="black"/><rect x="11" y="21" width="1" height="1" fill="black"/><rect x="12" y="21" width="1" height="1" fill="black"/><rect x="14" y="21" width="1" height="1" fill="black"/><rect x="15" y="21" width="1" height="1" fill="black"/><rect x="16" y="21" width="1" height="1" fill="black"/><rect x="20" y="21" width="1" height="1" fill="black"/><rect x="21" y="21" width="1" height="1" fill="black"/><rect x="24" y="21" width="1" height="1" fill="black"/><rect x="25" y="21" width="1" height="1" fill="black"/><rect x="27" y="21" width="1" height="1" fill="black"/>
                        <rect x="0" y="22" width="1" height="1" fill="black"/><rect x="1" y="22" width="1" height="1" fill="black"/><rect x="2" y="22" width="1" height="1" fill="black"/><rect x="3" y="22" width="1" height="1" fill="black"/><rect x="4" y="22" width="1" height="1" fill="black"/><rect x="5" y="22" width="1" height="1" fill="black"/><rect x="6" y="22" width="1" height="1" fill="black"/><rect x="8" y="22" width="1" height="1" fill="black"/><rect x="10" y="22" width="1" height="1" fill="black"/><rect x="12" y="22" width="1" height="1" fill="black"/><rect x="14" y="22" width="1" height="1" fill="black"/><rect x="16" y="22" width="1" height="1" fill="black"/><rect x="17" y="22" width="1" height="1" fill="black"/><rect x="19" y="22" width="1" height="1" fill="black"/><rect x="20" y="22" width="1" height="1" fill="black"/><rect x="22" y="22" width="1" height="1" fill="black"/><rect x="23" y="22" width="1" height="1" fill="black"/><rect x="24" y="22" width="1" height="1" fill="black"/>
                        <rect x="0" y="23" width="1" height="1" fill="black"/><rect x="6" y="23" width="1" height="1" fill="black"/><rect x="8" y="23" width="1" height="1" fill="black"/><rect x="9" y="23" width="1" height="1" fill="black"/><rect x="11" y="23" width="1" height="1" fill="black"/><rect x="13" y="23" width="1" height="1" fill="black"/><rect x="16" y="23" width="1" height="1" fill="black"/><rect x="17" y="23" width="1" height="1" fill="black"/><rect x="18" y="23" width="1" height="1" fill="black"/><rect x="19" y="23" width="1" height="1" fill="black"/><rect x="20" y="23" width="1" height="1" fill="black"/><rect x="21" y="23" width="1" height="1" fill="black"/><rect x="24" y="23" width="1" height="1" fill="black"/><rect x="25" y="23" width="1" height="1" fill="black"/><rect x="27" y="23" width="1" height="1" fill="black"/>
                        <rect x="0" y="24" width="1" height="1" fill="black"/><rect x="2" y="24" width="1" height="1" fill="black"/><rect x="3" y="24" width="1" height="1" fill="black"/><rect x="4" y="24" width="1" height="1" fill="black"/><rect x="6" y="24" width="1" height="1" fill="black"/><rect x="10" y="24" width="1" height="1" fill="black"/><rect x="11" y="24" width="1" height="1" fill="black"/><rect x="14" y="24" width="1" height="1" fill="black"/><rect x="15" y="24" width="1" height="1" fill="black"/><rect x="16" y="24" width="1" height="1" fill="black"/><rect x="19" y="24" width="1" height="1" fill="black"/><rect x="20" y="24" width="1" height="1" fill="black"/><rect x="23" y="24" width="1" height="1" fill="black"/><rect x="24" y="24" width="1" height="1" fill="black"/><rect x="25" y="24" width="1" height="1" fill="black"/>
                        <rect x="0" y="25" width="1" height="1" fill="black"/><rect x="2" y="25" width="1" height="1" fill="black"/><rect x="3" y="25" width="1" height="1" fill="black"/><rect x="4" y="25" width="1" height="1" fill="black"/><rect x="6" y="25" width="1" height="1" fill="black"/><rect x="9" y="25" width="1" height="1" fill="black"/><rect x="10" y="25" width="1" height="1" fill="black"/><rect x="11" y="25" width="1" height="1" fill="black"/><rect x="12" y="25" width="1" height="1" fill="black"/><rect x="14" y="25" width="1" height="1" fill="black"/><rect x="15" y="25" width="1" height="1" fill="black"/><rect x="16" y="25" width="1" height="1" fill="black"/><rect x="18" y="25" width="1" height="1" fill="black"/><rect x="19" y="25" width="1" height="1" fill="black"/><rect x="20" y="25" width="1" height="1" fill="black"/><rect x="21" y="25" width="1" height="1" fill="black"/><rect x="22" y="25" width="1" height="1" fill="black"/><rect x="23" y="25" width="1" height="1" fill="black"/><rect x="24" y="25" width="1" height="1" fill="black"/><rect x="26" y="25" width="1" height="1" fill="black"/>
                        <rect x="0" y="26" width="1" height="1" fill="black"/><rect x="2" y="26" width="1" height="1" fill="black"/><rect x="3" y="26" width="1" height="1" fill="black"/><rect x="4" y="26" width="1" height="1" fill="black"/><rect x="6" y="26" width="1" height="1" fill="black"/><rect x="8" y="26" width="1" height="1" fill="black"/><rect x="9" y="26" width="1" height="1" fill="black"/><rect x="10" y="26" width="1" height="1" fill="black"/><rect x="11" y="26" width="1" height="1" fill="black"/><rect x="13" y="26" width="1" height="1" fill="black"/><rect x="14" y="26" width="1" height="1" fill="black"/><rect x="16" y="26" width="1" height="1" fill="black"/><rect x="18" y="26" width="1" height="1" fill="black"/><rect x="22" y="26" width="1" height="1" fill="black"/><rect x="23" y="26" width="1" height="1" fill="black"/><rect x="25" y="26" width="1" height="1" fill="black"/><rect x="26" y="26" width="1" height="1" fill="black"/><rect x="27" y="26" width="1" height="1" fill="black"/>
                        <rect x="0" y="27" width="1" height="1" fill="black"/><rect x="6" y="27" width="1" height="1" fill="black"/><rect x="8" y="27" width="1" height="1" fill="black"/><rect x="9" y="27" width="1" height="1" fill="black"/><rect x="13" y="27" width="1" height="1" fill="black"/><rect x="14" y="27" width="1" height="1" fill="black"/><rect x="15" y="27" width="1" height="1" fill="black"/><rect x="16" y="27" width="1" height="1" fill="black"/><rect x="19" y="27" width="1" height="1" fill="black"/><rect x="20" y="27" width="1" height="1" fill="black"/><rect x="22" y="27" width="1" height="1" fill="black"/><rect x="23" y="27" width="1" height="1" fill="black"/><rect x="24" y="27" width="1" height="1" fill="black"/><rect x="25" y="27" width="1" height="1" fill="black"/><rect x="26" y="27" width="1" height="1" fill="black"/><rect x="27" y="27" width="1" height="1" fill="black"/>
                        <rect x="0" y="28" width="1" height="1" fill="black"/><rect x="1" y="28" width="1" height="1" fill="black"/><rect x="2" y="28" width="1" height="1" fill="black"/><rect x="3" y="28" width="1" height="1" fill="black"/><rect x="4" y="28" width="1" height="1" fill="black"/><rect x="5" y="28" width="1" height="1" fill="black"/><rect x="6" y="28" width="1" height="1" fill="black"/><rect x="8" y="28" width="1" height="1" fill="black"/><rect x="11" y="28" width="1" height="1" fill="black"/><rect x="13" y="28" width="1" height="1" fill="black"/><rect x="15" y="28" width="1" height="1" fill="black"/><rect x="16" y="28" width="1" height="1" fill="black"/><rect x="18" y="28" width="1" height="1" fill="black"/><rect x="20" y="28" width="1" height="1" fill="black"/><rect x="21" y="28" width="1" height="1" fill="black"/><rect x="24" y="28" width="1" height="1" fill="black"/><rect x="25" y="28" width="1" height="1" fill="black"/><rect x="27" y="28" width="1" height="1" fill="black"/>
                      </svg>
                      <motion.div
                        className="absolute inset-0 border-2 border-lime-400 rounded-xl"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          boxShadow: [
                            '0 0 20px rgba(163,230,53,0.3)',
                            '0 0 40px rgba(163,230,53,0.8)',
                            '0 0 20px rgba(163,230,53,0.3)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </motion.a>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 text-sm"
                  >
                    Press ESC or click outside to close
                  </motion.p>
                </div>
              </motion.div>
            </Portal>
          )}
      </AnimatePresence>
    </div>
  );
}








