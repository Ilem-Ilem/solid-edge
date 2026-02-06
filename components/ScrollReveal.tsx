
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  className = '',
  threshold = 0.15,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, once]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-up': return 'opacity-0 translate-y-12';
      case 'fade-down': return 'opacity-0 -translate-y-12';
      case 'fade-left': return 'opacity-0 -translate-x-12';
      case 'fade-right': return 'opacity-0 translate-x-12';
      case 'zoom-in': return 'opacity-0 scale-95';
      default: return 'opacity-0 translate-y-12';
    }
  };

  const getVisibleStyles = () => {
    return 'opacity-100 translate-x-0 translate-y-0 scale-100';
  };

  return (
    <div
      ref={domRef}
      className={`${className} transition-all ease-out`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className={`w-full h-full transition-all duration-inherit delay-inherit ${isVisible ? getVisibleStyles() : getInitialStyles()}`}>
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;
