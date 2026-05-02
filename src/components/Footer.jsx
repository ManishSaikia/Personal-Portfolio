import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h2 className="font-display" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Wanna Connect with me?</h2>
        <h3 className="font-mono" style={{ fontSize: '1.2rem', marginBottom: '3rem', letterSpacing: '0.1em' }}>LET'S TALK</h3>

        <div style={{ display: 'flex', gap: '4rem', margin: '0 auto 4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div>
            <p className="font-mono" style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--footer-muted)' }}>LINKEDIN</p>
            <a href="https://www.linkedin.com/in/manish-saikia/" target="_blank" rel="noopener noreferrer" className="font-ui footer-link" style={{ fontSize: '1.2rem' }}>Manish Saikia</a>
          </div>
          <div>
            <p className="font-mono" style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--footer-muted)' }}>EMAIL</p>
            <a href="mailto:msaikia555@gmail.com" target="_blank" rel="noopener noreferrer" className="font-ui footer-link" style={{ fontSize: '1.2rem' }}>msaikia555@gmail.com</a>
          </div>
          <div>
            <p className="font-mono" style={{ marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--footer-muted)' }}>PHONE</p>
            <a href="tel:+917002708316" target="_blank" rel="noopener noreferrer" className="font-ui footer-link" style={{ fontSize: '1.2rem' }}>(+91)7002708316</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--footer-border)', width: '100%', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="font-display" style={{ fontSize: '1.5rem' }}>Crazyyyyyyyy</p>
          <p className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--footer-muted)' }}>YOUR FRIENDLY NEIGHBORHOOD SDE - মনিষ সাইকীয়া</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
