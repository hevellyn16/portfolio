import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Novo estado para controlar se a página foi rolada
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 50px, ativa o fundo sólido
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Sobre', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Serviços', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ];

  return (
    // AQUI ESTÁ A MÁGICA:
    // Mudamos a classe dinamicamente baseada no estado 'scrolled'
    <nav className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled 
            ? 'bg-[#2e0249]/95 backdrop-blur-md shadow-lg py-2' // Quando rola: Fundo Roxo Escuro Sólido + Sombra
            : 'bg-transparent py-4' // No topo: Transparente e mais espaçado
        }
    `}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 1. LOGO */}
        <div 
            className="text-2xl font-bold text-white tracking-tighter cursor-pointer z-50 hover:text-purple-300 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Hevellyn{scrolled ? <span className="text-purple-500">.</span> : <span className="text-fuchsia-400">.</span>}
        </div>

        {/* 2. MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm cursor-pointer font-medium text-white/90   hover:text-white transition-all hover:bg-white/10 px-4 py-2 rounded-full poppins-regular"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* 3. BOTÃO HAMBÚRGUER */}
        <button 
          className="md:hidden text-white z-50 p-2 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>

        {/* 4. MENU MOBILE */}
        <div className={`
            fixed top-0 left-0 w-screen h-screen bg-[#2e0249] z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
        `}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
        </div>

      </div>
    </nav>
  );
}