import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

// === DADOS DOS SERVIÇOS ===
const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Criação de interfaces modernas e intuitivas. Do wireframe ao protótipo de alta fidelidade no Figma, focando sempre na melhor experiência para o usuário.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA33F7"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8C1AF6"><path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
    ),
    gradient: "from-orange-500 to-yellow-500",
    bgLight: "bg-orange-50",
    mainColor: "text-orange-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="poppins-regular w-full py-24 bg-gray-50 text-gray-800 px-4">
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
            // 2. CardContainer
            <CardContainer key={service.id} containerClassName="w-full h-full py-2 md:py-20" className="inter-var">
              
              {/* 3. CardBody - CORREÇÕES APLICADAS AQUI 👇 */}
              {/* Adicionei 'flex flex-col' e 'h-full' (ou min-h) para forçar altura igual */}
              <CardBody className="bg-white overflow-hidden relative group/card border-black/10 w-full h-full min-h-105 flex flex-col rounded-3xl p-8 border hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300">
                
                {/* Ícone */}
                <CardItem
                  translateZ="50"
                  className="w-full mt-2"
                >
                  <div className={`w-16 h-16 rounded-2xl ${service.bgLight} flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform duration-300`}>
                    <div className={`text-gray-400 group-hover/card:${service.mainColor} transition-colors duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                </CardItem>

                {/* Título - CORREÇÃO: Altura mínima para alinhar títulos de 1 ou 2 linhas */}
                <CardItem
                  as="h3"
                  translateZ="60"
                  className="text-2xl font-bold mb-4 text-gray-800 group-hover/card:text-black transition-colors min-h-14 flex items-end"
                >
                  {service.title}
                </CardItem>

                {/* Descrição - CORREÇÃO: 'grow' empurra o conteúdo para preencher o card */}
                <CardItem
                  as="p"
                  translateZ="40"
                  className="text-gray-500 leading-relaxed text-sm max-w-sm mt-2 grow"
                >
                  {service.description}
                </CardItem>

                {/* Efeito de Borda Inferior */}
                 <div className={`absolute inset-x-0 bottom-0 h-1 bg-linear-to-r ${service.gradient} transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out rounded-b-3xl`}></div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>
    </section>
  );
}