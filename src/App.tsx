import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/pengalaman" element={<Experience />} />
          <Route path="/portofolio" element={<Portfolio />} />
          <Route path="/sertifikat" element={<Certificates />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
