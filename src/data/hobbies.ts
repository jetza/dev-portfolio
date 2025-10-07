export interface Hobby {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const hobbies: Hobby[] = [
  {
    name: 'Mentoring & Knowledge Sharing',
    icon: 'Users',
    description: 'I enjoy sharing knowledge and collaborating with others, especially through programming and education',
    color: 'from-lime-400 to-lime-500',
  },
  {
    name: 'Organizing IT Events',
    icon: 'Calendar',
    description: 'Actively engaged in the community and passionate about connecting people through IT events',
    color: 'from-lime-500 to-lime-600',
  },
  {
    name: 'Supporting Women & Kids in IT',
    icon: 'Heart',
    description: 'Strongly motivated to inspire new generations and provide support through technology',
    color: 'from-lime-300 to-lime-400',
  },
  {
    name: 'Creative Writing & Public Speaking',
    icon: 'MessageSquare',
    description: 'I like to combine creativity with presentation skills, especially when speaking about programming',
    color: 'from-lime-400 to-lime-600',
  },
  {
    name: 'Exploring New Technologies',
    icon: 'Lightbulb',
    description: 'In my free time, I explore new frameworks and tools, as programming inspires me beyond work',
    color: 'from-lime-500 to-green-500',
  },
  {
    name: 'Travel & Cultural Exploration',
    icon: 'Plane',
    description: 'Traveling brings me fresh perspectives and ideas that I later apply to my projects',
    color: 'from-green-500 to-lime-400',
  },
];

export const hobbiesContent = {
  title: 'Hobbies & Interests',
  subtitle: 'When I am not coding, I enjoy exploring various creative and recreational activities that keep me inspired and balanced.',
  philosophy: {
    title: 'Life Philosophy',
    description: 'I believe in maintaining a healthy work-life balance. These hobbies not only help me relax but also fuel my creativity and bring fresh perspectives to my development work. Every experience, whether coding or exploring the world, contributes to my growth as a developer and as a person.'
  }
};
