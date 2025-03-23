// src/components/ui/Contact.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ContactForm = styled(motion.div)`
  flex: 1;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #915EFF, #2A77FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #915EFF, #2A77FF);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const ContactMethodText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: #ffffff;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const StyledForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #915EFF;
    box-shadow: 0 0 0 2px rgba(145, 94, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #915EFF;
    box-shadow: 0 0 0 2px rgba(145, 94, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #915EFF, #2A77FF);
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(145, 94, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

// SVG Icons
const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Your message has been sent! This is a demonstration.');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <ContactContainer>
      <ContactInfo
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactDescription>
          I'm currently looking for new opportunities to grow my skills and contribute to meaningful projects. 
          Feel free to reach out if you have any questions or just want to connect!
        </ContactDescription>
        
        <ContactMethod>
          <IconContainer>
            <EmailIcon />
          </IconContainer>
          <ContactMethodText>
            <h4>Email</h4>
            <p>Munenehowell3@gmail.com</p>
          </ContactMethodText>
        </ContactMethod>
        
        <ContactMethod>
          <IconContainer>
            <PhoneIcon />
          </IconContainer>
          <ContactMethodText>
            <h4>Phone</h4>
            <p>+254 716 369 996</p>
          </ContactMethodText>
        </ContactMethod>
        
        <ContactMethod>
          <IconContainer>
            <LocationIcon />
          </IconContainer>
          <ContactMethodText>
            <h4>Location</h4>
            <p>Nairobi, Kenya</p>
          </ContactMethodText>
        </ContactMethod>
      </ContactInfo>
      
      <ContactForm
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </FormGroup>

          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <ArrowIcon />}
          </SubmitButton>
        </StyledForm>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;