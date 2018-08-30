import React from 'react'
import Link from 'gatsby-link'
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'

import './header.scss'

const Header = () => (
  <header className="header">
    <h1 className="header-logo">
      <Link className="header-logo-link" to="/" title="Go to homepage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 244 68.33"
          role="img"
          aria-label="Oprea.Rocks logo"
        >
          <title>Oprea.Rocks Logo</title>
          <g className="logo-image" id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M89.48,15.09H67.94v4.26H89.48c10.38,0,11.58,4.08,11.58,7.14a5.75,5.75,0,0,1-2.87,5c-2.1,1.39-5,2.09-8.71,2.09H67.94V54.27H72.5V38H88.82c4.86,0,8.85-.94,11.86-2.8a9.65,9.65,0,0,0,4.88-8.66C105.56,21.29,102.77,15.09,89.48,15.09Z" />
              <path d="M150,45.27a12.47,12.47,0,0,0-1.61-6.91,8.83,8.83,0,0,0-3.79-3.29,12.13,12.13,0,0,0,3.63-3,9.41,9.41,0,0,0,2.19-6.21c-.14-3.71-1.61-6.48-4.38-8.26-2.61-1.67-6.44-2.49-11.7-2.49h-21.6v4.26h21.9c11.08,0,11.23,5,11.28,6.58a5.54,5.54,0,0,1-3.17,5.27A17.06,17.06,0,0,1,134,33.21H112.77v4.26h21.36c6.07,0,8.62,1.13,9.7,2.09s1.7,2.84,1.7,5.53a23.65,23.65,0,0,0,1.24,8.27l.37,1h5.62l-1.38-2.28C150.48,50.58,150,48.3,150,45.27Z" />
              <rect x="157.65" y="14.92" width="35.88" height="4.26" />
              <polygon points="157.65 49.87 157.65 54.19 193.83 54.19 193.83 49.87 160.65 49.87 157.65 49.87" />
              <polygon points="208.39 15.09 203.37 15.09 205.27 18.65 213.53 34.01 190.9 34.01 190.9 34.02 167.2 33.69 167.2 38.01 188.57 38.34 188.56 38.36 215.87 38.36 217.27 40.95 224.48 54.27 229.7 54.27 208.39 15.09" />
              <path d="M18.84,33.63a13.31,13.31,0,0,1,4.56-9.51c3.12-2.78,7.53-4.2,13.13-4.2s10,1.44,13.27,4.28a13.13,13.13,0,0,1,4.47,9.42h4.93A17.82,17.82,0,0,0,53.28,20.9c-4.17-3.78-9.81-5.69-16.78-5.69S23.83,17.12,19.66,20.9a17.82,17.82,0,0,0-5.91,12.73Z" />
              <path d="M54,38a12.68,12.68,0,0,1-4.21,7.25c-3.25,2.85-7.72,4.29-13.28,4.29s-10-1.44-13.22-4.29A12.69,12.69,0,0,1,19.1,38H14a17.59,17.59,0,0,0,5.71,10.62c4.17,3.78,9.83,5.69,16.83,5.69s12.61-1.92,16.78-5.7A17.59,17.59,0,0,0,59,38Z" />
            </g>
          </g>
        </svg>
      </Link>
      {/* <span className="header-tagline">
        Life between pen, paper and computer
      </span> */}
    </h1>
    <nav className="header-nav">
      <ul>
        <li>
          <Link className="nav-link" activeClassName="active" to="/blog">
            Articles
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/resources">
            Resources
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/reading">
            Reading List
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" to="/hire">
            About
          </Link>
        </li>
        <li>
          <Button
            primary
            size="large"
            as="a"
            target="_blank"
            href="https://m.me/oprearocks"
          >
            <Icon name="facebook messenger" /> Contact me!
          </Button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
