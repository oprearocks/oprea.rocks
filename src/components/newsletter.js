import React from 'react'
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link'

import './about.scss'

const Newsletter = () => (
  <section className="sidebar-section about">
    <h2 data-drip-attribute="headline" className="section-title separator-below">Newsletter</h2>
    <section className="section-content">
      <p data-drip-attribute="description">Join my newsletter to get the latest things I'm reading or learning about, directly to your inbox.</p>
      <form data-drip-embedded-form="92273073" method="post" action="https://www.getdrip.com/forms/92273073/submissions">
        <div>
          <input type="email" name="fields[email]" placeholder="email@example.com" className="form-field full-width" type="email" />
        </div>
        <button className="button" data-drip-attribute="sign-up-button">Join</button>
      </form>
    </section>
  </section>
)

export default Newsletter
