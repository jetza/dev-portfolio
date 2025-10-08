'use client';
import { motion } from 'framer-motion';
import { Mail, X, User, MessageSquare, Send, CheckCircle, MapPin, ExternalLink } from 'lucide-react';
import { contactData } from '@/data/contact';
import Portal from '@/components/Portal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardPosition: { x: number; y: number } | null;
  contactForm: {
    name: string;
    email: string;
    message: string;
  };
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactModal({ 
  isOpen, 
  onClose, 
  cardPosition, 
  contactForm, 
  isSubmitting, 
  isSubmitted, 
  error, 
  onSubmit, 
  onChange 
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <Portal key="contact-modal">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        onClick={onClose} 
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
            rotateZ: -20 
          }} 
          animate={{ 
            scale: 1, 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotateX: 0, 
            rotateY: 0, 
            rotateZ: 0 
          }} 
          exit={{ 
            scale: 0.2, 
            opacity: 0, 
            x: cardPosition?.x || 0, 
            y: cardPosition?.y || 0, 
            rotateX: 51, 
            rotateY: -6, 
            rotateZ: -20 
          }} 
          transition={{ 
            type: 'spring', 
            damping: 25, 
            stiffness: 200, 
            duration: 0.6, 
            rotateX: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, 
            rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }, 
            rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
          }} 
          onClick={(e) => e.stopPropagation()} 
          className="relative max-w-2xl w-full max-h-[85vh] pointer-events-auto" 
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
                  <Mail className="w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                  <div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white">
                      {contactData.title}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{contactData.subtitle}</p>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }} 
                  whileTap={{ scale: 0.9 }} 
                  onClick={onClose} 
                  className="text-gray-400 hover:text-lime-400 transition-colors p-2 hover:bg-lime-400/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
                >
                  <h3 className="text-xl font-black text-lime-400 mb-4">Send Message</h3>
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="text" 
                          id="contact-name" 
                          name="name" 
                          value={contactForm.name} 
                          onChange={onChange} 
                          required 
                          className="w-full pl-11 pr-4 py-3 bg-black/50 border border-lime-400/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all" 
                          placeholder="Your name" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="email" 
                          id="contact-email" 
                          name="email" 
                          value={contactForm.email} 
                          onChange={onChange} 
                          required 
                          className="w-full pl-11 pr-4 py-3 bg-black/50 border border-lime-400/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all" 
                          placeholder="your.email@example.com" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea 
                          id="contact-message" 
                          name="message" 
                          value={contactForm.message} 
                          onChange={onChange} 
                          required 
                          rows={5} 
                          className="w-full pl-11 pr-4 py-3 bg-black/50 border border-lime-400/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all resize-none" 
                          placeholder="Tell me about your project..." 
                        />
                      </div>
                    </div>
                    
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}
                    
                    <motion.button 
                      type="submit" 
                      disabled={isSubmitting || isSubmitted} 
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }} 
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }} 
                      className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                        isSubmitted 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-lime-400 hover:bg-lime-300 text-black hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
                  >
                    <h3 className="text-xl font-black text-lime-400 mb-4">Contact Information</h3>
                    <div className="space-y-3 text-gray-300">
                      <p className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-lime-400" />
                        <a href={`mailto:${contactData.email}`} className="hover:text-lime-400 transition-colors">
                          {contactData.email}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{contactData.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-lime-400" />
                        {contactData.location}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.2 }} 
                    className="glass-lime rounded-xl p-6 border-2 border-lime-400/30"
                  >
                    <h3 className="text-xl font-black text-lime-400 mb-4">Social Links</h3>
                    <div className="space-y-3">
                      {contactData.socialLinks.map((link, idx) => (
                        <motion.a 
                          key={link.name} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          initial={{ opacity: 0, x: -20 }} 
                          animate={{ opacity: 1, x: 0 }} 
                          transition={{ delay: 0.1 * idx }} 
                          className="flex items-center gap-3 p-3 rounded-lg bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/30 hover:border-lime-400/50 transition-all group"
                        >
                          <ExternalLink className="w-5 h-5 text-lime-400 group-hover:text-magenta-400 transition-colors" />
                          <span className="text-gray-300 group-hover:text-lime-400 transition-colors font-bold">
                            {link.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Portal>
  );
}
