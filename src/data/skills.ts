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
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'React Router', level: 80 },
      { name: 'Redux', level: 80 },
    ],
  },
  {
    category: 'Styling & Design',
    skills: [
      { name: 'SCSS/Sass', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Responsive Design', level: 90 },
      { name: 'CSS Animations', level: 80 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'ASP.NET Core', level: 65 },
      { name: 'REST API (Integration)', level: 90 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MS SQL Server', level: 75 },
      { name: 'Dataverse', level: 80 },
      { name: 'Prisma ORM', level: 70 },
    ],
  },
  {
    category: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Azure DevOps', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'Kubernetes', level: 55 },
      { name: 'RabbitMQ', level: 55 },
      { name: 'Jira', level: 80 },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { name: 'Power Apps', level: 80 },
      { name: 'Power Automate', level: 80 },
      { name: 'Power Pages', level: 70 },
      { name: 'Copilot Studio', level: 80 },
      { name: 'ChatGPT / GitHub Copilot', level: 85 },
    ],
  },
  {
    category: 'Testing',
    skills: [
      { name: 'Manual QA', level: 80 },
      { name: 'Unit Testing', level: 60 },
      { name: 'Debugging', level: 85 },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication & Teamwork', level: 95 },
      { name: 'Reliability & Responsiveness', level: 95 }, 
      { name: 'Mentoring & Event Organization', level: 90 },
      { name: 'Exploring New Technologies', level: 90 },
      { name: 'Public Speaking & Presentations', level: 90 },
    ],
  },
];


export const skillsContent = {
  title: 'Skills & Technologies',
  currentlyLearning: {
    title: 'Currently Learning',
    items: ['Generative AI & LLMs', 'AI Agent Development', 'Server Components (React 19)', 'Micro-Frontends Architecture']
  }
};
