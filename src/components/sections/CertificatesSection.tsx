'use client';

import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { certificates, certificatesContent } from '@/data/certificates';

export default function CertificatesSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
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
            className="bg-gray-700/30 p-5 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 card-hover"
          >
            <div className="flex items-start mb-3">
              <Award className="w-8 h-8 text-purple-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
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
        className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/30"
      >
        <h3 className="text-xl font-semibold text-purple-300 mb-3">{certificatesContent.continuousLearning.title}</h3>
        <p className="text-gray-300">
          {certificatesContent.continuousLearning.description}
        </p>
      </motion.div>
    </div>
  );
}
