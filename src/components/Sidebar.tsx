'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronDown, 
  Folder, 
  FolderOpen, 
  FileText, 
  User, 
  Briefcase, 
  Code2, 
  Mail 
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface FolderItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SubItem[];
}

interface SubItem {
  id: string;
  name: string;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [openFolders, setOpenFolders] = useState<string[]>(['professional', 'personal']);

  const folders: FolderItem[] = [
    {
      id: 'professional',
      name: 'Professional Info',
      icon: Briefcase,
      children: [
        { id: 'experience', name: 'Experience' },
        { id: 'skills', name: 'Skills' },
        { id: 'certificates', name: 'Certificates' },
      ],
    },
    {
      id: 'personal',
      name: 'Personal Info',
      icon: User,
      children: [
        { id: 'about', name: 'About Me' },
        { id: 'hobbies', name: 'Hobbies' },
      ],
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: Code2,
      children: [
        { id: 'projects', name: 'All Projects' },
        { id: 'code-snippets', name: 'Code Snippets' },
      ],
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: Mail,
      children: [
        { id: 'contact', name: 'Get in Touch' },
      ],
    },
  ];

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
                <FolderOpen className="w-4 h-4 mr-2 text-purple-400" />
              ) : (
                <Folder className="w-4 h-4 mr-2 text-purple-400" />
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
                  <button
                    key={child.id}
                    onClick={() => setActiveSection(child.id)}
                    className={`flex items-center w-full px-2 py-1.5 text-sm rounded transition-all duration-200 ${
                      activeSection === child.id
                        ? 'bg-purple-600/30 text-purple-300 border-l-2 border-purple-400'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/30'
                    }`}
                  >
                    <FileText className="w-3 h-3 mr-2" />
                    <span>{child.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
