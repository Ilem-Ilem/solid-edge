
import React from 'react';
import projectImage1 from './assets/C6CDFDCC-EEB6-4DA3-88FE-7A0FDE86DFE3.jpeg';
import projectImage2 from './assets/4FCA4D98-0F5E-430F-AEA0-DB02FBA8432B.png';
import projectImage3 from './assets/6EF32047-C56E-4ECC-ADB7-EC992A826869.png';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    title: 'Residential Construction',
    slug: 'residential',
    description: 'Custom homes, renovations and remodeling, basement finishing, roofing and exterior work, interior upgrades.',
    icon: 'fa-house',
    path: '/services/residential'
  },
  {
    title: 'Commercial Construction',
    slug: 'commercial',
    description: 'Office buildings, retail spaces, warehouses, structural upgrades, fit-outs and refurbishments.',
    icon: 'fa-building',
    path: '/services/commercial'
  },
  {
    title: 'General Contracting',
    slug: 'contracting',
    description: 'Project management, site supervision, budget planning, permit assistance, safety compliance.',
    icon: 'fa-helmet-safety',
    path: '/services/contracting'
  },
  {
    title: 'Design & Build',
    slug: 'design-build',
    description: 'Architectural planning, engineering support, construction execution, final finishing.',
    icon: 'fa-compass-drafting',
    path: '/services/design-build'
  }
];

export const PROJECTS = [
  {
    id: '1',
    name: 'Riverside Residences',
    type: 'Residential' as const,
    location: 'Toronto, ON',
    description: 'Luxury waterfront residential development.',
    image: projectImage1
  },
  {
    id: '2',
    name: 'Northstar Office Tower',
    type: 'Commercial' as const,
    location: 'Vancouver, BC',
    description: 'Modern commercial office building with sustainable features.',
    image: projectImage2
  },
  {
    id: '3',
    name: 'Eco Green Building',
    type: 'Commercial' as const,
    location: 'Calgary, AB',
    description: 'Environmentally friendly commercial building with LEED certification.',
    image: projectImage3
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Thompson',
    projectType: 'Residential Custom Home',
    rating: 5,
    text: 'Solid Edge delivered our dream home on time and under budget. Their transparency throughout the build was unmatched.'
  },
  {
    name: 'James Chen',
    projectType: 'Commercial Fit-out',
    rating: 5,
    text: 'Professional, efficient, and extremely knowledgeable about local building codes. Highly recommended for any commercial venture.'
  }
];
