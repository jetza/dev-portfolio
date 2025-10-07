'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown, 
  Folder, 
  FolderOpen, 
  FileText
} from 'lucide-react';
import { folders } from '@/data/sidebar';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [openFolders, setOpenFolders] = useState<string[]>(['professional', 'personal', 'projects']);

  const toggleFolder = (folderId: string) => {
    setOpenFolders(prev =>
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
      <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
        Explorer
      </h2>
      <div className="space-y-1">
        {folders.map((folder, index) => (
          <motion.div
            key={folder.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFolder(folder.id)}
              className="flex items-center w-full px-2 py-2 text-sm text-gray-300 hover:bg-gray-700/50 rounded transition-colors duration-200"
            >
              {openFolders.includes(folder.id) ? (
                <ChevronDown className="w-4 h-4 mr-1" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-1" />
              )}
              {openFolders.includes(folder.id) ? (
                <FolderOpen className="w-4 h-4 mr-2 text-lime-400" />
              ) : (
                <Folder className="w-4 h-4 mr-2 text-lime-400" />
              )}
              <span>{folder.name}</span>
            </button>

            {openFolders.includes(folder.id) && folder.children && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="ml-6 mt-1 space-y-1"
              >
                {folder.children.map((child) => (
                  <div key={child.id}>
                    {child.children ? (
                      <>
                        <button
                          onClick={() => toggleFolder(child.id)}
                          className="flex items-center w-full px-2 py-1.5 text-sm text-gray-300 hover:bg-gray-700/50 rounded transition-colors duration-200"
                        >
                          {openFolders.includes(child.id) ? (
                            <ChevronDown className="w-3 h-3 mr-1" />
                          ) : (
                            <ChevronRight className="w-3 h-3 mr-1" />
                          )}
                          {openFolders.includes(child.id) ? (
                            <FolderOpen className="w-3 h-3 mr-2 text-lime-400" />
                          ) : (
                            <Folder className="w-3 h-3 mr-2 text-lime-400" />
                          )}
                          <span>{child.name}</span>
                        </button>
                        {openFolders.includes(child.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-1 space-y-1"
                          >
                            {child.children.map((subChild) => (
                              <button
                                key={subChild.id}
                                data-section={subChild.id}
                                onClick={() => setActiveSection(subChild.id)}
                                className={`flex items-center w-full px-2 py-1.5 text-sm rounded transition-all duration-200 ${
                                  activeSection === subChild.id
                                    ? 'bg-lime-400/20 text-lime-300 border-l-2 border-lime-400'
                                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                                }`}
                              >
                                <FileText className="w-3 h-3 mr-2" />
                                <span>{subChild.name}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <button
                        data-section={child.id}
                        onClick={() => setActiveSection(child.id)}
                        className={`flex items-center w-full px-2 py-1.5 text-sm rounded transition-all duration-200 ${
                          activeSection === child.id
                            ? 'bg-lime-400/20 text-lime-300 border-l-2 border-lime-400'
                            : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                        }`}
                      >
                        <FileText className="w-3 h-3 mr-2" />
                        <span>{child.name}</span>
                      </button>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
