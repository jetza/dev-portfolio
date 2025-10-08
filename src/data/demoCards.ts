import { Code2, Briefcase, Terminal, User, Mail, BookOpen, Award, GraduationCap, QrCode } from 'lucide-react';

export const demoCards = [
  { 
    id: 1, 
    title: 'Projects', 
    icon: Code2, 
    position: 'col-span-2 row-span-1',
    count: '12+'
  },
  { 
    id: 2, 
    title: 'Experience', 
    icon: Briefcase, 
    position: 'col-span-1 row-span-2',
    count: '5+ years'
  },
  { 
    id: 9, 
    title: 'Education', 
    icon: GraduationCap, 
    position: 'col-span-1 row-span-1',
    count: '3 degrees'
  },
  { 
    id: 4, 
    title: 'Code Snippets', 
    icon: Terminal, 
    position: 'col-span-1 row-span-1',
    count: '50+',
    isSpecial: 'codeEditor'
  },
  { 
    id: 10, 
    title: 'GitHub QR', 
    icon: QrCode, 
    position: 'col-span-1 row-span-1',
    count: 'Scan Me',
    isSpecial: 'qrCode'
  },
  { 
    id: 5, 
    title: 'About Me', 
    icon: User, 
    position: 'col-span-2 row-span-1',
    count: 'Full-Stack',
    isSpecial: 'idCard'
  },
  { 
    id: 6, 
    title: 'Skills', 
    icon: BookOpen, 
    position: 'col-span-2 row-span-1',
    count: '20+ tech'
  },
  { 
    id: 7, 
    title: 'Certificates', 
    icon: Award, 
    position: 'col-span-1 row-span-1',
    count: '8+'
  },
  { 
    id: 8, 
    title: 'Get In Touch', 
    icon: Mail, 
    position: 'col-span-1 row-span-1',
    count: '24/7',
    isSpecial: 'envelope'
  },
];

export const levitationHeights = [50, 80, 65, 70, 55, 68];
