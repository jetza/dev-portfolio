import { 
  User, 
  Briefcase, 
  Code2, 
  Mail 
} from 'lucide-react';
import { FolderItem } from '@/types/sidebar';

export const folders: FolderItem[] = [
  {
    id: 'professional',
    name: 'Professional Info',
    icon: Briefcase,
    children: [
      { 
        id: 'experience', 
        name: 'Experience',
        children: [
          { id: 'experience', name: 'Software Development' },
          { id: 'educator', name: 'Education' },
        ]
      },
      { id: 'skills', name: 'Skills' },
      { id: 'certificates', name: 'Certificates' },
      { id: 'awards', name: 'Awards' },
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
