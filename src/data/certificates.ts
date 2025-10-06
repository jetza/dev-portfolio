export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Complete React Developer Course',
    issuer: 'Udemy',
    date: '2023',
    description: 'Comprehensive React course covering hooks, context, Redux, and building production-ready applications',
  },
  {
    title: 'Modern JavaScript From The Beginning',
    issuer: 'Udemy',
    date: '2022',
    description: 'Complete JavaScript course from fundamentals to advanced ES6+, async programming, and DOM manipulation',
  },
  {
    title: 'Vue.js - The Complete Guide',
    issuer: 'Udemy',
    date: '2023',
    description: 'In-depth Vue.js training including Vuex, Vue Router, and building SPAs',
  },
  {
    title: 'Next.js & React Framework',
    issuer: 'Online Course',
    date: '2024',
    description: 'Server-side rendering, static site generation, and building full-stack applications with Next.js',
  },
  {
    title: 'Tailwind CSS Masterclass',
    issuer: 'Online Platform',
    date: '2023',
    description: 'Utility-first CSS framework, responsive design, and modern UI development',
  },
  {
    title: 'TypeScript for React Developers',
    issuer: 'Online Course',
    date: '2023',
    description: 'TypeScript fundamentals, type safety, and integrating TypeScript with React applications',
  },
];

export const certificatesContent = {
  title: 'Certificates & Achievements',
  continuousLearning: {
    title: 'Continuous Learning',
    description: 'I believe in continuous improvement and staying updated with the latest technologies. Currently pursuing additional certifications in advanced React patterns and modern web architecture.'
  }
};
