import { CertificateOrAward } from '@/types/certificate';

export type Award = CertificateOrAward & {
  category?: 'Professional' | 'Academic' | 'Community';
};

export const awards: Award[] = [
    {
    title: 'Microsoft Most Valued Professional (MVP) for Developer Technologies',
    issuer: 'Microsoft',
    date: '2025',
    description: 'Awarded for exceptional technical leadership, innovative solutions, and dedication to empowering developers through knowledge sharing and community contributions in modern web development',
    category: 'Professional',
    link: 'https://www.credly.com/badges/fbc38eaa-9380-49da-bb91-eb5568452a3c'
  },
  {
    title: 'Microsoft Most Valued Professional (MVP) for Developer Technologies',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Recognized for continuous excellence in technical expertise, mentoring developers, and contributing to the advancement of developer technologies and best practices',
    category: 'Professional',
    link: 'https://www.credly.com/badges/256a6cd5-2489-4e94-a5fa-30e78b9aea95'
  },
  {
    title: 'Microsoft Most Valued Professional (MVP) Alumni',
    issuer: 'Microsoft',
    date: '2022 - 2023',
    description: 'Honored for sustained commitment to technical excellence and community engagement, demonstrating consistent leadership in helping developers succeed',
    category: 'Professional',
    link: 'https://www.credly.com/badges/d29e2b42-32f9-4a01-b6a8-86d49f9989a8/linked_in?t=rv7oia'
  },
  {
    title: 'Microsoft Most Valued Professional (MVP) for Azure',
    issuer: 'Microsoft',
    date: '2019 - 2021',
    description: 'Awarded for exceptional expertise in Azure cloud technologies, demonstrating deep technical knowledge and active contributions to helping organizations adopt cloud solutions',
    category: 'Professional',
    link: 'https://mvp.microsoft.com/en-US/MVP/profile/672cfb49-232d-4415-8889-720ef0dce811'
  }
];

export const awardsContent = {
  title: 'Awards & Recognition',
  description: {
    title: 'Achievements',
    description: 'Recognition for contributions to technology, community engagement, and professional excellence in software development.'
  }
};
