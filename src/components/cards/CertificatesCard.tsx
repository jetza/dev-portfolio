'use client';
import { motion } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';

export default function CertificatesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -200px 0px' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-lime rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <div className="bg-lime-400/20 p-3 rounded-xl border border-lime-400/30 w-fit mb-4">
            <Award className="w-8 h-8 text-lime-400" />
          </div>
          
          <h3 className="text-xl font-bold text-lime-400 mb-2">Certificates</h3>
          <p className="text-gray-400 text-sm mb-4">
            Professional certifications and achievements
          </p>
          
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-gray-300 text-xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                <span>Certificate {i}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-lime-400/20">
          <span className="text-lime-400 text-sm font-semibold">View All</span>
          <ChevronRight className="w-5 h-5 text-lime-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
