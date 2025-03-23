// src/components/ui/Education.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #915EFF, #2A77FF);
  }
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const EducationLogo = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: #915EFF;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Institution = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Period = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
`;

const Location = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const EducationDetails = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const DetailTitle = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #915EFF;
`;

const DetailList = styled.ul`
  padding-left: 1.2rem;
  
  li {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const MapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="rgba(255, 255, 255, 0.6)" />
  </svg>
);

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Software Development",
      institution: "KCA University",
      period: "September 2022 - Present",
      location: "Ruaraka, Nairobi, Kenya",
      details: [
        "Focus on programming languages including Java, .NET, and JavaScript",
        "Courses in data management, UI/UX design, and web development",
        "Project-based learning with emphasis on real-world applications",
        "Collaborative coding practices and version control with Git"
      ],
      logo: "KCA"
    },
    {
      degree: "High School Diploma",
      institution: "Njiiri School",
      period: "Completed March 2022",
      location: "Murang'a, Kenya",
      details: [
        "Member of St. John's Ambulance (2019 - 2022)",
        "Achieved Grade: C+",
        "Developed strong foundation in mathematics and sciences",
        "Participated in first aid training and community service"
      ],
      logo: "NS"
    }
  ];

  return (
    <EducationContainer>
      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <EducationHeader>
            <EducationInfo>
              <Degree>{edu.degree}</Degree>
              <Institution>{edu.institution}</Institution>
              <Period>{edu.period}</Period>
              <Location>
                <MapIcon /> {edu.location}
              </Location>
            </EducationInfo>
            <EducationLogo>{edu.logo}</EducationLogo>
          </EducationHeader>
          
          <EducationDetails>
            <DetailTitle>Highlights</DetailTitle>
            <DetailList>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </DetailList>
          </EducationDetails>
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

export default Education;