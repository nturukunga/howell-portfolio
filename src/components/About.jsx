import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2 
        className="about-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p>
          I'm an organized and dependable Software Development student based in Nairobi, Kenya. 
          With a strong foundation in programming, data management, and user experience design, 
          I'm passionate about creating meaningful digital experiences that solve real-world problems.
        </p>
        <p>
          My journey in technology began with my interest in web development and design, which led 
          me to pursue a degree in Software Development at KCA University. Along the way, I've gained 
          practical experience in sales and office administration, enhancing my communication skills 
          and ability to understand user needs.
        </p>
        <p>
          As I continue my education and build my portfolio, I'm seeking opportunities to contribute to 
          innovative projects and work alongside experienced developers. My goal is to grow into a 
          versatile software developer who can tackle complex challenges with creativity and technical excellence.
        </p>
        <p>
          When I'm not coding, I enjoy learning about new technologies, contributing to open-source
          projects, and exploring the outdoors.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 