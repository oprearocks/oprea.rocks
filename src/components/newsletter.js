import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './about.scss'

const propTypes = {
  author: PropTypes.object.isRequired,
}

const Newsletter = () => (
  <section className="sidebar-section about">
    <h2 className="section-title separator-below">Newsletter</h2>
    <section className="section-content">
      <p>Get the latest things I'm interested in, directly to your inbox.</p>
      <form>
        <div>
          <input placeholder="adrian@oprea.rocks" className="form-field full-width" type="email" />
        </div>
        <button className="button">Join</button>
      </form>
    </section>
  </section>
)

Newsletter.propTypes = propTypes

export default Newsletter
