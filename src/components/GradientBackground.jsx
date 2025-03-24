import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform vec3 color1;
uniform vec3 color2;
varying vec2 vUv;

void main() {
  float angle = 45.0 * 3.141592653589793 / 180.0;
  vec2 rotatedUV = vec2(
    vUv.x * cos(angle) - vUv.y * sin(angle),
    vUv.x * sin(angle) + vUv.y * cos(angle)
  );
  
  float gradient = smoothstep(0.0, 1.0, rotatedUV.x);
  vec3 color = mix(color1, color2, gradient);
  gl_FragColor = vec4(color, 1.0);
}
`;

export const GradientBackground = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh scale={[100, 100, 1]} position={[0, 0, -10]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={meshRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          color1: { value: new THREE.Color('#1a1a1a') },
          color2: { value: new THREE.Color('#0a0a0a') }
        }}
      />
    </mesh>
  );
};