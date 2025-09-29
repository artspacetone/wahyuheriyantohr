import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      role="banner"
    >
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
          <ul
            role="menubar"
            className={isMenuOpen ? 'show' : ''}
            aria-orientation="vertical"
          >
            <li role="none">
              <NavLink
                to="/"
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/about"
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About Me
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/experience"
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/experience' ? 'page' : undefined}
              >
                Experience
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/portfolio"
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/portfolio' ? 'page' : undefined}
              >
                Portfolio
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/certificates"
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/certificates' ? 'page' : undefined}
              >
                Certificates
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/contact"
                role="menuitem"
                className={({ isActive }) => isActive ? 'active contact-link' : 'contact-link'}
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
