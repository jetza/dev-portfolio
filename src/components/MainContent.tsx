'use client';

import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import EducatorSection from './sections/EducatorSection';
import SkillsSection from './sections/SkillsSection';
import CertificatesSection from './sections/CertificatesSection';
import AwardsSection from './sections/AwardsSection';
import HobbiesSection from './sections/HobbiesSection';
import ProjectsSection from './sections/ProjectsSection';
import CodeSnippetsSection from './sections/CodeSnippetsSection';
import ContactSection from './sections/ContactSection';

interface MainContentProps {
  activeSection: string;
}

const sections: { [key: string]: React.ReactElement } = {
  about: <AboutSection />,
  experience: <ExperienceSection />,
  educator: <EducatorSection />,
  skills: <SkillsSection />,
  certificates: <CertificatesSection />,
  awards: <AwardsSection />,
  hobbies: <HobbiesSection />,
  projects: <ProjectsSection />,
  'code-snippets': <CodeSnippetsSection />,
  contact: <ContactSection />,
};

export default function MainContent({ activeSection }: MainContentProps) {
  return (
    <div className="glass rounded-2xl p-8 border border-gray-700/50 min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {sections[activeSection] || <AboutSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
