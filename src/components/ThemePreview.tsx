'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { demoCards } from '@/data/demoCards';
import FloatingGameButton from '@/components/FloatingGameButton';
import { 
  MiniQRCodeCard, 
  EnvelopeCard, 
  CodeEditorCard, 
  DeveloperIDCard,
  StandardCardContent,
  CardCornerDecorations
} from '@/components/cards/cyber';
import LikeCounter from '@/components/LikeCounter';
import ProjectsModal from '@/components/modals/ProjectsModal';
import ExperienceModal from '@/components/modals/ExperienceModal';
import HobbiesModal from '@/components/modals/HobbiesModal';
import SnippetsModal from '@/components/modals/SnippetsModal';
import AboutModal from '@/components/modals/AboutModal';
import SkillsModal from '@/components/modals/SkillsModal';
import CertificatesModal from '@/components/modals/CertificatesModal';
import ContactModal from '@/components/modals/ContactModal';
import EducationModal from '@/components/modals/EducationModal';
import GameModal from '@/components/modals/GameModal';
import QRModal from '@/components/modals/QRModal';

export default function ThemePreview() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState('');

  useEffect(() => {
    if (selectedCard !== null || isGameOpen || showQRModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (selectedCard === null) {
        setContactForm({ name: '', email: '', message: '' });
        setContactError('');
        setIsContactSubmitted(false);
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard, isGameOpen, showQRModal]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setContactError('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsContactSubmitted(true);
      setTimeout(() => {
        setIsContactSubmitted(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 3000);
    } catch (err) {
      setContactError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-black to-black" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-magenta-950/30 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto pt-2 mb-12 text-center relative z-10">
        <h1 className="text-5xl font-black text-white mb-4 relative">
          <span className="text-lime-400">Cyber</span>{' '}
          <motion.span 
            className="text-magenta-500 inline-block"
            animate={{
              x: [0, -2, 2, -2, 2, 0],
              textShadow: [
                '3px 0 0 rgba(255,0,0,0.7), -3px 0 0 rgba(0,255,255,0.7)',
                '-3px 0 0 rgba(255,0,0,0.7), 3px 0 0 rgba(0,255,255,0.7)',
                '3px 0 0 rgba(255,0,0,0.7), -3px 0 0 rgba(0,255,255,0.7)',
                '-3px 0 0 rgba(255,0,0,0.7), 3px 0 0 rgba(0,255,255,0.7)',
                '3px 0 0 rgba(255,0,0,0.7), -3px 0 0 rgba(0,255,255,0.7)',
                '0 0 0 transparent'
              ]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            Portfolio
          </motion.span>
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
            const levitationHeights = [50, 80, 65, 70, 55, 68, 60, 75, 68];
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
                  
                  const target = e.target as HTMLElement;
                  if (target.closest('[data-qr-wrapper="true"]')) {
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
                    <DeveloperIDCard />
                  ) : card.isSpecial === 'codeEditor' ? (
                    <CodeEditorCard count={card.count} />
                  ) : card.isSpecial === 'envelope' ? (
                    <EnvelopeCard />
                  ) : card.isSpecial === 'qrCode' ? (
                    <MiniQRCodeCard />
                  ) : (
                    <StandardCardContent 
                      icon={Icon}
                      title={card.title}
                      count={card.count}
                    />
                  )}
                  
                  <CardCornerDecorations />
                </div>
              </motion.div>
            );
          })}
          
          {/* Like Counter - Floating Heart in 3D grid (Education position) */}
          <motion.div
            initial={{ opacity: 0, z: -300, rotateX: 90 }}
            animate={{ 
              opacity: 1, 
              z: 68,
              rotateX: 0,
              y: [0, -15, 0],
            }}
            transition={{ 
              opacity: { delay: 1.35, duration: 0.8 },
              z: { delay: 1.35, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              rotateX: { delay: 1.35, duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              y: {
                duration: 3.5, 
                ease: "easeInOut",
                delay: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            whileHover={{ 
              z: 120,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="col-span-1 row-span-1 flex items-center justify-center relative pointer-events-auto"
            style={{
              transformStyle: 'preserve-3d',
              pointerEvents: 'auto'
            }}
          >
            <LikeCounter />
          </motion.div>
        </div>
      </div>
      
      <FloatingGameButton
        isVisible={!isGameOpen && selectedCard === null}
        onClick={() => {
          setSelectedCard(null);
          setIsGameOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {selectedCard === 1 && (
          <ProjectsModal
            key="projects-modal"
            isOpen={selectedCard === 1}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        {selectedCard === 2 && (
          <ExperienceModal
            key="experience-modal"
            isOpen={selectedCard === 2}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        {selectedCard === 3 && (
          <HobbiesModal
            key="hobbies-modal"
            isOpen={selectedCard === 3}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        {selectedCard === 4 && (
          <SnippetsModal
            key="snippets-modal"
            isOpen={selectedCard === 4}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        {selectedCard === 5 && (
          <AboutModal
            key="about-modal"
            isOpen={selectedCard === 5}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        {selectedCard === 6 && (
          <SkillsModal
            key="skills-modal"
            isOpen={selectedCard === 6}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        {selectedCard === 7 && (
          <CertificatesModal
            key="certificates-modal"
            isOpen={selectedCard === 7}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

          {selectedCard === 8 && (
            <ContactModal
              key="contact-modal"
              isOpen={selectedCard === 8}
              onClose={() => setSelectedCard(null)}
              cardPosition={cardPosition}
              contactForm={contactForm}
              error={contactError}
              isSubmitting={isSubmittingContact}
              isSubmitted={isContactSubmitted}
              onChange={handleContactChange}
              onSubmit={handleContactSubmit}
            />
          )}        {selectedCard === 9 && (
          <EducationModal
            key="education-modal"
            isOpen={selectedCard === 9}
            onClose={() => setSelectedCard(null)}
            cardPosition={cardPosition}
          />
        )}

        <GameModal
          isOpen={isGameOpen}
          onClose={() => setIsGameOpen(false)}
        />
      </AnimatePresence>

      <AnimatePresence>
        <QRModal
          isOpen={showQRModal}
          onClose={() => setShowQRModal(false)}
        />
      </AnimatePresence>
    </div>
  );
}








