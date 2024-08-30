// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import navbarStyles from './NavbarStyles'; // Importera stilarna

function Navbar() {
  return (
    <div style={navbarStyles.container}>
    <nav style={navbarStyles.nav}>
      <ul style={navbarStyles.ul}>
        <li style={navbarStyles.li}><Link to="/" style={navbarStyles.link}>Hem</Link></li>
        <li style={navbarStyles.li}><Link to="/about" style={navbarStyles.link}>Om Mig</Link></li>
        <li style={navbarStyles.li}><Link to="/compression-clothes" style={navbarStyles.link}>Kompressionskläder</Link></li>
        <li style={navbarStyles.li}><Link to="/treatments" style={navbarStyles.link}>Behandlingar</Link></li>
        <li style={navbarStyles.li}><Link to="/lipodem" style={navbarStyles.link}>Lipödem</Link></li> {/* Ny länk */}
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
