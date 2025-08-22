import { Project, Category } from './types';

export const CATEGORIES: (Category | 'All')[] = ['All', Category.WEBSITE, Category.LP, Category.SYSTEM, Category.OTHERS];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Corporate Website Renewal', category: Category.WEBSITE, imageUrl: 'https://picsum.photos/seed/project1/400/300' },
  { id: 2, title: 'E-commerce Platform Development', category: Category.SYSTEM, imageUrl: 'https://picsum.photos/seed/project2/400/300' },
  { id: 3, title: 'New Product Launch LP', category: Category.LP, imageUrl: 'https://picsum.photos/seed/project3/400/300' },
  { id: 4, title: 'Portfolio Site for a Creator', category: Category.WEBSITE, imageUrl: 'https://picsum.photos/seed/project4/400/300' },
  { id: 5, title: 'Internal CRM System', category: Category.SYSTEM, imageUrl: 'https://picsum.photos/seed/project5/400/300' },
  { id: 6, title: 'Event Promotion Page', category: Category.LP, imageUrl: 'https://picsum.photos/seed/project6/400/300' },
  { id: 7, title: 'Brand Content & Blog', category: Category.WEBSITE, imageUrl: 'https://picsum.photos/seed/project7/400/300' },
  { id: 8, title: 'Company Brochure Design', category: Category.OTHERS, imageUrl: 'https://picsum.photos/seed/project8/400/300' },
  { id: 9, title: 'SaaS Application UI/UX', category: Category.SYSTEM, imageUrl: 'https://picsum.photos/seed/project9/400/300' },
  { id: 10, title: 'App Store Landing Page', category: Category.LP, imageUrl: 'https://picsum.photos/seed/project10/400/300' },
  { id: 11, title: 'Logo & CI Development', category: Category.OTHERS, imageUrl: 'https://picsum.photos/seed/project11/400/300' },
  { id: 12, title: 'Recruitment Website Creation', category: Category.WEBSITE, imageUrl: 'https://picsum.photos/seed/project12/400/300' },
];
