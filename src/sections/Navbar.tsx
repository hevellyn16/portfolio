import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. LOGO (Lado Esquerdo) */}
        <div 
            className="text-2xl font-bold text-white tracking-tighter cursor-pointer z-50 hover:text-purple-300 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Hevellyn<span className="text-purple-500">.</span>
        </div>

        {/* 2. MENU DESKTOP (Lado Direito) */}
        {/* IMPORTANTE: 'hidden' faz ele sumir no celular. 'md:flex' faz aparecer no PC. */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-white/90 hover:text-white transition-all hover:bg-white/10 px-4 py-2 rounded-full"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* 3. BOTÃO HAMBÚRGUER (Só aparece no celular) */}
        {/* 'md:hidden' garante que ele suma no PC */}
        <button 
          className="md:hidden text-white z-50 p-2 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            // Ícone X
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
          ) : (
            // Ícone Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>

        {/* 4. MENU MOBILE (A Tela Cheia) */}
        {/* Usei 'fixed inset-0 h-screen w-screen' para forçar cobrir tudo */}
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