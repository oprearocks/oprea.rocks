import React from 'react';
import Link from 'gatsby-link'
import './header.scss';

const Header = () => (
  <header className="c-header">
    <h1 className="c-header__logo">
      <Link className="c-header__logo-image" to="/">
        oprea.rocks
      </Link>
      <span className="c-header__logo-tagLine">
        Life between pen, paper and computer
      </span>
    </h1>
    <nav className="c-header__nav">
      <ul className="c-header__navList">
        <li>
          <Link to="/blog/">Articles</Link>
        </li>
        <li>
          <Link to="/recommendations/">Recommendations</Link>
        </li>
        <li>
          <Link to="/reading">Reading List</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
