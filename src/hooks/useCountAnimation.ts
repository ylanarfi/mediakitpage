import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  enabled?: boolean;
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000,
  suffix = '',
  enabled = true
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [enabled, end]);

  useEffect(() => {
    if (!isInView || !enabled) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration, enabled]);

  const formattedCount = end >= 1000 
    ? `${(count / 1000).toFixed(1)}K${suffix}`
    : `${count}${suffix}`;

  return { value: formattedCount, ref: elementRef };
};