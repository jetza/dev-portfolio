export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Technologies',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
    ],
  },
  {
    category: 'Styling & Design',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'SCSS/Sass', level: 85 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'CSS Animations', level: 85 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'REST APIs', level: 85 },
      { name: 'Redux', level: 80 },
      { name: 'Vercel/Netlify', level: 85 },
    ],
  },
];

export const skillsContent = {
  title: 'Skills & Technologies',
  currentlyLearning: {
    title: 'Currently Learning',
    items: ['Three.js', 'WebGL', 'Advanced Animations', 'GraphQL']
  }
};
