import React from 'react';
import Link from 'gatsby-link'

import './header.scss'

const Header = () => (
  <header className="header">
    <h1 className="header-logo">
      <Link className="header-logo-link" to="/">
        oprea.rocks
      </Link>
      <span className="header-tagline">
        Life between pen, paper and computer
      </span>
    </h1>
    <nav className="header-nav">
      <ul>
        <li>
          <Link activeClassName="active" to="/blog/">Articles</Link>
        </li>
        <li>
          <Link activeClassName="active" to="/recommendations/">Recommendations</Link>
        </li>
        <li>
          <Link activeClassName="active" to="/reading">Reading List</Link>
        </li>
        <li>
          <Link activeClassName="active" to="/hire">Hire me!</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
