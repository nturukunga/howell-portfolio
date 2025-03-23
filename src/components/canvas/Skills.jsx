// src/components/canvas/Skills.jsx
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Float, Environment, useTexture, OrbitControls } from '@react-three/drei';

const Skill = ({ position, name, color = '#915EFF' }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Float 
      speed={1.75} 
      rotationIntensity={0.6} 
      floatIntensity={2}
      position={position}
    >
      <Text
        color={hovered ? '#ffffff' : color}
        fontSize={0.65}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign='center'
        font="/fonts/inter_18pt-Bold.woff"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => console.log(`${name} clicked`)}
      >
        {name}
      </Text>
    </Float>
  );
}

const SkillsCanvas = () => {
  // Extract skills from your resume
  const skills = [
    { name: "Java", position: [-3, 0, 0] },
    { name: ".NET", position: [-1, 1, 0] },
    { name: "JavaScript", position: [1, -1, 0] },
    { name: "Database", position: [3, 0, 0] },
    { name: "UI/UX", position: [0, 3, 0] },
    { name: "Web Dev", position: [0, -3, 0] },
    { name: "Git", position: [-2, -2, 0] },
    { name: "System Admin", position: [2, 2, 0] },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      
      {skills.map((skill, index) => (
        <Skill 
          key={index} 
          name={skill.name} 
          position={skill.position}
        />
      ))}
    </Canvas>
  );
};

export default SkillsCanvas;