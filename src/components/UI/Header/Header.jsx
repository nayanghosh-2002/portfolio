import React, { useState } from 'react';
import './headerstyle.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        
        <div className="logo-container">
          <span className='name'>Nayan's</span>
        </div>

        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isMenuOpen ? '✕' : '☰'}
        </button>


        
        <nav className={`navigation-container ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section, index) => (
              <li key={section}>
                <button onClick={() => scrollToSection(section)}>
                  <span></span> {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
