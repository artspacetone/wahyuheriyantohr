import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <main className="about-page">
      <div className="about-container">

        <div className="about-header">
          <img
            src="/profile.jpg"
            alt="Wahyu Panca Anugrah"
            className="about-profile-image"
            width={150}
            height={150}
            loading="lazy"
          />
          <h1>Dari Psikologi ke Python: Perjalanan Saya Memanusiakan Dunia Kerja</h1>
        </div>

        <div className="about-narrative">
          <p>
            Perjalanan karier saya di dunia Sumber Daya Manusia dimulai dari ketertarikan mendalam pada psikologi—memahami apa yang memotivasi dan menggerakkan manusia. Selama lebih dari satu dekade, saya menerapkan pemahaman ini di TRANS TV, di mana saya tidak hanya mengelola hubungan industrial, tetapi juga mendengarkan dan menyelesaikan masalah yang dihadapi ratusan karyawan.
          </p>
          <p>
            Saya belajar bahwa kebijakan terbaik sekalipun tidak akan efektif tanpa dialog yang tulus. Saya memediasi ratusan perselisihan, bukan hanya untuk menyelesaikan konflik, tetapi untuk membangun jembatan pemahaman antara karyawan dan manajemen. Hasilnya? Penurunan keluhan formal lebih dari 15% dan lingkungan kerja yang lebih terbuka.
          </p>
          <p>
            Namun, saya menyadari empati saja tidak cukup. Di era modern, HR harus didukung oleh data. Rasa penasaran membawa saya untuk belajar Python, bukan untuk menjadi programmer, tetapi untuk menjawab pertanyaan-pertanyaan penting: 'Mengapa karyawan resign?', 'Bagaimana cara kita meningkatkan efisiensi tanpa mengorbankan kualitas?'. Dengan mengotomatisasi laporan yang tadinya memakan waktu dua hari menjadi tiga jam, saya membuktikan bahwa teknologi dapat membebaskan kita dari tugas repetitif untuk fokus pada hal yang paling penting: manusia.
          </p>
        </div>

        <blockquote className="mission-statement">
          Misi saya sederhana: menciptakan tempat kerja di mana karyawan merasa dihargai dan perusahaan dapat bertumbuh secara berkelanjutan. Saya siap membawa kombinasi unik dari keahlian hubungan industrial, analisis data, dan semangat untuk inovasi ke dalam tim Anda.
        </blockquote>

        <div className="about-cta">
          <p>Lihat bagaimana saya menerapkan pendekatan ini dalam praktik:</p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="cta-link primary">Lihat Proyek Unggulan</Link>
            <Link to="/experience" className="cta-link secondary">Lihat Riwayat Kerja</Link>
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;
