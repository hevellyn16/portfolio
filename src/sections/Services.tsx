
// === DADOS DOS SERVIÇOS ===
const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Criação de interfaces modernas e intuitivas. Do wireframe ao protótipo de alta fidelidade no Figma, focando sempre na melhor experiência para o usuário.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
    mainColor: "text-pink-500"
  },
  {
    id: 2,
    title: "Front-end Development",
    description: "Transformo design em código limpo e pixel-perfect. Especialista em React e Tailwind CSS, garantindo sites rápidos, responsivos e com animações fluidas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-purple-600 to-indigo-600",
    bgLight: "bg-purple-50",
    mainColor: "text-purple-600"
  },
  {
    id: 3,
    title: "Motion & Interatividade",
    description: "Sites não precisam ser estáticos. Crio micro-interações, transições suaves e animações que guiam o usuário e tornam a navegação muito mais agradável e moderna.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-orange-500 to-yellow-500",
    bgLight: "bg-orange-50",
    mainColor: "text-orange-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 bg-gray-50 text-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como posso <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">ajudar você?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Combino design e tecnologia para criar experiências digitais completas.
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Borda Gradiente no Hover (Fica escondida e aparece girando ou fixa) */}
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-linear-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>

              {/* Ícone com Fundo Colorido */}
              <div className={`w-16 h-16 rounded-2xl ${service.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                
                <div className={`text-gray-400 group-hover:${service.mainColor} transition-colors duration-300`}>
                  {service.icon}
                </div>
              </div>

              {/* Texto */}
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-black transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}