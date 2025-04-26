import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const scrollToSection = (sectionId) => {
        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <button className="mobile-menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </button>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#/" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="nav-link">
                            Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="nav-link">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;