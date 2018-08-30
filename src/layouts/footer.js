import React from 'react'
import Link from 'gatsby-link'

import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <ul className="footer-links">
      <li>
        <Link activeClassName="active" to="/blog">
          Articles
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/recommendations">
          Recommendations
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/reading">
          Reading List
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/hire">
          Hire me!
        </Link>
      </li>
    </ul>
  </footer>
)

export default Footer
