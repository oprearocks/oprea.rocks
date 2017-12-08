import React from 'react';
import Link from 'gatsby-link'

const Footer = () => (
  <footer>
    <nav>
      <ul>
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
    </nav>
  </footer>
)

export default Footer
