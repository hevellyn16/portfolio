import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei'; // Adicionamos useGLTF
import { useRef } from 'react';
import * as THREE from 'three';

// Componente do Foguete
function RocketModel() {
  const meshRef = useRef<THREE.Group>(null!);
  
  // 1. Aqui carregamos o ficheiro que puseste na pasta public
  // Se o teu ficheiro tiver outro nome, muda aqui!
  const { scene } = useGLTF('/rocket.glb');

  useFrame((state, delta) => {
    // 2. Faz o foguete flutuar (subir e descer suavemente)
    // Math.sin cria uma onda suave baseada no tempo
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    
    // 3. Faz o foguete girar devagarinho
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={meshRef}>
      {/* 4. Renderizamos o modelo 3D */}
      {/* scale: Aumenta ou diminui o tamanho (tenta 0.5, 1, 2...) */}
      <primitive object={scene} scale={1} />
    </group>
  );
}

// A Cena Principal
export function Scene() {
  return (
    <div className="h-125 w-full bg-slate-900 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        
        {/* Luzes (sem luz, o modelo fica preto!) */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#purple" />

        {/* O nosso Foguete */}
        <RocketModel />
        
        {/* Fundo Espacial */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Controlo de Câmara (autoRotate faz girar a cena toda devagar) */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        
      </Canvas>
    </div>
  );
}