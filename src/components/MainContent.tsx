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
  isGameOpen: boolean;
}
export default function MainContent({ activeSection, isGameOpen }: MainContentProps) {
  const sections: { [key: string]: React.ReactElement } = {
    about: <AboutSection />,
    experience: <ExperienceSection />,
    educator: <EducatorSection />,
    skills: <SkillsSection />,
    certificates: <CertificatesSection />,
    awards: <AwardsSection />,
    hobbies: <HobbiesSection />,
    projects: <ProjectsSection isGameOpen={isGameOpen} />,
    'code-snippets': <CodeSnippetsSection />,
    contact: <ContactSection />,
  };
  return (
    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-lime-400/30 hover:border-lime-400/50 transition-all duration-300 min-h-[600px] relative overflow-hidden">
      {/* Cyber scan line effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-lime-400 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-lime-400 to-transparent" />
      </div>
      
      <div className="relative z-10">
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
    </div>
  );
}
