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
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav aria-label="Navigasi Utama">
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
                Beranda
              </NavLink>
            </li>
            <li role="none">
              <NavLink 
                to="/tentang" 
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/tentang' ? 'page' : undefined}
              >
                Tentang Saya
              </NavLink>
            </li>
            <li role="none">
              <NavLink 
                to="/pengalaman" 
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/pengalaman' ? 'page' : undefined}
              >
                Pengalaman
              </NavLink>
            </li>
            <li role="none">
              <NavLink 
                to="/portofolio" 
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/portofolio' ? 'page' : undefined}
              >
                Portofolio
              </NavLink>
            </li>
            <li role="none">
              <NavLink 
                to="/sertifikat" 
                role="menuitem"
                className={({ isActive }) => isActive ? 'active' : ''}
                aria-current={location.pathname === '/sertifikat' ? 'page' : undefined}
              >
                Sertifikat
              </NavLink>
            </li>
            <li role="none">
              <NavLink 
                to="/kontak" 
                role="menuitem"
                className={({ isActive }) => isActive ? 'active contact-link' : 'contact-link'}
                aria-current={location.pathname === '/kontak' ? 'page' : undefined}
              >
                Kontak
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
