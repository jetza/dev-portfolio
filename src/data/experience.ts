export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Freelance Frontend Developer',
    company: 'Self-Employed',
    location: 'Belgrade, Serbia (Remote)',
    period: 'May 2021 - Present',
    description: [
      'Developed and maintained responsive web applications using React, Next.js, and Vue.js',
      'Collaborated with clients to gather requirements and deliver custom web solutions',
      'Implemented modern UI/UX designs with Tailwind CSS and SCSS',
      'Integrated RESTful APIs and managed application state with Redux and Context API',
      'Optimized application performance and ensured cross-browser compatibility',
      'Built full-stack applications combining frontend with Node.js backend',
      'Worked with MySQL, PostgreSQL, and MongoDB databases',
      'Deployed applications on Vercel, Netlify, and traditional hosting platforms',
    ],
  },
];

export const experienceContent = {
  title: 'Work Experience'
};
