import React from 'react';
import ProjectSpotlight from '../components/ProjectSpotlight';
import './Portfolio.css';

type PortfolioItem = {
  title: string;
  problem: string;
  solution: string;
  outcome: React.ReactNode;
  imageUrl: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
};

const portfolioData: PortfolioItem[] = [
  {
    title: 'Otomatisasi Laporan SDM dengan Python',
    problem: 'Proses pembuatan laporan SDM bulanan (turnover, absensi, demografi) sangat manual, memakan waktu 2 hari kerja penuh, dan rentan terhadap human error.',
    solution: 'Saya secara mandiri mempelajari dasar-dasar Python dan mengembangkan sebuah skrip sederhana untuk menarik, membersihkan, dan memvisualisasikan data dari sistem HRIS kami.',
    outcome: (
      <ul>
        <li><strong>Efisiensi Meningkat 90%:</strong> Waktu pengerjaan berkurang dari 16 jam (2 hari) menjadi kurang dari 3 jam.</li>
        <li><strong>Akurasi Data 100%:</strong> Menghilangkan risiko kesalahan manual dalam penyusunan laporan.</li>
        <li><strong>Wawasan Lebih Cepat:</strong> Manajemen mendapatkan data krusial lebih awal untuk pengambilan keputusan strategis.</li>
      </ul>
    ),
    imageUrl: '/portfolio/automation-dashboard.jpg',
    imageAlt: 'Dashboard otomatisasi laporan SDM dengan visualisasi data',
    imagePosition: 'right'
  },
  {
    title: 'Redesain Program Onboarding untuk Meningkatkan Kepuasan',
    problem: 'Survei internal menunjukkan bahwa karyawan baru merasa kurang terhubung dan tidak sepenuhnya memahami budaya perusahaan dalam 3 bulan pertama mereka.',
    solution: 'Saya merancang ulang program onboarding dari proses administratif menjadi sebuah "perjalanan 90 hari". Ini mencakup sesi perkenalan yang lebih terstruktur, program buddy system, dan check-in rutin dengan manajer dan HR.',
    outcome: (
      <ul>
        <li><strong>Kepuasan Karyawan Baru Naik 25%:</strong> Diukur melalui survei anonim setelah 90 hari.</li>
        <li><strong>Waktu Produktivitas Lebih Cepat:</strong> Karyawan baru merasa lebih cepat beradaptasi dan berkontribusi pada tim mereka.</li>
      </ul>
    ),
    imageUrl: '/portfolio/onboarding-process.jpg',
    imageAlt: 'Infografis proses onboarding karyawan baru',
    imagePosition: 'left'
  },
  {
    title: 'Strategi Mediasi Proaktif untuk Mengurangi Keluhan',
    problem: 'Tingginya jumlah keluhan formal (grievance) yang masuk, menciptakan lingkungan kerja yang reaktif dan memakan banyak waktu manajemen.',
    solution: 'Saya mengimplementasikan "klinik HR" mingguan di mana karyawan bisa berkonsultasi secara informal dan proaktif. Selain itu, saya mengadakan sesi edukasi kebijakan secara berkala untuk menjembatani kesenjangan informasi.',
    outcome: (
      <ul>
        <li><strong>Keluhan Formal Turun 15%:</strong> Sebagian besar masalah berhasil diselesaikan pada tahap informal.</li>
        <li><strong>Kepercayaan Meningkat:</strong> Karyawan merasa lebih nyaman mendekati HR sebelum masalah menjadi besar.</li>
      </ul>
    ),
    imageUrl: '/portfolio/mediation-workshop.jpg',
    imageAlt: 'Sesi workshop mediasi dan penyelesaian konflik',
    imagePosition: 'right'
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <h1>Proyek Unggulan</h1>
      <p className="portfolio-intro">
        Berikut adalah beberapa contoh bagaimana saya menerapkan keahlian saya untuk menciptakan solusi yang berdampak.
      </p>
      <div className="portfolio-container">
        {portfolioData.map((project, index) => (
          <ProjectSpotlight 
            key={index} 
            title={project.title}
            problem={project.problem}
            solution={project.solution}
            outcome={project.outcome}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
