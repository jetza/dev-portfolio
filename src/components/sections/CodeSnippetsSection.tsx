'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Star, Info } from 'lucide-react';
import { codeSnippets, codeSnippetsContent } from '@/data/codeSnippets';

export default function CodeSnippetsSection() {
  const [selectedSnippet, setSelectedSnippet] = useState<number | null>(null);
  const [starredSnippets, setStarredSnippets] = useState<number[]>([]);

  const toggleStar = (id: number) => {
    setStarredSnippets(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          {codeSnippetsContent.title}
        </h2>
        <p className="text-gray-400 mb-6">
          {codeSnippetsContent.subtitle}
        </p>
      </motion.div>

      <div className="space-y-4">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={snippet.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-700/30 rounded-lg border border-gray-600 hover:border-purple-500 transition-all duration-300 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-purple-300 mb-1">{snippet.title}</h3>
                  <p className="text-gray-400 text-sm">{snippet.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedSnippet(selectedSnippet === snippet.id ? null : snippet.id)}
                    className="p-2 hover:bg-gray-600 rounded transition-colors"
                    title="Show explanation"
                  >
                    <Info className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                  </button>
                  <button
                    onClick={() => toggleStar(snippet.id)}
                    className="flex items-center gap-1 p-2 hover:bg-gray-600 rounded transition-colors"
                  >
                    <Star
                      className={`w-5 h-5 transition-colors ${
                        starredSnippets.includes(snippet.id)
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-gray-400 hover:text-yellow-500'
                      }`}
                    />
                    <span className="text-sm text-gray-400">
                      {snippet.stars + (starredSnippets.includes(snippet.id) ? 1 : 0)}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {snippet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedSnippet === snippet.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 p-4 bg-purple-900/20 rounded border border-purple-500/30"
                >
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Explanation:</h4>
                  <p className="text-gray-300 text-sm">{snippet.explanation}</p>
                </motion.div>
              )}

              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  language={snippet.language}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                  }}
                >
                  {snippet.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
