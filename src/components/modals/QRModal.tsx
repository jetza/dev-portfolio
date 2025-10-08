'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Portal from '@/components/Portal';
import QRCodeSVG from '@/components/icons/QRCodeSVG';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal key="qr-modal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
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
              <QRCodeSVG />
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
  );
}
