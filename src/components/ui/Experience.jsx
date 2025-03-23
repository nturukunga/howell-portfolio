// src/components/ui/About.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(123, 67, 151, 0.3),
      rgba(220, 36, 48, 0.3)
    );
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutContent = styled(motion.div)`
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #915EFF, #2A77FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
`;

const HighlightBox = styled.div`
  background: rgba(145, 94, 255, 0.1);
  border-left: 4px solid #915EFF;
  padding: 1.5rem;
  border-radius: 0 8px 8px 0;
  margin: 2rem 0;
`;

const HighlightTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #915EFF;
`;

const HighlightList = styled.ul`
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutImage
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/api/placeholder/500/350" alt="Howell Munene" />
      </AboutImage>
      
      <AboutContent
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <AboutTitle>My Background & Journey</AboutTitle>
        <AboutText>
          I'm an organized and dependable Software Development student based in Nairobi, Kenya. 
          With a strong foundation in programming, data management, and user experience design, 
          I'm passionate about creating meaningful digital experiences that solve real-world problems.
        </AboutText>
        
        <AboutText>
          My journey in technology began with my interest in web development and design, which led 
          me to pursue a degree in Software Development at KCA University. Along the way, I've gained 
          practical experience in sales and office administration, enhancing my communication skills 
          and ability to understand user needs.
        </AboutText>
        
        <HighlightBox>
          <HighlightTitle>What Drives Me</HighlightTitle>
          <HighlightList>
            <li>
              <strong>Building Impactful Solutions:</strong> I'm enthusiastic about developing software that makes a meaningful difference.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Technology evolves rapidly, and I'm committed to staying at the forefront.
            </li>
            <li>
              <strong>Collaborative Creation:</strong> I believe the best products emerge from diverse teams working together.
            </li>
            <li>
              <strong>User-Centered Design:</strong> My approach focuses on creating intuitive, accessible experiences.
            </li>
          </HighlightList>
        </HighlightBox>
        
        <AboutText>
          As I continue my education and build my portfolio, I'm seeking opportunities to contribute to 
          innovative projects and work alongside experienced developers. My goal is to grow into a 
          versatile software developer who can tackle complex challenges with creativity and technical excellence.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;