import React from 'react';
import { Link } from 'react-router-dom';
import navbarStyles from './NavbarStyles'; 

function Navbar() {
  return (
    <nav style={navbarStyles.nav}>
      <ul style={navbarStyles.ul}>
        <li style={navbarStyles.li}><Link to="/" style={navbarStyles.link}>Hem</Link></li>
        <li style={navbarStyles.li}><Link to="/about" style={navbarStyles.link}>Om Mig</Link></li>
        <li style={navbarStyles.li}><Link to="/compression-clothes" style={navbarStyles.link}>Kompressionskläder</Link></li>
        <li style={navbarStyles.li}><Link to="/treatments" style={navbarStyles.link}>Behandlingar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
