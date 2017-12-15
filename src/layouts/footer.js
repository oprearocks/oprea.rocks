import React from 'react';
import Link from 'gatsby-link'

import './footer.scss'

const Footer = () => (
  <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Archive</Link>
        </li>
      </ul>
  </footer>
)

export default Footer
