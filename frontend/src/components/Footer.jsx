import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '20px'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const columnStyle = {
    flex: '1',
    padding: '10px',
    minWidth: '200px'
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0
  };

  const liStyle = {
    marginBottom: '10px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  const socialLinkStyle = {
    color: '#fff',
    fontSize: '20px',
    margin: '0 10px',
    textDecoration: 'none'
  };

  const bottomStyle = {
    borderTop: '1px solid #444',
    paddingTop: '10px',
    marginTop: '20px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4>JobConnect</h4>
          <p>Your trusted platform to find the best jobs that fit your skills and aspirations.</p>
        </div>
        <div style={columnStyle}>
          <h4>Quick Links</h4>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="/about" style={linkStyle}>About Us</a></li>
            <li style={liStyle}><a href="/jobs" style={linkStyle}>Find Jobs</a></li>
            <li style={liStyle}><a href="/employers" style={linkStyle}>Employers</a></li>
            <li style={liStyle}><a href="/contact" style={linkStyle}>Contact Us</a></li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h4>Support</h4>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="/faq" style={linkStyle}>FAQ</a></li>
            <li style={liStyle}><a href="/privacy-policy" style={linkStyle}>Privacy Policy</a></li>
            <li style={liStyle}><a href="/terms" style={linkStyle}>Terms & Conditions</a></li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h4>Stay Connected</h4>
          <div>
            <a href="#" style={socialLinkStyle}><i className="fab fa-facebook-f"></i></a>
            <a href="#" style={socialLinkStyle}><i className="fab fa-twitter"></i></a>
            <a href="#" style={socialLinkStyle}><i className="fab fa-linkedin-in"></i></a>
            <a href="#" style={socialLinkStyle}><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div style={bottomStyle}>
        <p>&copy; 2024 JobConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
