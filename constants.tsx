import React from 'react';
import type { NavLink, Project, Service, SocialLink, ResumeItem } from './types';

// Icons
const CodeBracketIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const PaintBrushIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
    </svg>
);

const ShoppingCartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const GitHubIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const DownloadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


export const NAV_LINKS: NavLink[] = [
  { nameKey: 'navHome', href: '#home' },
  { nameKey: 'navAbout', href: '#about' },
  { nameKey: 'navServices', href: '#services' },
  { nameKey: 'navPortfolio', href: '#portfolio' },
  { nameKey: 'navResume', href: '#resume' },
  { nameKey: 'navContact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: CodeBracketIcon,
    titleKey: 'serviceWebDevTitle',
    descriptionKey: 'serviceWebDevDesc',
  },
  {
    icon: PaintBrushIcon,
    titleKey: 'serviceWebDesignTitle',
    descriptionKey: 'serviceWebDesignDesc',
  },
  {
    icon: ShoppingCartIcon,
    titleKey: 'serviceEcommerceTitle',
    descriptionKey: 'serviceEcommerceDesc',
  },
];

export const PROJECTS: Project[] = [
  {
    titleKey: 'projectMatisTitle',
    descriptionKey: 'projectMatisDesc',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/matis/800/600',
    link: '#',
    category: 'eshop-website',
  },
  {
    titleKey: 'projectSenseTitle',
    descriptionKey: 'projectSenseDesc',
    technologies: ['Next.js', 'Tailwind CSS', 'Shopify API'],
    imageUrl: 'https://picsum.photos/seed/sense/800/600',
    link: '#',
    category: 'eshop-website',
  },
  {
    titleKey: 'projectKizisTitle',
    descriptionKey: 'projectKizisDesc',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    imageUrl: 'https://picsum.photos/seed/kizis/800/600',
    link: '#',
    category: 'eshop-website',
  },
  {
    titleKey: 'projectChalkidikiTitle',
    descriptionKey: 'projectChalkidikiDesc',
    technologies: ['React', 'Firebase', 'Google Maps API'],
    imageUrl: 'https://picsum.photos/seed/chalkidiki/800/600',
    link: '#',
    category: 'app',
  },
   {
    titleKey: 'projectTuitTitle',
    descriptionKey: 'projectTuitDesc',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/tuit/800/600',
    link: '#',
    category: 'app',
  },
   {
    titleKey: 'projectKrasasTitle',
    descriptionKey: 'projectKrasasDesc',
    technologies: ['Gatsby', 'GraphQL', 'Contentful'],
    imageUrl: 'https://picsum.photos/seed/krasas/800/600',
    link: '#',
    category: 'eshop-website',
  },
   {
    titleKey: 'projectSupportATitle',
    descriptionKey: 'projectSupportADesc',
    technologies: ['Magento', 'PHP', 'MySQL'],
    imageUrl: 'https://picsum.photos/seed/supportA/800/600',
    link: '#',
    category: 'support',
  },
   {
    titleKey: 'projectSupportBTitle',
    descriptionKey: 'projectSupportBDesc',
    technologies: ['React', 'Node.js', 'AWS'],
    imageUrl: 'https://picsum.photos/seed/supportB/800/600',
    link: '#',
    category: 'support',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'GitHub',
        icon: GitHubIcon,
        href: 'https://github.com',
    },
    {
        name: 'LinkedIn',
        icon: LinkedInIcon,
        href: 'https://linkedin.com',
    }
];

export const SKILLS: string[] = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript',
  'React', 'Next.js', 'Node.js', 'Express.js',
  'Tailwind CSS', 'Figma', 'MongoDB', 'PostgreSQL',
  'Git', 'Docker', 'REST APIs', 'GraphQL'
];

export const EXPERIENCE: ResumeItem[] = [
    {
        companyKey: 'exp1Company',
        roleKey: 'exp1Role',
        period: '2020 - Present',
        descriptionKey: 'exp1Desc',
    },
    {
        companyKey: 'exp2Company',
        roleKey: 'exp2Role',
        period: '2018 - 2020',
        descriptionKey: 'exp2Desc',
    },
];

export const EDUCATION: ResumeItem[] = [
    {
        companyKey: 'edu1Company',
        roleKey: 'edu1Role',
        period: '2014 - 2018',
        descriptionKey: 'edu1Desc',
    }
];