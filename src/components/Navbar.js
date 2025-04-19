import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) setIsOpen(false);
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('click', closeMenu);
    }

    // Cleanup function
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  // Prevent clicks inside the navbar from closing the menu
  const handleNavClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className="navbar" onClick={handleNavClick}>
      <div className="navbar-header">
        <h2>Aarya Pathak</h2>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`nav-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/blogs" onClick={toggleMenu}>Blogs</Link></li>
          <li><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;