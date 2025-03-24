// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import styled from 'styled-components';

// Pages
import Home from '../src/pages/Home';
import About from './components/ui/About';
import Projects from './components/ui/Experience';
import Contact from './components/ui/Contact';

// Components
import Navbar from './components/ui/Navbar';
import LoadingScreen from './components/common/loadingscreen';
import Footer from './components/ui/Footer';

const AppContainer = styled.div`
  background-color: #050816;
  color: #fff;
  overflow-x: hidden;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </AppContainer>
    </Router>
  );
};
<BrowserRouter basename="/howell-portfolio"></BrowserRouter>
export default App;