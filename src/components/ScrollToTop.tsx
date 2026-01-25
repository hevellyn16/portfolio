import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para checar a rolagem
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para subir ao clicar
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Subida suave
    });
  };

  // Adiciona o "ouvinte" de rolagem quando a página carrega
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Limpa o ouvinte quando sai da página (boa prática)
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg text-white transition-all duration-300 transform
        bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Voltar ao topo"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}