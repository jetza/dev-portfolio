'use client';
import { motion } from 'framer-motion';

interface CodeEditorCardProps {
  count: string;
}

export default function CodeEditorCard({ count }: CodeEditorCardProps) {
  return (
    <div className="relative h-full flex flex-col p-4 text-white z-10">
      {/* Window controls */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      
      {/* Code content */}
      <div className="flex-1 flex flex-col justify-center font-mono text-xs space-y-1">
        <div className="text-gray-500">
          <span className="text-magenta-400">const</span>{' '}
          <span className="text-lime-400">skills</span> = {'{'}
        </div>
        <div className="text-gray-400 pl-4">
          frontend: <span className="text-cyan-400">&apos;React&apos;</span>,
        </div>
        <div className="text-gray-400 pl-4">
          backend: <span className="text-cyan-400">&apos;Node.js&apos;</span>
        </div>
        <div className="text-gray-500">{'}'}</div>
        
        {/* Terminal cursor */}
        <div className="flex items-center gap-1 pt-2">
          <span className="text-lime-400">&gt;</span>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-2 h-4 bg-lime-400"
          />
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-lime-400 text-xs font-bold mt-2">
        {count} Snippets
      </div>
    </div>
  );
}
