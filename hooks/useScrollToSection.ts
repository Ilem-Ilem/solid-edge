import { useCallback } from 'react';
import { ScrollToSectionHook } from '../types';

export const useScrollToSection = (): ScrollToSectionHook => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { scrollToSection };
};