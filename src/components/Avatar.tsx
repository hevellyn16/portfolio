import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';

// Componente que carrega o modelo
function Model() {
  // Aqui ele puxa o arquivo da pasta public
  const { scene } = useGLTF('/model.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={2.5} // Ajuste o tamanho do boneco aqui (2, 2.5, 3...)
      position={[0, -1.5, 0]} // Ajuste a altura (Y) para ele não ficar voando ou cortado
    />
  );
}

export default function Avatar() {
  return (
    // Canvas é o "palco" onde o 3D acontece
    <div className="h-100 w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        
        {/* Luzes do ambiente (Estilo estúdio) */}
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* Environment: Dá reflexos bonitos e iluminação realista */}
        <Environment preset="city" />

        {/* O Modelo 3D */}
        <Model />

        {/* Controles: Permite girar com o mouse */}
        <OrbitControls 
          enableZoom={false} // Desativa o zoom (scroll) para não atrapalhar a página
          autoRotate // Se quiser que ele gire sozinho devagar
          autoRotateSpeed={4}
        />
        
        {/* Sombra no chão para não parecer que está flutuando no vazio */}
        <ContactShadows resolution={1024} scale={10} blur={1} opacity={0.25} far={10} color="#000000" />
      </Canvas>
    </div>
  );
}

// Isso aqui ajuda a carregar o modelo antes (pré-load)
useGLTF.preload('/model.glb');