import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      description: "Building scalable and performant software using modern programming languages.",
      tags: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL (MySQL)", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      description: "Leveraging powerful frameworks to create robust and interactive applications.",
      tags: ["Angular", "Next.js", "Node.js", "Node-RED", "Flask", "Bootstrap", "Angular Material"]
    },
    {
      title: "Testing",
      description: "Ensuring software quality and reliability through comprehensive testing methodologies.",
      tags: ["Playwright", "Automated Testing", "Postman (API Testing)"]
    },
    {
      title: "Tools",
      description: "Utilizing industry-standard tools for development, version control, and data visualization.",
      tags: ["GitHub", "Power BI", "VS Code"]
    },
    {
      title: "Core Competencies",
      description: "Foundational computer science principles and advanced system engineering concepts.",
      tags: ["Data Structures & Algorithms", "API Integration", "ETL Systems", "Scalable System Design", "Root Cause Analysis", "Secure Coding Practices"]
    }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '4rem' }}>
        <span className="font-mono kicker">PORTFOLIO</span>
        <h1 className="hero-title font-display">Experience &amp; Expertise</h1>
        <p className="deck">A detailed look at my professional journey and the technical skills I've honed along the way.</p>
        <p className='deck'>Want a detailed resume? Click the button below.</p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href="/Resume.pdf"
            download="Manish_Saikia_Resume.pdf"
            className="btn-primary font-ui"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>

      <div className="thick-divider"></div>

      {/* ─── Experience Section ─────────────────────────────── */}
      <div style={{ marginBottom: '4rem' }}>
        <div className="section-ribbon">
          <span className="font-mono">PROFESSIONAL EXPERIENCE</span>
        </div>

        {/* SDE Role */}
        <div style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--hairline)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <h2 className="font-display" style={{ fontSize: '2.2rem', margin: 0 }}>Software Development Engineer</h2>
            <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>JAN 2024 – PRESENT</span>
          </div>
          <p className="font-mono kicker" style={{ marginBottom: '2rem', color: 'var(--link-blue)', fontWeight: 'bold' }}>TIGMAMINDS · GUWAHATI</p>

          <div className="grid-2" style={{ gap: '3rem' }}>
            <div>
              <p className="font-mono" style={{ fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.1em', textDecoration: 'underline' }}>T-MOBILE (CONSULTANT) (JUN 2025 – PRESENT)</p>
              <ul className="font-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span>
                  Built Power BI dashboards adopted by T-Mobile’s OPS team for monthly business reviews, eliminating manual slide creation and saving hours of reporting effort per cycle.
                </li>
                <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span>
                  Designed and deployed automated business workflows on the ETL platform to fulfill operational requirements, reducing manual intervention for recurring data processes.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono" style={{ fontSize: '0.8rem', marginBottom: '1rem', letterSpacing: '0.1em', textDecoration: 'underline' }}>ETL PLATFORM (JAN 2024 – JUN 2025)</p>
              <ul className="font-body" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span>
                  Engineered a custom Node-RED Validation Node that consolidates full schema validation into a single node, cutting pipeline complexity by over 90%.
                </li>
                <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span>
                  Delivered production-grade features across connections, entities, workflows, and schedulers, shipping UI enhancements and API fixes directly to prod.
                </li>
                <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0 }}>—</span>
                  Optimized front-end performance for 10k+ record datasets using reusable Angular Material components with virtual scrolling and server-side pagination.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ML Intern Role */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <h2 className="font-display" style={{ fontSize: '2.2rem', margin: 0 }}>Machine Learning Intern</h2>
            <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>JULY 2022 – AUG 2022</span>
          </div>
          <p className="font-mono kicker" style={{ marginBottom: '2rem', color: 'var(--link-blue)', fontWeight: 'bold' }}>TCS ION · REMOTE</p>

          <ul className="font-body" style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '800px' }}>
            <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
              <span style={{ position: 'absolute', left: 0 }}>—</span>
              Built an HR salary prediction model using Linear and Logistic Regression in Python, achieving 92% accuracy through rigorous data cleaning and feature engineering.
            </li>
            <li style={{ marginBottom: '1rem', position: 'relative', paddingLeft: '1.5rem' }}>
              <span style={{ position: 'absolute', left: 0 }}>—</span>
              Created a visualization dashboard to forecast financial trade-offs for job transitions using predictive modelling.
            </li>
          </ul>
        </div>
      </div>

      <div className="thick-divider"></div>

      {/* ─── Skills Section ─────────────────────────────── */}
      <div className="section-ribbon" style={{ marginBottom: '3rem' }}>
        <span className="font-mono">TECHNICAL SKILLS</span>
      </div>

      <div className="grid-2">
        {skillCategories.map((category, index) => (
          <div key={index} style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--hairline)' }}>
            <h3 className="section-title font-display" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{category.title}</h3>
            <p className="font-body" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.5' }}>
              {category.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="font-mono brutalist-tag" style={{ margin: 0 }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
