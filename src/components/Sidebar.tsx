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
    <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-lime-400/30 hover:border-lime-400/50 transition-all duration-300 relative overflow-hidden">
      {/* Cyber scan line effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-scan" />
      </div>
      
      <h2 className="text-xs font-bold text-lime-400 mb-4 uppercase tracking-wider flex items-center gap-2 relative z-10">
        <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
        Explorer
      </h2>
      <div className="space-y-1 relative z-10">
        {folders.map((folder, index) => (
          <motion.div
            key={folder.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFolder(folder.id)}
              className="flex items-center w-full px-2 py-2 text-sm text-white hover:bg-lime-400/10 rounded-lg transition-all duration-200 group border border-transparent hover:border-lime-400/30"
            >
              {openFolders.includes(folder.id) ? (
                <ChevronDown className="w-4 h-4 mr-1 text-lime-400" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-1 text-magenta-400" />
              )}
              {openFolders.includes(folder.id) ? (
                <FolderOpen className="w-4 h-4 mr-2 text-lime-400 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]" />
              ) : (
                <Folder className="w-4 h-4 mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              )}
              <span className="group-hover:text-lime-400 transition-colors">{folder.name}</span>
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
                          className="flex items-center w-full px-2 py-1.5 text-sm text-white hover:bg-lime-400/10 rounded transition-all duration-200 group border border-transparent hover:border-lime-400/20"
                        >
                          {openFolders.includes(child.id) ? (
                            <ChevronDown className="w-3 h-3 mr-1 text-lime-400" />
                          ) : (
                            <ChevronRight className="w-3 h-3 mr-1 text-magenta-400" />
                          )}
                          {openFolders.includes(child.id) ? (
                            <FolderOpen className="w-3 h-3 mr-2 text-lime-400" />
                          ) : (
                            <Folder className="w-3 h-3 mr-2 text-cyan-400" />
                          )}
                          <span className="group-hover:text-lime-400 transition-colors">{child.name}</span>
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
                                className={`flex items-center w-full px-2 py-1.5 text-sm rounded transition-all duration-200 relative group ${
                                  activeSection === subChild.id
                                    ? 'bg-lime-400/20 text-lime-300 border-l-2 border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.3)]'
                                    : 'text-gray-300 hover:text-lime-400 hover:bg-lime-400/5 border-l-2 border-transparent hover:border-lime-400/30'
                                }`}
                              >
                                <FileText className={`w-3 h-3 mr-2 ${activeSection === subChild.id ? 'text-lime-400' : 'text-cyan-400 group-hover:text-lime-400'}`} />
                                <span className="font-mono text-xs">{subChild.name}</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <button
                        data-section={child.id}
                        onClick={() => setActiveSection(child.id)}
                        className={`flex items-center w-full px-2 py-1.5 text-sm rounded transition-all duration-200 relative group ${
                          activeSection === child.id
                            ? 'bg-lime-400/20 text-lime-300 border-l-2 border-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.3)]'
                            : 'text-gray-300 hover:text-lime-400 hover:bg-lime-400/5 border-l-2 border-transparent hover:border-lime-400/30'
                        }`}
                      >
                        <FileText className={`w-3 h-3 mr-2 ${activeSection === child.id ? 'text-lime-400' : 'text-cyan-400 group-hover:text-lime-400'}`} />
                        <span className="font-mono text-xs">{child.name}</span>
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
