export function Hero() {
    return (
        <>
            <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[linear-gradient(to_bottom,#8a0194,#db2777,#ea580c,#eab308,#ffffff)] text-white text-center px-4 overflow-hidden">
                <div className="-translate-y-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    
                    {/* --- LADO ESQUERDO: TEXTO --- */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight orbitron-regular text-shadow-amber-500">Transformando pixels em experiências.
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-lg poppins-regular text-white/90">
                        Onde a precisão da engenharia encontra a beleza do design.
                        </p>
                        
                        {/* Movi o botão para cá para ficar junto do texto no layout */}
                        <a href="#projects" className="bg-purple-600 poppins-regular hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-colors duration-300">
                            Ver Meus Projetos
                        </a>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center animate-[spin_15s_linear_infinite] -z-10">
                                <img
                                    src="/elipse_2.svg"
                                    alt=""
                                    className="w-[150%] h-[150%] max-w-none object-contain animate-orbit-organic"
                                />
                        </div>
                </div>
            </section>

            
        </>
    );
}

