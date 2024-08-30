import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarStyles from './NavbarStyles'; 
function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav style={navbarStyles.nav}>
      <ul style={navbarStyles.ul}>
        {['/', '/about', '/compression-clothes', '/treatments'].map((path, index) => (
          <li style={navbarStyles.li} key={path}>
            <Link
              to={path}
              style={hoveredLink === index ? { ...navbarStyles.link, ...navbarStyles.linkHover } : navbarStyles.link}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {['Hem', 'Om Mig', 'Kompressionskläder', 'Behandlingar'][index]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;