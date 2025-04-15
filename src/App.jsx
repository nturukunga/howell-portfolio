import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/ui/Navbar";
import MatrixHero from "./components/MatrixHero";
import MatrixSkills from "./components/MatrixSkills";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";

const App = () => {
  // Make body background black for Matrix theme
  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <MatrixRain />
        
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 text-[#00ff00] pt-16">
            <MatrixHero />
            
            <div className="section-spacing">
              <About />
            </div>
            
            <div className="section-spacing">
              <MatrixSkills />
            </div>
            
            <div className="section-spacing">
              <Projects />
            </div>
            
            {/* Contact Section */}
            <section id="contact" className="py-24 mb-24 contact-section">
              <h2 className="text-3xl font-bold mb-16 matrix-flicker text-[#00ff00] text-center">
                Contact Me
              </h2>
              <div className="matrix-terminal p-6 bg-opacity-50 backdrop-filter backdrop-blur-sm">
                <p className="mb-10 text-center">Initialize secure communication protocol...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 contact-grid">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">📱</span>
                    <span className="text-lg">+254 716 369 996</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">📧</span>
                    <a href="mailto:Munenehowell3@gmail.com" className="hover:underline text-lg">
                      Munenehowell3@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🌐</span>
                    <a 
                      href="https://github.com/nturukunga" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline text-lg"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">🔗</span>
                    <a 
                      href="https://linkedin.com/in/howell-munene" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline text-lg"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              
              <footer className="text-center mt-24 text-sm opacity-70">
                <p>© {new Date().getFullYear()} Howell Munene • All Rights Reserved</p>
                <p className="mt-2 mb-8">
                  <span className="matrix-flicker">{">"}</span> Portfolio v1.0
                </p>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

