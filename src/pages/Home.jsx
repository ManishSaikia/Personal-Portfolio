import React from 'react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="page-container">
      <div style={{ marginBottom: '4rem' }}>
        <span className="font-mono kicker">@ Code by মনিষ</span>
        <h1 className="hero-title font-display" style={{ maxWidth: '900px' }}>
          Coding Idea's into Reality
        </h1>
        <p className="deck" style={{ maxWidth: '600px' }}>
          Create innovative solutions using modern technologies and AI.
        </p>
      </div>

      <div style={{ marginBottom: '4rem', padding: '2rem 0', borderTop: '2px solid var(--ink)', borderBottom: '1px solid var(--hairline)' }}>
        <h2 className="section-title font-display" style={{ marginBottom: '1rem' }}>Hi myself <i>Manish Saikia</i></h2>
        <div className="grid-2">
          <p className="font-body" style={{ fontSize: '1.1rem' }}>
            I'm a full-stack SDE with 2+ years building production-grade platforms. I love working with new technologies and AI. Hobbies are programming and painting. Born and raised in অসম (Assam)
          </p>
          <p className="font-body" style={{ fontSize: '1.1rem' }}>
            This is my Personal Portfolio, a space where I share my journey, my work, and my passion for technology. Feel free to explore and leave a message :)
          </p>
        </div>
      </div>

      {/* ─── Education ───────────────────────────────────── */}
      <div style={{ marginBottom: '0' }}>
        <div className="section-ribbon">
          <span className="font-mono">EDUCATION</span>
        </div>
        <p className="font-mono" style={{ fontSize: '0.85rem', margin: '1.5rem 0 0', color: 'var(--text-muted)' }}>
          Academic milestones.
        </p>
      </div>

      <div className="timeline">

        <div className="timeline-item below">
          <div className="timeline-dot-wrap">
            <div className="timeline-dot"></div>
            <span className="font-mono timeline-year">2017</span>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-card">
            <p className="font-mono timeline-label">HSLC</p>
            <p className="timeline-school">Kendriya Vidyalaya CRPF</p>
            <p className="font-mono timeline-result">9.6 CGPA</p>
          </div>
        </div>

        <div className="timeline-item above">
          <div className="timeline-card">
            <p className="font-mono timeline-label">HIGHER SECONDARY · SCIENCE</p>
            <p className="timeline-school">Kendriya Vidyalaya CRPF</p>
            <p className="font-mono timeline-result">75%</p>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-dot-wrap">
            <div className="timeline-dot"></div>
            <span className="font-mono timeline-year">2017 – 2019</span>
          </div>
        </div>

        <div className="timeline-item below">
          <div className="timeline-dot-wrap">
            <div className="timeline-dot"></div>
            <span className="font-mono timeline-year">2019 – 2023</span>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-card">
            <p className="font-mono timeline-label">GRADUATION · B.TECH CSE</p>
            <p className="timeline-school">Kaziranga University</p>
            <p className="font-mono timeline-result">8.5 CGPA</p>
          </div>
        </div>

      </div>

      {/* ─── Work Experience ─────────────────────────────── */}
      <div style={{ marginBottom: '3rem' }}>
        <div className="section-ribbon">
          <span className="font-mono">WORK EXPERIENCE</span>
        </div>
        <p className="font-mono" style={{ fontSize: '0.85rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
          Designing and shipping ETL automation, scalable front-end components, and business intelligence dashboards used in enterprise production environments.
        </p>
      </div>

      <div className="timeline">
        {/* Item 1 — BELOW the spine */}
        <div className="timeline-item below">
          <div className="timeline-dot-wrap">
            <div className="timeline-dot"></div>
            <span className="font-mono timeline-year">Jan 2024 - June 2025</span>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-card" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-mono timeline-label">PRODUCT SIDE</p>
            <p className="timeline-school">Tigmaminds</p>
            <p className="font-body" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Engineered a custom Node-RED Validation Node reducing pipeline complexity by 90%. Delivered production-grade ETL features and optimized Angular performance for large datasets.
            </p>
          </div>
        </div>

        {/* Item 2 — ABOVE the spine */}
        <div className="timeline-item above">
          <div className="timeline-card" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column' }}>
            <p className="font-mono timeline-label">CLIENT SIDE</p>
            <p className="timeline-school">Tigmaminds</p>
            <p className="font-body" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Built automated business workflows and Power BI dashboards that eliminated manual reporting effort for operational reviews.
            </p>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-dot-wrap">
            <div className="timeline-dot"></div>
            <span className="font-mono timeline-year">June 2025 - Present</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <button className="btn-primary font-ui" onClick={() => setActiveTab('skills')}>
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Home;
