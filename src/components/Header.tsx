import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header" role="banner">
      <div className="nav-container">
        <div className="logo" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">MOCH. WAHYU HERIYANTO</span>
        </div>

        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav aria-label="Main Navigation">
          <ul role="menubar" className={isMenuOpen ? 'show' : ''}>
            <li role="none"><NavLink to="/">Home</NavLink></li>
            <li role="none"><NavLink to="/about">About Me</NavLink></li>
            <li role="none"><NavLink to="/experience">Experience</NavLink></li>
            <li role="none"><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li role="none"><NavLink to="/certificates">Certificates</NavLink></li>
            <li role="none"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
