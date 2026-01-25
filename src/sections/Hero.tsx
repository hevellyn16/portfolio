export function Hero() {
    return (
        <>
            <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[linear-gradient(to_bottom,#8a0194,#db2777,#ea580c,#eab308,#ffffff)] text-white text-center px-4 overflow-hidden">
                <div className="-translate-y-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    
                    {/* --- LADO ESQUERDO: TEXTO --- */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Bem-vindo ao meu Portfólio</h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl">Aqui você pode conhecer meus projetos e como meu trabalho se destaca.</p>
                        
                        {/* Movi o botão para cá para ficar junto do texto no layout */}
                        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-300">
                            Ver Meus Projetos
                        </a>
                    </div>

                    {/* --- LADO DIREITO: A COMPOSIÇÃO GIRATÓRIA --- */}
                    <div className="relative inset-0 w-full md:w-1/2 flex justify-center items-center h-100">
                            <div className="-translate-y-10">
                                <img
                                    src="/perfil-hero.svg"
                                    alt="Profile"
                                    className="w-48 h-48 md:w-64 md:h-64 rounded-full mb-4 mx-auto z-10 relative"
                                />
                            </div>


                            {/* 1. ELIPSE: Gira devagar (20s) */}
                            <div className="w-5 h-5 translate-x-64 translate-y-15 absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                                <img
                                    src="/elipse.svg"
                                    alt=""
                                    className="w-[140%] h-[140%] z-10 object-contain opacity-60"
                                />
                            </div>

                            <div className="w-5 h-5 translate-x-10 translate-y-60 absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                                <img
                                    src="/elipse.svg"
                                    alt=""
                                    className="w-[140%] h-[140%] z-10 object-contain opacity-60"
                                />
                            </div>

                            {/* 2. LOSANGO: Gira ao CONTRÁRIO e mais devagar (25s) */}
                            {/* 'reverse' faz girar anti-horário */}
                            <div className="-translate-y-10 w-5 absolute inset-0 flex items-center justify-center animate-[spin_25s_linear_infinite_reverse]">
                                <img
                                    src="/losango.svg"
                                    alt=""
                                    className="w-[120%] h-[120%] z-10 object-contain opacity-80"
                                />
                            </div>

                            <div className="w-5 absolute translate-x-65 translate-y-5 inset-0 flex items-center justify-center animate-[spin_25s_linear_infinite]">
                                <img
                                    src="/losango.svg"
                                    alt=""
                                    className="w-[120%] h-[120%] z-10 object-contain opacity-80"
                                />
                            </div>

                            {/* 3. LINHA: Gira mais rápido (15s) */}
                            <div className="absolute inset-0 flex items-center justify-center animate-[spin_15s_linear_infinite] -z-10">
                                <img
                                    src="/elipse_2.svg"
                                    alt=""
                                    className="w-[150%] h-[150%] max-w-none object-contain animate-orbit-organic"
                                />
                            </div>

                             <div className="absolute w-100 h-100 -translate-x-10 inset-0 flex items-center justify-center -z-10 pointer-events-none">
                                    <video
                                        src="/linha_animada.webm" 
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-[150%] h-[150%] max-w-none object-contain opacity-80"
                                        style={{ mixBlendMode: 'screen' }}
                                    /> 
                             </div>
                    </div>
                </div>
            </section>

            
        </>
    );
}