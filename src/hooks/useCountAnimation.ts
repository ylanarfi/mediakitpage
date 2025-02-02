import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  isPrintMode?: boolean;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  suffix = '',
  isPrintMode = false
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(isPrintMode ? end : 0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPrintMode) {
      setCount(end);
      return;
    }

    const currentElement = elementRef.current; // Store ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isPrintMode, end]);

  useEffect(() => {
    if (!isInView || isPrintMode) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * end);
      
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [end, duration, delay, isInView, isPrintMode]);

  const formattedCount = end >= 1000 
    ? `${(count / 1000).toFixed(1)}K${suffix}`
    : `${count}${suffix}`;

  return { count: formattedCount, ref: elementRef };
};