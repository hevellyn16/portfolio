import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null); // Específico para títulos

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se apareceu na tela, libera a animação
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 } // 10% visível já ativa
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated && displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [hasAnimated, displayText, text, speed]);

  return { displayText, elementRef };
}