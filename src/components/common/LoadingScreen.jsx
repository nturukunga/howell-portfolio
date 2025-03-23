// src/components/common/LoadingScreen.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #050816;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Loader = styled(motion.div)`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(145, 94, 255, 0.3);
  border-top-color: #915EFF;
  border-radius: 50%;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <Loader
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </LoadingContainer>
  );
};

// Make sure to use default export
export default LoadingScreen;