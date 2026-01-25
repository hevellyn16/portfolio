export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Título Chamativo */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Vamos construir algo <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">incrível juntos?</span>
        </h2>
        
        <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
          Estou sempre aberta a novos projetos e colaborações. 
          Se você tem uma ideia ou precisa de um design/código criativo, me chame!
        </p>

        {/* Botões de Redes Sociais */}
        <div className="flex justify-center gap-6 mb-12">
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/hevellyn-m-07871622a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>

          {/* Behance (Já que você tem projetos lá) */}
          <a 
            href="https://www.behance.net/hevellymeirian" 
            target="_blank" 
            rel="noopener noreferrer"
            // Adicionei 'group' aqui para controlar a imagem filha
            className="group w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-800 hover:bg-blue-800 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
            aria-label="Behance"
          >
            <img 
              src="/behance-color-icon.svg" // (Ou o nome do seu arquivo de imagem)
              alt="Behance" 
              // TRUQUE AQUI: 
              // transition-all: para suavizar
              // group-hover:brightness-0: deixa a imagem preta
              // group-hover:invert: inverte o preto para BRANCO
              className="w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
            />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/hevellyn16" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

            
          </a>

          {/* Email */}
          <a 
            href="mailto:meirianehev@gmail.com" 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>

        </div>

        {/* Rodapé Pequeno */}
        <div className="text-sm text-gray-400 border-t border-gray-100 pt-8">
          <p>© {currentYear} Hevellyn Mesquita. Feito com React, Tailwind e muito café. ☕</p>
        </div>
      </div>
    </footer>
  );
}