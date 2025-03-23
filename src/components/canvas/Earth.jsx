// src/components/canvas/Earth.jsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  
  // Load Earth textures
  const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [
    '/earth/earth_daymap.jpg',
    '/earth/earth_normal_map.jpg',
    '/earth/earth_specular_map.jpg'
  ]);

  // Animate the Earth rotation
  useFrame(() => {
    earthRef.current.rotation.y += 0.001;
  });

  // Place a marker for Nairobi, Kenya
  const nairobiLatLng = {
    lat: -1.2921, // Nairobi latitude
    lng: 36.8219  // Nairobi longitude
  };
  
  // Convert lat/lng to 3D position on sphere
  const getPositionFromLatLng = (lat, lng, radius = 2.1) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return [x, y, z];
  };
  
  const nairobiPosition = getPositionFromLatLng(nairobiLatLng.lat, nairobiLatLng.lng);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight 
        color="white" 
        position={[5, 3, 5]} 
        intensity={1} 
      />
      
      <mesh ref={earthRef}>
        <Sphere args={[2, 64, 64]}>
          <meshPhongMaterial 
            map={colorMap}
            normalMap={normalMap}
            shininess={5}
            specularMap={specularMap}
          />
        </Sphere>
      </mesh>
      
      {/* Nairobi Location Marker */}
      <mesh position={nairobiPosition}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ height: '500px' }}
    >
      <Earth />
    </Canvas>
  );
};

export default EarthCanvas;