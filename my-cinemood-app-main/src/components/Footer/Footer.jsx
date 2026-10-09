import React from 'react';
import './Footer.css';

const Footer = ({darkMode}) => {
  return (
    <footer className={darkMode?"dark":""}id="footer">
      <p>© 2025 Cinemood. All rights reserved.</p>
      <p>Disclaimer: This is a demo website for movie lovers only.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/vinay-varma-pericharla-462480284/">LinkedIn</a>
        <a href="https://x.com/VinayVarma_">Twitter</a>
        <a href="https://www.instagram.com/vinayvarma_pericharla/">Instagram</a>
      </div>
      <p>Created with ♥ for movie lovers.</p>
    </footer>
  );
};

export default Footer;
