import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    title: 'Full Stack Software Developer',
    location: 'Belgrade(Serbia), Banja Luka(Bosnia and Herzegovina), Remote',
    period: '2019 - Present',
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

// Educator Experience
export const educatorExperience: Experience[] = [
  {
    title: 'Lecturer',
    company: 'Seavus IT Edukativni Centar',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: 'Mar 2023 - Present',
    description: [
      'Developed and delivered engaging lessons on HTML, CSS, and Vanilla JavaScript to aspiring developers',
      'Prepared comprehensive course materials, exercises, and projects to enhance student learning',
      'Mentored students through hands-on coding challenges, fostering practical skills and confidence',
    ],
  },
  {
    title: 'Co-Organizer',
    company: 'INIT Conference (INITConf.org)',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: '2019 - Present',
    description: [
      'Co-organized INIT Conference, a regional tech event for developers, students, and tech enthusiasts',
      'Planned, coordinated, and executed conference agenda, speakers, workshops, and technical sessions',
      'Organized educational workshops as a preconf day',
      'Promoted conference through social media, local communities, and educational networks',
    ],
    link: 'https://initconf.org',
  },
  {
    title: 'Co-Organizer / Speaker / Educator',
    company: 'BLbit User Group',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: '2018 - Present',
    description: [
      'Organized developer events, workshops, and technical sessions for students and young professionals',
      'Found and coordinated speakers, venues, and promoted events through social media',
      'Conducted educational workshops and presentations on programming and technology for students',
    ],
    link: 'https://www.meetup.com/blbit/',
  },
  {
    title: 'Educator',
    company: 'European Code Week',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: '2019, 2022',
    description: [
      'Conducted Scratch programming workshops for children, introducing coding concepts in an interactive way',
      'Tailored sessions to various age groups, ensuring student engagement and understanding',
    ],
  },
  {
    title: 'Instructor',
    company: 'JSGuru',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: '2017 - 2018',
    description: [
      'Taught Python, robotics, and Scratch to children aged 6–14',
      'Designed and implemented curriculum, prepared students for competitions',
      'Managed daily educational activities and mentored young learners',
      'Technologies: Python, Scratch, mBots, micro:bits',
    ],
  },
  {
    title: 'Microsoft Student Ambassador',
    company: 'Microsoft Volunteering',
    location: 'Bosnia and Herzegovina',
    period: '2011 - 2017',
    description: [
      'Organized and lectured in coding workshops, C# courses, PowerPoint training, and STEM activities',
      'Conducted workshops in elementary schools, high schools, and faculties',
      'Mentored students in technical projects, hackathons, and regional competitions',
    ],
  },
  {
    title: 'Teaching Assistant & IT Support',
    company: 'Banja Luka College',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: '2013 - 2014',
    description: [
      'Assisted in teaching C++ courses for undergraduate students',
      'Provided technical support and mentoring to students',
    ],
  },
  {
    title: 'Consultant',
    company: 'Education Development Center (EDC/USAID)',
    location: 'Bosnia and Herzegovina',
    period: '2012 - 2013',
    description: [
      'Supported pilot project connecting students, teachers, and companies for IT internships',
      'Mentored students and coordinated with companies for practical learning opportunities',
    ],
  },
];

// Technical Support Experience
export const technicalSupportExperience: Experience[] = [
  {
    title: 'Technical Support & Troubleshooting',
    location: 'Various Projects',
    period: '2005 - Present',
    description: [
      'Provided technical support and troubleshooting for software applications and systems',
      'Resolved complex technical issues and provided solutions to clients',
      'Maintained and updated system documentation',
      'Collaborated with development teams to improve product quality',
    ],
  },
  {
    title: 'IT Support',
    company: 'Banja Luka College',
    location: 'Banja Luka, Bosnia and Herzegovina',
    period: '2013 - 2014',
    description: [
      'Provided IT support and system maintenance for college infrastructure',
      'Assisted faculty and students with technical issues',
      'Managed hardware and software installations and updates',
    ],
  },
];

export const experienceContent = {
  title: 'Work Experience',
  educator: {
    title: 'Education & Community',
    description: 'Teaching programming, organizing tech events, and mentoring students in technology and software development',
  },
  technicalSupport: {
    title: 'Technical Support',
    description: 'Providing technical assistance, troubleshooting, and maintaining IT infrastructure',
  },
};
