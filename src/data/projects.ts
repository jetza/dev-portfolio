import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Next.js Betting Platform',
    description: 'Enterprise betting application with multi-game support (Poker, Soccer, Lotto, Casino), OCR, face recognition, and online transactions.',
    fullDescription: 'A comprehensive enterprise-level betting platform built with Next.js and React. The application supports multiple gaming categories including Poker, Soccer betting, Lotto, and Casino games. Features advanced user verification through OCR and face recognition technologies, secure online transactions, and a robust content management system.',
    tags: ['Next.js', 'React', 'Zustand', 'Identity Server', 'OCR'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 28,
    image: '🎰',
    duration: 'May 2024 - Nov 2024',
    responsibilities: [
      'Implemented new features and improvements for existing functionality',
      'Created custom components instead of relying on third-party libraries',
      'Integrated InCode, OCR, and face recognition platforms',
      'Implemented design specifications from InVision',
      'Conducted testing and bug fixing in collaboration with QA team',
      'Added content and translations through customized tools',
      'Daily work management using Jira'
    ],
    features: [
      'Multi-game betting system (Poker, Soccer, Lotto, Casino)',
      'Account creation and editing with full user management',
      'OCR and face recognition for identity verification',
      'Secure online transaction processing',
      'Multi-language support with translation management',
      'Responsive design for all devices'
    ],
    teamSize: 'Enterprise team (10+ members)'
  },
  {
    title: 'React Native Business App',
    description: 'Mini social network platform with friend requests, interest-based user discovery, real-time chat, and meeting scheduling.',
    fullDescription: 'A comprehensive mobile business application built with React Native for both iOS and Android platforms. This mini social network allows users to connect based on shared interests and location, facilitating professional networking and collaboration.',
    tags: ['React Native', 'Node.js', 'Prisma', 'Docker', 'Google API'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 25,
    image: '📱',
    duration: 'Aug 2023 - Apr 2024',
    responsibilities: [
      'Implemented new features and suggested improvements',
      'Created custom components for missing native elements',
      'Implemented designs from Figma and created new UI elements using Affinity Designer',
      'Self-initiated testing and bug fixing, collaborated with QA team',
      'Managed daily tasks through Jira'
    ],
    features: [
      'Friend request system with user discovery',
      'Interest-based and location-based user search',
      'Real-time chat functionality',
      'Meeting scheduling system',
      'User profile management',
      'Cross-platform mobile support (iOS & Android)'
    ],
    teamSize: 'Small team (3-5 members)'
  },
  {
    title: 'Generative AI Content Creator',
    description: 'React app demonstrating Generative AI services: text-to-image (DALL-E), image-to-text, object detection, speech recognition, and text-to-video.',
    fullDescription: 'A demonstration React application showcasing the capabilities of various Generative AI services for multimedia content creation. Built as conference material to demonstrate the power of AI integration in modern web applications.',
    tags: ['React', 'Redux', 'OpenAI', 'D-ID API', 'Web Speech API'],
    github: 'https://github.com/jetza/Generative-AI-Services-Demo',
    demo: 'https://github.com/jetza/Generative-AI-Services-Demo',
    stars: 22,
    image: '🤖',
    duration: '1 month',
    responsibilities: [
      'Integrated multiple AI services (OpenAI, D-ID, API Ninjas)',
      'Implemented speech recognition and synthesis',
      'Created user-friendly interface for AI interactions',
      'Prepared demo for conference presentation'
    ],
    features: [
      'Text to Image generation using DALL-E',
      'Image to Text (OCR) extraction',
      'Object detection in images',
      'Speech recognition (voice to text)',
      'Text to Speech synthesis',
      'Text to Video generation with subtitles',
      'Video preview and playback'
    ],
    teamSize: 'Solo project'
  },
  {
    title: 'Stack Overflow Clone',
    description: 'Corporate Q&A platform for developers with questions/answers, abstract integration module, and Elastic Search.',
    fullDescription: 'A custom forum-like application for internal purposes and improving collaboration between developers in the company. Platform represents a corporate Q&A where users can post architectural, design or development questions, and others can provide answers.',
    tags: ['.NET Core', 'React', 'SCSS', 'MS SQL', 'Elastic Search', 'TypeScript'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 20,
    image: '💬',
    duration: '8 months',
    responsibilities: [
      'Development of new and maintenance of existing functionalities on frontend and backend',
      'Manual testing, finding/reporting and fixing bugs',
      'Write maintainable and extensible code in team environment',
      'Maintain source code using version control',
      'Writing documentation',
      'Code review'
    ],
    features: [
      'Q&A platform for technical questions',
      'Abstract integration module for internal systems',
      'Elastic Search for fast query results',
      'User authentication and authorization',
      'Voting system for answers',
      'Tag-based categorization'
    ],
    teamSize: 'Medium team (5-10 members)'
  },
  {
    title: 'Vehicle Technical Info Portal',
    description: 'Comprehensive technical information tool for car workshops with service, maintenance, diagnostic and repair procedures.',
    fullDescription: 'Online source of technical information for cars, vans and motorcycles. This application is an online tool for workshops, providing comprehensive technical information for vehicle service, maintenance, diagnostic and repair procedures.',
    tags: ['React', 'Redux', '.NET 6', 'REST API', 'SQL Server', 'Azure'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 18,
    image: '🚗',
    duration: 'Jun 2022 - May 2023',
    responsibilities: [
      'Implementing new features and improvement of existing features',
      'Creating new components',
      'Manual testing, finding/reporting and fixing bugs on frontend',
      'Implementing design using graphic tools',
      'Maintain source code using version control',
      'Daily communication with backend team and QA'
    ],
    features: [
      'Vehicle technical specifications database',
      'Service and maintenance schedules',
      'Diagnostic procedures and error codes',
      'Repair instructions with diagrams',
      'Parts catalog with pricing',
      'Search by vehicle make, model, and year'
    ],
    teamSize: 'Medium team (5-8 members)'
  },
  {
    title: 'IoT Mobile App & Bluetooth Service',
    description: 'Android/iOS app for smart lighting control via Bluetooth LE and Wi-Fi, with Azure cloud integration and RaspberryPi simulation.',
    fullDescription: 'Mobile application for client\'s standalone and connected lighting product. Product connects to local network and Azure cloud through Wi-Fi, and establishes direct connection to smartphones/tablets via Bluetooth. Users can register products and issue commands through the app.',
    tags: ['Xamarin', 'C#', 'Bluetooth LE', 'Azure', 'IoT', 'REST API'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 16,
    image: '💡',
    duration: '15 months',
    responsibilities: [
      'Implementing new features and improvement of existing features',
      'Maintain source code using version control',
      'Implementing design and making new UI elements using graphic tools',
      'Unit testing and manual testing on Android/iOS',
      'Optimizing Bluetooth communication',
      'Publish/Update Apps on Google Store/App Store',
      'Working with RaspberryPi for device simulation'
    ],
    features: [
      'Bluetooth LE device pairing and control',
      'Wi-Fi network configuration',
      'Light control (on/off, dimming, modes)',
      'Product registration system',
      'Azure cloud synchronization',
      'Multi-device support',
      'Real-time status updates'
    ],
    teamSize: 'Small team (3-5 members)'
  },
  {
    title: 'User Management System',
    description: 'Full-stack user management with permissions, CRUD operations, and minimal API architecture.',
    fullDescription: 'User Management System Application created for private purposes. Contains frontend and backend parts with full CRUD operations, permission management, and modern minimal API architecture.',
    tags: ['React', 'Redux', 'Tailwind', 'ASP.NET Core', 'MS SQL'],
    github: 'https://github.com/jetza/User-Management-System',
    demo: 'https://github.com/jetza/User-Management-System',
    stars: 14,
    image: '👥',
    duration: '2 months',
    responsibilities: [
      'Full-stack development (Frontend and Backend)',
      'Database design and implementation',
      'API development using ASP.NET Core Minimal API',
      'UI implementation with React and Tailwind',
      'Authentication and authorization'
    ],
    features: [
      'Create/Edit/Delete users',
      'Assign permissions to users',
      'View assigned permissions',
      'List all available users',
      'Role-based access control',
      'Modern minimal API architecture'
    ],
    teamSize: 'Solo project'
  },
  {
    title: 'INIT Conference Website',
    description: 'Official conference website with event information, schedule, speakers, and registration system.',
    fullDescription: 'INIT Conference Official Website is a place where people can find all information related to the conference organized on September 23rd, 2022. Features event schedule, speaker profiles, and registration.',
    tags: ['Next.js', 'Tailwind', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 12,
    image: '🎤',
    duration: 'Jul 2022 - Sep 2022',
    responsibilities: [
      'Implementing new features and improvements',
      'Creating new components',
      'Implementing design using graphic tools',
      'Finding and fixing bugs',
      'Adding new content'
    ],
    features: [
      'Event information and schedule',
      'Speaker profiles and bios',
      'Registration system',
      'Responsive design',
      'Content management',
      'SEO optimization'
    ],
    teamSize: 'Small team (2-3 members)'
  },
  {
    title: 'Project Estimation Tool',
    description: 'Microservice-based estimation tool with top-down/bottom-up methodologies, RabbitMQ messaging, and Angular SPA.',
    fullDescription: 'Process-driven estimation tool for new and existing projects in estimation phase. Supports top-down and bottom-up methodologies, implementing best practices like parameterized estimation, component and three-point estimation. Designed as microservice solution with RabbitMQ messaging.',
    tags: ['Angular', '.NET Core', 'SCSS', 'Docker', 'Kubernetes', 'RabbitMQ'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 15,
    image: '📊',
    duration: '4 months',
    responsibilities: [
      'Implementing new features and improvements',
      'Maintain source code using version control',
      'Implementing design using graphic tools',
      'Manual testing, finding/reporting and fixing bugs on frontend'
    ],
    features: [
      'Top-down and bottom-up estimation',
      'Parameterized estimation',
      'Component-based estimation',
      'Three-point estimation practice',
      'Microservice architecture',
      'RabbitMQ messaging',
      'Angular SPA frontend'
    ],
    teamSize: 'Medium team (5-8 members)'
  },
  {
    title: 'Microsoft Dynamics 365 Solutions',
    description: 'Custom plugins, template customization, and performance optimization for D365 CRM/ERP platform.',
    fullDescription: 'Microsoft Dynamics 365 is a cloud-based business applications platform combining CRM and ERP components. Provided custom plugin development, template customization, and performance optimization for client applications.',
    tags: ['Dynamics 365', 'C#', 'JavaScript', 'PowerApps', 'SSIS', 'Dataverse'],
    github: 'https://github.com/jelenamiodragovic',
    demo: '#',
    stars: 10,
    image: '⚙️',
    duration: '3 months',
    responsibilities: [
      'Daily communication with team and clients',
      'Finding innovative solutions to customer issues',
      'Develop plugins for D365 platform',
      'Customization of default templates on D365',
      'Monitoring client applications and providing advice',
      'Performance optimization and data quality improvement'
    ],
    features: [
      'Custom plugin development',
      'Template customization',
      'Performance optimization',
      'Data migration and integration',
      'PowerApps customization',
      'Dataverse configuration'
    ],
    teamSize: 'Small team (2-4 members)'
  }
];
