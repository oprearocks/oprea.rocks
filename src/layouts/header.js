import React from 'react';
import Link from 'gatsby-link'

const Header = () => (
  <header>
    <h1>
      <Link to="/">oprea.rocks</Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/blog/">Articles</Link>
        </li>
        <li>
          <Link to="/reading">Reading List</Link>
        </li>
        <li>
          <Link to="/recommendations/">Recommendations</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
