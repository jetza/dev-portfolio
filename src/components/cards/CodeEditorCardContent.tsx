'use client';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const code = [
  'const developer = {',
  '  name: "Jelena M.",',
  '  passion: "coding",',
  '  style: "cyber"',
  '};',
  '',
  'console.log(',
  '  developer.name',
  ');'
];

export default function CodeEditorCardContent() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= code.length) {
      const timeout = setTimeout(() => {
        setTypedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentLine = code[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const newLines = [...typedLines];
      newLines[currentLineIndex] = currentLine;
      setTypedLines(newLines);
      setCurrentLineIndex(prev => prev + 1);
      setCurrentCharIndex(0);
    }
  }, [currentLineIndex, currentCharIndex, typedLines]);

  return (
    <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-black/90">
      <div className="bg-gradient-to-r from-lime-400/20 to-cyan-400/20 px-4 py-2 flex items-center justify-between border-b border-lime-400/30">
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3 text-lime-400" />
          <span className="text-[10px] text-lime-400 font-mono">terminal.js</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <div className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-hidden">
        <div className="font-mono text-[9px] space-y-1">
          {typedLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex"
            >
              <span className="text-lime-400/50 mr-3 select-none">{String(i + 1).padStart(2, '0')}</span>
              <span className={
                line.includes('const') ? 'text-magenta-400' :
                line.includes('name') || line.includes('passion') || line.includes('style') ? 'text-cyan-400' :
                line.includes('console') ? 'text-yellow-400' :
                'text-white/80'
              }>
                {line}
              </span>
            </motion.div>
          ))}
          {currentLineIndex < code.length && (
            <div className="flex">
              <span className="text-lime-400/50 mr-3 select-none">
                {String(currentLineIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-white/80">
                {code[currentLineIndex].substring(0, currentCharIndex)}
                <span className="inline-block w-1.5 h-3 bg-lime-400 ml-0.5 animate-pulse" />
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-2 border-t border-lime-400/30 bg-black/50">
        <div className="flex items-center justify-between text-[8px] font-mono">
          <span className="text-lime-400">50+ code snippets</span>
          <span className="text-cyan-400">JavaScript • TypeScript • Python</span>
        </div>
      </div>
    </div>
  );
}
