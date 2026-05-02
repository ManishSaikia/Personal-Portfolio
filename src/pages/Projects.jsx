import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Car Advisor",
      description: "An AI-powered car advisor Chat App",
      link: "https://ai-car-advisor-three.vercel.app/",
      image: "/car-advisor.jpg"
    },
    {
      title: "Trading Journal - Playbook",
      description: "Trading Journal and Guide ( PRESONAL PROJECT )",
      link: "https://github.com/ManishSaikia/trading-jounalbook",
      image: "/trading-journal.jpg"
    },
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '4rem' }}>
        <span className="font-mono kicker">ARCHIVE</span>
        <h1 className="hero-title font-display">Welcome to my realm</h1>
        <p className="deck">Of wild projects and awesome creations.</p>
      </div>

      <div className="section-ribbon">
        <span className="font-mono">PROJECT INDEX</span>
      </div>

      <div className="grid-2">
        {projects.map((project, index) => (
          <div key={index} className="story-tile">
            <div className="story-tile-img" style={{ height: '300px', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0.5rem' }}>
              <div>
                <span className="font-mono kicker">{project.description}</span>
                <h2 className="story-tile-title">{project.title}</h2>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono inline-link" style={{ fontSize: '0.85rem' }}>VIEW ↗</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
