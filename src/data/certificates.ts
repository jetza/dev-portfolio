import { CertificateOrAward } from '@/types/certificate';
export type Certificate = CertificateOrAward & {
  category?: 'Certification' | 'Course' | 'Training';
};
export const certificates: Certificate[] = [
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: '2021',
    description: 'Certified in Azure AI services, machine learning concepts, and cognitive services implementation',
    category: 'Certification',
    link: 'https://www.credly.com/badges/07ab4282-2d6f-4ad9-93a3-d83942280961'
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2021',
    description: 'Foundation-level knowledge of cloud services and how those services are provided with Microsoft Azure',
    category: 'Certification',
    link: 'https://www.credly.com/badges/b34b4977-754f-488e-ae76-fbdea1a7bafd'
  },
  {
    title: 'Oracle Programming Certification',
    issuer: 'Oracle',
    date: '2015',
    description: 'Advanced Java programming certification covering OOP principles, design patterns, and best practices',
    category: 'Certification',
  },
  {
    title: 'Oracle Java Fundamentals',
    issuer: 'Oracle',
    date: '2015',
    description: 'Fundamental Java programming skills including syntax, data structures, and core libraries',
    category: 'Certification',
  },
  {
    title: 'MCSA (Microsoft Certified System Administrator)',
    issuer: 'Microsoft',
    date: '2008',
    description: 'Certified in Windows Server administration, Active Directory, and network infrastructure management',
    category: 'Certification',
  },
  {
    title: 'MCP (Microsoft Certified Professional)',
    issuer: 'Microsoft',
    date: '2005',
    description: 'Foundation-level Microsoft certification demonstrating technical proficiency in Microsoft technologies',
    category: 'Certification',
  },
  {
    title: 'Scrum Master Training',
    issuer: 'Scrum Alliance',
    date: 'Completed',
    description: 'Certificate of completing Scrum Master training in Agile methodologies and team facilitation',
    category: 'Training',
  },
];
export const certificatesContent = {
  title: 'Certificates & Achievements',
  continuousLearning: {
    title: 'Continuous Learning',
    description: 'I believe in continuous improvement and staying updated with the latest technologies. Currently pursuing additional certifications in advanced React patterns and modern web architecture.'
  }
};
