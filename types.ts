
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Project {
  id: string;
  name: string;
  type: 'Residential' | 'Commercial' | 'Renovation';
  location: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  projectType: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Vite environment variables are accessed via import.meta.env
// No need to declare them in NodeJS ProcessEnv for Vite

export interface ScrollToSectionHook {
  scrollToSection: (sectionId: string) => void;
}
