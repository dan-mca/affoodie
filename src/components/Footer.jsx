import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Affoodie &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;
