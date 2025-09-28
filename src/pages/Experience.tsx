import React from 'react';
import './Experience.css';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points?: string[];
  achievement?: string;
};

// Data tidak berubah, implementasi di JSX yang akan kita perbaiki
const experiences: ExperienceItem[] = [
  {
    role: 'HR Supervisor / Analyst',
    company: 'TRANS TV',
    location: 'Jakarta, Indonesia',
    period: 'Juli 2018 – Sekarang',
    points: [
      'Menyelesaikan rata-rata 5-7 perselisihan industrial per bulan, berhasil <strong>mengurangi keluhan formal (grievance) lebih dari 15%</strong> secara tahunan.',
      'Memberikan edukasi kebijakan perusahaan kepada lebih dari 500 karyawan, yang berdampak pada <strong>penurunan pertanyaan terkait kepatuhan sebesar 20%</strong>.',
      'Menganalisis metrik SDM untuk mengidentifikasi faktor pendorong turnover, menghasilkan implementasi program keterlibatan yang <strong>menurunkan turnover sukarela sebesar 10%</strong>.',
    ],
    achievement: 'Mengembangkan skrip Python untuk mengotomatisasi laporan SDM bulanan, <strong>meningkatkan efisiensi proses sebesar 90%</strong> (dari 2 hari menjadi 3 jam).'
  },
  {
    role: 'HR Supervisor',
    company: 'TRANS TV',
    location: 'Jakarta, Indonesia',
    period: 'April 2014 – Juni 2018',
    points: [
      'Mengelola proses penggajian dan administrasi untuk 300+ karyawan dengan <strong>tingkat akurasi 99.8%</strong>.',
      'Menegosiasikan ulang paket tunjangan dengan vendor, menghasilkan <strong>penghematan biaya tahunan sebesar 10%</strong> bagi perusahaan.',
      'Merancang program onboarding baru, yang <strong>meningkatkan skor kepuasan karyawan baru sebesar 25%</strong> dalam 90 hari pertama.',
    ]
  },
  {
    role: 'Staf HR',
    company: 'PT. Rifa Putra Utama',
    location: 'Jakarta, Indonesia',
    period: 'Februari 2012 – Januari 2014',
    points: [
      'Memproses administrasi SDM dasar, termasuk data karyawan, absensi, dan cuti.',
    ],
    achievement: 'Mengimplementasikan sistem pengarsipan digital, <strong>mengurangi waktu pencarian dokumen sebesar 30%</strong> dan memastikan 100% kepatuhan pelaporan.'
  }
];

const Experience: React.FC = () => {
  const hasData = experiences.length > 0;

  return (
    <div className="experience-page">
      {/* PERBAIKAN: Judul diubah menjadi lebih relevan */}
      <h1>Pengalaman Profesional & Keahlian</h1>

      <section className="xp-stats">
        <div className="stat">
          <span className="value">10+ thn</span>
          <span className="label">Total Pengalaman</span>
        </div>
        <div className="stat">
          <span className="value">15%↓</span>
          <span className="label">Keluhan Formal</span>
        </div>
        <div className="stat">
          <span className="value">90%↑</span>
          <span className="label">Efisiensi Laporan</span>
        </div>
        <div className="stat">
          <span className="value">500+</span>
          <span className="label">Karyawan Dilayani</span>
        </div>
      </section>

      {hasData && (
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={`${exp.company}-${index}` }>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company} | {exp.location}</h4>
                <p className="period">{exp.period}</p>
                {exp.points && (
                  <ul>
                    {/*
                      PERBAIKAN KRITIS:
                      Menggunakan dangerouslySetInnerHTML untuk merender tag <strong>.
                      Ini mengubah <li key={i}>{point}</li> menjadi seperti di bawah.
                    */}
                    {exp.points.map((point, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                    ))}
                  </ul>
                )}
                {exp.achievement && (
                  <p className="achievement">
                    <strong>Pencapaian Kunci:</strong>
                    {/* PERBAIKAN KRITIS: Lakukan hal yang sama untuk achievement */}
                    <span dangerouslySetInnerHTML={{ __html: exp.achievement.replace('Pencapaian Kunci: ', '') }} />
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/*
        PERBAIKAN: Judul "Keterampilan" dan "Pendidikan" sekarang menggunakan
        kelas CSS `.section-title`  untuk pemisahan visual yang lebih baik.
      */}
      <section>
        <h2 className="section-title">Keterampilan</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Keahlian SDM</h3>
            <ul>
              <li>Hubungan Industrial</li>
              <li>Hubungan Karyawan</li>
              <li>Hukum Ketenagakerjaan Indonesia</li>
              <li>Manajemen Kinerja</li>
              <li>Penanganan Keluhan</li>
              <li>Negosiasi</li>
              <li>Akuisisi Talenta</li>
              <li>Kompensasi & Tunjangan</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Keterampilan Teknis</h3>
            <ul>
              <li>Analisis Data SDM</li>
              <li>HRIS</li>
              <li>Python (Otomatisasi Laporan)</li>
              <li>Microsoft Excel (Tingkat Lanjut: Pivot Table, VLOOKUP)</li>
              <li>Microsoft PowerPoint</li>
              <li>Microsoft Word</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Keterampilan Interpersonal</h3>
            <ul>
              <li>Manajemen Konflik</li>
              <li>Pemecahan Masalah</li>
              <li>Komunikasi Profesional</li>
              <li>Manajemen Proyek</li>
              <li>Kepemimpinan</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Pendidikan</h2>
        <div className="education-card">
          <h3>Sarjana Psikologi (S.Psi)</h3>
          <h4>Universitas Muhammadiyah Prof. Dr. Hamka, Jakarta</h4>
          <p className="graduation-details">Lulus: 2011 | IPK: 3.46 / 4.00</p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
