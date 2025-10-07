'use client';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificates, certificatesContent } from '@/data/certificates';
export default function CertificatesSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text mb-6" style={{backgroundImage: 'linear-gradient(to right, #ffffff, #a3e635, #ffffff)'}}>
          {certificatesContent.title}
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-5 rounded-lg hover:border-lime-400/50 transition-all duration-300 card-hover group"
          >
            <div className="flex items-start mb-3">
              <Award className="w-8 h-8 text-lime-400 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-lime-400">{cert.title}</h3>
                  {cert.category && (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      cert.category === 'Training' 
                        ? 'bg-lime-400/20 text-lime-300 border border-lime-400/30'
                        : cert.category === 'Course'
                        ? 'bg-lime-500/20 text-lime-300 border border-lime-500/30'
                        : 'bg-lime-600/20 text-lime-300 border border-lime-600/30'
                    }`}>
                      {cert.category}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lime-400 hover:text-lime-300 text-sm mb-3 transition-colors duration-200 group"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                <span className="underline underline-offset-2">View Certificate</span>
              </a>
            )}
            <div className="flex items-center text-gray-400 text-xs">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 glass-lime rounded-lg"
      >
        <h3 className="text-xl font-semibold text-lime-400 mb-3">{certificatesContent.continuousLearning.title}</h3>
        <p className="text-gray-300">
          {certificatesContent.continuousLearning.description}
        </p>
      </motion.div>
    </div>
  );
}
