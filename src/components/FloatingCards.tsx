'use client';
import { motion } from 'framer-motion';
import CodeSnippetCard from '@/components/cards/CodeSnippetCard';
import AboutMeCard from '@/components/cards/AboutMeCard';
import CertificatesCard from '@/components/cards/CertificatesCard';
import ContactCard from '@/components/cards/ContactCard';

export default function FloatingCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        <CodeSnippetCard />
        <AboutMeCard />
        <CertificatesCard />
        <ContactCard />
      </div>
    </motion.div>
  );
}
