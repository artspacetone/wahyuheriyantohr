import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="header" role="banner">
      <div className="logo" itemScope itemType="https://schema.org/Person">
        <span itemProp="name">MOCH WAHYU HERIYANTO</span>
      </div>
      <nav aria-label="Main navigation">
        <ul role="menubar" aria-orientation="horizontal">
          <li role="none">
            <NavLink to="/" role="menuitem" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Beranda
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/tentang" 
              role="menuitem" 
              aria-current={location.pathname === '/tentang' ? 'page' : undefined}
            >
              Tentang Saya
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/pengalaman" 
              role="menuitem"
              aria-current={location.pathname === '/pengalaman' ? 'page' : undefined}
            >
              Pengalaman
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/portofolio" 
              role="menuitem"
              aria-current={location.pathname === '/portofolio' ? 'page' : undefined}
            >
              Portofolio
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/sertifikat" 
              role="menuitem"
              aria-current={location.pathname === '/sertifikat' ? 'page' : undefined}
            >
              Sertifikat
            </NavLink>
          </li>
          <li role="none">
            <NavLink 
              to="/kontak" 
              role="menuitem"
              aria-current={location.pathname === '/kontak' ? 'page' : undefined}
              className="contact-link"
            >
              Kontak
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
