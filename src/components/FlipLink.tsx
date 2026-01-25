interface FlipLinkProps {
  frontText: string;
  backText1: string;
  backText2: string;
}

const FlipLink = ({ frontText, backText1, backText2 }: FlipLinkProps) => {
  return (
    // 1. "w-fit": O botão se ajusta ao conteúdo
    <a href="#" className="group relative w-fit block perspective-[1000px] cursor-pointer">
      
      {/* 2. Grid Stack: Usamos Grid para empilhar Frente e Verso sem usar Absolute no container pai */}
      {/* Isso faz com que a altura e largura sejam definidas pelo MAIOR texto entre frente e verso */}
      <div className="relative grid grid-cols-1 grid-rows-1 transition-all duration-500 delay-0 group-hover:delay-500 transform-3d group-hover:transform-[rotateX(180deg)]">
        
        {/* --- FRENTE --- */}
        {/* col-start-1 row-start-1: Força a ficar na primeira célula */}
        <div className="col-start-1 row-start-1 relative flex items-center justify-center px-8 py-3 bg-white/10 rounded-md text-white font-medium shadow-sm backface-hidden overflow-hidden">
          {/* whitespace-nowrap: Garante que o texto não quebre linha */}
          <span className="z-10 whitespace-nowrap">{frontText}</span>
          
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <rect 
              x="2" y="2" 
              width="calc(100% - 4px)" height="calc(100% - 4px)" 
              rx="6" ry="6" 
              // pathLength="100": O segredo! Normaliza o tamanho para 100 unidades.
              // stroke-dasharray="100": A linha tem tamanho 100.
              // stroke-dashoffset="100": Começa escondida (100 de deslocamento).
              pathLength="100"
              className="fill-transparent stroke-transparent group-hover:stroke-white stroke-2 transition-all duration-500 ease-in-out [stroke-dasharray:100] [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0]"
            />
          </svg>
        </div>

        {/* --- VERSO --- */}
        {/* col-start-1 row-start-1: Fica EM CIMA da frente, mas rotacionado */}
        <div className="col-start-1 row-start-1 relative flex items-center justify-center px-8 py-3 bg-purple-950 border border-purple-500 rounded-md text-purple-200 font-bold shadow-inner transform-[rotateX(180deg)] backface-hidden overflow-hidden">
          
          {/* Garante que o container do verso tenha tamanho para os textos absolutos */}
          <span className="invisible whitespace-nowrap">{backText1.length > backText2.length ? backText1 : backText2}</span>

          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
             {/* TEXTO 1 */}
            <span className="absolute whitespace-nowrap transition-all duration-100 delay-0 group-hover:delay-1000 group-hover:duration-1000 group-hover:opacity-0 group-hover:-translate-y-4 opacity-100">
              {backText1}
            </span>

            {/* TEXTO 2 */}
            <span className="absolute whitespace-nowrap transition-all duration-100 delay-0 group-hover:delay-1000 group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4 text-white">
              {backText2}
            </span>
          </div>
        </div>

      </div>
    </a>
  );
};

export default FlipLink;