export interface Hobby {
  name: string;
  icon: string;
  description: string;
  color: string;
}

export const hobbies: Hobby[] = [
  {
    name: 'Coding',
    icon: 'Code2',
    description: 'Building side projects and exploring new technologies',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Design',
    icon: 'Palette',
    description: 'Creating beautiful UI/UX designs and digital art',
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Reading',
    icon: 'Book',
    description: 'Tech blogs, books about development and personal growth',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Music',
    icon: 'Music',
    description: 'Listening to various genres while coding',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Photography',
    icon: 'Camera',
    description: 'Capturing moments and exploring visual storytelling',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    name: 'Travel',
    icon: 'Plane',
    description: 'Exploring new places and cultures',
    color: 'from-red-500 to-red-600',
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
