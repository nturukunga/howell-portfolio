import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you create this CSS file for styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    // Use anchor links for hash-based navigation which works better in static deployments
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Removed logo as requested */}
                <button className="mobile-menu-icon" onClick={toggleMenu}>
                    {isOpen ? '✖' : '☰'}
                </button>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#/" className="nav-link" onClick={() => setIsOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>
                            Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;