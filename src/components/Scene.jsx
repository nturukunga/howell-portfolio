import { Float, RandomizedLight, Sparkles, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ParticleSystem = () => {
  const particles = useRef();
  
  useFrame(({ clock }) => {
    particles.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={particles}>
      <Sparkles
        count={100}
        speed={0.5}
        opacity={0.8}
        color="#915EFF"
        size={2}
        scale={[10, 10, 10]}
      />
      <Float speed={2} rotationIntensity={1}>
        <mesh position={[2, 1, 0]}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial color="#2A77FF" emissive="#2A77FF" emissiveIntensity={2} />
        </mesh>
      </Float>
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={1}
        position={[-5, 5, -5]}
      />
    </group>
  );
};