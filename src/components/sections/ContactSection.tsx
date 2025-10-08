'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, Linkedin, Github, Phone } from 'lucide-react';
import { contactData } from '@/data/contact';
const iconMap = {
  Linkedin,
  Github
};
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-2" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
          {contactData.title}
        </h2>
        <p className="text-gray-400 mb-6">
          {contactData.subtitle}
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 glass border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 glass border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-11 pr-4 py-3 glass border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all resize-none"
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
              className={`w-full py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${
                isSubmitted
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-lime-400 hover:bg-lime-300 text-black hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
        {}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div className="glass p-6 rounded-lg group relative overflow-hidden hover:border-lime-400/50 transition-all duration-300">
            {/* Cyber corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
            </div>
            
            <h3 className="text-xl font-semibold text-lime-400 mb-4 group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(163,230,53,0.5)] relative z-10">Contact Information</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-lime-400/20 p-2 rounded-lg border border-lime-400/30">
                  <Mail className="w-5 h-5 text-lime-400" />
                </div>
                <a href={`mailto:${contactData.email}`} className="hover:text-lime-400 transition-colors">{contactData.email}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-cyan-400/20 p-2 rounded-lg border border-cyan-400/30">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <span>{contactData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="bg-magenta-400/20 p-2 rounded-lg border border-magenta-400/30">
                  <Phone className="w-5 h-5 text-magenta-400" />
                </div>
                <span>{contactData.phone}</span>
              </div>
            </div>
          </div>
          <div className="glass p-6 rounded-lg group relative overflow-hidden hover:border-lime-400/50 transition-all duration-300">
            {/* Cyber corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-cyan-400 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-cyan-400 to-transparent" />
            </div>
            
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] relative z-10">Connect With Me</h3>
            <div className="flex gap-4 relative z-10">
              {contactData.socialLinks.map((link, idx) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                const colors = [
                  { bg: 'bg-lime-400/20', border: 'border-lime-400/30', text: 'text-lime-400', shadow: 'hover:shadow-[0_0_15px_rgba(163,230,53,0.4)]' },
                  { bg: 'bg-cyan-400/20', border: 'border-cyan-400/30', text: 'text-cyan-400', shadow: 'hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]' }
                ];
                const color = colors[idx % colors.length];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex items-center justify-center w-14 h-14 ${color.bg} border ${color.border} rounded-xl ${color.text} ${color.shadow} transition-all duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.a>
                );
              })}
            </div>
          </div>
          <div className="glass-lime p-6 rounded-lg group relative overflow-hidden">
            {/* Cyber corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-magenta-400 to-transparent" />
              <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-magenta-400 to-transparent" />
            </div>
            
            <h3 className="text-lg font-semibold text-magenta-400 mb-2 relative z-10 group-hover:text-white transition-colors">{contactData.closingMessage.title}</h3>
            <p className="text-gray-300 text-sm relative z-10">
              {contactData.closingMessage.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
