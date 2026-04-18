
import { useEffect } from 'react';

/**
 * Reusable hook to apply fade-up animations on scroll using Intersection Observer.
 * Elements with the class 'animate-on-scroll' will automatically get the 'fade-up' class
 * and trigger the animation when they enter the viewport.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, // Trigger when 15% of the element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Once the animation triggers, we stop observing the element to ensure it only triggers once
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-big');
    
    animatedElements.forEach((el) => {
      // Handle regular scroll animations
      if (el.classList.contains('animate-on-scroll') && !el.classList.contains('fade-up')) {
        el.classList.add('fade-up');
      }
      
      // Handle 'big' scroll animations
      if (el.classList.contains('animate-on-scroll-big') && !el.classList.contains('fade-in-big-up')) {
        el.classList.add('fade-in-big-up');
      }
      
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};
