
import FlipLink from "../components/FlipLink";
export function Navbar() {
    return (
        <nav className="bg-fuchsia-800 w-full p-2 flex justify-between items-center ">
            <div className="text-white p-2 font-bold text-xl">
                <FlipLink
                    frontText="Hevellyn Mesquita"
                    backText1=":)"
                    backText2=";)"
                />
            </div>
            <div>
                <a href="#about" className="text-white mx-2 hover:bg-white hover:bg-opacity-25 rounded py-2 px-3 hover:text-black transition-colors duration-300">Sobre</a>
                <a href="#projects" className="text-white mx-2 hover:bg-white hover:bg-opacity-25 rounded py-2 px-3 hover:text-black transition-colors duration-300">Projetos</a>
                <a href="#services" className="text-white mx-2 hover:bg-white hover:bg-opacity-25 rounded py-2 px-3 hover:text-black transition-colors duration-300">Serviços</a>
                <a href="#contact" className="text-white mx-2 hover:bg-white hover:bg-opacity-25 rounded py-2 px-3 hover:text-black transition-colors duration-300">Contato</a>
            </div>
        </nav>
    );
}