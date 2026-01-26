export default function About() {
  
  // Lista de habilidades (Fácil de editar)
  const skills = [
    "Figma", "UI Design", "Prototipagem",
    "React", "TypeScript", "Tailwind CSS",
    "Git/GitHub", "Blender (Básico)", "Marketing"
  ];

  return (
    <section id="about" className="poppins-regular w-full py-24 bg-white text-gray-800 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* === LADO ESQUERDO: A FOTO === */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          
          {/* O quadrado colorido decorativo atrás da foto */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-linear-to-tr from-purple-600 to-orange-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
          
          {/* A Moldura da Foto */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-500">
            {/* COLOQUE SUA FOTO AQUI! 
               Salve sua foto como 'perfil.png' ou 'foto.jpg' na pasta public 
            */}
            <img 
              src="/eu.svg" // <--- TROQUE PELO NOME DA SUA FOTO
              alt="Foto de Perfil" 
              className="w-full h-full object-cover"
            />
            
            {/* Se não tiver foto agora, deixe esse div de gradiente temporário: */}
            {/* <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">Sua Foto</div> */}
          </div>
        </div>

        {/* === LADO DIREITO: O TEXTO === */}
        <div className="w-full md:w-1/2 text-left">
          
          <h4 className="text-purple-600 font-bold tracking-widest uppercase mb-2 text-sm">
            Sobre Mim
          </h4>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Designer que pensa em <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">código.</span>
            <br />
            (Ou dev que ama design?)
          </h2>
          
          <div className="text-gray-600 text-lg leading-relaxed space-y-4 mb-8">
            <p>
              Olá! Sou designer e desenvolvedora e venho de <strong className="text-gray-900">Sobral, Ceará</strong>. 
            </p>
            <p>
              Minha jornada começou no Marketing (onde aprendi a entender o que as pessoas querem), 
              mas logo me apaixonei pela construção de interfaces.
            </p>
            <p>
              Hoje, meu diferencial é ser a ponte entre esses dois mundos: crio layouts no <strong>Figma</strong> pensando 
              em como eles serão montados no <strong>React</strong>. Isso evita aquele problema clássico de 
              "o design ficou lindo, mas impossível de programar".
            </p>
          </div>

          {/* ÁREA DE SKILLS (Habilidades) */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Tech Stack & Ferramentas:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}