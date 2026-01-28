import { useState } from 'react';
import { useTypewriter } from '../components/useTypewriter'; // Ajuste o caminho se necessário

// === 2. DADOS DOS PROJETOS ===
const projectsData = [
  {
    id: 1,
    title: "CineSol Cinema",
    category: "Design",
    shortCategory: "CineSol",
    tags: ["UI/UX Design", "Projeto Pessoal"],
    // TEMA: Rosa / Rose
    colorFrom: "from-pink-500", 
    colorTo: "to-rose-500",
    textColor: "text-pink-600",
    bgColor: "bg-pink-50",
    description: "Projeto conceitual de identidade visual e interface para um cinema fictício. O estudo foca na modernização da experiência de compra de ingressos.",
    link: "https://www.behance.net/gallery/242844495/CineSol-PS",
    linkLabel: "Ver Detalhes",
    imageBg: "bg-[#003366]" 
  },
  {
    id: 2,
    title: "Terceira Caixa",
    category: "Team",
    shortCategory: "T. Caixa",
    tags: ["UI Design", "Hero Section"],
    // TEMA: Roxo / Violeta
    colorFrom: "from-violet-500",
    colorTo: "to-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Fui responsável exclusivamente pelo design da Hero Section, criando uma introdução visual impactante que transmite a identidade criativa da marca.",
    link: "https://terceiracaixa.com.br/",
    linkLabel: "Ver Site",
    imageBg: "bg-[#F25C05]"
  },
  {
    id: 3,
    title: "IBBS",
    category: "Landing Page",
    shortCategory: "IBBS",
    tags: ["UI/UX Design", "ReactJS", "TailwindCSS", "Figma", "Frontend"],
    // TEMA: Azul / Ciano (MUDANÇA AQUI)
    colorFrom: "from-blue-500",
    colorTo: "to-cyan-500",       // Gradiente azul para ciano fica bem moderno
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Desenvolvi a nova landing page institucional da Igreja Batista Betel, utilizando React e Tailwind CSS. O projeto focou em modernizar a presença digital da comunidade com um design mobile-first, layout responsivo e hierarquia visual clara para facilitar o acesso à agenda e localização.",
    link: "https://igrejabatistabetel.vercel.app/",
    linkLabel: "Ver Site",
    imageBg: "bg-[#263A4F]" // Usei o Azul Petróleo oficial da marca (do botão que você fez)
  }
];

export default function Projects() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { displayText, elementRef } = useTypewriter("Meus Projetos");
  const [ expandTags, setExpandTags ] = useState(false);

  const handleCardClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="projects" className="w-full py-24 bg-white text-gray-800 px-4 min-h-screen font-sans">
      
      <div className="text-center mb-12">
        <h2 ref={elementRef} className="text-4xl md:text-5xl font-bold mb-4 inline-block min-h-[1.5em]">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-600 to-orange-500">
            {displayText}
          </span>
          <span className="animate-pulse text-purple-600 ml-1">|</span>
        </h2>
        <p className="text-gray-500 mt-2">Clique no card para expandir</p>
      </div>

      {/* Container FLEX - Mantive h-[600px] para dar bom espaço */}
      <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto h-150 transition-all">
        
        {projectsData.map((project) => {
          const isActive = activeId === project.id;
          const isInactive = activeId !== null && activeId !== project.id;

          return (
            <div
              key={project.id}
              onClick={() => handleCardClick(project.id)}
              className={`
                relative rounded-3xl overflow-hidden cursor-pointer shadow-xl 
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                ${isActive ? 'flex-10' : 'flex-1 hover:flex-[1.5]'}
              `}
            >
              
              {/* MODO 1: BARRA LATERAL (INATIVO) */}
              <div className={`absolute inset-0 bg-linear-to-b ${project.colorFrom} ${project.colorTo} flex items-center justify-center transition-opacity duration-500 ${isInactive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <span className="text-white font-bold text-xl tracking-widest uppercase md:rotate-90 whitespace-nowrap">
                   {project.shortCategory}
                 </span>
              </div>

              {/* MODO 2: CAPA PADRÃO */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-linear-to-br ${project.colorFrom} ${project.colorTo} transition-all duration-500 
                ${activeId === null ? 'opacity-100' : 'opacity-0 pointer-events-none'}
              `}>
                <h3 className="text-4xl font-bold text-white mb-2">{project.category}</h3>
                <h4 className="text-xl font-medium text-white/90 mb-6">{project.title}</h4>
                <div className="px-6 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-bold border border-white/30 hover:bg-white/30 transition-colors">
                  Ver Detalhes +
                </div>
              </div>

              {/* MODO 3: CONTEÚDO EXPANDIDO */}
              <div className={`absolute inset-0 bg-white flex flex-col md:flex-row transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                
                {/* Lado da Imagem/Número */}
                <div className={`w-full md:w-1/2 h-48 md:h-full ${project.imageBg} relative flex items-center justify-center p-4 overflow-hidden shrink-0`}>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
                      className="absolute top-4 left-4 z-20 w-8 h-8 bg-black/20 hover:bg-black/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors"
                    >✕</button>

                    <h2 className="text-[8rem] font-bold text-white/10 absolute select-none leading-none">
                      {project.id === 1 ? '01' : project.id === 2 ?  '02' : '03'}
                    </h2>
                    <span className="text-white text-2xl md:text-3xl font-bold z-10 relative drop-shadow-md text-center px-4">
                      {project.title}
                    </span>
                </div>

                {/* Lado do Texto */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-gray-50 text-left h-full overflow-y-auto">
                  
                <div className="flex gap-2 mb-4 flex-wrap mt-12"> 
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-bold rounded-full bg-gray-200 text-gray-600 shrink-0 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>


                  <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${project.textColor}`}>
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-lg font-bold ${project.textColor} hover:opacity-80 transition-opacity mt-auto md:mt-0 w-fit`}
                  >
                    {project.linkLabel} <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}